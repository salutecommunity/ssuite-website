// This editorial mockup uses a dated aggregate audit, not live membership billing data.
(()=>{
 const d=window.saluteAuditedCommunity;
 const reach=document.querySelector('.community-reach');
 if(!d||!reach)return;
 const totals=reach.querySelector('.reach-totals');
 totals.classList.add('audited-totals');totals.replaceChildren();
 const count=document.createElement('div');
 const number=document.createElement('strong');number.textContent=String(d.total);
 const label=document.createElement('p');label.textContent='Members in the latest roster snapshot';
 count.append(number,label);
 const description=document.createElement('div');description.className='audited-roster-explanation';
 const h=document.createElement('h4');h.textContent='One community. Many perspectives.';
 const p=document.createElement('p');p.textContent='Annual, complimentary, and core team / board membership plans. App-access-only subscriptions and records without a current membership subscription are excluded.';
 description.append(h,p);totals.append(count,description);
 reach.querySelector('.reach-source').textContent='Database audit: October 14, 2026 · Outseta-backed directory snapshot: October 12, 2026. Provisional pending live Outseta reconciliation. The deck’s historical 200+ figure is a different measure and has not been independently reconciled.';
 reach.querySelectorAll('.reach-pin').forEach(pin=>pin.remove());
 reach.querySelector('.reach-map img').alt='United States map layout preview; no member locations are plotted';
 reach.querySelector('.reach-map-intro>p').textContent='A geographic view is planned once location information is available.';
 reach.querySelector('.reach-demo-note strong').textContent='LOCATION DATA NOT AVAILABLE';
 reach.querySelector('.reach-demo-note p').textContent='The audited roster has no usable state data. Sample pins have been removed rather than implying a geographic footprint.';
 reach.querySelector('.reach-map-detail').innerHTML='<span>MAP LAYOUT ONLY</span><p>No member locations or state counts are shown.</p>';
 reach.querySelector('.reach-map-foot').textContent='Geographic reach is not yet verified. No individual locations will be displayed.';
 const panel=reach.querySelector('.reach-breakdown');
 const note=reach.querySelector('.reach-profile-note');
 function render(key){
  panel.replaceChildren();
  if(key==='seniority'){
   const p=document.createElement('p');p.className='audited-unavailable';p.textContent='A seniority breakdown is not available yet. Job titles alone are not a consistent measure of seniority.';panel.append(p);
   note.textContent='No dedicated seniority field is available in the audited roster. No distribution has been inferred.';return;
  }
  const known=d.coverage[key];
  for(const item of d[key]){
   const row=document.createElement('div');row.className='reach-profile-row';
   const label=document.createElement('span');label.textContent=item.label;
   const value=document.createElement('span');value.textContent=item.count+' / '+known+' · '+Math.round(item.count/known*100)+'%';
   row.append(label,value);panel.append(row);
  }
  note.textContent='PROFILE SUBSET ONLY · '+known+' of '+d.total+' members supplied this field ('+Math.round(known/d.total*100)+'% coverage). Counts and percentages refer only to those responses, not the full community. Source categories are self-reported; role and industry labels sometimes overlap. October 12, 2026 snapshot.';
 }
 // Original handlers retain keyboard navigation and selected-tab attributes.
 reach.querySelectorAll('[data-profile]').forEach(tab=>{
  tab.addEventListener('click',()=>render(tab.dataset.profile));
  tab.addEventListener('keydown',()=>queueMicrotask(()=>render(reach.querySelector('[data-profile][aria-selected="true"]').dataset.profile)));
 });
 render('industry');
})();
