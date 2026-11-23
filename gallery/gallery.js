const categories = [
  {id:'honorees',name:'S.SUITE Honorees',credit:''},
  {id:'ceremony',name:'S.SUITE Ceremony',credit:'Photography: @nivedhamphotography',source:'https://nivedhamphotography.pixieset.com/ssuitebysalute/'},
  {id:'photobooth',name:'S.SUITE Photobooth',credit:'Photography: The Third Place Creative & West Third Films.',source:'https://thethirdplacecreative.co/salute'},
  {id:'nasdaq',name:'Nasdaq Closing',credit:'Photographs from the supplied Nasdaq collection. Photographer credit pending confirmation.',source:'https://www.dropbox.com/scl/fo/mvrg3toyihpf5m1syui3o/ADSMc6HRo3u8cwJXyOxE1Po?rlkey=1v6x69a4wzkedbjfc3lz3xf8v&dl=0'}
];
let manifest=[],active=[],current=0,trigger,selectedCategory="ceremony",selectedPage=1;
const PAGE_SIZE=30;
const dialog=document.querySelector('dialog');
const picker=document.querySelector('#collection-select');
function setPhotoboothCredit(element){
  element.replaceChildren();
  [['The Third Place Creative','https://www.thethirdplacecreative.co/'],['West Third Films','https://www.westthirdfilms.com/']].forEach(([name,url],i)=>{
    if(i)element.append(document.createTextNode(' & '));
    const a=document.createElement('a');a.textContent=name;a.href=url;a.target='_blank';a.rel='noopener noreferrer';element.append(a);
  });
}
function showPhoto(i){
  current=(i+active.length)%active.length;
  const p=active[current];
  const image=dialog.querySelector('.viewer-stage img');
  image.src=p.src; image.alt=p.categoryName+' photograph '+(current+1);
  document.querySelector('#viewer-label').textContent=p.categoryName;
  const credit=document.querySelector('#viewer-credit');
  if(p.collection==='photobooth')setPhotoboothCredit(credit);
  else credit.textContent=p.collection==='honorees'?'':p.collection==='nasdaq'?'Supplied Nasdaq collection':'@nivedhamphotography';
}
function openPhoto(photos,i,button){active=photos;trigger=button;showPhoto(i);dialog.showModal();document.body.classList.add('viewing')}
function render(id,page=1){
  const cat=categories.find(c=>c.id===id)||categories[1];
  picker.value=cat.id;
  document.querySelectorAll('[role=tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.id===cat.id));b.tabIndex=b.dataset.id===cat.id?0:-1});
  const panel=document.querySelector('#collection-panel');
  panel.setAttribute('aria-labelledby','collection-title');
  document.querySelector('#collection-title').textContent=cat.name;
  document.querySelector('#collection-number').textContent='COLLECTION '+String(categories.indexOf(cat)+1).padStart(2,'0');
  const photos=manifest.filter(p=>p.collection===cat.id);
  document.querySelector('#collection-note').textContent=cat.pending?'A place reserved for the event portraits.':'';
  const grid=document.querySelector('.photo-grid');grid.replaceChildren();
  const totalPages=Math.max(1,Math.ceil(photos.length/PAGE_SIZE));
  selectedCategory=cat.id;
  selectedPage=Math.max(1,Math.min(totalPages,Number(page)||1));
  document.querySelectorAll('.pagination').forEach(n=>n.remove());
  const start=(selectedPage-1)*PAGE_SIZE,end=Math.min(start+PAGE_SIZE,photos.length);
  const fragment=document.createDocumentFragment();
  for(let i=start;i<end;i++){const p=photos[i];
    const b=document.createElement('button');b.ariaLabel='Open '+cat.name+' photograph '+(i+1);b.dataset.src=p.src;
    const image=new Image();image.srcset=p.thumb360+' 360w, '+p.thumb720+' 720w';image.sizes='(max-width: 600px) 44vw, 30vw';image.src=p.thumb360;image.alt=cat.name+' photograph '+(i+1);image.loading='lazy';image.decoding='async';image.width=p.width;image.height=p.height;
    b.append(image);b.onclick=()=>openPhoto(photos,i,b);fragment.append(b);
  }
  grid.append(fragment);
  function pagination(position){
    const nav=document.createElement('nav');nav.className='pagination';nav.setAttribute('aria-label',cat.name+' pages '+position);
    function button(label,page,disabled=false){const b=document.createElement('button');b.type='button';b.textContent=label;b.disabled=disabled;b.onclick=()=>navigate(cat.id,page,true);nav.append(b);return b}
    button('Previous',selectedPage-1,selectedPage===1);
    const pages=[...new Set([1,totalPages,selectedPage-1,selectedPage,selectedPage+1].filter(p=>p>=1&&p<=totalPages))].sort((a,b)=>a-b);
    let prior=0;
    pages.forEach(page=>{if(prior&&page>prior+1){const gap=document.createElement('span');gap.textContent='…';gap.setAttribute('aria-hidden','true');nav.append(gap)}const b=button(String(page),page);b.setAttribute('aria-label','Page '+page);if(page===selectedPage)b.setAttribute('aria-current','page');prior=page});
    button('Next',selectedPage+1,selectedPage===totalPages);
    const status=document.createElement('span');status.className='page-status';status.textContent='Page '+selectedPage+' of '+totalPages;status.setAttribute('aria-live','polite');nav.append(status);
    return nav;
  }
  grid.before(pagination('top'));grid.after(pagination('bottom'));
  const empty=document.querySelector('.empty');empty.hidden=!cat.pending;
  empty.innerHTML='<h4>The honorees, in the moment.</h4><p>'+cat.note+'</p>';
  const source=document.querySelector('.source-line');source.replaceChildren();
  const credit=document.createElement('span');
  if(cat.id==='photobooth')setPhotoboothCredit(credit);else credit.textContent=cat.credit;source.append(credit);
  if(cat.source){const a=document.createElement('a');a.href=cat.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='View source collection';source.append(a)}
}
function readLocation(){const [id,query='']=location.hash.slice(1).split('?');return {id:id==='cocktails'?'ceremony':id||'ceremony',page:Number(new URLSearchParams(query).get('page'))||1}}
function navigate(id,page=1,scroll=false,replace=false){
  render(id,page);
  const hash='#'+selectedCategory+(selectedPage>1?'?page='+selectedPage:'');
  if(location.hash!==hash)history[replace?'replaceState':'pushState'](null,'',hash);
  if(scroll){const heading=document.querySelector('.collection-meta');heading.tabIndex=-1;heading.focus({preventScroll:true});heading.scrollIntoView({behavior:'instant',block:'start'})}
}
function selectCollection(id){navigate(id,1)}
function restoreLocation(){if(!manifest.length)return;if(dialog.open){active=[];dialog.close();}const s=readLocation();navigate(s.id,s.page,false,true)}
window.addEventListener('popstate',restoreLocation);
window.addEventListener('hashchange',restoreLocation);
categories.forEach(c=>{
  const b=document.createElement('button');b.role='tab';b.id='tab-'+c.id;b.dataset.id=c.id;b.setAttribute('aria-controls','collection-panel');b.textContent=c.name;b.onclick=()=>selectCollection(c.id);document.querySelector('.category-nav').append(b);
  const option=document.createElement('option');option.value=c.id;option.textContent=c.name;picker.append(option);
});
picker.addEventListener('change',()=>selectCollection(picker.value));
document.querySelector('.category-nav').addEventListener('keydown',e=>{
  if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();
  const tabs=[...document.querySelectorAll('[role=tab]')];let i=tabs.indexOf(document.activeElement);
  i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[i].click();tabs[i].focus();
});
document.querySelector('.close').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>{document.body.classList.remove('viewing');const page=Math.floor(current/PAGE_SIZE)+1;if(active.length&&page!==selectedPage){navigate(selectedCategory,page,false,true);trigger=[...document.querySelectorAll('.photo-grid button')].find(b=>b.dataset.src===active[current].src)}trigger?.focus({preventScroll:true})});
document.querySelector('.previous').onclick=()=>showPhoto(current-1);
document.querySelector('.next').onclick=()=>showPhoto(current+1);
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showPhoto(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(current-1)}});
document.querySelector('.menu').onclick=()=>{const open=document.querySelector('#main-nav').classList.toggle('open');document.querySelector('.menu').setAttribute('aria-expanded',String(open))};
fetch('manifest.json?v=approved-385-20261124').then(r=>{if(!r.ok)throw Error('Unable to load collection');return r.json()}).then(data=>{
  manifest=data.filter((p,i,all)=>all.findIndex(q=>q.src===p.src)===i).map(p=>({...p,collection:p.category==='cocktails'?'ceremony':p.category,categoryName:categories.find(c=>c.id===(p.category==='cocktails'?'ceremony':p.category)).name}));
  const state=readLocation();navigate(state.id,state.page,false,true);
}).catch(()=>{document.querySelector('#collection-note').textContent='The collection could not load. Please reload this page.'});
