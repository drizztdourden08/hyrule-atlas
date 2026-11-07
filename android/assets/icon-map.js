// Original generated inventory art, bundled locally with transparent backgrounds.
function resolveArt(type, name='') {
 if(type==='Gold Skulltula')return 'skulltula';
 if(type==='Heart Piece')return 'heart';
 if(type==='Magic Bean'||type==='Bean Planting')return 'bean';
 if(type==='Bottle')return 'bottle';
 if(/echo gem/i.test(name))return 'spell-crystal';
 if(/giant.?s knife/i.test(name))return 'sword';
 if(/access|cleared|completed|activate|challenges|prizes/i.test(name))return 'quest-event';
 const n=name.toLowerCase();
 const masks={'keaton mask':'fox-mask','skull mask':'skull-mask','spooky mask':'ghost-mask','bunny hood':'rabbit-hood','mask of truth':'oracle-mask','goron mask':'stone-mask','zora mask':'aquatic-mask','gerudo mask':'desert-mask'};
 if(masks[n])return masks[n];
 const rules=[
 [/summit fairy|unlock the first magic|magic meter|doubled magic/i,'magic-jar'],[/halved damage/i,'defense'],[/town gallery.*seed-bag/i,'seed-satchel-large'],[/seed-bag/i,'seed-satchel'],[/quiver.*50/i,'quiver-large'],[/bomb bag.*40/i,'bomb-satchel-large'],
 [/broken.*sword/,'broken-sword'],[/master sword|adult access/,'master-sword'],[/kokiri sword|biggoron sword/,'sword'],
 [/shield/,'shield'],[/ocarina/,'ocarina'],[/din.? ?fire|farore.? ?wind|nayru.? ?love/,'spell-crystal'],[/double defense/,'defense'],[/magic meter|double magic|^magic$/,'magic-jar'],
 [/bullet bag 50/,'seed-satchel-large'],[/quiver 50/,'quiver-large'],[/bomb bag 40/,'bomb-satchel-large'],
 [/fire arrow/,'fire-arrow'],[/ice arrow/,'ice-arrow'],[/light arrow/,'light-arrow'],[/quiver/,'quiver'],[/^bow$|archery/,'bow'],[/bullet bag/,'seed-satchel'],[/slingshot/,'slingshot'],[/bomb bag|bombchu bowling/,'bomb-satchel'],[/bombchu/,'bomb'],
 [/hookshot|longshot/,'hookshot'],[/boomerang/,'boomerang'],[/lens of truth/,'lens'],[/hammer/,'hammer'],[/hover boots/,'winged-boots'],[/iron boots/,'iron-boots'],[/silver gauntlet/,'silver-gauntlet'],[/golden gauntlet/,'gold-gauntlet'],[/bracelet/,'bracelet'],
 [/silver scale/,'silver-scale'],[/golden scale/,'gold-scale'],[/goron tunic/,'red-tunic'],[/zora tunic/,'blue-tunic'],[/wallet/,'wallet'],
 [/pocket egg/,'egg'],[/cucco|cojiro/,'chicken'],[/ranch cow/,'cow'],[/horse|epona/,'horse'],[/mushroom/,'mushroom'],[/odd potion/,'purple-potion'],[/eyeball frog|frog song/,'frog'],[/eye drops/,'eye-drops'],[/claim check|prescription/,'ticket'],[/saw/,'saw'],
 [/letter/,'letter'],[/deku nut/,'nuts'],[/deku stick/,'sticks'],[/bean/,'bean'],[/poe|ghost/,'ghost-bottle'],[/rupee/,'rupee'],[/heart piece/,'heart'],[/song of time/,'hourglass'],[/song|bolero|serenade|nocturne|prelude|requiem|lullaby/,'notes'],
 [/deku tree/,'tree'],[/hyrule field access/,'map'],[/gerudo card/,'card'],[/mask access/,'mask'],[/chest|training ground/,'chest'],[/access|cleared|completed|reward/,'chest'],[/bottle/,'bottle']
 ];
 for(const [pattern,asset] of rules)if(pattern.test(n))return asset;
 return {'Gold Skulltula':'skulltula','Heart Piece':'heart','Bottle':'bottle','Mask':'fox-mask','Upgrade':'quiver-large','Great Fairy':'fairy','Trade Sequence':'ticket','Magic Bean':'bean','Side Quest':'quest-event','Progression':'quest-event','Progress':'quest-event','Sword':'sword','Shield':'shield','Magic':'magic-jar','Song':'notes','Event':'quest-event','Equipment':'shield'}[type]||'quest-event';
}
function inventoryArt(type,name='') {
 return `<img class="svgicon inventoryicon" src="art/${resolveArt(type,name)}.png" alt="" width="30" height="30" loading="lazy">`;
}
