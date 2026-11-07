import fs from 'node:fs';fs.mkdirSync('.build',{recursive:true});fs.mkdirSync('outputs',{recursive:true});
let harness=fs.readFileSync('tests/verify-guide.mjs','utf8').split(' const fixture=')[0];
harness=harness.replaceAll('8766','8774').replaceAll('9255','9264').replaceAll('browser-guide-v12','browser-timeline-v16');
const scenario=String.raw`
 const fixture={schemaVersion:5,completed:['Gold Skulltula:12','Heart Piece:33','Magic Bean:0'],milestones:['Adult access','Bow','Hammer','Hookshot','Ocarina','Bomb Bag','Zelda Lullaby'],age:'',region:'',type:'',status:'remaining',showLocked:true,statusScreen:{open:false,bossHearts:['gohma']}};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:'if(location.search==="?fresh"){localStorage.clear();localStorage.setItem("timeline-save",'+JSON.stringify(JSON.stringify(fixture))+');}window.qaDocument=Date.now()+Math.random();window.AtlasNative={read:()=>localStorage.getItem("timeline-save")||"{}",write:s=>{localStorage.setItem("timeline-save",s);return true},export:s=>{window.lastExport=s},isKeepAwake:()=>localStorage.getItem("awake")==="true",setKeepAwake:v=>{localStorage.setItem("awake",String(v));return true},readPreviousState:()=>"{}"};'});
 const ready=async old=>{for(let i=0;i<150;i++){if(await ev('typeof atlasProgress!=="undefined"&&!!document.getElementById("statusRewards")&&!!document.getElementById("keepAwake")'+(old?'&&qaDocument!=='+old:'')))return;await delay(100);}throw Error('App not ready');};
 const reload=async()=>{const old=await ev('qaDocument');await send('Page.reload');await ready(old);};
 const assert=async(expr,message)=>{if(!await ev(expr))throw Error(message);};
 const clickStage=async(id,index)=>{await ev('Array.from(document.querySelectorAll("[data-stage-check]")).find(e=>e.dataset.stageCheck==='+JSON.stringify(id)+'&&Number(e.dataset.stageIndex)==='+index+').click()');};
 await send('Page.navigate',{url:'http://127.0.0.1:8774/index.html?fresh'});await ready();await ev('window.history.replaceState(null,"","/index.html")');
 await assert('allItems.length===272&&checked.has("Gold Skulltula:12")&&isDone(atlasProgress.byId.get("Heart Piece:33"))&&atlasProgress.prefix(atlasProgress.byId.get("Heart Piece:33"))===2','Legacy save migration');
 await assert('!eligible(atlasProgress.byId.get("Equipment:5"))&&!eligible(atlasProgress.byId.get("Great Fairy:5"))','Premature late-game unlocks');
 await assert('document.querySelectorAll("[data-reward-check]").length===9','Missing story reward controls');
 await assert('inventoryStatusModel().bossHearts===1&&inventoryStatusModel().pieces.found===1&&inventoryStatusModel().hearts===4','Legacy boss heart or partial piece health was lost: '+JSON.stringify(await ev('({saved:inventoryStatusSnapshot(),pieces:inventoryStatusModel().pieces,hearts:inventoryStatusModel().hearts})')));
 await assert('document.querySelector("[data-boss-heart=phantom]").disabled','Boss heart selectable before dungeon reward');
 // Inventory still counts whole hearts, magic and capacities across timelines.
 await ev('atlasProgress.load({schemaVersion:6,completed:allItems.map(e=>e.id),milestones:progress.map(e=>e.milestone).filter(Boolean)});restoreInventoryStatus({open:true,bossHearts:statusBosses.map(b=>b[0])});render()');
 await assert('(()=>{const s=inventoryStatusModel();return s.hearts===20&&s.pieces.found===36&&s.skulls.found===100&&s.magic===2&&s.defense&&document.querySelectorAll(".hud-heart.filled").length===20&&document.querySelectorAll(".status-item.not-found").length===0})()','Full inventory, health or magic regression');
 await ev('save()');await reload();
 await assert('inventoryStatusModel().hearts===20&&inventoryStatusModel().bossHearts===8&&inventoryStatusModel().magic===2','Inventory save/reload');
 await ev('restoreInventoryStatus({open:false,bossHearts:[]})');
 // Include locked must never expose future trade entries.
 await ev('atlasProgress.load({schemaVersion:6,milestones:["Adult access"]});filterState={age:"Adult",region:"",type:"Trade Sequence",status:"all"};showLocked=true;render()');
 await assert('filtered().length===1&&filtered()[0].id==="Trade Sequence:0"&&document.querySelectorAll("[data-check]").length===1','Multiple trade steps in All/Include locked');
 await ev('document.querySelector("[data-check]").click()');
 await assert('filtered().length===1&&filtered()[0].id==="Trade Sequence:1"','Trade did not advance');
 await ev('document.getElementById("undo").click()');await assert('filtered()[0].id==="Trade Sequence:0"','Trade Undo');
 // Both timelines: no parent checkbox, all ordered phase checkboxes inside.
 await ev('atlasProgress.load({schemaVersion:6,milestones:["Adult access","Bomb Bag"],completed:["Event:time-travel"]});filterState={age:"",region:"Hyrule Field",type:"Heart Piece",status:"remaining"};expanded=new Set(["Heart Piece:33"]);render()');
 await assert('(()=>{const row=Array.from(document.querySelectorAll("article")).find(e=>e.dataset.entry==="Heart Piece:33");return !row.querySelector(".head input")&&row.querySelectorAll(".stage-tracker input").length===2&&!row.querySelectorAll(".stage-tracker input")[0].disabled&&row.querySelectorAll(".stage-tracker input")[1].disabled})()','Both-mode phase controls');
 const before=await ev('allItems.filter(isDone).length');
 await clickStage('Heart Piece:33',0);
 await assert('!isDone(atlasProgress.byId.get("Heart Piece:33"))&&atlasProgress.prefix(atlasProgress.byId.get("Heart Piece:33"))===1','Partial route was completed overall');
 if(await ev('allItems.filter(isDone).length')!==before)throw Error('Partial route increased overall count');
 await ev('save()');await reload();
 await assert('atlasProgress.prefix(atlasProgress.byId.get("Heart Piece:33"))===1&&!isDone(atlasProgress.byId.get("Heart Piece:33"))','Partial stage reload');
 await ev('filterState.age="Adult";render()');await assert('!filtered().some(e=>e.id==="Heart Piece:33")','Completed adult preparation still listed as active');
 await ev('filterState.age="Child";render()');
 await assert('filtered().some(e=>e.id==="Heart Piece:33")&&Array.from(document.querySelectorAll("article")).find(e=>e.dataset.entry==="Heart Piece:33").querySelector(".head [data-stage-index]").dataset.stageIndex==="1"','Young filter did not expose the correct stage checkbox');
 await clickStage('Heart Piece:33',1);
 await assert('isDone(atlasProgress.byId.get("Heart Piece:33"))','Final Young phase did not complete item');
 if(await ev('allItems.filter(isDone).length')!==before+1)throw Error('Two phases did not count as exactly one overall check');
 await ev('document.getElementById("undo").click()');await assert('!isDone(atlasProgress.byId.get("Heart Piece:33"))&&atlasProgress.prefix(atlasProgress.byId.get("Heart Piece:33"))===1','Phase Undo did not restore partial state');
 // Three phases, with exact soil linkage and no early Adult return action.
 await ev('atlasProgress.load({schemaVersion:6,milestones:["Adult access","Ocarina","Magic Bean","Hookshot","Bolero of Fire"],completed:["Equipment:2","Event:time-travel"]});filterState={age:"",region:"Death Mountain Crater",type:"Heart Piece",status:"all"};expanded=new Set(["Heart Piece:23"]);render()');
 await assert('(()=>{const row=Array.from(document.querySelectorAll("article")).find(e=>e.dataset.entry==="Heart Piece:23");const inputs=row.querySelectorAll(".stage-tracker input");return inputs.length===3&&inputs[0].checked&&!inputs[1].disabled&&inputs[2].disabled})()','Adult/Young/Adult phase state');
 await ev('filterState.age="Adult";render()');await assert('!filtered().some(e=>e.id==="Heart Piece:23")','Adult return shown before planting');
 await ev('filterState.age="Child";render()');await clickStage('Heart Piece:23',1);
 await assert('hasGuideMilestone("Magic Bean:6")&&!isDone(atlasProgress.byId.get("Heart Piece:23"))','Young phase did not record planting separately');
 await ev('filterState.age="Adult";render()');await clickStage('Heart Piece:23',2);
 await assert('isDone(atlasProgress.byId.get("Heart Piece:23"))','Third phase completion');
 await ev('document.getElementById("export").click()');const backup=JSON.parse(await ev('lastExport'));
 if(backup.version!==6||backup.stages['Heart Piece:23'].done.length!==3)throw Error('Stage backup missing');
 await ev('atlasProgress.load({schemaVersion:6});render();document.getElementById("backup").value='+JSON.stringify(JSON.stringify(backup))+';document.getElementById("restore").click()');
 await assert('isDone(atlasProgress.byId.get("Heart Piece:23"))&&atlasProgress.prefix(atlasProgress.byId.get("Heart Piece:23"))===3','Stage backup restore');
 // Unknown/future age steps stay hidden even with Include locked. Badge count
 // must equal the exact feed for each candidate region under those rules.
 await ev('atlasProgress.load({schemaVersion:6,milestones:["Adult access","Ocarina"]});filterState={age:"Child",region:"Hyrule Field",type:"Heart Piece",status:"remaining"};showLocked=true;render()');
 await assert('!filtered().some(e=>["Heart Piece:33","Heart Piece:34"].includes(e.id))','Young note pickups shown without adult preparation');
 await assert('(()=>{const old=filterState.region;const ok=opts.region.every(([region])=>{filterState.region=region;return regionMatchCount(region)===filtered().length});filterState.region=old;return ok})()','Region badges ignore current phase/filter');
 // Actual current dungeon rewards unlock story gates, and items do not.
 await ev('atlasProgress.load({schemaVersion:6,milestones:["Adult access","Bow","Hookshot","Hammer","Ocarina","Zelda Lullaby","Magic","Longshot","Iron Boots","Nocturne of Shadow"],completed:["Event:forest","Event:fire","Equipment:2","Equipment:3"]});filterState={age:"Adult",region:"Temple of Time",type:"Equipment",status:"all"};render()');
 await assert('Array.from(document.querySelectorAll("[data-check]")).find(e=>e.dataset.check==="Equipment:5").disabled','Light Arrow checkbox is enabled early');
 await ev('guideDatabase.logic.adultDungeonRewards.forEach(id=>atlasProgress.checked.add(id));render()');
 await assert('!Array.from(document.querySelectorAll("[data-check]")).find(e=>e.dataset.check==="Equipment:5").disabled','Light Arrows not unlocked by actual rewards');
 for(const width of [360,412,840]){await send('Emulation.setDeviceMetricsOverride',{width,height:915,deviceScaleFactor:2,mobile:true});await assert('document.documentElement.scrollWidth<=innerWidth','Layout overflow at '+width);}
 await send('Emulation.setDeviceMetricsOverride',{width:412,height:915,deviceScaleFactor:2,mobile:true});
 await ev('atlasProgress.load({schemaVersion:6,milestones:["Adult access","Ocarina","Magic Bean","Hookshot","Bolero of Fire"],completed:["Equipment:2","Event:time-travel"]});filterState={age:"",region:"Death Mountain Crater",type:"Heart Piece",status:"all"};expanded=new Set(["Heart Piece:23"]);render()');
 await ev('Promise.all(Array.from(document.querySelectorAll("#items img")).map(i=>i.decode()))');
 const clip=await ev('(()=>{const r=Array.from(document.querySelectorAll("article")).find(e=>e.dataset.entry==="Heart Piece:23").getBoundingClientRect();return {x:r.left+scrollX,y:r.top+scrollY,width:r.width,height:r.height,scale:1}})()');
 const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync('outputs/Timeline-stages-preview.png',Buffer.from(shot.data,'base64'));
 console.log('PASS: legacy progress, one trade frontier, disabled future controls, two- and three-stage timeline routes, per-age filtering, one overall completion, exact bean linkage, Undo, reload, JSON round-trip, medallion gates, filter-aware badges and 360/412/840px layouts.');
}finally{ws?.close();chrome.kill();server.close();}
`;
fs.writeFileSync('.build/timeline-ui-run.mjs',harness+scenario);
await import('../.build/timeline-ui-run.mjs');
