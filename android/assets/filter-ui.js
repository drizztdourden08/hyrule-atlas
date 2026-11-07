const regionGroups=[
 ['Central Hyrule',['Hyrule Field','Hyrule Castle Town','Market','Hyrule Castle','Temple of Time','Ganon Castle','Lon Lon Ranch']],
 ['Forest',['Kokiri Forest','Lost Woods','Sacred Forest Meadow','Deku Tree','Forest Temple']],
 ['Kakariko & Graveyard',['Kakariko','Windmill','Bottom of the Well','Graveyard','Shadow Temple']],
 ['Death Mountain',['Death Mountain Trail','Goron City','Dodongo Cavern','Death Mountain Summit','Death Mountain Crater','Fire Temple']],
 ["Zora’s Domain",['Zora River','Zora Domain','Zora Fountain','Jabu-Jabu Belly','Ice Cavern']],
 ['Lake Hylia',['Lake Hylia','Water Temple']],
 ['Gerudo Desert',['Gerudo Valley','Gerudo Fortress','Gerudo Training Ground','Haunted Wasteland','Desert Colossus','Spirit Temple']]
];
const regionNames=['Bottom of the Well','Death Mountain Crater','Death Mountain Summit','Death Mountain Trail','Deku Tree','Desert Colossus','Dodongo Cavern','Fire Temple','Forest Temple','Ganon Castle','Gerudo Fortress','Gerudo Training Ground','Gerudo Valley','Goron City','Graveyard','Haunted Wasteland','Hyrule Castle','Hyrule Castle Town','Hyrule Field','Ice Cavern','Jabu-Jabu Belly','Kakariko','Kokiri Forest','Lake Hylia','Lon Lon Ranch','Lost Woods','Market','Sacred Forest Meadow','Shadow Temple','Spirit Temple','Temple of Time','Water Temple','Windmill','Zora Domain','Zora Fountain','Zora River'];
function regionArt(name){return name?'art/ui/region-'+String(regionNames.indexOf(name)+1).padStart(2,'0')+'.png':'art/map.png';}
function regionMatchCount(region){return allItems.filter(e=>(!region||e.area===region)&&matchesContext(e,true)&&(showLocked||eligible(e))&&(filterState.status==='all'||(filterState.status==='done'?isDone(e):!isDone(e)))).length;}
function filterMarkup(){return `
 <div class="filterline"><input id="search" type="search" placeholder="Search Hyrule…" aria-label="Search">
 <div class="filter-caption">Timeline</div><div class="timeline" role="group" aria-label="Timeline">
 <button data-age="" class="timelinebtn"><img src="art/hourglass.png" alt=""><span>Both</span></button>
 <button data-age="Child" class="timelinebtn"><img src="art/ui/young.png" alt=""><span>Young</span></button>
 <button data-age="Adult" class="timelinebtn"><img src="art/ui/adult.png" alt=""><span>Adult</span></button></div>
 <div class="filter-caption">Item type</div><div class="typebar" id="typebar" role="group" aria-label="Item type"></div>
 <div class="filterbuttons"><div class="dropdown region-dropdown"><button class="filterbtn region-trigger" data-pop="region" aria-controls="regionPop" aria-expanded="false"><img id="regionPreview" src="art/map.png" alt=""><span><small>Region</small><span id="regionLabel">All regions</span></span><span class="trigger-arrow">⌄</span></button>
 <div id="regionPop" class="pop region-popover" popover="auto" role="dialog" aria-label="Choose a region"></div></div>
 <div class="dropdown"><button class="filterbtn" data-pop="status" aria-controls="statusPop" aria-expanded="false">View <span id="statusLabel">Remaining</span> ▾</button><div class="pop" id="statusPop"></div></div>
 <button id="lockedbtn" class="filterbtn" aria-pressed="false">Include locked</button></div></div>
 <div class="filterfooter"><small id="visible"></small><button id="expand" class="subtle">Expand all</button></div><div id="coverageInfo" class="filter-coverage" aria-live="polite"></div>`;}
function buildPop(k){
 if(k==='region'){
  const card=(value,label)=>{const count=regionMatchCount(value);return `<button class="region-option ${filterState.region===value?'selected':''}" data-filter="region" data-value="${escape(value)}" aria-label="${escape(label)}, ${count} matching checks" aria-pressed="${filterState.region===value}"><img src="${regionArt(value)}" alt="" width="38" height="38"><span>${escape(label)}</span><span class="region-badge ${count?'':'zero'}" aria-hidden="true">${count}</span>${filterState.region===value?'<span class="region-check" aria-hidden="true">✓</span>':''}</button>`;};
  $('regionPop').innerHTML=`<div class="region-heading"><div><strong>Explore Hyrule</strong><small>Counts follow all active filters</small></div><button class="close-region" data-close-region aria-label="Close region selector">×</button></div><div class="region-content"><div class="all-region">${card('','All regions')}</div>${regionGroups.map(([group,regions])=>`<section class="region-group"><h2>${escape(group)}</h2><div class="region-grid">${regions.filter(r=>opts.region.some(([v])=>v===r)).map(r=>card(r,r)).join('')}</div></section>`).join('')}</div>`;
  $('regionLabel').textContent=filterState.region||'All regions';$('regionPreview').src=regionArt(filterState.region);
 }else{
  $(k+'Pop').innerHTML=opts[k].map(([v,label])=>`<button class="popoption ${filterState[k]===v?'selected':''}" data-filter="${k}" data-value="${escape(v)}">${escape(label)}${filterState[k]===v?' ✓':''}</button>`).join('');
  $(k+'Label').textContent=(opts[k].find(o=>o[0]===filterState[k])||opts[k][0])[1];
 }
}
function buildTypeBar(){
 $('typebar').innerHTML=`<button class="typebtn" data-type="" aria-label="All item types"><span class="typeglyph"><img class="svgicon inventoryicon" src="art/chest.png" alt=""></span><span class="typelabel">All types</span></button>`+opts.type.filter(x=>x[0]).map(([v])=>`<button class="typebtn" data-type="${escape(v)}" title="${escape(v)}" aria-label="${escape(v)}"><span class="typeglyph">${inventoryArt(v)}</span><span class="typelabel">${escape(v)}</span></button>`).join('');
 const summary=document.createElement('p');summary.id='filterSummary';summary.className='filter-summary';summary.setAttribute('aria-live','polite');summary.setAttribute('aria-atomic','true');filterPanel.insertAdjacentElement('afterend',summary);
 const remaining=document.createElement('details');remaining.id='remainingSummary';remaining.className='status-panel remaining-summary';remaining.open=saved.leftSummaryOpen===true;
 remaining.innerHTML='<summary class="remaining-summary-head"><span><strong id="remainingTitle">What’s left</strong><small id="remainingCounts"></small></span><span class="status-chevron" aria-hidden="true">⌄</span></summary><div id="remainingBody" class="remaining-body"></div>';
 summary.insertAdjacentElement('afterend',remaining);
 remaining.addEventListener('toggle',()=>save());
 $('regionPop').addEventListener('toggle',e=>document.querySelector('[data-pop="region"]').setAttribute('aria-expanded',String(e.newState==='open')));
}
function updateFilterSummary(){
 $('filterSummary').textContent=`Timeline: ${filterState.age==='Child'?'Young':filterState.age==='Adult'?'Adult':'Both'} · Item type: ${filterState.type||'All types'} · Region: ${filterState.region||'All regions'}`;
 updateRemainingSummary();
 const matches=allItems.filter(e=>matchesContext(e)),shown=filtered(),hidden=matches.length-shown.length;
 const statusHidden=matches.filter(e=>filterState.status==='done'?!isDone(e):filterState.status==='remaining'?isDone(e):false).length;
 const lockedHidden=matches.filter(e=>!showLocked&&!eligible(e)&&(filterState.status==='all'||(filterState.status==='done'?isDone(e):!isDone(e)))).length;
 const hearts=filterState.region?allItems.filter(e=>e.type==='Heart Piece'&&e.area===filterState.region&&(!filterState.age||e.age==='Both'||e.age===filterState.age||e.guide?.crossTime)):[];
 $('coverageInfo').innerHTML=(hidden?`<p>${hidden} of ${matches.length} matching checks hidden${statusHidden?' · '+statusHidden+' by View':''}${lockedHidden?' · '+lockedHidden+' by requirements':''}.</p><button data-show-matches>Show all matching checks</button>`:'')+(hearts.length?`<div class="region-heart-coverage"><span>${hearts.length} Heart Pieces in this region / timeline${filterState.region==='Zora River'?' · 2 frog rewards':''}</span><button data-region-hearts>View all Heart Pieces here</button></div>`:'');
}
function updateRemainingSummary(){
 const context=allItems.filter(e=>matchesScope(e)),left=context.filter(e=>!isDone(e)),ready=left.filter(e=>matchesContext(e)&&eligible(e));
 $('remainingTitle').textContent='What’s left · '+(filterState.region||'All regions');
 $('remainingCounts').textContent=`${left.length} left · ${ready.length} available · ${left.length-ready.length} waiting on requirements`;
 const types=[...new Set(left.map(e=>e.type))];
 $('remainingBody').innerHTML='<p>All unfinished checks in this scope, including later sequence and timeline stages.</p>'+(left.length?'<div class="remaining-grid">'+types.map(type=>{const list=left.filter(e=>e.type===type);return `<div class="remaining-category">${inventoryArt(type)}<span>${escape(type)}<small>${list.filter(e=>matchesContext(e)&&eligible(e)).length} available</small></span><strong>${list.length}</strong></div>`}).join('')+'</div>':'<p class="remaining-complete">All matching checks are complete.</p>');
}
function closeFilterPops(){
 document.querySelectorAll('.pop.shown').forEach(p=>p.classList.remove('shown'));
 document.querySelector('[data-pop="status"]').setAttribute('aria-expanded','false');activePopover=null;
}
function handleFilterClick(ev){
 const btn=ev.target.closest('button');if(!btn)return;
 if(btn.hasAttribute('data-show-matches')){showLocked=true;filterState.status='all';render();save();return;}
 if(btn.hasAttribute('data-region-hearts')){showLocked=true;filterState.status='all';filterState.type='Heart Piece';$('search').value='';render();save();return;}
 if(btn.hasAttribute('data-close-region')){$('regionPop').hidePopover();document.querySelector('[data-pop="region"]').focus();return;}
 if(btn.hasAttribute('data-age')){filterState.age=btn.dataset.age;save();render();return;}
 if(btn.hasAttribute('data-type')){filterState.type=filterState.type===btn.dataset.type?'':btn.dataset.type;save();render();return;}
 if(btn.dataset.pop==='region'){closeFilterPops();$('regionPop').togglePopover();return;}
 if(btn.dataset.pop){const name=btn.dataset.pop;activePopover=activePopover===name?null:name;document.querySelectorAll('.pop:not([popover])').forEach(p=>p.classList.toggle('shown',p.id===activePopover+'Pop'));btn.setAttribute('aria-expanded',String(activePopover===name));return;}
 if(btn.dataset.filter){filterState[btn.dataset.filter]=btn.dataset.value;if(btn.dataset.filter==='region'){$('regionPop').hidePopover();document.querySelector('[data-pop="region"]').focus();}closeFilterPops();save();render();return;}
 if(btn.id==='lockedbtn'){showLocked=!showLocked;save();render();}
}
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')closeFilterPops();});
