import fs from 'node:fs';fs.mkdirSync('.build',{recursive:true});fs.mkdirSync('data',{recursive:true});
for(const file of ['authoring/pre-guide-index.html','android/assets/index.html']){
 let h=fs.readFileSync(file,'utf8');
 h=h.replace("let showLocked=saved.visibilityVersion===2?saved.showLocked!==false:true,", "let showLocked=typeof saved.showLocked==='boolean'?saved.showLocked:true,");
 const start=h.indexOf('function matchesContext('),end=h.indexOf('const chevron=',start);
 if(start<0||end<0)throw Error('Missing filter function anchors');
 h=h.slice(0,start)+`function matchesContext(e,ignoreRegion=false){const q=$('search').value.toLowerCase();return (!filterState.age||e.age===filterState.age||e.age==='Both')&&(ignoreRegion||!filterState.region||e.area===filterState.region)&&(!filterState.type||e.type===filterState.type)&&(!q||[e.name,e.area,e.type,e.steps,...e.requires.map(guideRequirementLabel),...(e.guide?.equipment||[])].join(' ').toLowerCase().includes(q))}
function filtered(){return allItems.filter(e=>matchesContext(e)&&(showLocked||eligible(e))&&(filterState.status==='all'||(filterState.status==='done'?isDone(e):!isDone(e))))}
`+h.slice(end);
 h=h.replace("e.requires.filter(r=>!hasGuideMilestone(r)).join(' · ')","e.requires.filter(r=>!hasGuideMilestone(r)).map(guideRequirementLabel).join(' · ')");
 h=h.replace("e.age==='Both')&&(ignoreRegion", "e.age==='Both'||!!e.guide?.crossTime)&&(ignoreRegion");
 h=h.replace("<span class=\"tag\">${e.age==='Both'?'Any age':e.age==='Child'?'Young Link':'Adult Link'}</span>","${timelineTag(e)}");
 h=h.replace('${allItems.length-count} remaining','${allItems.length-count} left overall');
 if(!h.includes("if(saved.type==='Magic Bean')"))h=h.replace("const $=id=>", "if(saved.type==='Magic Bean')saved.type='Bean Planting';\nconst $=id=>");
 if(!h.includes("leftSummaryOpen:document"))h=h.replace('showLocked,visibilityVersion:2,expanded:', "showLocked,visibilityVersion:2,leftSummaryOpen:document.getElementById('remainingSummary')?.open||false,expanded:");
 fs.writeFileSync(file,h);
}
const runtimePath='android/assets/guide-runtime.js';let runtime=fs.readFileSync(runtimePath,'utf8');
if(!runtime.includes('${crossTimeWarning(e)}'))runtime=runtime.replace('</div><p class="guide-start">','</div>${crossTimeWarning(e)}<p class="guide-start">');
fs.writeFileSync(runtimePath,runtime);
