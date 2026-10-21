// Partner tiers confirmed by Neha. Logos sourced from each official website.
const partnerPage=document.querySelector('#sponsors');
partnerPage.querySelector('.sponsors-opening .eyebrow').textContent='THE INAUGURAL S.SUITE';
partnerPage.querySelector('.sponsors-opening h2').innerHTML='Our <em>partners.</em>';
partnerPage.querySelector('.sponsors-opening p:not(.eyebrow)').textContent='Supporting S.Suite and SALUTE’s work to expand visibility, access, and opportunity for South Asian women.';
const ssuitePartners=[
 {id:'teleperformance',name:'Teleperformance',tier:'Associate Partner',logo:'assets/partners/tp-logo.svg',url:'https://www.tp.com/',description:'TP is a global digital business services company serving clients across five continents.',connection:'An Associate Partner of the inaugural S.Suite Honors.',source:'https://www.tp.com/media/vzwfxxfo/logo.svg?quality=80'},
 {id:'pratham-usa',name:'Pratham USA',tier:'Community Partner',logo:'assets/partners/pratham-usa-logo.png',url:'https://prathamusa.org/',description:'Pratham USA partners with supporters throughout the U.S. to fund learning programs for under-resourced communities in India and beyond.',connection:'A Community Partner of the inaugural S.Suite Honors.',source:'https://prathamusa.org/wp-content/uploads/2025/01/Pratham-USA-Logo-black-text.png'},
 {id:'desai',name:'The Desai Foundation',tier:'Community Partner',logo:'assets/partners/desai-foundation-logo.webp',url:'https://thedesaifoundation.org/',description:'The Desai Foundation empowers women and children in rural India through community-led programs in health, livelihood, menstrual equity, and climate resilience.',connection:'A Community Partner of the inaugural S.Suite Honors.',source:'https://thedesaifoundation.org/wp-content/uploads/2023/12/dflogo.webp'}
, {id:'audeliss',name:'Audeliss',tier:'Associate Partner',logo:'assets/partners/audeliss-logo.svg',url:'https://www.audeliss.com/en_us/',description:'Audeliss is an executive search firm focused on diverse leadership in executive and board appointments.',connection:'An Associate Partner of the inaugural S.Suite Honors.',source:'https://www.audeliss.com/wp-content/uploads/2024/03/logo-gold.svg'},
 {id:'sukhadia',name:'Sukhadia Caterers',tier:'Vendor Partner',logo:'assets/partners/sukhadia-caterers-logo.png',url:'https://www.sukhadiacaterers.com/',description:'Catering for weddings, social gatherings, community events, and corporate occasions.',connection:'A Vendor Partner of the inaugural S.Suite Honors.',source:'https://www.sukhadiacaterers.com/wp-content/themes/sukhadiacaterers/assets/images/logo-home.png'},
 {id:'prince-george',name:'Prince George Ballroom',tier:'Vendor Partner',logo:'assets/partners/prince-george-ballroom-logo.png',url:'https://princegeorgeballroom.org/',description:'A historic New York City event venue owned and operated by Breaking Ground.',connection:'A Vendor Partner of the inaugural S.Suite Honors.',source:'https://static.showit.co/400/hjbXJv-FVws38zsTeOQIXQ/291788/logo.png'},
 {id:'nivedha',name:'Nivedha M. Photography',tier:'Vendor Partner',url:'https://nivedhamphotography.mypixieset.com/',description:'Nivedha is a freelance photographer based in New York City.',connection:'A Vendor Partner of the inaugural S.Suite Honors.',source:'https://nivedhamphotography.mypixieset.com/'}
];
const partnerWall=partnerPage.querySelector('.sponsor-recognition');
partnerWall.classList.add('partner-wall');
partnerWall.setAttribute('aria-label','S.Suite partners — select a logo to learn more');
partnerWall.innerHTML=['Associate Partner','Community Partner','Vendor Partner'].map(tier=>`<section class="partner-tier ${tier==='Associate Partner'?'partner-tier-associate':tier==='Community Partner'?'partner-tier-community':'partner-tier-vendor'}" aria-label="${tier}s"><header class="partner-tier-heading"><h3>${tier}s</h3></header><div class="partner-tier-logos">${ssuitePartners.filter(p=>p.tier===tier).map(p=>`<button type="button" class="partner-tile" data-partner="${p.id}" aria-label="Learn more about ${p.name}, ${p.tier}" aria-haspopup="dialog"><span class="partner-logo-space">${p.logo?`<img src="${p.logo}" alt="${p.name} logo" loading="lazy">`:'<span class="partner-name-treatment">NIVEDHA M.<br>PHOTOGRAPHY</span>'}</span><span class="partner-card-footer"><span>${p.name}</span><span aria-hidden="true">↗</span></span></button>`).join('')}${tier==='Associate Partner'?'<div class="associate-name-group"><div class="supporter-name-wall"><p>Jaime Patel</p><p>Manisha Bharti</p><p>Megha Desai</p><p>Sheila Bangalore</p></div></div>':''}</div></section>`).join('');
partnerWall.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
 const p=ssuitePartners.find(partner=>partner.id===button.dataset.partner);
 openModal(`<div class="partner-profile-body"><div class="partner-profile-logo" data-partner="${p.id}">${p.logo?`<img src="${p.logo}" alt="${p.name} logo">`:'<span class="partner-name-treatment">NIVEDHA M.<br>PHOTOGRAPHY</span>'}</div><p class="eyebrow">${p.tier}</p><h2 id="modal-title">${p.name}</h2><p>${p.description}</p><div class="partner-profile-role"><strong>WITH S.SUITE</strong><p>${p.connection}</p></div><a class="textlink" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit ${p.name} ↗</a></div>`);
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
