!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,r){n[e]=r},e.parcelRequired7c6=t),t("jQmeG"),t("23Ajj"),t("2Z7mb");var o=t("lIou3"),d=t("jSEy1"),a=document.querySelector(".watched"),i=document.querySelector(".queue"),l=document.querySelector(".gallery-library__list"),c=JSON.parse(localStorage.getItem("watched")),u=JSON.parse(localStorage.getItem("queue")),f=(0,o.renderMovieCard)(c);l.innerHTML=f;var s="watched";i.addEventListener("click",(function(){s="queue",l.innerHTML=(0,o.renderMovieCard)(u)})),a.addEventListener("click",(function(e){s="watched",console.log(e.target),l.innerHTML=(0,o.renderMovieCard)(c)})),l.addEventListener("click",(function(e){"watched"===s?(0,d.renderModal)(e,"watched"):(0,d.renderModal)(e,"queue")}))}();
//# sourceMappingURL=library.564cbcf6.js.map
