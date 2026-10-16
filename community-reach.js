// Public-facing design concept: aggregate deck figures are distinct from demo geography.
(()=>{
const about=document.querySelector('#about');
if(!about||!about.classList.contains('community-about'))return;
const reach=document.createElement('section');
reach.className='community-reach';
reach.setAttribute('aria-labelledby','reach-title');
reach.innerHTML=`
 <div class="reach-heading"><p class="eyebrow">THE COMMUNITY, IN PERSPECTIVE</p><h3 id="reach-title">Many perspectives.<br><em>One community.</em></h3><p>Across industries, functions, and stages of leadership, SALUTE brings people together who might not otherwise meet.</p></div>
 <div class="reach-totals" aria-label="Figures from the supplied 2026 SALUTE overview"><div><strong>200<span>+</span></strong><p>Members over the years</p></div><div><strong>14</strong><p>Industries represented</p></div><div><strong>15</strong><p>Functions represented</p></div><div><strong>15<span> yrs</span></strong><p>Average experience</p></div></div>
 <p class="reach-source">Source: 2026 S.Suite Sponsorship & SALUTE Overview, p. 5. Historical figures—not a current active-member count.</p>
 <div class="reach-atlas"><div class="reach-map-intro"><span class="reach-kicker">01 / WHERE WE CONNECT</span><h4>A network<br><em>without borders.</em></h4><p>Explore the community by state.</p><div class="reach-demo-note"><strong>MAP DESIGN PREVIEW</strong><p>These are sample pins, not verified member locations. Member counts and state coverage will come from an approved, anonymized member summary.</p></div></div><div class="reach-map-panel"><div class="reach-map"><img src="assets/community/us-states.svg" alt="Map of the contiguous United States; pins are illustrative only"><div class="reach-pin-layer"></div></div><div class="reach-map-detail" aria-live="polite"><span>SELECT A SAMPLE PIN</span><p>State-level totals only. No names or personal addresses.</p></div><p class="reach-map-foot">Contiguous U.S. shown for layout only · Other locations can be included once verified.</p></div></div>
 <div class="reach-profile"><div class="reach-profile-intro"><span class="reach-kicker">02 / WHO MAKES UP THE ROOM</span><h4>More than<br><em>one kind of leader.</em></h4><p>Industry tells us where someone works. Function tells us what they do. Seniority shows the different stages of leadership in the community.</p></div><div class="reach-profile-panel"><div class="reach-tabs" role="tablist" aria-label="Community breakdown"><button type="button" role="tab" aria-selected="true" id="reach-tab-industry" aria-controls="reach-breakdown" data-profile="industry">Industry</button><button type="button" role="tab" aria-selected="false" id="reach-tab-function" aria-controls="reach-breakdown" data-profile="function" tabindex="-1">Role / function</button><button type="button" role="tab" aria-selected="false" id="reach-tab-seniority" aria-controls="reach-breakdown" data-profile="seniority" tabindex="-1">Seniority</button></div><div class="reach-breakdown" id="reach-breakdown" role="tabpanel" aria-labelledby="reach-tab-industry"></div><p class="reach-profile-note">PROPOSED GROUPINGS · Percentages are intentionally blank until the membership breakdown is verified. Categories shown are examples, not a complete member taxonomy.</p></div></div>`;
about.querySelector('.community-suite-story')?.before(reach);
const companies=document.createElement('section');
companies.className='community-company-wall';
companies.innerHTML=`<div class="company-wall-copy"><p class="eyebrow">THE PEOPLE BEHIND THE COMPANIES</p><h3>Different worlds.<br><em>Shared community.</em></h3><p>Across business, capital, technology, culture, and beyond—our community brings a range of perspectives to the table.</p><p class="company-wall-provenance">Community affiliations over the years. Not sponsors or endorsements.</p></div><figure><img src="assets/community/company-logos-from-deck.png" alt="Companies and organizations represented in the SALUTE community over the years" width="1336" height="1125" loading="lazy"></figure>`;
reach.after(companies);
const pins=Array.isArray(window.saluteDemoMapPins)?window.saluteDemoMapPins:[];
pins.forEach(pin=>{
 const button=document.createElement('button');
 button.type='button';button.className='reach-pin';button.style.left=pin.x+'%';button.style.top=pin.y+'%';
 button.setAttribute('aria-label',pin.name+' — sample location, not verified');
 button.innerHTML='<span class="reach-pin-dot"></span>';
 button.title=pin.name+' · sample pin';
 button.addEventListener('click',()=>{
  reach.querySelectorAll('.reach-pin').forEach(p=>p.classList.remove('selected'));
  button.classList.add('selected');
  const detail=reach.querySelector('.reach-map-detail');detail.replaceChildren();
  const title=document.createElement('span');title.textContent=pin.name+' / SAMPLE PIN';
  const copy=document.createElement('p');copy.textContent='Member total pending. This pin demonstrates the map interaction; it does not confirm SALUTE membership in this state.';
  detail.append(title,copy);
 });
 reach.querySelector('.reach-pin-layer').append(button);
});
const groupings={
 industry:['Financial services & investing','Technology','Consumer & retail','Healthcare & life sciences','Law & professional services','Media, arts & culture'],
 function:['General management','Finance & investing','Operations & strategy','Legal & governance','Product & technology','People, marketing & communications'],
 seniority:['C-suite & enterprise leadership','Executive / Senior Vice President','Vice President','Director / Senior Director','Manager / emerging leadership','Other / not yet classified']
};
function chooseProfile(key){
 const panel=reach.querySelector('.reach-breakdown');panel.replaceChildren();
 panel.setAttribute('aria-labelledby','reach-tab-'+key);
 for(const label of groupings[key]){
  const row=document.createElement('div');row.className='reach-profile-row';
  const name=document.createElement('span');name.textContent=label;
  const amount=document.createElement('span');amount.textContent='—';amount.setAttribute('aria-label','Percentage pending');
  row.append(name,amount);panel.append(row);
 }
 reach.querySelectorAll('[data-profile]').forEach(tab=>{const selected=tab.dataset.profile===key;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
}
const tabs=[...reach.querySelectorAll('[data-profile]')];
tabs.forEach((tab,index)=>{
 tab.addEventListener('click',()=>chooseProfile(tab.dataset.profile));
 tab.addEventListener('keydown',event=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;event.preventDefault();let next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[next].focus();chooseProfile(tabs[next].dataset.profile);});
});
chooseProfile('industry');
const programs=document.querySelector('.community-program-list');
if(programs){
 const talk=programs.querySelectorAll('article')[1];
 if(talk){talk.querySelector('h4').textContent='SALUTE Talks';talk.querySelector('p').textContent='Masterclasses and workshops bringing practical expertise, fresh perspectives, and shared learning to the community.';}
 const mentor=document.createElement('article');mentor.className='community-mentor-series';
 mentor.innerHTML='<span>05</span><div><p class="mentor-status">IN DEVELOPMENT</p><h4>SALUTE Exchange</h4><p>A mentor–mentee series connecting members across experience levels for candid conversations, guidance, and learning from one another.</p></div>';
 programs.querySelector('.community-foundation')?.before(mentor);
}
})();
