/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 704:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){!function(n,i){e.exports=function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=22)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(7),r=t(6),o=t(3),a=function(){return function(){}}();n.Communication=a;var s=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e.promiseCallbacks={},e}();function l(e,n){return void 0===n&&(n=void 0),new Promise(function(t){t(u(d(e,n).id))})}function u(e){return new Promise(function(n){s.promiseCallbacks[e]=n})}function c(e,n,t){var i;n instanceof Function?t=n:n instanceof Array&&(i=n);var r=d(e,i);t&&(s.callbacks[r.id]=t)}function d(e,n){var t=a.parentWindow,i=w(e,n);if(r.GlobalVars.isFramelessWindow)a.currentWindow&&a.currentWindow.nativeInterface&&a.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=y(t);t&&o?t.postMessage(i,o):v(t).push(i)}return i}function f(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;m(n,t)&&(p(n,t),n===a.parentWindow?g(e):n===a.childWindow&&C(e))}}function m(e,n){return!(a.currentWindow&&e===a.currentWindow||!(a.currentWindow&&a.currentWindow.location&&n&&n===a.currentWindow.location.origin)&&!(i.validOriginRegExp.test(n.toLowerCase())||r.GlobalVars.additionalValidOriginsRegexp&&r.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function p(e,n){r.GlobalVars.isFramelessWindow||a.parentWindow&&!a.parentWindow.closed&&e!==a.parentWindow?a.childWindow&&!a.childWindow.closed&&e!==a.childWindow||(a.childWindow=e,a.childOrigin=n):(a.parentWindow=e,a.parentOrigin=n),a.parentWindow&&a.parentWindow.closed&&(a.parentWindow=null,a.parentOrigin=null),a.childWindow&&a.childWindow.closed&&(a.childWindow=null,a.childOrigin=null),T(a.parentWindow),T(a.childWindow)}function g(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=s.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),h(e)||delete s.callbacks[n.id]);var i=s.promiseCallbacks[n.id];i&&(i(n.args),delete s.promiseCallbacks[n.id])}else"func"in e.data&&"string"==typeof e.data.func&&(n=e.data,o.callHandler(n.func,n.args))}function h(e){return!0===e.data.isPartialResponse}function C(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=o.callHandler(n.func,n.args),i=t[0],r=t[1];i&&void 0!==r?b(n.id,Array.isArray(r)?r:[r]):c(n.func,n.args,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(a.childWindow){var i=e.pop();b(n.id,e,i)}})}}function v(e){return e===a.parentWindow?s.parentMessageQueue:e===a.childWindow?s.childMessageQueue:[]}function y(e){return e===a.parentWindow?a.parentOrigin:e===a.childWindow?a.childOrigin:null}function T(e){for(var n=y(e),t=v(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function b(e,n,t){var i=a.childWindow,r=P(e,n,t),o=y(i);i&&o&&i.postMessage(r,o)}function w(e,n){return{id:s.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function P(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function I(e,n){return{func:e,args:n||[]}}n.initializeCommunication=function(e){s.messageListener=function(e){return f(e)},a.currentWindow=a.currentWindow||window,a.parentWindow=a.currentWindow.parent!==a.currentWindow.self?a.currentWindow.parent:a.currentWindow.opener,(a.parentWindow||e)&&a.currentWindow.addEventListener("message",s.messageListener,!1),a.parentWindow||(r.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=g);try{return a.parentOrigin="*",l("initialize",[i.version]).then(function(e){return{context:e[0],clientType:e[1],runtimeConfig:e[2],clientSupportedSDKVersion:e[3]}})}finally{a.parentOrigin=null}},n.uninitializeCommunication=function(){a.currentWindow.removeEventListener("message",s.messageListener,!1),a.parentWindow=null,a.parentOrigin=null,a.childWindow=null,a.childOrigin=null,s.parentMessageQueue=[],s.childMessageQueue=[],s.nextMessageId=0,s.callbacks={}},n.sendAndUnwrap=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return l(e,n).then(function(e){return e[0]})},n.sendAndHandleStatusAndReason=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return l(e,n).then(function(e){var n=e[0],t=e[1];if(!n)throw new Error(t)})},n.sendAndHandleStatusAndReasonWithDefaultError=function(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return l(e,t).then(function(e){var t=e[0],i=e[1];if(!t)throw new Error(i||n)})},n.sendAndHandleSdkError=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return l(e,n).then(function(e){var n=e[0],t=e[1];if(n)throw n;return t})},n.sendMessageToParentAsync=l,n.sendMessageToParent=c,n.waitForMessageQueue=function(e,n){var t=a.currentWindow.setInterval(function(){0===v(e).length&&(clearInterval(t),n())},100)},n.sendMessageEventToChild=function(e,n){var t=a.childWindow,i=I(e,n),r=y(t);t&&r?t.postMessage(i,r):v(t).push(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(7),r=t(6),o=t(5);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!r.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(r.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,i=0;i<e.length;i++)if(e[i]===r.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+r.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=i.defaultSDKVersionForCompatCheck);var n=o.compareSDKVersions(r.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processAdditionalValidOrigins=function(e){var n=r.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&i.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),r.GlobalVars.additionalValidOrigins=n,r.GlobalVars.additionalValidOrigins.length>0?r.GlobalVars.additionalValidOriginsRegexp=o.generateRegExpFromUrls(r.GlobalVars.additionalValidOrigins):r.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(n.HostClientType||(n.HostClientType={})),function(e){e.office="Office",e.outlook="Outlook",e.orange="Orange",e.teams="Teams"}(n.HostName||(n.HostName={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.DialogDimension||(n.DialogDimension={})),function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(9),r=t(0),o=function(){function e(){}return e.handlers={},e}();function a(e){o.themeChangeHandler&&o.themeChangeHandler(e),r.Communication.childWindow&&r.sendMessageEventToChild("themeChange",[e])}function s(e){o.loadHandler&&o.loadHandler(e),r.Communication.childWindow&&r.sendMessageEventToChild("load",[e])}function l(){var e=function(){r.sendMessageToParent("readyToUnload",[])};o.beforeUnloadHandler&&o.beforeUnloadHandler(e)||e()}n.initializeHandlers=function(){o.handlers.themeChange=a,o.handlers.load=s,o.handlers.beforeUnload=l,i.pages.backStack._initialize()},n.callHandler=function(e,n){var t=o.handlers[e];return t?[!0,t.apply(this,n)]:[!1,void 0]},n.registerHandler=function(e,n,t,i){void 0===t&&(t=!0),void 0===i&&(i=[]),n?(o.handlers[e]=n,t&&r.sendMessageToParent("registerHandler",[e].concat(i))):delete o.handlers[e]},n.removeHandler=function(e){delete o.handlers[e]},n.registerOnThemeChangeHandler=function(e){o.themeChangeHandler=e,e&&r.sendMessageToParent("registerHandler",["themeChange"])},n.handleThemeChange=a,n.registerOnLoadHandler=function(e){o.loadHandler=e,e&&r.sendMessageToParent("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){o.beforeUnloadHandler=e,e&&r.sendMessageToParent("registerHandler",["beforeUnload"])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(5);n.runtime={apiVersion:1,supports:{calendar:void 0,chat:void 0,dialog:void 0,location:void 0,mail:void 0,media:void 0,meeting:void 0,notifications:void 0,pages:{tabs:void 0,config:void 0,backStack:void 0,fullTrust:void 0},teams:{fullTrust:void 0}}},n.teamsRuntimeConfig={apiVersion:1,supports:{chat:{},dialog:{},files:{},location:{},media:{},meeting:{},notifications:{},pages:{tabs:{},config:{},backStack:{},fullTrust:{}},teams:{fullTrust:{}}}},n.applyRuntimeConfig=function(e){n.runtime=i.deepFreeze(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(26),r=t(6),o=t(2);function a(e){for(var n="^",t=e.split("."),i=0;i<t.length;i++)n+=(i>0?"[.]":"")+t[i].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+a(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),i=n.split(".");function r(e){return/^\d+$/.test(e)}if(!t.every(r)||!i.every(r))return NaN;for(;t.length<i.length;)t.push("0");for(;i.length<t.length;)i.push("0");for(var o=0;o<t.length;++o)if(Number(t[o])!=Number(i[o]))return Number(t[o])>Number(i[o])?1:-1;return 0},n.generateGUID=function(){return i.v4()},n.deepFreeze=function e(n){return Object.keys(n).forEach(function(t){"object"==typeof n[t]&&e(n[t])}),Object.freeze(n)},n.transformContext=function(e){return{app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:o.HostName.teams,clientType:e.hostClientType?e.hostClientType:o.HostClientType.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId}},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:r.GlobalVars.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:e.userObjectId,displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath?{url:e.teamSiteUrl,domain:e.teamSiteDomain,path:e.teamSitePath}:void 0}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(5);n.version="1.10.0",n.defaultSDKVersionForCompatCheck="2.0.1",n.videoAndImageMediaAPISupportVersion="2.0.2",n.getUserJoinedTeamsSupportedAndroidClientVersion="2.0.1",n.locationAPIsRequiredVersion="1.9.0",n.peoplePickerRequiredVersion="2.0.0",n.captureImageMobileSupportVersion="1.7.0",n.mediaAPISupportVersion="1.8.0",n.getMediaCallbackSupportVersion="2.0.0",n.scanBarCodeAPIMobileSupportVersion="1.9.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.live.com","https://local.teams.live.com:8080","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com"],n.validOriginRegExp=i.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(3),o=t(1),a=t(2),s=t(13),l=t(4);!function(e){function n(e){o.ensureInitialized(a.FrameContexts.content),i.sendMessageToParent("setFrameContext",[e])}e.returnFocus=function(e){o.ensureInitialized(a.FrameContexts.content),i.sendMessageToParent("returnFocus",[e])},e.setCurrentFrame=n,e.initializeWithFrameContext=function(e,t,i){s.app.initialize(i).then(function(){return t&&t()}),n(e)},e.navigateCrossDomain=function(e){return new Promise(function(n){o.ensureInitialized(a.FrameContexts.content,a.FrameContexts.sidePanel,a.FrameContexts.settings,a.FrameContexts.remove,a.FrameContexts.task,a.FrameContexts.stage,a.FrameContexts.meetingStage),n(i.sendAndHandleStatusAndReasonWithDefaultError("navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",e))})},e.registerFullScreenHandler=function(e){o.ensureInitialized(),r.registerHandler("fullScreenChange",e)},e.registerAppButtonClickHandler=function(e){o.ensureInitialized(a.FrameContexts.content),r.registerHandler("appButtonClick",e)},e.registerAppButtonHoverEnterHandler=function(e){o.ensureInitialized(a.FrameContexts.content),r.registerHandler("appButtonHoverEnter",e)},e.registerAppButtonHoverLeaveHandler=function(e){o.ensureInitialized(a.FrameContexts.content),r.registerHandler("appButtonHoverLeave",e)},e.isSupported=function(){return!!l.runtime.supports.pages},function(e){e.navigateToTab=function(e){return new Promise(function(n){o.ensureInitialized(),n(i.sendAndHandleStatusAndReasonWithDefaultError("navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",e))})},e.getTabInstances=function(e){return new Promise(function(n){o.ensureInitialized(),n(i.sendAndUnwrap("getTabInstances",e))})},e.getMruTabInstances=function(e){return new Promise(function(n){o.ensureInitialized(),n(i.sendAndUnwrap("getMruTabInstances",e))})},e.isSupported=function(){return!!l.runtime.supports.pages&&!!l.runtime.supports.pages.tabs}}(e.tabs||(e.tabs={})),function(e){var n,t;function s(e){var t=new u(e);n?n(t):t.notifySuccess()}e.initialize=function(){r.registerHandler("settings.save",s,!1),r.registerHandler("settings.remove",c,!1)},e.setValidityState=function(e){o.ensureInitialized(a.FrameContexts.settings,a.FrameContexts.remove),i.sendMessageToParent("settings.setValidityState",[e])},e.getConfig=function(){return new Promise(function(e){o.ensureInitialized(a.FrameContexts.content,a.FrameContexts.settings,a.FrameContexts.remove,a.FrameContexts.sidePanel),e(i.sendAndUnwrap("settings.getSettings"))})},e.setConfig=function(e){return new Promise(function(n){o.ensureInitialized(a.FrameContexts.content,a.FrameContexts.settings,a.FrameContexts.sidePanel),n(i.sendAndHandleStatusAndReason("settings.setSettings",e))})},e.registerOnSaveHandler=function(e){o.ensureInitialized(a.FrameContexts.settings),n=e,e&&i.sendMessageToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){o.ensureInitialized(a.FrameContexts.remove,a.FrameContexts.settings),t=e,e&&i.sendMessageToParent("registerHandler",["remove"])},e.registerChangeConfigHandler=function(e){o.ensureInitialized(a.FrameContexts.content),r.registerHandler("changeSettings",e)};var u=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),i.sendMessageToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),i.sendMessageToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function c(){var e=new d;t?t(e):e.notifySuccess()}var d=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),i.sendMessageToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),i.sendMessageToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}();e.isSupported=function(){return!!l.runtime.supports.pages&&!!l.runtime.supports.pages.config}}(e.config||(e.config={})),function(e){var n;function t(){return new Promise(function(e){o.ensureInitialized(),e(i.sendAndHandleStatusAndReasonWithDefaultError("navigateBack","Back navigation is not supported in the current client or context."))})}function a(){n&&n()||t()}e._initialize=function(){r.registerHandler("backButtonPress",a,!1)},e.navigateBack=t,e.registerBackButtonHandler=function(e){n=e,e&&i.sendMessageToParent("registerHandler",["backButton"])},e.isSupported=function(){return!!l.runtime.supports.pages&&!!l.runtime.supports.pages.backStack}}(e.backStack||(e.backStack={})),function(e){e.enterFullscreen=function(){o.ensureInitialized(a.FrameContexts.content),i.sendMessageToParent("enterFullscreen",[])},e.exitFullscreen=function(){o.ensureInitialized(a.FrameContexts.content),i.sendMessageToParent("exitFullscreen",[])},e.isSupported=function(){return!!l.runtime.supports.pages&&!!l.runtime.supports.pages.fullTrust}}(e.fullTrust||(e.fullTrust={}))}(n.pages||(n.pages={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(15);n.authentication=i.authentication;var r=t(2);n.FrameContexts=r.FrameContexts,n.HostClientType=r.HostClientType,n.DialogDimension=r.DialogDimension,n.TeamType=r.TeamType,n.UserTeamRole=r.UserTeamRole,n.ChannelType=r.ChannelType;var o=t(8);n.ErrorCode=o.ErrorCode,n.FileOpenPreference=o.FileOpenPreference;var a=t(13);n.app=a.app,n.core=a.core;var s=t(32);n.dialog=s.dialog;var l=t(9);n.pages=l.pages;var u=t(19);n.ChildAppWindow=u.ChildAppWindow,n.ParentAppWindow=u.ParentAppWindow;var c=t(20);n.media=c.media;var d=t(33);n.location=d.location;var f=t(34);n.meeting=f.meeting;var m=t(35);n.calendar=m.calendar;var p=t(36);n.mail=p.mail;var g=t(18);n.teamsCore=g.teamsCore;var h=t(37);n.people=h.people;var C=t(38);n.video=C.video},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var i=new Uint8Array(16);e.exports=function(){return t(i),i}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}},function(e,n){for(var t=[],i=0;i<256;++i)t[i]=(i+256).toString(16).substr(1);e.exports=function(e,n){var i=n||0,r=t;return[r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(6),o=t(7),a=t(9),s=t(5),l=t(14),u=t(2),c=t(0),d=t(15),f=t(16),m=t(3),p=t(18),g=t(4);!function(e){function n(e){i.ensureInitialized(),m.registerOnThemeChangeHandler(e)}e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return r.GlobalVars.initializeCalled},e.getFrameContext=function(){return r.GlobalVars.frameContext},e.initialize=function(e){return new Promise(function(n){r.GlobalVars.initializeCalled||(r.GlobalVars.initializeCalled=!0,m.initializeHandlers(),r.GlobalVars.initializePromise=c.initializeCommunication(e).then(function(e){var n=e.context,t=e.clientType,i=e.runtimeConfig,a=e.clientSupportedSDKVersion,l=void 0===a?o.defaultSDKVersionForCompatCheck:a;r.GlobalVars.frameContext=n,r.GlobalVars.hostClientType=t,r.GlobalVars.clientSupportedSDKVersion=l;try{var u=JSON.parse(i);i&&g.applyRuntimeConfig(u)}catch(e){if(!(e instanceof SyntaxError))throw e;try{u=JSON.parse(l),l&&g.applyRuntimeConfig(u)}catch(e){if(!(e instanceof SyntaxError))throw e;isNaN(s.compareSDKVersions(i,o.defaultSDKVersionForCompatCheck))||(r.GlobalVars.clientSupportedSDKVersion=i),g.applyRuntimeConfig(g.teamsRuntimeConfig)}}r.GlobalVars.initializeCompleted=!0}),d.authentication.initialize(),a.pages.config.initialize(),f.initializePrivateApis()),Array.isArray(e)&&i.processAdditionalValidOrigins(e),n(r.GlobalVars.initializePromise)})},e._initialize=function(e){c.Communication.currentWindow=e},e._uninitialize=function(){r.GlobalVars.initializeCalled&&(r.GlobalVars.frameContext&&(n(null),a.pages.backStack.registerBackButtonHandler(null),a.pages.registerFullScreenHandler(null),p.teamsCore.registerBeforeUnloadHandler(null),p.teamsCore.registerOnLoadHandler(null),l.logs.registerGetLogHandler(null)),r.GlobalVars.frameContext===u.FrameContexts.settings&&a.pages.config.registerOnSaveHandler(null),r.GlobalVars.frameContext===u.FrameContexts.remove&&a.pages.config.registerOnRemoveHandler(null),r.GlobalVars.initializeCalled=!1,r.GlobalVars.initializeCompleted=!1,r.GlobalVars.initializePromise=null,r.GlobalVars.additionalValidOrigins=[],r.GlobalVars.frameContext=null,r.GlobalVars.hostClientType=null,r.GlobalVars.isFramelessWindow=!1,c.uninitializeCommunication())},e.getContext=function(){return new Promise(function(e){i.ensureInitialized(),e(c.sendAndUnwrap("getContext"))}).then(function(e){return s.transformContext(e)})},e.getContextOld=function(){return new Promise(function(e){i.ensureInitialized(),e(c.sendAndUnwrap("getContext"))}).then(function(e){return e.frameContext||(e.frameContext=r.GlobalVars.frameContext),e})},e.notifyAppLoaded=function(){i.ensureInitialized(),c.sendMessageToParent(e.Messages.AppLoaded,[o.version])},e.notifySuccess=function(){i.ensureInitialized(),c.sendMessageToParent(e.Messages.Success,[o.version])},e.notifyFailure=function(n){i.ensureInitialized(),c.sendMessageToParent(e.Messages.Failure,[n.reason,n.message])},e.notifyExpectedFailure=function(n){i.ensureInitialized(),c.sendMessageToParent(e.Messages.ExpectedFailure,[n.reason,n.message])},e.registerOnThemeChangeHandler=n}(n.app||(n.app={})),function(e){e.shareDeepLink=function(e){i.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.meetingStage),c.sendMessageToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},e.executeDeepLink=function(e){return new Promise(function(n){i.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage,u.FrameContexts.meetingStage),n(c.sendAndHandleStatusAndReason("executeDeepLink",e))})}}(n.core||(n.core={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(0),o=t(3);!function(e){e.registerGetLogHandler=function(e){i.ensureInitialized(),e?o.registerHandler("log.request",function(){var n=e();r.sendMessageToParent("log.receive",[n])}):o.removeHandler("log.request")}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(6),o=t(2),a=t(0),s=t(3);!function(e){var n,t;function l(){c();try{a.Communication.childWindow&&a.Communication.childWindow.close()}finally{a.Communication.childWindow=null,a.Communication.childOrigin=null}}function u(e){l();var n=e.width||600,t=e.height||400;n=Math.min(n,a.Communication.currentWindow.outerWidth-400),t=Math.min(t,a.Communication.currentWindow.outerHeight-200);var i=document.createElement("a");i.href=e.url;var r=void 0!==a.Communication.currentWindow.screenLeft?a.Communication.currentWindow.screenLeft:a.Communication.currentWindow.screenX,o=void 0!==a.Communication.currentWindow.screenTop?a.Communication.currentWindow.screenTop:a.Communication.currentWindow.screenY;r+=a.Communication.currentWindow.outerWidth/2-n/2,o+=a.Communication.currentWindow.outerHeight/2-t/2,a.Communication.childWindow=a.Communication.currentWindow.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+o+", left="+r+", width="+n+", height="+t),a.Communication.childWindow?d():m("FailedToOpenWindow")}function c(){t&&(clearInterval(t),t=0),s.removeHandler("initialize"),s.removeHandler("navigateCrossDomain")}function d(){c(),t=a.Communication.currentWindow.setInterval(function(){if(!a.Communication.childWindow||a.Communication.childWindow.closed)m("CancelledByUser");else{var e=a.Communication.childOrigin;try{a.Communication.childOrigin="*",a.sendMessageEventToChild("ping")}finally{a.Communication.childOrigin=e}}},100),s.registerHandler("initialize",function(){return[o.FrameContexts.authentication,r.GlobalVars.hostClientType]}),s.registerHandler("navigateCrossDomain",function(){return!1})}function f(e){try{n&&n.success(e)}finally{n=null,l()}}function m(e){try{n&&n.fail(new Error(e))}finally{n=null,l()}}function p(e,n,t){if(e){var i=document.createElement("a");i.href=decodeURIComponent(e),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(i.href=g(i.href,"result",t)),a.Communication.currentWindow.location.assign(g(i.href,"authSuccess",""))),n&&"reason"===n&&(t&&(i.href=g(i.href,"reason",t)),a.Communication.currentWindow.location.assign(g(i.href,"authFailure",""))))}}function g(e,n,t){var i=e.indexOf("#"),r=-1===i?"#":e.substr(i);return r=r+"&"+n+(""!==t?"="+t:""),(e=-1===i?e:e.substr(0,i))+r}e.initialize=function(){s.registerHandler("authentication.authenticate.success",f,!1),s.registerHandler("authentication.authenticate.failure",m,!1)},e.authenticate=function(e){return new Promise(function(t,s){if(i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage,o.FrameContexts.meetingStage),r.GlobalVars.hostClientType===o.HostClientType.desktop||r.GlobalVars.hostClientType===o.HostClientType.android||r.GlobalVars.hostClientType===o.HostClientType.ios||r.GlobalVars.hostClientType===o.HostClientType.rigel||r.GlobalVars.hostClientType===o.HostClientType.teamsRoomsWindows||r.GlobalVars.hostClientType===o.HostClientType.teamsRoomsAndroid||r.GlobalVars.hostClientType===o.HostClientType.teamsPhones||r.GlobalVars.hostClientType===o.HostClientType.teamsDisplays){var l=document.createElement("a");l.href=e.url,t(a.sendMessageToParentAsync("authentication.authenticate",[l.href,e.width,e.height]).then(function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)}))}else n={success:t,fail:s},u(e)})},e.getAuthToken=function(e){return new Promise(function(n){i.ensureInitialized(),n(a.sendMessageToParentAsync("authentication.getAuthToken",[e.resources,e.claims,e.silent]))}).then(function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)})},e.getUser=function(){return new Promise(function(e){i.ensureInitialized(),e(a.sendMessageToParentAsync("authentication.getUser"))}).then(function(e){var n=e[0],t=e[1];if(n)return t;throw new Error(t)})},e.notifySuccess=function(e,n){p(n,"result",e),i.ensureInitialized(o.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){p(n,"reason",e),i.ensureInitialized(o.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(5),o=t(0),a=t(17),s=t(3);n.initializePrivateApis=function(){a.menus.initialize()},n.uploadCustomApp=function(e,n){i.ensureInitialized(),o.sendMessageToParent("uploadCustomApp",[e],n||r.getGenericOnCompleteHandler())},n.sendCustomMessage=function(e,n,t){i.ensureInitialized(),o.sendMessageToParent(e,n,t)},n.sendCustomEvent=function(e,n){if(i.ensureInitialized(),!o.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");o.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;i.ensureInitialized(),s.registerHandler(e,function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return n.apply(t,e)})},n.registerUserSettingsChangeHandler=function(e,n){i.ensureInitialized(),s.registerHandler("userSettingsChange",n,!0,[e])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(0),o=t(3);!function(e){var n,t,a,s=function(){return function(){this.enabled=!0,this.selected=!1}}();function l(e){a&&a(e)||(i.ensureInitialized(),r.sendMessageToParent("viewConfigItemPress",[e]))}function u(e){n&&n(e)||(i.ensureInitialized(),r.sendMessageToParent("handleNavBarMenuItemPress",[e]))}function c(e){t&&t(e)||(i.ensureInitialized(),r.sendMessageToParent("handleActionMenuItemPress",[e]))}e.MenuItem=s,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){o.registerHandler("navBarMenuItemPress",u,!1),o.registerHandler("actionMenuItemPress",c,!1),o.registerHandler("setModuleView",l,!1)},e.setUpViews=function(e,n){i.ensureInitialized(),a=n,r.sendMessageToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){i.ensureInitialized(),n=t,r.sendMessageToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){i.ensureInitialized(),t=n,r.sendMessageToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(6),o=t(3);!function(e){function n(){window.print()}e.enablePrintCapability=function(){r.GlobalVars.printCapabilityEnabled||(r.GlobalVars.printCapabilityEnabled=!0,i.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},e.print=n,e.registerOnLoadHandler=function(e){i.ensureInitialized(),o.registerOnLoadHandler(e)},e.registerBeforeUnloadHandler=function(e){i.ensureInitialized(),o.registerBeforeUnloadHandler(e)},e.registerFocusEnterHandler=function(e){i.ensureInitialized(),o.registerHandler("focusEnter",e)}}(n.teamsCore||(n.teamsCore={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(0),a=t(3),s=function(){function e(){}return e.prototype.postMessage=function(e){return new Promise(function(n){i.ensureInitialized(),n(o.sendAndHandleStatusAndReason("messageForChild",e))})},e.prototype.addEventListener=function(e,n){"message"===e&&a.registerHandler("messageForParent",n)},e}();n.ChildAppWindow=s;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e){return new Promise(function(n){i.ensureInitialized(r.FrameContexts.task),n(o.sendAndHandleStatusAndReason("messageForParent",e))})},e.prototype.addEventListener=function(e,n){"message"===e&&a.registerHandler("messageForChild",n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),o=t(8),a=t(1),s=t(2),l=t(5),u=t(21),c=t(0),d=t(3),f=t(4),m=t(7);!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.isFramelessWindow?a.isAPISupportedByPlatform(m.captureImageMobileSupportVersion)?c.sendMessageToParent("captureImage",e):e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var t=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return i(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(m.mediaAPISupportVersion)?u.validateGetMediaInputs(this.mimeType,this.format,this.content)?a.isAPISupportedByPlatform(m.getMediaCallbackSupportVersion)?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content];c.sendMessageToParent("getMedia",t,function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var i=u.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,i)}else{var r=u.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(r)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)})},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},i=[n,this.content];this.content&&e&&c.sendMessageToParent("getMedia",i),d.registerHandler("getMedia"+n,function(i){if(e){var r=JSON.parse(i);if(r.error)e(r.error,null),d.removeHandler("getMedia"+n);else if(r.mediaChunk)if(r.mediaChunk.chunkSequence<=0){var a=u.createFile(t.assembleAttachment,t.mediaMimeType);e(r.error,a),d.removeHandler("getMedia"+n)}else{var s=u.decodeAttachment(r.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),d.removeHandler("getMedia"+n)}})},n}(n);e.Media=t,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(m.mediaAPISupportVersion)){if(u.isMediaCallForVideoAndImageInputs(e)){if(r.GlobalVars.hostClientType!=s.HostClientType.android&&r.GlobalVars.hostClientType!=s.HostClientType.ios){var i={errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM};return void n(i,null)}if(!a.isAPISupportedByPlatform(m.videoAndImageMediaAPISupportVersion))return f={errorCode:o.ErrorCode.OLD_PLATFORM},void n(f,null)}if(u.validateSelectMediaInputs(e)){var l=[e];c.sendMessageToParent("selectMedia",l,function(e,i){if(i){for(var r=[],o=0,a=i;o<a.length;o++){var s=a[o];r.push(new t(s))}n(e,r)}else n(e,null)})}else{var d={errorCode:o.ErrorCode.INVALID_ARGUMENTS};n(d,null)}}else{var f={errorCode:o.ErrorCode.OLD_PLATFORM};n(f,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(m.mediaAPISupportVersion))if(u.validateViewImagesInput(e)){var t=[e];c.sendMessageToParent("viewImages",t,n)}else n({errorCode:o.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:o.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.hostClientType!==s.HostClientType.desktop&&r.GlobalVars.hostClientType!==s.HostClientType.web&&r.GlobalVars.hostClientType!==s.HostClientType.rigel&&r.GlobalVars.hostClientType!==s.HostClientType.teamsRoomsWindows&&r.GlobalVars.hostClientType!==s.HostClientType.teamsRoomsAndroid&&r.GlobalVars.hostClientType!==s.HostClientType.teamsPhones&&r.GlobalVars.hostClientType!==s.HostClientType.teamsDisplays?a.isAPISupportedByPlatform(m.scanBarCodeAPIMobileSupportVersion)?u.validateScanBarCodeInput(n)?c.sendMessageToParent("media.scanBarCode",[n],e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null):e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)},e.isSupported=function(){return!!f.runtime.supports.media}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(20);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,i=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==i&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),i++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),i=new Array(t.length),r=0;r<t.length;r++)i[r]=t.charCodeAt(r);var o=new Uint8Array(i),a=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:a}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.isMediaCallForVideoAndImageInputs=function(e){return!(!e||e.mediaType!=i.media.MediaType.VideoAndImage&&!e.videoAndImageProps)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==i.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)},n.validatePeoplePickerInput=function(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}},function(e,n,t){"use strict";function i(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),t(23).polyfill(),i(t(24)),i(t(10))},function(e,n){e.exports=t(6)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(25);n.bot=i.bot;var r=t(17);n.menus=r.menus;var o=t(14);n.logs=o.logs;var a=t(29);n.NotificationTypes=a.NotificationTypes,n.ViewerActionTypes=a.ViewerActionTypes,n.UserSettingTypes=a.UserSettingTypes;var s=t(16);n.sendCustomMessage=s.sendCustomMessage,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp,n.registerUserSettingsChangeHandler=s.registerUserSettingsChangeHandler;var l=t(30);n.chat=l.chat;var u=t(31);n.files=u.files;var c=t(39);n.legacy=c.legacy;var d=t(40);n.meetingRoom=d.meetingRoom;var f=t(41);n.notifications=f.notifications;var m=t(42);n.remoteCamera=m.remoteCamera;var p=t(43);n.appEntity=p.appEntity;var g=t(44);n.teams=g.teams},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1);!function(e){e.sendQuery=function(e,n,t){r.ensureInitialized(),i.sendMessageToParent("bot.executeQuery",[e],function(e,i){e?n(i):t(i)})},e.getSupportedCommands=function(e,n){r.ensureInitialized(),i.sendMessageToParent("bot.getSupportedCommands",function(t,i){t?e(i):n(i)})},e.authenticate=function(e,n,t){r.ensureInitialized(),i.sendMessageToParent("bot.authenticate",[e],function(e,i){e?n(i):t(i)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var i=t(27),r=t(28),o=r;o.v1=i,o.v4=r,e.exports=o},function(e,n,t){var i,r,o=t(11),a=t(12),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,c=n||[],d=(e=e||{}).node||i,f=void 0!==e.clockseq?e.clockseq:r;if(null==d||null==f){var m=o();null==d&&(d=i=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=r=16383&(m[6]<<8|m[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:l+1,h=p-s+(g-l)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||p>s)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=p,l=g,r=f;var C=(1e4*(268435455&(p+=122192928e5))+g)%4294967296;c[u++]=C>>>24&255,c[u++]=C>>>16&255,c[u++]=C>>>8&255,c[u++]=255&C;var v=p/4294967296*1e4&268435455;c[u++]=v>>>8&255,c[u++]=255&v,c[u++]=v>>>24&15|16,c[u++]=v>>>16&255,c[u++]=f>>>8|128,c[u++]=255&f;for(var y=0;y<6;++y)c[u+y]=d[y];return n||a(c)}},function(e,n,t){var i=t(11),r=t(12);e.exports=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[o+s]=a[s];return n||r(a)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(0),a=t(3),s=t(4);!function(e){e.openConversation=function(e){i.ensureInitialized(r.FrameContexts.content),o.sendMessageToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}],function(e,n){if(!e)throw new Error(n)}),e.onStartConversation&&a.registerHandler("startConversation",function(n,t,i,r){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:i,entityId:r})}),e.onCloseConversation&&a.registerHandler("closeConversation",function(n,t,i,r){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:i,entityId:r})})},e.closeConversation=function(){i.ensureInitialized(r.FrameContexts.content),o.sendMessageToParent("conversations.closeConversation"),a.removeHandler("startConversation"),a.removeHandler("closeConversation")},e.getChatMembers=function(e){i.ensureInitialized(),o.sendMessageToParent("getChatMembers",e)},e.isSupported=function(){return!!s.runtime.supports.chat}}(n.chat||(n.chat={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1),o=t(10),a=t(4);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e,n){if(r.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");i.sendMessageToParent("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(r.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");i.sendMessageToParent("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(r.ensureInitialized(o.FrameContexts.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");i.sendMessageToParent("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if(r.ensureInitialized(o.FrameContexts.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");i.sendMessageToParent("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if(r.ensureInitialized(o.FrameContexts.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");i.sendMessageToParent("files.openCloudStorageFile",[e,n,t])},e.openFilePreview=function(e){r.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference];i.sendMessageToParent("openFilePreview",n)},e.isSupported=function(){return!!a.runtime.supports.files}}(n.files||(n.files={}))},function(e,n,t){"use strict";var i=this&&this.__rest||function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&(t[i[r]]=e[i[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),o=t(19),a=t(0),s=t(1),l=t(4);!function(e){e.open=function(e,n){return s.ensureInitialized(r.FrameContexts.content,r.FrameContexts.sidePanel,r.FrameContexts.meetingStage),a.sendMessageToParent("tasks.startTask",[e],n),new o.ChildAppWindow},e.resize=function(e){s.ensureInitialized(r.FrameContexts.content,r.FrameContexts.sidePanel,r.FrameContexts.task,r.FrameContexts.meetingStage),e.width,e.height;var n=i(e,["width","height"]);if(Object.keys(n).length)throw new Error("resize requires a dialogInfo argument containing only width and height");a.sendMessageToParent("tasks.updateTask",[e])},e.submit=function(e,n){s.ensureInitialized(r.FrameContexts.content,r.FrameContexts.sidePanel,r.FrameContexts.task,r.FrameContexts.meetingStage),a.sendMessageToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])},e.isSupported=function(){return!!l.runtime.supports.dialog}}(n.dialog||(n.dialog={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(8),r=t(1),o=t(2),a=t(0),s=t(4),l=t(7);!function(e){e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task),r.isAPISupportedByPlatform(l.locationAPIsRequiredVersion)?e?a.sendMessageToParent("location.getLocation",[e],n):n({errorCode:i.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task),r.isAPISupportedByPlatform(l.locationAPIsRequiredVersion)?e?a.sendMessageToParent("location.showLocation",[e],n):n({errorCode:i.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)},e.isSupported=function(){return!!s.runtime.supports.location}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(3),o=t(1),a=t(2),s=t(4);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),i.sendMessageToParent("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),i.sendMessageToParent("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage,a.FrameContexts.settings,a.FrameContexts.content),i.sendMessageToParent("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),i.sendMessageToParent("meeting.getAuthenticationTokenForAnonymousUser",e)},e.isSupported=function(){return!!s.runtime.supports.meeting},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),i.sendMessageToParent("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),i.sendMessageToParent("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),i.sendMessageToParent("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.registerHandler("meeting.liveStreamChanged",e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(5),o=t(2),a=t(0),s=t(4);!function(e){function n(){return!!s.runtime.supports.calendar}e.openCalendarItem=function(e,t){if(i.ensureInitialized(o.FrameContexts.content),!n())throw"Not Supported";a.sendMessageToParent("calendar.openCalendarItem",[e],t||r.getGenericOnCompleteHandler())},e.composeMeeting=function(e,t){if(i.ensureInitialized(o.FrameContexts.content),!n())throw"Not Supported";a.sendMessageToParent("calendar.composeMeeting",[e],t||r.getGenericOnCompleteHandler())},e.isSupported=n}(n.calendar||(n.calendar={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(5),o=t(2),a=t(4),s=t(0);!function(e){function n(){return!!a.runtime.supports.mail}e.openMailItem=function(e,t){if(i.ensureInitialized(o.FrameContexts.content),!n())throw"Not Supported";s.sendMessageToParent("mail.openMailItem",[e],t||r.getGenericOnCompleteHandler())},e.composeMail=function(e,t){if(i.ensureInitialized(o.FrameContexts.content),!n())throw"Not Supported";s.sendMessageToParent("mail.composeMail",[e],t||r.getGenericOnCompleteHandler())},e.isSupported=n}(n.mail||(n.mail={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(8),a=t(21),s=t(0),l=t(7);!function(e){(n.people||(n.people={})).selectPeople=function(e,n){if(!e)throw new Error("[people picker] Callback cannot be null");i.ensureInitialized(r.FrameContexts.content,r.FrameContexts.task,r.FrameContexts.settings),i.isAPISupportedByPlatform(l.peoplePickerRequiredVersion)?a.validatePeoplePickerInput(n)?s.sendMessageToParent("people.selectPeople",[n],e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1),o=t(2),a=t(3);!function(e){function n(){i.sendMessageToParent("video.videoFrameProcessed")}function t(e){i.sendMessageToParent("video.notifyError",[e])}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,s){r.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("video.newVideoFrame",function(i){void 0!==i&&e(i,n,t)}),i.sendMessageToParent("video.registerForVideoFrame",[s])},e.notifySelectedVideoEffectChanged=function(e,n){r.ensureInitialized(o.FrameContexts.sidePanel),i.sendMessageToParent("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){r.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("video.effectParameterChange",e)}}(n.video||(n.video={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(0),a=t(6),s=t(8),l=t(7),u=t(4);!function(e){!function(e){e.getUserJoinedTeams=function(e,n){if(i.ensureInitialized(),(a.GlobalVars.hostClientType===r.HostClientType.android||a.GlobalVars.hostClientType===r.HostClientType.teamsRoomsAndroid||a.GlobalVars.hostClientType===r.HostClientType.teamsPhones||a.GlobalVars.hostClientType===r.HostClientType.teamsDisplays)&&!i.isAPISupportedByPlatform(l.getUserJoinedTeamsSupportedAndroidClientVersion)){var t={errorCode:s.ErrorCode.OLD_PLATFORM};throw new Error(JSON.stringify(t))}o.sendMessageToParent("getUserJoinedTeams",[n],e)},e.getConfigSetting=function(e,n){i.ensureInitialized(),o.sendMessageToParent("getConfigSetting",[n],e)},e.isSupported=function(){return!!u.runtime.supports.teams&&!!u.runtime.supports.teams.fullTrust}}(e.fullTrust||(e.fullTrust={}))}(n.legacy||(n.legacy={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(0),o=t(3);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){i.ensureInitialized(),r.sendMessageToParent("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");i.ensureInitialized(),r.sendMessageToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");i.ensureInitialized(),o.registerHandler("meetingRoom.meetingRoomCapabilitiesUpdate",function(n){i.ensureInitialized(),e(n)})},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");i.ensureInitialized(),o.registerHandler("meetingRoom.meetingRoomStatesUpdate",function(n){i.ensureInitialized(),e(n)})}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(0),a=t(4);!function(e){e.showNotification=function(e){i.ensureInitialized(r.FrameContexts.content),o.sendMessageToParent("notifications.showNotification",[e])},e.isSupported=function(){return!!a.runtime.supports.notifications}}(n.notifications||(n.notifications={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(0),a=t(3);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),a.registerHandler("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),a.registerHandler("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),a.registerHandler("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");i.ensureInitialized(r.FrameContexts.sidePanel),a.registerHandler("remoteCamera.sessionStatusChange",e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1),o=t(10);!function(e){(n.appEntity||(n.appEntity={})).selectAppEntity=function(e,n,t){if(r.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!t)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");i.sendMessageToParent("appEntity.selectAppEntity",[e,n],t)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=t(2),o=t(0);!function(e){!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,n){if(i.ensureInitialized(r.FrameContexts.content),!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!n)throw new Error("[teams.getTeamChannels] Callback cannot be null");o.sendMessageToParent("teams.getTeamChannels",[e],n)}}(n.teams||(n.teams={}))}])}()}(window)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!i.app.isInitialized())throw new Error("The library has not yet been initialized");var t=i.app.getFrameContext();if(t&&e&&e.length>0){for(var r=!1,o=0;o<e.length;o++)if(e[o]===t){r=!0;break}if(!r)throw new Error("This call is not allowed in the '"+t+"' context")}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";function i(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),i(t(4)),i(t(19))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(5);n.bot=i.bot;var r=t(9);n.menus=r.menus;var o=t(10);n.logs=o.logs;var a=t(11);n.NotificationTypes=a.NotificationTypes,n.UserSettingTypes=a.UserSettingTypes,n.ViewerActionTypes=a.ViewerActionTypes;var s=t(12);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.registerUserSettingsChangeHandler=s.registerUserSettingsChangeHandler,n.uploadCustomApp=s.uploadCustomApp;var l=t(13);n.conversations=l.conversations;var u=t(14);n.meetingRoom=u.meetingRoom;var c=t(15);n.remoteCamera=c.remoteCamera;var d=t(16);n.files=d.files;var f=t(17);n.appEntity=f.appEntity;var m=t(18);n.teams=m.teams},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.sendQuery=function(e,n,t){i.bot.sendQuery(e,n,t)},e.getSupportedCommands=function(e,n){i.bot.getSupportedCommands(e,n)},e.authenticate=function(e,n,t){i.bot.authenticate(e,n,t)},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){(function(n,t){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
!function(n,t){e.exports=t()}(0,function(){"use strict";function e(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}function i(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=0,a=void 0,s=void 0,l=function(e,n){h[o]=e,h[o+1]=n,2===(o+=2)&&(s?s(C):v())};var u="undefined"!=typeof window?window:void 0,c=u||{},d=c.MutationObserver||c.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==n&&"[object process]"==={}.toString.call(n),m="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return void 0!==a?function(){a(C)}:g()}function g(){var e=setTimeout;return function(){return e(C,1)}}var h=new Array(1e3);function C(){for(var e=0;e<o;e+=2){(0,h[e])(h[e+1]),h[e]=void 0,h[e+1]=void 0}o=0}var v=void 0;function y(e,n){var t=this,i=new this.constructor(w);void 0===i[b]&&W(i);var r=t._state;if(r){var o=arguments[r-1];l(function(){return z(r,i,o,t._result)})}else D(t,i,e,n);return i}function T(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var n=new this(w);return R(n,e),n}v=f?function(){return function(){return n.nextTick(C)}}():d?function(){var e=0,n=new d(C),t=document.createTextNode("");return n.observe(t,{characterData:!0}),function(){t.data=e=++e%2}}():m?function(){var e=new MessageChannel;return e.port1.onmessage=C,function(){return e.port2.postMessage(0)}}():void 0===u?function(){try{var e=Function("return this")().require("vertx");return a=e.runOnLoop||e.runOnContext,p()}catch(e){return g()}}():g();var b=Math.random().toString(36).substring(2);function w(){}var P=void 0,I=1,S=2;function E(){return new TypeError("You cannot resolve a promise with itself")}function O(){return new TypeError("A promises callback cannot return that same promise.")}function _(e,n,t,i){try{e.call(n,t,i)}catch(e){return e}}function F(e,n,t){l(function(e){var i=!1,r=_(t,n,function(t){i||(i=!0,n!==t?R(e,t):H(e,t))},function(n){i||(i=!0,k(e,n))},e._label);!i&&r&&(i=!0,k(e,r))},e)}function M(e,n){n._state===I?H(e,n._result):n._state===S?k(e,n._result):D(n,void 0,function(n){return R(e,n)},function(n){return k(e,n)})}function A(e,n,t){n.constructor===e.constructor&&t===y&&n.constructor.resolve===T?M(e,n):void 0===t?H(e,n):i(t)?F(e,n,t):H(e,n)}function R(n,t){if(n===t)k(n,E());else if(e(t)){var i=void 0;try{i=t.then}catch(e){return void k(n,e)}A(n,t,i)}else H(n,t)}function x(e){e._onerror&&e._onerror(e._result),N(e)}function H(e,n){e._state===P&&(e._result=n,e._state=I,0!==e._subscribers.length&&l(N,e))}function k(e,n){e._state===P&&(e._state=S,e._result=n,l(x,e))}function D(e,n,t,i){var r=e._subscribers,o=r.length;e._onerror=null,r[o]=n,r[o+I]=t,r[o+S]=i,0===o&&e._state&&l(N,e)}function N(e){var n=e._subscribers,t=e._state;if(0!==n.length){for(var i=void 0,r=void 0,o=e._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+t],i?z(t,i,r,o):r(o);e._subscribers.length=0}}function z(e,n,t,r){var o=i(t),a=void 0,s=void 0,l=!0;if(o){try{a=t(r)}catch(e){l=!1,s=e}if(n===a)return void k(n,O())}else a=r;n._state!==P||(o&&l?R(n,a):!1===l?k(n,s):e===I?H(n,a):e===S&&k(n,a))}function U(e,n){try{n(function(n){R(e,n)},function(n){k(e,n)})}catch(n){k(e,n)}}var V=0;function L(){return V++}function W(e){e[b]=V++,e._state=void 0,e._result=void 0,e._subscribers=[]}function j(){return new Error("Array Methods must be provided an Array")}var G=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(w),this.promise[b]||W(this.promise),r(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?H(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&H(this.promise,this._result))):k(this.promise,j())}return e.prototype._enumerate=function(e){for(var n=0;this._state===P&&n<e.length;n++)this._eachEntry(e[n],n)},e.prototype._eachEntry=function(e,n){var t=this._instanceConstructor,i=t.resolve;if(i===T){var r=void 0,o=void 0,a=!1;try{r=e.then}catch(e){a=!0,o=e}if(r===y&&e._state!==P)this._settledAt(e._state,n,e._result);else if("function"!=typeof r)this._remaining--,this._result[n]=e;else if(t===Z){var s=new t(w);a?k(s,o):A(s,e,r),this._willSettleAt(s,n)}else this._willSettleAt(new t(function(n){return n(e)}),n)}else this._willSettleAt(i(e),n)},e.prototype._settledAt=function(e,n,t){var i=this.promise;i._state===P&&(this._remaining--,e===S?k(i,t):this._result[n]=t),0===this._remaining&&H(i,this._result)},e.prototype._willSettleAt=function(e,n){var t=this;D(e,void 0,function(e){return t._settledAt(I,n,e)},function(e){return t._settledAt(S,n,e)})},e}();function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var Z=function(){function e(n){this[b]=L(),this._result=this._state=void 0,this._subscribers=[],w!==n&&("function"!=typeof n&&B(),this instanceof e?U(this,n):q())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=this.constructor;return i(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return Z.prototype.then=y,Z.all=function(e){return new G(this,e).promise},Z.race=function(e){var n=this;return r(e)?new n(function(t,i){for(var r=e.length,o=0;o<r;o++)n.resolve(e[o]).then(t,i)}):new n(function(e,n){return n(new TypeError("You must pass an array to race."))})},Z.resolve=T,Z.reject=function(e){var n=new this(w);return k(n,e),n},Z._setScheduler=function(e){s=e},Z._setAsap=function(e){l=e},Z._asap=l,Z.polyfill=function(){var e=void 0;if(void 0!==t)e=t;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=e.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===i&&!n.cast)return}e.Promise=Z},Z.Promise=Z,Z})}).call(this,t(7),t(8))},function(e,n){var t,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function l(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(n){try{return i.call(null,e)}catch(n){return i.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var u,c=[],d=!1,f=-1;function m(){d&&u&&(d=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!d){var e=s(m);d=!0;for(var n=c.length;n;){for(u=c,c=[];++f<n;)u&&u[f].run();f=-1,n=c.length}u=null,d=!1,l(e)}}function g(e,n){this.fun=e,this.array=n}function h(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new g(e,n)),1!==c.length||d||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){var n=function(){function e(){this._inner=new i.menus.MenuItem}return Object.defineProperty(e.prototype,"id",{get:function(){return this._inner.id},set:function(e){this._inner.id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._inner.title},set:function(e){this._inner.title=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"icon",{get:function(){return this._inner.icon},set:function(e){this._inner.icon=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"iconSelected",{get:function(){return this._inner.iconSelected},set:function(e){this._inner.iconSelected=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentDescription",{get:function(){return this._inner.contentDescription},set:function(e){this._inner.contentDescription=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"enabled",{get:function(){return this._inner.enabled},set:function(e){this._inner.enabled=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"viewData",{get:function(){return this._inner.viewData},set:function(e){this._inner.viewData=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selected",{get:function(){return this._inner.selected},set:function(e){this._inner.selected=e},enumerable:!0,configurable:!0}),e}();e.MenuItem=n,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.setUpViews=function(e,n){i.menus.setUpViews(e,n)},e.setNavBarMenu=function(e,n){i.menus.setNavBarMenu(e,n)},e.showActionMenu=function(e,n){i.menus.showActionMenu(e,n)}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.registerGetLogHandler=function(e){i.logs.registerGetLogHandler(e)}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);n.getUserJoinedTeams=function(e,n){i.legacy.fullTrust.getUserJoinedTeams(e,n)},n.enterFullscreen=function(){i.pages.fullTrust.enterFullscreen()},n.exitFullscreen=function(){i.pages.fullTrust.exitFullscreen()},n.openFilePreview=function(e){i.files.openFilePreview(e)},n.showNotification=function(e){i.notifications.showNotification(e)},n.uploadCustomApp=function(e,n){i.uploadCustomApp(e,n)},n.sendCustomMessage=function(e,n,t){i.sendCustomMessage(e,n,t)},n.sendCustomEvent=function(e,n){i.sendCustomEvent(e,n)},n.registerCustomHandler=function(e,n){i.registerCustomHandler(e,n)},n.getChatMembers=function(e){i.chat.getChatMembers(e)},n.getConfigSetting=function(e,n){i.legacy.fullTrust.getConfigSetting(e,n)},n.registerUserSettingsChangeHandler=function(e,n){i.registerUserSettingsChangeHandler(e,n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.openConversation=function(e){i.chat.openConversation(e)},e.closeConversation=function(){i.chat.closeConversation()}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){i.meetingRoom.getPairedMeetingRoomInfo(e)},e.sendCommandToPairedMeetingRoom=function(e,n){i.meetingRoom.sendCommandToPairedMeetingRoom(e,n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){i.meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler(e)},e.registerMeetingRoomStatesUpdateHandler=function(e){i.meetingRoom.registerMeetingRoomStatesUpdateHandler(e)}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){i.remoteCamera.getCapableParticipants(e)},e.requestControl=function(e,n){i.remoteCamera.requestControl(e,n)},e.sendControlCommand=function(e,n){i.remoteCamera.sendControlCommand(e,n)},e.terminateSession=function(e){i.remoteCamera.terminateSession(e)},e.registerOnCapableParticipantsChangeHandler=function(e){i.remoteCamera.registerOnCapableParticipantsChangeHandler(e)},e.registerOnErrorHandler=function(e){i.remoteCamera.registerOnErrorHandler(e)},e.registerOnDeviceStateChangeHandler=function(e){i.remoteCamera.registerOnDeviceStateChangeHandler(e)},e.registerOnSessionStatusChangeHandler=function(e){i.remoteCamera.registerOnSessionStatusChangeHandler(e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e,n){i.files.getCloudStorageFolders(e,n)},e.addCloudStorageFolder=function(e,n){i.files.addCloudStorageFolder(e,n)},e.deleteCloudStorageFolder=function(e,n,t){i.files.deleteCloudStorageFolder(e,n,t)},e.getCloudStorageFolderContents=function(e,n,t){i.files.getCloudStorageFolderContents(e,n,t)},e.openCloudStorageFile=function(e,n,t){i.files.openCloudStorageFile(e,n,t)}}(n.files||(n.files={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){(n.appEntity||(n.appEntity={})).selectAppEntity=function(e,n,t){i.appEntity.selectAppEntity(e,n,t)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,n){i.teams.getTeamChannels(e,n)}}(n.teams||(n.teams={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(20);n.appInitialization=i.appInitialization;var r=t(21);n.authentication=r.authentication;var o=t(2);n.FrameContexts=o.FrameContexts,n.HostClientType=o.HostClientType,n.TaskModuleDimension=o.TaskModuleDimension,n.TeamType=o.TeamType,n.UserTeamRole=o.UserTeamRole,n.ChannelType=o.ChannelType;var a=t(22);n.ErrorCode=a.ErrorCode,n.FileOpenPreference=a.FileOpenPreference;var s=t(23);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerFocusEnterHandler=s.registerFocusEnterHandler,n.registerEnterSettingsHandler=s.registerEnterSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(24);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var u=t(25);n.settings=u.settings;var c=t(26);n.tasks=c.tasks;var d=t(27);n.ChildAppWindow=d.ChildAppWindow,n.ParentAppWindow=d.ParentAppWindow;var f=t(28);n.media=f.media;var m=t(29);n.location=m.location;var p=t(30);n.meeting=p.meeting;var g=t(31);n.people=g.people;var h=t(32);n.video=h.video},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.notifyAppLoaded=function(){i.app.notifyAppLoaded()},e.notifySuccess=function(){i.app.notifySuccess()},e.notifyFailure=function(e){i.app.notifyFailure(e)},e.notifyExpectedFailure=function(e){i.app.notifyExpectedFailure(e)}}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1);!function(e){var n;e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.task,i.FrameContexts.stage,i.FrameContexts.meetingStage);var t=void 0!==e?e:n;i.authentication.authenticate(t).then(function(e){t.successCallback(e)}).catch(function(e){t.failureCallback(e.message)})},e.getAuthToken=function(e){r.ensureInitialized(),i.authentication.getAuthToken(e).then(function(n){e.successCallback(n)}).catch(function(n){e.failureCallback(n.message)})},e.getUser=function(e){r.ensureInitialized(),i.authentication.getUser().then(function(n){e.successCallback(n)}).catch(function(n){e.failureCallback(n.message)})},e.notifySuccess=function(e,n){i.authentication.notifySuccess(e,n)},e.notifyFailure=function(e,n){i.authentication.notifyFailure(e,n)}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1);function o(e){return{locale:e.app.locale,appSessionId:e.app.sessionId,theme:e.app.theme,appIconPosition:e.app.iconPositionVertical,osLocaleInfo:e.app.osLocaleInfo,parentMessageId:e.app.parentMessageId,userClickTime:e.app.userClickTime,userFileOpenPreference:e.app.userFileOpenPreference,hostClientType:e.app.host.clientType,sessionId:e.app.host.sessionId,ringId:e.app.host.ringId,entityId:e.page.id,frameContext:e.page.frameContext,subEntityId:e.page.subPageId,isFullScreen:e.page.isFullScreen,isMultiWindow:e.page.isMultiWindow,sourceOrigin:e.page.sourceOrigin,userObjectId:void 0!==e.user?e.user.id:void 0,isCallingAllowed:void 0!==e.user?e.user.isCallingAllowed:void 0,isPSTNCallingAllowed:void 0!==e.user?e.user.isPSTNCallingAllowed:void 0,userLicenseType:void 0!==e.user?e.user.licenseType:void 0,loginHint:void 0!==e.user?e.user.loginHint:void 0,userPrincipalName:void 0!==e.user?e.user.userPrincipalName:void 0,tid:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.id:void 0,tenantSKU:void 0!==e.user&&void 0!==e.user.tenant?e.user.tenant.teamsSku:void 0,channelId:void 0!==e.channel?e.channel.id:void 0,channelName:void 0!==e.channel?e.channel.displayName:void 0,channelRelativeUrl:void 0!==e.channel?e.channel.relativeUrl:void 0,channelType:void 0!==e.channel?e.channel.membershipType:void 0,defaultOneNoteSectionId:void 0!==e.channel?e.channel.defaultOneNoteSectionId:void 0,hostTeamGroupId:void 0!==e.channel?e.channel.ownerGroupId:void 0,hostTeamTenantId:void 0!==e.channel?e.channel.ownerTenantId:void 0,chatId:void 0!==e.chat?e.chat.id:void 0,meetingId:void 0!==e.meeting?e.meeting.id:void 0,sharepoint:e.sharepoint,teamId:void 0!==e.team?e.team.internalId:void 0,teamName:void 0!==e.team?e.team.displayName:void 0,teamType:void 0!==e.team?e.team.type:void 0,groupId:void 0!==e.team?e.team.groupId:void 0,teamTemplateId:void 0!==e.team?e.team.templateId:void 0,isTeamArchived:void 0!==e.team?e.team.isArchived:void 0,userTeamRole:void 0!==e.team?e.team.userRole:void 0,teamSiteUrl:void 0!==e.sharePointSite?e.sharePointSite.url:void 0,teamSiteDomain:void 0!==e.sharePointSite?e.sharePointSite.domain:void 0,teamSitePath:void 0!==e.sharePointSite?e.sharePointSite.path:void 0}}n.initialize=function(e,n){i.app.initialize(n).then(function(){e&&e()})},n._initialize=function(e){i.app._initialize(e)},n._uninitialize=function(){i.app._uninitialize()},n.enablePrintCapability=function(){i.teamsCore.enablePrintCapability()},n.print=function(){i.teamsCore.print()},n.getContext=function(e){r.ensureInitialized(),i.app.getContext().then(function(n){e&&e(o(n))})},n.registerOnThemeChangeHandler=function(e){i.app.registerOnThemeChangeHandler(e)},n.registerFullScreenHandler=function(e){i.pages.registerFullScreenHandler(e)},n.registerAppButtonClickHandler=function(e){i.pages.registerAppButtonClickHandler(e)},n.registerAppButtonHoverEnterHandler=function(e){i.pages.registerAppButtonHoverEnterHandler(e)},n.registerAppButtonHoverLeaveHandler=function(e){i.pages.registerAppButtonHoverLeaveHandler(e)},n.registerBackButtonHandler=function(e){i.pages.backStack.registerBackButtonHandler(e)},n.registerOnLoadHandler=function(e){i.teamsCore.registerOnLoadHandler(e)},n.registerBeforeUnloadHandler=function(e){i.teamsCore.registerBeforeUnloadHandler(e)},n.registerFocusEnterHandler=function(e){i.teamsCore.registerFocusEnterHandler(e)},n.registerEnterSettingsHandler=function(e){i.pages.config.registerChangeConfigHandler(e)},n.getTabInstances=function(e,n){r.ensureInitialized(),i.pages.tabs.getTabInstances(n).then(function(n){e(n)})},n.getMruTabInstances=function(e,n){r.ensureInitialized(),i.pages.tabs.getMruTabInstances(n).then(function(n){e(n)})},n.shareDeepLink=function(e){i.core.shareDeepLink(e)},n.executeDeepLink=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.task,i.FrameContexts.stage,i.FrameContexts.meetingStage),i.core.executeDeepLink(e).then(function(){n&&n(!0)}).catch(function(e){n&&n(!1,e.message)})},n.setFrameContext=function(e){i.pages.setCurrentFrame(e)},n.initializeWithFrameContext=function(e,n,t){i.pages.initializeWithFrameContext(e,n,t)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1);n.returnFocus=function(e){i.pages.returnFocus(e)},n.navigateToTab=function(e,n){r.ensureInitialized(),i.pages.tabs.navigateToTab(e).then(function(){n&&n(!0)}).catch(function(e){n&&n(!1,e.message)})},n.navigateCrossDomain=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.task,i.FrameContexts.stage,i.FrameContexts.meetingStage),i.pages.navigateCrossDomain(e).then(function(){n&&n(!0)}).catch(function(e){n&&n(!1,e.message)})},n.navigateBack=function(e){r.ensureInitialized(),i.pages.backStack.navigateBack().then(function(){e&&e(!0)}).catch(function(n){e&&e(!1,n.message)})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(1);!function(e){e.setValidityState=function(e){i.pages.config.setValidityState(e)},e.getSettings=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.sidePanel),i.pages.config.getConfig().then(function(n){e(n)})},e.setSettings=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.settings,i.FrameContexts.sidePanel),i.pages.config.setConfig(e).then(function(){n&&n(!0)}).catch(function(e){n&&n(!1,e.message)})},e.registerOnSaveHandler=function(e){i.pages.config.registerOnSaveHandler(e)},e.registerOnRemoveHandler=function(e){i.pages.config.registerOnRemoveHandler(e)}}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(2);!function(e){function n(e){var n=e.height&&"number"!=typeof e.height?t(e.height):e.height,i=e.width&&"number"!=typeof e.width?t(e.width):e.width;return{url:e.url,card:e.card,height:n,width:i,title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function t(e){return e===r.TaskModuleDimension.Large?i.DialogDimension.Large:e===r.TaskModuleDimension.Medium?i.DialogDimension.Medium:i.DialogDimension.Small}e.startTask=function(e,t){return i.dialog.open(n(e),t)},e.updateTask=function(e){i.dialog.resize(n(e))},e.submitTask=function(e,n){i.dialog.submit(e,n)}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=function(){function e(){this._inner=new i.ChildAppWindow}return e.prototype.postMessage=function(e,n){this._inner.postMessage(e).then(function(){n&&n(!0)}).catch(function(e){n&&n(!1,e.message)})},e.prototype.addEventListener=function(e,n){this._inner.addEventListener(e,n)},e}();n.ChildAppWindow=r;var o=function(){function e(){this._inner=i.ParentAppWindow.Instance}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){this._inner.postMessage(e).then(function(){n&&n(!0)}).catch(function(e){n&&n(!1,e.message)})},e.prototype.addEventListener=function(e,n){this._inner.addEventListener(e,n)},e}();n.ParentAppWindow=o},function(e,n,t){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(0);!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){function e(e){this._innerFile=e}return Object.defineProperty(e.prototype,"content",{get:function(){return this._innerFile.content},set:function(e){this._innerFile.content=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"format",{get:function(){return this._innerFile.format},set:function(e){this._innerFile.format=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._innerFile.size},set:function(e){this._innerFile.size=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mimeType",{get:function(){return this._innerFile.mimeType},set:function(e){this._innerFile.mimeType=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._innerFile.name},set:function(e){this._innerFile.name=e},enumerable:!0,configurable:!0}),e}();e.File=n,e.captureImage=function(e){r.media.captureImage(e)};var t=function(e){function n(t){void 0===t&&(t=null);var i,o=this;return i=t instanceof n?new r.media.Media(t._inner):t instanceof r.media.Media?t:new r.media.Media(null),(o=e.call(this,i)||this)._inner=i,o}return i(n,e),Object.defineProperty(n.prototype,"preview",{get:function(){return this._inner.preview},set:function(e){this._inner.preview=e},enumerable:!0,configurable:!0}),n.prototype.getMedia=function(e){this._inner.getMedia(e)},n}(n);e.Media=t,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){r.media.selectMedia(e,function(e,i){return n(e,i.map(function(e){return new t(e)}))})},e.viewImages=function(e,n){r.media.viewImages(e,n)},e.scanBarCode=function(e,n){r.media.scanBarCode(e,n)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){e.getLocation=function(e,n){i.location.getLocation(e,n)},e.showLocation=function(e,n){i.location.showLocation(e,n)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){i.meeting.getIncomingClientAudioState(e)},e.toggleIncomingClientAudio=function(e){i.meeting.toggleIncomingClientAudio(e)},e.getMeetingDetails=function(e){i.meeting.getMeetingDetails(e)},e.getAuthenticationTokenForAnonymousUser=function(e){i.meeting.getAuthenticationTokenForAnonymousUser(e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");i.meeting.getLiveStreamState(e)},e.requestStartLiveStreaming=function(e,n,t){i.meeting.requestStartLiveStreaming(e,n,t)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");i.meeting.requestStopLiveStreaming(e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");i.meeting.registerLiveStreamChangedHandler(e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){(n.people||(n.people={})).selectPeople=function(e,n){i.people.selectPeople(e,n)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0);!function(e){!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,n){i.video.registerForVideoFrame(e,n)},e.notifySelectedVideoEffectChanged=function(e,n){i.video.notifySelectedVideoEffectChanged(e,n)},e.registerForVideoEffect=function(e){i.video.registerForVideoEffect(e)}}(n.video||(n.video={}))}])});

/***/ }),

/***/ 303:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),i=t(6),o=t(3),a=function(){return function(){}}();n.Communication=a;var s=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e}();function l(e,n,t){var r;n instanceof Function?t=n:n instanceof Array&&(r=n);var o=a.parentWindow,l=T(e,r);if(i.GlobalVars.isFramelessWindow)a.currentWindow&&a.currentWindow.nativeInterface&&a.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(l));else{var d=C(o);o&&d?o.postMessage(l,d):p(o).push(l)}t&&(s.callbacks[l.id]=t)}function d(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;u(n,t)&&(c(n,t),n===a.parentWindow?f(e):n===a.childWindow&&g(e))}}function u(e,n){return(!a.currentWindow||e!==a.currentWindow)&&(!!(a.currentWindow&&a.currentWindow.location&&n&&n===a.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||i.GlobalVars.additionalValidOriginsRegexp&&i.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function c(e,n){i.GlobalVars.isFramelessWindow||a.parentWindow&&!a.parentWindow.closed&&e!==a.parentWindow?a.childWindow&&!a.childWindow.closed&&e!==a.childWindow||(a.childWindow=e,a.childOrigin=n):(a.parentWindow=e,a.parentOrigin=n),a.parentWindow&&a.parentWindow.closed&&(a.parentWindow=null,a.parentOrigin=null),a.childWindow&&a.childWindow.closed&&(a.childWindow=null,a.childOrigin=null),h(a.parentWindow),h(a.childWindow)}function f(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=s.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),m(e)||delete s.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;o.callHandler(n.func,n.args)}}function m(e){return!0===e.data.isPartialResponse}function g(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=o.callHandler(n.func,n.args),r=t[0],i=t[1];r&&void 0!==i?v(n.id,Array.isArray(i)?i:[i]):l(n.func,n.args,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(a.childWindow){var r=e.pop();v(n.id,e,r)}})}}function p(e){return e===a.parentWindow?s.parentMessageQueue:e===a.childWindow?s.childMessageQueue:[]}function C(e){return e===a.parentWindow?a.parentOrigin:e===a.childWindow?a.childOrigin:null}function h(e){for(var n=C(e),t=p(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function v(e,n,t){var r=a.childWindow,i=b(e,n,t),o=C(r);r&&o&&r.postMessage(i,o)}function T(e,n){return{id:s.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function b(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function w(e,n){return{func:e,args:n||[]}}n.initializeCommunication=function(e,n){s.messageListener=function(e){return d(e)},a.currentWindow=a.currentWindow||window,a.parentWindow=a.currentWindow.parent!==a.currentWindow.self?a.currentWindow.parent:a.currentWindow.opener,(a.parentWindow||n)&&a.currentWindow.addEventListener("message",s.messageListener,!1),a.parentWindow||(i.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=f);try{a.parentOrigin="*",l("initialize",[r.version],e)}finally{a.parentOrigin=null}},n.uninitializeCommunication=function(){a.currentWindow.removeEventListener("message",s.messageListener,!1),a.parentWindow=null,a.parentOrigin=null,a.childWindow=null,a.childOrigin=null,s.parentMessageQueue=[],s.childMessageQueue=[],s.nextMessageId=0,s.callbacks={}},n.sendMessageToParent=l,n.waitForMessageQueue=function(e,n){var t=a.currentWindow.setInterval(function(){0===p(e).length&&(clearInterval(t),n())},100)},n.sendMessageEventToChild=function(e,n){var t=a.childWindow,r=w(e,n),i=C(t);t&&i?t.postMessage(r,i):p(t).push(r)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),i=t(6),o=t(5);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!i.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(i.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,r=0;r<e.length;r++)if(e[r]===i.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+i.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=r.defaultSDKVersionForCompatCheck);var n=o.compareSDKVersions(i.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processAdditionalValidOrigins=function(e){var n=i.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),i.GlobalVars.additionalValidOrigins=n,i.GlobalVars.additionalValidOrigins.length>0?i.GlobalVars.additionalValidOriginsRegexp=o.generateRegExpFromUrls(i.GlobalVars.additionalValidOrigins):i.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),i=t(0),o=function(){function e(){}return e.handlers={},e}();function a(e){o.themeChangeHandler&&o.themeChangeHandler(e),i.Communication.childWindow&&i.sendMessageEventToChild("themeChange",[e])}function s(){o.backButtonPressHandler&&o.backButtonPressHandler()||r.navigateBack()}function l(e){o.focusEnterHandler&&o.focusEnterHandler(e)}function d(e){o.loadHandler&&o.loadHandler(e),i.Communication.childWindow&&i.sendMessageEventToChild("load",[e])}function u(){var e=function(){i.sendMessageToParent("readyToUnload",[])};o.beforeUnloadHandler&&o.beforeUnloadHandler(e)||e()}n.initializeHandlers=function(){o.handlers.themeChange=a,o.handlers.backButtonPress=s,o.handlers.load=d,o.handlers.beforeUnload=u,o.handlers.focusEnter=l},n.callHandler=function(e,n){var t=o.handlers[e];return t?[!0,t.apply(this,n)]:[!1,void 0]},n.registerHandler=function(e,n,t,r){void 0===t&&(t=!0),void 0===r&&(r=[]),n?(o.handlers[e]=n,t&&i.sendMessageToParent("registerHandler",[e].concat(r))):delete o.handlers[e]},n.removeHandler=function(e){delete o.handlers[e]},n.registerOnThemeChangeHandler=function(e){o.themeChangeHandler=e,e&&i.sendMessageToParent("registerHandler",["themeChange"])},n.handleThemeChange=a,n.registerBackButtonHandler=function(e){o.backButtonPressHandler=e,e&&i.sendMessageToParent("registerHandler",["backButton"])},n.registerFocusEnterHandler=function(e){o.focusEnterHandler=e,e&&i.sendMessageToParent("registerHandler",["focusEnter"])},n.registerOnLoadHandler=function(e){o.loadHandler=e,e&&i.sendMessageToParent("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){o.beforeUnloadHandler=e,e&&i.sendMessageToParent("registerHandler",["beforeUnload"])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(5);n.version="1.11.0-beta.2",n.defaultSDKVersionForCompatCheck="2.0.1",n.getUserJoinedTeamsSupportedAndroidClientVersion="2.0.1",n.locationAPIsRequiredVersion="1.9.0",n.peoplePickerRequiredVersion="2.0.0",n.captureImageMobileSupportVersion="1.7.0",n.mediaAPISupportVersion="1.8.0",n.getMediaCallbackSupportVersion="2.0.0",n.scanBarCodeAPIMobileSupportVersion="1.9.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.live.com","https://local.teams.live.com:8080","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com"],n.validOriginRegExp=r.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(22);function i(e){for(var n="^",t=e.split("."),r=0;r<t.length;r++)n+=(r>0?"[.]":"")+t[r].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+i(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),r=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!r.every(i))return NaN;for(;t.length<r.length;)t.push("0");for(;r.length<t.length;)r.push("0");for(var o=0;o<t.length;++o)if(Number(t[o])!=Number(r[o]))return Number(t[o])>Number(r[o])?1:-1;return 0},n.generateGUID=function(){return r.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(25);n.appInitialization=r.appInitialization;var i=t(11);n.authentication=i.authentication;var o=t(2);n.FrameContexts=o.FrameContexts,n.HostClientType=o.HostClientType,n.TaskModuleDimension=o.TaskModuleDimension,n.TeamType=o.TeamType,n.UserTeamRole=o.UserTeamRole,n.ChannelType=o.ChannelType;var a=t(7);n.ErrorCode=a.ErrorCode,n.FileOpenPreference=a.FileOpenPreference;var s=t(26);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerFocusEnterHandler=s.registerFocusEnterHandler,n.registerEnterSettingsHandler=s.registerEnterSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(27);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var d=t(12);n.settings=d.settings;var u=t(28);n.tasks=u.tasks;var c=t(16);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var f=t(17);n.media=f.media;var m=t(29);n.location=m.location;var g=t(30);n.meeting=g.meeting;var p=t(31);n.people=p.people;var C=t(32);n.video=C.video},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),i[n]=e>>>((3&n)<<3)&255;return i}}},function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,i=t;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(6),o=t(2),a=t(0),s=t(3);!function(e){var n,t;function l(){u();try{a.Communication.childWindow&&a.Communication.childWindow.close()}finally{a.Communication.childWindow=null,a.Communication.childOrigin=null}}function d(e){n=e,l();var t=n.width||600,r=n.height||400;t=Math.min(t,a.Communication.currentWindow.outerWidth-400),r=Math.min(r,a.Communication.currentWindow.outerHeight-200);var i=document.createElement("a");i.href=n.url;var o=void 0!==a.Communication.currentWindow.screenLeft?a.Communication.currentWindow.screenLeft:a.Communication.currentWindow.screenX,s=void 0!==a.Communication.currentWindow.screenTop?a.Communication.currentWindow.screenTop:a.Communication.currentWindow.screenY;o+=a.Communication.currentWindow.outerWidth/2-t/2,s+=a.Communication.currentWindow.outerHeight/2-r/2,a.Communication.childWindow=a.Communication.currentWindow.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+s+", left="+o+", width="+t+", height="+r),a.Communication.childWindow?c():m("FailedToOpenWindow")}function u(){t&&(clearInterval(t),t=0),s.removeHandler("initialize"),s.removeHandler("navigateCrossDomain")}function c(){u(),t=a.Communication.currentWindow.setInterval(function(){if(!a.Communication.childWindow||a.Communication.childWindow.closed)m("CancelledByUser");else{var e=a.Communication.childOrigin;try{a.Communication.childOrigin="*",a.sendMessageEventToChild("ping")}finally{a.Communication.childOrigin=e}}},100),s.registerHandler("initialize",function(){return[o.FrameContexts.authentication,i.GlobalVars.hostClientType]}),s.registerHandler("navigateCrossDomain",function(){return!1})}function f(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,l()}}function m(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,l()}}function g(e,n,t){if(e){var r=document.createElement("a");r.href=decodeURIComponent(e),r.host&&r.host!==window.location.host&&"outlook.office.com"===r.host&&r.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(r.href=p(r.href,"result",t)),a.Communication.currentWindow.location.assign(p(r.href,"authSuccess",""))),n&&"reason"===n&&(t&&(r.href=p(r.href,"reason",t)),a.Communication.currentWindow.location.assign(p(r.href,"authFailure",""))))}}function p(e,n,t){var r=e.indexOf("#"),i=-1===r?"#":e.substr(r);return i=i+"&"+n+(""!==t?"="+t:""),(e=-1===r?e:e.substr(0,r))+i}e.initialize=function(){s.registerHandler("authentication.authenticate.success",f,!1),s.registerHandler("authentication.authenticate.failure",m,!1)},e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage,o.FrameContexts.meetingStage),i.GlobalVars.hostClientType===o.HostClientType.desktop||i.GlobalVars.hostClientType===o.HostClientType.android||i.GlobalVars.hostClientType===o.HostClientType.ios||i.GlobalVars.hostClientType===o.HostClientType.rigel){var s=document.createElement("a");s.href=t.url,a.sendMessageToParent("authentication.authenticate",[s.href,t.width,t.height],function(e,n){e?t.successCallback(n):t.failureCallback(n)})}else d(t)},e.getAuthToken=function(e){r.ensureInitialized(),a.sendMessageToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent],function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.getUser=function(e){r.ensureInitialized(),a.sendMessageToParent("authentication.getUser",function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.notifySuccess=function(e,n){g(n,"result",e),r.ensureInitialized(o.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){g(n,"reason",e),r.ensureInitialized(o.FrameContexts.authentication),a.sendMessageToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(a.Communication.parentWindow,function(){return setTimeout(function(){return a.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(5),a=t(0),s=t(3);!function(e){var n,t;function l(e){var t=new d(e);n?n(t):t.notifySuccess()}e.initialize=function(){s.registerHandler("settings.save",l,!1),s.registerHandler("settings.remove",u,!1)},e.setValidityState=function(e){r.ensureInitialized(i.FrameContexts.settings,i.FrameContexts.remove),a.sendMessageToParent("settings.setValidityState",[e])},e.getSettings=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.sidePanel),a.sendMessageToParent("settings.getSettings",e)},e.setSettings=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.settings,i.FrameContexts.sidePanel),a.sendMessageToParent("settings.setSettings",[e],n||o.getGenericOnCompleteHandler())},e.registerOnSaveHandler=function(e){r.ensureInitialized(i.FrameContexts.settings),n=e,e&&a.sendMessageToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){r.ensureInitialized(i.FrameContexts.remove,i.FrameContexts.settings),t=e,e&&a.sendMessageToParent("registerHandler",["remove"])};var d=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function u(){var e=new c;t?t(e):e.notifySuccess()}var c=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(3);!function(e){e.registerGetLogHandler=function(e){r.ensureInitialized(),e?o.registerHandler("log.request",function(){var n=e();i.sendMessageToParent("log.receive",[n])}):o.removeHandler("log.request")}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(5),a=t(0),s=t(15),l=t(3),d=t(6),u=t(7),c=t(4);n.initializePrivateApis=function(){s.menus.initialize()},n.getUserJoinedTeams=function(e,n){if(r.ensureInitialized(),d.GlobalVars.hostClientType===i.HostClientType.android&&!r.isAPISupportedByPlatform(c.getUserJoinedTeamsSupportedAndroidClientVersion)){var t={errorCode:u.ErrorCode.OLD_PLATFORM};throw new Error(JSON.stringify(t))}a.sendMessageToParent("getUserJoinedTeams",[n],e)},n.enterFullscreen=function(){r.ensureInitialized(i.FrameContexts.content),a.sendMessageToParent("enterFullscreen",[])},n.exitFullscreen=function(){r.ensureInitialized(i.FrameContexts.content),a.sendMessageToParent("exitFullscreen",[])},n.openFilePreview=function(e){r.ensureInitialized(i.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference];a.sendMessageToParent("openFilePreview",n)},n.showNotification=function(e){r.ensureInitialized(i.FrameContexts.content);var n=[e.message,e.notificationType];a.sendMessageToParent("showNotification",n)},n.uploadCustomApp=function(e,n){r.ensureInitialized(),a.sendMessageToParent("uploadCustomApp",[e],n||o.getGenericOnCompleteHandler())},n.sendCustomMessage=function(e,n,t){r.ensureInitialized(),a.sendMessageToParent(e,n,t)},n.sendCustomEvent=function(e,n){if(r.ensureInitialized(),!a.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;r.ensureInitialized(),l.registerHandler(e,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.apply(t,e)})},n.getChatMembers=function(e){r.ensureInitialized(),a.sendMessageToParent("getChatMembers",e)},n.getConfigSetting=function(e,n){r.ensureInitialized(),a.sendMessageToParent("getConfigSetting",[n],e)},n.registerUserSettingsChangeHandler=function(e,n){r.ensureInitialized(),l.registerHandler("userSettingsChange",n,!0,[e])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(3);!function(e){var n,t,a,s=function(){return function(){this.enabled=!0,this.selected=!1}}();function l(e){a&&a(e)||(r.ensureInitialized(),i.sendMessageToParent("viewConfigItemPress",[e]))}function d(e){n&&n(e)||(r.ensureInitialized(),i.sendMessageToParent("handleNavBarMenuItemPress",[e]))}function u(e){t&&t(e)||(r.ensureInitialized(),i.sendMessageToParent("handleActionMenuItemPress",[e]))}e.MenuItem=s,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){o.registerHandler("navBarMenuItemPress",d,!1),o.registerHandler("actionMenuItemPress",u,!1),o.registerHandler("setModuleView",l,!1)},e.setUpViews=function(e,n){r.ensureInitialized(),a=n,i.sendMessageToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){r.ensureInitialized(),n=t,i.sendMessageToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){r.ensureInitialized(),t=n,i.sendMessageToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(5),a=t(0),s=t(3),l=function(){function e(){}return e.prototype.postMessage=function(e,n){r.ensureInitialized(),a.sendMessageToParent("messageForChild",[e],n||o.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForParent",n)},e}();n.ChildAppWindow=l;var d=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){r.ensureInitialized(i.FrameContexts.task),a.sendMessageToParent("messageForParent",[e],n||o.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&s.registerHandler("messageForChild",n)},e}();n.ParentAppWindow=d},function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var i=t(6),o=t(7),a=t(1),s=t(2),l=t(5),d=t(18),u=t(0),c=t(3),f=t(4);!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.GlobalVars.isFramelessWindow?a.isAPISupportedByPlatform(f.captureImageMobileSupportVersion)?u.sendMessageToParent("captureImage",e):e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var t=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return r(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(f.mediaAPISupportVersion))?d.validateGetMediaInputs(this.mimeType,this.format,this.content)?a.isAPISupportedByPlatform(f.getMediaCallbackSupportVersion)?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content];u.sendMessageToParent("getMedia",t,function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var r=d.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,r)}else{var i=d.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(i)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)})},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},r=[n,this.content];this.content&&e&&u.sendMessageToParent("getMedia",r),c.registerHandler("getMedia"+n,function(r){if(e){var i=JSON.parse(r);if(i.error)e(i.error,null),c.removeHandler("getMedia"+n);else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var a=d.createFile(t.assembleAttachment,t.mediaMimeType);e(i.error,a),c.removeHandler("getMedia"+n)}else{var s=d.decodeAttachment(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),c.removeHandler("getMedia"+n)}})},n}(n);e.Media=t,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(f.mediaAPISupportVersion))if(d.validateSelectMediaInputs(e)){var r=[e];u.sendMessageToParent("selectMedia",r,function(e,r){if(r){for(var i=[],o=0,a=r;o<a.length;o++){var s=a[o];i.push(new t(s))}n(e,i)}else n(e,null)})}else{var i={errorCode:o.ErrorCode.INVALID_ARGUMENTS};n(i,null)}else{var l={errorCode:o.ErrorCode.OLD_PLATFORM};n(l,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),a.isAPISupportedByPlatform(f.mediaAPISupportVersion))if(d.validateViewImagesInput(e)){var t=[e];u.sendMessageToParent("viewImages",t,n)}else n({errorCode:o.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:o.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");a.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.GlobalVars.hostClientType!==s.HostClientType.desktop&&i.GlobalVars.hostClientType!==s.HostClientType.web&&i.GlobalVars.hostClientType!==s.HostClientType.rigel?a.isAPISupportedByPlatform(f.scanBarCodeAPIMobileSupportVersion)?d.validateScanBarCodeInput(n)?u.sendMessageToParent("media.scanBarCode",[n],e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null):e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(17);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,r=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==r&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),r++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),r=new Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);var o=new Uint8Array(r),a=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:a}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==r.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)},n.validatePeoplePickerInput=function(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}},function(e,n,t){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(t(20)),r(t(8))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(21);n.bot=r.bot;var i=t(15);n.menus=i.menus;var o=t(13);n.logs=o.logs;var a=t(33);n.NotificationTypes=a.NotificationTypes,n.ViewerActionTypes=a.ViewerActionTypes,n.UserSettingTypes=a.UserSettingTypes;var s=t(14);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp,n.registerUserSettingsChangeHandler=s.registerUserSettingsChangeHandler;var l=t(34);n.conversations=l.conversations;var d=t(35);n.meetingRoom=d.meetingRoom;var u=t(36);n.remoteCamera=u.remoteCamera;var c=t(37);n.files=c.files;var f=t(38);n.appEntity=f.appEntity},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(1);!function(e){e.sendQuery=function(e,n,t){i.ensureInitialized(),r.sendMessageToParent("bot.executeQuery",[e],function(e,r){e?n(r):t(r)})},e.getSupportedCommands=function(e,n){i.ensureInitialized(),r.sendMessageToParent("bot.getSupportedCommands",function(t,r){t?e(r):n(r)})},e.authenticate=function(e,n,t){i.ensureInitialized(),r.sendMessageToParent("bot.authenticate",[e],function(e,r){e?n(r):t(r)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var r=t(23),i=t(24),o=i;o.v1=r,o.v4=i,e.exports=o},function(e,n,t){var r,i,o=t(9),a=t(10),s=0,l=0;e.exports=function(e,n,t){var d=n&&t||0,u=n||[],c=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:i;if(null==c||null==f){var m=o();null==c&&(c=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=i=16383&(m[6]<<8|m[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:l+1,C=g-s+(p-l)/1e4;if(C<0&&void 0===e.clockseq&&(f=f+1&16383),(C<0||g>s)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=p,i=f;var h=(1e4*(268435455&(g+=122192928e5))+p)%4294967296;u[d++]=h>>>24&255,u[d++]=h>>>16&255,u[d++]=h>>>8&255,u[d++]=255&h;var v=g/4294967296*1e4&268435455;u[d++]=v>>>8&255,u[d++]=255&v,u[d++]=v>>>24&15|16,u[d++]=v>>>16&255,u[d++]=f>>>8|128,u[d++]=255&f;for(var T=0;T<6;++T)u[d+T]=c[T];return n||a(u)}},function(e,n,t){var r=t(9),i=t(10);e.exports=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[o+s]=a[s];return n||i(a)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(4),o=t(0);!function(e){e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.notifyAppLoaded=function(){r.ensureInitialized(),o.sendMessageToParent(e.Messages.AppLoaded,[i.version])},e.notifySuccess=function(){r.ensureInitialized(),o.sendMessageToParent(e.Messages.Success,[i.version])},e.notifyFailure=function(n){r.ensureInitialized(),o.sendMessageToParent(e.Messages.Failure,[n.reason,n.message])},e.notifyExpectedFailure=function(n){r.ensureInitialized(),o.sendMessageToParent(e.Messages.ExpectedFailure,[n.reason,n.message])}}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(6),o=t(4),a=t(12),s=t(5),l=t(13),d=t(2),u=t(0),c=t(11),f=t(14),m=t(3);function g(e,n){i.GlobalVars.initializeCalled||(i.GlobalVars.initializeCalled=!0,m.initializeHandlers(),u.initializeCommunication(function(e,n,t){void 0===t&&(t=o.defaultSDKVersionForCompatCheck),i.GlobalVars.frameContext=e,i.GlobalVars.hostClientType=n,i.GlobalVars.clientSupportedSDKVersion=t,i.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),i.GlobalVars.initializeCallbacks=[],i.GlobalVars.initializeCompleted=!0},n),c.authentication.initialize(),a.settings.initialize(),f.initializePrivateApis(),this._uninitialize=function(){i.GlobalVars.frameContext&&(C(null),h(null),v(null),b(null),w(null),T(null),l.logs.registerGetLogHandler(null)),i.GlobalVars.frameContext===d.FrameContexts.settings&&a.settings.registerOnSaveHandler(null),i.GlobalVars.frameContext===d.FrameContexts.remove&&a.settings.registerOnRemoveHandler(null),i.GlobalVars.initializeCalled=!1,i.GlobalVars.initializeCompleted=!1,i.GlobalVars.initializeCallbacks=[],i.GlobalVars.additionalValidOrigins=[],i.GlobalVars.frameContext=null,i.GlobalVars.hostClientType=null,i.GlobalVars.isFramelessWindow=!1,u.uninitializeCommunication()}),Array.isArray(n)&&r.processAdditionalValidOrigins(n),e&&(i.GlobalVars.initializeCompleted?e():i.GlobalVars.initializeCallbacks.push(e))}function p(){window.print()}function C(e){r.ensureInitialized(),m.registerOnThemeChangeHandler(e)}function h(e){r.ensureInitialized(),m.registerHandler("fullScreenChange",e)}function v(e){r.ensureInitialized(),m.registerBackButtonHandler(e)}function T(e){r.ensureInitialized(),m.registerOnLoadHandler(e)}function b(e){r.ensureInitialized(),m.registerBeforeUnloadHandler(e)}function w(e){r.ensureInitialized(),m.registerFocusEnterHandler(e)}function P(e){r.ensureInitialized(d.FrameContexts.content),u.sendMessageToParent("setFrameContext",[e])}n.initialize=g,n._initialize=function(e){u.Communication.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){i.GlobalVars.printCapabilityEnabled||(i.GlobalVars.printCapabilityEnabled=!0,r.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(p(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=p,n.getContext=function(e){r.ensureInitialized(),u.sendMessageToParent("getContext",function(n){n.frameContext||(n.frameContext=i.GlobalVars.frameContext),e(n)})},n.registerOnThemeChangeHandler=C,n.registerFullScreenHandler=h,n.registerAppButtonClickHandler=function(e){r.ensureInitialized(d.FrameContexts.content),m.registerHandler("appButtonClick",e)},n.registerAppButtonHoverEnterHandler=function(e){r.ensureInitialized(d.FrameContexts.content),m.registerHandler("appButtonHoverEnter",e)},n.registerAppButtonHoverLeaveHandler=function(e){r.ensureInitialized(d.FrameContexts.content),m.registerHandler("appButtonHoverLeave",e)},n.registerBackButtonHandler=v,n.registerOnLoadHandler=T,n.registerBeforeUnloadHandler=b,n.registerFocusEnterHandler=w,n.registerEnterSettingsHandler=function(e){r.ensureInitialized(d.FrameContexts.content),m.registerHandler("changeSettings",e)},n.getTabInstances=function(e,n){r.ensureInitialized(),u.sendMessageToParent("getTabInstances",[n],e)},n.getMruTabInstances=function(e,n){r.ensureInitialized(),u.sendMessageToParent("getMruTabInstances",[n],e)},n.shareDeepLink=function(e){r.ensureInitialized(d.FrameContexts.content,d.FrameContexts.sidePanel,d.FrameContexts.meetingStage),u.sendMessageToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){r.ensureInitialized(d.FrameContexts.content,d.FrameContexts.sidePanel,d.FrameContexts.settings,d.FrameContexts.task,d.FrameContexts.stage,d.FrameContexts.meetingStage),u.sendMessageToParent("executeDeepLink",[e],n||s.getGenericOnCompleteHandler())},n.setFrameContext=P,n.initializeWithFrameContext=function(e,n,t){g(n,t),P(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(5),o=t(2),a=t(0);n.returnFocus=function(e){r.ensureInitialized(o.FrameContexts.content),a.sendMessageToParent("returnFocus",[e])},n.navigateToTab=function(e,n){r.ensureInitialized(),a.sendMessageToParent("navigateToTab",[e],n||i.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided"))},n.navigateCrossDomain=function(e,n){r.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage,o.FrameContexts.meetingStage),a.sendMessageToParent("navigateCrossDomain",[e],n||i.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))},n.navigateBack=function(e){r.ensureInitialized(),a.sendMessageToParent("navigateBack",[],e||i.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context."))}},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&(t[r[i]]=e[r[i]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),o=t(16),a=t(0),s=t(1);!function(e){e.startTask=function(e,n){return s.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.meetingStage),a.sendMessageToParent("tasks.startTask",[e],n),new o.ChildAppWindow},e.updateTask=function(e){s.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task,i.FrameContexts.meetingStage),e.width,e.height;var n=r(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");a.sendMessageToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task,i.FrameContexts.meetingStage),a.sendMessageToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(7),i=t(1),o=t(2),a=t(0),s=t(4);!function(e){e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task),i.isAPISupportedByPlatform(s.locationAPIsRequiredVersion)?e?a.sendMessageToParent("location.getLocation",[e],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.task),i.isAPISupportedByPlatform(s.locationAPIsRequiredVersion)?e?a.sendMessageToParent("location.showLocation",[e],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(3),o=t(1),a=t(2);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),r.sendMessageToParent("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),r.sendMessageToParent("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage,a.FrameContexts.settings,a.FrameContexts.content),r.sendMessageToParent("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),r.sendMessageToParent("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),r.sendMessageToParent("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");o.ensureInitialized(a.FrameContexts.sidePanel),i.registerHandler("meeting.liveStreamChanged",e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(7),a=t(18),s=t(0),l=t(4);!function(e){(n.people||(n.people={})).selectPeople=function(e,n){if(!e)throw new Error("[people picker] Callback cannot be null");r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task,i.FrameContexts.settings),r.isAPISupportedByPlatform(l.peoplePickerRequiredVersion)?a.validatePeoplePickerInput(n)?s.sendMessageToParent("people.selectPeople",[n],e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(1),o=t(2),a=t(3);!function(e){function n(){r.sendMessageToParent("video.videoFrameProcessed")}function t(e){r.sendMessageToParent("video.notifyError",[e])}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(e,s){i.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("video.newVideoFrame",function(r){void 0!==r&&e(r,n,t)}),r.sendMessageToParent("video.registerForVideoFrame",[s])},e.notifySelectedVideoEffectChanged=function(e,n){i.ensureInitialized(o.FrameContexts.sidePanel),r.sendMessageToParent("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){i.ensureInitialized(o.FrameContexts.sidePanel),a.registerHandler("video.effectParameterChange",e)}}(n.video||(n.video={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(0),a=t(3);!function(e){e.openConversation=function(e){r.ensureInitialized(i.FrameContexts.content),o.sendMessageToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}],function(e,n){if(!e)throw new Error(n)}),e.onStartConversation&&a.registerHandler("startConversation",function(n,t,r,i){return e.onStartConversation({subEntityId:n,conversationId:t,channelId:r,entityId:i})}),e.onCloseConversation&&a.registerHandler("closeConversation",function(n,t,r,i){return e.onCloseConversation({subEntityId:n,conversationId:t,channelId:r,entityId:i})})},e.closeConversation=function(){r.ensureInitialized(i.FrameContexts.content),o.sendMessageToParent("conversations.closeConversation"),a.removeHandler("startConversation"),a.removeHandler("closeConversation")}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(3);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){r.ensureInitialized(),i.sendMessageToParent("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");r.ensureInitialized(),i.sendMessageToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");r.ensureInitialized(),o.registerHandler("meetingRoom.meetingRoomCapabilitiesUpdate",function(n){r.ensureInitialized(),e(n)})},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");r.ensureInitialized(),o.registerHandler("meetingRoom.meetingRoomStatesUpdate",function(n){r.ensureInitialized(),e(n)})}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(2),o=t(0),a=t(3);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),o.sendMessageToParent("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");r.ensureInitialized(i.FrameContexts.sidePanel),a.registerHandler("remoteCamera.sessionStatusChange",e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(1),o=t(8);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),e.getCloudStorageFolders=function(e,n){if(i.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");r.sendMessageToParent("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if(i.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");r.sendMessageToParent("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if(i.ensureInitialized(o.FrameContexts.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");r.sendMessageToParent("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if(i.ensureInitialized(o.FrameContexts.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");r.sendMessageToParent("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if(i.ensureInitialized(o.FrameContexts.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");r.sendMessageToParent("files.openCloudStorageFile",[e,n,t])}}(n.files||(n.files={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t(1),o=t(8);!function(e){(n.appEntity||(n.appEntity={})).selectAppEntity=function(e,n,t){if(i.ensureInitialized(o.FrameContexts.content),!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!t)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");r.sendMessageToParent("appEntity.selectAppEntity",[e,n],t)}}()}])});

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

// EXTERNAL MODULE: ../metaos-teams-compat/dist/MicrosoftTeams.min.js
var dist_MicrosoftTeams_min = __webpack_require__(704);
;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        dist_MicrosoftTeams_min.initialize();
        dist_MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        initializeDownloadLinks();
        outputTabRenderedLocation(dist_MicrosoftTeams_min.getContext);
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.getContext(output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.getTabInstances(output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.getMruTabInstances(output);
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
                dist_MicrosoftTeams_min.navigateCrossDomain(url);
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
                dist_MicrosoftTeams_min.returnFocus(navigateForward);
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
                dist_MicrosoftTeams_min.navigateCrossDomain(url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            }
        });
        addModule({
            name: "registerEnterSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.registerEnterSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
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
                dist_MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
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
                dist_MicrosoftTeams_min.executeDeepLink(deepLink);
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
                dist_MicrosoftTeams_min.authentication.authenticate({
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
                childWindow = dist_MicrosoftTeams_min.tasks.startTask(taskInfo);
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
                var parentWindow = dist_MicrosoftTeams_min.ParentAppWindow.Instance;
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
                var parentWindow = dist_MicrosoftTeams_min.ParentAppWindow.Instance;
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
                dist_MicrosoftTeams_min.showNotification(showNotificationParameters);
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
                dist_MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
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
                dist_MicrosoftTeams_min.authentication.notifyFailure(reason);
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
                dist_MicrosoftTeams_min.authentication.notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.settings.getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    dist_MicrosoftTeams_min.settings.setSettings({
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
                dist_MicrosoftTeams_min.settings.setSettings(settings);
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
                dist_MicrosoftTeams_min.settings.setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.settings.registerOnRemoveHandler(function (removeEvent) {
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
                dist_MicrosoftTeams_min.openFilePreview(filePreviewParameters);
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
                dist_MicrosoftTeams_min.tasks.submitTask(result, appId);
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
                dist_MicrosoftTeams_min.tasks.startTask(taskInfo, (error, result) => {
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
                dist_MicrosoftTeams_min.tasks.updateTask(taskInfo);
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
                dist_MicrosoftTeams_min.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.getChatMembers(output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min;
                dist_MicrosoftTeams_min.getUserJoinedTeams(output);
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
                dist_MicrosoftTeams_min.registerBeforeUnloadHandler(function (readyToUnload) {
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
                dist_MicrosoftTeams_min.registerBackButtonHandler(function () {
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
                    dist_MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
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
                dist_MicrosoftTeams_min.conversations.closeConversation();
            }
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                dist_MicrosoftTeams_min.media.captureImage((err, files) => {
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
                dist_MicrosoftTeams_min.media.selectMedia(mediaInputs, (err, medias) => {
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
                dist_MicrosoftTeams_min.media.selectMedia(inputParams, (err, medias) => {
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
                dist_MicrosoftTeams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
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
                    dist_MicrosoftTeams_min.media.viewImages(urlList, (gmErr) => {
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
                dist_MicrosoftTeams_min.media.viewImages(urlList, (err) => {
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
                dist_MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
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
                dist_MicrosoftTeams_min.location.showLocation(location, (err, result) => {
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
                dist_MicrosoftTeams_min.media.scanBarCode((err, result) => {
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
                dist_MicrosoftTeams_min.meeting.getMeetingDetails((err, getMeetingDetails) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(getMeetingDetails);
                });
            }
        });
        // addModule({
        //   name: "monetization.openPurchaseExperience",
        //   initializedRequired : true,
        //   hasOutput : true,
        //   action: function (output) {
        //     microsoftTeams.monetization.openPurchaseExperience((err: microsoftTeams.SdkError) => {
        //       if(err){
        //         output(err);
        //       }
        //       output(null);
        //     });
        //   }
        // });
        addModule({
            name: "getIncomingClientAudioState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                dist_MicrosoftTeams_min.meeting.getIncomingClientAudioState((err, result) => {
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
                dist_MicrosoftTeams_min.meeting.toggleIncomingClientAudio((err, result) => {
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
                dist_MicrosoftTeams_min.meeting.getAuthenticationTokenForAnonymousUser((err, authenticationTokenOfAnonymousUser) => {
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
                dist_MicrosoftTeams_min.people.selectPeople((err, people) => {
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
        dist_MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        dist_MicrosoftTeams_min.appInitialization.notifyFailure({ reason: dist_MicrosoftTeams_min.appInitialization.FailedReason.Other, message: err.message });
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