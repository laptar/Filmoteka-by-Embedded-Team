!function(){var t=function(){return t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},t.apply(this,arguments)},e={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"};!function(){function r(n){void 0===n&&(n={}),this.opts=t(t({},e),n)}r.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),n(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var r=Math.round(e.corners*e.width*500)/1e3+"px",s="none";!0===e.shadow?s="0 2px 4px #000":"string"==typeof e.shadow&&(s=e.shadow);for(var a=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,o=t.split(",");i<o.length;i++){var r=o[i].match(e);if(null!==r){var s=+r[2],a=+r[5],d=r[4],h=r[7];0!==s||d||(d=h),0!==a||h||(h=d),d===h&&n.push({prefix:r[1]||"",x:s,y:a,xUnits:d,yUnits:h,end:r[8]})}}return n}(s),d=0;d<e.lines;d++){var h=~~(360/e.lines*d+e.rotate),l=n(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:i(e.fadeColor,d),borderRadius:r,transformOrigin:"left",transform:"rotate("+h+"deg) translateX("+e.radius+"px)"}),p=d*e.direction/e.lines/e.speed;p-=1/e.speed;var u=n(document.createElement("div"),{width:"100%",height:"100%",background:i(e.color,d),borderRadius:r,boxShadow:o(a,h),animation:1/e.speed+"s linear "+p+"s infinite "+e.animation});l.appendChild(u),t.appendChild(l)}}(this.el,this.opts),this},r.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this}}();function n(t,e){for(var n in e)t.style[n]=e[n];return t}function i(t,e){return"string"==typeof t?t:t[e%t.length]}function o(t,e){for(var n=[],i=0,o=t;i<o.length;i++){var s=o[i],a=r(s.x,s.y,e);n.push(s.prefix+a[0]+s.xUnits+" "+a[1]+s.yUnits+s.end)}return n.join(", ")}function r(t,e,n){var i=n*Math.PI/180,o=Math.sin(i),r=Math.cos(i);return[Math.round(1e3*(t*r+e*o))/1e3,Math.round(1e3*(-t*o+e*r))/1e3]}}();
//# sourceMappingURL=library.77b928ff.js.map
