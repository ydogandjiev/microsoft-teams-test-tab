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

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=7)}([function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(){}return e.initializeCalled=!1,e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=t},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(4),r=a(2),s=a(0);function o(e,n){s.GlobalVars.parentWindow&&e!==s.GlobalVars.parentWindow?s.GlobalVars.childWindow&&e!==s.GlobalVars.childWindow||(s.GlobalVars.childWindow=e,s.GlobalVars.childOrigin=n):(s.GlobalVars.parentWindow=e,s.GlobalVars.parentOrigin=n),s.GlobalVars.parentWindow&&s.GlobalVars.parentWindow.closed&&(s.GlobalVars.parentWindow=null,s.GlobalVars.parentOrigin=null),s.GlobalVars.childWindow&&s.GlobalVars.childWindow.closed&&(s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null),d(s.GlobalVars.parentWindow),d(s.GlobalVars.childWindow)}function i(e){if("id"in e.data){var n=e.data,a=s.GlobalVars.callbacks[n.id];a&&(a.apply(null,n.args),delete s.GlobalVars.callbacks[n.id])}else if("func"in e.data){n=e.data;var t=s.GlobalVars.handlers[n.func];t&&t.apply(this,n.args)}}function l(e){if("id"in e.data&&"func"in e.data){var n=e.data,a=s.GlobalVars.handlers[n.func];if(a){var t=a.apply(this,n.args);t&&b(s.GlobalVars.childWindow,n.id,Array.isArray(t)?t:[t])}else{var r=f(s.GlobalVars.parentWindow,n.func,n.args);s.GlobalVars.callbacks[r]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];s.GlobalVars.childWindow&&b(s.GlobalVars.childWindow,n.id,e)}}}}function u(e){return e===s.GlobalVars.parentWindow?s.GlobalVars.parentMessageQueue:e===s.GlobalVars.childWindow?s.GlobalVars.childMessageQueue:[]}function c(e){return e===s.GlobalVars.parentWindow?s.GlobalVars.parentOrigin:e===s.GlobalVars.childWindow?s.GlobalVars.childOrigin:null}function d(e){for(var n=c(e),a=u(e);e&&n&&a.length>0;)e.postMessage(a.shift(),n)}function f(e,n,a){var t=g(n,a);if(s.GlobalVars.isFramelessWindow)s.GlobalVars.currentWindow&&s.GlobalVars.currentWindow.nativeInterface&&s.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(t));else{var r=c(e);e&&r?e.postMessage(t,r):u(e).push(t)}return t.id}function b(e,n,a){var t=p(n,a),r=c(e);e&&r&&e.postMessage(t,r)}function g(e,n){return{id:s.GlobalVars.nextMessageId++,func:e,args:n||[]}}function p(e,n){return{id:e,args:n||[]}}s.GlobalVars.handlers.themeChange=function(e){s.GlobalVars.themeChangeHandler&&s.GlobalVars.themeChangeHandler(e);s.GlobalVars.childWindow&&f(s.GlobalVars.childWindow,"themeChange",[e])},s.GlobalVars.handlers.fullScreenChange=function(e){s.GlobalVars.fullScreenChangeHandler&&s.GlobalVars.fullScreenChangeHandler(e)},s.GlobalVars.handlers.backButtonPress=function(){s.GlobalVars.backButtonPressHandler&&s.GlobalVars.backButtonPressHandler()||t.navigateBack()},s.GlobalVars.handlers.beforeUnload=function(){var e=function(){f(s.GlobalVars.parentWindow,"readyToUnload",[])};s.GlobalVars.beforeUnloadHandler&&s.GlobalVars.beforeUnloadHandler(e)||e()},s.GlobalVars.handlers.changeSettings=function(){s.GlobalVars.changeSettingsHandler&&s.GlobalVars.changeSettingsHandler()},s.GlobalVars.handlers.startConversation=function(e,n){s.GlobalVars.onStartConversationHandler&&s.GlobalVars.onStartConversationHandler(e,n)},s.GlobalVars.handlers.closeConversation=function(e,n){s.GlobalVars.onCloseConversationHandler&&s.GlobalVars.onCloseConversationHandler(e,n)},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!s.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(s.GlobalVars.frameContext&&e&&e.length>0){for(var a=!1,t=0;t<e.length;t++)if(e[t]===s.GlobalVars.frameContext){a=!0;break}if(!a)throw new Error("This call is not allowed in the '"+s.GlobalVars.frameContext+"' context")}},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent.source,a=e.origin||e.originalEvent.origin;n===s.GlobalVars.currentWindow||a!==s.GlobalVars.currentWindow.location.origin&&!r.validOriginRegExp.test(a.toLowerCase())||(o(n,a),n===s.GlobalVars.parentWindow?i(e):n===s.GlobalVars.childWindow&&l(e))}},n.handleParentMessage=i,n.waitForMessageQueue=function(e,n){var a=s.GlobalVars.currentWindow.setInterval(function(){0===u(e).length&&(clearInterval(a),n())},100)},n.sendMessageRequest=f},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(3);n.version="1.4.1",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],n.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},n.validOriginRegExp=t.generateRegExpFromUrls(n.validOrigins)},function(e,n,a){"use strict";function t(e){for(var n="^",a=e.split("."),t=0;t<a.length;t++)n+=(t>0?"[.]":"")+a[t].replace("*","[^/^.]+");return n+="$"}Object.defineProperty(n,"__esModule",{value:!0}),n.generateRegExpFromUrls=function(e){for(var n="",a=0;a<e.length;a++)n+=(0===a?"":"|")+t(e[a]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,a){if(!n)throw new Error(e||a)}}},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0),s=a(2),o=a(5),i=a(3);function l(){window.print()}function u(e){t.ensureInitialized(),r.GlobalVars.themeChangeHandler=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["themeChange"])}function c(e){t.ensureInitialized(),r.GlobalVars.fullScreenChangeHandler=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["fullScreen"])}function d(e){t.ensureInitialized(),r.GlobalVars.backButtonPressHandler=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["backButton"])}function f(e){t.ensureInitialized(),r.GlobalVars.beforeUnloadHandler=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["beforeUnload"])}n.initialize=function(e){if(void 0===e&&(e=window),!r.GlobalVars.initializeCalled){r.GlobalVars.initializeCalled=!0,r.GlobalVars.currentWindow=e;var n=function(e){return t.processMessage(e)};r.GlobalVars.parentWindow=r.GlobalVars.currentWindow.parent!==r.GlobalVars.currentWindow.self?r.GlobalVars.currentWindow.parent:r.GlobalVars.currentWindow.opener,r.GlobalVars.parentWindow?r.GlobalVars.currentWindow.addEventListener("message",n,!1):(r.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=r.GlobalVars.handleParentMessage);try{r.GlobalVars.parentOrigin="*";var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"initialize",[s.version]);r.GlobalVars.callbacks[a]=function(e,n){r.GlobalVars.frameContext=e,r.GlobalVars.hostClientType=n}}finally{r.GlobalVars.parentOrigin=null}this._uninitialize=function(){r.GlobalVars.frameContext&&(u(null),c(null),d(null),f(null)),r.GlobalVars.frameContext===s.frameContexts.settings&&o.settings.registerOnSaveHandler(null),r.GlobalVars.frameContext===s.frameContexts.remove&&o.settings.registerOnRemoveHandler(null),r.GlobalVars.isFramelessWindow||r.GlobalVars.currentWindow.removeEventListener("message",n,!1),r.GlobalVars.initializeCalled=!1,r.GlobalVars.parentWindow=null,r.GlobalVars.parentOrigin=null,r.GlobalVars.parentMessageQueue=[],r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null,r.GlobalVars.childMessageQueue=[],r.GlobalVars.nextMessageId=0,r.GlobalVars.callbacks={},r.GlobalVars.frameContext=null,r.GlobalVars.hostClientType=null,r.GlobalVars.isFramelessWindow=!1}}},n._uninitialize=function(){},n.enablePrintCapability=function(){r.GlobalVars.printCapabilityEnabled||(r.GlobalVars.printCapabilityEnabled=!0,t.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(l(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=l,n.getContext=function(e){t.ensureInitialized();var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"getContext");r.GlobalVars.callbacks[n]=e},n.registerOnThemeChangeHandler=u,n.registerFullScreenHandler=c,n.registerBackButtonHandler=d,n.navigateBack=function(e){t.ensureInitialized();var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"navigateBack",[]);r.GlobalVars.callbacks[n]=e||i.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")},n.registerBeforeUnloadHandler=f,n.registerChangeSettingsHandler=function(e){t.ensureInitialized(s.frameContexts.content),r.GlobalVars.changeSettingsHandler=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["changeSettings"])},n.navigateCrossDomain=function(e,n){t.ensureInitialized(s.frameContexts.content,s.frameContexts.settings,s.frameContexts.remove,s.frameContexts.task);var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"navigateCrossDomain",[e]);r.GlobalVars.callbacks[a]=n||i.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.getTabInstances=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"getTabInstances",[n]);r.GlobalVars.callbacks[a]=e},n.getMruTabInstances=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"getMruTabInstances",[n]);r.GlobalVars.callbacks[a]=e},n.shareDeepLink=function(e){t.ensureInitialized(s.frameContexts.content),t.sendMessageRequest(r.GlobalVars.parentWindow,"shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.navigateToTab=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"navigateToTab",[e]);r.GlobalVars.callbacks[a]=n||i.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0),s=a(2),o=a(3);!function(e){var n,a;r.GlobalVars.handlers["settings.save"]=function(e){var a=new i(e);n?n(a):a.notifySuccess()},r.GlobalVars.handlers["settings.remove"]=function(){var e=new l;a?a(e):e.notifySuccess()},e.setValidityState=function(e){t.ensureInitialized(s.frameContexts.settings,s.frameContexts.remove),t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.setValidityState",[e])},e.getSettings=function(e){t.ensureInitialized(s.frameContexts.content,s.frameContexts.settings,s.frameContexts.remove);var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.getSettings");r.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){t.ensureInitialized(s.frameContexts.content,s.frameContexts.settings);var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.setSettings",[e]);r.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){t.ensureInitialized(s.frameContexts.settings),n=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["save"])},e.registerOnRemoveHandler=function(e){t.ensureInitialized(s.frameContexts.remove),a=e,e&&t.sendMessageRequest(r.GlobalVars.parentWindow,"registerHandler",["remove"])};var i=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),t.sendMessageRequest(r.GlobalVars.parentWindow,"settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0),s=a(2),o=a(3),i=function(){function e(){}return e.prototype.postMessage=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"messageForChild",[e]);r.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=i;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){t.ensureInitialized(s.frameContexts.task);var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"messageForParent",[e]);r.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,a){"use strict";function t(e){for(var a in e)n.hasOwnProperty(a)||(n[a]=e[a])}Object.defineProperty(n,"__esModule",{value:!0}),t(a(8)),t(a(12))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(9);n.menus=t.menus;var r=a(10);n.enterFullscreen=r.enterFullscreen,n.executeDeepLink=r.executeDeepLink,n.exitFullscreen=r.exitFullscreen,n.getChatMembers=r.getChatMembers,n.getConfigSetting=r.getConfigSetting,n.getUserJoinedTeams=r.getUserJoinedTeams,n.openFilePreview=r.openFilePreview,n.sendCustomMessage=r.sendCustomMessage,n.showNotification=r.showNotification,n.uploadCustomApp=r.uploadCustomApp;var s=a(11);n.conversations=s.conversations},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0);!function(e){var n,a,s,o=function(){return function(){this.enabled=!0}}();e.MenuItem=o,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),r.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(t.ensureInitialized(),t.sendMessageRequest(r.GlobalVars.parentWindow,"handleNavBarMenuItemPress",[e]))},r.GlobalVars.handlers.actionMenuItemPress=function(e){a&&a(e)||(t.ensureInitialized(),t.sendMessageRequest(r.GlobalVars.parentWindow,"handleActionMenuItemPress",[e]))},r.GlobalVars.handlers.setModuleView=function(e){s&&s(e)||(t.ensureInitialized(),t.sendMessageRequest(r.GlobalVars.parentWindow,"viewConfigItemPress",[e]))},e.setUpViews=function(e,n){t.ensureInitialized(),s=n,t.sendMessageRequest(r.GlobalVars.parentWindow,"setUpViews",[e])},e.setNavBarMenu=function(e,a){t.ensureInitialized(),n=a,t.sendMessageRequest(r.GlobalVars.parentWindow,"setNavBarMenu",[e])},e.showActionMenu=function(e,n){t.ensureInitialized(),a=n,t.sendMessageRequest(r.GlobalVars.parentWindow,"showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0),s=a(2),o=a(3);n.getUserJoinedTeams=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"getUserJoinedTeams",[n]);r.GlobalVars.callbacks[a]=e},n.enterFullscreen=function(){t.ensureInitialized(s.frameContexts.content),t.sendMessageRequest(r.GlobalVars.parentWindow,"enterFullscreen",[])},n.exitFullscreen=function(){t.ensureInitialized(s.frameContexts.content),t.sendMessageRequest(r.GlobalVars.parentWindow,"exitFullscreen",[])},n.openFilePreview=function(e){t.ensureInitialized(s.frameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];t.sendMessageRequest(r.GlobalVars.parentWindow,"openFilePreview",n)},n.showNotification=function(e){t.ensureInitialized(s.frameContexts.content);var n=[e.message,e.notificationType];t.sendMessageRequest(r.GlobalVars.parentWindow,"showNotification",n)},n.executeDeepLink=function(e,n){t.ensureInitialized(s.frameContexts.content);var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"executeDeepLink",[e]);r.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler()},n.uploadCustomApp=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"uploadCustomApp",[e]);r.GlobalVars.callbacks[a]=n||o.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n){return t.ensureInitialized(),t.sendMessageRequest(r.GlobalVars.parentWindow,e,n)},n.getChatMembers=function(e){t.ensureInitialized();var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"getChatMembers");r.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){t.ensureInitialized();var a=t.sendMessageRequest(r.GlobalVars.parentWindow,"getConfigSetting",[n]);r.GlobalVars.callbacks[a]=e}},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0),s=a(2);!function(e){e.openConversation=function(e){t.ensureInitialized(s.frameContexts.content);var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId}]);r.GlobalVars.onCloseConversationHandler=e.onCloseConversation,r.GlobalVars.onStartConversationHandler=e.onStartConversation,r.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){t.ensureInitialized(s.frameContexts.content),t.sendMessageRequest(r.GlobalVars.parentWindow,"conversations.closeConversation"),r.GlobalVars.onCloseConversationHandler=null,r.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(13);n.authentication=t.authentication;var r=a(4);n.enablePrintCapability=r.enablePrintCapability,n.getContext=r.getContext,n.getMruTabInstances=r.getMruTabInstances,n.getTabInstances=r.getTabInstances,n.initialize=r.initialize,n.navigateBack=r.navigateBack,n.navigateCrossDomain=r.navigateCrossDomain,n.navigateToTab=r.navigateToTab,n.print=r.print,n.registerBackButtonHandler=r.registerBackButtonHandler,n.registerBeforeUnloadHandler=r.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=r.registerChangeSettingsHandler,n.registerFullScreenHandler=r.registerFullScreenHandler,n.registerOnThemeChangeHandler=r.registerOnThemeChangeHandler,n.shareDeepLink=r.shareDeepLink;var s=a(5);n.settings=s.settings;var o=a(14);n.tasks=o.tasks;var i=a(6);n.ChildAppWindow=i.ChildAppWindow,n.ParentAppWindow=i.ParentAppWindow},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),r=a(0),s=a(2);!function(e){var n,a;function o(){l();try{r.GlobalVars.childWindow&&r.GlobalVars.childWindow.close()}finally{r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null}}function i(e){n=e,o();var a=n.width||600,t=n.height||400;a=Math.min(a,r.GlobalVars.currentWindow.outerWidth-400),t=Math.min(t,r.GlobalVars.currentWindow.outerHeight-200);var s=document.createElement("a");s.href=n.url;var i=void 0!==r.GlobalVars.currentWindow.screenLeft?r.GlobalVars.currentWindow.screenLeft:r.GlobalVars.currentWindow.screenX,l=void 0!==r.GlobalVars.currentWindow.screenTop?r.GlobalVars.currentWindow.screenTop:r.GlobalVars.currentWindow.screenY;i+=r.GlobalVars.currentWindow.outerWidth/2-a/2,l+=r.GlobalVars.currentWindow.outerHeight/2-t/2,r.GlobalVars.childWindow=r.GlobalVars.currentWindow.open(s.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+i+", width="+a+", height="+t),r.GlobalVars.childWindow?u():c("FailedToOpenWindow")}function l(){a&&(clearInterval(a),a=0),delete r.GlobalVars.handlers.initialize,delete r.GlobalVars.handlers.navigateCrossDomain}function u(){l(),a=r.GlobalVars.currentWindow.setInterval(function(){if(!r.GlobalVars.childWindow||r.GlobalVars.childWindow.closed)c("CancelledByUser");else{var e=r.GlobalVars.childOrigin;try{r.GlobalVars.childOrigin="*",t.sendMessageRequest(r.GlobalVars.childWindow,"ping")}finally{r.GlobalVars.childOrigin=e}}},100),r.GlobalVars.handlers.initialize=function(){return[s.frameContexts.authentication,r.GlobalVars.hostClientType]},r.GlobalVars.handlers.navigateCrossDomain=function(e){return!1}}function c(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,o()}}function d(e,n,a){if(e){var t=document.createElement("a");t.href=decodeURIComponent(e),t.host&&t.host!==window.location.host&&"outlook.office.com"===t.host&&t.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(a&&(t.href=f(t.href,"result",a)),r.GlobalVars.currentWindow.location.assign(f(t.href,"authSuccess",""))),n&&"reason"===n&&(a&&(t.href=f(t.href,"reason",a)),r.GlobalVars.currentWindow.location.assign(f(t.href,"authFailure",""))))}}function f(e,n,a){var t=e.indexOf("#"),r=-1===t?"#":e.substr(t);return r=r+"&"+n+(""!==a?"="+a:""),(e=-1===t?e:e.substr(0,t))+r}r.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,o()}},r.GlobalVars.handlers["authentication.authenticate.failure"]=c,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var a=void 0!==e?e:n;if(t.ensureInitialized(s.frameContexts.content,s.frameContexts.settings,s.frameContexts.remove,s.frameContexts.task),"desktop"===r.GlobalVars.hostClientType||"android"===r.GlobalVars.hostClientType||"ios"===r.GlobalVars.hostClientType||"rigel"===r.GlobalVars.hostClientType){var o=document.createElement("a");o.href=a.url;var l=t.sendMessageRequest(r.GlobalVars.parentWindow,"authentication.authenticate",[o.href,a.width,a.height]);r.GlobalVars.callbacks[l]=function(e,n){e?a.successCallback(n):a.failureCallback(n)}}else i(a)},e.getAuthToken=function(e){t.ensureInitialized();var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"authentication.getAuthToken",[e.resources]);r.GlobalVars.callbacks[n]=function(n,a){n?e.successCallback(a):e.failureCallback(a)}},e.getUser=function(e){t.ensureInitialized();var n=t.sendMessageRequest(r.GlobalVars.parentWindow,"authentication.getUser");r.GlobalVars.callbacks[n]=function(n,a){n?e.successCallback(a):e.failureCallback(a)}},e.notifySuccess=function(e,n){d(n,"result",e),t.ensureInitialized(s.frameContexts.authentication),t.sendMessageRequest(r.GlobalVars.parentWindow,"authentication.authenticate.success",[e]),t.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){d(n,"reason",e),t.ensureInitialized(s.frameContexts.authentication),t.sendMessageRequest(r.GlobalVars.parentWindow,"authentication.authenticate.failure",[e]),t.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,a){"use strict";var t=this&&this.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&(a[t[r]]=e[t[r]])}return a};Object.defineProperty(n,"__esModule",{value:!0});var r=a(1),s=a(0),o=a(2),i=a(6);!function(e){e.startTask=function(e,n){r.ensureInitialized(o.frameContexts.content);var a=r.sendMessageRequest(s.GlobalVars.parentWindow,"tasks.startTask",[e]);return s.GlobalVars.callbacks[a]=n,new i.ChildAppWindow},e.updateTask=function(e){r.ensureInitialized(o.frameContexts.content,o.frameContexts.task),e.width,e.height;var n=t(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");r.sendMessageRequest(s.GlobalVars.parentWindow,"tasks.updateTask",[e])},e.submitTask=function(e,n){r.ensureInitialized(o.frameContexts.content,o.frameContexts.task),r.sendMessageRequest(s.GlobalVars.parentWindow,"tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))}])});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
let isInitializedCalled = false;
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
        if (config.name == "initialize") {
            isInitializedCalled = true;
        }
        else if (config.initializedRequired && !isInitializedCalled) {
            // Get the modal
            var modal = document.getElementById("myModal");
            var messageBox = document.getElementById("errorMessage");
            messageBox.innerText = "Please initialize sdk first by clicking initialize Button";
            modal.style.display = "block";
        }
        else {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
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

// EXTERNAL MODULE: ..2/microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// CONCATENATED MODULE: ./src/app.ts



const app_history = createBrowserHistory();
const initializeAppModules = () => {
    var childWindow;
    let totalStates = 0;
    addModule({
        name: "initialize",
        initializedRequired: false,
        action: function () {
            MicrosoftTeams_min["initialize"]();
        }
    });
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
            MicrosoftTeams_min["settings"].setSettings(settings, function (status, reason) {
                if (status) {
                    output(`Set Settings call successed`);
                }
                else {
                    output(`Set Settings call failde: ${reason}`);
                }
            });
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
            app_history.push('/testTab', { some: 'state', id: totalStates });
            output("total States: " + totalStates);
            // Listen for changes to the current location.
            app_history.listen((location, action) => {
                // location is an object like window.location
                totalStates = (location && location.state) ? location.state.id : 0;
                output("total States: " + totalStates);
            });
        }
    });
    addModule({
        name: "registerBackButtonHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            output("total States: " + totalStates);
            MicrosoftTeams_min["registerBackButtonHandler"](function () {
                window.onpopstate = () => {
                    output("onpopstate: back button clicked. total remaining state: " + totalStates);
                };
                if (totalStates > 0) {
                    totalStates--;
                    output("back button clicked. total remaining state: " + totalStates);
                    return true;
                }
                return false;
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