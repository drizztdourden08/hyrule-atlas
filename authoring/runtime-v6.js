function knownGuideRequirement(r){
 if(r&&typeof r==='object'){
  if(r.wallet)return Number.isFinite(r.wallet)&&r.wallet>0;
  if(r.stage)return !!guideDatabase.entries[r.stage.id];
  const list=r.any||r.all;return Array.isArray(list)&&list.length>0&&list.every(knownGuideRequirement);
 }
 return typeof r==='string'&&!!(mMap[r]||guideDatabase.entries[r]||guideDatabase.logic.aliases[r]||/^\d+ Gold Skulltula tokens$/.test(r));
}
function guideRequirements(e){
 const req=e.guide?.requires;if(!Array.isArray(req))throw Error('Missing reviewed requirements: '+e.id);
 for(const r of req)if(!knownGuideRequirement(r))throw Error('Unknown requirement for '+e.id+': '+JSON.stringify(r));
 return req;
}
const guideMilestoneAliases=guideDatabase.logic.aliases;
function hasGuideMilestone(r){return atlasProgress.has(r);}
function guideRequirementLabel(r){
 if(r&&typeof r==='object'){
  if(r.wallet)return 'Wallet capacity of at least '+r.wallet+' rupees';
  if(r.stage)return (guideDatabase.entries[r.stage.id]?.name||r.stage.id)+' — '+r.stage.key;
  return '('+(r.any||r.all).map(guideRequirementLabel).join(r.any?' or ':' + ')+')';
 }
 if(r.startsWith('Magic Bean:'))return 'Bean planted — '+guideDatabase.entries[r].name.replace(/^Bean:\s*/,'');
 return guideDatabase.entries[r]?.name||r;
}
function timelineTag(e){
 if(atlasProgress.plan(e).length)return '<span class="tag cross-time-tag"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M12 3 2 21h20Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 9v5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="17.5" r="1" fill="currentColor"/></svg>Young ↔ Adult</span>';
 return '<span class="tag">'+(e.age==='Both'?'Either age':e.age==='Child'?'Young Link':'Adult Link')+'</span>';
}
function crossTimeWarning(e){
 const stages=atlasProgress.plan(e);if(!stages.length)return '';
 const n=atlasProgress.prefix(e),routes=e.guide.stageRoutes;
 const chooser=routes?`<label class="stage-route">Route<select data-stage-route="${escape(e.id)}">${Object.entries(routes).map(([key,r])=>`<option value="${key}" ${atlasProgress.route(e)===key?'selected':''}>${escape(r.label)}</option>`).join('')}</select></label>`:'';
 return `<section class="stage-tracker" aria-label="Timeline progress"><div class="stage-heading"><strong>Timeline progress</strong><span>${n} / ${stages.length} complete</span></div>${chooser}<p>Complete these stages in order. This check is finished after the last stage.</p><ol>${stages.map((s,i)=>{
  const done=i<n,ready=atlasProgress.stageReady(e,i),missing=missingFor(e,i);
  return `<li class="timeline-step ${done?'stage-done':ready?'stage-ready':'stage-waiting'}"><label><input type="checkbox" data-stage-check="${escape(e.id)}" data-stage-index="${i}" aria-label="Done as ${s.age==='Child'?'Young':'Adult'} Link: ${escape(s.title)}" ${done?'checked':''} ${!done&&!ready?'disabled':''}><span><small>Step ${i+1} · ${s.age==='Child'?'Young':'Adult'} Link</small><strong>${escape(s.title)}</strong><em>${done?'Done':ready?'Current stage · ready':escape(missing.join(' · ')||'Waiting for the previous stage')}</em></span></label></li>`;
 }).join('')}</ol></section>`;
}
function guideHTML(e){
 const g=e.guide,sources=g.sources.map(id=>guideDatabase.sources[id]).filter(Boolean);
 const related=(g.related||[]).map(id=>allItems.find(r=>r.id===id)).filter(Boolean);
 const req=atlasProgress.required(e,filterState.age).map(guideRequirementLabel);
 const supplies=g.equipment.filter(x=>/rupee|cucco|bottled bug|full health|normal.*lure|fish|small key|time.*expir/i.test(x));
 return `<div class="steps guide-content"><div class="guide-topline"><span class="steptitle">HOW TO OBTAIN</span><span class="guide-time">${escape(g.time)}</span></div>${crossTimeWarning(e)}<p class="guide-start"><strong>Start here</strong>${escape(g.start||guideOrientations[e.area]||'Start in the location shown above.')}</p><p class="guide-gear"><strong>Unlocks for the current stage</strong>${escape(req.join(' · ')||'No additional permanent item required')}</p>${supplies.length?`<p class="guide-gear"><strong>Bring / check in game</strong>${escape(supplies.join(' · '))}</p>`:''}${e.type==='Bean Planting'?'<p class="bean-planting-note">Check this when the bean is planted at this exact spot. The later pickup has its own completion.</p>':''}<ol class="guide-steps">${g.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol>${g.note?`<p class="guide-note"><strong>Route note</strong>${escape(g.note)}</p>`:''}${related.length?`<div class="guide-related"><strong>Related checks</strong>${related.map(r=>`<button data-guide-jump="${escape(r.id)}">${isDone(r)?'✓ ':''}${escape(r.name)} ↗</button>`).join('')}</div>`:''}<div class="guide-sources"><span>Switch 2 remake · Requirements reviewed Nov 7, 2026</span>${sources.map(s=>`<a href="${escape(s.url)}">${escape(s.title)} ↗</a>`).join('')}</div></div>`;
}
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-guide-jump]');if(!button)return;
 const e=allItems.find(r=>r.id===button.dataset.guideJump);if(!e)return;
 filterState.region=e.area;filterState.type=e.type;filterState.status='all';filterState.age='';
 showLocked=true;$('search').value='';expanded.add(e.id);render();save();scrollToEntry(e.id);
});
