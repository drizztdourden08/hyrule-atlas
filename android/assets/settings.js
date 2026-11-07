(() => {
 const panel=document.querySelector('body > section.panel');
 const control=document.createElement('div');control.className='awake-setting';
 control.innerHTML='<label class="awake-label" for="keepAwake"><span><strong>Keep screen awake</strong><small id="keepAwakeHelp">While Hyrule Atlas is open</small></span><span class="awake-switch"><input type="checkbox" id="keepAwake" role="switch" aria-describedby="keepAwakeHelp"><span aria-hidden="true"></span></span></label><p id="keepAwakeStatus" class="awake-status" aria-live="polite"></p>';
 panel.appendChild(control);
 const input=document.getElementById('keepAwake'),status=document.getElementById('keepAwakeStatus');
 const render=()=>{input.checked=AtlasNative.isKeepAwake();status.textContent=input.checked?'On · Screen stays on while this app is visible':'Off · Uses your phone’s screen timeout';};
 render();
 input.addEventListener('change',()=>{
  try{if(!AtlasNative.setKeepAwake(input.checked))throw Error('Save failed');render();}
  catch(e){input.checked=AtlasNative.isKeepAwake();status.textContent='Could not save this setting. Try again.';}
 });
})();
