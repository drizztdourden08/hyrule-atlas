[CmdletBinding()]
param(
    [string]$SdkPath = $(if ($env:ANDROID_SDK_ROOT) { $env:ANDROID_SDK_ROOT } elseif ($env:ANDROID_HOME) { $env:ANDROID_HOME } else { 'C:/Android' }),
    [string]$JavaHome = $env:JAVA_HOME,
    [string]$BuildToolsVersion = '36.0.0',
    [string]$KeyStorePath = $env:ATLAS_KEYSTORE_PATH,
    [string]$KeyAlias = $(if ($env:ATLAS_KEY_ALIAS) { $env:ATLAS_KEY_ALIAS } else { 'atlas' })
)
$ErrorActionPreference = 'Stop'
if (!$JavaHome) {
    $javac = (Get-Command javac.exe -ErrorAction Stop).Source
    $JavaHome = Split-Path (Split-Path $javac -Parent) -Parent
}
if (!$KeyStorePath -or !(Test-Path -LiteralPath $KeyStorePath -PathType Leaf)) {
    throw 'Set ATLAS_KEYSTORE_PATH to the existing private signing keystore.'
}
if (!$env:ATLAS_KEYSTORE_PASSWORD) {
    throw 'Set ATLAS_KEYSTORE_PASSWORD in this shell before building.'
}
$app = Join-Path $PSScriptRoot 'android'
$build = Join-Path $PSScriptRoot '.build/android'
$output = Join-Path $PSScriptRoot 'outputs'
$bt = Join-Path $SdkPath "build-tools/$BuildToolsVersion"
$platform = Join-Path $SdkPath 'platforms/android-36/android.jar'
$env:JAVA_HOME = $JavaHome
foreach ($required in @("$bt/aapt2.exe", "$bt/d8.bat", "$JavaHome/bin/javac.exe", $platform)) {
    if (!(Test-Path -LiteralPath $required -PathType Leaf)) { throw "Missing build dependency: $required" }
}
New-Item -ItemType Directory -Force "$build/classes", "$build/dex", $output | Out-Null
function Check { if ($LASTEXITCODE -ne 0) { throw "Build command failed: $LASTEXITCODE" } }
& "$bt/aapt2.exe" compile --dir "$app/res" -o "$build/resources.zip"; Check
& "$bt/aapt2.exe" link -o "$build/base.apk" -I $platform --manifest "$app/AndroidManifest.xml" -A "$app/assets" "$build/resources.zip"; Check
& "$JavaHome/bin/javac.exe" -source 8 -target 8 -classpath $platform -d "$build/classes" "$app/src/com/hyruleatlas/local/MainActivity.java"; Check
$classes = @(Get-ChildItem "$build/classes" -Filter *.class -Recurse | ForEach-Object FullName)
& "$bt/d8.bat" --lib $platform --min-api 26 --output "$build/dex" @classes; Check
Copy-Item "$build/base.apk" "$build/unsigned.apk" -Force
Push-Location "$build/dex"
try { & "$JavaHome/bin/jar.exe" uf "$build/unsigned.apk" classes.dex; Check } finally { Pop-Location }
# Windows aapt2 can retain backslashes in nested asset ZIP entries. Android's
# AssetManager resolves these paths with forward slashes.
$zip = [IO.Compression.ZipFile]::Open("$build/unsigned.apk", [IO.Compression.ZipArchiveMode]::Update)
try {
    foreach ($entry in @($zip.Entries | Where-Object { $_.FullName.Contains('\') })) {
        $name = $entry.FullName.Replace('\', '/')
        $memory = [IO.MemoryStream]::new()
        $inputStream = $entry.Open(); $inputStream.CopyTo($memory); $inputStream.Dispose()
        $entry.Delete()
        $replacement = $zip.CreateEntry($name)
        $outputStream = $replacement.Open(); $memory.Position = 0; $memory.CopyTo($outputStream)
        $outputStream.Dispose(); $memory.Dispose()
    }
} finally { $zip.Dispose() }
& "$bt/zipalign.exe" -f 4 "$build/unsigned.apk" "$build/aligned.apk"; Check
& "$bt/apksigner.bat" sign --ks $KeyStorePath --ks-key-alias $KeyAlias --ks-pass env:ATLAS_KEYSTORE_PASSWORD --out "$output/Hyrule-Atlas.apk" "$build/aligned.apk"; Check
& "$bt/apksigner.bat" verify "$output/Hyrule-Atlas.apk"; Check
Write-Output "Built and verified $output/Hyrule-Atlas.apk"
