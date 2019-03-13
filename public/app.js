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

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(1))},function(t,e,n){"use strict";var o=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&(n[o[i]]=t[o[i]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var i,r,a,s,u,c,f,l,d,h,v,g,p,m=n(2),y={},C=!1,b=!1,w=[],x=[],k=0,T={},O=!1;function E(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!C)throw new Error("The library has not yet been initialized");if(c&&t&&t.length>0){for(var n=!1,o=0;o<t.length;o++)if(t[o]===c){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+c+"' context")}}function M(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===i||n!==i.location.origin&&!m.validOriginRegExp.test(n.toLowerCase())||(S(e,n),e===r?I(t):e===s&&P(t))}}function S(t,e){r&&t!==r?s&&t!==s||(s=t,u=e):(r=t,a=e),r&&r.closed&&(r=null,a=null),s&&s.closed&&(s=null,u=null),j(r),j(s)}function I(t){if("id"in t.data){var e=t.data,n=T[e.id];n&&(n.apply(null,e.args),delete T[e.id])}else if("func"in t.data){e=t.data;var o=y[e.func];o&&o.apply(this,e.args)}}function P(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=y[e.func];if(n){var o=n.apply(this,e.args);o&&B(s,e.id,Array.isArray(o)?o:[o])}else{var i=N(r,e.func,e.args);T[i]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];s&&B(s,e.id,t)}}}}function U(t){return t===r?w:t===s?x:[]}function _(t){return t===r?a:t===s?u:null}function j(t){for(var e=_(t),n=U(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function H(t,e){var n=i.setInterval(function(){0===U(t).length&&(clearInterval(n),e())},100)}function N(t,e,n){var o=L(e,n);if(b)i&&i.nativeInterface&&i.nativeInterface.framelessPostMessage(JSON.stringify(o));else{var r=_(t);t&&r?t.postMessage(o,r):U(t).push(o)}return o.id}function B(t,e,n){var o=A(e,n),i=_(t);t&&i&&t.postMessage(o,i)}function L(t,e){return{id:k++,func:t,args:e||[]}}function A(t,e){return{id:t,args:e||[]}}function D(){window.print()}function F(t){E(),l=t,t&&N(r,"registerHandler",["themeChange"])}function R(t){E(),d=t,t&&N(r,"registerHandler",["fullScreen"])}function z(t){E(),h=t,t&&N(r,"registerHandler",["backButton"])}function V(){E();var t=N(r,"navigateBack",[]);T[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function W(t){E(),v=t,t&&N(r,"registerHandler",["beforeUnload"])}y.themeChange=function(t){l&&l(t);s&&N(s,"themeChange",[t])},y.fullScreenChange=function(t){d&&d(t)},y.backButtonPress=function(){h&&h()||V()},y.beforeUnload=function(){var t=function(){N(r,"readyToUnload",[])};v&&v(t)||t()},y.changeSettings=function(){g&&g()},function(t){var e,n,o,i=function(){return function(){this.enabled=!0}}();t.MenuItem=i,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),y.navBarMenuItemPress=function(t){e&&e(t)||(E(),N(r,"handleNavBarMenuItemPress",[t]))},y.actionMenuItemPress=function(t){n&&n(t)||(E(),N(r,"handleActionMenuItemPress",[t]))},y.setModuleView=function(t){o&&o(t)||(E(),N(r,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){E(),o=e,N(r,"setUpViews",[t])},t.setNavBarMenu=function(t,n){E(),e=n,N(r,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){E(),n=e,N(r,"showActionMenu",[t])}}(e.menus||(e.menus={})),e.getUserJoinedTeams=function(t,e){E();var n=N(r,"getUserJoinedTeams",[e]);T[n]=t},e.openFilePreview=function(t){E(m.frameContexts.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];N(r,"openFilePreview",e)},e.showNotification=function(t){E(m.frameContexts.content);var e=[t.message,t.notificationType];N(r,"showNotification",e)},e.executeDeepLink=function(t){E(m.frameContexts.content);var e=N(r,"executeDeepLink",[t]);T[e]=function(t,e){if(!t)throw new Error(e)}},e.uploadCustomApp=function(t){E();var e=N(r,"uploadCustomApp",[t]);T[e]=function(t,e){if(!t)throw new Error(e)}},e.sendCustomMessage=function(t,e){return E(),N(r,t,e)},e.getChatMembers=function(t){E();var e=N(r,"getChatMembers");T[e]=t},e.initialize=function(t){if(void 0===t&&(t=window),!C){C=!0;var e=function(t){return M(t)};(r=(i=t).parent!==i.self?i.parent:i.opener)?i.addEventListener("message",e,!1):(b=!0,window.onNativeMessage=I);try{a="*";var n=N(r,"initialize",[m.version]);T[n]=function(t,e){c=t,f=e}}finally{a=null}this._uninitialize=function(){c&&(F(null),R(null),z(null),W(null)),c===m.frameContexts.settings&&p.registerOnSaveHandler(null),c===m.frameContexts.remove&&p.registerOnRemoveHandler(null),b||i.removeEventListener("message",e,!1),C=!1,r=null,a=null,w=[],s=null,u=null,x=[],k=0,T={},c=null,f=null,b=!1}}},e._uninitialize=function(){},e.enablePrintCapability=function(){O||(O=!0,E(),document.addEventListener("keydown",function(t){(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(D(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))},e.print=D,e.getContext=function(t){E();var e=N(r,"getContext");T[e]=t},e.registerOnThemeChangeHandler=F,e.registerFullScreenHandler=R,e.registerBackButtonHandler=z,e.navigateBack=V,e.registerBeforeUnloadHandler=W,e.registerChangeSettingsHandler=function(t){E(m.frameContexts.content),g=t,t&&N(r,"registerHandler",["changeSettings"])},e.navigateCrossDomain=function(t){E(m.frameContexts.content,m.frameContexts.settings,m.frameContexts.remove,m.frameContexts.task);var e=N(r,"navigateCrossDomain",[t]);T[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},e.getTabInstances=function(t,e){E();var n=N(r,"getTabInstances",[e]);T[n]=t},e.getMruTabInstances=function(t,e){E();var n=N(r,"getMruTabInstances",[e]);T[n]=t},e.shareDeepLink=function(t){E(m.frameContexts.content),N(r,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},e.navigateToTab=function(t){E();var e=N(r,"navigateToTab",[t]);T[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;y["settings.save"]=function(t){var n=new o(t);e?e(n):n.notifySuccess()},y["settings.remove"]=function(){var t=new i;n?n(t):t.notifySuccess()},t.setValidityState=function(t){E(m.frameContexts.settings,m.frameContexts.remove),N(r,"settings.setValidityState",[t])},t.getSettings=function(t){E(m.frameContexts.content,m.frameContexts.settings,m.frameContexts.remove);var e=N(r,"settings.getSettings");T[e]=t},t.setSettings=function(t){E(m.frameContexts.content,m.frameContexts.settings);var e=N(r,"settings.setSettings",[t]);T[e]=function(t,e){if(!t)throw new Error(e)}},t.registerOnSaveHandler=function(t){E(m.frameContexts.settings),e=t,t&&N(r,"registerHandler",["save"])},t.registerOnRemoveHandler=function(t){E(m.frameContexts.remove),n=t,t&&N(r,"registerHandler",["remove"])};var o=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),N(r,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),N(r,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}();var i=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),N(r,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),N(r,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(p=e.settings||(e.settings={})),function(t){var e,n;function o(){c();try{s&&s.close()}finally{s=null,u=null}}function a(t){e=t,o();var n=e.width||600,r=e.height||400;n=Math.min(n,i.outerWidth-400),r=Math.min(r,i.outerHeight-200);var a=document.createElement("a");a.href=e.url;var u=void 0!==i.screenLeft?i.screenLeft:i.screenX,c=void 0!==i.screenTop?i.screenTop:i.screenY;u+=i.outerWidth/2-n/2,c+=i.outerHeight/2-r/2,(s=i.open(a.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+c+", left="+u+", width="+n+", height="+r))?l():d("FailedToOpenWindow")}function c(){n&&(clearInterval(n),n=0),delete y.initialize,delete y.navigateCrossDomain}function l(){c(),n=i.setInterval(function(){if(!s||s.closed)d("CancelledByUser");else{var t=u;try{u="*",N(s,"ping")}finally{u=t}}},100),y.initialize=function(){return[m.frameContexts.authentication,f]},y.navigateCrossDomain=function(t){return!1}}function d(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,o()}}function h(t,e,n){if(t){var o=document.createElement("a");o.href=decodeURIComponent(t),o.host&&o.host!==window.location.host&&"outlook.office.com"===o.host&&o.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(o.href=v(o.href,"result",n)),i.location.assign(v(o.href,"authSuccess",""))),e&&"reason"===e&&(n&&(o.href=v(o.href,"reason",n)),i.location.assign(v(o.href,"authFailure",""))))}}function v(t,e,n){var o=t.indexOf("#"),i=-1===o?"#":t.substr(o);return i=i+"&"+e+(""!==n?"="+n:""),(t=-1===o?t:t.substr(0,o))+i}y["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,o()}},y["authentication.authenticate.failure"]=d,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var n=void 0!==t?t:e;if(E(m.frameContexts.content,m.frameContexts.settings,m.frameContexts.remove,m.frameContexts.task),"desktop"===f||"android"===f||"ios"===f){var o=document.createElement("a");o.href=n.url;var i=N(r,"authentication.authenticate",[o.href,n.width,n.height]);T[i]=function(t,e){t?n.successCallback(e):n.failureCallback(e)}}else a(n)},t.getAuthToken=function(t){E();var e=N(r,"authentication.getAuthToken",[t.resources]);T[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){E();var e=N(r,"authentication.getUser");T[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){h(e,"result",t),E(m.frameContexts.authentication),N(r,"authentication.authenticate.success",[t]),H(r,function(){return setTimeout(function(){return i.close()},200)})},t.notifyFailure=function(t,e){h(e,"reason",t),E(m.frameContexts.authentication),N(r,"authentication.authenticate.failure",[t]),H(r,function(){return setTimeout(function(){return i.close()},200)})}}(e.authentication||(e.authentication={})),function(t){t.startTask=function(t,e){E(m.frameContexts.content);var n=N(r,"tasks.startTask",[t]);T[n]=e},t.updateTask=function(t){E(m.frameContexts.content,m.frameContexts.task),t.width,t.height;var e=o(t,["width","height"]);if(Object.keys(e).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");N(r,"tasks.updateTask",[t])},t.submitTask=function(t,e){E(m.frameContexts.content,m.frameContexts.task),N(r,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(e.tasks||(e.tasks={})),function(t){t.startConversation=function(t){E(m.frameContexts.content);var e=N(r,"startConversation",[t.subEntityId,t.title]);T[e]=function(e,n){e?t.onStartConversation(e):t.onCloseConversation(n)}},t.showConversation=function(t){E(m.frameContexts.content);var e=N(r,"showConversation",[t.subEntityId,t.title,t.conversationId]);T[e]=function(e){t.onCloseConversation(e)}},t.closeConversation=function(){E(m.frameContexts.content),N(r,"closeConversation")}}(e.conversations||(e.conversations={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);e.version="1.4.1",e.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],e.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},e.validOriginRegExp=o.generateRegExpFromUrls(e.validOrigins)},function(t,e,n){"use strict";function o(t){for(var e="^",n=t.split("."),o=0;o<n.length;o++)e+=(o>0?"[.]":"")+n[o].replace("*","[^/^.]+");return e+="$"}Object.defineProperty(e,"__esModule",{value:!0}),e.generateRegExpFromUrls=function(t){for(var e="",n=0;n<t.length;n++)e+=(0===n?"":"|")+o(t[n]);return new RegExp(e)}}])});

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
    addModule({
        name: "conversations.startConversation",
        initializedRequired: true,
        hasOutput: true,
        inputs: [{
                type: "object",
                name: "startConversationRequest"
            }],
        action: function (startConversationRequest, output) {
            startConversationRequest.onStartConversation = (conversationId) => {
                output("Started with :" + conversationId);
            };
            startConversationRequest.onCloseConversation = (reason) => {
                output("Closed because of :" + reason);
            };
            MicrosoftTeams_min["conversations"].startConversation(startConversationRequest);
        }
    });
    addModule({
        name: "conversations.showConversation",
        initializedRequired: true,
        hasOutput: true,
        inputs: [{
                type: "object",
                name: "showConversationRequest"
            }],
        action: function (showConversationRequest, output) {
            showConversationRequest.onCloseConversation = (reason) => {
                output("Closed because of :" + reason);
            };
            MicrosoftTeams_min["conversations"].showConversation(showConversationRequest);
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