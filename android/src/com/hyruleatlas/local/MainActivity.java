package com.hyruleatlas.local;

import android.app.*;
import android.os.*;
import android.content.*;
import android.graphics.Color;
import android.webkit.*;
import android.view.*;
import android.widget.Toast;
import java.io.*;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;

public class MainActivity extends Activity {
    private WebView web;
    private SharedPreferences store;
    private String pendingExport;
    private boolean activityVisible;
    private void applyKeepAwake() {
        if (activityVisible && store.getBoolean("keepScreenAwake", false)) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        } else {
            getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        }
    }
    public class LocalStore {
        @JavascriptInterface public boolean isKeepAwake() { return store.getBoolean("keepScreenAwake", false); }
        @JavascriptInterface public boolean setKeepAwake(boolean enabled) {
            if (!store.edit().putBoolean("keepScreenAwake", enabled).commit()) return false;
            runOnUiThread(() -> applyKeepAwake());
            return true;
        }
        @JavascriptInterface public String read() { return store.getString("state", "{}"); }
        @JavascriptInterface public boolean write(String json) {
            try { new JSONObject(json); return store.edit().putString("state", json).commit(); }
            catch (Exception e) { return false; }
        }
        @JavascriptInterface public void export(String json) {
            runOnUiThread(() -> {
                pendingExport = json;
                Intent i = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("application/json");
                i.putExtra(Intent.EXTRA_TITLE, "hyrule-atlas-backup.json");
                startActivityForResult(i, 7);
            });
        }
    }
    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        store = getSharedPreferences("atlas", MODE_PRIVATE);
        if (state != null) pendingExport = state.getString("export");
        getWindow().setStatusBarColor(Color.rgb(16,13,9));
        getWindow().setNavigationBarColor(Color.rgb(16,13,9));
        android.widget.FrameLayout root = new android.widget.FrameLayout(this);
        root.setBackgroundColor(Color.rgb(16,13,9));
        root.setOnApplyWindowInsetsListener((v, insets) -> {
            android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
            v.setPadding(bars.left,bars.top,bars.right,bars.bottom); return insets;
        });
        web = new WebView(this);
        root.addView(web); setContentView(root);
        web.setBackgroundColor(Color.rgb(16,13,9));
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        web.getSettings().setAllowFileAccess(false);
        web.getSettings().setAllowContentAccess(false);
        web.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        WebView.setWebContentsDebuggingEnabled(false);
        web.addJavascriptInterface(new LocalStore(), "AtlasNative");
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest req) {
                android.net.Uri uri=req.getUrl();
                if("https".equals(uri.getScheme()) && !"appassets.androidplatform.net".equals(uri.getHost())) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW,uri)); }
                    catch(Exception e) { Toast.makeText(MainActivity.this,"No browser available to open this guide",Toast.LENGTH_SHORT).show(); }
                }
                return true;
            }
            @Override public WebResourceResponse shouldInterceptRequest(WebView v, WebResourceRequest req) {
                android.net.Uri uri = req.getUrl();
                if ("https".equals(uri.getScheme()) && "appassets.androidplatform.net".equals(uri.getHost())) {
                    String path = uri.getPath().replaceFirst("^/", "");
                    if (!path.contains("..")) try {
                        String mime = path.endsWith(".png") ? "image/png" : path.endsWith(".js") ? "application/javascript" : path.endsWith(".css") ? "text/css" : path.endsWith(".svg") ? "image/svg+xml" : "text/html";
                        return new WebResourceResponse(mime, path.endsWith(".png") ? null : "UTF-8", getAssets().open(path));
                    } catch (IOException ignored) {}
                }
                return new WebResourceResponse("text/plain", "UTF-8", 404, "Not found", java.util.Collections.emptyMap(), new ByteArrayInputStream(new byte[0]));
            }
        });
        web.loadUrl("https://appassets.androidplatform.net/index.html");
    }
    @Override protected void onSaveInstanceState(Bundle b) { super.onSaveInstanceState(b); b.putString("export",pendingExport); }
    @Override protected void onResume() {
        super.onResume(); activityVisible=true; applyKeepAwake();
    }
    @Override protected void onStop() {
        activityVisible=false; applyKeepAwake(); super.onStop();
    }
    @Override protected void onActivityResult(int request, int result, Intent data) {
        super.onActivityResult(request,result,data);
        if (request == 7 && result == RESULT_OK && data != null && pendingExport != null) {
            try (OutputStream out = getContentResolver().openOutputStream(data.getData())) {
                out.write(pendingExport.getBytes(StandardCharsets.UTF_8));
                Toast.makeText(this,"Backup exported",Toast.LENGTH_SHORT).show();
            } catch (Exception e) { Toast.makeText(this,"Could not export backup",Toast.LENGTH_LONG).show(); }
        }
        pendingExport = null;
    }
    @Override public void onBackPressed() {
        web.evaluateJavascript("(()=>{const p=document.getElementById('regionPop');if(p&&p.matches(':popover-open')){p.hidePopover();return true;}if(document.querySelector('.pop.shown')){closeFilterPops();return true;}document.activeElement&&document.activeElement.blur();return false;})()", result -> {if(!"true".equals(result))moveTaskToBack(true);});
    }
    @Override protected void onDestroy() { if(web != null) web.destroy(); super.onDestroy(); }
}
