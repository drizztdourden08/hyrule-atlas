const any=(...any)=>({any});
const all=(...all)=>({all});
// Consecutive tasks in the same timeline form one phase. Keys remain stable
// in saves; phases are counted within one existing checklist record.
export function mergeTimelineStages(stages){
 const out=[];
 for(const s of stages){const last=out.at(-1);if(last?.age===s.age){last.title+='; '+s.title;last.requires=[...last.requires,...s.requires];last.completeAlso=[...(last.completeAlso||[]),...(s.completeAlso||[])];last.evidence=last.evidence&&s.evidence?all(last.evidence,s.evidence):undefined;}else out.push({...s,requires:[...(s.requires||[])]});}
 return out;
}
export function addTimelineStages(g){
 const phase=(key,age,title,requires=[],evidence,completeAlso=[])=>({key,age,title,requires,...(evidence?{evidence}:{}),...(completeAlso.length?{completeAlso}: {})});
 const plan=(id,steps)=>{g[id].timelineStages=mergeTimelineStages(steps);g[id].crossTime=true;};
 const obtain=(id,key='learn')=>phase(key,'Adult',g[id].name,g[id].requires,id,[id]);
 const finish=(id,key='collect',without=[])=>phase(key,g[id].age==='Both'?'Adult':g[id].age,g[id].name,g[id].requires.filter(r=>!without.includes(r)));
 const planted=(n)=>phase('plant','Child','Plant the bean: '+g['Magic Bean:'+n].name.replace(/^Bean:\s*/,''),g['Magic Bean:'+n].requires,'Magic Bean:'+n,['Magic Bean:'+n]);
 const teaching=()=>phase('teach','Child','Teach Bonooru the custom Scarecrow tune',g['Side Quest:7'].requires,'Side Quest:7',['Side Quest:7']);
 const warp=(n)=>obtain('progress:'+n,'learn-warp');
 for(const[id,plot]of Object.entries({'Gold Skulltula:45':2,'Gold Skulltula:62':0,'Gold Skulltula:90':9,'Heart Piece:16':4,'Heart Piece:22':5,'Heart Piece:23':6,'Heart Piece:31':9})){
  const prep=plot===9?[warp(36)]:plot===6?[warp(33)]:[];
  plan(id,[...prep,planted(plot),finish(id)]);
 }
 plan('Magic Bean:6',[warp(33),finish('Magic Bean:6','plant')]);
 plan('Magic Bean:9',[warp(36),finish('Magic Bean:9','plant')]);
 // A route choice keeps the legitimate Scarecrow alternative. Choosing one
 // route never pretends the other preparation has been performed.
 g['Heart Piece:20'].stageRoutes={
  bean:{label:'Planted laboratory bean',stages:mergeTimelineStages([planted(7),finish('Heart Piece:20')])},
  scarecrow:{label:'Scarecrow + Hookshot',stages:mergeTimelineStages([teaching(),phase('collect','Adult','Activate the Scarecrow tune and Hookshot to the roof',['Adult access','Ocarina','Hookshot'],undefined,['Side Quest:8'])])}
 };
 g['Heart Piece:20'].crossTime=true;
 const storms=()=>obtain('progress:20','learn-storms');
 for(const id of ['Heart Piece:26','Gold Skulltula:75','Gold Skulltula:76','Gold Skulltula:77','Gold Skulltula:78','Heart Piece:28','Side Quest:11'])plan(id,[storms(),finish(id)]);
 plan('Event:well-drained',[storms(),finish('Event:well-drained','drain')]);
 plan('progress:21',[storms(),phase('lens','Child','Drain the well, defeat Dead Hand and collect the Lens',['Song of Storms','Ocarina','Slingshot','Deku Sticks'],undefined,['Event:well-drained'])]);
 plan('Side Quest:3',[storms(),phase('both-frogs','Child','Collect both separate frog Heart Pieces',['Heart Piece:26','Heart Piece:27'],all('Heart Piece:26','Heart Piece:27'))]);
 for(const id of ['Heart Piece:33','Heart Piece:34'])plan(id,[
  phase('read-note','Adult',id.endsWith(':33')?'Read the Fairy Note by the castle-moat Scrub grotto':'Read the Fairy Note beside the western field chest',['Adult access','Hyrule Field access',...(id.endsWith(':33')?['Bomb Bag']:[])]),
  phase('collect','Child',id.endsWith(':33')?'Return, give the password and buy the Heart Piece':'Return to the chest and collect the Heart Piece',['Hyrule Field access',...(id.endsWith(':33')?['Bomb Bag']:[])])
 ]);
 for(const id of ['Upgrade:15','progress:23','Gold Skulltula:89','Gold Skulltula:92','Gold Skulltula:93','Gold Skulltula:94'])plan(id,[warp(36),finish(id,'child-task')]);
 plan('Gold Skulltula:54',[warp(33),finish('Gold Skulltula:54','soil-token')]);
 plan('Side Quest:8',[teaching(),phase('activate','Adult','Play the same tune to adult Bonooru',['Adult access','Ocarina'])]);
 for(const id of ['Gold Skulltula:49','Gold Skulltula:52','Gold Skulltula:57','Gold Skulltula:58','Gold Skulltula:82','Gold Skulltula:96','Heart Piece:29']){
  const last=finish(id,'collect',['Side Quest:8']);last.title='Activate the Scarecrow tune, then '+last.title;last.requires.push('Ocarina');last.completeAlso=['Side Quest:8'];plan(id,[teaching(),last]);
 }
 for(const id of ['Side Quest:1','progress:15'])plan(id,[
  phase('learn-song','Child','Learn Epona’s Song from Malon',g['progress:30'].requires,'Epona Song',['progress:30']),
  finish(id,'win-races')
 ]);
 plan('Gold Skulltula:100',[
  phase('prepare-grotto','Child','Bomb open the marsh grotto and defeat its ordinary spider',['Hyrule Field access','Bomb Bag']),
  finish('Gold Skulltula:100','collect-token')
 ]);
 // Any remaining old warning without a concrete phase plan is a build error.
 for(const[id,e]of Object.entries(g))if(e.crossTime&&!e.timelineStages&&!e.stageRoutes)throw Error('Unspecified timeline stages '+id);
}
