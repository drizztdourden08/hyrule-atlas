const guideOrientations={
 'Deku Tree':'Start inside the Great Deku Tree, reached by passing Mido in Kokiri Forest. Floors and compass directions below refer to the dungeon map, not the direction your camera happens to face.',
 'Kokiri Forest':'Begin in the child village around Link’s house and the shop. The Lost Woods entrance is the uphill passage at the edge of this village; it is a different area from the houses themselves.',
 'Temple of Time':'In Castle Town, take the route beyond the market to the large Temple of Time. Inside, the front altar opens the Door of Time, and the Master Sword pedestal is in the chamber beyond that door.',
 'Lost Woods':'Directions such as “right, left” start at the Lost Woods entrance from Kokiri Forest. If a wrong tunnel sends you back to the village, re-enter and restart the sequence; do not continue counting turns from the wrong room.',
 'Hyrule Castle':'Begin in the Hyrule Castle grounds beyond Castle Town. The town drawbridge, the guarded approach, the castle moat where Talon slept, and the fairy-fountain boulder are separate landmarks; follow the entry’s named destination.',
 'Market':'Begin in child Castle Town’s fountain plaza. The guardhouse is beside the drawbridge entrance; the Happy Mask Shop and other shops are farther inside, and the Treasure Box Shop is in the back streets.',
 'Hyrule Castle Town':'Begin in the town streets beyond Hyrule Field’s drawbridge. Shop access and NPCs change with the timeline and time of day; use the age and time listed here.',
 'Hyrule Field':'Begin on the open field outside Castle Town. Lon Lon Ranch is the central landmark, Kokiri Forest lies to the east, and Lake Hylia is reached by the southern route. A grotto is an underground room entered through a ground opening.',
 'Kakariko':'Enter the village from Hyrule Field. The Cucco pen and construction site are low in the village; the windmill and well are farther uphill, while the guarded mountain gate leads to Death Mountain Trail.',
 'Windmill':'From Kakariko’s well, climb the village steps to the windmill entrance. The musician is inside. Dampé’s race exit enters the upper floor from the Graveyard; walking through the front door puts you lower down.',
 'Graveyard':'Reach the Graveyard through the uphill exit at the back of Kakariko. Dampé’s hut, the movable rows of headstones, the upper soft soil, and the Royal Composers’ Tomb are different destinations.',
 'Lon Lon Ranch':'From Hyrule Field, enter the central ranch. The entrance buildings, fenced horse paddock, and ruined stone tower at the racetrack’s edge are separate places. Adult ownership changes the NPCs and available games.',
 'Gerudo Valley':'Approach from western Hyrule Field. The small plank crossing near the entrance is not the large canyon bridge. The cow ledge is down beside the river; the carpenter camp is across the main bridge.',
 'Goron City':'Enter from the upper Death Mountain Trail. The city has several circular levels: Darunia is behind the royal-crest door at the bottom, and the boulder maze branches from an upper level.',
 'Death Mountain Trail':'Take the guarded exit above Kakariko. Dodongo Cavern is below the trail, Goron City is reached higher up, and the summit continues beyond the cracked-rock climb. Red Hammer rocks are different from ordinary bombable walls.',
 'Death Mountain Summit':'Climb above Goron City toward the top of Death Mountain. The owl, Biggoron, the first Great Fairy approach, and the entrance into the hot crater are clustered at the summit, but are separate interactions.',
 'Death Mountain Crater':'The summit entrance reaches the upper hot rim; Bolero of Fire reaches the lower warp pedestal near the temple route. Check which starting point the entry uses. As a child, the heat timer makes detours dangerous.',
 'Dodongo Cavern':'Enter the cavern below Death Mountain Trail. Its central lava hall contains the giant skull; the east Baby Dodongo corridor, west Bomb Flower staircase, upper crossing, and rooms inside the skull are separate routes.',
 'Zora River':'Follow the eastern river route from Hyrule Field. The Bean Seller is near the lower end. The frogs are farther upstream, and the final bridge and waterfall mark the approach to Zora Domain.',
 'Zora Domain':'Play Zelda’s Lullaby at the river waterfall to enter. Inside, the main pool is below King Zora; the diving instructor stands high above it, and Zora Fountain is behind the king.',
 'Zora Fountain':'Go behind King Zora from Zora Domain. This is the outdoor lake with Jabu-Jabu as a child and ice floes as an adult, not the pool inside the Domain.',
 'Jabu-Jabu Belly':'Enter by showing Ruto’s Letter to King Zora and feeding a bottled fish to Jabu-Jabu in the Fountain. The basement water room, tentacle-hole chamber, Boomerang room, and boss approach are different stages of the route.',
 'Lake Hylia':'Approach along the southern field route or the Domain’s underwater passage. The Lakeside Laboratory has the indoor tank; the Fishing Pond is a separate hut, and Bonooru stands in the tilled shore field.',
 'Sacred Forest Meadow':'Reach this area through the Lost Woods. As an adult, Mido and the Moblin maze block the temple approach. The climbable maze walls and final Forest Temple stairs are useful orientation points.',
 'Forest Temple':'Use the Hookshot on the branch above the entrance in the Sacred Meadow. The main hall has four Poe torches and the elevator. The northeast stream courtyard and northwest well courtyard are different rooms.',
 'Fire Temple':'Enter from Death Mountain Crater with the Goron Tunic. Room directions and floors refer to the dungeon map. The large lava hall, boulder maze, Scarecrow tower, and upper Hammer route are distinct landmarks.',
 'Ice Cavern':'Cross the adult Fountain’s ice floes to the cavern mouth. The spinning-blade room, blue-flame branches, sliding-block puzzle, and White Wolfos chamber are different rooms. Bottle Blue Fire whenever you pass a refill.',
 'Water Temple':'Enter below Lake Hylia using the Iron Boots and Zora Tunic. Before following a side-room route, check your floor and water level on the dungeon map; a doorway can be inaccessible at a different level.',
 'Bottom of the Well':'First drain Kakariko’s well by playing Song of Storms to the windmill musician as a child. Climb down the well and crawl through its tunnel. Inside, the Lens reveals walls, pits, and key chests hidden from ordinary sight.',
 'Shadow Temple':'Learn Nocturne of Shadow as an adult and use it to reach the ledge above the Graveyard. Open the entrance using the fire-lighting puzzle. Floor numbers below refer to the temple map.',
 'Gerudo Fortress':'Cross Gerudo Valley’s main bridge to reach the fortress. Before the carpenters are rescued, guards capture you; after earning the Gerudo Pass, the exterior, archery range, training gate, and desert gate are freely accessible.',
 'Haunted Wasteland':'Enter through the desert gate beyond Gerudo Fortress after earning the Pass. Cross the quicksand, follow the flag line, and use the stone shelter as the landmark for the phantom-guide section.',
 'Desert Colossus':'Cross the wasteland as an adult and learn Requiem of Spirit here before trying the child pickups. The Spirit Temple entrance soil, oasis cliff, northern bird wall, and grown-bean route are separate destinations.',
 'Spirit Temple':'Use Requiem of Spirit to return to the Colossus. The child crawlspace leads to Nabooru and the Silver Gauntlets route; the adult route is a different branch. Check the required age before entering.',
 'Gerudo Training Ground':'The training entrance is a paid gate inside the Gerudo Fortress area, not the Spirit Temple. Bring the late-game equipment listed before paying, because the course chains several different tool trials together.',
 'Ganon Castle':'After the sages open the bridge from the ruined castle grounds, the main trial hall leads to six themed barriers. The Golden Gauntlets are inside the Shadow Trial; the last fairy is outside the castle.'
};
function applyGuide(e){
 const g=guideDatabase.entries[e.id];if(!g)return e;
 e.guide=g;e.name=g.name;e.area=g.area;e.age=g.age;e.steps=g.steps.join('\n');if(g.type)e.type=g.type;return e;
}
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

function buildGuideArchive(){
 const retired=entries.filter(e=>e.guide?.retired);if(!retired.length)return;
 const archive=document.createElement('details');archive.className='panel guide-archive';archive.innerHTML=`<summary>Older checklist record (${retired.length})</summary><p>The old list contained an extra ranch description. It is kept here with its saved checkmark and excluded from the remake’s 100-token total.</p>${retired.map(e=>`<article><h3>${escape(e.name)}</h3><p>${checked.has(e.id)?'Previously marked complete':'Previously unmarked'} · saved record preserved</p>${guideHTML(e)}</article>`).join('')}`;
 $('items').insertAdjacentElement('afterend',archive);
}
