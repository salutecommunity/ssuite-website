// Photo-led About page using documented, real SALUTE gatherings.
// Keep the previous About view usable if a photo manifest fails to load.
(()=>{
const communityPhotos=window.saluteCommunityPhotos;
if(!Array.isArray(communityPhotos)||communityPhotos.length<4)return;
function communityFigure(photo,className='',lazy=true){
 const figure=document.createElement('figure');figure.className=className;
 const image=document.createElement('img');image.src=photo.src;image.alt=photo.alt||photo.caption;image.loading=lazy?'lazy':'eager';image.decoding='async';
 image.width=photo.width;image.height=photo.height;
 const caption=document.createElement('figcaption');caption.textContent=photo.caption;
 figure.append(image);return figure;
}
const communityAbout=document.querySelector('#about');
communityAbout.classList.remove('platform','why-suite');
communityAbout.classList.add('community-about');
communityAbout.innerHTML=`
 <header class="community-opening"><div class="community-folio"><span>ABOUT SALUTE & S.SUITE</span><span>PEOPLE. CONNECTION. POSSIBILITY.</span></div><div class="community-opening-type"><h2>The community<br><em>behind S.Suite.</em></h2><p>SALUTE brings South Asian women and allies together to expand access, visibility, and opportunity. S.Suite brings that leadership into the spotlight.</p></div></header>
 <div class="community-cover-slot"></div>
 <section class="community-story"><div class="community-story-photo"></div><div class="community-story-copy"><p class="eyebrow">SOUTH ASIAN LEADERS UNITE TO EMPOWER</p><h3>Relationships<br>that <em>open doors.</em></h3><p>SALUTE is a private professional network connecting South Asian women across industries and generations. Our community comes together to share expertise, build trusted relationships, and create opportunities for one another.</p><p>What matters is not only who you meet, but what you can help one another move forward—an introduction, a new perspective, or access to a room you haven’t been in before.</p><p>Allies and complementary organizations are part of this work. Changing who leads takes an ecosystem: people willing to hire, fund, sponsor, appoint, and open doors beyond their own circles.</p><a class="textlink" href="https://salute.community/" target="_blank" rel="noopener noreferrer">Meet SALUTE ↗</a></div></section>
 <section class="community-photo-pair" aria-label="Scenes from the SALUTE community"></section>
 <section class="community-suite-story"><div class="community-suite-title"><p class="eyebrow">WHY WE CREATED S.SUITE</p><h3>Making South Asian<br>leadership <em>the norm.</em></h3><p>S.Suite is SALUTE’s inaugural honors program. It recognizes South Asian women leaders and the allies who champion their advancement—across industries and beyond a single evening.</p></div><div class="community-suite-purpose"><article><span>01 / RECOGNITION</span><h4>Make the leadership visible.</h4><p>The honors and category lists spotlight a broad range of leaders, helping more people see the talent, experience, and influence in this community.</p></article><article><span>02 / SHARED PURPOSE</span><h4>Carry it forward, together.</h4><p>The S.Suite Class is designed as a leadership cohort that will champion a shared community initiative over the following year.</p></article><div class="community-suite-links"><a href="#categories">The categories ↗</a><a href="#evening">The evening & guest experience ↗</a></div></div></section>`;
communityAbout.querySelector('.community-cover-slot').append(communityFigure(communityPhotos[0],'community-cover',false));
communityAbout.querySelector('.community-story-photo').append(communityFigure(communityPhotos[1],'community-editorial-photo'));
const photoPair=communityAbout.querySelector('.community-photo-pair');
photoPair.append(communityFigure(communityPhotos[2],'community-pair-large'),communityFigure(communityPhotos[3],'community-pair-small'));

const communityPrograms=document.querySelector('#salute');
communityPrograms.classList.remove('section','wrap','salute','salute-expanded');
communityPrograms.classList.add('community-programs');
communityPrograms.innerHTML=`<div class="community-programs-intro"><p class="eyebrow">THE WORK CONTINUES</p><h3>Beyond<br><em>the evening.</em></h3><p>S.Suite is one expression of a year-round community. SALUTE creates opportunities to learn, meet across industries, and build relationships over time.</p><div class="community-program-image-slot"></div></div><div class="community-program-list"><article><span>01</span><div><h4>On the Table</h4><p>Curated dinners connecting South Asian leaders and allies through conversation and thoughtful introductions.</p></div></article><article><span>02</span><div><h4>Visionary Series & Masterclasses</h4><p>Conversations with influential leaders and practical learning across leadership, business, and career growth.</p></div></article><article><span>03</span><div><h4>The Forum</h4><p>Table conversations and short panels bringing members together with leaders, experts, and allies.</p></div></article><article><span>04</span><div><h4>The SALUTE Guild</h4><p>An invite-only community of senior executives committed to sponsoring talent and opening doors.</p></div></article><div class="community-foundation"><strong>SALUTE Foundation</strong><p>A registered 501(c)(3) nonprofit organization supporting this work. S.Suite brings recognition and fundraising together to help advance SALUTE’s mission.</p></div><a class="textlink" href="#sponsors">Support the community ↗</a></div>`;
communityPrograms.querySelector('.community-program-image-slot').append(communityFigure(communityPhotos[0],'community-program-image'));
})();
