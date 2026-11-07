import fs from 'node:fs';
const file='android/assets/index.html';let html=fs.readFileSync(file,'utf8');
const start=html.indexOf('let showLocked=');if(start<0)throw Error('Core script anchor missing');
html=html.slice(0,start)+'</script><script src="progress-engine.js"></script><script src="app.js"></script><script src="settings.js"></script></body></html>\n';
html=html.replace('const allItems=[...entries.filter(e=>!e.guide?.retired),...progress];',`const eventEntries=Object.entries(guideDatabase.entries).filter(([id])=>id.startsWith('Event:')).map(([id,g])=>applyGuide({id,type:'Event',name:g.name,area:g.area,age:g.age}));eventEntries.forEach(e=>e.requires=guideRequirements(e));
const allItems=[...entries.filter(e=>!e.guide?.retired),...progress,...eventEntries];`);
html=html.replace('Numbered routes and source links reviewed November 6, 2026.','Numbered routes and source links reviewed November 6, 2026; requirements and timeline stages reviewed November 7, 2026.');
fs.writeFileSync(file,html);
const runtime='android/assets/guide-runtime.js',old=fs.readFileSync(runtime,'utf8');
const prefix=old.slice(0,old.indexOf('function guideRequirements('));
// Keep the orientation catalog/applyGuide and the legacy record archive.
const cleanPrefix=prefix.includes('function knownGuideRequirement(')?prefix.slice(0,prefix.indexOf('function knownGuideRequirement(')):prefix;
const archive=old.slice(old.indexOf('function buildGuideArchive(){'));
fs.writeFileSync(runtime,cleanPrefix+fs.readFileSync('authoring/runtime-v6.js','utf8')+'\n'+archive);
const statusPath='android/assets/status-ui.js';let status=fs.readFileSync(statusPath,'utf8');
if(!status.includes('id="statusRewards"'))status=status.replace('<div class="status-section-label"><h2>Items & equipment</h2>','<div class="status-section-label"><h2>Dungeon rewards</h2></div><p class="status-legend">Mark the stone or medallion you received. Finding a dungeon item does not finish its temple.</p><div id="statusRewards" class="status-rewards"></div><div class="status-section-label"><h2>Items & equipment</h2>');
fs.writeFileSync(statusPath,status);
