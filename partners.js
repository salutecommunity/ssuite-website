// Partner tiers confirmed by Neha. Logos sourced from each official website.
const partnerPage=document.querySelector('#sponsors');
partnerPage.querySelector('.sponsors-opening .eyebrow').textContent='THE INAUGURAL S.SUITE';
partnerPage.querySelector('.sponsors-opening h2').innerHTML='Our <em>partners.</em>';
partnerPage.querySelector('.sponsors-opening p:not(.eyebrow)').textContent='Supporting S.Suite and SALUTE’s work to expand visibility, access, and opportunity for South Asian women.';
const ssuitePartners=[
  {
    "id": "gibson-dunn",
    "name": "Gibson Dunn",
    "tier": "Executive Partner",
    "logo": "assets/partners/gibson-dunn-official.svg",
    "url": "https://www.gibsondunn.com/",
    "description": "Gibson Dunn is a global law firm advising clients on significant disputes and transactions around the world. Its teams develop legal strategies across borders, industries, and markets.",
    "connection": "An Executive Partner of the inaugural S.Suite Honors.",
    "source": "https://www.gibsondunn.com/"
  },
  {
    "id": "teleperformance",
    "name": "Teleperformance",
    "tier": "Associate Partner",
    "logo": "assets/partners/tp-logo.svg",
    "url": "https://www.tp.com/",
    "description": "TP is a global digital business services company that helps brands run and transform customer and business operations. Its services span customer experience, back-office support, technology, data, and AI-enabled solutions.",
    "connection": "An Associate Partner of the inaugural S.Suite Honors.",
    "source": "https://www.tp.com/media/vzwfxxfo/logo.svg?quality=80"
  },
  {
    "id": "pratham-usa",
    "name": "Pratham USA",
    "tier": "Community Partner",
    "logo": "assets/partners/pratham-usa-logo.png",
    "url": "https://prathamusa.org/",
    "description": "Pratham USA works with supporters across the United States to fund learning programs for under-resourced communities in India and beyond. Its work supports early learning, youth skills, and education and earning opportunities for girls and women.",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "source": "https://prathamusa.org/wp-content/uploads/2025/01/Pratham-USA-Logo-black-text.png"
  },
  {
    "id": "desai",
    "name": "The Desai Foundation",
    "tier": "Community Partner",
    "logo": "assets/partners/desai-foundation-logo.webp",
    "url": "https://thedesaifoundation.org/",
    "description": "The Desai Foundation empowers women and children in rural India through community-led programs in health, livelihood, menstrual equity, and climate resilience.",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "source": "https://thedesaifoundation.org/wp-content/uploads/2023/12/dflogo.webp"
  },
  {
    "id": "seat-at-the-table",
    "name": "Seat at the Table",
    "tier": "Community Partner",
    "logo": "assets/partners/seat-at-the-table-poster.webp",
    "imageAlt": "Seat at the Table film poster — South Asians’ Rise in American Politics",
    "url": "https://seatatthetablefilm.com/",
    "description": "Seat at the Table is a feature documentary about the rise of South Asian Americans in U.S. politics, tracing their journey from the margins to the forefront of American power.",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "source": "User-provided official film poster; https://seatatthetablefilm.com/"
  },
  {
    "id": "saya",
    "name": "SAYA",
    "url": "https://www.saya.org/",
    "description": "South Asian Youth Action (SAYA) provides year-round youth development programs for underserved New York City youth. Its work includes academic support, college access, career exploration, leadership development, and activities in sports, arts, and STEM.",
    "source": "https://www.saya.org/; https://www.saya.org/mission",
    "tier": "Community Partner",
    "logo": "assets/partners/saya-full-lockup.webp",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "imageAlt": "SAYA — South Asian Youth Action full official logo"
  },
  {
    "id": "south-asian-trailblazers",
    "name": "South Asian Trailblazers",
    "tier": "Community Partner",
    "logo": "assets/partners/south-asian-trailblazers.webp",
    "imageAlt": "South Asian Trailblazers official logo",
    "url": "https://www.southasiantrailblazers.com/",
    "description": "South Asian Trailblazers is a media platform, community, and talent and advisory agency dedicated to elevating South Asian leaders. Its podcast shares their journeys, its events bring the community together, and its agency connects talent with speaking, brand, and consulting opportunities.",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "source": "https://www.southasiantrailblazers.com/about"
  },
  {
    "id": "malai",
    "name": "MALAI",
    "url": "https://www.malai.co/",
    "description": "Founded by Pooja Bavishi, Malai makes handcrafted, eggless ice cream inspired by South Asian ingredients, aromatic spices, and her upbringing. Its flavors draw on Indian traditions, culture, and heritage.",
    "source": "https://www.malai.co/our-story",
    "tier": "Community Partner",
    "logo": "assets/partners/malai-official.webp",
    "connection": "A Community Partner of the inaugural S.Suite Honors."
  },
  {
    "id": "boomie",
    "name": "BOOMIE",
    "url": "https://boomie.rent/",
    "description": "Boomie is a peer-to-peer platform for renting, lending, and reselling South Asian fashion. Its shared closet includes womenswear, menswear, and accessories, helping people discover occasionwear and earn from pieces they already own.",
    "source": "https://boomie.rent/",
    "tier": "Community Partner",
    "logo": "assets/partners/boomie-official.webp",
    "connection": "A Community Partner of the inaugural S.Suite Honors."
  },
  {
    "id": "char-by-riya",
    "name": "Char by Riya",
    "url": "https://charbyriya.com/",
    "description": "Char by Riya creates charcuterie boards, grazing tables, and Indo-fusion food experiences for gatherings and celebrations. Its offerings also include private charcuterie workshops and interactive floral experiences through Bloom Bar by Char.",
    "source": "https://charbyriya.com/",
    "tier": "Community Partner",
    "logo": "assets/partners/char-by-riya-official.webp",
    "connection": "A Community Partner of the inaugural S.Suite Honors."
  },
  {
    "id": "the-culture-tree",
    "name": "The Culture Tree",
    "tier": "Community Partner",
    "logo": "assets/partners/culture-tree-official.webp",
    "imageAlt": "The Culture Tree official logo",
    "url": "https://theculturetree.com/",
    "description": "The Culture Tree creates inclusive platforms that amplify South Asian voices through cultural programs, education, language classes, and community gatherings. Its programs explore festivals, food, identity, and representation to nurture South Asian community in America.",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "source": "https://theculturetree.com/"
  },
  {
    "id": "kulture-khazana",
    "name": "Kulture Khazana",
    "tier": "Community Partner",
    "logo": "assets/partners/kulture-khazana-official.png",
    "imageAlt": "Kulture Khazana official logo",
    "url": "https://kulturekhazana.com/",
    "description": "Kulture Khazana creates toys, crafts, puzzles, books, and festival kits that connect families with South Asian culture through hands-on play. Founded by mom and cultural educator Akruti Babaria, the brand helps families share Indian traditions and festivals with children.",
    "connection": "A Community Partner of the inaugural S.Suite Honors.",
    "source": "https://kulturekhazana.com/"
  },
  {
    "id": "audeliss",
    "name": "Audeliss",
    "tier": "Associate Partner",
    "logo": "assets/partners/audeliss-logo.svg",
    "url": "https://www.audeliss.com/en_us/",
    "description": "Audeliss is an executive search firm focused on diverse leadership in executive and board appointments. Its services include executive search, board practice, and talent pipelining, engaging candidates beyond traditional recruitment networks.",
    "connection": "An Associate Partner of the inaugural S.Suite Honors.",
    "source": "https://www.audeliss.com/wp-content/uploads/2024/03/logo-gold.svg"
  },
  {
    "id": "sukhadia",
    "name": "Sukhadia Caterers",
    "tier": "Vendor Partner",
    "logo": "assets/partners/sukhadia-caterers-provided-20261022.png",
    "url": "https://www.sukhadiacaterers.com/",
    "description": "Sukhadia Caterers is part of a four-generation family business, offering catering for weddings, social gatherings, community events, and corporate occasions. Its food combines traditional recipes and fresh ingredients with contemporary presentation and global cuisine.",
    "connection": "A Vendor Partner of the inaugural S.Suite Honors.",
    "source": "https://www.sukhadiacaterers.com/wp-content/themes/sukhadiacaterers/assets/images/logo-home.png"
  },
  {
    "id": "prince-george",
    "name": "Prince George Ballroom",
    "tier": "Vendor Partner",
    "logo": "assets/partners/prince-george-ballroom-logo.png",
    "url": "https://princegeorgeballroom.org/",
    "description": "Prince George Ballroom is a New York City event venue with spaces for weddings, galas, corporate events, and creative productions. It is owned and operated by Breaking Ground, a nonprofit providing affordable housing for homeless and low-income New Yorkers.",
    "connection": "A Vendor Partner of the inaugural S.Suite Honors.",
    "source": "https://static.showit.co/400/hjbXJv-FVws38zsTeOQIXQ/291788/logo.png"
  },
  {
    "id": "nivedha",
    "name": "Nivedha M. Photography",
    "tier": "Vendor Partner",
    "url": "https://nivedhamphotography.mypixieset.com/",
    "description": "Nivedha is a freelance photographer based in New York City. Her work centers on storytelling and preserving memories, helping clients document milestones in a way that feels true to them.",
    "connection": "A Vendor Partner of the inaugural S.Suite Honors.",
    "source": "https://nivedhamphotography.mypixieset.com/"
  },
  {
    "id": "third-place-creative",
    "name": "The Third Place Creative",
    "tier": "Vendor Partner",
    "logo": "assets/partners/third-place-creative-official.webp",
    "url": "https://www.thethirdplacecreative.co/",
    "description": "The Third Place Creative is a full-service creative agency that grows your community through storytelling by specializing in a social-first content approach.",
    "connection": "A Vendor Partner of the inaugural S.Suite Honors.",
    "source": "User-supplied description; https://www.thethirdplacecreative.co/"
  }
];
const partnerWall=partnerPage.querySelector('.sponsor-recognition');
partnerWall.classList.add('partner-wall');
partnerWall.setAttribute('aria-label','S.Suite partners — select a logo to learn more');
partnerWall.innerHTML=['Executive Partner','Associate Partner','Community Partner','Vendor Partner'].map(tier=>`<section class="partner-tier ${tier==='Executive Partner'?'partner-tier-executive':tier==='Associate Partner'?'partner-tier-associate':tier==='Community Partner'?'partner-tier-community':'partner-tier-vendor'}" aria-label="${tier}s"><header class="partner-tier-heading"><h3>${tier}s</h3></header><div class="partner-tier-logos">${ssuitePartners.filter(p=>p.tier===tier).map(p=>`<button type="button" class="partner-tile" data-partner="${p.id}" aria-label="Learn more about ${p.name}, ${p.tier}" aria-haspopup="dialog"><span class="partner-logo-space">${p.logo?`<img src="${p.logo}" alt="${p.imageAlt||`${p.name} logo`}" loading="lazy">`:'<span class="partner-name-treatment">NIVEDHA M.<br>PHOTOGRAPHY</span>'}</span><span class="partner-card-footer"><span>${p.name}</span><span aria-hidden="true">↗</span></span></button>`).join('')}${tier==='Associate Partner'?'<section class="associate-name-group" aria-label="Individual Associate Partners"><p class="associate-recognition-label">Individual Associate Partners</p><div class="supporter-name-wall"><p>Jaime Patel</p><p>Manisha Bharti</p><p>Megha Desai</p><p>Nandita Bakhshi</p><p>Sri Murthy</p><p>Jyothi Rao</p><p>Rebecca Parekh</p></div></section>':''}</div></section>`).join('');
partnerWall.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
 const p=ssuitePartners.find(partner=>partner.id===button.dataset.partner);
 openModal(`<div class="partner-profile-body"><div class="partner-profile-logo" data-partner="${p.id}">${p.logo?`<img src="${p.logo}" alt="${p.imageAlt||`${p.name} logo`}">`:'<span class="partner-name-treatment">NIVEDHA M.<br>PHOTOGRAPHY</span>'}</div><p class="eyebrow">${p.tier}</p><h2 id="modal-title">${p.name}</h2><p>${p.description}</p><div class="partner-profile-role"><strong>WITH S.SUITE</strong><p>${p.connection}</p></div><a class="textlink" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit ${p.name} ↗</a></div>`);
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
