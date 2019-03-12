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

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(1))},function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o,r,a,s,u,c,f,l,d,h,g,p,v,m=n(2),y={},b=!1,w=!1,C=[],x=[],k=0,O={},T=!1;function M(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(!b)throw new Error("The library has not yet been initialized");if(c&&e&&e.length>0){for(var n=!1,i=0;i<e.length;i++)if(e[i]===c){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+c+"' context")}}function E(e){if(e&&e.data&&"object"==typeof e.data){var t=e.source||e.originalEvent.source,n=e.origin||e.originalEvent.origin;t===o||n!==o.location.origin&&!m.validOriginRegExp.test(n.toLowerCase())||(P(t,n),t===r?S(e):t===s&&I(e))}}function P(e,t){r&&e!==r?s&&e!==s||(s=e,u=t):(r=e,a=t),r&&r.closed&&(r=null,a=null),s&&s.closed&&(s=null,u=null),U(r),U(s)}function S(e){if("id"in e.data){var t=e.data,n=O[t.id];n&&(n.apply(null,t.args),delete O[t.id])}else if("func"in e.data){t=e.data;var i=y[t.func];i&&i.apply(this,t.args)}}function I(e){if("id"in e.data&&"func"in e.data){var t=e.data,n=y[t.func];if(n){var i=n.apply(this,t.args);i&&L(s,t.id,Array.isArray(i)?i:[i])}else{var o=N(r,t.func,t.args);O[o]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];s&&L(s,t.id,e)}}}}function j(e){return e===r?C:e===s?x:[]}function _(e){return e===r?a:e===s?u:null}function U(e){for(var t=_(e),n=j(e);e&&t&&n.length>0;)e.postMessage(n.shift(),t)}function H(e,t){var n=o.setInterval(function(){0===j(e).length&&(clearInterval(n),t())},100)}function N(e,t,n){var i=F(t,n);if(w)o&&o.nativeInterface&&o.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var r=_(e);e&&r?e.postMessage(i,r):j(e).push(i)}return i.id}function L(e,t,n){var i=B(t,n),o=_(e);e&&o&&e.postMessage(i,o)}function F(e,t){return{id:k++,func:e,args:t||[]}}function B(e,t){return{id:e,args:t||[]}}function A(){window.print()}function D(e){M(),l=e,e&&N(r,"registerHandler",["themeChange"])}function R(e){M(),d=e,e&&N(r,"registerHandler",["fullScreen"])}function z(e){M(),h=e,e&&N(r,"registerHandler",["backButton"])}function W(){M();var e=N(r,"navigateBack",[]);O[e]=function(e){if(!e)throw new Error("Back navigation is not supported in the current client or context.")}}function V(e){M(),g=e,e&&N(r,"registerHandler",["beforeUnload"])}y.themeChange=function(e){l&&l(e);s&&N(s,"themeChange",[e])},y.fullScreenChange=function(e){d&&d(e)},y.backButtonPress=function(){h&&h()||W()},y.beforeUnload=function(){var e=function(){N(r,"readyToUnload",[])};g&&g(e)||e()},y.changeSettings=function(){p&&p()},function(e){var t,n,i,o=function(){return function(){this.enabled=!0}}();e.MenuItem=o,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),y.navBarMenuItemPress=function(e){t&&t(e)||(M(),N(r,"handleNavBarMenuItemPress",[e]))},y.actionMenuItemPress=function(e){n&&n(e)||(M(),N(r,"handleActionMenuItemPress",[e]))},y.setModuleView=function(e){i&&i(e)||(M(),N(r,"viewConfigItemPress",[e]))},e.setUpViews=function(e,t){M(),i=t,N(r,"setUpViews",[e])},e.setNavBarMenu=function(e,n){M(),t=n,N(r,"setNavBarMenu",[e])},e.showActionMenu=function(e,t){M(),n=t,N(r,"showActionMenu",[e])}}(t.menus||(t.menus={})),t.getUserJoinedTeams=function(e,t){M();var n=N(r,"getUserJoinedTeams",[t]);O[n]=e},t.openFilePreview=function(e){M(m.frameContexts.content);var t=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];N(r,"openFilePreview",t)},t.showNotification=function(e){M(m.frameContexts.content);var t=[e.message,e.notificationType];N(r,"showNotification",t)},t.executeDeepLink=function(e){M(m.frameContexts.content);var t=N(r,"executeDeepLink",[e]);O[t]=function(e,t){if(!e)throw new Error(t)}},t.uploadCustomApp=function(e){M();var t=N(r,"uploadCustomApp",[e]);O[t]=function(e,t){if(!e)throw new Error(t)}},t.sendCustomMessage=function(e,t){return M(),N(r,e,t)},t.getChatMembers=function(e){M();var t=N(r,"getChatMembers");O[t]=e},t.initialize=function(e){if(void 0===e&&(e=window),!b){b=!0;var t=function(e){return E(e)};(r=(o=e).parent!==o.self?o.parent:o.opener)?o.addEventListener("message",t,!1):(w=!0,window.onNativeMessage=S);try{a="*";var n=N(r,"initialize",[m.version]);O[n]=function(e,t){c=e,f=t}}finally{a=null}this._uninitialize=function(){c&&(D(null),R(null),z(null),V(null)),c===m.frameContexts.settings&&v.registerOnSaveHandler(null),c===m.frameContexts.remove&&v.registerOnRemoveHandler(null),w||o.removeEventListener("message",t,!1),b=!1,r=null,a=null,C=[],s=null,u=null,x=[],k=0,O={},c=null,f=null,w=!1}}},t._uninitialize=function(){},t.enablePrintCapability=function(){T||(T=!0,M(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(A(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},t.print=A,t.getContext=function(e){M();var t=N(r,"getContext");O[t]=e},t.registerOnThemeChangeHandler=D,t.registerFullScreenHandler=R,t.registerBackButtonHandler=z,t.navigateBack=W,t.registerBeforeUnloadHandler=V,t.registerChangeSettingsHandler=function(e){M(m.frameContexts.content),p=e,e&&N(r,"registerHandler",["changeSettings"])},t.navigateCrossDomain=function(e){M(m.frameContexts.content,m.frameContexts.settings,m.frameContexts.remove,m.frameContexts.task);var t=N(r,"navigateCrossDomain",[e]);O[t]=function(e){if(!e)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},t.getTabInstances=function(e,t){M();var n=N(r,"getTabInstances",[t]);O[n]=e},t.getMruTabInstances=function(e,t){M();var n=N(r,"getMruTabInstances",[t]);O[n]=e},t.shareDeepLink=function(e){M(m.frameContexts.content),N(r,"shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},t.navigateToTab=function(e){M();var t=N(r,"navigateToTab",[e]);O[t]=function(e){if(!e)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(e){var t,n;y["settings.save"]=function(e){var n=new i(e);t?t(n):n.notifySuccess()},y["settings.remove"]=function(){var e=new o;n?n(e):e.notifySuccess()},e.setValidityState=function(e){M(m.frameContexts.settings,m.frameContexts.remove),N(r,"settings.setValidityState",[e])},e.getSettings=function(e){M(m.frameContexts.content,m.frameContexts.settings,m.frameContexts.remove);var t=N(r,"settings.getSettings");O[t]=e},e.setSettings=function(e){M(m.frameContexts.content,m.frameContexts.settings);var t=N(r,"settings.setSettings",[e]);O[t]=function(e,t){if(!e)throw new Error(t)}},e.registerOnSaveHandler=function(e){M(m.frameContexts.settings),t=e,e&&N(r,"registerHandler",["save"])},e.registerOnRemoveHandler=function(e){M(m.frameContexts.remove),n=e,e&&N(r,"registerHandler",["remove"])};var i=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),N(r,"settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),N(r,"settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var o=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),N(r,"settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),N(r,"settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(v=t.settings||(t.settings={})),function(e){var t,n;function i(){c();try{s&&s.close()}finally{s=null,u=null}}function a(e){t=e,i();var n=t.width||600,r=t.height||400;n=Math.min(n,o.outerWidth-400),r=Math.min(r,o.outerHeight-200);var a=document.createElement("a");a.href=t.url;var u=void 0!==o.screenLeft?o.screenLeft:o.screenX,c=void 0!==o.screenTop?o.screenTop:o.screenY;u+=o.outerWidth/2-n/2,c+=o.outerHeight/2-r/2,(s=o.open(a.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+c+", left="+u+", width="+n+", height="+r))?l():d("FailedToOpenWindow")}function c(){n&&(clearInterval(n),n=0),delete y.initialize,delete y.navigateCrossDomain}function l(){c(),n=o.setInterval(function(){if(!s||s.closed)d("CancelledByUser");else{var e=u;try{u="*",N(s,"ping")}finally{u=e}}},100),y.initialize=function(){return[m.frameContexts.authentication,f]},y.navigateCrossDomain=function(e){return!1}}function d(e){try{t&&t.failureCallback&&t.failureCallback(e)}finally{t=null,i()}}function h(e,t,n){if(e){var i=document.createElement("a");i.href=decodeURIComponent(e),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(t&&"result"===t&&(n&&(i.href=g(i.href,"result",n)),o.location.assign(g(i.href,"authSuccess",""))),t&&"reason"===t&&(n&&(i.href=g(i.href,"reason",n)),o.location.assign(g(i.href,"authFailure",""))))}}function g(e,t,n){var i=e.indexOf("#"),o=-1===i?"#":e.substr(i);return o=o+"&"+t+(""!==n?"="+n:""),(e=-1===i?e:e.substr(0,i))+o}y["authentication.authenticate.success"]=function(e){try{t&&t.successCallback&&t.successCallback(e)}finally{t=null,i()}},y["authentication.authenticate.failure"]=d,e.registerAuthenticationHandlers=function(e){t=e},e.authenticate=function(e){var n=void 0!==e?e:t;if(M(m.frameContexts.content,m.frameContexts.settings,m.frameContexts.remove,m.frameContexts.task),"desktop"===f||"android"===f||"ios"===f){var i=document.createElement("a");i.href=n.url;var o=N(r,"authentication.authenticate",[i.href,n.width,n.height]);O[o]=function(e,t){e?n.successCallback(t):n.failureCallback(t)}}else a(n)},e.getAuthToken=function(e){M();var t=N(r,"authentication.getAuthToken",[e.resources]);O[t]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}},e.getUser=function(e){M();var t=N(r,"authentication.getUser");O[t]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}},e.notifySuccess=function(e,t){h(t,"result",e),M(m.frameContexts.authentication),N(r,"authentication.authenticate.success",[e]),H(r,function(){return setTimeout(function(){return o.close()},200)})},e.notifyFailure=function(e,t){h(t,"reason",e),M(m.frameContexts.authentication),N(r,"authentication.authenticate.failure",[e]),H(r,function(){return setTimeout(function(){return o.close()},200)})}}(t.authentication||(t.authentication={}));var J=function(){function e(){}return e.prototype.postMessage=function(e){M(),N(r,"messageForChild",[e])},e.prototype.addEventListener=function(e,t){"message"==e&&(y.messageForParent=t)},e}();t.ChildWindowObject=J;var K=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e){M(m.frameContexts.task),N(r,"messageForParent",[e])},e.prototype.addEventListener=function(e,t){"message"==e&&(y.messageForChild=t)},e}();t.ParentWindowObject=K,function(e){e.startTask=function(e,t){M(m.frameContexts.content);var n=N(r,"tasks.startTask",[e]);return O[n]=t,new J},e.updateTask=function(e){M(m.frameContexts.content,m.frameContexts.task),e.width,e.height;var t=i(e,["width","height"]);if(Object.keys(t).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");N(r,"tasks.updateTask",[e])},e.submitTask=function(e,t){M(m.frameContexts.content,m.frameContexts.task),N(r,"tasks.completeTask",[e,Array.isArray(t)?t:[t]])}}(t.tasks||(t.tasks={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3);t.version="1.4.1",t.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],t.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},t.validOriginRegExp=i.generateRegExpFromUrls(t.validOrigins)},function(e,t,n){"use strict";function i(e){for(var t="^",n=e.split("."),i=0;i<n.length;i++)t+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return t+="$"}Object.defineProperty(t,"__esModule",{value:!0}),t.generateRegExpFromUrls=function(e){for(var t="",n=0;n<e.length;n++)t+=(0===n?"":"|")+i(e[n]);return new RegExp(t)}}])});

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
    var childWindow;
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
            childWindow = MicrosoftTeams_min["tasks"].startTask(taskInfo);
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
            var parentWindow = MicrosoftTeams_min["ParentWindowObject"].Instance;
            if (parentWindow) {
                parentWindow.postMessage(message);
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
            var parentWindow = MicrosoftTeams_min["ParentWindowObject"].Instance;
            if (parentWindow) {
                parentWindow.addEventListener("message", function (message) {
                    output(message);
                });
            }
        }
    });
    addModule({
        name: "register listener for child message(task module to tab)",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            if (childWindow) {
                childWindow.addEventListener("message", function (message) {
                    output(message);
                    childWindow.postMessage("message received: " + message);
                });
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