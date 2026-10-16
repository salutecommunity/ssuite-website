// Restrained transitions only. Category artwork belongs solely to categories.
document.querySelector('.hero .artwork')?.remove();
function animateCurrentPage(){
 document.querySelectorAll('.page-arrive').forEach(e=>e.classList.remove('page-arrive'));
 const route=location.hash.slice(1);
 const target=document.querySelector(route==='sponsors'?'.sponsors-opening':route==='categories'?'#categories .sectionhead':route==='evening'?'.night-opening':route==='honorees'?'#honorees .sectionhead':route==='about'?'#about':'.hero');
 if(target){void target.offsetWidth;target.classList.add('page-arrive');}
}
addEventListener('hashchange',animateCurrentPage);animateCurrentPage();
