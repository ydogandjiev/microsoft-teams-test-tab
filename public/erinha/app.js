/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(self,(function(){return(()=>{var e={22:(e,n,t)=>{var o=t(481),i=t(426),r=i;r.v1=o,r.v4=i,e.exports=r},725:e=>{for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,i=n;return[i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]]].join("")}},157:e=>{var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},481:(e,n,t)=>{var o,i,r=t(157),a=t(725),s=0,l=0;e.exports=function(e,n,t){var c=n&&t||0,u=n||[],d=(e=e||{}).node||o,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var p=r();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=i=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:l+1,h=m-s+(g-l)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||m>s)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,l=g,i=f;var C=(1e4*(268435455&(m+=122192928e5))+g)%4294967296;u[c++]=C>>>24&255,u[c++]=C>>>16&255,u[c++]=C>>>8&255,u[c++]=255&C;var w=m/4294967296*1e4&268435455;u[c++]=w>>>8&255,u[c++]=255&w,u[c++]=w>>>24&15|16,u[c++]=w>>>16&255,u[c++]=f>>>8|128,u[c++]=255&f;for(var v=0;v<6;++v)u[c+v]=d[v];return n||a(u)}},426:(e,n,t)=>{var o=t(157),i=t(725);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[r+s]=a[s];return n||i(a)}},227:(e,n,t)=>{n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let o=0,i=0;n[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(i=o))})),n.splice(i,0,t)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},n.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage=function(){try{return localStorage}catch(e){}}(),n.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.log=console.debug||console.log||(()=>{}),e.exports=t(447)(n);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},447:(e,n,t)=>{e.exports=function(e){function n(e){let t,i,r,a=null;function s(...e){if(!s.enabled)return;const o=s,i=Number(new Date),r=i-(t||i);o.diff=r,o.prev=t,o.curr=i,t=i,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((t,i)=>{if("%%"===t)return"%";a++;const r=n.formatters[i];if("function"==typeof r){const n=e[a];t=r.call(o,n),e.splice(a,1),a--}return t})),n.formatArgs.call(o,e);(o.log||n.log).apply(o,e)}return s.namespace=e,s.useColors=n.useColors(),s.color=n.selectColor(e),s.extend=o,s.destroy=n.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(i!==n.namespaces&&(i=n.namespaces,r=n.enabled(e)),r),set:e=>{a=e}}),"function"==typeof n.init&&n.init(s),s}function o(e,t){const o=n(this.namespace+(void 0===t?":":t)+e);return o.log=this.log,o}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},n.disable=function(){const e=[...n.names.map(i),...n.skips.map(i).map((e=>"-"+e))].join(",");return n.enable(""),e},n.enable=function(e){let t;n.save(e),n.namespaces=e,n.names=[],n.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),i=o.length;for(t=0;t<i;t++)o[t]&&("-"===(e=o[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){if("*"===e[e.length-1])return!0;let t,o;for(t=0,o=n.skips.length;t<o;t++)if(n.skips[t].test(e))return!1;for(t=0,o=n.names.length;t<o;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(824),n.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((t=>{n[t]=e[t]})),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return n.colors[Math.abs(t)%n.colors.length]},n.enable(n.load()),n}},824:e=>{var n=1e3,t=60*n,o=60*t,i=24*o;function r(e){if(!((e=String(e)).length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*t;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function a(e){var r=Math.abs(e);return r>=i?Math.round(e/i)+"d":r>=o?Math.round(e/o)+"h":r>=t?Math.round(e/t)+"m":r>=n?Math.round(e/n)+"s":e+"ms"}function s(e){var r=Math.abs(e);return r>=i?l(e,r,i,"day"):r>=o?l(e,r,o,"hour"):r>=t?l(e,r,t,"minute"):r>=n?l(e,r,n,"second"):e+" ms"}function l(e,n,t,o){var i=n>=1.5*t;return Math.round(e/t)+" "+o+(i?"s":"")}e.exports=function(e,n){n=n||{};var t=typeof e;if("string"===t&&e.length>0)return r(e);if("number"===t&&isFinite(e))return n.long?s(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var o={};return(()=>{"use strict";t.r(o),t.d(o,{ChannelType:()=>w,ChildAppWindow:()=>dn,DialogDimension:()=>c,ErrorCode:()=>n,FileOpenPreference:()=>e,FrameContexts:()=>a,HostClientType:()=>i,HostName:()=>r,NotificationTypes:()=>qe,ParentAppWindow:()=>fn,TaskModuleDimension:()=>v,TeamType:()=>s,UserSettingTypes:()=>Je,UserTeamRole:()=>l,ViewerActionTypes:()=>Ze,app:()=>te,appEntity:()=>ht,appInitialization:()=>Un,appInstallDialog:()=>rn,authentication:()=>y,calendar:()=>On,call:()=>Ln,chat:()=>an,conversations:()=>Ke,dialog:()=>Y,enablePrintCapability:()=>_n,executeDeepLink:()=>tt,files:()=>dt,getContext:()=>zn,getMruTabInstances:()=>et,getTabInstances:()=>Yn,initialize:()=>xn,initializeWithFrameContext:()=>it,legacy:()=>ft,location:()=>Pn,logs:()=>Ge,mail:()=>Rn,media:()=>En,meeting:()=>Fn,meetingRoom:()=>pt,menus:()=>ee,monetization:()=>kn,navigateBack:()=>ct,navigateCrossDomain:()=>lt,navigateToTab:()=>st,notifications:()=>mt,openFilePreview:()=>G,pages:()=>oe,people:()=>Mn,print:()=>Vn,registerAppButtonClickHandler:()=>Gn,registerAppButtonHoverEnterHandler:()=>qn,registerAppButtonHoverLeaveHandler:()=>Zn,registerBackButtonHandler:()=>Jn,registerBeforeUnloadHandler:()=>Qn,registerCustomHandler:()=>B,registerEnterSettingsHandler:()=>$n,registerFocusEnterHandler:()=>Xn,registerFullScreenHandler:()=>jn,registerOnLoadHandler:()=>Kn,registerOnThemeChangeHandler:()=>Bn,registerUserSettingsChangeHandler:()=>j,remoteCamera:()=>gt,returnFocus:()=>at,sendCustomEvent:()=>z,sendCustomMessage:()=>V,setFrameContext:()=>ot,settings:()=>Wn,shareDeepLink:()=>nt,sharing:()=>Dn,stageView:()=>Nn,tasks:()=>ut,teams:()=>Ct,teamsCore:()=>ne,uploadCustomApp:()=>_,video:()=>An});var e,n,i,r,a,s,l,c,u="2.0.0-beta.6",d="2.0.1",f="2.0.3",p="1.9.0",m="1.8.0",g=["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","teams.live.com","devspaces.skype.com","ssauth.skype.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","msft.spoppe.com","*.sharepoint.com","*.sharepoint-df.com","*.sharepointonline.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","*.teams.microsoft.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.office.com"],h=/^https:\/\//,C=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(e||(e={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n||(n={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(i||(i={})),function(e){e.office="Office",e.outlook="Outlook",e.orange="Orange",e.teams="Teams"}(r||(r={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(a||(a={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(s||(s={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(l||(l={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(c||(c={}));var w,v=c;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(w||(w={}));var y,S={errorCode:n.NOT_SUPPORTED_ON_PLATFORM},b=t(22);function T(e,n){if("*."===e.substring(0,2)){var t=e.substring(1);if(n.length>t.length&&n.split(".").length===t.split(".").length&&n.substring(n.length-t.length)===t)return!0}else if(e===n)return!0;return!1}function I(e){if("https:"!==e.protocol)return!1;var n=e.host;if(g.some((function(e){return T(e,n)})))return!0;for(var t=0,o=C.additionalValidOrigins;t<o.length;t++){var i=o[t];if(T("https://"===i.substring(0,8)?i.substring(8):i,n))return!0}return!1}function E(e){return function(n,t){if(!n)throw new Error(e||t)}}function P(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),o=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!o.every(i))return NaN;for(;t.length<o.length;)t.push("0");for(;o.length<t.length;)o.push("0");for(var r=0;r<t.length;++r)if(Number(t[r])!=Number(o[r]))return Number(t[r])>Number(o[r])?1:-1;return 0}function F(){return b.v4()}function k(e){return Object.keys(e).forEach((function(n){"object"==typeof e[n]&&k(e[n])})),Object.freeze(e)}function O(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(void 0,e)})).catch((function(e){n&&n(e)})),i}function R(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(){n&&n(void 0,!0)})).catch((function(e){n&&n(e,!1)})),i}function M(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(){n&&n(null)})).catch((function(e){n&&n(e)})),i}function A(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(null,e)})).catch((function(e){n&&n(e,null)})),i}function D(e,n,t){return new Promise((function(o,i){var r=setTimeout(i,n,t);e().then((function(e){clearTimeout(r),o(e)})).catch((function(e){clearTimeout(r),i(e)}))}))}function N(e){var n=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&n.searchParams.append("webUrl",e.webUrl),(e.channelId||e.subPageId)&&n.searchParams.append("context",JSON.stringify({channelId:e.channelId,subEntityId:e.subPageId})),n.toString()}function L(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!C.initializeCalled)throw new Error("The library has not yet been initialized");if(C.frameContext&&e&&e.length>0){for(var t=!1,o=0;o<e.length;o++)if(e[o]===C.frameContext){t=!0;break}if(!t)throw new Error("This call is only allowed in following contexts: "+JSON.stringify(e)+'. Current context: "'+C.frameContext+'".')}}function U(e){void 0===e&&(e=d);var n=P(C.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0}function W(){return C.hostClientType==i.android||C.hostClientType==i.ios}function H(e){if(void 0===e&&(e=d),!W())throw{errorCode:n.NOT_SUPPORTED_ON_PLATFORM};if(!U(e))throw{errorCode:n.OLD_PLATFORM}}function x(e){var n=C.additionalValidOrigins.concat(e.filter((function(e){return"string"==typeof e&&h.test(e)}))),t={};n=n.filter((function(e){return!t[e]&&(t[e]=!0,!0)})),C.additionalValidOrigins=n}function _(e,n){L(),De("uploadCustomApp",[e],n||E())}function V(e,n,t){L(),De(e,n,t)}function z(e,n){if(L(),!Te.childWindow)throw new Error("The child window has not yet been initialized or is not present");en(e,n)}function B(e,n){var t=this;L(),pe(e,(function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return n.apply(t,e)}))}function j(e,n){L(),pe("userSettingsChange",n,!0,[e])}function G(e){L(a.content,a.task),De("openFilePreview",[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId])}!function(e){var n,t,o;function r(e){return new Promise((function(t,o){if(C.hostClientType===i.desktop||C.hostClientType===i.android||C.hostClientType===i.ios||C.hostClientType===i.rigel||C.hostClientType===i.teamsRoomsWindows||C.hostClientType===i.teamsRoomsAndroid||C.hostClientType===i.teamsPhones||C.hostClientType===i.teamsDisplays){var r=document.createElement("a");r.href=e.url,t(Me("authentication.authenticate",[r.href,e.width,e.height,e.isExternal]).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)})))}else n={success:t,fail:o},u(e)}))}function s(e){return new Promise((function(n){n(Me("authentication.getAuthToken",[null==e?void 0:e.resources,null==e?void 0:e.claims,null==e?void 0:e.silent]))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function l(){return new Promise((function(e){e(Me("authentication.getUser"))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function c(){d();try{Te.childWindow&&Te.childWindow.close()}finally{Te.childWindow=null,Te.childOrigin=null}}function u(e){c();var n=e.width||600,t=e.height||400;n=Math.min(n,Te.currentWindow.outerWidth-400),t=Math.min(t,Te.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=e.url.replace("{oauthRedirectMethod}","web");var i=void 0!==Te.currentWindow.screenLeft?Te.currentWindow.screenLeft:Te.currentWindow.screenX,r=void 0!==Te.currentWindow.screenTop?Te.currentWindow.screenTop:Te.currentWindow.screenY;i+=Te.currentWindow.outerWidth/2-n/2,r+=Te.currentWindow.outerHeight/2-t/2,Te.childWindow=Te.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+i+", width="+n+", height="+t),Te.childWindow?f():m("FailedToOpenWindow")}function d(){t&&(clearInterval(t),t=0),me("initialize"),me("navigateCrossDomain")}function f(){d(),t=Te.currentWindow.setInterval((function(){if(!Te.childWindow||Te.childWindow.closed)m("CancelledByUser");else{var e=Te.childOrigin;try{Te.childOrigin="*",en("ping")}finally{Te.childOrigin=e}}}),100),pe("initialize",(function(){return[a.authentication,C.hostClientType]})),pe("navigateCrossDomain",(function(){return!1}))}function p(e){try{n&&n.success(e)}finally{n=null,c()}}function m(e){try{n&&n.fail(new Error(e))}finally{n=null,c()}}function g(e,n,t){if(e){var o=document.createElement("a");o.href=decodeURIComponent(e),o.host&&o.host!==window.location.host&&"outlook.office.com"===o.host&&o.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(o.href=h(o.href,"result",t)),Te.currentWindow.location.assign(h(o.href,"authSuccess",""))),n&&"reason"===n&&(t&&(o.href=h(o.href,"reason",t)),Te.currentWindow.location.assign(h(o.href,"authFailure",""))))}}function h(e,n,t){var o=e.indexOf("#"),i=-1===o?"#":e.substr(o);return i=i+"&"+n+(""!==t?"="+t:""),(e=-1===o?e:e.substr(0,o))+i}e.initialize=function(){pe("authentication.authenticate.success",p,!1),pe("authentication.authenticate.failure",m,!1)},e.registerAuthenticationHandlers=function(e){o=e},e.authenticate=function(e){var n=void 0!==e,t=n?e:o;if(!t)throw new Error("No parameters are provided for authentication");return L(a.content,a.sidePanel,a.settings,a.remove,a.task,a.stage,a.meetingStage),r(t).then((function(e){try{return t&&t.successCallback?(t.successCallback(e),""):e}finally{n||(o=null)}})).catch((function(e){try{if(t&&t.failureCallback)return t.failureCallback(e.message),"";throw e}finally{n||(o=null)}}))},e.getAuthToken=function(e){return L(),s(e).then((function(n){return e&&e.successCallback?(e.successCallback(n),""):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),"";throw n}))},e.getUser=function(e){return L(),l().then((function(n){return e&&e.successCallback?(e.successCallback(n),null):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),null;throw n}))},e.notifySuccess=function(e,n){g(n,"result",e),L(a.authentication),De("authentication.authenticate.success",[e]),$e(Te.parentWindow,(function(){return setTimeout((function(){return Te.currentWindow.close()}),200)}))},e.notifyFailure=function(e,n){g(n,"reason",e),L(a.authentication),De("authentication.authenticate.failure",[e]),$e(Te.parentWindow,(function(){return setTimeout((function(){return Te.currentWindow.close()}),200)}))}}(y||(y={}));var q=function(){return q=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},q.apply(this,arguments)},Z={apiVersion:1,supports:{appInstallDialog:void 0,calendar:void 0,call:void 0,chat:void 0,conversations:void 0,dialog:{bot:void 0,update:void 0},location:void 0,logs:void 0,mail:void 0,meetingRoom:void 0,menus:void 0,monetization:void 0,notifications:void 0,pages:{appButton:void 0,tabs:void 0,config:void 0,backStack:void 0,fullTrust:void 0},people:void 0,remoteCamera:void 0,sharing:void 0,teams:{fullTrust:{joinedTeams:void 0}},teamsCore:void 0,video:void 0}},J={appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{bot:{},update:{}},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{appButton:{},tabs:{},config:{},backStack:{},fullTrust:{}},remoteCamera:{},sharing:{},teams:{fullTrust:{}},teamsCore:{},video:{}},K=[i.desktop,i.web,i.android,i.ios,i.rigel,i.surfaceHub,i.teamsRoomsWindows,i.teamsRoomsAndroid,i.teamsPhones,i.teamsDisplays],Q={"1.9.0":[{capability:{location:{}},hostClientTypes:K}],"2.0.0":[{capability:{people:{}},hostClientTypes:K}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[i.android,i.teamsRoomsAndroid,i.teamsPhones,i.teamsDisplays]}]};function X(e){var n=q({},J);return Object.keys(Q).forEach((function(t){P(e,t)>=0&&Q[t].forEach((function(e){e.hostClientTypes.includes(C.hostClientType)&&(n=q(q({},n),e.capability))}))})),{apiVersion:1,isLegacyTeams:!0,supports:n}}function $(e){Z=k(e)}var Y,ee,ne,te,oe;function ie(e){return{app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:r.teams,clientType:e.hostClientType?e.hostClientType:i.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:C.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:e.userObjectId,displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0}}!function(e){var n=[];function t(e){C.frameContext&&(C.frameContext===a.task?n.push(e):me("messageForChild"))}function o(){return!!Z.supports.dialog}function i(e){return{url:e.url,height:e.size?e.size.height:c.Small,width:e.size?e.size.width:c.Small,title:e.title,fallbackUrl:e.fallbackUrl}}function r(e){return{url:e.url,height:e.size?e.size.height:c.Small,width:e.size?e.size.width:c.Small,title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}e.initialize=function(){pe("messageForChild",t,!1)},e.open=function(e,n,t){if(L(a.content,a.sidePanel,a.meetingStage),!o())throw S;t&&pe("messageForParent",t),De("tasks.startTask",[i(e)],(function(e,t){n({err:e,result:t}),me("messageForParent")}))},e.submit=function(e,n){if(L(a.content,a.sidePanel,a.task,a.meetingStage),!o())throw S;De("tasks.completeTask",[e,n?Array.isArray(n)?n:[n]:[]])},e.sendMessageToParentFromDialog=function(e){if(L(a.task),!o())throw S;De("messageForParent",[e])},e.sendMessageToDialog=function(e){if(L(a.content,a.sidePanel,a.meetingStage),!o())throw S;De("messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(L(a.task),!o())throw S;for(me("messageForChild"),pe("messageForChild",e),n.reverse();n.length>0;){e(n.pop())}},e.isSupported=o,function(e){function n(){return!!Z.supports.dialog&&!!Z.supports.dialog.update}e.resize=function(e){if(L(a.content,a.sidePanel,a.task,a.meetingStage),!n())throw S;De("tasks.updateTask",[e])},e.isSupported=n}(e.update||(e.update={})),function(e){function n(){return!!Z.supports.dialog&&!!Z.supports.dialog.bot}e.open=function(e,t,o){if(L(a.content,a.sidePanel,a.meetingStage),!n())throw S;o&&pe("messageForParent",o),De("tasks.startTask",[r(e)],(function(e,n){t({err:e,result:n}),me("messageForParent")}))},e.isSupported=n}(e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=i,e.getDialogInfoFromBotUrlDialogInfo=r}(Y||(Y={})),function(e){!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(e.DisplayMode||(e.DisplayMode={}));var n,t,o,i=function(){return function(){this.enabled=!0,this.selected=!1}}();function r(e){o&&o(e)||(L(),De("viewConfigItemPress",[e]))}function a(e){n&&n(e)||(L(),De("handleNavBarMenuItemPress",[e]))}function s(e){t&&t(e)||(L(),De("handleActionMenuItemPress",[e]))}function l(){return!!Z.supports.menus}e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){pe("navBarMenuItemPress",a,!1),pe("actionMenuItemPress",s,!1),pe("setModuleView",r,!1)},e.setUpViews=function(e,n){if(L(),!l())throw S;o=n,De("setUpViews",[e])},e.setNavBarMenu=function(e,t){if(L(),!l())throw S;n=t,De("setNavBarMenu",[e])},e.showActionMenu=function(e,n){if(L(),!l())throw S;t=n,De("showActionMenu",[e])},e.isSupported=l}(ee||(ee={})),function(e){function n(){window.print()}function t(){return!!Z.supports.teamsCore}e.enablePrintCapability=function(){if(!C.printCapabilityEnabled){if(L(),!t())throw S;C.printCapabilityEnabled=!0,document.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=n,e.registerOnLoadHandler=function(e){if(L(),!t())throw S;Ce(e)},e.registerBeforeUnloadHandler=function(e){if(L(),!t())throw S;ve(e)},e.isSupported=t}(ne||(ne={})),function(e){e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return C.initializeCalled},e.getFrameContext=function(){return C.frameContext};function n(e){return new Promise((function(n){C.initializeCalled||(C.initializeCalled=!0,ue(),C.initializePromise=Ee(e).then((function(e){var n=e.context,t=e.clientType,o=e.runtimeConfig,i=e.clientSupportedSDKVersion,r=void 0===i?d:i;C.frameContext=n,C.hostClientType=t,C.clientSupportedSDKVersion=r;try{if(!(a=JSON.parse(o))||!a.apiVersion)throw new Error("Received runtime config is invalid");o&&$(a)}catch(e){if(!(e instanceof SyntaxError))throw e;try{isNaN(P(o,d))||(C.clientSupportedSDKVersion=o);var a=JSON.parse(r);r&&$(a)}catch(e){if(!(e instanceof SyntaxError))throw e;$(X(C.clientSupportedSDKVersion))}}C.initializeCompleted=!0})),y.initialize(),ee.initialize(),oe.config.initialize(),Y.initialize()),Array.isArray(e)&&x(e),n(C.initializePromise)}))}function t(e){L(),ge(e)}e.initialize=function(e){return D((function(){return n(e)}),5e3,new Error("SDK initialization timed out."))},e._initialize=function(e){Te.currentWindow=e},e._uninitialize=function(){C.initializeCalled&&(C.frameContext&&(t(null),oe.backStack.registerBackButtonHandler(null),oe.registerFullScreenHandler(null),ne.registerBeforeUnloadHandler(null),ne.registerOnLoadHandler(null),Ge.registerGetLogHandler(null)),C.frameContext===a.settings&&oe.config.registerOnSaveHandler(null),C.frameContext===a.remove&&oe.config.registerOnRemoveHandler(null),C.initializeCalled=!1,C.initializeCompleted=!1,C.initializePromise=null,C.additionalValidOrigins=[],C.frameContext=null,C.hostClientType=null,C.isFramelessWindow=!1,Pe())},e.getContext=function(){return new Promise((function(e){L(),e(Fe("getContext"))})).then((function(e){return ie(e)}))},e.notifyAppLoaded=function(){L(),De(e.Messages.AppLoaded,[u])},e.notifySuccess=function(){L(),De(e.Messages.Success,[u])},e.notifyFailure=function(n){L(),De(e.Messages.Failure,[n.reason,n.message])},e.notifyExpectedFailure=function(n){L(),De(e.Messages.ExpectedFailure,[n.reason,n.message])},e.registerOnThemeChangeHandler=t,e.openLink=function(e){return new Promise((function(n){L(a.content,a.sidePanel,a.settings,a.task,a.stage,a.meetingStage),n(ke("executeDeepLink",e))}))}}(te||(te={})),function(e){function n(e){if(L(a.content),!t())throw S;De("setFrameContext",[e])}function t(){return!!Z.supports.pages}e.returnFocus=function(e){if(L(),!t())throw S;De("returnFocus",[e])},e.registerFocusEnterHandler=function(e){if(L(),!t())throw S;pe("focusEnter",e)},e.setCurrentFrame=n,e.initializeWithFrameContext=function(e,t,o){te.initialize(o).then((function(){return t&&t()})),n(e)},e.getConfig=function(){return new Promise((function(e){if(L(a.content,a.settings,a.remove,a.sidePanel),!t())throw S;e(Fe("settings.getSettings"))}))},e.navigateCrossDomain=function(e){return new Promise((function(n){if(L(a.content,a.sidePanel,a.settings,a.remove,a.task,a.stage,a.meetingStage),!t())throw S;n(Oe("navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",e))}))},e.navigateToApp=function(e){return new Promise((function(n){if(L(a.content,a.sidePanel,a.settings,a.task,a.stage,a.meetingStage),!t())throw S;Z.isLegacyTeams?n(ke("executeDeepLink",N(e))):n(ke("pages.navigateToApp",e))}))},e.shareDeepLink=function(e){if(L(a.content,a.sidePanel,a.meetingStage),!t())throw S;De("shareDeepLink",[e.subPageId,e.subPageLabel,e.subPageWebUrl])},e.registerFullScreenHandler=function(e){if(L(),!t())throw S;pe("fullScreenChange",e)},e.isSupported=t,function(e){function n(){return!!Z.supports.pages&&!!Z.supports.pages.tabs}e.navigateToTab=function(e){return new Promise((function(t){if(L(),!n())throw S;t(Oe("navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",e))}))},e.getTabInstances=function(e){return new Promise((function(t){if(L(),!n())throw S;t(Fe("getTabInstances",e))}))},e.getMruTabInstances=function(e){return new Promise((function(t){if(L(),!n())throw S;t(Fe("getMruTabInstances",e))}))},e.isSupported=n}(e.tabs||(e.tabs={})),function(e){var n,t;function o(e){var t=new i(e);n?n(t):t.notifySuccess()}e.initialize=function(){pe("settings.save",o,!1),pe("settings.remove",r,!1)},e.setValidityState=function(e){if(L(a.settings,a.remove),!l())throw S;De("settings.setValidityState",[e])},e.setConfig=function(e){return new Promise((function(n){if(L(a.content,a.settings,a.sidePanel),!l())throw S;n(ke("settings.setSettings",e))}))},e.registerOnSaveHandler=function(e){if(L(a.settings),!l())throw S;n=e,e&&De("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){if(L(a.remove,a.settings),!l())throw S;t=e,e&&De("registerHandler",["remove"])},e.registerChangeConfigHandler=function(e){if(L(a.content),!l())throw S;pe("changeSettings",e)};var i=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),De("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),De("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function r(){var e=new s;t?t(e):e.notifySuccess()}var s=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),De("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),De("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}();function l(){return!!Z.supports.pages&&!!Z.supports.pages.config}e.isSupported=l}(e.config||(e.config={})),function(e){var n;function t(){return new Promise((function(e){if(L(),!i())throw S;e(Oe("navigateBack","Back navigation is not supported in the current client or context."))}))}function o(){n&&n()||t()}function i(){return!!Z.supports.pages&&!!Z.supports.pages.backStack}e._initialize=function(){pe("backButtonPress",o,!1)},e.navigateBack=t,e.registerBackButtonHandler=function(e){if(L(),!i())throw S;n=e,e&&De("registerHandler",["backButton"])},e.isSupported=i}(e.backStack||(e.backStack={})),function(e){function n(){return!!Z.supports.pages&&!!Z.supports.pages.fullTrust}e.enterFullscreen=function(){if(L(a.content),!n())throw S;De("enterFullscreen",[])},e.exitFullscreen=function(){if(L(a.content),!n())throw S;De("exitFullscreen",[])},e.isSupported=n}(e.fullTrust||(e.fullTrust={})),function(e){function n(){return!!Z.supports.pages&&!!Z.supports.pages.appButton}e.onClick=function(e){if(L(a.content),!n())throw S;pe("appButtonClick",e)},e.onHoverEnter=function(e){if(L(a.content),!n())throw S;pe("appButtonHoverEnter",e)},e.onHoverLeave=function(e){if(L(a.content),!n())throw S;pe("appButtonHoverLeave",e)},e.isSupported=n}(e.appButton||(e.appButton={}))}(oe||(oe={}));var re=(0,t(227).debug)("teamsJs");function ae(e){return re.extend(e)}var se=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},le=ae("handlers"),ce=function(){function e(){}return e.handlers={},e}();function ue(){ce.handlers.themeChange=he,ce.handlers.load=we,ce.handlers.beforeUnload=ye,oe.backStack._initialize()}var de=le.extend("callHandler");function fe(e,n){var t=ce.handlers[e];return t?(de("Invoking the registered handler for message %s with arguments %o",e,n),[!0,t.apply(this,n)]):(de("Handler for action message %s not found.",e),[!1,void 0])}function pe(e,n,t,o){void 0===t&&(t=!0),void 0===o&&(o=[]),n?(ce.handlers[e]=n,t&&De("registerHandler",se([e],o,!0))):delete ce.handlers[e]}function me(e){delete ce.handlers[e]}function ge(e){ce.themeChangeHandler=e,e&&De("registerHandler",["themeChange"])}function he(e){ce.themeChangeHandler&&ce.themeChangeHandler(e),Te.childWindow&&en("themeChange",[e])}function Ce(e){ce.loadHandler=e,e&&De("registerHandler",["load"])}function we(e){ce.loadHandler&&ce.loadHandler(e),Te.childWindow&&en("load",[e])}function ve(e){ce.beforeUnloadHandler=e,e&&De("registerHandler",["beforeUnload"])}function ye(){var e=function(){De("readyToUnload",[])};ce.beforeUnloadHandler&&ce.beforeUnloadHandler(e)||e()}var Se=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},be=ae("communication"),Te=function(){return function(){}}(),Ie=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e.promiseCallbacks={},e}();function Ee(e){if(Ie.messageListener=function(e){return Ue(e)},Te.currentWindow=Te.currentWindow||window,Te.parentWindow=Te.currentWindow.parent!==Te.currentWindow.self?Te.currentWindow.parent:Te.currentWindow.opener,(Te.parentWindow||e)&&Te.currentWindow.addEventListener("message",Ie.messageListener,!1),!Te.parentWindow){var n=Te.currentWindow;if(!n.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));C.isFramelessWindow=!0,n.onNativeMessage=_e}try{return Te.parentOrigin="*",Me("initialize",[u]).then((function(e){return{context:e[0],clientType:e[1],runtimeConfig:e[2],clientSupportedSDKVersion:e[3]}}))}finally{Te.parentOrigin=null}}function Pe(){Te.currentWindow.removeEventListener("message",Ie.messageListener,!1),Te.parentWindow=null,Te.parentOrigin=null,Te.childWindow=null,Te.childOrigin=null,Ie.parentMessageQueue=[],Ie.childMessageQueue=[],Ie.nextMessageId=0,Ie.callbacks={}}function Fe(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Me(e,n).then((function(e){return e[0]}))}function ke(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Me(e,n).then((function(e){var n=e[0],t=e[1];if(!n)throw new Error(t)}))}function Oe(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return Me(e,t).then((function(e){var t=e[0],o=e[1];if(!t)throw new Error(o||n)}))}function Re(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Me(e,n).then((function(e){var n=e[0],t=e[1];if(n)throw n;return t}))}function Me(e,n){return void 0===n&&(n=void 0),new Promise((function(t){t(Ae(Le(e,n).id))}))}function Ae(e){return new Promise((function(n){Ie.promiseCallbacks[e]=n}))}function De(e,n,t){var o;n instanceof Function?t=n:n instanceof Array&&(o=n);var i=Le(e,o);t&&(Ie.callbacks[i.id]=t)}var Ne=be.extend("sendMessageToParentHelper");function Le(e,n){var t=Ne,o=Te.parentWindow,i=nn(e,n);if(t("Message %i information: %o",i.id,{actionName:e,args:n}),C.isFramelessWindow)Te.currentWindow&&Te.currentWindow.nativeInterface&&(t("Sending message %i to parent via framelessPostMessage interface",i.id),Te.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(i)));else{var r=je(o);o&&r?(t("Sending message %i to parent via postMessage",i.id),o.postMessage(i,r)):(t("Adding message %i to parent message queue",i.id),Be(o).push(i))}return i}function Ue(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;We(n,t)&&(He(n,t),n===Te.parentWindow?_e(e):n===Te.childWindow&&ze(e))}}function We(e,n){return(!Te.currentWindow||e!==Te.currentWindow)&&(!!(Te.currentWindow&&Te.currentWindow.location&&n&&n===Te.currentWindow.location.origin)||I(new URL(n)))}function He(e,n){C.isFramelessWindow||Te.parentWindow&&!Te.parentWindow.closed&&e!==Te.parentWindow?Te.childWindow&&!Te.childWindow.closed&&e!==Te.childWindow||(Te.childWindow=e,Te.childOrigin=n):(Te.parentWindow=e,Te.parentOrigin=n),Te.parentWindow&&Te.parentWindow.closed&&(Te.parentWindow=null,Te.parentOrigin=null),Te.childWindow&&Te.childWindow.closed&&(Te.childWindow=null,Te.childOrigin=null),Xe(Te.parentWindow),Xe(Te.childWindow)}var xe=be.extend("handleParentMessage");function _e(e){var n=xe;if("id"in e.data&&"number"==typeof e.data.id){var t=e.data,o=Ie.callbacks[t.id];n("Received a response from parent for message %i",t.id),o&&(n("Invoking the registered callback for message %i with arguments %o",t.id,t.args),o.apply(null,Se(Se([],t.args,!0),[t.isPartialResponse],!1)),Ve(e)||(n("Removing registered callback for message %i",t.id),delete Ie.callbacks[t.id]));var i=Ie.promiseCallbacks[t.id];i&&(n("Invoking the registered promise callback for message %i with arguments %o",t.id,t.args),i(t.args),n("Removing registered promise callback for message %i",t.id),delete Ie.promiseCallbacks[t.id])}else if("func"in e.data&&"string"==typeof e.data.func){n("Received an action message %s from parent",(t=e.data).func),fe(t.func,t.args)}else n("Received an unknown message: %O",e)}function Ve(e){return!0===e.data.isPartialResponse}function ze(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=fe(n.func,n.args),o=t[0],i=t[1];o&&void 0!==i?Ye(n.id,Array.isArray(i)?i:[i]):De(n.func,n.args,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(Te.childWindow){var o=e.pop();Ye(n.id,e,o)}}))}}function Be(e){return e===Te.parentWindow?Ie.parentMessageQueue:e===Te.childWindow?Ie.childMessageQueue:[]}function je(e){return e===Te.parentWindow?Te.parentOrigin:e===Te.childWindow?Te.childOrigin:null}var Ge,qe,Ze,Je,Ke,Qe=be.extend("flushMessageQueue");function Xe(e){for(var n=je(e),t=Be(e),o=e==Te.parentWindow?"parent":"child";e&&n&&t.length>0;){var i=t.shift();Qe("Flushing message %i from "+o+" message queue via postMessage.",i.id),e.postMessage(i,n)}}function $e(e,n){var t=Te.currentWindow.setInterval((function(){0===Be(e).length&&(clearInterval(t),n())}),100)}function Ye(e,n,t){var o=Te.childWindow,i=tn(e,n,t),r=je(o);o&&r&&o.postMessage(i,r)}function en(e,n){var t=Te.childWindow,o=on(e,n),i=je(t);t&&i?t.postMessage(o,i):Be(t).push(o)}function nn(e,n){return{id:Ie.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function tn(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function on(e,n){return{func:e,args:n||[]}}!function(e){function n(){return!!Z.supports.logs}e.registerGetLogHandler=function(e){if(L(),!n())throw S;e?pe("log.request",(function(){De("log.receive",[e()])})):me("log.request")},e.isSupported=n}(Ge||(Ge={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(qe||(qe={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(Ze||(Ze={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(Je||(Je={})),function(e){function n(){return!!Z.supports.conversations}e.openConversation=function(e){return new Promise((function(t){if(L(a.content),!n())throw S;var o=ke("conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&pe("startConversation",(function(n,t,o,i){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),e.onCloseConversation&&pe("closeConversation",(function(n,t,o,i){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),t(o)}))},e.closeConversation=function(){if(L(a.content),!n())throw S;De("conversations.closeConversation"),me("startConversation"),me("closeConversation")},e.getChatMembers=function(){return new Promise((function(e){if(L(),!n())throw S;e(Fe("getChatMembers"))}))},e.isSupported=n}(Ke||(Ke={}));var rn,an;function sn(e,n,t){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");return"https://teams.microsoft.com/l/chat/0/0?"+("users="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&topicName="+encodeURIComponent(n))+(void 0===t?"":"&message="+encodeURIComponent(t))}function ln(e,n,t){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");return"https://teams.microsoft.com/l/call/0/0?"+("users="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&withVideo="+encodeURIComponent(n))+(void 0===t?"":"&source="+encodeURIComponent(t))}function cn(e,n,t,o,i){return"https://teams.microsoft.com/l/meeting/new?"+(void 0===e?"":"attendees="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&startTime="+encodeURIComponent(n))+(void 0===t?"":"&endTime="+encodeURIComponent(t))+(void 0===o?"":"&subject="+encodeURIComponent(o))+(void 0===i?"":"&content="+encodeURIComponent(i))}function un(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return"https://teams.microsoft.com/l/app/"+encodeURIComponent(e)+"/"}!function(e){function n(){return!!Z.supports.appInstallDialog}e.openAppInstallDialog=function(e){return new Promise((function(t){if(L(a.content,a.sidePanel,a.settings,a.task,a.stage,a.meetingStage),!n())throw new Error("Not supported");Z.isLegacyTeams?t(ke("executeDeepLink",un(e.appId))):(De("appInstallDialog.openAppInstallDialog",[e]),t())}))},e.isSupported=n}(rn||(rn={})),function(e){function n(e){return new Promise((function(n){if(L(a.content),!t())throw S;Z.isLegacyTeams?n(ke("executeDeepLink",sn([e.user],void 0,e.message))):n(ke("chat.openChat",{members:e.user,message:e.message}))}))}function t(){return!!Z.supports.chat}e.openChat=n,e.openGroupChat=function(e){return new Promise((function(o){if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){n({user:e.users[0],message:e.message})}else{if(L(a.content),!t())throw S;if(Z.isLegacyTeams)o(ke("executeDeepLink",sn(e.users,e.topic,e.message)));else o(ke("chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}))},e.isSupported=t}(an||(an={}));var dn=function(){function e(){}return e.prototype.postMessage=function(e,n){L(),De("messageForChild",[e],n||E())},e.prototype.addEventListener=function(e,n){L(),"message"===e&&pe("messageForParent",n)},e}(),fn=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(e,n){L(a.task),De("messageForParent",[e],n||E())},e.prototype.addEventListener=function(e,n){L(a.task),"message"===e&&pe("messageForChild",n)},e}();function pn(e,n){if(null==e||null==n||e.length<=0)return null;var t,o=1;return e.sort((function(e,n){return e.sequence>n.sequence?1:-1})),e.forEach((function(e){e.sequence==o&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),o++)})),t}function mn(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),o=new Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);var r=new Uint8Array(o),a=new Blob([r],{type:n});return{sequence:e.chunkSequence,file:a}}function gn(e){vn(e)?H("2.0.2"):yn(e)?H(f):wn(e)&&H("2.0.4")}function hn(e){return!(e.mediaType!=En.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function Cn(e){return!(null==e||e.maxMediaCount>10)}function wn(e){var n;return!((null==e?void 0:e.mediaType)!=En.MediaType.Image||!(null===(n=null==e?void 0:e.imageProps)||void 0===n?void 0:n.imageOutputFormats))}function vn(e){return!(!e||e.mediaType!=En.MediaType.VideoAndImage&&!e.videoAndImageProps)}function yn(e){return!(!e||e.mediaType!=En.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function Sn(e,n,t){return null!=e&&null!=n&&n==En.FileFormat.ID&&null!=t}function bn(e){return!(null==e||e.length<=0||e.length>10)}function Tn(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}function In(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}var En,Pn,Fn,kn,On,Rn,Mn,An,Dn,Nn,Ln,Un,Wn,Hn=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();function xn(e,n){te.initialize(n).then((function(){e&&e()}))}function _n(){ne.enablePrintCapability()}function Vn(){ne.print()}function zn(e){L(),te.getContext().then((function(n){e&&e(rt(n))}))}function Bn(e){te.registerOnThemeChangeHandler(e)}function jn(e){oe.registerFullScreenHandler(e)}function Gn(e){oe.appButton.onClick(e)}function qn(e){oe.appButton.onHoverEnter(e)}function Zn(e){oe.appButton.onHoverLeave(e)}function Jn(e){oe.backStack.registerBackButtonHandler(e)}function Kn(e){ne.registerOnLoadHandler(e)}function Qn(e){ne.registerBeforeUnloadHandler(e)}function Xn(e){oe.registerFocusEnterHandler(e)}function $n(e){oe.config.registerChangeConfigHandler(e)}function Yn(e,n){L(),oe.tabs.getTabInstances(n).then((function(n){e(n)}))}function et(e,n){L(),oe.tabs.getMruTabInstances(n).then((function(n){e(n)}))}function nt(e){oe.shareDeepLink({subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function tt(e,n){L(a.content,a.sidePanel,a.settings,a.task,a.stage,a.meetingStage),n=n||E(),te.openLink(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function ot(e){oe.setCurrentFrame(e)}function it(e,n,t){oe.initializeWithFrameContext(e,n,t)}function rt(e){return{locale:e.app.locale,appSessionId:e.app.sessionId,theme:e.app.theme,appIconPosition:e.app.iconPositionVertical,osLocaleInfo:e.app.osLocaleInfo,parentMessageId:e.app.parentMessageId,userClickTime:e.app.userClickTime,userFileOpenPreference:e.app.userFileOpenPreference,appLaunchId:e.app.appLaunchId,hostClientType:e.app.host.clientType,sessionId:e.app.host.sessionId,ringId:e.app.host.ringId,entityId:e.page.id,frameContext:e.page.frameContext,subEntityId:e.page.subPageId,isFullScreen:e.page.isFullScreen,isMultiWindow:e.page.isMultiWindow,sourceOrigin:e.page.sourceOrigin,userObjectId:void 0!==e.user?e.user.id:void 0,isCallingAllowed:void 0!==e.user?e.user.isCallingAllowed:void 0,isPSTNCallingAllowed:void 0!==e.user?e.user.isPSTNCallingAllowed:void 0,userLicenseType:void 0!==e.user?e.user.licenseType:void 0,loginHint:void 0!==e.user?e.user.loginHint:void 0,userPrincipalName:void 0!==e.user?e.user.userPrincipalName:void 0,tid:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.id:void 0,tenantSKU:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.teamsSku:void 0,channelId:void 0!==e.channel?e.channel.id:void 0,channelName:void 0!==e.channel?e.channel.displayName:void 0,channelRelativeUrl:void 0!==e.channel?e.channel.relativeUrl:void 0,channelType:void 0!==e.channel?e.channel.membershipType:void 0,defaultOneNoteSectionId:void 0!==e.channel?e.channel.defaultOneNoteSectionId:void 0,hostTeamGroupId:void 0!==e.channel?e.channel.ownerGroupId:void 0,hostTeamTenantId:void 0!==e.channel?e.channel.ownerTenantId:void 0,chatId:void 0!==e.chat?e.chat.id:void 0,meetingId:void 0!==e.meeting?e.meeting.id:void 0,sharepoint:e.sharepoint,teamId:void 0!==e.team?e.team.internalId:void 0,teamName:void 0!==e.team?e.team.displayName:void 0,teamType:void 0!==e.team?e.team.type:void 0,groupId:void 0!==e.team?e.team.groupId:void 0,teamTemplateId:void 0!==e.team?e.team.templateId:void 0,isTeamArchived:void 0!==e.team?e.team.isArchived:void 0,userTeamRole:void 0!==e.team?e.team.userRole:void 0,teamSiteUrl:void 0!==e.sharePointSite?e.sharePointSite.teamSiteUrl:void 0,teamSiteDomain:void 0!==e.sharePointSite?e.sharePointSite.teamSiteDomain:void 0,teamSitePath:void 0!==e.sharePointSite?e.sharePointSite.teamSitePath:void 0,teamSiteId:void 0!==e.sharePointSite?e.sharePointSite.teamSiteId:void 0,mySitePath:void 0!==e.sharePointSite?e.sharePointSite.mySitePath:void 0,mySiteDomain:void 0!==e.sharePointSite?e.sharePointSite.mySiteDomain:void 0}}function at(e){oe.returnFocus(e)}function st(e,n){L(),n=n||E(),oe.tabs.navigateToTab(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function lt(e,n){L(a.content,a.sidePanel,a.settings,a.remove,a.task,a.stage,a.meetingStage),n=n||E(),oe.navigateCrossDomain(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function ct(e){L(),e=e||E(),oe.backStack.navigateBack().then((function(){e(!0)})).catch((function(n){e(!1,n.message)}))}!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var t=function(){return function(){}}();e.File=t,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");L(a.content,a.task),C.isFramelessWindow?U("1.7.0")?De("captureImage",e):e({errorCode:n.OLD_PLATFORM},void 0):e({errorCode:n.NOT_SUPPORTED_ON_PLATFORM},void 0)};var o=function(e){function t(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return Hn(t,e),t.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(L(a.content,a.task),U(m))?Sn(this.mimeType,this.format,this.content)?U("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:n.INVALID_ARGUMENTS},null):e({errorCode:n.OLD_PLATFORM},null)},t.prototype.getMediaViaCallback=function(e){var t={mediaMimeType:this.mimeType,assembleAttachment:[]};De("getMedia",[this.content],(function(o){if(e)if(o&&o.error)e(o.error,null);else if(o&&o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){var i=pn(t.assembleAttachment,t.mediaMimeType);e(o.error,i)}else{var r=mn(o.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(r)}else e({errorCode:n.INTERNAL_ERROR,message:"data received is null"},null)}))},t.prototype.getMediaViaHandler=function(e){var t=F(),o={mediaMimeType:this.mimeType,assembleAttachment:[]},i=[t,this.content];this.content&&e&&De("getMedia",i),pe("getMedia"+t,(function(i){if(e){var r=JSON.parse(i);if(r.error)e(r.error,null),me("getMedia"+t);else if(r.mediaChunk)if(r.mediaChunk.chunkSequence<=0){var a=pn(o.assembleAttachment,o.mediaMimeType);e(r.error,a),me("getMedia"+t)}else{var s=mn(r.mediaChunk,o.mediaMimeType);o.assembleAttachment.push(s)}else e({errorCode:n.INTERNAL_ERROR,message:"data received is null"},null),me("getMedia"+t)}}))},t}(t);e.Media=o;var r,s,l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return Hn(n,e),n.prototype.getMediaType=function(){return s.Video},n.prototype.notifyEventToApp=function(e){if(this.controllerCallback)switch(e){case r.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}},n}(function(){function e(e){this.controllerCallback=e}return e.prototype.notifyEventToHost=function(e,n){L(a.content,a.task);try{H(f)}catch(e){return void(n&&n(e))}De("media.controller",[{mediaType:this.getMediaType(),mediaControllerEvent:e}],(function(e){n&&n(e)}))},e.prototype.stop=function(e){this.notifyEventToHost(r.StopRecording,e)},e}());e.VideoController=l,function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(r=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(s=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,t){if(!t)throw new Error("[select Media] Callback cannot be null");if(L(a.content,a.task),U(m)){try{gn(e)}catch(e){return void t(e,null)}if(Cn(e)){De("selectMedia",[e],(function(n,i,r){if(r)hn(e)&&e.videoProps.videoController.notifyEventToApp(r);else if(i){for(var a=[],s=0,l=i;s<l.length;s++){var c=l[s];a.push(new o(c))}t(n,a)}else t(n,null)}))}else{var i={errorCode:n.INVALID_ARGUMENTS};t(i,null)}}else{var r={errorCode:n.OLD_PLATFORM};t(r,null)}},e.viewImages=function(e,t){if(!t)throw new Error("[view images] Callback cannot be null");L(a.content,a.task),U(m)?bn(e)?De("viewImages",[e],t):t({errorCode:n.INVALID_ARGUMENTS}):t({errorCode:n.OLD_PLATFORM})},e.scanBarCode=function(e,t){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");L(a.content,a.task),C.hostClientType!==i.desktop&&C.hostClientType!==i.web&&C.hostClientType!==i.rigel&&C.hostClientType!==i.teamsRoomsWindows&&C.hostClientType!==i.teamsRoomsAndroid&&C.hostClientType!==i.teamsPhones&&C.hostClientType!==i.teamsDisplays?U("1.9.0")?Tn(t)?De("media.scanBarCode",[t],e):e({errorCode:n.INVALID_ARGUMENTS},null):e({errorCode:n.OLD_PLATFORM},null):e({errorCode:n.NOT_SUPPORTED_ON_PLATFORM},null)}}(En||(En={})),function(e){function t(e){return new Promise((function(t){if(!U(p))throw{errorCode:n.OLD_PLATFORM};if(!e)throw{errorCode:n.INVALID_ARGUMENTS};if(!i())throw S;t(Re("location.getLocation",e))}))}function o(e){return new Promise((function(t){if(!U(p))throw{errorCode:n.OLD_PLATFORM};if(!e)throw{errorCode:n.INVALID_ARGUMENTS};if(!i())throw S;t(Re("location.showLocation",e))}))}function i(){return!!Z.supports.location}e.getLocation=function(e,n){return L(a.content,a.task),O(t,n,e)},e.showLocation=function(e,n){return L(a.content,a.task),R(o,n,e)},e.showLocationHelper=o,e.isSupported=i}(Pn||(Pn={})),function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(e.CallType||(e.CallType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");L(a.sidePanel,a.meetingStage,a.settings,a.content),De("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");L(a.sidePanel),De("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");L(a.sidePanel),De("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");L(a.sidePanel),De("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");L(a.sidePanel),pe("meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,n){if(!e)throw new Error("[share app content to stage] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("meeting.shareAppContentToStage",[n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");L(a.sidePanel,a.meetingStage),De("meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");L(a.sidePanel,a.meetingStage),pe("meeting.speakingStateChanged",e)}}(Fn||(Fn={})),function(e){function n(){return!!Z.supports.monetization}e.openPurchaseExperience=function(e,t){var o,i;return"function"==typeof e?(o=e,i=t):i=e,L(a.content),A((function(){return new Promise((function(e){if(!n())throw S;e(Re("monetization.openPurchaseExperience",i))}))}),o)},e.isSupported=n}(kn||(kn={})),function(e){function n(){return!!Z.supports.calendar}e.openCalendarItem=function(e){return new Promise((function(t){if(L(a.content),!n())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");t(ke("calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((function(t){if(L(a.content),!n())throw new Error("Not supported");Z.isLegacyTeams?t(ke("executeDeepLink",cn(e.attendees,e.startTime,e.endTime,e.subject,e.content))):t(ke("calendar.composeMeeting",e))}))},e.isSupported=n}(On||(On={})),function(e){function n(){return!!Z.supports.mail}e.openMailItem=function(e){return new Promise((function(t){if(L(a.content),!n())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");t(ke("mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((function(t){if(L(a.content),!n())throw new Error("Not supported");t(ke("mail.composeMail",e))}))},e.isSupported=n,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(e.ComposeMailType||(e.ComposeMailType={}))}(Rn||(Rn={})),function(e){function t(e){return new Promise((function(t){if(!U("2.0.0"))throw{errorCode:n.OLD_PLATFORM};if(!In(e))throw{errorCode:n.INVALID_ARGUMENTS};if(!o())throw S;t(Re("people.selectPeople",e))}))}function o(){return!!Z.supports.people}e.selectPeople=function(e,n){var o,i,r;return L(a.content,a.task,a.settings),"function"==typeof e?(i=(o=[e,n])[0],r=o[1]):r=e,O(t,i,r)},e.isSupported=o}(Mn||(Mn={})),function(e){function n(){De("video.videoFrameProcessed")}function t(e){De("video.notifyError",[e])}function o(){return!!Z.supports.video}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,i){if(L(a.sidePanel),!o())throw S;pe("video.newVideoFrame",(function(o){void 0!==o&&e(o,n,t)})),De("video.registerForVideoFrame",[i])},e.notifySelectedVideoEffectChanged=function(e,n){if(L(a.sidePanel),!o())throw S;De("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){if(L(a.sidePanel),!o())throw S;pe("video.effectParameterChange",e)},e.isSupported=o}(An||(An={})),function(e){function t(n){return new Promise((function(t){if(!s())throw S;t(Re(e.SharingAPIMessages.shareWebContent,n))}))}function o(e){if(!(e&&e.content&&e.content.length))throw{errorCode:n.INVALID_ARGUMENTS,message:"Shared content is missing"}}function i(e){if(e.content.some((function(e){return!e.type})))throw{errorCode:n.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"};if(e.content.some((function(n){return n.type!==e.content[0].type})))throw{errorCode:n.INVALID_ARGUMENTS,message:"Shared content must be of the same type"}}function r(e){if("URL"!==e.content[0].type)throw{errorCode:n.INVALID_ARGUMENTS,message:"Content type is unsupported"};if(e.content.some((function(e){return!e.url})))throw{errorCode:n.INVALID_ARGUMENTS,message:"URLs are required for URL content types"}}function s(){return!!Z.supports.sharing}e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,n){try{o(e),i(e),r(e)}catch(e){return M((function(){return Promise.reject(e)}),n)}return L(a.content,a.sidePanel,a.task,a.stage,a.meetingStage),M(t,n,e)},e.isSupported=s}(Dn||(Dn={})),function(e){e.open=function(e,n){if(L(a.content),!e)throw new Error("[stageView.open] Stage view params cannot be null");return O((function(){return new Promise((function(n){return n(Re("stageView.open",e))}))}),n)}}(Nn||(Nn={})),function(e){var n;function t(){return!!Z.supports.call}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(n=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){return new Promise((function(o){var i;if(L(a.content),!t())throw new Error("Not supported");if(!Z.isLegacyTeams)return De("call.startCall",[e],o);o(Re("executeDeepLink",ln(e.targets,null===(i=e.requestedModalities)||void 0===i?void 0:i.includes(n.Video),e.source)))}))},e.isSupported=t}(Ln||(Ln={})),function(e){e.Messages=te.Messages,e.FailedReason=te.FailedReason,e.ExpectedFailureReason=te.ExpectedFailureReason,e.notifyAppLoaded=function(){te.notifyAppLoaded()},e.notifySuccess=function(){te.notifySuccess()},e.notifyFailure=function(e){te.notifyFailure(e)},e.notifyExpectedFailure=function(e){te.notifyExpectedFailure(e)}}(Un||(Un={})),function(e){e.setValidityState=function(e){oe.config.setValidityState(e)},e.getSettings=function(e){L(a.content,a.settings,a.remove,a.sidePanel),oe.getConfig().then((function(n){e(n)}))},e.setSettings=function(e,n){L(a.content,a.settings,a.sidePanel),n=n||E(),oe.config.setConfig(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))},e.registerOnSaveHandler=function(e){oe.config.registerOnSaveHandler(e)},e.registerOnRemoveHandler=function(e){oe.config.registerOnRemoveHandler(e)}}(Wn||(Wn={}));var ut,dt,ft,pt,mt,gt,ht,Ct,wt=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};!function(e){function n(e){return{url:e.url,size:{height:e.height?e.height:v.Small,width:e.width?e.width:v.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function t(e){return{url:e.url,size:{height:e.height?e.height:v.Small,width:e.width?e.width:v.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function o(e){return e.height=e.height?e.height:v.Small,e.width=e.width?e.width:v.Small,e}e.startTask=function(e,o){return void 0!==e.card||void 0===e.url?(L(a.content,a.sidePanel,a.meetingStage),De("tasks.startTask",[e],o)):void 0!==e.completionBotId?Y.bot.open(t(e),(function(e){return o(e.err,e.result)})):Y.open(n(e),(function(e){return o(e.err,e.result)})),new dn},e.updateTask=function(e){(e=o(e)).width,e.height;var n=wt(e,["width","height"]);if(Object.keys(n).length)throw new Error("resize requires a TaskInfo argument containing only width and height");Y.update.resize(e)},e.submitTask=function(e,n){Y.submit(e,n)},e.getUrlDialogInfoFromTaskInfo=n,e.getBotUrlDialogInfoFromTaskInfo=t,e.getDefaultSizeIfNotProvided=o}(ut||(ut={})),function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(e){e.ClassMaterials="classMaterials"}(e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})),function(e){e.Readonly="readonly"}(e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})),function(e){e.Downloaded="Downloaded",e.Downloading="Downloading",e.Failed="Failed"}(e.FileDownloadStatus||(e.FileDownloadStatus={})),e.getCloudStorageFolders=function(e,n){if(L(a.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");De("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(L(a.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");De("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(L(a.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");De("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if(L(a.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");De("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if(L(a.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");De("files.openCloudStorageFile",[e,n,t])},e.getExternalProviders=function(e,n){if(void 0===e&&(e=!1),L(a.content),!n)throw new Error("[files.getExternalProviders] Callback cannot be null");De("files.getExternalProviders",[e],n)},e.copyMoveFiles=function(e,n,t,o,i,r){if(void 0===i&&(i=!1),L(a.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!o)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] callback cannot be null");De("files.copyMoveFiles",[e,n,t,o,i],r)},e.getFileDownloads=function(e){if(L(a.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");De("files.getFileDownloads",[],e)},e.openDownloadFolder=function(e,n){if(void 0===e&&(e=void 0),L(a.content),!n)throw new Error("[files.openDownloadFolder] Callback cannot be null");De("files.openDownloadFolder",[e],n)}}(dt||(dt={})),function(e){!function(e){function t(){return!!Z.supports.teams&&!!Z.supports.teams.fullTrust}!function(e){function t(){return!!Z.supports.teams&&(!!Z.supports.teams.fullTrust&&!!Z.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((function(o){if(L(),!t())throw S;if((C.hostClientType===i.android||C.hostClientType===i.teamsRoomsAndroid||C.hostClientType===i.teamsPhones||C.hostClientType===i.teamsDisplays)&&!U("2.0.1")){var r={errorCode:n.OLD_PLATFORM};throw new Error(JSON.stringify(r))}o(Fe("getUserJoinedTeams",e))}))},e.isSupported=t}(e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((function(n){if(L(),!t())throw S;n(Fe("getConfigSetting",e))}))},e.isSupported=t}(e.fullTrust||(e.fullTrust={})),e.isSupported=function(){return!!Z.supports.teams}}(ft||(ft={})),function(e){function n(){return!!Z.supports.meetingRoom}e.getPairedMeetingRoomInfo=function(){return new Promise((function(e){if(L(),!n())throw S;e(Re("meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((function(t){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(L(),!n())throw S;t(Re("meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(L(),!n())throw S;pe("meetingRoom.meetingRoomCapabilitiesUpdate",(function(n){L(),e(n)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(L(),!n())throw S;pe("meetingRoom.meetingRoomStatesUpdate",(function(n){L(),e(n)}))},e.isSupported=n}(pt||(pt={})),function(e){function n(){return!!Z.supports.notifications}e.showNotification=function(e){if(L(a.content),!n())throw S;De("notifications.showNotification",[e])},e.isSupported=n}(mt||(mt={})),function(e){function n(){return!!Z.supports.remoteCamera}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(L(a.sidePanel),!n())throw S;De("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(L(a.sidePanel),!n())throw S;De("remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(L(a.sidePanel),!n())throw S;De("remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(L(a.sidePanel),!n())throw S;De("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(L(a.sidePanel),!n())throw S;pe("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(L(a.sidePanel),!n())throw S;pe("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(L(a.sidePanel),!n())throw S;pe("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(L(a.sidePanel),!n())throw S;pe("remoteCamera.sessionStatusChange",e)},e.isSupported=n}(gt||(gt={})),function(e){function n(){return!!Z.supports.appEntity}e.selectAppEntity=function(e,t,o,i){if(L(a.content),!n())throw S;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!i)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");De("appEntity.selectAppEntity",[e,t,o],i)},e.isSupported=n}(ht||(ht={})),function(e){function n(){return!!Z.supports.teams}!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,t){if(L(a.content),!n())throw S;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!t)throw new Error("[teams.getTeamChannels] Callback cannot be null");De("teams.getTeamChannels",[e],t)},e.refreshSiteUrl=function(e,t){if(L(),!n())throw S;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!t)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");De("teams.refreshSiteUrl",[e],t)},e.isSupported=n}(Ct||(Ct={}))})(),o})()}));
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var MicrosoftTeams_min = __webpack_require__(303);
;// CONCATENATED MODULE: ./src/utils.ts

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
    container.appendChild(element);
    button.addEventListener("click", function () {
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
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
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
        add_page_header(`Currently running outside of Microsoft Teams.`);
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
    add_page_header(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`);
    function isInConfig() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.settings;
    }
    function isInSidePanel() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.sidePanel;
    }
}
;
function add_page_header(content) {
    var h2 = document.createElement("h2");
    h2.textContent = content;
    container.prepend(h2);
}

;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min.initialize();
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        initializeDownloadLinks();
        outputTabRenderedLocation(MicrosoftTeams_min.getContext);
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getContext(output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getTabInstances(output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getMruTabInstances(output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            }
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "navigateForward"
                }],
            action: function (navigateForward) {
                MicrosoftTeams_min.returnFocus(navigateForward);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            }
        });
        addModule({
            name: "registerEnterSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerEnterSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
                    output(`Hover leave event received`);
                });
            }
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "deepLinkParameters"
                }],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
            }
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "deepLink"
                }],
            action: function (deepLink) {
                MicrosoftTeams_min.executeDeepLink(deepLink);
            }
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
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
                    }
                });
            }
        });
        addModule({
            name: "authentication_externalBrowser",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "mockOAuth" // do not go to the actual oauth provider, for scenario testing purpose
                }],
            hasOutput: true,
            action: function (mockOAuth, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}`,
                    isExternal: true,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                    }
                });
            }
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min.tasks.startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            }
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            }
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            }
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
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                MicrosoftTeams_min.authentication.notifyFailure(reason);
            }
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                }],
            action: function (result) {
                MicrosoftTeams_min.authentication.notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.getSettings(output);
            }
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
                        suggestedDisplayName: "Test Tab RegisterOnSave"
                    });
                    output("SaveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.saveEvent && window.saveEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            }
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "settings",
                    defaultValue: "{\"contentUrl\": \"https://teams-test-tab.azurewebsites.net/\", \"entityId\": \"someEntity\", \"websiteUrl\": \"https://teams-test-tab.azurewebsites.net/\"}"
                }],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min.settings.setSettings(settings);
            }
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "validityState"
                }],
            action: function (validityState) {
                MicrosoftTeams_min.settings.setValidityState(validityState);
            }
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
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.removeEvent && window.removeEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent && window.removeEvent.notifySuccess();
            }
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "filePreviewParameters"
                }],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min.openFilePreview(filePreviewParameters);
            }
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                },
                {
                    type: "string",
                    name: "appId"
                }],
            action: function (result, appId) {
                MicrosoftTeams_min.tasks.submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
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
            }
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                MicrosoftTeams_min.tasks.updateTask(taskInfo);
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.conversations.getChatMembers().then(output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.legacy.fullTrust.joinedTeams.getUserJoinedTeams().then(output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "readyToUnloadDelay"
                }],
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
            }
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            }
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                totalStates++;
                window.history.pushState({ some: 'state', id: totalStates }, "tab state" + totalStates, '/testTab');
                output("total States: " + totalStates);
                window.addEventListener('popstate', function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " + event.state.id);
                    }
                }, false);
            }
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
            }
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "openConversationRequest"
                }],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            }
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.conversations.closeConversation();
            }
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
                    output("format: " + file.format + ", size: " + file.size + ", mimeType: " + file.mimeType + ", content: " + content);
                });
            }
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    let message = "";
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        let preview = "";
                        let len = 20;
                        if (media.preview) {
                            len = Math.min(len, media.preview.length);
                            preview = media.preview.substr(0, len);
                        }
                        message += "[format: " + media.format + ", size: " + media.size
                            + ", mimeType: " + media.mimeType + ", content: " + media.content
                            + ", preview: " + preview + "],";
                    }
                    output(message);
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "inputParams",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (inputParams, output) => {
                MicrosoftTeams_min.media.selectMedia(inputParams, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const media = medias[0];
                    media.getMedia((gmErr, blob) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            if (reader.result) {
                                output("Received Blob");
                            }
                        };
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":5,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
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
                            type: 1 //microsoftTeams.ImageUriType.ID
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
            }
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "imageUrls",
                    defaultValue: "[\"https://www.w3schools.com/images/picture.jpg\",\"https://www.w3schools.com/images/picture.jpg\"]"
                }],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2 //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams_min.media.viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            }
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "locationProps",
                    defaultValue: "{\"allowChooseLocation\":true,\"showMap\":true}"
                }],
            action: (locationProps, output) => {
                MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            }
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "location",
                    defaultValue: "{\"latitude\":17,\"longitude\":17}"
                }],
            action: (location, output) => {
                MicrosoftTeams_min.location.showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            }
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: "{\"timeOutIntervalInSec\":30}"
                }],
            action: (scanBarCodeConfig, output) => {
                MicrosoftTeams_min.media.scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        });
        addModule({
            name: "people.selectPeople",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "peoplePickerInputs",
                    defaultValue: "{\"title\":\"\", \"setSelected\":[], \"openOrgWideSearchInChatOrChannel\":false, \"singleSelect\":false}"
                }],
            action: (peoplePickerInputs, output) => {
                MicrosoftTeams_min.people.selectPeople((err, people) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("People length: " + people.length + " " + JSON.stringify(people));
                }, peoplePickerInputs);
            }
        });
        addModule({
            name: "setFrameContext",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "frameContext",
                    defaultValue: "{\"contentUrl\":\"\", \"websiteUrl\":\"\"}"
                }],
            action: (frameContext) => {
                MicrosoftTeams_min.setFrameContext(frameContext);
            }
        });
        addModule({
            name: "sharing.shareWebContent",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "shareWebContentRequest",
                    defaultValue: "{\"content\":[{\"type\":\"URL\",\"url\":\"https://teams-test-tab.azurewebsites.net/\"}]}"
                }],
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
            }
        });
        addModule({
            name: "stageView.open",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "stageViewParams"
                }],
            action: function (stageViewParams) {
                MicrosoftTeams_min.stageView.open(stageViewParams);
            }
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
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({ reason: MicrosoftTeams_min.appInitialization.FailedReason.Other, message: err.message });
    }
};

;// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();

})();

/******/ })()
;
//# sourceMappingURL=app.js.map