// Shared by the WebView and Node regression tests. No DOM or native bridge.
class AtlasProgress {
 constructor(records,logic={},state={}) {
  this.records=records;this.byId=new Map(records.map(e=>[e.id,e]));this.logic=logic;
  this.milestones=Object.fromEntries(records.filter(e=>e.milestone).map(e=>[e.milestone,e.id]));
  this.checked=new Set();this.obtained=new Set();this.stages={};this.load(state);
 }
 load(state={}) {
  this.checked.clear();(Array.isArray(state.completed)?state.completed:[]).forEach(id=>this.checked.add(id));
  this.obtained.clear();(Array.isArray(state.milestones)?state.milestones:[]).forEach(id=>this.obtained.add(id));
  this.stages={};
  for(const[id,value]of Object.entries(state.stages||{})){
   if(!this.byId.has(id)||!value||typeof value!=='object')continue;
   this.stages[id]={route:typeof value.route==='string'?value.route:undefined,done:Array.isArray(value.done)?value.done.filter(x=>typeof x==='string'):[]};
  }
  if(!(state.schemaVersion>=6)){
   for(const proof of this.logic.migrationProofs||[])if(this.has(proof.if))proof.grant.forEach(id=>this.setRaw(this.byId.get(id),true));
   for(const e of this.records)if(this.rawDone(e)){const ages=this.plan(e).map(s=>s.age);if(ages.some((age,i)=>age==='Child'&&ages.slice(0,i).includes('Adult')))this.setRaw(this.byId.get('Event:time-travel'),true);}
  }
  // A v1.5 whole-item check means the complete route was done, even when its
  // new prerequisites have not yet been entered. Never erase that progress.
  for(const e of this.records){const steps=this.plan(e);if(steps.length&&this.rawDone(e)&&this.prefix(e)<steps.length)this.stages[e.id]={route:this.route(e)||undefined,done:steps.map(s=>s.key)};}
  // Later claimed steps in a mandatory linear exchange prove its earlier
  // exchanges. Preserve the furthest recorded position during migration.
  for(const sequence of state.schemaVersion>=6?[]:Object.values(this.logic.sequences||{})){
   let last=-1;sequence.forEach((id,i)=>{if(this.rawDone(this.byId.get(id)))last=i;});
   if(last>0)sequence.slice(0,last).forEach(id=>this.setRaw(this.byId.get(id),true));
  }
 }
 guide(e){return e?.guide||e||{};}
 rawDone(e){return !!e&&(e.milestone?this.obtained.has(e.milestone):this.checked.has(e.id));}
 setRaw(e,on){if(!e)return;const set=e.milestone?this.obtained:this.checked,key=e.milestone||e.id;on?set.add(key):set.delete(key);}
 route(e){const routes=this.guide(e).stageRoutes;return routes?(this.stages[e.id]?.route&&routes[this.stages[e.id].route]?this.stages[e.id].route:Object.keys(routes)[0]):null;}
 plan(e){const g=this.guide(e);return g.stageRoutes?g.stageRoutes[this.route(e)].stages:g.timelineStages||[];}
 prefix(e,seen=new Set()){
  if(!e)return 0;if(seen.has('stages:'+e.id))return 0;seen=new Set(seen);seen.add('stages:'+e.id);
  const steps=this.plan(e),saved=new Set(this.stages[e.id]?.done||[]);let n=0;
  for(const step of steps){if(saved.has(step.key)||(step.evidence&&this.has(step.evidence,seen)))n++;else break;}
  return n;
 }
 done(e,seen=new Set()){
  if(!e)return false;if(this.rawDone(e))return true;
  const steps=this.plan(e);return steps.length?this.prefix(e,seen)===steps.length:false;
 }
 has(req,seen=new Set()){
  if(req&&typeof req==='object'){
   if(req.all)return req.all.every(r=>this.has(r,seen));
   if(req.any)return req.any.some(r=>this.has(r,seen));
   if(req.stage){const e=this.byId.get(req.stage.id),i=this.plan(e).findIndex(s=>s.key===req.stage.key);return i>=0&&this.prefix(e,seen)>i;}
   if(req.wallet){return (this.has('Upgrade:11',seen)?1000:this.has('Upgrade:10',seen)?500:200)>=req.wallet;}
   return false;
  }
  if(typeof req!=='string')return false;
  const token=/^(\d+) Gold Skulltula tokens$/.exec(req);
  if(token)return this.records.filter(e=>e.type==='Gold Skulltula'&&!this.guide(e).retired&&this.done(e)).length>=Number(token[1]);
  if(seen.has(req))return false;seen=new Set(seen);seen.add(req);
  if(this.obtained.has(req))return true;
  if(this.byId.has(req))return this.done(this.byId.get(req),seen);
  if(this.milestones[req]&&this.done(this.byId.get(this.milestones[req]),seen))return true;
  return (this.logic.aliases?.[req]||[]).some(r=>this.has(r,seen));
 }
 known(req){
  if(req&&typeof req==='object'){
   if(req.wallet)return Number.isFinite(req.wallet)&&req.wallet>0;
   if(req.stage){const e=this.byId.get(req.stage.id);return !!e&&this.plan(e).some(s=>s.key===req.stage.key);}
   const list=req.all||req.any;return Array.isArray(list)&&list.length>0&&list.every(r=>this.known(r));
  }
  return typeof req==='string'&&!!(this.byId.has(req)||this.milestones[req]||this.logic.aliases?.[req]||/^\d+ Gold Skulltula tokens$/.test(req));
 }
 sequence(e){return Object.values(this.logic.sequences||{}).find(ids=>ids.includes(e.id));}
 frontier(e){const sequence=this.sequence(e);return !sequence||sequence.find(id=>!this.done(this.byId.get(id)))===e.id;}
 sequenceVisible(e,status='remaining'){return !this.sequence(e)||(status==='done'?this.done(e):this.frontier(e));}
 ageAvailable(age){return age==='Adult'?this.has('Adult access'):age==='Child'?(!this.has('Adult access')||this.has('Event:time-travel')):true;}
 required(e,age=''){
  const plan=this.plan(e),step=plan[this.prefix(e)];
  if(plan.length)return step?.requires||[];
  return [...(e.requires||[]),...(this.guide(e).perAgeRequires?.[age]||[])];
 }
 activeAge(e,age=''){const plan=this.plan(e);return plan.length?plan[this.prefix(e)]?.age:e.age==='Both'?(age||(!this.has('Adult access')?'Child':'Adult')):e.age;}
 stageReady(e,index){const steps=this.plan(e);return index>=0&&index<steps.length&&index===this.prefix(e)&&this.ageAvailable(steps[index].age)&&(steps[index].requires||[]).every(r=>this.has(r));}
 eligible(e,age=''){const steps=this.plan(e);return steps.length?this.stageReady(e,this.prefix(e)):this.frontier(e)&&this.ageAvailable(this.activeAge(e,age))&&this.required(e,age).every(r=>this.has(r));}
 // In a single timeline only the current valid stage is actionable. Include
 // locked never reveals future stages or lets them inflate region badges.
 timelineMatch(e,age,status='remaining'){
  const steps=this.plan(e);if(!steps.length)return !age||e.age==='Both'||e.age===age;
  if(!age)return true;
  if(this.done(e))return steps.some(s=>s.age===age);
  const n=this.prefix(e);return steps[n]?.age===age&&this.stageReady(e,n);
 }
 selectedStage(e,age){const steps=this.plan(e);if(!steps.length||!age)return -1;const n=this.prefix(e);if(n<steps.length)return steps[n].age===age?n:-1;for(let i=steps.length-1;i>=0;i--)if(steps[i].age===age)return i;return -1;}
 completeRecord(e,on,seen=new Set()){
  if(!e||seen.has(e.id))return;seen.add(e.id);this.setRaw(e,on);
  const steps=this.plan(e);if(steps.length)this.stages[e.id]={route:this.route(e)||undefined,done:on?steps.map(s=>s.key):[]};
 }
 setStage(e,index,on){
  const steps=this.plan(e),n=this.prefix(e);if(index<0||index>=steps.length)return false;
  if(on&&!this.stageReady(e,index))return false;
  if(!on&&index>=n)return false;
  const count=on?index+1:index;
  this.stages[e.id]={route:this.route(e)||undefined,done:steps.slice(0,count).map(s=>s.key)};
  this.setRaw(e,count===steps.length);
  if(on)for(const id of steps[index].completeAlso||[])this.completeRecord(this.byId.get(id),true);
  else for(const step of steps.slice(index))for(const id of step.completeAlso||[])this.completeRecord(this.byId.get(id),false);
  return true;
 }
 setDone(e,on){if(this.plan(e).length)return false;if(on&&!this.eligible(e))return false;const seq=this.sequence(e);if(!on&&seq)seq.slice(seq.indexOf(e.id)).forEach(id=>this.completeRecord(this.byId.get(id),false));else this.setRaw(e,on);return true;}
 setRoute(e,route){if(!this.guide(e).stageRoutes?.[route])return false;this.setRaw(e,false);this.stages[e.id]={route,done:[]};return true;}
 snapshot(){
  const stages={};for(const e of this.records){const plan=this.plan(e);if(!plan.length)continue;const n=this.prefix(e),route=this.route(e);if(n||this.stages[e.id])stages[e.id]={...(route?{route}:{}),done:plan.slice(0,n).map(s=>s.key)};}
  const completed=new Set(this.checked),milestones=new Set(this.obtained);
  for(const e of this.records)if(this.done(e)){if(e.milestone)milestones.add(e.milestone);else completed.add(e.id);}
  return {schemaVersion:6,completed:[...completed],milestones:[...milestones],stages};
 }
}
globalThis.AtlasProgress=AtlasProgress;
