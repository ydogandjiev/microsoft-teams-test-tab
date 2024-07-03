/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 760:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,(()=>(()=>{var e={933:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,i=s(e),a=i[0],l=i[1],u=new o(c(e,a,l)),d=0,f=l>0?a-4:a;for(n=0;n<f;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],u[d++]=t>>16&255,u[d++]=t>>8&255,u[d++]=255&t;2===l&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,u[d++]=255&t);1===l&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,u[d++]=t>>8&255,u[d++]=255&t);return u},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,i=[],a=16383,s=0,c=r-o;s<c;s+=a)i.push(u(e,s,s+a>c?c:s+a));1===o?(t=e[r-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===o&&(t=(e[r-2]<<8)+e[r-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)n[a]=i[a],r[i.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function c(e,t,n){return 3*(t+n)/4-n}function l(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[63&e]}function u(e,t,n){for(var r,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(l(r));return o.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},46:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(601)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},601:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,i,a=null;function s(...e){if(!s.enabled)return;const r=s,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";a++;const i=t.formatters[o];if("function"==typeof i){const t=e[a];n=i.call(r,t),e.splice(a,1),a--}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=r,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{a=e}}),"function"==typeof t.init&&t.init(s),s}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(821),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},821:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,i=7*o;function a(e){if(!((e=String(e)).length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(a){var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function s(e){var i=Math.abs(e);return i>=o?Math.round(e/o)+"d":i>=r?Math.round(e/r)+"h":i>=n?Math.round(e/n)+"m":i>=t?Math.round(e/t)+"s":e+"ms"}function c(e){var i=Math.abs(e);return i>=o?l(e,i,o,"day"):i>=r?l(e,i,r,"hour"):i>=n?l(e,i,n,"minute"):i>=t?l(e,i,t,"second"):e+" ms"}function l(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return a(e);if("number"===n&&isFinite(e))return t.long?c(e):s(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionObjectType:()=>me,ChannelType:()=>Pe,ChildAppWindow:()=>Ri,DialogDimension:()=>Ae,ErrorCode:()=>we,FileOpenPreference:()=>ge,FrameContexts:()=>be,HostClientType:()=>ye,HostName:()=>Se,LiveShareHost:()=>Va,NotificationTypes:()=>to,ParentAppWindow:()=>ki,SecondaryM365ContentIdName:()=>he,TaskModuleDimension:()=>Te,TeamType:()=>Ee,UserSettingTypes:()=>ro,UserTeamRole:()=>Ie,ViewerActionTypes:()=>no,app:()=>gn,appEntity:()=>To,appInitialization:()=>ra,appInstallDialog:()=>oi,authentication:()=>Gt,barCode:()=>Si,calendar:()=>xi,call:()=>ta,chat:()=>bi,clipboard:()=>Ii,conversations:()=>po,dialog:()=>Xt,enablePrintCapability:()=>ca,executeDeepLink:()=>Ia,externalAppAuthentication:()=>mo,externalAppCardActions:()=>ho,externalAppCommands:()=>vo,files:()=>yo,geoLocation:()=>Ti,getAdaptiveCardSchemaVersion:()=>Fi,getContext:()=>ua,getMruTabInstances:()=>ba,getTabInstances:()=>Sa,initialize:()=>sa,initializeWithFrameContext:()=>Pa,liveShare:()=>xa,location:()=>Ui,logs:()=>eo,mail:()=>Vi,marketplace:()=>Ya,media:()=>si,meeting:()=>Ni,meetingRoom:()=>bo,menus:()=>en,messageChannels:()=>Bt,monetization:()=>Hi,navigateBack:()=>ka,navigateCrossDomain:()=>Ra,navigateToTab:()=>Oa,nestedAppAuth:()=>Ai,notifications:()=>Eo,openFilePreview:()=>uo,otherAppStateChange:()=>Io,pages:()=>Fn,people:()=>Wi,print:()=>la,profile:()=>zi,registerAppButtonClickHandler:()=>pa,registerAppButtonHoverEnterHandler:()=>ga,registerAppButtonHoverLeaveHandler:()=>ma,registerBackButtonHandler:()=>ha,registerBeforeUnloadHandler:()=>va,registerChangeSettingsHandler:()=>ya,registerCustomHandler:()=>co,registerFocusEnterHandler:()=>Ca,registerFullScreenHandler:()=>fa,registerOnLoadHandler:()=>wa,registerOnThemeChangeHandler:()=>da,registerUserSettingsChangeHandler:()=>lo,remoteCamera:()=>Po,returnFocus:()=>Fa,search:()=>Gi,secondaryBrowser:()=>Mi,sendCustomEvent:()=>so,sendCustomMessage:()=>ao,setFrameContext:()=>Aa,settings:()=>Ua,shareDeepLink:()=>Ea,sharing:()=>Ji,stageView:()=>Ki,tasks:()=>Na,teams:()=>Oo,teamsCore:()=>_i,thirdPartyCloudStorage:()=>ia,uploadCustomApp:()=>io,version:()=>bt,videoEffects:()=>Ho,videoEffectsEx:()=>Xo,visualMedia:()=>Xi,webStorage:()=>Yi});const e=(0,n(46).debug)("teamsJs");function t(t){return e.extend(t)}function o(e,t){return`${e}_${t}`}function i(e){return/^v\d+_[\w.]+$/.test(e)}const a=JSON.parse('{"validOrigins":["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","outlook.live.com","outlook-sdf.live.com","teams.live.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","devspaces.skype.com","*.www.office.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.microsoft365.com","www.microsoft365.com","bing.com","edgeservices.bing.com","www.bing.com","www.staging-bing-int.com","teams.cloud.microsoft","outlook.cloud.microsoft","m365.cloud.microsoft","copilot.microsoft.com","windows.msn.com","fa000000125.resources.office.net","fa000000129.resources.office.net","fa000000124.resources.office.net","fa000000128.resources.office.net"]}');const s="2.0.1",c="2.0.3",l="1.9.0",u="1.8.0",d=n.t(a,2).validOrigins,f=new URL("https://res.cdn.office.net/teams-js/validDomains/json/validDomains.json"),p=/^https:\/\//,g="https",m="teams.microsoft.com",h="The library has not yet been initialized",w="The runtime has not yet been initialized",v="The runtime version is not supported";class C{}C.initializeCalled=!1,C.initializeCompleted=!1,C.additionalValidOrigins=[],C.initializePromise=void 0,C.isFramelessWindow=!1,C.frameContext=void 0,C.hostClientType=void 0,C.printCapabilityEnabled=!1;var y=n(933);const S=E,b=2147483647;function E(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return A(e)}return I(e,t,n)}function I(e,t,n){if("string"==typeof e)return O(e,t);if(ArrayBuffer.isView(e))return N(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(k(e,ArrayBuffer)||e&&k(e.buffer,ArrayBuffer))return H(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(k(e,SharedArrayBuffer)||e&&k(e.buffer,SharedArrayBuffer)))return H(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return E.from(r,t,n);const o=oe(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return E.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function A(e){return P(e),T(e<0?0:0|F(e))}function P(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function T(e){if(e>b)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,E.prototype),t}function F(e){if(e>=b)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+b.toString(16)+" bytes");return 0|e}function O(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!E.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|R(e,t);let r=T(n);const o=r.write(e,t);return o!==n&&(r=r.slice(0,o)),r}function R(e,t){if(E.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||k(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return M(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return U(e).length;default:if(o)return r?-1:M(e).length;t=(""+t).toLowerCase(),o=!0}}function k(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function M(e,t){let n;t=t||1/0;const r=e.length;let o=null;const i=[];for(let a=0;a<r;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function U(e){return y.toByteArray(D(e))}E.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),E.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required"),E.from=function(e,t,n){return I(e,t,n)},Object.setPrototypeOf(E.prototype,Uint8Array.prototype),Object.setPrototypeOf(E,Uint8Array),E.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},E.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==E.prototype};const L=/[^+/0-9A-Za-z-_]/g;function D(e){if((e=(e=e.split("=")[0]).trim().replace(L,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function N(e){if(k(e,Uint8Array)){const t=new Uint8Array(e);return H(t.buffer,t.byteOffset,t.byteLength)}return x(e)}function H(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,E.prototype),r}function x(e){const t=e.length<0?0:0|F(e.length),n=T(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function V(e,t,n){n=Math.min(e.length,n);const r=[];let o=t;for(;o<n;){const t=e[o];let i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=n){let n,r,s,c;switch(a){case 1:t<128&&(i=t);break;case 2:n=e[o+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(i=c));break;case 3:n=e[o+1],r=e[o+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:n=e[o+1],r=e[o+2],s=e[o+3],128==(192&n)&&128==(192&r)&&128==(192&s)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s,c>65535&&c<1114112&&(i=c))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=a}return B(r)}function _(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return j(this,t,n);case"utf8":case"utf-8":return V(this,t,n);case"ascii":return z(this,t,n);case"latin1":case"binary":return q(this,t,n);case"base64":return G(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}E.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?V(this,0,e):_.apply(this,arguments)};const W=4096;function B(e){const t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=W));return n}function j(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let o="";for(let r=t;r<n;++r)o+=re[e[r]];return o}function z(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(127&e[o]);return r}function q(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(e[o]);return r}function G(e,t,n){return 0===t&&n===e.length?y.fromByteArray(e):y.fromByteArray(e.slice(t,n))}function $(e,t,n){const r=e.slice(t,n);let o="";for(let e=0;e<r.length-1;e+=2)o+=String.fromCharCode(r[e]+256*r[e+1]);return o}function J(e,t,n,r){n=Number(n)||0;const o=e.length-n;r?(r=Number(r))>o&&(r=o):r=o;const i=t.length;let a;for(r>i/2&&(r=i/2),a=0;a<r;++a){const r=parseInt(t.substr(2*a,2),16);if(ne(r))return a;e[n+a]=r}return a}function K(e,t,n,r){return te(M(t,e.length-n),e,n,r)}function Z(e,t,n,r){return te(Y(t),e,n,r)}function Q(e,t,n,r){return te(U(t),e,n,r)}function X(e,t,n,r){return te(ee(t,e.length-n),e,n,r)}function Y(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function ee(e,t){let n,r,o;const i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function te(e,t,n,r){let o;for(o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function ne(e){return e!=e}E.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return J(this,e,t,n);case"utf8":case"utf-8":return K(this,e,t,n);case"ascii":case"latin1":case"binary":return Z(this,e,t,n);case"base64":return Q(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return X(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}};const re=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let o=0;o<16;++o)t[r+o]=e[n]+e[o]}return t}();function oe(e){if(E.isBuffer(e)){const t=0|F(e.length),n=T(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||ne(e.length)?T(0):x(e):"Buffer"===e.type&&Array.isArray(e.data)?x(e.data):void 0}const ie={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let ae;const se=new Uint8Array(16);function ce(){if(!ae&&(ae="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ae))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ae(se)}const le=[];for(let e=0;e<256;++e)le.push((e+256).toString(16).slice(1));function ue(e,t=0){return le[e[t+0]]+le[e[t+1]]+le[e[t+2]]+le[e[t+3]]+"-"+le[e[t+4]]+le[e[t+5]]+"-"+le[e[t+6]]+le[e[t+7]]+"-"+le[e[t+8]]+le[e[t+9]]+"-"+le[e[t+10]]+le[e[t+11]]+le[e[t+12]]+le[e[t+13]]+le[e[t+14]]+le[e[t+15]]}const de=function(e,t,n){if(ie.randomUUID&&!t&&!e)return ie.randomUUID();const r=(e=e||{}).random||(e.rng||ce)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return ue(r)},fe=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const pe=function(e){return"string"==typeof e&&fe.test(e)};var ge,me,he,we,ve,Ce,ye,Se,be,Ee,Ie,Ae;!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(ge||(ge={})),function(e){e.M365Content="m365content"}(me||(me={})),function(e){e.DriveId="driveId",e.GroupId="groupId",e.SiteId="siteId",e.UserId="userId"}(he||(he={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(we||(we={})),function(e){e.GeoLocation="geolocation",e.Media="media"}(ve||(ve={})),function(e){e.TextPlain="text/plain",e.TextHtml="text/html",e.ImagePNG="image/png",e.ImageJPEG="image/jpeg"}(Ce||(Ce={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.macos="macos",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(ye||(ye={})),function(e){e.office="Office",e.outlook="Outlook",e.outlookWin32="OutlookWin32",e.orange="Orange",e.places="Places",e.teams="Teams",e.teamsModern="TeamsModern"}(Se||(Se={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(be||(be={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(Ee||(Ee={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(Ie||(Ie={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(Ae||(Ae={}));var Pe,Te=Ae;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(Pe||(Pe={}));const Fe={errorCode:we.NOT_SUPPORTED_ON_PLATFORM},Oe=1,Re=5,ke={adaptiveCardSchemaVersion:{majorVersion:1,minorVersion:5}},Me=new Error("Invalid input count: Must supply a valid image count (limit of 10)."),Ue=new Error("Invalid response: Received more images than the specified max limit in the response.");function Le(e){return(t,n)=>{if(!t)throw new Error(e||n)}}function De(e,t){if("string"!=typeof e||"string"!=typeof t)return NaN;const n=e.split("."),r=t.split(".");function o(e){return/^\d+$/.test(e)}if(!n.every(o)||!r.every(o))return NaN;for(;n.length<r.length;)n.push("0");for(;r.length<n.length;)r.push("0");for(let e=0;e<n.length;++e)if(Number(n[e])!=Number(r[e]))return Number(n[e])>Number(r[e])?1:-1;return 0}function Ne(){return de()}function He(e){return Object.keys(e).forEach((t=>{"object"==typeof e[t]&&He(e[t])})),Object.freeze(e)}function xe(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(void 0,e)})).catch((e=>{t&&t(e)})),r}function Ve(e,t,...n){const r=e(...n);return r.then((()=>{t&&t(null)})).catch((e=>{t&&t(e)})),r}function _e(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(null,e)})).catch((e=>{t&&t(e,null)})),r}function We(e,t,n){return new Promise(((r,o)=>{const i=setTimeout(o,t,n);e().then((e=>{clearTimeout(i),r(e)})).catch((e=>{clearTimeout(i),o(e)}))}))}function Be(e){const t=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&t.searchParams.append("webUrl",e.webUrl),(e.channelId||e.subPageId)&&t.searchParams.append("context",JSON.stringify({channelId:e.channelId,subEntityId:e.subPageId})),t.toString()}function je(e){return!(De(`${e.majorVersion}.${e.minorVersion}`,`${Oe}.${Re}`)>=0)}function ze(e){return"https:"===e.protocol}function qe(e,t){return new Promise(((n,r)=>{if(e||r("MimeType cannot be null or empty."),t||r("Base64 string cannot be null or empty."),e.startsWith("image/")){const r=atob(t),o=new Uint8Array(r.length);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);n(new Blob([o],{type:e}))}const o=S.from(t,"base64").toString();n(new Blob([o],{type:e}))}))}function Ge(e){return new Promise(((t,n)=>{0===e.size&&n(new Error("Blob cannot be empty."));const r=new FileReader;r.onloadend=()=>{r.result?t(r.result.toString().split(",")[1]):n(new Error("Failed to read the blob"))},r.onerror=()=>{n(r.error)},r.readAsDataURL(e)}))}function $e(){if(Je())throw new Error("window object undefined at SSR check");return window}function Je(){return"undefined"==typeof window}function Ke(e,t){if(Xe(e)||!et(e)||!tt(e))throw t||new Error("id is not valid.")}function Ze(e,t){const n=e.toString().toLocaleLowerCase();if(Xe(n))throw t||new Error("Invalid Url");if(n.length>2048)throw t||new Error("Url exceeds the maximum size of 2048 characters");if(!ze(e))throw t||new Error("Url should be a valid https url")}function Qe(e){const t=document.createElement("a");return t.href=e,new URL(t.href)}function Xe(e){let t;try{const n=Ye(e);t=decodeURIComponent(n)}catch(n){t=e}return/<script[^>]*>[\s\S]*?<\/script[^>]*>/gi.test(t)}function Ye(e){return new Map([["&lt;","<"],["&gt;",">"],["&amp;","&"],["&quot;",'"'],["&#39;","'"],["&#x2F;","/"]]).forEach(((t,n)=>{e=e.replace(new RegExp(n,"gi"),t)})),e}function et(e){return e.length<256&&e.length>4}function tt(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n<32||n>126)return!1}return!0}function nt(e){if(!e)throw new Error("id must not be empty");if(!1===pe(e))throw new Error("id must be a valid UUID")}var rt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const ot=t("runtime"),it=4;function at(e){return e.apiVersion===it}const st={apiVersion:-1,supports:{}};function ct(e){if(at(e))return!0;throw-1===e.apiVersion?new Error(w):new Error(v)}let lt=st;const ut={apiVersion:4,isNAAChannelRecommended:!1,hostVersionsInfo:ke,isLegacyTeams:!0,supports:{appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{card:{bot:{}},url:{bot:{},parentCommunication:{}},update:{}},interactive:{},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{config:{},backStack:{},fullTrust:{}},remoteCamera:{},teams:{fullTrust:{}},teamsCore:{},video:{sharedFrame:{}}}},dt=[ye.desktop,ye.web,ye.rigel,ye.surfaceHub,ye.teamsRoomsWindows,ye.teamsRoomsAndroid,ye.teamsPhones,ye.teamsDisplays],ft=[ye.android,ye.ios,ye.ipados],pt=[...dt,...ft];function gt(e){let t=e;if(t.apiVersion<it&&mt.forEach((e=>{t.apiVersion===e.versionToUpgradeFrom&&(t=e.upgradeToNextVersion(t))})),at(t))return t;throw new Error("Received a runtime that could not be upgraded to the latest version")}const mt=[{versionToUpgradeFrom:1,upgradeToNextVersion:e=>{var t;return{apiVersion:2,hostVersionsInfo:void 0,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:void 0,url:e.supports.dialog,update:null===(t=e.supports.dialog)||void 0===t?void 0:t.update}:void 0})}}},{versionToUpgradeFrom:2,upgradeToNextVersion:e=>{const t=e.supports,{appNotification:n}=t,r=rt(t,["appNotification"]);return Object.assign(Object.assign({},e),{apiVersion:3,supports:r})}},{versionToUpgradeFrom:3,upgradeToNextVersion:e=>{var t,n,r,o,i;return{apiVersion:4,hostVersionsInfo:e.hostVersionsInfo,isNAAChannelRecommended:e.isNAAChannelRecommended,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:null===(t=e.supports.dialog)||void 0===t?void 0:t.card,url:{bot:null===(r=null===(n=e.supports.dialog)||void 0===n?void 0:n.url)||void 0===r?void 0:r.bot,parentCommunication:(null===(o=e.supports.dialog)||void 0===o?void 0:o.url)?{}:void 0},update:null===(i=e.supports.dialog)||void 0===i?void 0:i.update}:void 0})}}}],ht={"1.0.0":[{capability:{pages:{appButton:{},tabs:{}},stageView:{}},hostClientTypes:dt}],"1.9.0":[{capability:{location:{}},hostClientTypes:pt}],"2.0.0":[{capability:{people:{}},hostClientTypes:pt},{capability:{sharing:{}},hostClientTypes:[ye.desktop,ye.web]}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[ye.android,ye.desktop,ye.ios,ye.teamsRoomsAndroid,ye.teamsPhones,ye.teamsDisplays,ye.web]},{capability:{webStorage:{}},hostClientTypes:[ye.desktop]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[ye.android,ye.ios]}],"2.0.8":[{capability:{sharing:{}},hostClientTypes:[ye.android,ye.ios]}]},wt=ot.extend("generateBackCompatRuntimeConfig");function vt(e,t){const n=Object.assign({},e);for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&("object"!=typeof t[r]||Array.isArray(t[r])?r in e||(n[r]=t[r]):n[r]=vt(e[r]||{},t[r]));return n}function Ct(e,t,n){wt("generating back compat runtime config for %s",e);let r=Object.assign({},t.supports);wt("Supported capabilities in config before updating based on highestSupportedVersion: %o",r),Object.keys(n).forEach((t=>{De(e,t)>=0&&n[t].forEach((e=>{void 0!==C.hostClientType&&e.hostClientTypes.includes(C.hostClientType)&&(r=vt(r,e.capability))}))}));const o={apiVersion:it,hostVersionsInfo:ke,isLegacyTeams:!0,supports:r};return wt("Runtime config after updating based on highestSupportedVersion: %o",o),o}const yt=ot.extend("applyRuntimeConfig");function St(e){"string"==typeof e.apiVersion&&(yt("Trying to apply runtime with string apiVersion, processing as v1: %o",e),e=Object.assign(Object.assign({},e),{apiVersion:1})),yt("Fast-forwarding runtime %o",e);const t=gt(e);yt("Applying runtime %o",t),lt=He(t)}const bt="2.24.0",Et=t("internal"),It=Et.extend("ensureInitializeCalled"),At=Et.extend("ensureInitialized");function Pt(){if(!C.initializeCalled)throw It(h),new Error(h)}function Tt(e,...t){if(!C.initializeCompleted)throw At("%s. initializeCalled: %s",h,C.initializeCalled.toString()),new Error(h);if(t&&t.length>0){let e=!1;for(let n=0;n<t.length;n++)if(t[n]===C.frameContext){e=!0;break}if(!e)throw new Error(`This call is only allowed in following contexts: ${JSON.stringify(t)}. Current context: "${C.frameContext}".`)}return ct(e)}function Ft(e=s){const t=De(C.clientSupportedSDKVersion,e);return!isNaN(t)&&t>=0}function Ot(){return C.hostClientType==ye.android||C.hostClientType==ye.ios||C.hostClientType==ye.ipados}function Rt(e=s){if(!Ot()){throw{errorCode:we.NOT_SUPPORTED_ON_PLATFORM}}if(!Ft(e)){throw{errorCode:we.OLD_PLATFORM}}}function kt(e){let t=C.additionalValidOrigins.concat(e.filter((e=>"string"==typeof e&&p.test(e))));const n={};t=t.filter((e=>!n[e]&&(n[e]=!0,!0))),C.additionalValidOrigins=t}function Mt(e){return null==e}var Ut=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};let Lt=[];const Dt=t("validateOrigin");function Nt(){return Ut(this,void 0,void 0,(function*(){yield xt()}))}function Ht(){return 0!==Lt.length}function xt(){return Ut(this,void 0,void 0,(function*(){return Ht()?Lt:Je()?(Lt=d,d):fetch(f).then((e=>{if(!e.ok)throw new Error("Invalid Response from Fetch Call");return e.json().then((e=>{if(Vt(JSON.stringify(e)))return Lt=e.validOrigins,Lt;throw new Error("Valid Origins List Is Invalid")}))})).catch((e=>(Dt("validOrigins fetch call to CDN failed with error: %s. Defaulting to fallback list",e),Lt=d,Lt)))}))}function Vt(e){let t=JSON.parse(e);try{t=JSON.parse(e)}catch(e){return!1}if(!t.validOrigins)return!1;for(const e of t.validOrigins)try{new URL("https://"+e)}catch(t){return Dt("isValidOriginsFromCDN call failed to validate origin: %s",e),!1}return!0}function _t(e,t){if("*."===e.substring(0,2)){const n=e.substring(1);if(t.length>n.length&&t.split(".").length===n.split(".").length&&t.substring(t.length-n.length)===n)return!0}else if(e===t)return!0;return!1}function Wt(e){return xt().then((t=>{if(!ze(e))return Dt("Origin %s is invalid because it is not using https protocol. Protocol being used: %s",e,e.protocol),!1;const n=e.host;if(t.some((e=>_t(e,n))))return!0;for(const e of C.additionalValidOrigins){if(_t("https://"===e.substring(0,8)?e.substring(8):e,n))return!0}return Dt("Origin %s is invalid because it is not an origin approved by this library or included in the call to app.initialize.\nOrigins approved by this library: %o\nOrigins included in app.initialize: %o",e,t,C.additionalValidOrigins),!1}))}var Bt,jt=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};!function(e){let n,r;!function(e){let n;const r=t("messageChannels.telemetry");function i(){var e;return!(!Tt(lt)||!(null===(e=lt.supports.messageChannels)||void 0===e?void 0:e.telemetry))}e.getTelemetryPort=function(){return jt(this,void 0,void 0,(function*(){if(n)return r("Returning telemetry port from cache"),n;if(!i())throw Fe;return n=yield wr(o("v1","messageChannels.telemetry.getTelemetryPort"),"messageChannels.telemetry.getTelemetryPort"),n}))},e.isSupported=i,e._clearTelemetryPort=function(){n=void 0}}(n=e.telemetry||(e.telemetry={})),function(e){let n;const r=t("messageChannels.dataLayer");function i(){var e;return!(!Tt(lt)||!(null===(e=lt.supports.messageChannels)||void 0===e?void 0:e.dataLayer))}e.getDataLayerPort=function(){return jt(this,void 0,void 0,(function*(){if(n)return r("Returning dataLayer port from cache"),n;if(!i())throw Fe;return n=yield wr(o("v1","messageChannels.dataLayer.getDataLayerPort"),"messageChannels.dataLayer.getDataLayerPort"),n}))},e.isSupported=i,e._clearDataLayerPort=function(){n=void 0}}(r=e.dataLayer||(e.dataLayer={})),e.isSupported=function(){return!(!Tt(lt)||!lt.supports.messageChannels)}}(Bt||(Bt={}));const zt="v1",qt="v2";var Gt;!function(e){let t,n,r,i;function a(e,n){return new Promise(((r,o)=>{if(C.hostClientType!==ye.web){const t=Qe(n.url);Ze(t),r(hr(e,"authentication.authenticate",[t.href,n.width,n.height,n.isExternal]).then((([e,t])=>{if(e)return t;throw new Error(t)})))}else t={success:r,fail:o},u(n)}))}function s(e,t){return new Promise((n=>{n(hr(e,"authentication.getAuthToken",[null==t?void 0:t.resources,null==t?void 0:t.claims,null==t?void 0:t.silent,null==t?void 0:t.tenantId]))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function c(e){return new Promise((t=>{t(hr(e,"authentication.getUser"))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function l(){d();try{cr.childWindow&&cr.childWindow.close()}finally{cr.childWindow=null,cr.childOrigin=null}}function u(e){l();let t=e.width||600,n=e.height||400;t=Math.min(t,cr.currentWindow.outerWidth-400),n=Math.min(n,cr.currentWindow.outerHeight-200);const r=Qe(e.url.replace("{oauthRedirectMethod}","web"));Ze(r);let o=void 0!==cr.currentWindow.screenLeft?cr.currentWindow.screenLeft:cr.currentWindow.screenX,i=void 0!==cr.currentWindow.screenTop?cr.currentWindow.screenTop:cr.currentWindow.screenY;o+=cr.currentWindow.outerWidth/2-t/2,i+=cr.currentWindow.outerHeight/2-n/2,cr.childWindow=cr.currentWindow.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+i+", left="+o+", width="+t+", height="+n),cr.childWindow?f():g("FailedToOpenWindow")}function d(){n&&(clearInterval(n),n=0),Hn("initialize"),Hn("navigateCrossDomain")}function f(){d(),n=cr.currentWindow.setInterval((()=>{if(!cr.childWindow||cr.childWindow.closed)g("CancelledByUser");else{const e=cr.childOrigin;try{cr.childOrigin="*",Kr("ping")}finally{cr.childOrigin=e}}}),100),Nn(o(zt,"authentication.authenticationWindow.registerInitializeHandler"),"initialize",(()=>[be.authentication,C.hostClientType])),Nn(o(zt,"authentication.authenticationWindow.registerNavigateCrossDomainHandler"),"navigateCrossDomain",(()=>!1))}function p(e){try{t&&t.success(e)}finally{t=void 0,l()}}function g(e){try{t&&t.fail(new Error(e))}finally{t=void 0,l()}}e.initialize=function(){Nn(o(zt,"authentication.registerAuthenticateSuccessHandler"),"authentication.authenticate.success",p,!1),Nn(o(zt,"authentication.registerAuthenticateFailureHandler"),"authentication.authenticate.failure",g,!1)},e.registerAuthenticationHandlers=function(e){r=e},e.authenticate=function(e){const t=void 0!==e,n=t?e:r;if(!n)throw new Error("No parameters are provided for authentication");return Tt(lt,be.content,be.sidePanel,be.settings,be.remove,be.task,be.stage,be.meetingStage),a(n.successCallback||n.failureCallback?o(zt,"authentication.authenticate"):o(qt,"authentication.authenticate"),n).then((e=>{try{return n&&n.successCallback?(n.successCallback(e),""):e}finally{t||(r=void 0)}})).catch((e=>{try{if(n&&n.failureCallback)return n.failureCallback(e.message),"";throw e}finally{t||(r=void 0)}}))},e.getAuthToken=function(e){return Pt(),s(e&&(e.successCallback||e.failureCallback)?o(zt,"authentication.getAuthToken"):o(qt,"authentication.getAuthToken"),e).then((t=>e&&e.successCallback?(e.successCallback(t),""):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),"";throw t}))},e.getUser=function(e){return Pt(),c(e&&(e.successCallback||e.failureCallback)?o(zt,"authentication.getUser"):o(qt,"authentication.getUser")).then((t=>e&&e.successCallback?(e.successCallback(t),null):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),null;throw t}))},e.notifySuccess=function(e,t){Tt(lt,be.authentication),yr(o(t?zt:qt,"authentication.notifySuccess"),"authentication.authenticate.success",[e]),$r(cr.parentWindow,(()=>setTimeout((()=>cr.currentWindow.close()),200)))},e.notifyFailure=function(e,t){Tt(lt,be.authentication),yr(o(t?zt:qt,"authentication.notifyFailure"),"authentication.authenticate.failure",[e]),$r(cr.parentWindow,(()=>setTimeout((()=>cr.currentWindow.close()),200)))},function(e){e.Public="public",e.EUDB="eudb",e.Other="other"}(i=e.DataResidency||(e.DataResidency={}))}(Gt||(Gt={}));const $t="v2";function Jt(e,t){if(Tt(lt,be.content,be.sidePanel,be.task,be.meetingStage),!Xt.update.isSupported())throw Fe;yr(e,"tasks.updateTask",[t])}function Kt(e,t,n,r){if(Tt(lt,be.content,be.sidePanel,be.meetingStage),!Xt.url.isSupported())throw Fe;r&&Nn(o($t,"dialog.url.registerMessageForParentHandler"),"messageForParent",r);yr(e,"tasks.startTask",[Xt.url.getDialogInfoFromUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),Hn("messageForParent")}))}function Zt(e,t,n,r){if(Tt(lt,be.content,be.sidePanel,be.meetingStage),!Xt.url.bot.isSupported())throw Fe;r&&Nn(o($t,"dialog.url.bot.registerMessageForParentHandler"),"messageForParent",r);yr(e,"tasks.startTask",[Xt.url.getDialogInfoFromBotUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),Hn("messageForParent")}))}function Qt(e,t,n){if(Tt(lt,be.content,be.task),!Xt.url.isSupported())throw Fe;yr(e,"tasks.completeTask",[t,n?Array.isArray(n)?n:[n]:[]])}var Xt;!function(e){const t=[];function n(e){C.frameContext&&(C.frameContext===be.task?t.push(e):Hn("messageForChild"))}let r,i,a;e.initialize=function(){Nn(o($t,"dialog.registerMessageForChildHandler"),"messageForChild",n,!1)},function(e){let n,r;function i(e){return{url:e.url,height:e.size?e.size.height:Ae.Small,width:e.size?e.size.width:Ae.Small,title:e.title,fallbackUrl:e.fallbackUrl}}e.open=function(e,t,n){Kt(o($t,"dialog.url.open"),e,t,n)},e.submit=function(e,t){Qt(o($t,"dialog.url.submit"),e,t)},function(e){function n(){var e,t;return Tt(lt)&&!!(null===(t=null===(e=lt.supports.dialog)||void 0===e?void 0:e.url)||void 0===t?void 0:t.parentCommunication)}e.sendMessageToParentFromDialog=function(e){if(Tt(lt,be.task),!n())throw Fe;yr(o($t,"dialog.url.parentCommunication.sendMessageToParentFromDialog"),"messageForParent",[e])},e.sendMessageToDialog=function(e){if(Tt(lt,be.content,be.sidePanel,be.meetingStage),!n())throw Fe;yr(o($t,"dialog.url.parentCommunication.sendMessageToDialog"),"messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(Tt(lt,be.task),!n())throw Fe;for(Hn("messageForChild"),Nn(o($t,"dialog.url.parentCommunication.registerMessageForChildHandler"),"messageForChild",e),t.reverse();t.length>0;){e(t.pop())}},e.isSupported=n}(n=e.parentCommunication||(e.parentCommunication={})),e.isSupported=function(){return Tt(lt)&&void 0!==(lt.supports.dialog&&lt.supports.dialog.url)},function(e){e.open=function(e,t,n){Zt(o($t,"dialog.url.bot.open"),e,t,n)},e.isSupported=function(){return Tt(lt)&&void 0!==(lt.supports.dialog&&lt.supports.dialog.url&&lt.supports.dialog.url.bot)}}(r=e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=i,e.getDialogInfoFromBotUrlDialogInfo=function(e){const t=i(e);return t.completionBotId=e.completionBotId,t}}(r=e.url||(e.url={})),e.isSupported=function(){return!(!Tt(lt)||!lt.supports.dialog)},function(e){e.resize=function(e){Jt(o($t,"dialog.update.resize"),e)},e.isSupported=function(){return!(!Tt(lt)||!lt.supports.dialog)&&!!lt.supports.dialog.update}}(i=e.update||(e.update={})),function(e){function t(){const e=lt.hostVersionsInfo&&lt.hostVersionsInfo.adaptiveCardSchemaVersion&&!je(lt.hostVersionsInfo.adaptiveCardSchemaVersion);return Tt(lt)&&void 0!==(e&&lt.supports.dialog&&lt.supports.dialog.card)}let n;function r(e){return{card:e.card,height:e.size?e.size.height:Ae.Small,width:e.size?e.size.width:Ae.Small,title:e.title}}function i(e){const t=r(e);return t.completionBotId=e.completionBotId,t}e.open=function(e,n){if(Tt(lt,be.content,be.sidePanel,be.meetingStage),!t())throw Fe;const i=r(e);yr(o($t,"dialog.adaptiveCard.open"),"tasks.startTask",[i],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t,function(e){function t(){const e=lt.hostVersionsInfo&&lt.hostVersionsInfo.adaptiveCardSchemaVersion&&!je(lt.hostVersionsInfo.adaptiveCardSchemaVersion);return Tt(lt)&&void 0!==(e&&lt.supports.dialog&&lt.supports.dialog.card&&lt.supports.dialog.card.bot)}e.open=function(e,n){if(Tt(lt,be.content,be.sidePanel,be.meetingStage),!t())throw Fe;const r=i(e);yr(o($t,"dialog.adaptiveCard.bot.open"),"tasks.startTask",[r],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t}(n=e.bot||(e.bot={}))}(a=e.adaptiveCard||(e.adaptiveCard={}))}(Xt||(Xt={}));const Yt="v2";var en;!function(e){let t,n,r,i,a;!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(t=e.DisplayMode||(e.DisplayMode={}));function s(e){a&&a(e)||(Tt(lt),yr(o(Yt,"menus.handleViewConfigItemPress"),"viewConfigItemPress",[e]))}function c(e){r&&r(e)||(Tt(lt),yr(o(Yt,"menus.handleNavBarMenuItemPress"),"handleNavBarMenuItemPress",[e]))}function l(e){i&&i(e)||(Tt(lt),yr(o(Yt,"menus.handleActionMenuItemPress"),"handleActionMenuItemPress",[e]))}function u(){return!(!Tt(lt)||!lt.supports.menus)}e.MenuItem=class{constructor(){this.enabled=!0,this.selected=!1}},function(e){e.dropDown="dropDown",e.popOver="popOver"}(n=e.MenuListType||(e.MenuListType={})),e.initialize=function(){Nn(o(Yt,"menus.registerNavBarMenuItemPressHandler"),"navBarMenuItemPress",c,!1),Nn(o(Yt,"menus.registerActionMenuItemPressHandler"),"actionMenuItemPress",l,!1),Nn(o(Yt,"menus.registerSetModuleViewHandler"),"setModuleView",s,!1)},e.setUpViews=function(e,t){if(Tt(lt),!u())throw Fe;a=t,yr(o(Yt,"menus.setUpViews"),"setUpViews",[e])},e.setNavBarMenu=function(e,t){if(Tt(lt),!u())throw Fe;r=t,yr(o(Yt,"menus.setNavBarMenu"),"setNavBarMenu",[e])},e.showActionMenu=function(e,t){if(Tt(lt),!u())throw Fe;i=t,yr(o(Yt,"menus.showActionMenu"),"showActionMenu",[e])},e.isSupported=u}(en||(en={}));const tn="v2",nn=5e3,rn=t("app");function on(e,t){if(Je()){return rn.extend("initialize")("window object undefined at initialization"),Promise.resolve()}return We((()=>dn(e,t)),nn,new Error("SDK initialization timed out."))}function an(e){yr(e,gn.Messages.AppLoaded,[bt])}function sn(e,t){yr(e,gn.Messages.ExpectedFailure,[t.reason,t.message])}function cn(e,t){yr(e,gn.Messages.Failure,[t.reason,t.message])}function ln(e){yr(e,gn.Messages.Success,[bt])}const un=rn.extend("initializeHelper");function dn(e,t){return new Promise((n=>{C.initializeCalled||(C.initializeCalled=!0,Mn(),C.initializePromise=ur(t,e).then((({context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:r=s})=>{C.frameContext=e,C.hostClientType=t,C.clientSupportedSDKVersion=r;try{un("Parsing %s",n);const e=JSON.parse(n);if(un("Checking if %o is a valid runtime object",null!=e?e:"null"),!e||!e.apiVersion)throw new Error("Received runtime config is invalid");n&&St(e)}catch(e){if(!(e instanceof SyntaxError))throw e;try{un("Attempting to parse %s as an SDK version",n),isNaN(De(n,s))||(C.clientSupportedSDKVersion=n);const e=JSON.parse(r);if(un("givenRuntimeConfig parsed to %o",null!=e?e:"null"),!e)throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");St(e)}catch(e){if(!(e instanceof SyntaxError))throw e;St(Ct(C.clientSupportedSDKVersion,ut,ht))}}C.initializeCompleted=!0})),Gt.initialize(),en.initialize(),Fn.config.initialize(),Xt.initialize()),Array.isArray(t)&&kt(t),void 0!==C.initializePromise?n(C.initializePromise):un("GlobalVars.initializePromise is unexpectedly undefined")}))}function fn(e,t){!Mt(t)&&Pt(),_n(e,t)}function pn(e,t){return new Promise((n=>{Tt(lt,be.content,be.sidePanel,be.settings,be.task,be.stage,be.meetingStage),n(pr(e,"executeDeepLink",t))}))}var gn;function mn(e){var t;return{actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:Se.teams,clientType:e.hostClientType?e.hostClientType:ye.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:C.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,isBackgroundLoad:e.isBackgroundLoad,sourceOrigin:e.sourceOrigin},user:{id:null!==(t=e.userObjectId)&&void 0!==t?t:"",displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0,dialogParameters:e.dialogParameters||{}}}!function(e){const n=t("app");let r,i,a;e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(r=e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(i=e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return C.initializeCompleted},e.getFrameContext=function(){return C.frameContext},function(){if(Je())return;const e=document.getElementsByTagName("script"),t=e&&e[e.length-1]&&e[e.length-1].src,r="Today, teamsjs can only be used from a single script or you may see undefined behavior. This log line is used to help detect cases where teamsjs is loaded multiple times -- it is always written. The presence of the log itself does not indicate a multi-load situation, but multiples of these log lines will. If you would like to use teamjs from more than one script at the same time, please open an issue at https://github.com/OfficeDev/microsoft-teams-library-js/issues";t&&0!==t.length?n("teamsjs is being used from %s. %s",t,r):n("teamsjs is being used from a script tag embedded directly in your html. %s",r)}(),e.initialize=function(e){return Nt(),on(o(tn,"app.initialize"),e)},e._initialize=function(e){cr.currentWindow=e},e._uninitialize=function(){C.initializeCalled&&(Un(),C.initializeCalled=!1,C.initializeCompleted=!1,C.initializePromise=void 0,C.additionalValidOrigins=[],C.frameContext=void 0,C.hostClientType=void 0,C.isFramelessWindow=!1,Bt.telemetry._clearTelemetryPort(),Bt.dataLayer._clearDataLayerPort(),dr())},e.getContext=function(){return new Promise((e=>{Pt(),e(fr(o(tn,"app.getContext"),"getContext"))})).then((e=>mn(e)))},e.notifyAppLoaded=function(){Pt(),an(o(tn,"app.notifyAppLoaded"))},e.notifySuccess=function(){Pt(),ln(o(tn,"app.notifySuccess"))},e.notifyFailure=function(e){Pt(),cn(o(tn,"app.notifyFailure"),e)},e.notifyExpectedFailure=function(e){Pt(),sn(o(tn,"app.notifyExpectedFailure"),e)},e.registerOnThemeChangeHandler=function(e){fn(o(tn,"app.registerOnThemeChangeHandler"),e)},e.openLink=function(e){return pn(o(tn,"app.openLink"),e)},function(e){e.registerBeforeSuspendOrTerminateHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerBeforeSuspendOrTerminateHandler] Handler cannot be null");Tt(lt),$n(e)},e.registerOnResumeHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerOnResumeHandler] Handler cannot be null");Tt(lt),Jn(e)}}(a=e.lifecycle||(e.lifecycle={}))}(gn||(gn={}));const hn="v2";function wn(e,t){return new Promise((n=>{if(Tt(lt,be.content,be.sidePanel,be.settings,be.remove,be.task,be.stage,be.meetingStage),!Fn.isSupported())throw Fe;n(gr(e,"navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",t))}))}function vn(e){return new Promise((t=>{if(Tt(lt),!Fn.backStack.isSupported())throw Fe;t(gr(e,"navigateBack","Back navigation is not supported in the current client or context."))}))}function Cn(e,t){return new Promise((n=>{if(Tt(lt),!Fn.tabs.isSupported())throw Fe;n(gr(e,"navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",t))}))}function yn(e,t){if(Tt(lt),!Fn.isSupported())throw Fe;yr(e,"returnFocus",[t])}function Sn(e,t){return new Promise((n=>{if(Tt(lt),!Fn.tabs.isSupported())throw Fe;n(fr(e,"getTabInstances",t))}))}function bn(e,t){return new Promise((n=>{if(Tt(lt),!Fn.tabs.isSupported())throw Fe;n(fr(e,"getMruTabInstances",t))}))}function En(e,t){if(Tt(lt,be.content,be.sidePanel,be.meetingStage),!Fn.isSupported())throw Fe;yr(e,"shareDeepLink",[t.subPageId,t.subPageLabel,t.subPageWebUrl])}function In(e,t){if(Tt(lt,be.content),!Fn.isSupported())throw Fe;yr(e,"setFrameContext",[t])}function An(e,t){if(Tt(lt,be.settings,be.remove),!Fn.config.isSupported())throw Fe;yr(e,"settings.setValidityState",[t])}function Pn(e){return new Promise((t=>{if(Tt(lt,be.content,be.settings,be.remove,be.sidePanel),!Fn.isSupported())throw Fe;t(fr(e,"settings.getSettings"))}))}function Tn(e,t){return new Promise((n=>{if(Tt(lt,be.content,be.settings,be.sidePanel),!Fn.config.isSupported())throw Fe;n(pr(e,"settings.setSettings",t))}))}var Fn;!function(e){function t(e){In(o(hn,"pages.setCurrentFrame"),e)}function n(){return!(!Tt(lt)||!lt.supports.pages)}let r,i,a,s,c,l;e.returnFocus=function(e){yn(o(hn,"pages.returnFocus"),e)},e.registerFocusEnterHandler=function(e){Vn(o(hn,"pages.registerFocusEnterHandler"),"focusEnter",e,[],(()=>{if(!n())throw Fe}))},e.setCurrentFrame=t,e.initializeWithFrameContext=function(e,n,r){Nt(),on(o(hn,"pages.initializeWithFrameContext"),r).then((()=>n&&n())),t(e)},e.getConfig=function(){return Pn(o(hn,"pages.getConfig."))},e.navigateCrossDomain=function(e){return wn(o(hn,"pages.navigateCrossDomain"),e)},e.navigateToApp=function(e){return new Promise((t=>{if(Tt(lt,be.content,be.sidePanel,be.settings,be.task,be.stage,be.meetingStage),!n())throw Fe;const r=o(hn,"pages.navigateToApp");lt.isLegacyTeams?t(pr(r,"executeDeepLink",Be(e))):t(pr(r,"pages.navigateToApp",e))}))},e.shareDeepLink=function(e){return En(o(hn,"pages.shareDeepLink"),e)},e.registerFullScreenHandler=function(e){Vn(o(hn,"pages.registerFullScreenHandler"),"fullScreenChange",e,[],(()=>{if(!Mt(e)&&!n())throw Fe}))},e.isSupported=n,function(e){e.navigateToTab=function(e){return Cn(o(hn,"pages.tabs.navigateToTab"),e)},e.getTabInstances=function(e){return Sn(o(hn,"pages.tabs.getTabInstances"),e)},e.getMruTabInstances=function(e){return bn(o(hn,"pages.tabs.getMruTabInstances"),e)},e.isSupported=function(){return!(!Tt(lt)||!lt.supports.pages)&&!!lt.supports.pages.tabs}}(r=e.tabs||(e.tabs={})),function(e){let t,n;function r(e,n,r){!Mt(n)&&Tt(lt,be.settings),r&&r(),t=n,!Mt(n)&&yr(e,"registerHandler",["save"])}function i(e,t,r){!Mt(t)&&Tt(lt,be.remove,be.settings),r&&r(),n=t,!Mt(t)&&yr(e,"registerHandler",["remove"])}function a(e){const n=new s(e);t?t(n):cr.childWindow?Kr("settings.save",[e]):n.notifySuccess()}e.initialize=function(){Nn(o(hn,"pages.config.registerSettingsSaveHandler"),"settings.save",a,!1),Nn(o(hn,"pages.config.registerSettingsRemoveHandler"),"settings.remove",c,!1)},e.setValidityState=function(e){return An(o(hn,"pages.config.setValidityState"),e)},e.setConfig=function(e){return Tn(o(hn,"pages.config.setConfig"),e)},e.registerOnSaveHandler=function(e){r(o(hn,"pages.config.registerOnSaveHandler"),e,(()=>{if(!Mt(e)&&!u())throw Fe}))},e.registerOnSaveHandlerHelper=r,e.registerOnRemoveHandler=function(e){i(o(hn,"pages.config.registerOnRemoveHandler"),e,(()=>{if(!Mt(e)&&!u())throw Fe}))},e.registerOnRemoveHandlerHelper=i,e.registerChangeConfigHandler=function(e){Vn(o(hn,"pages.config.registerChangeConfigHandler"),"changeSettings",e,[be.content],(()=>{if(!u())throw Fe}))};class s{constructor(e){this.notified=!1,this.result=e||{}}notifySuccess(){this.ensureNotNotified(),yr(o(hn,"pages.saveEvent.notifySuccess"),"settings.save.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),yr(o(hn,"pages.saveEvent.notifyFailure"),"settings.save.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")}}function c(){const e=new l;n?n(e):cr.childWindow?Kr("settings.remove",[]):e.notifySuccess()}class l{constructor(){this.notified=!1}notifySuccess(){this.ensureNotNotified(),yr(o(hn,"pages.removeEvent.notifySuccess"),"settings.remove.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),yr(o(hn,"pages.removeEvent.notifyFailure"),"settings.remove.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The removeEventType may only notify success or failure once.")}}function u(){return!(!Tt(lt)||!lt.supports.pages)&&!!lt.supports.pages.config}e.isSupported=u}(i=e.config||(e.config={})),function(e){let t;function n(){return vn(o(hn,"pages.backStack.navigateBack"))}function r(e,n,r){!Mt(n)&&Tt(lt),r&&r(),t=n,!Mt(n)&&yr(e,"registerHandler",["backButton"])}function i(){t&&t()||(cr.childWindow?Kr("backButtonPress",[]):n())}function a(){return!(!Tt(lt)||!lt.supports.pages)&&!!lt.supports.pages.backStack}e._initialize=function(){Nn(o(hn,"pages.backStack.registerBackButtonPressHandler"),"backButtonPress",i,!1)},e.navigateBack=n,e.registerBackButtonHandler=function(e){r(o(hn,"pages.backStack.registerBackButtonHandler"),e,(()=>{if(!Mt(e)&&!a())throw Fe}))},e.registerBackButtonHandlerHelper=r,e.isSupported=a}(a=e.backStack||(e.backStack={})),function(e){function t(){return!(!Tt(lt)||!lt.supports.pages)&&!!lt.supports.pages.fullTrust}e.enterFullscreen=function(){if(Tt(lt,be.content),!t())throw Fe;yr(o(hn,"pages.fullTrust.enterFullscreen"),"enterFullscreen",[])},e.exitFullscreen=function(){if(Tt(lt,be.content),!t())throw Fe;yr(o(hn,"pages.fullTrust.exitFullscreen"),"exitFullscreen",[])},e.isSupported=t}(s=e.fullTrust||(e.fullTrust={})),function(e){function t(){return!(!Tt(lt)||!lt.supports.pages)&&!!lt.supports.pages.appButton}e.onClick=function(e){Vn(o(hn,"pages.appButton.onClick"),"appButtonClick",e,[be.content],(()=>{if(!t())throw Fe}))},e.onHoverEnter=function(e){Vn(o(hn,"pages.appButton.onHoverEnter"),"appButtonHoverEnter",e,[be.content],(()=>{if(!t())throw Fe}))},e.onHoverLeave=function(e){Vn(o(hn,"pages.appButton.onHoverLeave"),"appButtonHoverLeave",e,[be.content],(()=>{if(!t())throw Fe}))},e.isSupported=t}(c=e.appButton||(e.appButton={})),function(e){function t(){return!(!Tt(lt)||!lt.supports.pages)&&!!lt.supports.pages.currentApp}e.navigateTo=function(e){return new Promise((n=>{if(Tt(lt,be.content,be.sidePanel,be.settings,be.task,be.stage,be.meetingStage),!t())throw Fe;n(mr(o(hn,"pages.currentApp.navigateTo"),"pages.currentApp.navigateTo",e))}))},e.navigateToDefaultPage=function(){return new Promise((e=>{if(Tt(lt,be.content,be.sidePanel,be.settings,be.task,be.stage,be.meetingStage),!t())throw Fe;e(mr(o(hn,"pages.currentApp.navigateToDefaultPage"),"pages.currentApp.navigateToDefaultPage"))}))},e.isSupported=t}(l=e.currentApp||(e.currentApp={}))}(Fn||(Fn={}));var On=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Rn=t("handlers");class kn{static initializeHandlers(){kn.handlers.themeChange=Wn,kn.handlers.load=jn,kn.handlers.beforeUnload=Gn,Fn.backStack._initialize()}static uninitializeHandlers(){kn.handlers={},kn.themeChangeHandler=null,kn.loadHandler=null,kn.beforeUnloadHandler=null,kn.beforeSuspendOrTerminateHandler=null,kn.resumeHandler=null}}function Mn(){kn.initializeHandlers()}function Un(){kn.uninitializeHandlers()}kn.handlers={},kn.themeChangeHandler=null,kn.loadHandler=null,kn.beforeUnloadHandler=null,kn.beforeSuspendOrTerminateHandler=null,kn.resumeHandler=null;const Ln=Rn.extend("callHandler");function Dn(e,t){const n=kn.handlers[e];if(n){Ln("Invoking the registered handler for message %s with arguments %o",e,t);return[!0,n.apply(this,t)]}return cr.childWindow?(Kr(e,t),[!1,void 0]):(Ln("Handler for action message %s not found.",e),[!1,void 0])}function Nn(e,t,n,r=!0,o=[]){n?(kn.handlers[t]=n,r&&yr(e,"registerHandler",[t,...o])):delete kn.handlers[t]}function Hn(e){delete kn.handlers[e]}function xn(e){return null!=kn.handlers[e]}function Vn(e,t,n,r,o){n&&Tt(lt,...r),o&&o(),Nn(e,t,n)}function _n(e,t){kn.themeChangeHandler=t,!Mt(t)&&yr(e,"registerHandler",["themeChange"])}function Wn(e){kn.themeChangeHandler&&kn.themeChangeHandler(e),cr.childWindow&&Kr("themeChange",[e])}function Bn(e,t){kn.loadHandler=t,!Mt(t)&&yr(e,"registerHandler",["load"])}function jn(e){const t=zn(e);kn.resumeHandler?(kn.resumeHandler(t),cr.childWindow&&Kr("load",[t])):kn.loadHandler&&(kn.loadHandler(e),cr.childWindow&&Kr("load",[e]))}function zn(e){return{entityId:e.entityId,contentUrl:new URL(e.contentUrl)}}function qn(e,t){kn.beforeUnloadHandler=t,!Mt(t)&&yr(e,"registerHandler",["beforeUnload"])}function Gn(){return On(this,void 0,void 0,(function*(){const e=()=>{yr(o("v2","handleBeforeUnload"),"readyToUnload",[])};kn.beforeSuspendOrTerminateHandler?(yield kn.beforeSuspendOrTerminateHandler(),cr.childWindow?Kr("beforeUnload"):e()):kn.beforeUnloadHandler&&kn.beforeUnloadHandler(e)||(cr.childWindow?Kr("beforeUnload"):e())}))}function $n(e){kn.beforeSuspendOrTerminateHandler=e,!Mt(e)&&yr(o("v2","registerBeforeSuspendOrTerminateHandler"),"registerHandler",["beforeUnload"])}function Jn(e){kn.resumeHandler=e,!Mt(e)&&yr(o("v2","registerOnResumeHandler"),"registerHandler",["load"])}class Kn{constructor(e=Ne()){this.uuid=e,nt(e)}toString(){return this.uuid}}var Zn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Qn=e=>{const{uuid:t}=e,n=Zn(e,["uuid"]),r=null==t?void 0:t.toString();return Object.assign(Object.assign({},n),{uuidAsString:r})},Xn=e=>{const{uuidAsString:t}=e,n=Zn(e,["uuidAsString"]);return Object.assign(Object.assign({},n),{uuid:t?new Kn(t):void 0})},Yn=e=>{const{uuidAsString:t}=e,n=Zn(e,["uuidAsString"]);return Object.assign(Object.assign({},n),{uuid:t?new Kn(t):void 0})},er=e=>{const{uuid:t}=e,n=Zn(e,["uuid"]),r=null==t?void 0:t.toString();return Object.assign(Object.assign({},n),{uuidAsString:r})},tr=t("nestedAppAuthUtils"),nr=tr.extend("tryPolyfillWithNestedAppAuthBridge");function rr(e,t,n){var r;const o=nr;if(C.isFramelessWindow)return void o("Cannot polyfill nestedAppAuthBridge as current window is frameless");if(!t)return void o("Cannot polyfill nestedAppAuthBridge as current window does not exist");const i=(()=>{try{return JSON.parse(e)}catch(e){return null}})();if(!i||!(null===(r=i.supports)||void 0===r?void 0:r.nestedAppAuth))return void o("Cannot polyfill nestedAppAuthBridge as current hub does not support nested app auth");const a=t;if(a.nestedAppAuthBridge)return void o("nestedAppAuthBridge already exists on current window, skipping polyfill");const s=ir(a,n);s&&(a.nestedAppAuthBridge=s)}const or=tr.extend("createNestedAppAuthBridge");function ir(e,t){const n=or;if(!e)return n("nestedAppAuthBridge cannot be created as current window does not exist"),null;const{onMessage:r,sendPostMessage:o}=t,i=e=>t=>r(t,e);return{addEventListener:(t,r)=>{"message"===t?e.addEventListener(t,i(r)):n(`Event ${t} is not supported by nestedAppAuthBridge`)},postMessage:e=>{const t=(()=>{try{return JSON.parse(e)}catch(e){return null}})();t&&"object"==typeof t&&"NestedAppAuthRequest"===t.messageType?o(e):n("Unrecognized data format received by app, message being ignored. Message: %o",e)},removeEventListener:(t,n)=>{e.removeEventListener(t,i(n))}}}var ar=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const sr=t("communication");class cr{}class lr{}function ur(e,t){if(lr.messageListener=e=>ar(this,void 0,void 0,(function*(){return yield Fr(e)})),cr.currentWindow=cr.currentWindow||$e(),cr.parentWindow=cr.currentWindow.parent!==cr.currentWindow.self?cr.currentWindow.parent:cr.currentWindow.opener,cr.topWindow=cr.currentWindow.top,(cr.parentWindow||e)&&cr.currentWindow.addEventListener("message",lr.messageListener,!1),!cr.parentWindow){const e=cr.currentWindow;if(!e.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));C.isFramelessWindow=!0,e.onNativeMessage=xr}try{return cr.parentOrigin="*",hr(t,"initialize",[bt,it,e]).then((([e,t,n,r])=>(rr(r,cr.currentWindow,{onMessage:Rr,sendPostMessage:br}),{context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:r})))}finally{cr.parentOrigin=null}}function dr(){cr.currentWindow&&cr.currentWindow.removeEventListener("message",lr.messageListener,!1),cr.currentWindow=null,cr.parentWindow=null,cr.parentOrigin=null,cr.childWindow=null,cr.childOrigin=null,lr.parentMessageQueue=[],lr.childMessageQueue=[],lr.nextMessageId=0,lr.callbacks.clear(),lr.promiseCallbacks.clear(),lr.portCallbacks.clear(),lr.legacyMessageIdsToUuidMap={}}function fr(e,t,...n){return hr(e,t,n).then((([e])=>e))}function pr(e,t,...n){return hr(e,t,n).then((([e,t])=>{if(!e)throw new Error(t)}))}function gr(e,t,n,...r){return hr(e,t,r).then((([e,t])=>{if(!e)throw new Error(t||n)}))}function mr(e,t,...n){return hr(e,t,n).then((([e,t])=>{if(e)throw e;return t}))}function hr(e,t,n=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return new Promise((r=>{r(Cr(Pr(e,t,n).uuid))}))}function wr(e,t,n=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return vr(Pr(e,t,n).uuid)}function vr(e){return new Promise(((t,n)=>{lr.portCallbacks.set(e,((e,r)=>{e instanceof MessagePort?t(e):n(r&&r.length>0?r[0]:new Error("Host responded without port or error details."))}))}))}function Cr(e){return new Promise((t=>{lr.promiseCallbacks.set(e,t)}))}function yr(e,t,n,r){let o;if(n instanceof Function?r=n:n instanceof Array&&(o=n),!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);const a=Pr(e,t,o);r&&lr.callbacks.set(a.uuid,r)}lr.parentMessageQueue=[],lr.childMessageQueue=[],lr.topMessageQueue=[],lr.nextMessageId=0,lr.callbacks=new Map,lr.promiseCallbacks=new Map,lr.portCallbacks=new Map,lr.legacyMessageIdsToUuidMap={};const Sr=sr.extend("sendNestedAuthRequestToTopWindow");function br(e){const t=Sr,n=cr.topWindow,r=Qr(e);return t("Message %i information: %o",r.uuid,{actionName:r.func}),Ir(n,r)}const Er=sr.extend("sendRequestToTargetWindowHelper");function Ir(e,t){const n=Er,r=zr(e),o=Qn(t);if(C.isFramelessWindow)cr.currentWindow&&cr.currentWindow.nativeInterface&&(n(`Sending message %i to ${r} via framelessPostMessage interface`,o.uuidAsString),cr.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(o)));else{const i=jr(e);e&&i?(n(`Sending message %i to ${r} via postMessage`,o.uuidAsString),e.postMessage(o,i)):(n(`Adding message %i to ${r} message queue`,o.uuidAsString),Br(e).push(t))}return t}const Ar=sr.extend("sendMessageToParentHelper");function Pr(e,t,n){const r=Ar,o=cr.parentWindow,i=Zr(e,t,n);return r("Message %i information: %o",i.uuid,{actionName:t,args:n}),Ir(o,i)}const Tr=sr.extend("processMessage");function Fr(e){return ar(this,void 0,void 0,(function*(){if(!e||!e.data||"object"!=typeof e.data)return void Tr("Unrecognized message format received by app, message being ignored. Message: %o",e);const t=e.source||e.originalEvent&&e.originalEvent.source,n=e.origin||e.originalEvent&&e.originalEvent.origin;return Mr(t,n).then((r=>{r?(Ur(t,n),t===cr.parentWindow?xr(e):t===cr.childWindow&&_r(e)):Tr("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin")}))}))}const Or=sr.extend("processAuthBridgeMessage");function Rr(e,t){var n,r;const o=Or;if(!e||!e.data||"object"!=typeof e.data)return void o("Unrecognized message format received by app, message being ignored. Message: %o",e);const{args:i}=e.data,[,a]=null!=i?i:[],s=(()=>{try{return JSON.parse(a)}catch(e){return null}})();if(!s||"object"!=typeof s||"NestedAppAuthResponse"!==s.messageType)return void o("Unrecognized data format received by app, message being ignored. Message: %o",e);const c=e.source||(null===(n=null==e?void 0:e.originalEvent)||void 0===n?void 0:n.source),l=e.origin||(null===(r=null==e?void 0:e.originalEvent)||void 0===r?void 0:r.origin);c?Mr(c,l)?(cr.topWindow&&!cr.topWindow.closed&&c!==cr.topWindow||(cr.topWindow=c,cr.topOrigin=l),cr.topWindow&&cr.topWindow.closed&&(cr.topWindow=null,cr.topOrigin=null),Gr(cr.topWindow),t(a)):o("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin"):o("Message being ignored by app because it is coming for a target that is null")}const kr=sr.extend("shouldProcessMessage");function Mr(e,t){return ar(this,void 0,void 0,(function*(){if(cr.currentWindow&&e===cr.currentWindow)return kr("Should not process message because it is coming from the current window"),!1;if(cr.currentWindow&&cr.currentWindow.location&&t&&t===cr.currentWindow.location.origin)return!0;{const e=yield Wt(new URL(t));return e||kr("Message has an invalid origin of %s",t),e}}))}function Ur(e,t){C.isFramelessWindow||cr.parentWindow&&!cr.parentWindow.closed&&e!==cr.parentWindow?cr.childWindow&&!cr.childWindow.closed&&e!==cr.childWindow||(cr.childWindow=e,cr.childOrigin=t):(cr.parentWindow=e,cr.parentOrigin=t),cr.parentWindow&&cr.parentWindow.closed&&(cr.parentWindow=null,cr.parentOrigin=null),cr.childWindow&&cr.childWindow.closed&&(cr.childWindow=null,cr.childOrigin=null),Gr(cr.parentWindow),Gr(cr.childWindow)}const Lr=sr.extend("handleParentMessage");function Dr(e){var t;const n=Lr;if(!e.uuid)return lr.legacyMessageIdsToUuidMap[e.id];{const t=e.uuid,n=Nr(lr.callbacks,t);if(n)return n;const r=Nr(lr.promiseCallbacks,t);if(r)return r;const o=Nr(lr.portCallbacks,t);if(o)return o}n(`Received a message with uuid: ${null===(t=e.uuid)||void 0===t?void 0:t.toString()} and legacyId: %i that failed to produce a callbackId`,e.id)}function Nr(e,t){if(t){const n=[...e].find((([e,n])=>e.toString()===t.toString()));if(n)return n[0]}}function Hr(e,t){const n=Nr(t,e.uuid);n&&t.delete(n),e.uuid?lr.legacyMessageIdsToUuidMap={}:delete lr.legacyMessageIdsToUuidMap[e.id]}function xr(e){const t=Lr;if("id"in e.data&&"number"==typeof e.data.id){const n=e.data,r=Yn(n),o=Dr(r);if(o){const n=lr.callbacks.get(o);t("Received a response from parent for message %i",o),n&&(t("Invoking the registered callback for message %i with arguments %o",o,r.args),n.apply(null,[...r.args,r.isPartialResponse]),Vr(e)||(t("Removing registered callback for message %i",o),Hr(r,lr.callbacks)));const i=lr.promiseCallbacks.get(o);i&&(t("Invoking the registered promise callback for message %i with arguments %o",o,r.args),i(r.args),t("Removing registered promise callback for message %i",o),Hr(r,lr.promiseCallbacks));const a=lr.portCallbacks.get(o);if(a){let n;t("Invoking the registered port callback for message %i with arguments %o",o,r.args),e.ports&&e.ports[0]instanceof MessagePort&&(n=e.ports[0]),a(n,r.args),t("Removing registered port callback for message %i",o),Hr(r,lr.portCallbacks)}r.uuid&&(lr.legacyMessageIdsToUuidMap={})}}else if("func"in e.data&&"string"==typeof e.data.func){const n=e.data;t("Received an action message %s from parent",n.func),Dn(n.func,n.args)}else t("Received an unknown message: %O",e)}function Vr(e){return!0===e.data.isPartialResponse}function _r(e){if("id"in e.data&&"func"in e.data){const t=Xn(e.data),[n,r]=Dn(t.func,t.args);n&&void 0!==r?Jr(t.id,t.uuid,Array.isArray(r)?r:[r]):yr(o("v2","tasks.startTask"),t.func,t.args,((...e)=>{if(cr.childWindow){const n=e.pop();Jr(t.id,t.uuid,e,n)}}))}}function Wr(){return cr.topWindow!==cr.parentWindow}function Br(e){return e===cr.topWindow&&Wr()?lr.topMessageQueue:e===cr.parentWindow?lr.parentMessageQueue:e===cr.childWindow?lr.childMessageQueue:[]}function jr(e){return e===cr.topWindow&&Wr()?cr.topOrigin:e===cr.parentWindow?cr.parentOrigin:e===cr.childWindow?cr.childOrigin:null}function zr(e){return e===cr.topWindow&&Wr()?"top":e===cr.parentWindow?"parent":e===cr.childWindow?"child":null}const qr=sr.extend("flushMessageQueue");function Gr(e){const t=jr(e),n=Br(e),r=zr(e);for(;e&&t&&n.length>0;){const o=n.shift();if(o){const n=Qn(o);qr("Flushing message %i from "+r+" message queue via postMessage.",null==n?void 0:n.uuidAsString),e.postMessage(n,t)}}}function $r(e,t){let n;n=cr.currentWindow.setInterval((()=>{0===Br(e).length&&(clearInterval(n),t())}),100)}function Jr(e,t,n,r){const o=cr.childWindow,i=Xr(e,t,n,r),a=er(i),s=jr(o);o&&s&&o.postMessage(a,s)}function Kr(e,t){const n=cr.childWindow,r=Yr(e,t),o=jr(n);n&&o?n.postMessage(r,o):Br(n).push(r)}function Zr(e,t,n){const r=lr.nextMessageId++,o=new Kn;return lr.legacyMessageIdsToUuidMap[r]=o,{id:r,uuid:o,func:t,timestamp:Date.now(),args:n||[],apiVersionTag:e}}function Qr(e){const t=lr.nextMessageId++,n=new Kn;return lr.legacyMessageIdsToUuidMap[t]=n,{id:t,uuid:n,func:"nestedAppAuth.execute",timestamp:Date.now(),args:[],data:e}}function Xr(e,t,n,r){return{id:e,uuid:t,args:n||[],isPartialResponse:r}}function Yr(e,t){return{func:e,args:t||[]}}var eo,to,no,ro;!function(e){function t(){return!(!Tt(lt)||!lt.supports.logs)}e.registerGetLogHandler=function(e){if(!Mt(e)&&Tt(lt),!Mt(e)&&!t())throw Fe;e?Nn(o("v1","log.request"),"log.request",(()=>{const t=e();yr(o("v1","log.receive"),"log.receive",[t])})):Hn("log.request")},e.isSupported=t}(eo||(eo={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(to||(to={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(no||(no={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(ro||(ro={}));const oo="v1";function io(e,t){Tt(lt),yr(o(oo,"uploadCustomApp"),"uploadCustomApp",[e],t||Le())}function ao(e,t,n){Tt(lt),yr(o(oo,"sendCustomMessage"),e,t,n)}function so(e,t){if(Tt(lt),!cr.childWindow)throw new Error("The child window has not yet been initialized or is not present");Kr(e,t)}function co(e,t){Tt(lt),Nn(o(oo,"registerCustomHandler"),e,((...e)=>t.apply(this,e)))}function lo(e,t){Tt(lt),Nn(o(oo,"registerUserSettingsChangeHandler"),"userSettingsChange",t,!0,[e])}function uo(e){Tt(lt,be.content,be.task);const t=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId,e.sizeInBytes];yr(o(oo,"openFilePreview"),"openFilePreview",t)}const fo="v1";var po;!function(e){function t(){return!(!Tt(lt)||!lt.supports.conversations)}e.openConversation=function(e){return new Promise((n=>{if(Tt(lt,be.content),!t())throw Fe;const r=pr(o(fo,"conversations.openConversation"),"conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&Nn(o(fo,"conversations.registerStartConversationHandler"),"startConversation",((t,n,r,o)=>{var i;return null===(i=e.onStartConversation)||void 0===i?void 0:i.call(e,{subEntityId:t,conversationId:n,channelId:r,entityId:o})})),e.onCloseConversation&&Nn(o(fo,"conversations.registerCloseConversationHandler"),"closeConversation",((t,n,r,o)=>{var i;return null===(i=e.onCloseConversation)||void 0===i?void 0:i.call(e,{subEntityId:t,conversationId:n,channelId:r,entityId:o})})),n(r)}))},e.closeConversation=function(){if(Tt(lt,be.content),!t())throw Fe;yr(o(fo,"conversations.closeConversation"),"conversations.closeConversation"),Hn("startConversation"),Hn("closeConversation")},e.getChatMembers=function(){return new Promise((e=>{if(Tt(lt),!t())throw Fe;e(fr(o(fo,"conversations.getChatMember"),"getChatMembers"))}))},e.isSupported=t}(po||(po={}));const go="v2";var mo;!function(e){const t="Action.Execute";let n,r,i;function a(e){if(e.requestType===n.ActionExecuteInvokeRequest){const n=e;if(n.type!==t){throw{errorCode:i.INTERNAL_ERROR,message:`Invalid action type ${n.type}. Action type must be "${t}"`}}}else if(e.requestType===n.QueryMessageExtensionRequest){if(e.commandId.length>64)throw new Error("originalRequestInfo.commandId exceeds the maximum size of 64 characters");if(e.parameters.length>5)throw new Error("originalRequestInfo.parameters exceeds the maximum size of 5");for(const t of e.parameters){if(t.name.length>64)throw new Error("originalRequestInfo.parameters.name exceeds the maximum size of 64 characters");if(t.value.length>512)throw new Error("originalRequestInfo.parameters.value exceeds the maximum size of 512 characters")}}}function s(){return!(!Tt(lt)||!lt.supports.externalAppAuthentication)}!function(e){e.ActionExecuteInvokeRequest="ActionExecuteInvokeRequest",e.QueryMessageExtensionRequest="QueryMessageExtensionRequest"}(n=e.OriginalRequestType||(e.OriginalRequestType={})),function(e){e.ActionExecuteInvokeResponse="ActionExecuteInvokeResponse",e.QueryMessageExtensionResponse="QueryMessageExtensionResponse"}(r=e.InvokeResponseType||(e.InvokeResponseType={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR"}(i=e.InvokeErrorCode||(e.InvokeErrorCode={})),e.authenticateAndResendRequest=function(e,t,n){if(Tt(lt,be.content),!s())throw Fe;return Ke(e,new Error("App id is not valid.")),a(n),hr(o(go,"externalAppAuthentication.authenticateAndResendRequest"),"externalAppAuthentication.authenticateAndResendRequest",[e,n,t.url.href,t.width,t.height,t.isExternal]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithSSO=function(e,t){if(Tt(lt,be.content),!s())throw Fe;return Ke(e,new Error("App id is not valid.")),hr(o(go,"externalAppAuthentication.authenticateWithSSO"),"externalAppAuthentication.authenticateWithSSO",[e,t.claims,t.silent]).then((([e,t])=>{if(!e)throw t}))},e.authenticateWithSSOAndResendRequest=function(e,t,n){if(Tt(lt,be.content),!s())throw Fe;return Ke(e,new Error("App id is not valid.")),a(n),hr(o(go,"externalAppAuthentication.authenticateWithSSOAndResendRequest"),"externalAppAuthentication.authenticateWithSSOAndResendRequest",[e,n,t.claims,t.silent]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithOauth2=function(e,t,n){if(Tt(lt,be.content),!s())throw Fe;return Ke(e,new Error("titleId is Invalid.")),Ke(t,new Error("oauthConfigId is Invalid.")),hr(o(go,"externalAppAuthentication.authenticateWithOauth2"),"externalAppAuthentication.authenticateWithOauth2",[e,t,n.width,n.height,n.isExternal]).then((([e,t])=>{if(!e)throw t}))},e.authenticateWithPowerPlatformConnectorPlugins=function(e,t,n){if(Tt(lt,be.content),!s())throw Fe;return Ke(e,new Error("titleId is Invalid.")),t&&Ze(t),hr(o(go,"externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins"),"externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins",[e,null==t?void 0:t.toString(),null==n?void 0:n.width,null==n?void 0:n.height,null==n?void 0:n.isExternal]).then((([e,t])=>{if(!e)throw t}))},e.isSupported=s}(mo||(mo={}));var ho;!function(e){let t,n;function r(){return!(!Tt(lt)||!lt.supports.externalAppCardActions)}!function(e){e.DeepLinkDialog="DeepLinkDialog",e.DeepLinkOther="DeepLinkOther",e.DeepLinkStageView="DeepLinkStageView",e.GenericUrl="GenericUrl"}(t=e.ActionOpenUrlType||(e.ActionOpenUrlType={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR",e.INVALID_LINK="INVALID_LINK",e.NOT_SUPPORTED="NOT_SUPPORTED"}(n=e.ActionOpenUrlErrorCode||(e.ActionOpenUrlErrorCode={})),e.processActionSubmit=function(e,t){if(Tt(lt,be.content),!r())throw Fe;return Ke(e,new Error("App id is not valid.")),hr(o("v2","externalAppCardActions.processActionSubmit"),"externalAppCardActions.processActionSubmit",[e,t]).then((([e,t])=>{if(!e)throw t}))},e.processActionOpenUrl=function(e,t,n){if(Tt(lt,be.content),!r())throw Fe;return Ke(e,new Error("App id is not valid.")),hr(o("v2","externalAppCardActions.processActionOpenUrl"),"externalAppCardActions.processActionOpenUrl",[e,t.href,n]).then((([e,t])=>{if(e)throw e;return t}))},e.isSupported=r}(ho||(ho={}));var wo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var vo;!function(e){function t(){return!(!Tt(lt)||!lt.supports.externalAppCommands)}e.processActionCommand=function(e,n,r){return wo(this,void 0,void 0,(function*(){if(Tt(lt,be.content),!t())throw Fe;Ke(e,new Error("App id is not valid."));const[i,a]=yield hr(o("v2","externalAppCommands.processActionCommand"),"externalAppCommands.processActionCommand",[e,n,r]);if(i)throw i;return a}))},e.isSupported=t}(vo||(vo={}));const Co="v1";var yo;!function(e){let t,n,r,i,a,s;function c(e,t){return{errorCode:e,message:t}}!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(t=e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(n=e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(e){e.ClassMaterials="classMaterials"}(r=e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})),function(e){e.Readonly="readonly"}(i=e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})),function(e){e.Downloaded="Downloaded",e.Downloading="Downloading",e.Failed="Failed"}(a=e.FileDownloadStatus||(e.FileDownloadStatus={})),function(e){e.Download="DOWNLOAD",e.Upload="UPLOAD",e.Delete="DELETE"}(s=e.CloudStorageProviderFileAction||(e.CloudStorageProviderFileAction={})),e.getCloudStorageFolders=function(e,t){if(Tt(lt,be.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");yr(o(Co,"files.getCloudStorageFolders"),"files.getCloudStorageFolders",[e],t)},e.addCloudStorageFolder=function(e,t){if(Tt(lt,be.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");yr(o(Co,"files.addCloudStorageFolder"),"files.addCloudStorageFolder",[e],t)},e.deleteCloudStorageFolder=function(e,t,n){if(Tt(lt,be.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");yr(o(Co,"files.deleteCloudStorageFolder"),"files.deleteCloudStorageFolder",[e,t],n)},e.getCloudStorageFolderContents=function(e,t,n){if(Tt(lt,be.content),!e||!t)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");yr(o(Co,"files.getCloudStorageFolderContents"),"files.getCloudStorageFolderContents",[e,t],n)},e.openCloudStorageFile=function(e,t,n){if(Tt(lt,be.content),!e||!t)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");yr(o(Co,"files.openCloudStorageFile"),"files.openCloudStorageFile",[e,t,n])},e.getExternalProviders=function(e=!1,t){if(Tt(lt,be.content),!t)throw new Error("[files.getExternalProviders] Callback cannot be null");yr(o(Co,"files.getExternalProviders"),"files.getExternalProviders",[e],t)},e.copyMoveFiles=function(e,t,n,r,i=!1,a){if(Tt(lt,be.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!a)throw new Error("[files.copyMoveFiles] callback cannot be null");yr(o(Co,"files.copyMoveFiles"),"files.copyMoveFiles",[e,t,n,r,i],a)},e.getFileDownloads=function(e){if(Tt(lt,be.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");yr(o(Co,"files.getFileDownloads"),"files.getFileDownloads",[],e)},e.openDownloadFolder=function(e=void 0,t){if(Tt(lt,be.content),!t)throw new Error("[files.openDownloadFolder] Callback cannot be null");yr(o(Co,"files.openDownloadFolder"),"files.openDownloadFolder",[e],t)},e.addCloudStorageProvider=function(e){if(Tt(lt,be.content),!e)throw c(we.INVALID_ARGUMENTS,"[files.addCloudStorageProvider] callback cannot be null");yr(o(Co,"files.addCloudStorageProvider"),"files.addCloudStorageProvider",[],e)},e.removeCloudStorageProvider=function(e,t){if(Tt(lt,be.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] callback cannot be null");if(!e||!e.content)throw c(we.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");yr(o(Co,"files.removeCloudStorageProvider"),"files.removeCloudStorageProvider",[e],t)},e.addCloudStorageProviderFile=function(e,t){if(Tt(lt,be.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw c(we.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");yr(o(Co,"files.addCloudStorageProviderFile"),"files.addCloudStorageProviderFile",[e],t)},e.renameCloudStorageProviderFile=function(e,t){if(Tt(lt,be.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw c(we.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");yr(o(Co,"files.renameCloudStorageProviderFile"),"files.renameCloudStorageProviderFile",[e],t)},e.deleteCloudStorageProviderFile=function(e,t){if(Tt(lt,be.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw c(we.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");yr(o(Co,"files.deleteCloudStorageProviderFile"),"files.deleteCloudStorageProviderFile",[e],t)},e.downloadCloudStorageProviderFile=function(e,t){if(Tt(lt,be.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw c(we.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");yr(o(Co,"files.downloadCloudStorageProviderFile"),"files.downloadCloudStorageProviderFile",[e],t)},e.uploadCloudStorageProviderFile=function(e,t){if(Tt(lt,be.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw c(we.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");if(!e.content.destinationFolder)throw c(we.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] Invalid destination folder details");yr(o(Co,"files.uploadCloudStorageProviderFile"),"files.uploadCloudStorageProviderFile",[e],t)},e.registerCloudStorageProviderListChangeHandler=function(e){if(Tt(lt),!e)throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");Nn(o(Co,"files.registerCloudStorageProviderListChangeHandler"),"files.cloudStorageProviderListChange",e)},e.registerCloudStorageProviderContentChangeHandler=function(e){if(Tt(lt),!e)throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");Nn(o(Co,"files.registerCloudStorageProviderContentChangeHandler"),"files.cloudStorageProviderContentChange",e)}}(yo||(yo={}));const So="v1";var bo;!function(e){function t(){return!(!Tt(lt)||!lt.supports.meetingRoom)}e.getPairedMeetingRoomInfo=function(){return new Promise((e=>{if(Tt(lt),!t())throw Fe;e(mr(o(So,"meetingRoom.getPairedMeetingRoomInfo"),"meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((n=>{if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(Tt(lt),!t())throw Fe;n(mr(o(So,"meetingRoom.sendCommandToPairedMeetingRoom"),"meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(Tt(lt),!t())throw Fe;Nn(o(So,"meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler"),"meetingRoom.meetingRoomCapabilitiesUpdate",(t=>{Tt(lt),e(t)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(Tt(lt),!t())throw Fe;Nn(o(So,"meetingRoom.registerMeetingRoomStatesUpdateHandler"),"meetingRoom.meetingRoomStatesUpdate",(t=>{Tt(lt),e(t)}))},e.isSupported=t}(bo||(bo={}));var Eo,Io;!function(e){function t(){return!(!Tt(lt)||!lt.supports.notifications)}e.showNotification=function(e){if(Tt(lt,be.content),!t())throw Fe;yr(o("v1","notifications.showNotification"),"notifications.showNotification",[e])},e.isSupported=t}(Eo||(Eo={})),function(e){function t(){return!(!Tt(lt)||!lt.supports.otherAppStateChange)}e.registerAppInstallationHandler=function(e){if(!t())throw new Error(we.NOT_SUPPORTED_ON_PLATFORM.toString());if(Mt(e))throw new Error(we.INVALID_ARGUMENTS.toString());Nn(o("v2","otherApp.install"),"otherApp.install",e)},e.unregisterAppInstallationHandler=function(){if(!t())throw new Error(we.NOT_SUPPORTED_ON_PLATFORM.toString());yr(o("v2","otherApp.unregisterInstall"),"otherApp.unregisterInstall"),Hn("otherApp.install")},e.isSupported=t}(Io||(Io={}));const Ao="v1";var Po;!function(e){let t,n,r;function i(){return!(!Tt(lt)||!lt.supports.remoteCamera)}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(t=e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(n=e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(r=e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;yr(o(Ao,"remoteCamera.getCapableParticipants"),"remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;yr(o(Ao,"remoteCamera.requestControl"),"remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;yr(o(Ao,"remoteCamera.sendControlCommand"),"remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;yr(o(Ao,"remoteCamera.terminateSession"),"remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;Nn(o(Ao,"remoteCamera.registerOnCapableParticipantsChangeHandler"),"remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;Nn(o(Ao,"remoteCamera.registerOnErrorHandler"),"remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;Nn(o(Ao,"remoteCamera.registerOnDeviceStateChangeHandler"),"remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(Tt(lt,be.sidePanel),!i())throw Fe;Nn(o(Ao,"remoteCamera.registerOnSessionStatusChangeHandler"),"remoteCamera.sessionStatusChange",e)},e.isSupported=i}(Po||(Po={}));var To;!function(e){function t(){return!(!Tt(lt)||!lt.supports.appEntity)}e.selectAppEntity=function(e,n,r,i){if(Tt(lt,be.content),!t())throw Fe;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!i)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");yr(o("v1","appEntity.selectAppEntity"),"appEntity.selectAppEntity",[e,n,r],i)},e.isSupported=t}(To||(To={}));const Fo="v1";var Oo;!function(e){let t,n;function r(){return!(!Tt(lt)||!lt.supports.teams)}!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(t=e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,t){if(Tt(lt,be.content),!r())throw Fe;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!t)throw new Error("[teams.getTeamChannels] Callback cannot be null");yr(o(Fo,"teams.getTeamChannels"),"teams.getTeamChannels",[e],t)},e.refreshSiteUrl=function(e,t){if(Tt(lt),!r())throw Fe;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!t)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");yr(o(Fo,"teams.refreshSiteUrl"),"teams.refreshSiteUrl",[e],t)},e.isSupported=r,function(e){let t;function n(){return!(!Tt(lt)||!lt.supports.teams)&&!!lt.supports.teams.fullTrust}!function(e){function t(){return!(!Tt(lt)||!lt.supports.teams)&&(!!lt.supports.teams.fullTrust&&!!lt.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((n=>{if(Tt(lt),!t())throw Fe;if((C.hostClientType===ye.android||C.hostClientType===ye.teamsRoomsAndroid||C.hostClientType===ye.teamsPhones||C.hostClientType===ye.teamsDisplays)&&!Ft("2.0.1")){const e={errorCode:we.OLD_PLATFORM};throw new Error(JSON.stringify(e))}n(fr(o(Fo,"teams.fullTrust.joinedTeams.getUserJoinedTeams"),"getUserJoinedTeams",e))}))},e.isSupported=t}(t=e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((t=>{if(Tt(lt),!n())throw Fe;t(fr(o(Fo,"teams.fullTrust.getConfigSetting"),"getConfigSetting",e))}))},e.isSupported=n}(n=e.fullTrust||(e.fullTrust={}))}(Oo||(Oo={}));class Ro{static setTimeout(e,t){const n=performance.now(),r=Ne();return Ro.setTimeoutCallbacks[r]={callback:e,timeoutInMs:t,startedAtInMs:n},r}static clearTimeout(e){delete Ro.setTimeoutCallbacks[e]}static setInterval(e,t){Ro.setTimeout((function n(){e(),Ro.setTimeout(n,t)}),t)}static tick(){const e=performance.now(),t=[];for(const n in Ro.setTimeoutCallbacks){const r=Ro.setTimeoutCallbacks[n];e-r.startedAtInMs>=r.timeoutInMs&&t.push(n)}for(const e of t){Ro.setTimeoutCallbacks[e].callback(),delete Ro.setTimeoutCallbacks[e]}}}Ro.setTimeoutCallbacks={};class ko{constructor(e,t){this.reportStatisticsResult=t,this.sampleCount=0,this.distributionBins=new Uint32Array(e)}processStarts(e,t,n,r){Ro.tick(),this.suitableForThisSession(e,t,n,r)||this.reportAndResetSession(this.getStatistics(),e,r,t,n),this.start()}processEnds(){const e=performance.now()-this.frameProcessingStartedAt,t=Math.floor(Math.max(0,Math.min(this.distributionBins.length-1,e)));this.distributionBins[t]+=1,this.sampleCount+=1}getStatistics(){return this.currentSession?{effectId:this.currentSession.effectId,effectParam:this.currentSession.effectParam,frameHeight:this.currentSession.frameHeight,frameWidth:this.currentSession.frameWidth,duration:performance.now()-this.currentSession.startedAtInMs,sampleCount:this.sampleCount,distributionBins:this.distributionBins.slice()}:null}start(){this.frameProcessingStartedAt=performance.now()}suitableForThisSession(e,t,n,r){return this.currentSession&&this.currentSession.effectId===e&&this.currentSession.effectParam===r&&this.currentSession.frameWidth===t&&this.currentSession.frameHeight===n}reportAndResetSession(e,t,n,r,o){e&&this.reportStatisticsResult(e),this.resetCurrentSession(this.getNextTimeout(t,this.currentSession),t,n,r,o),this.timeoutId&&Ro.clearTimeout(this.timeoutId),this.timeoutId=Ro.setTimeout((()=>this.reportAndResetSession(this.getStatistics(),t,n,r,o)).bind(this),this.currentSession.timeoutInMs)}resetCurrentSession(e,t,n,r,o){this.currentSession={startedAtInMs:performance.now(),timeoutInMs:e,effectId:t,effectParam:n,frameWidth:r,frameHeight:o},this.sampleCount=0,this.distributionBins.fill(0)}getNextTimeout(e,t){return t&&t.effectId===e?Math.min(ko.maxSessionTimeoutInMs,2*t.timeoutInMs):ko.initialSessionTimeoutInMs}}ko.initialSessionTimeoutInMs=1e3,ko.maxSessionTimeoutInMs=3e4;const Mo="v2";class Uo{constructor(e){this.reportPerformanceEvent=e,this.isFirstFrameProcessed=!1,this.frameProcessTimeLimit=100,this.frameProcessingStartedAt=0,this.frameProcessingTimeCost=0,this.processedFrameCount=0,this.performanceStatistics=new ko(Uo.distributionBinSize,(e=>this.reportPerformanceEvent(o(Mo,"videoPerformanceMonitor.performanceDataGenerated"),"video.performance.performanceDataGenerated",[e])))}startMonitorSlowFrameProcessing(){Ro.setInterval((()=>{if(0===this.processedFrameCount)return;const e=this.frameProcessingTimeCost/this.processedFrameCount;e>this.frameProcessTimeLimit&&this.reportPerformanceEvent(o(Mo,"videoPerformanceMonitor.startMonitorSlowFrameProcessing"),"video.performance.frameProcessingSlow",[e]),this.frameProcessingTimeCost=0,this.processedFrameCount=0}),Uo.calculateFPSInterval)}setFrameProcessTimeLimit(e){this.frameProcessTimeLimit=e}reportApplyingVideoEffect(e,t){var n,r;(null===(n=this.applyingEffect)||void 0===n?void 0:n.effectId)===e&&(null===(r=this.applyingEffect)||void 0===r?void 0:r.effectParam)===t||(this.applyingEffect={effectId:e,effectParam:t},this.appliedEffect=void 0)}reportVideoEffectChanged(e,t){void 0===this.applyingEffect||this.applyingEffect.effectId!==e&&this.applyingEffect.effectParam!==t||(this.appliedEffect={effectId:e,effectParam:t},this.applyingEffect=void 0,this.isFirstFrameProcessed=!1)}reportStartFrameProcessing(e,t){Ro.tick(),this.appliedEffect&&(this.frameProcessingStartedAt=performance.now(),this.performanceStatistics.processStarts(this.appliedEffect.effectId,e,t,this.appliedEffect.effectParam))}reportFrameProcessed(){var e;this.appliedEffect&&(this.processedFrameCount++,this.frameProcessingTimeCost+=performance.now()-this.frameProcessingStartedAt,this.performanceStatistics.processEnds(),this.isFirstFrameProcessed||(this.isFirstFrameProcessed=!0,this.reportPerformanceEvent(o(Mo,"videoPerformanceMonitor.reportFrameProcessed"),"video.performance.firstFrameProcessed",[Date.now(),this.appliedEffect.effectId,null===(e=this.appliedEffect)||void 0===e?void 0:e.effectParam])))}reportGettingTextureStream(e){this.gettingTextureStreamStartedAt=performance.now(),this.currentStreamId=e}reportTextureStreamAcquired(){if(void 0!==this.gettingTextureStreamStartedAt){const e=performance.now()-this.gettingTextureStreamStartedAt;this.reportPerformanceEvent(o(Mo,"videoPerformanceMonitor.reportTextureStreamAcquired"),"video.performance.textureStreamAcquired",[this.currentStreamId,e])}}}Uo.distributionBinSize=1e3,Uo.calculateFPSInterval=1e3;var Lo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))},Do=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const No="v2";var Ho;!function(e){const t=Je()?void 0:new Uo(yr);let n,r,i;function a(e){yr(o(No,"videoEffects.notifyVideoFrameProcessed"),"video.videoFrameProcessed",[e])}function s(e){yr(o(No,"videoEffects.notifyError"),"video.notifyError",[e])}function c(){return Tt(lt)&&!!lt.supports.video&&(!!lt.supports.video.mediaStream||!!lt.supports.video.sharedFrame)}function l(e,n){if(Tt(lt,be.sidePanel),!c()||!p())throw Fe;Nn(o(No,"videoEffects.startVideoExtensibilityVideoStreamHandler"),"video.startVideoExtensibilityVideoStream",(n=>Lo(this,void 0,void 0,(function*(){const{streamId:r}=n,o=u(e,t);yield _o(r,o,s,t)}))),!1),yr(o(No,"videoEffects.mediaStream.registerForVideoFrame"),"video.mediaStream.registerForVideoFrame",[n])}function u(e,t){return n=>Lo(this,void 0,void 0,(function*(){const r=n.videoFrame;null==t||t.reportStartFrameProcessing(r.codedWidth,r.codedHeight);const o=yield e(n);return null==t||t.reportFrameProcessed(),o}))}function d(e,n){if(Tt(lt,be.sidePanel),!c()||!m())throw Fe;Nn(o(No,"videoEffects.registerForVideoBufferHandler"),"video.newVideoFrame",(n=>{if(n){const r=n.timestamp;null==t||t.reportStartFrameProcessing(n.width,n.height),e(f(n),(()=>{null==t||t.reportFrameProcessed(),a(r)}),s)}}),!1),yr(o(No,"videoEffects.registerForVideoFrame"),"video.registerForVideoFrame",[n])}function f(e){if("videoFrameBuffer"in e)return e;{const{data:t}=e,n=Do(e,["data"]);return Object.assign(Object.assign({},n),{videoFrameBuffer:t})}}function p(){var e;return Tt(lt,be.sidePanel)&&g()&&!!(null===(e=lt.supports.video)||void 0===e?void 0:e.mediaStream)}function g(){var e,t,n,r;return!(!(null===(t=null===(e=$e().chrome)||void 0===e?void 0:e.webview)||void 0===t?void 0:t.getTextureStream)||!(null===(r=null===(n=$e().chrome)||void 0===n?void 0:n.webview)||void 0===r?void 0:r.registerTextureStream))}function m(){var e;return Tt(lt,be.sidePanel)&&!!(null===(e=lt.supports.video)||void 0===e?void 0:e.sharedFrame)}!function(e){e.NV12="NV12"}(n=e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e.EffectChanged="EffectChanged",e.EffectDisabled="EffectDisabled"}(r=e.EffectChangeType||(e.EffectChangeType={})),function(e){e.InvalidEffectId="InvalidEffectId",e.InitializationFailure="InitializationFailure"}(i=e.EffectFailureReason||(e.EffectFailureReason={})),e.registerForVideoFrame=function(e){if(Tt(lt,be.sidePanel),!c())throw Fe;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(Nn(o(No,"videoEffects.setFrameProcessTimeLimitHandler"),"video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e.timeLimit)),!1),p())l(e.videoFrameHandler,e.config);else{if(!m())throw Fe;d(e.videoBufferHandler,e.config)}null==t||t.startMonitorSlowFrameProcessing()},e.notifySelectedVideoEffectChanged=function(e,t){if(Tt(lt,be.sidePanel),!c())throw Fe;yr(o(No,"videoEffects.notifySelectedVideoEffectChanged"),"video.videoEffectChanged",[e,t])},e.registerForVideoEffect=function(e){if(Tt(lt,be.sidePanel),!c())throw Fe;Nn(o(No,"videoEffects.registerEffectParameterChangeHandler"),"video.effectParameterChange",Ko(e,t),!1),yr(o(No,"videoEffects.registerForVideoEffect"),"video.registerForVideoEffect")},e.isSupported=c}(Ho||(Ho={}));var xo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Vo="v2";function _o(e,t,n,r){var o,i;return xo(this,void 0,void 0,(function*(){const a=jo();!Je()&&(null===(i=null===(o=window.chrome)||void 0===o?void 0:o.webview)||void 0===i||i.registerTextureStream(e,a)),zo(yield Bo(e,n,r),new qo(n,t),a.writable)}))}function Wo(e,t,n,r){var o,i;return xo(this,void 0,void 0,(function*(){const a=jo();!Je()&&(null===(i=null===(o=window.chrome)||void 0===o?void 0:o.webview)||void 0===i||i.registerTextureStream(e,a)),zo(yield Bo(e,n,r),new Jo(n,t),a.writable)}))}function Bo(e,t,n){return xo(this,void 0,void 0,(function*(){if(Je())throw Fe;const r=$e().chrome;try{null==n||n.reportGettingTextureStream(e);const t=(yield r.webview.getTextureStream(e)).getVideoTracks();if(0===t.length)throw new Error(`No video track in stream ${e}`);return null==n||n.reportTextureStreamAcquired(),t[0]}catch(n){throw t(`Failed to get video track from stream ${e}, error: ${n}`),new Error(`Internal error: can't get video track from stream ${e}`)}}))}function jo(){if(Je())throw Fe;const e=window.MediaStreamTrackGenerator;if(!e)throw Fe;return new e({kind:"video"})}function zo(e,t,n){new(0,$e().MediaStreamTrackProcessor)({track:e}).readable.pipeThrough(new TransformStream(t)).pipeTo(n)}class qo{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.transform=(e,t)=>xo(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const r=yield this.videoFrameHandler({videoFrame:e}),o=new VideoFrame(r,{timestamp:n});t.enqueue(o),e.close(),r.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError("timestamp of the original video frame is null")}))}}class Go{constructor(e,t){if(this.headerBuffer=e,this.notifyError=t,this.ONE_TEXTURE_INPUT_ID=1869900081,this.INVALID_HEADER_ERROR="Invalid video frame header",this.UNSUPPORTED_LAYOUT_ERROR="Unsupported texture layout",this.headerDataView=new Uint32Array(e),this.headerDataView.length<8)throw this.notifyError(this.INVALID_HEADER_ERROR),new Error(this.INVALID_HEADER_ERROR);if(this.headerDataView[0]!==this.ONE_TEXTURE_INPUT_ID)throw this.notifyError(this.UNSUPPORTED_LAYOUT_ERROR),new Error(this.UNSUPPORTED_LAYOUT_ERROR)}get oneTextureLayoutId(){return this.headerDataView[0]}get version(){return this.headerDataView[1]}get frameRowOffset(){return this.headerDataView[2]}get frameFormat(){return this.headerDataView[3]}get frameWidth(){return this.headerDataView[4]}get frameHeight(){return this.headerDataView[5]}get multiStreamHeaderRowOffset(){return this.headerDataView[6]}get multiStreamCount(){return this.headerDataView[7]}}class $o{constructor(e,t){this.metadataMap=new Map,this.AUDIO_INFERENCE_RESULT_STREAM_ID=828664161;const n=new Uint32Array(e);for(let r=0,o=0;r<t;r++){const t=n[o++],r=n[o++],i=n[o++],a=new Uint8Array(e,r,i);this.metadataMap.set(t,a)}}get audioInferenceResult(){return this.metadataMap.get(this.AUDIO_INFERENCE_RESULT_STREAM_ID)}}class Jo{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.shouldDiscardAudioInferenceResult=!1,this.transform=(e,t)=>xo(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const{videoFrame:r,metadata:{audioInferenceResult:o}={}}=yield this.extractVideoFrameAndMetadata(e),i=yield this.videoFrameHandler({videoFrame:r,audioInferenceResult:o}),a=new VideoFrame(i,{timestamp:n});t.enqueue(a),r.close(),e.close(),i.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError("timestamp of the original video frame is null")})),this.extractVideoFrameAndMetadata=e=>xo(this,void 0,void 0,(function*(){if(Je())throw Fe;if("NV12"!==e.format)throw this.notifyError("Unsupported video frame pixel format"),new Error("Unsupported video frame pixel format");const t={x:0,y:0,width:e.codedWidth,height:2},n=new ArrayBuffer(t.width*t.height*3/2);yield e.copyTo(n,{rect:t});const r=new Go(n,this.notifyError),o={x:0,y:r.multiStreamHeaderRowOffset,width:e.codedWidth,height:e.codedHeight-r.multiStreamHeaderRowOffset},i=new ArrayBuffer(o.width*o.height*3/2);yield e.copyTo(i,{rect:o});const a=new $o(i,r.multiStreamCount);return{videoFrame:new VideoFrame(e,{timestamp:e.timestamp,visibleRect:{x:0,y:r.frameRowOffset,width:r.frameWidth,height:r.frameHeight}}),metadata:{audioInferenceResult:this.shouldDiscardAudioInferenceResult?void 0:a.audioInferenceResult}}})),Nn(o(Vo,"videoEffectsUtils.transformerWithMetadata.constructor"),"video.mediaStream.audioInferenceDiscardStatusChange",(({discardAudioInferenceResult:e})=>{this.shouldDiscardAudioInferenceResult=e}))}}function Ko(e,t){return(n,r)=>{null==t||t.reportApplyingVideoEffect(n||"",r),e(n,r).then((()=>{null==t||t.reportVideoEffectChanged(n||"",r),yr(o(Vo,"videoEffectsUtils.reportVideoEffectChanged"),"video.videoEffectReadiness",[!0,n,void 0,r])})).catch((e=>{const t=e in Ho.EffectFailureReason?e:Ho.EffectFailureReason.InitializationFailure;yr(o(Vo,"videoEffectsUtils.effectFailure"),"video.videoEffectReadiness",[!1,n,t,r])}))}}var Zo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Qo="v2";var Xo;!function(e){e.frameProcessingTimeoutInMs=2e3;const t=Je()?void 0:new Uo(yr);let n;function r(){const t=setTimeout((()=>{l(`Frame not processed in ${e.frameProcessingTimeoutInMs}ms`,n.Warn)}),e.frameProcessingTimeoutInMs);return function(){clearTimeout(t)}}function i(e,t){return n=>Zo(this,void 0,void 0,(function*(){const o=n.videoFrame;t.reportStartFrameProcessing(o.codedWidth,o.codedHeight);const i=r(),a=yield e(n);return i(),t.reportFrameProcessed(),a}))}function a(e){return e.videoFrameBuffer=e.videoFrameBuffer||e.data,delete e.data,e}function s(){return Tt(lt),Ho.isSupported()}function c(e){yr(o(Qo,"videoEffectsEx.notifyVideoFrameProcessed"),"video.videoFrameProcessed",[e])}function l(e,t=n.Warn){yr(o(Qo,"videoEffectsEx.notifyError"),"video.notifyError",[e,t])}!function(e){e.Fatal="fatal",e.Warn="warn"}(n=e.ErrorLevel||(e.ErrorLevel={})),e.registerForVideoFrame=function(e){var n,u;if(!s())throw Fe;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(Tt(lt,be.sidePanel)){if(Nn(o(Qo,"videoEffectsEX.registerSetFrameProcessTimeLimitHandler"),"video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e)),!1),null===(n=lt.supports.video)||void 0===n?void 0:n.mediaStream)Nn(o(Qo,"videoEffectsEX.registerStartVideoExtensibilityVideoStreamHandler"),"video.startVideoExtensibilityVideoStream",(n=>Zo(this,void 0,void 0,(function*(){const{streamId:r,metadataInTexture:o}=n,a=t?i(e.videoFrameHandler,t):e.videoFrameHandler;o?yield Wo(r,a,l,t):yield _o(r,a,l,t)}))),!1),yr(o(Qo,"videoEffectsEX.mediaStream.registerForVideoFrame"),"video.mediaStream.registerForVideoFrame",[e.config]);else{if(!(null===(u=lt.supports.video)||void 0===u?void 0:u.sharedFrame))throw Fe;Nn(o(Qo,"videoEffectsEx.registerNewVideoFrameHandler"),"video.newVideoFrame",(n=>{if(n){null==t||t.reportStartFrameProcessing(n.width,n.height);const o=r(),i=n.timestamp;e.videoBufferHandler(a(n),(()=>{o(),null==t||t.reportFrameProcessed(),c(i)}),l)}}),!1),yr(o(Qo,"videoEffectsEx.registerForVideoFrame"),"video.registerForVideoFrame",[e.config])}null==t||t.startMonitorSlowFrameProcessing()}},e.notifySelectedVideoEffectChanged=function(e,t,n){if(Tt(lt,be.sidePanel),!s())throw Fe;yr(o(Qo,"videoEffectsEx.notifySelectedVideoEffectChanged"),"video.videoEffectChanged",[e,t,n])},e.registerForVideoEffect=function(e){if(Tt(lt,be.sidePanel),!s())throw Fe;Nn(o(Qo,"videoEffectsEx.registerEffectParamterChangeHandler"),"video.effectParameterChange",Ko(e,t),!1),yr(o(Qo,"videoEffectsEx.registerForVideoEffect"),"video.registerForVideoEffect")},e.updatePersonalizedEffects=function(e){if(Tt(lt,be.sidePanel),!Ho.isSupported())throw Fe;yr(o(Qo,"videoEffectsEx.updatePersonalizedEffects"),"video.personalizedEffectsChanged",[e])},e.isSupported=s,e.notifyFatalError=function(e){if(Tt(lt),!Ho.isSupported())throw Fe;l(e,n.Fatal)}}(Xo||(Xo={}));const Yo="users";function ei(e,t,n){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");const r=`${Yo}=`+e.map((e=>encodeURIComponent(e))).join(","),o=void 0===t?"":`&topicName=${encodeURIComponent(t)}`,i=void 0===n?"":`&message=${encodeURIComponent(n)}`;return`${g}://${m}/l/chat/0/0?${r}${o}${i}`}function ti(e,t,n){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");const r=`${Yo}=`+e.map((e=>encodeURIComponent(e))).join(","),o=void 0===t?"":`&withVideo=${encodeURIComponent(t)}`,i=void 0===n?"":`&source=${encodeURIComponent(n)}`;return`${g}://${m}/l/call/0/0?${r}${o}${i}`}function ni(e,t,n,r,o){const i=void 0===e?"":"attendees="+e.map((e=>encodeURIComponent(e))).join(","),a=void 0===t?"":`&startTime=${encodeURIComponent(t)}`,s=void 0===n?"":`&endTime=${encodeURIComponent(n)}`,c=void 0===r?"":`&subject=${encodeURIComponent(r)}`,l=void 0===o?"":`&content=${encodeURIComponent(o)}`;return`${g}://${m}/l/meeting/new?${i}${a}${s}${c}${l}`}function ri(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return`${g}://${m}/l/app/${encodeURIComponent(e)}`}var oi;!function(e){function t(){return!(!Tt(lt)||!lt.supports.appInstallDialog)}e.openAppInstallDialog=function(e){return new Promise((n=>{if(Tt(lt,be.content,be.sidePanel,be.settings,be.task,be.stage,be.meetingStage),!t())throw new Error("Not supported");const r=o("v1","appInstallDialog.openAppInstallDialog");lt.isLegacyTeams?n(pr(r,"executeDeepLink",ri(e.appId))):(yr(r,"appInstallDialog.openAppInstallDialog",[e]),n())}))},e.isSupported=t}(oi||(oi={}));const ii="v1",ai=t("media");var si;function ci(e,t){if(null==e||null==t||e.length<=0)return null;let n=null,r=1;return e.sort(((e,t)=>e.sequence>t.sequence?1:-1)),e.forEach((e=>{e.sequence==r&&(n=n?new Blob([n,e.file],{type:t}):new Blob([e.file],{type:t}),r++)})),n}function li(e,t){if(null==e||null==t)return null;const n=atob(e.chunk),r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);const o=new Uint8Array(r),i=new Blob([o],{type:t});return{sequence:e.chunkSequence,file:i}}function ui(e){gi(e)?Rt("2.0.2"):mi(e)?Rt(c):pi(e)&&Rt("2.0.4")}function di(e){return!(e.mediaType!=si.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function fi(e){return!(null==e||e.maxMediaCount>10)}function pi(e){var t;return!((null==e?void 0:e.mediaType)!=si.MediaType.Image||!(null===(t=null==e?void 0:e.imageProps)||void 0===t?void 0:t.imageOutputFormats))}function gi(e){return!(!e||e.mediaType!=si.MediaType.VideoAndImage&&!e.videoAndImageProps)}function mi(e){return!(!e||e.mediaType!=si.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function hi(e,t,n){return null!=e&&null!=t&&t==si.FileFormat.ID&&null!=n}function wi(e){return!(null==e||e.length<=0||e.length>10)}function vi(e){return!e||!(null===e.timeOutIntervalInSec||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec<=0||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec>60)}function Ci(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){let t,n,r,i,a,s,l;!function(e){e.Base64="base64",e.ID="id"}(t=e.FileFormat||(e.FileFormat={}));class d{}function f(){return!(!Tt(lt)||!lt.supports.permissions)}e.File=d,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(Tt(lt,be.content,be.task),C.isFramelessWindow)if(Ft("1.7.0"))yr(o(ii,"media.captureImage"),"captureImage",e);else{e({errorCode:we.OLD_PLATFORM},[])}else{e({errorCode:we.NOT_SUPPORTED_ON_PLATFORM},[])}},e.hasPermission=function(){if(Tt(lt,be.content,be.task),!f())throw Fe;const e=ve.Media;return new Promise((t=>{t(mr(o(ii,"media.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(Tt(lt,be.content,be.task),!f())throw Fe;const e=ve.Media;return new Promise((t=>{t(mr(o(ii,"media.requestPermission"),"permissions.request",e))}))};class p extends d{constructor(e){super(),e&&(this.content=e.content,this.format=e.format,this.mimeType=e.mimeType,this.name=e.name,this.preview=e.preview,this.size=e.size)}getMedia(e){if(!e)throw new Error("[get Media] Callback cannot be null");if(Tt(lt,be.content,be.task),Ft(u))if(hi(this.mimeType,this.format,this.content))Ft("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e);else{e({errorCode:we.INVALID_ARGUMENTS},new Blob)}else{e({errorCode:we.OLD_PLATFORM},new Blob)}}getMediaViaCallback(e){const t={mediaMimeType:this.mimeType,assembleAttachment:[]},n=[this.content];yr(o(ii,"media.getMedia"),"getMedia",n,(function(n){if(e)if(n&&n.error)e(n.error,new Blob);else if(n&&n.mediaChunk)if(n.mediaChunk.chunkSequence<=0){const r=ci(t.assembleAttachment,t.mediaMimeType);e(n.error,null!=r?r:new Blob)}else{const e=li(n.mediaChunk,t.mediaMimeType);e?t.assembleAttachment.push(e):ai(`Received a null assemble attachment for when decoding chunk sequence ${n.mediaChunk.chunkSequence}; not including the chunk in the assembled file.`)}else e({errorCode:we.INTERNAL_ERROR,message:"data received is null"},new Blob)}))}getMediaViaHandler(e){const t=Ne(),n={mediaMimeType:this.mimeType,assembleAttachment:[]},r=[t,this.content];this.content&&!Mt(e)&&yr(o(ii,"media.getMedia"),"getMedia",r),Nn(o(ii,"media.registerGetMediaRequestHandler"),"getMedia"+t,(function(r){if(e){const o=JSON.parse(r);if(o.error)e(o.error,new Blob),Hn("getMedia"+t);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){const r=ci(n.assembleAttachment,n.mediaMimeType);e(o.error,null!=r?r:new Blob),Hn("getMedia"+t)}else{const e=li(o.mediaChunk,n.mediaMimeType);e&&n.assembleAttachment.push(e)}else e({errorCode:we.INTERNAL_ERROR,message:"data received is null"},new Blob),Hn("getMedia"+t)}}))}}e.Media=p;class g{constructor(e){this.controllerCallback=e}notifyEventToHost(e,t){Tt(lt,be.content,be.task);try{Rt(c)}catch(e){return void(t&&t(e))}const n={mediaType:this.getMediaType(),mediaControllerEvent:e};yr(o(ii,"media.controller"),"media.controller",[n],(e=>{t&&t(e)}))}stop(e){this.notifyEventToHost(n.StopRecording,e)}}e.VideoController=class extends g{getMediaType(){return a.Video}notifyEventToApp(e){if(this.controllerCallback)switch(e){case n.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}}},function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(n=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(r=e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(i=e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(a=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(s=e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(l=e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,t){if(!t)throw new Error("[select Media] Callback cannot be null");if(Tt(lt,be.content,be.task),!Ft(u)){const e={errorCode:we.OLD_PLATFORM};return void t(e,[])}try{ui(e)}catch(e){return void t(e,[])}if(!fi(e)){const e={errorCode:we.INVALID_ARGUMENTS};return void t(e,[])}const n=[e];yr(o(ii,"media.selectMedia"),"selectMedia",n,((n,r,o)=>{var i,a;if(o)return void(di(e)&&(null===(a=null===(i=null==e?void 0:e.videoProps)||void 0===i?void 0:i.videoController)||void 0===a||a.notifyEventToApp(o)));if(!r)return void t(n,[]);const s=[];for(const e of r)s.push(new p(e));t(n,s)}))},e.viewImages=function(e,t){if(!t)throw new Error("[view images] Callback cannot be null");if(Tt(lt,be.content,be.task),!Ft(u)){return void t({errorCode:we.OLD_PLATFORM})}if(!wi(e)){return void t({errorCode:we.INVALID_ARGUMENTS})}const n=[e];yr(o(ii,"media.viewImages"),"viewImages",n,t)},e.scanBarCode=function(e,t){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");if(Tt(lt,be.content,be.task),C.hostClientType!==ye.desktop&&C.hostClientType!==ye.web&&C.hostClientType!==ye.rigel&&C.hostClientType!==ye.teamsRoomsWindows&&C.hostClientType!==ye.teamsRoomsAndroid&&C.hostClientType!==ye.teamsPhones&&C.hostClientType!==ye.teamsDisplays)if(Ft("1.9.0"))if(vi(t))yr(o(ii,"media.scanBarCode"),"media.scanBarCode",[t],e);else{e({errorCode:we.INVALID_ARGUMENTS},"")}else{e({errorCode:we.OLD_PLATFORM},"")}else{e({errorCode:we.NOT_SUPPORTED_ON_PLATFORM},"")}}}(si||(si={}));const yi="v2";var Si;!function(e){function t(){return!!(Tt(lt)&&lt.supports.barCode&&lt.supports.permissions)}e.scanBarCode=function(e){return new Promise((n=>{if(Tt(lt,be.content,be.task),!t())throw Fe;if(!vi(e))throw{errorCode:we.INVALID_ARGUMENTS};n(mr(o(yi,"barCode.scanBarCode"),"media.scanBarCode",e))}))},e.hasPermission=function(){if(Tt(lt,be.content,be.task),!t())throw Fe;const e=ve.Media;return new Promise((t=>{t(mr(o(yi,"barCode.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(Tt(lt,be.content,be.task),!t())throw Fe;const e=ve.Media;return new Promise((t=>{t(mr(o(yi,"barCode.requestPermission"),"permissions.request",e))}))},e.isSupported=t}(Si||(Si={}));var bi;!function(e){function t(e,t){return new Promise((r=>{if(Tt(lt,be.content,be.task),!n())throw Fe;if(lt.isLegacyTeams)r(pr(e,"executeDeepLink",ei([t.user],void 0,t.message)));else{r(pr(e,"chat.openChat",{members:[t.user],message:t.message}))}}))}function n(){return!(!Tt(lt)||!lt.supports.chat)}e.openChat=function(e){return t(o("v2","chat.openChat"),e)},e.openGroupChat=function(e){const r=o("v2","chat.openGroupChat");return new Promise((o=>{if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){const n={user:e.users[0],message:e.message};o(t(r,n))}else{if(Tt(lt,be.content,be.task),!n())throw Fe;if(lt.isLegacyTeams)o(pr(r,"executeDeepLink",ei(e.users,e.topic,e.message)));else{o(pr(r,"chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}}))},e.isSupported=n}(bi||(bi={}));var Ei=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var Ii,Ai;!function(e){function t(){return!!(Tt(lt)&&navigator&&navigator.clipboard&&lt.supports.clipboard)}e.write=function(e){return Ei(this,void 0,void 0,(function*(){if(Tt(lt,be.content,be.meetingStage,be.task,be.settings,be.stage,be.sidePanel),!t())throw Fe;if(!e.type||!Object.values(Ce).includes(e.type))throw new Error(`Blob type ${e.type} is not supported. Supported blob types are ${Object.values(Ce)}`);const n=yield Ge(e),r={mimeType:e.type,content:n};return mr(o("v2","clipboard.write"),"clipboard.writeToClipboard",r)}))},e.read=function(){return Ei(this,void 0,void 0,(function*(){Tt(lt,be.content,be.meetingStage,be.task,be.settings,be.stage,be.sidePanel);const e=o("v2","clipboard.read");if(!t())throw Fe;const n=yield mr(e,"clipboard.readFromClipboard");if("string"==typeof n){const e=JSON.parse(n);return qe(e.mimeType,e.content)}return n}))},e.isSupported=t}(Ii||(Ii={})),function(e){e.isNAAChannelRecommended=function(){var e;return null!==(e=Tt(lt)&&lt.isNAAChannelRecommended)&&void 0!==e&&e}}(Ai||(Ai={}));const Pi="v2";var Ti;function Fi(){return lt.hostVersionsInfo?lt.hostVersionsInfo.adaptiveCardSchemaVersion:void 0}!function(e){function t(){return!!(Tt(lt)&&lt.supports.geoLocation&&lt.supports.permissions)}let n;e.getCurrentLocation=function(){if(Tt(lt,be.content,be.task),!t())throw Fe;return mr(o(Pi,"geoLocation.getCurrentLocation"),"location.getLocation",{allowChooseLocation:!1,showMap:!1})},e.hasPermission=function(){if(Tt(lt,be.content,be.task),!t())throw Fe;const e=ve.GeoLocation;return new Promise((t=>{t(mr(o(Pi,"geoLocation.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(Tt(lt,be.content,be.task),!t())throw Fe;const e=ve.GeoLocation;return new Promise((t=>{t(mr(o(Pi,"geoLocation.requestPermission"),"permissions.request",e))}))},e.isSupported=t,function(e){function t(){return!!(Tt(lt)&&lt.supports.geoLocation&&lt.supports.geoLocation.map&&lt.supports.permissions)}e.chooseLocation=function(){if(Tt(lt,be.content,be.task),!t())throw Fe;return mr(o(Pi,"geoLocation.map.chooseLocation"),"location.getLocation",{allowChooseLocation:!0,showMap:!0})},e.showLocation=function(e){if(Tt(lt,be.content,be.task),!t())throw Fe;if(!e)throw{errorCode:we.INVALID_ARGUMENTS};return mr(o(Pi,"geoLocation.showLocation"),"location.showLocation",e)},e.isSupported=t}(n=e.map||(e.map={}))}(Ti||(Ti={}));const Oi="v1";class Ri{postMessage(e,t){Tt(lt),yr(o(Oi,"appWindow.childAppWindow.postMessage"),"messageForChild",[e],t||Le())}addEventListener(e,t){Tt(lt),"message"===e&&Nn(o(Oi,"appWindow.childAppWindow.addEventListener"),"messageForParent",t)}}class ki{static get Instance(){return this._instance||(this._instance=new this)}postMessage(e,t){Tt(lt,be.task),yr(o(Oi,"appWindow.parentAppWindow.postMessage"),"messageForParent",[e],t||Le())}addEventListener(e,t){Tt(lt,be.task),"message"===e&&Nn(o(Oi,"appWindow.parentAppWindow.addEventListener"),"messageForChild",t)}}var Mi;!function(e){function t(){return!(!Tt(lt)||!lt.supports.secondaryBrowser)}e.open=function(e){if(Tt(lt,be.content),!t())throw Fe;if(!e||!ze(e))throw{errorCode:we.INVALID_ARGUMENTS,message:"Invalid Url: Only https URL is allowed"};return mr(o("v2","secondaryBrowser.openUrl"),"secondaryBrowser.open",e.toString())},e.isSupported=t}(Mi||(Mi={}));var Ui;!function(e){function t(){return!(!Tt(lt)||!lt.supports.location)}e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");if(Tt(lt,be.content,be.task),!Ft(l))throw{errorCode:we.OLD_PLATFORM};if(!e)throw{errorCode:we.INVALID_ARGUMENTS};if(!t())throw Fe;yr(o("v1","location.getLocation"),"location.getLocation",[e],n)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");if(Tt(lt,be.content,be.task),!Ft(l))throw{errorCode:we.OLD_PLATFORM};if(!e)throw{errorCode:we.INVALID_ARGUMENTS};if(!t())throw Fe;yr(o("v1","location.showLocation"),"location.showLocation",[e],n)},e.isSupported=t}(Ui||(Ui={}));var Li=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Di="v1";var Ni;!function(e){let t,n,r,i,a,s,c;function l(e,n){yr(o(Di,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((r,i)=>{if(r&&null!=i)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(r)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${r.errorCode} ${r.message}`);if("boolean"!=typeof i)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");Nn(o(Di,"meeting.registerMicStateChangeHandler"),"meeting.micStateChanged",(n=>Li(this,void 0,void 0,(function*(){try{const r=yield e.micMuteStateChangedCallback(n);d(r,r.isMicMuted===n.isMicMuted?t.HostInitiated:t.AppDeclinedToChange)}catch(e){d(n,t.AppFailedToChange)}}))));Nn(o(Di,"meeting.registerAudioDeviceSelectionChangedHandler"),"meeting.audioDeviceSelectionChanged",(t=>{var n;null===(n=e.audioDeviceSelectionChangedCallback)||void 0===n||n.call(e,t)})),n(i)}))}function u(e,t){yr(o(Di,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((e,n)=>{if(e&&null!=n)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(e)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${e.errorCode} ${e.message}`);if("boolean"!=typeof n)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");xn("meeting.micStateChanged")&&Hn("meeting.micStateChanged"),xn("meeting.audioDeviceSelectionChanged")&&Hn("meeting.audioDeviceSelectionChanged"),t(n)}))}function d(e,t){Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.setMicStateWithReason"),"meeting.updateMicState",[e,t])}!function(e){e[e.HostInitiated=0]="HostInitiated",e[e.AppInitiated=1]="AppInitiated",e[e.AppDeclinedToChange=2]="AppDeclinedToChange",e[e.AppFailedToChange=3]="AppFailedToChange"}(t||(t={})),function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(n=e.MeetingReactionType||(e.MeetingReactionType={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(r=e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(i=e.CallType||(e.CallType={})),function(e){e.Collaborative="Collaborative",e.ScreenShare="ScreenShare"}(a=e.SharingProtocol||(e.SharingProtocol={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.getIncomingClientAudioState"),"getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.toggleIncomingClientAudio"),"toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage,be.settings,be.content),yr(o(Di,"meeting.getMeetingDetails"),"meeting.getMeetingDetails",e)},e.getMeetingDetailsVerbose=function(){var e,t,n;return Li(this,void 0,void 0,(function*(){let r;Tt(lt,be.sidePanel,be.meetingStage,be.settings,be.content);try{const e=!0;r=yield mr(o("v2","meeting.getMeetingDetailsVerbose"),"meeting.getMeetingDetails",e)}catch(t){throw new Error(null===(e=null==t?void 0:t.errorCode)||void 0===e?void 0:e.toString())}if(((null===(t=r.details)||void 0===t?void 0:t.type)==i.GroupCall||(null===(n=r.details)||void 0===n?void 0:n.type)==i.OneOnOneCall)&&!r.details.originalCaller)throw new Error(we.NOT_SUPPORTED_ON_PLATFORM.toString());return r}))},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage,be.task),yr(o(Di,"meeting.getAuthenticationTokenForAnonymousUser"),"meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");Tt(lt,be.sidePanel),yr(o(Di,"meeting.getLiveStreamState"),"meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,t,n){if(!e)throw new Error("[request start live streaming] Callback cannot be null");Tt(lt,be.sidePanel),yr(o(Di,"meeting.requestStartLiveStreaming"),"meeting.requestStartLiveStreaming",[t,n],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");Tt(lt,be.sidePanel),yr(o(Di,"meeting.requestStopLiveStreaming"),"meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");Tt(lt,be.sidePanel),Nn(o(Di,"meeting.registerLiveStreamChangedHandler"),"meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,t,n={sharingProtocol:a.Collaborative}){if(!e)throw new Error("[share app content to stage] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.shareAppContentToStage"),"meeting.shareAppContentToStage",[t,n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.getAppContentStageSharingCapabilities"),"meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.stopSharingAppContentToStage"),"meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");Tt(lt,be.sidePanel,be.meetingStage),yr(o(Di,"meeting.getAppContentStageSharingState"),"meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");Tt(lt,be.sidePanel,be.meetingStage),Nn(o(Di,"meeting.registerSpeakingStateChangeHandler"),"meeting.speakingStateChanged",e)},e.registerRaiseHandStateChangedHandler=function(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");Tt(lt,be.sidePanel,be.meetingStage),Nn(o(Di,"meeting.registerRaiseHandStateChangedHandler"),"meeting.raiseHandStateChanged",e)},e.registerMeetingReactionReceivedHandler=function(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");Tt(lt,be.sidePanel,be.meetingStage),Nn(o(Di,"meeting.registerMeetingReactionReceivedHandler"),"meeting.meetingReactionReceived",e)},e.joinMeeting=function(e){if(void 0===(null==e?void 0:e.joinWebUrl)||null===(null==e?void 0:e.joinWebUrl))return Promise.reject(new Error("Invalid joinMeetingParams"));Tt(lt);const t={joinWebUrl:e.joinWebUrl.href,source:e.source||s.Other};return mr(o("v2","meeting.joinMeeting"),"meeting.joinMeeting",t)},function(e){e.M365CalendarGridContextMenu="m365_calendar_grid_context_menu",e.M365CalendarGridPeek="m365_calendar_grid_peek",e.M365CalendarGridEventCardJoinButton="m365_calendar_grid_event_card_join_button",e.M365CalendarFormRibbonJoinButton="m365_calendar_form_ribbon_join_button",e.M365CalendarFormJoinTeamsMeetingButton="m365_calendar_form_join_teams_meeting_button",e.Other="other"}(s=e.EventActionSource||(e.EventActionSource={})),function(e){e.setOptions=function(e){Tt(lt,be.sidePanel),e.contentUrl&&new URL(e.contentUrl),yr(o(Di,"meeting.appShareButton.setOptions"),"meeting.appShareButton.setOptions",[e])}}(c=e.appShareButton||(e.appShareButton={})),e.requestAppAudioHandling=function(e,t){if(!t)throw new Error("[requestAppAudioHandling] Callback response cannot be null");if(!e.micMuteStateChangedCallback)throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");Tt(lt,be.sidePanel,be.meetingStage),e.isAppHandlingAudio?l(e,t):u(e,t)},e.updateMicState=function(e){d(e,t.AppInitiated)}}(Ni||(Ni={}));var Hi;!function(e){function t(){return!(!Tt(lt)||!lt.supports.monetization)}e.openPurchaseExperience=function(e,n){let r,i,a="";return"function"==typeof e?(r=e,i=n,a=o("v1","monetization.openPurchaseExperience")):(i=e,a=o("v2","monetization.openPurchaseExperience")),Tt(lt,be.content),_e((()=>new Promise((e=>{if(!t())throw Fe;e(mr(a,"monetization.openPurchaseExperience",i))}))),r)},e.isSupported=t}(Hi||(Hi={}));var xi;!function(e){function t(){return!(!Tt(lt)||!lt.supports.calendar)}e.openCalendarItem=function(e){return new Promise((n=>{if(Tt(lt,be.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");n(pr(o("v2","calendar.openCalendarItem"),"calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((n=>{if(Tt(lt,be.content),!t())throw new Error("Not supported");const r=o("v2","calendar.composeMeeting");lt.isLegacyTeams?n(pr(r,"executeDeepLink",ni(e.attendees,e.startTime,e.endTime,e.subject,e.content))):n(pr(r,"calendar.composeMeeting",e))}))},e.isSupported=t}(xi||(xi={}));var Vi;!function(e){function t(){return!(!Tt(lt)||!lt.supports.mail)}let n;e.openMailItem=function(e){return new Promise((n=>{if(Tt(lt,be.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");n(pr(o("v2","mail.openMailItem"),"mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((n=>{if(Tt(lt,be.content),!t())throw new Error("Not supported");n(pr(o("v2","mail.composeMail"),"mail.composeMail",e))}))},e.isSupported=t,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(n=e.ComposeMailType||(e.ComposeMailType={}))}(Vi||(Vi={}));var _i;!function(e){function t(){$e().print()}function n(e,t,n){!Mt(t)&&Tt(lt),!Mt(t)&&n&&n(),Bn(e,t)}function r(e,t,n){!Mt(t)&&Tt(lt),!Mt(t)&&n&&n(),qn(e,t)}function i(){return!(!Tt(lt)||!lt.supports.teamsCore)}e.enablePrintCapability=function(){if(!C.printCapabilityEnabled){if(Tt(lt),!i())throw Fe;C.printCapabilityEnabled=!0,document.addEventListener("keydown",(e=>{(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=t,e.registerOnLoadHandler=function(e){n(o("v2","teamsAPIs_registerOnLoadHandler"),e,(()=>{if(!Mt(e)&&!i())throw Fe}))},e.registerOnLoadHandlerHelper=n,e.registerBeforeUnloadHandler=function(e){r(o("v2","teamsAPIs_registerBeforeUnloadHandler"),e,(()=>{if(!Mt(e)&&!i())throw Fe}))},e.registerBeforeUnloadHandlerHelper=r,e.isSupported=i}(_i||(_i={}));var Wi;function Bi(e){return e?e.modality&&"string"!=typeof e.modality?[!1,"modality must be a string"]:e.targetElementBoundingRect&&"object"==typeof e.targetElementBoundingRect?e.triggerType&&"string"==typeof e.triggerType?ji(e.persona):[!1,"triggerType must be a valid string"]:[!1,"targetElementBoundingRect must be a DOMRect"]:[!1,"A request object is required"]}function ji(e){return e?e.displayName&&"string"!=typeof e.displayName?[!1,"displayName must be a string"]:e.identifiers&&"object"==typeof e.identifiers?e.identifiers.AadObjectId||e.identifiers.Smtp||e.identifiers.Upn?e.identifiers.AadObjectId&&"string"!=typeof e.identifiers.AadObjectId?[!1,"AadObjectId identifier must be a string"]:e.identifiers.Smtp&&"string"!=typeof e.identifiers.Smtp?[!1,"Smtp identifier must be a string"]:e.identifiers.Upn&&"string"!=typeof e.identifiers.Upn?[!1,"Upn identifier must be a string"]:[!0,void 0]:[!1,"at least one valid identifier must be provided"]:[!1,"persona identifiers object must be provided"]:[!1,"persona object must be provided"]}!function(e){function t(e,t){return new Promise((r=>{if(!Ft("2.0.0"))throw{errorCode:we.OLD_PLATFORM};if(!Ci(t))throw{errorCode:we.INVALID_ARGUMENTS};if(!n())throw Fe;r(mr(e,"people.selectPeople",t))}))}function n(){return!(!Tt(lt)||!lt.supports.people)}e.selectPeople=function(e,n){let r,i;Tt(lt,be.content,be.task,be.settings);let a="";return"function"==typeof e?([r,i]=[e,n],a=o("v1","people.selectPeople")):(i=e,a=o("v2","people.selectPeople")),xe(t,r,a,i)},e.isSupported=n}(Wi||(Wi={}));var zi;!function(e){e.showProfile=function(e){return Tt(lt,be.content),new Promise((t=>{const[n,r]=Bi(e);if(!n)throw{errorCode:we.INVALID_ARGUMENTS,message:r};const i={modality:e.modality,persona:e.persona,triggerType:e.triggerType,targetRectangle:{x:e.targetElementBoundingRect.x,y:e.targetElementBoundingRect.y,width:e.targetElementBoundingRect.width,height:e.targetElementBoundingRect.height}};t(mr(o("v2","profile.showProfile"),"profile.showProfile",i))}))},e.isSupported=function(){return!(!Tt(lt)||!lt.supports.profile)}}(zi||(zi={}));const qi="v2";var Gi;!function(e){const t="search.queryChange",n="search.queryClose",r="search.queryExecute";function i(){return!(!Tt(lt)||!lt.supports.search)}e.registerHandlers=function(e,a,s){if(Tt(lt,be.content),!i())throw Fe;Nn(o(qi,"search.registerOnClosedHandler"),n,e),Nn(o(qi,"search.registerOnExecutedHandler"),r,a),s&&Nn(o(qi,"search.registerOnChangeHandler"),t,s)},e.unregisterHandlers=function(){if(Tt(lt,be.content),!i())throw Fe;yr(o(qi,"search.unregisterHandlers"),"search.unregister"),Hn(t),Hn(n),Hn(r)},e.isSupported=i,e.closeSearch=function(){return new Promise((e=>{if(Tt(lt,be.content),!i())throw new Error("Not supported");e(pr(o(qi,"search.closeSearch"),"search.closeSearch"))}))}}(Gi||(Gi={}));var $i=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var Ji;!function(e){function t(t,n){return new Promise((r=>{if(!a())throw Fe;r(mr(t,e.SharingAPIMessages.shareWebContent,n))}))}function n(e){if(!(e&&e.content&&e.content.length)){throw{errorCode:we.INVALID_ARGUMENTS,message:"Shared content is missing"}}}function r(e){let t;if(e.content.some((e=>!e.type)))throw t={errorCode:we.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"},t;if(e.content.some((t=>t.type!==e.content[0].type)))throw t={errorCode:we.INVALID_ARGUMENTS,message:"Shared content must be of the same type"},t}function i(e){let t;if("URL"!==e.content[0].type)throw t={errorCode:we.INVALID_ARGUMENTS,message:"Content type is unsupported"},t;if(e.content.some((e=>!e.url)))throw t={errorCode:we.INVALID_ARGUMENTS,message:"URLs are required for URL content types"},t}function a(){return!(!Tt(lt)||!lt.supports.sharing)}let s;e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,a){try{n(e),r(e),i(e)}catch(e){return Ve((()=>Promise.reject(e)),a)}return Tt(lt,be.content,be.sidePanel,be.task,be.stage,be.meetingStage),Ve(t,a,o(a?"v1":"v2","sharing.shareWebContent"),e)},e.isSupported=a,function(e){function t(){var e;return Tt(lt)&&void 0!==(null===(e=lt.supports.sharing)||void 0===e?void 0:e.history)}e.getContent=function(){return $i(this,void 0,void 0,(function*(){if(Tt(lt,be.sidePanel,be.meetingStage),!t())throw Fe;const e=yield mr(o("v2","sharing.history.getContent"),"sharing.history.getContent");return e.map((e=>{nt(e.author),nt(e.threadId)})),e}))},e.isSupported=t}(s=e.history||(e.history={}))}(Ji||(Ji={}));var Ki;!function(e){let t;function n(){return!(!Tt(lt)||!lt.supports.stageView)}!function(e){e.modal="modal",e.popout="popout",e.popoutWithChat="popoutWithChat"}(t=e.StageViewOpenMode||(e.StageViewOpenMode={})),e.open=function(e){return new Promise((t=>{if(Tt(lt,be.content),!n())throw Fe;if(!e)throw new Error("[stageView.open] Stage view params cannot be null");t(mr(o("v2","stageView.open"),"stageView.open",e))}))},e.isSupported=n}(Ki||(Ki={}));var Zi=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Qi="v2";var Xi;!function(e){let t,n,r;!function(e){e[e.FrontOrRear=1]="FrontOrRear",e[e.FrontOnly=2]="FrontOnly",e[e.RearOnly=3]="RearOnly"}(t=e.CameraRestriction||(e.CameraRestriction={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(n=e.Source||(e.Source={})),e.hasPermission=function(){if(Tt(lt,be.content,be.task),!r.isSupported())throw Fe;const e=ve.Media;return mr(o(Qi,"visualMedia.hasPermission"),"permissions.has",e)},e.requestPermission=function(){if(Tt(lt,be.content,be.task),!r.isSupported())throw Fe;const e=ve.Media;return mr(o(Qi,"visualMedia.requestPermission"),"permissions.request",e)},function(e){function t(){return!!(Tt(lt)&&lt.supports.visualMedia&&lt.supports.visualMedia.image&&lt.supports.permissions)}function n(){if(!t())throw Fe}function r(e){if(!e||e.maxVisualMediaCount>10||e.maxVisualMediaCount<1)throw Me}function i(e,t){if(t.length>e)throw Ue}e.captureImages=function(e){return Zi(this,void 0,void 0,(function*(){Tt(lt,be.content,be.task),n(),r(e);const t=yield mr(o(Qi,"visualMedia.image.captureImages"),"visualMedia.image.captureImages",e);return i(e.maxVisualMediaCount,t),t}))},e.retrieveImages=function(e){return Zi(this,void 0,void 0,(function*(){Tt(lt,be.content,be.task),n(),r(e);const t=yield mr(o(Qi,"visualMedia.image.retrieveImages"),"visualMedia.image.retrieveImages",e);return i(e.maxVisualMediaCount,t),t}))},e.isSupported=t}(r=e.image||(e.image={}))}(Xi||(Xi={}));var Yi,ea=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};!function(e){function t(){return Tt(lt)&&void 0!==lt.supports.webStorage}e.isWebStorageClearedOnUserLogOut=function(){return ea(this,void 0,void 0,(function*(){if(Tt(lt),!t())throw Fe;return yield fr(o("v2","webStorage.isWebStorageClearedOnUserLogOut"),"webStorage.isWebStorageClearedOnUserLogOut")}))},e.isSupported=t}(Yi||(Yi={}));var ta;!function(e){let t;function n(){return!(!Tt(lt)||!lt.supports.call)}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(t=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){const r=o("v2","call.startCall");return new Promise((o=>{var i;if(Tt(lt,be.content,be.task),!n())throw Fe;if(!lt.isLegacyTeams)return yr(r,"call.startCall",[e],o);o(fr(r,"executeDeepLink",ti(e.targets,null===(i=e.requestedModalities)||void 0===i?void 0:i.includes(t.Video),e.source)).then((e=>{if(!e)throw new Error("The call was not properly started");return e})))}))},e.isSupported=n}(ta||(ta={}));const na="v1";var ra;!function(e){e.Messages=gn.Messages,e.FailedReason=gn.FailedReason,e.ExpectedFailureReason=gn.ExpectedFailureReason,e.notifyAppLoaded=function(){an(o(na,"appInitialization.notifyAppLoaded"))},e.notifySuccess=function(){ln(o(na,"appInitialization.notifySuccess"))},e.notifyFailure=function(e){cn(o(na,"appInitialization.notifyFailure"),e)},e.notifyExpectedFailure=function(e){sn(o(na,"appInitialization.notifyExpectedFailure"),e)}}(ra||(ra={}));const oa=t("thirdPartyCloudStorage");var ia;!function(e){class t{constructor(e,t){this.fileType=e,this.assembleAttachment=t}}let n=[],r=null,i=!0,a=null;function s(e){if(a)if(e&&e.error)a([],e.error),a=null;else if(e&&e.fileChunk)try{i||0!==e.fileChunk.chunkSequence||(oa("Last chunk is not received or 'endOfFile' value for previous chunk was not set to true"),i=!0,a([],{errorCode:we.INTERNAL_ERROR,message:"error occurred while receiving data"}),n=[],a=null);const o=li(e.fileChunk,e.fileType);if(o?(r||(r=new t(e.fileType,[])),r.assembleAttachment.push(o)):(oa(`Received a null assemble attachment for when decoding chunk sequence ${e.fileChunk.chunkSequence}; not including the chunk in the assembled file.`),a?a([],{errorCode:we.INTERNAL_ERROR,message:"error occurred while receiving data"}):a=null,n=[],a=null,i=!0),i=e.fileChunk.endOfFile,e.fileChunk.endOfFile&&r){const t=ci(r.assembleAttachment,r.fileType);if(t){const r=new File([t],e.fileName,{type:t.type});n.push(r)}e.isLastFile&&a&&(a(n,e.error),n=[],a=null,i=!0),r=null}}catch(e){a&&(a([],{errorCode:we.INTERNAL_ERROR,message:e}),n=[],a=null,i=!0)}else a([],{errorCode:we.INTERNAL_ERROR,message:"data received is null"}),n=[],a=null,i=!0}function c(){return!(!Tt(lt)||!lt.supports.thirdPartyCloudStorage)}e.getDragAndDropFiles=function(e,t){if(!t)throw new Error("[getDragAndDropFiles] Callback cannot be null");if(e&&""!==e){if(Tt(lt,be.content,be.task),!c())throw Fe;if(a)throw a=null,new Error("getDragAndDropFiles cannot be called twice");a=t,i=!0,yr(o("v2","thirdPartyCloudStorage.getDragAndDropFiles"),"thirdPartyCloudStorage.getDragAndDropFiles",[e],s)}else{t([],{errorCode:we.INVALID_ARGUMENTS})}},e.isSupported=c}(ia||(ia={}));const aa="v1";function sa(e,t){on(o(aa,"initialize"),t).then((()=>{e&&e()}))}function ca(){_i.enablePrintCapability()}function la(){_i.print()}function ua(e){Pt(),yr(o(aa,"getContext"),"getContext",(t=>{t.frameContext||(t.frameContext=C.frameContext),e(t)}))}function da(e){fn(o(aa,"registerOnThemeChangeHandlerHelper"),e)}function fa(e){Vn(o(aa,"registerFullScreenHandler"),"fullScreenChange",e,[])}function pa(e){Vn(o(aa,"registerAppButtonClickHandler"),"appButtonClick",e,[be.content])}function ga(e){Vn(o(aa,"registerAppButtonHoverEnterHandler"),"appButtonHoverEnter",e,[be.content])}function ma(e){Vn(o(aa,"registerAppButtonHoverLeaveHandler"),"appButtonHoverLeave",e,[be.content])}function ha(e){Fn.backStack.registerBackButtonHandlerHelper(o(aa,"registerBackButtonHandler"),e)}function wa(e){_i.registerOnLoadHandlerHelper(o(aa,"registerOnLoadHandler"),e)}function va(e){_i.registerBeforeUnloadHandlerHelper(o(aa,"registerBeforeUnloadHandler"),e)}function Ca(e){Vn(o(aa,"registerFocusEnterHandler"),"focusEnter",e,[])}function ya(e){Vn(o(aa,"registerChangeSettingsHandler"),"changeSettings",e,[be.content])}function Sa(e,t){Tt(lt),Sn(o(aa,"getTabInstances"),t).then((t=>{e(t)}))}function ba(e,t){Tt(lt),bn(o(aa,"getMruTabInstances"),t).then((t=>{e(t)}))}function Ea(e){En(o(aa,"shareDeepLink"),{subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function Ia(e,t){Tt(lt,be.content,be.sidePanel,be.settings,be.task,be.stage,be.meetingStage);const n=null!=t?t:Le();pn(o(aa,"executeDeepLink"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function Aa(e){In(o(aa,"setFrameContext"),e)}function Pa(e,t,n){on(o(aa,"initializeWithFrameContext"),n).then((()=>t&&t())),In(o(aa,"setFrameContext"),e)}const Ta="v1";function Fa(e){yn(o(Ta,"navigation.returnFocus"),e)}function Oa(e,t){Tt(lt);const n=null!=t?t:Le();Cn(o(Ta,"navigation.navigateToTab"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function Ra(e,t){Tt(lt,be.content,be.sidePanel,be.settings,be.remove,be.task,be.stage,be.meetingStage);const n=null!=t?t:Le();wn(o(Ta,"navigation.navigateCrossDomain"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function ka(e){Tt(lt);const t=null!=e?e:Le();vn(o(Ta,"navigation.navigateBack")).then((()=>{t(!0)})).catch((e=>{t(!1,e.message)}))}const Ma="v1";var Ua;!function(e){e.setValidityState=function(e){An(o(Ma,"settings.setValidityState"),e)},e.getSettings=function(e){Tt(lt,be.content,be.settings,be.remove,be.sidePanel),Pn(o(Ma,"settings.getSettings")).then((t=>{e(t)}))},e.setSettings=function(e,t){Tt(lt,be.content,be.settings,be.sidePanel);const n=null!=t?t:Le();Tn(o(Ma,"settings.setSettings"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))},e.registerOnSaveHandler=function(e){Fn.config.registerOnSaveHandlerHelper(o(Ma,"settings.registerOnSaveHandler"),e)},e.registerOnRemoveHandler=function(e){Fn.config.registerOnRemoveHandlerHelper(o(Ma,"settings.registerOnRemoveHandler"),e)}}(Ua||(Ua={}));var La=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Da="v1";var Na;!function(e){function t(e){if(void 0===e.url)throw new Error("url property of taskInfo object can't be undefined");return{url:e.url,size:{height:e.height?e.height:Te.Small,width:e.width?e.width:Te.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function n(e){if(void 0===e.url||void 0===e.completionBotId)throw new Error(`Both url ${e.url} and completionBotId ${e.completionBotId} are required for bot url dialog. At least one is undefined.`);return{url:e.url,size:{height:e.height?e.height:Te.Small,width:e.width?e.width:Te.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function r(e){return e.height=e.height?e.height:Te.Small,e.width=e.width?e.width:Te.Small,e}e.startTask=function(e,r){const i=o(Da,"tasks.startTask"),a=r?e=>{var t,n;return r(null!==(t=e.err)&&void 0!==t?t:"",null!==(n=e.result)&&void 0!==n?n:"")}:void 0;return void 0===e.card&&void 0===e.url||e.card?(Tt(lt,be.content,be.sidePanel,be.meetingStage),yr(i,"tasks.startTask",[e],r)):void 0!==e.completionBotId?Zt(i,n(e),a):Kt(i,t(e),a),new Ri},e.updateTask=function(e){e=r(e);const{width:t,height:n}=e,i=La(e,["width","height"]);if(Object.keys(i).length)throw new Error("resize requires a TaskInfo argument containing only width and height");Jt(o(Da,"tasks.updateTask"),e)},e.submitTask=function(e,t){Qt(o(Da,"tasks.submitTask"),e,t)},e.getDefaultSizeIfNotProvided=r}(Na||(Na={}));const Ha="v2";var xa;!function(e){let t,n;!function(e){e.guest="Guest",e.attendee="Attendee",e.presenter="Presenter",e.organizer="Organizer"}(t=e.UserMeetingRole||(e.UserMeetingRole={})),function(e){e.added="Added",e.alreadyExists="AlreadyExists",e.conflict="Conflict",e.notFound="NotFound"}(n=e.ContainerState||(e.ContainerState={})),e.isSupported=function(){return!(!Tt(lt,be.meetingStage,be.sidePanel,be.content)||!lt.supports.interactive)}}(xa||(xa={}));class Va{getFluidTenantInfo(){return _a(),new Promise((e=>{e(mr(o(Ha,"interactive.getFluidTenantInfo"),"interactive.getFluidTenantInfo"))}))}getFluidToken(e){return _a(),new Promise((t=>{t(mr(o(Ha,"interactive.getFluidToken"),"interactive.getFluidToken",e))}))}getFluidContainerId(){return _a(),new Promise((e=>{e(mr(o(Ha,"interactive.getFluidContainerId"),"interactive.getFluidContainerId"))}))}setFluidContainerId(e){return _a(),new Promise((t=>{t(mr(o(Ha,"interactive.setFluidContainerId"),"interactive.setFluidContainerId",e))}))}getNtpTime(){return _a(),new Promise((e=>{e(mr(o(Ha,"interactive.getNtpTime"),"interactive.getNtpTime"))}))}registerClientId(e){return _a(),new Promise((t=>{t(mr(o(Ha,"interactive.registerClientId"),"interactive.registerClientId",e))}))}getClientRoles(e){return _a(),new Promise((t=>{t(mr(o(Ha,"interactive.getClientRoles"),"interactive.getClientRoles",e))}))}getClientInfo(e){return _a(),new Promise((t=>{t(mr(o(Ha,"interactive.getClientInfo"),"interactive.getClientInfo",e))}))}static create(){return _a(),new Va}}function _a(){if(!xa.isSupported())throw new Error("LiveShareHost Not supported")}var Wa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function Ba(e){try{return e.cartItems=ja(e.cartItems),e}catch(e){throw new Error("Error deserializing cart")}}function ja(e){return e.map((e=>{if(e.imageURL){const t=new URL(e.imageURL);e.imageURL=t}return e.accessories&&(e.accessories=ja(e.accessories)),e}))}const za=e=>{try{return e.map((e=>{const{imageURL:t,accessories:n}=e,r=Wa(e,["imageURL","accessories"]),o=Object.assign({},r);return t&&(o.imageURL=t.href),n&&(o.accessories=za(n)),o}))}catch(e){throw new Error("Error serializing cart items")}};function qa(e){if(!Array.isArray(e)||0===e.length)throw new Error("cartItems must be a non-empty array");for(const t of e)$a(t),Ga(t.accessories)}function Ga(e){if(null!=e){if(!Array.isArray(e)||0===e.length)throw new Error("CartItem.accessories must be a non-empty array");for(const t of e){if(t.accessories)throw new Error("Item in CartItem.accessories cannot have accessories");$a(t)}}}function $a(e){if(!e.id)throw new Error("cartItem.id must not be empty");if(!e.name)throw new Error("cartItem.name must not be empty");Ka(e.price),Za(e.quantity)}function Ja(e){if(null!=e){if(!e)throw new Error("id must not be empty");if(!1===pe(e))throw new Error("id must be a valid UUID")}}function Ka(e){if("number"!=typeof e||e<0)throw new Error(`price ${e} must be a number not less than 0`);if(parseFloat(e.toFixed(3))!==e)throw new Error(`price ${e} must have at most 3 decimal places`)}function Za(e){if("number"!=typeof e||e<=0||parseInt(e.toString())!==e)throw new Error(`quantity ${e} must be an integer greater than 0`)}function Qa(e){if(!Object.values(Ya.CartStatus).includes(e))throw new Error(`cartStatus ${e} is not valid`)}const Xa="v2";var Ya;!function(e){let t,n;function r(){return!(!Tt(lt)||!lt.supports.marketplace)}e.cartVersion={majorVersion:1,minorVersion:1},function(e){e.TACAdminUser="TACAdminUser",e.TeamsAdminUser="TeamsAdminUser",e.TeamsEndUser="TeamsEndUser"}(t=e.Intent||(e.Intent={})),function(e){e.Open="Open",e.Processing="Processing",e.Processed="Processed",e.Closed="Closed",e.Error="Error"}(n=e.CartStatus||(e.CartStatus={})),e.getCart=function(){if(Tt(lt,be.content,be.task),!r())throw Fe;return mr(o(Xa,"marketplace.getCart"),"marketplace.getCart",e.cartVersion).then(Ba)},e.addOrUpdateCartItems=function(t){if(Tt(lt,be.content,be.task),!r())throw Fe;if(!t)throw new Error("addOrUpdateCartItemsParams must be provided");return Ja(null==t?void 0:t.cartId),qa(null==t?void 0:t.cartItems),mr(o(Xa,"marketplace.addOrUpdateCartItems"),"marketplace.addOrUpdateCartItems",Object.assign(Object.assign({},t),{cartItems:za(t.cartItems),cartVersion:e.cartVersion})).then(Ba)},e.removeCartItems=function(t){if(Tt(lt,be.content,be.task),!r())throw Fe;if(!t)throw new Error("removeCartItemsParams must be provided");if(Ja(null==t?void 0:t.cartId),!Array.isArray(null==t?void 0:t.cartItemIds)||0===(null==t?void 0:t.cartItemIds.length))throw new Error("cartItemIds must be a non-empty array");return mr(o(Xa,"marketplace.removeCartItems"),"marketplace.removeCartItems",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(Ba)},e.updateCartStatus=function(t){if(Tt(lt,be.content,be.task),!r())throw Fe;if(!t)throw new Error("updateCartStatusParams must be provided");return Ja(null==t?void 0:t.cartId),Qa(null==t?void 0:t.cartStatus),mr(o(Xa,"marketplace.updateCartStatus"),"marketplace.updateCartStatus",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(Ba)},e.isSupported=r}(Ya||(Ya={}))})(),r})()));
//# sourceMappingURL=MicrosoftTeams.min.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(760);
;// CONCATENATED MODULE: ./src/utils.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.setAttribute("aria-label", config.name);
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            let input;
            let valueGetter;
            const defaultInputValue = (config.inputs[i].defaultValue) ? config.inputs[i].defaultValue : null;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    if (defaultInputValue) {
                        input.checked = defaultInputValue;
                    }
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            if (defaultInputValue) {
                                input.value = defaultInputValue;
                            }
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.setAttribute("aria-label", "input-" + config.name);
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.setAttribute("aria-label", "textarea-" + config.name);
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    if (config.hasSelectMedia) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("SelectMediaOutput:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var image = document.createElement("img");
        image.id = "image-" + config.name;
        image.height = 30;
        image.width = 20;
        element.appendChild(image);
        element.appendChild(document.createElement("br"));
        var image1 = document.createElement("img");
        image1.id = "image-1" + config.name;
        image1.height = 30;
        image1.width = 20;
        element.appendChild(image1);
        element.appendChild(document.createElement("br"));
        var image2 = document.createElement("img");
        image2.id = "image-2" + config.name;
        image2.height = 30;
        image2.width = 20;
        element.appendChild(image2);
        element.appendChild(document.createElement("br"));
        var image3 = document.createElement("img");
        image3.id = "image-3" + config.name;
        image3.height = 30;
        image3.width = 20;
        element.appendChild(image3);
        element.appendChild(document.createElement("br"));
        var image4 = document.createElement("img");
        image4.id = "image-4" + config.name;
        image4.height = 30;
        image4.width = 20;
        element.appendChild(image4);
        element.appendChild(document.createElement("br"));
        var image5 = document.createElement("img");
        image5.id = "image-5" + config.name;
        image5.height = 30;
        image5.width = 20;
        element.appendChild(image5);
        element.appendChild(document.createElement("br"));
        var image6 = document.createElement("img");
        image6.id = "image-6" + config.name;
        image6.height = 30;
        image6.width = 20;
        element.appendChild(image6);
        element.appendChild(document.createElement("br"));
        var image7 = document.createElement("img");
        image7.id = "image-7" + config.name;
        image7.height = 30;
        image7.width = 20;
        element.appendChild(image7);
        element.appendChild(document.createElement("br"));
        var image8 = document.createElement("img");
        image8.id = "image-8" + config.name;
        image8.height = 30;
        image8.width = 20;
        element.appendChild(image8);
        element.appendChild(document.createElement("br"));
        var image9 = document.createElement("img");
        image9.id = "image-9" + config.name;
        image9.height = 30;
        image9.width = 20;
        element.appendChild(image9);
    }
    if (config.hasGetMedia) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("GetMedia (First selected):"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var getMediaImage = document.createElement("img");
        getMediaImage.id = "image-getMediaImage" + config.name;
        getMediaImage.height = 200;
        getMediaImage.width = 150;
        element.appendChild(getMediaImage);
    }
    container.appendChild(element);
    button.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasSelectMedia) {
            args.push(function (result) {
                if (typeof result !== typeof []) {
                    alert("something went wrong");
                }
                if (result.length > 0 && result[0]) {
                    image.src = result[0];
                }
                else {
                    image.removeAttribute('src');
                }
                if (result.length > 1 && result[1]) {
                    image1.src = result[1];
                }
                else {
                    image1.removeAttribute('src');
                }
                if (result.length > 2 && result[2]) {
                    image2.src = result[2];
                }
                else {
                    image2.removeAttribute('src');
                }
                if (result.length > 3 && result[3]) {
                    image3.src = result[3];
                }
                else {
                    image3.removeAttribute('src');
                }
                if (result.length > 4 && result[4]) {
                    image4.src = result[4];
                }
                else {
                    image4.removeAttribute('src');
                }
                if (result.length > 5 && result[5]) {
                    image5.src = result[5];
                }
                else {
                    image5.removeAttribute('src');
                }
                if (result.length > 6 && result[6]) {
                    image6.src = result[6];
                }
                else {
                    image6.removeAttribute('src');
                }
                if (result.length > 7 && result[7]) {
                    image7.src = result[7];
                }
                else {
                    image7.removeAttribute('src');
                }
                if (result.length > 8 && result[8]) {
                    image8.src = result[8];
                }
                else {
                    image8.removeAttribute('src');
                }
                if (result.length > 9 && result[9]) {
                    image9.src = result[9];
                }
                else {
                    image9.removeAttribute('src');
                }
            });
        }
        if (config.hasGetMedia) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                getMediaImage.src = result;
            });
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        if (config.onClick) {
            textarea.value = yield config.onClick.apply(null, args);
        }
        if (config.action)
            config.action.apply(null, args);
    }));
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function () {
        // Show element if it matches search text or searchBox is empty
        if (searchInput.value === "" || config.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}
function filterHandler() {
    var searchInput = document.getElementById('searchInput');
    var sectionTitle = document.getElementsByClassName('sectionTitle');
    searchInput.addEventListener('input', function () {
        var searchText = searchInput.value.toLowerCase();
        for (var i = 0; i < sectionTitle.length; i++) {
            var title = sectionTitle[i].textContent.toLowerCase();
            if (title.indexOf(searchText) === -1) {
                sectionTitle[i].parentElement.style.display = 'none';
            }
            else {
                sectionTitle[i].parentElement.style.display = 'block';
            }
        }
    });
}
function initializeDownloadLinks() {
    const csv = "Id,Value\n1,Hello world!\n";
    const data = new Blob([csv]);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = URL.createObjectURL(data);
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.onclick = () => {
        const csv = "Id, Value\n1,Hello world!\n";
        const data = new Blob([csv]);
        let downloadLink = document.getElementById("hiddenDownloadLink");
        if (downloadLink == null) {
            downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'DownloadViaButton.csv');
            downloadLink.setAttribute('id', 'hiddenDownloadLink');
            document.body.appendChild(downloadLink);
        }
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        downloadLink.href = URL.createObjectURL(data);
        downloadLink.style.display = 'none';
        downloadLink.click();
    };
}
function outputTabRenderedLocation(getContext) {
    if (isInTeams()) {
        getContext(outputTabRenderedLocationInTeams);
    }
    else {
        addPageSection(`Currently running outside of Microsoft Teams.`);
    }
    function isInTeams() {
        if ((window.parent === window.self && window.nativeInterface) ||
            window.name === "embedded-page-container" ||
            window.name === "extension-tab-frame") {
            return true;
        }
        return false;
    }
}
function outputTabRenderedLocationInTeams(context) {
    var appLocation = 'unidentified location...';
    const perfData = window.performance;
    if (context.meetingId) {
        appLocation = 'Meeting';
    }
    else if (context.chatId) {
        appLocation = 'Chat';
    }
    else if (context.teamId && context.channelId) {
        appLocation = `${context.channelName} channel in ${context.teamName}`;
    }
    else {
        appLocation = 'Teams App';
    }
    if (isInConfig()) {
        appLocation = `${appLocation} (Config page)`;
    }
    else if (isInSidePanel()) {
        appLocation = `${appLocation} (Side Panel)`;
    }
    addPageSection(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`);
    function isInConfig() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.settings;
    }
    function isInSidePanel() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.sidePanel;
    }
}
;
function addPageSection(content) {
    var element = document.createElement("div");
    var title = document.createElement("div");
    title.classList.add("sectionTitle");
    title.textContent = content;
    element.appendChild(title);
    container.prepend(element);
}

;// CONCATENATED MODULE: ./src/app.ts
var app_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        let attachmentArray;
        MicrosoftTeams_min.initialize(undefined, ["https://teams.microsoftonline.cn"]);
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        initializeDownloadLinks();
        outputTabRenderedLocation(MicrosoftTeams_min.getContext);
        addModule({
            name: "hasStorageAccess",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                const perm = yield document.hasStorageAccess();
                console.log(perm);
                return perm;
            }),
        });
        addModule({
            name: "popOut",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => {
                window.open(window.location.href);
            },
        });
        addModule({
            name: "setUnpartitionedCookie",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                document.cookie = document.cookie + `myCookie${Math.random() % 100}=helloworld`;
                return document.cookie;
            }),
        });
        addModule({
            name: "readUnpartitionedCookie",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                console.log(document.cookie);
                return document.cookie;
            }),
        });
        addModule({
            name: "requestStorageAccess",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                const perm = yield document.requestStorageAccess();
                console.log(perm);
                return perm;
            }),
        });
        addModule({
            name: "enablePrintCapability",
            initializedRequired: true,
            hasOutput: false,
            action: function () {
                MicrosoftTeams_min.enablePrintCapability();
            },
        });
        addModule({
            name: "print",
            initializedRequired: true,
            hasOutput: false,
            action: function () {
                MicrosoftTeams_min.print();
            },
        });
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getContext(output);
            },
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getTabInstances(output);
            },
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getMruTabInstances(output);
            },
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            },
        });
        addModule({
            name: "pages.registerFocusEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.pages.registerFocusEnterHandler((navigateForward) => {
                    if (navigateForward) {
                        output("Focus entered forward");
                    }
                    else {
                        output("Focus entered backward");
                    }
                    var searchInput = document.getElementById("searchInput");
                    searchInput.focus();
                });
            }
        });
        addModule({
            name: "pages.returnFocus",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "navigateForward",
                },
            ],
            action: function (navigateForward) {
                MicrosoftTeams_min.pages.returnFocus(navigateForward);
            },
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            },
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            },
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerChangeSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            },
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            },
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            },
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
                    output(`Hover leave event received`);
                });
            },
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "deepLinkParameters",
                },
            ],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
            },
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "deepLink",
                },
            ],
            action: function (deepLink) {
                MicrosoftTeams_min.executeDeepLink(deepLink);
            },
        });
        addModule({
            name: "navigateToApp",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "navigateToAppParameters",
                },
            ],
            action: (navigateToAppParameters) => {
                MicrosoftTeams_min.pages.navigateToApp(navigateToAppParameters);
            },
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            hasOutput: true,
            action: function (url, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    },
                });
            },
        });
        addModule({
            name: "authentication_externalBrowser",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "mockOAuth", // do not go to the actual oauth provider, for scenario testing purpose
                },
            ],
            hasOutput: true,
            action: function (mockOAuth, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}&hostRedirectUrl={hostRedirectUrl}`,
                    isExternal: true,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                    },
                });
            },
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                    defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
                },
            ],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min.tasks.startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            },
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "message",
                },
            ],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            },
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "message",
                },
            ],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            },
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            },
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "showNotificationParameters",
                },
            ],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            },
        });
        addModule({
            name: "authentication.getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "getAuthTokenParameters",
                },
            ],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
            },
        });
        addModule({
            name: "authentication.getUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.authentication.getUser({
                    successCallback: output,
                    failureCallback: output,
                });
            },
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                MicrosoftTeams_min.authentication.notifyFailure(reason);
            },
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "result",
                },
            ],
            action: function (result) {
                MicrosoftTeams_min.authentication.notifySuccess(result);
            },
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.getSettings(output);
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams_min.settings.setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave",
                    });
                    output("SaveEvent recieved");
                });
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                window.saveEvent &&
                    window.saveEvent.notifyFailure(reason);
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            },
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "settings",
                    defaultValue: '{"contentUrl": "https://teams-test-tab.azurewebsites.net/", "entityId": "someEntity", "websiteUrl": "https://teams-test-tab.azurewebsites.net/"}',
                },
            ],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min.settings.setSettings(settings);
            },
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "validityState",
                },
            ],
            action: function (validityState) {
                MicrosoftTeams_min.settings.setValidityState(validityState);
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                window.removeEvent &&
                    window.removeEvent.notifyFailure(reason);
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent &&
                    window.removeEvent.notifySuccess();
            },
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "filePreviewParameters",
                },
            ],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min.openFilePreview(filePreviewParameters);
            },
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "result",
                },
                {
                    type: "string",
                    name: "appId",
                },
            ],
            action: function (result, appId) {
                MicrosoftTeams_min.tasks.submitTask(result, appId);
            },
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                    defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
                },
            ],
            hasOutput: true,
            action: function (taskInfo, output) {
                MicrosoftTeams_min.tasks.startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            },
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                },
            ],
            action: function (taskInfo) {
                MicrosoftTeams_min.tasks.updateTask(taskInfo);
            },
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "showNotificationParameters",
                },
            ],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            },
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.conversations.getChatMembers().then(output);
            },
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.teams.fullTrust.joinedTeams
                    .getUserJoinedTeams()
                    .then(output);
            },
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "readyToUnloadDelay",
                },
            ],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                MicrosoftTeams_min.registerBeforeUnloadHandler(function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
                    return true;
                });
            },
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            },
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "includeHistory",
                    defaultValue: true,
                },
            ],
            hasOutput: true,
            action: function (includeHistory, output) {
                totalStates++;
                if (includeHistory) {
                    window.history.pushState({ some: "state", id: totalStates }, "tab state" + totalStates, "/testTab");
                }
                output("total States: " + totalStates);
                let historyStates = totalStates;
                window.addEventListener("popstate", function (event) {
                    historyStates--;
                    output("onpopstate: back button clicked. total remaining state: " +
                        historyStates);
                }, false);
            },
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams_min.registerBackButtonHandler(function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            },
        });
        addModule({
            name: "navigateBack",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.pages.backStack.navigateBack();
            },
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "navigateForward",
                },
            ],
            action: function (navigateForward) {
                MicrosoftTeams_min.returnFocus(navigateForward);
            },
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "openConversationRequest",
                },
            ],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " +
                        conversationResponse.subEntityId +
                        " Conversation Id: " +
                        conversationResponse.conversationId +
                        " Entity Id: " +
                        conversationResponse.entityId +
                        " Channel Id: " +
                        conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " +
                        conversationResponse.subEntityId +
                        " Conversation Id: " +
                        conversationResponse.conversationId +
                        " Entity Id: " +
                        conversationResponse.entityId +
                        " Channel Id: " +
                        conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            },
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.conversations.closeConversation();
            },
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams_min.media.captureImage((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " +
                        file.format +
                        ", size: " +
                        file.size +
                        ", mimeType: " +
                        file.mimeType +
                        ", content: " +
                        content);
                });
            },
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasSelectMedia: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(mediaInputs, (error, attachments) => {
                    if (error) {
                        if (error.message) {
                            alert(" ErrorCode: " + error.errorCode + error.message);
                        }
                        else {
                            alert(" ErrorCode: " + error.errorCode);
                        }
                    }
                    else if (attachments) {
                        let imageArr = [];
                        attachmentArray = attachments;
                        for (let i = 0; i < attachments.length; i++)
                            if (attachments[i].mimeType.includes("image")) {
                                console.log("***debug***attach", attachments[i]);
                                imageArr.push("data:" + attachments[i].mimeType + ";base64," + attachments[i].preview);
                                output(imageArr);
                            }
                    }
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasGetMedia: true,
            action: (output) => {
                if (attachmentArray == null || attachmentArray.length < 0) {
                    alert("You haven't selected anything");
                }
                else {
                    let mediaInput = attachmentArray[0];
                    mediaInput.getMedia((error, blob) => {
                        if (blob) {
                            if (blob.type.includes("image")) {
                                output(URL.createObjectURL(blob));
                            }
                        }
                        if (error) {
                            if (error.message) {
                                alert(" ErrorCode: " + error.errorCode + error.message);
                            }
                            else {
                                alert(" ErrorCode: " + error.errorCode);
                            }
                        }
                    });
                }
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
            action: (selectMediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1, //microsoftTeams.ImageUriType.ID
                        });
                    }
                    MicrosoftTeams_min.media.viewImages(urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            },
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "imageUrls",
                    defaultValue: '["https://www.w3schools.com/images/picture.jpg","https://www.w3schools.com/images/picture.jpg"]',
                },
            ],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2, //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams_min.media.viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            },
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "locationProps",
                    defaultValue: '{"allowChooseLocation":true,"showMap":true}',
                },
            ],
            action: (locationProps, output) => {
                MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            },
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "location",
                    defaultValue: '{"latitude":17,"longitude":17}',
                },
            ],
            action: (location, output) => {
                MicrosoftTeams_min.location.showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "geoLocation.requestPermission",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output(""); // Clear output
                MicrosoftTeams_min.geoLocation
                    .requestPermission()
                    .then((value) => output(`Consented: ${value}`))
                    .catch((err) => output(err));
            },
        });
        addModule({
            name: "media.requestPermission",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output(""); // Clear output
                MicrosoftTeams_min.media
                    .requestPermission()
                    .then((value) => output(`Consented: ${value}`))
                    .catch((err) => output(err));
            },
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: '{"timeOutIntervalInSec":30}',
                },
            ],
            action: (scanBarCodeConfig, output) => {
                MicrosoftTeams_min.media.scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
            },
        });
        addModule({
            name: "call.startCall",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "startCallParams",
                    defaultValue: '{"requestedModalities":["audio"],"targets":["yudogan@microsoft.com"]}',
                },
            ],
            action: function (startCallParams, output) {
                MicrosoftTeams_min.call
                    .startCall(startCallParams)
                    .then(() => output("Success"))
                    .catch((err) => output(`Error: ${err}`));
            },
        });
        addModule({
            name: "meeting.getMeetingDetails",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getMeetingDetails((err, meetingDetailsResponse) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(meetingDetailsResponse);
                });
            },
        });
        addModule({
            name: "meeting.shareAppContentToStage",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.shareAppContentToStage((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, window.location.href);
            },
        });
        addModule({
            name: "meeting.getAppContentStageSharingState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAppContentStageSharingState((err, appContentStageSharingState) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(appContentStageSharingState);
                });
            },
        });
        addModule({
            name: "meeting.getAppContentStageSharingCapabilities",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAppContentStageSharingCapabilities((err, appContentStageSharingCapabilities) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(appContentStageSharingCapabilities);
                });
            },
        });
        addModule({
            name: "monetization.openPurchaseExperience",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.monetization.openPurchaseExperience((err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(null);
                });
            },
        });
        addModule({
            name: "getIncomingClientAudioState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getIncomingClientAudioState((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "toggleIncomingClientAudio",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.toggleIncomingClientAudio((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "meeting.getAuthenticationTokenForAnonymousUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAuthenticationTokenForAnonymousUser((err, authenticationTokenOfAnonymousUser) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(authenticationTokenOfAnonymousUser);
                });
            },
        });
        addModule({
            name: "people.selectPeople",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "peoplePickerInputs",
                    defaultValue: '{"title":"", "setSelected":[], "openOrgWideSearchInChatOrChannel":false, "singleSelect":false}',
                },
            ],
            action: (peoplePickerInputs, output) => {
                MicrosoftTeams_min.people.selectPeople((err, people) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("People length: " + people.length + " " + JSON.stringify(people));
                }, peoplePickerInputs);
            },
        });
        addModule({
            name: "setFrameContext",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "frameContext",
                    defaultValue: '{"contentUrl":"", "websiteUrl":""}',
                },
            ],
            action: (frameContext) => {
                MicrosoftTeams_min.setFrameContext(frameContext);
            },
        });
        addModule({
            name: "navigateToTab",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "tabInstance",
                },
            ],
            action: (tabInstance, output) => {
                MicrosoftTeams_min.navigateToTab(tabInstance, (status, reason) => {
                    if (reason) {
                        output(reason);
                        return;
                    }
                    output(status);
                });
            },
        });
        addModule({
            name: "sharing.shareWebContent",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "shareWebContentRequest",
                    defaultValue: '{"content":[{"type":"URL","url":"https://teams-test-tab.azurewebsites.net/"}]}',
                },
            ],
            action: (shareWebContentRequest, output) => {
                // Clear the output box prior to action
                output("");
                MicrosoftTeams_min.sharing.shareWebContent(shareWebContentRequest, (err) => {
                    if (err) {
                        output(err.message);
                        return;
                    }
                    output("Sharing was successful.");
                });
            },
        });
        addModule({
            name: "stageView.open",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "stageViewParams",
                },
            ],
            action: function (stageViewParams) {
                MicrosoftTeams_min.stageView.open(stageViewParams);
            },
        });
        addModule({
            name: "setNavBarMenu",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "navBarMenuItems",
                    defaultValue: '[{"id":"submenu1","title":"SubMenu1","displayMode":1,"icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptMi4zMTItNC44OTdjMCAyLjIwNiAxLjc5NCA0IDQgNHM0LTEuNzk0IDQtNC0xLjc5NC00LTQtNC00IDEuNzk0LTQgNHptMTAgMGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiLz48L3N2Zz4=","contentDescription":"SubMenu1","enabled":"true"},{"id":"submenu2","title":"SubMenu2","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEgMTFoLTExdi0yaDExYy41NTIgMCAxLS40NDggMS0xcy0uNDQ4LTEtMS0xYy0uNDAzIDAtLjc0Ny4yNDItLjkwNS41ODdsLTEuNzQ5LS45NTZjLjQ5OS0uOTY1IDEuNDk0LTEuNjMxIDIuNjU0LTEuNjMxIDMuOTcxIDAgMy45NjkgNiAwIDZ6bTcgN2MwLTEuNjU2LTEuMzQ0LTMtMy0zaC0xNXYyaDE1Yy41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxYy0uNDAzIDAtLjc0Ny0uMjQyLS45MDUtLjU4N2wtMS43NDkuOTU2Yy40OTkuOTY1IDEuNDk0IDEuNjMxIDIuNjU0IDEuNjMxIDEuNjU2IDAgMy0xLjM0NCAzLTN6bTEuMDE0LTcuNjU1Yy4wODItLjc1My43MTItMS4zNDUgMS40ODYtMS4zNDUuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0yMC41djJoMjAuNWMxLjkzMiAwIDMuNS0xLjU2OCAzLjUtMy41cy0xLjU2OC0zLjUtMy41LTMuNWMtMS42MjQgMC0yLjk3NyAxLjExNi0zLjM3MiAyLjYxN2wxLjg4Ni43Mjh6bS0xMy43NjQtNy44NDVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLjUtMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0uNSAxOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMC41IDJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLTNjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTExIC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tLjUtNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEuNSA2LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xMy0zYy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xNy41LTJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xNy0xMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTQgMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptNi00LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTMgMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMiAuOTY5Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM3Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tMyAxLjAzMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMC0zLjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS00LjUgOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xLjUtN2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEgM2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTItNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTkuNSAyMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMy41IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTE1IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6Ii8+PC9zdmc+","contentDescription":"SubMenu2","enabled":"true"},{"id":"submenu3","title":"SubMenu3","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTkyIDQuMjIxbC0yLjg4MSAyLjg4MWMtLjQxMS0uNTI4LS44ODYtMS4wMDMtMS40MTQtMS40MTRsMi44ODEtMi44ODEgMS40MTQgMS40MTR6bS04LjE5Mi0uMTUydi00LjA2OWgtMnY0LjA2OWMuMzI4LS4wNDEuNjYxLS4wNjkgMS0uMDY5cy42NzIuMDI4IDEgLjA2OXptNi45MzEgNi45MzFjLjA0MS4zMjguMDY5LjY2MS4wNjkgMXMtLjAyOC42NzItLjA2OSAxaDQuMDY5di0yaC00LjA2OXptLTEuOTMxIDFjMCAuMzQxLS4wMzUuNjc0LS4wOSAxaC0xMS44MmMtLjA1NS0uMzI2LS4wOS0uNjU5LS4wOS0xIDAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDZ6bS0xMC44OTctNi4zMTJsLTIuODgxLTIuODgxLTEuNDE0IDEuNDE0IDIuODgxIDIuODgxYy40MTEtLjUyOS44ODUtMS4wMDMgMS40MTQtMS40MTR6bS03LjEwMyA1LjMxMnYyaDQuMDY5Yy0uMDQxLS4zMjgtLjA2OS0uNjYxLS4wNjktMXMuMDI4LS42NzIuMDY5LTFoLTQuMDY5em05LjA2MiAxMS42NjdjLTEuMjA1LTEuMTk1LTEuMzY0LTEuODkzLS4zMTItMy4yNi4zNy0uNDgxLjUzLS45NDIuNTMtMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIzLTMuMDA2bC0xLjQ0OSAxLjM3OWMxLjM3NSAxLjYgMS4yNDcgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NS0xLjMzNHptOC42ODggMGMtMS4yMDUtMS4xOTUtMS4zNjQtMS44OTMtLjMxMi0zLjI2LjM3LS40ODEuNTI5LS45NDIuNTI5LTEuNCAwLS45NTktLjY5OS0xLjkwNi0xLjYyMi0zLjAwNmwtMS40NDggMS4zNzljMS4zNzUgMS42IDEuMjQ2IDEuNzcyLjI2IDMuMTg0LS4zMTYuNDUzLS40NDYuOTA4LS40NDYgMS4zNTUgMCAxLjE1OS44NzYgMi4yNTkgMS42NjUgMy4wODJsMS4zNzQtMS4zMzR6bS00LjM5NiAwYy0xLjIwNS0xLjE5NS0xLjM2NC0xLjg5My0uMzEyLTMuMjYuMzctLjQ4MS41MjktLjk0Mi41MjktMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIyLTMuMDA2bC0xLjQ0OCAxLjM3OWMxLjM3NSAxLjYgMS4yNDYgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NC0xLjMzNHoiLz48L3N2Zz4","contentDescription":"SubMenu3","enabled":"true"},{"id":"submenu4","title":"SubMenu4","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuNSAyYy44MjcgMCAxLjUuNjczIDEuNSAxLjV2Ny41MjVjMCAxLjU2OS41MTQgMi4yODcgMS40MTEgMy4wNSAxLjAxLjg1OCAxLjU4OSAyLjEwNiAxLjU4OSAzLjQyNSAwIDIuNDgxLTIuMDE5IDQuNS00LjUgNC41cy00LjUtMi4wMTktNC41LTQuNWMwLTEuMzE5LjU3OS0yLjU2NyAxLjU5LTMuNDI1Ljg5Ni0uNzYxIDEuNDEtMS40NzkgMS40MS0zLjA1di03LjUyNWMwLS44MjcuNjczLTEuNSAxLjUtMS41em0wLTJjLTEuOTMzIDAtMy41IDEuNTY3LTMuNSAzLjV2Ny41MjVjMCAuNTg3LS4yNTggMS4xNDYtLjcwNSAxLjUyNS0xLjQwMyAxLjE5Mi0yLjI5NSAyLjk2NS0yLjI5NSA0Ljk1IDAgMy41OSAyLjkwOSA2LjUgNi41IDYuNXM2LjUtMi45MSA2LjUtNi41YzAtMS45ODUtLjg5Mi0zLjc1OC0yLjI5NS00Ljk1LS40NDctLjM4LS43MDUtLjkzOC0uNzA1LTEuNTI1di03LjUyNWMwLTEuOTMzLTEuNTY3LTMuNS0zLjUtMy41em0yLjEwNyAxNC43MThjLTEuMDEyLS44OS0xLjYwNy0xLjczNC0xLjYwNy0zLjIydi02LjQ5OGgtMXY2LjQ5OGMwIDEuNDg0LS41OTcgMi4zMzItMS42MDcgMy4yMi0uNzk0LjY5OC0xLjM5MyAxLjY0Mi0xLjM5MyAyLjc4MiAwIDEuOTMzIDEuNTY3IDMuNSAzLjUgMy41czMuNS0xLjU2NyAzLjUtMy41YzAtMS4xNC0uNTk5LTIuMDgzLTEuMzkzLTIuNzgyem0tOS42MDctNi4yMThjMCAxLjkzMy0xLjU2NyAzLjUtMy41IDMuNXMtMy41LTEuNTY3LTMuNS0zLjUgMS41NjctMy41IDMuNS0zLjUgMy41IDEuNTY3IDMuNSAzLjV6bS04IDBjMC0uMTcxLjAzMi0uMzMzLjA1MS0uNWgtMi4wNTF2MWgyLjA1MWMtLjAxOS0uMTY3LS4wNTEtLjMyOS0uMDUxLS41em0xLjcwNS0zLjUwMWwtMS40NDgtMS40NDktLjcwNy43MDcgMS40NDggMS40NDhjLjIxLS4yNjEuNDQ1LS40OTcuNzA3LS43MDZ6bTYuMjk3LjcwNmwxLjQ0Ny0xLjQ0OC0uNzA3LS43MDctMS40NDggMS40NDhjLjI2My4yMS40OTguNDQ1LjcwOC43MDd6bS0zLjUwMi0xLjcwNWMuMTcxIDAgLjMzNC4wMzIuNS4wNXYtMi4wNWgtMXYyLjA1Yy4xNjYtLjAxOC4zMjktLjA1LjUtLjA1em0wIDljLS4xNzEgMC0uMzM0LS4wMzItLjUtLjA1djIuMDVoMXYtMi4wNWMtLjE2Ni4wMTgtLjMyOS4wNS0uNS4wNXptNC40NDktNWMuMDE5LjE2Ny4wNTEuMzI5LjA1MS41bC0uMDUxLjVoMi4wNTF2LTFoLTIuMDUxem0tNy45NTEgMy4yOTRsLTEuNDQ4IDEuNDQ5LjcwNy43MDcgMS40NDgtMS40NDhjLS4yNjItLjIxLS40OTctLjQ0Ni0uNzA3LS43MDh6bTYuMjk2LjcwOGwxLjQ0OCAxLjQ0OC43MDctLjcwNy0xLjQ0Ny0xLjQ0OGMtLjIxLjI2Mi0uNDQ1LjQ5Ny0uNzA4LjcwN3oiLz48L3N2Zz4=","contentDescription":"SubMenu4","enabled":"true"},{"id":"submenu5","title":"SubMenu5","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4zOTYgOWgtMi4zOTZ2LTJoMi4zOTZ2MnptNy42MDQtNi40NTh2LTIuNTQyaC0ydjIuNTQyaDJ6bS00Ljc5My44NzZsLTEuODU5LTEuODU5LTEuNDE0IDEuNDE0IDEuODU5IDEuODU5IDEuNDE0LTEuNDE0em05LjIyMi0yLjE1NmwtMS44NzUgMS44NzUgMS40MTQgMS40MTQgMS44NzUtMS44NzUtMS40MTQtMS40MTR6bS0xMS40NiAxMC42NjdsLTIuMDUzIDEuNzczIDEuMzAzIDEuNTE3IDIuMDUzLTEuNzczLTEuMzAzLTEuNTE3em0yMS4wMzEgMi43OTNjMCAyLjM2Mi0xLjk0OSA0LjI3OC00LjM1NCA0LjI3OGgtMTAuMjkyYy0yLjQwNSAwLTQuMzU0LTEuOTE2LTQuMzU0LTQuMjc4IDAtLjc3LjIxMS0xLjQ5LjU3NC0yLjExMy0uOTY1LS45MDctMS41NzQtMi4xOC0xLjU3NC0zLjYwOSAwLTIuNzYyIDIuMjM4LTUgNS01IDEuMzI4IDAgMi41MjMuNTI4IDMuNDE0IDEuMzc2LjY0OC0uMjQgMS4zNS0uMzc2IDIuMDg2LS4zNzYgMy4xNzIgMCA1Ljc1MyAyLjQ0MyA1LjkyMiA1LjUxNiAyLjAzMy4zNTkgMy41NzggMi4xMDUgMy41NzggNC4yMDZ6bS0xOC01LjcyMmMwIC44Ni4zNyAxLjYyOC45NTUgMi4xNzIuNDg0LS4zMTYgMS4wMjktLjU1MSAxLjYyMy0uNjU2LjA4OS0xLjYxLjg0NC0zLjA0MiAxLjk5NC00LjA0Ni0uNDU5LS4yODgtLjk5LS40Ny0xLjU3Mi0uNDctMS42NTQgMC0zIDEuMzQ2LTMgM3ptMTYgNS43MjJjMC0yLjA3Ni0xLjk3OS0yLjYxOC0zLjQ4OC0yLjUxMi4yMTctMS40MzktLjI0MS01LjIxLTQuMDEyLTUuMjEtMy44NzUgMC00LjA2MiAzLjg1NC00LjAxMiA1LjIwOS0xLjM4NC0uMDg0LTMuNDg4LjM5NS0zLjQ4OCAyLjUxMyAwIDEuMjU2IDEuMDU3IDIuMjc4IDIuMzU0IDIuMjc4aDEwLjI5MWMxLjI5OCAwIDIuMzU1LTEuMDIyIDIuMzU1LTIuMjc4em0tMTUuNTggOS4yNzhsLTEuNDEtMS40MSAyLjU5LTIuNTkgMS40MSAxLjQxLTIuNTkgMi41OXptNy41NDMtMi41OWwtMS40MS0xLjQxLTIuNTkgMi41OSAxLjQxIDEuNDEgMi41OS0yLjU5em00Ljg3NSAwbC0xLjQxLTEuNDEtMi41OSAyLjU5IDEuNDEgMS40MSAyLjU5LTIuNTl6Ii8+PC9zdmc+","contentDescription":"SubMenu5","enabled":"true"}]',
                },
            ],
            action: function (navBarMenuItems, output) {
                MicrosoftTeams_min.menus.setNavBarMenu(navBarMenuItems, (id) => {
                    navBarMenuItems.map((item) => {
                        if (item.id === id) {
                            output("Clicked id is : " + id);
                        }
                    });
                    return true;
                });
            },
        });
        addModule({
            name: "appEntity.selectAppEntity",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "selectAppEntityParams",
                },
            ],
            action: function (selectAppEntityParams, output) {
                MicrosoftTeams_min.appEntity.selectAppEntity(selectAppEntityParams.threadId, selectAppEntityParams.categories, selectAppEntityParams.subEntityId, (sdkError, appEntity) => {
                    output(sdkError || appEntity);
                });
            },
        });
        addModule({
            name: "chat.openGroupChat",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "openChatRequest",
                    defaultValue: '{"message":"Test Group Chat Message","topic":"Test Group Chat","users":["a@contoso.com","b@contoso.com"]}',
                },
            ],
            action: function (openChatRequest, output) {
                MicrosoftTeams_min.chat
                    .openGroupChat(openChatRequest)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppAuthentication.authenticateAndResendRequest",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "authenticateParameters",
                    defaultValue: JSON.stringify({ url: new URL("https://www.bing.com") }),
                },
                {
                    type: "object",
                    name: "originalRequestInfo",
                    defaultValue: JSON.stringify({
                        requestType: "QueryMessageExtensionRequest",
                        commandId: "searchNews",
                        parameters: [{
                                name: "searchText",
                                value: "news",
                            }]
                    }),
                }
            ],
            action: function (appId, authenticateParameters, originalRequestInfo, output) {
                MicrosoftTeams_min.externalAppAuthentication
                    .authenticateAndResendRequest(appId, authenticateParameters, originalRequestInfo)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppAuthentication.authenticateWithSSO",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "authTokenRequest",
                    defaultValue: '{}',
                }
            ],
            action: function (appId, authTokenRequest, output) {
                MicrosoftTeams_min.externalAppAuthentication
                    .authenticateWithSSO(appId, authTokenRequest)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppAuthentication.authenticateWithSSOAndResendRequest",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "authTokenRequest",
                    defaultValue: '{}',
                },
                {
                    type: "object",
                    name: "originalRequestInfo",
                    defaultValue: JSON.stringify({
                        requestType: "QueryMessageExtensionRequest",
                        commandId: "searchNews",
                        parameters: [{
                                name: "searchText",
                                value: "news",
                            }]
                    }),
                }
            ],
            action: function (appId, authTokenRequest, originalRequestInfo, output) {
                MicrosoftTeams_min.externalAppAuthentication
                    .authenticateWithSSOAndResendRequest(appId, authTokenRequest, originalRequestInfo)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppCardActions.processActionSubmit",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "actionSubmitPayload",
                    defaultValue: JSON.stringify({
                        id: "submitActionId",
                        data: {
                            key: "value",
                            key2: "value2"
                        }
                    })
                }
            ],
            action: function (appId, actionSubmitPayload, output) {
                MicrosoftTeams_min.externalAppCardActions
                    .processActionSubmit(appId, actionSubmitPayload)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppCardActions.processActionOpenUrl",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "string",
                    name: "url",
                    defaultValue: "https://bing.com"
                }
            ],
            action: function (appId, url, output) {
                MicrosoftTeams_min.externalAppCardActions
                    .processActionOpenUrl(appId, new URL(url))
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        // Add handling for F6 and Ctrl/Cmd + F6
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 117) {
                event.cancelBubble = true;
                event.preventDefault();
                event.stopImmediatePropagation();
                const navigateForward = !(event.ctrlKey || event.metaKey);
                MicrosoftTeams_min.pages.returnFocus(navigateForward);
            }
        });
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({
            reason: MicrosoftTeams_min.appInitialization.FailedReason.Other,
            message: err.message,
        });
    }
};

;// CONCATENATED MODULE: ./src/index.ts



(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", () => {
        downloadHandler();
        filterHandler();
    });
    // Define global functions for use from html files
    window.enablePrintCapability = () => {
        MicrosoftTeams_min.teamsCore.enablePrintCapability();
    };
    window.printHandler = () => {
        window.print();
    };
})();

})();

/******/ })()
;
//# sourceMappingURL=app.807f778a39c44ae099ac.js.map