/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),i=t(5),o=t(3),a=function(){return function(){}}();n.Communication=a;var s=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e}();function l(e,n,t){var r;n instanceof Function?t=n:n instanceof Array&&(r=n);var o=a.parentWindow,l=b(e,r);if(i.GlobalVars.isFramelessWindow)a.currentWindow&&a.currentWindow.nativeInterface&&a.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(l));else{var u=C(o);o&&u?o.postMessage(l,u):p(o).push(l)}t&&(s.callbacks[l.id]=t)}function u(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;d(n,t)&&(c(n,t),n===a.parentWindow?m(e):n===a.childWindow&&g(e))}}function d(e,n){return(!a.currentWindow||e!==a.currentWindow)&&(!!(a.currentWindow&&a.currentWindow.location&&n&&n===a.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||i.GlobalVars.additionalValidOriginsRegexp&&i.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function c(e,n){i.GlobalVars.isFramelessWindow||a.parentWindow&&!a.parentWindow.closed&&e!==a.parentWindow?a.childWindow&&!a.childWindow.closed&&e!==a.childWindow||(a.childWindow=e,a.childOrigin=n):(a.parentWindow=e,a.parentOrigin=n),a.parentWindow&&a.parentWindow.closed&&(a.parentWindow=null,a.parentOrigin=null),a.childWindow&&a.childWindow.closed&&(a.childWindow=null,a.childOrigin=null),h(a.parentWindow),h(a.childWindow)}function m(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=s.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),f(e)||delete s.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;o.callHandler(n.func,n.args)}}function f(e){return!0===e.data.isPartialResponse}function g(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=o.callHandler(n.func,n.args),r=t[0],i=t[1];r&&void 0!==i?v(n.id,Array.isArray(i)?i:[i]):l(n.func,n.args,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(a.childWindow){var r=e.pop();v(n.id,e,r)}})}}function p(e){return e===a.parentWindow?s.parentMessageQueue:e===a.childWindow?s.childMessageQueue:[]}function C(e){return e===a.parentWindow?a.parentOrigin:e===a.childWindow?a.childOrigin:null}function h(e){for(var n=C(e),t=p(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function v(e,n,t){var r=a.childWindow,i=w(e,n,t),o=C(r);r&&o&&r.postMessage(i,o)}function b(e,n){return{id:s.nextMessageId++,func:e,args:n||[]}}function w(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function T(e,n){return{func:e,args:n||[]}}n.initializeCommunication=function(e,n){s.messageListener=function(e){return u(e)},a.currentWindow=a.currentWindow||window,a.parentWindow=a.currentWindow.parent!==a.currentWindow.self?a.currentWindow.parent:a.currentWindow.opener,(a.parentWindow||n)&&a.currentWindow.addEventListener("message",s.messageListener,!1),a.parentWindow||(i.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=m);try{a.parentOrigin="*",l("initialize",[r.version],e)}finally{a.parentOrigin=null}},n.uninitializeCommunication=function(){a.currentWindow.removeEventListener("message",s.messageListener,!1),a.parentWindow=null,a.parentOrigin=null,a.childWindow=null,a.childOrigin=null,s.parentMessageQueue=[],s.childMessageQueue=[],s.nextMessageId=0,s.callbacks={}},n.sendMessageToParent=l,n.waitForMessageQueue=function(e,n){var t=a.currentWindow.setInterval(function(){0===p(e).length&&(clearInterval(t),n())},100)},n.sendMessageEventToChild=function(e,n){var t=a.childWindow,r=T(e,n),i=C(t);t&&i?t.postMessage(r,i):p(t).push(r)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),i=t(5),o=t(4);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!i.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(i.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,r=0;r<e.length;r++)if(e[r]===i.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+i.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=r.defaultSDKVersionForCompatCheck);var n=o.compareSDKVersions(i.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processAdditionalValidOrigins=function(e){var n=i.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),i.GlobalVars.additionalValidOrigins=n,i.GlobalVars.additionalValidOrigins.length>0?i.GlobalVars.additionalValidOriginsRegexp=o.generateRegExpFromUrls(i.GlobalVars.additionalValidOrigins):i.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),i=t(0),o=function(){function e(){}return e.handlers={},e}();function a(e){o.themeChangeHandler&&o.themeChangeHandler(e),i.Communication.childWindow&&i.sendMessageEventToChild("themeChange",[e])}function s(){o.backButtonPressHandler&&o.backButtonPressHandler()||r.navigateBack()}function l(e){o.loadHandler&&o.loadHandler(e),i.Communication.childWindow&&i.sendMessageEventToChild("load",[e])}function u(){var e=function(){i.sendMessageToParent("readyToUnload",[])};o.beforeUnloadHandler&&o.beforeUnloadHandler(e)||e()}n.initializeHandlers=function(){o.handlers.themeChange=a,o.handlers.backButtonPress=s,o.handlers.load=l,o.handlers.beforeUnload=u},n.callHandler=function(e,n){var t=o.handlers[e];return t?[!0,t.apply(this,n)]:[!1,void 0]},n.registerHandler=function(e,n,t,r){void 0===t&&(t=!0),void 0===r&&(r=[]),n?(o.handlers[e]=n,t&&i.sendMessageToParent("registerHandler",[e].concat(r))):delete o.handlers[e]},n.removeHandler=function(e){delete o.handlers[e]},n.registerOnThemeChangeHandler=function(e){o.themeChangeHandler=e,e&&i.sendMessageToParent("registerHandler",["themeChange"])},n.handleThemeChange=a,n.registerBackButtonHandler=function(e){o.backButtonPressHandler=e,e&&i.sendMessageToParent("registerHandler",["backButton"])},n.registerOnLoadHandler=function(e){o.loadHandler=e,e&&i.sendMessageToParent("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){o.beforeUnloadHandler=e,e&&i.sendMessageToParent("registerHandler",["beforeUnload"])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(22);function i(e){for(var n="^",t=e.split("."),r=0;r<t.length;r++)n+=(r>0?"[.]":"")+t[r].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+i(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),r=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!r.every(i))return NaN;for(;t.length<r.length;)t.push("0");for(;r.length<t.length;)r.push("0");for(var o=0;o<t.length;++o)if(Number(t[o])!=Number(r[o]))return Number(t[o])>Number(r[o])?1:-1;return 0},n.generateGUID=function(){return r.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4);n.version="1.10.0-beta.4",n.defaultSDKVersionForCompatCheck="1.6.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.live.com","https://local.teams.live.com:8080","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com","http://127.0.0.1:5000"],n.validOriginRegExp=r.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(25);n.appInitialization=r.appInitialization;var i=t(11);n.authentication=i.authentication;var o=t(2);n.FrameContexts=o.FrameContexts,n.HostClientType=o.HostClientType,n.TaskModuleDimension=o.TaskModuleDimension,n.TeamType=o.TeamType,n.UserTeamRole=o.UserTeamRole,n.ChannelType=o.ChannelType;var a=t(7);n.ErrorCode=a.ErrorCode,n.FileOpenPreference=a.FileOpenPreference;var s=t(26);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=s.registerChangeSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(27);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var u=t(12);n.settings=u.settings;var d=t(28);n.tasks=d.tasks;var c=t(16);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var m=t(17);n.media=m.media;var f=t(29);n.location=f.location;var g=t(30);n.meeting=g.meeting;var p=t(31);n.people=p.people},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),i[n]=e>>>((3&n)<<3)&255;return i}}},function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,i=t;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(5),o=t(2),a=t(0),s=t(3);!function(e){var n,t;function l(){d();try{a.Communication.childWindow&&a.Communication.childWindow.close()}finally{a.Communication.childWindow=null,a.Communication.childOrigin=null}}function u(e){n=e,l();var t=n.width||600,r=n.height||400;t=Math.min(t,a.Communication.currentWindow.outerWidth-400),r=Math.min(r,a.Communication.currentWindow.outerHeight-200);var i=document.createElement("a");i.href=n.url;var o=void 0!==a.Communication.currentWindow.screenLeft?a.Communication.currentWindow.screenLeft:a.Communication.currentWindow.screenX,s=void 0!==a.Communication.currentWindow.screenTop?a.Communication.currentWindow.screenTop:a.Communication.currentWindow.screenY;o+=a.Communication.currentWindow.outerWidth/2-t/2,s+=a.Communication.currentWindow.outerHeight/2-r/2,a.Communication.childWindow=a.Communication.currentWindow.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+s+", left="+o+", width="+t+", height="+r),a.Communication.childWindow?c():f("FailedToOpenWindow")}function d(){t&&(clearInterval(t),t=0),s.removeHandler("initialize"),s.removeHandler("navigateCrossDomain")}function c(){d(),t=a.Communication.currentWindow.setInterval(function(){if(!a.Communication.childWindow||a.Communication.childWindow.closed)f("CancelledByUser");else{var e=a.Communication.childOrigin;try{a.Communication.childOrigin="*",a.sendMessageEventToChild("ping")}finally{a.Communication.childOrigin=e}}},100),s.registerHandler("initialize",function(){return[o.FrameContexts.authentication,i.GlobalVars.hostClientType]}),s.registerHandler("navigateCrossDomain",function(){return!1})}function m(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,l()}}function f(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,l()}}function g(e,n,t){if(e){var r=document.createElement("a");r.href=decodeURIComponent(e),r.host&&r.host!==window.location.host&&"outlook.office.com"===r.host&&r.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(r.href=p(r.href,"result",t)),a.Communication.currentWindow.location.assign(p(r.href,"authSuccess",""))),n&&"reason"===n&&(t&&(r.href=p(r.href,"reason",t)),a.Communication.currentWindow.location.assign(p(r.href,"authFailure",""))))}}function p(e,n,t){var r=e.indexOf("#"),i=-1===r?"#":e.substr(r);return i=i+"&"+n+(""!==t?"="+t:""),(e=-1===r?e:e.substr(0,r))+i}e.initialize=function(){s.registerHandler("authentication.authenticate.success",m,!1),s.registerHandler("authentication.authenticate.failure",f,!1)},e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage,o.FrameContexts.meetingStage),i.GlobalVars.hostClientType===o.HostClientType.desktop||i.GlobalVars.hostClientType===o.HostClientType.android||i.GlobalVars.hostClientType===o.HostClientType.ios||i.GlobalVars.hostClientType===o.HostClientType.rigel){var s=document.createElement("a");s.href=t.url,a.sendMessageToParent("authentication.authenticate",[s.href,t.width,t.height],function(e,n){e?t.successCallback(n):t.failureCallback(n)})}else u(t)},e.getAuthToken=function(e){r.ensureInitialized(),a.sendMessageToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent],function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.getUser=function(e){r.ensureInitialized(),a.sendMessageToParent("authentication.getUser",function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.notifySuccess=function(e,n){g(n,"result",e),r.ensureInitialized(o.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){g(n,"reason",e),r.ensureInitialized(o.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(4),a=t(0),s=t(3);!function(e){var n,t;function l(e){var t=new u(e);n?n(t):t.notifySuccess()}e.initialize=function(){s.registerHandler("settings.save",l,!1),s.registerHandler("settings.remove",d,!1)},e.setValidityState=function(e){r.ensureInitialized(i.FrameContexts.settings,i.FrameContexts.remove),a.sendMessageToParent("settings.setValidityState",[e])},e.getSettings=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.settings,i.FrameContexts.remove),a.sendMessageToParent("settings.getSettings",e)},e.setSettings=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.settings),a.sendMessageToParent("settings.setSettings",[e],n||o.getGenericOnCompleteHandler())},e.registerOnSaveHandler=function(e){r.ensureInitialized(i.FrameContexts.settings),n=e,e&&a.sendMessageToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){r.ensureInitialized(i.FrameContexts.remove,i.FrameContexts.settings),t=e,e&&a.sendMessageToParent("registerHandler",["remove"])};var u=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function d(){var e=new c;t?t(e):e.notifySuccess()}var c=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(3);!function(e){e.registerGetLogHandler=function(e){r.ensureInitialized(),e?o.registerHandler("log.request",function(){var n=e();i.sendMessageToParent("log.receive",[n])}):o.removeHandler("log.request")}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(4),a=t(0),s=t(15),l=t(3);n.initializePrivateApis=function(){s.menus.initialize()},n.getUserJoinedTeams=function(e,n){r.ensureInitialized(),a.sendMessageToParent("getUserJoinedTeams",[n],e)},n.enterFullscreen=function(){r.ensureInitialized(i.FrameContexts.content),a.sendMessageToParent("enterFullscreen",[])},n.exitFullscreen=function(){r.ensureInitialized(i.FrameContexts.content),a.sendMessageToParent("exitFullscreen",[])},n.openFilePreview=function(e){r.ensureInitialized(i.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference];a.sendMessageToParent("openFilePreview",n)},n.showNotification=function(e){r.ensureInitialized(i.FrameContexts.content);var n=[e.message,e.notificationType];a.sendMessageToParent("showNotification",n)},n.uploadCustomApp=function(e,n){r.ensureInitialized(),a.sendMessageToParent("uploadCustomApp",[e],n||o.getGenericOnCompleteHandler())},n.sendCustomMessage=function(e,n,t){r.ensureInitialized(),a.sendMessageToParent(e,n,t)},n.sendCustomEvent=function(e,n){if(r.ensureInitialized(),!a.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;r.ensureInitialized(),l.registerHandler(e,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.apply(t,e)})},n.getChatMembers=function(e){r.ensureInitialized(),a.sendMessageToParent("getChatMembers",e)},n.getConfigSetting=function(e,n){r.ensureInitialized(),a.sendMessageToParent("getConfigSetting",[n],e)},n.registerUserSettingsChangeHandler=function(e,n){r.ensureInitialized(),l.registerHandler("userSettingsChange",n,!0,[e])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(3);!function(e){var n,t,a,s=function(){return function(){this.enabled=!0,this.selected=!1}}();function l(e){a&&a(e)||(r.ensureInitialized(),i.sendMessageToParent("viewConfigItemPress",[e]))}function u(e){n&&n(e)||(r.ensureInitialized(),i.sendMessageToParent("handleNavBarMenuItemPress",[e]))}function d(e){t&&t(e)||(r.ensureInitialized(),i.sendMessageToParent("handleActionMenuItemPress",[e]))}e.MenuItem=s,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){o.registerHandler("navBarMenuItemPress",u,!1),o.registerHandler("actionMenuItemPress",d,!1),o.registerHandler("setModuleView",l,!1)},e.setUpViews=function(e,n){r.ensureInitialized(),a=n,i.sendMessageToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){r.ensureInitialized(),n=t,i.sendMessageToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){r.ensureInitialized(),t=n,i.sendMessageToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(4),a=t(0),s=t(3),l=function(){function e(){}return e.prototype.postMessage=function(e,n){r.ensureInitialized(),a.sendMessageToParent("messageForChild",[e],n||o.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForParent",n)},e}();n.ChildAppWindow=l;var u=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){r.ensureInitialized(i.FrameContexts.task),a.sendMessageToParent("messageForParent",[e],n||o.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForChild",n)},e}();n.ParentAppWindow=u},function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var i=t(5),o=t(7),a=t(1),s=t(2),l=t(4),u=t(18),d=t(0),c=t(3);!function(e){var n="1.7.0",t="1.8.0",m="1.9.0";!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var f=function(){return function(){}}();e.File=f,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.GlobalVars.isFramelessWindow?a.isAPISupportedByPlatform(n)?d.sendMessageToParent("captureImage",e):e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var g=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return r(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(t))?u.validateGetMediaInputs(this.mimeType,this.format,this.content)?a.isAPISupportedByPlatform("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content];d.sendMessageToParent("getMedia",t,function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var r=u.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,r)}else{var i=u.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(i)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)})},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},r=[n,this.content];this.content&&e&&d.sendMessageToParent("getMedia",r),c.registerHandler("getMedia"+n,function(r){if(e){var i=JSON.parse(r);if(i.error)e(i.error,null),c.removeHandler("getMedia"+n);else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var a=u.createFile(t.assembleAttachment,t.mediaMimeType);e(i.error,a),c.removeHandler("getMedia"+n)}else{var s=u.decodeAttachment(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),c.removeHandler("getMedia"+n)}})},n}(f);e.Media=g,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(t))if(u.validateSelectMediaInputs(e)){var r=[e];d.sendMessageToParent("selectMedia",r,function(e,t){if(t){for(var r=[],i=0,o=t;i<o.length;i++){var a=o[i];r.push(new g(a))}n(e,r)}else n(e,null)})}else{var i={errorCode:o.ErrorCode.INVALID_ARGUMENTS};n(i,null)}else{var l={errorCode:o.ErrorCode.OLD_PLATFORM};n(l,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(t))if(u.validateViewImagesInput(e)){var r=[e];d.sendMessageToParent("viewImages",r,n)}else n({errorCode:o.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:o.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.GlobalVars.hostClientType!==s.HostClientType.desktop&&i.GlobalVars.hostClientType!==s.HostClientType.web&&i.GlobalVars.hostClientType!==s.HostClientType.rigel?a.isAPISupportedByPlatform(m)?u.validateScanBarCodeInput(n)?d.sendMessageToParent("media.scanBarCode",[n],e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null):e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(17);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,r=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==r&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),r++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),r=new Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);var o=new Uint8Array(r),a=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:a}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==r.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)},n.validatePeoplePickerInput=function(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}},function(e,n,t){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(t(20)),r(t(8))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(21);n.bot=r.bot;var i=t(15);n.menus=i.menus;var o=t(13);n.logs=o.logs;var a=t(32);n.NotificationTypes=a.NotificationTypes,n.ViewerActionTypes=a.ViewerActionTypes,n.UserSettingTypes=a.UserSettingTypes;var s=t(14);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp,n.registerUserSettingsChangeHandler=s.registerUserSettingsChangeHandler;var l=t(33);n.conversations=l.conversations;var u=t(34);n.meetingRoom=u.meetingRoom;var d=t(35);n.remoteCamera=d.remoteCamera;var c=t(36);n.files=c.files},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(1);!function(e){e.sendQuery=function(e,n,t){i.ensureInitialized(),r.sendMessageToParent("bot.executeQuery",[e],function(e,r){e?n(r):t(r)})},e.getSupportedCommands=function(e,n){i.ensureInitialized(),r.sendMessageToParent("bot.getSupportedCommands",function(t,r){t?e(r):n(r)})},e.authenticate=function(e,n,t){i.ensureInitialized(),r.sendMessageToParent("bot.authenticate",[e],function(e,r){e?n(r):t(r)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var r=t(23),i=t(24),o=i;o.v1=r,o.v4=i,e.exports=o},function(e,n,t){var r,i,o=t(9),a=t(10),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,d=n||[],c=(e=e||{}).node||r,m=void 0!==e.clockseq?e.clockseq:i;if(null==c||null==m){var f=o();null==c&&(c=r=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==m&&(m=i=16383&(f[6]<<8|f[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:l+1,C=g-s+(p-l)/1e4;if(C<0&&void 0===e.clockseq&&(m=m+1&16383),(C<0||g>s)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=p,i=m;var h=(1e4*(268435455&(g+=122192928e5))+p)%4294967296;d[u++]=h>>>24&255,d[u++]=h>>>16&255,d[u++]=h>>>8&255,d[u++]=255&h;var v=g/4294967296*1e4&268435455;d[u++]=v>>>8&255,d[u++]=255&v,d[u++]=v>>>24&15|16,d[u++]=v>>>16&255,d[u++]=m>>>8|128,d[u++]=255&m;for(var b=0;b<6;++b)d[u+b]=c[b];return n||a(d)}},function(e,n,t){var r=t(9),i=t(10);e.exports=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[o+s]=a[s];return n||i(a)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(6),o=t(0);!function(e){e.notifyAppLoaded=function(){r.ensureInitialized(),o.sendMessageToParent("appInitialization.appLoaded",[i.version])},e.notifySuccess=function(){r.ensureInitialized(),o.sendMessageToParent("appInitialization.success",[i.version])},e.notifyFailure=function(e){r.ensureInitialized(),o.sendMessageToParent("appInitialization.failure",[e.reason,e.message])},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(5),o=t(6),a=t(12),s=t(4),l=t(13),u=t(2),d=t(0),c=t(11),m=t(14),f=t(3);function g(e,n){i.GlobalVars.initializeCalled||(i.GlobalVars.initializeCalled=!0,f.initializeHandlers(),d.initializeCommunication(function(e,n,t){void 0===t&&(t=o.defaultSDKVersionForCompatCheck),i.GlobalVars.frameContext=e,i.GlobalVars.hostClientType=n,i.GlobalVars.clientSupportedSDKVersion=t,i.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),i.GlobalVars.initializeCallbacks=[],i.GlobalVars.initializeCompleted=!0},n),c.authentication.initialize(),a.settings.initialize(),m.initializePrivateApis(),this._uninitialize=function(){i.GlobalVars.frameContext&&(C(null),h(null),v(null),w(null),b(null),l.logs.registerGetLogHandler(null)),i.GlobalVars.frameContext===u.FrameContexts.settings&&a.settings.registerOnSaveHandler(null),i.GlobalVars.frameContext===u.FrameContexts.remove&&a.settings.registerOnRemoveHandler(null),i.GlobalVars.initializeCalled=!1,i.GlobalVars.initializeCompleted=!1,i.GlobalVars.initializeCallbacks=[],i.GlobalVars.additionalValidOrigins=[],i.GlobalVars.frameContext=null,i.GlobalVars.hostClientType=null,i.GlobalVars.isFramelessWindow=!1,d.uninitializeCommunication()}),Array.isArray(n)&&r.processAdditionalValidOrigins(n),e&&(i.GlobalVars.initializeCompleted?e():i.GlobalVars.initializeCallbacks.push(e))}function p(){window.print()}function C(e){r.ensureInitialized(),f.registerOnThemeChangeHandler(e)}function h(e){r.ensureInitialized(),f.registerHandler("fullScreenChange",e)}function v(e){r.ensureInitialized(),f.registerBackButtonHandler(e)}function b(e){r.ensureInitialized(),f.registerOnLoadHandler(e)}function w(e){r.ensureInitialized(),f.registerBeforeUnloadHandler(e)}function T(e){r.ensureInitialized(u.FrameContexts.content),d.sendMessageToParent("setFrameContext",[e])}n.initialize=g,n._initialize=function(e){d.Communication.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){i.GlobalVars.printCapabilityEnabled||(i.GlobalVars.printCapabilityEnabled=!0,r.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(p(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=p,n.getContext=function(e){r.ensureInitialized(),d.sendMessageToParent("getContext",function(n){n.frameContext||(n.frameContext=i.GlobalVars.frameContext),e(n)})},n.registerOnThemeChangeHandler=C,n.registerFullScreenHandler=h,n.registerAppButtonClickHandler=function(e){r.ensureInitialized(u.FrameContexts.content),f.registerHandler("appButtonClick",e)},n.registerAppButtonHoverEnterHandler=function(e){r.ensureInitialized(u.FrameContexts.content),f.registerHandler("appButtonHoverEnter",e)},n.registerAppButtonHoverLeaveHandler=function(e){r.ensureInitialized(u.FrameContexts.content),f.registerHandler("appButtonHoverLeave",e)},n.registerBackButtonHandler=v,n.registerOnLoadHandler=b,n.registerBeforeUnloadHandler=w,n.registerChangeSettingsHandler=function(e){r.ensureInitialized(u.FrameContexts.content),f.registerHandler("changeSettings",e)},n.getTabInstances=function(e,n){r.ensureInitialized(),d.sendMessageToParent("getTabInstances",[n],e)},n.getMruTabInstances=function(e,n){r.ensureInitialized(),d.sendMessageToParent("getMruTabInstances",[n],e)},n.shareDeepLink=function(e){r.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.meetingStage),d.sendMessageToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){r.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage,u.FrameContexts.meetingStage),d.sendMessageToParent("executeDeepLink",[e],n||s.getGenericOnCompleteHandler())},n.setFrameContext=T,n.initializeWithFrameContext=function(e,n,t){g(n,t),T(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(4),o=t(2),a=t(0);n.returnFocus=function(e){r.ensureInitialized(o.FrameContexts.content),a.sendMessageToParent("returnFocus",[e])},n.navigateToTab=function(e,n){r.ensureInitialized(),a.sendMessageToParent("navigateToTab",[e],n||i.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided"))},n.navigateCrossDomain=function(e,n){r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage,o.FrameContexts.meetingStage),a.sendMessageToParent("navigateCrossDomain",[e],n||i.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))},n.navigateBack=function(e){r.ensureInitialized(),a.sendMessageToParent("navigateBack",[],e||i.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context."))}},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&(t[r[i]]=e[r[i]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),o=t(16),a=t(0),s=t(1);!function(e){e.startTask=function(e,n){return s.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.meetingStage),a.sendMessageToParent("tasks.startTask",[e],n),new o.ChildAppWindow},e.updateTask=function(e){s.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task,i.FrameContexts.meetingStage),e.width,e.height;var n=r(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");a.sendMessageToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task,i.FrameContexts.meetingStage),a.sendMessageToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(7),i=t(1),o=t(2),a=t(0);!function(e){e.locationAPIsRequiredVersion="1.9.0",e.getLocation=function(n,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task),i.isAPISupportedByPlatform(e.locationAPIsRequiredVersion)?n?a.sendMessageToParent("location.getLocation",[n],t):t({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):t({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(n,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task),i.isAPISupportedByPlatform(e.locationAPIsRequiredVersion)?n?a.sendMessageToParent("location.showLocation",[n],t):t({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):t({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(3),o=t(1),a=t(2);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");o.ensureInitialized(),r.sendMessageToParent("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");o.ensureInitialized(),r.sendMessageToParent("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");o.ensureInitialized(),r.sendMessageToParent("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");o.ensureInitialized(),r.sendMessageToParent("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),i.registerHandler("meeting.liveStreamChanged",e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(7),a=t(18),s=t(0);!function(e){e.peoplePickerRequiredVersion="2.0.0",e.selectPeople=function(n,t){if(!n)throw new Error("[people picker] Callback cannot be null");r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task,i.FrameContexts.settings),r.isAPISupportedByPlatform(e.peoplePickerRequiredVersion)?a.validatePeoplePickerInput(t)?s.sendMessageToParent("people.selectPeople",[t],n):n({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):n({errorCode:o.ErrorCode.OLD_PLATFORM},void 0)}}(n.people||(n.people={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(0),a=t(3);!function(e){e.openConversation=function(e){r.ensureInitialized(i.FrameContexts.content),o.sendMessageToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}],function(e,n){if(!e)throw new Error(n)}),e.onStartConversation&&a.registerHandler("startConversation",function(n,t,r,i){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:r,entityId:i})}),e.onCloseConversation&&a.registerHandler("closeConversation",function(n,t,r,i){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:r,entityId:i})})},e.closeConversation=function(){r.ensureInitialized(i.FrameContexts.content),o.sendMessageToParent("conversations.closeConversation"),a.removeHandler("startConversation"),a.removeHandler("closeConversation")}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(3);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){r.ensureInitialized(),i.sendMessageToParent("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");r.ensureInitialized(),i.sendMessageToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");r.ensureInitialized(),o.registerHandler("meetingRoom.meetingRoomCapabilitiesUpdate",function(n){r.ensureInitialized(),e(n)})},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");r.ensureInitialized(),o.registerHandler("meetingRoom.meetingRoomStatesUpdate",function(n){r.ensureInitialized(),e(n)})}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(0),a=t(3);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.sessionStatusChange",e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(1),o=t(8);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e,n){if(i.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");r.sendMessageToParent("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(i.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");r.sendMessageToParent("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(i.ensureInitialized(o.FrameContexts.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");r.sendMessageToParent("files.deleteCloudStorageFolder",[e,n],t)}}(n.files||(n.files={}))}])});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(303);
;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min.initialize();
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
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
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
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