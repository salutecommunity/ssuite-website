// Concise website copy adapted from the supplied SALUTE / S.Suite deck.
// No historical partner names, unconfirmed benefits, or sponsorship pricing.
document.querySelector('.hero-copy>p').innerHTML='Honoring South Asian<br>women <em>and allies.</em>';
document.querySelector('.hero-discover').innerHTML='THE CATEGORIES <span>↘</span>';
document.querySelector('.hero-footnote span:last-child').textContent='THE INAUGURAL HONORS';
document.querySelector('.hero-event .btn').innerHTML='Tickets <span>↗</span>';
document.querySelector('.host-table-link').textContent='Tables ↗';
document.querySelector('.home-categories .eyebrow').textContent='THE CATEGORIES';
document.querySelector('.category-intro').textContent='Recognizing South Asian women across industries, alongside the allies who champion their advancement.';
document.querySelector('.home-categories .textlink').textContent='View category details ↗';
document.querySelector('#honorees .sectionhead h2').innerHTML='The inaugural<br><em>honorees.</em>';
document.querySelector('.honoree-copy .lede').textContent='SALUTE’s lifetime achievement honor recognizes Indra Nooyi’s leadership and the example she has set for generations of women.';
document.querySelector('.home-intro').insertAdjacentHTML('beforeend',`<section class="home-suite-introduction" aria-labelledby="home-suite-title"><div><p class="eyebrow">THE S.SUITE HONORS</p><h2 id="home-suite-title">Making leadership visible.</h2></div><div class="home-suite-introduction-copy"><p class="home-suite-definition">An honors ceremony recognizing South Asian women leaders and allies across business, capital, &amp; culture.</p><p>Created by SALUTE, S.Suite spotlights the leaders shaping our world—and the future we’re investing in. Each S.Suite Class comes together to champion a shared community initiative that expands access, visibility, and connection.</p><p>Alongside the honors, The S.Suite Lists spotlight standout leaders across the categories—bringing more of our community’s talent and influence into view.</p></div></section>`);

const platform=document.querySelector('#about');
platform.querySelector('.eyebrow').textContent='ABOUT S.SUITE';
platform.querySelector('h2').innerHTML='Recognition with<br><em>a purpose.</em>';
const introduction=platform.querySelectorAll('.wrap>div>p:not(.eyebrow)');
introduction[0].textContent='S.Suite is SALUTE’s inaugural honors program, recognizing South Asian women leaders and allies across business, capital, culture, and public life.';
introduction[1].textContent='It brings SALUTE’s mission into the spotlight: greater visibility, access, and opportunity for South Asian women.';
platform.querySelector('.three').hidden=true;

const story=document.querySelector('.salute-story');
story.querySelector('.eyebrow').textContent='SOUTH ASIAN LEADERS UNITE TO EMPOWER';
story.querySelector('h2').innerHTML='The community<br><em>behind S.Suite.</em>';
story.querySelector('.salute-lede').textContent='SALUTE is a private professional network connecting South Asian women and allies across industries and generations.';
const paragraphs=story.querySelectorAll('p:not(.eyebrow):not(.salute-lede)');
paragraphs[0].textContent='We bring leaders together to share expertise, build trusted relationships, and open doors for one another. Our focus is not simply who is in the room, but the opportunities those connections can create.';
paragraphs[1].textContent='Allies are active participants in this work. By connecting with the people and institutions who hire, fund, sponsor, and appoint, we help our community reach beyond its existing networks.';
const work=document.querySelector('.salute-work');
work.querySelector('h3').textContent='Year-round connection.';
work.querySelector(':scope>p:not(.eyebrow)').textContent='S.Suite is one part of SALUTE’s work. Our programs create space for ongoing relationships, learning, and collaboration.';
const programCopy=[
 ['On the Table','Curated dinners connecting South Asian leaders and allies through conversation and thoughtful introductions.'],
 ['Visionary Series & Masterclasses','Conversations with influential leaders and practical learning across leadership, business, and career growth.'],
 ['The Forum','Table conversations and short panels bringing members together with leaders, experts, and allies.']
];
work.querySelectorAll('article').forEach((article,i)=>{if(programCopy[i]){article.querySelector('h4').textContent=programCopy[i][0];article.querySelector('p').textContent=programCopy[i][1];}});
work.querySelector('.foundation-note').insertAdjacentHTML('beforebegin','<article><h4>The SALUTE Guild</h4><p>An invite-only community of senior executives committed to sponsoring talent, opening doors, and creating opportunities.</p></article>');
document.querySelector('.salute-pillars').hidden=true;

const sponsors=document.querySelector('#sponsors');
sponsors.querySelector('.sponsors-opening .eyebrow').textContent='SPONSORSHIP & PARTNERSHIPS';
sponsors.querySelector('.sponsors-opening h2').innerHTML='Partner with<br><em>S.Suite.</em>';
sponsors.querySelector('.sponsors-opening p:not(.eyebrow)').textContent='Support the inaugural honors and SALUTE’s work to expand visibility, access, and opportunity for South Asian women.';
sponsors.querySelector('.sectionhead').hidden=true;
const paths=sponsors.querySelectorAll('.sponsor-paths article');
paths[0].querySelector('h3').textContent='Sponsor S.Suite.';
paths[0].querySelectorAll('p:not(.eyebrow)')[0].textContent='Your support helps make the evening possible and advances the community behind it. We work with each sponsor to build a partnership aligned with their priorities and SALUTE’s mission.';
paths[0].querySelectorAll('p:not(.eyebrow)')[1].textContent='Partnerships can extend beyond one night through curated gatherings, introductions, or tailored brand participation. Opportunities and benefits are agreed directly with SALUTE.';
paths[1].querySelector('h3').textContent='Connect our communities.';
paths[1].querySelectorAll('p:not(.eyebrow)')[0].textContent='We welcome complementary organizations that share our commitment to leadership and opportunity. Together, we can introduce new perspectives and build relationships across communities.';
paths[1].querySelectorAll('p:not(.eyebrow)')[1].textContent='Guests do not need to be South Asian women. Allies and others who share the mission are welcome.';
sponsors.querySelector('.sponsor-host .eyebrow').textContent='TICKETS & TABLES';
document.querySelector('#evening .intro h2').innerHTML='The inaugural<br><em>evening.</em>';
document.querySelector('.footer-top>div>p').textContent='The inaugural honors. A program of SALUTE.';
