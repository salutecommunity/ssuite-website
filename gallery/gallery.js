const categories = [
  {id:'honorees',name:'S.SUITE Honorees',pending:true,note:'Event portraits will be added when the honoree collection is supplied.',credit:'Source collection not yet supplied.'},
  {id:'ceremony',name:'S.SUITE Ceremony',credit:'Photography: @nivedhamphotography',source:'https://nivedhamphotography.pixieset.com/ssuitebysalute/'},
  {id:'photobooth',name:'S.SUITE Photobooth',credit:'Collection supplied by The Third Place Creative.',source:'https://thethirdplacecreative.co/salute'},
  {id:'nasdaq',name:'Nasdaq Closing',credit:'Photographs from the supplied Nasdaq collection. Photographer credit pending confirmation.',source:'https://www.dropbox.com/scl/fo/mvrg3toyihpf5m1syui3o/ADSMc6HRo3u8cwJXyOxE1Po?rlkey=1v6x69a4wzkedbjfc3lz3xf8v&dl=0'}
];
let manifest=[],active=[],current=0,trigger;
const dialog=document.querySelector('dialog');
const picker=document.querySelector('#collection-select');
function showPhoto(i){
  current=(i+active.length)%active.length;
  const p=active[current];
  const image=dialog.querySelector('.viewer-stage img');
  image.src=p.src; image.alt=p.categoryName+' photograph '+(current+1);
  document.querySelector('#viewer-label').textContent=p.categoryName;
  document.querySelector('#viewer-credit').textContent=p.collection==='nasdaq'?'Supplied Nasdaq collection':p.collection==='photobooth'?'The Third Place Creative':'@nivedhamphotography';
}
function openPhoto(photos,i,button){active=photos;trigger=button;showPhoto(i);dialog.showModal();document.body.classList.add('viewing')}
function render(id){
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
  const fragment=document.createDocumentFragment();
  photos.forEach((p,i)=>{
    const b=document.createElement('button');b.ariaLabel='Open '+cat.name+' photograph '+(i+1);
    const image=new Image();image.src=p.src;image.alt=cat.name+' photograph '+(i+1);image.loading='lazy';image.decoding='async';image.width=p.width;image.height=p.height;
    b.append(image);b.onclick=()=>openPhoto(photos,i,b);fragment.append(b);
  });grid.append(fragment);
  const empty=document.querySelector('.empty');empty.hidden=!cat.pending;
  empty.innerHTML='<h4>The honorees, in the moment.</h4><p>'+cat.note+'</p>';
  const source=document.querySelector('.source-line');source.replaceChildren();
  const credit=document.createElement('span');credit.textContent=cat.credit;source.append(credit);
  if(cat.source){const a=document.createElement('a');a.href=cat.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='View source collection ↗';source.append(a)}
}
function selectCollection(id){render(id);history.replaceState(null,'','#'+id)}
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
dialog.addEventListener('close',()=>{document.body.classList.remove('viewing');trigger?.focus()});
document.querySelector('.previous').onclick=()=>showPhoto(current-1);
document.querySelector('.next').onclick=()=>showPhoto(current+1);
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showPhoto(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(current-1)}});
document.querySelector('.menu').onclick=()=>{const open=document.querySelector('#main-nav').classList.toggle('open');document.querySelector('.menu').setAttribute('aria-expanded',String(open))};
fetch('manifest.json').then(r=>{if(!r.ok)throw Error('Unable to load collection');return r.json()}).then(data=>{
  manifest=data.map(p=>({...p,collection:p.category==='cocktails'?'ceremony':p.category,categoryName:categories.find(c=>c.id===(p.category==='cocktails'?'ceremony':p.category)).name}));
  render(location.hash.slice(1)==='cocktails'?'ceremony':location.hash.slice(1)||'ceremony');
}).catch(()=>{document.querySelector('#collection-note').textContent='The collection could not load. Please reload this page.'});
