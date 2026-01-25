import{a as p,S as d,i as c}from"./assets/vendor-iiPpPmup.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const h="https://pixabay.com/api/";function _(){return"54365161-150e0cc42a1017ee523dff469"}function I(s){const r=_();if(!String(r).trim())return Promise.reject(new Error("MISSING_API_KEY"));const n={key:r.trim(),q:String(s).trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"};return p.get(h,{params:n}).then(t=>t.data)}const o=document.querySelector(".gallery"),l=document.querySelector(".loader-wrap");let u=null;function S(s){const{webformatURL:r,largeImageURL:n,tags:t="",likes:e=0,views:i=0,comments:a=0,downloads:y=0}=s,f=String(t).slice(0,200).replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
<li class="gallery-item">
  <a class="gallery-item__link" href="${n}" title="${f}">
    <img
      class="gallery-item__img"
      src="${r}"
      alt="${f}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${e}</span>
      <span class="gallery-item__info-item">👁 ${i}</span>
      <span class="gallery-item__info-item">💬 ${a}</span>
      <span class="gallery-item__info-item">⬇ ${y}</span>
    </div>
  </a>
</li>`}function P(s){if(!o)return;if(!Array.isArray(s)||s.length===0){o.innerHTML="";return}const r=s.map(S).join("");o.innerHTML=r,u?u.refresh():u=new d(".gallery a",{captionsData:"title",captionDelay:250})}function A(){o&&(o.innerHTML="")}function L(){l&&l.classList.remove("is-hidden")}function g(){l&&l.classList.add("is-hidden")}const m=document.querySelector(".form");function E(s){s.preventDefault();const r=m.querySelector('input[name="search-text"]'),n=r?r.value.trim():"";n&&(L(),A(),I(n).then(t=>{if(g(),!t||!Array.isArray(t.hits)){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}if(t.hits.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}P(t.hits)}).catch(t=>{g();let e="Something went wrong. Please try again.";t.message==="MISSING_API_KEY"?e="Pixabay API key is missing. Create .env and add VITE_PIXABAY_API_KEY=your_key (get key: https://pixabay.com/api/docs/)":t.response?.status===429?e="Too many requests. Please try again later.":t.response?.status===400?e="Invalid request (e.g. missing API key). Check .env and VITE_PIXABAY_API_KEY.":t.message&&(e=t.message),c.error({title:"Error",message:e,position:"topRight",timeout:6e3})}))}m&&m.addEventListener("submit",E);
//# sourceMappingURL=index.js.map
