import {mediaCopy, photoOrder} from './club-media-content.mjs?v=photos-20261125';

const language = () => document.documentElement.lang.split('-')[0];
const copy = () => mediaCopy[language()] || mediaCopy.es;
const caption = id => copy().captions[photoOrder.indexOf(id)] || '';
const fullSource = id => `/assets/club/${id}-1920.webp`;
const galleries = [...document.querySelectorAll('[data-club-gallery]')];
let activePhoto = photoOrder[0];
let returnFocus;

const dialog = document.createElement('dialog');
dialog.className = 'club-lightbox';
dialog.setAttribute('aria-label',copy().expand);
dialog.innerHTML = `<div class="club-lightbox-toolbar"><p data-lightbox-caption aria-live="polite"></p><button type="button" class="club-icon-button" data-lightbox-close data-media-control="close"><img class="club-icon" src="/assets/icons/close.svg" alt="" width="20" height="20"></button></div><div class="club-lightbox-stage"><button type="button" class="club-icon-button" data-lightbox-prev data-media-control="previous"><img class="club-icon" src="/assets/icons/chevron-left.svg" alt="" width="20" height="20"></button><img data-lightbox-image alt=""><button type="button" class="club-icon-button" data-lightbox-next data-media-control="next"><img class="club-icon" src="/assets/icons/chevron-right.svg" alt="" width="20" height="20"></button></div>`;
document.body.append(dialog);

const updateLightbox = id => {
  activePhoto=id;
  const image=dialog.querySelector('[data-lightbox-image]');
  image.src=fullSource(id);
  image.alt=caption(id);
  dialog.querySelector('[data-lightbox-caption]').textContent=caption(id);
};
const move = (id, offset) => photoOrder[(photoOrder.indexOf(id)+offset+photoOrder.length)%photoOrder.length];

const updateLanguage = () => {
  document.querySelectorAll('[data-media-label]').forEach(element=>{
    const value=element.dataset.mediaLabel.split('.').reduce((current,key)=>current?.[key],copy());
    if(typeof value==='string') element.textContent=value;
  });
  document.querySelectorAll('[data-media-photo]').forEach(image=>{image.alt=caption(image.dataset.mediaPhoto);});
  document.querySelectorAll('[data-media-control]').forEach(button=>{
    button.title=copy()[button.dataset.mediaControl]; button.setAttribute('aria-label',button.title);
  });
  document.querySelectorAll('[data-photo-open]').forEach(link=>link.setAttribute('aria-label',copy().expand+': '+caption(link.dataset.photoOpen)));
  document.querySelectorAll('[data-gallery-item]').forEach(link=>link.setAttribute('aria-label',caption(link.dataset.galleryItem)));
  galleries.forEach(gallery=>{
    gallery.setAttribute('aria-label',copy().galleryTitle);
    gallery.querySelector('[data-gallery-caption]').textContent=caption(gallery.dataset.activePhoto||photoOrder[0]);
  });
  dialog.setAttribute('aria-label',copy().expand);
  if(dialog.open) updateLightbox(activePhoto);
};

document.addEventListener('click',event=>{
  const opener=event.target.closest?.('[data-photo-open]');
  if(!opener||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
  event.preventDefault();
  returnFocus=opener;
  updateLightbox(opener.dataset.photoOpen);
  dialog.showModal();
});
dialog.querySelector('[data-lightbox-close]').addEventListener('click',()=>dialog.close());
dialog.querySelector('[data-lightbox-prev]').addEventListener('click',()=>updateLightbox(move(activePhoto,-1)));
dialog.querySelector('[data-lightbox-next]').addEventListener('click',()=>updateLightbox(move(activePhoto,1)));
dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close();});
dialog.addEventListener('close',()=>{dialog.querySelector('[data-lightbox-image]').removeAttribute('src');returnFocus?.focus({preventScroll:true});});
dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'||event.key==='ArrowRight') {event.preventDefault();updateLightbox(move(activePhoto,event.key==='ArrowLeft'?-1:1));}
});

galleries.forEach(gallery=>{
  const setPhoto=id=>{
    gallery.dataset.activePhoto=id;
    const thumbnail=gallery.querySelector(`[data-gallery-item="${id}"]`);
    const opener=gallery.querySelector('[data-photo-open]');
    const image=opener.querySelector('img.club-photo');
    image.srcset=thumbnail.dataset.srcset;
    image.src=thumbnail.dataset.src;
    image.alt=caption(id);
    image.dataset.mediaPhoto=id;
    opener.dataset.photoOpen=id;
    opener.href=fullSource(id);
    opener.setAttribute('aria-label',copy().expand+': '+caption(id));
    gallery.querySelector('[data-gallery-caption]').textContent=caption(id);
    gallery.querySelector('[data-gallery-count]').textContent=`${photoOrder.indexOf(id)+1} / ${photoOrder.length}`;
    gallery.querySelectorAll('[data-gallery-item]').forEach(link=>link.setAttribute('aria-current',String(link===thumbnail)));
    const rail=thumbnail.parentElement;
    const left=thumbnail.offsetLeft-rail.offsetLeft;
    if(left<rail.scrollLeft) rail.scrollLeft=left;
    else if(left+thumbnail.offsetWidth>rail.scrollLeft+rail.clientWidth) rail.scrollLeft=left+thumbnail.offsetWidth-rail.clientWidth;
  };
  const step=offset=>setPhoto(move(gallery.dataset.activePhoto||photoOrder[0],offset));
  gallery.querySelector('[data-gallery-prev]').addEventListener('click',()=>step(-1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>step(1));
  gallery.querySelectorAll('[data-gallery-item]').forEach(link=>link.addEventListener('click',event=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
    event.preventDefault();setPhoto(link.dataset.galleryItem);
  }));
  gallery.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();step(event.key==='ArrowLeft'?-1:1);}
  });
  let pointer;
  const stage=gallery.querySelector('.club-gallery-stage');
  stage.addEventListener('pointerdown',event=>{pointer={x:event.clientX,y:event.clientY};});
  stage.addEventListener('pointerup',event=>{
    if(!pointer) return;
    const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;
    pointer=null;
    if(Math.abs(dx)>55&&Math.abs(dy)<70){step(dx<0?1:-1);stage.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();},{once:true,capture:true});}
  });
  stage.addEventListener('pointercancel',()=>{pointer=null;});
});
new MutationObserver(updateLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
updateLanguage();
