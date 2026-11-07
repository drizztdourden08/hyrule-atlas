// Inventory is derived from the existing completion records. Boss pickups are
// separate because clearing a dungeon does not necessarily collect its heart.
const statusBosses = [
 ['gohma','Gohma','Great Deku Tree'],['dodongo','King Dodongo','Dodongo Cavern'],
 ['barinade','Barinade','Jabu-Jabu'],['phantom','Phantom Ganon','Forest Temple'],
 ['volvagia','Volvagia','Fire Temple'],['morpha','Morpha','Water Temple'],
 ['bongo','Bongo Bongo','Shadow Temple'],['twinrova','Twinrova','Spirit Temple']
];
let inventoryStatusState;
function normalizeInventoryStatus(value) {
 const v=value&&typeof value==='object'?value:{};
 return {open:typeof v.open==='boolean'?v.open:true,bossHearts:new Set(
  (Array.isArray(v.bossHearts)?v.bossHearts:[]).filter(id=>statusBosses.some(b=>b[0]===id)))};
}
function inventoryStatusSnapshot() {
 if(!inventoryStatusState)inventoryStatusState=normalizeInventoryStatus(saved.statusScreen);
 const panel=document.getElementById('inventoryStatus');if(panel)inventoryStatusState.open=panel.open;
 return {open:inventoryStatusState.open,bossHearts:[...inventoryStatusState.bossHearts]};
}
function restoreInventoryStatus(value) {
 inventoryStatusState=normalizeInventoryStatus(value);
 const panel=document.getElementById('inventoryStatus');
 if(panel)panel.open=inventoryStatusState.open;
}
function resetInventoryStatus() {
 inventoryStatusSnapshot();inventoryStatusState.bossHearts.clear();
}
function undoBossHeart(action) {
 if(!action.id?.startsWith('bossHeart:'))return false;
 const id=action.id.slice(10);inventoryStatusSnapshot();
 if(statusBosses.some(b=>b[0]===id))action.wasDone?inventoryStatusState.bossHearts.add(id):inventoryStatusState.bossHearts.delete(id);
 return true;
}
function inventoryStatusModel() {
 inventoryStatusSnapshot();
 const has=id=>checked.has(id), owns=name=>hasGuideMilestone(name);
 const tally=type=>({found:allItems.filter(e=>e.type===type&&isDone(e)).length,total:allItems.filter(e=>e.type===type).length});
 const skulls=tally('Gold Skulltula'),pieces=tally('Heart Piece'),bottles=tally('Bottle');
 const bossHearts=inventoryStatusState.bossHearts.size;
 const seedUpgrades=Number(has('Upgrade:0'))+Number(has('Upgrade:1'));
 const seedCapacity=seedUpgrades===2?50:seedUpgrades===1?40:owns('Slingshot')?30:0;
 const arrows=has('Upgrade:3')?50:has('Upgrade:2')?40:owns('Bow')?30:0;
 const bombs=has('Upgrade:5')?40:has('Upgrade:4')?30:owns('Bomb Bag')?20:0;
 const strength=has('Upgrade:16')?3:owns('Silver Gauntlets')?2:has('Upgrade:14')?1:0;
 const scale=owns('Golden Scale')?2:has('Upgrade:12')?1:0;
 const magic=has('Great Fairy:3')?2:owns('Magic')?1:0;
 const sword=owns('Adult access'),longshot=owns('Longshot');
 const item=(label,art,found,detail='')=>({label,art,found:!!found,detail});
 const items=[
  item('Kokiri Sword','sword',owns('Kokiri Sword')),
  item('Master Sword','master-sword',sword),
  item('Biggoron Sword','sword',has('Trade Sequence:11')),
  item('Deku Shield','shield',owns('Deku Shield')),
  item('Hylian Shield','shield',has('Equipment:0')),
  item('Mirror Shield','shield',has('Equipment:1')),
  item('Goron Tunic','red-tunic',has('Equipment:2')),
  item('Zora Tunic','blue-tunic',has('Equipment:3')),
  item('Hover Boots','winged-boots',has('Equipment:4')),
  item('Light Arrows','light-arrow',has('Equipment:5')),
  item('Giant’s Knife','sword',has('Equipment:6')),
  item('Bombchus','bomb',has('Equipment:7')||has('Side Quest:13')||has('Side Quest:4')),
  item('Deku Sticks','sticks',has('Equipment:8')||has('Upgrade:6')||has('Upgrade:7')),
  item('Deku Nuts','nuts',has('Equipment:9')||has('Upgrade:8')||has('Upgrade:9')),
  item('Echo Gem','spell-crystal',has('Equipment:10')),
  item('Slingshot','slingshot',seedCapacity,seedCapacity?seedCapacity+' seeds':''),
  item('Fairy Bow','bow',arrows,arrows?arrows+' arrows':''),
  item('Bomb Bag',bombs===40?'bomb-satchel-large':'bomb-satchel',bombs,bombs?bombs+' bombs':''),
  item('Boomerang','boomerang',owns('Boomerang')),
  item(longshot?'Longshot':'Hookshot','hookshot',longshot||owns('Hookshot'),longshot?'Upgraded':''),
  item('Megaton Hammer','hammer',owns('Hammer')),
  item('Lens of Truth','lens',owns('Lens of Truth')),
  item('Iron Boots','iron-boots',owns('Iron Boots')),
  item(owns('Song of Time')?'Ocarina of Time':'Fairy Ocarina','ocarina',owns('Ocarina')||owns('Song of Time')),
  item('Fire Arrows','fire-arrow',has('Side Quest:10')),
  item('Ice Arrows','ice-arrow',has('Side Quest:5')),
  item('Din’s Fire','fire-spell',owns('Magic')),
  item('Farore’s Wind','wind-spell',has('Great Fairy:2')),
  item('Nayru’s Love','protect-spell',has('Great Fairy:4')),
  item('Bottles','bottle',bottles.found||owns('Bottle'),bottles.found?bottles.found+' collected':''),
  item('Magic Beans','bean',owns('Magic Bean')),
  item('Epona','horse',owns('Epona')),
  item('Gerudo Pass','card',owns('Gerudo Card')),
  item(strength===3?'Golden Gauntlets':strength===2?'Silver Gauntlets':'Goron Bracelet',strength===3?'gold-gauntlet':strength===2?'silver-gauntlet':'bracelet',strength),
  item(scale===2?'Golden Scale':'Silver Scale',scale===2?'gold-scale':'silver-scale',scale)
 ];
 const collections=[
  {label:'Skulltulas',art:'skulltula',...skulls},
  {label:'Heart Pieces',art:'heart',...pieces},
  {label:'Bottles',art:'bottle',...bottles},
  {label:'Upgrades',art:'upgrade',...tally('Upgrade')},
  {label:'Masks',art:'oracle-mask',...tally('Mask')},
  {label:'Great Fairies',art:'fairy',...tally('Great Fairy')},
  {label:'Bean plots',art:'bean',...tally('Bean Planting')},
  {label:'Side quests',art:'quest-event',...tally('Side Quest')},
  {label:'Songs',art:'notes',found:allItems.filter(e=>e.type==='Song'&&isDone(e)).length,total:12}
 ];
 const capacities=[
  {label:'Seeds',art:seedCapacity===50?'seed-satchel-large':'seed-satchel',value:seedCapacity||'Not found'},
  {label:'Arrows',art:arrows===50?'quiver-large':'quiver',value:arrows||'Not found'},
  {label:'Bombs',art:bombs===40?'bomb-satchel-large':'bomb-satchel',value:bombs||'Not found'},
  {label:'Wallet',art:'wallet',value:has('Upgrade:11')?'1,000 rupees':has('Upgrade:10')?'500 rupees':'Base wallet'},
  {label:'Deku Sticks',art:'sticks',value:has('Upgrade:7')?30:has('Upgrade:6')?20:10},
  {label:'Deku Nuts',art:'nuts',value:has('Upgrade:9')?40:has('Upgrade:8')?30:20}
 ];
 return {skulls,pieces,bottles,bossHearts,hearts:Math.min(20,3+Math.floor(pieces.found/4)+bossHearts),
  magic,defense:has('Great Fairy:5'),items,collections,capacities};
}
function statusHeart(filled,defense=false) {
 return `<svg class="hud-heart ${filled?'filled':''} ${defense?'defended':''}" viewBox="0 0 32 32" aria-hidden="true"><path class="heart-body" d="M16 28.5 4.3 17.2C-3.4 9.1 7.4-1.1 16 7.2 24.6-1.1 35.4 9.1 27.7 17.2Z"/><path class="heart-shine" d="M6.5 11.5c-.4-3 3.1-5 5.6-2.9" fill="none" stroke-linecap="round"/></svg>`;
}
function ensureInventoryStatus() {
 if(document.getElementById('inventoryStatus'))return;
 inventoryStatusSnapshot();
 const panel=document.createElement('details');panel.id='inventoryStatus';panel.className='status-panel';panel.open=inventoryStatusState.open;
 panel.innerHTML=`<summary class="status-summary"><img src="art/chest.png" width="36" height="36" alt=""><span class="status-heading"><span class="status-eyebrow">PLAYER STATUS</span><strong>Adventure inventory</strong><small id="statusCompact"></small></span><span class="status-chevron" aria-hidden="true">⌄</span></summary><div class="status-content"><p class="status-caption">Your collection across both timelines</p><div id="statusHud" class="status-hud"></div><details class="boss-heart-picker" id="bossHeartPicker"><summary><span>Boss Heart Containers</span><span id="bossHeartCount"></span></summary><p>Mark the heart pickups you collected after each boss. These add to your maximum health.</p><div class="boss-heart-grid">${statusBosses.map(([id,name,dungeon])=>`<label class="boss-heart-option"><input type="checkbox" data-boss-heart="${id}"><span>${escape(name)}<small>${escape(dungeon)}</small></span></label>`).join('')}</div></details><div class="status-section-label"><h2>Items & equipment</h2><span id="statusOwned"></span></div><p class="status-legend">Found items glow. Dim slots are still uncollected.</p><div class="status-item-grid" id="statusItems" role="list"></div><div class="status-section-label"><h2>Collections</h2></div><div class="status-collection-grid" id="statusCollections"></div><div class="status-section-label"><h2>Carrying capacity</h2></div><div class="status-capacity-grid" id="statusCapacities"></div><p class="status-footnote">Item totals follow your checklist. Hearts and magic show maximum capacity, rather than current damage or energy.</p></div>`;
 document.querySelector('body > section.panel').insertAdjacentElement('afterend',panel);
 panel.addEventListener('toggle',event=>{
  if(event.target!==panel)return;
  if(inventoryStatusState.open!==panel.open){inventoryStatusState.open=panel.open;save();}
 });
 panel.addEventListener('change',event=>{
  const id=event.target.dataset.bossHeart;if(!id)return;
  const wasDone=inventoryStatusState.bossHearts.has(id);if(wasDone===event.target.checked)return;
  history.push({id:'bossHeart:'+id,wasDone});if(history.length>5)history.shift();
  event.target.checked?inventoryStatusState.bossHearts.add(id):inventoryStatusState.bossHearts.delete(id);
  save();updateUndo();renderInventoryStatus();
 });
}
function renderInventoryStatus() {
 ensureInventoryStatus();const s=inventoryStatusModel();
 document.getElementById('statusCompact').textContent=`${s.hearts} hearts · ${s.skulls.found} / ${s.skulls.total} Skulltulas`;
 document.getElementById('statusHud').innerHTML=`<div class="hud-life-heading"><span>LIFE</span><strong>${s.hearts}<small> / 20 hearts</small></strong></div><div class="hud-hearts" role="img" aria-label="Maximum health: ${s.hearts} of 20 hearts${s.defense?', enhanced defense':''}">${Array.from({length:20},(_,i)=>statusHeart(i<s.hearts,s.defense)).join('')}</div><p class="hud-health-math">3 starting + ${Math.floor(s.pieces.found/4)} from pieces + ${s.bossHearts} boss hearts</p><div class="hud-magic-heading"><span>MAGIC</span><strong>${s.magic===2?'Double meter':s.magic===1?'Normal meter':'Not unlocked'}</strong></div><div class="hud-magic-space"><div class="hud-magic-track ${s.magic===2?'double':''} ${s.magic?'unlocked':''}" role="meter" aria-label="Magic capacity" aria-valuemin="0" aria-valuemax="2" aria-valuenow="${s.magic}" aria-valuetext="${s.magic===2?'Double magic':s.magic===1?'Normal magic':'Not unlocked'}"><div></div></div></div><div class="hud-extras"><span class="hud-pieces"><img src="art/heart.png" width="25" height="25" alt=""><span>${s.pieces.found===s.pieces.total?'All piece hearts formed':`${s.pieces.found%4} / 4 toward next heart`}<span class="piece-pips" aria-hidden="true">${Array.from({length:4},(_,i)=>`<i class="${i<(s.pieces.found%4)?'lit':''}"></i>`).join('')}</span></span></span><span class="hud-defense ${s.defense?'active':''}"><img src="art/defense.png" width="25" height="25" alt="">${s.defense?'Enhanced defense':'Normal defense'}</span></div>`;
 document.getElementById('bossHeartCount').textContent=`${s.bossHearts} / 8`;
 document.querySelectorAll('[data-boss-heart]').forEach(input=>input.checked=inventoryStatusState.bossHearts.has(input.dataset.bossHeart));
 document.getElementById('statusOwned').textContent=`${s.items.filter(i=>i.found).length} / ${s.items.length} found`;
 document.getElementById('statusItems').innerHTML=s.items.map(i=>`<div class="status-item ${i.found?'found':'not-found'}" role="listitem" aria-label="${escape(i.label)}: ${i.found?'found':'not found'}${i.detail?', '+escape(i.detail):''}"><span class="status-item-art"><img src="art/${i.art}.png" width="43" height="43" alt="">${i.found?'<span class="status-found-mark" aria-hidden="true">◆</span>':''}</span><span class="status-item-name">${escape(i.label)}</span><small>${escape(i.detail||(i.found?'Found':'—'))}</small></div>`).join('');
 document.getElementById('statusCollections').innerHTML=s.collections.map(c=>`<div class="status-collection"><img src="art/${c.art}.png" width="29" height="29" alt=""><strong>${c.found}<small> / ${c.total}</small></strong><span>${escape(c.label)}</span></div>`).join('');
 document.getElementById('statusCapacities').innerHTML=s.capacities.map(c=>`<div class="status-capacity"><img src="art/${c.art}.png" width="29" height="29" alt=""><span>${escape(c.label)}<strong>${escape(c.value)}</strong></span></div>`).join('');
}
