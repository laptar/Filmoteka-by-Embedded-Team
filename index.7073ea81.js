var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s),s("74Aiq"),s("iFqsT");function o(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=74df5c4b3da0f8bb23d044877e91bb86&page=${e}`).then((e=>e.json()))}async function r(e=1,t){return console.log(e),console.log(t),await fetch(`https://api.themoviedb.org/3/search/movie?query=${t}&api_key=74df5c4b3da0f8bb23d044877e91bb86&language=en-US&page=${e}`).then((e=>e.json().catch((e=>{console.log(e)}))))}async function l(){return await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=74df5c4b3da0f8bb23d044877e91bb86&language=en-US").then((e=>e.json()))}s("iJbGQ");var i=s("iJbGQ");const d=document.querySelector(".btn__list"),a=document.querySelector(".counter"),c=document.querySelector("#prev_btn"),u=document.querySelector("#first_btn"),m=document.querySelector("#left_dot_btn"),y=document.querySelector("#left_sec_btn"),v=document.querySelector("#left_btn"),b=document.querySelector("#center_btn"),h=document.querySelector("#right_btn"),f=document.querySelector("#right_sec_btn"),g=document.querySelector("#right_dot_btn"),_=document.querySelector("#last_btn"),L=document.querySelector("#next_btn");function p(e,t=1){e>1?d.classList.remove("visually-hidden"):d.classList.add("visually-hidden"),u.textContent=1,Number(u.textContent)+3>=t?m.classList.add("visually-hidden"):m.classList.remove("visually-hidden"),Number(u.textContent)+2>=t?u.classList.add("visually-hidden"):u.classList.remove("visually-hidden"),y.textContent=t-2,Number(y.textContent)<=0?y.classList.add("visually-hidden"):y.classList.remove("visually-hidden"),v.textContent=t-1,Number(v.textContent)<=0?v.classList.add("visually-hidden"):v.classList.remove("visually-hidden"),b.textContent=t,Number(b.textContent)===e?L.classList.add("visually-hidden"):L.classList.remove("visually-hidden"),1===Number(b.textContent)?c.classList.add("visually-hidden"):c.classList.remove("visually-hidden"),h.textContent=t+1,Number(h.textContent)>e?h.classList.add("visually-hidden"):h.classList.remove("visually-hidden"),f.textContent=t+2,Number(f.textContent)>e?f.classList.add("visually-hidden"):f.classList.remove("visually-hidden"),_.textContent=e,Number(_.textContent)-3<=t?g.classList.add("visually-hidden"):g.classList.remove("visually-hidden"),Number(_.textContent)-2<=t?_.classList.add("visually-hidden"):_.classList.remove("visually-hidden"),a.textContent=t}function x(e,t){return"next_btn"===e.target.id&&(t+=1),"prev_btn"===e.target.id&&(t-=1),[...e.target.classList].includes("num")&&(t=Number(e.target.textContent)),a.textContent=t,t}const q=document.querySelector(".gallery__list"),S=document.querySelector(".warning");function C(e,t,n,s=""){console.log(n),e(n,s).then((e=>{console.log(e.total_pages),t().then((t=>{const s=e.results;if(e.results.forEach(((e,n)=>{e.genre_ids.forEach(((e,o)=>{t.genres.forEach((t=>{t.id===e&&(s[n].genre_ids[o]=t.name)}))}))})),p(e.total_pages,n),localStorage.setItem("currentPage",JSON.stringify(s)),0===s.length)S.classList.remove("hidden"),form.reset();else{S.classList.add("hidden");const e=(0,i.renderMovieCard)(s);q.innerHTML=e}}))}))}s("brr8Z");var N=s("bTcpz");const w=document.querySelector(".btn__list"),E=document.querySelector(".gallery__list");document.querySelector(".search"),document.querySelector(".warning"),document.querySelector(".counter");let T=1,k="";document.addEventListener("submit",(function(e){e.preventDefault(),k=e.target.search.value,C(r,l,T,k)})),k?C(r,l,T,k):C(o,l,T),E.addEventListener("click",(function(e){(0,N.renderModal)(e,"currentPage")})),w.addEventListener("click",(function(e){T=x(e,T),console.log(T),k?C(r,l,T,k):C(o,l,T)}));
//# sourceMappingURL=index.7073ea81.js.map
