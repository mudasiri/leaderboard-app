"use strict";(self.webpackChunkleaderboard_app=self.webpackChunkleaderboard_app||[]).push([[179],{424:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"body {\r\n  background-color: grey;\r\n  padding: 10px 100px;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  padding: 50px 100px;\r\n  gap: 50px;\r\n}\r\n\r\n.scores-title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.scores-title button {\r\n  width: 150px;\r\n  height: 35px;\r\n}\r\n\r\n#scorelist {\r\n  list-style-type: none;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=r.base?i[0]+r.base:i[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var i=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},297:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),s=n.n(a),c=n(569),i=n.n(c),u=n(565),l=n.n(u),d=n(216),p=n.n(d),f=n(589),m=n.n(f),v=n(424),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const y="GKu1RIiZvbXu9pzTde2x",g=document.getElementById("scorelist"),b=e=>{console.log(e),document.getElementById("status").innerHTML(`<p>${e} </p>`)},x=async()=>{try{const e=await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${y}/scores/`),t=await e.json();if(!e.ok)return t;const n=t.result;return(e=>{g.innerHTML="",e.forEach((e=>{g.insertAdjacentHTML("beforeend",`<li class='score-item'>${e.user}: ${e.score}</li>`)}))})(n),n}catch(e){return e}},w=document.getElementById("score-form");document.getElementById("refresh"),w.addEventListener("submit",(e=>{e.preventDefault();let t=document.getElementById("name"),n=document.getElementById("score");(async e=>{try{const t=await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${y}/scores/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();t.ok?(x(),b(n.result)):b(n.message)}catch(e){return e}})({user:t.value,score:Number(n.value)}),t.value="",n.value=""})),window.addEventListener("DOMContentLoaded",(()=>{x()}))}},e=>{e(e.s=297)}]);