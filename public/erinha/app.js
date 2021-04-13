/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 704:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){!function(n,t){e.exports=function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=22)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(7),o=t(6),r=t(3),a=function(){return function(){}}();n.Communication=a;var s=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e}();function l(e,n,t){var i;n instanceof Function?t=n:n instanceof Array&&(i=n);var r=a.parentWindow,l=b(e,i);if(o.GlobalVars.isFramelessWindow)a.currentWindow&&a.currentWindow.nativeInterface&&a.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(l));else{var u=C(r);r&&u?r.postMessage(l,u):p(r).push(l)}t&&(s.callbacks[l.id]=t)}function u(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;c(n,t)&&(d(n,t),n===a.parentWindow?f(e):n===a.childWindow&&g(e))}}function c(e,n){return!(a.currentWindow&&e===a.currentWindow||!(a.currentWindow&&a.currentWindow.location&&n&&n===a.currentWindow.location.origin)&&!(i.validOriginRegExp.test(n.toLowerCase())||o.GlobalVars.additionalValidOriginsRegexp&&o.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function d(e,n){o.GlobalVars.isFramelessWindow||a.parentWindow&&!a.parentWindow.closed&&e!==a.parentWindow?a.childWindow&&!a.childWindow.closed&&e!==a.childWindow||(a.childWindow=e,a.childOrigin=n):(a.parentWindow=e,a.parentOrigin=n),a.parentWindow&&a.parentWindow.closed&&(a.parentWindow=null,a.parentOrigin=null),a.childWindow&&a.childWindow.closed&&(a.childWindow=null,a.childOrigin=null),h(a.parentWindow),h(a.childWindow)}function f(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=s.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),m(e)||delete s.callbacks[n.id])}else"func"in e.data&&"string"==typeof e.data.func&&(n=e.data,r.callHandler(n.func,n.args))}function m(e){return!0===e.data.isPartialResponse}function g(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=r.callHandler(n.func,n.args),i=t[0],o=t[1];i&&void 0!==o?v(n.id,Array.isArray(o)?o:[o]):l(n.func,n.args,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(a.childWindow){var i=e.pop();v(n.id,e,i)}})}}function p(e){return e===a.parentWindow?s.parentMessageQueue:e===a.childWindow?s.childMessageQueue:[]}function C(e){return e===a.parentWindow?a.parentOrigin:e===a.childWindow?a.childOrigin:null}function h(e){for(var n=C(e),t=p(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function v(e,n,t){var i=a.childWindow,o=T(e,n,t),r=C(i);i&&r&&i.postMessage(o,r)}function b(e,n){return{id:s.nextMessageId++,func:e,args:n||[]}}function T(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function y(e,n){return{func:e,args:n||[]}}n.initializeCommunication=function(e,n){s.messageListener=function(e){return u(e)},a.currentWindow=a.currentWindow||window,a.parentWindow=a.currentWindow.parent!==a.currentWindow.self?a.currentWindow.parent:a.currentWindow.opener,(a.parentWindow||n)&&a.currentWindow.addEventListener("message",s.messageListener,!1),a.parentWindow||(o.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=f);try{a.parentOrigin="*",l("initialize",[i.version],e)}finally{a.parentOrigin=null}},n.uninitializeCommunication=function(){a.currentWindow.removeEventListener("message",s.messageListener,!1),a.parentWindow=null,a.parentOrigin=null,a.childWindow=null,a.childOrigin=null,s.parentMessageQueue=[],s.childMessageQueue=[],s.nextMessageId=0,s.callbacks={}},n.sendMessageToParent=l,n.waitForMessageQueue=function(e,n){var t=a.currentWindow.setInterval(function(){0===p(e).length&&(clearInterval(t),n())},100)},n.sendMessageEventToChild=function(e,n){var t=a.childWindow,i=y(e,n),o=C(t);t&&o?t.postMessage(i,o):p(t).push(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(7),o=t(6),r=t(4);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!o.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(o.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,i=0;i<e.length;i++)if(e[i]===o.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+o.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=i.defaultSDKVersionForCompatCheck);var n=r.compareSDKVersions(o.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processAdditionalValidOrigins=function(e){var n=o.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&i.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),o.GlobalVars.additionalValidOrigins=n,o.GlobalVars.additionalValidOrigins.length>0?o.GlobalVars.additionalValidOriginsRegexp=r.generateRegExpFromUrls(o.GlobalVars.additionalValidOrigins):o.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.dialog="dialog",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.DialogDimension||(n.DialogDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(9),o=t(0),r=function(){function e(){}return e.handlers={},e}();function a(e){r.themeChangeHandler&&r.themeChangeHandler(e),o.Communication.childWindow&&o.sendMessageEventToChild("themeChange",[e])}function s(){r.backButtonPressHandler&&r.backButtonPressHandler()||i.pages.navigateBack()}function l(e){r.loadHandler&&r.loadHandler(e),o.Communication.childWindow&&o.sendMessageEventToChild("load",[e])}function u(){var e=function(){o.sendMessageToParent("readyToUnload",[])};r.beforeUnloadHandler&&r.beforeUnloadHandler(e)||e()}n.initializeHandlers=function(){r.handlers.themeChange=a,r.handlers.backButtonPress=s,r.handlers.load=l,r.handlers.beforeUnload=u},n.callHandler=function(e,n){var t=r.handlers[e];return t?[!0,t.apply(this,n)]:[!1,void 0]},n.registerHandler=function(e,n,t,i){void 0===t&&(t=!0),void 0===i&&(i=[]),n?(r.handlers[e]=n,t&&o.sendMessageToParent("registerHandler",[e].concat(i))):delete r.handlers[e]},n.removeHandler=function(e){delete r.handlers[e]},n.registerOnThemeChangeHandler=function(e){r.themeChangeHandler=e,e&&o.sendMessageToParent("registerHandler",["themeChange"])},n.handleThemeChange=a,n.registerBackButtonHandler=function(e){r.backButtonPressHandler=e,e&&o.sendMessageToParent("registerHandler",["backButton"])},n.registerOnLoadHandler=function(e){r.loadHandler=e,e&&o.sendMessageToParent("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){r.beforeUnloadHandler=e,e&&o.sendMessageToParent("registerHandler",["beforeUnload"])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(25);function o(e){for(var n="^",t=e.split("."),i=0;i<t.length;i++)n+=(i>0?"[.]":"")+t[i].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+o(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),i=n.split(".");function o(e){return/^\d+$/.test(e)}if(!t.every(o)||!i.every(o))return NaN;for(;t.length<i.length;)t.push("0");for(;i.length<t.length;)i.push("0");for(var r=0;r<t.length;++r)if(Number(t[r])!=Number(i[r]))return Number(t[r])>Number(i[r])?1:-1;return 0},n.generateGUID=function(){return i.v4()},n.deepFreeze=function e(n){return Object.keys(n).forEach(function(t){"object"==typeof n[t]&&e(n[t])}),Object.freeze(n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(4);n.applyRuntimeConfig=function(e){n.runtime=i.deepFreeze(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(4);n.version="1.9.0",n.defaultSDKVersionForCompatCheck="1.6.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com","http://127.0.0.1:5000"],n.validOriginRegExp=i.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(3),r=t(1),a=t(4),s=t(2),l=t(5);!function(e){e.returnFocus=function(e){r.ensureInitialized(s.FrameContexts.content),i.sendMessageToParent("returnFocus",[e])},e.navigateCrossDomain=function(e,n){r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.sidePanel,s.FrameContexts.settings,s.FrameContexts.remove,s.FrameContexts.task,s.FrameContexts.stage,s.FrameContexts.meetingStage),i.sendMessageToParent("navigateCrossDomain",[e],n||a.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))},e.navigateBack=function(e){r.ensureInitialized(),i.sendMessageToParent("navigateBack",[],e||a.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context."))},e.isSupported=function(){return!!l.runtime.supports.pages},function(e){e.navigateToTab=function(e,n){r.ensureInitialized(),i.sendMessageToParent("navigateToTab",[e],n||a.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided"))},e.getTabInstances=function(e,n){r.ensureInitialized(),i.sendMessageToParent("getTabInstances",[n],e)},e.getMruTabInstances=function(e,n){r.ensureInitialized(),i.sendMessageToParent("getMruTabInstances",[n],e)},e.isSupported=function(){return!!l.runtime.supports.pages&&!!l.runtime.supports.pages.tabs}}(e.tabs||(e.tabs={})),function(e){var n,t;function u(e){var t=new c(e);n?n(t):t.notifySuccess()}e.initialize=function(){o.registerHandler("settings.save",u,!1),o.registerHandler("settings.remove",d,!1)},e.setValidityState=function(e){r.ensureInitialized(s.FrameContexts.settings,s.FrameContexts.remove),i.sendMessageToParent("settings.setValidityState",[e])},e.getConfig=function(e){r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.settings,s.FrameContexts.remove),i.sendMessageToParent("settings.getSettings",e)},e.setConfig=function(e,n){r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.settings),i.sendMessageToParent("settings.setSettings",[e],n||a.getGenericOnCompleteHandler())},e.registerOnSaveHandler=function(e){r.ensureInitialized(s.FrameContexts.settings),n=e,e&&i.sendMessageToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){r.ensureInitialized(s.FrameContexts.remove,s.FrameContexts.settings),t=e,e&&i.sendMessageToParent("registerHandler",["remove"])};var c=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),i.sendMessageToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),i.sendMessageToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function d(){var e=new f;t?t(e):e.notifySuccess()}var f=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),i.sendMessageToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),i.sendMessageToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}();e.isSupported=function(){return!!l.runtime.supports.pages&&!!l.runtime.supports.pages.config}}(e.config||(e.config={}))}(n.pages||(n.pages={}))},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var i=new Uint8Array(16);e.exports=function(){return t(i),i}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},function(e,n){for(var t=[],i=0;i<256;++i)t[i]=(i+256).toString(16).substr(1);e.exports=function(e,n){var i=n||0,o=t;return[o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(0),r=t(3);!function(e){var n,t,a,s=function(){return function(){this.enabled=!0,this.selected=!1}}();function l(e){a&&a(e)||(i.ensureInitialized(),o.sendMessageToParent("viewConfigItemPress",[e]))}function u(e){n&&n(e)||(i.ensureInitialized(),o.sendMessageToParent("handleNavBarMenuItemPress",[e]))}function c(e){t&&t(e)||(i.ensureInitialized(),o.sendMessageToParent("handleActionMenuItemPress",[e]))}e.MenuItem=s,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){r.registerHandler("navBarMenuItemPress",u,!1),r.registerHandler("actionMenuItemPress",c,!1),r.registerHandler("setModuleView",l,!1)},e.setUpViews=function(e,n){i.ensureInitialized(),a=n,o.sendMessageToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){i.ensureInitialized(),n=t,o.sendMessageToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){i.ensureInitialized(),t=n,o.sendMessageToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(0),r=t(3);!function(e){e.registerGetLogHandler=function(e){i.ensureInitialized(),e?r.registerHandler("log.request",function(){var n=e();o.sendMessageToParent("log.receive",[n])}):r.removeHandler("log.request")}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),r=t(4),a=t(0),s=t(12),l=t(3);n.initializePrivateApis=function(){s.menus.initialize()},n.getUserJoinedTeams=function(e,n){i.ensureInitialized(),a.sendMessageToParent("getUserJoinedTeams",[n],e)},n.enterFullscreen=function(){i.ensureInitialized(o.FrameContexts.content),a.sendMessageToParent("enterFullscreen",[])},n.exitFullscreen=function(){i.ensureInitialized(o.FrameContexts.content),a.sendMessageToParent("exitFullscreen",[])},n.openFilePreview=function(e){i.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference];a.sendMessageToParent("openFilePreview",n)},n.uploadCustomApp=function(e,n){i.ensureInitialized(),a.sendMessageToParent("uploadCustomApp",[e],n||r.getGenericOnCompleteHandler())},n.sendCustomMessage=function(e,n,t){i.ensureInitialized(),a.sendMessageToParent(e,n,t)},n.sendCustomEvent=function(e,n){if(i.ensureInitialized(),!a.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;i.ensureInitialized(),l.registerHandler(e,function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return n.apply(t,e)})},n.getChatMembers=function(e){i.ensureInitialized(),a.sendMessageToParent("getChatMembers",e)},n.getConfigSetting=function(e,n){i.ensureInitialized(),a.sendMessageToParent("getConfigSetting",[n],e)},n.registerUserSettingsChangeHandler=function(e,n){i.ensureInitialized(),l.registerHandler("userSettingsChange",n,!0,[e])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(31);n.appInitialization=i.appInitialization;var o=t(16);n.authentication=o.authentication;var r=t(2);n.FrameContexts=r.FrameContexts,n.HostClientType=r.HostClientType,n.DialogDimension=r.DialogDimension,n.TeamType=r.TeamType,n.UserTeamRole=r.UserTeamRole,n.ChannelType=r.ChannelType;var a=t(8);n.ErrorCode=a.ErrorCode,n.FileOpenPreference=a.FileOpenPreference;var s=t(17);n.core=s.core;var l=t(32);n.dialog=l.dialog;var u=t(9);n.pages=u.pages;var c=t(19);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var d=t(20);n.media=d.media;var f=t(33);n.location=f.location;var m=t(34);n.meeting=m.meeting;var g=t(35);n.calendar=g.calendar;var p=t(36);n.mail=p.mail;var C=t(18);n.teamsCore=C.teamsCore;var h=t(37);n.people=h.people},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(6),r=t(2),a=t(0),s=t(3);!function(e){var n,t;function l(){c();try{a.Communication.childWindow&&a.Communication.childWindow.close()}finally{a.Communication.childWindow=null,a.Communication.childOrigin=null}}function u(e){n=e,l();var t=n.width||600,i=n.height||400;t=Math.min(t,a.Communication.currentWindow.outerWidth-400),i=Math.min(i,a.Communication.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=n.url;var r=void 0!==a.Communication.currentWindow.screenLeft?a.Communication.currentWindow.screenLeft:a.Communication.currentWindow.screenX,s=void 0!==a.Communication.currentWindow.screenTop?a.Communication.currentWindow.screenTop:a.Communication.currentWindow.screenY;r+=a.Communication.currentWindow.outerWidth/2-t/2,s+=a.Communication.currentWindow.outerHeight/2-i/2,a.Communication.childWindow=a.Communication.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+s+", left="+r+", width="+t+", height="+i),a.Communication.childWindow?d():m("FailedToOpenWindow")}function c(){t&&(clearInterval(t),t=0),s.removeHandler("initialize"),s.removeHandler("navigateCrossDomain")}function d(){c(),t=a.Communication.currentWindow.setInterval(function(){if(!a.Communication.childWindow||a.Communication.childWindow.closed)m("CancelledByUser");else{var e=a.Communication.childOrigin;try{a.Communication.childOrigin="*",a.sendMessageEventToChild("ping")}finally{a.Communication.childOrigin=e}}},100),s.registerHandler("initialize",function(){return[r.FrameContexts.authentication,o.GlobalVars.hostClientType]}),s.registerHandler("navigateCrossDomain",function(){return!1})}function f(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,l()}}function m(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,l()}}function g(e,n,t){if(e){var i=document.createElement("a");i.href=decodeURIComponent(e),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(i.href=p(i.href,"result",t)),a.Communication.currentWindow.location.assign(p(i.href,"authSuccess",""))),n&&"reason"===n&&(t&&(i.href=p(i.href,"reason",t)),a.Communication.currentWindow.location.assign(p(i.href,"authFailure",""))))}}function p(e,n,t){var i=e.indexOf("#"),o=-1===i?"#":e.substr(i);return o=o+"&"+n+(""!==t?"="+t:""),(e=-1===i?e:e.substr(0,i))+o}e.initialize=function(){s.registerHandler("authentication.authenticate.success",f,!1),s.registerHandler("authentication.authenticate.failure",m,!1)},e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(i.ensureInitialized(r.FrameContexts.content,r.FrameContexts.sidePanel,r.FrameContexts.settings,r.FrameContexts.remove,r.FrameContexts.task,r.FrameContexts.stage,r.FrameContexts.meetingStage),o.GlobalVars.hostClientType===r.HostClientType.desktop||o.GlobalVars.hostClientType===r.HostClientType.android||o.GlobalVars.hostClientType===r.HostClientType.ios||o.GlobalVars.hostClientType===r.HostClientType.rigel){var s=document.createElement("a");s.href=t.url,a.sendMessageToParent("authentication.authenticate",[s.href,t.width,t.height],function(e,n){e?t.successCallback(n):t.failureCallback(n)})}else u(t)},e.getAuthToken=function(e){i.ensureInitialized(),a.sendMessageToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent],function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.getUser=function(e){i.ensureInitialized(),a.sendMessageToParent("authentication.getUser",function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.notifySuccess=function(e,n){g(n,"result",e),i.ensureInitialized(r.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){g(n,"reason",e),i.ensureInitialized(r.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(6),r=t(7),a=t(9),s=t(4),l=t(13),u=t(2),c=t(0),d=t(16),f=t(14),m=t(3),g=t(18),p=t(5);!function(e){function n(e){i.ensureInitialized(),m.registerOnThemeChangeHandler(e)}e.initialize=function(e,t){o.GlobalVars.initializeCalled||(o.GlobalVars.initializeCalled=!0,m.initializeHandlers(),c.initializeCommunication(function(e,n,t,i){void 0===i&&(i=r.defaultSDKVersionForCompatCheck),o.GlobalVars.frameContext=e,o.GlobalVars.hostClientType=n,o.GlobalVars.clientSupportedSDKVersion=i,o.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),o.GlobalVars.initializeCallbacks=[],o.GlobalVars.initializeCompleted=!0,t&&p.applyRuntimeConfig(JSON.parse(t))},t),d.authentication.initialize(),a.pages.config.initialize(),f.initializePrivateApis(),this._uninitialize=function(){o.GlobalVars.frameContext&&(n(null),g.teamsCore.registerFullScreenHandler(null),g.teamsCore.registerBackButtonHandler(null),g.teamsCore.registerBeforeUnloadHandler(null),g.teamsCore.registerOnLoadHandler(null),l.logs.registerGetLogHandler(null)),o.GlobalVars.frameContext===u.FrameContexts.settings&&a.pages.config.registerOnSaveHandler(null),o.GlobalVars.frameContext===u.FrameContexts.remove&&a.pages.config.registerOnRemoveHandler(null),o.GlobalVars.initializeCalled=!1,o.GlobalVars.initializeCompleted=!1,o.GlobalVars.initializeCallbacks=[],o.GlobalVars.additionalValidOrigins=[],o.GlobalVars.frameContext=null,o.GlobalVars.hostClientType=null,o.GlobalVars.isFramelessWindow=!1,c.uninitializeCommunication()}),Array.isArray(t)&&i.processAdditionalValidOrigins(t),e&&(o.GlobalVars.initializeCompleted?e():o.GlobalVars.initializeCallbacks.push(e))},e._initialize=function(e){c.Communication.currentWindow=e},e._uninitialize=function(){},e.getContext=function(e){i.ensureInitialized(),c.sendMessageToParent("getContext",function(n){n.frameContext||(n.frameContext=o.GlobalVars.frameContext),e(n)})},e.registerOnThemeChangeHandler=n,e.shareDeepLink=function(e){i.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.meetingStage),c.sendMessageToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},e.executeDeepLink=function(e,n){i.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage,u.FrameContexts.meetingStage),c.sendMessageToParent("executeDeepLink",[e],n||s.getGenericOnCompleteHandler())}}(n.core||(n.core={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(6),r=t(2),a=t(17),s=t(3),l=t(0);!function(e){function n(){window.print()}function t(e){i.ensureInitialized(r.FrameContexts.content),l.sendMessageToParent("setFrameContext",[e])}e.enablePrintCapability=function(){o.GlobalVars.printCapabilityEnabled||(o.GlobalVars.printCapabilityEnabled=!0,i.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},e.print=n,e.registerFullScreenHandler=function(e){i.ensureInitialized(),s.registerHandler("fullScreenChange",e)},e.registerAppButtonClickHandler=function(e){i.ensureInitialized(r.FrameContexts.content),s.registerHandler("appButtonClick",e)},e.registerAppButtonHoverEnterHandler=function(e){i.ensureInitialized(r.FrameContexts.content),s.registerHandler("appButtonHoverEnter",e)},e.registerAppButtonHoverLeaveHandler=function(e){i.ensureInitialized(r.FrameContexts.content),s.registerHandler("appButtonHoverLeave",e)},e.registerBackButtonHandler=function(e){i.ensureInitialized(),s.registerBackButtonHandler(e)},e.registerChangeSettingsHandler=function(e){i.ensureInitialized(r.FrameContexts.content),s.registerHandler("changeSettings",e)},e.setFrameContext=t,e.initializeWithFrameContext=function(e,n,i){a.core.initialize(n,i),t(e)},e.registerOnLoadHandler=function(e){i.ensureInitialized(),s.registerOnLoadHandler(e)},e.registerBeforeUnloadHandler=function(e){i.ensureInitialized(),s.registerBeforeUnloadHandler(e)}}(n.teamsCore||(n.teamsCore={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),r=t(4),a=t(0),s=t(3),l=function(){function e(){}return e.prototype.postMessage=function(e,n){i.ensureInitialized(),a.sendMessageToParent("messageForChild",[e],n||r.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForParent",n)},e}();n.ChildAppWindow=l;var u=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){i.ensureInitialized(o.FrameContexts.task),a.sendMessageToParent("messageForParent",[e],n||r.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForChild",n)},e}();n.ParentAppWindow=u},function(e,n,t){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=t(6),r=t(8),a=t(1),s=t(2),l=t(4),u=t(21),c=t(0),d=t(3);!function(e){var n="1.8.0";!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var t=function(){return function(){}}();e.File=t,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),o.GlobalVars.isFramelessWindow?a.isAPISupportedByPlatform("1.7.0")?c.sendMessageToParent("captureImage",e):e({errorCode:r.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:r.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var f=function(e){function t(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return i(t,e),t.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(n)?u.validateGetMediaInputs(this.mimeType,this.format,this.content)?a.isAPISupportedByPlatform("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:r.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:r.ErrorCode.OLD_PLATFORM},null)},t.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content];c.sendMessageToParent("getMedia",t,function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var i=u.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,i)}else{var o=u.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(o)}else e({errorCode:r.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)})},t.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},i=[n,this.content];this.content&&e&&c.sendMessageToParent("getMedia",i),d.registerHandler("getMedia"+n,function(i){if(e){var o=JSON.parse(i);if(o.error)e(o.error,null),d.removeHandler("getMedia"+n);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){var a=u.createFile(t.assembleAttachment,t.mediaMimeType);e(o.error,a),d.removeHandler("getMedia"+n)}else{var s=u.decodeAttachment(o.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:r.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),d.removeHandler("getMedia"+n)}})},t}(t);e.Media=f,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,t){if(!t)throw new Error("[select Media] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(n))if(u.validateSelectMediaInputs(e)){var i=[e];c.sendMessageToParent("selectMedia",i,function(e,n){if(n){for(var i=[],o=0,r=n;o<r.length;o++){var a=r[o];i.push(new f(a))}t(e,i)}else t(e,null)})}else{var o={errorCode:r.ErrorCode.INVALID_ARGUMENTS};t(o,null)}else{var l={errorCode:r.ErrorCode.OLD_PLATFORM};t(l,null)}},e.viewImages=function(e,t){if(!t)throw new Error("[view images] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(n))if(u.validateViewImagesInput(e)){var i=[e];c.sendMessageToParent("viewImages",i,t)}else t({errorCode:r.ErrorCode.INVALID_ARGUMENTS});else t({errorCode:r.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),o.GlobalVars.hostClientType!==s.HostClientType.desktop&&o.GlobalVars.hostClientType!==s.HostClientType.web&&o.GlobalVars.hostClientType!==s.HostClientType.rigel?a.isAPISupportedByPlatform("1.9.0")?u.validateScanBarCodeInput(n)?c.sendMessageToParent("media.scanBarCode",[n],e):e({errorCode:r.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:r.ErrorCode.OLD_PLATFORM},null):e({errorCode:r.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(20);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,i=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==i&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),i++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),i=new Array(t.length),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);var r=new Uint8Array(i),a=new Blob([r],{type:n});return{sequence:e.chunkSequence,file:a}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==i.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)},n.validatePeoplePickerInput=function(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}},function(e,n,t){"use strict";function i(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),i(t(23)),i(t(15))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(24);n.bot=i.bot;var o=t(12);n.menus=o.menus;var r=t(13);n.logs=r.logs;var a=t(28);n.NotificationTypes=a.NotificationTypes,n.ViewerActionTypes=a.ViewerActionTypes,n.UserSettingTypes=a.UserSettingTypes;var s=t(14);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp,n.registerUserSettingsChangeHandler=s.registerUserSettingsChangeHandler;var l=t(29);n.conversations=l.conversations;var u=t(30);n.files=u.files;var c=t(38);n.meetingRoom=c.meetingRoom;var d=t(39);n.notifications=d.notifications;var f=t(40);n.remoteCamera=f.remoteCamera},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(1);!function(e){e.sendQuery=function(e,n,t){o.ensureInitialized(),i.sendMessageToParent("bot.executeQuery",[e],function(e,i){e?n(i):t(i)})},e.getSupportedCommands=function(e,n){o.ensureInitialized(),i.sendMessageToParent("bot.getSupportedCommands",function(t,i){t?e(i):n(i)})},e.authenticate=function(e,n,t){o.ensureInitialized(),i.sendMessageToParent("bot.authenticate",[e],function(e,i){e?n(i):t(i)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var i=t(26),o=t(27),r=o;r.v1=i,r.v4=o,e.exports=r},function(e,n,t){var i,o,r=t(10),a=t(11),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,c=n||[],d=(e=e||{}).node||i,f=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==f){var m=r();null==d&&(d=i=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=o=16383&(m[6]<<8|m[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:l+1,C=g-s+(p-l)/1e4;if(C<0&&void 0===e.clockseq&&(f=f+1&16383),(C<0||g>s)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=p,o=f;var h=(1e4*(268435455&(g+=122192928e5))+p)%4294967296;c[u++]=h>>>24&255,c[u++]=h>>>16&255,c[u++]=h>>>8&255,c[u++]=255&h;var v=g/4294967296*1e4&268435455;c[u++]=v>>>8&255,c[u++]=255&v,c[u++]=v>>>24&15|16,c[u++]=v>>>16&255,c[u++]=f>>>8|128,c[u++]=255&f;for(var b=0;b<6;++b)c[u+b]=d[b];return n||a(c)}},function(e,n,t){var i=t(10),o=t(11);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[r+s]=a[s];return n||o(a)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),r=t(0),a=t(3);!function(e){e.openConversation=function(e){i.ensureInitialized(o.FrameContexts.content),r.sendMessageToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}],function(e,n){if(!e)throw new Error(n)}),e.onStartConversation&&a.registerHandler("startConversation",function(n,t,i,o){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:i,entityId:o})}),e.onCloseConversation&&a.registerHandler("closeConversation",function(n,t,i,o){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:i,entityId:o})})},e.closeConversation=function(){i.ensureInitialized(o.FrameContexts.content),r.sendMessageToParent("conversations.closeConversation"),a.removeHandler("startConversation"),a.removeHandler("closeConversation")}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(1),r=t(15);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e,n){if(o.ensureInitialized(r.FrameContexts.content),!e||0==e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");i.sendMessageToParent("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(o.ensureInitialized(r.FrameContexts.content),!e||0==e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");i.sendMessageToParent("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(o.ensureInitialized(r.FrameContexts.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");i.sendMessageToParent("files.deleteCloudStorageFolder",[e,n],t)}}(n.files||(n.files={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(7),r=t(0);!function(e){e.notifyAppLoaded=function(){i.ensureInitialized(),r.sendMessageToParent("appInitialization.appLoaded",[o.version])},e.notifySuccess=function(){i.ensureInitialized(),r.sendMessageToParent("appInitialization.success",[o.version])},e.notifyFailure=function(e){i.ensureInitialized(),r.sendMessageToParent("appInitialization.failure",[e.reason,e.message])},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";var i=this&&this.__rest||function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&(t[i[o]]=e[i[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=t(19),a=t(0),s=t(1),l=t(5);!function(e){e.open=function(e,n){return s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.meetingStage),a.sendMessageToParent("tasks.startTask",[e],n),new r.ChildAppWindow},e.resize=function(e){s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.dialog,o.FrameContexts.meetingStage),e.width,e.height;var n=i(e,["width","height"]);if(Object.keys(n).length)throw new Error("resize requires a dialogInfo argument containing only width and height");a.sendMessageToParent("tasks.updateTask",[e])},e.submit=function(e,n){s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.dialog,o.FrameContexts.meetingStage),a.sendMessageToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])},e.isSupported=function(){return!!l.runtime.supports.dialog}}(n.dialog||(n.dialog={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(8),o=t(1),r=t(2),a=t(0),s=t(5);!function(e){e.locationAPIsRequiredVersion="1.9.0",e.getLocation=function(n,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");o.ensureInitialized(r.FrameContexts.content,r.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion)?n?a.sendMessageToParent("location.getLocation",[n],t):t({errorCode:i.ErrorCode.INVALID_ARGUMENTS},void 0):t({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(n,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");o.ensureInitialized(r.FrameContexts.content,r.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion)?n?a.sendMessageToParent("location.showLocation",[n],t):t({errorCode:i.ErrorCode.INVALID_ARGUMENTS},void 0):t({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)},e.isSupported=function(){return!!s.runtime.supports.location}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(3),r=t(1),a=t(2),s=t(5);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");r.ensureInitialized(),i.sendMessageToParent("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");r.ensureInitialized(),i.sendMessageToParent("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");r.ensureInitialized(),i.sendMessageToParent("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");r.ensureInitialized(),i.sendMessageToParent("meeting.getAuthenticationTokenForAnonymousUser",e)},e.isSupported=function(){return!!s.runtime.supports.meeting},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");r.ensureInitialized(a.FrameContexts.sidePanel),i.sendMessageToParent("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");r.ensureInitialized(a.FrameContexts.sidePanel),i.sendMessageToParent("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");r.ensureInitialized(a.FrameContexts.sidePanel),i.sendMessageToParent("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");r.ensureInitialized(a.FrameContexts.sidePanel),o.registerHandler("meeting.liveStreamChanged",e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(4),r=t(2),a=t(0),s=t(5);!function(e){function n(){return!!s.runtime.supports.calendar}e.openCalendarItem=function(e,t){if(i.ensureInitialized(r.FrameContexts.content),!n())throw"Not Supported";a.sendMessageToParent("calendar.openCalendarItem",[e],t||o.getGenericOnCompleteHandler())},e.composeMeeting=function(e,t){if(i.ensureInitialized(r.FrameContexts.content),!n())throw"Not Supported";a.sendMessageToParent("calendar.composeMeeting",[e],t||o.getGenericOnCompleteHandler())},e.isSupported=n}(n.calendar||(n.calendar={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(4),r=t(2),a=t(5),s=t(0);!function(e){function n(){return!!a.runtime.supports.mail}e.openMailItem=function(e,t){if(i.ensureInitialized(r.FrameContexts.content),!n())throw"Not Supported";s.sendMessageToParent("mail.openMailItem",[e],t||o.getGenericOnCompleteHandler())},e.composeMail=function(e,t){if(i.ensureInitialized(r.FrameContexts.content),!n())throw"Not Supported";s.sendMessageToParent("mail.composeMail",[e],t||o.getGenericOnCompleteHandler())},e.isSupported=n}(n.mail||(n.mail={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),r=t(8),a=t(21),s=t(0);!function(e){e.peoplePickerRequiredVersion="2.0.0",e.selectPeople=function(n,t){if(!n)throw new Error("[people picker] Callback cannot be null");i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task,o.FrameContexts.settings),i.isAPISupportedByPlatform(e.peoplePickerRequiredVersion)?a.validatePeoplePickerInput(t)?s.sendMessageToParent("people.selectPeople",[t],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},null):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.people||(n.people={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(0),r=t(3);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){i.ensureInitialized(),o.sendMessageToParent("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");i.ensureInitialized(),o.sendMessageToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");i.ensureInitialized(),r.registerHandler("meetingRoom.meetingRoomCapabilitiesUpdate",function(n){i.ensureInitialized(),e(n)})},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");i.ensureInitialized(),r.registerHandler("meetingRoom.meetingRoomStatesUpdate",function(n){i.ensureInitialized(),e(n)})}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),r=t(0),a=t(5);!function(e){e.showNotification=function(e){i.ensureInitialized(o.FrameContexts.content),r.sendMessageToParent("notifications.showNotification",[e])},e.isSupported=function(){return!!a.runtime.supports.notifications}}(n.notifications||(n.notifications={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),r=t(0),a=t(3);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),r.sendMessageToParent("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),r.sendMessageToParent("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),r.sendMessageToParent("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),r.sendMessageToParent("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");i.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("remoteCamera.sessionStatusChange",e)}}(n.remoteCamera||(n.remoteCamera={}))}])}()}(window)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";function i(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),i(t(3)),i(t(12))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(4);n.bot=i.bot;var o=t(5);n.menus=o.menus;var r=t(6);n.logs=r.logs;var a=t(7);n.NotificationTypes=a.NotificationTypes,n.ViewerActionTypes=a.ViewerActionTypes;var s=t(8);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp;var l=t(9);n.conversations=l.conversations;var u=t(10);n.meetingRoom=u.meetingRoom;var c=t(11);n.remoteCamera=c.remoteCamera},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.sendQuery=function(e,n,t){i.bot.sendQuery(e,n,t)},e.getSupportedCommands=function(e,n){i.bot.getSupportedCommands(e,n)},e.authenticate=function(e,n,t){i.bot.authenticate(e,n,t)},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){var n=function(){function e(){this._inner=new i.menus.MenuItem}return Object.defineProperty(e.prototype,"id",{get:function(){return this._inner.id},set:function(e){this._inner.id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._inner.title},set:function(e){this._inner.title=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"icon",{get:function(){return this._inner.icon},set:function(e){this._inner.icon=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"iconSelected",{get:function(){return this._inner.iconSelected},set:function(e){this._inner.iconSelected=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentDescription",{get:function(){return this._inner.contentDescription},set:function(e){this._inner.contentDescription=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"enabled",{get:function(){return this._inner.enabled},set:function(e){this._inner.enabled=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"viewData",{get:function(){return this._inner.viewData},set:function(e){this._inner.viewData=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selected",{get:function(){return this._inner.selected},set:function(e){this._inner.selected=e},enumerable:!0,configurable:!0}),e}();e.MenuItem=n,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.setUpViews=function(e,n){i.menus.setUpViews(e,n)},e.setNavBarMenu=function(e,n){i.menus.setNavBarMenu(e,n)},e.showActionMenu=function(e,n){i.menus.showActionMenu(e,n)}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.registerGetLogHandler=function(e){i.logs.registerGetLogHandler(e)}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);n.getUserJoinedTeams=function(e,n){i.getUserJoinedTeams(e,n)},n.enterFullscreen=function(){i.enterFullscreen()},n.exitFullscreen=function(){i.exitFullscreen()},n.openFilePreview=function(e){i.openFilePreview(e)},n.showNotification=function(e){i.notifications.showNotification(e)},n.uploadCustomApp=function(e,n){i.uploadCustomApp(e,n)},n.sendCustomMessage=function(e,n,t){i.sendCustomMessage(e,n,t)},n.sendCustomEvent=function(e,n){i.sendCustomEvent(e,n)},n.registerCustomHandler=function(e,n){i.registerCustomHandler(e,n)},n.getChatMembers=function(e){i.getChatMembers(e)},n.getConfigSetting=function(e,n){i.getConfigSetting(e,n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.openConversation=function(e){i.conversations.openConversation(e)},e.closeConversation=function(){i.conversations.closeConversation()}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){i.meetingRoom.getPairedMeetingRoomInfo(e)},e.sendCommandToPairedMeetingRoom=function(e,n){i.meetingRoom.sendCommandToPairedMeetingRoom(e,n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){i.meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler(e)},e.registerMeetingRoomStatesUpdateHandler=function(e){i.meetingRoom.registerMeetingRoomStatesUpdateHandler(e)}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){i.remoteCamera.getCapableParticipants(e)},e.requestControl=function(e,n){i.remoteCamera.requestControl(e,n)},e.sendControlCommand=function(e,n){i.remoteCamera.sendControlCommand(e,n)},e.terminateSession=function(e){i.remoteCamera.terminateSession(e)},e.registerOnCapableParticipantsChangeHandler=function(e){i.remoteCamera.registerOnCapableParticipantsChangeHandler(e)},e.registerOnErrorHandler=function(e){i.remoteCamera.registerOnErrorHandler(e)},e.registerOnDeviceStateChangeHandler=function(e){i.remoteCamera.registerOnDeviceStateChangeHandler(e)},e.registerOnSessionStatusChangeHandler=function(e){i.remoteCamera.registerOnSessionStatusChangeHandler(e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(13);n.appInitialization=i.appInitialization;var o=t(14);n.authentication=o.authentication;var r=t(1);n.FrameContexts=r.FrameContexts,n.HostClientType=r.HostClientType,n.TaskModuleDimension=r.TaskModuleDimension,n.TeamType=r.TeamType,n.UserTeamRole=r.UserTeamRole,n.ChannelType=r.ChannelType;var a=t(15);n.ErrorCode=a.ErrorCode;var s=t(16);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=s.registerChangeSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(17);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var u=t(18);n.settings=u.settings;var c=t(19);n.tasks=c.tasks;var d=t(20);n.ChildAppWindow=d.ChildAppWindow,n.ParentAppWindow=d.ParentAppWindow;var f=t(21);n.media=f.media;var m=t(22);n.location=m.location;var g=t(23);n.meeting=g.meeting},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.notifyAppLoaded=function(){i.appInitialization.notifyAppLoaded()},e.notifySuccess=function(){i.appInitialization.notifySuccess()},e.notifyFailure=function(e){i.appInitialization.notifyFailure(e)},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.registerAuthenticationHandlers=function(e){i.authentication.registerAuthenticationHandlers(e)},e.authenticate=function(e){i.authentication.authenticate(e)},e.getAuthToken=function(e){i.authentication.getAuthToken(e)},e.getUser=function(e){i.authentication.getUser(e)},e.notifySuccess=function(e,n){i.authentication.notifySuccess(e,n)},e.notifyFailure=function(e,n){i.authentication.notifyFailure(e,n)}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);n.initialize=function(e,n){i.core.initialize(e,n)},n._initialize=function(e){i.core._initialize(e)},n._uninitialize=function(){i.core._uninitialize()},n.enablePrintCapability=function(){i.teamsCore.enablePrintCapability()},n.print=function(){i.teamsCore.print()},n.getContext=function(e){i.core.getContext(e)},n.registerOnThemeChangeHandler=function(e){i.core.registerOnThemeChangeHandler(e)},n.registerFullScreenHandler=function(e){i.teamsCore.registerFullScreenHandler(e)},n.registerAppButtonClickHandler=function(e){i.teamsCore.registerAppButtonClickHandler(e)},n.registerAppButtonHoverEnterHandler=function(e){i.teamsCore.registerAppButtonHoverEnterHandler(e)},n.registerAppButtonHoverLeaveHandler=function(e){i.teamsCore.registerAppButtonHoverLeaveHandler(e)},n.registerBackButtonHandler=function(e){i.teamsCore.registerBackButtonHandler(e)},n.registerOnLoadHandler=function(e){i.teamsCore.registerOnLoadHandler(e)},n.registerBeforeUnloadHandler=function(e){i.teamsCore.registerBeforeUnloadHandler(e)},n.registerChangeSettingsHandler=function(e){i.teamsCore.registerChangeSettingsHandler(e)},n.getTabInstances=function(e,n){i.pages.tabs.getTabInstances(e,n)},n.getMruTabInstances=function(e,n){i.pages.tabs.getMruTabInstances(e,n)},n.shareDeepLink=function(e){i.core.shareDeepLink(e)},n.executeDeepLink=function(e,n){i.core.executeDeepLink(e,n)},n.setFrameContext=function(e){i.teamsCore.setFrameContext(e)},n.initializeWithFrameContext=function(e,n,t){i.teamsCore.initializeWithFrameContext(e,n,t)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);n.returnFocus=function(e){i.pages.returnFocus(e)},n.navigateToTab=function(e,n){i.pages.tabs.navigateToTab(e,n)},n.navigateCrossDomain=function(e,n){i.pages.navigateCrossDomain(e,n)},n.navigateBack=function(e){i.pages.navigateBack(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.setValidityState=function(e){i.pages.config.setValidityState(e)},e.getSettings=function(e){i.pages.config.getConfig(e)},e.setSettings=function(e,n){i.pages.config.setConfig(e,n)},e.registerOnSaveHandler=function(e){i.pages.config.registerOnSaveHandler(e)},e.registerOnRemoveHandler=function(e){i.pages.config.registerOnRemoveHandler(e)}}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(1);!function(e){function n(e){var n=e.height&&"number"!=typeof e.height?t(e.height):e.height,i=e.width&&"number"!=typeof e.width?t(e.width):e.width;return{url:e.url,card:e.card,height:n,width:i,title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function t(e){return e===o.TaskModuleDimension.Large?i.DialogDimension.Large:e===o.TaskModuleDimension.Medium?i.DialogDimension.Medium:i.DialogDimension.Small}e.startTask=function(e,t){return i.dialog.open(n(e),t)},e.updateTask=function(e){i.dialog.resize(n(e))},e.submitTask=function(e,n){i.dialog.submit(e,n)}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=function(){function e(){this._inner=new i.ChildAppWindow}return e.prototype.postMessage=function(e,n){this._inner.postMessage(e,n)},e.prototype.addEventListener=function(e,n){this._inner.addEventListener(e,n)},e}();n.ChildAppWindow=o;var r=function(){function e(){this._inner=e.Instance}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){this._inner.postMessage(e,n)},e.prototype.addEventListener=function(e,n){this._inner.addEventListener(e,n)},e}();n.ParentAppWindow=r},function(e,n,t){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){function e(e){this._innerFile=e}return Object.defineProperty(e.prototype,"content",{get:function(){return this._innerFile.content},set:function(e){this._innerFile.content=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"format",{get:function(){return this._innerFile.format},set:function(e){this._innerFile.format=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._innerFile.size},set:function(e){this._innerFile.size=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mimeType",{get:function(){return this._innerFile.mimeType},set:function(e){this._innerFile.mimeType=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._innerFile.name},set:function(e){this._innerFile.name=e},enumerable:!0,configurable:!0}),e}();e.File=n,e.captureImage=function(e){o.media.captureImage(e)};var t=function(e){function n(t){void 0===t&&(t=null);var i,r=this;return i=t instanceof n?new o.media.Media(t._inner):t instanceof o.media.Media?t:new o.media.Media(null),(r=e.call(this,i)||this)._inner=i,r}return i(n,e),Object.defineProperty(n.prototype,"preview",{get:function(){return this._inner.preview},set:function(e){this._inner.preview=e},enumerable:!0,configurable:!0}),n.prototype.getMedia=function(e){this._inner.getMedia(e)},n}(n);e.Media=t,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){o.media.selectMedia(e,function(e,i){return n(e,i.map(function(e){return new t(e)}))})},e.viewImages=function(e,n){o.media.viewImages(e,n)},e.scanBarCode=function(e,n){o.media.scanBarCode(e,n)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.locationAPIsRequiredVersion="1.9.0",e.getLocation=function(e,n){i.location.getLocation(e,n)},e.showLocation=function(e,n){i.location.showLocation(e,n)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){i.meeting.getIncomingClientAudioState(e)},e.toggleIncomingClientAudio=function(e){i.meeting.toggleIncomingClientAudio(e)},e.getMeetingDetails=function(e){i.meeting.getMeetingDetails(e)},e.getAuthenticationTokenForAnonymousUser=function(e){i.meeting.getAuthenticationTokenForAnonymousUser(e)}}(n.meeting||(n.meeting={}))}])});

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

// EXTERNAL MODULE: ../metaos-teams-compat/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(704);
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