# Hyrule Atlas

<img src="android/res/mipmap-xxxhdpi/ic_launcher.png" width="80" height="80" alt="Hyrule Atlas icon">

An offline Android completion tracker and guide with an illustrated inventory, local progress storage, and filters for timeline, item type and region. This is an unofficial fan companion with original generated artwork.

## Download

Install the APK from the [v1.5 release](https://github.com/drizztdourden08/hyrule-atlas/releases/tag/v1.5). Android 11 or newer is required.

Install updates over the existing app to retain local progress. The package is `com.hyruleatlas.local`; updates must use the same signing key. JSON export/import provides a portable progress backup.

## Features

- 256 active checklist entries, including 36 Heart Pieces and 100 Gold Skulltulas.
- Numbered guides with equipment requirements, location context and source links.
- Separate frog rewards; sequential trades and masks; exact bean-planting prerequisites.
- Warning tags for routes requiring both Young and Adult Link.
- Region badges that follow all active filters and a collapsible summary of remaining checks.
- Illustrated inventory with hearts, magic capacity, equipment and collection totals.
- Persistent local saves, Undo, backup export/import and an optional keep-screen-awake switch.
- Bundled icons and guide data; the app needs no network permission. Source links open in the phone's browser.

<img src="docs/images/regions.png" width="330" alt="Region picker with filter-aware count badges">

## Project layout

| Path | Purpose |
|---|---|
| `android/src/` | Native Activity, local storage bridge, export and keep-screen-awake support |
| `android/assets/` | Bundled HTML, JavaScript, styles, guide database and generated icons |
| `android/res/` | Android launcher icon resources |
| `authoring/` | Editable guide records, source index and guide-generation scripts |
| `data/guide-database.json` | Readable generated guide database |
| `tests/` | Headless browser checks for filters, dependencies, saves, inventory and settings |
| `docs/` | Checklist audit, coverage crosswalk and previews |
| `build.ps1` | Windows Android SDK build and signing script |

## Edit and validate

Node.js 22 or newer is required. There are no npm dependencies to install.

```powershell
npm run guide:build
npm test
npm run test:ui
```

Edit the guide records in `authoring/guide-*.mjs` and editorial adjustments in `authoring/refine-guide.mjs`, then regenerate. Preserve stable record IDs and milestone keys so saved checkmarks keep their meaning. Direct UI edits belong in `android/assets/`; changes to the inline base HTML also belong in `authoring/pre-guide-index.html`.

The UI checks use a local HTTP server, synthetic test saves and headless Chrome. On Windows they use Chrome's standard installation path; set `CHROME_PATH` if it is installed elsewhere. Generated test profiles, screenshots and build outputs are ignored by Git.

## Build the APK

Use PowerShell 7, JDK 21, Android SDK platform 36, platform-tools, and build-tools 36.0.0.

The existing signing keystore stays outside this repository. Configure it in your current shell:

```powershell
$env:ANDROID_SDK_ROOT = 'C:\Android'
$env:ATLAS_KEYSTORE_PATH = 'C:\private\hyrule-atlas-signing.p12'
$env:ATLAS_KEYSTORE_PASSWORD = Read-Host 'Keystore password' -MaskInput
.\build.ps1
```

`JAVA_HOME` is used when set; otherwise the script finds `javac.exe` on `PATH`. The key alias defaults to `atlas` and can be changed with `ATLAS_KEY_ALIAS`. The signed, verified APK is written to `outputs/Hyrule-Atlas.apk`.

To install over an existing copy:

```powershell
adb install -r outputs/Hyrule-Atlas.apk
```

## Guide coverage

See the [v1.5 checklist audit](docs/Checklist-audit-notes.md) and [36-piece coverage crosswalk](docs/Heart-piece-coverage.csv). Source references are also linked inside each guide entry. The guide is based on published remake walkthroughs; existing source disagreements remain documented in the affected entries.
