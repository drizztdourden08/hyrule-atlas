import fs from 'node:fs';fs.mkdirSync('.build',{recursive:true});fs.mkdirSync('outputs',{recursive:true});
let harness=fs.readFileSync('tests/verify-guide.mjs','utf8').split(' const fixture=')[0];
harness=harness.replaceAll('8766','8770').replaceAll('9255','9260').replaceAll('browser-guide-v12','browser-status-v14');
harness=harness.replace("if(m.method==='Runtime.exceptionThrown')console.log('PAGE ERROR',JSON.stringify(m.params));", "if(m.method==='Runtime.exceptionThrown')throw Error('PAGE ERROR '+JSON.stringify(m.params));");
const scenario=String.raw`
 const fixture={completed:['Gold Skulltula:0','Gold Skulltula:12','Gold Skulltula:75','Heart Piece:0','Heart Piece:1','Heart Piece:2','Heart Piece:3','Heart Piece:4','Bottle:0','Upgrade:0','Upgrade:10','Great Fairy:0','Side Quest:1'],milestones:['Kokiri Sword','Deku Shield','Deku Tree cleared','Slingshot','Ocarina','Hookshot','Zelda Lullaby'],region:'Hyrule Castle',age:'Child',type:'Gold Skulltula',status:'all',showLocked:true,history:[{id:'Upgrade:0',wasDone:false}]};
 const ready=async()=>{for(let i=0;i<150;i++){if(await ev('typeof inventoryStatusModel==="function"&&!!document.getElementById("inventoryStatus")&&!!document.getElementById("keepAwake")'))return;await delay(100);}throw Error('Page not ready: '+await ev('document.documentElement.outerHTML.slice(0,500)'));};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:
  'if(location.search==="?fresh"){localStorage.clear();localStorage.setItem("status-qa-progress",'+JSON.stringify(JSON.stringify(fixture))+');}window.AtlasNative={read:()=>localStorage.getItem("status-qa-progress")||'+JSON.stringify(JSON.stringify(fixture))+',write:s=>{localStorage.setItem("status-qa-progress",s);return true},export:s=>{window.lastExport=s},isKeepAwake:()=>localStorage.getItem("status-qa-awake")==="true",setKeepAwake:v=>{localStorage.setItem("status-qa-awake",String(v));return true}};'
 });
 await send('Page.navigate',{url:'http://127.0.0.1:8770/index.html?fresh'});await ready();
 await ev('window.history.replaceState(null,"","/index.html")');
 const assert=async(expression,message)=>{if(!await ev(expression))throw Error(message);};
 await assert('inventoryStatusModel().hearts===4&&inventoryStatusModel().skulls.found===2&&inventoryStatusModel().magic===1','Legacy totals or retired token exclusion');
 await assert('checked.has("Gold Skulltula:12")&&history.length===1&&inventoryStatusSnapshot().bossHearts.length===0','Legacy progress or history was changed');
 await assert('document.querySelectorAll(".hud-heart.filled").length===4&&document.querySelectorAll(".status-item").length===35','HUD rendering');
 await assert('inventoryStatusModel().capacities[0].value===40','First seed-bag prize');
 await ev('document.getElementById("bossHeartPicker").open=true;document.querySelector("[data-boss-heart=gohma]").click()');
 await assert('inventoryStatusModel().hearts===5&&history.at(-1).id==="bossHeart:gohma"','Boss pickup or undo history');
 await ev('document.getElementById("undo").click()');
 await assert('inventoryStatusModel().hearts===4&&!document.querySelector("[data-boss-heart=gohma]").checked','Boss pickup undo');
 await ev('document.querySelector("[data-boss-heart=gohma]").click();document.getElementById("inventoryStatus").open=false');await delay(100);
 await send('Page.reload');await delay(300);await ready();
 await assert('inventoryStatusModel().hearts===5&&!document.getElementById("inventoryStatus").open','Boss pickup or collapse was not remembered');
 await ev('document.getElementById("inventoryStatus").open=true;document.getElementById("keepAwake").click();document.getElementById("export").click()');
 const backup=JSON.parse(await ev('lastExport'));
 if(backup.version!==4||backup.statusScreen.bossHearts.join('|')!=='gohma'||!backup.completed.includes('Gold Skulltula:12'))throw Error('Backup lost status or legacy completion');
 await ev('checked.add("Upgrade:1");checked.add("Great Fairy:3");checked.add("Great Fairy:5");obtained.add("Longshot");render()');
 await assert('inventoryStatusModel().magic===2&&inventoryStatusModel().capacities[0].value===50&&inventoryStatusModel().items.some(i=>i.label==="Longshot"&&i.found)&&document.querySelectorAll(".hud-heart.filled.defended").length===5','Upgrade tiers or double defense');
 const metric=await ev('({bar:document.querySelector(".hud-magic-track").getBoundingClientRect().width,space:document.querySelector(".hud-magic-space").getBoundingClientRect().width})');if(Math.abs(metric.bar-metric.space)>1)throw Error('Double magic width');
 await ev('filterState={age:"Adult",region:"Forest Temple",type:"Bottle",status:"remaining"};render()');
 await assert('inventoryStatusModel().skulls.found===2&&inventoryStatusModel().pieces.found===5','Inventory was affected by filters');
 // A real completion event must refresh the HUD; undo must refresh it again.
 await ev('filterState={age:"",region:"",type:"Heart Piece",status:"all"};showLocked=true;render();Array.from(document.querySelectorAll("[data-check]")).find(e=>e.dataset.check==="Heart Piece:5").click()');
 await assert('inventoryStatusModel().pieces.found===6&&document.querySelector("#statusCollections").textContent.includes("6 / 36")','Completion did not update status');
 await ev('document.getElementById("undo").click()');
 await assert('inventoryStatusModel().pieces.found===5','Completion undo did not update status');
 // A new backup restores boss picks; an older backup remains importable.
 await ev('document.getElementById("backup").value='+JSON.stringify(JSON.stringify(backup))+';document.getElementById("restore").click()');
 await assert('inventoryStatusModel().hearts===5&&inventoryStatusModel().magic===1','New backup restore');
 await ev('document.getElementById("backup").value=JSON.stringify({version:3,completed:["Heart Piece:0"],milestones:["Kokiri Sword"]});document.getElementById("restore").click()');
 await assert('inventoryStatusModel().hearts===4&&inventoryStatusModel().pieces.found===1','Older backup restore');
 await ev('window.confirm=()=>true;document.getElementById("reset").click()');
 await assert('inventoryStatusModel().hearts===3&&inventoryStatusModel().bossHearts===0&&inventoryStatusModel().magic===0&&inventoryStatusModel().skulls.found===0&&AtlasNative.isKeepAwake()','Reset or keep-awake setting isolation');
 await send('Page.reload');await delay(300);await ready();await assert('inventoryStatusModel().hearts===3&&inventoryStatusModel().bossHearts===0','Reset did not persist');
 // Full-completion ceiling, invalid/duplicate boss picks, and asset coverage.
 await ev('checked=new Set(entries.map(e=>e.id));obtained=new Set(milestones.map(m=>m[0]));restoreInventoryStatus({open:true,bossHearts:[...statusBosses.map(b=>b[0]),"gohma","invalid"]});render()');
 await assert('inventoryStatusModel().hearts===20&&inventoryStatusModel().bossHearts===8&&inventoryStatusModel().skulls.found===100&&inventoryStatusModel().pieces.found===36&&inventoryStatusModel().magic===2&&inventoryStatusModel().collections.find(c=>c.label==="Upgrades").found===17','Full-completion totals or invalid boss input');
 for(const asset of await ev('inventoryStatusModel().items.concat(inventoryStatusModel().collections,inventoryStatusModel().capacities).map(i=>i.art)'))if(!fs.existsSync(path.join(root,'art',asset+'.png')))throw Error('Missing icon '+asset);
 for(const width of [360,412,840]){
  await send('Emulation.setDeviceMetricsOverride',{width,height:915,deviceScaleFactor:2,mobile:true});await delay(100);
  await assert('document.documentElement.scrollWidth<=innerWidth','Viewport overflow at '+width);
 }
 await send('Emulation.setDeviceMetricsOverride',{width:412,height:915,deviceScaleFactor:2,mobile:true});
 // Representative partial inventory for the visual preview.
 await ev('checked=new Set('+JSON.stringify([...fixture.completed,'Upgrade:1','Upgrade:2','Upgrade:4','Upgrade:14','Great Fairy:2','Great Fairy:3','Side Quest:10'])+');obtained=new Set('+JSON.stringify([...fixture.milestones,'Bow','Bomb Bag','Boomerang','Iron Boots','Song of Storms','Song of Time','Adult access'])+');restoreInventoryStatus({open:true,bossHearts:["gohma","dodongo","barinade"]});filterState={age:"",region:"",type:"",status:"remaining"};render();window.scrollTo(0,0)');await delay(300);
 await ev('Promise.all(Array.from(document.querySelectorAll("#inventoryStatus img")).map(i=>i.decode()))');
 await assert('Array.from(document.querySelectorAll("#inventoryStatus img")).every(i=>i.complete&&i.naturalWidth>0)','Status art failed to load');
 const clip=await ev('(()=>{const r=document.getElementById("inventoryStatus").getBoundingClientRect();return {x:r.left+scrollX,y:r.top+scrollY,width:r.width,height:r.height,scale:1}})()');
 const image=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync('outputs/Status-inventory-preview.png',Buffer.from(image.data,'base64'));
 console.log('PASS: legacy progress, retired token excluded, 3–20 hearts, boss pickup/undo, normal/double magic, inventory tiers, filter isolation, checkbox updates, saved collapse, backup round-trip, old import, reset, keep-awake isolation, all art and 360/412/840px layouts.');
}finally{ws?.close();chrome.kill();server.close();}
`;
fs.writeFileSync('.build/verify-status-run.mjs',harness+scenario);
await import('../.build/verify-status-run.mjs');
