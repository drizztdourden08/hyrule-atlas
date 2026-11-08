import fs from 'node:fs';import assert from 'node:assert/strict';
import {mergeTimelineStages} from '../authoring/timeline-stages.mjs';
await import('../android/assets/progress-engine.js');
const db=JSON.parse(fs.readFileSync('data/guide-database.json','utf8'));
const base=JSON.parse(fs.readFileSync('.build/base-records.json','utf8'));
const records=base.map(e=>({...e,...db.entries[e.id],milestone:e.milestone,guide:db.entries[e.id]}));
const make=(state={schemaVersion:6})=>new AtlasProgress(records,db.logic,state);
const fresh=make(),get=id=>fresh.byId.get(id);
let assertions=0;const check=(ok,message)=>{assert.ok(ok,message);assertions++;};
for(const e of records){
 check(Array.isArray(e.requires),'Missing explicit requirements '+e.id);
 for(const r of e.requires)check(fresh.known(r),'Unknown requirement '+e.id+' '+JSON.stringify(r));
 for(const route of e.guide.stageRoutes?Object.values(e.guide.stageRoutes):[{stages:e.guide.timelineStages||[]}]){
  const stages=route.stages;check(new Set(stages.map(s=>s.key)).size===stages.length,'Duplicate stage key '+e.id);
  stages.forEach((s,i)=>{
   check(['Child','Adult'].includes(s.age),'Invalid stage timeline');check(!i||stages[i-1].age!==s.age,'Adjacent equal timelines '+e.id);
   (s.requires||[]).forEach(r=>check(fresh.known(r),'Unknown stage requirement '+e.id));
   if(s.evidence)check(fresh.known(s.evidence),'Unknown preparation proof '+e.id);
   (s.completeAlso||[]).forEach(id=>check(fresh.byId.has(id),'Unknown linked preparation '+id));
  });
 }
}
// Finding dungeon items never supplies the corresponding boss rewards.
const two=make({schemaVersion:6,completed:['Event:forest','Event:fire','Equipment:2','Equipment:3'],milestones:['Adult access','Bow','Hammer','Longshot','Iron Boots','Ocarina','Zelda Lullaby','Magic','Prelude of Light']});
check(!two.eligible(get('Equipment:5')),'Light Arrows with only two adult dungeon rewards');
check(!two.eligible(get('Great Fairy:5')),'Defense fairy without gold gauntlets');
check(!two.has('Event:water'),'Longshot must not imply Water Medallion');
const early=make({schemaVersion:6,milestones:['Adult access','Ocarina','Hammer','Hookshot'],completed:['Equipment:2']});
check(early.eligible(get('Event:fire')),'Fire Temple incorrectly requires Forest Temple completion');
check(!early.eligible(get('progress:35')),'Nocturne without the first three adult rewards');
check(!early.ageAvailable('Child'),'Return to childhood before its event');
early.checked.add('Event:forest');early.obtained.add('Prelude of Light');
check(early.eligible(get('Event:time-travel')),'Return-to-childhood event after Forest and Prelude');
for(const id of db.logic.adultDungeonRewards)two.checked.add(id);
check(two.eligible(get('Equipment:5')),'Light Arrows after all five medals');
two.checked.add('Equipment:5');two.checked.add('Event:ganon-bridge');
check(!two.eligible(get('Great Fairy:5')),'Castle access alone must not give defense fairy');
two.checked.add('Upgrade:16');check(!two.eligible(get('Great Fairy:5')),'Defense fairy wallet capacity');
two.checked.add('Upgrade:10');check(two.eligible(get('Great Fairy:5')),'Defense fairy full requirements');
// Each individual missing adult reward still blocks the Light Arrows.
for(const missing of db.logic.adultDungeonRewards){two.checked.delete(missing);check(!two.eligible(get('Equipment:5')),'Missing adult reward '+missing);two.checked.add(missing);}
const noClears=make({completed:[],milestones:['Adult access','Bow','Hammer','Longshot'],statusScreen:{bossHearts:['gohma','dodongo','forest']}});
check(!noClears.has('Event:forest')&&!noClears.has('Event:fire')&&!noClears.has('Event:water'),'Legacy gear/heart pickups invented adult medallions');
const emptyLegacy=make({completed:[],milestones:[]});
check(emptyLegacy.snapshot().completed.length===0&&emptyLegacy.snapshot().milestones.length===0,'Empty legacy save gained sequence rewards');
const oneLegacyTrade=make({completed:['Trade Sequence:5'],milestones:['Adult access']});
check(db.logic.sequences['Adult trading quest'].every((id,i)=>oneLegacyTrade.done(get(id))===(i<=5)),'Legacy trade backfill did not preserve exactly its mandatory predecessors');
check(records.filter(e=>e.type==='Heart Piece'&&oneLegacyTrade.done(e)).length===0,'Legacy trade created unrelated prize-chain rewards');
// Only one entry of each ordered sequence is ever current, regardless of
// region filters or whether the user includes locked entries.
const trade=make({schemaVersion:6,milestones:['Adult access']});
check(db.logic.sequences['Adult trading quest'].filter(id=>trade.sequenceVisible(get(id),'all')).length===1,'Multiple future trades visible');
check(trade.setDone(get('Trade Sequence:0'),true),'Start adult trade');
check(!trade.sequenceVisible(get('Trade Sequence:0'),'all')&&trade.sequenceVisible(get('Trade Sequence:1'),'all'),'Trade did not advance to exactly one next step');
check(!trade.setDone(get('Trade Sequence:3'),true),'Future trade bypassed predecessor');
// The valley crossing needs Epona OR Longshot, never the Hammer. The token
// behind the tent is within Hookshot range once the camp has been reached.
const valley=make({schemaVersion:6,milestones:['Adult access','Epona','Hookshot'],completed:Array.from({length:6},(_,i)=>'Trade Sequence:'+i)});
check(valley.eligible(get('Trade Sequence:6')),'Broken Sword blocked despite saw and Epona, without Hammer');
check(valley.eligible(get('Gold Skulltula:84')),'Tent token incorrectly requires Longshot instead of Hookshot');
const noCrossing=make({schemaVersion:6,milestones:['Adult access','Hookshot'],completed:Array.from({length:6},(_,i)=>'Trade Sequence:'+i)});
check(!noCrossing.eligible(get('Trade Sequence:6'))&&!noCrossing.eligible(get('Gold Skulltula:84')),'Valley crossing can be bypassed without Epona or Longshot');
const longCrossing=make({schemaVersion:6,milestones:['Adult access','Longshot'],completed:Array.from({length:6},(_,i)=>'Trade Sequence:'+i)});
check(longCrossing.eligible(get('Trade Sequence:6'))&&longCrossing.eligible(get('Gold Skulltula:84')),'Longshot alternative needs Epona, Hammer or a separate Hookshot');
const noSaw=make({schemaVersion:6,milestones:['Adult access','Epona']});
check(!noSaw.eligible(get('Trade Sequence:6')),'Broken Sword exchange bypasses the Poacher’s Saw');
const domainHookshot=make({schemaVersion:6,milestones:['Adult access','Zelda Lullaby','Hookshot']});
check(!domainHookshot.eligible(get('Gold Skulltula:64')),'Frozen Domain token incorrectly unlocks with only Hookshot');
const domainLongshot=make({schemaVersion:6,milestones:['Adult access','Zelda Lullaby','Longshot']});
check(domainLongshot.eligible(get('Gold Skulltula:64')),'Frozen Domain token does not unlock with Longshot');
// Adult note -> Young pickup; nothing is acquired after only the first phase.
const note=make({schemaVersion:6,milestones:['Adult access','Bomb Bag'],completed:['Event:time-travel']});
const h=get('Heart Piece:33');
check(!note.timelineMatch(h,'Child'),'Young pickup visible before adult note');
check(note.timelineMatch(h,'Adult'),'Adult note missing in Adult filter');
check(!note.setStage(h,1,true),'Second phase enabled first');
check(note.setStage(h,0,true)&&!note.done(h),'First phase counted as full heart');
check(note.timelineMatch(h,'Child')&&!note.timelineMatch(h,'Adult'),'Wrong active age after reading note');
const partial=note.snapshot();check(!partial.completed.includes(h.id),'Partial route exported as a full collectible');
const restored=make(JSON.parse(JSON.stringify(partial)));check(restored.prefix(h)===1&&!restored.done(h),'Partial reload');
check(restored.setStage(h,1,true)&&restored.done(h),'Final phase did not complete one item');
check(restored.snapshot().completed.filter(id=>id===h.id).length===1,'Duplicate overall completion');
check(restored.setStage(h,0,false)&&restored.prefix(h)===0&&!restored.done(h),'Rewinding first stage did not clear later phase');
// Adult -> Young -> Adult is a real three-phase route, not two booleans.
const bean=make({schemaVersion:6,milestones:['Adult access','Ocarina','Goron Tunic','Hookshot','Magic Bean','Bolero of Fire'],completed:['Equipment:2','Event:time-travel']});
const crater=get('Heart Piece:23');
check(bean.plan(crater).length===3&&bean.prefix(crater)===1,'Three-stage crater route');
check(!bean.timelineMatch(crater,'Adult')&&bean.timelineMatch(crater,'Child'),'Adult final step appeared before Young planting');
check(bean.setStage(crater,1,true)&&bean.has('Magic Bean:6'),'Planting phase did not save its correct soil patch');
check(bean.prefix(crater)===2&&!bean.done(crater)&&bean.timelineMatch(crater,'Adult'),'Adult return after planting');
check(bean.setStage(crater,2,true)&&bean.done(crater),'Adult final bean pickup');
const wrong=make({schemaVersion:6,milestones:['Adult access','Hookshot','Magic Bean'],completed:['Event:time-travel','Magic Bean:2']});
check(wrong.prefix(get('Gold Skulltula:45'))===1&&wrong.prefix(get('Gold Skulltula:62'))===0,'Wrong planted plot used');
// Scarecrow alternative is retained, without inventing a planted bean.
const lake=make({schemaVersion:6,milestones:['Adult access','Ocarina','Longshot'],completed:['Event:time-travel','Side Quest:7']});
const roof=get('Heart Piece:20');lake.setRoute(roof,'scarecrow');
check(lake.prefix(roof)===1&&lake.eligible(roof),'Scarecrow route readiness');
check(lake.setStage(roof,1,true)&&lake.done(roof)&&!lake.has('Magic Bean:7'),'Scarecrow route invented bean planting');
// Old whole-item checks survive intact as fully completed staged routes.
const legacy=make({completed:['Heart Piece:33','Gold Skulltula:12'],milestones:['Adult access']});
check(legacy.done(h)&&legacy.prefix(h)===2&&legacy.checked.has('Gold Skulltula:12'),'Legacy completion was lost');
check(records.filter(e=>e.type==='Heart Piece'&&legacy.done(e)).map(e=>e.id).join('|')==='Heart Piece:33','Legacy route invented other Heart Pieces');
const merged=mergeTimelineStages([{key:'a',age:'Adult',title:'Visit',requires:[]},{key:'b',age:'Adult',title:'Learn',requires:[]},{key:'c',age:'Child',title:'Plant',requires:[]},{key:'d',age:'Adult',title:'Collect',requires:[]}]);
check(merged.length===3,'Consecutive tasks in one age were not merged');
const fiveStages=Array.from({length:5},(_,i)=>({key:'phase-'+i,age:i%2?'Child':'Adult',title:'Phase '+i,requires:[]}));
const synthetic={id:'test:five-phases',type:'Event',age:'Adult',requires:[],guide:{timelineStages:fiveStages}};
const multi=new AtlasProgress([...records,synthetic],db.logic,{schemaVersion:6,milestones:['Adult access'],completed:['Event:time-travel']});
for(let i=0;i<5;i++){
 check(fiveStages.filter((s,j)=>multi.stageReady(synthetic,j)).length===1,'More than one active stage in a five-stage route');
 check(multi.setStage(synthetic,i,true),'Could not complete stage '+i);
 check(multi.done(synthetic)===(i===4),'Five-stage route completed early');
}
check(multi.setStage(synthetic,2,false)&&multi.prefix(synthetic)===2,'Five-stage route rewind');
// An exhaustive normal-progression simulation must reach every active record
// without a manual bypass. This catches deadlocks, missing event definitions,
// impossible stage prerequisites and accidental dungeon-order constraints.
const run=make();let advances=0;
for(let pass=0;pass<100;pass++){
 let changed=0;
 for(const e of records){if(e.guide.retired||run.done(e))continue;const plan=run.plan(e);if(plan.length){const n=run.prefix(e);if(run.stageReady(e,n)&&run.setStage(e,n,true))changed++;}else if(run.eligible(e)&&run.setDone(e,true))changed++;}
 advances+=changed;if(!changed)break;
}
const unreachable=records.filter(e=>!e.guide.retired&&!run.done(e));
assert.deepEqual(unreachable.map(e=>({id:e.id,requires:e.requires})),[],'Unreachable records');
console.log(`PASS: ${assertions} requirement/stage assertions; all ${records.filter(e=>!e.guide.retired).length} checks reachable in ${advances} progress actions, with explicit dungeon rewards and sequential timelines.`);
