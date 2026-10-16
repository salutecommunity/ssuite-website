// Partner tiers confirmed by Neha. Public official logos; no production changes.
const partnerPage=document.querySelector('#sponsors');
partnerPage.querySelector('.sponsors-opening .eyebrow').textContent='THE INAUGURAL S.SUITE';
partnerPage.querySelector('.sponsors-opening h2').innerHTML='Our <em>partners.</em>';
partnerPage.querySelector('.sponsors-opening p:not(.eyebrow)').textContent='Supporting S.Suite and SALUTE’s work to expand visibility, access, and opportunity for South Asian women.';
const ssuitePartners=[
 {id:'teleperformance',name:'Teleperformance',tier:'Associate Partner',logo:'assets/partners/tp-logo.svg',url:'https://www.tp.com/',description:'TP is a global digital business services company serving clients across five continents.',connection:'An Associate Partner of the inaugural S.Suite Honors.',source:'https://www.tp.com/media/vzwfxxfo/logo.svg?quality=80'},
 {id:'desai',name:'The Desai Foundation',tier:'Community Partner',logo:'assets/partners/desai-foundation-logo.webp',url:'https://thedesaifoundation.org/',description:'The Desai Foundation empowers women and children in rural India through community-led programs in health, livelihood, menstrual equity, and climate resilience.',connection:'A Community Partner of the inaugural S.Suite Honors.',source:'https://thedesaifoundation.org/wp-content/uploads/2023/12/dflogo.webp'}
];
const partnerWall=partnerPage.querySelector('.sponsor-recognition');
partnerWall.classList.add('partner-wall');
partnerWall.setAttribute('aria-label','S.Suite partners — select a logo to learn more');
partnerWall.innerHTML=['Associate Partner','Community Partner'].map(tier=>`<section class="partner-tier ${tier==='Associate Partner'?'partner-tier-associate':'partner-tier-community'}" aria-label="${tier}s"><header class="partner-tier-heading"><h3>${tier}s</h3></header><div class="partner-tier-logos">${ssuitePartners.filter(p=>p.tier===tier).map(p=>`<button type="button" class="partner-tile" data-partner="${p.id}" aria-label="Learn more about ${p.name}, ${p.tier}" aria-haspopup="dialog"><span class="partner-logo-space"><img src="${p.logo}" alt="${p.name} logo" loading="lazy"></span><span class="partner-card-footer"><span>${p.name}</span><span aria-hidden="true">↗</span></span></button>`).join('')}${tier==='Associate Partner'?'<div class="associate-name-group"><div class="supporter-name-wall"><p>Jaime Patel</p><p>Manisha Bharti</p><p>Megha Desai</p><p>Sheila Bangalore</p></div></div>':''}</div></section>`).join('');
partnerWall.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
 const p=ssuitePartners.find(partner=>partner.id===button.dataset.partner);
 openModal(`<div class="partner-profile-body"><div class="partner-profile-logo"><img src="${p.logo}" alt="${p.name} logo"></div><p class="eyebrow">${p.tier}</p><h2 id="modal-title">${p.name}</h2><p>${p.description}</p><div class="partner-profile-role"><strong>WITH S.SUITE</strong><p>${p.connection}</p></div><a class="textlink" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit ${p.name} ↗</a></div>`);
}));

// A distinct, consistently spaced invitation after the partner recognition wall.
const sponsorPaths=partnerPage.querySelector('.sponsor-paths');
sponsorPaths.insertAdjacentHTML('beforebegin','<header class="sponsor-options-heading"><p class="eyebrow">Partner with S.Suite</p><h2>Be part of<br><em>what comes next.</em></h2></header>');
sponsorPaths.querySelectorAll('article').forEach(article=>{
 const copy=document.createElement('div');
 copy.className='sponsor-option-copy';
 article.querySelectorAll('p:not(.eyebrow)').forEach(p=>copy.append(p));
 article.querySelector('h3').after(copy);
});
