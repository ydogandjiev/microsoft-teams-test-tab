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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){var t;return function(t){"use strict";function e(){if(!R){R=!0,O=this._window||window;var t=function(t){return m(t)};O.addEventListener("message",t,!1),U=O.parent!==O.self?O.parent:O.opener;try{x="*";var e=S(U,"initialize",[D]);Y[e]=function(t,e){B=t,M=e}}finally{x=null}this._uninitialize=function(){B&&(i(null),a(null),s(null)),B===_.settings&&J.registerOnSaveHandler(null),B===_.remove&&J.registerOnRemoveHandler(null),R=!1,U=null,x=null,j=[],L=null,F=null,V=[],X=0,Y={},B=null,M=null,O.removeEventListener("message",t,!1)}}}function n(t){p();var e=S(U,"getContext");Y[e]=t}function i(t){p(),z=t}function o(t){z&&z(t),L&&S(L,"themeChange",[t])}function a(t){p(),q=t}function r(t){q&&q(t)}function s(t){p(),G=t}function c(){G&&G()||u()}function u(){p();var t=S(U,"navigateBack",[]);Y[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function f(t){p(_.content,_.settings,_.remove);var e=S(U,"navigateCrossDomain",[t]);Y[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}}function l(t,e){p();var n=S(U,"getTabInstances",[e]);Y[n]=t}function h(t,e){p();var n=S(U,"getMruTabInstances",[e]);Y[n]=t}function d(t){p(_.content),S(U,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])}function v(t){p(_.content),S(U,"openFilePreview",[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl])}function g(t){p();var e=S(U,"navigateToTab",[t]);Y[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}}function p(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!R)throw new Error("The library has not yet been initialized");if(B&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===B){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+B+"' context")}}function m(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===O||n!==O.location.origin&&A.indexOf(n.toLowerCase())===-1||(y(e,n),e===U?b(t):e===L&&w(t))}}function y(t,e){U&&t!==U?L&&t!==L||(L=t,F=e):(U=t,x=e),U&&U.closed&&(U=null,x=null),L&&L.closed&&(L=null,F=null),C(U),C(L)}function b(t){if("id"in t.data){var e=t.data,n=Y[e.id];n&&(n.apply(null,e.args),delete Y[e.id])}else if("func"in t.data){var e=t.data,i=W[e.func];i&&i.apply(this,e.args)}}function w(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=W[e.func];if(n){var i=n.apply(this,e.args);i&&I(L,e.id,Array.isArray(i)?i:[i])}else{var o=S(U,e.func,e.args);Y[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];L&&I(L,e.id,t)}}}}function k(t){return t===U?j:t===L?V:[]}function T(t){return t===U?x:t===L?F:null}function C(t){for(var e=T(t),n=k(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function E(t,e){var n=O.setInterval(function(){0===k(t).length&&(clearInterval(n),e())},100)}function S(t,e,n){var i=N(e,n),o=T(t);return t&&o?t.postMessage(i,o):k(t).push(i),i.id}function I(t,e,n){var i=H(e,n),o=T(t);t&&o&&t.postMessage(i,o)}function N(t,e){return{id:X++,func:t,args:e||[]}}function H(t,e){return{id:t,args:e||[]}}var O,U,x,L,F,B,M,z,D="1.2",A=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local"],W={},_={settings:"settings",content:"content",authentication:"authentication",remove:"remove"},P={desktop:"desktop",web:"web"},R=!1,j=[],V=[],X=0,Y={};W.themeChange=o;var q;W.fullScreenChange=r;var G;W.backButtonPress=c,t.initialize=e,t.getContext=n,t.registerOnThemeChangeHandler=i,t.registerFullScreenHandler=a,t.registerBackButtonHandler=s,t.navigateBack=u,t.navigateCrossDomain=f,t.getTabInstances=l,t.getMruTabInstances=h,t.shareDeepLink=d,t.openFilePreview=v,t.navigateToTab=g;var J;!function(t){function e(t){p(_.settings,_.remove),S(U,"settings.setValidityState",[t])}function n(t){p(_.settings,_.remove);var e=S(U,"settings.getSettings");Y[e]=t}function i(t){p(_.settings),S(U,"settings.setSettings",[t])}function o(t){p(_.settings),c=t}function a(t){p(_.remove),u=t}function r(t){var e=new f(t);c?c(e):e.notifySuccess()}function s(){var t=new l;u?u(t):t.notifySuccess()}var c,u;W["settings.save"]=r,W["settings.remove"]=s,t.setValidityState=e,t.getSettings=n,t.setSettings=i,t.registerOnSaveHandler=o,t.registerOnRemoveHandler=a;var f=function(){function t(t){this.notified=!1,this.result=t?t:{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),S(U,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),S(U,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}(),l=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),S(U,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),S(U,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(J=t.settings||(t.settings={}));var K;!function(t){function e(t){g=t}function n(t){var e=void 0!==t?t:g;if(p(_.content,_.settings,_.remove),M===P.desktop){var n=document.createElement("a");n.href=e.url;var i=S(U,"authentication.authenticate",[n.href,e.width,e.height]);Y[i]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}}else r(e)}function i(t){p();var e=S(U,"authentication.getAuthToken",[t.resources]);Y[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}function o(t){p();var e=S(U,"authentication.getUser");Y[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}function a(){s();try{L&&L.close()}finally{L=null,F=null}}function r(t){g=t,a();var e=g.width||600,n=g.height||400;e=Math.min(e,O.outerWidth-400),n=Math.min(n,O.outerHeight-200);var i=document.createElement("a");i.href=g.url;var o="undefined"!=typeof O.screenLeft?O.screenLeft:O.screenX,r="undefined"!=typeof O.screenTop?O.screenTop:O.screenY;o+=O.outerWidth/2-e/2,r+=O.outerHeight/2-n/2,L=O.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+o+", width="+e+", height="+n),L?c():h("FailedToOpenWindow")}function s(){m&&(clearInterval(m),m=0),delete W.initialize,delete W.navigateCrossDomain}function c(){s(),m=O.setInterval(function(){if(!L||L.closed)h("CancelledByUser");else{var t=F;try{F="*",S(L,"ping")}finally{F=t}}},100),W.initialize=function(){return[_.authentication,M]},W.navigateCrossDomain=function(t){return!1}}function u(t,e){d(e,"result",t),p(_.authentication),S(U,"authentication.authenticate.success",[t]),E(U,function(){return setTimeout(function(){return O.close()},200)})}function f(t,e){d(e,"reason",t),p(_.authentication),S(U,"authentication.authenticate.failure",[t]),E(U,function(){return setTimeout(function(){return O.close()},200)})}function l(t){try{g&&g.successCallback&&g.successCallback(t)}finally{g=null,a()}}function h(t){try{g&&g.failureCallback&&g.failureCallback(t)}finally{g=null,a()}}function d(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=v(i.href,"result",n)),O.location.assign(v(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=v(i.href,"reason",n)),O.location.assign(v(i.href,"authFailure",""))))}}function v(t,e,n){var i=t.indexOf("#"),o=i===-1?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),t=i===-1?t:t.substr(0,i),t+o}var g,m;W["authentication.authenticate.success"]=l,W["authentication.authenticate.failure"]=h,t.registerAuthenticationHandlers=e,t.authenticate=n,t.getAuthToken=i,t.getUser=o,t.notifySuccess=u,t.notifyFailure=f}(K=t.authentication||(t.authentication={}));var Q;!function(t){function e(t,e){p(_.content);var n=S(U,"tasks.startTask",[t]);Y[n]=e}function n(t,e){p(_.content),S(U,"tasks.completeTask",[t,e])}t.startTask=e,t.completeTask=n}(Q=t.tasks||(t.tasks={}))}(t||(t={})),t});

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