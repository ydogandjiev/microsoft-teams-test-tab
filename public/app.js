/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(self,(function(){return(()=>{var e={22:(e,n,t)=>{var o=t(481),i=t(426),r=i;r.v1=o,r.v4=i,e.exports=r},725:e=>{for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,i=n;return[i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]]].join("")}},157:e=>{var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},481:(e,n,t)=>{var o,i,r=t(157),a=t(725),s=0,l=0;e.exports=function(e,n,t){var c=n&&t||0,u=n||[],d=(e=e||{}).node||o,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var p=r();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=i=16383&(p[6]<<8|p[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:l+1,h=g-s+(m-l)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||g>s)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=m,i=f;var C=(1e4*(268435455&(g+=122192928e5))+m)%4294967296;u[c++]=C>>>24&255,u[c++]=C>>>16&255,u[c++]=C>>>8&255,u[c++]=255&C;var w=g/4294967296*1e4&268435455;u[c++]=w>>>8&255,u[c++]=255&w,u[c++]=w>>>24&15|16,u[c++]=w>>>16&255,u[c++]=f>>>8|128,u[c++]=255&f;for(var v=0;v<6;++v)u[c+v]=d[v];return n||a(u)}},426:(e,n,t)=>{var o=t(157),i=t(725);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[r+s]=a[s];return n||i(a)}},227:(e,n,t)=>{n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let o=0,i=0;n[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(i=o))})),n.splice(i,0,t)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},n.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage=function(){try{return localStorage}catch(e){}}(),n.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.log=console.debug||console.log||(()=>{}),e.exports=t(447)(n);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},447:(e,n,t)=>{e.exports=function(e){function n(e){let t,i,r,a=null;function s(...e){if(!s.enabled)return;const o=s,i=Number(new Date),r=i-(t||i);o.diff=r,o.prev=t,o.curr=i,t=i,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((t,i)=>{if("%%"===t)return"%";a++;const r=n.formatters[i];if("function"==typeof r){const n=e[a];t=r.call(o,n),e.splice(a,1),a--}return t})),n.formatArgs.call(o,e);(o.log||n.log).apply(o,e)}return s.namespace=e,s.useColors=n.useColors(),s.color=n.selectColor(e),s.extend=o,s.destroy=n.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(i!==n.namespaces&&(i=n.namespaces,r=n.enabled(e)),r),set:e=>{a=e}}),"function"==typeof n.init&&n.init(s),s}function o(e,t){const o=n(this.namespace+(void 0===t?":":t)+e);return o.log=this.log,o}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},n.disable=function(){const e=[...n.names.map(i),...n.skips.map(i).map((e=>"-"+e))].join(",");return n.enable(""),e},n.enable=function(e){let t;n.save(e),n.namespaces=e,n.names=[],n.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),i=o.length;for(t=0;t<i;t++)o[t]&&("-"===(e=o[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){if("*"===e[e.length-1])return!0;let t,o;for(t=0,o=n.skips.length;t<o;t++)if(n.skips[t].test(e))return!1;for(t=0,o=n.names.length;t<o;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(824),n.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((t=>{n[t]=e[t]})),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return n.colors[Math.abs(t)%n.colors.length]},n.enable(n.load()),n}},824:e=>{var n=1e3,t=60*n,o=60*t,i=24*o;function r(e){if(!((e=String(e)).length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*t;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function a(e){var r=Math.abs(e);return r>=i?Math.round(e/i)+"d":r>=o?Math.round(e/o)+"h":r>=t?Math.round(e/t)+"m":r>=n?Math.round(e/n)+"s":e+"ms"}function s(e){var r=Math.abs(e);return r>=i?l(e,r,i,"day"):r>=o?l(e,r,o,"hour"):r>=t?l(e,r,t,"minute"):r>=n?l(e,r,n,"second"):e+" ms"}function l(e,n,t,o){var i=n>=1.5*t;return Math.round(e/t)+" "+o+(i?"s":"")}e.exports=function(e,n){n=n||{};var t=typeof e;if("string"===t&&e.length>0)return r(e);if("number"===t&&isFinite(e))return n.long?s(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var o={};return(()=>{"use strict";t.r(o),t.d(o,{ActionObjectType:()=>n,ChannelType:()=>S,ChildAppWindow:()=>zn,DialogDimension:()=>f,ErrorCode:()=>r,FileOpenPreference:()=>e,FrameContexts:()=>c,HostClientType:()=>s,HostName:()=>l,NotificationTypes:()=>Je,ParentAppWindow:()=>jn,SecondaryM365ContentIdName:()=>i,TaskModuleDimension:()=>b,TeamType:()=>u,UserSettingTypes:()=>Qe,UserTeamRole:()=>d,ViewerActionTypes:()=>Ke,app:()=>ie,appEntity:()=>Tt,appInitialization:()=>Vn,appInstallDialog:()=>sn,authentication:()=>T,barCode:()=>pn,calendar:()=>Mn,call:()=>xn,chat:()=>gn,conversations:()=>Xe,dialog:()=>ne,enablePrintCapability:()=>Jn,executeDeepLink:()=>ut,files:()=>vt,geoLocation:()=>mn,getContext:()=>Qn,getMruTabInstances:()=>lt,getTabInstances:()=>st,initialize:()=>Zn,initializeWithFrameContext:()=>ft,location:()=>Rn,logs:()=>Ze,mail:()=>Nn,media:()=>fn,meeting:()=>On,meetingRoom:()=>yt,menus:()=>te,monetization:()=>An,navigateBack:()=>Ct,navigateCrossDomain:()=>ht,navigateToTab:()=>mt,notifications:()=>St,openFilePreview:()=>Z,pages:()=>re,people:()=>Dn,print:()=>Kn,profile:()=>Ln,registerAppButtonClickHandler:()=>Yn,registerAppButtonHoverEnterHandler:()=>et,registerAppButtonHoverLeaveHandler:()=>nt,registerBackButtonHandler:()=>tt,registerBeforeUnloadHandler:()=>it,registerChangeSettingsHandler:()=>at,registerCustomHandler:()=>G,registerFocusEnterHandler:()=>rt,registerFullScreenHandler:()=>$n,registerOnLoadHandler:()=>ot,registerOnThemeChangeHandler:()=>Xn,registerUserSettingsChangeHandler:()=>q,remoteCamera:()=>bt,returnFocus:()=>gt,sendCustomEvent:()=>j,sendCustomMessage:()=>z,setFrameContext:()=>dt,settings:()=>Bn,shareDeepLink:()=>ct,sharing:()=>Hn,stageView:()=>Wn,tasks:()=>wt,teams:()=>It,teamsCore:()=>oe,uploadCustomApp:()=>B,video:()=>Un,webStorage:()=>_n});var e,n,i,r,a,s,l,c,u,d,f,p="2.2.0-beta.0",g="2.0.1",m="2.0.3",h="1.9.0",C="1.8.0",w=["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","teams.live.com","devspaces.skype.com","ssauth.skype.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","msft.spoppe.com","*.sharepoint.com","*.sharepoint-df.com","*.sharepointonline.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","*.teams.microsoft.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.office.com"],v=/^https:\/\//,y=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(e||(e={})),function(e){e.M365Content="m365content"}(n||(n={})),function(e){e.DriveId="driveId",e.GroupId="groupId",e.SiteId="siteId",e.UserId="userId"}(i||(i={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(r||(r={})),function(e){e.GeoLocation="geolocation",e.Media="media"}(a||(a={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(s||(s={})),function(e){e.office="Office",e.outlook="Outlook",e.orange="Orange",e.teams="Teams"}(l||(l={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(c||(c={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(u||(u={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(d||(d={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(f||(f={}));var S,b=f;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(S||(S={}));var T,I={errorCode:r.NOT_SUPPORTED_ON_PLATFORM},P=t(22);function E(e,n){if("*."===e.substring(0,2)){var t=e.substring(1);if(n.length>t.length&&n.split(".").length===t.split(".").length&&n.substring(n.length-t.length)===t)return!0}else if(e===n)return!0;return!1}function F(e){if("https:"!==e.protocol)return!1;var n=e.host;if(w.some((function(e){return E(e,n)})))return!0;for(var t=0,o=y.additionalValidOrigins;t<o.length;t++){var i=o[t];if(E("https://"===i.substring(0,8)?i.substring(8):i,n))return!0}return!1}function k(e){return function(n,t){if(!n)throw new Error(e||t)}}function R(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),o=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!o.every(i))return NaN;for(;t.length<o.length;)t.push("0");for(;o.length<t.length;)o.push("0");for(var r=0;r<t.length;++r)if(Number(t[r])!=Number(o[r]))return Number(t[r])>Number(o[r])?1:-1;return 0}function O(){return P.v4()}function A(e){return Object.keys(e).forEach((function(n){"object"==typeof e[n]&&A(e[n])})),Object.freeze(e)}function M(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(void 0,e)})).catch((function(e){n&&n(e)})),i}function N(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(){n&&n(null)})).catch((function(e){n&&n(e)})),i}function D(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(null,e)})).catch((function(e){n&&n(e,null)})),i}function L(e,n,t){return new Promise((function(o,i){var r=setTimeout(i,n,t);e().then((function(e){clearTimeout(r),o(e)})).catch((function(e){clearTimeout(r),i(e)}))}))}function U(e){var n=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&n.searchParams.append("webUrl",e.webUrl),(e.channelId||e.subPageId)&&n.searchParams.append("context",JSON.stringify({channelId:e.channelId,subEntityId:e.subPageId})),n.toString()}function H(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!y.initializeCalled)throw new Error("The library has not yet been initialized");if(y.frameContext&&e&&e.length>0){for(var t=!1,o=0;o<e.length;o++)if(e[o]===y.frameContext){t=!0;break}if(!t)throw new Error("This call is only allowed in following contexts: "+JSON.stringify(e)+'. Current context: "'+y.frameContext+'".')}}function W(e){void 0===e&&(e=g);var n=R(y.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0}function _(){return y.hostClientType==s.android||y.hostClientType==s.ios}function x(e){if(void 0===e&&(e=g),!_())throw{errorCode:r.NOT_SUPPORTED_ON_PLATFORM};if(!W(e))throw{errorCode:r.OLD_PLATFORM}}function V(e){var n=y.additionalValidOrigins.concat(e.filter((function(e){return"string"==typeof e&&v.test(e)}))),t={};n=n.filter((function(e){return!t[e]&&(t[e]=!0,!0)})),y.additionalValidOrigins=n}function B(e,n){H(),Le("uploadCustomApp",[e],n||k())}function z(e,n,t){H(),Le(e,n,t)}function j(e,n){if(H(),!Pe.childWindow)throw new Error("The child window has not yet been initialized or is not present");tn(e,n)}function G(e,n){var t=this;H(),me(e,(function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return n.apply(t,e)}))}function q(e,n){H(),me("userSettingsChange",n,!0,[e])}function Z(e){H(c.content,c.task),Le("openFilePreview",[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId])}!function(e){var n,t,o;function i(e){return new Promise((function(t,o){if(y.hostClientType===s.desktop||y.hostClientType===s.android||y.hostClientType===s.ios||y.hostClientType===s.rigel||y.hostClientType===s.teamsRoomsWindows||y.hostClientType===s.teamsRoomsAndroid||y.hostClientType===s.teamsPhones||y.hostClientType===s.teamsDisplays){var i=document.createElement("a");i.href=e.url,t(Ne("authentication.authenticate",[i.href,e.width,e.height,e.isExternal]).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)})))}else n={success:t,fail:o},u(e)}))}function r(e){return new Promise((function(n){n(Ne("authentication.getAuthToken",[null==e?void 0:e.resources,null==e?void 0:e.claims,null==e?void 0:e.silent]))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function a(){return new Promise((function(e){e(Ne("authentication.getUser"))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function l(){d();try{Pe.childWindow&&Pe.childWindow.close()}finally{Pe.childWindow=null,Pe.childOrigin=null}}function u(e){l();var n=e.width||600,t=e.height||400;n=Math.min(n,Pe.currentWindow.outerWidth-400),t=Math.min(t,Pe.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=e.url.replace("{oauthRedirectMethod}","web");var i=void 0!==Pe.currentWindow.screenLeft?Pe.currentWindow.screenLeft:Pe.currentWindow.screenX,r=void 0!==Pe.currentWindow.screenTop?Pe.currentWindow.screenTop:Pe.currentWindow.screenY;i+=Pe.currentWindow.outerWidth/2-n/2,r+=Pe.currentWindow.outerHeight/2-t/2,Pe.childWindow=Pe.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+i+", width="+n+", height="+t),Pe.childWindow?f():g("FailedToOpenWindow")}function d(){t&&(clearInterval(t),t=0),he("initialize"),he("navigateCrossDomain")}function f(){d(),t=Pe.currentWindow.setInterval((function(){if(!Pe.childWindow||Pe.childWindow.closed)g("CancelledByUser");else{var e=Pe.childOrigin;try{Pe.childOrigin="*",tn("ping")}finally{Pe.childOrigin=e}}}),100),me("initialize",(function(){return[c.authentication,y.hostClientType]})),me("navigateCrossDomain",(function(){return!1}))}function p(e){try{n&&n.success(e)}finally{n=null,l()}}function g(e){try{n&&n.fail(new Error(e))}finally{n=null,l()}}function m(e,n,t){if(e){var o=document.createElement("a");o.href=decodeURIComponent(e),o.host&&o.host!==window.location.host&&"outlook.office.com"===o.host&&o.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(o.href=h(o.href,"result",t)),Pe.currentWindow.location.assign(h(o.href,"authSuccess",""))),n&&"reason"===n&&(t&&(o.href=h(o.href,"reason",t)),Pe.currentWindow.location.assign(h(o.href,"authFailure",""))))}}function h(e,n,t){var o=e.indexOf("#"),i=-1===o?"#":e.substr(o);return i=i+"&"+n+(""!==t?"="+t:""),(e=-1===o?e:e.substr(0,o))+i}e.initialize=function(){me("authentication.authenticate.success",p,!1),me("authentication.authenticate.failure",g,!1)},e.registerAuthenticationHandlers=function(e){o=e},e.authenticate=function(e){var n=void 0!==e,t=n?e:o;if(!t)throw new Error("No parameters are provided for authentication");return H(c.content,c.sidePanel,c.settings,c.remove,c.task,c.stage,c.meetingStage),i(t).then((function(e){try{return t&&t.successCallback?(t.successCallback(e),""):e}finally{n||(o=null)}})).catch((function(e){try{if(t&&t.failureCallback)return t.failureCallback(e.message),"";throw e}finally{n||(o=null)}}))},e.getAuthToken=function(e){return H(),r(e).then((function(n){return e&&e.successCallback?(e.successCallback(n),""):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),"";throw n}))},e.getUser=function(e){return H(),a().then((function(n){return e&&e.successCallback?(e.successCallback(n),null):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),null;throw n}))},e.notifySuccess=function(e,n){m(n,"result",e),H(c.authentication),Le("authentication.authenticate.success",[e]),en(Pe.parentWindow,(function(){return setTimeout((function(){return Pe.currentWindow.close()}),200)}))},e.notifyFailure=function(e,n){m(n,"reason",e),H(c.authentication),Le("authentication.authenticate.failure",[e]),en(Pe.parentWindow,(function(){return setTimeout((function(){return Pe.currentWindow.close()}),200)}))}}(T||(T={}));var J=function(){return J=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},J.apply(this,arguments)},K={apiVersion:1,supports:{appInstallDialog:void 0,barCode:void 0,calendar:void 0,call:void 0,chat:void 0,webStorage:void 0,conversations:void 0,dialog:{bot:void 0,update:void 0},geoLocation:{map:void 0},location:void 0,logs:void 0,mail:void 0,meetingRoom:void 0,menus:void 0,monetization:void 0,notifications:void 0,pages:{appButton:void 0,tabs:void 0,config:void 0,backStack:void 0,fullTrust:void 0},people:void 0,permissions:void 0,profile:void 0,remoteCamera:void 0,sharing:void 0,stageView:void 0,teams:{fullTrust:{joinedTeams:void 0}},teamsCore:void 0,video:void 0}},Q={appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{bot:{},update:{}},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{appButton:{},tabs:{},config:{},backStack:{},fullTrust:{}},remoteCamera:{},sharing:{},stageView:{},teams:{fullTrust:{}},teamsCore:{},video:{}},X=[s.desktop,s.web,s.android,s.ios,s.rigel,s.surfaceHub,s.teamsRoomsWindows,s.teamsRoomsAndroid,s.teamsPhones,s.teamsDisplays],$={"1.9.0":[{capability:{location:{}},hostClientTypes:X}],"2.0.0":[{capability:{people:{}},hostClientTypes:X}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[s.android,s.teamsRoomsAndroid,s.teamsPhones,s.teamsDisplays]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[s.android,s.ios]}]};function Y(e){var n=J({},Q);return Object.keys($).forEach((function(t){R(e,t)>=0&&$[t].forEach((function(e){e.hostClientTypes.includes(y.hostClientType)&&(n=J(J({},n),e.capability))}))})),{apiVersion:1,isLegacyTeams:!0,supports:n}}function ee(e){K=A(e)}var ne,te,oe,ie,re;function ae(e){return{actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:l.teams,clientType:e.hostClientType?e.hostClientType:s.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:y.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:e.userObjectId,displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0}}!function(e){var n=[];function t(e){y.frameContext&&(y.frameContext===c.task?n.push(e):he("messageForChild"))}function o(){return!!K.supports.dialog}function i(e){return{url:e.url,height:e.size?e.size.height:f.Small,width:e.size?e.size.width:f.Small,title:e.title,fallbackUrl:e.fallbackUrl}}function r(e){return{url:e.url,height:e.size?e.size.height:f.Small,width:e.size?e.size.width:f.Small,title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}e.initialize=function(){me("messageForChild",t,!1)},e.open=function(e,n,t){if(H(c.content,c.sidePanel,c.meetingStage),!o())throw I;t&&me("messageForParent",t),Le("tasks.startTask",[i(e)],(function(e,t){null==n||n({err:e,result:t}),he("messageForParent")}))},e.submit=function(e,n){if(H(c.content,c.sidePanel,c.task,c.meetingStage),!o())throw I;Le("tasks.completeTask",[e,n?Array.isArray(n)?n:[n]:[]])},e.sendMessageToParentFromDialog=function(e){if(H(c.task),!o())throw I;Le("messageForParent",[e])},e.sendMessageToDialog=function(e){if(H(c.content,c.sidePanel,c.meetingStage),!o())throw I;Le("messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(H(c.task),!o())throw I;for(he("messageForChild"),me("messageForChild",e),n.reverse();n.length>0;){e(n.pop())}},e.isSupported=o,function(e){function n(){return!!K.supports.dialog&&!!K.supports.dialog.update}e.resize=function(e){if(H(c.content,c.sidePanel,c.task,c.meetingStage),!n())throw I;Le("tasks.updateTask",[e])},e.isSupported=n}(e.update||(e.update={})),function(e){function n(){return!!K.supports.dialog&&!!K.supports.dialog.bot}e.open=function(e,t,o){if(H(c.content,c.sidePanel,c.meetingStage),!n())throw I;o&&me("messageForParent",o),Le("tasks.startTask",[r(e)],(function(e,n){null==t||t({err:e,result:n}),he("messageForParent")}))},e.isSupported=n}(e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=i,e.getDialogInfoFromBotUrlDialogInfo=r}(ne||(ne={})),function(e){!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(e.DisplayMode||(e.DisplayMode={}));var n,t,o,i=function(){return function(){this.enabled=!0,this.selected=!1}}();function r(e){o&&o(e)||(H(),Le("viewConfigItemPress",[e]))}function a(e){n&&n(e)||(H(),Le("handleNavBarMenuItemPress",[e]))}function s(e){t&&t(e)||(H(),Le("handleActionMenuItemPress",[e]))}function l(){return!!K.supports.menus}e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){me("navBarMenuItemPress",a,!1),me("actionMenuItemPress",s,!1),me("setModuleView",r,!1)},e.setUpViews=function(e,n){if(H(),!l())throw I;o=n,Le("setUpViews",[e])},e.setNavBarMenu=function(e,t){if(H(),!l())throw I;n=t,Le("setNavBarMenu",[e])},e.showActionMenu=function(e,n){if(H(),!l())throw I;t=n,Le("showActionMenu",[e])},e.isSupported=l}(te||(te={})),function(e){function n(){window.print()}function t(){return!!K.supports.teamsCore}e.enablePrintCapability=function(){if(!y.printCapabilityEnabled){if(H(),!t())throw I;y.printCapabilityEnabled=!0,document.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=n,e.registerOnLoadHandler=function(e){if(H(),!t())throw I;ve(e)},e.registerBeforeUnloadHandler=function(e){if(H(),!t())throw I;Se(e)},e.isSupported=t}(oe||(oe={})),function(e){e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return y.initializeCalled},e.getFrameContext=function(){return y.frameContext};function n(e){return new Promise((function(n){y.initializeCalled||(y.initializeCalled=!0,fe(),y.initializePromise=Fe(e).then((function(e){var n=e.context,t=e.clientType,o=e.runtimeConfig,i=e.clientSupportedSDKVersion,r=void 0===i?g:i;y.frameContext=n,y.hostClientType=t,y.clientSupportedSDKVersion=r;try{if(!(a=JSON.parse(o))||!a.apiVersion)throw new Error("Received runtime config is invalid");o&&ee(a)}catch(e){if(!(e instanceof SyntaxError))throw e;try{isNaN(R(o,g))||(y.clientSupportedSDKVersion=o);var a=JSON.parse(r);r&&ee(a)}catch(e){if(!(e instanceof SyntaxError))throw e;ee(Y(y.clientSupportedSDKVersion))}}y.initializeCompleted=!0})),T.initialize(),te.initialize(),re.config.initialize(),ne.initialize()),Array.isArray(e)&&V(e),n(y.initializePromise)}))}function t(e){H(),Ce(e)}e.initialize=function(e){return L((function(){return n(e)}),5e3,new Error("SDK initialization timed out."))},e._initialize=function(e){Pe.currentWindow=e},e._uninitialize=function(){y.initializeCalled&&(y.frameContext&&(t(null),re.backStack.registerBackButtonHandler(null),re.registerFullScreenHandler(null),oe.registerBeforeUnloadHandler(null),oe.registerOnLoadHandler(null),Ze.registerGetLogHandler(null)),y.frameContext===c.settings&&re.config.registerOnSaveHandler(null),y.frameContext===c.remove&&re.config.registerOnRemoveHandler(null),y.initializeCalled=!1,y.initializeCompleted=!1,y.initializePromise=null,y.additionalValidOrigins=[],y.frameContext=null,y.hostClientType=null,y.isFramelessWindow=!1,ke())},e.getContext=function(){return new Promise((function(e){H(),e(Re("getContext"))})).then((function(e){return ae(e)}))},e.notifyAppLoaded=function(){H(),Le(e.Messages.AppLoaded,[p])},e.notifySuccess=function(){H(),Le(e.Messages.Success,[p])},e.notifyFailure=function(n){H(),Le(e.Messages.Failure,[n.reason,n.message])},e.notifyExpectedFailure=function(n){H(),Le(e.Messages.ExpectedFailure,[n.reason,n.message])},e.registerOnThemeChangeHandler=t,e.openLink=function(e){return new Promise((function(n){H(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),n(Oe("executeDeepLink",e))}))}}(ie||(ie={})),function(e){function n(e){if(H(c.content),!t())throw I;Le("setFrameContext",[e])}function t(){return!!K.supports.pages}e.returnFocus=function(e){if(H(),!t())throw I;Le("returnFocus",[e])},e.registerFocusEnterHandler=function(e){if(H(),!t())throw I;me("focusEnter",e)},e.setCurrentFrame=n,e.initializeWithFrameContext=function(e,t,o){ie.initialize(o).then((function(){return t&&t()})),n(e)},e.getConfig=function(){return new Promise((function(e){if(H(c.content,c.settings,c.remove,c.sidePanel),!t())throw I;e(Re("settings.getSettings"))}))},e.navigateCrossDomain=function(e){return new Promise((function(n){if(H(c.content,c.sidePanel,c.settings,c.remove,c.task,c.stage,c.meetingStage),!t())throw I;n(Ae("navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",e))}))},e.navigateToApp=function(e){return new Promise((function(n){if(H(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),!t())throw I;K.isLegacyTeams?n(Oe("executeDeepLink",U(e))):n(Oe("pages.navigateToApp",e))}))},e.shareDeepLink=function(e){if(H(c.content,c.sidePanel,c.meetingStage),!t())throw I;Le("shareDeepLink",[e.subPageId,e.subPageLabel,e.subPageWebUrl])},e.registerFullScreenHandler=function(e){if(H(),!t())throw I;me("fullScreenChange",e)},e.isSupported=t,function(e){function n(){return!!K.supports.pages&&!!K.supports.pages.tabs}e.navigateToTab=function(e){return new Promise((function(t){if(H(),!n())throw I;t(Ae("navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",e))}))},e.getTabInstances=function(e){return new Promise((function(t){if(H(),!n())throw I;t(Re("getTabInstances",e))}))},e.getMruTabInstances=function(e){return new Promise((function(t){if(H(),!n())throw I;t(Re("getMruTabInstances",e))}))},e.isSupported=n}(e.tabs||(e.tabs={})),function(e){var n,t;function o(e){var t=new i(e);n?n(t):t.notifySuccess()}e.initialize=function(){me("settings.save",o,!1),me("settings.remove",r,!1)},e.setValidityState=function(e){if(H(c.settings,c.remove),!s())throw I;Le("settings.setValidityState",[e])},e.setConfig=function(e){return new Promise((function(n){if(H(c.content,c.settings,c.sidePanel),!s())throw I;n(Oe("settings.setSettings",e))}))},e.registerOnSaveHandler=function(e){if(H(c.settings),!s())throw I;n=e,e&&Le("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){if(H(c.remove,c.settings),!s())throw I;t=e,e&&Le("registerHandler",["remove"])},e.registerChangeConfigHandler=function(e){if(H(c.content),!s())throw I;me("changeSettings",e)};var i=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),Le("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),Le("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function r(){var e=new a;t?t(e):e.notifySuccess()}var a=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),Le("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),Le("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}();function s(){return!!K.supports.pages&&!!K.supports.pages.config}e.isSupported=s}(e.config||(e.config={})),function(e){var n;function t(){return new Promise((function(e){if(H(),!i())throw I;e(Ae("navigateBack","Back navigation is not supported in the current client or context."))}))}function o(){n&&n()||t()}function i(){return!!K.supports.pages&&!!K.supports.pages.backStack}e._initialize=function(){me("backButtonPress",o,!1)},e.navigateBack=t,e.registerBackButtonHandler=function(e){if(H(),!i())throw I;n=e,e&&Le("registerHandler",["backButton"])},e.isSupported=i}(e.backStack||(e.backStack={})),function(e){function n(){return!!K.supports.pages&&!!K.supports.pages.fullTrust}e.enterFullscreen=function(){if(H(c.content),!n())throw I;Le("enterFullscreen",[])},e.exitFullscreen=function(){if(H(c.content),!n())throw I;Le("exitFullscreen",[])},e.isSupported=n}(e.fullTrust||(e.fullTrust={})),function(e){function n(){return!!K.supports.pages&&!!K.supports.pages.appButton}e.onClick=function(e){if(H(c.content),!n())throw I;me("appButtonClick",e)},e.onHoverEnter=function(e){if(H(c.content),!n())throw I;me("appButtonHoverEnter",e)},e.onHoverLeave=function(e){if(H(c.content),!n())throw I;me("appButtonHoverLeave",e)},e.isSupported=n}(e.appButton||(e.appButton={}))}(re||(re={}));var se=(0,t(227).debug)("teamsJs");function le(e){return se.extend(e)}var ce=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},ue=le("handlers"),de=function(){function e(){}return e.handlers={},e}();function fe(){de.handlers.themeChange=we,de.handlers.load=ye,de.handlers.beforeUnload=be,re.backStack._initialize()}var pe=ue.extend("callHandler");function ge(e,n){var t=de.handlers[e];return t?(pe("Invoking the registered handler for message %s with arguments %o",e,n),[!0,t.apply(this,n)]):(pe("Handler for action message %s not found.",e),[!1,void 0])}function me(e,n,t,o){void 0===t&&(t=!0),void 0===o&&(o=[]),n?(de.handlers[e]=n,t&&Le("registerHandler",ce([e],o,!0))):delete de.handlers[e]}function he(e){delete de.handlers[e]}function Ce(e){de.themeChangeHandler=e,e&&Le("registerHandler",["themeChange"])}function we(e){de.themeChangeHandler&&de.themeChangeHandler(e),Pe.childWindow&&tn("themeChange",[e])}function ve(e){de.loadHandler=e,e&&Le("registerHandler",["load"])}function ye(e){de.loadHandler&&de.loadHandler(e),Pe.childWindow&&tn("load",[e])}function Se(e){de.beforeUnloadHandler=e,e&&Le("registerHandler",["beforeUnload"])}function be(){var e=function(){Le("readyToUnload",[])};de.beforeUnloadHandler&&de.beforeUnloadHandler(e)||e()}var Te=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},Ie=le("communication"),Pe=function(){return function(){}}(),Ee=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e.promiseCallbacks={},e}();function Fe(e){if(Ee.messageListener=function(e){return We(e)},Pe.currentWindow=Pe.currentWindow||window,Pe.parentWindow=Pe.currentWindow.parent!==Pe.currentWindow.self?Pe.currentWindow.parent:Pe.currentWindow.opener,(Pe.parentWindow||e)&&Pe.currentWindow.addEventListener("message",Ee.messageListener,!1),!Pe.parentWindow){var n=Pe.currentWindow;if(!n.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));y.isFramelessWindow=!0,n.onNativeMessage=Be}try{return Pe.parentOrigin="*",Ne("initialize",[p]).then((function(e){return{context:e[0],clientType:e[1],runtimeConfig:e[2],clientSupportedSDKVersion:e[3]}}))}finally{Pe.parentOrigin=null}}function ke(){Pe.currentWindow.removeEventListener("message",Ee.messageListener,!1),Pe.parentWindow=null,Pe.parentOrigin=null,Pe.childWindow=null,Pe.childOrigin=null,Ee.parentMessageQueue=[],Ee.childMessageQueue=[],Ee.nextMessageId=0,Ee.callbacks={}}function Re(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Ne(e,n).then((function(e){return e[0]}))}function Oe(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Ne(e,n).then((function(e){var n=e[0],t=e[1];if(!n)throw new Error(t)}))}function Ae(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return Ne(e,t).then((function(e){var t=e[0],o=e[1];if(!t)throw new Error(o||n)}))}function Me(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return Ne(e,n).then((function(e){var n=e[0],t=e[1];if(n)throw n;return t}))}function Ne(e,n){return void 0===n&&(n=void 0),new Promise((function(t){t(De(He(e,n).id))}))}function De(e){return new Promise((function(n){Ee.promiseCallbacks[e]=n}))}function Le(e,n,t){var o;n instanceof Function?t=n:n instanceof Array&&(o=n);var i=He(e,o);t&&(Ee.callbacks[i.id]=t)}var Ue=Ie.extend("sendMessageToParentHelper");function He(e,n){var t=Ue,o=Pe.parentWindow,i=on(e,n);if(t("Message %i information: %o",i.id,{actionName:e,args:n}),y.isFramelessWindow)Pe.currentWindow&&Pe.currentWindow.nativeInterface&&(t("Sending message %i to parent via framelessPostMessage interface",i.id),Pe.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(i)));else{var r=qe(o);o&&r?(t("Sending message %i to parent via postMessage",i.id),o.postMessage(i,r)):(t("Adding message %i to parent message queue",i.id),Ge(o).push(i))}return i}function We(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;_e(n,t)&&(xe(n,t),n===Pe.parentWindow?Be(e):n===Pe.childWindow&&je(e))}}function _e(e,n){return(!Pe.currentWindow||e!==Pe.currentWindow)&&(!!(Pe.currentWindow&&Pe.currentWindow.location&&n&&n===Pe.currentWindow.location.origin)||F(new URL(n)))}function xe(e,n){y.isFramelessWindow||Pe.parentWindow&&!Pe.parentWindow.closed&&e!==Pe.parentWindow?Pe.childWindow&&!Pe.childWindow.closed&&e!==Pe.childWindow||(Pe.childWindow=e,Pe.childOrigin=n):(Pe.parentWindow=e,Pe.parentOrigin=n),Pe.parentWindow&&Pe.parentWindow.closed&&(Pe.parentWindow=null,Pe.parentOrigin=null),Pe.childWindow&&Pe.childWindow.closed&&(Pe.childWindow=null,Pe.childOrigin=null),Ye(Pe.parentWindow),Ye(Pe.childWindow)}var Ve=Ie.extend("handleParentMessage");function Be(e){var n=Ve;if("id"in e.data&&"number"==typeof e.data.id){var t=e.data,o=Ee.callbacks[t.id];n("Received a response from parent for message %i",t.id),o&&(n("Invoking the registered callback for message %i with arguments %o",t.id,t.args),o.apply(null,Te(Te([],t.args,!0),[t.isPartialResponse],!1)),ze(e)||(n("Removing registered callback for message %i",t.id),delete Ee.callbacks[t.id]));var i=Ee.promiseCallbacks[t.id];i&&(n("Invoking the registered promise callback for message %i with arguments %o",t.id,t.args),i(t.args),n("Removing registered promise callback for message %i",t.id),delete Ee.promiseCallbacks[t.id])}else if("func"in e.data&&"string"==typeof e.data.func){n("Received an action message %s from parent",(t=e.data).func),ge(t.func,t.args)}else n("Received an unknown message: %O",e)}function ze(e){return!0===e.data.isPartialResponse}function je(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=ge(n.func,n.args),o=t[0],i=t[1];o&&void 0!==i?nn(n.id,Array.isArray(i)?i:[i]):Le(n.func,n.args,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(Pe.childWindow){var o=e.pop();nn(n.id,e,o)}}))}}function Ge(e){return e===Pe.parentWindow?Ee.parentMessageQueue:e===Pe.childWindow?Ee.childMessageQueue:[]}function qe(e){return e===Pe.parentWindow?Pe.parentOrigin:e===Pe.childWindow?Pe.childOrigin:null}var Ze,Je,Ke,Qe,Xe,$e=Ie.extend("flushMessageQueue");function Ye(e){for(var n=qe(e),t=Ge(e),o=e==Pe.parentWindow?"parent":"child";e&&n&&t.length>0;){var i=t.shift();$e("Flushing message %i from "+o+" message queue via postMessage.",i.id),e.postMessage(i,n)}}function en(e,n){var t=Pe.currentWindow.setInterval((function(){0===Ge(e).length&&(clearInterval(t),n())}),100)}function nn(e,n,t){var o=Pe.childWindow,i=rn(e,n,t),r=qe(o);o&&r&&o.postMessage(i,r)}function tn(e,n){var t=Pe.childWindow,o=an(e,n),i=qe(t);t&&i?t.postMessage(o,i):Ge(t).push(o)}function on(e,n){return{id:Ee.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function rn(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function an(e,n){return{func:e,args:n||[]}}!function(e){function n(){return!!K.supports.logs}e.registerGetLogHandler=function(e){if(H(),!n())throw I;e?me("log.request",(function(){Le("log.receive",[e()])})):he("log.request")},e.isSupported=n}(Ze||(Ze={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(Je||(Je={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(Ke||(Ke={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(Qe||(Qe={})),function(e){function n(){return!!K.supports.conversations}e.openConversation=function(e){return new Promise((function(t){if(H(c.content),!n())throw I;var o=Oe("conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&me("startConversation",(function(n,t,o,i){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),e.onCloseConversation&&me("closeConversation",(function(n,t,o,i){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),t(o)}))},e.closeConversation=function(){if(H(c.content),!n())throw I;Le("conversations.closeConversation"),he("startConversation"),he("closeConversation")},e.getChatMembers=function(){return new Promise((function(e){if(H(),!n())throw I;e(Re("getChatMembers"))}))},e.isSupported=n}(Xe||(Xe={}));var sn;function ln(e,n,t){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");return"https://teams.microsoft.com/l/chat/0/0?"+("users="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&topicName="+encodeURIComponent(n))+(void 0===t?"":"&message="+encodeURIComponent(t))}function cn(e,n,t){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");return"https://teams.microsoft.com/l/call/0/0?"+("users="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&withVideo="+encodeURIComponent(n))+(void 0===t?"":"&source="+encodeURIComponent(t))}function un(e,n,t,o,i){return"https://teams.microsoft.com/l/meeting/new?"+(void 0===e?"":"attendees="+e.map((function(e){return encodeURIComponent(e)})).join(","))+(void 0===n?"":"&startTime="+encodeURIComponent(n))+(void 0===t?"":"&endTime="+encodeURIComponent(t))+(void 0===o?"":"&subject="+encodeURIComponent(o))+(void 0===i?"":"&content="+encodeURIComponent(i))}function dn(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return"https://teams.microsoft.com/l/app/"+encodeURIComponent(e)}!function(e){function n(){return!!K.supports.appInstallDialog}e.openAppInstallDialog=function(e){return new Promise((function(t){if(H(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),!n())throw new Error("Not supported");K.isLegacyTeams?t(Oe("executeDeepLink",dn(e.appId))):(Le("appInstallDialog.openAppInstallDialog",[e]),t())}))},e.isSupported=n}(sn||(sn={}));var fn,pn,gn,mn,hn=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();function Cn(e,n){if(null==e||null==n||e.length<=0)return null;var t,o=1;return e.sort((function(e,n){return e.sequence>n.sequence?1:-1})),e.forEach((function(e){e.sequence==o&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),o++)})),t}function wn(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),o=new Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);var r=new Uint8Array(o),a=new Blob([r],{type:n});return{sequence:e.chunkSequence,file:a}}function vn(e){Tn(e)?x("2.0.2"):In(e)?x(m):bn(e)&&x("2.0.4")}function yn(e){return!(e.mediaType!=fn.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function Sn(e){return!(null==e||e.maxMediaCount>10)}function bn(e){var n;return!((null==e?void 0:e.mediaType)!=fn.MediaType.Image||!(null===(n=null==e?void 0:e.imageProps)||void 0===n?void 0:n.imageOutputFormats))}function Tn(e){return!(!e||e.mediaType!=fn.MediaType.VideoAndImage&&!e.videoAndImageProps)}function In(e){return!(!e||e.mediaType!=fn.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function Pn(e,n,t){return null!=e&&null!=n&&n==fn.FileFormat.ID&&null!=t}function En(e){return!(null==e||e.length<=0||e.length>10)}function Fn(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}function kn(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");H(c.content,c.task),y.isFramelessWindow?W("1.7.0")?Le("captureImage",e):e({errorCode:r.OLD_PLATFORM},void 0):e({errorCode:r.NOT_SUPPORTED_ON_PLATFORM},void 0)};var t=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return hn(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(H(c.content,c.task),W(C))?Pn(this.mimeType,this.format,this.content)?W("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:r.INVALID_ARGUMENTS},null):e({errorCode:r.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]};Le("getMedia",[this.content],(function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var o=Cn(n.assembleAttachment,n.mediaMimeType);e(t.error,o)}else{var i=wn(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(i)}else e({errorCode:r.INTERNAL_ERROR,message:"data received is null"},null)}))},n.prototype.getMediaViaHandler=function(e){var n=O(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},o=[n,this.content];this.content&&e&&Le("getMedia",o),me("getMedia"+n,(function(o){if(e){var i=JSON.parse(o);if(i.error)e(i.error,null),he("getMedia"+n);else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var a=Cn(t.assembleAttachment,t.mediaMimeType);e(i.error,a),he("getMedia"+n)}else{var s=wn(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:r.INTERNAL_ERROR,message:"data received is null"},null),he("getMedia"+n)}}))},n}(n);e.Media=t;var o,i,a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return hn(n,e),n.prototype.getMediaType=function(){return i.Video},n.prototype.notifyEventToApp=function(e){if(this.controllerCallback)switch(e){case o.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}},n}(function(){function e(e){this.controllerCallback=e}return e.prototype.notifyEventToHost=function(e,n){H(c.content,c.task);try{x(m)}catch(e){return void(n&&n(e))}Le("media.controller",[{mediaType:this.getMediaType(),mediaControllerEvent:e}],(function(e){n&&n(e)}))},e.prototype.stop=function(e){this.notifyEventToHost(o.StopRecording,e)},e}());e.VideoController=a,function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(o=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(i=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(H(c.content,c.task),W(C)){try{vn(e)}catch(e){return void n(e,null)}if(Sn(e)){Le("selectMedia",[e],(function(o,i,r){if(r)yn(e)&&e.videoProps.videoController.notifyEventToApp(r);else if(i){for(var a=[],s=0,l=i;s<l.length;s++){var c=l[s];a.push(new t(c))}n(o,a)}else n(o,null)}))}else{var o={errorCode:r.INVALID_ARGUMENTS};n(o,null)}}else{var i={errorCode:r.OLD_PLATFORM};n(i,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");H(c.content,c.task),W(C)?En(e)?Le("viewImages",[e],n):n({errorCode:r.INVALID_ARGUMENTS}):n({errorCode:r.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");H(c.content,c.task),y.hostClientType!==s.desktop&&y.hostClientType!==s.web&&y.hostClientType!==s.rigel&&y.hostClientType!==s.teamsRoomsWindows&&y.hostClientType!==s.teamsRoomsAndroid&&y.hostClientType!==s.teamsPhones&&y.hostClientType!==s.teamsDisplays?W("1.9.0")?Fn(n)?Le("media.scanBarCode",[n],e):e({errorCode:r.INVALID_ARGUMENTS},null):e({errorCode:r.OLD_PLATFORM},null):e({errorCode:r.NOT_SUPPORTED_ON_PLATFORM},null)}}(fn||(fn={})),function(e){function n(){return!(!K.supports.barCode||!K.supports.permissions)}e.scanBarCode=function(e){return new Promise((function(t){if(H(c.content,c.task),!n())throw I;if(!Fn(e))throw{errorCode:r.INVALID_ARGUMENTS};t(Me("media.scanBarCode",e))}))},e.hasPermission=function(){if(H(c.content,c.task),!n())throw I;var e=a.Media;return new Promise((function(n){n(Me("permissions.has",e))}))},e.requestPermission=function(){if(H(c.content,c.task),!n())throw I;var e=a.Media;return new Promise((function(n){n(Me("permissions.request",e))}))},e.isSupported=n}(pn||(pn={})),function(e){function n(e){return new Promise((function(n){if(H(c.content,c.task),!t())throw I;K.isLegacyTeams?n(Oe("executeDeepLink",ln([e.user],void 0,e.message))):n(Oe("chat.openChat",{members:e.user,message:e.message}))}))}function t(){return!!K.supports.chat}e.openChat=n,e.openGroupChat=function(e){return new Promise((function(o){if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){n({user:e.users[0],message:e.message})}else{if(H(c.content,c.task),!t())throw I;if(K.isLegacyTeams)o(Oe("executeDeepLink",ln(e.users,e.topic,e.message)));else o(Oe("chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}))},e.isSupported=t}(gn||(gn={})),function(e){function n(){return!(!K.supports.geoLocation||!K.supports.permissions)}e.getCurrentLocation=function(){if(H(c.content,c.task),!n())throw I;return Me("location.getLocation",{allowChooseLocation:!1,showMap:!1})},e.hasPermission=function(){if(H(c.content,c.task),!n())throw I;var e=a.GeoLocation;return new Promise((function(n){n(Me("permissions.has",e))}))},e.requestPermission=function(){if(H(c.content,c.task),!n())throw I;var e=a.GeoLocation;return new Promise((function(n){n(Me("permissions.request",e))}))},e.isSupported=n,function(e){function n(){return!!(K.supports.geoLocation&&K.supports.geoLocation.map&&K.supports.permissions)}e.chooseLocation=function(){if(H(c.content,c.task),!n())throw I;return Me("location.getLocation",{allowChooseLocation:!0,showMap:!0})},e.showLocation=function(e){if(H(c.content,c.task),!n())throw I;if(!e)throw{errorCode:r.INVALID_ARGUMENTS};return Me("location.showLocation",e)},e.isSupported=n}(e.map||(e.map={}))}(mn||(mn={}));var Rn,On,An,Mn,Nn,Dn,Ln,Un,Hn,Wn,_n,xn,Vn,Bn,zn=function(){function e(){}return e.prototype.postMessage=function(e,n){H(),Le("messageForChild",[e],n||k())},e.prototype.addEventListener=function(e,n){H(),"message"===e&&me("messageForParent",n)},e}(),jn=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(e,n){H(c.task),Le("messageForParent",[e],n||k())},e.prototype.addEventListener=function(e,n){H(c.task),"message"===e&&me("messageForChild",n)},e}();function Gn(e){return e?e.modality&&"string"!=typeof e.modality?[!1,"modality must be a string"]:e.targetElementBoundingRect&&"object"==typeof e.targetElementBoundingRect?e.triggerType&&"string"==typeof e.triggerType?qn(e.persona):[!1,"triggerType must be a valid string"]:[!1,"targetElementBoundingRect must be a DOMRect"]:[!1,"A request object is required"]}function qn(e){return e?e.displayName&&"string"!=typeof e.displayName?[!1,"displayName must be a string"]:e.identifiers&&"object"==typeof e.identifiers?e.identifiers.AadObjectId||e.identifiers.Smtp||e.identifiers.Upn?e.identifiers.AadObjectId&&"string"!=typeof e.identifiers.AadObjectId?[!1,"AadObjectId identifier must be a string"]:e.identifiers.Smtp&&"string"!=typeof e.identifiers.Smtp?[!1,"Smtp identifier must be a string"]:e.identifiers.Upn&&"string"!=typeof e.identifiers.Upn?[!1,"Upn identifier must be a string"]:[!0,void 0]:[!1,"at least one valid identifier must be provided"]:[!1,"persona identifiers object must be provided"]:[!1,"persona object must be provided"]}function Zn(e,n){ie.initialize(n).then((function(){e&&e()}))}function Jn(){oe.enablePrintCapability()}function Kn(){oe.print()}function Qn(e){H(),ie.getContext().then((function(n){e&&e(pt(n))}))}function Xn(e){ie.registerOnThemeChangeHandler(e)}function $n(e){re.registerFullScreenHandler(e)}function Yn(e){re.appButton.onClick(e)}function et(e){re.appButton.onHoverEnter(e)}function nt(e){re.appButton.onHoverLeave(e)}function tt(e){re.backStack.registerBackButtonHandler(e)}function ot(e){oe.registerOnLoadHandler(e)}function it(e){oe.registerBeforeUnloadHandler(e)}function rt(e){re.registerFocusEnterHandler(e)}function at(e){re.config.registerChangeConfigHandler(e)}function st(e,n){H(),re.tabs.getTabInstances(n).then((function(n){e(n)}))}function lt(e,n){H(),re.tabs.getMruTabInstances(n).then((function(n){e(n)}))}function ct(e){re.shareDeepLink({subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function ut(e,n){H(c.content,c.sidePanel,c.settings,c.task,c.stage,c.meetingStage),n=n||k(),ie.openLink(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function dt(e){re.setCurrentFrame(e)}function ft(e,n,t){re.initializeWithFrameContext(e,n,t)}function pt(e){return{actionInfo:e.actionInfo,locale:e.app.locale,appSessionId:e.app.sessionId,theme:e.app.theme,appIconPosition:e.app.iconPositionVertical,osLocaleInfo:e.app.osLocaleInfo,parentMessageId:e.app.parentMessageId,userClickTime:e.app.userClickTime,userFileOpenPreference:e.app.userFileOpenPreference,appLaunchId:e.app.appLaunchId,hostClientType:e.app.host.clientType,sessionId:e.app.host.sessionId,ringId:e.app.host.ringId,entityId:e.page.id,frameContext:e.page.frameContext,subEntityId:e.page.subPageId,isFullScreen:e.page.isFullScreen,isMultiWindow:e.page.isMultiWindow,sourceOrigin:e.page.sourceOrigin,userObjectId:void 0!==e.user?e.user.id:void 0,isCallingAllowed:void 0!==e.user?e.user.isCallingAllowed:void 0,isPSTNCallingAllowed:void 0!==e.user?e.user.isPSTNCallingAllowed:void 0,userLicenseType:void 0!==e.user?e.user.licenseType:void 0,loginHint:void 0!==e.user?e.user.loginHint:void 0,userPrincipalName:void 0!==e.user?e.user.userPrincipalName:void 0,tid:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.id:void 0,tenantSKU:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.teamsSku:void 0,channelId:void 0!==e.channel?e.channel.id:void 0,channelName:void 0!==e.channel?e.channel.displayName:void 0,channelRelativeUrl:void 0!==e.channel?e.channel.relativeUrl:void 0,channelType:void 0!==e.channel?e.channel.membershipType:void 0,defaultOneNoteSectionId:void 0!==e.channel?e.channel.defaultOneNoteSectionId:void 0,hostTeamGroupId:void 0!==e.channel?e.channel.ownerGroupId:void 0,hostTeamTenantId:void 0!==e.channel?e.channel.ownerTenantId:void 0,chatId:void 0!==e.chat?e.chat.id:void 0,meetingId:void 0!==e.meeting?e.meeting.id:void 0,sharepoint:e.sharepoint,teamId:void 0!==e.team?e.team.internalId:void 0,teamName:void 0!==e.team?e.team.displayName:void 0,teamType:void 0!==e.team?e.team.type:void 0,groupId:void 0!==e.team?e.team.groupId:void 0,teamTemplateId:void 0!==e.team?e.team.templateId:void 0,isTeamArchived:void 0!==e.team?e.team.isArchived:void 0,userTeamRole:void 0!==e.team?e.team.userRole:void 0,teamSiteUrl:void 0!==e.sharePointSite?e.sharePointSite.teamSiteUrl:void 0,teamSiteDomain:void 0!==e.sharePointSite?e.sharePointSite.teamSiteDomain:void 0,teamSitePath:void 0!==e.sharePointSite?e.sharePointSite.teamSitePath:void 0,teamSiteId:void 0!==e.sharePointSite?e.sharePointSite.teamSiteId:void 0,mySitePath:void 0!==e.sharePointSite?e.sharePointSite.mySitePath:void 0,mySiteDomain:void 0!==e.sharePointSite?e.sharePointSite.mySiteDomain:void 0}}function gt(e){re.returnFocus(e)}function mt(e,n){H(),n=n||k(),re.tabs.navigateToTab(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function ht(e,n){H(c.content,c.sidePanel,c.settings,c.remove,c.task,c.stage,c.meetingStage),n=n||k(),re.navigateCrossDomain(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))}function Ct(e){H(),e=e||k(),re.backStack.navigateBack().then((function(){e(!0)})).catch((function(n){e(!1,n.message)}))}!function(e){function n(){return!!K.supports.location}e.getLocation=function(e,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");if(H(c.content,c.task),!W(h))throw{errorCode:r.OLD_PLATFORM};if(!e)throw{errorCode:r.INVALID_ARGUMENTS};if(!n())throw I;Le("location.getLocation",[e],t)},e.showLocation=function(e,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");if(H(c.content,c.task),!W(h))throw{errorCode:r.OLD_PLATFORM};if(!e)throw{errorCode:r.INVALID_ARGUMENTS};if(!n())throw I;Le("location.showLocation",[e],t)},e.isSupported=n}(Rn||(Rn={})),function(e){!function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(e.MeetingReactionType||(e.MeetingReactionType={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(e.CallType||(e.CallType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");H(c.sidePanel,c.meetingStage,c.settings,c.content),Le("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");H(c.sidePanel),Le("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");H(c.sidePanel),Le("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");H(c.sidePanel),Le("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");H(c.sidePanel),me("meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,n){if(!e)throw new Error("[share app content to stage] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("meeting.shareAppContentToStage",[n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");H(c.sidePanel,c.meetingStage),Le("meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");H(c.sidePanel,c.meetingStage),me("meeting.speakingStateChanged",e)},e.registerRaiseHandStateChangedHandler=function(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");H(c.sidePanel,c.meetingStage),me("meeting.raiseHandStateChanged",e)},e.registerMeetingReactionReceivedHandler=function(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");H(c.sidePanel,c.meetingStage),me("meeting.meetingReactionReceived",e)}}(On||(On={})),function(e){function n(){return!!K.supports.monetization}e.openPurchaseExperience=function(e,t){var o,i;return"function"==typeof e?(o=e,i=t):i=e,H(c.content),D((function(){return new Promise((function(e){if(!n())throw I;e(Me("monetization.openPurchaseExperience",i))}))}),o)},e.isSupported=n}(An||(An={})),function(e){function n(){return!!K.supports.calendar}e.openCalendarItem=function(e){return new Promise((function(t){if(H(c.content),!n())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");t(Oe("calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((function(t){if(H(c.content),!n())throw new Error("Not supported");K.isLegacyTeams?t(Oe("executeDeepLink",un(e.attendees,e.startTime,e.endTime,e.subject,e.content))):t(Oe("calendar.composeMeeting",e))}))},e.isSupported=n}(Mn||(Mn={})),function(e){function n(){return!!K.supports.mail}e.openMailItem=function(e){return new Promise((function(t){if(H(c.content),!n())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");t(Oe("mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((function(t){if(H(c.content),!n())throw new Error("Not supported");t(Oe("mail.composeMail",e))}))},e.isSupported=n,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(e.ComposeMailType||(e.ComposeMailType={}))}(Nn||(Nn={})),function(e){function n(e){return new Promise((function(n){if(!W("2.0.0"))throw{errorCode:r.OLD_PLATFORM};if(!kn(e))throw{errorCode:r.INVALID_ARGUMENTS};if(!t())throw I;n(Me("people.selectPeople",e))}))}function t(){return!!K.supports.people}e.selectPeople=function(e,t){var o,i,r;return H(c.content,c.task,c.settings),"function"==typeof e?(i=(o=[e,t])[0],r=o[1]):r=e,M(n,i,r)},e.isSupported=t}(Dn||(Dn={})),function(e){e.showProfile=function(e){return H(c.content),new Promise((function(n){var t=Gn(e),o=t[0],i=t[1];if(!o)throw{errorCode:r.INVALID_ARGUMENTS,message:i};n(Me("profile.showProfile",{modality:e.modality,persona:e.persona,triggerType:e.triggerType,targetRectangle:{x:e.targetElementBoundingRect.x,y:e.targetElementBoundingRect.y,width:e.targetElementBoundingRect.width,height:e.targetElementBoundingRect.height}}))}))},e.isSupported=function(){return!!K.supports.profile}}(Ln||(Ln={})),function(e){function n(){Le("video.videoFrameProcessed")}function t(e){Le("video.notifyError",[e])}function o(){return!!K.supports.video}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,i){if(H(c.sidePanel),!o())throw I;me("video.newVideoFrame",(function(o){void 0!==o&&e(o,n,t)})),Le("video.registerForVideoFrame",[i])},e.notifySelectedVideoEffectChanged=function(e,n){if(H(c.sidePanel),!o())throw I;Le("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){if(H(c.sidePanel),!o())throw I;me("video.effectParameterChange",e)},e.isSupported=o}(Un||(Un={})),function(e){function n(n){return new Promise((function(t){if(!a())throw I;t(Me(e.SharingAPIMessages.shareWebContent,n))}))}function t(e){if(!(e&&e.content&&e.content.length))throw{errorCode:r.INVALID_ARGUMENTS,message:"Shared content is missing"}}function o(e){if(e.content.some((function(e){return!e.type})))throw{errorCode:r.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"};if(e.content.some((function(n){return n.type!==e.content[0].type})))throw{errorCode:r.INVALID_ARGUMENTS,message:"Shared content must be of the same type"}}function i(e){if("URL"!==e.content[0].type)throw{errorCode:r.INVALID_ARGUMENTS,message:"Content type is unsupported"};if(e.content.some((function(e){return!e.url})))throw{errorCode:r.INVALID_ARGUMENTS,message:"URLs are required for URL content types"}}function a(){return!!K.supports.sharing}e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,r){try{t(e),o(e),i(e)}catch(e){return N((function(){return Promise.reject(e)}),r)}return H(c.content,c.sidePanel,c.task,c.stage,c.meetingStage),N(n,r,e)},e.isSupported=a}(Hn||(Hn={})),function(e){function n(){return!!K.supports.stageView}e.open=function(e){return new Promise((function(t){if(H(c.content),!n())throw I;if(!e)throw new Error("[stageView.open] Stage view params cannot be null");t(Me("stageView.open",e))}))},e.isSupported=n}(Wn||(Wn={})),function(e){function n(){return!!K.supports.webStorage}e.isWebStorageClearedOnUserLogOut=function(){return H(),y.hostClientType===s.desktop||n()},e.isSupported=n}(_n||(_n={})),function(e){var n;function t(){return!!K.supports.call}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(n=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){return new Promise((function(o){var i;if(H(c.content,c.task),!t())throw I;if(!K.isLegacyTeams)return Le("call.startCall",[e],o);o(Me("executeDeepLink",cn(e.targets,null===(i=e.requestedModalities)||void 0===i?void 0:i.includes(n.Video),e.source)))}))},e.isSupported=t}(xn||(xn={})),function(e){e.Messages=ie.Messages,e.FailedReason=ie.FailedReason,e.ExpectedFailureReason=ie.ExpectedFailureReason,e.notifyAppLoaded=function(){ie.notifyAppLoaded()},e.notifySuccess=function(){ie.notifySuccess()},e.notifyFailure=function(e){ie.notifyFailure(e)},e.notifyExpectedFailure=function(e){ie.notifyExpectedFailure(e)}}(Vn||(Vn={})),function(e){e.setValidityState=function(e){re.config.setValidityState(e)},e.getSettings=function(e){H(c.content,c.settings,c.remove,c.sidePanel),re.getConfig().then((function(n){e(n)}))},e.setSettings=function(e,n){H(c.content,c.settings,c.sidePanel),n=n||k(),re.config.setConfig(e).then((function(){n(!0)})).catch((function(e){n(!1,e.message)}))},e.registerOnSaveHandler=function(e){re.config.registerOnSaveHandler(e)},e.registerOnRemoveHandler=function(e){re.config.registerOnRemoveHandler(e)}}(Bn||(Bn={}));var wt,vt,yt,St,bt,Tt,It,Pt=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};!function(e){function n(e){return{url:e.url,size:{height:e.height?e.height:b.Small,width:e.width?e.width:b.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function t(e){return{url:e.url,size:{height:e.height?e.height:b.Small,width:e.width?e.width:b.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function o(e){return e.height=e.height?e.height:b.Small,e.width=e.width?e.width:b.Small,e}e.startTask=function(e,o){var i=o?function(e){return o(e.err,e.result)}:void 0;return void 0!==e.card||void 0===e.url?(H(c.content,c.sidePanel,c.meetingStage),Le("tasks.startTask",[e],o)):void 0!==e.completionBotId?ne.bot.open(t(e),i):ne.open(n(e),i),new zn},e.updateTask=function(e){(e=o(e)).width,e.height;var n=Pt(e,["width","height"]);if(Object.keys(n).length)throw new Error("resize requires a TaskInfo argument containing only width and height");ne.update.resize(e)},e.submitTask=function(e,n){ne.submit(e,n)},e.getUrlDialogInfoFromTaskInfo=n,e.getBotUrlDialogInfoFromTaskInfo=t,e.getDefaultSizeIfNotProvided=o}(wt||(wt={})),function(e){var n;function t(e,n){return{errorCode:e,message:n}}!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(n=e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(e){e.ClassMaterials="classMaterials"}(e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})),function(e){e.Readonly="readonly"}(e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})),function(e){e.Downloaded="Downloaded",e.Downloading="Downloading",e.Failed="Failed"}(e.FileDownloadStatus||(e.FileDownloadStatus={})),function(e){e.Download="DOWNLOAD",e.Upload="UPLOAD",e.Delete="DELETE"}(e.CloudStorageProviderFileAction||(e.CloudStorageProviderFileAction={})),e.getCloudStorageFolders=function(e,n){if(H(c.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");Le("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(H(c.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");Le("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(H(c.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");Le("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if(H(c.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");Le("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if(H(c.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");Le("files.openCloudStorageFile",[e,n,t])},e.getExternalProviders=function(e,n){if(void 0===e&&(e=!1),H(c.content),!n)throw new Error("[files.getExternalProviders] Callback cannot be null");Le("files.getExternalProviders",[e],n)},e.copyMoveFiles=function(e,n,t,o,i,r){if(void 0===i&&(i=!1),H(c.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!o)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] callback cannot be null");Le("files.copyMoveFiles",[e,n,t,o,i],r)},e.getFileDownloads=function(e){if(H(c.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");Le("files.getFileDownloads",[],e)},e.openDownloadFolder=function(e,n){if(void 0===e&&(e=void 0),H(c.content),!n)throw new Error("[files.openDownloadFolder] Callback cannot be null");Le("files.openDownloadFolder",[e],n)},e.addCloudStorageProvider=function(e){if(H(c.content),!e)throw t(r.INVALID_ARGUMENTS,"[files.addCloudStorageProvider] callback cannot be null");Le("files.addCloudStorageProvider",[],e)},e.removeCloudStorageProvider=function(e,n){if(H(c.content),!n)throw t(r.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] callback cannot be null");if(!e||!e.content)throw t(r.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");Le("files.removeCloudStorageProvider",[e],n)},e.addCloudStorageProviderFile=function(e,n){if(H(c.content),!n)throw t(r.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw t(r.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");Le("files.addCloudStorageProviderFile",[e],n)},e.renameCloudStorageProviderFile=function(e,n){if(H(c.content),!n)throw t(r.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw t(r.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");Le("files.renameCloudStorageProviderFile",[e],n)},e.deleteCloudStorageProviderFile=function(e,n){if(H(c.content),!n)throw t(r.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw t(r.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");Le("files.deleteCloudStorageProviderFile",[e],n)},e.downloadCloudStorageProviderFile=function(e,n){if(H(c.content),!n)throw t(r.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw t(r.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");Le("files.downloadCloudStorageProviderFile",[e],n)},e.uploadCloudStorageProviderFile=function(e,o){if(H(c.content),!o)throw t(r.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw t(r.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");if(!(e.content.destinationFolder&&(e.content.providerCode===n.SharePoint?e.content.destinationFolder.isFolder:e.content.destinationFolder.isSubdirectory)&&e.content.destinationFolder.objectUrl))throw t(r.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] Invalid destination folder details");Le("files.uploadCloudStorageProviderFile",[e],o)},e.registerCloudStorageProviderListChangeHandler=function(e){if(H(),!e)throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");me("files.cloudStorageProviderListChange",e)},e.registerCloudStorageProviderContentChangeHandler=function(e){if(H(),!e)throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");me("files.cloudStorageProviderContentChange",e)}}(vt||(vt={})),function(e){function n(){return!!K.supports.meetingRoom}e.getPairedMeetingRoomInfo=function(){return new Promise((function(e){if(H(),!n())throw I;e(Me("meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((function(t){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(H(),!n())throw I;t(Me("meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(H(),!n())throw I;me("meetingRoom.meetingRoomCapabilitiesUpdate",(function(n){H(),e(n)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(H(),!n())throw I;me("meetingRoom.meetingRoomStatesUpdate",(function(n){H(),e(n)}))},e.isSupported=n}(yt||(yt={})),function(e){function n(){return!!K.supports.notifications}e.showNotification=function(e){if(H(c.content),!n())throw I;Le("notifications.showNotification",[e])},e.isSupported=n}(St||(St={})),function(e){function n(){return!!K.supports.remoteCamera}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(H(c.sidePanel),!n())throw I;Le("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(H(c.sidePanel),!n())throw I;Le("remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(H(c.sidePanel),!n())throw I;Le("remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(H(c.sidePanel),!n())throw I;Le("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(H(c.sidePanel),!n())throw I;me("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(H(c.sidePanel),!n())throw I;me("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(H(c.sidePanel),!n())throw I;me("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(H(c.sidePanel),!n())throw I;me("remoteCamera.sessionStatusChange",e)},e.isSupported=n}(bt||(bt={})),function(e){function n(){return!!K.supports.appEntity}e.selectAppEntity=function(e,t,o,i){if(H(c.content),!n())throw I;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!i)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");Le("appEntity.selectAppEntity",[e,t,o],i)},e.isSupported=n}(Tt||(Tt={})),function(e){function n(){return!!K.supports.teams}!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,t){if(H(c.content),!n())throw I;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!t)throw new Error("[teams.getTeamChannels] Callback cannot be null");Le("teams.getTeamChannels",[e],t)},e.refreshSiteUrl=function(e,t){if(H(),!n())throw I;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!t)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");Le("teams.refreshSiteUrl",[e],t)},e.isSupported=n,function(e){function n(){return!!K.supports.teams&&!!K.supports.teams.fullTrust}!function(e){function n(){return!!K.supports.teams&&(!!K.supports.teams.fullTrust&&!!K.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((function(t){if(H(),!n())throw I;if((y.hostClientType===s.android||y.hostClientType===s.teamsRoomsAndroid||y.hostClientType===s.teamsPhones||y.hostClientType===s.teamsDisplays)&&!W("2.0.1")){var o={errorCode:r.OLD_PLATFORM};throw new Error(JSON.stringify(o))}t(Re("getUserJoinedTeams",e))}))},e.isSupported=n}(e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((function(t){if(H(),!n())throw I;t(Re("getConfigSetting",e))}))},e.isSupported=n}(e.fullTrust||(e.fullTrust={}))}(It||(It={}))})(),o})()}));
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