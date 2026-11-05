(()=>{
 const header=document.querySelector('header.masthead');
 const toggle=header.querySelector('.mobile-menu-toggle');
 const nav=header.querySelector('.nav');
 const setOpen=(open,focus=false)=>{
  header.classList.toggle('menu-open',open);
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
  if(!open)header.querySelector('details').open=false;
  if(focus)toggle.focus();
 };
 toggle.onclick=()=>setOpen(toggle.getAttribute('aria-expanded')!=='true');
 header.querySelector('.brand').onclick=null;
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
 document.addEventListener('keydown',e=>{
  if(toggle.getAttribute('aria-expanded')!=='true')return;
  if(e.key==='Escape'){setOpen(false,true);return}
  if(e.key==='Tab'){
   const items=[toggle,...nav.querySelectorAll('a,summary')].filter(el=>el.getClientRects().length);
   const first=items[0],last=items.at(-1);
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
 });
 window.addEventListener('resize',()=>{if(innerWidth>1100)setOpen(false)});
})();
