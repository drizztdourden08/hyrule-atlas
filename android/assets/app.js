'use strict';
const allRecords=[...entries,...progress,...eventEntries];
const atlasProgress=new AtlasProgress(allRecords,guideDatabase.logic,saved);
checked=atlasProgress.checked;obtained=atlasProgress.obtained;
let showLocked=typeof saved.showLocked==='boolean'?saved.showLocked:false,activePopover=null;
let filterState={age:saved.age||'',region:saved.region||'',type:saved.type||'',status:saved.status||'remaining'};
let history=Array.isArray(saved.history)?saved.history.slice(-5):[];
let animationTimer=null;
const filterPanel=document.querySelector('.filters').parentElement;filterPanel.innerHTML=filterMarkup();
const opts={age:[['','Both'],['Child','Young Link'],['Adult','Adult Link']],region:[['','All'],...[...new Set(allItems.map(e=>e.area))].sort().map(v=>[v,v])],type:[['','All'],...[...new Set(allItems.map(e=>e.type))].sort().map(v=>[v,v])],status:[['remaining','Remaining'],['all','All items'],['done','Completed']]};
buildTypeBar();
function isDone(e){return atlasProgress.done(e);}
function isEvent(e){return e.type==='Event'||e.type==='Side Quest'||e.type==='Progression'&&/access|cleared|completed|activate/i.test(e.name);}
function eligible(e){return atlasProgress.eligible(e,filterState.age);}
function matchesScope(e,ignoreRegion=false){
 const q=$('search').value.toLowerCase();
 const plan=atlasProgress.plan(e),ageMatch=!filterState.age||(plan.length?plan.some(s=>s.age===filterState.age):e.age==='Both'||e.age===filterState.age);
 return ageMatch&&(ignoreRegion||!filterState.region||e.area===filterState.region)&&(!filterState.type||e.type===filterState.type)&&(!q||[e.name,e.area,e.type,e.steps,...e.requires.map(guideRequirementLabel),...(e.guide.equipment||[])].join(' ').toLowerCase().includes(q));
}
function matchesContext(e,ignoreRegion=false){return matchesScope(e,ignoreRegion)&&atlasProgress.sequenceVisible(e,filterState.status)&&atlasProgress.timelineMatch(e,filterState.age,filterState.status);}
function viewMatches(e){return filterState.status==='all'||(filterState.status==='done'?isDone(e):!isDone(e));}
function filtered(){return allItems.filter(e=>matchesContext(e)&&viewMatches(e)&&(showLocked||eligible(e)||isDone(e)));}
function updateUndo(){const btn=$('undo');btn.disabled=!history.length;btn.textContent=history.length?`↶ Undo (${history.length})`:'↶ Undo';}
function save(){
 try{const state={...atlasProgress.snapshot(),...filterState,showLocked,leftSummaryOpen:$('remainingSummary')?.open||false,expanded:[...expanded],history,statusScreen:inventoryStatusSnapshot(),search:$('search').value,scroll:scrollY};if(!AtlasNative.write(JSON.stringify(state)))throw Error('Save failed');}
 catch(e){$('notice').textContent='Storage unavailable. Export a backup.';}
}
function missingFor(e,index){
 const plan=atlasProgress.plan(e),n=atlasProgress.prefix(e),age=plan.length?plan[index??n]?.age:atlasProgress.activeAge(e,filterState.age);
 const req=plan.length?plan[index??n]?.requires||[]:atlasProgress.required(e,filterState.age);
 const missing=req.filter(r=>!hasGuideMilestone(r)).map(guideRequirementLabel);
 if(!atlasProgress.ageAvailable(age))missing.unshift(age==='Child'?'Unlock return to Young Link':'Become Adult Link');
 if(plan.length&&(index??n)>n)missing.unshift('Complete the preceding timeline stage');
 return [...new Set(missing)];
}
function completionControl(e){
 const stages=atlasProgress.plan(e);
 if(stages.length){
  if(!filterState.age)return `<button class="timeline-open" data-open="${escape(e.id)}" aria-label="Open timeline progress for ${escape(e.name)}"><img src="art/hourglass.png" width="24" height="24" alt=""><small>${atlasProgress.prefix(e)}/${stages.length}</small></button>`;
  const i=atlasProgress.selectedStage(e,filterState.age),done=i>=0&&atlasProgress.prefix(e)>i;
  return `<input type="checkbox" data-stage-check="${escape(e.id)}" data-stage-index="${i}" aria-label="${done?'Undo':'Complete'} ${filterState.age==='Child'?'Young':'Adult'} stage for ${escape(e.name)}" ${done?'checked':''} ${!done&&!atlasProgress.stageReady(e,i)?'disabled':''}>`;
 }
 return `<input type="checkbox" data-check="${escape(e.id)}" aria-label="Complete ${escape(e.name)}" ${isDone(e)?'checked':''} ${!isDone(e)&&!eligible(e)?'disabled':''}>`;
}
function render(){
 renderInventoryStatus();const count=allItems.filter(isDone).length;
 $('pct').textContent=Math.round(100*count/allItems.length)+'%';$('counts').textContent=count+' / '+allItems.length;$('fill').style.width=(100*count/allItems.length)+'%';
 const list=filtered();$('visible').textContent=`${list.length} shown · ${allItems.length-count} left overall`;
 $('items').innerHTML=list.length?list.map(e=>{
  const ready=eligible(e),done=isDone(e),stages=atlasProgress.plan(e),n=atlasProgress.prefix(e),seq=atlasProgress.sequence(e);
  const message=!done&&!ready?missingFor(e).join(' · '):'';
  return `<article class="entry ${ready||done?'':'locked'} ${isEvent(e)?'event':''}" data-entry="${escape(e.id)}"><div class="head">${completionControl(e)}<span class="typeicon" title="${escape(e.type)}">${inventoryArt(e.type,e.name)}</span><div class="itemcopy"><div class="itemtitle ${done?'done':''}">${escape(e.name)}</div><div class="tags"><span class="tag regiontag">${escape(e.area)}</span>${timelineTag(e)}<span class="tag typetag">${escape(e.type)}</span></div>${stages.length?`<div class="phase-status">${n} / ${stages.length} timeline stages complete${!done?' · Next: '+(stages[n].age==='Child'?'Young':'Adult'):''}</div>`:''}${seq?`<div class="phase-status">Sequence step ${seq.indexOf(e.id)+1} / ${seq.length} · ${filterState.status==='done'?'completed exchange':'only the current step is shown'}</div>`:''}${message?`<div class="req">Requires ${escape(message)}</div>`:''}</div><button class="chevron ${expanded.has(e.id)?'rotated':''}" data-open="${escape(e.id)}" aria-label="Show directions for ${escape(e.name)}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button></div>${expanded.has(e.id)?guideHTML(e):''}</article>`;
 }).join(''):'<div class="empty">No checks match these filters. Future sequence steps stay hidden until the current step is complete.</div>';
 for(const k of ['region','status'])buildPop(k);
 document.querySelectorAll('[data-age]').forEach(b=>{const on=b.dataset.age===filterState.age;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});
 document.querySelectorAll('[data-type]').forEach(b=>{const on=b.dataset.type===filterState.type;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});
 $('lockedbtn').classList.toggle('selected',showLocked);$('lockedbtn').setAttribute('aria-pressed',String(showLocked));updateFilterSummary();
}
function changeProgress(action,rowId){
 if(animationTimer){clearTimeout(animationTimer);animationTimer=null;}
 const before=atlasProgress.snapshot();if(!action()){render();return;}
 history.push({kind:'progress',before});if(history.length>5)history.shift();save();updateUndo();
 const row=rowId?Array.from(document.querySelectorAll('[data-entry]')).find(r=>r.dataset.entry===rowId):null;
 if(row&&!filtered().some(e=>e.id===rowId)){
  row.style.height=row.getBoundingClientRect().height+'px';row.style.boxSizing='border-box';row.style.overflow='hidden';row.getBoundingClientRect();
  requestAnimationFrame(()=>{row.classList.add('removing');row.style.height='0px';row.style.paddingTop='0px';row.style.paddingBottom='0px';row.style.borderWidth='0px';});
  animationTimer=setTimeout(()=>{animationTimer=null;render();},275);
 }else render();
}
function scrollToEntry(id){requestAnimationFrame(()=>Array.from(document.querySelectorAll('[data-open]')).find(b=>b.dataset.open===id)?.closest('article').scrollIntoView({block:'nearest'}));}
$('items').addEventListener('change',event=>{
 const input=event.target;
 if(input.dataset.stageCheck){const e=atlasProgress.byId.get(input.dataset.stageCheck);changeProgress(()=>atlasProgress.setStage(e,Number(input.dataset.stageIndex),input.checked),e.id);return;}
 if(input.dataset.stageRoute){const e=atlasProgress.byId.get(input.dataset.stageRoute);changeProgress(()=>atlasProgress.setRoute(e,input.value));return;}
 const e=atlasProgress.byId.get(input.dataset.check);if(e)changeProgress(()=>atlasProgress.setDone(e,input.checked),e.id);
});
$('undo').onclick=()=>{
 if(!history.length)return;const action=history.pop();
 if(animationTimer){clearTimeout(animationTimer);animationTimer=null;}
 if(action.kind==='progress')atlasProgress.load(action.before);
 else if(!undoBossHeart(action)){const e=atlasProgress.byId.get(action.id);if(e)atlasProgress.completeRecord(e,action.wasDone);}
 save();updateUndo();render();
};
$('items').addEventListener('click',event=>{const button=event.target.closest('[data-open]');if(!button)return;const id=button.dataset.open;expanded.has(id)?expanded.delete(id):expanded.add(id);render();save();});
filterPanel.addEventListener('click',handleFilterClick);
document.addEventListener('click',event=>{if(!event.target.closest('.dropdown'))closeFilterPops();});
$('search').value=saved.search||'';$('search').addEventListener('input',()=>{render();save();});
$('expand').onclick=()=>{const list=filtered(),open=list.some(e=>!expanded.has(e.id));list.forEach(e=>open?expanded.add(e.id):expanded.delete(e.id));$('expand').textContent=open?'Collapse all':'Expand all';render();save();};
$('export').onclick=()=>AtlasNative.export(JSON.stringify({version:6,...atlasProgress.snapshot(),statusScreen:inventoryStatusSnapshot()},null,2));
$('import').onclick=()=>$('importbox').classList.toggle('hidden');
$('restore').onclick=()=>{try{
 const obj=JSON.parse($('backup').value);if(!Array.isArray(obj.completed)||obj.milestones&&!Array.isArray(obj.milestones))throw Error('Invalid backup');
 atlasProgress.load(obj);history=[];if(obj.statusScreen!==undefined)restoreInventoryStatus(obj.statusScreen);save();updateUndo();render();$('importbox').classList.add('hidden');
}catch(e){alert('Invalid backup JSON');}};
$('reset').onclick=()=>{if(confirm('Clear all progress?')){atlasProgress.load({schemaVersion:6});resetInventoryStatus();history=[];save();updateUndo();render();}};
buildGuideArchive();updateUndo();render();
if(typeof AtlasNative.readPreviousState==='function'){
 const previous=AtlasNative.readPreviousState();
 if(previous&&previous!=='{}'){const button=document.createElement('button');button.textContent='Export pre-update backup';button.onclick=()=>AtlasNative.export(previous);document.querySelector('.actions').appendChild(button);}
}
requestAnimationFrame(()=>window.scrollTo(0,saved.scroll||0));
let scrollSave;addEventListener('scroll',()=>{clearTimeout(scrollSave);scrollSave=setTimeout(save,180);},{passive:true});document.addEventListener('visibilitychange',save);
