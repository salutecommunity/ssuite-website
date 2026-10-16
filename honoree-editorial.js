// Portrait-led treatment inspired by the current public S.Suite Speakers page.
// Full biographies and sections carried from the existing public Speakers page.
(()=>{
 const page=document.querySelector('#honorees');
 const source=window.ssuiteSpeakerContent;
 const escape=text=>String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const paras=list=>list.map(text=>`<p>${escape(text)}</p>`).join('');
 const sentenceCaseQuote=source.quote.toLowerCase().replace(/(^|[.!?]\s+)([a-z])/g,(_,prefix,letter)=>prefix+letter.toUpperCase());
 const quoteMarkup=escape(sentenceCaseQuote).replace('helping build the future','<em>helping build the future</em>').replace('pull others up','<em>pull others up</em>');
 const feature=document.createElement('div');
 feature.className='honoree-editorial';
 feature.innerHTML=`
  <header class="honoree-folio"><span>THE INAUGURAL S.SUITE HONORS</span><span>THE CHAIR / LIFETIME ACHIEVEMENT</span></header>
  <figure class="honoree-cover"><img src="assets/portrait-indra-speakers-wide.png" alt="Indra Nooyi, inaugural S.Suite Chair"><figcaption>FORMER CHAIRMAN & CHIEF EXECUTIVE OFFICER, PEPSICO</figcaption></figure>
  <div class="honoree-nameplate"><p class="honoree-side-label">THE S.SUITE CHAIR<br>LIFETIME ACHIEVEMENT<br>HONOREE</p><h2>Indra<br><em>Nooyi</em></h2><div class="honoree-side-action"><p>IN CONVERSATION<br>WITH ANU AIYENGAR</p><button type="button" class="textlink" data-read-indra>Read Indra’s bio ↓</button></div></div>
  <div class="honoree-dedication"><p>SALUTE honors Indra Nooyi as the inaugural S.Suite Chair—our lifetime achievement recognition.</p></div>
  <section class="honoree-bio" aria-labelledby="indra-bio-title" tabindex="-1"><div class="honoree-bio-heading"><p class="eyebrow">THE WOMAN BEHIND THE LEGACY</p><h3 id="indra-bio-title">Meet <em>Indra.</em></h3></div><div class="honoree-bio-copy">
   ${paras(source.indra)}
   <a class="textlink" href="https://www.indranooyi.com/" target="_blank" rel="noopener noreferrer">Explore Indra’s work ↗</a>
  </div></section>
  <figure class="honoree-quote"><span class="honoree-quotation-mark" aria-hidden="true">“</span><blockquote>${quoteMarkup}</blockquote><figcaption><p class="honoree-quote-credit">Indra Nooyi</p><p class="honoree-quote-title">Former Chairman & Chief Executive Officer, PepsiCo</p><p class="honoree-quote-honor">The inaugural S.Suite Chair · Lifetime Achievement Honoree</p></figcaption></figure>
  <section class="honoree-conversation"><div class="honoree-conversation-photo"><img src="assets/portrait-anu-aiyengar.jpg" alt="Anu Aiyengar" loading="lazy"></div><div class="honoree-conversation-copy"><p class="eyebrow">MODERATOR · THE KEYNOTE FIRESIDE CONVERSATION</p><h3>Anu<br><em>Aiyengar.</em></h3><p>${escape(source.anuIntro)}</p><a class="textlink" href="#evening">Explore the evening ↗</a></div></section>
  <section class="honoree-bio honoree-anu-bio" aria-labelledby="anu-bio-title"><div class="honoree-bio-heading"><p class="eyebrow">GLOBAL CHAIR OF INVESTMENT BANKING, J.P. MORGAN</p><h3 id="anu-bio-title">Meet <em>Anu.</em></h3></div><div class="honoree-bio-copy">${paras(source.anu)}</div></section>
  <section class="honoree-book"><div class="honoree-book-cover"><img src="assets/indra-my-life-in-full.jpg" alt="My Life in Full: Work, Family, and Our Future by Indra Nooyi" loading="lazy"></div><div><p class="eyebrow">NEW YORK TIMES BESTSELLER</p><h3>My Life<br><em>in Full.</em></h3><p class="honoree-book-subtitle">Work, Family, and Our Future</p><p>${escape(source.book)}</p><a class="textlink" href="${escape(source.bookUrl)}" target="_blank" rel="noopener noreferrer">Learn more about the book ↗</a></div></section>
  <section class="honoree-social" aria-label="Connect with SALUTE">${source.social.map(s=>`<a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer"><span>${s.label==='Follow'?'Instagram':s.label==='Connect'?'LinkedIn':'The SALUTE Suite'}</span><strong>${s.label} ↗</strong></a>`).join('')}</section>
  <p class="honoree-upcoming">More inaugural honorees and category lists will be announced in the coming weeks.</p>`;
 page.append(feature);
 function readBio(){
  feature.querySelector('.honoree-bio').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  feature.querySelector('.honoree-bio').focus({preventScroll:true});
 }
 feature.querySelector('[data-read-indra]').addEventListener('click',readBio);
 // The homepage and honoree page now share the same full reading experience.
 page.querySelector('[data-preview="indra"]').textContent='Read Indra’s bio ↗';
 page.querySelector('[data-preview="indra"]').onclick=()=>{
  if(location.hash!=='#honorees')location.hash='honorees';
  requestAnimationFrame(()=>requestAnimationFrame(readBio));
 };
})();
