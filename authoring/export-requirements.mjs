import fs from 'node:fs';
const db=JSON.parse(fs.readFileSync('data/guide-database.json','utf8'));
const base=JSON.parse(fs.readFileSync('.build/base-records.json','utf8'));
const label=r=>{
 if(typeof r==='string')return db.entries[r]?.name||r;
 if(r.wallet)return `Wallet capacity >= ${r.wallet}`;
 if(r.stage)return `${db.entries[r.stage.id]?.name||r.stage.id}: stage ${r.stage.key}`;
 return `(${(r.any||r.all).map(label).join(r.any?' OR ':' AND ')})`;
};
const quote=v=>'"'+String(v??'').replaceAll('"','""')+'"';
const rows=[['ID','Item','Type','Region','Timeline','Persistent prerequisites','Ordered stages (with prerequisites)','Sources']];
for(const b of base){
 const g=db.entries[b.id];if(g.retired)continue;
 const routes=g.stageRoutes?Object.entries(g.stageRoutes).map(([key,r])=>[r.label||key,r.stages]):[['',g.timelineStages||[]]];
 const stages=routes.map(([name,steps])=>(name?name+': ':'')+steps.map((s,i)=>`${i+1}. ${s.age==='Child'?'Young':'Adult'} — ${s.title} [${s.requires.map(label).join('; ')||'No additional permanent prerequisites'}]`).join(' → ')).filter(Boolean).join('\n');
 rows.push([b.id,g.name,g.type||b.type,g.area,g.age,(g.requires||[]).map(label).join('; '),stages,g.sources.map(id=>db.sources[id].url).join('\n')]);
}
fs.writeFileSync('docs/Requirements.csv','\ufeff'+rows.map(r=>r.map(quote).join(',')).join('\r\n')+'\r\n');
console.log(`Exported requirements and stages for ${rows.length-1} active checks.`);
