!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=s),s("4smAb"),s("7fYtI"),s("23Ajj"),s("2Z7mb");var a=s("lIou3"),n=s("5xtVg"),i=s("fq6pb"),c=s("23Ajj"),o=(i=s("fq6pb"),document.querySelector(".watched")),g=document.querySelector(".queue"),l=document.querySelector("#perPage"),u=document.querySelector(".gallery-library__list"),d=document.querySelector(".btn__list");function v(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]}var S=v("watched"),L=v("queue");sessionStorage.getItem("currentList")?JSON.parse(sessionStorage.getItem("currentList")):sessionStorage.setItem("currentList",JSON.stringify("watched"));var m=JSON.parse(sessionStorage.getItem("currentList"));sessionStorage.getItem("perPage")?JSON.parse(sessionStorage.getItem("perPage")):sessionStorage.setItem("perPage",JSON.stringify(9));var f=Number(JSON.parse(sessionStorage.getItem("perPage")));l.value=f,sessionStorage.getItem("currentPageLibWa")?JSON.parse(sessionStorage.getItem("currentPageLibWa")):sessionStorage.setItem("currentPageLibWa",JSON.stringify(1));var h=JSON.parse(sessionStorage.getItem("currentPageLibWa"));sessionStorage.getItem("currentPageLibQu")?JSON.parse(sessionStorage.getItem("currentPageLibQu")):sessionStorage.setItem("currentPageLibQu",JSON.stringify(1));var b=JSON.parse(sessionStorage.getItem("currentPageLibQu"));if("watched"===m){o.classList.add("btn-active"),g.classList.remove("btn-active");var p=Math.ceil(S.length/f);(0,i.counter)(p,h),u.innerHTML=(0,a.renderMovieCard)(S.slice((h-1)*f,f*h))}else{o.classList.remove("btn-active"),g.classList.add("btn-active");var M=Math.ceil(L.length/f);(0,i.counter)(M,b),u.innerHTML=(0,a.renderMovieCard)(L.slice((b-1)*f,f*b))}g.addEventListener("click",(function(){o.classList.remove("btn-active"),g.classList.add("btn-active"),sessionStorage.setItem("currentList",JSON.stringify("queue")),m="queue",L=v("queue");var e=Math.ceil(L.length/f);(0,i.counter)(e,b),u.innerHTML=(0,a.renderMovieCard)(L.slice((b-1)*f,f*b))})),o.addEventListener("click",(function(){o.classList.add("btn-active"),g.classList.remove("btn-active"),sessionStorage.setItem("currentList",JSON.stringify("watched")),m="watched",S=v("watched");var e=Math.ceil(S.length/f);(0,i.counter)(e,h),u.innerHTML=(0,a.renderMovieCard)(S.slice((h-1)*f,f*h))})),u.addEventListener("click",(function(e){if("watched"===m){(0,n.renderModal)(e,"watched"),S=v("watched");var t=Math.ceil(S.length/f);(0,i.counter)(t,h),u.innerHTML=(0,a.renderMovieCard)(S.slice((h-1)*f,f*h))}else{(0,n.renderModal)(e,"queue"),L=v("queue");var r=Math.ceil(L.length/f);(0,i.counter)(r,b),u.innerHTML=(0,a.renderMovieCard)(L.slice((b-1)*f,f*b))}})),l.addEventListener("change",(function(e){var t=e.target.value;if(sessionStorage.setItem("perPage",JSON.stringify(t)),"watched"===m){o.classList.add("btn-active"),g.classList.remove("btn-active"),S=v("watched");var r=Math.ceil(S.length/t);(0,i.counter)(r,h),u.innerHTML=(0,a.renderMovieCard)(S.slice((h-1)*t,t*h))}else{o.classList.remove("btn-active"),g.classList.add("btn-active"),L=v("queue");var s=Math.ceil(L.length/t);(0,i.counter)(s,b),u.innerHTML=(0,a.renderMovieCard)(L.slice((b-1)*t,t*b))}})),d.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName)if((0,c.toTopOnClick)(),"watched"===m){h=JSON.parse(sessionStorage.getItem("currentPageLibWa")),h=(0,i.clickCounter)(e,h),f=Number(JSON.parse(sessionStorage.getItem("perPage"))),sessionStorage.setItem("currentPageLibWa",JSON.stringify(h)),S=v("watched");var t=Math.ceil(S.length/f);(0,i.counter)(t,h),u.innerHTML=(0,a.renderMovieCard)(S.slice((h-1)*f,f*h))}else{b=JSON.parse(sessionStorage.getItem("currentPageLibQu")),b=(0,i.clickCounter)(e,b),f=Number(JSON.parse(sessionStorage.getItem("perPage"))),sessionStorage.setItem("currentPageLibQu",JSON.stringify(b)),L=v("queue");var r=Math.ceil(L.length/f);(0,i.counter)(r,b),u.innerHTML=(0,a.renderMovieCard)(L.slice((b-1)*f,f*b))}}))}();
//# sourceMappingURL=library.82016f35.js.map
