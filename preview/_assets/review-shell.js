(()=>{'use strict';
const frame=document.querySelector('.profile-frame'),canvas=document.querySelector('.preview-canvas'),stage=document.querySelector('.preview-stage'),buttons=[...document.querySelectorAll('[data-preview-mode]')];
let mode=matchMedia('(max-width:600px)').matches?'mobile':'desktop',observer,raf;
function fit(){
 const width=mode==='desktop'?1440:390;
 const style=getComputedStyle(stage),available=Math.max(1,stage.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight));
 const scale=Math.min(1,available/width);
 frame.style.width=width+'px';
 frame.style.transform=`scale(${scale})`;
 canvas.style.width=(width*scale)+'px';
 const doc=frame.contentDocument;
 if(doc?.body){const height=Math.ceil(Math.max(doc.body.scrollHeight,doc.body.getBoundingClientRect().height));frame.style.height=height+'px';canvas.style.height=Math.ceil(height*scale)+'px';}
}
function schedule(){cancelAnimationFrame(raf);raf=requestAnimationFrame(fit);}
function select(next){mode=next;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.previewMode===mode)));canvas.dataset.mode=mode;fit();schedule();}
buttons.forEach(b=>b.addEventListener('click',()=>select(b.dataset.previewMode)));
frame.addEventListener('load',()=>{
 const doc=frame.contentDocument;if(!doc?.body)return;
 document.querySelector('.preview-loading')?.remove();
 observer?.disconnect();observer=new ResizeObserver(schedule);observer.observe(doc.body);
 doc.fonts.ready.then(schedule);doc.querySelectorAll('img').forEach(img=>img.addEventListener('load',schedule));
 select(mode);setTimeout(schedule,150);
});
new ResizeObserver(schedule).observe(stage);window.addEventListener('resize',schedule);select(mode);
})();
