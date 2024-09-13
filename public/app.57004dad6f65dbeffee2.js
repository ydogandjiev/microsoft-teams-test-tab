/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 129:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,(()=>(()=>{var e={933:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,i=s(e),a=i[0],l=i[1],u=new o(c(e,a,l)),d=0,f=l>0?a-4:a;for(n=0;n<f;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],u[d++]=t>>16&255,u[d++]=t>>8&255,u[d++]=255&t;2===l&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,u[d++]=255&t);1===l&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,u[d++]=t>>8&255,u[d++]=255&t);return u},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,i=[],a=16383,s=0,c=r-o;s<c;s+=a)i.push(u(e,s,s+a>c?c:s+a));1===o?(t=e[r-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===o&&(t=(e[r-2]<<8)+e[r-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)n[a]=i[a],r[i.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function c(e,t,n){return 3*(t+n)/4-n}function l(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[63&e]}function u(e,t,n){for(var r,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(l(r));return o.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},815:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(530)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},530:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,i,a=null;function s(...e){if(!s.enabled)return;const r=s,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";a++;const i=t.formatters[o];if("function"==typeof i){const t=e[a];n=i.call(r,t),e.splice(a,1),a--}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=r,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{a=e}}),"function"==typeof t.init&&t.init(s),s}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(821),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},821:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,i=7*o;function a(e){if(!((e=String(e)).length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(a){var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function s(e){var i=Math.abs(e);return i>=o?Math.round(e/o)+"d":i>=r?Math.round(e/r)+"h":i>=n?Math.round(e/n)+"m":i>=t?Math.round(e/t)+"s":e+"ms"}function c(e){var i=Math.abs(e);return i>=o?l(e,i,o,"day"):i>=r?l(e,i,r,"hour"):i>=n?l(e,i,n,"minute"):i>=t?l(e,i,t,"second"):e+" ms"}function l(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return a(e);if("number"===n&&isFinite(e))return t.long?c(e):s(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionObjectType:()=>me,AppId:()=>di,ChannelType:()=>ke,ChildAppWindow:()=>ji,DialogDimension:()=>Re,ErrorCode:()=>we,FileOpenPreference:()=>ge,FrameContexts:()=>Ie,HostClientType:()=>Te,HostName:()=>Ae,LiveShareHost:()=>Ya,NotificationTypes:()=>ao,ParentAppWindow:()=>zi,SecondaryM365ContentIdName:()=>he,TaskModuleDimension:()=>Me,TeamType:()=>Pe,UserSettingTypes:()=>co,UserTeamRole:()=>Fe,ViewerActionTypes:()=>so,app:()=>Cn,appEntity:()=>Lo,appInitialization:()=>wa,appInstallDialog:()=>wi,authentication:()=>Qt,barCode:()=>Ni,calendar:()=>Qi,call:()=>ma,chat:()=>Ui,clipboard:()=>Hi,conversations:()=>vo,copilot:()=>Co,dialog:()=>rn,enablePrintCapability:()=>ba,executeDeepLink:()=>xa,externalAppAuthentication:()=>So,externalAppCardActions:()=>bo,externalAppCommands:()=>To,files:()=>Io,geoLocation:()=>_i,getAdaptiveCardSchemaVersion:()=>Wi,getContext:()=>Ta,getMruTabInstances:()=>Da,getTabInstances:()=>Ua,hostEntity:()=>ms,initialize:()=>Sa,initializeWithFrameContext:()=>_a,liveShare:()=>Xa,location:()=>$i,logs:()=>io,mail:()=>Xi,marketplace:()=>ps,media:()=>yi,meeting:()=>Ki,meetingRoom:()=>Fo,menus:()=>an,messageChannels:()=>Gt,monetization:()=>Zi,navigateBack:()=>qa,navigateCrossDomain:()=>za,navigateToTab:()=>ja,nestedAppAuth:()=>xi,notifications:()=>Ro,openFilePreview:()=>ho,otherAppStateChange:()=>Oo,pages:()=>Ln,people:()=>ea,print:()=>Ea,profile:()=>ra,registerAppButtonClickHandler:()=>Pa,registerAppButtonHoverEnterHandler:()=>Fa,registerAppButtonHoverLeaveHandler:()=>Ra,registerBackButtonHandler:()=>Oa,registerBeforeUnloadHandler:()=>Ma,registerChangeSettingsHandler:()=>Na,registerCustomHandler:()=>go,registerFocusEnterHandler:()=>La,registerFullScreenHandler:()=>Ia,registerOnLoadHandler:()=>ka,registerOnThemeChangeHandler:()=>Aa,registerUserSettingsChangeHandler:()=>mo,remoteCamera:()=>Mo,returnFocus:()=>Ba,search:()=>ia,secondaryBrowser:()=>qi,sendCustomEvent:()=>po,sendCustomMessage:()=>fo,setFrameContext:()=>Va,settings:()=>Ga,shareDeepLink:()=>Ha,sharing:()=>sa,stageView:()=>ca,tasks:()=>Za,teams:()=>Uo,teamsCore:()=>Yi,thirdPartyCloudStorage:()=>Ca,uploadCustomApp:()=>uo,version:()=>Pt,videoEffects:()=>jo,videoEffectsEx:()=>oi,visualMedia:()=>da,webStorage:()=>fa});const e=(0,n(815).debug)("teamsJs");function t(t){return e.extend(t)}function o(e,t){return`${e}_${t}`}function i(e){return/^v\d+_[\w.]+$/.test(e)}const a=JSON.parse('{"validOrigins":["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","outlook.live.com","outlook-sdf.live.com","teams.live.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","devspaces.skype.com","*.www.office.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.microsoft365.com","www.microsoft365.com","bing.com","edgeservices.bing.com","www.bing.com","www.staging-bing-int.com","*.cloud.microsoft","*.m365.cloud.microsoft","copilot.microsoft.com","windows.msn.com","fa000000125.resources.office.net","fa000000129.resources.office.net","fa000000124.resources.office.net","fa000000128.resources.office.net","fa000000136.resources.office.net"]}');const s="2.0.1",c="2.0.3",l="1.9.0",u="1.8.0",d=n.t(a,2).validOrigins,f=new URL("https://res.cdn.office.net/teams-js/validDomains/json/validDomains.json"),p=/^https:\/\//,g="https",m="teams.microsoft.com",h="The library has not yet been initialized",w="The runtime has not yet been initialized",v="The runtime version is not supported";class C{}C.initializeCalled=!1,C.initializeCompleted=!1,C.additionalValidOrigins=[],C.initializePromise=void 0,C.isFramelessWindow=!1,C.frameContext=void 0,C.hostClientType=void 0,C.printCapabilityEnabled=!1;var y=n(933);const S=E,b=2147483647;function E(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return A(e)}return T(e,t,n)}function T(e,t,n){if("string"==typeof e)return R(e,t);if(ArrayBuffer.isView(e))return D(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(k(e,ArrayBuffer)||e&&k(e.buffer,ArrayBuffer))return H(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(k(e,SharedArrayBuffer)||e&&k(e.buffer,SharedArrayBuffer)))return H(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return E.from(r,t,n);const o=oe(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return E.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function A(e){return I(e),P(e<0?0:0|F(e))}function I(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function P(e){if(e>b)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,E.prototype),t}function F(e){if(e>=b)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+b.toString(16)+" bytes");return 0|e}function R(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!E.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|O(e,t);let r=P(n);const o=r.write(e,t);return o!==n&&(r=r.slice(0,o)),r}function O(e,t){if(E.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||k(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return M(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return L(e).length;default:if(o)return r?-1:M(e).length;t=(""+t).toLowerCase(),o=!0}}function k(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function M(e,t){let n;t=t||1/0;const r=e.length;let o=null;const i=[];for(let a=0;a<r;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function L(e){return y.toByteArray(U(e))}E.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),E.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required"),E.from=function(e,t,n){return T(e,t,n)},Object.setPrototypeOf(E.prototype,Uint8Array.prototype),Object.setPrototypeOf(E,Uint8Array),E.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},E.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==E.prototype};const N=/[^+/0-9A-Za-z-_]/g;function U(e){if((e=(e=e.split("=")[0]).trim().replace(N,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function D(e){if(k(e,Uint8Array)){const t=new Uint8Array(e);return H(t.buffer,t.byteOffset,t.byteLength)}return x(e)}function H(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,E.prototype),r}function x(e){const t=e.length<0?0:0|F(e.length),n=P(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function V(e,t,n){n=Math.min(e.length,n);const r=[];let o=t;for(;o<n;){const t=e[o];let i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=n){let n,r,s,c;switch(a){case 1:t<128&&(i=t);break;case 2:n=e[o+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(i=c));break;case 3:n=e[o+1],r=e[o+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:n=e[o+1],r=e[o+2],s=e[o+3],128==(192&n)&&128==(192&r)&&128==(192&s)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s,c>65535&&c<1114112&&(i=c))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=a}return B(r)}function _(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return j(this,t,n);case"utf8":case"utf-8":return V(this,t,n);case"ascii":return z(this,t,n);case"latin1":case"binary":return q(this,t,n);case"base64":return $(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}E.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?V(this,0,e):_.apply(this,arguments)};const W=4096;function B(e){const t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=W));return n}function j(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let o="";for(let r=t;r<n;++r)o+=re[e[r]];return o}function z(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(127&e[o]);return r}function q(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(e[o]);return r}function $(e,t,n){return 0===t&&n===e.length?y.fromByteArray(e):y.fromByteArray(e.slice(t,n))}function G(e,t,n){const r=e.slice(t,n);let o="";for(let e=0;e<r.length-1;e+=2)o+=String.fromCharCode(r[e]+256*r[e+1]);return o}function J(e,t,n,r){n=Number(n)||0;const o=e.length-n;r?(r=Number(r))>o&&(r=o):r=o;const i=t.length;let a;for(r>i/2&&(r=i/2),a=0;a<r;++a){const r=parseInt(t.substr(2*a,2),16);if(ne(r))return a;e[n+a]=r}return a}function K(e,t,n,r){return te(M(t,e.length-n),e,n,r)}function Z(e,t,n,r){return te(Y(t),e,n,r)}function Q(e,t,n,r){return te(L(t),e,n,r)}function X(e,t,n,r){return te(ee(t,e.length-n),e,n,r)}function Y(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function ee(e,t){let n,r,o;const i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function te(e,t,n,r){let o;for(o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function ne(e){return e!=e}E.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return J(this,e,t,n);case"utf8":case"utf-8":return K(this,e,t,n);case"ascii":case"latin1":case"binary":return Z(this,e,t,n);case"base64":return Q(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return X(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}};const re=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let o=0;o<16;++o)t[r+o]=e[n]+e[o]}return t}();function oe(e){if(E.isBuffer(e)){const t=0|F(e.length),n=P(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||ne(e.length)?P(0):x(e):"Buffer"===e.type&&Array.isArray(e.data)?x(e.data):void 0}const ie={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let ae;const se=new Uint8Array(16);function ce(){if(!ae&&(ae="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ae))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ae(se)}const le=[];for(let e=0;e<256;++e)le.push((e+256).toString(16).slice(1));function ue(e,t=0){return le[e[t+0]]+le[e[t+1]]+le[e[t+2]]+le[e[t+3]]+"-"+le[e[t+4]]+le[e[t+5]]+"-"+le[e[t+6]]+le[e[t+7]]+"-"+le[e[t+8]]+le[e[t+9]]+"-"+le[e[t+10]]+le[e[t+11]]+le[e[t+12]]+le[e[t+13]]+le[e[t+14]]+le[e[t+15]]}const de=function(e,t,n){if(ie.randomUUID&&!t&&!e)return ie.randomUUID();const r=(e=e||{}).random||(e.rng||ce)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return ue(r)},fe=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const pe=function(e){return"string"==typeof e&&fe.test(e)};var ge,me,he,we,ve,Ce,ye,Se,be,Ee,Te,Ae,Ie,Pe,Fe,Re;function Oe(e){return void 0!==(null==e?void 0:e.errorCode)}!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(ge||(ge={})),function(e){e.M365Content="m365content"}(me||(me={})),function(e){e.DriveId="driveId",e.GroupId="groupId",e.SiteId="siteId",e.UserId="userId"}(he||(he={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(we||(we={})),function(e){e.GeoLocation="geolocation",e.Media="media"}(ve||(ve={})),function(e){e.BCAIS="bcais",e.BCWAF="bcwaf",e.BCWBF="bcwbf"}(Ce||(Ce={})),function(e){e.Faculty="faculty",e.Student="student",e.Other="other"}(ye||(ye={})),function(e){e.Adult="adult",e.MinorNoParentalConsentRequired="minorNoParentalConsentRequired",e.MinorWithoutParentalConsent="minorWithoutParentalConsent",e.MinorWithParentalConsent="minorWithParentalConsent",e.NonAdult="nonAdult"}(Se||(Se={})),function(e){e.HigherEducation="higherEducation",e.K12="k12",e.Other="other"}(be||(be={})),function(e){e.TextPlain="text/plain",e.TextHtml="text/html",e.ImagePNG="image/png",e.ImageJPEG="image/jpeg"}(Ee||(Ee={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.macos="macos",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(Te||(Te={})),function(e){e.office="Office",e.outlook="Outlook",e.outlookWin32="OutlookWin32",e.orange="Orange",e.places="Places",e.teams="Teams",e.teamsModern="TeamsModern"}(Ae||(Ae={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(Ie||(Ie={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(Pe||(Pe={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(Fe||(Fe={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(Re||(Re={}));var ke,Me=Re;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(ke||(ke={}));const Le={errorCode:we.NOT_SUPPORTED_ON_PLATFORM},Ne=1,Ue=5,De={adaptiveCardSchemaVersion:{majorVersion:1,minorVersion:5}},He=new Error("Invalid input count: Must supply a valid image count (limit of 10)."),xe=new Error("Invalid response: Received more images than the specified max limit in the response.");function Ve(e){return(t,n)=>{if(!t)throw new Error(e||n)}}function _e(e,t){if("string"!=typeof e||"string"!=typeof t)return NaN;const n=e.split("."),r=t.split(".");function o(e){return/^\d+$/.test(e)}if(!n.every(o)||!r.every(o))return NaN;for(;n.length<r.length;)n.push("0");for(;r.length<n.length;)r.push("0");for(let e=0;e<n.length;++e)if(Number(n[e])!=Number(r[e]))return Number(n[e])>Number(r[e])?1:-1;return 0}function We(){return de()}function Be(e){return Object.keys(e).forEach((t=>{null!==e[t]&&void 0!==e[t]&&"object"==typeof e[t]&&Be(e[t])})),Object.freeze(e)}function je(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(void 0,e)})).catch((e=>{t&&t(e)})),r}function ze(e,t,...n){const r=e(...n);return r.then((()=>{t&&t(null)})).catch((e=>{t&&t(e)})),r}function qe(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(null,e)})).catch((e=>{t&&t(e,null)})),r}function $e(e,t,n){return new Promise(((r,o)=>{const i=setTimeout(o,t,n);e().then((e=>{clearTimeout(i),r(e)})).catch((e=>{clearTimeout(i),o(e)}))}))}function Ge(e){const t=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&t.searchParams.append("webUrl",e.webUrl),(e.chatId||e.channelId||e.subPageId)&&t.searchParams.append("context",JSON.stringify({chatId:e.chatId,channelId:e.channelId,subEntityId:e.subPageId})),t.toString()}function Je(e){return!(_e(`${e.majorVersion}.${e.minorVersion}`,`${Ne}.${Ue}`)>=0)}function Ke(e){return"https:"===e.protocol}function Ze(e,t){return new Promise(((n,r)=>{if(e||r("MimeType cannot be null or empty."),t||r("Base64 string cannot be null or empty."),e.startsWith("image/")){const r=atob(t),o=new Uint8Array(r.length);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);n(new Blob([o],{type:e}))}const o=S.from(t,"base64").toString();n(new Blob([o],{type:e}))}))}function Qe(e){return new Promise(((t,n)=>{0===e.size&&n(new Error("Blob cannot be empty."));const r=new FileReader;r.onloadend=()=>{r.result?t(r.result.toString().split(",")[1]):n(new Error("Failed to read the blob"))},r.onerror=()=>{n(r.error)},r.readAsDataURL(e)}))}function Xe(){if(Ye())throw new Error("window object undefined at SSR check");return window}function Ye(){return"undefined"==typeof window}function et(e,t){if(rt(e)||!it(e)||!at(e))throw t||new Error("id is not valid.")}function tt(e,t){const n=e.toString().toLocaleLowerCase();if(rt(n))throw t||new Error("Invalid Url");if(n.length>2048)throw t||new Error("Url exceeds the maximum size of 2048 characters");if(!Ke(e))throw t||new Error("Url should be a valid https url")}function nt(e){const t=document.createElement("a");return t.href=e,new URL(t.href)}function rt(e){let t;try{const n=ot(e);t=decodeURIComponent(n)}catch(n){t=e}return/<script[^>]*>[\s\S]*?<\/script[^>]*>/gi.test(t)}function ot(e){return new Map([["&lt;","<"],["&gt;",">"],["&amp;","&"],["&quot;",'"'],["&#39;","'"],["&#x2F;","/"]]).forEach(((t,n)=>{e=e.replace(new RegExp(n,"gi"),t)})),e}function it(e){return e.length<256&&e.length>4}function at(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n<32||n>126)return!1}return!0}function st(e){if(!e)throw new Error("id must not be empty");if(!1===pe(e))throw new Error("id must be a valid UUID")}var ct=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const lt=t("runtime"),ut=4;function dt(e){return e.apiVersion===ut}const ft={apiVersion:-1,supports:{}};function pt(e){if(dt(e))return!0;throw-1===e.apiVersion?new Error(w):new Error(v)}let gt=ft;const mt={apiVersion:4,isNAAChannelRecommended:!1,hostVersionsInfo:De,isLegacyTeams:!0,supports:{appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{card:{bot:{}},url:{bot:{},parentCommunication:{}},update:{}},interactive:{},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{config:{},backStack:{},fullTrust:{}},remoteCamera:{},teams:{fullTrust:{}},teamsCore:{},video:{sharedFrame:{}}}},ht=[Te.desktop,Te.web,Te.rigel,Te.surfaceHub,Te.teamsRoomsWindows,Te.teamsRoomsAndroid,Te.teamsPhones,Te.teamsDisplays],wt=[Te.android,Te.ios,Te.ipados],vt=[...ht,...wt];function Ct(e){let t=e;if(t.apiVersion<ut&&yt.forEach((e=>{t.apiVersion===e.versionToUpgradeFrom&&(t=e.upgradeToNextVersion(t))})),dt(t))return t;throw new Error("Received a runtime that could not be upgraded to the latest version")}const yt=[{versionToUpgradeFrom:1,upgradeToNextVersion:e=>{var t;return{apiVersion:2,hostVersionsInfo:void 0,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:void 0,url:e.supports.dialog,update:null===(t=e.supports.dialog)||void 0===t?void 0:t.update}:void 0})}}},{versionToUpgradeFrom:2,upgradeToNextVersion:e=>{const t=e.supports,{appNotification:n}=t,r=ct(t,["appNotification"]);return Object.assign(Object.assign({},e),{apiVersion:3,supports:r})}},{versionToUpgradeFrom:3,upgradeToNextVersion:e=>{var t,n,r,o,i;return{apiVersion:4,hostVersionsInfo:e.hostVersionsInfo,isNAAChannelRecommended:e.isNAAChannelRecommended,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:null===(t=e.supports.dialog)||void 0===t?void 0:t.card,url:{bot:null===(r=null===(n=e.supports.dialog)||void 0===n?void 0:n.url)||void 0===r?void 0:r.bot,parentCommunication:(null===(o=e.supports.dialog)||void 0===o?void 0:o.url)?{}:void 0},update:null===(i=e.supports.dialog)||void 0===i?void 0:i.update}:void 0})}}}],St={"1.0.0":[{capability:{pages:{appButton:{},tabs:{}},stageView:{}},hostClientTypes:ht}],"1.9.0":[{capability:{location:{}},hostClientTypes:vt}],"2.0.0":[{capability:{people:{}},hostClientTypes:vt},{capability:{sharing:{}},hostClientTypes:[Te.desktop,Te.web]}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[Te.android,Te.desktop,Te.ios,Te.teamsRoomsAndroid,Te.teamsPhones,Te.teamsDisplays,Te.web]},{capability:{webStorage:{}},hostClientTypes:[Te.desktop]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[Te.android,Te.ios]}],"2.0.8":[{capability:{sharing:{}},hostClientTypes:[Te.android,Te.ios]}]},bt=lt.extend("generateBackCompatRuntimeConfig");function Et(e,t){const n=Object.assign({},e);for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&("object"!=typeof t[r]||Array.isArray(t[r])?r in e||(n[r]=t[r]):n[r]=Et(e[r]||{},t[r]));return n}function Tt(e,t,n){bt("generating back compat runtime config for %s",e);let r=Object.assign({},t.supports);bt("Supported capabilities in config before updating based on highestSupportedVersion: %o",r),Object.keys(n).forEach((t=>{_e(e,t)>=0&&n[t].forEach((e=>{void 0!==C.hostClientType&&e.hostClientTypes.includes(C.hostClientType)&&(r=Et(r,e.capability))}))}));const o={apiVersion:ut,hostVersionsInfo:De,isLegacyTeams:!0,supports:r};return bt("Runtime config after updating based on highestSupportedVersion: %o",o),o}const At=lt.extend("applyRuntimeConfig");function It(e){"string"==typeof e.apiVersion&&(At("Trying to apply runtime with string apiVersion, processing as v1: %o",e),e=Object.assign(Object.assign({},e),{apiVersion:1})),At("Fast-forwarding runtime %o",e);const t=Ct(e);At("Applying runtime %o",t),gt=Be(t)}const Pt="2.28.0",Ft=t("internal"),Rt=Ft.extend("ensureInitializeCalled"),Ot=Ft.extend("ensureInitialized");function kt(){if(!C.initializeCalled)throw Rt(h),new Error(h)}function Mt(e,...t){if(!C.initializeCompleted)throw Ot("%s. initializeCalled: %s",h,C.initializeCalled.toString()),new Error(h);if(t&&t.length>0){let e=!1;for(let n=0;n<t.length;n++)if(t[n]===C.frameContext){e=!0;break}if(!e)throw new Error(`This call is only allowed in following contexts: ${JSON.stringify(t)}. Current context: "${C.frameContext}".`)}return pt(e)}function Lt(e=s){const t=_e(C.clientSupportedSDKVersion,e);return!isNaN(t)&&t>=0}function Nt(){return C.hostClientType==Te.android||C.hostClientType==Te.ios||C.hostClientType==Te.ipados}function Ut(e=s){if(!Nt()){throw{errorCode:we.NOT_SUPPORTED_ON_PLATFORM}}if(!Lt(e)){throw{errorCode:we.OLD_PLATFORM}}}function Dt(e){let t=C.additionalValidOrigins.concat(e.filter((e=>"string"==typeof e&&p.test(e))));const n={};t=t.filter((e=>!n[e]&&(n[e]=!0,!0))),C.additionalValidOrigins=t}function Ht(e){return null==e}var xt=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};let Vt=[];const _t=t("validateOrigin");function Wt(){return xt(this,void 0,void 0,(function*(){yield jt()}))}function Bt(){return 0===Vt.length}function jt(){return xt(this,void 0,void 0,(function*(){return Bt()?Ye()?(Vt=d,d):fetch(f).then((e=>{if(!e.ok)throw new Error("Invalid Response from Fetch Call");return e.json().then((e=>{if(zt(JSON.stringify(e)))return Vt=e.validOrigins,Vt;throw new Error("Valid Origins List Is Invalid")}))})).catch((e=>(_t("validOrigins fetch call to CDN failed with error: %s. Defaulting to fallback list",e),Vt=d,Vt))):Vt}))}function zt(e){let t=JSON.parse(e);try{t=JSON.parse(e)}catch(e){return!1}if(!t.validOrigins)return!1;for(const e of t.validOrigins)try{new URL("https://"+e)}catch(t){return _t("isValidOriginsFromCDN call failed to validate origin: %s",e),!1}return!0}function qt(e,t){if("*."===e.substring(0,2)){const n=e.substring(1);if(t.length>n.length&&t.split(".").length===n.split(".").length&&t.substring(t.length-n.length)===n)return!0}else if(e===t)return!0;return!1}function $t(e){return jt().then((t=>{if(!Ke(e))return _t("Origin %s is invalid because it is not using https protocol. Protocol being used: %s",e,e.protocol),!1;const n=e.host;if(t.some((e=>qt(e,n))))return!0;for(const e of C.additionalValidOrigins){if(qt("https://"===e.substring(0,8)?e.substring(8):e,n))return!0}return _t("Origin %s is invalid because it is not an origin approved by this library or included in the call to app.initialize.\nOrigins approved by this library: %o\nOrigins included in app.initialize: %o",e,t,C.additionalValidOrigins),!1}))}var Gt,Jt=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};!function(e){let n,r;!function(e){let n;const r=t("messageChannels.telemetry");function i(){var e;return!(!Mt(gt)||!(null===(e=gt.supports.messageChannels)||void 0===e?void 0:e.telemetry))}e.getTelemetryPort=function(){return Jt(this,void 0,void 0,(function*(){if(n)return r("Returning telemetry port from cache"),n;if(!i())throw Le;return n=yield br(o("v1","messageChannels.telemetry.getTelemetryPort"),"messageChannels.telemetry.getTelemetryPort"),n}))},e.isSupported=i,e._clearTelemetryPort=function(){n=void 0}}(n=e.telemetry||(e.telemetry={})),function(e){let n;const r=t("messageChannels.dataLayer");function i(){var e;return!(!Mt(gt)||!(null===(e=gt.supports.messageChannels)||void 0===e?void 0:e.dataLayer))}e.getDataLayerPort=function(){return Jt(this,void 0,void 0,(function*(){if(n)return r("Returning dataLayer port from cache"),n;if(!i())throw Le;return n=yield br(o("v1","messageChannels.dataLayer.getDataLayerPort"),"messageChannels.dataLayer.getDataLayerPort"),n}))},e.isSupported=i,e._clearDataLayerPort=function(){n=void 0}}(r=e.dataLayer||(e.dataLayer={})),e.isSupported=function(){return!(!Mt(gt)||!gt.supports.messageChannels)}}(Gt||(Gt={}));const Kt="v1",Zt="v2";var Qt;!function(e){let t,n,r,i;function a(e,n){return new Promise(((r,o)=>{if(C.hostClientType!==Te.web){const t=nt(n.url);tt(t),r(Sr(e,"authentication.authenticate",[t.href,n.width,n.height,n.isExternal]).then((([e,t])=>{if(e)return t;throw new Error(t)})))}else t={success:r,fail:o},u(n)}))}function s(e,t){return new Promise((n=>{n(Sr(e,"authentication.getAuthToken",[null==t?void 0:t.resources,null==t?void 0:t.claims,null==t?void 0:t.silent,null==t?void 0:t.tenantId]))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function c(e){return new Promise((t=>{t(Sr(e,"authentication.getUser"))})).then((([e,t])=>{if(e)return t;throw t}))}function l(){d();try{pr.childWindow&&pr.childWindow.close()}finally{pr.childWindow=null,pr.childOrigin=null}}function u(e){l();let t=e.width||600,n=e.height||400;t=Math.min(t,pr.currentWindow.outerWidth-400),n=Math.min(n,pr.currentWindow.outerHeight-200);const r=nt(e.url.replace("{oauthRedirectMethod}","web"));tt(r);let o=void 0!==pr.currentWindow.screenLeft?pr.currentWindow.screenLeft:pr.currentWindow.screenX,i=void 0!==pr.currentWindow.screenTop?pr.currentWindow.screenTop:pr.currentWindow.screenY;o+=pr.currentWindow.outerWidth/2-t/2,i+=pr.currentWindow.outerHeight/2-n/2,pr.childWindow=pr.currentWindow.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+i+", left="+o+", width="+t+", height="+n),pr.childWindow?f():g("FailedToOpenWindow")}function d(){n&&(clearInterval(n),n=0),Bn("initialize"),Bn("navigateCrossDomain")}function f(){d(),n=pr.currentWindow.setInterval((()=>{if(!pr.childWindow||pr.childWindow.closed)g("CancelledByUser");else{const e=pr.childOrigin;try{pr.childOrigin="*",eo("ping")}finally{pr.childOrigin=e}}}),100),Wn(o(Kt,"authentication.authenticationWindow.registerInitializeHandler"),"initialize",(()=>[Ie.authentication,C.hostClientType])),Wn(o(Kt,"authentication.authenticationWindow.registerNavigateCrossDomainHandler"),"navigateCrossDomain",(()=>!1))}function p(e){try{t&&t.success(e)}finally{t=void 0,l()}}function g(e){try{t&&t.fail(new Error(e))}finally{t=void 0,l()}}e.initialize=function(){Wn(o(Kt,"authentication.registerAuthenticateSuccessHandler"),"authentication.authenticate.success",p,!1),Wn(o(Kt,"authentication.registerAuthenticateFailureHandler"),"authentication.authenticate.failure",g,!1)},e.registerAuthenticationHandlers=function(e){r=e},e.authenticate=function(e){const t=void 0!==e,n=t?e:r;if(!n)throw new Error("No parameters are provided for authentication");return Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.remove,Ie.task,Ie.stage,Ie.meetingStage),a(n.successCallback||n.failureCallback?o(Kt,"authentication.authenticate"):o(Zt,"authentication.authenticate"),n).then((e=>{try{return n&&n.successCallback?(n.successCallback(e),""):e}finally{t||(r=void 0)}})).catch((e=>{try{if(n&&n.failureCallback)return n.failureCallback(e.message),"";throw e}finally{t||(r=void 0)}}))},e.getAuthToken=function(e){return kt(),s(e&&(e.successCallback||e.failureCallback)?o(Kt,"authentication.getAuthToken"):o(Zt,"authentication.getAuthToken"),e).then((t=>e&&e.successCallback?(e.successCallback(t),""):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),"";throw t}))},e.getUser=function(e){return kt(),c(e&&(e.successCallback||e.failureCallback)?o(Kt,"authentication.getUser"):o(Zt,"authentication.getUser")).then((t=>e&&e.successCallback?(e.successCallback(t),null):t)).catch((t=>{const n=`Error returned, code = ${t.errorCode}, message = ${t.message}`;if(e&&e.failureCallback)return e.failureCallback(n),null;throw new Error(n)}))},e.notifySuccess=function(e,t){Mt(gt,Ie.authentication),Ar(o(t?Kt:Zt,"authentication.notifySuccess"),"authentication.authenticate.success",[e]),Xr(pr.parentWindow,(()=>setTimeout((()=>pr.currentWindow.close()),200)))},e.notifyFailure=function(e,t){Mt(gt,Ie.authentication),Ar(o(t?Kt:Zt,"authentication.notifyFailure"),"authentication.authenticate.failure",[e]),Xr(pr.parentWindow,(()=>setTimeout((()=>pr.currentWindow.close()),200)))},function(e){e.Public="public",e.EUDB="eudb",e.Other="other"}(i=e.DataResidency||(e.DataResidency={}))}(Qt||(Qt={}));const Xt="v2";function Yt(e,t){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.task,Ie.meetingStage),!rn.update.isSupported())throw Le;Ar(e,"tasks.updateTask",[t])}function en(e,t,n,r){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),!rn.url.isSupported())throw Le;r&&Wn(o(Xt,"dialog.url.registerMessageForParentHandler"),"messageForParent",r);Ar(e,"tasks.startTask",[rn.url.getDialogInfoFromUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),Bn("messageForParent")}))}function tn(e,t,n,r){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),!rn.url.bot.isSupported())throw Le;r&&Wn(o(Xt,"dialog.url.bot.registerMessageForParentHandler"),"messageForParent",r);Ar(e,"tasks.startTask",[rn.url.getDialogInfoFromBotUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),Bn("messageForParent")}))}function nn(e,t,n){if(Mt(gt,Ie.task),!rn.url.isSupported())throw Le;Ar(e,"tasks.completeTask",[t,n?Array.isArray(n)?n:[n]:[]])}var rn;!function(e){const t=[];function n(e){C.frameContext&&(C.frameContext===Ie.task?t.push(e):Bn("messageForChild"))}let r,i,a;e.initialize=function(){Wn(o(Xt,"dialog.registerMessageForChildHandler"),"messageForChild",n,!1)},function(e){let n,r;function i(e){return{url:e.url,height:e.size?e.size.height:Re.Small,width:e.size?e.size.width:Re.Small,title:e.title,fallbackUrl:e.fallbackUrl}}e.open=function(e,t,n){en(o(Xt,"dialog.url.open"),e,t,n)},e.submit=function(e,t){nn(o(Xt,"dialog.url.submit"),e,t)},function(e){function n(){var e,t;return Mt(gt)&&!!(null===(t=null===(e=gt.supports.dialog)||void 0===e?void 0:e.url)||void 0===t?void 0:t.parentCommunication)}e.sendMessageToParentFromDialog=function(e){if(Mt(gt,Ie.task),!n())throw Le;Ar(o(Xt,"dialog.url.parentCommunication.sendMessageToParentFromDialog"),"messageForParent",[e])},e.sendMessageToDialog=function(e){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),!n())throw Le;Ar(o(Xt,"dialog.url.parentCommunication.sendMessageToDialog"),"messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(Mt(gt,Ie.task),!n())throw Le;for(Bn("messageForChild"),Wn(o(Xt,"dialog.url.parentCommunication.registerMessageForChildHandler"),"messageForChild",e),t.reverse();t.length>0;){e(t.pop())}},e.isSupported=n}(n=e.parentCommunication||(e.parentCommunication={})),e.isSupported=function(){return Mt(gt)&&void 0!==(gt.supports.dialog&&gt.supports.dialog.url)},function(e){e.open=function(e,t,n){tn(o(Xt,"dialog.url.bot.open"),e,t,n)},e.isSupported=function(){return Mt(gt)&&void 0!==(gt.supports.dialog&&gt.supports.dialog.url&&gt.supports.dialog.url.bot)}}(r=e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=i,e.getDialogInfoFromBotUrlDialogInfo=function(e){const t=i(e);return t.completionBotId=e.completionBotId,t}}(r=e.url||(e.url={})),e.isSupported=function(){return!(!Mt(gt)||!gt.supports.dialog)},function(e){e.resize=function(e){Yt(o(Xt,"dialog.update.resize"),e)},e.isSupported=function(){return!(!Mt(gt)||!gt.supports.dialog)&&!!gt.supports.dialog.update}}(i=e.update||(e.update={})),function(e){function t(){const e=gt.hostVersionsInfo&&gt.hostVersionsInfo.adaptiveCardSchemaVersion&&!Je(gt.hostVersionsInfo.adaptiveCardSchemaVersion);return Mt(gt)&&void 0!==(e&&gt.supports.dialog&&gt.supports.dialog.card)}let n;function r(e){return{card:e.card,height:e.size?e.size.height:Re.Small,width:e.size?e.size.width:Re.Small,title:e.title}}function i(e){const t=r(e);return t.completionBotId=e.completionBotId,t}e.open=function(e,n){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),!t())throw Le;const i=r(e);Ar(o(Xt,"dialog.adaptiveCard.open"),"tasks.startTask",[i],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t,function(e){function t(){const e=gt.hostVersionsInfo&&gt.hostVersionsInfo.adaptiveCardSchemaVersion&&!Je(gt.hostVersionsInfo.adaptiveCardSchemaVersion);return Mt(gt)&&void 0!==(e&&gt.supports.dialog&&gt.supports.dialog.card&&gt.supports.dialog.card.bot)}e.open=function(e,n){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),!t())throw Le;const r=i(e);Ar(o(Xt,"dialog.adaptiveCard.bot.open"),"tasks.startTask",[r],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t}(n=e.bot||(e.bot={}))}(a=e.adaptiveCard||(e.adaptiveCard={}))}(rn||(rn={}));const on="v2";var an;!function(e){let t,n,r,i,a;!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(t=e.DisplayMode||(e.DisplayMode={}));function s(e){a&&a(e)||(Mt(gt),Ar(o(on,"menus.handleViewConfigItemPress"),"viewConfigItemPress",[e]))}function c(e){r&&r(e)||(Mt(gt),Ar(o(on,"menus.handleNavBarMenuItemPress"),"handleNavBarMenuItemPress",[e]))}function l(e){i&&i(e)||(Mt(gt),Ar(o(on,"menus.handleActionMenuItemPress"),"handleActionMenuItemPress",[e]))}function u(){return!(!Mt(gt)||!gt.supports.menus)}e.MenuItem=class{constructor(){this.enabled=!0,this.selected=!1}},function(e){e.dropDown="dropDown",e.popOver="popOver"}(n=e.MenuListType||(e.MenuListType={})),e.initialize=function(){Wn(o(on,"menus.registerNavBarMenuItemPressHandler"),"navBarMenuItemPress",c,!1),Wn(o(on,"menus.registerActionMenuItemPressHandler"),"actionMenuItemPress",l,!1),Wn(o(on,"menus.registerSetModuleViewHandler"),"setModuleView",s,!1)},e.setUpViews=function(e,t){if(Mt(gt),!u())throw Le;a=t,Ar(o(on,"menus.setUpViews"),"setUpViews",[e])},e.setNavBarMenu=function(e,t){if(Mt(gt),!u())throw Le;r=t,Ar(o(on,"menus.setNavBarMenu"),"setNavBarMenu",[e])},e.showActionMenu=function(e,t){if(Mt(gt),!u())throw Le;i=t,Ar(o(on,"menus.showActionMenu"),"showActionMenu",[e])},e.isSupported=u}(an||(an={}));const sn="v2",cn=5e3,ln=t("app");function un(e,t){if(Ye()){return ln.extend("initialize")("window object undefined at initialization"),Promise.resolve()}return $e((()=>hn(e,t)),cn,new Error("SDK initialization timed out."))}function dn(e){Ar(e,Cn.Messages.AppLoaded,[Pt])}function fn(e,t){Ar(e,Cn.Messages.ExpectedFailure,[t.reason,t.message])}function pn(e,t){Ar(e,Cn.Messages.Failure,[t.reason,t.message])}function gn(e){Ar(e,Cn.Messages.Success,[Pt])}const mn=ln.extend("initializeHelper");function hn(e,t){return new Promise((n=>{C.initializeCalled||(C.initializeCalled=!0,Hn(),C.initializePromise=mr(t,e).then((({context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:r=s})=>{C.frameContext=e,C.hostClientType=t,C.clientSupportedSDKVersion=r;try{mn("Parsing %s",n);const e=JSON.parse(n);if(mn("Checking if %o is a valid runtime object",null!=e?e:"null"),!e||!e.apiVersion)throw new Error("Received runtime config is invalid");n&&It(e)}catch(e){if(!(e instanceof SyntaxError))throw e;try{mn("Attempting to parse %s as an SDK version",n),isNaN(_e(n,s))||(C.clientSupportedSDKVersion=n);const e=JSON.parse(r);if(mn("givenRuntimeConfig parsed to %o",null!=e?e:"null"),!e)throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");It(e)}catch(e){if(!(e instanceof SyntaxError))throw e;It(Tt(C.clientSupportedSDKVersion,mt,St))}}C.initializeCompleted=!0})),Qt.initialize(),an.initialize(),Ln.config.initialize(),rn.initialize()),Array.isArray(t)&&Dt(t),void 0!==C.initializePromise?n(C.initializePromise):mn("GlobalVars.initializePromise is unexpectedly undefined")}))}function wn(e,t){!Ht(t)&&kt(),qn(e,t)}function vn(e,t){return new Promise((n=>{Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.task,Ie.stage,Ie.meetingStage),n(vr(e,"executeDeepLink",t))}))}var Cn;function yn(e){var t;return{actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:Ae.teams,clientType:e.hostClientType?e.hostClientType:Te.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:C.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,isBackgroundLoad:e.isBackgroundLoad,sourceOrigin:e.sourceOrigin},user:{id:null!==(t=e.userObjectId)&&void 0!==t?t:"",displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0,dialogParameters:e.dialogParameters||{}}}!function(e){const n=t("app");let r,i,a;e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(r=e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(i=e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return C.initializeCompleted},e.getFrameContext=function(){return C.frameContext},function(){if(Ye())return;const e=document.getElementsByTagName("script"),t=e&&e[e.length-1]&&e[e.length-1].src,r="Today, teamsjs can only be used from a single script or you may see undefined behavior. This log line is used to help detect cases where teamsjs is loaded multiple times -- it is always written. The presence of the log itself does not indicate a multi-load situation, but multiples of these log lines will. If you would like to use teamjs from more than one script at the same time, please open an issue at https://github.com/OfficeDev/microsoft-teams-library-js/issues";t&&0!==t.length?n("teamsjs is being used from %s. %s",t,r):n("teamsjs is being used from a script tag embedded directly in your html. %s",r)}(),e.initialize=function(e){return Wt(),un(o(sn,"app.initialize"),e)},e._initialize=function(e){pr.currentWindow=e},e._uninitialize=function(){C.initializeCalled&&(xn(),C.initializeCalled=!1,C.initializeCompleted=!1,C.initializePromise=void 0,C.additionalValidOrigins=[],C.frameContext=void 0,C.hostClientType=void 0,C.isFramelessWindow=!1,Gt.telemetry._clearTelemetryPort(),Gt.dataLayer._clearDataLayerPort(),hr())},e.getContext=function(){return new Promise((e=>{kt(),e(wr(o(sn,"app.getContext"),"getContext"))})).then((e=>yn(e)))},e.notifyAppLoaded=function(){kt(),dn(o(sn,"app.notifyAppLoaded"))},e.notifySuccess=function(){kt(),gn(o(sn,"app.notifySuccess"))},e.notifyFailure=function(e){kt(),pn(o(sn,"app.notifyFailure"),e)},e.notifyExpectedFailure=function(e){kt(),fn(o(sn,"app.notifyExpectedFailure"),e)},e.registerOnThemeChangeHandler=function(e){wn(o(sn,"app.registerOnThemeChangeHandler"),e)},e.openLink=function(e){return vn(o(sn,"app.openLink"),e)},function(e){e.registerBeforeSuspendOrTerminateHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerBeforeSuspendOrTerminateHandler] Handler cannot be null");Mt(gt),Xn(e)},e.registerOnResumeHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerOnResumeHandler] Handler cannot be null");Mt(gt),Yn(e)}}(a=e.lifecycle||(e.lifecycle={}))}(Cn||(Cn={}));const Sn="v2";function bn(e,t){return new Promise((n=>{if(Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.remove,Ie.task,Ie.stage,Ie.meetingStage),!Ln.isSupported())throw Le;n(Cr(e,"navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",t))}))}function En(e){return new Promise((t=>{if(Mt(gt),!Ln.backStack.isSupported())throw Le;t(Cr(e,"navigateBack","Back navigation is not supported in the current client or context."))}))}function Tn(e,t){return new Promise((n=>{if(Mt(gt),!Ln.tabs.isSupported())throw Le;n(Cr(e,"navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",t))}))}function An(e,t){if(Mt(gt),!Ln.isSupported())throw Le;Ar(e,"returnFocus",[t])}function In(e,t){return new Promise((n=>{if(Mt(gt),!Ln.tabs.isSupported())throw Le;n(wr(e,"getTabInstances",t))}))}function Pn(e,t){return new Promise((n=>{if(Mt(gt),!Ln.tabs.isSupported())throw Le;n(wr(e,"getMruTabInstances",t))}))}function Fn(e,t){if(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),!Ln.isSupported())throw Le;Ar(e,"shareDeepLink",[t.subPageId,t.subPageLabel,t.subPageWebUrl])}function Rn(e,t){if(Mt(gt,Ie.content),!Ln.isSupported())throw Le;Ar(e,"setFrameContext",[t])}function On(e,t){if(Mt(gt,Ie.settings,Ie.remove),!Ln.config.isSupported())throw Le;Ar(e,"settings.setValidityState",[t])}function kn(e){return new Promise((t=>{if(Mt(gt,Ie.content,Ie.settings,Ie.remove,Ie.sidePanel),!Ln.isSupported())throw Le;t(wr(e,"settings.getSettings"))}))}function Mn(e,t){return new Promise((n=>{if(Mt(gt,Ie.content,Ie.settings,Ie.sidePanel),!Ln.config.isSupported())throw Le;n(vr(e,"settings.setSettings",t))}))}var Ln;!function(e){let t,n,r,i,a,s,c,l;function u(e){Rn(o(Sn,"pages.setCurrentFrame"),e)}function d(){return!(!Mt(gt)||!gt.supports.pages)}!function(e){e[e.PreviousLandmark=0]="PreviousLandmark",e[e.NextLandmark=1]="NextLandmark",e[e.Read=2]="Read",e[e.Compose=3]="Compose"}(t=e.EnterFocusType||(e.EnterFocusType={})),function(e){e[e.PreviousLandmark=0]="PreviousLandmark",e[e.NextLandmark=1]="NextLandmark",e[e.GoToActivityFeed=2]="GoToActivityFeed"}(n=e.ReturnFocusType||(e.ReturnFocusType={})),e.returnFocus=function(t){const n=o(Sn,"pages.returnFocus");if(Mt(gt),!e.isSupported())throw Le;if(void 0===t&&Ar(n,"returnFocus",[!1]),"boolean"==typeof t)Ar(n,"returnFocus",[t]);else switch(t){case e.ReturnFocusType.PreviousLandmark:case e.ReturnFocusType.GoToActivityFeed:Ar(n,"returnFocus",[!1,t]);break;case e.ReturnFocusType.NextLandmark:Ar(n,"returnFocus",[!0,t])}},e.registerFocusEnterHandler=function(e){zn(o(Sn,"pages.registerFocusEnterHandler"),"focusEnter",e,[],(()=>{if(!d())throw Le}))},e.setCurrentFrame=u,e.initializeWithFrameContext=function(e,t,n){Wt(),un(o(Sn,"pages.initializeWithFrameContext"),n).then((()=>t&&t())),u(e)},e.getConfig=function(){return kn(o(Sn,"pages.getConfig."))},e.navigateCrossDomain=function(e){return bn(o(Sn,"pages.navigateCrossDomain"),e)},e.navigateToApp=function(e){return new Promise((t=>{if(Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.task,Ie.stage,Ie.meetingStage),!d())throw Le;const n=o(Sn,"pages.navigateToApp");gt.isLegacyTeams?t(vr(n,"executeDeepLink",Ge(e))):t(vr(n,"pages.navigateToApp",e))}))},e.shareDeepLink=function(e){return Fn(o(Sn,"pages.shareDeepLink"),e)},e.registerFullScreenHandler=function(e){zn(o(Sn,"pages.registerFullScreenHandler"),"fullScreenChange",e,[],(()=>{if(!Ht(e)&&!d())throw Le}))},e.isSupported=d,function(e){e.navigateToTab=function(e){return Tn(o(Sn,"pages.tabs.navigateToTab"),e)},e.getTabInstances=function(e){return In(o(Sn,"pages.tabs.getTabInstances"),e)},e.getMruTabInstances=function(e){return Pn(o(Sn,"pages.tabs.getMruTabInstances"),e)},e.isSupported=function(){return!(!Mt(gt)||!gt.supports.pages)&&!!gt.supports.pages.tabs}}(r=e.tabs||(e.tabs={})),function(e){let t,n;function r(e,n,r){!Ht(n)&&Mt(gt,Ie.settings),r&&r(),t=n,!Ht(n)&&Ar(e,"registerHandler",["save"])}function i(e,t,r){!Ht(t)&&Mt(gt,Ie.remove,Ie.settings),r&&r(),n=t,!Ht(t)&&Ar(e,"registerHandler",["remove"])}function a(e){const n=new s(e);t?t(n):pr.childWindow?eo("settings.save",[e]):n.notifySuccess()}e.initialize=function(){Wn(o(Sn,"pages.config.registerSettingsSaveHandler"),"settings.save",a,!1),Wn(o(Sn,"pages.config.registerSettingsRemoveHandler"),"settings.remove",c,!1)},e.setValidityState=function(e){return On(o(Sn,"pages.config.setValidityState"),e)},e.setConfig=function(e){return Mn(o(Sn,"pages.config.setConfig"),e)},e.registerOnSaveHandler=function(e){r(o(Sn,"pages.config.registerOnSaveHandler"),e,(()=>{if(!Ht(e)&&!u())throw Le}))},e.registerOnSaveHandlerHelper=r,e.registerOnRemoveHandler=function(e){i(o(Sn,"pages.config.registerOnRemoveHandler"),e,(()=>{if(!Ht(e)&&!u())throw Le}))},e.registerOnRemoveHandlerHelper=i,e.registerChangeConfigHandler=function(e){zn(o(Sn,"pages.config.registerChangeConfigHandler"),"changeSettings",e,[Ie.content],(()=>{if(!u())throw Le}))};class s{constructor(e){this.notified=!1,this.result=e||{}}notifySuccess(){this.ensureNotNotified(),Ar(o(Sn,"pages.saveEvent.notifySuccess"),"settings.save.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),Ar(o(Sn,"pages.saveEvent.notifyFailure"),"settings.save.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")}}function c(){const e=new l;n?n(e):pr.childWindow?eo("settings.remove",[]):e.notifySuccess()}class l{constructor(){this.notified=!1}notifySuccess(){this.ensureNotNotified(),Ar(o(Sn,"pages.removeEvent.notifySuccess"),"settings.remove.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),Ar(o(Sn,"pages.removeEvent.notifyFailure"),"settings.remove.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The removeEventType may only notify success or failure once.")}}function u(){return!(!Mt(gt)||!gt.supports.pages)&&!!gt.supports.pages.config}e.isSupported=u}(i=e.config||(e.config={})),function(e){let t;function n(){return En(o(Sn,"pages.backStack.navigateBack"))}function r(e,n,r){!Ht(n)&&Mt(gt),r&&r(),t=n,!Ht(n)&&Ar(e,"registerHandler",["backButton"])}function i(){t&&t()||(pr.childWindow?eo("backButtonPress",[]):n())}function a(){return!(!Mt(gt)||!gt.supports.pages)&&!!gt.supports.pages.backStack}e._initialize=function(){Wn(o(Sn,"pages.backStack.registerBackButtonPressHandler"),"backButtonPress",i,!1)},e.navigateBack=n,e.registerBackButtonHandler=function(e){r(o(Sn,"pages.backStack.registerBackButtonHandler"),e,(()=>{if(!Ht(e)&&!a())throw Le}))},e.registerBackButtonHandlerHelper=r,e.isSupported=a}(a=e.backStack||(e.backStack={})),function(e){function t(){return!(!Mt(gt)||!gt.supports.pages)&&!!gt.supports.pages.fullTrust}e.enterFullscreen=function(){if(Mt(gt,Ie.content),!t())throw Le;Ar(o(Sn,"pages.fullTrust.enterFullscreen"),"enterFullscreen",[])},e.exitFullscreen=function(){if(Mt(gt,Ie.content),!t())throw Le;Ar(o(Sn,"pages.fullTrust.exitFullscreen"),"exitFullscreen",[])},e.isSupported=t}(s=e.fullTrust||(e.fullTrust={})),function(e){function t(){return!(!Mt(gt)||!gt.supports.pages)&&!!gt.supports.pages.appButton}e.onClick=function(e){zn(o(Sn,"pages.appButton.onClick"),"appButtonClick",e,[Ie.content],(()=>{if(!t())throw Le}))},e.onHoverEnter=function(e){zn(o(Sn,"pages.appButton.onHoverEnter"),"appButtonHoverEnter",e,[Ie.content],(()=>{if(!t())throw Le}))},e.onHoverLeave=function(e){zn(o(Sn,"pages.appButton.onHoverLeave"),"appButtonHoverLeave",e,[Ie.content],(()=>{if(!t())throw Le}))},e.isSupported=t}(c=e.appButton||(e.appButton={})),function(e){function t(){return!(!Mt(gt)||!gt.supports.pages)&&!!gt.supports.pages.currentApp}e.navigateTo=function(e){return new Promise((n=>{if(Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.task,Ie.stage,Ie.meetingStage),!t())throw Le;n(yr(o(Sn,"pages.currentApp.navigateTo"),"pages.currentApp.navigateTo",e))}))},e.navigateToDefaultPage=function(){return new Promise((e=>{if(Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.task,Ie.stage,Ie.meetingStage),!t())throw Le;e(yr(o(Sn,"pages.currentApp.navigateToDefaultPage"),"pages.currentApp.navigateToDefaultPage"))}))},e.isSupported=t}(l=e.currentApp||(e.currentApp={}))}(Ln||(Ln={}));var Nn=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Un=t("handlers");class Dn{static initializeHandlers(){Dn.handlers.themeChange=$n,Dn.handlers.load=Jn,Dn.handlers.beforeUnload=Qn,Ln.backStack._initialize()}static uninitializeHandlers(){Dn.handlers={},Dn.themeChangeHandler=null,Dn.loadHandler=null,Dn.beforeUnloadHandler=null,Dn.beforeSuspendOrTerminateHandler=null,Dn.resumeHandler=null}}function Hn(){Dn.initializeHandlers()}function xn(){Dn.uninitializeHandlers()}Dn.handlers={},Dn.themeChangeHandler=null,Dn.loadHandler=null,Dn.beforeUnloadHandler=null,Dn.beforeSuspendOrTerminateHandler=null,Dn.resumeHandler=null;const Vn=Un.extend("callHandler");function _n(e,t){const n=Dn.handlers[e];if(n){Vn("Invoking the registered handler for message %s with arguments %o",e,t);return[!0,n.apply(this,t)]}return pr.childWindow?(eo(e,t),[!1,void 0]):(Vn("Handler for action message %s not found.",e),[!1,void 0])}function Wn(e,t,n,r=!0,o=[]){n?(Dn.handlers[t]=n,r&&Ar(e,"registerHandler",[t,...o])):delete Dn.handlers[t]}function Bn(e){delete Dn.handlers[e]}function jn(e){return null!=Dn.handlers[e]}function zn(e,t,n,r,o){n&&Mt(gt,...r),o&&o(),Wn(e,t,n)}function qn(e,t){Dn.themeChangeHandler=t,!Ht(t)&&Ar(e,"registerHandler",["themeChange"])}function $n(e){Dn.themeChangeHandler&&Dn.themeChangeHandler(e),pr.childWindow&&eo("themeChange",[e])}function Gn(e,t){Dn.loadHandler=t,!Ht(t)&&Ar(e,"registerHandler",["load"])}function Jn(e){const t=Kn(e);Dn.resumeHandler?(Dn.resumeHandler(t),pr.childWindow&&eo("load",[t])):Dn.loadHandler&&(Dn.loadHandler(e),pr.childWindow&&eo("load",[e]))}function Kn(e){return{entityId:e.entityId,contentUrl:new URL(e.contentUrl)}}function Zn(e,t){Dn.beforeUnloadHandler=t,!Ht(t)&&Ar(e,"registerHandler",["beforeUnload"])}function Qn(){return Nn(this,void 0,void 0,(function*(){const e=()=>{Ar(o("v2","handleBeforeUnload"),"readyToUnload",[])};Dn.beforeSuspendOrTerminateHandler?(yield Dn.beforeSuspendOrTerminateHandler(),pr.childWindow?eo("beforeUnload"):e()):Dn.beforeUnloadHandler&&Dn.beforeUnloadHandler(e)||(pr.childWindow?eo("beforeUnload"):e())}))}function Xn(e){Dn.beforeSuspendOrTerminateHandler=e,!Ht(e)&&Ar(o("v2","registerBeforeSuspendOrTerminateHandler"),"registerHandler",["beforeUnload"])}function Yn(e){Dn.resumeHandler=e,!Ht(e)&&Ar(o("v2","registerOnResumeHandler"),"registerHandler",["load"])}class er{constructor(e=We()){this.uuid=e,st(e)}toString(){return this.uuid}}var tr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const nr=e=>{const{uuid:t}=e,n=tr(e,["uuid"]),r=null==t?void 0:t.toString();return Object.assign(Object.assign({},n),{uuidAsString:r})},rr=e=>{const{uuidAsString:t}=e,n=tr(e,["uuidAsString"]);return Object.assign(Object.assign({},n),{uuid:t?new er(t):void 0})},or=e=>{const{uuidAsString:t}=e,n=tr(e,["uuidAsString"]);return Object.assign(Object.assign({},n),{uuid:t?new er(t):void 0})},ir=e=>{const{uuid:t}=e,n=tr(e,["uuid"]),r=null==t?void 0:t.toString();return Object.assign(Object.assign({},n),{uuidAsString:r})},ar=t("nestedAppAuthUtils"),sr=ar.extend("tryPolyfillWithNestedAppAuthBridge");function cr(e,t,n){var r;const o=sr;if(C.isFramelessWindow)return void o("Cannot polyfill nestedAppAuthBridge as current window is frameless");if(!t)return void o("Cannot polyfill nestedAppAuthBridge as current window does not exist");const i=(()=>{try{return JSON.parse(e)}catch(e){return null}})();if(!i||!(null===(r=i.supports)||void 0===r?void 0:r.nestedAppAuth))return void o("Cannot polyfill nestedAppAuthBridge as current hub does not support nested app auth");const a=t;if(a.nestedAppAuthBridge)return void o("nestedAppAuthBridge already exists on current window, skipping polyfill");const s=ur(a,n);s&&(a.nestedAppAuthBridge=s)}const lr=ar.extend("createNestedAppAuthBridge");function ur(e,t){const n=lr;if(!e)return n("nestedAppAuthBridge cannot be created as current window does not exist"),null;const{onMessage:r,sendPostMessage:o}=t,i=e=>t=>r(t,e);return{addEventListener:(t,r)=>{"message"===t?e.addEventListener(t,i(r)):n(`Event ${t} is not supported by nestedAppAuthBridge`)},postMessage:e=>{const t=(()=>{try{return JSON.parse(e)}catch(e){return null}})();t&&"object"==typeof t&&"NestedAppAuthRequest"===t.messageType?o(e):n("Unrecognized data format received by app, message being ignored. Message: %o",e)},removeEventListener:(t,n)=>{e.removeEventListener(t,i(n))}}}var dr=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const fr=t("communication");class pr{}class gr{}function mr(e,t){if(gr.messageListener=e=>dr(this,void 0,void 0,(function*(){return yield Lr(e)})),pr.currentWindow=pr.currentWindow||Xe(),pr.parentWindow=pr.currentWindow.parent!==pr.currentWindow.self?pr.currentWindow.parent:pr.currentWindow.opener,pr.topWindow=pr.currentWindow.top,(pr.parentWindow||e)&&pr.currentWindow.addEventListener("message",gr.messageListener,!1),!pr.parentWindow){const e=pr.currentWindow;if(!e.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));C.isFramelessWindow=!0,e.onNativeMessage=jr}try{return pr.parentOrigin="*",Sr(t,"initialize",[Pt,ut,e]).then((([e,t,n,r])=>(cr(r,pr.currentWindow,{onMessage:Ur,sendPostMessage:Pr}),{context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:r})))}finally{pr.parentOrigin=null}}function hr(){pr.currentWindow&&pr.currentWindow.removeEventListener("message",gr.messageListener,!1),pr.currentWindow=null,pr.parentWindow=null,pr.parentOrigin=null,pr.childWindow=null,pr.childOrigin=null,gr.parentMessageQueue=[],gr.childMessageQueue=[],gr.nextMessageId=0,gr.callbacks.clear(),gr.promiseCallbacks.clear(),gr.portCallbacks.clear(),gr.legacyMessageIdsToUuidMap={}}function wr(e,t,...n){return Sr(e,t,n).then((([e])=>e))}function vr(e,t,...n){return Sr(e,t,n).then((([e,t])=>{if(!e)throw new Error(t)}))}function Cr(e,t,n,...r){return Sr(e,t,r).then((([e,t])=>{if(!e)throw new Error(t||n)}))}function yr(e,t,...n){return Sr(e,t,n).then((([e,t])=>{if(e)throw e;return t}))}function Sr(e,t,n=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return new Promise((r=>{r(Tr(kr(e,t,n).uuid))}))}function br(e,t,n=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return Er(kr(e,t,n).uuid)}function Er(e){return new Promise(((t,n)=>{gr.portCallbacks.set(e,((e,r)=>{e instanceof MessagePort?t(e):n(r&&r.length>0?r[0]:new Error("Host responded without port or error details."))}))}))}function Tr(e){return new Promise((t=>{gr.promiseCallbacks.set(e,t)}))}function Ar(e,t,n,r){let o;if(n instanceof Function?r=n:n instanceof Array&&(o=n),!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);const a=kr(e,t,o);r&&gr.callbacks.set(a.uuid,r)}gr.parentMessageQueue=[],gr.childMessageQueue=[],gr.topMessageQueue=[],gr.nextMessageId=0,gr.callbacks=new Map,gr.promiseCallbacks=new Map,gr.portCallbacks=new Map,gr.legacyMessageIdsToUuidMap={};const Ir=fr.extend("sendNestedAuthRequestToTopWindow");function Pr(e){const t=Ir,n=pr.topWindow,r=no(e);return t("Message %i information: %o",r.uuid,{actionName:r.func}),Rr(n,r)}const Fr=fr.extend("sendRequestToTargetWindowHelper");function Rr(e,t){const n=Fr,r=Kr(e),o=nr(t);if(C.isFramelessWindow)pr.currentWindow&&pr.currentWindow.nativeInterface&&(n(`Sending message %i to ${r} via framelessPostMessage interface`,o.uuidAsString),pr.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(o)));else{const i=Jr(e);e&&i?(n(`Sending message %i to ${r} via postMessage`,o.uuidAsString),e.postMessage(o,i)):(n(`Adding message %i to ${r} message queue`,o.uuidAsString),Gr(e).push(t))}return t}const Or=fr.extend("sendMessageToParentHelper");function kr(e,t,n){const r=Or,o=pr.parentWindow,i=to(e,t,n);return r("Message %i information: %o",i.uuid,{actionName:t,args:n}),Rr(o,i)}const Mr=fr.extend("processMessage");function Lr(e){return dr(this,void 0,void 0,(function*(){if(!e||!e.data||"object"!=typeof e.data)return void Mr("Unrecognized message format received by app, message being ignored. Message: %o",e);const t=e.source||e.originalEvent&&e.originalEvent.source,n=e.origin||e.originalEvent&&e.originalEvent.origin;return Hr(t,n).then((r=>{r?(xr(t,n),t===pr.parentWindow?jr(e):t===pr.childWindow&&qr(e)):Mr("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin")}))}))}const Nr=fr.extend("processAuthBridgeMessage");function Ur(e,t){var n,r;const o=Nr;if(!e||!e.data||"object"!=typeof e.data)return void o("Unrecognized message format received by app, message being ignored. Message: %o",e);const{args:i}=e.data,[,a]=null!=i?i:[],s=(()=>{try{return JSON.parse(a)}catch(e){return null}})();if(!s||"object"!=typeof s||"NestedAppAuthResponse"!==s.messageType)return void o("Unrecognized data format received by app, message being ignored. Message: %o",e);const c=e.source||(null===(n=null==e?void 0:e.originalEvent)||void 0===n?void 0:n.source),l=e.origin||(null===(r=null==e?void 0:e.originalEvent)||void 0===r?void 0:r.origin);c?Hr(c,l)?(pr.topWindow&&!pr.topWindow.closed&&c!==pr.topWindow||(pr.topWindow=c,pr.topOrigin=l),pr.topWindow&&pr.topWindow.closed&&(pr.topWindow=null,pr.topOrigin=null),Qr(pr.topWindow),t(a)):o("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin"):o("Message being ignored by app because it is coming for a target that is null")}const Dr=fr.extend("shouldProcessMessage");function Hr(e,t){return dr(this,void 0,void 0,(function*(){if(pr.currentWindow&&e===pr.currentWindow)return Dr("Should not process message because it is coming from the current window"),!1;if(pr.currentWindow&&pr.currentWindow.location&&t&&t===pr.currentWindow.location.origin)return!0;{let e;try{e=new URL(t)}catch(e){return Dr("Message has an invalid origin of %s",t),!1}const n=yield $t(e);return n||Dr("Message has an invalid origin of %s",t),n}}))}function xr(e,t){C.isFramelessWindow||pr.parentWindow&&!pr.parentWindow.closed&&e!==pr.parentWindow?pr.childWindow&&!pr.childWindow.closed&&e!==pr.childWindow||(pr.childWindow=e,pr.childOrigin=t):(pr.parentWindow=e,pr.parentOrigin=t),pr.parentWindow&&pr.parentWindow.closed&&(pr.parentWindow=null,pr.parentOrigin=null),pr.childWindow&&pr.childWindow.closed&&(pr.childWindow=null,pr.childOrigin=null),Qr(pr.parentWindow),Qr(pr.childWindow)}const Vr=fr.extend("handleParentMessage");function _r(e){var t;const n=Vr;if(!e.uuid)return gr.legacyMessageIdsToUuidMap[e.id];{const t=e.uuid,n=Wr(gr.callbacks,t);if(n)return n;const r=Wr(gr.promiseCallbacks,t);if(r)return r;const o=Wr(gr.portCallbacks,t);if(o)return o}n(`Received a message with uuid: ${null===(t=e.uuid)||void 0===t?void 0:t.toString()} and legacyId: %i that failed to produce a callbackId`,e.id)}function Wr(e,t){if(t){const n=[...e].find((([e,n])=>e.toString()===t.toString()));if(n)return n[0]}}function Br(e,t){const n=Wr(t,e.uuid);n&&t.delete(n),e.uuid?gr.legacyMessageIdsToUuidMap={}:delete gr.legacyMessageIdsToUuidMap[e.id]}function jr(e){const t=Vr;if("id"in e.data&&"number"==typeof e.data.id){const n=e.data,r=or(n),o=_r(r);if(o){const n=gr.callbacks.get(o);t("Received a response from parent for message %i",o),n&&(t("Invoking the registered callback for message %i with arguments %o",o,r.args),n.apply(null,[...r.args,r.isPartialResponse]),zr(e)||(t("Removing registered callback for message %i",o),Br(r,gr.callbacks)));const i=gr.promiseCallbacks.get(o);i&&(t("Invoking the registered promise callback for message %i with arguments %o",o,r.args),i(r.args),t("Removing registered promise callback for message %i",o),Br(r,gr.promiseCallbacks));const a=gr.portCallbacks.get(o);if(a){let n;t("Invoking the registered port callback for message %i with arguments %o",o,r.args),e.ports&&e.ports[0]instanceof MessagePort&&(n=e.ports[0]),a(n,r.args),t("Removing registered port callback for message %i",o),Br(r,gr.portCallbacks)}r.uuid&&(gr.legacyMessageIdsToUuidMap={})}}else if("func"in e.data&&"string"==typeof e.data.func){const n=e.data;t("Received an action message %s from parent",n.func),_n(n.func,n.args)}else t("Received an unknown message: %O",e)}function zr(e){return!0===e.data.isPartialResponse}function qr(e){if("id"in e.data&&"func"in e.data){const t=rr(e.data),[n,r]=_n(t.func,t.args);n&&void 0!==r?Yr(t.id,t.uuid,Array.isArray(r)?r:[r]):Ar(o("v2","tasks.startTask"),t.func,t.args,((...e)=>{if(pr.childWindow){const n=e.pop();Yr(t.id,t.uuid,e,n)}}))}}function $r(){return pr.topWindow!==pr.parentWindow}function Gr(e){return e===pr.topWindow&&$r()?gr.topMessageQueue:e===pr.parentWindow?gr.parentMessageQueue:e===pr.childWindow?gr.childMessageQueue:[]}function Jr(e){return e===pr.topWindow&&$r()?pr.topOrigin:e===pr.parentWindow?pr.parentOrigin:e===pr.childWindow?pr.childOrigin:null}function Kr(e){return e===pr.topWindow&&$r()?"top":e===pr.parentWindow?"parent":e===pr.childWindow?"child":null}const Zr=fr.extend("flushMessageQueue");function Qr(e){const t=Jr(e),n=Gr(e),r=Kr(e);for(;e&&t&&n.length>0;){const o=n.shift();if(o){const n=nr(o);Zr("Flushing message %i from "+r+" message queue via postMessage.",null==n?void 0:n.uuidAsString),e.postMessage(n,t)}}}function Xr(e,t){let n;n=pr.currentWindow.setInterval((()=>{0===Gr(e).length&&(clearInterval(n),t())}),100)}function Yr(e,t,n,r){const o=pr.childWindow,i=ro(e,t,n,r),a=ir(i),s=Jr(o);o&&s&&o.postMessage(a,s)}function eo(e,t){const n=pr.childWindow,r=oo(e,t),o=Jr(n);n&&o?n.postMessage(r,o):Gr(n).push(r)}function to(e,t,n){const r=gr.nextMessageId++,o=new er;return gr.legacyMessageIdsToUuidMap[r]=o,{id:r,uuid:o,func:t,timestamp:Date.now(),args:n||[],apiVersionTag:e}}function no(e){const t=gr.nextMessageId++,n=new er;return gr.legacyMessageIdsToUuidMap[t]=n,{id:t,uuid:n,func:"nestedAppAuth.execute",timestamp:Date.now(),args:[],data:e}}function ro(e,t,n,r){return{id:e,uuid:t,args:n||[],isPartialResponse:r}}function oo(e,t){return{func:e,args:t||[]}}var io,ao,so,co;!function(e){function t(){return!(!Mt(gt)||!gt.supports.logs)}e.registerGetLogHandler=function(e){if(!Ht(e)&&Mt(gt),!Ht(e)&&!t())throw Le;e?Wn(o("v1","log.request"),"log.request",(()=>{const t=e();Ar(o("v1","log.receive"),"log.receive",[t])})):Bn("log.request")},e.isSupported=t}(io||(io={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(ao||(ao={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(so||(so={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(co||(co={}));const lo="v1";function uo(e,t){Mt(gt),Ar(o(lo,"uploadCustomApp"),"uploadCustomApp",[e],t||Ve())}function fo(e,t,n){Mt(gt),Ar(o(lo,"sendCustomMessage"),e,t,n)}function po(e,t){if(Mt(gt),!pr.childWindow)throw new Error("The child window has not yet been initialized or is not present");eo(e,t)}function go(e,t){Mt(gt),Wn(o(lo,"registerCustomHandler"),e,((...e)=>t.apply(this,e)))}function mo(e,t){Mt(gt),Wn(o(lo,"registerUserSettingsChangeHandler"),"userSettingsChange",t,!0,[e])}function ho(e){Mt(gt,Ie.content,Ie.task);const t=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId,e.sizeInBytes];Ar(o(lo,"openFilePreview"),"openFilePreview",t)}const wo="v1";var vo,Co;!function(e){function t(){return!(!Mt(gt)||!gt.supports.conversations)}e.openConversation=function(e){return new Promise((n=>{if(Mt(gt,Ie.content),!t())throw Le;const r=vr(o(wo,"conversations.openConversation"),"conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&Wn(o(wo,"conversations.registerStartConversationHandler"),"startConversation",((t,n,r,o)=>{var i;return null===(i=e.onStartConversation)||void 0===i?void 0:i.call(e,{subEntityId:t,conversationId:n,channelId:r,entityId:o})})),e.onCloseConversation&&Wn(o(wo,"conversations.registerCloseConversationHandler"),"closeConversation",((t,n,r,o)=>{var i;return null===(i=e.onCloseConversation)||void 0===i?void 0:i.call(e,{subEntityId:t,conversationId:n,channelId:r,entityId:o})})),n(r)}))},e.closeConversation=function(){if(Mt(gt,Ie.content),!t())throw Le;Ar(o(wo,"conversations.closeConversation"),"conversations.closeConversation"),Bn("startConversation"),Bn("closeConversation")},e.getChatMembers=function(){return new Promise((e=>{if(Mt(gt),!t())throw Le;e(wr(o(wo,"conversations.getChatMember"),"getChatMembers"))}))},e.isSupported=t}(vo||(vo={})),function(e){let t;!function(e){function t(){var e;return Mt(gt)&&!!(null===(e=gt.hostVersionsInfo)||void 0===e?void 0:e.appEligibilityInformation)}e.isSupported=t,e.getEligibilityInfo=function(){if(Mt(gt),!t())throw Le;return gt.hostVersionsInfo.appEligibilityInformation}}(t=e.eligibility||(e.eligibility={}))}(Co||(Co={}));const yo="v2";var So;!function(e){const t="Action.Execute";let n,r,i;function a(e){if(e.requestType===n.ActionExecuteInvokeRequest){const n=e;if(n.type!==t){throw{errorCode:i.INTERNAL_ERROR,message:`Invalid action type ${n.type}. Action type must be "${t}"`}}}else if(e.requestType===n.QueryMessageExtensionRequest){if(e.commandId.length>64)throw new Error("originalRequestInfo.commandId exceeds the maximum size of 64 characters");if(e.parameters.length>5)throw new Error("originalRequestInfo.parameters exceeds the maximum size of 5");for(const t of e.parameters){if(t.name.length>64)throw new Error("originalRequestInfo.parameters.name exceeds the maximum size of 64 characters");if(t.value.length>512)throw new Error("originalRequestInfo.parameters.value exceeds the maximum size of 512 characters")}}}function s(){return!(!Mt(gt)||!gt.supports.externalAppAuthentication)}!function(e){e.ActionExecuteInvokeRequest="ActionExecuteInvokeRequest",e.QueryMessageExtensionRequest="QueryMessageExtensionRequest"}(n=e.OriginalRequestType||(e.OriginalRequestType={})),function(e){e.ActionExecuteInvokeResponse="ActionExecuteInvokeResponse",e.QueryMessageExtensionResponse="QueryMessageExtensionResponse"}(r=e.InvokeResponseType||(e.InvokeResponseType={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR"}(i=e.InvokeErrorCode||(e.InvokeErrorCode={})),e.authenticateAndResendRequest=function(e,t,n){if(Mt(gt,Ie.content),!s())throw Le;return et(e,new Error("App id is not valid.")),a(n),Sr(o(yo,"externalAppAuthentication.authenticateAndResendRequest"),"externalAppAuthentication.authenticateAndResendRequest",[e,n,t.url.href,t.width,t.height,t.isExternal]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithSSO=function(e,t){if(Mt(gt,Ie.content),!s())throw Le;return et(e,new Error("App id is not valid.")),Sr(o(yo,"externalAppAuthentication.authenticateWithSSO"),"externalAppAuthentication.authenticateWithSSO",[e,t.claims,t.silent]).then((([e,t])=>{if(!e)throw t}))},e.authenticateWithSSOAndResendRequest=function(e,t,n){if(Mt(gt,Ie.content),!s())throw Le;return et(e,new Error("App id is not valid.")),a(n),Sr(o(yo,"externalAppAuthentication.authenticateWithSSOAndResendRequest"),"externalAppAuthentication.authenticateWithSSOAndResendRequest",[e,n,t.claims,t.silent]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithOauth2=function(e,t,n){if(Mt(gt,Ie.content),!s())throw Le;return et(e,new Error("titleId is Invalid.")),et(t,new Error("oauthConfigId is Invalid.")),Sr(o(yo,"externalAppAuthentication.authenticateWithOauth2"),"externalAppAuthentication.authenticateWithOauth2",[e,t,n.width,n.height,n.isExternal]).then((([e,t])=>{if(!e)throw t}))},e.authenticateWithPowerPlatformConnectorPlugins=function(e,t,n){if(Mt(gt,Ie.content),!s())throw Le;return et(e,new Error("titleId is Invalid.")),t&&tt(t),Sr(o(yo,"externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins"),"externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins",[e,null==t?void 0:t.toString(),null==n?void 0:n.width,null==n?void 0:n.height,null==n?void 0:n.isExternal]).then((([e,t])=>{if(!e)throw t}))},e.isSupported=s}(So||(So={}));var bo;!function(e){let t,n;function r(){return!(!Mt(gt)||!gt.supports.externalAppCardActions)}!function(e){e.DeepLinkDialog="DeepLinkDialog",e.DeepLinkOther="DeepLinkOther",e.DeepLinkStageView="DeepLinkStageView",e.GenericUrl="GenericUrl"}(t=e.ActionOpenUrlType||(e.ActionOpenUrlType={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR",e.INVALID_LINK="INVALID_LINK",e.NOT_SUPPORTED="NOT_SUPPORTED"}(n=e.ActionOpenUrlErrorCode||(e.ActionOpenUrlErrorCode={})),e.processActionSubmit=function(e,t){if(Mt(gt,Ie.content),!r())throw Le;return et(e,new Error("App id is not valid.")),Sr(o("v2","externalAppCardActions.processActionSubmit"),"externalAppCardActions.processActionSubmit",[e,t]).then((([e,t])=>{if(!e)throw t}))},e.processActionOpenUrl=function(e,t,n){if(Mt(gt,Ie.content),!r())throw Le;return et(e,new Error("App id is not valid.")),Sr(o("v2","externalAppCardActions.processActionOpenUrl"),"externalAppCardActions.processActionOpenUrl",[e,t.href,n]).then((([e,t])=>{if(e)throw e;return t}))},e.isSupported=r}(bo||(bo={}));var Eo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var To;!function(e){function t(){return!(!Mt(gt)||!gt.supports.externalAppCommands)}e.processActionCommand=function(e,n,r){return Eo(this,void 0,void 0,(function*(){if(Mt(gt,Ie.content),!t())throw Le;et(e,new Error("App id is not valid."));const[i,a]=yield Sr(o("v2","externalAppCommands.processActionCommand"),"externalAppCommands.processActionCommand",[e,n,r]);if(i)throw i;return a}))},e.isSupported=t}(To||(To={}));const Ao="v1";var Io;!function(e){let t,n,r,i,a,s;function c(e,t){return{errorCode:e,message:t}}!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(t=e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(n=e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(e){e.ClassMaterials="classMaterials"}(r=e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})),function(e){e.Readonly="readonly"}(i=e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})),function(e){e.Downloaded="Downloaded",e.Downloading="Downloading",e.Failed="Failed"}(a=e.FileDownloadStatus||(e.FileDownloadStatus={})),function(e){e.Download="DOWNLOAD",e.Upload="UPLOAD",e.Delete="DELETE"}(s=e.CloudStorageProviderFileAction||(e.CloudStorageProviderFileAction={})),e.getCloudStorageFolders=function(e,t){if(Mt(gt,Ie.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");Ar(o(Ao,"files.getCloudStorageFolders"),"files.getCloudStorageFolders",[e],t)},e.addCloudStorageFolder=function(e,t){if(Mt(gt,Ie.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");Ar(o(Ao,"files.addCloudStorageFolder"),"files.addCloudStorageFolder",[e],t)},e.deleteCloudStorageFolder=function(e,t,n){if(Mt(gt,Ie.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");Ar(o(Ao,"files.deleteCloudStorageFolder"),"files.deleteCloudStorageFolder",[e,t],n)},e.getCloudStorageFolderContents=function(e,t,n){if(Mt(gt,Ie.content),!e||!t)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");Ar(o(Ao,"files.getCloudStorageFolderContents"),"files.getCloudStorageFolderContents",[e,t],n)},e.openCloudStorageFile=function(e,t,n){if(Mt(gt,Ie.content),!e||!t)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");Ar(o(Ao,"files.openCloudStorageFile"),"files.openCloudStorageFile",[e,t,n])},e.getExternalProviders=function(e=!1,t){if(Mt(gt,Ie.content),!t)throw new Error("[files.getExternalProviders] Callback cannot be null");Ar(o(Ao,"files.getExternalProviders"),"files.getExternalProviders",[e],t)},e.copyMoveFiles=function(e,t,n,r,i=!1,a){if(Mt(gt,Ie.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!a)throw new Error("[files.copyMoveFiles] callback cannot be null");Ar(o(Ao,"files.copyMoveFiles"),"files.copyMoveFiles",[e,t,n,r,i],a)},e.getFileDownloads=function(e){if(Mt(gt,Ie.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");Ar(o(Ao,"files.getFileDownloads"),"files.getFileDownloads",[],e)},e.openDownloadFolder=function(e=void 0,t){if(Mt(gt,Ie.content),!t)throw new Error("[files.openDownloadFolder] Callback cannot be null");Ar(o(Ao,"files.openDownloadFolder"),"files.openDownloadFolder",[e],t)},e.addCloudStorageProvider=function(e){if(Mt(gt,Ie.content),!e)throw c(we.INVALID_ARGUMENTS,"[files.addCloudStorageProvider] callback cannot be null");Ar(o(Ao,"files.addCloudStorageProvider"),"files.addCloudStorageProvider",[],e)},e.removeCloudStorageProvider=function(e,t){if(Mt(gt,Ie.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] callback cannot be null");if(!e||!e.content)throw c(we.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");Ar(o(Ao,"files.removeCloudStorageProvider"),"files.removeCloudStorageProvider",[e],t)},e.addCloudStorageProviderFile=function(e,t){if(Mt(gt,Ie.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw c(we.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");Ar(o(Ao,"files.addCloudStorageProviderFile"),"files.addCloudStorageProviderFile",[e],t)},e.renameCloudStorageProviderFile=function(e,t){if(Mt(gt,Ie.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw c(we.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");Ar(o(Ao,"files.renameCloudStorageProviderFile"),"files.renameCloudStorageProviderFile",[e],t)},e.deleteCloudStorageProviderFile=function(e,t){if(Mt(gt,Ie.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw c(we.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");Ar(o(Ao,"files.deleteCloudStorageProviderFile"),"files.deleteCloudStorageProviderFile",[e],t)},e.downloadCloudStorageProviderFile=function(e,t){if(Mt(gt,Ie.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw c(we.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");Ar(o(Ao,"files.downloadCloudStorageProviderFile"),"files.downloadCloudStorageProviderFile",[e],t)},e.uploadCloudStorageProviderFile=function(e,t){if(Mt(gt,Ie.content),!t)throw c(we.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw c(we.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");if(!e.content.destinationFolder)throw c(we.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] Invalid destination folder details");Ar(o(Ao,"files.uploadCloudStorageProviderFile"),"files.uploadCloudStorageProviderFile",[e],t)},e.registerCloudStorageProviderListChangeHandler=function(e){if(Mt(gt),!e)throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");Wn(o(Ao,"files.registerCloudStorageProviderListChangeHandler"),"files.cloudStorageProviderListChange",e)},e.registerCloudStorageProviderContentChangeHandler=function(e){if(Mt(gt),!e)throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");Wn(o(Ao,"files.registerCloudStorageProviderContentChangeHandler"),"files.cloudStorageProviderContentChange",e)}}(Io||(Io={}));const Po="v1";var Fo;!function(e){function t(){return!(!Mt(gt)||!gt.supports.meetingRoom)}e.getPairedMeetingRoomInfo=function(){return new Promise((e=>{if(Mt(gt),!t())throw Le;e(yr(o(Po,"meetingRoom.getPairedMeetingRoomInfo"),"meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((n=>{if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(Mt(gt),!t())throw Le;n(yr(o(Po,"meetingRoom.sendCommandToPairedMeetingRoom"),"meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(Mt(gt),!t())throw Le;Wn(o(Po,"meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler"),"meetingRoom.meetingRoomCapabilitiesUpdate",(t=>{Mt(gt),e(t)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(Mt(gt),!t())throw Le;Wn(o(Po,"meetingRoom.registerMeetingRoomStatesUpdateHandler"),"meetingRoom.meetingRoomStatesUpdate",(t=>{Mt(gt),e(t)}))},e.isSupported=t}(Fo||(Fo={}));var Ro,Oo;!function(e){function t(){return!(!Mt(gt)||!gt.supports.notifications)}e.showNotification=function(e){if(Mt(gt,Ie.content),!t())throw Le;Ar(o("v1","notifications.showNotification"),"notifications.showNotification",[e])},e.isSupported=t}(Ro||(Ro={})),function(e){function t(){return!(!Mt(gt)||!gt.supports.otherAppStateChange)}e.registerAppInstallationHandler=function(e){if(!t())throw new Error(we.NOT_SUPPORTED_ON_PLATFORM.toString());if(Ht(e))throw new Error(we.INVALID_ARGUMENTS.toString());Wn(o("v2","otherApp.install"),"otherApp.install",e)},e.unregisterAppInstallationHandler=function(){if(!t())throw new Error(we.NOT_SUPPORTED_ON_PLATFORM.toString());Ar(o("v2","otherApp.unregisterInstall"),"otherApp.unregisterInstall"),Bn("otherApp.install")},e.isSupported=t}(Oo||(Oo={}));const ko="v1";var Mo;!function(e){let t,n,r;function i(){return!(!Mt(gt)||!gt.supports.remoteCamera)}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(t=e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(n=e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(r=e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Ar(o(ko,"remoteCamera.getCapableParticipants"),"remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Ar(o(ko,"remoteCamera.requestControl"),"remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Ar(o(ko,"remoteCamera.sendControlCommand"),"remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Ar(o(ko,"remoteCamera.terminateSession"),"remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Wn(o(ko,"remoteCamera.registerOnCapableParticipantsChangeHandler"),"remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Wn(o(ko,"remoteCamera.registerOnErrorHandler"),"remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Wn(o(ko,"remoteCamera.registerOnDeviceStateChangeHandler"),"remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(Mt(gt,Ie.sidePanel),!i())throw Le;Wn(o(ko,"remoteCamera.registerOnSessionStatusChangeHandler"),"remoteCamera.sessionStatusChange",e)},e.isSupported=i}(Mo||(Mo={}));var Lo;!function(e){function t(){return!(!Mt(gt)||!gt.supports.appEntity)}e.selectAppEntity=function(e,n,r,i){if(Mt(gt,Ie.content),!t())throw Le;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!i)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");Ar(o("v1","appEntity.selectAppEntity"),"appEntity.selectAppEntity",[e,n,r],i)},e.isSupported=t}(Lo||(Lo={}));const No="v1";var Uo;!function(e){let t,n;function r(){return!(!Mt(gt)||!gt.supports.teams)}!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(t=e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,t){if(Mt(gt,Ie.content),!r())throw Le;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!t)throw new Error("[teams.getTeamChannels] Callback cannot be null");Ar(o(No,"teams.getTeamChannels"),"teams.getTeamChannels",[e],t)},e.refreshSiteUrl=function(e,t){if(Mt(gt),!r())throw Le;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!t)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");Ar(o(No,"teams.refreshSiteUrl"),"teams.refreshSiteUrl",[e],t)},e.isSupported=r,function(e){let t;function n(){return!(!Mt(gt)||!gt.supports.teams)&&!!gt.supports.teams.fullTrust}!function(e){function t(){return!(!Mt(gt)||!gt.supports.teams)&&(!!gt.supports.teams.fullTrust&&!!gt.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((n=>{if(Mt(gt),!t())throw Le;if((C.hostClientType===Te.android||C.hostClientType===Te.teamsRoomsAndroid||C.hostClientType===Te.teamsPhones||C.hostClientType===Te.teamsDisplays)&&!Lt("2.0.1")){const e={errorCode:we.OLD_PLATFORM};throw new Error(JSON.stringify(e))}n(wr(o(No,"teams.fullTrust.joinedTeams.getUserJoinedTeams"),"getUserJoinedTeams",e))}))},e.isSupported=t}(t=e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((t=>{if(Mt(gt),!n())throw Le;t(wr(o(No,"teams.fullTrust.getConfigSetting"),"getConfigSetting",e))}))},e.isSupported=n}(n=e.fullTrust||(e.fullTrust={}))}(Uo||(Uo={}));class Do{static setTimeout(e,t){const n=performance.now(),r=We();return Do.setTimeoutCallbacks[r]={callback:e,timeoutInMs:t,startedAtInMs:n},r}static clearTimeout(e){delete Do.setTimeoutCallbacks[e]}static setInterval(e,t){Do.setTimeout((function n(){e(),Do.setTimeout(n,t)}),t)}static tick(){const e=performance.now(),t=[];for(const n in Do.setTimeoutCallbacks){const r=Do.setTimeoutCallbacks[n];e-r.startedAtInMs>=r.timeoutInMs&&t.push(n)}for(const e of t){Do.setTimeoutCallbacks[e].callback(),delete Do.setTimeoutCallbacks[e]}}}Do.setTimeoutCallbacks={};class Ho{constructor(e,t){this.reportStatisticsResult=t,this.sampleCount=0,this.distributionBins=new Uint32Array(e)}processStarts(e,t,n,r){Do.tick(),this.suitableForThisSession(e,t,n,r)||this.reportAndResetSession(this.getStatistics(),e,r,t,n),this.start()}processEnds(){const e=performance.now()-this.frameProcessingStartedAt,t=Math.floor(Math.max(0,Math.min(this.distributionBins.length-1,e)));this.distributionBins[t]+=1,this.sampleCount+=1}getStatistics(){return this.currentSession?{effectId:this.currentSession.effectId,effectParam:this.currentSession.effectParam,frameHeight:this.currentSession.frameHeight,frameWidth:this.currentSession.frameWidth,duration:performance.now()-this.currentSession.startedAtInMs,sampleCount:this.sampleCount,distributionBins:this.distributionBins.slice()}:null}start(){this.frameProcessingStartedAt=performance.now()}suitableForThisSession(e,t,n,r){return this.currentSession&&this.currentSession.effectId===e&&this.currentSession.effectParam===r&&this.currentSession.frameWidth===t&&this.currentSession.frameHeight===n}reportAndResetSession(e,t,n,r,o){e&&this.reportStatisticsResult(e),this.resetCurrentSession(this.getNextTimeout(t,this.currentSession),t,n,r,o),this.timeoutId&&Do.clearTimeout(this.timeoutId),this.timeoutId=Do.setTimeout((()=>this.reportAndResetSession(this.getStatistics(),t,n,r,o)).bind(this),this.currentSession.timeoutInMs)}resetCurrentSession(e,t,n,r,o){this.currentSession={startedAtInMs:performance.now(),timeoutInMs:e,effectId:t,effectParam:n,frameWidth:r,frameHeight:o},this.sampleCount=0,this.distributionBins.fill(0)}getNextTimeout(e,t){return t&&t.effectId===e?Math.min(Ho.maxSessionTimeoutInMs,2*t.timeoutInMs):Ho.initialSessionTimeoutInMs}}Ho.initialSessionTimeoutInMs=1e3,Ho.maxSessionTimeoutInMs=3e4;const xo="v2";class Vo{constructor(e){this.reportPerformanceEvent=e,this.isFirstFrameProcessed=!1,this.frameProcessTimeLimit=100,this.frameProcessingStartedAt=0,this.frameProcessingTimeCost=0,this.processedFrameCount=0,this.performanceStatistics=new Ho(Vo.distributionBinSize,(e=>this.reportPerformanceEvent(o(xo,"videoPerformanceMonitor.performanceDataGenerated"),"video.performance.performanceDataGenerated",[e])))}startMonitorSlowFrameProcessing(){Do.setInterval((()=>{if(0===this.processedFrameCount)return;const e=this.frameProcessingTimeCost/this.processedFrameCount;e>this.frameProcessTimeLimit&&this.reportPerformanceEvent(o(xo,"videoPerformanceMonitor.startMonitorSlowFrameProcessing"),"video.performance.frameProcessingSlow",[e]),this.frameProcessingTimeCost=0,this.processedFrameCount=0}),Vo.calculateFPSInterval)}setFrameProcessTimeLimit(e){this.frameProcessTimeLimit=e}reportApplyingVideoEffect(e,t){var n,r;(null===(n=this.applyingEffect)||void 0===n?void 0:n.effectId)===e&&(null===(r=this.applyingEffect)||void 0===r?void 0:r.effectParam)===t||(this.applyingEffect={effectId:e,effectParam:t},this.appliedEffect=void 0)}reportVideoEffectChanged(e,t){void 0===this.applyingEffect||this.applyingEffect.effectId!==e&&this.applyingEffect.effectParam!==t||(this.appliedEffect={effectId:e,effectParam:t},this.applyingEffect=void 0,this.isFirstFrameProcessed=!1)}reportStartFrameProcessing(e,t){Do.tick(),this.appliedEffect&&(this.frameProcessingStartedAt=performance.now(),this.performanceStatistics.processStarts(this.appliedEffect.effectId,e,t,this.appliedEffect.effectParam))}reportFrameProcessed(){var e;this.appliedEffect&&(this.processedFrameCount++,this.frameProcessingTimeCost+=performance.now()-this.frameProcessingStartedAt,this.performanceStatistics.processEnds(),this.isFirstFrameProcessed||(this.isFirstFrameProcessed=!0,this.reportPerformanceEvent(o(xo,"videoPerformanceMonitor.reportFrameProcessed"),"video.performance.firstFrameProcessed",[Date.now(),this.appliedEffect.effectId,null===(e=this.appliedEffect)||void 0===e?void 0:e.effectParam])))}reportGettingTextureStream(e){this.gettingTextureStreamStartedAt=performance.now(),this.currentStreamId=e}reportTextureStreamAcquired(){if(void 0!==this.gettingTextureStreamStartedAt){const e=performance.now()-this.gettingTextureStreamStartedAt;this.reportPerformanceEvent(o(xo,"videoPerformanceMonitor.reportTextureStreamAcquired"),"video.performance.textureStreamAcquired",[this.currentStreamId,e])}}}Vo.distributionBinSize=1e3,Vo.calculateFPSInterval=1e3;var _o=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))},Wo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Bo="v2";var jo;!function(e){const t=Ye()?void 0:new Vo(Ar);let n,r,i;function a(e){Ar(o(Bo,"videoEffects.notifyVideoFrameProcessed"),"video.videoFrameProcessed",[e])}function s(e){Ar(o(Bo,"videoEffects.notifyError"),"video.notifyError",[e])}function c(){return Mt(gt)&&!!gt.supports.video&&(!!gt.supports.video.mediaStream||!!gt.supports.video.sharedFrame)}function l(e,n){if(Mt(gt,Ie.sidePanel),!c()||!p())throw Le;Wn(o(Bo,"videoEffects.startVideoExtensibilityVideoStreamHandler"),"video.startVideoExtensibilityVideoStream",(n=>_o(this,void 0,void 0,(function*(){const{streamId:r}=n,o=u(e,t);yield $o(r,o,s,t)}))),!1),Ar(o(Bo,"videoEffects.mediaStream.registerForVideoFrame"),"video.mediaStream.registerForVideoFrame",[n])}function u(e,t){return n=>_o(this,void 0,void 0,(function*(){const r=n.videoFrame;null==t||t.reportStartFrameProcessing(r.codedWidth,r.codedHeight);const o=yield e(n);return null==t||t.reportFrameProcessed(),o}))}function d(e,n){if(Mt(gt,Ie.sidePanel),!c()||!m())throw Le;Wn(o(Bo,"videoEffects.registerForVideoBufferHandler"),"video.newVideoFrame",(n=>{if(n){const r=n.timestamp;null==t||t.reportStartFrameProcessing(n.width,n.height),e(f(n),(()=>{null==t||t.reportFrameProcessed(),a(r)}),s)}}),!1),Ar(o(Bo,"videoEffects.registerForVideoFrame"),"video.registerForVideoFrame",[n])}function f(e){if("videoFrameBuffer"in e)return e;{const{data:t}=e,n=Wo(e,["data"]);return Object.assign(Object.assign({},n),{videoFrameBuffer:t})}}function p(){var e;return Mt(gt,Ie.sidePanel)&&g()&&!!(null===(e=gt.supports.video)||void 0===e?void 0:e.mediaStream)}function g(){var e,t,n,r;return!(!(null===(t=null===(e=Xe().chrome)||void 0===e?void 0:e.webview)||void 0===t?void 0:t.getTextureStream)||!(null===(r=null===(n=Xe().chrome)||void 0===n?void 0:n.webview)||void 0===r?void 0:r.registerTextureStream))}function m(){var e;return Mt(gt,Ie.sidePanel)&&!!(null===(e=gt.supports.video)||void 0===e?void 0:e.sharedFrame)}!function(e){e.NV12="NV12"}(n=e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e.EffectChanged="EffectChanged",e.EffectDisabled="EffectDisabled"}(r=e.EffectChangeType||(e.EffectChangeType={})),function(e){e.InvalidEffectId="InvalidEffectId",e.InitializationFailure="InitializationFailure"}(i=e.EffectFailureReason||(e.EffectFailureReason={})),e.registerForVideoFrame=function(e){if(Mt(gt,Ie.sidePanel),!c())throw Le;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(Wn(o(Bo,"videoEffects.setFrameProcessTimeLimitHandler"),"video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e.timeLimit)),!1),p())l(e.videoFrameHandler,e.config);else{if(!m())throw Le;d(e.videoBufferHandler,e.config)}null==t||t.startMonitorSlowFrameProcessing()},e.notifySelectedVideoEffectChanged=function(e,t){if(Mt(gt,Ie.sidePanel),!c())throw Le;Ar(o(Bo,"videoEffects.notifySelectedVideoEffectChanged"),"video.videoEffectChanged",[e,t])},e.registerForVideoEffect=function(e){if(Mt(gt,Ie.sidePanel),!c())throw Le;Wn(o(Bo,"videoEffects.registerEffectParameterChangeHandler"),"video.effectParameterChange",ti(e,t),!1),Ar(o(Bo,"videoEffects.registerForVideoEffect"),"video.registerForVideoEffect")},e.isSupported=c}(jo||(jo={}));var zo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const qo="v2";function $o(e,t,n,r){var o,i;return zo(this,void 0,void 0,(function*(){const a=Ko();!Ye()&&(null===(i=null===(o=window.chrome)||void 0===o?void 0:o.webview)||void 0===i||i.registerTextureStream(e,a)),Zo(yield Jo(e,n,r),new Qo(n,t),a.writable)}))}function Go(e,t,n,r){var o,i;return zo(this,void 0,void 0,(function*(){const a=Ko();!Ye()&&(null===(i=null===(o=window.chrome)||void 0===o?void 0:o.webview)||void 0===i||i.registerTextureStream(e,a)),Zo(yield Jo(e,n,r),new ei(n,t),a.writable)}))}function Jo(e,t,n){return zo(this,void 0,void 0,(function*(){if(Ye())throw Le;const r=Xe().chrome;try{null==n||n.reportGettingTextureStream(e);const t=(yield r.webview.getTextureStream(e)).getVideoTracks();if(0===t.length)throw new Error(`No video track in stream ${e}`);return null==n||n.reportTextureStreamAcquired(),t[0]}catch(n){throw t(`Failed to get video track from stream ${e}, error: ${n}`),new Error(`Internal error: can't get video track from stream ${e}`)}}))}function Ko(){if(Ye())throw Le;const e=window.MediaStreamTrackGenerator;if(!e)throw Le;return new e({kind:"video"})}function Zo(e,t,n){new(0,Xe().MediaStreamTrackProcessor)({track:e}).readable.pipeThrough(new TransformStream(t)).pipeTo(n)}class Qo{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.transform=(e,t)=>zo(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const r=yield this.videoFrameHandler({videoFrame:e}),o=new VideoFrame(r,{timestamp:n});t.enqueue(o),e.close(),r.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError("timestamp of the original video frame is null")}))}}class Xo{constructor(e,t){if(this.headerBuffer=e,this.notifyError=t,this.ONE_TEXTURE_INPUT_ID=1869900081,this.INVALID_HEADER_ERROR="Invalid video frame header",this.UNSUPPORTED_LAYOUT_ERROR="Unsupported texture layout",this.headerDataView=new Uint32Array(e),this.headerDataView.length<8)throw this.notifyError(this.INVALID_HEADER_ERROR),new Error(this.INVALID_HEADER_ERROR);if(this.headerDataView[0]!==this.ONE_TEXTURE_INPUT_ID)throw this.notifyError(this.UNSUPPORTED_LAYOUT_ERROR),new Error(this.UNSUPPORTED_LAYOUT_ERROR)}get oneTextureLayoutId(){return this.headerDataView[0]}get version(){return this.headerDataView[1]}get frameRowOffset(){return this.headerDataView[2]}get frameFormat(){return this.headerDataView[3]}get frameWidth(){return this.headerDataView[4]}get frameHeight(){return this.headerDataView[5]}get multiStreamHeaderRowOffset(){return this.headerDataView[6]}get multiStreamCount(){return this.headerDataView[7]}}class Yo{constructor(e,t){this.metadataMap=new Map,this.AUDIO_INFERENCE_RESULT_STREAM_ID=828664161,this.ATTRIBUTE_ID_MAP_STREAM_ID=1296320833;const n=new Uint32Array(e);for(let r=0,o=0;r<t;r++){const t=n[o++],r=n[o++],i=n[o++],a=new Uint8Array(e,r,i);this.metadataMap.set(t,a)}}get audioInferenceResult(){return this.metadataMap.get(this.AUDIO_INFERENCE_RESULT_STREAM_ID)}get attributes(){const e=this.metadataMap.get(this.ATTRIBUTE_ID_MAP_STREAM_ID);if(void 0===e)return;const t=new Map,n=new TextDecoder("utf-8");let r=0;const o=e[r]+(e[++r]<<8)+(e[++r]<<16)+(e[++r]<<24);for(let i=0;i<o&&r<e.length-1;i++){const o=e[++r]+(e[++r]<<8)+(e[++r]<<16)+(e[++r]<<24),i=e.findIndex(((e,t,n)=>0==e&&t>r)),a=n.decode(e.slice(++r,i)),s=this.metadataMap.get(o);void 0!==s&&t.set(a,s);r=i+(4-(i-r)%4-1)}return t}}class ei{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.shouldDiscardAudioInferenceResult=!1,this.transform=(e,t)=>zo(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const{videoFrame:r,metadata:{audioInferenceResult:o,attributes:i}={}}=yield this.extractVideoFrameAndMetadata(e),a=yield this.videoFrameHandler({videoFrame:r,audioInferenceResult:o,attributes:i}),s=new VideoFrame(a,{timestamp:n});t.enqueue(s),r.close(),e.close(),a.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError("timestamp of the original video frame is null")})),this.extractVideoFrameAndMetadata=e=>zo(this,void 0,void 0,(function*(){if(Ye())throw Le;if("NV12"!==e.format)throw this.notifyError("Unsupported video frame pixel format"),new Error("Unsupported video frame pixel format");const t={x:0,y:0,width:e.codedWidth,height:2},n=new ArrayBuffer(t.width*t.height*3/2);yield e.copyTo(n,{rect:t});const r=new Xo(n,this.notifyError),o={x:0,y:r.multiStreamHeaderRowOffset,width:e.codedWidth,height:e.codedHeight-r.multiStreamHeaderRowOffset},i=new ArrayBuffer(o.width*o.height*3/2);yield e.copyTo(i,{rect:o});const a=new Yo(i,r.multiStreamCount);return{videoFrame:new VideoFrame(e,{timestamp:e.timestamp,visibleRect:{x:0,y:r.frameRowOffset,width:r.frameWidth,height:r.frameHeight}}),metadata:{audioInferenceResult:this.shouldDiscardAudioInferenceResult?void 0:a.audioInferenceResult,attributes:a.attributes}}})),Wn(o(qo,"videoEffectsUtils.transformerWithMetadata.constructor"),"video.mediaStream.audioInferenceDiscardStatusChange",(({discardAudioInferenceResult:e})=>{this.shouldDiscardAudioInferenceResult=e}))}}function ti(e,t){return(n,r)=>{null==t||t.reportApplyingVideoEffect(n||"",r),e(n,r).then((()=>{null==t||t.reportVideoEffectChanged(n||"",r),Ar(o(qo,"videoEffectsUtils.reportVideoEffectChanged"),"video.videoEffectReadiness",[!0,n,void 0,r])})).catch((e=>{const t=e in jo.EffectFailureReason?e:jo.EffectFailureReason.InitializationFailure;Ar(o(qo,"videoEffectsUtils.effectFailure"),"video.videoEffectReadiness",[!1,n,t,r])}))}}var ni=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const ri="v2";var oi;function ii(e){if(ai(e))throw new Error(`Potential app id (${e}) is invalid; it contains script tags.`);if(!li(e))throw new Error(`Potential app id (${e}) is invalid; its length ${e.length} is not within the length limits (${si}-${ci}).`);if(ui(e))throw new Error(`Potential app id (${e}) is invalid; it contains non-printable characters.`)}function ai(e){return/<script[^>]*>[\s\S]*?<\/script[^>]*>/gi.test(e)}!function(e){e.frameProcessingTimeoutInMs=2e3;const t=Ye()?void 0:new Vo(Ar);let n;function r(){const t=setTimeout((()=>{l(`Frame not processed in ${e.frameProcessingTimeoutInMs}ms`,n.Warn)}),e.frameProcessingTimeoutInMs);return function(){clearTimeout(t)}}function i(e,t){return n=>ni(this,void 0,void 0,(function*(){const o=n.videoFrame;t.reportStartFrameProcessing(o.codedWidth,o.codedHeight);const i=r(),a=yield e(n);return i(),t.reportFrameProcessed(),a}))}function a(e){return e.videoFrameBuffer=e.videoFrameBuffer||e.data,delete e.data,e}function s(){return Mt(gt),jo.isSupported()}function c(e){Ar(o(ri,"videoEffectsEx.notifyVideoFrameProcessed"),"video.videoFrameProcessed",[e])}function l(e,t=n.Warn){Ar(o(ri,"videoEffectsEx.notifyError"),"video.notifyError",[e,t])}!function(e){e.Fatal="fatal",e.Warn="warn"}(n=e.ErrorLevel||(e.ErrorLevel={})),e.registerForVideoFrame=function(e){var n,u;if(!s())throw Le;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(Mt(gt,Ie.sidePanel)){if(Wn(o(ri,"videoEffectsEX.registerSetFrameProcessTimeLimitHandler"),"video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e)),!1),null===(n=gt.supports.video)||void 0===n?void 0:n.mediaStream)Wn(o(ri,"videoEffectsEX.registerStartVideoExtensibilityVideoStreamHandler"),"video.startVideoExtensibilityVideoStream",(n=>ni(this,void 0,void 0,(function*(){const{streamId:r,metadataInTexture:o}=n,a=t?i(e.videoFrameHandler,t):e.videoFrameHandler;o?yield Go(r,a,l,t):yield $o(r,a,l,t)}))),!1),Ar(o(ri,"videoEffectsEX.mediaStream.registerForVideoFrame"),"video.mediaStream.registerForVideoFrame",[e.config]);else{if(!(null===(u=gt.supports.video)||void 0===u?void 0:u.sharedFrame))throw Le;Wn(o(ri,"videoEffectsEx.registerNewVideoFrameHandler"),"video.newVideoFrame",(n=>{if(n){null==t||t.reportStartFrameProcessing(n.width,n.height);const o=r(),i=n.timestamp;e.videoBufferHandler(a(n),(()=>{o(),null==t||t.reportFrameProcessed(),c(i)}),l)}}),!1),Ar(o(ri,"videoEffectsEx.registerForVideoFrame"),"video.registerForVideoFrame",[e.config])}null==t||t.startMonitorSlowFrameProcessing()}},e.notifySelectedVideoEffectChanged=function(e,t,n){if(Mt(gt,Ie.sidePanel),!s())throw Le;Ar(o(ri,"videoEffectsEx.notifySelectedVideoEffectChanged"),"video.videoEffectChanged",[e,t,n])},e.registerForVideoEffect=function(e){if(Mt(gt,Ie.sidePanel),!s())throw Le;Wn(o(ri,"videoEffectsEx.registerEffectParamterChangeHandler"),"video.effectParameterChange",ti(e,t),!1),Ar(o(ri,"videoEffectsEx.registerForVideoEffect"),"video.registerForVideoEffect")},e.updatePersonalizedEffects=function(e){if(Mt(gt,Ie.sidePanel),!jo.isSupported())throw Le;Ar(o(ri,"videoEffectsEx.updatePersonalizedEffects"),"video.personalizedEffectsChanged",[e])},e.isSupported=s,e.notifyFatalError=function(e){if(Mt(gt),!jo.isSupported())throw Le;l(e,n.Fatal)}}(oi||(oi={}));const si=4,ci=256;function li(e){return e.length<ci&&e.length>si}function ui(e){return[...e].some((e=>{const t=e.charCodeAt(0);return t<32||t>126}))}class di{constructor(e){this.appIdAsString=e,ii(e)}toString(){return this.appIdAsString}}const fi="users";function pi(e,t,n){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");const r=`${fi}=`+e.map((e=>encodeURIComponent(e))).join(","),o=void 0===t?"":`&topicName=${encodeURIComponent(t)}`,i=void 0===n?"":`&message=${encodeURIComponent(n)}`;return`${g}://${m}/l/chat/0/0?${r}${o}${i}`}function gi(e,t,n){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");const r=`${fi}=`+e.map((e=>encodeURIComponent(e))).join(","),o=void 0===t?"":`&withVideo=${encodeURIComponent(t)}`,i=void 0===n?"":`&source=${encodeURIComponent(n)}`;return`${g}://${m}/l/call/0/0?${r}${o}${i}`}function mi(e,t,n,r,o){const i=void 0===e?"":"attendees="+e.map((e=>encodeURIComponent(e))).join(","),a=void 0===t?"":`&startTime=${encodeURIComponent(t)}`,s=void 0===n?"":`&endTime=${encodeURIComponent(n)}`,c=void 0===r?"":`&subject=${encodeURIComponent(r)}`,l=void 0===o?"":`&content=${encodeURIComponent(o)}`;return`${g}://${m}/l/meeting/new?${i}${a}${s}${c}${l}`}function hi(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return`${g}://${m}/l/app/${encodeURIComponent(e)}`}var wi;!function(e){function t(){return!(!Mt(gt)||!gt.supports.appInstallDialog)}e.openAppInstallDialog=function(e){return new Promise((n=>{if(Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.task,Ie.stage,Ie.meetingStage),!t())throw new Error("Not supported");const r=o("v1","appInstallDialog.openAppInstallDialog");gt.isLegacyTeams?n(vr(r,"executeDeepLink",hi(e.appId))):(Ar(r,"appInstallDialog.openAppInstallDialog",[e]),n())}))},e.isSupported=t}(wi||(wi={}));const vi="v1",Ci=t("media");var yi;function Si(e,t){if(null==e||null==t||e.length<=0)return null;let n=null,r=1;return e.sort(((e,t)=>e.sequence>t.sequence?1:-1)),e.forEach((e=>{e.sequence==r&&(n=n?new Blob([n,e.file],{type:t}):new Blob([e.file],{type:t}),r++)})),n}function bi(e,t){if(null==e||null==t)return null;const n=atob(e.chunk),r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);const o=new Uint8Array(r),i=new Blob([o],{type:t});return{sequence:e.chunkSequence,file:i}}function Ei(e){Pi(e)?Ut("2.0.2"):Fi(e)?Ut(c):Ii(e)&&Ut("2.0.4")}function Ti(e){return!(e.mediaType!=yi.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function Ai(e){return!(null==e||e.maxMediaCount>10)}function Ii(e){var t;return!((null==e?void 0:e.mediaType)!=yi.MediaType.Image||!(null===(t=null==e?void 0:e.imageProps)||void 0===t?void 0:t.imageOutputFormats))}function Pi(e){return!(!e||e.mediaType!=yi.MediaType.VideoAndImage&&!e.videoAndImageProps)}function Fi(e){return!(!e||e.mediaType!=yi.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function Ri(e,t,n){return null!=e&&null!=t&&t==yi.FileFormat.ID&&null!=n}function Oi(e){return!(null==e||e.length<=0||e.length>10)}function ki(e){return!e||!(null===e.timeOutIntervalInSec||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec<=0||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec>60)}function Mi(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){let t,n,r,i,a,s,l;!function(e){e.Base64="base64",e.ID="id"}(t=e.FileFormat||(e.FileFormat={}));class d{}function f(){return!(!Mt(gt)||!gt.supports.permissions)}e.File=d,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),C.isFramelessWindow)if(Lt("1.7.0"))Ar(o(vi,"media.captureImage"),"captureImage",e);else{e({errorCode:we.OLD_PLATFORM},[])}else{e({errorCode:we.NOT_SUPPORTED_ON_PLATFORM},[])}},e.hasPermission=function(){if(Mt(gt,Ie.content,Ie.task),!f())throw Le;const e=ve.Media;return new Promise((t=>{t(yr(o(vi,"media.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(Mt(gt,Ie.content,Ie.task),!f())throw Le;const e=ve.Media;return new Promise((t=>{t(yr(o(vi,"media.requestPermission"),"permissions.request",e))}))};class p extends d{constructor(e){super(),e&&(this.content=e.content,this.format=e.format,this.mimeType=e.mimeType,this.name=e.name,this.preview=e.preview,this.size=e.size)}getMedia(e){if(!e)throw new Error("[get Media] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),Lt(u))if(Ri(this.mimeType,this.format,this.content))Lt("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e);else{e({errorCode:we.INVALID_ARGUMENTS},new Blob)}else{e({errorCode:we.OLD_PLATFORM},new Blob)}}getMediaViaCallback(e){const t={mediaMimeType:this.mimeType,assembleAttachment:[]},n=[this.content];Ar(o(vi,"media.getMedia"),"getMedia",n,(function(n){if(e)if(n&&n.error)e(n.error,new Blob);else if(n&&n.mediaChunk)if(n.mediaChunk.chunkSequence<=0){const r=Si(t.assembleAttachment,t.mediaMimeType);e(n.error,null!=r?r:new Blob)}else{const e=bi(n.mediaChunk,t.mediaMimeType);e?t.assembleAttachment.push(e):Ci(`Received a null assemble attachment for when decoding chunk sequence ${n.mediaChunk.chunkSequence}; not including the chunk in the assembled file.`)}else e({errorCode:we.INTERNAL_ERROR,message:"data received is null"},new Blob)}))}getMediaViaHandler(e){const t=We(),n={mediaMimeType:this.mimeType,assembleAttachment:[]},r=[t,this.content];this.content&&!Ht(e)&&Ar(o(vi,"media.getMedia"),"getMedia",r),Wn(o(vi,"media.registerGetMediaRequestHandler"),"getMedia"+t,(function(r){if(e){const o=JSON.parse(r);if(o.error)e(o.error,new Blob),Bn("getMedia"+t);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){const r=Si(n.assembleAttachment,n.mediaMimeType);e(o.error,null!=r?r:new Blob),Bn("getMedia"+t)}else{const e=bi(o.mediaChunk,n.mediaMimeType);e&&n.assembleAttachment.push(e)}else e({errorCode:we.INTERNAL_ERROR,message:"data received is null"},new Blob),Bn("getMedia"+t)}}))}}e.Media=p;class g{constructor(e){this.controllerCallback=e}notifyEventToHost(e,t){Mt(gt,Ie.content,Ie.task);try{Ut(c)}catch(e){return void(t&&t(e))}const n={mediaType:this.getMediaType(),mediaControllerEvent:e};Ar(o(vi,"media.controller"),"media.controller",[n],(e=>{t&&t(e)}))}stop(e){this.notifyEventToHost(n.StopRecording,e)}}e.VideoController=class extends g{getMediaType(){return a.Video}notifyEventToApp(e){if(this.controllerCallback)switch(e){case n.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}}},function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(n=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(r=e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(i=e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(a=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(s=e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(l=e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,t){if(!t)throw new Error("[select Media] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),!Lt(u)){const e={errorCode:we.OLD_PLATFORM};return void t(e,[])}try{Ei(e)}catch(e){return void t(e,[])}if(!Ai(e)){const e={errorCode:we.INVALID_ARGUMENTS};return void t(e,[])}const n=[e];Ar(o(vi,"media.selectMedia"),"selectMedia",n,((n,r,o)=>{var i,a;if(o)return void(Ti(e)&&(null===(a=null===(i=null==e?void 0:e.videoProps)||void 0===i?void 0:i.videoController)||void 0===a||a.notifyEventToApp(o)));if(!r)return void t(n,[]);const s=[];for(const e of r)s.push(new p(e));t(n,s)}))},e.viewImages=function(e,t){if(!t)throw new Error("[view images] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),!Lt(u)){return void t({errorCode:we.OLD_PLATFORM})}if(!Oi(e)){return void t({errorCode:we.INVALID_ARGUMENTS})}const n=[e];Ar(o(vi,"media.viewImages"),"viewImages",n,t)},e.scanBarCode=function(e,t){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),C.hostClientType!==Te.desktop&&C.hostClientType!==Te.web&&C.hostClientType!==Te.rigel&&C.hostClientType!==Te.teamsRoomsWindows&&C.hostClientType!==Te.teamsRoomsAndroid&&C.hostClientType!==Te.teamsPhones&&C.hostClientType!==Te.teamsDisplays)if(Lt("1.9.0"))if(ki(t))Ar(o(vi,"media.scanBarCode"),"media.scanBarCode",[t],e);else{e({errorCode:we.INVALID_ARGUMENTS},"")}else{e({errorCode:we.OLD_PLATFORM},"")}else{e({errorCode:we.NOT_SUPPORTED_ON_PLATFORM},"")}}}(yi||(yi={}));const Li="v2";var Ni;!function(e){function t(){return!!(Mt(gt)&&gt.supports.barCode&&gt.supports.permissions)}e.scanBarCode=function(e){return new Promise((n=>{if(Mt(gt,Ie.content,Ie.task),!t())throw Le;if(!ki(e))throw{errorCode:we.INVALID_ARGUMENTS};n(yr(o(Li,"barCode.scanBarCode"),"media.scanBarCode",e))}))},e.hasPermission=function(){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;const e=ve.Media;return new Promise((t=>{t(yr(o(Li,"barCode.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;const e=ve.Media;return new Promise((t=>{t(yr(o(Li,"barCode.requestPermission"),"permissions.request",e))}))},e.isSupported=t}(Ni||(Ni={}));var Ui;!function(e){function t(e,t){return new Promise((r=>{if(Mt(gt,Ie.content,Ie.task),!n())throw Le;if(gt.isLegacyTeams)r(vr(e,"executeDeepLink",pi([t.user],void 0,t.message)));else{r(vr(e,"chat.openChat",{members:[t.user],message:t.message}))}}))}function n(){return!(!Mt(gt)||!gt.supports.chat)}e.openChat=function(e){return t(o("v2","chat.openChat"),e)},e.openGroupChat=function(e){const r=o("v2","chat.openGroupChat");return new Promise((o=>{if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){const n={user:e.users[0],message:e.message};o(t(r,n))}else{if(Mt(gt,Ie.content,Ie.task),!n())throw Le;if(gt.isLegacyTeams)o(vr(r,"executeDeepLink",pi(e.users,e.topic,e.message)));else{o(vr(r,"chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}}))},e.isSupported=n}(Ui||(Ui={}));var Di=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var Hi,xi;!function(e){function t(){return C.isFramelessWindow?!(!Mt(gt)||!gt.supports.clipboard):!!(Mt(gt)&&navigator&&navigator.clipboard&&gt.supports.clipboard)}e.write=function(e){return Di(this,void 0,void 0,(function*(){if(Mt(gt,Ie.content,Ie.meetingStage,Ie.task,Ie.settings,Ie.stage,Ie.sidePanel),!t())throw Le;if(!e.type||!Object.values(Ee).includes(e.type))throw new Error(`Blob type ${e.type} is not supported. Supported blob types are ${Object.values(Ee)}`);const n=yield Qe(e),r={mimeType:e.type,content:n};return yr(o("v2","clipboard.write"),"clipboard.writeToClipboard",r)}))},e.read=function(){return Di(this,void 0,void 0,(function*(){Mt(gt,Ie.content,Ie.meetingStage,Ie.task,Ie.settings,Ie.stage,Ie.sidePanel);const e=o("v2","clipboard.read");if(!t())throw Le;const n=yield yr(e,"clipboard.readFromClipboard");if("string"==typeof n){const e=JSON.parse(n);return Ze(e.mimeType,e.content)}return n}))},e.isSupported=t}(Hi||(Hi={})),function(e){e.isNAAChannelRecommended=function(){var e;return null!==(e=Mt(gt)&&gt.isNAAChannelRecommended)&&void 0!==e&&e}}(xi||(xi={}));const Vi="v2";var _i;function Wi(){return gt.hostVersionsInfo?gt.hostVersionsInfo.adaptiveCardSchemaVersion:void 0}!function(e){function t(){return!!(Mt(gt)&&gt.supports.geoLocation&&gt.supports.permissions)}let n;e.getCurrentLocation=function(){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;return yr(o(Vi,"geoLocation.getCurrentLocation"),"location.getLocation",{allowChooseLocation:!1,showMap:!1})},e.hasPermission=function(){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;const e=ve.GeoLocation;return new Promise((t=>{t(yr(o(Vi,"geoLocation.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;const e=ve.GeoLocation;return new Promise((t=>{t(yr(o(Vi,"geoLocation.requestPermission"),"permissions.request",e))}))},e.isSupported=t,function(e){function t(){return!!(Mt(gt)&&gt.supports.geoLocation&&gt.supports.geoLocation.map&&gt.supports.permissions)}e.chooseLocation=function(){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;return yr(o(Vi,"geoLocation.map.chooseLocation"),"location.getLocation",{allowChooseLocation:!0,showMap:!0})},e.showLocation=function(e){if(Mt(gt,Ie.content,Ie.task),!t())throw Le;if(!e)throw{errorCode:we.INVALID_ARGUMENTS};return yr(o(Vi,"geoLocation.showLocation"),"location.showLocation",e)},e.isSupported=t}(n=e.map||(e.map={}))}(_i||(_i={}));const Bi="v1";class ji{postMessage(e,t){Mt(gt),Ar(o(Bi,"appWindow.childAppWindow.postMessage"),"messageForChild",[e],t||Ve())}addEventListener(e,t){Mt(gt),"message"===e&&Wn(o(Bi,"appWindow.childAppWindow.addEventListener"),"messageForParent",t)}}class zi{static get Instance(){return this._instance||(this._instance=new this)}postMessage(e,t){Mt(gt,Ie.task),Ar(o(Bi,"appWindow.parentAppWindow.postMessage"),"messageForParent",[e],t||Ve())}addEventListener(e,t){Mt(gt,Ie.task),"message"===e&&Wn(o(Bi,"appWindow.parentAppWindow.addEventListener"),"messageForChild",t)}}var qi;!function(e){function t(){return!(!Mt(gt)||!gt.supports.secondaryBrowser)}e.open=function(e){if(Mt(gt,Ie.content),!t())throw Le;if(!e||!Ke(e))throw{errorCode:we.INVALID_ARGUMENTS,message:"Invalid Url: Only https URL is allowed"};return yr(o("v2","secondaryBrowser.openUrl"),"secondaryBrowser.open",e.toString())},e.isSupported=t}(qi||(qi={}));var $i;!function(e){function t(){return!(!Mt(gt)||!gt.supports.location)}e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),!Lt(l))throw{errorCode:we.OLD_PLATFORM};if(!e)throw{errorCode:we.INVALID_ARGUMENTS};if(!t())throw Le;Ar(o("v1","location.getLocation"),"location.getLocation",[e],n)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");if(Mt(gt,Ie.content,Ie.task),!Lt(l))throw{errorCode:we.OLD_PLATFORM};if(!e)throw{errorCode:we.INVALID_ARGUMENTS};if(!t())throw Le;Ar(o("v1","location.showLocation"),"location.showLocation",[e],n)},e.isSupported=t}($i||($i={}));var Gi=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Ji="v1";var Ki;!function(e){let t,n,r,i,a,s,c;function l(e,n){Ar(o(Ji,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((r,i)=>{if(r&&null!=i)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(r)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${r.errorCode} ${r.message}`);if("boolean"!=typeof i)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");Wn(o(Ji,"meeting.registerMicStateChangeHandler"),"meeting.micStateChanged",(n=>Gi(this,void 0,void 0,(function*(){try{const r=yield e.micMuteStateChangedCallback(n);d(r,r.isMicMuted===n.isMicMuted?t.HostInitiated:t.AppDeclinedToChange)}catch(e){d(n,t.AppFailedToChange)}}))));Wn(o(Ji,"meeting.registerAudioDeviceSelectionChangedHandler"),"meeting.audioDeviceSelectionChanged",(t=>{var n;null===(n=e.audioDeviceSelectionChangedCallback)||void 0===n||n.call(e,t)})),n(i)}))}function u(e,t){Ar(o(Ji,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((e,n)=>{if(e&&null!=n)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(e)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${e.errorCode} ${e.message}`);if("boolean"!=typeof n)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");jn("meeting.micStateChanged")&&Bn("meeting.micStateChanged"),jn("meeting.audioDeviceSelectionChanged")&&Bn("meeting.audioDeviceSelectionChanged"),t(n)}))}function d(e,t){Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.setMicStateWithReason"),"meeting.updateMicState",[e,t])}!function(e){e[e.HostInitiated=0]="HostInitiated",e[e.AppInitiated=1]="AppInitiated",e[e.AppDeclinedToChange=2]="AppDeclinedToChange",e[e.AppFailedToChange=3]="AppFailedToChange"}(t||(t={})),function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(n=e.MeetingReactionType||(e.MeetingReactionType={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(r=e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(i=e.CallType||(e.CallType={})),function(e){e.Collaborative="Collaborative",e.ScreenShare="ScreenShare"}(a=e.SharingProtocol||(e.SharingProtocol={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.getIncomingClientAudioState"),"getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.toggleIncomingClientAudio"),"toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage,Ie.settings,Ie.content),Ar(o(Ji,"meeting.getMeetingDetails"),"meeting.getMeetingDetails",e)},e.getMeetingDetailsVerbose=function(){var e,t,n;return Gi(this,void 0,void 0,(function*(){let r;Mt(gt,Ie.sidePanel,Ie.meetingStage,Ie.settings,Ie.content);try{const e=!0;r=yield yr(o("v2","meeting.getMeetingDetailsVerbose"),"meeting.getMeetingDetails",e)}catch(t){throw new Error(null===(e=null==t?void 0:t.errorCode)||void 0===e?void 0:e.toString())}if(((null===(t=r.details)||void 0===t?void 0:t.type)==i.GroupCall||(null===(n=r.details)||void 0===n?void 0:n.type)==i.OneOnOneCall)&&!r.details.originalCaller)throw new Error(we.NOT_SUPPORTED_ON_PLATFORM.toString());return r}))},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage,Ie.task),Ar(o(Ji,"meeting.getAuthenticationTokenForAnonymousUser"),"meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");Mt(gt,Ie.sidePanel),Ar(o(Ji,"meeting.getLiveStreamState"),"meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,t,n){if(!e)throw new Error("[request start live streaming] Callback cannot be null");Mt(gt,Ie.sidePanel),Ar(o(Ji,"meeting.requestStartLiveStreaming"),"meeting.requestStartLiveStreaming",[t,n],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");Mt(gt,Ie.sidePanel),Ar(o(Ji,"meeting.requestStopLiveStreaming"),"meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");Mt(gt,Ie.sidePanel),Wn(o(Ji,"meeting.registerLiveStreamChangedHandler"),"meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,t,n={sharingProtocol:a.Collaborative}){if(!e)throw new Error("[share app content to stage] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.shareAppContentToStage"),"meeting.shareAppContentToStage",[t,n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.getAppContentStageSharingCapabilities"),"meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.stopSharingAppContentToStage"),"meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Ar(o(Ji,"meeting.getAppContentStageSharingState"),"meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Wn(o(Ji,"meeting.registerSpeakingStateChangeHandler"),"meeting.speakingStateChanged",e)},e.registerRaiseHandStateChangedHandler=function(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Wn(o(Ji,"meeting.registerRaiseHandStateChangedHandler"),"meeting.raiseHandStateChanged",e)},e.registerMeetingReactionReceivedHandler=function(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),Wn(o(Ji,"meeting.registerMeetingReactionReceivedHandler"),"meeting.meetingReactionReceived",e)},e.joinMeeting=function(e){if(void 0===(null==e?void 0:e.joinWebUrl)||null===(null==e?void 0:e.joinWebUrl))return Promise.reject(new Error("Invalid joinMeetingParams"));Mt(gt);const t={joinWebUrl:e.joinWebUrl.href,source:e.source||s.Other};return yr(o("v2","meeting.joinMeeting"),"meeting.joinMeeting",t)},function(e){e.M365CalendarGridContextMenu="m365_calendar_grid_context_menu",e.M365CalendarGridPeek="m365_calendar_grid_peek",e.M365CalendarGridEventCardJoinButton="m365_calendar_grid_event_card_join_button",e.M365CalendarFormRibbonJoinButton="m365_calendar_form_ribbon_join_button",e.M365CalendarFormJoinTeamsMeetingButton="m365_calendar_form_join_teams_meeting_button",e.Other="other"}(s=e.EventActionSource||(e.EventActionSource={})),function(e){e.setOptions=function(e){Mt(gt,Ie.sidePanel),e.contentUrl&&new URL(e.contentUrl),Ar(o(Ji,"meeting.appShareButton.setOptions"),"meeting.appShareButton.setOptions",[e])}}(c=e.appShareButton||(e.appShareButton={})),e.requestAppAudioHandling=function(e,t){if(!t)throw new Error("[requestAppAudioHandling] Callback response cannot be null");if(!e.micMuteStateChangedCallback)throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");Mt(gt,Ie.sidePanel,Ie.meetingStage),e.isAppHandlingAudio?l(e,t):u(e,t)},e.updateMicState=function(e){d(e,t.AppInitiated)}}(Ki||(Ki={}));var Zi;!function(e){function t(){return!(!Mt(gt)||!gt.supports.monetization)}e.openPurchaseExperience=function(e,n){let r,i,a="";return"function"==typeof e?(r=e,i=n,a=o("v1","monetization.openPurchaseExperience")):(i=e,a=o("v2","monetization.openPurchaseExperience")),Mt(gt,Ie.content),qe((()=>new Promise((e=>{if(!t())throw Le;e(yr(a,"monetization.openPurchaseExperience",i))}))),r)},e.isSupported=t}(Zi||(Zi={}));var Qi;!function(e){function t(){return!(!Mt(gt)||!gt.supports.calendar)}e.openCalendarItem=function(e){return new Promise((n=>{if(Mt(gt,Ie.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");n(vr(o("v2","calendar.openCalendarItem"),"calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((n=>{if(Mt(gt,Ie.content),!t())throw new Error("Not supported");const r=o("v2","calendar.composeMeeting");gt.isLegacyTeams?n(vr(r,"executeDeepLink",mi(e.attendees,e.startTime,e.endTime,e.subject,e.content))):n(vr(r,"calendar.composeMeeting",e))}))},e.isSupported=t}(Qi||(Qi={}));var Xi;!function(e){function t(){return!(!Mt(gt)||!gt.supports.mail)}let n;e.openMailItem=function(e){return new Promise((n=>{if(Mt(gt,Ie.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");n(vr(o("v2","mail.openMailItem"),"mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((n=>{if(Mt(gt,Ie.content),!t())throw new Error("Not supported");n(vr(o("v2","mail.composeMail"),"mail.composeMail",e))}))},e.isSupported=t,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(n=e.ComposeMailType||(e.ComposeMailType={}))}(Xi||(Xi={}));var Yi;!function(e){function t(){Xe().print()}function n(e,t,n){!Ht(t)&&Mt(gt),!Ht(t)&&n&&n(),Gn(e,t)}function r(e,t,n){!Ht(t)&&Mt(gt),!Ht(t)&&n&&n(),Zn(e,t)}function i(){return!(!Mt(gt)||!gt.supports.teamsCore)}e.enablePrintCapability=function(){if(!C.printCapabilityEnabled){if(Mt(gt),!i())throw Le;C.printCapabilityEnabled=!0,document.addEventListener("keydown",(e=>{(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=t,e.registerOnLoadHandler=function(e){n(o("v2","teamsAPIs_registerOnLoadHandler"),e,(()=>{if(!Ht(e)&&!i())throw Le}))},e.registerOnLoadHandlerHelper=n,e.registerBeforeUnloadHandler=function(e){r(o("v2","teamsAPIs_registerBeforeUnloadHandler"),e,(()=>{if(!Ht(e)&&!i())throw Le}))},e.registerBeforeUnloadHandlerHelper=r,e.isSupported=i}(Yi||(Yi={}));var ea;function ta(e){return e?e.modality&&"string"!=typeof e.modality?[!1,"modality must be a string"]:e.targetElementBoundingRect&&"object"==typeof e.targetElementBoundingRect?e.triggerType&&"string"==typeof e.triggerType?na(e.persona):[!1,"triggerType must be a valid string"]:[!1,"targetElementBoundingRect must be a DOMRect"]:[!1,"A request object is required"]}function na(e){return e?e.displayName&&"string"!=typeof e.displayName?[!1,"displayName must be a string"]:e.identifiers&&"object"==typeof e.identifiers?e.identifiers.AadObjectId||e.identifiers.Smtp||e.identifiers.Upn?e.identifiers.AadObjectId&&"string"!=typeof e.identifiers.AadObjectId?[!1,"AadObjectId identifier must be a string"]:e.identifiers.Smtp&&"string"!=typeof e.identifiers.Smtp?[!1,"Smtp identifier must be a string"]:e.identifiers.Upn&&"string"!=typeof e.identifiers.Upn?[!1,"Upn identifier must be a string"]:[!0,void 0]:[!1,"at least one valid identifier must be provided"]:[!1,"persona identifiers object must be provided"]:[!1,"persona object must be provided"]}!function(e){function t(e,t){return new Promise((r=>{if(!Lt("2.0.0"))throw{errorCode:we.OLD_PLATFORM};if(!Mi(t))throw{errorCode:we.INVALID_ARGUMENTS};if(!n())throw Le;r(yr(e,"people.selectPeople",t))}))}function n(){return!(!Mt(gt)||!gt.supports.people)}e.selectPeople=function(e,n){let r,i;Mt(gt,Ie.content,Ie.task,Ie.settings);let a="";return"function"==typeof e?([r,i]=[e,n],a=o("v1","people.selectPeople")):(i=e,a=o("v2","people.selectPeople")),je(t,r,a,i)},e.isSupported=n}(ea||(ea={}));var ra;!function(e){e.showProfile=function(e){return Mt(gt,Ie.content),new Promise((t=>{const[n,r]=ta(e);if(!n)throw{errorCode:we.INVALID_ARGUMENTS,message:r};const i={modality:e.modality,persona:e.persona,triggerType:e.triggerType,targetRectangle:{x:e.targetElementBoundingRect.x,y:e.targetElementBoundingRect.y,width:e.targetElementBoundingRect.width,height:e.targetElementBoundingRect.height}};t(yr(o("v2","profile.showProfile"),"profile.showProfile",i))}))},e.isSupported=function(){return!(!Mt(gt)||!gt.supports.profile)}}(ra||(ra={}));const oa="v2";var ia;!function(e){const t="search.queryChange",n="search.queryClose",r="search.queryExecute";function i(){return!(!Mt(gt)||!gt.supports.search)}e.registerHandlers=function(e,a,s){if(Mt(gt,Ie.content),!i())throw Le;Wn(o(oa,"search.registerOnClosedHandler"),n,e),Wn(o(oa,"search.registerOnExecutedHandler"),r,a),s&&Wn(o(oa,"search.registerOnChangeHandler"),t,s)},e.unregisterHandlers=function(){if(Mt(gt,Ie.content),!i())throw Le;Ar(o(oa,"search.unregisterHandlers"),"search.unregister"),Bn(t),Bn(n),Bn(r)},e.isSupported=i,e.closeSearch=function(){return new Promise((e=>{if(Mt(gt,Ie.content),!i())throw new Error("Not supported");e(vr(o(oa,"search.closeSearch"),"search.closeSearch"))}))}}(ia||(ia={}));var aa=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var sa;!function(e){function t(t,n){return new Promise((r=>{if(!a())throw Le;r(yr(t,e.SharingAPIMessages.shareWebContent,n))}))}function n(e){if(!(e&&e.content&&e.content.length)){throw{errorCode:we.INVALID_ARGUMENTS,message:"Shared content is missing"}}}function r(e){let t;if(e.content.some((e=>!e.type)))throw t={errorCode:we.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"},t;if(e.content.some((t=>t.type!==e.content[0].type)))throw t={errorCode:we.INVALID_ARGUMENTS,message:"Shared content must be of the same type"},t}function i(e){let t;if("URL"!==e.content[0].type)throw t={errorCode:we.INVALID_ARGUMENTS,message:"Content type is unsupported"},t;if(e.content.some((e=>!e.url)))throw t={errorCode:we.INVALID_ARGUMENTS,message:"URLs are required for URL content types"},t}function a(){return!(!Mt(gt)||!gt.supports.sharing)}let s;e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,a){try{n(e),r(e),i(e)}catch(e){return ze((()=>Promise.reject(e)),a)}return Mt(gt,Ie.content,Ie.sidePanel,Ie.task,Ie.stage,Ie.meetingStage),ze(t,a,o(a?"v1":"v2","sharing.shareWebContent"),e)},e.isSupported=a,function(e){function t(){var e;return Mt(gt)&&void 0!==(null===(e=gt.supports.sharing)||void 0===e?void 0:e.history)}e.getContent=function(){return aa(this,void 0,void 0,(function*(){if(Mt(gt,Ie.sidePanel,Ie.meetingStage),!t())throw Le;return yield yr(o("v2","sharing.history.getContent"),"sharing.history.getContent")}))},e.isSupported=t}(s=e.history||(e.history={}))}(sa||(sa={}));var ca;!function(e){let t,n;function r(){return!(!Mt(gt)||!gt.supports.stageView)}!function(e){e.modal="modal",e.popout="popout",e.popoutWithChat="popoutWithChat"}(t=e.StageViewOpenMode||(e.StageViewOpenMode={})),e.open=function(e){return new Promise((t=>{if(Mt(gt,Ie.content),!r())throw Le;if(!e)throw new Error("[stageView.open] Stage view params cannot be null");t(yr(o("v2","stageView.open"),"stageView.open",e))}))},e.isSupported=r,function(e){function t(){var e;return Mt(gt)&&void 0!==(null===(e=gt.supports.stageView)||void 0===e?void 0:e.self)}e.close=function(){return new Promise((e=>{if(Mt(gt,Ie.content),!t())throw Le;e(yr(o("v2","stageView.self.close"),"stageView.self.close"))}))},e.isSupported=t}(n=e.self||(e.self={}))}(ca||(ca={}));var la=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const ua="v2";var da;!function(e){let t,n,r;!function(e){e[e.FrontOrRear=1]="FrontOrRear",e[e.FrontOnly=2]="FrontOnly",e[e.RearOnly=3]="RearOnly"}(t=e.CameraRestriction||(e.CameraRestriction={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(n=e.Source||(e.Source={})),e.hasPermission=function(){if(Mt(gt,Ie.content,Ie.task),!r.isSupported())throw Le;const e=ve.Media;return yr(o(ua,"visualMedia.hasPermission"),"permissions.has",e)},e.requestPermission=function(){if(Mt(gt,Ie.content,Ie.task),!r.isSupported())throw Le;const e=ve.Media;return yr(o(ua,"visualMedia.requestPermission"),"permissions.request",e)},function(e){function t(){return!!(Mt(gt)&&gt.supports.visualMedia&&gt.supports.visualMedia.image&&gt.supports.permissions)}function n(){if(!t())throw Le}function r(e){if(!e||e.maxVisualMediaCount>10||e.maxVisualMediaCount<1)throw He}function i(e,t){if(t.length>e)throw xe}e.captureImages=function(e){return la(this,void 0,void 0,(function*(){Mt(gt,Ie.content,Ie.task),n(),r(e);const t=yield yr(o(ua,"visualMedia.image.captureImages"),"visualMedia.image.captureImages",e);return i(e.maxVisualMediaCount,t),t}))},e.retrieveImages=function(e){return la(this,void 0,void 0,(function*(){Mt(gt,Ie.content,Ie.task),n(),r(e);const t=yield yr(o(ua,"visualMedia.image.retrieveImages"),"visualMedia.image.retrieveImages",e);return i(e.maxVisualMediaCount,t),t}))},e.isSupported=t}(r=e.image||(e.image={}))}(da||(da={}));var fa,pa=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};!function(e){function t(){return pa(this,void 0,void 0,(function*(){return null===ga&&(ga=(yield Cn.getContext()).app.host.name),ga}))}function n(){return Mt(gt)&&void 0!==gt.supports.webStorage}e.isWebStorageClearedOnUserLogOut=function(){return pa(this,void 0,void 0,(function*(){if(Mt(gt),!n())throw Le;return!(!gt.isLegacyTeams||C.hostClientType!==Te.android&&C.hostClientType!==Te.ios&&C.hostClientType!==Te.ipados||(yield t())!==Ae.teams)||(yield wr(o("v2","webStorage.isWebStorageClearedOnUserLogOut"),"webStorage.isWebStorageClearedOnUserLogOut"))}))},e.isSupported=n}(fa||(fa={}));let ga=null;var ma;!function(e){let t;function n(){return!(!Mt(gt)||!gt.supports.call)}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(t=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){const r=o("v2","call.startCall");return new Promise((o=>{var i;if(Mt(gt,Ie.content,Ie.task),!n())throw Le;if(!gt.isLegacyTeams)return Ar(r,"call.startCall",[e],o);o(wr(r,"executeDeepLink",gi(e.targets,null===(i=e.requestedModalities)||void 0===i?void 0:i.includes(t.Video),e.source)).then((e=>{if(!e)throw new Error("The call was not properly started");return e})))}))},e.isSupported=n}(ma||(ma={}));const ha="v1";var wa;!function(e){e.Messages=Cn.Messages,e.FailedReason=Cn.FailedReason,e.ExpectedFailureReason=Cn.ExpectedFailureReason,e.notifyAppLoaded=function(){dn(o(ha,"appInitialization.notifyAppLoaded"))},e.notifySuccess=function(){gn(o(ha,"appInitialization.notifySuccess"))},e.notifyFailure=function(e){pn(o(ha,"appInitialization.notifyFailure"),e)},e.notifyExpectedFailure=function(e){fn(o(ha,"appInitialization.notifyExpectedFailure"),e)}}(wa||(wa={}));const va=t("thirdPartyCloudStorage");var Ca;!function(e){class t{constructor(e,t){this.fileType=e,this.assembleAttachment=t}}let n=[],r=null,i=!0,a=null;function s(e){if(a)if(e&&e.error)a([],e.error),a=null;else if(e&&e.fileChunk)try{i||0!==e.fileChunk.chunkSequence||(va("Last chunk is not received or 'endOfFile' value for previous chunk was not set to true"),i=!0,a([],{errorCode:we.INTERNAL_ERROR,message:"error occurred while receiving data"}),n=[],a=null);const o=bi(e.fileChunk,e.fileType);if(o?(r||(r=new t(e.fileType,[])),r.assembleAttachment.push(o)):(va(`Received a null assemble attachment for when decoding chunk sequence ${e.fileChunk.chunkSequence}; not including the chunk in the assembled file.`),a?a([],{errorCode:we.INTERNAL_ERROR,message:"error occurred while receiving data"}):a=null,n=[],a=null,i=!0),i=e.fileChunk.endOfFile,e.fileChunk.endOfFile&&r){const t=Si(r.assembleAttachment,r.fileType);if(t){const r=new File([t],e.fileName,{type:t.type});n.push(r)}e.isLastFile&&a&&(a(n,e.error),n=[],a=null,i=!0),r=null}}catch(e){a&&(a([],{errorCode:we.INTERNAL_ERROR,message:e}),n=[],a=null,i=!0)}else a([],{errorCode:we.INTERNAL_ERROR,message:"data received is null"}),n=[],a=null,i=!0}function c(){return!(!Mt(gt)||!gt.supports.thirdPartyCloudStorage)}e.getDragAndDropFiles=function(e,t){if(!t)throw new Error("[getDragAndDropFiles] Callback cannot be null");if(e&&""!==e){if(Mt(gt,Ie.content,Ie.task),!c())throw Le;if(a)throw a=null,new Error("getDragAndDropFiles cannot be called twice");a=t,i=!0,Ar(o("v2","thirdPartyCloudStorage.getDragAndDropFiles"),"thirdPartyCloudStorage.getDragAndDropFiles",[e],s)}else{t([],{errorCode:we.INVALID_ARGUMENTS})}},e.isSupported=c}(Ca||(Ca={}));const ya="v1";function Sa(e,t){un(o(ya,"initialize"),t).then((()=>{e&&e()}))}function ba(){Yi.enablePrintCapability()}function Ea(){Yi.print()}function Ta(e){kt(),Ar(o(ya,"getContext"),"getContext",(t=>{t.frameContext||(t.frameContext=C.frameContext),e(t)}))}function Aa(e){wn(o(ya,"registerOnThemeChangeHandlerHelper"),e)}function Ia(e){zn(o(ya,"registerFullScreenHandler"),"fullScreenChange",e,[])}function Pa(e){zn(o(ya,"registerAppButtonClickHandler"),"appButtonClick",e,[Ie.content])}function Fa(e){zn(o(ya,"registerAppButtonHoverEnterHandler"),"appButtonHoverEnter",e,[Ie.content])}function Ra(e){zn(o(ya,"registerAppButtonHoverLeaveHandler"),"appButtonHoverLeave",e,[Ie.content])}function Oa(e){Ln.backStack.registerBackButtonHandlerHelper(o(ya,"registerBackButtonHandler"),e)}function ka(e){Yi.registerOnLoadHandlerHelper(o(ya,"registerOnLoadHandler"),e)}function Ma(e){Yi.registerBeforeUnloadHandlerHelper(o(ya,"registerBeforeUnloadHandler"),e)}function La(e){zn(o(ya,"registerFocusEnterHandler"),"focusEnter",e,[])}function Na(e){zn(o(ya,"registerChangeSettingsHandler"),"changeSettings",e,[Ie.content])}function Ua(e,t){Mt(gt),In(o(ya,"getTabInstances"),t).then((t=>{e(t)}))}function Da(e,t){Mt(gt),Pn(o(ya,"getMruTabInstances"),t).then((t=>{e(t)}))}function Ha(e){Fn(o(ya,"shareDeepLink"),{subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function xa(e,t){Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.task,Ie.stage,Ie.meetingStage);const n=null!=t?t:Ve();vn(o(ya,"executeDeepLink"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function Va(e){Rn(o(ya,"setFrameContext"),e)}function _a(e,t,n){un(o(ya,"initializeWithFrameContext"),n).then((()=>t&&t())),Rn(o(ya,"setFrameContext"),e)}const Wa="v1";function Ba(e){An(o(Wa,"navigation.returnFocus"),e)}function ja(e,t){Mt(gt);const n=null!=t?t:Ve();Tn(o(Wa,"navigation.navigateToTab"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function za(e,t){Mt(gt,Ie.content,Ie.sidePanel,Ie.settings,Ie.remove,Ie.task,Ie.stage,Ie.meetingStage);const n=null!=t?t:Ve();bn(o(Wa,"navigation.navigateCrossDomain"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function qa(e){Mt(gt);const t=null!=e?e:Ve();En(o(Wa,"navigation.navigateBack")).then((()=>{t(!0)})).catch((e=>{t(!1,e.message)}))}const $a="v1";var Ga;!function(e){e.setValidityState=function(e){On(o($a,"settings.setValidityState"),e)},e.getSettings=function(e){Mt(gt,Ie.content,Ie.settings,Ie.remove,Ie.sidePanel),kn(o($a,"settings.getSettings")).then((t=>{e(t)}))},e.setSettings=function(e,t){Mt(gt,Ie.content,Ie.settings,Ie.sidePanel);const n=null!=t?t:Ve();Mn(o($a,"settings.setSettings"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))},e.registerOnSaveHandler=function(e){Ln.config.registerOnSaveHandlerHelper(o($a,"settings.registerOnSaveHandler"),e)},e.registerOnRemoveHandler=function(e){Ln.config.registerOnRemoveHandlerHelper(o($a,"settings.registerOnRemoveHandler"),e)}}(Ga||(Ga={}));var Ja=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Ka="v1";var Za;!function(e){function t(e){if(void 0===e.url)throw new Error("url property of taskInfo object can't be undefined");return{url:e.url,size:{height:e.height?e.height:Me.Small,width:e.width?e.width:Me.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function n(e){if(void 0===e.url||void 0===e.completionBotId)throw new Error(`Both url ${e.url} and completionBotId ${e.completionBotId} are required for bot url dialog. At least one is undefined.`);return{url:e.url,size:{height:e.height?e.height:Me.Small,width:e.width?e.width:Me.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function r(e){return e.height=e.height?e.height:Me.Small,e.width=e.width?e.width:Me.Small,e}e.startTask=function(e,r){const i=o(Ka,"tasks.startTask"),a=r?e=>{var t,n;return r(null!==(t=e.err)&&void 0!==t?t:"",null!==(n=e.result)&&void 0!==n?n:"")}:void 0;return void 0===e.card&&void 0===e.url||e.card?(Mt(gt,Ie.content,Ie.sidePanel,Ie.meetingStage),Ar(i,"tasks.startTask",[e],r)):void 0!==e.completionBotId?tn(i,n(e),a):en(i,t(e),a),new ji},e.updateTask=function(e){e=r(e);const{width:t,height:n}=e,i=Ja(e,["width","height"]);if(Object.keys(i).length)throw new Error("resize requires a TaskInfo argument containing only width and height");Yt(o(Ka,"tasks.updateTask"),e)},e.submitTask=function(e,t){nn(o(Ka,"tasks.submitTask"),e,t)},e.getDefaultSizeIfNotProvided=r}(Za||(Za={}));const Qa="v2";var Xa;!function(e){let t,n;!function(e){e.guest="Guest",e.attendee="Attendee",e.presenter="Presenter",e.organizer="Organizer"}(t=e.UserMeetingRole||(e.UserMeetingRole={})),function(e){e.added="Added",e.alreadyExists="AlreadyExists",e.conflict="Conflict",e.notFound="NotFound"}(n=e.ContainerState||(e.ContainerState={})),e.isSupported=function(){return!(!Mt(gt,Ie.meetingStage,Ie.sidePanel,Ie.content)||!gt.supports.interactive)}}(Xa||(Xa={}));class Ya{getFluidTenantInfo(){return es(),new Promise((e=>{e(yr(o(Qa,"interactive.getFluidTenantInfo"),"interactive.getFluidTenantInfo"))}))}getFluidToken(e){return es(),new Promise((t=>{t(yr(o(Qa,"interactive.getFluidToken"),"interactive.getFluidToken",e))}))}getFluidContainerId(){return es(),new Promise((e=>{e(yr(o(Qa,"interactive.getFluidContainerId"),"interactive.getFluidContainerId"))}))}setFluidContainerId(e){return es(),new Promise((t=>{t(yr(o(Qa,"interactive.setFluidContainerId"),"interactive.setFluidContainerId",e))}))}getNtpTime(){return es(),new Promise((e=>{e(yr(o(Qa,"interactive.getNtpTime"),"interactive.getNtpTime"))}))}registerClientId(e){return es(),new Promise((t=>{t(yr(o(Qa,"interactive.registerClientId"),"interactive.registerClientId",e))}))}getClientRoles(e){return es(),new Promise((t=>{t(yr(o(Qa,"interactive.getClientRoles"),"interactive.getClientRoles",e))}))}getClientInfo(e){return es(),new Promise((t=>{t(yr(o(Qa,"interactive.getClientInfo"),"interactive.getClientInfo",e))}))}static create(){return es(),new Ya}}function es(){if(!Xa.isSupported())throw new Error("LiveShareHost Not supported")}var ts=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function ns(e){try{return e.cartItems=rs(e.cartItems),e}catch(e){throw new Error("Error deserializing cart")}}function rs(e){return e.map((e=>{if(e.imageURL){const t=new URL(e.imageURL);e.imageURL=t}return e.accessories&&(e.accessories=rs(e.accessories)),e}))}const os=e=>{try{return e.map((e=>{const{imageURL:t,accessories:n}=e,r=ts(e,["imageURL","accessories"]),o=Object.assign({},r);return t&&(o.imageURL=t.href),n&&(o.accessories=os(n)),o}))}catch(e){throw new Error("Error serializing cart items")}};function is(e){if(!Array.isArray(e)||0===e.length)throw new Error("cartItems must be a non-empty array");for(const t of e)ss(t),as(t.accessories)}function as(e){if(null!=e){if(!Array.isArray(e)||0===e.length)throw new Error("CartItem.accessories must be a non-empty array");for(const t of e){if(t.accessories)throw new Error("Item in CartItem.accessories cannot have accessories");ss(t)}}}function ss(e){if(!e.id)throw new Error("cartItem.id must not be empty");if(!e.name)throw new Error("cartItem.name must not be empty");ls(e.price),us(e.quantity)}function cs(e){if(null!=e){if(!e)throw new Error("id must not be empty");if(!1===pe(e))throw new Error("id must be a valid UUID")}}function ls(e){if("number"!=typeof e||e<0)throw new Error(`price ${e} must be a number not less than 0`);if(parseFloat(e.toFixed(3))!==e)throw new Error(`price ${e} must have at most 3 decimal places`)}function us(e){if("number"!=typeof e||e<=0||parseInt(e.toString())!==e)throw new Error(`quantity ${e} must be an integer greater than 0`)}function ds(e){if(!Object.values(ps.CartStatus).includes(e))throw new Error(`cartStatus ${e} is not valid`)}const fs="v2";var ps;!function(e){let t,n;function r(){return!(!Mt(gt)||!gt.supports.marketplace)}e.cartVersion={majorVersion:1,minorVersion:1},function(e){e.TACAdminUser="TACAdminUser",e.TeamsAdminUser="TeamsAdminUser",e.TeamsEndUser="TeamsEndUser"}(t=e.Intent||(e.Intent={})),function(e){e.Open="Open",e.Processing="Processing",e.Processed="Processed",e.Closed="Closed",e.Error="Error"}(n=e.CartStatus||(e.CartStatus={})),e.getCart=function(){if(Mt(gt,Ie.content,Ie.task),!r())throw Le;return yr(o(fs,"marketplace.getCart"),"marketplace.getCart",e.cartVersion).then(ns)},e.addOrUpdateCartItems=function(t){if(Mt(gt,Ie.content,Ie.task),!r())throw Le;if(!t)throw new Error("addOrUpdateCartItemsParams must be provided");return cs(null==t?void 0:t.cartId),is(null==t?void 0:t.cartItems),yr(o(fs,"marketplace.addOrUpdateCartItems"),"marketplace.addOrUpdateCartItems",Object.assign(Object.assign({},t),{cartItems:os(t.cartItems),cartVersion:e.cartVersion})).then(ns)},e.removeCartItems=function(t){if(Mt(gt,Ie.content,Ie.task),!r())throw Le;if(!t)throw new Error("removeCartItemsParams must be provided");if(cs(null==t?void 0:t.cartId),!Array.isArray(null==t?void 0:t.cartItemIds)||0===(null==t?void 0:t.cartItemIds.length))throw new Error("cartItemIds must be a non-empty array");return yr(o(fs,"marketplace.removeCartItems"),"marketplace.removeCartItems",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(ns)},e.updateCartStatus=function(t){if(Mt(gt,Ie.content,Ie.task),!r())throw Le;if(!t)throw new Error("updateCartStatusParams must be provided");return cs(null==t?void 0:t.cartId),ds(null==t?void 0:t.cartStatus),yr(o(fs,"marketplace.updateCartStatus"),"marketplace.updateCartStatus",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(ns)},e.isSupported=r}(ps||(ps={}));const gs="v2";var ms;!function(e){let t,n;!function(e){e.edu="EDU"}(t=e.AppTypes||(e.AppTypes={})),function(t){function n(){var t;return!!(Mt(gt)&&e.isSupported()&&(null===(t=gt.supports.hostEntity)||void 0===t?void 0:t.tab))}function r(e){if(!e||0==e.length)throw new Error(`Error code: ${we.INVALID_ARGUMENTS}, message: ThreadId cannot be null or empty`)}function i(e){if(!(null==e?void 0:e.internalTabInstanceId)||0===e.internalTabInstanceId.length)throw new Error(`Error code: ${we.INVALID_ARGUMENTS}, message: TabId cannot be null or empty`)}t.addAndConfigure=function(e,t){if(Mt(gt),!n())throw new Error(`Error code: ${we.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);if(r(e.threadId),t&&0===t.length)throw new Error(`Error code: ${we.INVALID_ARGUMENTS}, message: App types cannot be an empty array`);return Sr(o(gs,"hostEntity.tab.addAndConfigure"),"hostEntity.tab.addAndConfigure",[e,t]).then((([e])=>{var t;if(Oe(e))throw new Error(`Error code: ${e.errorCode}, message: ${null!==(t=e.message)&&void 0!==t?t:"None"}`);return e}))},t.getAll=function(e){if(Mt(gt),!n())throw new Error(`Error code: ${we.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return r(e.threadId),Sr(o(gs,"hostEntity.tab.getAll"),"hostEntity.tab.getAll",[e]).then((([e])=>{var t;if(Oe(e))throw new Error(`Error code: ${e.errorCode}, message: ${null!==(t=e.message)&&void 0!==t?t:"None"}`);return e}))},t.reconfigure=function(e,t){if(Mt(gt),!n())throw new Error(`Error code: ${we.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return i(e),r(t.threadId),Sr(o(gs,"hostEntity.tab.reconfigure"),"hostEntity.tab.reconfigure",[e,t]).then((([e])=>{var t;if(Oe(e))throw new Error(`Error code: ${e.errorCode}, message: ${null!==(t=e.message)&&void 0!==t?t:"None"}`);return e}))},t.rename=function(e,t){if(Mt(gt),!n())throw new Error(`Error code: ${we.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return i(e),r(t.threadId),Sr(o(gs,"hostEntity.tab.rename"),"hostEntity.tab.rename",[e,t]).then((([e])=>{var t;if(Oe(e))throw new Error(`Error code: ${e.errorCode}, message: ${null!==(t=e.message)&&void 0!==t?t:"None"}`);return e}))},t.remove=function(e,t){if(Mt(gt),!n())throw new Error(`Error code: ${we.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return r(t.threadId),i(e),Sr(o(gs,"hostEntity.tab.remove"),"hostEntity.tab.remove",[e,t]).then((([e])=>{var t;if(Oe(e))throw new Error(`Error code: ${e.errorCode}, message: ${null!==(t=e.message)&&void 0!==t?t:"None"}`);return!0}))},t.isSupported=n}(n=e.tab||(e.tab={})),e.isSupported=function(){return!(!Mt(gt)||!gt.supports.hostEntity)}}(ms||(ms={}))})(),r})()));
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(129);
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


const beforeUnloadHandler = (readyToUnload) => {
    setTimeout(() => {
        readyToUnload();
    }, 2000);
    return true;
};
const loadHandler = (data) => {
    const timeout = 1000;
    setTimeout(() => {
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }, timeout);
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
            name: "app.getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.app.getContext().then(output);
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
                    defaultValue: '{"title": "Large Test Task Module", "height": "large", "width": "large"}',
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
            name: "webStorage.isWebStorageClearedOnUserLogOut",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output(""); // Clear output
                MicrosoftTeams_min.webStorage.isWebStorageClearedOnUserLogOut()
                    .then((value) => output(`Response: ${value}`))
                    .catch((err) => output(err));
            },
        });
        addModule({
            name: "hostEntity.tab.getAll",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "hostEntityIds",
                    defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
                }
            ],
            action: (hostEntityIds, output) => {
                MicrosoftTeams_min.hostEntity.tab.getAll(hostEntityIds)
                    .then((result) => {
                    output(JSON.stringify(result));
                })
                    .catch((error) => {
                    output(`Error Response: ${error}`);
                });
            },
        });
        addModule({
            name: "hostEntity.tab.reconfigure",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "tab",
                    defaultValue: '{}',
                },
                {
                    type: "object",
                    name: "hostEntityIds",
                    defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
                }
            ],
            action: (tab, hostEntityIds, output) => {
                MicrosoftTeams_min.hostEntity.tab.reconfigure(tab, hostEntityIds)
                    .then((result) => {
                    output(JSON.stringify(result));
                })
                    .catch((error) => {
                    output(`Error Response: ${error}`);
                });
            },
        });
        addModule({
            name: "hostEntity.tab.rename",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "tab",
                    defaultValue: '{}',
                },
                {
                    type: "object",
                    name: "hostEntityIds",
                    defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
                }
            ],
            action: (tab, hostEntityIds, output) => {
                MicrosoftTeams_min.hostEntity.tab.rename(tab, hostEntityIds)
                    .then((result) => {
                    output(JSON.stringify(result));
                })
                    .catch((error) => {
                    output(`Error Response: ${error}`);
                });
            },
        });
        addModule({
            name: "hostEntity.tab.remove",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "tabId",
                    defaultValue: "",
                },
                {
                    type: "object",
                    name: "hostEntityIds",
                    defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
                }
            ],
            action: (tabId, hostEntityIds, output) => {
                MicrosoftTeams_min.hostEntity.tab.remove(tabId, hostEntityIds)
                    .then((result) => {
                    output(`Response: ${result}`);
                })
                    .catch((error) => {
                    output(`Error Response: ${error}`);
                });
            },
        });
        addModule({
            name: "hostEntity.tab.AddAndConfigure",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "hostEntityIds",
                    defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
                },
                {
                    type: "object",
                    name: "appTypes",
                    defaultValue: '[""]',
                },
            ],
            action: (hostEntityIds, appTypes, output) => {
                MicrosoftTeams_min.hostEntity.tab.addAndConfigure(hostEntityIds, appTypes)
                    .then((result) => {
                    output(JSON.stringify(result));
                })
                    .catch((error) => {
                    output(`Error Response: ${error}`);
                });
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
            name: "closeStageView",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.stageView.self.close();
            }
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
        const url = new URL(window.location.href);
        if (url.searchParams.get("simulateTimeout")) {
            // Do nothing
        }
        else if (url.searchParams.get("simulateFailure")) {
            MicrosoftTeams_min.appInitialization.notifyFailure({
                reason: MicrosoftTeams_min.appInitialization.FailedReason.Other
            });
        }
        else {
            MicrosoftTeams_min.appInitialization.notifySuccess();
        }
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({
            reason: MicrosoftTeams_min.appInitialization.FailedReason.Other,
            message: err.message,
        });
    }
};
const registerAppCachingHandlers = () => {
    MicrosoftTeams_min.getContext((context) => {
        MicrosoftTeams_min.registerBeforeUnloadHandler((readyToUnload) => {
            const result = beforeUnloadHandler(readyToUnload);
            return result;
        });
        MicrosoftTeams_min.registerOnLoadHandler((data) => {
            loadHandler(data);
        });
    });
};

;// CONCATENATED MODULE: ./src/index.ts



(function () {
    initializeAppModules();
    registerAppCachingHandlers();
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
//# sourceMappingURL=app.57004dad6f65dbeffee2.js.map