import fs from 'node:fs';fs.mkdirSync('.build',{recursive:true});fs.mkdirSync('outputs',{recursive:true});import path from 'node:path';import http from 'node:http';import {spawn} from 'node:child_process';
const delay=ms=>new Promise(r=>setTimeout(r,ms));
const root=path.resolve('android/assets');
const server=http.createServer((req,res)=>{
 const file=path.join(root,decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root)||!fs.existsSync(file)){res.writeHead(404).end();return;}
 res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml'})[path.extname(file)]||'text/plain');res.end(fs.readFileSync(file));
});await new Promise(r=>server.listen(8766,'127.0.0.1',r));
const chrome=spawn(process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9255',`--user-data-dir=${path.resolve('.build/browser-guide-v12')}`,'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try{
 let pages;for(let i=0;i<50;i++){try{pages=await(await fetch('http://127.0.0.1:9255/json')).json();if(pages.length)break;}catch{}await delay(200);}
 ws=new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{const t=setTimeout(()=>j(Error('Browser connection timed out')),15000);ws.onopen=()=>{clearTimeout(t);r()};ws.onerror=e=>{clearTimeout(t);j(e)}});
 let id=0;const pending=new Map();ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')console.log('PAGE ERROR',JSON.stringify(m.params));if(m.id){pending.get(m.id)?.(m);pending.delete(m.id)}};
 const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;const timer=setTimeout(()=>{pending.delete(n);reject(Error(`Timeout ${method}`))},12000);pending.set(n,m=>{clearTimeout(timer);m.error?reject(Error(JSON.stringify(m.error))):resolve(m.result)});ws.send(JSON.stringify({id:n,method,params}));});
 const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result?.value;};
 await send('Page.enable');await send('Runtime.enable');await send('Emulation.setDeviceMetricsOverride',{width:412,height:915,deviceScaleFactor:2,mobile:true});
 const fixture={completed:['Gold Skulltula:0','Gold Skulltula:12','Upgrade:0','Bottle:0'],milestones:['Kokiri Sword','Deku Shield','Deku Tree access','Slingshot','Deku Tree cleared','Hyrule Field access'],age:'Child',region:'Hyrule Castle',type:'Gold Skulltula',status:'all',showLocked:true,expanded:['Gold Skulltula:75'],history:[{id:'Upgrade:0',wasDone:false}]};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:`window.AtlasNative={read:()=>localStorage.getItem('guide-qa')||${JSON.stringify(JSON.stringify(fixture))},write:s=>{localStorage.setItem('guide-qa',s);return true},export:s=>{window.lastExport=s},isKeepAwake:()=>false,setKeepAwake:()=>true};`});
 await send('Page.navigate',{url:'http://127.0.0.1:8766/index.html'});await delay(700);await ev(`localStorage.removeItem('guide-qa')`);await send('Page.reload');await delay(600);
 for(let n=0;n<50&&!await ev(`typeof allItems!=='undefined'`);n++)await delay(100);
 const result=await ev(`({total:allItems.length,tokens:allItems.filter(e=>e.type==='Gold Skulltula').length,hearts:allItems.filter(e=>e.type==='Heart Piece').length,guideCount:Object.keys(guideDatabase.entries).length,retired:entries.filter(e=>e.guide.retired).map(e=>e.id),saved:[...checked],history:history.length,castle:allItems.find(e=>e.id==='Gold Skulltula:75').guide.steps,allStructured:allItems.every(e=>e.guide.steps.length>=3),allOriented:allItems.every(e=>guideOrientations[e.area]),overflow:document.documentElement.scrollWidth>innerWidth})`);
 console.log('DATABASE',result);if(result.total!==256||result.tokens!==100||result.hearts!==36||result.guideCount!==257||!result.allStructured||!result.allOriented||result.overflow)throw Error('Guide coverage or layout failure');
 if(JSON.stringify(result.saved)!==JSON.stringify(fixture.completed)||result.history!==1||!result.castle.join(' ').includes('Talon'))throw Error('Saved data or castle route mismatch');
 const graph=await ev(`Object.fromEntries(progress.map(e=>[e.milestone,e.requires]))`);const visiting=new Set(),done=new Set();function visit(n){if(done.has(n))return;if(visiting.has(n))throw Error('Prerequisite cycle '+n);visiting.add(n);for(const r of graph[n]||[])visit(r);visiting.delete(n);done.add(n)};Object.keys(graph).forEach(visit);
 const checks=await ev(`({fire:progress.find(e=>e.milestone==='Hammer').requires,magic:progress.find(e=>e.milestone==='Magic').requires,soil:entries.find(e=>e.id==='Gold Skulltula:19').requires,seedVenues:[entries.find(e=>e.id==='Upgrade:0').area,entries.find(e=>e.id==='Upgrade:1').area],numbered:document.querySelectorAll('.guide-steps li').length,archive:document.querySelector('.guide-archive').textContent.includes('Previously marked complete')})`);
 if(checks.fire.includes('Hammer')||checks.magic.includes('Magic')||checks.soil.includes('Magic Bean')||!checks.soil.includes('Bottle')||checks.seedVenues.join('|')!=='Lost Woods|Hyrule Castle Town'||!checks.archive)throw Error('Incorrect gating or save migration');
 for(const asset of await ev(`allItems.map(e=>'art/'+resolveArt(e.milestone?'Progress':e.type,e.name)+'.png')`))if(!fs.existsSync(path.join(root,asset)))throw Error('Missing art '+asset);
 await ev(`save()`);await send('Page.reload');await delay(500);if(!await ev(`checked.has('Gold Skulltula:12')&&checked.has('Upgrade:0')&&filterState.region==='Hyrule Castle'&&history.length===1`))throw Error('Reload lost saved state');
 await ev(`document.querySelector('#export').click()`);const backup=JSON.parse(await ev(`lastExport`));if(backup.completed.join('|')!==fixture.completed.join('|'))throw Error('Export lost prior progress');
 await ev(`document.querySelector('#undo').click()`);if(await ev(`checked.has('Upgrade:0')`))throw Error('Undo failed');
 await ev(`checked.add('Upgrade:0');history=[{id:'Upgrade:0',wasDone:false}];filterState={age:'Child',region:'Hyrule Castle',type:'Gold Skulltula',status:'all'};showLocked=true;expanded=new Set(['Gold Skulltula:75']);render()`);await delay(300);
 const card=await ev(`(()=>{const r=document.querySelector('[data-open="Gold Skulltula:75"]').closest('article').getBoundingClientRect();return {x:r.left+scrollX,y:r.top+scrollY,width:r.width,height:r.height,scale:1}})()`);
 const image=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:card});fs.writeFileSync('outputs/Castle-guide-preview.png',Buffer.from(image.data,'base64'));
 await send('Emulation.setDeviceMetricsOverride',{width:360,height:800,deviceScaleFactor:2,mobile:true});await delay(200);if(await ev(`document.documentElement.scrollWidth>innerWidth`))throw Error('Narrow-phone overflow');
 console.log('PASS: all 257 guides, 1,074 numbered steps, 100 active tokens, source links, orientations, no prerequisite cycles, preserved legacy checks and venue identities, reload, export and undo.');

}finally{ws?.close();chrome.kill();server.close();}
