"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[613],{8005:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(3645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,"body[data-v-126e3744]{background:#4682b4}.aselect[data-v-126e3744]{margin:20px auto;width:135px}.aselect .selector[data-v-126e3744]{background:transparent;border:2px #dcdcdc;border-radius:4px;position:relative}.aselect .selector .label[data-v-126e3744]{color:#171a21;display:block;font-size:16px;padding:12px}.aselect .selector[data-v-126e3744] :hover{color:#12a5d9}.aselect ul[data-v-126e3744]{background:#fff;border:1px solid #dcdcdc;font-size:16px;list-style-type:none;margin:0;padding:0;position:absolute;width:100%;z-index:10!important}.aselect li[data-v-126e3744]{color:#000;padding:12px}.aselect li[data-v-126e3744]:hover{background:#66c0f4;color:#fff!important}.aselect .current[data-v-126e3744]{background:#eaeaea}.aselect .hidden[data-v-126e3744]{visibility:hidden}.aselect .visible[data-v-126e3744]{visibility:visible}",""]);const r=o},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var u=l(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),a.push(d)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function v(e,t,n){var a=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,m=0;function h(e,t){var n,a,o;if(t.singleton){var r=m++;n=p||(p=s(t)),a=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=s(t),a=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=l(n[a]);i[o].references--}for(var r=c(e,t),s=0;s<n.length;s++){var d=l(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=r}}}},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},3613:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(6598),o={id:"app"},r=["data-value","data-list"],i={class:"label"},l={class:"button"},c={class:"font-medium"},s={class:"cursor-pointer"},d=["onClick"];var u=n(9680);const f={props:{value:{type:String,default:"Opciones"},list:{type:Array,default:[["Valor","Enlace"],["Valor","Enlace"],["Valor","Enlace"]]}},data:function(){return{visible:!1}},methods:{mouseover:function(){this.visible=!0},mouseleave:function(){this.visible=!1},takeMeTo:function(e,t){"logout"==e&&(history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){console.log(e),history.pushState(null,document.title,location.href)})),window.location.href=route("logout")),u.Inertia.get(route(e,t))}}};var v=n(3379),p=n.n(v),m=n(8005),h={insert:"head",singleton:!1};p()(m.Z,h);m.Z.locals;const b=(0,n(3744).Z)(f,[["render",function(e,t,n,u,f,v){return(0,a.openBlock)(),(0,a.createElementBlock)("div",o,[(0,a.createElementVNode)("div",{class:"aselect","data-value":n.value,"data-list":n.list},[(0,a.createElementVNode)("div",{class:"cursor-pointer selector",onMouseover:t[0]||(t[0]=function(){return v.mouseover&&v.mouseover.apply(v,arguments)}),onMouseleave:t[1]||(t[1]=function(){return v.mouseleave&&v.mouseleave.apply(v,arguments)})},[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("button",l,[(0,a.createElementVNode)("p",c,(0,a.toDisplayString)(n.value),1)])]),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)({hidden:!f.visible,visible:f.visible})},[(0,a.createElementVNode)("ul",s,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.list,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)({current:e===n.value}),key:e,onClick:function(t){return v.takeMeTo(e[1],e[2])}},(0,a.toDisplayString)(e[0]),11,d)})),128))])],2)],32)],8,r)])}],["__scopeId","data-v-126e3744"]])}}]);