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
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t});var t;return function(t){"use strict";function e(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}function n(t){for(var n="",i=0;i<t.length;i++)n+=(0===i?"":"|")+e(t[i]);return new RegExp(n)}function i(){if(!q){q=!0,R=this._window||window;var t=function(t){return k(t)};V=R.parent!==R.self?R.parent:R.opener,V?R.addEventListener("message",t,!1):(G=!0,window.onNativeMessage=T);try{_="*";var e=U(V,"initialize",[x]);tt[e]=function(t,e){X=t,Y=e}}finally{_=null}this._uninitialize=function(){X&&(r(null),s(null),c(null)),X===z.settings&&it.registerOnSaveHandler(null),X===z.remove&&it.registerOnRemoveHandler(null),G||R.removeEventListener("message",t,!1),q=!1,V=null,_=null,K=[],j=null,J=null,Q=[],Z=0,tt={},X=null,Y=null,G=!1}}}function o(t){b();var e=U(V,"getContext");tt[e]=t}function r(t){b(),$=t}function a(t){$&&$(t),j&&U(j,"themeChange",[t])}function s(t){b(),et=t}function u(t){et&&et(t)}function c(t){b(),nt=t}function f(){nt&&nt()||l()}function l(){b();var t=U(V,"navigateBack",[]);tt[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function h(t){b(z.content,z.settings,z.remove,z.task);var e=U(V,"navigateCrossDomain",[t]);tt[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}}function v(t,e){b();var n=U(V,"getTabInstances",[e]);tt[n]=t}function d(t,e){b();var n=U(V,"getUserJoinedTeams",[e]);tt[n]=t}function g(t,e){b();var n=U(V,"getMruTabInstances",[e]);tt[n]=t}function p(t){b(z.content),U(V,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])}function m(t){b(z.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];U(V,"openFilePreview",e)}function y(t){b();var e=U(V,"uploadCustomApp",[t]);tt[e]=function(t,e){if(!t)throw new Error(e)}}function w(t){b();var e=U(V,"navigateToTab",[t]);tt[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}}function b(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!q)throw new Error("The library has not yet been initialized");if(X&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===X){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+X+"' context")}}function k(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===R||n!==R.location.origin&&!D.test(n.toLowerCase())||(C(e,n),e===V?T(t):e===j&&I(t))}}function C(t,e){V&&t!==V?j&&t!==j||(j=t,J=e):(V=t,_=e),V&&V.closed&&(V=null,_=null),j&&j.closed&&(j=null,J=null),S(V),S(j)}function T(t){if("id"in t.data){var e=t.data,n=tt[e.id];n&&(n.apply(null,e.args),delete tt[e.id])}else if("func"in t.data){var e=t.data,i=W[e.func];i&&i.apply(this,e.args)}}function I(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=W[e.func];if(n){var i=n.apply(this,e.args);i&&O(j,e.id,Array.isArray(i)?i:[i])}else{var o=U(V,e.func,e.args);tt[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];j&&O(j,e.id,t)}}}}function M(t){return t===V?K:t===j?Q:[]}function E(t){return t===V?_:t===j?J:null}function S(t){for(var e=E(t),n=M(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function N(t,e){var n=R.setInterval(function(){0===M(t).length&&(clearInterval(n),e())},100)}function U(t,e,n){var i=B(e,n);if(G)R&&R.nativeInterface&&R.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=E(t);t&&o?t.postMessage(i,o):M(t).push(i)}return i.id}function A(t,e){return b(),U(V,t,e)}function O(t,e,n){var i=L(e,n),o=E(t);t&&o&&t.postMessage(i,o)}function B(t,e){return{id:Z++,func:t,args:e||[]}}function L(t,e){return{id:t,args:e||[]}}function H(t){b();var e=U(V,"getChatMembers");tt[e]=t}var P,x="1.3.6",F=["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"],D=n(F),W={},z={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){function e(t,e){b(),l=e,U(V,"setUpViews",[t])}function n(t){l&&l(t)||(b(),U(V,"viewConfigItemPress",[t]))}function i(t,e){b(),c=e,U(V,"setNavBarMenu",[t])}function o(t){c&&c(t)||(b(),U(V,"handleNavBarMenuItemPress",[t]))}function r(t,e){b(),f=e,U(V,"showActionMenu",[t])}function a(t){f&&f(t)||(b(),U(V,"handleActionMenuItemPress",[t]))}var s=function(){function t(){this.enabled=!0}return t}();t.MenuItem=s;var u;!function(t){t.dropDown="dropDown",t.popOver="popOver"}(u=t.MenuListType||(t.MenuListType={}));var c;W.navBarMenuItemPress=o;var f;W.actionMenuItemPress=a;var l;W.setModuleView=n,t.setUpViews=e,t.setNavBarMenu=i,t.showActionMenu=r}(P=t.menus||(t.menus={}));var R,V,_,j,J,X,Y,$,q=!1,G=!1,K=[],Q=[],Z=0,tt={};W.themeChange=a;var et;W.fullScreenChange=u;var nt;W.backButtonPress=f,t.initialize=i,t.getContext=o,t.registerOnThemeChangeHandler=r,t.registerFullScreenHandler=s,t.registerBackButtonHandler=c,t.navigateBack=l,t.navigateCrossDomain=h,t.getTabInstances=v,t.getUserJoinedTeams=d,t.getMruTabInstances=g,t.shareDeepLink=p,t.openFilePreview=m,t.uploadCustomApp=y,t.navigateToTab=w;var it;!function(t){function e(t){b(z.settings,z.remove),U(V,"settings.setValidityState",[t])}function n(t){b(z.settings,z.remove);var e=U(V,"settings.getSettings");tt[e]=t}function i(t){b(z.settings),U(V,"settings.setSettings",[t])}function o(t){b(z.settings),u=t}function r(t){b(z.remove),c=t}function a(t){var e=new f(t);u?u(e):e.notifySuccess()}function s(){var t=new l;c?c(t):t.notifySuccess()}var u,c;W["settings.save"]=a,W["settings.remove"]=s,t.setValidityState=e,t.getSettings=n,t.setSettings=i,t.registerOnSaveHandler=o,t.registerOnRemoveHandler=r;var f=function(){function t(t){this.notified=!1,this.result=t?t:{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),U(V,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),U(V,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}(),l=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),U(V,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),U(V,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(it=t.settings||(t.settings={}));var ot;!function(t){function e(t){g=t}function n(t){var e=void 0!==t?t:g;if(b(z.content,z.settings,z.remove,z.task),"desktop"===Y){var n=document.createElement("a");n.href=e.url;var i=U(V,"authentication.authenticate",[n.href,e.width,e.height]);tt[i]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}}else a(e)}function i(t){b();var e=U(V,"authentication.getAuthToken",[t.resources]);tt[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}function o(t){b();var e=U(V,"authentication.getUser");tt[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}function r(){s();try{j&&j.close()}finally{j=null,J=null}}function a(t){g=t,r();var e=g.width||600,n=g.height||400;e=Math.min(e,R.outerWidth-400),n=Math.min(n,R.outerHeight-200);var i=document.createElement("a");i.href=g.url;var o="undefined"!=typeof R.screenLeft?R.screenLeft:R.screenX,a="undefined"!=typeof R.screenTop?R.screenTop:R.screenY;o+=R.outerWidth/2-e/2,a+=R.outerHeight/2-n/2,j=R.open(i.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+a+", left="+o+", width="+e+", height="+n),j?u():h("FailedToOpenWindow")}function s(){p&&(clearInterval(p),p=0),delete W.initialize,delete W.navigateCrossDomain}function u(){s(),p=R.setInterval(function(){if(!j||j.closed)h("CancelledByUser");else{var t=J;try{J="*",U(j,"ping")}finally{J=t}}},100),W.initialize=function(){return[z.authentication,Y]},W.navigateCrossDomain=function(t){return!1}}function c(t,e){v(e,"result",t),b(z.authentication),U(V,"authentication.authenticate.success",[t]),N(V,function(){return setTimeout(function(){return R.close()},200)})}function f(t,e){v(e,"reason",t),b(z.authentication),U(V,"authentication.authenticate.failure",[t]),N(V,function(){return setTimeout(function(){return R.close()},200)})}function l(t){try{g&&g.successCallback&&g.successCallback(t)}finally{g=null,r()}}function h(t){try{g&&g.failureCallback&&g.failureCallback(t)}finally{g=null,r()}}function v(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=d(i.href,"result",n)),R.location.assign(d(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=d(i.href,"reason",n)),R.location.assign(d(i.href,"authFailure",""))))}}function d(t,e,n){var i=t.indexOf("#"),o=i===-1?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),t=i===-1?t:t.substr(0,i),t+o}var g,p;W["authentication.authenticate.success"]=l,W["authentication.authenticate.failure"]=h,t.registerAuthenticationHandlers=e,t.authenticate=n,t.getAuthToken=i,t.getUser=o,t.notifySuccess=c,t.notifyFailure=f}(ot=t.authentication||(t.authentication={})),t.sendCustomMessage=A;var rt;!function(t){function e(t,e){b(z.content);var n=U(V,"tasks.startTask",[t]);tt[n]=e}function n(t,e){b(z.content,z.task),U(V,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}t.startTask=e,t.submitTask=n}(rt=t.tasks||(t.tasks={})),t.getChatMembers=H}(t||(t={})),t});

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
    addModule({
        name: "downloadFile",
        inputs: [{
                type: "object",
                name: "fileDownloadParameters"
            },],
        action: function (fileDownloadParameters) {
            MicrosoftTeams_min["downloadFile"](fileDownloadParameters);
        }
    });
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