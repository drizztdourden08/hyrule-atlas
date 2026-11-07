import fs from 'node:fs';fs.mkdirSync('.build',{recursive:true});fs.mkdirSync('outputs',{recursive:true});
let harness=fs.readFileSync('tests/verify-guide.mjs','utf8').split(' const fixture=')[0];
harness=harness.replaceAll('8766','8772').replaceAll('9255','9262').replaceAll('browser-guide-v12','browser-audit-v15');
const scenario=String.raw`
 const fixture={completed:['Gold Skulltula:0','Gold Skulltula:12','Upgrade:0','Magic Bean:0'],milestones:['Kokiri Sword','Deku Shield','Deku Tree access','Deku Tree cleared','Hyrule Field access','Ocarina'],age:'Child',region:'Market',type:'Magic Bean',status:'remaining',showLocked:false,statusScreen:{open:false,bossHearts:['gohma']},history:[{id:'Upgrade:0',wasDone:false}]};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:'if(location.search==="?fresh"){localStorage.clear();localStorage.setItem("audit-save",'+JSON.stringify(JSON.stringify(fixture))+');}window.qaAuditDocument=Date.now()+Math.random();window.AtlasNative={read:()=>localStorage.getItem("audit-save")||"{}",write:s=>{localStorage.setItem("audit-save",s);return true},export:s=>{window.lastExport=s},isKeepAwake:()=>false,setKeepAwake:()=>true};'});
 const ready=async(oldDoc)=>{for(let n=0;n<150;n++){if(await ev('typeof inventoryStatusModel==="function"&&!!document.getElementById("keepAwake")&&!!document.getElementById("remainingSummary")'+(oldDoc?'&&window.qaAuditDocument!=='+oldDoc:'')))return;await delay(100);}throw Error('App did not initialize');};
 const reload=async()=>{const old=await ev('window.qaAuditDocument');await send('Page.reload');await ready(old);};
 const assert=async(expr,message)=>{if(!await ev(expr))throw Error(message);};
 await send('Page.navigate',{url:'http://127.0.0.1:8772/index.html?fresh'});await ready();await ev('window.history.replaceState(null,"","/index.html")');
 await assert('allItems.length===256&&entries.length+progress.length===257&&allItems.filter(e=>e.type==="Heart Piece").length===36&&allItems.filter(e=>e.type==="Gold Skulltula").length===100','Checklist totals');
 await assert('allItems.every(e=>!e.guide.requires||e.guide.requires.every(knownGuideRequirement))','Unknown prerequisite was silently dropped');
 await assert('checked.has("Gold Skulltula:12")&&checked.has("Magic Bean:0")&&history.length===1&&inventoryStatusModel().bossHearts===1','Legacy completion, history or boss picks lost');
 await assert('filterState.region==="Hyrule Castle Town"&&filterState.type==="Bean Planting"&&!showLocked','Region/category migration or locked-filter preference lost');
 await ev('filterState={age:"Child",region:"Zora River",type:"Heart Piece",status:"all"};render()');
 await assert('document.getElementById("coverageInfo").textContent.includes("hidden")','Hidden rewards were not explained');
 await ev('document.querySelector("[data-region-hearts]").click()');
 await assert('filtered().length===4&&filtered().filter(e=>e.name.startsWith("Frogs")).length===2&&document.getElementById("coverageInfo").textContent.includes("2 frog rewards")','Young river must show four distinct pieces and both frogs');
 await ev('expanded.add("Heart Piece:26");render();Array.from(document.querySelectorAll("[data-guide-jump]")).find(b=>b.dataset.guideJump==="Heart Piece:27").click()');
 await assert('expanded.has("Heart Piece:27")&&filterState.age==="Child"&&filterState.region==="Zora River"&&filtered().length===4','Linked second frog reward did not reveal');
 await ev('filterState.region="Hyrule Field";filterState.age="Adult";render()');
 await assert('["Heart Piece:33","Heart Piece:34"].every(id=>filtered().some(e=>e.id===id)&&guideHTML(allItems.find(e=>e.id===id)).includes("Both timelines required"))&&document.querySelectorAll(".cross-time-tag svg").length>=2','Adult cross-time field rewards or warning tags');
 await ev('filterState.age="Child";render()');await assert('["Heart Piece:33","Heart Piece:34"].every(id=>filtered().some(e=>e.id===id))','Young cross-time field rewards');
 // Trades unlock in sequence; transport alternatives remain alternatives.
 await ev('checked=new Set();obtained=new Set(["Adult access","Ocarina"]);render()');
 await assert('eligible(entries.find(e=>e.id==="Trade Sequence:0"))&&!eligible(entries.find(e=>e.id==="Trade Sequence:1"))&&!eligible(entries.find(e=>e.id==="Trade Sequence:11"))','Trade steps all unlocked together');
 await ev('checked.add("Trade Sequence:0")');await assert('eligible(entries.find(e=>e.id==="Trade Sequence:1"))&&!eligible(entries.find(e=>e.id==="Trade Sequence:2"))','Trade successor gating');
 await ev('checked.add("Trade Sequence:5");obtained.add("Longshot");obtained.add("Hammer")');await assert('eligible(entries.find(e=>e.id==="Trade Sequence:6"))','Longshot alternative incorrectly needs Epona');
 await ev('checked.add("Trade Sequence:10")');await assert('!eligible(entries.find(e=>e.id==="Trade Sequence:11"))','Sword ignored knife purchase');
 await ev('checked.add("Equipment:6")');await assert('eligible(entries.find(e=>e.id==="Trade Sequence:11"))','Sword did not unlock after claim check and knife');
 // Mask sales unlock in order, then the four reserve masks can be borrowed.
 await ev('checked.clear();obtained=new Set(["Mask access","Saria Song","Song of Time"])');
 await assert('eligible(entries.find(e=>e.id==="Mask:0"))&&!eligible(entries.find(e=>e.id==="Mask:1"))&&!eligible(entries.find(e=>e.id==="Mask:4"))','Mask sequence gating');
 await ev('checked.add("Mask:0")');await assert('eligible(entries.find(e=>e.id==="Mask:1"))&&!eligible(entries.find(e=>e.id==="Mask:2"))','Mask successor');
 await ev('checked.add("Mask:3")');await assert('[4,5,6,7].every(i=>eligible(entries.find(e=>e.id==="Mask:"+i)))','Reserve masks incorrectly chained to each other');
 // Token thresholds count real tokens, not the retired ranch checkbox.
 await ev('checked=new Set(allItems.filter(e=>e.type==="Gold Skulltula").slice(0,10).map(e=>e.id));checked.add("Gold Skulltula:12")');
 await assert('hasGuideMilestone("10 Gold Skulltula tokens")&&!hasGuideMilestone("20 Gold Skulltula tokens")','Token thresholds or retired record exclusion');
 await ev('allItems.filter(e=>e.type==="Gold Skulltula").slice(0,20).forEach(e=>checked.add(e.id))');
 await assert('!eligible(entries.find(e=>e.id==="Equipment:10"))','20-token reward skipped earlier wallet claim');
 await ev('checked.add("Upgrade:10")');await assert('eligible(entries.find(e=>e.id==="Equipment:10"))','20-token reward remains unavailable');
 // Each grown-bean reward needs its own plot, not any planted bean.
 const beanLinks={'Gold Skulltula:45':'Magic Bean:2','Gold Skulltula:62':'Magic Bean:0','Gold Skulltula:90':'Magic Bean:9','Heart Piece:16':'Magic Bean:4','Heart Piece:22':'Magic Bean:5','Heart Piece:23':'Magic Bean:6','Heart Piece:31':'Magic Bean:9','Heart Piece:20':'Magic Bean:7'};
 for(const[reward,plot]of Object.entries(beanLinks)){
  await ev('obtained=new Set(milestones.map(m=>m[0]));checked=new Set(["Equipment:2"]);');
  await assert('!eligible(entries.find(e=>e.id==='+JSON.stringify(reward)+'))','Grown-bean reward lacked its plot: '+reward);
  await ev('checked.add('+JSON.stringify(plot)+')');await assert('eligible(entries.find(e=>e.id==='+JSON.stringify(reward)+'))','Correct planted plot did not unlock '+reward);
 }
 await ev('checked=new Set(["Side Quest:8"]);obtained=new Set(["Adult access","Longshot"])');
 await assert('eligible(entries.find(e=>e.id==="Heart Piece:20"))','Scarecrow/Longshot alternative lost');
 await ev('checked=new Set(["Magic Bean:2"]);obtained=new Set(["Adult access","Hookshot","Bottle","Hyrule Field access"])');
 await assert('!hasGuideMilestone("Magic Bean")&&eligible(entries.find(e=>e.id==="Gold Skulltula:45"))&&!eligible(entries.find(e=>e.id==="Gold Skulltula:62"))&&eligible(entries.find(e=>e.id==="Gold Skulltula:19"))','Planted plot confused with stock, wrong plot, or soil spider needs planting');
 await assert('entries.filter(e=>e.type==="Bean Planting").length===10&&entries.filter(e=>e.type==="Bean Planting").every(e=>guideHTML(e).includes("Check this entry when planted"))','Planting checkbox semantics');
 // Badges must exactly equal the feed for every region under ALL filters.
 await ev('checked=new Set(["Heart Piece:26"]);obtained=new Set();filterState={age:"Child",region:"Zora River",type:"Heart Piece",status:"remaining"};showLocked=true;render()');
 await assert('regionMatchCount("Zora River")===3&&document.getElementById("remainingCounts").textContent.startsWith("3 left")','Region remaining count');
 await ev('filterState.status="done";render()');await assert('regionMatchCount("Zora River")===1','Badge ignored completed filter');
 await ev('filterState.status="all";showLocked=false;render()');await assert('regionMatchCount("Zora River")===0&&document.getElementById("coverageInfo").textContent.includes("hidden")','Badge ignored locked filter or hidden matches unreported');
 await ev('document.querySelector("[data-show-matches]").click();document.getElementById("search").value="Frogs";render()');await assert('regionMatchCount("Zora River")===2','Badge ignored search');
 await ev('filterState.age="Adult";render()');await assert('regionMatchCount("Zora River")===1','Badge ignored timeline or dual-age route');
 await ev('filterState.age="Child";filterState.type="Bean Planting";render()');await assert('regionMatchCount("Zora River")===0','Badge ignored item type');
 await ev('document.getElementById("search").value="";filterState.type="Heart Piece";filterState.status="remaining";render()');
 await assert('(()=>{const old=filterState.region;const ok=opts.region.every(([region])=>{filterState.region=region;return regionMatchCount(region)===filtered().length});filterState.region=old;return ok})()','Region badges differ from feed');
 await assert('Number(Array.from(document.querySelectorAll("#regionPop [data-value]")).find(e=>e.dataset.value==="Zora River").querySelector(".region-badge").textContent)===3','Rendered region badge stale');
 // Remaining summary is scoped and remembers its collapsed state.
 await ev('document.getElementById("remainingSummary").open=true;save()');await reload();
 await assert('document.getElementById("remainingSummary").open&&filterState.region==="Zora River"&&document.getElementById("remainingCounts").textContent.startsWith("3 left")','Remaining summary scope or persistence');
 await ev('document.getElementById("export").click()');const backup=JSON.parse(await ev('lastExport'));
 if(!backup.statusScreen||backup.statusScreen.bossHearts.length!==1)throw Error('Backup lost boss picks');
 for(const width of [360,412,840]){await send('Emulation.setDeviceMetricsOverride',{width,height:915,deviceScaleFactor:2,mobile:true});await assert('document.documentElement.scrollWidth<=innerWidth','Overflow at '+width);}
 const graph=await ev('allItems.map(e=>({id:e.id,milestone:e.milestone,req:e.requires}))');
 const milestoneIds=Object.fromEntries(graph.filter(e=>e.milestone).map(e=>[e.milestone,e.id]));const aliases=await ev('guideMilestoneAliases');
 const edges=r=>typeof r==='object'?(r.any||r.all).flatMap(edges):milestoneIds[r]?[milestoneIds[r]]:db.entries[r]?[r]:aliases[r]||[];
 const db={entries:Object.fromEntries(graph.map(e=>[e.id,e]))},visited=new Set(),visiting=new Set();
 function visit(id){if(visited.has(id)||!db.entries[id])return;if(visiting.has(id))throw Error('Dependency cycle '+id);visiting.add(id);for(const r of db.entries[id].req)for(const next of edges(r))visit(next);visiting.delete(id);visited.add(id)}graph.forEach(e=>visit(e.id));
 await send('Emulation.setDeviceMetricsOverride',{width:412,height:915,deviceScaleFactor:2,mobile:true});
 await ev('document.getElementById("inventoryStatus").open=false;filterState={age:"Child",region:"Zora River",type:"Heart Piece",status:"all"};showLocked=true;expanded=new Set();render();document.getElementById("remainingSummary").open=true;window.scrollTo(0,document.querySelector("[data-age]").getBoundingClientRect().top+scrollY-15)');await delay(200);
 const clip=await ev('(()=>{const r=filterPanel.getBoundingClientRect(),end=document.getElementById("items").getBoundingClientRect();return {x:r.left+scrollX,y:r.top+scrollY,width:r.width,height:end.bottom-r.top,scale:1}})()');
 let shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync('outputs/Checklist-audit-preview.png',Buffer.from(shot.data,'base64'));
 await ev('document.getElementById("regionPop").showPopover()');await delay(100);await ev('Promise.all(Array.from(document.querySelectorAll("#regionPop img")).map(i=>i.decode()))');
 shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('outputs/Region-badges-preview.png',Buffer.from(shot.data,'base64'));
 console.log('PASS: 256 checks, 36 hearts, both Young river frog rewards, legacy saves, type/region migration, trade/mask chains, token and prize prerequisites, all eight bean dependencies and alternatives, soil spiders, all badge filters, remaining summary persistence, source links, no dependency cycles and 360/412/840px layouts.');
}finally{ws?.close();chrome.kill();server.close();}
`;
fs.writeFileSync('.build/verify-audit-run.mjs',harness+scenario);
await import('../.build/verify-audit-run.mjs');
