var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("ioBS9"),n("74Aiq"),n("lXQ18");function o(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=74df5c4b3da0f8bb23d044877e91bb86&page=${e}`).then((e=>e.json()))}async function s(){return await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=74df5c4b3da0f8bb23d044877e91bb86&language=en-US").then((e=>e.json()))}async function i(e=1,t){return await fetch(`https://api.themoviedb.org/3/search/movie?query=${t}&api_key=74df5c4b3da0f8bb23d044877e91bb86&language=en-US&page=${e}`).then((e=>e.json().catch((e=>{console.log(e)}))))}var a=n("iJbGQ"),c=n("iwBr5");const u=document.querySelector(".gallery__list"),g=document.querySelector(".warning");function l(e,t,r,n=""){sessionStorage.setItem("currentNumPage",JSON.stringify(r)),sessionStorage.setItem("currentSerch",JSON.stringify(n)),e(r,n).then((e=>{console.log(e.total_pages),t().then((t=>{const n=e.results;if(e.results.forEach(((e,r)=>{e.genre_ids.forEach(((e,o)=>{t.genres.forEach((t=>{t.id===e&&(n[r].genre_ids[o]=t.name)}))}))})),(0,c.counter)(e.total_pages,r),localStorage.setItem("currentPage",JSON.stringify(n)),0===n.length)g.classList.remove("hidden"),sessionStorage.setItem("currentSerch",JSON.stringify("")),form.reset();else{g.classList.add("hidden");const e=(0,a.renderMovieCard)(n);u.innerHTML=e}}))}))}n("brr8Z");var d=n("74Aiq"),f=n("bTcpz");c=n("iwBr5");const m=document.querySelector(".btn__list"),S=document.querySelector(".gallery__list"),h=document.querySelector(".search"),p=document.querySelector(".header__logo");let b=sessionStorage.getItem("currentNumPage")?JSON.parse(sessionStorage.getItem("currentNumPage")):1,y=sessionStorage.getItem("currentSerch")?JSON.parse(sessionStorage.getItem("currentSerch")):"";h.addEventListener("submit",(function(e){e.preventDefault(),y=e.target.search.value,l(i,s,1,y)})),y?l(i,s,b,y):l(o,s,b),S.addEventListener("click",(function(e){(0,f.renderModal)(e,"currentPage")})),m.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&((0,d.toTopOnClick)(),b=sessionStorage.getItem("currentNumPage")?JSON.parse(sessionStorage.getItem("currentNumPage")):1,y=sessionStorage.getItem("currentSerch")?JSON.parse(sessionStorage.getItem("currentSerch")):"",b=(0,c.clickCounter)(e,b),y?l(i,s,b,y):l(o,s,b))})),p.addEventListener("click",(function(){console.log(123),y="",b=1,l(o,s,b)}));
//# sourceMappingURL=index.128219ef.js.map
