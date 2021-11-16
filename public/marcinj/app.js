/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(self,(function(){return(()=>{var e={22:(e,n,t)=>{var o=t(481),i=t(426),r=i;r.v1=o,r.v4=i,e.exports=r},725:e=>{for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,i=n;return[i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],"-",i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]],i[e[o++]]].join("")}},157:e=>{var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},481:(e,n,t)=>{var o,i,r=t(157),a=t(725),s=0,u=0;e.exports=function(e,n,t){var c=n&&t||0,l=n||[],d=(e=e||{}).node||o,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var p=r();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=i=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:u+1,h=m-s+(g-u)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||m>s)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,u=g,i=f;var v=(1e4*(268435455&(m+=122192928e5))+g)%4294967296;l[c++]=v>>>24&255,l[c++]=v>>>16&255,l[c++]=v>>>8&255,l[c++]=255&v;var C=m/4294967296*1e4&268435455;l[c++]=C>>>8&255,l[c++]=255&C,l[c++]=C>>>24&15|16,l[c++]=C>>>16&255,l[c++]=f>>>8|128,l[c++]=255&f;for(var w=0;w<6;++w)l[c+w]=d[w];return n||a(l)}},426:(e,n,t)=>{var o=t(157),i=t(725);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[r+s]=a[s];return n||i(a)}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var o={};return(()=>{"use strict";t.r(o),t.d(o,{ChannelType:()=>x,ChildAppWindow:()=>ze,DialogDimension:()=>N,ErrorCode:()=>fe,FileOpenPreference:()=>de,FrameContexts:()=>O,HostClientType:()=>P,NotificationTypes:()=>se,ParentAppWindow:()=>Ge,TaskModuleDimension:()=>q,TeamType:()=>R,UserSettingTypes:()=>ce,UserTeamRole:()=>A,ViewerActionTypes:()=>ue,app:()=>z,appEntity:()=>wn,appInitialization:()=>dn,appInstallDialog:()=>pe,authentication:()=>V,bot:()=>ae,calendar:()=>rn,call:()=>ln,chat:()=>le,core:()=>G,dialog:()=>Be,enablePrintCapability:()=>bn,executeDeepLink:()=>_n,files:()=>mn,getContext:()=>Pn,getMruTabInstances:()=>Un,getTabInstances:()=>Wn,initialize:()=>Tn,initializeWithFrameContext:()=>Vn,legacy:()=>gn,location:()=>nn,logs:()=>b,mail:()=>an,media:()=>en,meeting:()=>tn,meetingRoom:()=>hn,menus:()=>I,monetization:()=>on,navigateBack:()=>qn,navigateCrossDomain:()=>jn,navigateToTab:()=>Gn,notifications:()=>vn,pages:()=>j,people:()=>sn,print:()=>In,registerAppButtonClickHandler:()=>Rn,registerAppButtonHoverEnterHandler:()=>An,registerAppButtonHoverLeaveHandler:()=>Nn,registerBackButtonHandler:()=>Mn,registerBeforeUnloadHandler:()=>Fn,registerCustomHandler:()=>H,registerEnterSettingsHandler:()=>Dn,registerFocusEnterHandler:()=>Ln,registerFullScreenHandler:()=>On,registerOnLoadHandler:()=>kn,registerOnThemeChangeHandler:()=>En,registerUserSettingsChangeHandler:()=>_,remoteCamera:()=>Cn,returnFocus:()=>zn,sendCustomEvent:()=>U,sendCustomMessage:()=>W,setFrameContext:()=>xn,settings:()=>fn,shareDeepLink:()=>Hn,sharing:()=>cn,tasks:()=>pn,teams:()=>yn,teamsCore:()=>B,uploadCustomApp:()=>D,video:()=>un});var e="2.0.0-beta.1",n="2.0.1",i="1.9.0",r="1.8.0",a=["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","teams.live.com","devspaces.skype.com","ssauth.skype.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","msft.spoppe.com","*.sharepoint.com","*.sharepoint-df.com","*.sharepointonline.com","outlook.office.com","outlook-sdf.office.com","*.teams.microsoft.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.office.com"],s=/^https:\/\//,u=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}(),c=t(22);function l(e,n){if("*."===e.substring(0,2)){var t=e.substring(1);if(n.length>t.length&&n.split(".").length===t.split(".").length&&n.substring(n.length-t.length)===t)return!0}else if(e===n)return!0;return!1}function d(e){if("https:"!==e.protocol)return!1;var n=e.host;if(a.some((function(e){return l(e,n)})))return!0;for(var t=0,o=u.additionalValidOrigins;t<o.length;t++){var i=o[t];if(l("https://"===i.substring(0,8)?i.substring(8):i,n))return!0}return!1}function f(e){return function(n,t){if(!n)throw new Error(e||t)}}function p(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),o=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!o.every(i))return NaN;for(;t.length<o.length;)t.push("0");for(;o.length<t.length;)o.push("0");for(var r=0;r<t.length;++r)if(Number(t[r])!=Number(o[r]))return Number(t[r])>Number(o[r])?1:-1;return 0}function m(){return c.v4()}function g(e){return Object.keys(e).forEach((function(n){"object"==typeof e[n]&&g(e[n])})),Object.freeze(e)}function h(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(void 0,e)})).catch((function(e){n&&n(e)})),i}function v(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(){n&&n(void 0,!0)})).catch((function(e){n&&n(e,!1)})),i}function C(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(){n&&n(null)})).catch((function(e){n&&n(e)})),i}function w(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var i=e.apply(void 0,t);return i.then((function(e){n&&n(null,e)})).catch((function(e){n&&n(e,null)})),i}function y(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!u.initializeCalled)throw new Error("The library has not yet been initialized");if(u.frameContext&&e&&e.length>0){for(var t=!1,o=0;o<e.length;o++)if(e[o]===u.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+u.frameContext+"' context")}}function S(e){void 0===e&&(e=n);var t=p(u.clientSupportedSDKVersion,e);return!isNaN(t)&&t>=0}function T(e){var n=u.additionalValidOrigins.concat(e.filter((function(e){return"string"==typeof e&&s.test(e)}))),t={};n=n.filter((function(e){return!t[e]&&(t[e]=!0,!0)})),u.additionalValidOrigins=n}var b,I,P,E,O,R,A,N,M={apiVersion:1,supports:{appInstallDialog:void 0,bot:void 0,calendar:void 0,call:void 0,chat:void 0,dialog:void 0,location:void 0,logs:void 0,mail:void 0,media:void 0,meeting:void 0,meetingRoom:void 0,menus:void 0,monetization:void 0,notifications:void 0,pages:{appButton:void 0,tabs:void 0,config:void 0,backStack:void 0,fullTrust:void 0},people:void 0,remoteCamera:void 0,sharing:void 0,teams:{fullTrust:void 0},teamsCore:void 0,video:void 0}},k={apiVersion:1,supports:{appInstallDialog:{},appEntity:{},bot:{},calendar:{},call:{},chat:{},dialog:{},files:{},location:{},logs:{},mail:{},media:{},meeting:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{appButton:{},tabs:{},config:{},backStack:{},fullTrust:{}},people:{},remoteCamera:{},sharing:{},teams:{fullTrust:{}},teamsCore:{},video:{}}};function F(e){M=g(e)}function L(){I.initialize()}function D(e,n){y(),Pe("uploadCustomApp",[e],n||f())}function W(e,n,t){y(),Pe(e,n,t)}function U(e,n){if(y(),!ge.childWindow)throw new Error("The child window has not yet been initialized or is not present");He(e,n)}function H(e,n){var t=this;y(),Y(e,(function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return n.apply(t,e)}))}function _(e,n){y(),Y("userSettingsChange",n,!0,[e])}!function(e){e.registerGetLogHandler=function(e){y(),e?Y("log.request",(function(){Pe("log.receive",[e()])})):$("log.request")},e.isSupported=function(){return!!M.supports.logs}}(b||(b={})),function(e){var n,t,o,i=function(){return function(){this.enabled=!0,this.selected=!1}}();function r(e){o&&o(e)||(y(),Pe("viewConfigItemPress",[e]))}function a(e){n&&n(e)||(y(),Pe("handleNavBarMenuItemPress",[e]))}function s(e){t&&t(e)||(y(),Pe("handleActionMenuItemPress",[e]))}e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){Y("navBarMenuItemPress",a,!1),Y("actionMenuItemPress",s,!1),Y("setModuleView",r,!1)},e.setUpViews=function(e,n){y(),o=n,Pe("setUpViews",[e])},e.setNavBarMenu=function(e,t){y(),n=t,Pe("setNavBarMenu",[e])},e.showActionMenu=function(e,n){y(),t=n,Pe("showActionMenu",[e])},e.isSupported=function(){return!!M.supports.menus}}(I||(I={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(P||(P={})),function(e){e.office="Office",e.outlook="Outlook",e.orange="Orange",e.teams="Teams"}(E||(E={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(O||(O={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(R||(R={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(A||(A={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(N||(N={}));var x,V,B,z,G,j,q=N;function Z(e){return{app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:E.teams,clientType:e.hostClientType?e.hostClientType:P.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:u.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:e.userObjectId,displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath?{url:e.teamSiteUrl,domain:e.teamSiteDomain,path:e.teamSitePath,id:e.teamSiteId}:void 0}}!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(x||(x={})),function(e){var n,t,o;function i(e){return new Promise((function(t,o){if(u.hostClientType===P.desktop||u.hostClientType===P.android||u.hostClientType===P.ios||u.hostClientType===P.rigel||u.hostClientType===P.teamsRoomsWindows||u.hostClientType===P.teamsRoomsAndroid||u.hostClientType===P.teamsPhones||u.hostClientType===P.teamsDisplays){var i=document.createElement("a");i.href=e.url,t(be("authentication.authenticate",[i.href,e.width,e.height]).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)})))}else n={success:t,fail:o},c(e)}))}function r(e){return new Promise((function(n){n(be("authentication.getAuthToken",[e.resources,e.claims,e.silent]))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function a(){return new Promise((function(e){e(be("authentication.getUser"))})).then((function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}function s(){l();try{ge.childWindow&&ge.childWindow.close()}finally{ge.childWindow=null,ge.childOrigin=null}}function c(e){s();var n=e.width||600,t=e.height||400;n=Math.min(n,ge.currentWindow.outerWidth-400),t=Math.min(t,ge.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=e.url;var i=void 0!==ge.currentWindow.screenLeft?ge.currentWindow.screenLeft:ge.currentWindow.screenX,r=void 0!==ge.currentWindow.screenTop?ge.currentWindow.screenTop:ge.currentWindow.screenY;i+=ge.currentWindow.outerWidth/2-n/2,r+=ge.currentWindow.outerHeight/2-t/2,ge.childWindow=ge.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+i+", width="+n+", height="+t),ge.childWindow?d():p("FailedToOpenWindow")}function l(){t&&(clearInterval(t),t=0),$("initialize"),$("navigateCrossDomain")}function d(){l(),t=ge.currentWindow.setInterval((function(){if(!ge.childWindow||ge.childWindow.closed)p("CancelledByUser");else{var e=ge.childOrigin;try{ge.childOrigin="*",He("ping")}finally{ge.childOrigin=e}}}),100),Y("initialize",(function(){return[O.authentication,u.hostClientType]})),Y("navigateCrossDomain",(function(){return!1}))}function f(e){try{n&&n.success(e)}finally{n=null,s()}}function p(e){try{n&&n.fail(new Error(e))}finally{n=null,s()}}function m(e,n,t){if(e){var o=document.createElement("a");o.href=decodeURIComponent(e),o.host&&o.host!==window.location.host&&"outlook.office.com"===o.host&&o.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(o.href=g(o.href,"result",t)),ge.currentWindow.location.assign(g(o.href,"authSuccess",""))),n&&"reason"===n&&(t&&(o.href=g(o.href,"reason",t)),ge.currentWindow.location.assign(g(o.href,"authFailure",""))))}}function g(e,n,t){var o=e.indexOf("#"),i=-1===o?"#":e.substr(o);return i=i+"&"+n+(""!==t?"="+t:""),(e=-1===o?e:e.substr(0,o))+i}e.initialize=function(){Y("authentication.authenticate.success",f,!1),Y("authentication.authenticate.failure",p,!1)},e.registerAuthenticationHandlers=function(e){o=e},e.authenticate=function(e){var n=void 0!==e,t=n?e:o;if(!t)throw new Error("No parameters are provided for authentication");return y(O.content,O.sidePanel,O.settings,O.remove,O.task,O.stage,O.meetingStage),i(t).then((function(e){try{return t&&t.successCallback?(t.successCallback(e),""):e}finally{n||(o=null)}})).catch((function(e){try{if(t&&t.failureCallback)return t.failureCallback(e.message),"";throw e}finally{n||(o=null)}}))},e.getAuthToken=function(e){return y(),r(e).then((function(n){return e&&e.successCallback?(e.successCallback(n),""):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),"";throw n}))},e.getUser=function(e){return y(),a().then((function(n){return e&&e.successCallback?(e.successCallback(n),null):n})).catch((function(n){if(e&&e.failureCallback)return e.failureCallback(n.message),null;throw n}))},e.notifySuccess=function(e,n){m(n,"result",e),y(O.authentication),Pe("authentication.authenticate.success",[e]),We(ge.parentWindow,(function(){return setTimeout((function(){return ge.currentWindow.close()}),200)}))},e.notifyFailure=function(e,n){m(n,"reason",e),y(O.authentication),Pe("authentication.authenticate.failure",[e]),We(ge.parentWindow,(function(){return setTimeout((function(){return ge.currentWindow.close()}),200)}))}}(V||(V={})),function(e){function n(){window.print()}e.enablePrintCapability=function(){u.printCapabilityEnabled||(u.printCapabilityEnabled=!0,y(),document.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())})))},e.print=n,e.registerOnLoadHandler=function(e){y(),te(e)},e.registerBeforeUnloadHandler=function(e){y(),ie(e)},e.registerFocusEnterHandler=function(e){y(),Y("focusEnter",e)},e.isSupported=function(){return!!M.supports.teamsCore}}(B||(B={})),function(t){function o(e){y(),ee(e)}t.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(t.FailedReason||(t.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(t.ExpectedFailureReason||(t.ExpectedFailureReason={})),t.isInitialized=function(){return u.initializeCalled},t.getFrameContext=function(){return u.frameContext},t.initialize=function(e){return new Promise((function(t){u.initializeCalled||(u.initializeCalled=!0,J(),u.initializePromise=ve(e).then((function(e){var t=e.context,o=e.clientType,i=e.runtimeConfig,r=e.clientSupportedSDKVersion,a=void 0===r?n:r;u.frameContext=t,u.hostClientType=o,u.clientSupportedSDKVersion=a;try{var s=JSON.parse(i);i&&F(s)}catch(e){if(!(e instanceof SyntaxError))throw e;try{isNaN(p(i,n))||(u.clientSupportedSDKVersion=i);s=JSON.parse(a);a&&F(s)}catch(e){if(!(e instanceof SyntaxError))throw e;F(k)}}u.initializeCompleted=!0})),V.initialize(),j.config.initialize(),L()),Array.isArray(e)&&T(e),t(u.initializePromise)}))},t._initialize=function(e){ge.currentWindow=e},t._uninitialize=function(){u.initializeCalled&&(u.frameContext&&(o(null),j.backStack.registerBackButtonHandler(null),j.registerFullScreenHandler(null),B.registerBeforeUnloadHandler(null),B.registerOnLoadHandler(null),b.registerGetLogHandler(null)),u.frameContext===O.settings&&j.config.registerOnSaveHandler(null),u.frameContext===O.remove&&j.config.registerOnRemoveHandler(null),u.initializeCalled=!1,u.initializeCompleted=!1,u.initializePromise=null,u.additionalValidOrigins=[],u.frameContext=null,u.hostClientType=null,u.isFramelessWindow=!1,Ce())},t.getContext=function(){return new Promise((function(e){y(),e(we("getContext"))})).then((function(e){return Z(e)}))},t.notifyAppLoaded=function(){y(),Pe(t.Messages.AppLoaded,[e])},t.notifySuccess=function(){y(),Pe(t.Messages.Success,[e])},t.notifyFailure=function(e){y(),Pe(t.Messages.Failure,[e.reason,e.message])},t.notifyExpectedFailure=function(e){y(),Pe(t.Messages.ExpectedFailure,[e.reason,e.message])},t.registerOnThemeChangeHandler=o}(z||(z={})),function(e){e.shareDeepLink=function(e){y(O.content,O.sidePanel,O.meetingStage),Pe("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},e.executeDeepLink=function(e){return new Promise((function(n){y(O.content,O.sidePanel,O.settings,O.task,O.stage,O.meetingStage),n(ye("executeDeepLink",e))}))}}(G||(G={})),function(e){function n(e){y(O.content),Pe("setFrameContext",[e])}e.returnFocus=function(e){y(O.content),Pe("returnFocus",[e])},e.setCurrentFrame=n,e.initializeWithFrameContext=function(e,t,o){z.initialize(o).then((function(){return t&&t()})),n(e)},e.navigateCrossDomain=function(e){return new Promise((function(n){y(O.content,O.sidePanel,O.settings,O.remove,O.task,O.stage,O.meetingStage);n(Se("navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",e))}))},e.registerFullScreenHandler=function(e){y(),Y("fullScreenChange",e)},e.isSupported=function(){return!!M.supports.pages},function(e){e.navigateToTab=function(e){return new Promise((function(n){y();n(Se("navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",e))}))},e.getTabInstances=function(e){return new Promise((function(n){y(),n(we("getTabInstances",e))}))},e.getMruTabInstances=function(e){return new Promise((function(n){y(),n(we("getMruTabInstances",e))}))},e.isSupported=function(){return!!M.supports.pages&&!!M.supports.pages.tabs}}(e.tabs||(e.tabs={})),function(e){var n,t;function o(e){var t=new i(e);n?n(t):t.notifySuccess()}e.initialize=function(){Y("settings.save",o,!1),Y("settings.remove",r,!1)},e.setValidityState=function(e){y(O.settings,O.remove),Pe("settings.setValidityState",[e])},e.getConfig=function(){return new Promise((function(e){y(O.content,O.settings,O.remove,O.sidePanel),e(we("settings.getSettings"))}))},e.setConfig=function(e){return new Promise((function(n){y(O.content,O.settings,O.sidePanel),n(ye("settings.setSettings",e))}))},e.registerOnSaveHandler=function(e){y(O.settings),n=e,e&&Pe("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){y(O.remove,O.settings),t=e,e&&Pe("registerHandler",["remove"])},e.registerChangeConfigHandler=function(e){y(O.content),Y("changeSettings",e)};var i=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),Pe("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),Pe("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function r(){var e=new a;t?t(e):e.notifySuccess()}var a=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),Pe("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),Pe("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}();e.isSupported=function(){return!!M.supports.pages&&!!M.supports.pages.config}}(e.config||(e.config={})),function(e){var n;function t(){return new Promise((function(e){y();e(Se("navigateBack","Back navigation is not supported in the current client or context."))}))}function o(){n&&n()||t()}e._initialize=function(){Y("backButtonPress",o,!1)},e.navigateBack=t,e.registerBackButtonHandler=function(e){n=e,e&&Pe("registerHandler",["backButton"])},e.isSupported=function(){return!!M.supports.pages&&!!M.supports.pages.backStack}}(e.backStack||(e.backStack={})),function(e){e.enterFullscreen=function(){y(O.content),Pe("enterFullscreen",[])},e.exitFullscreen=function(){y(O.content),Pe("exitFullscreen",[])},e.isSupported=function(){return!!M.supports.pages&&!!M.supports.pages.fullTrust}}(e.fullTrust||(e.fullTrust={})),function(e){e.onClick=function(e){y(O.content),Y("appButtonClick",e)},e.onHoverEnter=function(e){y(O.content),Y("appButtonHoverEnter",e)},e.onHoverLeave=function(e){y(O.content),Y("appButtonHoverLeave",e)},e.isSupported=function(){return!!M.supports.pages&&!!M.supports.pages.appButton}}(e.appButton||(e.appButton={}))}(j||(j={}));var K=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},Q=function(){function e(){}return e.handlers={},e}();function J(){Q.handlers.themeChange=ne,Q.handlers.load=oe,Q.handlers.beforeUnload=re,j.backStack._initialize()}function X(e,n){var t=Q.handlers[e];return t?[!0,t.apply(this,n)]:[!1,void 0]}function Y(e,n,t,o){void 0===t&&(t=!0),void 0===o&&(o=[]),n?(Q.handlers[e]=n,t&&Pe("registerHandler",K([e],o,!0))):delete Q.handlers[e]}function $(e){delete Q.handlers[e]}function ee(e){Q.themeChangeHandler=e,e&&Pe("registerHandler",["themeChange"])}function ne(e){Q.themeChangeHandler&&Q.themeChangeHandler(e),ge.childWindow&&He("themeChange",[e])}function te(e){Q.loadHandler=e,e&&Pe("registerHandler",["load"])}function oe(e){Q.loadHandler&&Q.loadHandler(e),ge.childWindow&&He("load",[e])}function ie(e){Q.beforeUnloadHandler=e,e&&Pe("registerHandler",["beforeUnload"])}function re(){var e=function(){Pe("readyToUnload",[])};Q.beforeUnloadHandler&&Q.beforeUnloadHandler(e)||e()}var ae,se,ue,ce,le,de,fe,pe,me=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},ge=function(){return function(){}}(),he=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e.promiseCallbacks={},e}();function ve(n){he.messageListener=function(e){return Oe(e)},ge.currentWindow=ge.currentWindow||window,ge.parentWindow=ge.currentWindow.parent!==ge.currentWindow.self?ge.currentWindow.parent:ge.currentWindow.opener,(ge.parentWindow||n)&&ge.currentWindow.addEventListener("message",he.messageListener,!1),ge.parentWindow||(u.isFramelessWindow=!0,window.onNativeMessage=Ne);try{return ge.parentOrigin="*",be("initialize",[e]).then((function(e){return{context:e[0],clientType:e[1],runtimeConfig:e[2],clientSupportedSDKVersion:e[3]}}))}finally{ge.parentOrigin=null}}function Ce(){ge.currentWindow.removeEventListener("message",he.messageListener,!1),ge.parentWindow=null,ge.parentOrigin=null,ge.childWindow=null,ge.childOrigin=null,he.parentMessageQueue=[],he.childMessageQueue=[],he.nextMessageId=0,he.callbacks={}}function we(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return be(e,n).then((function(e){return e[0]}))}function ye(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return be(e,n).then((function(e){var n=e[0],t=e[1];if(!n)throw new Error(t)}))}function Se(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return be(e,t).then((function(e){var t=e[0],o=e[1];if(!t)throw new Error(o||n)}))}function Te(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return be(e,n).then((function(e){var n=e[0],t=e[1];if(n)throw n;return t}))}function be(e,n){return void 0===n&&(n=void 0),new Promise((function(t){t(Ie(Ee(e,n).id))}))}function Ie(e){return new Promise((function(n){he.promiseCallbacks[e]=n}))}function Pe(e,n,t){var o;n instanceof Function?t=n:n instanceof Array&&(o=n);var i=Ee(e,o);t&&(he.callbacks[i.id]=t)}function Ee(e,n){var t=ge.parentWindow,o=_e(e,n);if(u.isFramelessWindow)ge.currentWindow&&ge.currentWindow.nativeInterface&&ge.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(o));else{var i=Le(t);t&&i?t.postMessage(o,i):Fe(t).push(o)}return o}function Oe(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;Re(n,t)&&(Ae(n,t),n===ge.parentWindow?Ne(e):n===ge.childWindow&&ke(e))}}function Re(e,n){return(!ge.currentWindow||e!==ge.currentWindow)&&(!!(ge.currentWindow&&ge.currentWindow.location&&n&&n===ge.currentWindow.location.origin)||d(new URL(n)))}function Ae(e,n){u.isFramelessWindow||ge.parentWindow&&!ge.parentWindow.closed&&e!==ge.parentWindow?ge.childWindow&&!ge.childWindow.closed&&e!==ge.childWindow||(ge.childWindow=e,ge.childOrigin=n):(ge.parentWindow=e,ge.parentOrigin=n),ge.parentWindow&&ge.parentWindow.closed&&(ge.parentWindow=null,ge.parentOrigin=null),ge.childWindow&&ge.childWindow.closed&&(ge.childWindow=null,ge.childOrigin=null),De(ge.parentWindow),De(ge.childWindow)}function Ne(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=he.callbacks[n.id];t&&(t.apply(null,me(me([],n.args,!0),[n.isPartialResponse],!1)),Me(e)||delete he.callbacks[n.id]);var o=he.promiseCallbacks[n.id];o&&(o(n.args),delete he.promiseCallbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){X((n=e.data).func,n.args)}}function Me(e){return!0===e.data.isPartialResponse}function ke(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=X(n.func,n.args),o=t[0],i=t[1];o&&void 0!==i?Ue(n.id,Array.isArray(i)?i:[i]):Pe(n.func,n.args,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(ge.childWindow){var o=e.pop();Ue(n.id,e,o)}}))}}function Fe(e){return e===ge.parentWindow?he.parentMessageQueue:e===ge.childWindow?he.childMessageQueue:[]}function Le(e){return e===ge.parentWindow?ge.parentOrigin:e===ge.childWindow?ge.childOrigin:null}function De(e){for(var n=Le(e),t=Fe(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function We(e,n){var t=ge.currentWindow.setInterval((function(){0===Fe(e).length&&(clearInterval(t),n())}),100)}function Ue(e,n,t){var o=ge.childWindow,i=xe(e,n,t),r=Le(o);o&&r&&o.postMessage(i,r)}function He(e,n){var t=ge.childWindow,o=Ve(e,n),i=Le(t);t&&i?t.postMessage(o,i):Fe(t).push(o)}function _e(e,n){return{id:he.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function xe(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function Ve(e,n){return{func:e,args:n||[]}}!function(e){e.sendQuery=function(e,n,t){y(),Pe("bot.executeQuery",[e],(function(e,o){e?n(o):t(o)}))},e.getSupportedCommands=function(e,n){y(),Pe("bot.getSupportedCommands",(function(t,o){t?e(o):n(o)}))},e.authenticate=function(e,n,t){y(),Pe("bot.authenticate",[e],(function(e,o){e?n(o):t(o)}))},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={})),e.isSupported=function(){return!!M.supports.bot}}(ae||(ae={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(se||(se={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(ue||(ue={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(ce||(ce={})),function(e){e.openConversation=function(e){return new Promise((function(n){y(O.content);var t=ye("conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&Y("startConversation",(function(n,t,o,i){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),e.onCloseConversation&&Y("closeConversation",(function(n,t,o,i){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:o,entityId:i})})),n(t)}))},e.closeConversation=function(){y(O.content),Pe("conversations.closeConversation"),$("startConversation"),$("closeConversation")},e.getChatMembers=function(){return new Promise((function(e){y(),e(we("getChatMembers"))}))},e.isSupported=function(){return!!M.supports.chat}}(le||(le={})),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(de||(de={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(fe||(fe={})),function(e){function n(){return!!M.supports.appInstallDialog}e.openAppInstallDialog=function(e){return new Promise((function(t){if(y(O.content,O.sidePanel,O.settings,O.task,O.stage,O.meetingStage),!n())throw"Not supported";Pe("appInstallDialog.openAppInstallDialog",[e]),t()}))},e.isSupported=n}(pe||(pe={}));var Be,ze=function(){function e(){}return e.prototype.postMessage=function(e,n){return y(),this.postMessageHelper(e).then((function(){n&&n(!0)})).catch((function(e){if(!n)throw e;n(!1,e.message)}))},e.prototype.postMessageHelper=function(e){return new Promise((function(n){n(ye("messageForChild",e))}))},e.prototype.addEventListener=function(e,n){"message"===e&&Y("messageForParent",n)},e}(),Ge=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(e,n){return y(O.task),this.postMessageHelper(e).then((function(){n&&n(!0)})).catch((function(e){if(!n)throw e;n(!1,e.message)}))},e.prototype.postMessageHelper=function(e){return new Promise((function(n){n(ye("messageForParent",e))}))},e.prototype.addEventListener=function(e,n){"message"===e&&Y("messageForChild",n)},e}(),je=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};function qe(e,n){if(null==e||null==n||e.length<=0)return null;var t,o=1;return e.sort((function(e,n){return e.sequence>n.sequence?1:-1})),e.forEach((function(e){e.sequence==o&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),o++)})),t}function Ze(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),o=new Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);var r=new Uint8Array(o),a=new Blob([r],{type:n});return{sequence:e.chunkSequence,file:a}}function Ke(e){return!(null==e||e.maxMediaCount>10)}function Qe(e){return!(!e||e.mediaType!=en.MediaType.VideoAndImage&&!e.videoAndImageProps)}function Je(e,n,t){return null!=e&&null!=n&&n==en.FileFormat.ID&&null!=t}function Xe(e){return!(null==e||e.length<=0||e.length>10)}function Ye(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}function $e(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){e.open=function(e,n){return y(O.content,O.sidePanel,O.meetingStage),Pe("tasks.startTask",[e],n),new ze},e.resize=function(e){y(O.task),e.width,e.height;var n=je(e,["width","height"]);if(Object.keys(n).length)throw new Error("resize requires a dialogInfo argument containing only width and height");Pe("tasks.updateTask",[e])},e.submit=function(e,n){y(O.task),Pe("tasks.completeTask",[e,Array.isArray(n)?n:[n]])},e.isSupported=function(){return!!M.supports.dialog}}(Be||(Be={}));var en,nn,tn,on,rn,an,sn,un,cn,ln,dn,fn,pn,mn,gn,hn,vn,Cn,wn,yn,Sn=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();function Tn(e,n){z.initialize(n).then((function(){e&&e()}))}function bn(){B.enablePrintCapability()}function In(){B.print()}function Pn(e){y(),z.getContext().then((function(n){e&&e(Bn(n))}))}function En(e){z.registerOnThemeChangeHandler(e)}function On(e){j.registerFullScreenHandler(e)}function Rn(e){j.appButton.onClick(e)}function An(e){j.appButton.onHoverEnter(e)}function Nn(e){j.appButton.onHoverLeave(e)}function Mn(e){j.backStack.registerBackButtonHandler(e)}function kn(e){B.registerOnLoadHandler(e)}function Fn(e){B.registerBeforeUnloadHandler(e)}function Ln(e){B.registerFocusEnterHandler(e)}function Dn(e){j.config.registerChangeConfigHandler(e)}function Wn(e,n){y(),j.tabs.getTabInstances(n).then((function(n){e(n)}))}function Un(e,n){y(),j.tabs.getMruTabInstances(n).then((function(n){e(n)}))}function Hn(e){G.shareDeepLink(e)}function _n(e,n){y(O.content,O.sidePanel,O.settings,O.task,O.stage,O.meetingStage),G.executeDeepLink(e).then((function(){n&&n(!0)})).catch((function(e){n&&n(!1,e.message)}))}function xn(e){j.setCurrentFrame(e)}function Vn(e,n,t){j.initializeWithFrameContext(e,n,t)}function Bn(e){return{locale:e.app.locale,appSessionId:e.app.sessionId,theme:e.app.theme,appIconPosition:e.app.iconPositionVertical,osLocaleInfo:e.app.osLocaleInfo,parentMessageId:e.app.parentMessageId,userClickTime:e.app.userClickTime,userFileOpenPreference:e.app.userFileOpenPreference,appLaunchId:e.app.appLaunchId,hostClientType:e.app.host.clientType,sessionId:e.app.host.sessionId,ringId:e.app.host.ringId,entityId:e.page.id,frameContext:e.page.frameContext,subEntityId:e.page.subPageId,isFullScreen:e.page.isFullScreen,isMultiWindow:e.page.isMultiWindow,sourceOrigin:e.page.sourceOrigin,userObjectId:void 0!==e.user?e.user.id:void 0,isCallingAllowed:void 0!==e.user?e.user.isCallingAllowed:void 0,isPSTNCallingAllowed:void 0!==e.user?e.user.isPSTNCallingAllowed:void 0,userLicenseType:void 0!==e.user?e.user.licenseType:void 0,loginHint:void 0!==e.user?e.user.loginHint:void 0,userPrincipalName:void 0!==e.user?e.user.userPrincipalName:void 0,tid:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.id:void 0,tenantSKU:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.teamsSku:void 0,channelId:void 0!==e.channel?e.channel.id:void 0,channelName:void 0!==e.channel?e.channel.displayName:void 0,channelRelativeUrl:void 0!==e.channel?e.channel.relativeUrl:void 0,channelType:void 0!==e.channel?e.channel.membershipType:void 0,defaultOneNoteSectionId:void 0!==e.channel?e.channel.defaultOneNoteSectionId:void 0,hostTeamGroupId:void 0!==e.channel?e.channel.ownerGroupId:void 0,hostTeamTenantId:void 0!==e.channel?e.channel.ownerTenantId:void 0,chatId:void 0!==e.chat?e.chat.id:void 0,meetingId:void 0!==e.meeting?e.meeting.id:void 0,sharepoint:e.sharepoint,teamId:void 0!==e.team?e.team.internalId:void 0,teamName:void 0!==e.team?e.team.displayName:void 0,teamType:void 0!==e.team?e.team.type:void 0,groupId:void 0!==e.team?e.team.groupId:void 0,teamTemplateId:void 0!==e.team?e.team.templateId:void 0,isTeamArchived:void 0!==e.team?e.team.isArchived:void 0,userTeamRole:void 0!==e.team?e.team.userRole:void 0,teamSiteUrl:void 0!==e.sharePointSite?e.sharePointSite.url:void 0,teamSiteDomain:void 0!==e.sharePointSite?e.sharePointSite.domain:void 0,teamSitePath:void 0!==e.sharePointSite?e.sharePointSite.path:void 0,teamSiteId:void 0!==e.sharePointSite?e.sharePointSite.id:void 0}}function zn(e){j.returnFocus(e)}function Gn(e,n){y(),j.tabs.navigateToTab(e).then((function(){n&&n(!0)})).catch((function(e){n&&n(!1,e.message)}))}function jn(e,n){y(O.content,O.sidePanel,O.settings,O.remove,O.task,O.stage,O.meetingStage),j.navigateCrossDomain(e).then((function(){n&&n(!0)})).catch((function(e){n&&n(!1,e.message)}))}function qn(e){y(),j.backStack.navigateBack().then((function(){e&&e(!0)})).catch((function(n){e&&e(!1,n.message)}))}!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){return y(O.content,O.task),h((function(){return new Promise((function(e){if(!u.isFramelessWindow)throw{errorCode:fe.NOT_SUPPORTED_ON_PLATFORM};if(!S("1.7.0"))throw{errorCode:fe.OLD_PLATFORM};e(Te("captureImage"))}))}),e)};var t=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return Sn(n,e),n.prototype.getMedia=function(e){var n=this;y(O.content,O.task);return h((function(){return new Promise((function(e){if(!S(r))throw{errorCode:fe.OLD_PLATFORM};if(!Je(n.mimeType,n.format,n.content))throw{errorCode:fe.INVALID_ARGUMENTS};S("2.0.0")?e(n.getMediaViaCallback()):e(n.getMediaViaHandler())}))}),e)},n.prototype.getMediaViaCallback=function(){var e=this;return new Promise((function(n,t){var o={mediaMimeType:e.mimeType,assembleAttachment:[]};Pe("getMedia",[e.content],(function(e){if(e&&e.error)t(e.error);else if(e&&e.mediaChunk)if(e.mediaChunk.chunkSequence<=0){var i=qe(o.assembleAttachment,o.mediaMimeType);n(i)}else{var r=Ze(e.mediaChunk,o.mediaMimeType);o.assembleAttachment.push(r)}else t({errorCode:fe.INTERNAL_ERROR,message:"data received is null"})}))}))},n.prototype.getMediaViaHandler=function(){var e=this;return new Promise((function(n,t){var o=m(),i={mediaMimeType:e.mimeType,assembleAttachment:[]},r=[o,e.content];e.content&&Pe("getMedia",r),Y("getMedia"+o,(function(e){try{var r=JSON.parse(e);if(r.error)t(r.error),$("getMedia"+o);else if(r&&r.mediaChunk)if(r.mediaChunk.chunkSequence<=0){var a=qe(i.assembleAttachment,i.mediaMimeType);n(a),$("getMedia"+o)}else{var s=Ze(r.mediaChunk,i.mediaMimeType);i.assembleAttachment.push(s)}else t({errorCode:fe.INTERNAL_ERROR,message:"data received is null"}),$("getMedia"+o)}catch(n){t({errorCode:fe.INTERNAL_ERROR,message:"Error parsing the response: "+e})}}))}))},n}(n);e.Media=t,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){return y(O.content,O.task),h((function(){return new Promise((function(n){if(!S(r))throw{errorCode:fe.OLD_PLATFORM};if(Qe(e)){if(u.hostClientType!=P.android&&u.hostClientType!=P.ios)throw{errorCode:fe.NOT_SUPPORTED_ON_PLATFORM};if(!S("2.0.2"))throw{errorCode:fe.OLD_PLATFORM}}if(!Ke(e))throw{errorCode:fe.INVALID_ARGUMENTS};n(be("selectMedia",[e]))})).then((function(e){var n=e[0],o=e[1];if(!o)throw n;for(var i=[],r=0,a=o;r<a.length;r++){var s=a[r];i.push(new t(s))}return i}))}),n)},e.viewImages=function(e,n){return y(O.content,O.task),C((function(){return new Promise((function(n){if(!S(r))throw{errorCode:fe.OLD_PLATFORM};if(!Xe(e))throw{errorCode:fe.INVALID_ARGUMENTS};n(Te("viewImages",e))}))}),n)},e.scanBarCode=function(e,n){var t,o;return void 0===e?o=n:"object"==typeof e?o=e:(t=e,o=n),y(O.content,O.task),h((function(){return new Promise((function(e){if(u.hostClientType===P.desktop||u.hostClientType===P.web||u.hostClientType===P.rigel||u.hostClientType===P.teamsRoomsWindows||u.hostClientType===P.teamsRoomsAndroid||u.hostClientType===P.teamsPhones||u.hostClientType===P.teamsDisplays)throw{errorCode:fe.NOT_SUPPORTED_ON_PLATFORM};if(!S("1.9.0"))throw{errorCode:fe.OLD_PLATFORM};if(!Ye(o))throw{errorCode:fe.INVALID_ARGUMENTS};e(Te("media.scanBarCode",o))}))}),t)},e.isSupported=function(){return!!M.supports.media}}(en||(en={})),function(e){function n(e){return new Promise((function(n){if(!S(i))throw{errorCode:fe.OLD_PLATFORM};if(!e)throw{errorCode:fe.INVALID_ARGUMENTS};n(Te("location.getLocation",e))}))}function t(e){return new Promise((function(n){if(!S(i))throw{errorCode:fe.OLD_PLATFORM};if(!e)throw{errorCode:fe.INVALID_ARGUMENTS};n(Te("location.showLocation",e))}))}e.getLocation=function(e,t){return y(O.content,O.task),h(n,t,e)},e.showLocation=function(e,n){return y(O.content,O.task),v(t,n,e)},e.showLocationHelper=t,e.isSupported=function(){return!!M.supports.location}}(nn||(nn={})),function(e){function n(){return new Promise((function(e){e(Te("getIncomingClientAudioState"))}))}function t(){return new Promise((function(e){e(Te("toggleIncomingClientAudio"))}))}function o(){return new Promise((function(e){e(Te("meeting.getMeetingDetails"))}))}function i(){return new Promise((function(e){e(Te("meeting.getAuthenticationTokenForAnonymousUser"))}))}function r(){return new Promise((function(e){e(Te("meeting.getLiveStreamState"))}))}function a(e,n){return new Promise((function(t){t(Te("meeting.requestStartLiveStreaming",e,n))}))}function s(){return new Promise((function(e){e(Te("meeting.requestStopLiveStreaming"))}))}function u(e){return new Promise((function(n){n(Te("meeting.shareAppContentToStage",e))}))}function c(){return new Promise((function(e){e(Te("meeting.getAppContentStageSharingCapabilities"))}))}function l(){return new Promise((function(e){e(Te("meeting.stopSharingAppContentToStage"))}))}function d(){return new Promise((function(e){e(Te("meeting.getAppContentStageSharingState"))}))}!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){return y(O.sidePanel,O.meetingStage),w(n,e)},e.toggleIncomingClientAudio=function(e){return y(O.sidePanel,O.meetingStage),w(t,e)},e.getMeetingDetails=function(e){return y(O.sidePanel,O.meetingStage,O.settings,O.content),w(o,e)},e.getAuthenticationTokenForAnonymousUser=function(e){return y(O.sidePanel,O.meetingStage),w(i,e)},e.isSupported=function(){return!!M.supports.meeting},e.getLiveStreamState=function(e){return y(),w(r,e)},e.requestStartLiveStreaming=function(e,n,t){var o,i,r,s,u;return y(O.sidePanel),"function"==typeof e?(u=(o=[e,n,t])[0],r=o[1],s=o[2]):"string"==typeof e&&(r=(i=[e,n])[0],s=i[1]),C(a,u,r,s)},e.requestStopLiveStreaming=function(e){return y(O.sidePanel),C(s,e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");y(O.sidePanel),Y("meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,n){var t,o,i;return y(O.sidePanel),"function"==typeof e?(i=(t=[e,n])[0],o=t[1]):o=e,w(u,i,o)},e.getAppContentStageSharingCapabilities=function(e){return y(O.sidePanel),w(c,e)},e.stopSharingAppContentToStage=function(e){return y(O.sidePanel),w(l,e)},e.getAppContentStageSharingState=function(e){return y(O.sidePanel),w(d,e)}}(tn||(tn={})),function(e){e.openPurchaseExperience=function(e,n){if(!e)throw new Error("[open purchase experience] Callback cannot be null");y(O.content),Pe("monetization.openPurchaseExperience",[n],e)},e.isSupported=function(){return!!M.supports.monetization}}(on||(on={})),function(e){function n(){return!!M.supports.calendar}e.openCalendarItem=function(e){return new Promise((function(t){if(y(O.content),!n())throw"Not Supported";t(ye("calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((function(t){if(y(O.content),!n())throw"Not Supported";t(ye("calendar.composeMeeting",e))}))},e.isSupported=n}(rn||(rn={})),function(e){function n(){return!!M.supports.mail}e.openMailItem=function(e){return new Promise((function(t){if(y(O.content),!n())throw"Not Supported";t(ye("mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((function(t){if(y(O.content),!n())throw"Not Supported";t(ye("mail.composeMail",e))}))},e.isSupported=n,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(e.ComposeMailType||(e.ComposeMailType={}))}(an||(an={})),function(e){function n(e){return new Promise((function(n){if(!S("2.0.0"))throw{errorCode:fe.OLD_PLATFORM};if(!$e(e))throw{errorCode:fe.INVALID_ARGUMENTS};n(Te("people.selectPeople",e))}))}e.selectPeople=function(e,t){var o,i,r;return y(O.content,O.task,O.settings),"function"==typeof e?(i=(o=[e,t])[0],r=o[1]):r=e,h(n,i,r)},e.isSupported=function(){return!!M.supports.people}}(sn||(sn={})),function(e){function n(){Pe("video.videoFrameProcessed")}function t(e){Pe("video.notifyError",[e])}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,o){y(O.sidePanel),Y("video.newVideoFrame",(function(o){void 0!==o&&e(o,n,t)})),Pe("video.registerForVideoFrame",[o])},e.notifySelectedVideoEffectChanged=function(e,n){y(O.sidePanel),Pe("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){y(O.sidePanel),Y("video.effectParameterChange",e)},e.isSupported=function(){return!!M.supports.video}}(un||(un={})),function(e){function n(e,n){return!!(e&&e.content&&e.content.length)||(n&&n({errorCode:fe.INVALID_ARGUMENTS,message:"Shared content is missing"}),!1)}function t(e,n){return e.content.some((function(e){return!e.type}))?(n&&n({errorCode:fe.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"}),!1):!e.content.some((function(n){return n.type!==e.content[0].type}))||(n&&n({errorCode:fe.INVALID_ARGUMENTS,message:"Shared content must be of the same type"}),!1)}function o(e,n){return"URL"!==e.content[0].type?(n&&n({errorCode:fe.INVALID_ARGUMENTS,message:"Content type is unsupported"}),!1):!e.content.some((function(e){return!e.url}))||(n&&n({errorCode:fe.INVALID_ARGUMENTS,message:"URLs are required for URL content types"}),!1)}e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(i,r){n(i,r)&&t(i,r)&&o(i,r)&&(y(O.content,O.sidePanel,O.task,O.stage,O.meetingStage),Pe(e.SharingAPIMessages.shareWebContent,[i],r))},e.isSupported=function(){return!!M.supports.sharing}}(cn||(cn={})),function(e){function n(){return!!M.supports.call}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(e.CallModalities||(e.CallModalities={})),e.startCall=function(e){return new Promise((function(t){if(y(O.content),!n())throw"Not supported";return Pe("call.startCall",[e],t)}))},e.isSupported=n}(ln||(ln={})),function(e){e.Messages=z.Messages,e.FailedReason=z.FailedReason,e.ExpectedFailureReason=z.ExpectedFailureReason,e.notifyAppLoaded=function(){z.notifyAppLoaded()},e.notifySuccess=function(){z.notifySuccess()},e.notifyFailure=function(e){z.notifyFailure(e)},e.notifyExpectedFailure=function(e){z.notifyExpectedFailure(e)}}(dn||(dn={})),function(e){e.setValidityState=function(e){j.config.setValidityState(e)},e.getSettings=function(e){y(O.content,O.settings,O.remove,O.sidePanel),j.config.getConfig().then((function(n){e(n)}))},e.setSettings=function(e,n){y(O.content,O.settings,O.sidePanel),j.config.setConfig(e).then((function(){n&&n(!0)})).catch((function(e){n&&n(!1,e.message)}))},e.registerOnSaveHandler=function(e){j.config.registerOnSaveHandler(e)},e.registerOnRemoveHandler=function(e){j.config.registerOnRemoveHandler(e)}}(fn||(fn={})),function(e){function n(e){var n=e.height&&"number"!=typeof e.height?t(e.height):e.height,o=e.width&&"number"!=typeof e.width?t(e.width):e.width;return{url:e.url,card:e.card,height:n,width:o,title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function t(e){return e===q.Large?q.Large:e===q.Medium?q.Medium:q.Small}e.startTask=function(e,t){return Be.open(n(e),t)},e.updateTask=function(e){Be.resize(e)},e.submitTask=function(e,n){Be.submit(e,n)}}(pn||(pn={})),function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e){return new Promise((function(n){if(y(O.content),!e||0==e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");n(Te("files.getCloudStorageFolders",e))}))},e.addCloudStorageFolder=function(e){return new Promise((function(n){if(y(O.content),!e||0==e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");n(be("files.addCloudStorageFolder",[e]))})).then((function(e){var n=e[0],t=e[1],o=e[2];if(n)throw n;return[t,o]}))},e.deleteCloudStorageFolder=function(e,n){return new Promise((function(t){if(y(O.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");t(Te("files.deleteCloudStorageFolder",e,n))}))},e.getCloudStorageFolderContents=function(e,n){return new Promise((function(t){if(y(O.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");t(Te("files.getCloudStorageFolderContents",e,n))}))},e.openCloudStorageFile=function(e,n,t){if(y(O.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");Pe("files.openCloudStorageFile",[e,n,t])},e.openFilePreview=function(e){y(O.content),Pe("openFilePreview",[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId])},e.isSupported=function(){return!!M.supports.files}}(mn||(mn={})),function(e){!function(e){e.getUserJoinedTeams=function(e){return new Promise((function(n){if(y(),(u.hostClientType===P.android||u.hostClientType===P.teamsRoomsAndroid||u.hostClientType===P.teamsPhones||u.hostClientType===P.teamsDisplays)&&!S("2.0.1")){var t={errorCode:fe.OLD_PLATFORM};throw new Error(JSON.stringify(t))}n(we("getUserJoinedTeams",e))}))},e.getConfigSetting=function(e){return new Promise((function(n){y(),n(we("getConfigSetting",e))}))},e.isSupported=function(){return!!M.supports.teams&&!!M.supports.teams.fullTrust}}(e.fullTrust||(e.fullTrust={}))}(gn||(gn={})),function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(){return new Promise((function(e){y(),e(Te("meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((function(n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");y(),n(Te("meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");y(),Y("meetingRoom.meetingRoomCapabilitiesUpdate",(function(n){y(),e(n)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");y(),Y("meetingRoom.meetingRoomStatesUpdate",(function(n){y(),e(n)}))},e.isSupported=function(){return!!M.supports.meetingRoom}}(hn||(hn={})),function(e){e.showNotification=function(e){y(O.content),Pe("notifications.showNotification",[e])},e.isSupported=function(){return!!M.supports.notifications}}(vn||(vn={})),function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");y(O.sidePanel),Pe("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");y(O.sidePanel),Pe("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");y(O.sidePanel),Pe("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");y(O.sidePanel),Pe("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");y(O.sidePanel),Y("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");y(O.sidePanel),Y("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");y(O.sidePanel),Y("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");y(O.sidePanel),Y("remoteCamera.sessionStatusChange",e)},e.isSupported=function(){return!!M.supports.remoteCamera}}(Cn||(Cn={})),function(e){e.selectAppEntity=function(e,n,t,o){if(y(O.content),!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!o)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");Pe("appEntity.selectAppEntity",[e,n,t],o)},e.isSupported=function(){return!!M.supports.appEntity}}(wn||(wn={})),function(e){!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,n){if(y(O.content),!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!n)throw new Error("[teams.getTeamChannels] Callback cannot be null");Pe("teams.getTeamChannels",[e],n)},e.refreshSiteUrl=function(e,n){if(y(),!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!n)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");Pe("teams.refreshSiteUrl",[e],n)},e.isSupported=function(){return!!M.supports.teams}}(yn||(yn={}))})(),o})()}));
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
            const defaultInputValue = config.inputs[i].defaultValue
                ? config.inputs[i].defaultValue
                : null;
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
            downloadLink = document.createElement("a");
            downloadLink.setAttribute("download", "DownloadViaButton.csv");
            downloadLink.setAttribute("id", "hiddenDownloadLink");
            document.body.appendChild(downloadLink);
        }
        downloadLink.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
        downloadLink.href = URL.createObjectURL(data);
        downloadLink.style.display = "none";
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
    var appLocation = "unidentified location...";
    const perfData = window.performance;
    if (context.meetingId) {
        appLocation = "Meeting";
    }
    else if (context.chatId) {
        appLocation = "Chat";
    }
    else if (context.teamId && context.channelId) {
        appLocation = `${context.channelName} channel in ${context.teamName}`;
    }
    else {
        appLocation = "Teams App";
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
            name: "registerEnterSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerEnterSettingsHandler(function () {
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
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
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
            name: "getAuthToken",
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
                MicrosoftTeams_min.files.openFilePreview(filePreviewParameters);
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
                MicrosoftTeams_min.chat.getChatMembers().then(output);
            },
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.legacy.fullTrust.getUserJoinedTeams().then(output);
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
            hasOutput: true,
            action: function (output) {
                totalStates++;
                window.history.pushState({ some: "state", id: totalStates }, "tab state" + totalStates, "/testTab");
                output("total States: " + totalStates);
                window.addEventListener("popstate", function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " +
                            event.state.id);
                    }
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
                    MicrosoftTeams_min.chat.openConversation(openConversationRequest);
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
                MicrosoftTeams_min.chat.closeConversation();
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
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":1,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
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
                        message +=
                            "[format: " +
                                media.format +
                                ", size: " +
                                media.size +
                                ", mimeType: " +
                                media.mimeType +
                                ", content: " +
                                media.content +
                                ", preview: " +
                                preview +
                                "],";
                    }
                    output(message);
                });
            },
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "inputParams",
                    defaultValue: '{"mediaType":1,"maxMediaCount":1,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
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
            },
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
            name: "meeting.getMeetingDetails",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getMeetingDetails((err, getMeetingDetails) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(getMeetingDetails);
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
            // @ts-ignore
            action: (frameContext) => {
                MicrosoftTeams_min.setFrameContext(frameContext);
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
    window.addEventListener("load", downloadHandler);
})();

})();

/******/ })()
;
//# sourceMappingURL=app.js.map