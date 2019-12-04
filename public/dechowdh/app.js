/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(4),r=t(2),s=t(0),i=t(3),o=t(5),l=t(6);function u(e,n){return(!s.GlobalVars.currentWindow||e!==s.GlobalVars.currentWindow)&&(!!(s.GlobalVars.currentWindow&&s.GlobalVars.currentWindow.location&&n&&n===s.GlobalVars.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||s.GlobalVars.additionalValidOriginsRegexp&&s.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function c(e,n){s.GlobalVars.parentWindow&&e!==s.GlobalVars.parentWindow?s.GlobalVars.childWindow&&e!==s.GlobalVars.childWindow||(s.GlobalVars.childWindow=e,s.GlobalVars.childOrigin=n):(s.GlobalVars.parentWindow=e,s.GlobalVars.parentOrigin=n),s.GlobalVars.parentWindow&&s.GlobalVars.parentWindow.closed&&(s.GlobalVars.parentWindow=null,s.GlobalVars.parentOrigin=null),s.GlobalVars.childWindow&&s.GlobalVars.childWindow.closed&&(s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null),h(s.GlobalVars.parentWindow),h(s.GlobalVars.childWindow)}function d(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=s.GlobalVars.callbacks[n.id];t&&(t.apply(null,n.args),delete s.GlobalVars.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;var a=s.GlobalVars.handlers[n.func];a&&a.apply(this,n.args)}}function f(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=n.func?s.GlobalVars.handlers[n.func]:null;if(t){var a=t.apply(this,n.args);void 0!==a&&v(n.id,Array.isArray(a)?a:[a])}else{var r=V(n.func,n.args);s.GlobalVars.callbacks[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s.GlobalVars.childWindow&&v(n.id,e)}}}}function g(e){var n=s.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),s.GlobalVars.additionalValidOrigins=n,s.GlobalVars.additionalValidOrigins.length>0?s.GlobalVars.additionalValidOriginsRegexp=i.generateRegExpFromUrls(s.GlobalVars.additionalValidOrigins):s.GlobalVars.additionalValidOriginsRegexp=null}function b(e){return e===s.GlobalVars.parentWindow?s.GlobalVars.parentMessageQueue:e===s.GlobalVars.childWindow?s.GlobalVars.childMessageQueue:[]}function p(e){return e===s.GlobalVars.parentWindow?s.GlobalVars.parentOrigin:e===s.GlobalVars.childWindow?s.GlobalVars.childOrigin:null}function h(e){for(var n=p(e),t=b(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function V(e,n){var t=s.GlobalVars.parentWindow,a=m(e,n);if(s.GlobalVars.isFramelessWindow)s.GlobalVars.currentWindow&&s.GlobalVars.currentWindow.nativeInterface&&s.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(a));else{var r=p(t);t&&r?t.postMessage(a,r):b(t).push(a)}return a.id}function v(e,n){var t=s.GlobalVars.childWindow,a=C(e,n),r=p(t);t&&r&&t.postMessage(a,r)}function G(e,n){var t=s.GlobalVars.childWindow,a=w(e,n),r=p(t);t&&r?t.postMessage(a,r):b(t).push(a)}function m(e,n){return{id:s.GlobalVars.nextMessageId++,func:e,args:n||[]}}function C(e,n){return{id:e,args:n||[]}}function w(e,n){return{func:e,args:n||[]}}s.GlobalVars.handlers.themeChange=function(e){s.GlobalVars.themeChangeHandler&&s.GlobalVars.themeChangeHandler(e);s.GlobalVars.childWindow&&G("themeChange",[e])},s.GlobalVars.handlers.fullScreenChange=function(e){s.GlobalVars.fullScreenChangeHandler&&s.GlobalVars.fullScreenChangeHandler(e)},s.GlobalVars.handlers.backButtonPress=function(){s.GlobalVars.backButtonPressHandler&&s.GlobalVars.backButtonPressHandler()||a.navigateBack()},s.GlobalVars.handlers.load=function(e){s.GlobalVars.loadHandler&&s.GlobalVars.loadHandler(e);s.GlobalVars.childWindow&&G("load",[e])},s.GlobalVars.handlers.beforeUnload=function(){var e=function(){V("readyToUnload",[])};s.GlobalVars.beforeUnloadHandler&&s.GlobalVars.beforeUnloadHandler(e)||e()},s.GlobalVars.handlers.changeSettings=function(){s.GlobalVars.changeSettingsHandler&&s.GlobalVars.changeSettingsHandler()},s.GlobalVars.handlers.startConversation=function(e,n,t,a){s.GlobalVars.onStartConversationHandler&&s.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},s.GlobalVars.handlers.closeConversation=function(e,n,t,a){s.GlobalVars.onCloseConversationHandler&&s.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!s.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(s.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,a=0;a<e.length;a++)if(e[a]===s.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+s.GlobalVars.frameContext+"' context")}},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;u(n,t)&&(c(n,t),n===s.GlobalVars.parentWindow?d(e):n===s.GlobalVars.childWindow&&f(e))}},n.handleParentMessage=d,n.processAdditionalValidOrigins=g,n.waitForMessageQueue=function(e,n){var t=s.GlobalVars.currentWindow.setInterval(function(){0===b(e).length&&(clearInterval(t),n())},100)},n.sendMessageRequestToParent=V,n.sendMessageEventToChild=G,n.handleMessageValidation=function(e){Array.isArray(e)&&g(e)},n.initializeCallback=function(e){e&&(s.GlobalVars.initializeCompleted?e():s.GlobalVars.initializeCallbacks.push(e))},n.unRegisterHandlers=function(e){s.GlobalVars.frameContext&&(a.registerOnThemeChangeHandler(null),a.registerFullScreenHandler(null),a.registerBackButtonHandler(null),a.registerBeforeUnloadHandler(null),a.registerOnLoadHandler(null),l.logs.registerGetLogHandler(null)),s.GlobalVars.frameContext===r.frameContexts.settings&&o.settings.registerOnSaveHandler(null),s.GlobalVars.frameContext===r.frameContexts.remove&&o.settings.registerOnRemoveHandler(null),s.GlobalVars.isFramelessWindow||s.GlobalVars.currentWindow.removeEventListener("message",e,!1),s.GlobalVars.initializeCalled=!1,s.GlobalVars.initializeCompleted=!1,s.GlobalVars.initializeCallbacks=[],s.GlobalVars.additionalValidOrigins=[],s.GlobalVars.parentWindow=null,s.GlobalVars.parentOrigin=null,s.GlobalVars.parentMessageQueue=[],s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null,s.GlobalVars.childMessageQueue=[],s.GlobalVars.nextMessageId=0,s.GlobalVars.callbacks={},s.GlobalVars.frameContext=null,s.GlobalVars.hostClientType=null,s.GlobalVars.isFramelessWindow=!1},n.handleInitialize=function(e){s.GlobalVars.currentWindow=s.GlobalVars.currentWindow||window,s.GlobalVars.parentWindow=s.GlobalVars.currentWindow.parent!==s.GlobalVars.currentWindow.self?s.GlobalVars.currentWindow.parent:s.GlobalVars.currentWindow.opener,s.GlobalVars.parentWindow?s.GlobalVars.currentWindow.addEventListener("message",e,!1):(s.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=d)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);n.version="1.5.2",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com"],n.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},n.validOriginRegExp=a.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";function a(e){for(var n="^",t=e.split("."),a=0;a<t.length;a++)n+=(a>0?"[.]":"")+t[a].replace("*","[^/^.]+");return n+="$"}Object.defineProperty(n,"__esModule",{value:!0}),n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+a(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),s=t(2),i=t(3);function o(){window.print()}n.initialize=function(e,n){if(!r.GlobalVars.initializeCalled){r.GlobalVars.initializeCalled=!0;var t=function(e){return a.processMessage(e)};a.handleInitialize(t);try{r.GlobalVars.parentOrigin="*";var i=a.sendMessageRequestToParent("initialize",[s.version]);r.GlobalVars.callbacks[i]=function(e,n){r.GlobalVars.frameContext=e,r.GlobalVars.hostClientType=n,r.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),r.GlobalVars.initializeCallbacks=[],r.GlobalVars.initializeCompleted=!0}}finally{r.GlobalVars.parentOrigin=null}this._uninitialize=function(){a.unRegisterHandlers(t)}}a.handleMessageValidation(n),a.initializeCallback(e)},n._initialize=function(e){r.GlobalVars.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){r.GlobalVars.printCapabilityEnabled||(r.GlobalVars.printCapabilityEnabled=!0,a.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(o(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=o,n.getContext=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getContext");r.GlobalVars.callbacks[n]=e},n.registerOnThemeChangeHandler=function(e){a.ensureInitialized(),r.GlobalVars.themeChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["themeChange"])},n.registerFullScreenHandler=function(e){a.ensureInitialized(),r.GlobalVars.fullScreenChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["fullScreen"])},n.registerBackButtonHandler=function(e){a.ensureInitialized(),r.GlobalVars.backButtonPressHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["backButton"])},n.navigateBack=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("navigateBack",[]);r.GlobalVars.callbacks[n]=e||i.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")},n.registerOnLoadHandler=function(e){a.ensureInitialized(),r.GlobalVars.loadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){a.ensureInitialized(),r.GlobalVars.beforeUnloadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["beforeUnload"])},n.registerChangeSettingsHandler=function(e){a.ensureInitialized(s.frameContexts.content),r.GlobalVars.changeSettingsHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["changeSettings"])},n.navigateCrossDomain=function(e,n){a.ensureInitialized(s.frameContexts.content,s.frameContexts.settings,s.frameContexts.remove,s.frameContexts.task);var t=a.sendMessageRequestToParent("navigateCrossDomain",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.getTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getTabInstances",[n]);r.GlobalVars.callbacks[t]=e},n.getMruTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getMruTabInstances",[n]);r.GlobalVars.callbacks[t]=e},n.shareDeepLink=function(e){a.ensureInitialized(s.frameContexts.content),a.sendMessageRequestToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){a.ensureInitialized(s.frameContexts.content,s.frameContexts.task);var t=a.sendMessageRequestToParent("executeDeepLink",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},n.navigateToTab=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("navigateToTab",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")},n.setFrameContext=function(e){a.ensureInitialized(s.frameContexts.content),a.sendMessageRequestToParent("setFrameContext",[e])},n.initializeWithFrameContext=function(e,n,t){if(!r.GlobalVars.initializeCalled){r.GlobalVars.initializeCalled=!0;var i=function(e){return a.processMessage(e)};a.handleInitialize(i);try{r.GlobalVars.parentOrigin="*";var o=a.sendMessageRequestToParent("initialize",[s.version,e]);r.GlobalVars.callbacks[o]=function(e,n){r.GlobalVars.frameContext=e,r.GlobalVars.hostClientType=n,r.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),r.GlobalVars.initializeCallbacks=[],r.GlobalVars.initializeCompleted=!0}}finally{r.GlobalVars.parentOrigin=null}this._uninitialize=function(){a.unRegisterHandlers(i)}}a.handleMessageValidation(t),a.initializeCallback(n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),s=t(2),i=t(3);!function(e){var n,t;r.GlobalVars.handlers["settings.save"]=function(e){var t=new o(e);n?n(t):t.notifySuccess()},r.GlobalVars.handlers["settings.remove"]=function(){var e=new l;t?t(e):e.notifySuccess()},e.setValidityState=function(e){a.ensureInitialized(s.frameContexts.settings,s.frameContexts.remove),a.sendMessageRequestToParent("settings.setValidityState",[e])},e.getSettings=function(e){a.ensureInitialized(s.frameContexts.content,s.frameContexts.settings,s.frameContexts.remove);var n=a.sendMessageRequestToParent("settings.getSettings");r.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){a.ensureInitialized(s.frameContexts.content,s.frameContexts.settings);var t=a.sendMessageRequestToParent("settings.setSettings",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){a.ensureInitialized(s.frameContexts.settings),n=e,e&&a.sendMessageRequestToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){a.ensureInitialized(s.frameContexts.remove),t=e,e&&a.sendMessageRequestToParent("registerHandler",["remove"])};var o=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){r.GlobalVars.handlers["log.request"]=function(){if(r.GlobalVars.getLogHandler){var e=r.GlobalVars.getLogHandler();a.sendMessageRequestToParent("log.receive",[e])}},e.registerGetLogHandler=function(e){a.ensureInitialized(),r.GlobalVars.getLogHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),s=t(2),i=t(3),o=function(){function e(){}return e.prototype.postMessage=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("messageForChild",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=o;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){a.ensureInitialized(s.frameContexts.task);var t=a.sendMessageRequestToParent("messageForParent",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),a(t(9)),a(t(14))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(10);n.bot=a.bot;var r=t(11);n.menus=r.menus;var s=t(6);n.logs=s.logs;var i=t(12);n.enterFullscreen=i.enterFullscreen,n.exitFullscreen=i.exitFullscreen,n.getChatMembers=i.getChatMembers,n.getConfigSetting=i.getConfigSetting,n.getUserJoinedTeams=i.getUserJoinedTeams,n.openFilePreview=i.openFilePreview,n.sendCustomMessage=i.sendCustomMessage,n.showNotification=i.showNotification,n.sendCustomEvent=i.sendCustomEvent,n.registerCustomHandler=i.registerCustomHandler,n.uploadCustomApp=i.uploadCustomApp;var o=t(13);n.conversations=o.conversations},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(1);!function(e){e.sendQuery=function(e,n,t){r.ensureInitialized();var s=r.sendMessageRequestToParent("bot.executeQuery",[e]);a.GlobalVars.callbacks[s]=function(e,a){e?n(a):t(a)}},e.getSupportedCommands=function(e,n){r.ensureInitialized();var t=r.sendMessageRequestToParent("bot.getSupportedCommands");a.GlobalVars.callbacks[t]=function(t,a){t?e(a):n(a)}},e.authenticate=function(e,n,t){r.ensureInitialized();var s=r.sendMessageRequestToParent("bot.authenticate",[e]);a.GlobalVars.callbacks[s]=function(e,a){e?n(a):t(a)}},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){var n,t,s,i=function(){return function(){this.enabled=!0}}();e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),r.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleNavBarMenuItemPress",[e]))},r.GlobalVars.handlers.actionMenuItemPress=function(e){t&&t(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleActionMenuItemPress",[e]))},r.GlobalVars.handlers.setModuleView=function(e){s&&s(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("viewConfigItemPress",[e]))},e.setUpViews=function(e,n){a.ensureInitialized(),s=n,a.sendMessageRequestToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){a.ensureInitialized(),n=t,a.sendMessageRequestToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){a.ensureInitialized(),t=n,a.sendMessageRequestToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),s=t(2),i=t(3);n.getUserJoinedTeams=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getUserJoinedTeams",[n]);r.GlobalVars.callbacks[t]=e},n.enterFullscreen=function(){a.ensureInitialized(s.frameContexts.content),a.sendMessageRequestToParent("enterFullscreen",[])},n.exitFullscreen=function(){a.ensureInitialized(s.frameContexts.content),a.sendMessageRequestToParent("exitFullscreen",[])},n.openFilePreview=function(e){a.ensureInitialized(s.frameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];a.sendMessageRequestToParent("openFilePreview",n)},n.showNotification=function(e){a.ensureInitialized(s.frameContexts.content);var n=[e.message,e.notificationType];a.sendMessageRequestToParent("showNotification",n)},n.uploadCustomApp=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("uploadCustomApp",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n,t){a.ensureInitialized();var s=a.sendMessageRequestToParent(e,n);return"function"==typeof t&&(r.GlobalVars.callbacks[s]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.apply(null,e)}),s},n.sendCustomEvent=function(e,n){if(a.ensureInitialized(),!r.GlobalVars.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;a.ensureInitialized(),r.GlobalVars.handlers[e]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.apply(t,e)}},n.getChatMembers=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getChatMembers");r.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getConfigSetting",[n]);r.GlobalVars.callbacks[t]=e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),s=t(2);!function(e){e.openConversation=function(e){a.ensureInitialized(s.frameContexts.content);var n=a.sendMessageRequestToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}]);r.GlobalVars.onCloseConversationHandler=e.onCloseConversation,r.GlobalVars.onStartConversationHandler=e.onStartConversation,r.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){a.ensureInitialized(s.frameContexts.content),a.sendMessageRequestToParent("conversations.closeConversation"),r.GlobalVars.onCloseConversationHandler=null,r.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(15);n.appInitialization=a.appInitialization;var r=t(16);n.authentication=r.authentication;var s=t(4);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.navigateBack=s.navigateBack,n.navigateCrossDomain=s.navigateCrossDomain,n.navigateToTab=s.navigateToTab,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=s.registerChangeSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.shareDeepLink=s.shareDeepLink;var i=t(5);n.settings=i.settings;var o=t(17);n.tasks=o.tasks;var l=t(7);n.ChildAppWindow=l.ChildAppWindow,n.ParentAppWindow=l.ParentAppWindow},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(2);!function(e){e.notifyAppLoaded=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.appLoaded",[r.version])},e.notifySuccess=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.success",[r.version])},e.notifyFailure=function(e){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.failure",[e.reason,e.message])}}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),s=t(2);!function(e){var n,t;function i(){l();try{r.GlobalVars.childWindow&&r.GlobalVars.childWindow.close()}finally{r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null}}function o(e){n=e,i();var t=n.width||600,a=n.height||400;t=Math.min(t,r.GlobalVars.currentWindow.outerWidth-400),a=Math.min(a,r.GlobalVars.currentWindow.outerHeight-200);var s=document.createElement("a");s.href=n.url;var o=void 0!==r.GlobalVars.currentWindow.screenLeft?r.GlobalVars.currentWindow.screenLeft:r.GlobalVars.currentWindow.screenX,l=void 0!==r.GlobalVars.currentWindow.screenTop?r.GlobalVars.currentWindow.screenTop:r.GlobalVars.currentWindow.screenY;o+=r.GlobalVars.currentWindow.outerWidth/2-t/2,l+=r.GlobalVars.currentWindow.outerHeight/2-a/2,r.GlobalVars.childWindow=r.GlobalVars.currentWindow.open(s.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+o+", width="+t+", height="+a),r.GlobalVars.childWindow?u():c("FailedToOpenWindow")}function l(){t&&(clearInterval(t),t=0),delete r.GlobalVars.handlers.initialize,delete r.GlobalVars.handlers.navigateCrossDomain}function u(){l(),t=r.GlobalVars.currentWindow.setInterval(function(){if(!r.GlobalVars.childWindow||r.GlobalVars.childWindow.closed)c("CancelledByUser");else{var e=r.GlobalVars.childOrigin;try{r.GlobalVars.childOrigin="*",a.sendMessageEventToChild("ping")}finally{r.GlobalVars.childOrigin=e}}},100),r.GlobalVars.handlers.initialize=function(){return[s.frameContexts.authentication,r.GlobalVars.hostClientType]},r.GlobalVars.handlers.navigateCrossDomain=function(){return!1}}function c(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,i()}}function d(e,n,t){if(e){var a=document.createElement("a");a.href=decodeURIComponent(e),a.host&&a.host!==window.location.host&&"outlook.office.com"===a.host&&a.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(a.href=f(a.href,"result",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authSuccess",""))),n&&"reason"===n&&(t&&(a.href=f(a.href,"reason",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authFailure",""))))}}function f(e,n,t){var a=e.indexOf("#"),r=-1===a?"#":e.substr(a);return r=r+"&"+n+(""!==t?"="+t:""),(e=-1===a?e:e.substr(0,a))+r}r.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,i()}},r.GlobalVars.handlers["authentication.authenticate.failure"]=c,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(a.ensureInitialized(s.frameContexts.content,s.frameContexts.settings,s.frameContexts.remove,s.frameContexts.task),"desktop"===r.GlobalVars.hostClientType||"android"===r.GlobalVars.hostClientType||"ios"===r.GlobalVars.hostClientType||"rigel"===r.GlobalVars.hostClientType){var i=document.createElement("a");i.href=t.url;var l=a.sendMessageRequestToParent("authentication.authenticate",[i.href,t.width,t.height]);r.GlobalVars.callbacks[l]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}else o(t)},e.getAuthToken=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getAuthToken",[e.resources]);r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.getUser=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getUser");r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.notifySuccess=function(e,n){d(n,"result",e),a.ensureInitialized(s.frameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){d(n,"reason",e),a.ensureInitialized(s.frameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";var a=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&(t[a[r]]=e[a[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),s=t(0),i=t(2),o=t(7);!function(e){e.startTask=function(e,n){r.ensureInitialized(i.frameContexts.content);var t=r.sendMessageRequestToParent("tasks.startTask",[e]);return s.GlobalVars.callbacks[t]=n,new o.ChildAppWindow},e.updateTask=function(e){r.ensureInitialized(i.frameContexts.content,i.frameContexts.task),e.width,e.height;var n=a(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");r.sendMessageRequestToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){r.ensureInitialized(i.frameContexts.content,i.frameContexts.task),r.sendMessageRequestToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))}])});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
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
            var input;
            var valueGetter;
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
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
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

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min["initialize"]();
        MicrosoftTeams_min["appInitialization"].notifyAppLoaded();
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getContext"](output);
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
                MicrosoftTeams_min["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
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
                MicrosoftTeams_min["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
            }
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerChangeSettingsHandler"](function () {
                    output("Change Settings Event recieved");
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
                MicrosoftTeams_min["shareDeepLink"](deepLinkParameters);
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
                MicrosoftTeams_min["executeDeepLink"](deepLink);
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
                MicrosoftTeams_min["authentication"].authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    },
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
                childWindow = MicrosoftTeams_min["tasks"].startTask(taskInfo);
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
                var parentWindow = MicrosoftTeams_min["ParentAppWindow"].Instance;
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
                var parentWindow = MicrosoftTeams_min["ParentAppWindow"].Instance;
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
                MicrosoftTeams_min["showNotification"](showNotificationParameters);
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
                MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
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
                MicrosoftTeams_min["authentication"].notifyFailure(reason);
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
                MicrosoftTeams_min["authentication"].notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
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
                MicrosoftTeams_min["settings"].setSettings(settings);
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
                MicrosoftTeams_min["settings"].setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].registerOnRemoveHandler(function (removeEvent) {
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
                MicrosoftTeams_min["openFilePreview"](filePreviewParameters);
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
                MicrosoftTeams_min["tasks"].submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                MicrosoftTeams_min["tasks"].startTask(taskInfo);
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
                MicrosoftTeams_min["showNotification"](showNotificationParameters);
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
                MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getChatMembers"](output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min;
                MicrosoftTeams_min["getUserJoinedTeams"](output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerBeforeUnloadHandler"](function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    alert('beforeUnload recieved');
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
                MicrosoftTeams_min["registerBackButtonHandler"](function () {
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
                    MicrosoftTeams_min["conversations"].openConversation(openConversationRequest);
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
                MicrosoftTeams_min["conversations"].closeConversation();
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
        MicrosoftTeams_min["appInitialization"].notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min["appInitialization"].notifyFailure({ reason: "Other" /* Other */, message: err.message });
    }
};

// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map