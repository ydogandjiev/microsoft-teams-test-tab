/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(self,(function(){return(()=>{var e={378:e=>{var n=1e3,t=60*n,o=60*t,i=24*o;function r(e){if(!((e=String(e)).length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*t;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function a(e){var r=Math.abs(e);return r>=i?Math.round(e/i)+"d":r>=o?Math.round(e/o)+"h":r>=t?Math.round(e/t)+"m":r>=n?Math.round(e/n)+"s":e+"ms"}function s(e){var r=Math.abs(e);return r>=i?l(e,r,i,"day"):r>=o?l(e,r,o,"hour"):r>=t?l(e,r,t,"minute"):r>=n?l(e,r,n,"second"):e+" ms"}function l(e,n,t,o){var i=n>=1.5*t;return Math.round(e/t)+" "+o+(i?"s":"")}e.exports=function(e,n){n=n||{};var t=typeof e;if("string"===t&&e.length>0)return r(e);if("number"===t&&isFinite(e))return n.long?s(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},22:(e,n,t)=>{var o=t(481),i=t(426),r=i;r.v1=o,r.v4=i,e.exports=r},725:e=>{for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,i=n;return[i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]]].join("")}},157:e=>{var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},481:(e,n,t)=>{var o,i,r=t(157),a=t(725),s=0,l=0;e.exports=function(e,n,t){var c=n&&t||0,u=n||[],d=(e=e||{}).node||o,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var p=r();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=i=16383&(p[6]<<8|p[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:l+1,h=g-s+(m-l)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||g>s)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=m,i=f;var C=(1e4*(268435455&(g+=122192928e5))+m)%4294967296;u[c++]=C>>>24&255,u[c++]=C>>>16&255,u[c++]=C>>>8&255,u[c++]=255&C;var w=g/4294967296*1e4&268435455;u[c++]=w>>>8&255,u[c++]=255&w,u[c++]=w>>>24&15|16,u[c++]=w>>>16&255,u[c++]=f>>>8|128,u[c++]=255&f;for(var v=0;v<6;++v)u[c+v]=d[v];return n||a(u)}},426:(e,n,t)=>{var o=t(157),i=t(725);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[r+s]=a[s];return n||i(a)}},227:(e,n,t)=>{n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let o=0,i=0;n[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(i=o))})),n.splice(i,0,t)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},n.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage=function(){try{return localStorage}catch(e){}}(),n.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.log=console.debug||console.log||(()=>{}),e.exports=t(447)(n);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},447:(e,n,t)=>{e.exports=function(e){function n(e){let t,i,r,a=null;function s(...e){if(!s.enabled)return;const o=s,i=Number(new Date),r=i-(t||i);o.diff=r,o.prev=t,o.curr=i,t=i,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((t,i)=>{if("%%"===t)return"%";a++;const r=n.formatters[i];if("function"==typeof r){const n=e[a];t=r.call(o,n),e.splice(a,1),a--}return t})),n.formatArgs.call(o,e);(o.log||n.log).apply(o,e)}return s.namespace=e,s.useColors=n.useColors(),s.color=n.selectColor(e),s.extend=o,s.destroy=n.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(i!==n.namespaces&&(i=n.namespaces,r=n.enabled(e)),r),set:e=>{a=e}}),"function"==typeof n.init&&n.init(s),s}function o(e,t){const o=n(this.namespace+(void 0===t?":":t)+e);return o.log=this.log,o}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},n.disable=function(){const e=[...n.names.map(i),...n.skips.map(i).map((e=>"-"+e))].join(",");return n.enable(""),e},n.enable=function(e){let t;n.save(e),n.namespaces=e,n.names=[],n.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),i=o.length;for(t=0;t<i;t++)o[t]&&("-"===(e=o[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){if("*"===e[e.length-1])return!0;let t,o;for(t=0,o=n.skips.length;t<o;t++)if(n.skips[t].test(e))return!1;for(t=0,o=n.names.length;t<o;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(378),n.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((t=>{n[t]=e[t]})),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return n.colors[Math.abs(t)%n.colors.length]},n.enable(n.load()),n}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var o={};return(()=>{"use strict";t.r(o),t.d(o,{ActionObjectType:()=>n,ChannelType:()=>m,ChildAppWindow:()=>Zn,DialogDimension:()=>f,ErrorCode:()=>r,FileOpenPreference:()=>e,FrameContexts:()=>c,HostClientType:()=>s,HostName:()=>l,NotificationTypes:()=>qe,ParentAppWindow:()=>Jn,SecondaryM365ContentIdName:()=>i,TaskModuleDimension:()=>h,TeamType:()=>u,UserSettingTypes:()=>Ze,UserTeamRole:()=>d,ViewerActionTypes:()=>Ke,app:()=>oe,appEntity:()=>kt,appInitialization:()=>qn,appInstallDialog:()=>dn,authentication:()=>V,barCode:()=>Cn,calendar:()=>Un,call:()=>Gn,chat:()=>wn,conversations:()=>Je,dialog:()=>ee,enablePrintCapability:()=>Yn,executeDeepLink:()=>mt,files:()=>Pt,geoLocation:()=>vn,getContext:()=>nt,getMruTabInstances:()=>pt,getTabInstances:()=>ft,initialize:()=>$n,initializeWithFrameContext:()=>Ct,location:()=>Nn,logs:()=>Ge,mail:()=>Hn,media:()=>hn,meeting:()=>Dn,meetingRoom:()=>It,menus:()=>ne,monetization:()=>Ln,navigateBack:()=>bt,navigateCrossDomain:()=>St,navigateToTab:()=>yt,notifications:()=>Et,openFilePreview:()=>un,pages:()=>ie,people:()=>Wn,print:()=>et,profile:()=>_n,registerAppButtonClickHandler:()=>it,registerAppButtonHoverEnterHandler:()=>rt,registerAppButtonHoverLeaveHandler:()=>at,registerBackButtonHandler:()=>st,registerBeforeUnloadHandler:()=>ct,registerChangeSettingsHandler:()=>dt,registerCustomHandler:()=>ln,registerFocusEnterHandler:()=>ut,registerFullScreenHandler:()=>ot,registerOnLoadHandler:()=>lt,registerOnThemeChangeHandler:()=>tt,registerUserSettingsChangeHandler:()=>cn,remoteCamera:()=>Ft,returnFocus:()=>vt,search:()=>Vn,sendCustomEvent:()=>sn,sendCustomMessage:()=>an,setFrameContext:()=>ht,settings:()=>Kn,shareDeepLink:()=>gt,sharing:()=>Bn,stageView:()=>zn,tasks:()=>Tt,teams:()=>Rt,teamsCore:()=>te,uploadCustomApp:()=>rn,version:()=>p,video:()=>xn,videoEx:()=>Ot,webStorage:()=>jn});var e,n,i,r,a,s,l,c,u,d,f,p="2.4.0-beta.3",g=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(e||(e={})),function(e){e.M365Content="m365content"}(n||(n={})),function(e){e.DriveId="driveId",e.GroupId="groupId",e.SiteId="siteId",e.UserId="userId"}(i||(i={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(r||(r={})),function(e){e.GeoLocation="geolocation",e.Media="media"}(a||(a={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(s||(s={})),function(e){e.office="Office",e.outlook="Outlook",e.outlookWin32="OutlookWin32",e.orange="Orange",e.teams="Teams"}(l||(l={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(c||(c={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(u||(u={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(d||(d={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(f||(f={}));var m,h=f;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(m||(m={}));var C={errorCode:r.NOT_SUPPORTED_ON_PLATFORM},w="2.0.1",v="2.0.3",y="1.9.0",S="1.8.0",b=["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","teams.live.com","devspaces.skype.com","ssauth.skype.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","msft.spoppe.com","*.sharepoint.com","*.sharepoint-df.com","*.sharepointonline.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","*.teams.microsoft.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.office.com"],T=/^https:\/\//,P=t(22);function I(e,n){if("*."===e.substring(0,2)){var t=e.substring(1);if(n.length>t.length&&n.split(".").length===t.split(".").length&&n.substring(n.length-t.length)===t)return!0}else if(e===n)return!0;return!1}function E(e){if("https:"!==e.protocol)return!1;var n=e.host;if(b.some((function(e){return I(e,n)})))return!0;for(var t=0,o=g.additionalValidOrigins;t<o.length;t++){var i=o[t];if(I("https://"===i.substring(0,8)?i.substring(8):i,n))return!0}return!1}function F(e){return function(n,t){if(!n)throw new Error(e||t)}}function k(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),o=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!o.every(i))return NaN;for(;t.length<o.length;)t.push("0");for(;o.length<t.length;)o.push("0");for(var r=0;r<t.length;++r)if(Number(t[r])!=Number(o[r]))return Number(t[r])>Number(o[r])?1:-1;return 0}function R(){return P.v4()}function O(e){return Object.keys(e).forEach((function(n){"object"==typeof e[n]&&O(e[n])})),Object.freeze(e)}function A(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(void 0,e)})).catch((function(e){n&&n(e)})),i}function M(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(){n&&n(null)})).catch((function(e){n&&n(e)})),i}function N(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(null,e)})).catch((function(e){n&&n(e,null)})),i}function D(e,n,t){return new Promise((function(o,i){var r=setTimeout(i,n,t);e().then((function(e){clearTimeout(r),o(e)})).catch((function(e){clearTimeout(r),i(e)}))}))}function L(e){var n=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&n.searchParams.append("webUrl",e.webUrl),(e.channelId||e.subPageId)&&n.searchParams.append("context",JSON.stringify({channelId:e.channelId,subEntityId:e.subPageId})),n.toString()}function U(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!g.initializeCalled)throw new Error("The library has not yet been initialized");if(g.frameContext&&e&&e.length>0){for(var t=!1,o=0;o<e.length;o++)if(e[o]===g.frameContext){t=!0;break}if(!t)throw new Error("This call is only allowed in following contexts: "+JSON.stringify(e)+'. Current context: "'+g.frameContext+'".')}}function H(e){void 0===e&&(e=w);var n=k(g.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0}function W(){return g.hostClientType==s.android||g.hostClientType==s.ios}function _(e){if(void 0===e&&(e=w),!W())throw{errorCode:r.NOT_SUPPORTED_ON_PLATFORM};if(!H(e))throw{errorCode:r.OLD_PLATFORM}}function x(e){var n=g.additionalValidOrigins.concat(e.filter((function(e){return"string"==typeof e&&T.test(e)}))),t={};n=n.filter((function(e){return!t[e]&&(t[e]=!0,!0)})),g.additionalValidOrigins=n}var V,B=(0,t(227).debug)("teamsJs");function z(e){return B.extend(e)}!function(e){var n,t,o;function i(e){return new Promise((function(t,o){if(g.hostClientType===s.desktop||g.hostClientType===s.android||g.hostClientType===s.ios||g.hostClientType===s.rigel||g.hostClientType===s.teamsRoomsWindows||g.hostClientType===s.teamsRoomsAndroid||g.hostClientType===s.teamsPhones||g.hostClientType===s.teamsDisplays){var i=document.createElement("a");i.href=e.url,t(Ae("authentication.authenticate",[i.href,e.width,e.height,e.isExternal]).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)})))}else n={success:t,fail:o},u(e)}))}function r(e){return new Promise((function(n){n(Ae("authentication.getAuthToken",[null==e?void 0:e.resources,null==e?void 0:e.claims,null==e?void 0:e.silent]))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function a(){return new Promise((function(e){e(Ae("authentication.getUser"))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function l(){d();try{Te.childWindow&&Te.childWindow.close()}finally{Te.childWindow=null,Te.childOrigin=null}}function u(e){l();var n=e.width||600,t=e.height||400;n=Math.min(n,Te.currentWindow.outerWidth-400),t=Math.min(t,Te.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=e.url.replace("{oauthRedirectMethod}","web");var i=void 0!==Te.currentWindow.screenLeft?Te.currentWindow.screenLeft:Te.currentWindow.screenX,r=void 0!==Te.currentWindow.screenTop?Te.currentWindow.screenTop:Te.currentWindow.screenY;i+=Te.currentWindow.outerWidth/2-n/2,r+=Te.currentWindow.outerHeight/2-t/2,Te.childWindow=Te.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+i+", width="+n+", height="+t),Te.childWindow?f():m("FailedToOpenWindow")}function d(){t&&(clearInterval(t),t=0),pe("initialize"),pe("navigateCrossDomain")}function f(){d(),t=Te.currentWindow.setInterval((function(){if(!Te.childWindow||Te.childWindow.closed)m("CancelledByUser");else{var e=Te.childOrigin;try{Te.childOrigin="*",en("ping")}finally{Te.childOrigin=e}}}),100),fe("initialize",(function(){return[c.authentication,g.hostClientType]})),fe("navigateCrossDomain",(function(){return!1}))}function p(e){try{n&&n.success(e)}finally{n=null,l()}}function m(e){try{n&&n.fail(new Error(e))}finally{n=null,l()}}function h(e,n,t){if(e){var o=document.createElement("a");o.href=decodeURIComponent(e),o.host&&o.host!==window.location.host&&"outlook.office.com"===o.host&&o.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(o.href=C(o.href,"result",t)),Te.currentWindow.location.assign(C(o.href,"authSuccess",""))),n&&"reason"===n&&(t&&(o.href=C(o.href,"reason",t)),Te.currentWindow.location.assign(C(o.href,"authFailure",""))))}}function C(e,n,t){var o=e.indexOf("#"),i=-1===o?"#":e.substr(o);return i=i+"&"+n+(""!==t?"="+t:""),(e=-1===o?e:e.substr(0,o))+i}e.initialize=function(){fe("authentication.authenticate.success",p,!1),fe("authentication.authenticate.failure",m,!1)},e.registerAuthenticationHandlers=function(e){o=e},e.authenticate=function(e){var n=void 0!==e,t=n?e:o;if(!t)throw new Error("No parameters are provided for authentication");return U(c.content,c.sidePanel,c.settings,c.remove,c.task,c.stage,c.meetingStage),i(t).then((function(e){try{return t&&t.successCallback?(t.successCallback(e),""):e}finally{n||(o=null)}})).catch((function(e){try{if(t&&t.failureCallback)return t.failureCallback(e.message),"";throw e}finally{n||(o=null)}}))},e.getAuthToken=function(e){return U(),r(e).then((function(n){return e&&e.successCallback?(e.successCallback(n),""):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),"";throw n}))},e.getUser=function(e){return U(),a().then((function(n){return e&&e.successCallback?(e.successCallback(n),null):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),null;throw n}))},e.notifySuccess=function(e,n){h(n,"result",e),U(c.authentication),Ne("authentication.authenticate.success",[e]),$e(Te.parentWindow,(function(){return setTimeout((function(){return Te.currentWindow.close()}),200)}))},e.notifyFailure=function(e,n){h(n,"reason",e),U(c.authentication),Ne("authentication.authenticate.failure",[e]),$e(Te.parentWindow,(function(){return setTimeout((function(){return Te.currentWindow.close()}),200)}))}}(V||(V={}));var j=function(){return j=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},j.apply(this,arguments)},G=z("runtime"),q={apiVersion:1,supports:{appInstallDialog:void 0,barCode:void 0,calendar:void 0,call:void 0,chat:void 0,webStorage:void 0,conversations:void 0,dialog:{bot:void 0,update:void 0},geoLocation:{map:void 0},location:void 0,logs:void 0,mail:void 0,meetingRoom:void 0,menus:void 0,monetization:void 0,notifications:void 0,pages:{appButton:void 0,backStack:void 0,config:void 0,currentApp:void 0,fullTrust:void 0,tabs:void 0},people:void 0,permissions:void 0,profile:void 0,remoteCamera:void 0,search:void 0,sharing:void 0,stageView:void 0,teams:{fullTrust:{joinedTeams:void 0}},teamsCore:void 0,video:void 0}},K={appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{bot:{},update:{}},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{appButton:{},tabs:{},config:{},backStack:{},fullTrust:{}},remoteCamera:{},sharing:{},stageView:{},teams:{fullTrust:{}},teamsCore:{},video:{}},Z=[s.desktop,s.web,s.android,s.ios,s.rigel,s.surfaceHub,s.teamsRoomsWindows,s.teamsRoomsAndroid,s.teamsPhones,s.teamsDisplays],J={"1.9.0":[{capability:{location:{}},hostClientTypes:Z}],"2.0.0":[{capability:{people:{}},hostClientTypes:Z}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[s.android,s.desktop,s.ios,s.teamsRoomsAndroid,s.teamsPhones,s.teamsDisplays,s.web]},{capability:{webStorage:{}},hostClientTypes:[s.desktop]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[s.android,s.desktop,s.ios]}]},Q=G.extend("generateBackCompatRuntimeConfig");function X(e){Q("generating back compat runtime config for %s",e);var n=j({},K);Q("Supported capabilities in config before updating based on highestSupportedVersion: %o",n),Object.keys(J).forEach((function(t){k(e,t)>=0&&J[t].forEach((function(e){e.hostClientTypes.includes(g.hostClientType)&&(n=j(j({},n),e.capability))}))}));var t={apiVersion:1,isLegacyTeams:!0,supports:n};return Q("Runtime config after updating based on highestSupportedVersion: %o",t),t}var $=G.extend("applyRuntimeConfig");function Y(e){$("Applying runtime %o",e),q=O(e)}var ee,ne,te,oe,ie;function re(e){return{actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:l.teams,clientType:e.hostClientType?e.hostClientType:s.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:g.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:e.userObjectId,displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0}}!function(e){var n=[];function t(e){g.frameContext&&(g.frameContext===c.task?n.push(e):pe("messageForChild"))}function o(){return!!q.supports.dialog}function i(e){return{url:e.url,height:e.size?e.size.height:f.Small,width:e.size?e.size.width:f.Small,title:e.title,fallbackUrl:e.fallbackUrl}}function r(e){return{url:e.url,height:e.size?e.size.height:f.Small,width:e.size?e.size.width:f.Small,title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}e.initialize=function(){fe("messageForChild",t,!1)},e.open=function(e,n,t){if(U(c.content,c.sidePanel,c.meetingStage),!o())throw C;t&&fe("messageForParent",t),Ne("tasks.startTask",[i(e)],(function(e,t){null==n||n({err:e,result:t}),pe("messageForParent")}))},e.submit=function(e,n){if(U(c.content,c.sidePanel,c.task,c.meetingStage),!o())throw C;Ne("tasks.completeTask",[e,n?Array.isArray(n)?n:[n]:[]])},e.sendMessageToParentFromDialog=function(e){if(U(c.task),!o())throw C;Ne("messageForParent",[e])},e.sendMessageToDialog=function(e){if(U(c.content,c.sidePanel,c.meetingStage),!o())throw C;Ne("messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(U(c.task),!o())throw C;for(pe("messageForChild"),fe("messageForChild",e),n.reverse();n.length>0;){e(n.pop())}},e.isSupported=o,function(e){function n(){return!!q.supports.dialog&&!!q.supports.dialog.update}e.resize=function(e){if(U(c.content,c.sidePanel,c.task,c.meetingStage),!n())throw C;Ne("tasks.updateTask",[e])},e.isSupported=n}(e.update||(e.update={})),function(e){function n(){return!!q.supports.dialog&&!!q.supports.dialog.bot}e.open=function(e,t,o){if(U(c.content,c.sidePanel,c.meetingStage),!n())throw C;o&&fe("messageForParent",o),Ne("tasks.startTask",[r(e)],(function(e,n){null==t||t({err:e,result:n}),pe("messageForParent")}))},e.isSupported=n}(e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=i,e.getDialogInfoFromBotUrlDialogInfo=r}(ee||(ee={})),function(e){!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(e.DisplayMode||(e.DisplayMode={}));var n,t,o,i=function(){return function(){this.enabled=!0,this.selected=!1}}();function r(e){o&&o(e)||(U(),Ne("viewConfigItemPress",[e]))}function a(e){n&&n(e)||(U(),Ne("handleNavBarMenuItemPress",[e]))}function s(e){t&&t(e)||(U(),Ne("handleActionMenuItemPress",[e]))}function l(){return!!q.supports.menus}e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){fe("navBarMenuItemPress",a,!1),fe("actionMenuItemPress",s,!1),fe("setModuleView",r,!1)},e.setUpViews=function(e,n){if(U(),!l())throw C;o=n,Ne("setUpViews",[e])},e.setNavBarMenu=function(e,t){if(U(),!l())throw C;n=t,Ne("setNavBarMenu",[e])},e.showActionMenu=function(e,n){if(U(),!l())throw C;t=n,Ne("showActionMenu",[e])},e.isSupported=l}(ne||(ne={})),function(e){function n(){window.print()}function t(e,n){U(),n&&n(),Ce(e)}function o(e,n){U(),n&&n(),ve(e)}function i(){return!!q.supports.teamsCore}e.enablePrintCapability=function(){if(!g.printCapabilityEnabled){if(U(),!i())throw C;g.printCapabilityEnabled=!0,document.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=n,e.registerOnLoadHandler=function(e){t(e,(function(){if(!i())throw C}))},e.registerOnLoadHandlerHelper=t,e.registerBeforeUnloadHandler=function(e){o(e,(function(){if(!i())throw C}))},e.registerBeforeUnloadHandlerHelper=o,e.isSupported=i}(te||(te={})),function(e){var n=z("app");e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return g.initializeCalled},e.getFrameContext=function(){return g.frameContext};e.initialize=function(e){return D((function(){return o(e)}),5e3,new Error("SDK initialization timed out."))};var t=n.extend("initializeHelper");function o(e){return new Promise((function(n){g.initializeCalled||(g.initializeCalled=!0,ce(),g.initializePromise=Ie(e).then((function(e){var n=e.context,o=e.clientType,i=e.runtimeConfig,r=e.clientSupportedSDKVersion,a=void 0===r?w:r;g.frameContext=n,g.hostClientType=o,g.clientSupportedSDKVersion=a;try{t("Parsing %s",i);var s=JSON.parse(i);if(t("Checking if %o is a valid runtime object",null!=s?s:"null"),!s||!s.apiVersion)throw new Error("Received runtime config is invalid");i&&Y(s)}catch(e){if(!(e instanceof SyntaxError))throw e;try{t("Attempting to parse %s as an SDK version",i),isNaN(k(i,w))||(g.clientSupportedSDKVersion=i);s=JSON.parse(a);if(t("givenRuntimeConfig parsed to %o",null!=s?s:"null"),!s)throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");Y(s)}catch(e){if(!(e instanceof SyntaxError))throw e;Y(X(g.clientSupportedSDKVersion))}}g.initializeCompleted=!0})),V.initialize(),ne.initialize(),ie.config.initialize(),ee.initialize()),Array.isArray(e)&&x(e),n(g.initializePromise)}))}function i(e){U(),me(e)}e._initialize=function(e){Te.currentWindow=e},e._uninitialize=function(){g.initializeCalled&&(g.frameContext&&(i(null),ie.backStack.registerBackButtonHandler(null),ie.registerFullScreenHandler(null),te.registerBeforeUnloadHandler(null),te.registerOnLoadHandler(null),Ge.registerGetLogHandler(null)),g.frameContext===c.settings&&ie.config.registerOnSaveHandler(null),g.frameContext===c.remove&&ie.config.registerOnRemoveHandler(null),g.initializeCalled=!1,g.initializeCompleted=!1,g.initializePromise=null,g.additionalValidOrigins=[],g.frameContext=null,g.hostClientType=null,g.isFramelessWindow=!1,Ee())},e.getContext=function(){return new Promise((function(e){U(),e(Fe("getContext"))})).then((function(e){return re(e)}))},e.notifyAppLoaded=function(){U(),Ne(e.Messages.AppLoaded,[p])},e.notifySuccess=function(){U(),Ne(e.Messages.Success,[p])},e.notifyFailure=function(n){U(),Ne(e.Messages.Failure,[n.reason,n.message])},e.notifyExpectedFailure=function(n){U(),Ne(e.Messages.ExpectedFailure,[n.reason,n.message])},e.registerOnThemeChangeHandler=i,e.openLink=function(e){return new Promise((function(n){U(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),n(ke("executeDeepLink",e))}))}}(oe||(oe={})),function(e){function n(e){if(U(c.content),!t())throw C;Ne("setFrameContext",[e])}function t(){return!!q.supports.pages}e.returnFocus=function(e){if(U(),!t())throw C;Ne("returnFocus",[e])},e.registerFocusEnterHandler=function(e){ge("focusEnter",e,[],(function(){if(!t())throw C}))},e.setCurrentFrame=n,e.initializeWithFrameContext=function(e,t,o){oe.initialize(o).then((function(){return t&&t()})),n(e)},e.getConfig=function(){return new Promise((function(e){if(U(c.content,c.settings,c.remove,c.sidePanel),!t())throw C;e(Fe("settings.getSettings"))}))},e.navigateCrossDomain=function(e){return new Promise((function(n){if(U(c.content,c.sidePanel,c.settings,c.remove,c.task,c.stage,c.meetingStage),!t())throw C;n(Re("navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",e))}))},e.navigateToApp=function(e){return new Promise((function(n){if(U(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),!t())throw C;q.isLegacyTeams?n(ke("executeDeepLink",L(e))):n(ke("pages.navigateToApp",e))}))},e.shareDeepLink=function(e){if(U(c.content,c.sidePanel,c.meetingStage),!t())throw C;Ne("shareDeepLink",[e.subPageId,e.subPageLabel,e.subPageWebUrl])},e.registerFullScreenHandler=function(e){ge("fullScreenChange",e,[],(function(){if(!t())throw C}))},e.isSupported=t,function(e){function n(){return!!q.supports.pages&&!!q.supports.pages.tabs}e.navigateToTab=function(e){return new Promise((function(t){if(U(),!n())throw C;t(Re("navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",e))}))},e.getTabInstances=function(e){return new Promise((function(t){if(U(),!n())throw C;t(Fe("getTabInstances",e))}))},e.getMruTabInstances=function(e){return new Promise((function(t){if(U(),!n())throw C;t(Fe("getMruTabInstances",e))}))},e.isSupported=n}(e.tabs||(e.tabs={})),function(e){var n,t;function o(e,t){U(c.settings),t&&t(),n=e,e&&Ne("registerHandler",["save"])}function i(e,n){U(c.remove,c.settings),n&&n(),t=e,e&&Ne("registerHandler",["remove"])}function r(e){var t=new a(e);n?n(t):Te.childWindow?en("settings.save",[e]):t.notifySuccess()}e.initialize=function(){fe("settings.save",r,!1),fe("settings.remove",s,!1)},e.setValidityState=function(e){if(U(c.settings,c.remove),!u())throw C;Ne("settings.setValidityState",[e])},e.setConfig=function(e){return new Promise((function(n){if(U(c.content,c.settings,c.sidePanel),!u())throw C;n(ke("settings.setSettings",e))}))},e.registerOnSaveHandler=function(e){o(e,(function(){if(!u())throw C}))},e.registerOnSaveHandlerHelper=o,e.registerOnRemoveHandler=function(e){i(e,(function(){if(!u())throw C}))},e.registerOnRemoveHandlerHelper=i,e.registerChangeConfigHandler=function(e){ge("changeSettings",e,[c.content],(function(){if(!u())throw C}))};var a=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),Ne("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),Ne("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function s(){var e=new l;t?t(e):Te.childWindow?en("settings.remove",[]):e.notifySuccess()}var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),Ne("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),Ne("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}();function u(){return!!q.supports.pages&&!!q.supports.pages.config}e.isSupported=u}(e.config||(e.config={})),function(e){var n;function t(){return new Promise((function(e){if(U(),!r())throw C;e(Re("navigateBack","Back navigation is not supported in the current client or context."))}))}function o(e,t){U(),t&&t(),n=e,e&&Ne("registerHandler",["backButton"])}function i(){n&&n()||(Te.childWindow?en("backButtonPress",[]):t())}function r(){return!!q.supports.pages&&!!q.supports.pages.backStack}e._initialize=function(){fe("backButtonPress",i,!1)},e.navigateBack=t,e.registerBackButtonHandler=function(e){o(e,(function(){if(!r())throw C}))},e.registerBackButtonHandlerHelper=o,e.isSupported=r}(e.backStack||(e.backStack={})),function(e){function n(){return!!q.supports.pages&&!!q.supports.pages.fullTrust}e.enterFullscreen=function(){if(U(c.content),!n())throw C;Ne("enterFullscreen",[])},e.exitFullscreen=function(){if(U(c.content),!n())throw C;Ne("exitFullscreen",[])},e.isSupported=n}(e.fullTrust||(e.fullTrust={})),function(e){function n(){return!!q.supports.pages&&!!q.supports.pages.appButton}e.onClick=function(e){ge("appButtonClick",e,[c.content],(function(){if(!n())throw C}))},e.onHoverEnter=function(e){ge("appButtonHoverEnter",e,[c.content],(function(){if(!n())throw C}))},e.onHoverLeave=function(e){ge("appButtonHoverLeave",e,[c.content],(function(){if(!n())throw C}))},e.isSupported=n}(e.appButton||(e.appButton={})),function(e){function n(){return!!q.supports.pages&&!!q.supports.pages.currentApp}e.navigateTo=function(e){return new Promise((function(t){if(U(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),!n())throw C;t(Oe("pages.currentApp.navigateTo",e))}))},e.navigateToDefaultPage=function(){return new Promise((function(e){if(U(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),!n())throw C;e(Oe("pages.currentApp.navigateToDefaultPage"))}))},e.isSupported=n}(e.currentApp||(e.currentApp={}))}(ie||(ie={}));var ae=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},se=z("handlers"),le=function(){function e(){}return e.handlers={},e}();function ce(){le.handlers.themeChange=he,le.handlers.load=we,le.handlers.beforeUnload=ye,ie.backStack._initialize()}var ue=se.extend("callHandler");function de(e,n){var t=le.handlers[e];return t?(ue("Invoking the registered handler for message %s with arguments %o",e,n),[!0,t.apply(this,n)]):Te.childWindow?(en(e,[n]),[!1,void 0]):(ue("Handler for action message %s not found.",e),[!1,void 0])}function fe(e,n,t,o){void 0===t&&(t=!0),void 0===o&&(o=[]),n?(le.handlers[e]=n,t&&Ne("registerHandler",ae([e],o,!0))):delete le.handlers[e]}function pe(e){delete le.handlers[e]}function ge(e,n,t,o){U.apply(void 0,t),o&&o(),fe(e,n)}function me(e){le.themeChangeHandler=e,e&&Ne("registerHandler",["themeChange"])}function he(e){le.themeChangeHandler&&le.themeChangeHandler(e),Te.childWindow&&en("themeChange",[e])}function Ce(e){le.loadHandler=e,e&&Ne("registerHandler",["load"])}function we(e){le.loadHandler&&le.loadHandler(e),Te.childWindow&&en("load",[e])}function ve(e){le.beforeUnloadHandler=e,e&&Ne("registerHandler",["beforeUnload"])}function ye(){var e=function(){Ne("readyToUnload",[])};le.beforeUnloadHandler&&le.beforeUnloadHandler(e)||(Te.childWindow?en("beforeUnload"):e())}var Se=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},be=z("communication"),Te=function(){return function(){}}(),Pe=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e.promiseCallbacks={},e}();function Ie(e){if(Pe.messageListener=function(e){return Ue(e)},Te.currentWindow=Te.currentWindow||window,Te.parentWindow=Te.currentWindow.parent!==Te.currentWindow.self?Te.currentWindow.parent:Te.currentWindow.opener,(Te.parentWindow||e)&&Te.currentWindow.addEventListener("message",Pe.messageListener,!1),!Te.parentWindow){var n=Te.currentWindow;if(!n.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));g.isFramelessWindow=!0,n.onNativeMessage=xe}try{return Te.parentOrigin="*",Ae("initialize",[p]).then((function(e){return{context:e[0],clientType:e[1],runtimeConfig:e[2],clientSupportedSDKVersion:e[3]}}))}finally{Te.parentOrigin=null}}function Ee(){Te.currentWindow.removeEventListener("message",Pe.messageListener,!1),Te.parentWindow=null,Te.parentOrigin=null,Te.childWindow=null,Te.childOrigin=null,Pe.parentMessageQueue=[],Pe.childMessageQueue=[],Pe.nextMessageId=0,Pe.callbacks={}}function Fe(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Ae(e,n).then((function(e){return e[0]}))}function ke(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Ae(e,n).then((function(e){var n=e[0],t=e[1];if(!n)throw new Error(t)}))}function Re(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return Ae(e,t).then((function(e){var t=e[0],o=e[1];if(!t)throw new Error(o||n)}))}function Oe(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Ae(e,n).then((function(e){var n=e[0],t=e[1];if(n)throw n;return t}))}function Ae(e,n){return void 0===n&&(n=void 0),new Promise((function(t){t(Me(Le(e,n).id))}))}function Me(e){return new Promise((function(n){Pe.promiseCallbacks[e]=n}))}function Ne(e,n,t){var o;n instanceof Function?t=n:n instanceof Array&&(o=n);var i=Le(e,o);t&&(Pe.callbacks[i.id]=t)}var De=be.extend("sendMessageToParentHelper");function Le(e,n){var t=De,o=Te.parentWindow,i=nn(e,n);if(t("Message %i information: %o",i.id,{actionName:e,args:n}),g.isFramelessWindow)Te.currentWindow&&Te.currentWindow.nativeInterface&&(t("Sending message %i to parent via framelessPostMessage interface",i.id),Te.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(i)));else{var r=je(o);o&&r?(t("Sending message %i to parent via postMessage",i.id),o.postMessage(i,r)):(t("Adding message %i to parent message queue",i.id),ze(o).push(i))}return i}function Ue(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;He(n,t)&&(We(n,t),n===Te.parentWindow?xe(e):n===Te.childWindow&&Be(e))}}function He(e,n){return(!Te.currentWindow||e!==Te.currentWindow)&&(!!(Te.currentWindow&&Te.currentWindow.location&&n&&n===Te.currentWindow.location.origin)||E(new URL(n)))}function We(e,n){g.isFramelessWindow||Te.parentWindow&&!Te.parentWindow.closed&&e!==Te.parentWindow?Te.childWindow&&!Te.childWindow.closed&&e!==Te.childWindow||(Te.childWindow=e,Te.childOrigin=n):(Te.parentWindow=e,Te.parentOrigin=n),Te.parentWindow&&Te.parentWindow.closed&&(Te.parentWindow=null,Te.parentOrigin=null),Te.childWindow&&Te.childWindow.closed&&(Te.childWindow=null,Te.childOrigin=null),Xe(Te.parentWindow),Xe(Te.childWindow)}var _e=be.extend("handleParentMessage");function xe(e){var n=_e;if("id"in e.data&&"number"==typeof e.data.id){var t=e.data,o=Pe.callbacks[t.id];n("Received a response from parent for message %i",t.id),o&&(n("Invoking the registered callback for message %i with arguments %o",t.id,t.args),o.apply(null,Se(Se([],t.args,!0),[t.isPartialResponse],!1)),Ve(e)||(n("Removing registered callback for message %i",t.id),delete Pe.callbacks[t.id]));var i=Pe.promiseCallbacks[t.id];i&&(n("Invoking the registered promise callback for message %i with arguments %o",t.id,t.args),i(t.args),n("Removing registered promise callback for message %i",t.id),delete Pe.promiseCallbacks[t.id])}else if("func"in e.data&&"string"==typeof e.data.func){n("Received an action message %s from parent",(t=e.data).func),de(t.func,t.args)}else n("Received an unknown message: %O",e)}function Ve(e){return!0===e.data.isPartialResponse}function Be(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=de(n.func,n.args),o=t[0],i=t[1];o&&void 0!==i?Ye(n.id,Array.isArray(i)?i:[i]):Ne(n.func,n.args,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(Te.childWindow){var o=e.pop();Ye(n.id,e,o)}}))}}function ze(e){return e===Te.parentWindow?Pe.parentMessageQueue:e===Te.childWindow?Pe.childMessageQueue:[]}function je(e){return e===Te.parentWindow?Te.parentOrigin:e===Te.childWindow?Te.childOrigin:null}var Ge,qe,Ke,Ze,Je,Qe=be.extend("flushMessageQueue");function Xe(e){for(var n=je(e),t=ze(e),o=e==Te.parentWindow?"parent":"child";e&&n&&t.length>0;){var i=t.shift();Qe("Flushing message %i from "+o+" message queue via postMessage.",i.id),e.postMessage(i,n)}}function $e(e,n){var t=Te.currentWindow.setInterval((function(){0===ze(e).length&&(clearInterval(t),n())}),100)}function Ye(e,n,t){var o=Te.childWindow,i=tn(e,n,t),r=je(o);o&&r&&o.postMessage(i,r)}function en(e,n){var t=Te.childWindow,o=on(e,n),i=je(t);t&&i?t.postMessage(o,i):ze(t).push(o)}function nn(e,n){return{id:Pe.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function tn(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function on(e,n){return{func:e,args:n||[]}}function rn(e,n){U(),Ne("uploadCustomApp",[e],n||F())}function an(e,n,t){U(),Ne(e,n,t)}function sn(e,n){if(U(),!Te.childWindow)throw new Error("The child window has not yet been initialized or is not present");en(e,n)}function ln(e,n){var t=this;U(),fe(e,(function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return n.apply(t,e)}))}function cn(e,n){U(),fe("userSettingsChange",n,!0,[e])}function un(e){U(c.content,c.task),Ne("openFilePreview",[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId])}!function(e){function n(){return!!q.supports.logs}e.registerGetLogHandler=function(e){if(U(),!n())throw C;e?fe("log.request",(function(){Ne("log.receive",[e()])})):pe("log.request")},e.isSupported=n}(Ge||(Ge={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(qe||(qe={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(Ke||(Ke={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(Ze||(Ze={})),function(e){function n(){return!!q.supports.conversations}e.openConversation=function(e){return new Promise((function(t){if(U(c.content),!n())throw C;var o=ke("conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&fe("startConversation",(function(n,t,o,i){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),e.onCloseConversation&&fe("closeConversation",(function(n,t,o,i){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),t(o)}))},e.closeConversation=function(){if(U(c.content),!n())throw C;Ne("conversations.closeConversation"),pe("startConversation"),pe("closeConversation")},e.getChatMembers=function(){return new Promise((function(e){if(U(),!n())throw C;e(Fe("getChatMembers"))}))},e.isSupported=n}(Je||(Je={}));var dn;function fn(e,n,t){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");return"https://teams.microsoft.com/l/chat/0/0?"+("users="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&topicName="+encodeURIComponent(n))+(void 0===t?"":"&message="+encodeURIComponent(t))}function pn(e,n,t){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");return"https://teams.microsoft.com/l/call/0/0?"+("users="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&withVideo="+encodeURIComponent(n))+(void 0===t?"":"&source="+encodeURIComponent(t))}function gn(e,n,t,o,i){return"https://teams.microsoft.com/l/meeting/new?"+(void 0===e?"":"attendees="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&startTime="+encodeURIComponent(n))+(void 0===t?"":"&endTime="+encodeURIComponent(t))+(void 0===o?"":"&subject="+encodeURIComponent(o))+(void 0===i?"":"&content="+encodeURIComponent(i))}function mn(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return"https://teams.microsoft.com/l/app/"+encodeURIComponent(e)}!function(e){function n(){return!!q.supports.appInstallDialog}e.openAppInstallDialog=function(e){return new Promise((function(t){if(U(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),!n())throw new Error("Not supported");q.isLegacyTeams?t(ke("executeDeepLink",mn(e.appId))):(Ne("appInstallDialog.openAppInstallDialog",[e]),t())}))},e.isSupported=n}(dn||(dn={}));var hn,Cn,wn,vn,yn=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();function Sn(e,n){if(null==e||null==n||e.length<=0)return null;var t,o=1;return e.sort((function(e,n){return e.sequence>n.sequence?1:-1})),e.forEach((function(e){e.sequence==o&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),o++)})),t}function bn(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),o=new Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);var r=new Uint8Array(o),a=new Blob([r],{type:n});return{sequence:e.chunkSequence,file:a}}function Tn(e){Fn(e)?_("2.0.2"):kn(e)?_(v):En(e)&&_("2.0.4")}function Pn(e){return!(e.mediaType!=hn.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function In(e){return!(null==e||e.maxMediaCount>10)}function En(e){var n;return!((null==e?void 0:e.mediaType)!=hn.MediaType.Image||!(null===(n=null==e?void 0:e.imageProps)||void 0===n?void 0:n.imageOutputFormats))}function Fn(e){return!(!e||e.mediaType!=hn.MediaType.VideoAndImage&&!e.videoAndImageProps)}function kn(e){return!(!e||e.mediaType!=hn.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function Rn(e,n,t){return null!=e&&null!=n&&n==hn.FileFormat.ID&&null!=t}function On(e){return!(null==e||e.length<=0||e.length>10)}function An(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}function Mn(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");U(c.content,c.task),g.isFramelessWindow?H("1.7.0")?Ne("captureImage",e):e({errorCode:r.OLD_PLATFORM},void 0):e({errorCode:r.NOT_SUPPORTED_ON_PLATFORM},void 0)};var t=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return yn(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(U(c.content,c.task),H(S))?Rn(this.mimeType,this.format,this.content)?H("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:r.INVALID_ARGUMENTS},null):e({errorCode:r.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]};Ne("getMedia",[this.content],(function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var o=Sn(n.assembleAttachment,n.mediaMimeType);e(t.error,o)}else{var i=bn(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(i)}else e({errorCode:r.INTERNAL_ERROR,message:"data received is null"},null)}))},n.prototype.getMediaViaHandler=function(e){var n=R(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},o=[n,this.content];this.content&&e&&Ne("getMedia",o),fe("getMedia"+n,(function(o){if(e){var i=JSON.parse(o);if(i.error)e(i.error,null),pe("getMedia"+n);else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var a=Sn(t.assembleAttachment,t.mediaMimeType);e(i.error,a),pe("getMedia"+n)}else{var s=bn(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:r.INTERNAL_ERROR,message:"data received is null"},null),pe("getMedia"+n)}}))},n}(n);e.Media=t;var o,i,a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return yn(n,e),n.prototype.getMediaType=function(){return i.Video},n.prototype.notifyEventToApp=function(e){if(this.controllerCallback)switch(e){case o.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}},n}(function(){function e(e){this.controllerCallback=e}return e.prototype.notifyEventToHost=function(e,n){U(c.content,c.task);try{_(v)}catch(e){return void(n&&n(e))}Ne("media.controller",[{mediaType:this.getMediaType(),mediaControllerEvent:e}],(function(e){n&&n(e)}))},e.prototype.stop=function(e){this.notifyEventToHost(o.StopRecording,e)},e}());e.VideoController=a,function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(o=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(i=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(U(c.content,c.task),H(S)){try{Tn(e)}catch(e){return void n(e,null)}if(In(e)){Ne("selectMedia",[e],(function(o,i,r){if(r)Pn(e)&&e.videoProps.videoController.notifyEventToApp(r);else if(i){for(var a=[],s=0,l=i;s<l.length;s++){var c=l[s];a.push(new t(c))}n(o,a)}else n(o,null)}))}else{var o={errorCode:r.INVALID_ARGUMENTS};n(o,null)}}else{var i={errorCode:r.OLD_PLATFORM};n(i,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");U(c.content,c.task),H(S)?On(e)?Ne("viewImages",[e],n):n({errorCode:r.INVALID_ARGUMENTS}):n({errorCode:r.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");U(c.content,c.task),g.hostClientType!==s.desktop&&g.hostClientType!==s.web&&g.hostClientType!==s.rigel&&g.hostClientType!==s.teamsRoomsWindows&&g.hostClientType!==s.teamsRoomsAndroid&&g.hostClientType!==s.teamsPhones&&g.hostClientType!==s.teamsDisplays?H("1.9.0")?An(n)?Ne("media.scanBarCode",[n],e):e({errorCode:r.INVALID_ARGUMENTS},null):e({errorCode:r.OLD_PLATFORM},null):e({errorCode:r.NOT_SUPPORTED_ON_PLATFORM},null)}}(hn||(hn={})),function(e){function n(){return!(!q.supports.barCode||!q.supports.permissions)}e.scanBarCode=function(e){return new Promise((function(t){if(U(c.content,c.task),!n())throw C;if(!An(e))throw{errorCode:r.INVALID_ARGUMENTS};t(Oe("media.scanBarCode",e))}))},e.hasPermission=function(){if(U(c.content,c.task),!n())throw C;var e=a.Media;return new Promise((function(n){n(Oe("permissions.has",e))}))},e.requestPermission=function(){if(U(c.content,c.task),!n())throw C;var e=a.Media;return new Promise((function(n){n(Oe("permissions.request",e))}))},e.isSupported=n}(Cn||(Cn={})),function(e){function n(e){return new Promise((function(n){if(U(c.content,c.task),!t())throw C;q.isLegacyTeams?n(ke("executeDeepLink",fn([e.user],void 0,e.message))):n(ke("chat.openChat",{members:e.user,message:e.message}))}))}function t(){return!!q.supports.chat}e.openChat=n,e.openGroupChat=function(e){return new Promise((function(o){if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){n({user:e.users[0],message:e.message})}else{if(U(c.content,c.task),!t())throw C;if(q.isLegacyTeams)o(ke("executeDeepLink",fn(e.users,e.topic,e.message)));else o(ke("chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}))},e.isSupported=t}(wn||(wn={})),function(e){function n(){return!(!q.supports.geoLocation||!q.supports.permissions)}e.getCurrentLocation=function(){if(U(c.content,c.task),!n())throw C;return Oe("location.getLocation",{allowChooseLocation:!1,showMap:!1})},e.hasPermission=function(){if(U(c.content,c.task),!n())throw C;var e=a.GeoLocation;return new Promise((function(n){n(Oe("permissions.has",e))}))},e.requestPermission=function(){if(U(c.content,c.task),!n())throw C;var e=a.GeoLocation;return new Promise((function(n){n(Oe("permissions.request",e))}))},e.isSupported=n,function(e){function n(){return!!(q.supports.geoLocation&&q.supports.geoLocation.map&&q.supports.permissions)}e.chooseLocation=function(){if(U(c.content,c.task),!n())throw C;return Oe("location.getLocation",{allowChooseLocation:!0,showMap:!0})},e.showLocation=function(e){if(U(c.content,c.task),!n())throw C;if(!e)throw{errorCode:r.INVALID_ARGUMENTS};return Oe("location.showLocation",e)},e.isSupported=n}(e.map||(e.map={}))}(vn||(vn={}));var Nn,Dn,Ln,Un,Hn,Wn,_n,xn,Vn,Bn,zn,jn,Gn,qn,Kn,Zn=function(){function e(){}return e.prototype.postMessage=function(e,n){U(),Ne("messageForChild",[e],n||F())},e.prototype.addEventListener=function(e,n){U(),"message"===e&&fe("messageForParent",n)},e}(),Jn=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(e,n){U(c.task),Ne("messageForParent",[e],n||F())},e.prototype.addEventListener=function(e,n){U(c.task),"message"===e&&fe("messageForChild",n)},e}();function Qn(e){return e?e.modality&&"string"!=typeof e.modality?[!1,"modality must be a string"]:e.targetElementBoundingRect&&"object"==typeof e.targetElementBoundingRect?e.triggerType&&"string"==typeof e.triggerType?Xn(e.persona):[!1,"triggerType must be a valid string"]:[!1,"targetElementBoundingRect must be a DOMRect"]:[!1,"A request object is required"]}function Xn(e){return e?e.displayName&&"string"!=typeof e.displayName?[!1,"displayName must be a string"]:e.identifiers&&"object"==typeof e.identifiers?e.identifiers.AadObjectId||e.identifiers.Smtp||e.identifiers.Upn?e.identifiers.AadObjectId&&"string"!=typeof e.identifiers.AadObjectId?[!1,"AadObjectId identifier must be a string"]:e.identifiers.Smtp&&"string"!=typeof e.identifiers.Smtp?[!1,"Smtp identifier must be a string"]:e.identifiers.Upn&&"string"!=typeof e.identifiers.Upn?[!1,"Upn identifier must be a string"]:[!0,void 0]:[!1,"at least one valid identifier must be provided"]:[!1,"persona identifiers object must be provided"]:[!1,"persona object must be provided"]}function $n(e,n){oe.initialize(n).then((function(){e&&e()}))}function Yn(){te.enablePrintCapability()}function et(){te.print()}function nt(e){U(),oe.getContext().then((function(n){e&&e(wt(n))}))}function tt(e){oe.registerOnThemeChangeHandler(e)}function ot(e){ge("fullScreenChange",e,[])}function it(e){ge("appButtonClick",e,[c.content])}function rt(e){ge("appButtonHoverEnter",e,[c.content])}function at(e){ge("appButtonHoverLeave",e,[c.content])}function st(e){ie.backStack.registerBackButtonHandlerHelper(e)}function lt(e){te.registerOnLoadHandlerHelper(e)}function ct(e){te.registerBeforeUnloadHandlerHelper(e)}function ut(e){ge("focusEnter",e,[])}function dt(e){ge("changeSettings",e,[c.content])}function ft(e,n){U(),ie.tabs.getTabInstances(n).then((function(n){e(n)}))}function pt(e,n){U(),ie.tabs.getMruTabInstances(n).then((function(n){e(n)}))}function gt(e){ie.shareDeepLink({subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function mt(e,n){U(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),n=n||F(),oe.openLink(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function ht(e){ie.setCurrentFrame(e)}function Ct(e,n,t){ie.initializeWithFrameContext(e,n,t)}function wt(e){return{actionInfo:e.actionInfo,locale:e.app.locale,appSessionId:e.app.sessionId,theme:e.app.theme,appIconPosition:e.app.iconPositionVertical,osLocaleInfo:e.app.osLocaleInfo,parentMessageId:e.app.parentMessageId,userClickTime:e.app.userClickTime,userFileOpenPreference:e.app.userFileOpenPreference,appLaunchId:e.app.appLaunchId,hostClientType:e.app.host.clientType,sessionId:e.app.host.sessionId,ringId:e.app.host.ringId,entityId:e.page.id,frameContext:e.page.frameContext,subEntityId:e.page.subPageId,isFullScreen:e.page.isFullScreen,isMultiWindow:e.page.isMultiWindow,sourceOrigin:e.page.sourceOrigin,userObjectId:void 0!==e.user?e.user.id:void 0,isCallingAllowed:void 0!==e.user?e.user.isCallingAllowed:void 0,isPSTNCallingAllowed:void 0!==e.user?e.user.isPSTNCallingAllowed:void 0,userLicenseType:void 0!==e.user?e.user.licenseType:void 0,loginHint:void 0!==e.user?e.user.loginHint:void 0,userPrincipalName:void 0!==e.user?e.user.userPrincipalName:void 0,tid:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.id:void 0,tenantSKU:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.teamsSku:void 0,channelId:void 0!==e.channel?e.channel.id:void 0,channelName:void 0!==e.channel?e.channel.displayName:void 0,channelRelativeUrl:void 0!==e.channel?e.channel.relativeUrl:void 0,channelType:void 0!==e.channel?e.channel.membershipType:void 0,defaultOneNoteSectionId:void 0!==e.channel?e.channel.defaultOneNoteSectionId:void 0,hostTeamGroupId:void 0!==e.channel?e.channel.ownerGroupId:void 0,hostTeamTenantId:void 0!==e.channel?e.channel.ownerTenantId:void 0,chatId:void 0!==e.chat?e.chat.id:void 0,meetingId:void 0!==e.meeting?e.meeting.id:void 0,sharepoint:e.sharepoint,teamId:void 0!==e.team?e.team.internalId:void 0,teamName:void 0!==e.team?e.team.displayName:void 0,teamType:void 0!==e.team?e.team.type:void 0,groupId:void 0!==e.team?e.team.groupId:void 0,teamTemplateId:void 0!==e.team?e.team.templateId:void 0,isTeamArchived:void 0!==e.team?e.team.isArchived:void 0,userTeamRole:void 0!==e.team?e.team.userRole:void 0,teamSiteUrl:void 0!==e.sharePointSite?e.sharePointSite.teamSiteUrl:void 0,teamSiteDomain:void 0!==e.sharePointSite?e.sharePointSite.teamSiteDomain:void 0,teamSitePath:void 0!==e.sharePointSite?e.sharePointSite.teamSitePath:void 0,teamSiteId:void 0!==e.sharePointSite?e.sharePointSite.teamSiteId:void 0,mySitePath:void 0!==e.sharePointSite?e.sharePointSite.mySitePath:void 0,mySiteDomain:void 0!==e.sharePointSite?e.sharePointSite.mySiteDomain:void 0}}function vt(e){ie.returnFocus(e)}function yt(e,n){U(),n=n||F(),ie.tabs.navigateToTab(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function St(e,n){U(c.content,c.sidePanel,c.settings,c.remove,c.task,c.stage,c.meetingStage),n=n||F(),ie.navigateCrossDomain(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function bt(e){U(),e=e||F(),ie.backStack.navigateBack().then((function(){e(!0)})).catch((function(n){e(!1,n.message)}))}!function(e){function n(){return!!q.supports.location}e.getLocation=function(e,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");if(U(c.content,c.task),!H(y))throw{errorCode:r.OLD_PLATFORM};if(!e)throw{errorCode:r.INVALID_ARGUMENTS};if(!n())throw C;Ne("location.getLocation",[e],t)},e.showLocation=function(e,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");if(U(c.content,c.task),!H(y))throw{errorCode:r.OLD_PLATFORM};if(!e)throw{errorCode:r.INVALID_ARGUMENTS};if(!n())throw C;Ne("location.showLocation",[e],t)},e.isSupported=n}(Nn||(Nn={})),function(e){!function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(e.MeetingReactionType||(e.MeetingReactionType={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(e.CallType||(e.CallType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");U(c.sidePanel,c.meetingStage,c.settings,c.content),Ne("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");U(c.sidePanel),Ne("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");U(c.sidePanel),Ne("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");U(c.sidePanel),Ne("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");U(c.sidePanel),fe("meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,n){if(!e)throw new Error("[share app content to stage] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("meeting.shareAppContentToStage",[n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");U(c.sidePanel,c.meetingStage),Ne("meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");U(c.sidePanel,c.meetingStage),fe("meeting.speakingStateChanged",e)},e.registerRaiseHandStateChangedHandler=function(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");U(c.sidePanel,c.meetingStage),fe("meeting.raiseHandStateChanged",e)},e.registerMeetingReactionReceivedHandler=function(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");U(c.sidePanel,c.meetingStage),fe("meeting.meetingReactionReceived",e)}}(Dn||(Dn={})),function(e){function n(){return!!q.supports.monetization}e.openPurchaseExperience=function(e,t){var o,i;return"function"==typeof e?(o=e,i=t):i=e,U(c.content),N((function(){return new Promise((function(e){if(!n())throw C;e(Oe("monetization.openPurchaseExperience",i))}))}),o)},e.isSupported=n}(Ln||(Ln={})),function(e){function n(){return!!q.supports.calendar}e.openCalendarItem=function(e){return new Promise((function(t){if(U(c.content),!n())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");t(ke("calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((function(t){if(U(c.content),!n())throw new Error("Not supported");q.isLegacyTeams?t(ke("executeDeepLink",gn(e.attendees,e.startTime,e.endTime,e.subject,e.content))):t(ke("calendar.composeMeeting",e))}))},e.isSupported=n}(Un||(Un={})),function(e){function n(){return!!q.supports.mail}e.openMailItem=function(e){return new Promise((function(t){if(U(c.content),!n())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");t(ke("mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((function(t){if(U(c.content),!n())throw new Error("Not supported");t(ke("mail.composeMail",e))}))},e.isSupported=n,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(e.ComposeMailType||(e.ComposeMailType={}))}(Hn||(Hn={})),function(e){function n(e){return new Promise((function(n){if(!H("2.0.0"))throw{errorCode:r.OLD_PLATFORM};if(!Mn(e))throw{errorCode:r.INVALID_ARGUMENTS};if(!t())throw C;n(Oe("people.selectPeople",e))}))}function t(){return!!q.supports.people}e.selectPeople=function(e,t){var o,i,r;return U(c.content,c.task,c.settings),"function"==typeof e?(i=(o=[e,t])[0],r=o[1]):r=e,A(n,i,r)},e.isSupported=t}(Wn||(Wn={})),function(e){e.showProfile=function(e){return U(c.content),new Promise((function(n){var t=Qn(e),o=t[0],i=t[1];if(!o)throw{errorCode:r.INVALID_ARGUMENTS,message:i};n(Oe("profile.showProfile",{modality:e.modality,persona:e.persona,triggerType:e.triggerType,targetRectangle:{x:e.targetElementBoundingRect.x,y:e.targetElementBoundingRect.y,width:e.targetElementBoundingRect.width,height:e.targetElementBoundingRect.height}}))}))},e.isSupported=function(){return!!q.supports.profile}}(_n||(_n={})),function(e){function n(e){Ne("video.videoFrameProcessed",[e])}function t(e){Ne("video.notifyError",[e])}function o(){return!!q.supports.video}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,i){if(U(c.sidePanel),!o())throw C;fe("video.newVideoFrame",(function(o){if(o){var i=o.timestamp;e(o,(function(){n(i)}),t)}}),!1),Ne("video.registerForVideoFrame",[i])},e.notifySelectedVideoEffectChanged=function(e,n){if(U(c.sidePanel),!o())throw C;Ne("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){if(U(c.sidePanel),!o())throw C;fe("video.effectParameterChange",e,!1),Ne("video.registerForVideoEffect")},e.isSupported=o}(xn||(xn={})),function(e){var n="search.queryChange",t="search.queryClose",o="search.queryExecute";function i(){return!!q.supports.search}e.registerHandlers=function(e,r,a){if(U(c.content),!i())throw C;fe(t,e),fe(o,r),a&&fe(n,a)},e.unregisterHandlers=function(){if(U(c.content),!i())throw C;Ne("search.unregister"),pe(n),pe(t),pe(o)},e.isSupported=i}(Vn||(Vn={})),function(e){function n(n){return new Promise((function(t){if(!a())throw C;t(Oe(e.SharingAPIMessages.shareWebContent,n))}))}function t(e){if(!(e&&e.content&&e.content.length))throw{errorCode:r.INVALID_ARGUMENTS,message:"Shared content is missing"}}function o(e){if(e.content.some((function(e){return!e.type})))throw{errorCode:r.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"};if(e.content.some((function(n){return n.type!==e.content[0].type})))throw{errorCode:r.INVALID_ARGUMENTS,message:"Shared content must be of the same type"}}function i(e){if("URL"!==e.content[0].type)throw{errorCode:r.INVALID_ARGUMENTS,message:"Content type is unsupported"};if(e.content.some((function(e){return!e.url})))throw{errorCode:r.INVALID_ARGUMENTS,message:"URLs are required for URL content types"}}function a(){return!!q.supports.sharing}e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,r){try{t(e),o(e),i(e)}catch(e){return M((function(){return Promise.reject(e)}),r)}return U(c.content,c.sidePanel,c.task,c.stage,c.meetingStage),M(n,r,e)},e.isSupported=a}(Bn||(Bn={})),function(e){function n(){return!!q.supports.stageView}e.open=function(e){return new Promise((function(t){if(U(c.content),!n())throw C;if(!e)throw new Error("[stageView.open] Stage view params cannot be null");t(Oe("stageView.open",e))}))},e.isSupported=n}(zn||(zn={})),function(e){function n(){return!!q.supports.webStorage}e.isWebStorageClearedOnUserLogOut=function(){return U(),n()},e.isSupported=n}(jn||(jn={})),function(e){var n;function t(){return!!q.supports.call}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(n=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){return new Promise((function(o){var i;if(U(c.content,c.task),!t())throw C;if(!q.isLegacyTeams)return Ne("call.startCall",[e],o);o(Oe("executeDeepLink",pn(e.targets,null===(i=e.requestedModalities)||void 0===i?void 0:i.includes(n.Video),e.source)))}))},e.isSupported=t}(Gn||(Gn={})),function(e){e.Messages=oe.Messages,e.FailedReason=oe.FailedReason,e.ExpectedFailureReason=oe.ExpectedFailureReason,e.notifyAppLoaded=function(){oe.notifyAppLoaded()},e.notifySuccess=function(){oe.notifySuccess()},e.notifyFailure=function(e){oe.notifyFailure(e)},e.notifyExpectedFailure=function(e){oe.notifyExpectedFailure(e)}}(qn||(qn={})),function(e){e.setValidityState=function(e){ie.config.setValidityState(e)},e.getSettings=function(e){U(c.content,c.settings,c.remove,c.sidePanel),ie.getConfig().then((function(n){e(n)}))},e.setSettings=function(e,n){U(c.content,c.settings,c.sidePanel),n=n||F(),ie.config.setConfig(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))},e.registerOnSaveHandler=function(e){ie.config.registerOnSaveHandlerHelper(e)},e.registerOnRemoveHandler=function(e){ie.config.registerOnRemoveHandlerHelper(e)}}(Kn||(Kn={}));var Tt,Pt,It,Et,Ft,kt,Rt,Ot,At=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};!function(e){function n(e){return{url:e.url,size:{height:e.height?e.height:h.Small,width:e.width?e.width:h.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function t(e){return{url:e.url,size:{height:e.height?e.height:h.Small,width:e.width?e.width:h.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function o(e){return e.height=e.height?e.height:h.Small,e.width=e.width?e.width:h.Small,e}e.startTask=function(e,o){var i=o?function(e){return o(e.err,e.result)}:void 0;return void 0!==e.card||void 0===e.url?(U(c.content,c.sidePanel,c.meetingStage),Ne("tasks.startTask",[e],o)):void 0!==e.completionBotId?ee.bot.open(t(e),i):ee.open(n(e),i),new Zn},e.updateTask=function(e){(e=o(e)).width,e.height;var n=At(e,["width","height"]);if(Object.keys(n).length)throw new Error("resize requires a TaskInfo argument containing only width and height");ee.update.resize(e)},e.submitTask=function(e,n){ee.submit(e,n)},e.getDefaultSizeIfNotProvided=o}(Tt||(Tt={})),function(e){function n(e,n){return{errorCode:e,message:n}}!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(e){e.ClassMaterials="classMaterials"}(e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})),function(e){e.Readonly="readonly"}(e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})),function(e){e.Downloaded="Downloaded",e.Downloading="Downloading",e.Failed="Failed"}(e.FileDownloadStatus||(e.FileDownloadStatus={})),function(e){e.Download="DOWNLOAD",e.Upload="UPLOAD",e.Delete="DELETE"}(e.CloudStorageProviderFileAction||(e.CloudStorageProviderFileAction={})),e.getCloudStorageFolders=function(e,n){if(U(c.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");Ne("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(U(c.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");Ne("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(U(c.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");Ne("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if(U(c.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");Ne("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if(U(c.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");Ne("files.openCloudStorageFile",[e,n,t])},e.getExternalProviders=function(e,n){if(void 0===e&&(e=!1),U(c.content),!n)throw new Error("[files.getExternalProviders] Callback cannot be null");Ne("files.getExternalProviders",[e],n)},e.copyMoveFiles=function(e,n,t,o,i,r){if(void 0===i&&(i=!1),U(c.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!o)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] callback cannot be null");Ne("files.copyMoveFiles",[e,n,t,o,i],r)},e.getFileDownloads=function(e){if(U(c.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");Ne("files.getFileDownloads",[],e)},e.openDownloadFolder=function(e,n){if(void 0===e&&(e=void 0),U(c.content),!n)throw new Error("[files.openDownloadFolder] Callback cannot be null");Ne("files.openDownloadFolder",[e],n)},e.addCloudStorageProvider=function(e){if(U(c.content),!e)throw n(r.INVALID_ARGUMENTS,"[files.addCloudStorageProvider] callback cannot be null");Ne("files.addCloudStorageProvider",[],e)},e.removeCloudStorageProvider=function(e,t){if(U(c.content),!t)throw n(r.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] callback cannot be null");if(!e||!e.content)throw n(r.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");Ne("files.removeCloudStorageProvider",[e],t)},e.addCloudStorageProviderFile=function(e,t){if(U(c.content),!t)throw n(r.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw n(r.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");Ne("files.addCloudStorageProviderFile",[e],t)},e.renameCloudStorageProviderFile=function(e,t){if(U(c.content),!t)throw n(r.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw n(r.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");Ne("files.renameCloudStorageProviderFile",[e],t)},e.deleteCloudStorageProviderFile=function(e,t){if(U(c.content),!t)throw n(r.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw n(r.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");Ne("files.deleteCloudStorageProviderFile",[e],t)},e.downloadCloudStorageProviderFile=function(e,t){if(U(c.content),!t)throw n(r.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw n(r.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");Ne("files.downloadCloudStorageProviderFile",[e],t)},e.uploadCloudStorageProviderFile=function(e,t){if(U(c.content),!t)throw n(r.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw n(r.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");if(!e.content.destinationFolder)throw n(r.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] Invalid destination folder details");Ne("files.uploadCloudStorageProviderFile",[e],t)},e.registerCloudStorageProviderListChangeHandler=function(e){if(U(),!e)throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");fe("files.cloudStorageProviderListChange",e)},e.registerCloudStorageProviderContentChangeHandler=function(e){if(U(),!e)throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");fe("files.cloudStorageProviderContentChange",e)}}(Pt||(Pt={})),function(e){function n(){return!!q.supports.meetingRoom}e.getPairedMeetingRoomInfo=function(){return new Promise((function(e){if(U(),!n())throw C;e(Oe("meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((function(t){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(U(),!n())throw C;t(Oe("meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(U(),!n())throw C;fe("meetingRoom.meetingRoomCapabilitiesUpdate",(function(n){U(),e(n)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(U(),!n())throw C;fe("meetingRoom.meetingRoomStatesUpdate",(function(n){U(),e(n)}))},e.isSupported=n}(It||(It={})),function(e){function n(){return!!q.supports.notifications}e.showNotification=function(e){if(U(c.content),!n())throw C;Ne("notifications.showNotification",[e])},e.isSupported=n}(Et||(Et={})),function(e){function n(){return!!q.supports.remoteCamera}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(U(c.sidePanel),!n())throw C;Ne("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(U(c.sidePanel),!n())throw C;Ne("remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(U(c.sidePanel),!n())throw C;Ne("remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(U(c.sidePanel),!n())throw C;Ne("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(U(c.sidePanel),!n())throw C;fe("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(U(c.sidePanel),!n())throw C;fe("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(U(c.sidePanel),!n())throw C;fe("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(U(c.sidePanel),!n())throw C;fe("remoteCamera.sessionStatusChange",e)},e.isSupported=n}(Ft||(Ft={})),function(e){function n(){return!!q.supports.appEntity}e.selectAppEntity=function(e,t,o,i){if(U(c.content),!n())throw C;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!i)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");Ne("appEntity.selectAppEntity",[e,t,o],i)},e.isSupported=n}(kt||(kt={})),function(e){function n(){return!!q.supports.teams}!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,t){if(U(c.content),!n())throw C;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!t)throw new Error("[teams.getTeamChannels] Callback cannot be null");Ne("teams.getTeamChannels",[e],t)},e.refreshSiteUrl=function(e,t){if(U(),!n())throw C;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!t)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");Ne("teams.refreshSiteUrl",[e],t)},e.isSupported=n,function(e){function n(){return!!q.supports.teams&&!!q.supports.teams.fullTrust}!function(e){function n(){return!!q.supports.teams&&(!!q.supports.teams.fullTrust&&!!q.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((function(t){if(U(),!n())throw C;if((g.hostClientType===s.android||g.hostClientType===s.teamsRoomsAndroid||g.hostClientType===s.teamsPhones||g.hostClientType===s.teamsDisplays)&&!H("2.0.1")){var o={errorCode:r.OLD_PLATFORM};throw new Error(JSON.stringify(o))}t(Fe("getUserJoinedTeams",e))}))},e.isSupported=n}(e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((function(t){if(U(),!n())throw C;t(Fe("getConfigSetting",e))}))},e.isSupported=n}(e.fullTrust||(e.fullTrust={}))}(Rt||(Rt={})),function(e){function n(){return xn.isSupported()}function t(e){Ne("video.videoFrameProcessed",[e])}function o(e){Ne("video.notifyError",[e])}e.registerForVideoFrame=function(e,i){if(U(c.sidePanel),!n())throw C;fe("video.newVideoFrame",(function(n){if(n){var i=n.timestamp;e(n,(function(){t(i)}),o)}}),!1),Ne("video.registerForVideoFrame",[i])},e.notifySelectedVideoEffectChanged=function(e,t,o){if(U(c.sidePanel),!n())throw C;Ne("video.videoEffectChanged",[e,t,o])},e.registerForVideoEffect=function(e){if(U(c.sidePanel),!n())throw C;fe("video.effectParameterChange",e,!1),Ne("video.registerForVideoEffect")},e.updatePersonalizedEffects=function(e){if(U(c.sidePanel),!xn.isSupported())throw C;Ne("video.personalizedEffectsChanged",[e])},e.isSupported=n}(Ot||(Ot={}))})(),o})()}));
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
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerChangeSettingsHandler(function () {
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
                    name: "taskInfo",
                    defaultValue: "{\"title\": \"Test Task Module\", \"height\": \"medium\", \"width\": \"medium\", \"url\": \"https://teams-test-tab.azurewebsites.net\"}"
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
            name: "authentication.getAuthToken",
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
            name: "authentication.getUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.authentication.getUser(output);
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
                    name: "taskInfo",
                    defaultValue: "{\"title\": \"Test Task Module\", \"height\": \"medium\", \"width\": \"medium\", \"url\": \"https://teams-test-tab.azurewebsites.net\"}"
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
                MicrosoftTeams_min.teams.fullTrust.joinedTeams.getUserJoinedTeams().then(output);
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
            name: "navigateToTab",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "tabInstance",
                }],
            action: (tabInstance, output) => {
                MicrosoftTeams_min.navigateToTab(tabInstance, (status, reason) => {
                    if (reason) {
                        output(reason);
                        return;
                    }
                    output(status);
                });
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