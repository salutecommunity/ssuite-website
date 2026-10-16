// A dedicated guest-facing page, separate from the homepage and private portals.
const night=document.querySelector('#evening');
night.classList.remove('wrap','section','evening');
night.classList.add('night-page');
night.innerHTML=`
 <header class="night-opening">
  <div class="night-opening-copy">
   <p class="eyebrow">SALUTE PRESENTS · THE INAUGURAL HONORS</p>
   <h2>The <em>Evening.</em></h2>
   <p class="night-lede">Join us to honor South Asian women leaders and allies—and connect with the community behind them.</p>
   <div class="night-actions"><a class="btn" href="https://event.ssuite.org/#attend" target="_blank" rel="noopener noreferrer">Tickets <span>↗</span></a><a class="night-text-link" href="https://event.ssuite.org/tables/" target="_blank" rel="noopener noreferrer">Host a table <span>↗</span></a></div>
  </div>
  <div class="night-facts">
   <div><span>WHEN</span><p>Friday, November 20, 2026</p></div>
   <div><span>START TIME</span><p>6:30 p.m. Eastern</p></div>
   <div><span>VENUE & ADDRESS</span><p>Prince George Ballroom<br>15 East 27th Street<br>New York, NY 10016</p><a class="night-directions" href="https://maps.app.goo.gl/AeyQDu6mB3Ca1vKQ7" target="_blank" rel="noopener noreferrer">Get directions ↗</a></div>
   <div><span>THE FORMAT</span><p>Reception · Seated dinner · Honors</p></div>
  </div>
 </header>
 <section class="night-conversation" aria-labelledby="night-conversation-title">
  <div class="night-section-heading"><div><p class="eyebrow">A HIGHLIGHT OF THE EVENING</p><h3 id="night-conversation-title">In conversation.</h3></div><p>Lifetime Achievement Honoree Indra Nooyi joins Anu Aiyengar for a fireside conversation during the seated honors dinner.</p></div>
  <div class="night-speakers">
   <article class="night-speaker"><div class="night-portrait"><img src="assets/portrait-indra-nooyi-tall.jpg" alt="Indra Nooyi" loading="lazy"><span>THE S.SUITE CHAIR · LIFETIME ACHIEVEMENT</span></div><div class="night-speaker-caption"><h4>Indra Nooyi</h4><p>Former Chairman & Chief Executive Officer<br>PepsiCo</p></div></article>
   <article class="night-speaker"><div class="night-portrait"><img src="assets/portrait-anu-aiyengar.jpg" alt="Anu Aiyengar" loading="lazy"><span>CONVERSATION MODERATOR</span></div><div class="night-speaker-caption"><h4>Anu Aiyengar</h4><p>Global Chair of Investment Banking<br>J.P. Morgan</p></div></article>
  </div>
 </section>
 <section class="night-flow" aria-labelledby="night-flow-title">
  <div class="night-section-heading"><div><p class="eyebrow">FROM ARRIVAL TO THE FINAL CONVERSATION</p><h3 id="night-flow-title">The flow of the night.</h3></div><p>Time to meet new people, celebrate the inaugural honorees, and continue the conversation beyond your table.</p></div>
  <div class="night-chapters">
   <article><span class="night-number">01</span><p class="eyebrow">COCKTAIL RECEPTION</p><h4>Intros with Intention</h4><p>Begin with drinks and thoughtful introductions. S.Suite Ambassadors help connect guests across industries and circles.</p></article>
   <article><span class="night-number">02</span><p class="eyebrow">SEATED DINNER & HONORS</p><h4>The inaugural honors</h4><p>Take your seat for dinner, recognition of the inaugural S.Suite Class, and the conversation with Indra Nooyi and Anu Aiyengar.</p></article>
   <article><span class="night-number">03</span><p class="eyebrow">DESSERT RECEPTION</p><h4>Beyond your table</h4><p>Reconnect with someone you met earlier, meet guests from other tables, and make time for one more conversation.</p></article>
  </div>
 </section>
 <section class="night-attend" aria-labelledby="night-attend-title">
  <div class="night-attend-heading"><p class="eyebrow">NOVEMBER 20 · NEW YORK CITY</p><h3 id="night-attend-title">Be part of<br><em>the evening.</em></h3><p>South Asian women, allies, and guests who share SALUTE’s mission are welcome.</p></div>
  <div class="night-attend-options"><article><span>01 / TICKETS</span><h4>Join us.</h4><p>Explore individual and member attendance options.</p><a href="https://event.ssuite.org/#attend" target="_blank" rel="noopener noreferrer">View tickets <span>↗</span></a></article><article><span>02 / TABLES</span><h4>Bring your community.</h4><p>Host colleagues, clients, mentors, or friends.</p><a href="https://event.ssuite.org/tables/" target="_blank" rel="noopener noreferrer">Explore tables <span>↗</span></a></article></div>
 </section>`;

// Lead with the experience and its purpose, not a portrait-led event poster.
night.classList.add('night-experience');
night.querySelector('.night-opening h2').innerHTML='An Evening<br><em>of Connection.</em>';
night.querySelector('.night-opening-copy .eyebrow').textContent='THE S.SUITE EXPERIENCE';
night.querySelector('.night-lede').textContent='Cocktails, a seated honors dinner, a conversation with Indra Nooyi and Anu Aiyengar, and a dessert reception—with thoughtful introductions woven throughout.';
const flow=night.querySelector('.night-flow');
const conversation=night.querySelector('.night-conversation');
conversation.before(flow);
flow.querySelector('.night-section-heading .eyebrow').textContent='THE AGENDA & THE EXPERIENCE';
flow.querySelector('h3').textContent='How the evening unfolds.';
flow.querySelector('.night-section-heading>p').textContent='Two receptions create room to meet beyond your table. The seated dinner brings everyone together for the honors and conversation.';
flow.querySelector('.night-chapters').classList.add('night-agenda');
flow.querySelector('.night-chapters').innerHTML=`
 <article><span class="night-number">01</span><div class="night-step-content"><div class="night-step-title"><p class="eyebrow">COCKTAIL RECEPTION</p><h4>Intros with Intention</h4></div><div><span class="night-small-label">WHAT TO EXPECT</span><p>Begin with drinks and thoughtful introductions. S.Suite Ambassadors help you meet guests across industries and circles, so you can make new connections before taking your seat.</p></div></div></article>
 <article><span class="night-number">02</span><div class="night-step-content"><div class="night-step-title"><p class="eyebrow">SEATED DINNER & HONORS</p><h4>Recognition & conversation</h4></div><div><span class="night-small-label">WHAT TO EXPECT</span><p>Gather for a seated dinner celebrating the inaugural S.Suite Class and South Asian leadership. Lifetime Achievement Honoree Indra Nooyi joins Anu Aiyengar for a fireside conversation, sharing perspectives and experience with the room.</p></div></div></article>
 <article><span class="night-number">03</span><div class="night-step-content"><div class="night-step-title"><p class="eyebrow">DESSERT RECEPTION</p><h4>Beyond your table</h4></div><div><span class="night-small-label">WHAT TO EXPECT</span><p>Continue the conversation over dessert. Reconnect with someone you met earlier or meet guests from other tables, with Ambassadors helping make introductions you can build on beyond the evening.</p></div></div></article>`;
const approach=document.createElement('section');
approach.className='night-approach';
approach.setAttribute('aria-labelledby','night-approach-title');
approach.innerHTML='<div><p class="eyebrow">OUR APPROACH</p><h3 id="night-approach-title">Connection is part<br>of the program.</h3></div><div><p>S.Suite brings together South Asian women leaders, allies, and people invested in their advancement. We’re approaching the evening with the same care SALUTE brings to its year-round gatherings: who is in the room, how people meet, and what those relationships can make possible.</p><p>The receptions create space to connect across tables and industries. The dinner offers a shared moment of recognition and conversation. S.Suite Ambassadors help bring those parts together.</p></div>';
flow.before(approach);
const ambassadors=document.createElement('section');
ambassadors.className='night-ambassadors';
ambassadors.setAttribute('aria-labelledby','night-ambassadors-title');
ambassadors.innerHTML=`<div class="night-ambassador-intro"><p class="eyebrow">PEOPLE WHO HELP BRING THE ROOM TOGETHER</p><h3 id="night-ambassadors-title">S.Suite<br><em>Ambassadors.</em></h3><p>A select group helping shape the guest experience before and during the evening.</p></div><div class="night-ambassador-detail"><article><span class="night-small-label">BEFORE THE EVENING</span><h4>A connection in advance.</h4><p>Ambassadors will be connected with a small group of attendees ahead of S.Suite, creating a point of connection before guests arrive.</p></article><article><span class="night-small-label">DURING THE RECEPTIONS</span><h4>A liaison in the room.</h4><p>During cocktails and dessert, Ambassadors welcome guests, make thoughtful introductions, and help connect people beyond their existing circles.</p></article><div class="night-ambassador-interest"><p>Interested in playing an active role while building new relationships of your own?</p><a class="textlink" href="https://event.ssuite.org/ambassadors" target="_blank" rel="noopener noreferrer">Explore the Ambassador opportunity ↗</a><small>Interest does not confirm selection. Selected Ambassadors still need to purchase a ticket; the role does not include complimentary admission.</small></div></div>`;
conversation.before(ambassadors);

// Keep the featured conversation inside its agenda chapter, not a second large section.
const recognition=flow.querySelector('.night-agenda>article:nth-child(2)');
recognition.id='recognition-conversation';
const agendaSpeakers=conversation.querySelector('.night-speakers');
agendaSpeakers.classList.add('night-agenda-speakers');
agendaSpeakers.setAttribute('aria-label','Featured conversation with Indra Nooyi and Anu Aiyengar');
agendaSpeakers.querySelectorAll('.night-portrait>span').forEach(label=>label.remove());
agendaSpeakers.querySelector('.night-speaker:first-child img').src='assets/portrait-indra-agenda.jpg';
agendaSpeakers.querySelector('.night-speaker:nth-child(2) img').src='assets/portrait-anu-agenda.jpg';
recognition.querySelector('.night-step-content').append(agendaSpeakers);
conversation.remove();
