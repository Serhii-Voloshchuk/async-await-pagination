import{a as d,i as u}from"./assets/vendor-pjPyuanO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const g="https://pixabay.com/api/",y="45071357-999033ebbf151b40dc2c05ece";d.defaults.baseURL=g;function m({page:s=1,per_page:e=20,q:i="image"}={page:1,per_page:15,q:"image"}){return d.get("",{params:{page:s,per_page:e,q:i,key:y}}).then(({data:a})=>({images:a.hits,totalResult:a.totalHits})).catch(a=>{throw console.error("Ошибка при получении изображений:",a.message),a})}function f(s){return s.map(e=>`<li class = 'gallery-item'>
      <a class='gallery-link' href='${e.webformatURL}'>
      <img
        class='gallery-image'
        src=${e.webformatURL}
        data-source='${e.largeImageURL}'
        alt='${e.tags}'
        />
      </a>
      <ul>
      <li>
      <h3>Likes</h3>
      <p>${e.likes}</p>
      </li>
      <li>
      <h3>Views</h3>
      <p>${e.views}</p>
      </li>
      <li>
      <h3>Comments</h3>
      <p>${e.comments}</p>
      </li>
      <li>
      <h3>Downloads</h3>
      <p>${e.downloads}</p>
      </li>
      </ul>
      </li>
  `).join("")}console.log("Hello world");const b=document.querySelector(".form");document.getElementById("input");const c=document.querySelector(".gallery"),h=document.querySelector(".btn");b.addEventListener("submit",w);class L{constructor(e,i){this.buttonEL=e,this.hiddenClass=i}hide(){this.buttonEL.classList.add(this.hiddenClass)}show(){this.buttonEL.classList.remove(this.hiddenClass)}disable(){this.buttonEL.disabled=!0}enable(){this.buttonEL.disabled=!1}}const n=new L(h,"is-hidden");n.hide();const o={page:1,per_page:20,q:"",maxPage:0};async function w(s){s.preventDefault(),c.innerHTML="";const e=s.currentTarget;if(o.q=e.elements.query.value.trim(),o.q===""){u.warning({title:"Увага",message:"Введіть запит"}),e.reset();return}n.show(),n.disable(),o.page=1;try{const{images:i,totalResult:a}=await m();o.maxPage=Math.ceil(a/o.per_page),c.innerHTML+=f(i),o.maxPage>1?(n.enable(),h.addEventListener("click",p)):n.hide()}catch(i){console.error(`Помилка під час запиту: ${i.message}`)}finally{e.reset()}}async function p(){n.disable(),o.page+=1;try{const{images:s}=await m(o);c.innerHTML=f(s)}catch(s){u.warning({title:"Увага",message:`Помилка під час запиту: ${s.message}`})}finally{o.page===o.maxPage?(n.hide(),n.removeEventListener("click",p)):n.enable()}}
//# sourceMappingURL=index.js.map
