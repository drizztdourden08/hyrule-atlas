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
function guideRequirements(e){
 const g=e.guide;if(g?.requires)return g.requires.filter(knownGuideRequirement);
 let req=[...(g?.extraRequires||[])];if(e.age==='Adult')req.push('Adult access');
 const areaRequirements={'Deku Tree':['Deku Tree access'],'Forest Temple':['Adult access','Hookshot'],'Fire Temple':['Adult access','Hookshot'],'Water Temple':['Adult access','Iron Boots','Hookshot'],'Ice Cavern':['Adult access'],'Bottom of the Well':['Song of Storms'],'Shadow Temple':['Adult access','Lens of Truth','Magic'],'Spirit Temple':['Adult access'],'Ganon Castle':['Adult access']};
 req.push(...(areaRequirements[e.area]||(['Kokiri Forest','Lost Woods','Sacred Forest Meadow'].includes(e.area)?[]:['Hyrule Field access'])));
 if(['Death Mountain Trail','Goron City','Dodongo Cavern','Death Mountain Summit'].includes(e.area))req.push('Zelda Letter');
 if(e.type==='Mask')req.push('Mask access');
 for(const item of g?.equipment||[]){
  if(/^(empty bottle|bottle|bottled bug|blue fire)$/i.test(item))req.push('Bottle');
  const exact={'Slingshot':'Slingshot','Bomb Bag':'Bomb Bag','Boomerang':'Boomerang','Hookshot':'Hookshot','Longshot':'Longshot','Hammer':'Hammer','Iron Boots':'Iron Boots','Silver Gauntlets':'Silver Gauntlets','Golden Scale':'Golden Scale','Epona':'Epona','Bow':'Bow','Ocarina':'Ocarina','Zelda Lullaby':'Zelda Lullaby','Saria Song':'Saria Song','Sun Song':'Sun Song','Song of Time':'Song of Time','Song of Storms':'Song of Storms','Magic':'Magic','Magic Bean':'Magic Bean','Gerudo Card':'Gerudo Card'};
  if(exact[item])req.push(exact[item]);
  else if(knownGuideRequirement(item))req.push(item);
 }
 if(e.id==='Great Fairy:0')req=req.filter(r=>r!=='Magic');
 return [...new Set(req)].filter(r=>knownGuideRequirement(r)&&r!==e.milestone);
}
const guideMilestoneAliases={'Silver Gauntlets':['Upgrade:15'],'Golden Scale':['Upgrade:13'],'Magic':['Great Fairy:0'],'Epona':['Side Quest:1'],'Bottle':['Bottle:0','Bottle:1','Bottle:2','Bottle:3','Bottle:4'],'Goron Tunic':['Equipment:2'],'Zora Tunic':['Equipment:3'],'Hover Boots':['Equipment:4'],'Goron Bracelet':['Upgrade:14'],'Fire Arrows':['Side Quest:10'],'Skull Mask':['Mask:1'],'Mask of Truth':['Mask:4']};
function knownGuideRequirement(r){
 if(r&&typeof r==='object')return (Array.isArray(r.any)||Array.isArray(r.all))&&(r.any||r.all).length>0&&(r.any||r.all).every(knownGuideRequirement);
 return typeof r==='string'&&!!(mMap[r]||guideDatabase.entries[r]||guideMilestoneAliases[r]||/^\d+ Gold Skulltula tokens$/.test(r));
}
function hasGuideMilestone(name){
 if(name&&typeof name==='object')return name.any?name.any.some(hasGuideMilestone):name.all.every(hasGuideMilestone);
 const tokens=/^(\d+) Gold Skulltula tokens$/.exec(name);
 if(tokens)return allItems.filter(e=>e.type==='Gold Skulltula'&&checked.has(e.id)).length>=Number(tokens[1]);
 if(name==='Hookshot'&&obtained.has('Longshot'))return true;
 if(name==='Ocarina'&&obtained.has('Song of Time'))return true;
 const upgrades={'Slingshot':['Upgrade:0','Upgrade:1'],'Bow':['Upgrade:2','Upgrade:3'],'Bomb Bag':['Upgrade:4','Upgrade:5'],'Silver Gauntlets':['Upgrade:16'],'Goron Bracelet':['Upgrade:15','Upgrade:16'],'Magic':['Great Fairy:3']};
 if((upgrades[name]||[]).some(id=>checked.has(id)))return true;
 return obtained.has(name)||checked.has(name)||(guideMilestoneAliases[name]||[]).some(id=>checked.has(id));
}
function guideRequirementLabel(r){
 if(r&&typeof r==='object')return '('+(r.any||r.all).map(guideRequirementLabel).join(r.any?' or ':' + ')+')';
 if(r.startsWith('Magic Bean:'))return 'Bean planted — '+guideDatabase.entries[r].name.replace(/^Bean:\s*/,'');
 return guideDatabase.entries[r]?.name||r;
}
function timelineTag(e){
 if(e.guide?.crossTime)return '<span class="tag cross-time-tag" title="This route requires both timelines"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M12 3 2 21h20Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17.5" r="1" fill="currentColor"/></svg>Young + Adult</span>';
 return '<span class="tag">'+(e.age==='Both'?'Either age':e.age==='Child'?'Young Link':'Adult Link')+'</span>';
}
function crossTimeWarning(e){
 const c=e.guide?.crossTime;if(!c)return '';
 const order=c.first==='Adult'?['Adult','Young']:['Young','Adult'];
 return '<div class="cross-time-warning"><strong>⚠ Both timelines required</strong>'+order.map(age=>'<p><b>'+age+'</b> '+escape(c[age.toLowerCase()])+'</p>').join('')+'</div>';
}
function guideHTML(e){
 const g=e.guide;if(!g)return `<div class="steps">${escape(e.steps)}</div>`;
 const equipment=(g.equipment.length?g.equipment.join(' · '):'No special item beyond normal access')+(e.type==='Bean Planting'?' · Check this entry when planted. Grown-bean rewards have their own checkboxes.':'');
 const sources=g.sources.map(id=>guideDatabase.sources[id]).filter(Boolean);
 const related=(g.related||[]).map(id=>allItems.find(e=>e.id===id)).filter(Boolean);
 return `<div class="steps guide-content"><div class="guide-topline"><span class="steptitle">HOW TO OBTAIN</span><span class="guide-time">${escape(g.time)}</span></div>${crossTimeWarning(e)}<p class="guide-start"><strong>Start here</strong>${escape(g.start||guideOrientations[e.area]||'Use the location and timeline shown above, then follow the route below.')}</p><p class="guide-gear"><strong>Bring / unlock</strong>${escape(equipment)}</p><ol class="guide-steps">${g.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol>${g.note?`<p class="guide-note"><strong>Route note</strong>${escape(g.note)}</p>`:''}${related.length?`<div class="guide-related"><strong>Separate rewards</strong>${related.map(r=>`<button data-guide-jump="${escape(r.id)}">${isDone(r)?'✓ ':''}${escape(r.name)} <span aria-hidden="true">↗</span></button>`).join('')}</div>`:''}<div class="guide-sources"><span>Switch 2 remake · Sources reviewed Nov 6, 2026</span>${sources.map(s=>`<a href="${escape(s.url)}">${escape(s.title)} ↗</a>`).join('')}</div></div>`;
}
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-guide-jump]');if(!button)return;
 const entry=allItems.find(e=>e.id===button.dataset.guideJump);if(!entry)return;
 filterState.region=entry.area;filterState.type=entry.type;filterState.status='all';
 if(filterState.age&&entry.age!=='Both'&&entry.age!==filterState.age)filterState.age=entry.age;
 showLocked=true;$('search').value='';expanded.add(entry.id);render();save();
 requestAnimationFrame(()=>Array.from(document.querySelectorAll('[data-open]')).find(e=>e.dataset.open===entry.id)?.closest('article').scrollIntoView({block:'start'}));
});
function buildGuideArchive(){
 const retired=entries.filter(e=>e.guide?.retired);if(!retired.length)return;
 const archive=document.createElement('details');archive.className='panel guide-archive';archive.innerHTML=`<summary>Older checklist record (${retired.length})</summary><p>The old list contained an extra ranch description. It is kept here with its saved checkmark and excluded from the remake’s 100-token total.</p>${retired.map(e=>`<article><h3>${escape(e.name)}</h3><p>${checked.has(e.id)?'Previously marked complete':'Previously unmarked'} · saved record preserved</p>${guideHTML(e)}</article>`).join('')}`;
 $('items').insertAdjacentElement('afterend',archive);
}
