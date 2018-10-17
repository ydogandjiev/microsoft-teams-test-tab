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
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t});var t;return function(t){"use strict";function e(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}function n(t){for(var n="",i=0;i<t.length;i++)n+=(0===i?"":"|")+e(t[i]);return new RegExp(n)}function i(){if(!Z){Z=!0,J=this._window||window;var t=function(t){return E(t)};K=J.parent!==J.self?J.parent:J.opener,K?J.addEventListener("message",t,!1):(tt=!0,window.onNativeMessage=S);try{X="*";var e=O(K,"initialize",[z]);ot[e]=function(t,e){q=t,G=e}}finally{X=null}this._uninitialize=function(){q&&(s(null),c(null),l(null)),q===j.settings&&ut.registerOnSaveHandler(null),q===j.remove&&ut.registerOnRemoveHandler(null),tt||J.removeEventListener("message",t,!1),Z=!1,K=null,X=null,et=[],Y=null,$=null,nt=[],it=0,ot={},q=null,G=null,tt=!1}}}function o(){at||(at=!0,I(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t.print(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}function a(){window.print()}function r(t){I();var e=O(K,"getContext");ot[e]=t}function s(t){I(),Q=t}function u(t){Q&&Q(t),Y&&O(Y,"themeChange",[t])}function c(t){I(),rt=t}function f(t){rt&&rt(t)}function l(t){I(),st=t}function h(){st&&st()||d()}function d(){I();var t=O(K,"navigateBack",[]);ot[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function v(t){I(j.content,j.settings,j.remove,j.task);var e=O(K,"navigateCrossDomain",[t]);ot[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}}function g(t,e){I();var n=O(K,"getTabInstances",[e]);ot[n]=t}function p(t,e){I();var n=O(K,"getUserJoinedTeams",[e]);ot[n]=t}function m(t,e){I();var n=O(K,"getMruTabInstances",[e]);ot[n]=t}function y(t){I(j.content),O(K,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])}function w(t){I(j.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];O(K,"openFilePreview",e)}function b(t){I(j.content);var e=[t.objectUrl,t.title];O(K,"downloadFile",e)}function k(t){I(j.content);var e=[t.message,t.isDownloadComplete];O(K,"showNotification",e)}function C(t){I();var e=O(K,"uploadCustomApp",[t]);ot[e]=function(t,e){if(!t)throw new Error(e)}}function T(t){I();var e=O(K,"navigateToTab",[t]);ot[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}}function I(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!Z)throw new Error("The library has not yet been initialized");if(q&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===q){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+q+"' context")}}function E(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===J||n!==J.location.origin&&!V.test(n.toLowerCase())||(M(e,n),e===K?S(t):e===Y&&N(t))}}function M(t,e){K&&t!==K?Y&&t!==Y||(Y=t,$=e):(K=t,X=e),K&&K.closed&&(K=null,X=null),Y&&Y.closed&&(Y=null,$=null),B(K),B(Y)}function S(t){if("id"in t.data){var e=t.data,n=ot[e.id];n&&(n.apply(null,e.args),delete ot[e.id])}else if("func"in t.data){var e=t.data,i=_[e.func];i&&i.apply(this,e.args)}}function N(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=_[e.func];if(n){var i=n.apply(this,e.args);i&&F(Y,e.id,Array.isArray(i)?i:[i])}else{var o=O(K,e.func,e.args);ot[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];Y&&F(Y,e.id,t)}}}}function U(t){return t===K?et:t===Y?nt:[]}function A(t){return t===K?X:t===Y?$:null}function B(t){for(var e=A(t),n=U(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function L(t,e){var n=J.setInterval(function(){0===U(t).length&&(clearInterval(n),e())},100)}function O(t,e,n){var i=D(e,n);if(tt)J&&J.nativeInterface&&J.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=A(t);t&&o?t.postMessage(i,o):U(t).push(i)}return i.id}function P(t,e){return I(),O(K,t,e)}function F(t,e,n){var i=H(e,n),o=A(t);t&&o&&t.postMessage(i,o)}function D(t,e){return{id:it++,func:t,args:e||[]}}function H(t,e){return{id:t,args:e||[]}}function x(t){I();var e=O(K,"getChatMembers");ot[e]=t}var W,z="1.3.6",R=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],V=n(R),_={},j={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){function e(t,e){I(),l=e,O(K,"setUpViews",[t])}function n(t){l&&l(t)||(I(),O(K,"viewConfigItemPress",[t]))}function i(t,e){I(),c=e,O(K,"setNavBarMenu",[t])}function o(t){c&&c(t)||(I(),O(K,"handleNavBarMenuItemPress",[t]))}function a(t,e){I(),f=e,O(K,"showActionMenu",[t])}function r(t){f&&f(t)||(I(),O(K,"handleActionMenuItemPress",[t]))}var s=function(){function t(){this.enabled=!0}return t}();t.MenuItem=s;var u;!function(t){t.dropDown="dropDown",t.popOver="popOver"}(u=t.MenuListType||(t.MenuListType={}));var c;_.navBarMenuItemPress=o;var f;_.actionMenuItemPress=r;var l;_.setModuleView=n,t.setUpViews=e,t.setNavBarMenu=i,t.showActionMenu=a}(W=t.menus||(t.menus={}));var J,K,X,Y,$,q,G,Q,Z=!1,tt=!1,et=[],nt=[],it=0,ot={},at=!1;_.themeChange=u;var rt;_.fullScreenChange=f;var st;_.backButtonPress=h,t.initialize=i,t.enablePrintCapability=o,t.print=a,t.getContext=r,t.registerOnThemeChangeHandler=s,t.registerFullScreenHandler=c,t.registerBackButtonHandler=l,t.navigateBack=d,t.navigateCrossDomain=v,t.getTabInstances=g,t.getUserJoinedTeams=p,t.getMruTabInstances=m,t.shareDeepLink=y,t.openFilePreview=w,t.downloadFile=b,t.showNotification=k,t.uploadCustomApp=C,t.navigateToTab=T;var ut;!function(t){function e(t){I(j.settings,j.remove),O(K,"settings.setValidityState",[t])}function n(t){I(j.settings,j.remove);var e=O(K,"settings.getSettings");ot[e]=t}function i(t){I(j.settings),O(K,"settings.setSettings",[t])}function o(t){I(j.settings),u=t}function a(t){I(j.remove),c=t}function r(t){var e=new f(t);u?u(e):e.notifySuccess()}function s(){var t=new l;c?c(t):t.notifySuccess()}var u,c;_["settings.save"]=r,_["settings.remove"]=s,t.setValidityState=e,t.getSettings=n,t.setSettings=i,t.registerOnSaveHandler=o,t.registerOnRemoveHandler=a;var f=function(){function t(t){this.notified=!1,this.result=t?t:{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),O(K,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),O(K,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}(),l=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),O(K,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),O(K,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(ut=t.settings||(t.settings={}));var ct;!function(t){function e(t){g=t}function n(t){var e=void 0!==t?t:g;if(I(j.content,j.settings,j.remove,j.task),"desktop"===G){var n=document.createElement("a");n.href=e.url;var i=O(K,"authentication.authenticate",[n.href,e.width,e.height]);ot[i]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}}else r(e)}function i(t){I();var e=O(K,"authentication.getAuthToken",[t.resources]);ot[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}function o(t){I();var e=O(K,"authentication.getUser");ot[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}function a(){s();try{Y&&Y.close()}finally{Y=null,$=null}}function r(t){g=t,a();var e=g.width||600,n=g.height||400;e=Math.min(e,J.outerWidth-400),n=Math.min(n,J.outerHeight-200);var i=document.createElement("a");i.href=g.url;var o="undefined"!=typeof J.screenLeft?J.screenLeft:J.screenX,r="undefined"!=typeof J.screenTop?J.screenTop:J.screenY;o+=J.outerWidth/2-e/2,r+=J.outerHeight/2-n/2,Y=J.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+o+", width="+e+", height="+n),Y?u():h("FailedToOpenWindow")}function s(){p&&(clearInterval(p),p=0),delete _.initialize,delete _.navigateCrossDomain}function u(){s(),p=J.setInterval(function(){if(!Y||Y.closed)h("CancelledByUser");else{var t=$;try{$="*",O(Y,"ping")}finally{$=t}}},100),_.initialize=function(){return[j.authentication,G]},_.navigateCrossDomain=function(t){return!1}}function c(t,e){d(e,"result",t),I(j.authentication),O(K,"authentication.authenticate.success",[t]),L(K,function(){return setTimeout(function(){return J.close()},200)})}function f(t,e){d(e,"reason",t),I(j.authentication),O(K,"authentication.authenticate.failure",[t]),L(K,function(){return setTimeout(function(){return J.close()},200)})}function l(t){try{g&&g.successCallback&&g.successCallback(t)}finally{g=null,a()}}function h(t){try{g&&g.failureCallback&&g.failureCallback(t)}finally{g=null,a()}}function d(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=v(i.href,"result",n)),J.location.assign(v(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=v(i.href,"reason",n)),J.location.assign(v(i.href,"authFailure",""))))}}function v(t,e,n){var i=t.indexOf("#"),o=i===-1?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),t=i===-1?t:t.substr(0,i),t+o}var g,p;_["authentication.authenticate.success"]=l,_["authentication.authenticate.failure"]=h,t.registerAuthenticationHandlers=e,t.authenticate=n,t.getAuthToken=i,t.getUser=o,t.notifySuccess=c,t.notifyFailure=f}(ct=t.authentication||(t.authentication={})),t.sendCustomMessage=P;var ft;!function(t){function e(t,e){I(j.content);var n=O(K,"tasks.startTask",[t]);ot[n]=e}function n(t,e){I(j.content,j.task),O(K,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}t.startTask=e,t.submitTask=n}(ft=t.tasks||(t.tasks={})),t.getChatMembers=x}(t||(t={})),t});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
var inputs = {};
var container = document.createElement("div");
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
    var input = document.querySelector('#image_uploads');
    var preview = document.querySelector('.fileUploadPreview');
    input.style.opacity = 0;
    input.addEventListener('change', updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement('p');
            para.textContent = 'No files currently selected for upload';
            preview.appendChild(para);
        }
        else {
            var list = document.createElement('ol');
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement('li');
                var para = document.createElement('p');
                if (validFileType(curFiles[i])) {
                    para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
                    var image = document.createElement('img');
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ];
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
            return number + 'bytes';
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }
}

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


var initializeAppModules = function () {
    addModule({
        name: "initialize",
        action: function () {
            MicrosoftTeams_min["initialize"]();
        }
    });
    addModule({
        name: "getContext",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getContext"](output);
        }
    });
    addModule({
        name: "navigateCrossDomain",
        inputs: [{
                type: "string",
                name: "url"
            },],
        action: function (url) {
            MicrosoftTeams_min["navigateCrossDomain"](url);
        }
    });
    addModule({
        name: "registerOnThemeChangeHandler",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
        }
    });
    addModule({
        name: "shareDeepLink",
        inputs: [{
                type: "object",
                name: "deepLinkParameters"
            },],
        action: function (deepLinkParameters) {
            MicrosoftTeams_min["shareDeepLink"](deepLinkParameters);
        }
    });
    addModule({
        name: "authentication.authenticate",
        inputs: [{
                type: "string",
                name: "url"
            },],
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
        inputs: [{
                type: "string",
                name: "reason"
            },],
        action: function (reason) {
            MicrosoftTeams_min["authentication"].notifyFailure(reason);
        }
    });
    addModule({
        name: "authentication.notifySuccess",
        inputs: [{
                type: "string",
                name: "result"
            },],
        action: function (result) {
            MicrosoftTeams_min["authentication"].notifySuccess(result);
        }
    });
    addModule({
        name: "settings.getSettings",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["settings"].getSettings(output);
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler",
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
        action: function () {
            window.saveEvent && window.saveEvent.notifySuccess();
        }
    });
    addModule({
        name: "settings.setSettings",
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
        inputs: [{
                type: "string",
                name: "result"
            },
            {
                type: "string",
                name: "appId"
            },
        ],
        action: function (result, appId) {
            MicrosoftTeams_min["tasks"].submitTask(result, appId);
        }
    });
    addModule({
        name: "tasks.startTask",
        inputs: [{
                type: "object",
                name: "taskInfo"
            },],
        action: function (taskInfo) {
            MicrosoftTeams_min["tasks"].startTask(taskInfo);
        }
    });
    /* addModule({
      name: "downloadFile",
      inputs: [{
        type: "object",
        name: "fileDownloadParameters"
      }, ],
      action: function (fileDownloadParameters) {
        if(microsoftTeams.downloadFile) {
            microsoftTeams.downloadFile(fileDownloadParameters);
        }
      }
    });

    */
    addModule({
        name: "downloadFile ShowNotificationOnly",
        inputs: [{
                type: "object",
                name: "showNotificationParameters"
            },],
        action: function (showNotificationParameters) {
            MicrosoftTeams_min["showNotification"](showNotificationParameters);
        }
    });
    addModule({
        name: "getAuthToken",
        inputs: [{
                type: "object",
                name: "getAuthTokenParameters"
            },],
        action: function (getAuthTokenParameters) {
            MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
        }
    });
    addModule({
        name: "getChatMembers",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getChatMembers"](output);
        }
    });
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