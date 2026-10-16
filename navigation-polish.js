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
  evening:[['Our approach','.night-approach'],['Agenda','.night-flow'],['Ambassadors','https://event.ssuite.org/ambassadors'],['The conversation','#recognition-conversation'],['Attend','.night-attend']],
  sponsors:[['Our partners','.partner-wall'],['Partnerships','.sponsor-paths'],['Host a table','.sponsor-host']],
 };
 function updateWayfinder(){
  setOpen(false);pageNav.replaceChildren();
  const sections=pages[location.hash.slice(1)]||[];pageNav.hidden=!sections.length;
  if(!sections.length)return;
  sections.forEach(([text,selector])=>{
   if(selector.startsWith('https://')){
    const link=document.createElement('a');link.href=selector;link.target='_blank';link.rel='noopener noreferrer';link.textContent=text+' ↗';pageNav.append(link);return;
   }
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

// Draw directional marks as vectors, never platform-dependent emoji glyphs.
// Observe text updates too: category selection and route links are built later.
(()=>{
 const ns='http://www.w3.org/2000/svg';
 const paths={
  '↗':'M5 19 19 5M5 5h14v14',
  '↘':'M5 5 19 19M5 19h14V5',
  '↙':'M19 5 5 19M5 5v14h14',
  '↖':'M19 19 5 5M5 19V5h14',
  '→':'M4 12h16m-7-7 7 7-7 7',
  '←':'M20 12H4m7-7-7 7 7 7',
  '↓':'M12 4v16m-7-7 7 7 7-7',
  '↑':'M12 20V4m-7 7 7-7 7 7',
  '⌄':'m5 9 7 7 7-7'
 };
 const marks=/[↗↘↙↖→←↓↑⌄]\uFE0F?/gu;
 function vector(mark){
  const svg=document.createElementNS(ns,'svg');
  svg.setAttribute('class','direction-icon');svg.setAttribute('viewBox','0 0 24 24');
  svg.setAttribute('width','24');svg.setAttribute('height','24');
  svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
  const path=document.createElementNS(ns,'path');path.setAttribute('d',paths[mark[0]]);
  path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');
  path.setAttribute('stroke-width','1.5');path.setAttribute('stroke-linecap','square');
  path.setAttribute('stroke-linejoin','miter');svg.append(path);return svg;
 }
 function convert(node){
  if(!node.parentElement||node.parentElement.closest('script,style,textarea,option,svg,[contenteditable]'))return;
  const text=node.nodeValue;marks.lastIndex=0;if(!marks.test(text))return;marks.lastIndex=0;
  const fragment=document.createDocumentFragment();let start=0;
  for(const match of text.matchAll(marks)){
   fragment.append(document.createTextNode(text.slice(start,match.index)),vector(match[0]));start=match.index+match[0].length;
  }
  fragment.append(document.createTextNode(text.slice(start)));node.replaceWith(fragment);
 }
 function scan(root){
  if(root.nodeType===Node.TEXT_NODE){convert(root);return;}
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(convert);
 }
 scan(document.body);
 new MutationObserver(records=>records.forEach(record=>{
  if(record.type==='characterData')convert(record.target);
  else record.addedNodes.forEach(scan);
 })).observe(document.body,{childList:true,subtree:true,characterData:true});
})();
