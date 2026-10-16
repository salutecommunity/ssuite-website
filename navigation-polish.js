(()=>{
 const header=document.querySelector('.masthead');
 const nav=header.querySelector('.nav');nav.id='site-navigation';
 const toggle=document.createElement('button');
 toggle.type='button';toggle.className='mobile-menu-toggle';
 toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls',nav.id);
 toggle.setAttribute('aria-label','Open navigation menu');
 toggle.innerHTML='<span class="menu-label">MENU</span><span class="menu-bars" aria-hidden="true"><i></i><i></i></span>';
 header.insertBefore(toggle,nav);
 function setOpen(open,focus=false){
  header.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
  document.body.classList.toggle('navigation-open',open);
  if(!open)nav.querySelector('details').open=false;
  if(focus)toggle.focus();
 }
 toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
 header.querySelector('.brand').addEventListener('click',()=>setOpen(false));
 document.addEventListener('keydown',e=>{
  if(toggle.getAttribute('aria-expanded')!=='true')return;
  if(e.key==='Escape'){setOpen(false,true);return;}
  if(e.key==='Tab'){
   const items=[toggle,...nav.querySelectorAll('a,summary')].filter(el=>el.getClientRects().length);
   const first=items[0],last=items.at(-1);
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
 });
 window.addEventListener('resize',()=>{if(window.innerWidth>1100)setOpen(false)});
 const pageNav=document.createElement('nav');pageNav.className='page-wayfinder';pageNav.setAttribute('aria-label','On this page');
 header.after(pageNav);
 const pages={
  about:[['Community','.community-story'],['By the numbers','.community-reach'],['Why S.Suite','.community-suite-story'],['Programs','#salute']],
  evening:[['Our approach','.night-approach'],['Agenda','.night-flow'],['Ambassadors','.night-ambassadors'],['The conversation','#recognition-conversation'],['Attend','.night-attend']],
  sponsors:[['Our partners','.partner-wall'],['Partnerships','.sponsor-paths'],['Host a table','.sponsor-host']],
  ambassadors:[['The opportunity','.ambassador-opportunity'],['Express interest','.ambassador-signup']]
 };
 function updateWayfinder(){
  setOpen(false);pageNav.replaceChildren();
  const sections=pages[location.hash.slice(1)]||[];pageNav.hidden=!sections.length;
  if(!sections.length)return;
  sections.forEach(([text,selector])=>{
   const target=document.querySelector(selector);if(!target)return;
   const button=document.createElement('button');button.type='button';button.textContent=text;
   if(!pageNav.querySelector('button'))button.classList.add('current');
   button.addEventListener('click',()=>{
    target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
    pageNav.querySelectorAll('button').forEach(b=>b.classList.toggle('current',b===button));
   });pageNav.append(button);
  });
 }
 addEventListener('hashchange',updateWayfinder);updateWayfinder();
 // Keep the user-approved deck figures, distinct from the later roster audit.
 const totals=document.querySelector('.reach-totals');
 if(totals){
  totals.classList.remove('audited-totals');
  totals.innerHTML='<div><strong>200<span>+</span></strong><p>Members over the years</p></div><div><strong>14</strong><p>Industries represented</p></div><div><strong>15</strong><p>Functions represented</p></div><div><strong>15<span> yrs</span></strong><p>Average experience</p></div>';
  totals.setAttribute('aria-label','Historical community figures from the 2026 SALUTE overview');
  document.querySelector('.reach-source')?.remove();
 }
})();
