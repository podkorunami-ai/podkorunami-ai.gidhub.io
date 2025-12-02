
document.addEventListener('click',function(e){
 if(e.target.closest('.lightbox')){
   e.preventDefault();
   const src=e.target.closest('.lightbox').href;
   const overlay=document.createElement('div');
   overlay.style.position='fixed';overlay.style.inset='0';overlay.style.background='rgba(0,0,0,0.8)';overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.zIndex='9999';
   const img=document.createElement('img');img.src=src;img.style.maxWidth='90%';img.style.maxHeight='90%';overlay.appendChild(img);
   overlay.addEventListener('click',()=>overlay.remove());
   document.body.appendChild(overlay);
 }
});
