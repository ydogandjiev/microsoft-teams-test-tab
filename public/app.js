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

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)a.d(t,s,function(n){return e[n]}.bind(null,s));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=8)}([function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=t},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(4),s=a(2),r=a(0);function i(e,n){r.GlobalVars.parentWindow&&e!==r.GlobalVars.parentWindow?r.GlobalVars.childWindow&&e!==r.GlobalVars.childWindow||(r.GlobalVars.childWindow=e,r.GlobalVars.childOrigin=n):(r.GlobalVars.parentWindow=e,r.GlobalVars.parentOrigin=n),r.GlobalVars.parentWindow&&r.GlobalVars.parentWindow.closed&&(r.GlobalVars.parentWindow=null,r.GlobalVars.parentOrigin=null),r.GlobalVars.childWindow&&r.GlobalVars.childWindow.closed&&(r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null),c(r.GlobalVars.parentWindow),c(r.GlobalVars.childWindow)}function o(e){if("id"in e.data){var n=e.data,a=r.GlobalVars.callbacks[n.id];a&&(a.apply(null,n.args),delete r.GlobalVars.callbacks[n.id])}else if("func"in e.data){n=e.data;var t=r.GlobalVars.handlers[n.func];t&&t.apply(this,n.args)}}function l(e){if("id"in e.data&&"func"in e.data){var n=e.data,a=r.GlobalVars.handlers[n.func];if(a){var t=a.apply(this,n.args);t&&f(r.GlobalVars.childWindow,n.id,Array.isArray(t)?t:[t])}else{var s=b(r.GlobalVars.parentWindow,n.func,n.args);r.GlobalVars.callbacks[s]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];r.GlobalVars.childWindow&&f(r.GlobalVars.childWindow,n.id,e)}}}}function u(e){return e===r.GlobalVars.parentWindow?r.GlobalVars.parentMessageQueue:e===r.GlobalVars.childWindow?r.GlobalVars.childMessageQueue:[]}function d(e){return e===r.GlobalVars.parentWindow?r.GlobalVars.parentOrigin:e===r.GlobalVars.childWindow?r.GlobalVars.childOrigin:null}function c(e){for(var n=d(e),a=u(e);e&&n&&a.length>0;)e.postMessage(a.shift(),n)}function b(e,n,a){var t=g(n,a);if(r.GlobalVars.isFramelessWindow)r.GlobalVars.currentWindow&&r.GlobalVars.currentWindow.nativeInterface&&r.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(t));else{var s=d(e);e&&s?e.postMessage(t,s):u(e).push(t)}return t.id}function f(e,n,a){var t=p(n,a),s=d(e);e&&s&&e.postMessage(t,s)}function g(e,n){return{id:r.GlobalVars.nextMessageId++,func:e,args:n||[]}}function p(e,n){return{id:e,args:n||[]}}r.GlobalVars.handlers.themeChange=function(e){r.GlobalVars.themeChangeHandler&&r.GlobalVars.themeChangeHandler(e);r.GlobalVars.childWindow&&b(r.GlobalVars.childWindow,"themeChange",[e])},r.GlobalVars.handlers.fullScreenChange=function(e){r.GlobalVars.fullScreenChangeHandler&&r.GlobalVars.fullScreenChangeHandler(e)},r.GlobalVars.handlers.backButtonPress=function(){r.GlobalVars.backButtonPressHandler&&r.GlobalVars.backButtonPressHandler()||t.navigateBack()},r.GlobalVars.handlers.load=function(e){r.GlobalVars.loadHandler&&r.GlobalVars.loadHandler(e);r.GlobalVars.childWindow&&b(r.GlobalVars.childWindow,"load",[e])},r.GlobalVars.handlers.beforeUnload=function(){var e=function(){b(r.GlobalVars.parentWindow,"readyToUnload",[])};r.GlobalVars.beforeUnloadHandler&&r.GlobalVars.beforeUnloadHandler(e)||e()},r.GlobalVars.handlers.changeSettings=function(){r.GlobalVars.changeSettingsHandler&&r.GlobalVars.changeSettingsHandler()},r.GlobalVars.handlers.startConversation=function(e,n,a,t){r.GlobalVars.onStartConversationHandler&&r.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:a,entityId:t})},r.GlobalVars.handlers.closeConversation=function(e,n,a,t){r.GlobalVars.onCloseConversationHandler&&r.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:a,entityId:t})},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!r.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(r.GlobalVars.frameContext&&e&&e.length>0){for(var a=!1,t=0;t<e.length;t++)if(e[t]===r.GlobalVars.frameContext){a=!0;break}if(!a)throw new Error("This call is not allowed in the '"+r.GlobalVars.frameContext+"' context")}},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent.source,a=e.origin||e.originalEvent.origin;n===r.GlobalVars.currentWindow||a!==r.GlobalVars.currentWindow.location.origin&&!s.validOriginRegExp.test(a.toLowerCase())||(i(n,a),n===r.GlobalVars.parentWindow?o(e):n===r.GlobalVars.childWindow&&l(e))}},n.handleParentMessage=o,n.waitForMessageQueue=function(e,n){var a=r.GlobalVars.currentWindow.setInterval(function(){0===u(e).length&&(clearInterval(a),n())},100)},n.sendMessageRequest=b},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(3);n.version="1.6.0-beta.11",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],n.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},n.validOriginRegExp=t.generateRegExpFromUrls(n.validOrigins)},function(e,n,a){"use strict";function t(e){for(var n="^",a=e.split("."),t=0;t<a.length;t++)n+=(t>0?"[.]":"")+a[t].replace("*","[^/^.]+");return n+="$"}Object.defineProperty(n,"__esModule",{value:!0}),n.generateRegExpFromUrls=function(e){for(var n="",a=0;a<e.length;a++)n+=(0===a?"":"|")+t(e[a]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,a){if(!n)throw new Error(e||a)}}},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2),i=a(5),o=a(3),l=a(6);function u(){window.print()}function d(e){t.ensureInitialized(),s.GlobalVars.themeChangeHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["themeChange"])}function c(e){t.ensureInitialized(),s.GlobalVars.fullScreenChangeHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["fullScreen"])}function b(e){t.ensureInitialized(),s.GlobalVars.backButtonPressHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["backButton"])}function f(e){t.ensureInitialized(),s.GlobalVars.loadHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["load"])}function g(e){t.ensureInitialized(),s.GlobalVars.beforeUnloadHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["beforeUnload"])}n.initialize=function(e){if(!s.GlobalVars.initializeCalled){s.GlobalVars.initializeCalled=!0;var n=function(e){return t.processMessage(e)};s.GlobalVars.currentWindow=s.GlobalVars.currentWindow||window,s.GlobalVars.parentWindow=s.GlobalVars.currentWindow.parent!==s.GlobalVars.currentWindow.self?s.GlobalVars.currentWindow.parent:s.GlobalVars.currentWindow.opener,s.GlobalVars.parentWindow?s.GlobalVars.currentWindow.addEventListener("message",n,!1):(s.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=t.handleParentMessage);try{s.GlobalVars.parentOrigin="*";var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"initialize",[r.version]);s.GlobalVars.callbacks[a]=function(e,n){s.GlobalVars.frameContext=e,s.GlobalVars.hostClientType=n,s.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),s.GlobalVars.initializeCallbacks=[],s.GlobalVars.initializeCompleted=!0}}finally{s.GlobalVars.parentOrigin=null}this._uninitialize=function(){s.GlobalVars.frameContext&&(d(null),c(null),b(null),g(null),f(null),l.logs.registerGetLogHandler(null)),s.GlobalVars.frameContext===r.frameContexts.settings&&i.settings.registerOnSaveHandler(null),s.GlobalVars.frameContext===r.frameContexts.remove&&i.settings.registerOnRemoveHandler(null),s.GlobalVars.isFramelessWindow||s.GlobalVars.currentWindow.removeEventListener("message",n,!1),s.GlobalVars.initializeCalled=!1,s.GlobalVars.initializeCompleted=!1,s.GlobalVars.initializeCallbacks=[],s.GlobalVars.parentWindow=null,s.GlobalVars.parentOrigin=null,s.GlobalVars.parentMessageQueue=[],s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null,s.GlobalVars.childMessageQueue=[],s.GlobalVars.nextMessageId=0,s.GlobalVars.callbacks={},s.GlobalVars.frameContext=null,s.GlobalVars.hostClientType=null,s.GlobalVars.isFramelessWindow=!1}}e&&(s.GlobalVars.initializeCompleted?e():s.GlobalVars.initializeCallbacks.push(e))},n._initialize=function(e){s.GlobalVars.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){s.GlobalVars.printCapabilityEnabled||(s.GlobalVars.printCapabilityEnabled=!0,t.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(u(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=u,n.getContext=function(e){t.ensureInitialized();var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"getContext");s.GlobalVars.callbacks[n]=e},n.registerOnThemeChangeHandler=d,n.registerFullScreenHandler=c,n.registerBackButtonHandler=b,n.navigateBack=function(e){t.ensureInitialized();var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"navigateBack",[]);s.GlobalVars.callbacks[n]=e||o.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")},n.registerOnLoadHandler=f,n.registerBeforeUnloadHandler=g,n.registerChangeSettingsHandler=function(e){t.ensureInitialized(r.frameContexts.content),s.GlobalVars.changeSettingsHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["changeSettings"])},n.navigateCrossDomain=function(e,n){t.ensureInitialized(r.frameContexts.content,r.frameContexts.settings,r.frameContexts.remove,r.frameContexts.task);var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"navigateCrossDomain",[e]);s.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.getTabInstances=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"getTabInstances",[n]);s.GlobalVars.callbacks[a]=e},n.getMruTabInstances=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"getMruTabInstances",[n]);s.GlobalVars.callbacks[a]=e},n.shareDeepLink=function(e){t.ensureInitialized(r.frameContexts.content),t.sendMessageRequest(s.GlobalVars.parentWindow,"shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){t.ensureInitialized(r.frameContexts.content,r.frameContexts.task);var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"executeDeepLink",[e]);s.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler()},n.navigateToTab=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"navigateToTab",[e]);s.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2),i=a(3);!function(e){var n,a;s.GlobalVars.handlers["settings.save"]=function(e){var a=new o(e);n?n(a):a.notifySuccess()},s.GlobalVars.handlers["settings.remove"]=function(){var e=new l;a?a(e):e.notifySuccess()},e.setValidityState=function(e){t.ensureInitialized(r.frameContexts.settings,r.frameContexts.remove),t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.setValidityState",[e])},e.getSettings=function(e){t.ensureInitialized(r.frameContexts.content,r.frameContexts.settings,r.frameContexts.remove);var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.getSettings");s.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){t.ensureInitialized(r.frameContexts.content,r.frameContexts.settings);var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.setSettings",[e]);s.GlobalVars.callbacks[a]=n||i.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){t.ensureInitialized(r.frameContexts.settings),n=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["save"])},e.registerOnRemoveHandler=function(e){t.ensureInitialized(r.frameContexts.remove),a=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["remove"])};var o=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),t.sendMessageRequest(s.GlobalVars.parentWindow,"settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0);!function(e){s.GlobalVars.handlers["log.request"]=function(){if(s.GlobalVars.getLogHandler){var e=s.GlobalVars.getLogHandler();t.sendMessageRequest(s.GlobalVars.parentWindow,"log.receive",[e])}},e.registerGetLogHandler=function(e){t.ensureInitialized(),s.GlobalVars.getLogHandler=e,e&&t.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2),i=a(3),o=function(){function e(){}return e.prototype.postMessage=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"messageForChild",[e]);s.GlobalVars.callbacks[a]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(s.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=o;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){t.ensureInitialized(r.frameContexts.task);var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"messageForParent",[e]);s.GlobalVars.callbacks[a]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(s.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,a){"use strict";function t(e){for(var a in e)n.hasOwnProperty(a)||(n[a]=e[a])}Object.defineProperty(n,"__esModule",{value:!0}),t(a(9)),t(a(14))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(10);n.bot=t.bot;var s=a(11);n.menus=s.menus;var r=a(6);n.logs=r.logs;var i=a(12);n.enterFullscreen=i.enterFullscreen,n.exitFullscreen=i.exitFullscreen,n.getChatMembers=i.getChatMembers,n.getConfigSetting=i.getConfigSetting,n.getUserJoinedTeams=i.getUserJoinedTeams,n.openFilePreview=i.openFilePreview,n.sendCustomMessage=i.sendCustomMessage,n.showNotification=i.showNotification,n.uploadCustomApp=i.uploadCustomApp;var o=a(13);n.conversations=o.conversations},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),s=a(1);!function(e){e.sendQuery=function(e,n,a){s.ensureInitialized();var r=s.sendMessageRequest(t.GlobalVars.parentWindow,"bot.executeQuery",[e]);t.GlobalVars.callbacks[r]=function(e,t){e?n(t):a(t)}},e.getSupportedCommands=function(e,n){s.ensureInitialized();var a=s.sendMessageRequest(t.GlobalVars.parentWindow,"bot.getSupportedCommands");t.GlobalVars.callbacks[a]=function(a,t){a?e(t):n(t)}},e.authenticate=function(e,n,a){s.ensureInitialized();var r=s.sendMessageRequest(t.GlobalVars.parentWindow,"bot.authenticate",[e]);t.GlobalVars.callbacks[r]=function(e,t){e?n(t):a(t)}},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0);!function(e){var n,a,r,i=function(){return function(){this.enabled=!0}}();e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),s.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,"handleNavBarMenuItemPress",[e]))},s.GlobalVars.handlers.actionMenuItemPress=function(e){a&&a(e)||(t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,"handleActionMenuItemPress",[e]))},s.GlobalVars.handlers.setModuleView=function(e){r&&r(e)||(t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,"viewConfigItemPress",[e]))},e.setUpViews=function(e,n){t.ensureInitialized(),r=n,t.sendMessageRequest(s.GlobalVars.parentWindow,"setUpViews",[e])},e.setNavBarMenu=function(e,a){t.ensureInitialized(),n=a,t.sendMessageRequest(s.GlobalVars.parentWindow,"setNavBarMenu",[e])},e.showActionMenu=function(e,n){t.ensureInitialized(),a=n,t.sendMessageRequest(s.GlobalVars.parentWindow,"showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2),i=a(3);n.getUserJoinedTeams=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"getUserJoinedTeams",[n]);s.GlobalVars.callbacks[a]=e},n.enterFullscreen=function(){t.ensureInitialized(r.frameContexts.content),t.sendMessageRequest(s.GlobalVars.parentWindow,"enterFullscreen",[])},n.exitFullscreen=function(){t.ensureInitialized(r.frameContexts.content),t.sendMessageRequest(s.GlobalVars.parentWindow,"exitFullscreen",[])},n.openFilePreview=function(e){t.ensureInitialized(r.frameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];t.sendMessageRequest(s.GlobalVars.parentWindow,"openFilePreview",n)},n.showNotification=function(e){t.ensureInitialized(r.frameContexts.content);var n=[e.message,e.notificationType];t.sendMessageRequest(s.GlobalVars.parentWindow,"showNotification",n)},n.uploadCustomApp=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"uploadCustomApp",[e]);s.GlobalVars.callbacks[a]=n||i.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n){return t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,e,n)},n.getChatMembers=function(e){t.ensureInitialized();var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"getChatMembers");s.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(s.GlobalVars.parentWindow,"getConfigSetting",[n]);s.GlobalVars.callbacks[a]=e}},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2);!function(e){e.openConversation=function(e){t.ensureInitialized(r.frameContexts.content);var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}]);s.GlobalVars.onCloseConversationHandler=e.onCloseConversation,s.GlobalVars.onStartConversationHandler=e.onStartConversation,s.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){t.ensureInitialized(r.frameContexts.content),t.sendMessageRequest(s.GlobalVars.parentWindow,"conversations.closeConversation"),s.GlobalVars.onCloseConversationHandler=null,s.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(15);n.appInitialization=t.appInitialization;var s=a(16);n.authentication=s.authentication;var r=a(4);n.enablePrintCapability=r.enablePrintCapability,n.executeDeepLink=r.executeDeepLink,n.getContext=r.getContext,n.getMruTabInstances=r.getMruTabInstances,n.getTabInstances=r.getTabInstances,n.initialize=r.initialize,n.navigateBack=r.navigateBack,n.navigateCrossDomain=r.navigateCrossDomain,n.navigateToTab=r.navigateToTab,n.print=r.print,n.registerBackButtonHandler=r.registerBackButtonHandler,n.registerBeforeUnloadHandler=r.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=r.registerChangeSettingsHandler,n.registerFullScreenHandler=r.registerFullScreenHandler,n.registerOnLoadHandler=r.registerOnLoadHandler,n.registerOnThemeChangeHandler=r.registerOnThemeChangeHandler,n.shareDeepLink=r.shareDeepLink;var i=a(5);n.settings=i.settings;var o=a(17);n.tasks=o.tasks;var l=a(7);n.ChildAppWindow=l.ChildAppWindow,n.ParentAppWindow=l.ParentAppWindow},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2);!function(e){e.notifyAppLoaded=function(){t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,"appInitialization.appLoaded",[r.version])},e.notifySuccess=function(){t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,"appInitialization.success",[r.version])},e.notifyFailure=function(e){t.ensureInitialized(),t.sendMessageRequest(s.GlobalVars.parentWindow,"appInitialization.failure",[e.reason,e.message])}}(n.appInitialization||(n.appInitialization={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),s=a(0),r=a(2);!function(e){var n,a;function i(){l();try{s.GlobalVars.childWindow&&s.GlobalVars.childWindow.close()}finally{s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null}}function o(e){n=e,i();var a=n.width||600,t=n.height||400;a=Math.min(a,s.GlobalVars.currentWindow.outerWidth-400),t=Math.min(t,s.GlobalVars.currentWindow.outerHeight-200);var r=document.createElement("a");r.href=n.url;var o=void 0!==s.GlobalVars.currentWindow.screenLeft?s.GlobalVars.currentWindow.screenLeft:s.GlobalVars.currentWindow.screenX,l=void 0!==s.GlobalVars.currentWindow.screenTop?s.GlobalVars.currentWindow.screenTop:s.GlobalVars.currentWindow.screenY;o+=s.GlobalVars.currentWindow.outerWidth/2-a/2,l+=s.GlobalVars.currentWindow.outerHeight/2-t/2,s.GlobalVars.childWindow=s.GlobalVars.currentWindow.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+o+", width="+a+", height="+t),s.GlobalVars.childWindow?u():d("FailedToOpenWindow")}function l(){a&&(clearInterval(a),a=0),delete s.GlobalVars.handlers.initialize,delete s.GlobalVars.handlers.navigateCrossDomain}function u(){l(),a=s.GlobalVars.currentWindow.setInterval(function(){if(!s.GlobalVars.childWindow||s.GlobalVars.childWindow.closed)d("CancelledByUser");else{var e=s.GlobalVars.childOrigin;try{s.GlobalVars.childOrigin="*",t.sendMessageRequest(s.GlobalVars.childWindow,"ping")}finally{s.GlobalVars.childOrigin=e}}},100),s.GlobalVars.handlers.initialize=function(){return[r.frameContexts.authentication,s.GlobalVars.hostClientType]},s.GlobalVars.handlers.navigateCrossDomain=function(){return!1}}function d(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,i()}}function c(e,n,a){if(e){var t=document.createElement("a");t.href=decodeURIComponent(e),t.host&&t.host!==window.location.host&&"outlook.office.com"===t.host&&t.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(a&&(t.href=b(t.href,"result",a)),s.GlobalVars.currentWindow.location.assign(b(t.href,"authSuccess",""))),n&&"reason"===n&&(a&&(t.href=b(t.href,"reason",a)),s.GlobalVars.currentWindow.location.assign(b(t.href,"authFailure",""))))}}function b(e,n,a){var t=e.indexOf("#"),s=-1===t?"#":e.substr(t);return s=s+"&"+n+(""!==a?"="+a:""),(e=-1===t?e:e.substr(0,t))+s}s.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,i()}},s.GlobalVars.handlers["authentication.authenticate.failure"]=d,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var a=void 0!==e?e:n;if(t.ensureInitialized(r.frameContexts.content,r.frameContexts.settings,r.frameContexts.remove,r.frameContexts.task),"desktop"===s.GlobalVars.hostClientType||"android"===s.GlobalVars.hostClientType||"ios"===s.GlobalVars.hostClientType||"rigel"===s.GlobalVars.hostClientType){var i=document.createElement("a");i.href=a.url;var l=t.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.authenticate",[i.href,a.width,a.height]);s.GlobalVars.callbacks[l]=function(e,n){e?a.successCallback(n):a.failureCallback(n)}}else o(a)},e.getAuthToken=function(e){t.ensureInitialized();var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.getAuthToken",[e.resources]);s.GlobalVars.callbacks[n]=function(n,a){n?e.successCallback(a):e.failureCallback(a)}},e.getUser=function(e){t.ensureInitialized();var n=t.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.getUser");s.GlobalVars.callbacks[n]=function(n,a){n?e.successCallback(a):e.failureCallback(a)}},e.notifySuccess=function(e,n){c(n,"result",e),t.ensureInitialized(r.frameContexts.authentication),t.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.authenticate.success",[e]),t.waitForMessageQueue(s.GlobalVars.parentWindow,function(){return setTimeout(function(){return s.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){c(n,"reason",e),t.ensureInitialized(r.frameContexts.authentication),t.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.authenticate.failure",[e]),t.waitForMessageQueue(s.GlobalVars.parentWindow,function(){return setTimeout(function(){return s.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,a){"use strict";var t=this&&this.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&(a[t[s]]=e[t[s]])}return a};Object.defineProperty(n,"__esModule",{value:!0});var s=a(1),r=a(0),i=a(2),o=a(7);!function(e){e.startTask=function(e,n){s.ensureInitialized(i.frameContexts.content);var a=s.sendMessageRequest(r.GlobalVars.parentWindow,"tasks.startTask",[e]);return r.GlobalVars.callbacks[a]=n,new o.ChildAppWindow},e.updateTask=function(e){s.ensureInitialized(i.frameContexts.content,i.frameContexts.task),e.width,e.height;var n=t(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");s.sendMessageRequest(r.GlobalVars.parentWindow,"tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(i.frameContexts.content,i.frameContexts.task),s.sendMessageRequest(r.GlobalVars.parentWindow,"tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))}])});

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

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
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