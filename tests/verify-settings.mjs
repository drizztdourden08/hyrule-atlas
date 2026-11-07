import fs from 'node:fs';fs.mkdirSync('.build',{recursive:true});fs.mkdirSync('outputs',{recursive:true});
let harness=fs.readFileSync('tests/verify-guide.mjs','utf8').split(' const fixture=')[0];
harness=harness.replaceAll('8766','8768').replaceAll('9255','9258').replaceAll('browser-guide-v12','browser-settings-v13');
const scenario=String.raw`
 const fixture={completed:['Gold Skulltula:75','Bottle:0'],milestones:['Kokiri Sword'],age:'Child',region:'Hyrule Castle',type:'Gold Skulltula',status:'all',showLocked:true};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:
  'window.AtlasNative={read:()=>localStorage.getItem("settings-qa-progress")||'+JSON.stringify(JSON.stringify(fixture))+',write:s=>{localStorage.setItem("settings-qa-progress",s);return true},export:()=>{},isKeepAwake:()=>localStorage.getItem("settings-qa-awake")==="true",setKeepAwake:v=>{if(window.rejectSetting)return false;localStorage.setItem("settings-qa-awake",String(v));return true}};'
 });
 await send('Page.navigate',{url:'http://127.0.0.1:8768/index.html'});await delay(600);
 await ev('localStorage.clear()');await send('Page.reload');await delay(500);
 const read=()=>ev('({checked:document.getElementById("keepAwake").checked,status:document.getElementById("keepAwakeStatus").textContent,saved:AtlasNative.isKeepAwake(),completed:[...checked],overflow:document.documentElement.scrollWidth>innerWidth})');
 let state=await read();if(state.checked||state.saved||!state.status.startsWith('Off')||state.overflow)throw Error('Default state or layout incorrect');
 await ev('document.getElementById("keepAwake").click()');state=await read();if(!state.checked||!state.saved||!state.status.startsWith('On'))throw Error('Enable failed');
 await send('Page.reload');await delay(400);state=await read();if(!state.checked||!state.saved)throw Error('Enable was not remembered');
 await ev('window.rejectSetting=true;document.getElementById("keepAwake").click()');state=await read();if(!state.checked||!state.saved||!state.status.includes('Could not save'))throw Error('Save failure did not restore the prior setting');
 await ev('window.rejectSetting=false;document.getElementById("keepAwake").click()');await send('Page.reload');await delay(400);state=await read();
 if(state.checked||state.saved||state.completed.join('|')!==fixture.completed.join('|'))throw Error('Disable or progress preservation failed');
 await ev('document.getElementById("keepAwake").click()');
 await send('Emulation.setDeviceMetricsOverride',{width:360,height:800,deviceScaleFactor:2,mobile:true});await delay(100);
 if(await ev('document.documentElement.scrollWidth>innerWidth'))throw Error('Narrow-phone overflow');
 const image=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('.build/keep-awake-preview.png',Buffer.from(image.data,'base64'));
 console.log('PASS: optional default off; enable/disable persist after reload; save failure restores setting; progress preserved; phone layouts fit.');
}finally{ws?.close();chrome.kill();server.close();}
`;
await fs.promises.writeFile('.build/verify-settings-run.mjs',harness+scenario);
await import('../.build/verify-settings-run.mjs');
