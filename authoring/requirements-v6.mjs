// Reviewed permanent requirements. Consumable stock, prices, time of day and
// local dungeon keys stay in the written route; they are not ownership flags.
const any=(...any)=>({any});
const all=(...all)=>({all});
export function applyProgressionV6(g){
 const five=['Event:forest','Event:fire','Event:water','Event:shadow','Event:spirit'];
 const crossing=any('Longshot','Epona');
 const desert=any('Requiem of Spirit',all('Gerudo Card','Lens of Truth','Magic',any('Longshot','Hover Boots')));
 const areas={
  'Kokiri Forest':[], 'Lost Woods':[], 'Sacred Forest Meadow':[],
  'Deku Tree':['Deku Tree access'],
  'Hyrule Field':['Hyrule Field access'],'Hyrule Castle Town':['Hyrule Field access'],'Hyrule Castle':['Hyrule Field access'],
  'Kakariko':['Hyrule Field access'],'Windmill':['Hyrule Field access'],'Graveyard':['Hyrule Field access'],'Lon Lon Ranch':['Hyrule Field access'],
  'Gerudo Valley':['Hyrule Field access'],'Lake Hylia':['Hyrule Field access'],'Zora River':['Hyrule Field access'],
  'Zora Domain':['Hyrule Field access','Zelda Lullaby'],'Zora Fountain':['Hyrule Field access','Zelda Lullaby'],
  'Goron City':['Hyrule Field access'],'Death Mountain Trail':['Hyrule Field access'],'Death Mountain Summit':['Hyrule Field access'],'Death Mountain Crater':['Hyrule Field access'],
  'Dodongo Cavern':['Hyrule Field access','Goron Bracelet'],
  'Jabu-Jabu Belly':['Hyrule Field access','Event:king-moved','Bottle'],
  'Temple of Time':['Hyrule Field access'],
  'Forest Temple':['Hookshot','Saria Song'],
  'Fire Temple':['Goron Tunic','Hookshot'],
  'Water Temple':['Iron Boots','Zora Tunic','Hookshot','Zelda Lullaby'],
  'Ice Cavern':['Zelda Lullaby'],
  'Bottom of the Well':['Event:well-drained'],
  'Shadow Temple':['Nocturne of Shadow','Magic','Din Fire'],
  'Gerudo Fortress':[crossing], 'Gerudo Training Ground':[crossing,'Gerudo Card'],
  'Haunted Wasteland':['Gerudo Card','Lens of Truth','Magic',any('Longshot','Hover Boots')],
  'Desert Colossus':[desert], 'Spirit Temple':[desert], 'Ganon Castle':[]
 };
 for(const[id,e]of Object.entries(g)){
  if(!areas[e.area]&&e.area!=='Market')throw Error('Unreviewed region '+e.area);
  e.requires=[...(areas[e.area==='Market'?'Hyrule Castle Town':e.area]||[])];
  if(e.age==='Adult')e.requires.push('Adult access');
  if(e.age==='Child'&&['Goron City','Death Mountain Trail','Death Mountain Summit','Death Mountain Crater','Dodongo Cavern'].includes(e.area))e.requires.push('Event:mountain-gate');
  if(e.age==='Child'&&e.area==='Zora Fountain')e.requires.push('Event:king-moved');
  if(e.age==='Child'&&['Desert Colossus','Spirit Temple'].includes(e.area))e.requires=['Requiem of Spirit','Event:time-travel'];
  delete e.extraRequires;
 }
 const add=(id,...req)=>{if(!g[id])throw Error('Unknown requirement target '+id);g[id].requires.push(...req);};
 const set=(id,...req)=>{if(!g[id])throw Error('Unknown requirement target '+id);g[id].requires=req;};
 const batch=(prefix,ids,...req)=>ids.forEach(i=>add(prefix+':'+i,...req));
 // All 100 active tokens, including traversal and item-specific dungeon paths.
 batch('Gold Skulltula',[0,1,2,6,9,21],'Slingshot');
 batch('Gold Skulltula',[3,4,7,8,10,11,15,16,29,98],'Sword');
 batch('Gold Skulltula',[5,13,14,17,18,19,20,27,54,89],'Bottle');
 add('Gold Skulltula:18','Deku Shield');
 batch('Gold Skulltula',[22,23,24,25,99],'Bomb Bag');add('Gold Skulltula:22','Slingshot');add('Gold Skulltula:99','Slingshot');
 batch('Gold Skulltula',[28,31,32,33,34,36,37,38,39,40,75,76,77,78,92,93,94],'Boomerang');add('Gold Skulltula:30','Slingshot');add('Gold Skulltula:33','Slingshot');
 add('Gold Skulltula:35','Deku Sticks','Slingshot');add('Gold Skulltula:41','Bomb Bag','Slingshot');
 batch('Gold Skulltula',[42,43,44,45,46,47,48,49,50,51,52,53,55,56,57,58,59,60,61,62,64,65,66,67,68,69,79,80,81,84,85,95,97],'Hookshot');
 add('Gold Skulltula:55','Song of Time');add('Gold Skulltula:56','Bomb Bag');
 batch('Gold Skulltula',[59,60,61],'Hammer');
 batch('Gold Skulltula',[66,67],'Event:blue-fire');
 add('Gold Skulltula:68','Iron Boots','Zora Tunic');add('Gold Skulltula:69','Bomb Bag');
 batch('Gold Skulltula',[63,70,71,72,73,74,82,83,86,87,88,91,96],'Longshot');
 add('Gold Skulltula:74','Event:water');
 batch('Gold Skulltula',[79,80,81,82,83],'Lens of Truth','Hover Boots');add('Gold Skulltula:83','Bomb Bag');
 batch('Gold Skulltula',[84,85],crossing);batch('Gold Skulltula',[86,87],'Gerudo Card');
 add('Gold Skulltula:95','Silver Gauntlets','Song of Time');
 add('Gold Skulltula:96','Silver Gauntlets');add('Gold Skulltula:97','Silver Gauntlets','Lens of Truth');
 batch('Gold Skulltula',[49,52,57,58,82,96],'Side Quest:8');
 // Heart Pieces: every permanent prerequisite is represented, with valid
 // alternatives instead of forcing optional equipment or unrelated dungeons.
 g['Heart Piece:0'].perAgeRequires={Child:[],Adult:['Hookshot']};
 add('Heart Piece:7','Ocarina');add('Heart Piece:8','Ocarina','Saria Song');
 add('Heart Piece:9','Goron Bracelet','Deku Sticks');add('Heart Piece:10','Goron Tunic','Hookshot');
 add('Heart Piece:11','Event:mountain-gate','Bomb Bag');
 add('Heart Piece:12','Equipment:7','Upgrade:5','Event:dodongo');add('Heart Piece:13','Bomb Bag');
 add('Heart Piece:15','Deku Sticks');batch('Heart Piece',[17,18],'Hookshot');
 set('Heart Piece:19','50 Gold Skulltula tokens','Side Quest:13');
 add('Heart Piece:21','Golden Scale');add('Heart Piece:23','Goron Tunic','Bolero of Fire');
 add('Heart Piece:25','Zora Tunic','Iron Boots');
 add('Heart Piece:26','Ocarina','Song of Storms');
 add('Heart Piece:27','Ocarina','Zelda Lullaby','Saria Song','Epona Song','Sun Song','Song of Time');
 add('Heart Piece:28','Lens of Truth','Magic');add('Heart Piece:29','Longshot','Gerudo Card','Side Quest:8');
 add('Heart Piece:30','Epona','Bow','Gerudo Card');add('Heart Piece:33','Bomb Bag');add('Heart Piece:35','Deku Shield');
 // Bottles, masks and actual sequential exchanges.
 add('Bottle:2','Event:talon-awake');add('Bottle:3','Silver Scale');add('Bottle:4','Epona','Bow','Bottle');
 set('Mask:0','Mask access');for(let i=1;i<4;i++)set('Mask:'+i,'Mask:'+(i-1));
 add('Mask:1','Saria Song');add('Mask:3','Event:jabu');for(let i=4;i<8;i++)set('Mask:'+i,'Mask:3');
 batch('Upgrade',[0,1],'Slingshot');add('Upgrade:2','Bow');add('Upgrade:3','Bow','Epona','Gerudo Card','Heart Piece:30');
 add('Upgrade:4','Bomb Bag');add('Upgrade:5','Equipment:7','Event:dodongo');
 add('Upgrade:6','Deku Shield');add('Upgrade:7','Mask:1','Upgrade:6');add('Upgrade:8','Deku Shield','Bomb Bag');add('Upgrade:9','Mask:4','Upgrade:8');
 set('Upgrade:10','10 Gold Skulltula tokens');set('Upgrade:11','30 Gold Skulltula tokens','Equipment:10');
 add('Upgrade:14','Ocarina','Zelda Lullaby','Saria Song');
 add('Upgrade:15','Requiem of Spirit','Boomerang','Bomb Bag');
 set('Upgrade:16','Adult access','Event:ganon-bridge','Bow','Lens of Truth',any('Hookshot','Hover Boots'));
 batch('Great Fairy',[0,1,2,4],'Bomb Bag','Zelda Lullaby');batch('Great Fairy',[1,2,4,5],'Magic');
 add('Great Fairy:3','Hammer','Hookshot','Goron Tunic','Zelda Lullaby','Magic');
 add('Great Fairy:4',{wallet:300});
 set('Great Fairy:5','Adult access','Event:ganon-bridge','Golden Gauntlets','Zelda Lullaby','Magic',{wallet:500});
 for(let i=0;i<12;i++)set('Trade Sequence:'+i,'Adult access',...(i?['Trade Sequence:'+(i-1)]:[]));
 add('Trade Sequence:6',crossing);add('Trade Sequence:8','Event:king-thawed');
 // Epona is a route convenience on timed deliveries, not a hard requirement.
 add('Trade Sequence:11','Equipment:6');
 for(let i=0;i<10;i++)add('Magic Bean:'+i,'Magic Bean');
 add('Magic Bean:2','Deku Shield');add('Magic Bean:6','Bolero of Fire');add('Magic Bean:9','Requiem of Spirit');
 // The lower crater soil is reached directly by warp; opening the mountain
 // gate is not a prerequisite for this route.
 set('Magic Bean:6','Magic Bean','Bolero of Fire');set('Gold Skulltula:54','Bottle','Bolero of Fire');
 add('Side Quest:1','Epona Song');add('Side Quest:2','Epona','Event:ranch-restored');
 add('Side Quest:3','Heart Piece:26','Heart Piece:27');
 add('Side Quest:4','Heart Piece:12','Upgrade:5');
 add('Side Quest:5','Bow','Longshot','Hammer','Magic','Zora Tunic','Iron Boots',any('Fire Arrows','Din Fire'));
 add('Side Quest:6','Epona','Bow','Bottle','Bottle:4');add('Side Quest:7','Ocarina');add('Side Quest:8','Side Quest:7','Ocarina');
 set('Side Quest:9','100 Gold Skulltula tokens','Heart Piece:19');
 add('Side Quest:10','Bow','Event:water');add('Side Quest:11','Heart Piece:28');
 add('Side Quest:12','Heart Piece:30','Upgrade:3');set('Side Quest:13','40 Gold Skulltula tokens','Upgrade:11');
 // Existing progression keys remain stable. Dungeon items are distinct from
 // the boss reward flags below; finding the Bow never clears Forest Temple.
 set('progress:0');set('progress:1');set('progress:2','Kokiri Sword','Deku Shield');
 set('progress:3','Deku Tree access','Deku Shield');set('progress:4','Deku Tree access','Slingshot','Deku Shield','Deku Sticks');
 g['progress:4'].type='Event';g['progress:4'].name='Clear Great Deku Tree — Kokiri’s Emerald';
 set('progress:5','Deku Tree cleared');set('progress:6','Hyrule Field access','Ocarina','Event:talon-awake');
 set('progress:7','Deku Tree cleared');set('progress:8','Ocarina','Zelda Letter');
 set('progress:9','Event:mountain-gate','Goron Bracelet','Slingshot','Deku Shield');
 set('progress:10','Zelda Letter','Ocarina');set('progress:11','Event:king-moved','Bottle','Slingshot');
 set('progress:12','Deku Tree cleared','Event:dodongo','Event:jabu');set('progress:13','Song of Time','Deku Tree cleared','Event:dodongo','Event:jabu');
 g['progress:13'].type='Event';g['progress:13'].age='Child';g['progress:13'].name='Draw Master Sword — Light Medallion / Adult Link';
 set('progress:14','Adult access');set('progress:15','Adult access','Epona Song');
 set('progress:16','Adult access','Hookshot','Saria Song');set('progress:17','Adult access','Goron Tunic','Hookshot','Bomb Bag');
 set('progress:18','Adult access','Bottle','Event:blue-fire');set('progress:19','Adult access','Iron Boots','Hookshot','Zora Tunic','Zelda Lullaby');
 set('progress:20','Adult access','Ocarina');set('progress:21','Event:well-drained','Slingshot','Deku Sticks');
 set('progress:22','Ocarina','Zelda Lullaby');set('progress:23','Requiem of Spirit','Boomerang','Bomb Bag','Event:time-travel');
 set('progress:24','Adult access',crossing);g['progress:24'].type='Event';
 set('progress:25','Adult access');set('progress:26','Event:mountain-gate','Bomb Bag','Zelda Lullaby');
 set('progress:27','Hyrule Field access');set('progress:28','Hyrule Field access');set('progress:29','Event:mountain-gate');
 set('progress:30','Ocarina','Event:talon-awake');set('progress:31','Adult access','Hookshot','Saria Song','Ocarina');
 set('progress:32','Adult access','Event:forest','Ocarina');set('progress:33','Adult access','Goron Tunic','Hookshot','Ocarina');
 set('progress:34','Adult access','Iron Boots','Ocarina');set('progress:35','Adult access','Event:forest','Event:fire','Event:water','Ocarina');
 set('progress:36','Adult access','Ocarina','Gerudo Card','Lens of Truth','Magic',any('Longshot','Hover Boots'));
 set('Equipment:0','Hyrule Field access','Sun Song');set('Equipment:1','Adult access','Silver Gauntlets','Hookshot','Zelda Lullaby');
 set('Equipment:2','Adult access','Bomb Bag');set('Equipment:3','Adult access','Event:king-thawed');
 set('Equipment:4','Adult access','Nocturne of Shadow','Din Fire','Lens of Truth','Magic');
 set('Equipment:5','Adult access',...five);g['Equipment:5'].sources=['nl-arrows'];
 set('Equipment:6','Adult access');set('Equipment:7','Event:dodongo');set('Equipment:8','Kokiri Sword');set('Equipment:9','Deku Tree access','Sword');
 set('Equipment:10','20 Gold Skulltula tokens','Upgrade:10');
 const event=(id,name,area,age,requires,steps,source)=>g['Event:'+id]={name,area,age,type:'Event',time:'Story event',equipment:[],requires,steps,sources:[source],note:'Check after receiving the stated reward or completing this event.'};
 for(const[id,name,area,age,req,boss,reward]of [
  ['dodongo','Clear Dodongo Cavern — Goron’s Ruby','Dodongo Cavern','Child',['Goron Bracelet','Bomb Bag','Deku Shield'],'King Dodongo','Goron’s Ruby'],
  ['jabu','Clear Jabu-Jabu — Zora’s Sapphire','Jabu-Jabu Belly','Child',['Event:king-moved','Boomerang','Slingshot'],'Barinade','Zora’s Sapphire'],
  ['forest','Clear Forest Temple — Forest Medallion','Forest Temple','Adult',['Adult access','Hookshot','Bow','Saria Song'],'Phantom Ganon','Forest Medallion'],
  ['fire','Clear Fire Temple — Fire Medallion','Fire Temple','Adult',['Adult access','Goron Tunic','Hookshot','Hammer'],'Volvagia','Fire Medallion'],
  ['water','Clear Water Temple — Water Medallion','Water Temple','Adult',['Adult access','Iron Boots','Zora Tunic','Longshot','Zelda Lullaby'],'Morpha','Water Medallion'],
  ['shadow','Clear Shadow Temple — Shadow Medallion','Shadow Temple','Adult',['Adult access','Nocturne of Shadow','Din Fire','Lens of Truth','Magic','Hover Boots','Bow','Hookshot'],'Bongo Bongo','Shadow Medallion'],
  ['spirit','Clear Spirit Temple — Spirit Medallion','Spirit Temple','Adult',['Adult access','Silver Gauntlets','Mirror Shield','Longshot','Zelda Lullaby'],'Twinrova','Spirit Medallion']
 ]){event(id,name,area,age,req,['Defeat '+boss+' in this dungeon.','Enter the blue exit warp after the fight.','Finish the scene and receive the '+reward+'.'],'v6-medallions');g['Event:'+id].note='';}
 event('talon-awake','Wake Talon at the castle moat','Hyrule Castle','Child',['Hyrule Field access'],['Get Malon’s egg and let it hatch.','Use the Cucco beside sleeping Talon at the castle moat.','Finish his conversation so he returns to the ranch.'],'c05');
 event('mountain-gate','Show Zelda’s Letter — open mountain gate','Kakariko','Child',['Zelda Letter'],['Approach the guard above Kakariko.','Show him Zelda’s Letter and finish the conversation.','Confirm the gate toward Death Mountain is open.'],'g03');
 event('king-moved','Deliver Ruto’s Letter — King Zora moves','Zora Domain','Child',['Bottle:3','Zelda Lullaby'],['Find King Zora on the upper throne platform.','Show Ruto’s Letter from its bottle.','Wait for him to move and open the fountain route.'],'g09');
 event('blue-fire','Reach Blue Fire in the Ice Cavern','Ice Cavern','Adult',['Adult access','Bottle','Zelda Lullaby'],['Cross the frozen fountain to the Ice Cavern.','Reach its first Blue Fire source with a bottle.','Bottle the flame; this records access to refills, not current stock.'],'nl-ice');
 event('king-thawed','Thaw King Zora with Blue Fire','Zora Domain','Adult',['Adult access','Event:blue-fire','Bottle'],['Return to the frozen king with bottled Blue Fire.','Release it beside his red ice.','Wait until the ice melts and speak to him.'],'v6-story');
 event('time-travel','Unlock return to Young Link','Temple of Time','Adult',['Adult access','Event:forest','Prelude of Light'],['Return to the sword pedestal after the Forest Temple.','Finish Sheik’s explanation of returning to childhood.','Place the Master Sword in its pedestal to become Young Link.'],'v6-story');
 event('well-drained','Drain Kakariko’s well','Windmill','Child',['Song of Storms','Ocarina'],['Enter the windmill as Young Link.','Play Song of Storms to the musician.','Finish the scene and confirm the village well has drained.'],'c32');
 event('ranch-restored','Return to Malon after winning Epona','Lon Lon Ranch','Adult',['Adult access','Epona'],['Leave the ranch after winning Epona.','Return during daylight after the ranch scene has settled.','Speak to Malon to open her riding-course challenge.'],'nl-epona');
 event('ganon-bridge','Open the sages’ bridge to Ganon Castle','Ganon Castle','Adult',['Adult access','Equipment:5',...five],['Receive Zelda’s Light Arrows at the Temple of Time.','Return to the ruined castle grounds.','Watch the sages create the bridge and cross it.'],'v6-story');
 const aliases={
  'Hyrule Field access':['Adult access'],'Deku Tree access':['Deku Tree cleared'],
  'Sword':['Kokiri Sword','Adult access','Trade Sequence:11','Equipment:6'],
  'Slingshot':['Upgrade:0','Upgrade:1'],'Bow':['Upgrade:2','Upgrade:3'],'Bomb Bag':['Upgrade:4','Upgrade:5'],
  'Hookshot':['Longshot'],'Silver Gauntlets':['Upgrade:15','Upgrade:16'],'Golden Gauntlets':['Upgrade:16'],
  'Goron Bracelet':['Upgrade:14','Upgrade:15','Upgrade:16'],'Silver Scale':['Upgrade:12','Upgrade:13','Golden Scale'],
  'Golden Scale':['Upgrade:13'],'Goron Tunic':['Equipment:2'],'Zora Tunic':['Equipment:3'],'Mirror Shield':['Equipment:1'],
  'Hover Boots':['Equipment:4'],'Magic':['Great Fairy:0','Great Fairy:3'],'Din Fire':['Great Fairy:0','progress:26'],
  'Epona':['Side Quest:1'],'Bottle':['Bottle:0','Bottle:1','Bottle:2','Bottle:3','Bottle:4'],
  'Deku Sticks':['Equipment:8','Upgrade:6','Upgrade:7'],'Deku Nuts':['Equipment:9','Upgrade:8','Upgrade:9'],
  'Skull Mask':['Mask:1'],'Mask of Truth':['Mask:4'],'Fire Arrows':['Side Quest:10']
 };
 const sequences={
  'Adult trading quest':Array.from({length:12},(_,i)=>'Trade Sequence:'+i),
  'Mask sales':Array.from({length:4},(_,i)=>'Mask:'+i),
  'Bombchu Bowling prizes':['Equipment:7','Upgrade:5','Heart Piece:12'],
  'Horseback archery prizes':['Heart Piece:30','Upgrade:3'],
  'Skulltula family rewards':['Upgrade:10','Equipment:10','Upgrade:11','Side Quest:13','Heart Piece:19','Side Quest:9'],
  'Poe Collector rewards':['Bottle:4','Side Quest:6'],
  'Deku Stick capacity':['Upgrade:6','Upgrade:7'],
  'Deku Nut capacity':['Upgrade:8','Upgrade:9']
 };
 const migrationProofs=[
  {if:'Adult access',grant:['progress:4','Event:dodongo','Event:jabu','Event:king-moved']},
  {if:'Zelda Letter',grant:['Event:talon-awake']},
  {if:any('Mask access','Upgrade:14'),grant:['Event:mountain-gate']},
  {if:'Equipment:3',grant:['Event:blue-fire','Event:king-thawed']},
  {if:'Iron Boots',grant:['Event:blue-fire']},
  {if:'Prelude of Light',grant:['Event:forest','Event:time-travel']}
 ];
 return {aliases,sequences,adultDungeonRewards:five,migrationProofs};
}
