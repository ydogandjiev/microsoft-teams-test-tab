/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),o=t(6),i=t(3),a=function(){return function(){}}();n.Communication=a;var s=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e}();function l(e,n,t){var r;n instanceof Function?t=n:n instanceof Array&&(r=n);var i=a.parentWindow,l=T(e,r);if(o.GlobalVars.isFramelessWindow)a.currentWindow&&a.currentWindow.nativeInterface&&a.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(l));else{var d=C(i);i&&d?i.postMessage(l,d):p(i).push(l)}t&&(s.callbacks[l.id]=t)}function d(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;u(n,t)&&(c(n,t),n===a.parentWindow?m(e):n===a.childWindow&&g(e))}}function u(e,n){return(!a.currentWindow||e!==a.currentWindow)&&(!!(a.currentWindow&&a.currentWindow.location&&n&&n===a.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||o.GlobalVars.additionalValidOriginsRegexp&&o.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function c(e,n){o.GlobalVars.isFramelessWindow||a.parentWindow&&!a.parentWindow.closed&&e!==a.parentWindow?a.childWindow&&!a.childWindow.closed&&e!==a.childWindow||(a.childWindow=e,a.childOrigin=n):(a.parentWindow=e,a.parentOrigin=n),a.parentWindow&&a.parentWindow.closed&&(a.parentWindow=null,a.parentOrigin=null),a.childWindow&&a.childWindow.closed&&(a.childWindow=null,a.childOrigin=null),h(a.parentWindow),h(a.childWindow)}function m(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=s.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),f(e)||delete s.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;i.callHandler(n.func,n.args)}}function f(e){return!0===e.data.isPartialResponse}function g(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=i.callHandler(n.func,n.args),r=t[0],o=t[1];r&&void 0!==o?v(n.id,Array.isArray(o)?o:[o]):l(n.func,n.args,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(a.childWindow){var r=e.pop();v(n.id,e,r)}})}}function p(e){return e===a.parentWindow?s.parentMessageQueue:e===a.childWindow?s.childMessageQueue:[]}function C(e){return e===a.parentWindow?a.parentOrigin:e===a.childWindow?a.childOrigin:null}function h(e){for(var n=C(e),t=p(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function v(e,n,t){var r=a.childWindow,o=b(e,n,t),i=C(r);r&&i&&r.postMessage(o,i)}function T(e,n){return{id:s.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function b(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function y(e,n){return{func:e,args:n||[]}}n.initializeCommunication=function(e,n){s.messageListener=function(e){return d(e)},a.currentWindow=a.currentWindow||window,a.parentWindow=a.currentWindow.parent!==a.currentWindow.self?a.currentWindow.parent:a.currentWindow.opener,(a.parentWindow||n)&&a.currentWindow.addEventListener("message",s.messageListener,!1),a.parentWindow||(o.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=m);try{a.parentOrigin="*",l("initialize",[r.version],e)}finally{a.parentOrigin=null}},n.uninitializeCommunication=function(){a.currentWindow.removeEventListener("message",s.messageListener,!1),a.parentWindow=null,a.parentOrigin=null,a.childWindow=null,a.childOrigin=null,s.parentMessageQueue=[],s.childMessageQueue=[],s.nextMessageId=0,s.callbacks={}},n.sendMessageToParent=l,n.waitForMessageQueue=function(e,n){var t=a.currentWindow.setInterval(function(){0===p(e).length&&(clearInterval(t),n())},100)},n.sendMessageEventToChild=function(e,n){var t=a.childWindow,r=y(e,n),o=C(t);t&&o?t.postMessage(r,o):p(t).push(r)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),o=t(6),i=t(5);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!o.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(o.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,r=0;r<e.length;r++)if(e[r]===o.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+o.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=r.defaultSDKVersionForCompatCheck);var n=i.compareSDKVersions(o.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processAdditionalValidOrigins=function(e){var n=o.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),o.GlobalVars.additionalValidOrigins=n,o.GlobalVars.additionalValidOrigins.length>0?o.GlobalVars.additionalValidOriginsRegexp=i.generateRegExpFromUrls(o.GlobalVars.additionalValidOrigins):o.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),o=t(0),i=function(){function e(){}return e.handlers={},e}();function a(e){i.themeChangeHandler&&i.themeChangeHandler(e),o.Communication.childWindow&&o.sendMessageEventToChild("themeChange",[e])}function s(){i.backButtonPressHandler&&i.backButtonPressHandler()||r.navigateBack()}function l(e){i.focusEnterHandler&&i.focusEnterHandler(e)}function d(e){i.loadHandler&&i.loadHandler(e),o.Communication.childWindow&&o.sendMessageEventToChild("load",[e])}function u(){var e=function(){o.sendMessageToParent("readyToUnload",[])};i.beforeUnloadHandler&&i.beforeUnloadHandler(e)||e()}n.initializeHandlers=function(){i.handlers.themeChange=a,i.handlers.backButtonPress=s,i.handlers.load=d,i.handlers.beforeUnload=u,i.handlers.focusEnter=l},n.callHandler=function(e,n){var t=i.handlers[e];return t?[!0,t.apply(this,n)]:[!1,void 0]},n.registerHandler=function(e,n,t,r){void 0===t&&(t=!0),void 0===r&&(r=[]),n?(i.handlers[e]=n,t&&o.sendMessageToParent("registerHandler",[e].concat(r))):delete i.handlers[e]},n.removeHandler=function(e){delete i.handlers[e]},n.registerOnThemeChangeHandler=function(e){i.themeChangeHandler=e,e&&o.sendMessageToParent("registerHandler",["themeChange"])},n.handleThemeChange=a,n.registerBackButtonHandler=function(e){i.backButtonPressHandler=e,e&&o.sendMessageToParent("registerHandler",["backButton"])},n.registerFocusEnterHandler=function(e){i.focusEnterHandler=e,e&&o.sendMessageToParent("registerHandler",["focusEnter"])},n.registerOnLoadHandler=function(e){i.loadHandler=e,e&&o.sendMessageToParent("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){i.beforeUnloadHandler=e,e&&o.sendMessageToParent("registerHandler",["beforeUnload"])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(5);n.version="1.11.0-beta.4",n.defaultSDKVersionForCompatCheck="2.0.1",n.videoAndImageMediaAPISupportVersion="2.0.2",n.getUserJoinedTeamsSupportedAndroidClientVersion="2.0.1",n.locationAPIsRequiredVersion="1.9.0",n.peoplePickerRequiredVersion="2.0.0",n.captureImageMobileSupportVersion="1.7.0",n.mediaAPISupportVersion="1.8.0",n.getMediaCallbackSupportVersion="2.0.0",n.scanBarCodeAPIMobileSupportVersion="1.9.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.live.com","https://local.teams.live.com:8080","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com"],n.validOriginRegExp=r.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(22);function o(e){for(var n="^",t=e.split("."),r=0;r<t.length;r++)n+=(r>0?"[.]":"")+t[r].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+o(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),r=n.split(".");function o(e){return/^\d+$/.test(e)}if(!t.every(o)||!r.every(o))return NaN;for(;t.length<r.length;)t.push("0");for(;r.length<t.length;)r.push("0");for(var i=0;i<t.length;++i)if(Number(t[i])!=Number(r[i]))return Number(t[i])>Number(r[i])?1:-1;return 0},n.generateGUID=function(){return r.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(25);n.appInitialization=r.appInitialization;var o=t(11);n.authentication=o.authentication;var i=t(2);n.FrameContexts=i.FrameContexts,n.HostClientType=i.HostClientType,n.TaskModuleDimension=i.TaskModuleDimension,n.TeamType=i.TeamType,n.UserTeamRole=i.UserTeamRole,n.ChannelType=i.ChannelType;var a=t(7);n.ErrorCode=a.ErrorCode,n.FileOpenPreference=a.FileOpenPreference;var s=t(26);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerFocusEnterHandler=s.registerFocusEnterHandler,n.registerEnterSettingsHandler=s.registerEnterSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(27);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var d=t(12);n.settings=d.settings;var u=t(28);n.tasks=u.tasks;var c=t(16);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var m=t(17);n.media=m.media;var f=t(29);n.location=f.location;var g=t(30);n.meeting=g.meeting;var p=t(31);n.monetization=p.monetization;var C=t(32);n.people=C.people;var h=t(33);n.video=h.video;var v=t(34);n.sharing=v.sharing},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(6),i=t(2),a=t(0),s=t(3);!function(e){var n,t;function l(){u();try{a.Communication.childWindow&&a.Communication.childWindow.close()}finally{a.Communication.childWindow=null,a.Communication.childOrigin=null}}function d(e){n=e,l();var t=n.width||600,r=n.height||400;t=Math.min(t,a.Communication.currentWindow.outerWidth-400),r=Math.min(r,a.Communication.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=n.url;var i=void 0!==a.Communication.currentWindow.screenLeft?a.Communication.currentWindow.screenLeft:a.Communication.currentWindow.screenX,s=void 0!==a.Communication.currentWindow.screenTop?a.Communication.currentWindow.screenTop:a.Communication.currentWindow.screenY;i+=a.Communication.currentWindow.outerWidth/2-t/2,s+=a.Communication.currentWindow.outerHeight/2-r/2,a.Communication.childWindow=a.Communication.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+s+", left="+i+", width="+t+", height="+r),a.Communication.childWindow?c():f("FailedToOpenWindow")}function u(){t&&(clearInterval(t),t=0),s.removeHandler("initialize"),s.removeHandler("navigateCrossDomain")}function c(){u(),t=a.Communication.currentWindow.setInterval(function(){if(!a.Communication.childWindow||a.Communication.childWindow.closed)f("CancelledByUser");else{var e=a.Communication.childOrigin;try{a.Communication.childOrigin="*",a.sendMessageEventToChild("ping")}finally{a.Communication.childOrigin=e}}},100),s.registerHandler("initialize",function(){return[i.FrameContexts.authentication,o.GlobalVars.hostClientType]}),s.registerHandler("navigateCrossDomain",function(){return!1})}function m(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,l()}}function f(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,l()}}function g(e,n,t){if(e){var r=document.createElement("a");r.href=decodeURIComponent(e),r.host&&r.host!==window.location.host&&"outlook.office.com"===r.host&&r.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(r.href=p(r.href,"result",t)),a.Communication.currentWindow.location.assign(p(r.href,"authSuccess",""))),n&&"reason"===n&&(t&&(r.href=p(r.href,"reason",t)),a.Communication.currentWindow.location.assign(p(r.href,"authFailure",""))))}}function p(e,n,t){var r=e.indexOf("#"),o=-1===r?"#":e.substr(r);return o=o+"&"+n+(""!==t?"="+t:""),(e=-1===r?e:e.substr(0,r))+o}e.initialize=function(){s.registerHandler("authentication.authenticate.success",m,!1),s.registerHandler("authentication.authenticate.failure",f,!1)},e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.task,i.FrameContexts.stage,i.FrameContexts.meetingStage),o.GlobalVars.hostClientType===i.HostClientType.desktop||o.GlobalVars.hostClientType===i.HostClientType.android||o.GlobalVars.hostClientType===i.HostClientType.ios||o.GlobalVars.hostClientType===i.HostClientType.rigel||o.GlobalVars.hostClientType===i.HostClientType.teamsRoomsWindows||o.GlobalVars.hostClientType===i.HostClientType.teamsRoomsAndroid||o.GlobalVars.hostClientType===i.HostClientType.teamsPhones||o.GlobalVars.hostClientType===i.HostClientType.teamsDisplays){var s=document.createElement("a");s.href=t.url,a.sendMessageToParent("authentication.authenticate",[s.href,t.width,t.height],function(e,n){e?t.successCallback(n):t.failureCallback(n)})}else d(t)},e.getAuthToken=function(e){r.ensureInitialized(),a.sendMessageToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent],function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.getUser=function(e){r.ensureInitialized(),a.sendMessageToParent("authentication.getUser",function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.notifySuccess=function(e,n){g(n,"result",e),r.ensureInitialized(i.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){g(n,"reason",e),r.ensureInitialized(i.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=t(5),a=t(0),s=t(3);!function(e){var n,t;function l(e){var t=new d(e);n?n(t):t.notifySuccess()}e.initialize=function(){s.registerHandler("settings.save",l,!1),s.registerHandler("settings.remove",u,!1)},e.setValidityState=function(e){r.ensureInitialized(o.FrameContexts.settings,o.FrameContexts.remove),a.sendMessageToParent("settings.setValidityState",[e])},e.getSettings=function(e){r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.sidePanel),a.sendMessageToParent("settings.getSettings",e)},e.setSettings=function(e,n){r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings,o.FrameContexts.sidePanel),a.sendMessageToParent("settings.setSettings",[e],n||i.getGenericOnCompleteHandler())},e.registerOnSaveHandler=function(e){r.ensureInitialized(o.FrameContexts.settings),n=e,e&&a.sendMessageToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){r.ensureInitialized(o.FrameContexts.remove,o.FrameContexts.settings),t=e,e&&a.sendMessageToParent("registerHandler",["remove"])};var d=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function u(){var e=new c;t?t(e):e.notifySuccess()}var c=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(3);!function(e){e.registerGetLogHandler=function(e){r.ensureInitialized(),e?i.registerHandler("log.request",function(){var n=e();o.sendMessageToParent("log.receive",[n])}):i.removeHandler("log.request")}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=t(5),a=t(0),s=t(15),l=t(3),d=t(6),u=t(7),c=t(4);n.initializePrivateApis=function(){s.menus.initialize()},n.getUserJoinedTeams=function(e,n){if(r.ensureInitialized(),(d.GlobalVars.hostClientType===o.HostClientType.android||d.GlobalVars.hostClientType===o.HostClientType.teamsRoomsAndroid||d.GlobalVars.hostClientType===o.HostClientType.teamsPhones||d.GlobalVars.hostClientType===o.HostClientType.teamsDisplays)&&!r.isAPISupportedByPlatform(c.getUserJoinedTeamsSupportedAndroidClientVersion)){var t={errorCode:u.ErrorCode.OLD_PLATFORM};throw new Error(JSON.stringify(t))}a.sendMessageToParent("getUserJoinedTeams",[n],e)},n.enterFullscreen=function(){r.ensureInitialized(o.FrameContexts.content),a.sendMessageToParent("enterFullscreen",[])},n.exitFullscreen=function(){r.ensureInitialized(o.FrameContexts.content),a.sendMessageToParent("exitFullscreen",[])},n.openFilePreview=function(e){r.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference];a.sendMessageToParent("openFilePreview",n)},n.showNotification=function(e){r.ensureInitialized(o.FrameContexts.content);var n=[e.message,e.notificationType];a.sendMessageToParent("showNotification",n)},n.uploadCustomApp=function(e,n){r.ensureInitialized(),a.sendMessageToParent("uploadCustomApp",[e],n||i.getGenericOnCompleteHandler())},n.sendCustomMessage=function(e,n,t){r.ensureInitialized(),a.sendMessageToParent(e,n,t)},n.sendCustomEvent=function(e,n){if(r.ensureInitialized(),!a.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;r.ensureInitialized(),l.registerHandler(e,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.apply(t,e)})},n.getChatMembers=function(e){r.ensureInitialized(),a.sendMessageToParent("getChatMembers",e)},n.getConfigSetting=function(e,n){r.ensureInitialized(),a.sendMessageToParent("getConfigSetting",[n],e)},n.registerUserSettingsChangeHandler=function(e,n){r.ensureInitialized(),l.registerHandler("userSettingsChange",n,!0,[e])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(3);!function(e){var n,t,a,s=function(){return function(){this.enabled=!0,this.selected=!1}}();function l(e){a&&a(e)||(r.ensureInitialized(),o.sendMessageToParent("viewConfigItemPress",[e]))}function d(e){n&&n(e)||(r.ensureInitialized(),o.sendMessageToParent("handleNavBarMenuItemPress",[e]))}function u(e){t&&t(e)||(r.ensureInitialized(),o.sendMessageToParent("handleActionMenuItemPress",[e]))}e.MenuItem=s,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){i.registerHandler("navBarMenuItemPress",d,!1),i.registerHandler("actionMenuItemPress",u,!1),i.registerHandler("setModuleView",l,!1)},e.setUpViews=function(e,n){r.ensureInitialized(),a=n,o.sendMessageToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){r.ensureInitialized(),n=t,o.sendMessageToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){r.ensureInitialized(),t=n,o.sendMessageToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=t(5),a=t(0),s=t(3),l=function(){function e(){}return e.prototype.postMessage=function(e,n){r.ensureInitialized(),a.sendMessageToParent("messageForChild",[e],n||i.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForParent",n)},e}();n.ChildAppWindow=l;var d=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){r.ensureInitialized(o.FrameContexts.task),a.sendMessageToParent("messageForParent",[e],n||i.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForChild",n)},e}();n.ParentAppWindow=d},function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=t(6),i=t(7),a=t(1),s=t(2),l=t(5),d=t(18),u=t(0),c=t(3),m=t(4);!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),o.GlobalVars.isFramelessWindow?a.isAPISupportedByPlatform(m.captureImageMobileSupportVersion)?u.sendMessageToParent("captureImage",e):e({errorCode:i.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:i.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var t=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return r(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(m.mediaAPISupportVersion))?d.validateGetMediaInputs(this.mimeType,this.format,this.content)?a.isAPISupportedByPlatform(m.getMediaCallbackSupportVersion)?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:i.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:i.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content];u.sendMessageToParent("getMedia",t,function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var r=d.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,r)}else{var o=d.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(o)}else e({errorCode:i.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)})},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},r=[n,this.content];this.content&&e&&u.sendMessageToParent("getMedia",r),c.registerHandler("getMedia"+n,function(r){if(e){var o=JSON.parse(r);if(o.error)e(o.error,null),c.removeHandler("getMedia"+n);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){var a=d.createFile(t.assembleAttachment,t.mediaMimeType);e(o.error,a),c.removeHandler("getMedia"+n)}else{var s=d.decodeAttachment(o.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:i.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),c.removeHandler("getMedia"+n)}})},n}(n);e.Media=t,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(m.mediaAPISupportVersion)){if(d.isMediaCallForVideoAndImageInputs(e)){if(o.GlobalVars.hostClientType!=s.HostClientType.android&&o.GlobalVars.hostClientType!=s.HostClientType.ios){var r={errorCode:i.ErrorCode.NOT_SUPPORTED_ON_PLATFORM};return void n(r,null)}if(!a.isAPISupportedByPlatform(m.videoAndImageMediaAPISupportVersion))return f={errorCode:i.ErrorCode.OLD_PLATFORM},void n(f,null)}if(d.validateSelectMediaInputs(e)){var l=[e];u.sendMessageToParent("selectMedia",l,function(e,r){if(r){for(var o=[],i=0,a=r;i<a.length;i++){var s=a[i];o.push(new t(s))}n(e,o)}else n(e,null)})}else{var c={errorCode:i.ErrorCode.INVALID_ARGUMENTS};n(c,null)}}else{var f={errorCode:i.ErrorCode.OLD_PLATFORM};n(f,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(m.mediaAPISupportVersion))if(d.validateViewImagesInput(e)){var t=[e];u.sendMessageToParent("viewImages",t,n)}else n({errorCode:i.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:i.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),o.GlobalVars.hostClientType!==s.HostClientType.desktop&&o.GlobalVars.hostClientType!==s.HostClientType.web&&o.GlobalVars.hostClientType!==s.HostClientType.rigel&&o.GlobalVars.hostClientType!==s.HostClientType.teamsRoomsWindows&&o.GlobalVars.hostClientType!==s.HostClientType.teamsRoomsAndroid&&o.GlobalVars.hostClientType!==s.HostClientType.teamsPhones&&o.GlobalVars.hostClientType!==s.HostClientType.teamsDisplays?a.isAPISupportedByPlatform(m.scanBarCodeAPIMobileSupportVersion)?d.validateScanBarCodeInput(n)?u.sendMessageToParent("media.scanBarCode",[n],e):e({errorCode:i.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:i.ErrorCode.OLD_PLATFORM},null):e({errorCode:i.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(17);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,r=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==r&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),r++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),r=new Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);var i=new Uint8Array(r),a=new Blob([i],{type:n});return{sequence:e.chunkSequence,file:a}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.isMediaCallForVideoAndImageInputs=function(e){return!(!e||e.mediaType!=r.media.MediaType.VideoAndImage&&!e.videoAndImageProps)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==r.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)},n.validatePeoplePickerInput=function(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}},function(e,n,t){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(t(20)),r(t(8))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(21);n.bot=r.bot;var o=t(15);n.menus=o.menus;var i=t(13);n.logs=i.logs;var a=t(35);n.NotificationTypes=a.NotificationTypes,n.ViewerActionTypes=a.ViewerActionTypes,n.UserSettingTypes=a.UserSettingTypes;var s=t(14);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp,n.registerUserSettingsChangeHandler=s.registerUserSettingsChangeHandler;var l=t(36);n.conversations=l.conversations;var d=t(37);n.meetingRoom=d.meetingRoom;var u=t(38);n.remoteCamera=u.remoteCamera;var c=t(39);n.files=c.files;var m=t(40);n.appEntity=m.appEntity;var f=t(41);n.teams=f.teams},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1);!function(e){e.sendQuery=function(e,n,t){o.ensureInitialized(),r.sendMessageToParent("bot.executeQuery",[e],function(e,r){e?n(r):t(r)})},e.getSupportedCommands=function(e,n){o.ensureInitialized(),r.sendMessageToParent("bot.getSupportedCommands",function(t,r){t?e(r):n(r)})},e.authenticate=function(e,n,t){o.ensureInitialized(),r.sendMessageToParent("bot.authenticate",[e],function(e,r){e?n(r):t(r)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var r=t(23),o=t(24),i=o;i.v1=r,i.v4=o,e.exports=i},function(e,n,t){var r,o,i=t(9),a=t(10),s=0,l=0;e.exports=function(e,n,t){var d=n&&t||0,u=n||[],c=(e=e||{}).node||r,m=void 0!==e.clockseq?e.clockseq:o;if(null==c||null==m){var f=i();null==c&&(c=r=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==m&&(m=o=16383&(f[6]<<8|f[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:l+1,C=g-s+(p-l)/1e4;if(C<0&&void 0===e.clockseq&&(m=m+1&16383),(C<0||g>s)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=p,o=m;var h=(1e4*(268435455&(g+=122192928e5))+p)%4294967296;u[d++]=h>>>24&255,u[d++]=h>>>16&255,u[d++]=h>>>8&255,u[d++]=255&h;var v=g/4294967296*1e4&268435455;u[d++]=v>>>8&255,u[d++]=255&v,u[d++]=v>>>24&15|16,u[d++]=v>>>16&255,u[d++]=m>>>8|128,u[d++]=255&m;for(var T=0;T<6;++T)u[d+T]=c[T];return n||a(u)}},function(e,n,t){var r=t(9),o=t(10);e.exports=function(e,n,t){var i=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[i+s]=a[s];return n||o(a)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(4),i=t(0);!function(e){e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.notifyAppLoaded=function(){r.ensureInitialized(),i.sendMessageToParent(e.Messages.AppLoaded,[o.version])},e.notifySuccess=function(){r.ensureInitialized(),i.sendMessageToParent(e.Messages.Success,[o.version])},e.notifyFailure=function(n){r.ensureInitialized(),i.sendMessageToParent(e.Messages.Failure,[n.reason,n.message])},e.notifyExpectedFailure=function(n){r.ensureInitialized(),i.sendMessageToParent(e.Messages.ExpectedFailure,[n.reason,n.message])}}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(6),i=t(4),a=t(12),s=t(5),l=t(13),d=t(2),u=t(0),c=t(11),m=t(14),f=t(3);function g(e,n){o.GlobalVars.initializeCalled||(o.GlobalVars.initializeCalled=!0,f.initializeHandlers(),u.initializeCommunication(function(e,n,t){void 0===t&&(t=i.defaultSDKVersionForCompatCheck),o.GlobalVars.frameContext=e,o.GlobalVars.hostClientType=n,o.GlobalVars.clientSupportedSDKVersion=t,o.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),o.GlobalVars.initializeCallbacks=[],o.GlobalVars.initializeCompleted=!0},n),c.authentication.initialize(),a.settings.initialize(),m.initializePrivateApis(),this._uninitialize=function(){o.GlobalVars.frameContext&&(C(null),h(null),v(null),b(null),y(null),T(null),l.logs.registerGetLogHandler(null)),o.GlobalVars.frameContext===d.FrameContexts.settings&&a.settings.registerOnSaveHandler(null),o.GlobalVars.frameContext===d.FrameContexts.remove&&a.settings.registerOnRemoveHandler(null),o.GlobalVars.initializeCalled=!1,o.GlobalVars.initializeCompleted=!1,o.GlobalVars.initializeCallbacks=[],o.GlobalVars.additionalValidOrigins=[],o.GlobalVars.frameContext=null,o.GlobalVars.hostClientType=null,o.GlobalVars.isFramelessWindow=!1,u.uninitializeCommunication()}),Array.isArray(n)&&r.processAdditionalValidOrigins(n),e&&(o.GlobalVars.initializeCompleted?e():o.GlobalVars.initializeCallbacks.push(e))}function p(){window.print()}function C(e){r.ensureInitialized(),f.registerOnThemeChangeHandler(e)}function h(e){r.ensureInitialized(),f.registerHandler("fullScreenChange",e)}function v(e){r.ensureInitialized(),f.registerBackButtonHandler(e)}function T(e){r.ensureInitialized(),f.registerOnLoadHandler(e)}function b(e){r.ensureInitialized(),f.registerBeforeUnloadHandler(e)}function y(e){r.ensureInitialized(),f.registerFocusEnterHandler(e)}function P(e){r.ensureInitialized(d.FrameContexts.content),u.sendMessageToParent("setFrameContext",[e])}n.initialize=g,n._initialize=function(e){u.Communication.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){o.GlobalVars.printCapabilityEnabled||(o.GlobalVars.printCapabilityEnabled=!0,r.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(p(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=p,n.getContext=function(e){r.ensureInitialized(),u.sendMessageToParent("getContext",function(n){n.frameContext||(n.frameContext=o.GlobalVars.frameContext),e(n)})},n.registerOnThemeChangeHandler=C,n.registerFullScreenHandler=h,n.registerAppButtonClickHandler=function(e){r.ensureInitialized(d.FrameContexts.content),f.registerHandler("appButtonClick",e)},n.registerAppButtonHoverEnterHandler=function(e){r.ensureInitialized(d.FrameContexts.content),f.registerHandler("appButtonHoverEnter",e)},n.registerAppButtonHoverLeaveHandler=function(e){r.ensureInitialized(d.FrameContexts.content),f.registerHandler("appButtonHoverLeave",e)},n.registerBackButtonHandler=v,n.registerOnLoadHandler=T,n.registerBeforeUnloadHandler=b,n.registerFocusEnterHandler=y,n.registerEnterSettingsHandler=function(e){r.ensureInitialized(d.FrameContexts.content),f.registerHandler("changeSettings",e)},n.getTabInstances=function(e,n){r.ensureInitialized(),u.sendMessageToParent("getTabInstances",[n],e)},n.getMruTabInstances=function(e,n){r.ensureInitialized(),u.sendMessageToParent("getMruTabInstances",[n],e)},n.shareDeepLink=function(e){r.ensureInitialized(d.FrameContexts.content,d.FrameContexts.sidePanel,d.FrameContexts.meetingStage),u.sendMessageToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){r.ensureInitialized(d.FrameContexts.content,d.FrameContexts.sidePanel,d.FrameContexts.settings,d.FrameContexts.task,d.FrameContexts.stage,d.FrameContexts.meetingStage),u.sendMessageToParent("executeDeepLink",[e],n||s.getGenericOnCompleteHandler())},n.setFrameContext=P,n.initializeWithFrameContext=function(e,n,t){g(n,t),P(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(5),i=t(2),a=t(0);n.returnFocus=function(e){r.ensureInitialized(i.FrameContexts.content),a.sendMessageToParent("returnFocus",[e])},n.navigateToTab=function(e,n){r.ensureInitialized(),a.sendMessageToParent("navigateToTab",[e],n||o.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided"))},n.navigateCrossDomain=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.task,i.FrameContexts.stage,i.FrameContexts.meetingStage),a.sendMessageToParent("navigateCrossDomain",[e],n||o.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))},n.navigateBack=function(e){r.ensureInitialized(),a.sendMessageToParent("navigateBack",[],e||o.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context."))}},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),i=t(16),a=t(0),s=t(1);!function(e){e.startTask=function(e,n){return s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.meetingStage),a.sendMessageToParent("tasks.startTask",[e],n),new i.ChildAppWindow},e.updateTask=function(e){s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.task,o.FrameContexts.meetingStage),e.width,e.height;var n=r(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");a.sendMessageToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.task,o.FrameContexts.meetingStage),a.sendMessageToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(7),o=t(1),i=t(2),a=t(0),s=t(4);!function(e){e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");o.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task),o.isAPISupportedByPlatform(s.locationAPIsRequiredVersion)?e?a.sendMessageToParent("location.getLocation",[e],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");o.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task),o.isAPISupportedByPlatform(s.locationAPIsRequiredVersion)?e?a.sendMessageToParent("location.showLocation",[e],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(3),i=t(1),a=t(2);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),r.sendMessageToParent("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),r.sendMessageToParent("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage,a.FrameContexts.settings,a.FrameContexts.content),r.sendMessageToParent("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),r.sendMessageToParent("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),o.registerHandler("meeting.liveStreamChanged",e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1),i=t(2);!function(e){e.openPurchaseExperience=function(e,n){if(!e)throw new Error("[open purchase experience] Callback cannot be null");o.ensureInitialized(i.FrameContexts.content),r.sendMessageToParent("monetization.openPurchaseExperience",[n],e)}}(n.monetization||(n.monetization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=t(7),a=t(18),s=t(0),l=t(4);!function(e){(n.people||(n.people={})).selectPeople=function(e,n){if(!e)throw new Error("[people picker] Callback cannot be null");r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task,o.FrameContexts.settings),r.isAPISupportedByPlatform(l.peoplePickerRequiredVersion)?a.validatePeoplePickerInput(n)?s.sendMessageToParent("people.selectPeople",[n],e):e({errorCode:i.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1),i=t(2),a=t(3);!function(e){function n(){r.sendMessageToParent("video.videoFrameProcessed")}function t(e){r.sendMessageToParent("video.notifyError",[e])}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,s){o.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("video.newVideoFrame",function(r){void 0!==r&&e(r,n,t)}),r.sendMessageToParent("video.registerForVideoFrame",[s])},e.notifySelectedVideoEffectChanged=function(e,n){o.ensureInitialized(i.FrameContexts.sidePanel),r.sendMessageToParent("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){o.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("video.effectParameterChange",e)}}(n.video||(n.video={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(7),a=t(2);!function(e){function n(e,n){return!!(e&&e.content&&e.content.length)||(n&&n({errorCode:i.ErrorCode.INVALID_ARGUMENTS,message:"Shared content is missing"}),!1)}function t(e,n){return e.content.some(function(e){return!e.type})?(n&&n({errorCode:i.ErrorCode.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"}),!1):!e.content.some(function(n){return n.type!==e.content[0].type})||(n&&n({errorCode:i.ErrorCode.INVALID_ARGUMENTS,message:"Shared content must be of the same type"}),!1)}function s(e,n){return"URL"!==e.content[0].type?(n&&n({errorCode:i.ErrorCode.INVALID_ARGUMENTS,message:"Content type is unsupported"}),!1):!e.content.some(function(e){return!e.url})||(n&&n({errorCode:i.ErrorCode.INVALID_ARGUMENTS,message:"URLs are required for URL content types"}),!1)}e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(i,l){n(i,l)&&t(i,l)&&s(i,l)&&(r.ensureInitialized(a.FrameContexts.content,a.FrameContexts.sidePanel,a.FrameContexts.task,a.FrameContexts.stage,a.FrameContexts.meetingStage),o.sendMessageToParent(e.SharingAPIMessages.shareWebContent,[i],l))}}(n.sharing||(n.sharing={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=t(0),a=t(3);!function(e){e.openConversation=function(e){r.ensureInitialized(o.FrameContexts.content),i.sendMessageToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}],function(e,n){if(!e)throw new Error(n)}),e.onStartConversation&&a.registerHandler("startConversation",function(n,t,r,o){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:r,entityId:o})}),e.onCloseConversation&&a.registerHandler("closeConversation",function(n,t,r,o){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:r,entityId:o})})},e.closeConversation=function(){r.ensureInitialized(o.FrameContexts.content),i.sendMessageToParent("conversations.closeConversation"),a.removeHandler("startConversation"),a.removeHandler("closeConversation")}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(3);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){r.ensureInitialized(),o.sendMessageToParent("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");r.ensureInitialized(),o.sendMessageToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");r.ensureInitialized(),i.registerHandler("meetingRoom.meetingRoomCapabilitiesUpdate",function(n){r.ensureInitialized(),e(n)})},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");r.ensureInitialized(),i.registerHandler("meetingRoom.meetingRoomStatesUpdate",function(n){r.ensureInitialized(),e(n)})}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=t(0),a=t(3);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),i.sendMessageToParent("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),i.sendMessageToParent("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),i.sendMessageToParent("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),i.sendMessageToParent("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");r.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.sessionStatusChange",e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1),i=t(8);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e,n){if(o.ensureInitialized(i.FrameContexts.content),!e||0==e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");r.sendMessageToParent("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(o.ensureInitialized(i.FrameContexts.content),!e||0==e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");r.sendMessageToParent("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(o.ensureInitialized(i.FrameContexts.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");r.sendMessageToParent("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if(o.ensureInitialized(i.FrameContexts.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");r.sendMessageToParent("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if(o.ensureInitialized(i.FrameContexts.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");r.sendMessageToParent("files.openCloudStorageFile",[e,n,t])}}(n.files||(n.files={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1),i=t(8);!function(e){(n.appEntity||(n.appEntity={})).selectAppEntity=function(e,n,t){if(o.ensureInitialized(i.FrameContexts.content),!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!t)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");r.sendMessageToParent("appEntity.selectAppEntity",[e,n],t)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1),i=t(8);!function(e){!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,n){if(o.ensureInitialized(i.FrameContexts.content),!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!n)throw new Error("[teams.getTeamChannels] Callback cannot be null");r.sendMessageToParent("teams.getTeamChannels",[e],n)}}(n.teams||(n.teams={}))}])});

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
                MicrosoftTeams_min.showNotification(showNotificationParameters);
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
                    name: "settings"
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
                MicrosoftTeams_min.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getChatMembers(output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min;
                MicrosoftTeams_min.getUserJoinedTeams(output);
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
                MicrosoftTeams_min.meeting.getMeetingDetails((err, getMeetingDetails) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(getMeetingDetails);
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