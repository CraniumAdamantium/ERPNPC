(self.webpackChunk=self.webpackChunk||[]).push([[167,759,290,613],{9669:(e,t,n)=>{e.exports=n(1609)},5448:(e,t,n)=>{"use strict";var r=n(4867),o=n(6026),a=n(4372),i=n(5327),s=n(4097),c=n(4109),l=n(7985),u=n(5061),d=n(5655),f=n(4442);e.exports=function(e){return new Promise((function(t,n){var p,m=e.data,h=e.headers,v=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(m)&&delete h["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(y+":"+w)}var x=s(e.baseURL,e.url);function E(){if(b){var r="getAllResponseHeaders"in b?c(b.getAllResponseHeaders()):null,a={data:v&&"text"!==v&&"json"!==v?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};o((function(e){t(e),g()}),(function(e){n(e),g()}),a),b=null}}if(b.open(e.method.toUpperCase(),i(x,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=E:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(E)},b.onabort=function(){b&&(n(u("Request aborted",e,"ECONNABORTED",b)),b=null)},b.onerror=function(){n(u("Network Error",e,null,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",b)),b=null},r.isStandardBrowserEnv()){var N=(e.withCredentials||l(x))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;N&&(h[e.xsrfHeaderName]=N)}"setRequestHeader"in b&&r.forEach(h,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete h[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),v&&"json"!==v&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(n(!e||e&&e.type?new f("canceled"):e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null),b.send(m)}))}},1609:(e,t,n)=>{"use strict";var r=n(4867),o=n(1849),a=n(321),i=n(7185);var s=function e(t){var n=new a(t),s=o(a.prototype.request,n);return r.extend(s,a.prototype,n),r.extend(s,n),s.create=function(n){return e(i(t,n))},s}(n(5655));s.Axios=a,s.Cancel=n(4442),s.CancelToken=n(4972),s.isCancel=n(6502),s.VERSION=n(7288).version,s.all=function(e){return Promise.all(e)},s.spread=n(8713),s.isAxiosError=n(6268),e.exports=s,e.exports.default=s},4442:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4972:(e,t,n)=>{"use strict";var r=n(4442);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},6502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(4867),o=n(5327),a=n(782),i=n(3572),s=n(7185),c=n(4875),l=c.validators;function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var a,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!o){var d=[i,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(u),a=Promise.resolve(t);d.length;)a=a.then(d.shift(),d.shift());return a}for(var f=t;r.length;){var p=r.shift(),m=r.shift();try{f=p(f)}catch(e){m(e);break}}try{a=i(f)}catch(e){return Promise.reject(e)}for(;u.length;)a=a.then(u.shift(),u.shift());return a},u.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=u},782:(e,t,n)=>{"use strict";var r=n(4867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4097:(e,t,n)=>{"use strict";var r=n(1793),o=n(7303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},5061:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},3572:(e,t,n)=>{"use strict";var r=n(4867),o=n(8527),a=n(6502),i=n(5655),s=n(4442);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},7185:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function i(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||a,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},6026:(e,t,n)=>{"use strict";var r=n(5061);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},8527:(e,t,n)=>{"use strict";var r=n(4867),o=n(5655);e.exports=function(e,t,n){var a=this||o;return r.forEach(n,(function(n){e=n.call(a,e,t)})),e}},5655:(e,t,n)=>{"use strict";var r=n(4155),o=n(4867),a=n(6016),i=n(481),s={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(l=n(5448)),l),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,n){if(o.isString(e))try{return(t||JSON.parse)(e),o.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||r&&o.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){u.headers[e]=o.merge(s)})),e.exports=u},7288:e=>{e.exports={version:"0.25.0"}},1849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:(e,t,n)=>{"use strict";var r=n(4867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:(e,t,n)=>{"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},7985:(e,t,n)=>{"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},6016:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},4109:(e,t,n)=>{"use strict";var r=n(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},8713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4875:(e,t,n)=>{"use strict";var r=n(7288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,i){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,i)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],i=t[a];if(i){var s=e[a],c=void 0===s||i(s,a,e);if(!0!==c)throw new TypeError("option "+a+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:o}},4867:(e,t,n)=>{"use strict";var r=n(1849),o=Object.prototype.toString;function a(e){return Array.isArray(e)}function i(e){return void 0===e}function s(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:s,isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&s(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:l,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:d,merge:function e(){var t={};function n(n,r){l(t[r])&&l(n)?t[r]=e(t[r],n):l(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},7707:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body[data-v-00b8efae]{background:#4682b4}.aselect[data-v-00b8efae]{margin:20px auto;width:180px}.aselect .selector[data-v-00b8efae]{background:#171a21;border:2px #dcdcdc;border-radius:4px;position:relative;z-index:1}.aselect .selector .arrow[data-v-00b8efae]{border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #888;height:0;position:absolute;right:10px;top:40%;transform:rotate(0deg) translateY(0);transition-duration:.3s;transition-timing-function:cubic-bezier(.59,1.39,.37,1.01);width:0}.aselect .selector .expanded[data-v-00b8efae]{transform:rotate(180deg) translateY(2px)}.aselect .selector .label[data-v-00b8efae]{color:#fff;display:block;font-size:16px;padding:12px}.aselect ul[data-v-00b8efae]{background:#fff;border:1px solid #dcdcdc;font-size:16px;list-style-type:none;margin:0;padding:0;position:absolute;width:100%;z-index:1}.aselect li[data-v-00b8efae]{color:#000;padding:12px}.aselect li[data-v-00b8efae]:hover{background:#66c0f4;color:#fff}.aselect .current[data-v-00b8efae]{background:#eaeaea}.aselect .hidden[data-v-00b8efae]{visibility:hidden}.aselect .visible[data-v-00b8efae]{visibility:visible}",""]);const a=o},8005:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body[data-v-126e3744]{background:#4682b4}.aselect[data-v-126e3744]{margin:20px auto;width:135px}.aselect .selector[data-v-126e3744]{background:transparent;border:2px #dcdcdc;border-radius:4px;position:relative}.aselect .selector .label[data-v-126e3744]{color:#171a21;display:block;font-size:16px;padding:12px}.aselect .selector[data-v-126e3744] :hover{color:#12a5d9}.aselect ul[data-v-126e3744]{background:#fff;border:1px solid #dcdcdc;font-size:16px;list-style-type:none;margin:0;padding:0;position:absolute;width:100%;z-index:10!important}.aselect li[data-v-126e3744]{color:#000;padding:12px}.aselect li[data-v-126e3744]:hover{background:#66c0f4;color:#fff!important}.aselect .current[data-v-126e3744]{background:#eaeaea}.aselect .hidden[data-v-126e3744]{visibility:hidden}.aselect .visible[data-v-126e3744]{visibility:visible}",""]);const a=o},3254:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@media (max-width:768px){.empresa-name{display:none}}ul{font-weight:600}",""]);const a=o},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:v(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var a=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},3744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},2167:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(6598),o={key:1,class:"mt-8",style:{"margin-left":"2rem"}},a={class:"text-white text-2xl mt-3 font-medium"},i=(0,r.createTextVNode)(" Bienvenido de nuevo "),s={class:"underline decoration-solid"},c=(0,r.createTextVNode)("🎇 "),l={class:"text-white text-lg mt-3 font-medium"},u=(0,r.createTextVNode)(" Empresa: "),d={class:"underline decoration-solid"},f=(0,r.createTextVNode)("💲 ");var p=n(9669),m=n.n(p);const h={components:{Navbar:n(6290).default},data:function(){return{company:[],loaded_user:!1,loaded_company:!1,userData:[]}},mounted:function(){this.setUser(),this.setData()},methods:{toggleMenu:function(){document.getElementById("menu").classList.toggle("hidden")},setUser:function(){var e=this;m().get(route("user.data")).then((function(t){e.userData=t.data.userData,console.log("datos de usuariio",e.userData),e.loaded_user=!0}))},setData:function(){var e=this,t=window.location.pathname.split("/").pop();m().get(route("managementdate.api.read",t)).then((function(t){e.company=t.data.company,console.log("Datos de compañia",e.company),e.loaded_company=!0}))}}};const v=(0,n(3744).Z)(h,[["render",function(e,t,n,p,m,h){var v=(0,r.resolveComponent)("Navbar");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[m.loaded_user?((0,r.openBlock)(),(0,r.createBlock)(v,{key:0,companyName:m.company.name,userName:m.userData.name},null,8,["companyName","userName"])):(0,r.createCommentVNode)("",!0),m.loaded_user?((0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("h4",a,[i,(0,r.createElementVNode)("span",s,(0,r.toDisplayString)(m.userData.name),1),c]),(0,r.createElementVNode)("h4",l,[u,(0,r.createElementVNode)("span",d,(0,r.toDisplayString)(m.company.name),1),f])])):(0,r.createCommentVNode)("",!0)],64)}]])},4759:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(6598),o={id:"app"},a=["data-value","data-list"],i={class:"label"},s={class:"cursor-pointer"},c=["onClick"];var l=n(9680);const u={props:{value:{type:String,default:"Opciones"},list:{type:Array,default:[["Valor","Enlace"],["Valor","Enlace"],["Valor","Enlace"]]}},data:function(){return{visible:!1}},methods:{toggle:function(){this.visible=!this.visible},takeMeTo:function(e){"logout"==e&&(history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){console.log(e),history.pushState(null,document.title,location.href)})),window.location.href=route("logout")),l.Inertia.get(route(e))}}};var d=n(3379),f=n.n(d),p=n(7707),m={insert:"head",singleton:!1};f()(p.Z,m);p.Z.locals;const h=(0,n(3744).Z)(u,[["render",function(e,t,n,l,u,d){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",{class:"aselect","data-value":n.value,"data-list":n.list},[(0,r.createElementVNode)("div",{class:"cursor-pointer selector",onClick:t[0]||(t[0]=function(e){return d.toggle()})},[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("button",null,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(n.value),1)])]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["arrow",{expanded:u.visible}])},null,2),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)({hidden:!u.visible,visible:u.visible})},[(0,r.createElementVNode)("ul",s,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.list,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{class:(0,r.normalizeClass)({current:e===n.value}),key:e,onClick:function(t){return d.takeMeTo(e[1])}},(0,r.toDisplayString)(e[0]),11,c)})),128))])],2)])],8,a)])}],["__scopeId","data-v-00b8efae"]])},6290:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(6598),o={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},a={class:"grid auto-cols-min grid-cols-2 w-4/12"},i={class:"col"},s={class:"col text-base sm:w-96"},c={class:"empresa-name font-semibold",style:{color:"#171a21"}},l=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],u={class:"hidden w-full md:flex md:items-center md:w-auto",id:"menu"},d={class:"pt-4 text-base text-gray-900 md:flex md:justify-between md:pt-0"};var f=n(4759),p=n(9680),m=n(3613);const h={components:{DropDownUser:f.default,TransparentDropDown:m.default},props:{userName:{type:String,default:""},companyName:{type:String,default:""}},methods:{toggleMenu:function(){document.getElementById("menu").classList.toggle("hidden")},changeCompany:function(){p.Inertia.get(route("companies"))},dashboard:function(){p.Inertia.get(route("dashboard",decodeURI(window.location.pathname.split("/").pop())))},joinManagement:function(){p.Inertia.get(route("date.management",decodeURI(window.location.pathname.split("/").pop())))},joinAccount:function(){p.Inertia.get(route("accounts",decodeURI(window.location.pathname.split("/").pop())))}}};var v=n(3379),g=n.n(v),b=n(3254),y={insert:"head",singleton:!1};g()(b.Z,y);b.Z.locals;const w=(0,n(3744).Z)(h,[["render",function(e,t,n,f,p,m){var h=(0,r.resolveComponent)("TransparentDropDown"),v=(0,r.resolveComponent)("DropDownUser");return(0,r.openBlock)(),(0,r.createElementBlock)("header",null,[(0,r.createElementVNode)("nav",o,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("a",null,[(0,r.createElementVNode)("img",{onClick:t[0]||(t[0]=function(){return m.dashboard&&m.dashboard.apply(m,arguments)}),src:"https://queeserp.tk/images/queeserp.svg",alt:"Logo que es erp",class:"md:w-48 md:mr-8 cursor-pointer"})])]),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("p",c,(0,r.toDisplayString)(n.companyName),1)])]),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{onClick:t[1]||(t[1]=function(){return m.toggleMenu&&m.toggleMenu.apply(m,arguments)}),xmlns:"http://www.w3.org/2000/svg",id:"menu-button",class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l)),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("ul",d,[(0,r.createVNode)(h,{list:[["Reporte de Libro Diario","reportld.api.read",n.companyName],["Reporte de Libro Mayor","reportlm.api.read",n.companyName],["Reporte de Balance Inicial","reportbi.api.read",n.companyName],["Comprobación de Sumas y Saldos","reportss.api.read",n.companyName]],value:"Reportes"},null,8,["list"]),(0,r.createVNode)(h,{list:[["Artículos","items",n.companyName],["Categorías","categories",n.companyName],["Notas","notes",n.companyName]],value:"Inventario"},null,8,["list"]),(0,r.createVNode)(h,{list:[["Gestión","date.management",n.companyName],["Moneda","exchange_rate",n.companyName]],value:"Configuración"},null,8,["list"]),(0,r.createVNode)(h,{list:[["Cuentas","accounts",n.companyName],["Configurar Integración","accounts_config",n.companyName],["Comprobante","receipt",n.companyName]],value:"Contabilidad"},null,8,["list"]),(0,r.createVNode)(v,{list:[["Cambiar Empresa","companies"],["Cerrar Sesión","logout"]],value:"Preferencias"})])])])])}]])},3613:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(6598),o={id:"app"},a=["data-value","data-list"],i={class:"label"},s={class:"button"},c={class:"font-medium"},l={class:"cursor-pointer"},u=["onClick"];var d=n(9680);const f={props:{value:{type:String,default:"Opciones"},list:{type:Array,default:[["Valor","Enlace"],["Valor","Enlace"],["Valor","Enlace"]]}},data:function(){return{visible:!1}},methods:{mouseover:function(){this.visible=!0},mouseleave:function(){this.visible=!1},takeMeTo:function(e,t){"logout"==e&&(history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){console.log(e),history.pushState(null,document.title,location.href)})),window.location.href=route("logout")),d.Inertia.get(route(e,t))}}};var p=n(3379),m=n.n(p),h=n(8005),v={insert:"head",singleton:!1};m()(h.Z,v);h.Z.locals;const g=(0,n(3744).Z)(f,[["render",function(e,t,n,d,f,p){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",{class:"aselect","data-value":n.value,"data-list":n.list},[(0,r.createElementVNode)("div",{class:"cursor-pointer selector",onMouseover:t[0]||(t[0]=function(){return p.mouseover&&p.mouseover.apply(p,arguments)}),onMouseleave:t[1]||(t[1]=function(){return p.mouseleave&&p.mouseleave.apply(p,arguments)})},[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("button",s,[(0,r.createElementVNode)("p",c,(0,r.toDisplayString)(n.value),1)])]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)({hidden:!f.visible,visible:f.visible})},[(0,r.createElementVNode)("ul",l,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.list,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{class:(0,r.normalizeClass)({current:e===n.value}),key:e,onClick:function(t){return p.takeMeTo(e[1],e[2])}},(0,r.toDisplayString)(e[0]),11,u)})),128))])],2)],32)],8,a)])}],["__scopeId","data-v-126e3744"]])}}]);