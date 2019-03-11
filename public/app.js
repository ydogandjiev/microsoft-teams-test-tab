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

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(5);n.version="1.4.1",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],n.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},n.validOriginRegExp=a.generateRegExpFromUrls(n.validOrigins)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(2),r=t(0),s=function(){function e(){}return e.initializeCalled=!1,e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();function i(e,n){s.parentWindow&&e!==s.parentWindow?s.childWindow&&e!==s.childWindow||(s.childWindow=e,s.childOrigin=n):(s.parentWindow=e,s.parentOrigin=n),s.parentWindow&&s.parentWindow.closed&&(s.parentWindow=null,s.parentOrigin=null),s.childWindow&&s.childWindow.closed&&(s.childWindow=null,s.childOrigin=null),d(s.parentWindow),d(s.childWindow)}function o(e){if("id"in e.data){var n=e.data,t=s.callbacks[n.id];t&&(t.apply(null,n.args),delete s.callbacks[n.id])}else if("func"in e.data){n=e.data;var a=s.handlers[n.func];a&&a.apply(this,n.args)}}function l(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=s.handlers[n.func];if(t){var a=t.apply(this,n.args);a&&b(s.childWindow,n.id,Array.isArray(a)?a:[a])}else{var r=f(s.parentWindow,n.func,n.args);s.callbacks[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s.childWindow&&b(s.childWindow,n.id,e)}}}}function u(e){return e===s.parentWindow?s.parentMessageQueue:e===s.childWindow?s.childMessageQueue:[]}function c(e){return e===s.parentWindow?s.parentOrigin:e===s.childWindow?s.childOrigin:null}function d(e){for(var n=c(e),t=u(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function f(e,n,t){var a=g(n,t);if(s.isFramelessWindow)s.currentWindow&&s.currentWindow.nativeInterface&&s.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(a));else{var r=c(e);e&&r?e.postMessage(a,r):u(e).push(a)}return a.id}function b(e,n,t){var a=h(n,t),r=c(e);e&&r&&e.postMessage(a,r)}function g(e,n){return{id:s.nextMessageId++,func:e,args:n||[]}}function h(e,n){return{id:e,args:n||[]}}n.GlobalVars=s,s.handlers.themeChange=function(e){s.themeChangeHandler&&s.themeChangeHandler(e);s.childWindow&&f(s.childWindow,"themeChange",[e])},s.handlers.fullScreenChange=function(e){s.fullScreenChangeHandler&&s.fullScreenChangeHandler(e)},s.handlers.backButtonPress=function(){s.backButtonPressHandler&&s.backButtonPressHandler()||a.navigateBack()},s.handlers.beforeUnload=function(){var e=function(){f(s.parentWindow,"readyToUnload",[])};s.beforeUnloadHandler&&s.beforeUnloadHandler(e)||e()},s.handlers.changeSettings=function(){s.changeSettingsHandler&&s.changeSettingsHandler()},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!s.initializeCalled)throw new Error("The library has not yet been initialized");if(s.frameContext&&e&&e.length>0){for(var t=!1,a=0;a<e.length;a++)if(e[a]===s.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+s.frameContext+"' context")}},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent.source,t=e.origin||e.originalEvent.origin;n===s.currentWindow||t!==s.currentWindow.location.origin&&!r.validOriginRegExp.test(t.toLowerCase())||(i(n,t),n===s.parentWindow?o(e):n===s.childWindow&&l(e))}},n.handleParentMessage=o,n.waitForMessageQueue=function(e,n){var t=s.currentWindow.setInterval(function(){0===u(e).length&&(clearInterval(t),n())},100)},n.sendMessageRequest=f},function(e,n,t){"use strict";var a=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&(t[a[r]]=e[a[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var r,s=t(1),i=t(0);function o(){window.print()}function l(e){s.ensureInitialized(),s.GlobalVars.themeChangeHandler=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["themeChange"])}function u(e){s.ensureInitialized(),s.GlobalVars.fullScreenChangeHandler=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["fullScreen"])}function c(e){s.ensureInitialized(),s.GlobalVars.backButtonPressHandler=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["backButton"])}function d(e){s.ensureInitialized(),s.GlobalVars.beforeUnloadHandler=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["beforeUnload"])}n.initialize=function(e){if(void 0===e&&(e=window),!s.GlobalVars.initializeCalled){s.GlobalVars.initializeCalled=!0,s.GlobalVars.currentWindow=e;var n=function(e){return s.processMessage(e)};s.GlobalVars.parentWindow=s.GlobalVars.currentWindow.parent!==s.GlobalVars.currentWindow.self?s.GlobalVars.currentWindow.parent:s.GlobalVars.currentWindow.opener,s.GlobalVars.parentWindow?s.GlobalVars.currentWindow.addEventListener("message",n,!1):(s.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=s.GlobalVars.handleParentMessage);try{s.GlobalVars.parentOrigin="*";var t=s.sendMessageRequest(s.GlobalVars.parentWindow,"initialize",[i.version]);s.GlobalVars.callbacks[t]=function(e,n){s.GlobalVars.frameContext=e,s.GlobalVars.hostClientType=n}}finally{s.GlobalVars.parentOrigin=null}this._uninitialize=function(){s.GlobalVars.frameContext&&(l(null),u(null),c(null),d(null)),s.GlobalVars.frameContext===i.frameContexts.settings&&r.registerOnSaveHandler(null),s.GlobalVars.frameContext===i.frameContexts.remove&&r.registerOnRemoveHandler(null),s.GlobalVars.isFramelessWindow||s.GlobalVars.currentWindow.removeEventListener("message",n,!1),s.GlobalVars.initializeCalled=!1,s.GlobalVars.parentWindow=null,s.GlobalVars.parentOrigin=null,s.GlobalVars.parentMessageQueue=[],s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null,s.GlobalVars.childMessageQueue=[],s.GlobalVars.nextMessageId=0,s.GlobalVars.callbacks={},s.GlobalVars.frameContext=null,s.GlobalVars.hostClientType=null,s.GlobalVars.isFramelessWindow=!1}}},n._uninitialize=function(){},n.enablePrintCapability=function(){s.GlobalVars.printCapabilityEnabled||(s.GlobalVars.printCapabilityEnabled=!0,s.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(o(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=o,n.getContext=function(e){s.ensureInitialized();var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"getContext");s.GlobalVars.callbacks[n]=e},n.registerOnThemeChangeHandler=l,n.registerFullScreenHandler=u,n.registerBackButtonHandler=c,n.navigateBack=function(){s.ensureInitialized();var e=s.sendMessageRequest(s.GlobalVars.parentWindow,"navigateBack",[]);s.GlobalVars.callbacks[e]=function(e){if(!e)throw new Error("Back navigation is not supported in the current client or context.")}},n.registerBeforeUnloadHandler=d,n.registerChangeSettingsHandler=function(e){s.ensureInitialized(i.frameContexts.content),s.GlobalVars.changeSettingsHandler=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["changeSettings"])},n.navigateCrossDomain=function(e){s.ensureInitialized(i.frameContexts.content,i.frameContexts.settings,i.frameContexts.remove,i.frameContexts.task);var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"navigateCrossDomain",[e]);s.GlobalVars.callbacks[n]=function(e){if(!e)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},n.getTabInstances=function(e,n){s.ensureInitialized();var t=s.sendMessageRequest(s.GlobalVars.parentWindow,"getTabInstances",[n]);s.GlobalVars.callbacks[t]=e},n.getMruTabInstances=function(e,n){s.ensureInitialized();var t=s.sendMessageRequest(s.GlobalVars.parentWindow,"getMruTabInstances",[n]);s.GlobalVars.callbacks[t]=e},n.shareDeepLink=function(e){s.ensureInitialized(i.frameContexts.content),s.sendMessageRequest(s.GlobalVars.parentWindow,"shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.navigateToTab=function(e){s.ensureInitialized();var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"navigateToTab",[e]);s.GlobalVars.callbacks[n]=function(e){if(!e)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(e){var n,t;s.GlobalVars.handlers["settings.save"]=function(e){var t=new a(e);n?n(t):t.notifySuccess()},s.GlobalVars.handlers["settings.remove"]=function(){var e=new r;t?t(e):e.notifySuccess()},e.setValidityState=function(e){s.ensureInitialized(i.frameContexts.settings,i.frameContexts.remove),s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.setValidityState",[e])},e.getSettings=function(e){s.ensureInitialized(i.frameContexts.content,i.frameContexts.settings,i.frameContexts.remove);var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.getSettings");s.GlobalVars.callbacks[n]=e},e.setSettings=function(e){s.ensureInitialized(i.frameContexts.content,i.frameContexts.settings);var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.setSettings",[e]);s.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.registerOnSaveHandler=function(e){s.ensureInitialized(i.frameContexts.settings),n=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["save"])},e.registerOnRemoveHandler=function(e){s.ensureInitialized(i.frameContexts.remove),t=e,e&&s.sendMessageRequest(s.GlobalVars.parentWindow,"registerHandler",["remove"])};var a=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var r=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),s.sendMessageRequest(s.GlobalVars.parentWindow,"settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(r=n.settings||(n.settings={})),function(e){var n,t;function a(){o();try{s.GlobalVars.childWindow&&s.GlobalVars.childWindow.close()}finally{s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null}}function r(e){n=e,a();var t=n.width||600,r=n.height||400;t=Math.min(t,s.GlobalVars.currentWindow.outerWidth-400),r=Math.min(r,s.GlobalVars.currentWindow.outerHeight-200);var i=document.createElement("a");i.href=n.url;var o=void 0!==s.GlobalVars.currentWindow.screenLeft?s.GlobalVars.currentWindow.screenLeft:s.GlobalVars.currentWindow.screenX,c=void 0!==s.GlobalVars.currentWindow.screenTop?s.GlobalVars.currentWindow.screenTop:s.GlobalVars.currentWindow.screenY;o+=s.GlobalVars.currentWindow.outerWidth/2-t/2,c+=s.GlobalVars.currentWindow.outerHeight/2-r/2,s.GlobalVars.childWindow=s.GlobalVars.currentWindow.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+c+", left="+o+", width="+t+", height="+r),s.GlobalVars.childWindow?l():u("FailedToOpenWindow")}function o(){t&&(clearInterval(t),t=0),delete s.GlobalVars.handlers.initialize,delete s.GlobalVars.handlers.navigateCrossDomain}function l(){o(),t=s.GlobalVars.currentWindow.setInterval(function(){if(!s.GlobalVars.childWindow||s.GlobalVars.childWindow.closed)u("CancelledByUser");else{var e=s.GlobalVars.childOrigin;try{s.GlobalVars.childOrigin="*",s.sendMessageRequest(s.GlobalVars.childWindow,"ping")}finally{s.GlobalVars.childOrigin=e}}},100),s.GlobalVars.handlers.initialize=function(){return[i.frameContexts.authentication,s.GlobalVars.hostClientType]},s.GlobalVars.handlers.navigateCrossDomain=function(e){return!1}}function u(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,a()}}function c(e,n,t){if(e){var a=document.createElement("a");a.href=decodeURIComponent(e),a.host&&a.host!==window.location.host&&"outlook.office.com"===a.host&&a.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(a.href=d(a.href,"result",t)),s.GlobalVars.currentWindow.location.assign(d(a.href,"authSuccess",""))),n&&"reason"===n&&(t&&(a.href=d(a.href,"reason",t)),s.GlobalVars.currentWindow.location.assign(d(a.href,"authFailure",""))))}}function d(e,n,t){var a=e.indexOf("#"),r=-1===a?"#":e.substr(a);return r=r+"&"+n+(""!==t?"="+t:""),(e=-1===a?e:e.substr(0,a))+r}s.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,a()}},s.GlobalVars.handlers["authentication.authenticate.failure"]=u,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(s.ensureInitialized(i.frameContexts.content,i.frameContexts.settings,i.frameContexts.remove,i.frameContexts.task),"desktop"===s.GlobalVars.hostClientType||"android"===s.GlobalVars.hostClientType||"ios"===s.GlobalVars.hostClientType){var a=document.createElement("a");a.href=t.url;var o=s.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.authenticate",[a.href,t.width,t.height]);s.GlobalVars.callbacks[o]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}else r(t)},e.getAuthToken=function(e){s.ensureInitialized();var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.getAuthToken",[e.resources]);s.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.getUser=function(e){s.ensureInitialized();var n=s.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.getUser");s.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.notifySuccess=function(e,n){c(n,"result",e),s.ensureInitialized(i.frameContexts.authentication),s.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.authenticate.success",[e]),s.waitForMessageQueue(s.GlobalVars.parentWindow,function(){return setTimeout(function(){return s.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){c(n,"reason",e),s.ensureInitialized(i.frameContexts.authentication),s.sendMessageRequest(s.GlobalVars.parentWindow,"authentication.authenticate.failure",[e]),s.waitForMessageQueue(s.GlobalVars.parentWindow,function(){return setTimeout(function(){return s.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={})),function(e){e.startTask=function(e,n){s.ensureInitialized(i.frameContexts.content);var t=s.sendMessageRequest(s.GlobalVars.parentWindow,"tasks.startTask",[e]);s.GlobalVars.callbacks[t]=n},e.updateTask=function(e){s.ensureInitialized(i.frameContexts.content,i.frameContexts.task),e.width,e.height;var n=a(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");s.sendMessageRequest(s.GlobalVars.parentWindow,"tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(i.frameContexts.content,i.frameContexts.task),s.sendMessageRequest(s.GlobalVars.parentWindow,"tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),a(t(4)),a(t(2))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){var n,t,r,s=function(){return function(){this.enabled=!0}}();e.MenuItem=s,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),a.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(a.ensureInitialized(),a.sendMessageRequest(a.GlobalVars.parentWindow,"handleNavBarMenuItemPress",[e]))},a.GlobalVars.handlers.actionMenuItemPress=function(e){t&&t(e)||(a.ensureInitialized(),a.sendMessageRequest(a.GlobalVars.parentWindow,"handleActionMenuItemPress",[e]))},a.GlobalVars.handlers.setModuleView=function(e){r&&r(e)||(a.ensureInitialized(),a.sendMessageRequest(a.GlobalVars.parentWindow,"viewConfigItemPress",[e]))},e.setUpViews=function(e,n){a.ensureInitialized(),r=n,a.sendMessageRequest(a.GlobalVars.parentWindow,"setUpViews",[e])},e.setNavBarMenu=function(e,t){a.ensureInitialized(),n=t,a.sendMessageRequest(a.GlobalVars.parentWindow,"setNavBarMenu",[e])},e.showActionMenu=function(e,n){a.ensureInitialized(),t=n,a.sendMessageRequest(a.GlobalVars.parentWindow,"showActionMenu",[e])}}(n.menus||(n.menus={})),n.getUserJoinedTeams=function(e,n){a.ensureInitialized();var t=a.sendMessageRequest(a.GlobalVars.parentWindow,"getUserJoinedTeams",[n]);a.GlobalVars.callbacks[t]=e},n.openFilePreview=function(e){a.ensureInitialized(r.frameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];a.sendMessageRequest(a.GlobalVars.parentWindow,"openFilePreview",n)},n.showNotification=function(e){a.ensureInitialized(r.frameContexts.content);var n=[e.message,e.notificationType];a.sendMessageRequest(a.GlobalVars.parentWindow,"showNotification",n)},n.executeDeepLink=function(e){a.ensureInitialized(r.frameContexts.content);var n=a.sendMessageRequest(a.GlobalVars.parentWindow,"executeDeepLink",[e]);a.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},n.uploadCustomApp=function(e){a.ensureInitialized();var n=a.sendMessageRequest(a.GlobalVars.parentWindow,"uploadCustomApp",[e]);a.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},n.sendCustomMessage=function(e,n){return a.ensureInitialized(),a.sendMessageRequest(a.GlobalVars.parentWindow,e,n)},n.getChatMembers=function(e){a.ensureInitialized();var n=a.sendMessageRequest(a.GlobalVars.parentWindow,"getChatMembers");a.GlobalVars.callbacks[n]=e}},function(e,n,t){"use strict";function a(e){for(var n="^",t=e.split("."),a=0;a<t.length;a++)n+=(a>0?"[.]":"")+t[a].replace("*","[^/^.]+");return n+="$"}Object.defineProperty(n,"__esModule",{value:!0}),n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+a(e[t]);return new RegExp(n)}}])});

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

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
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
        action: function (settings) {
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