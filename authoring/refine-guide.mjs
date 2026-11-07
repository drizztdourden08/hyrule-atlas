// Editorial corrections and corroborating references found during the second review.
export function refineGuide(g){
 const set=(id,changes)=>Object.assign(g[id],changes);
 set('Great Fairy:1',{steps:[
  'Enter the Hyrule Castle grounds from Castle Town. Pass the opening gatehouse and follow the path until it bends left.',
  'At that bend, inspect the outside corner to your right for the large bombable rock. You do not need to go all the way to Talon’s moat corner for this fountain.',
  'Bomb the rock, move back from the blast, and crawl into the newly exposed passage.',
  'Follow the corridor to the fountain, stand on the royal crest, and play Zelda’s Lullaby.',
  'Pay the quoted offering and finish the fairy scene to receive the improved Spin Attack.'
 ],sources:['nl-fairy'],note:'The summit fairy gives Din’s Fire in the remake; this separate castle visit gives the Spin Attack. The old database mixed up those gifts.'});
 set('Great Fairy:4',{steps:[
  'Warp to Desert Colossus as an adult, or enter from the wasteland after earning the Gerudo Pass.',
  'From the Spirit Temple forecourt, search the northern cliff face for the visibly cracked wall; this fountain is not inside the temple.',
  'Place a bomb against that wall and stand back. Enter the cave exposed by the explosion.',
  'Follow the passage to the fountain, play Zelda’s Lullaby on the crest, and pay the offering for Nayru’s Love.'
 ],equipment:['Bomb Bag','Zelda Lullaby','Magic','300 rupees'],sources:['nl-fairy'],note:'The remake-specific location guide describes a bombable northern wall. This replaces the earlier instruction to use the Hammer.'});
 set('Great Fairy:5',{steps:[
  'Collect the Golden Gauntlets inside Ganon Castle’s Shadow Trial, then leave the castle by its bridge.',
  'After crossing back outside, turn left and follow the path to the dead end with the enormous dark pillar.',
  'Use the Golden Gauntlets to lift and throw the pillar, revealing the fairy entrance.',
  'Enter, play Zelda’s Lullaby on the royal crest, and pay the offering to receive halved incoming damage.'
 ],note:'The 500-rupee offering requires enough wallet capacity. The exact route is outside the castle, to the left after its bridge.'});
 set('Side Quest:8',{sources:['nl-scarecrow']});set('Side Quest:1',{sources:['nl-epona']});
 set('Side Quest:2',{sources:['c34']});set('Side Quest:4',{sources:['r12']});set('Side Quest:12',{sources:['r12']});
 set('progress:25',{sources:['rk-scale']});set('Upgrade:13',{sources:['rk-scale']});
 set('Side Quest:10',{sources:['nl-arrows']});set('progress:17',{sources:['c26']});
 set('Trade Sequence:6',{sources:['v-trade']});set('Trade Sequence:7',{sources:['v-trade']});set('Trade Sequence:10',{sources:['v-trade']});
 set('Trade Sequence:3',{sources:['p03']});set('Trade Sequence:4',{sources:['p02']});
 set('Upgrade:9',{sources:['r04']});set('Side Quest:6',{sources:['r09']});set('Bottle:4',{sources:['c24']});
 set('Heart Piece:19',{sources:['r01']});set('Gold Skulltula:6',{sources:['v05']});set('Gold Skulltula:7',{sources:['v05']});
 set('Gold Skulltula:63',{sources:['v10']});set('Gold Skulltula:64',{sources:['v10']});
 set('Gold Skulltula:86',{sources:['n01']});set('Gold Skulltula:87',{sources:['n01']});
 set('Gold Skulltula:90',{sources:['r06']});set('Magic Bean:9',{sources:['r06']});
 set('Magic Bean:0',{sources:['c16']});set('Magic Bean:1',{sources:['r18']});
 set('Magic Bean:7',{sources:['c18']});set('Magic Bean:8',{sources:['r18']});
 set('Heart Piece:8',{sources:['g06']});set('Heart Piece:17',{sources:['ni-heart']});
 set('Great Fairy:2',{sources:['g10']});set('Gold Skulltula:61',{sources:['p01']});
 set('Gold Skulltula:68',{sources:['p01']});set('Gold Skulltula:94',{sources:['p01']});
 set('progress:29',{sources:['r07']});set('Mask:4',{sources:['r12']});
 set('progress:10',{sources:['g03']});set('Upgrade:6',{sources:['v90']});
 set('Trade Sequence:9',{sources:['c29']});set('Trade Sequence:8',{sources:['r08']});
 set('Heart Piece:1',{sources:['ni-heart']});set('Heart Piece:18',{sources:['c21']});
 set('Heart Piece:21',{sources:['r13']});set('Heart Piece:30',{sources:['r02']});
 set('Gold Skulltula:12',{note:'The old list counted a fourth ranch description. The remake guide lists only three; this extra shelter record is kept for reviewing an older checkmark.',steps:['Do not search for a fourth token using this older ranch description.','Use the active ranch entries for the tree, entrance-building window, and ruined tower.','Keep this archived record to review your older checkmark; it does not increase the remake token total.']});
 for(const id of ['Heart Piece:30','Upgrade:3','Side Quest:12']){
  g[id].note+=' Current published guides disagree on archery thresholds. The attendant’s displayed target takes priority; treat 750 / 1,400 as route-guide reports, not a guaranteed target in every version.';
 }
 const frogs=['Zelda’s Lullaby','Saria’s Song','Epona’s Song','Sun’s Song','Song of Time'].join(', ');
 g['Heart Piece:27'].steps[1]=`Play ${frogs} so all five frogs grow and offer their ensemble game.`;
 g['Side Quest:3'].steps[2]=`Play ${frogs} until all five frogs grow and the ensemble game unlocks.`;
 for(const id of ['Heart Piece:5','Upgrade:13','progress:25']){
  const rec=g[id];rec.steps=rec.steps.map(s=>s.replace('steering against its pull','matching its swimming direction').replace('reel while steering against its pull','reel while matching its swimming direction'));
 }
 set('Trade Sequence:1',{note:'If Talon is no longer in the village house after the ranch story, check his returned location at Lon Lon Ranch. Waking him does not itself award Cojiro.'});
 // Keep each guide attached to an appropriate specific chapter or companion page.
 const references={
  'Gold Skulltula:3':'g03','Gold Skulltula:43':'n01','Magic Bean:7':'r18','Gold Skulltula:58':'v13','Magic Bean:3':'v02',
  'Heart Piece:17':'c21','progress:14':'s-hookshot','progress:18':'nl-ice','Side Quest:0':'g05','Trade Sequence:8':'r14',
  'Trade Sequence:5':'r14','Upgrade:12':'g09','Gold Skulltula:28':'g10','Heart Piece:7':'p02','Heart Piece:8':'r02','progress:29':'c04'
 };
 for(const[id,source]of Object.entries(references))g[id].sources=[source];
 set('Mask:4',{sources:['r16'],steps:['Complete the four mask sales in order and repay each mask’s debt.','Return to the Happy Mask Shop in daylight and settle the Bunny Hood payment.','Borrow the Mask of Truth from the special reserve.','Wear it for Gossip Stones and the Forest Stage nut upgrade.']});
 g['Gold Skulltula:12'].note='The old ranch list counted an extra shelter. This archive preserves its checkmark without adding another remake token.';
 g['Gold Skulltula:64'].steps[0]='Enter frozen Zora Domain.';
 g['Upgrade:3'].note='Sources disagree on archery thresholds: this remake walkthrough records 1,400, while older guides use 1,500. Use the attendant’s displayed target.';
 g['Great Fairy:1'].note='The summit fairy gives Din’s Fire; this visit gives the Spin Attack.';
 g['Heart Piece:30'].note='The route guide reports 750 points; published sources disagree. Use the attendant’s displayed Heart Piece target. The quiver is a separate prize.';
 g['progress:14'].steps[0]='Enter the Graveyard as an adult. Turn left from its entrance, find the large tree, and locate Dampé’s movable headstone beside it.';
 g['progress:17'].steps[4]='Ride the platform that rises after the Flare Dancer fight, climb the mesh wall, and clear the Bomb Flower obstacles to reach 5F. Cross the narrow stone stairway over lava to the raised item chest.';
 g['progress:21'].steps[4]='Follow the newly opened passage to the foggy Dead Hand room. Slash the emerging hands until the body rises, then attack it between its strikes and retreat before it counters.';
 set('Heart Piece:26',{name:'Frogs 1 of 2 — Song of Storms',start:'Zora River as Young Link: look for the northern side alcove about halfway along the river. The blue frog sits on a stump by the musical log.',steps:[
  'Learn Song of Storms from the adult windmill musician, then return to Young Link.',
  'At the river’s frog log, stand on the Ocarina spot and bring out the instrument.',
  'Play Song of Storms and collect the Heart Piece after the frogs celebrate.',
  'The separate insect-catching reward is listed as Frogs 2 of 2.'
 ],related:['Heart Piece:27'],note:'Each frog reward has its own Heart Piece checkbox.'});
 set('Heart Piece:27',{name:'Frogs 2 of 2 — insect-catching game',start:'Use the same northern river alcove and musical log as the Song of Storms reward. Both rewards are collected as Young Link.',equipment:['Ocarina','Zelda Lullaby','Saria Song','Epona Song','Sun Song','Song of Time'],steps:[
  'Stand on the frog log as Young Link and bring out the Ocarina.',
  'Play Zelda’s Lullaby, Saria’s Song, Epona’s Song, Sun’s Song and Song of Time once each.',
  'Check that all five frogs are large, then accept their insect-catching game.',
  'Use the displayed note for the frog with an insect above it; retry if you miss.',
  'Finish the game and collect this separate Heart Piece.'
 ],sources:['np-hearts'],note:'',related:['Heart Piece:26']});
 set('Heart Piece:13',{name:'River pillar — high-island Cucco route',equipment:['Cucco','Bomb Bag'],steps:[
  'Carry the lower river Cucco upstream to the raised ledge near the second rusted gate.',
  'Throw it onto the ledge, climb after it, then glide toward the climbable vines downriver.',
  'Climb to the high island and enter the hidden opening for another Cucco.',
  'Take that bird outside and glide from the high island to the Heart Piece pillar.'
 ],sources:['np-hearts'],note:'Use the high-island route; a low jump from the riverbank can fall short in the remake.'});
 set('Heart Piece:14',{name:'River waterfall platform',steps:[
  'Carry a Cucco upstream to the final winding path below the Domain waterfall.',
  'Face back downriver toward the separate Heart Piece platform.',
  'Glide onto that platform and collect the piece.'
 ],sources:['np-hearts']});
 set('Heart Piece:10',{age:'Adult',equipment:['Hookshot','Goron Tunic'],note:'Use the adult route to the ledge between the crater’s metal meshes. The child Scrub purchase is a separate piece.'});
 set('Heart Piece:0',{age:'Both',equipment:['Cucco as Young Link, or Hookshot as Adult Link'],note:'The Cucco route works as Young Link. Adult Link can reach the rooftop using the Hookshot.'});
 g['Side Quest:3'].related=['Heart Piece:26','Heart Piece:27'];
 g['Side Quest:3'].note='This is a quest overview. Track its two separate pickups using the Heart Piece cards linked below.';
 g['Side Quest:4'].related=['Equipment:7','Upgrade:5','Heart Piece:12'];
 g['Side Quest:12'].related=['Heart Piece:30','Upgrade:3'];
 g['Side Quest:0'].related=['Bottle:1'];g['Side Quest:6'].related=['Bottle:4'];
 g['Side Quest:9'].related=['Equipment:10','Upgrade:10','Upgrade:11','Side Quest:13','Heart Piece:19'];
 g['progress:12'].name='Ocarina of Time & Song of Time';
 g['progress:13'].name='Draw the Master Sword / become Adult Link';
 for(const id of [8,10,12,20,22])g['progress:'+id].type='Song';
 g['Gold Skulltula:43'].area='Ganon Castle';
 set('Heart Piece:10',{steps:['Enter the crater as an adult wearing the Goron Tunic.','From the lower temple approach, Hookshot toward the summit tunnel without leaving the crater.','Face the crater’s center and find the pair of climbable metal meshes.','Climb or drop between them onto the narrow ledge and collect the Heart Piece.'],note:'The child Business Scrub purchase is a separate piece.'});
 g['Heart Piece:13'].steps[2]='Climb to the high island; bomb the opening if sealed and take the Cucco inside.';
 g['Heart Piece:13'].note='Use the high island; a low riverbank jump can fall short.';
 // Each adult trade step needs the item produced by its immediate predecessor.
 for(let i=0;i<12;i++)g['Trade Sequence:'+i].requires=['Adult access',...(i?['Trade Sequence:'+(i-1)]:[])];
 g['Trade Sequence:6'].requires.push({any:['Epona','Longshot']},'Hammer');
 g['Trade Sequence:8'].requires.push('Bottle');
 g['Trade Sequence:9'].requires.push('Epona');
 g['Trade Sequence:11'].requires.push('Equipment:6');
 g['Mask:0'].requires=['Mask access'];
 for(let i=1;i<4;i++)g['Mask:'+i].requires=['Mask:'+(i-1)];
 g['Mask:1'].requires.push('Saria Song');
 g['Mask:3'].requires.push('Song of Time');
 for(let i=4;i<8;i++)g['Mask:'+i].requires=['Mask:3'];
 const rewardNeeds={
  'Upgrade:10':['10 Gold Skulltula tokens'],
  'Equipment:10':['20 Gold Skulltula tokens','Upgrade:10'],
  'Upgrade:11':['30 Gold Skulltula tokens','Equipment:10'],
  'Side Quest:13':['40 Gold Skulltula tokens','Upgrade:11'],
  'Heart Piece:19':['50 Gold Skulltula tokens','Side Quest:13'],
  'Side Quest:9':['100 Gold Skulltula tokens','Heart Piece:19'],
  'Upgrade:5':['Bomb Bag','Equipment:7'],
  'Heart Piece:12':['Bomb Bag','Upgrade:5'],
  'Upgrade:3':['Adult access','Bow','Epona','Gerudo Card','Heart Piece:30'],
  'Upgrade:7':['Mask:1','Upgrade:6'],
  'Upgrade:9':['Mask:4','Upgrade:8'],
  'Side Quest:8':['Adult access','Ocarina','Side Quest:7']
 };
 for(const[id,requires]of Object.entries(rewardNeeds))g[id].requires=requires;
 // Plot IDs retain their old checkmarks. Buying beans and planting each plot
 // are independent records; soil spiders need bugs, not a planted bean.
 const beanRewards={0:['Gold Skulltula:62'],1:[],2:['Gold Skulltula:45'],3:[],4:['Heart Piece:16'],5:['Heart Piece:22'],6:['Heart Piece:23'],7:['Heart Piece:20'],8:[],9:['Gold Skulltula:90','Heart Piece:31']};
 for(const[plot,rewards]of Object.entries(beanRewards)){
  const id='Magic Bean:'+plot;g[id].type='Bean Planting';g[id].related=rewards;
  for(const reward of rewards){g[reward].related=[...(g[reward].related||[]),id];}
 }
 const beanNeeds={
  'Gold Skulltula:45':['Adult access','Hookshot','Magic Bean:2'],
  'Gold Skulltula:62':['Adult access','Hookshot','Magic Bean:0'],
  'Gold Skulltula:90':['Adult access','Magic Bean:9'],
  'Heart Piece:16':['Adult access','Magic Bean:4'],
  'Heart Piece:22':['Adult access','Magic Bean:5'],
  'Heart Piece:23':['Adult access','Magic Bean:6','Goron Tunic','Bolero of Fire'],
  'Heart Piece:31':['Adult access','Magic Bean:9'],
  'Heart Piece:20':['Adult access',{any:['Magic Bean:7',{all:['Side Quest:8','Hookshot']}]}]
 };
 for(const[id,requires]of Object.entries(beanNeeds))g[id].requires=requires;
 g['Heart Piece:20'].equipment=['Bean planted at Lakeside Laboratory, or activated Scarecrow Song and Hookshot'];
 g['Heart Piece:20'].steps=['As an adult, start beside the Lakeside Laboratory.','Ride the bean planted here as a child to the roof, or summon the Scarecrow and Hookshot up.','Climb the roof tower’s ladder and collect the Heart Piece.'];
 const cross=(ids,young,adult,first='Young')=>ids.forEach(id=>g[id].crossTime={young,adult,first});
 for(const[plot,rewards]of Object.entries(beanRewards))cross(rewards,'Plant the bean at '+g['Magic Bean:'+plot].name.replace(/^Bean:\s*/,'' )+'.','Return to the grown plant and collect this reward.');
 cross(['Heart Piece:20'],'Plant the laboratory bean, or teach the Scarecrow tune.','Ride the grown bean to the roof, or activate the Scarecrow tune and Hookshot up.');
 cross(['Heart Piece:33'],'Return to the grotto, give its password and buy the Heart Piece.','Read the Fairy Note by the field-side castle moat grotto.','Adult');
 cross(['Heart Piece:34'],'Return to the western field chest and open it.','Read the Fairy Note beside the already-open chest near Gerudo Valley.','Adult');
 g['Heart Piece:33'].requires=['Adult access','Bomb Bag'];g['Heart Piece:34'].requires=['Adult access'];
 cross(['Heart Piece:26','Side Quest:3'],'Play Song of Storms for the river frogs.','Learn Song of Storms in the windmill.','Adult');
 cross(['Gold Skulltula:75'],'Play Song of Storms at the castle-moat tree and enter the grotto.','Learn Song of Storms in the windmill.','Adult');
 cross(['Gold Skulltula:76','Gold Skulltula:77','Gold Skulltula:78','progress:21'],'Drain the well and follow its dungeon route.','Learn Song of Storms in the windmill.','Adult');
 cross(['Heart Piece:28','Side Quest:11'],'Obtain the Lens in the drained well, then complete the night chest game.','Learn Song of Storms so the well can be drained in the past.','Adult');
 cross(['Magic Bean:6'],'Warp to the crater and plant this soil patch.','Learn Bolero of Fire first.','Adult');
 cross(['Magic Bean:9','Upgrade:15','progress:23'],'Warp to the Colossus for the child-side task.','Learn Requiem of Spirit first.','Adult');
 cross(['Side Quest:8'],'Teach Bonooru your custom tune.','Return and play the exact same tune to activate it.');
 cross(['Side Quest:1','progress:15'],'Learn Epona’s Song from Malon.','Win Ingo’s races and claim Epona.');
 for(const id of ['Gold Skulltula:49','Gold Skulltula:52','Gold Skulltula:57','Gold Skulltula:58','Gold Skulltula:82','Gold Skulltula:96','Heart Piece:29']){
  cross([id],'Teach the custom Scarecrow tune.','Activate the tune, summon the Scarecrow and use the grappling route.');
  if(g[id].requires)g[id].requires.push('Side Quest:8');
  else g[id].extraRequires=['Side Quest:8'];
 }
 cross(['Gold Skulltula:100'],'Complete the marsh grotto’s child visit described below.','Return to that same grotto to collect the token.');
}
