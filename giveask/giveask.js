(()=>{
'use strict';
const endpoint="https://iddzcbknnddkonrcwgpt.supabase.co/rest/v1/rpc/submit_ssuite_giveask",apiKey="sb_publishable_qYWrm4tJE1n80lJx7PFoEw_WCkcV1ZL";
const form=document.getElementById('response-form'),fields=document.getElementById('form-fields'),button=document.getElementById('submit-button'),error=document.getElementById('form-error');
let submissionId=crypto.randomUUID(),lastPayload='',busy=false;
button.disabled=false;
form.addEventListener('submit',async event=>{
 event.preventDefault();if(busy||!form.reportValidity())return;
 const data=new FormData(form);
 const payload={p_id:submissionId,p_name:String(data.get('name')||'').trim(),p_give:String(data.get('give')||'').trim(),p_ask:String(data.get('ask')||'').trim(),p_consent:data.get('consent')==='on',p_website:String(data.get('website')||'')};
 if(payload.p_name.length<2||payload.p_give.length<3||payload.p_ask.length<3){error.textContent='Please add your name and a few words for both your Give and Ask.';error.hidden=false;return;}
 const fingerprint=JSON.stringify([payload.p_name,payload.p_give,payload.p_ask]);if(lastPayload&&lastPayload!==fingerprint){submissionId=crypto.randomUUID();payload.p_id=submissionId;}lastPayload=fingerprint;
 busy=true;fields.disabled=true;error.hidden=true;button.querySelector('span').textContent='Saving your response…';
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(endpoint,{method:'POST',headers:{apikey:apiKey,'Content-Type':'application/json'},body:JSON.stringify(payload),signal:controller.signal});
  const result=await response.json().catch(()=>null);
  if(!response.ok||result?.saved!==true||result?.id!==submissionId)throw new Error(response.status===429||result?.message?.includes('try again in a minute')?'busy':'save');
  document.getElementById('entry-view').hidden=true;document.getElementById('success-view').hidden=false;
  document.getElementById('success-title').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});
  // No public response feed, marketing enrollment, analytics payload or automatic email.
 }catch(e){
  error.textContent=e.message==='busy'?'Many guests are submitting right now. Please wait a minute and try again. Your answers are still here.':'We couldn’t confirm your submission. Please check your connection and try again. Your answers are still here.';
  error.hidden=false;fields.disabled=false;button.querySelector('span').textContent='Try submitting again';
 }finally{clearTimeout(timer);busy=false;}
});
})();
