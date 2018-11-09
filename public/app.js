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

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),i(n(1)),i(n(2))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t});var i="1.3.6";function o(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}var r=function(t){for(var e="",n=0;n<t.length;n++)e+=(0===n?"":"|")+o(t[n]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),a={},s={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){var e,n,i,o=function(){return function(){this.enabled=!0}}();t.MenuItem=o,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),a.navBarMenuItemPress=function(t){e&&e(t)||(x(),B(c,"handleNavBarMenuItemPress",[t]))},a.actionMenuItemPress=function(t){n&&n(t)||(x(),B(c,"handleActionMenuItemPress",[t]))},a.setModuleView=function(t){i&&i(t)||(x(),B(c,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){x(),i=e,B(c,"setUpViews",[t])},t.setNavBarMenu=function(t,n){x(),e=n,B(c,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){x(),n=e,B(c,"showActionMenu",[t])}}(e.menus||(e.menus={}));var u,c,f,l,d,h,p,v,g,m,y,b=!1,w=!1,k=[],T=[],C=0,M={},I=!1;function S(){window.print()}function E(t){x(),v=t}function O(t){x(),g=t}function P(t){x(),m=t}function N(){x();var t=B(c,"navigateBack",[]);M[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function x(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!b)throw new Error("The library has not yet been initialized");if(h&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===h){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+h+"' context")}}function _(t){if("id"in t.data){var e=t.data,n=M[e.id];n&&(n.apply(null,e.args),delete M[e.id])}else if("func"in t.data){e=t.data;var i=a[e.func];i&&i.apply(this,e.args)}}function j(t){return t===c?k:t===l?T:[]}function L(t){return t===c?f:t===l?d:null}function U(t){for(var e=L(t),n=j(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function A(t,e){var n=u.setInterval(function(){0===j(t).length&&(clearInterval(n),e())},100)}function B(t,e,n){var i=function(t,e){return{id:C++,func:t,args:e||[]}}(e,n);if(w)u&&u.nativeInterface&&u.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=L(t);t&&o?t.postMessage(i,o):j(t).push(i)}return i.id}function D(t,e,n){var i=function(t,e){return{id:t,args:e||[]}}(e,n),o=L(t);t&&o&&t.postMessage(i,o)}a.themeChange=function(t){v&&v(t);l&&B(l,"themeChange",[t])},a.fullScreenChange=function(t){g&&g(t)},a.backButtonPress=function(){m&&m()||N()},e.initialize=function(t){if(void 0===t&&(t=window),!b){b=!0;var e=function(t){return function(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===u||n!==u.location.origin&&!r.test(n.toLowerCase())||(function(t,e){c&&t!==c?l&&t!==l||(l=t,d=e):(c=t,f=e),c&&c.closed&&(c=null,f=null),l&&l.closed&&(l=null,d=null),U(c),U(l)}(e,n),e===c?_(t):e===l&&function(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=a[e.func];if(n){var i=n.apply(this,e.args);i&&D(l,e.id,Array.isArray(i)?i:[i])}else{var o=B(c,e.func,e.args);M[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];l&&D(l,e.id,t)}}}}(t))}}(t)};(c=(u=t).parent!==u.self?u.parent:u.opener)?u.addEventListener("message",e,!1):(w=!0,window.onNativeMessage=_);try{f="*";var n=B(c,"initialize",[i]);M[n]=function(t,e){h=t,p=e}}finally{f=null}this._uninitialize=function(){h&&(E(null),O(null),P(null)),h===s.settings&&y.registerOnSaveHandler(null),h===s.remove&&y.registerOnRemoveHandler(null),w||u.removeEventListener("message",e,!1),b=!1,c=null,f=null,k=[],l=null,d=null,T=[],C=0,M={},h=null,p=null,w=!1}}},e._uninitialize=function(){},e.enablePrintCapability=function(){I||(I=!0,x(),document.addEventListener("keydown",function(t){(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(S(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))},e.print=S,e.getContext=function(t){x();var e=B(c,"getContext");M[e]=t},e.registerOnThemeChangeHandler=E,e.registerFullScreenHandler=O,e.registerBackButtonHandler=P,e.navigateBack=N,e.navigateCrossDomain=function(t){x(s.content,s.settings,s.remove,s.task);var e=B(c,"navigateCrossDomain",[t]);M[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},e.getTabInstances=function(t,e){x();var n=B(c,"getTabInstances",[e]);M[n]=t},e.getUserJoinedTeams=function(t,e){x();var n=B(c,"getUserJoinedTeams",[e]);M[n]=t},e.getMruTabInstances=function(t,e){x();var n=B(c,"getMruTabInstances",[e]);M[n]=t},e.shareDeepLink=function(t){x(s.content),B(c,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},e.openFilePreview=function(t){x(s.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];B(c,"openFilePreview",e)},e.showNotification=function(t){x(s.content);var e=[t.message,t.notificationType];B(c,"showNotification",e)},e.executeDeepLink=function(t){x(s.content);var e=[t.deepLink];B(c,"handleDeepLink",e)},e.uploadCustomApp=function(t){x();var e=B(c,"uploadCustomApp",[t]);M[e]=function(t,e){if(!t)throw new Error(e)}},e.navigateToTab=function(t){x();var e=B(c,"navigateToTab",[t]);M[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;a["settings.save"]=function(t){var n=new i(t);e?e(n):n.notifySuccess()},a["settings.remove"]=function(){var t=new o;n?n(t):t.notifySuccess()},t.setValidityState=function(t){x(s.settings,s.remove),B(c,"settings.setValidityState",[t])},t.getSettings=function(t){x(s.settings,s.remove);var e=B(c,"settings.getSettings");M[e]=t},t.setSettings=function(t){x(s.settings),B(c,"settings.setSettings",[t])},t.registerOnSaveHandler=function(t){x(s.settings),e=t},t.registerOnRemoveHandler=function(t){x(s.remove),n=t};var i=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),B(c,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),B(c,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}();var o=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),B(c,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),B(c,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(y=e.settings||(e.settings={})),function(t){var e,n;function i(){o();try{l&&l.close()}finally{l=null,d=null}}function o(){n&&(clearInterval(n),n=0),delete a.initialize,delete a.navigateCrossDomain}function r(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function f(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=h(i.href,"result",n)),u.location.assign(h(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=h(i.href,"reason",n)),u.location.assign(h(i.href,"authFailure",""))))}}function h(t,e,n){var i=t.indexOf("#"),o=-1===i?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+o}a["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},a["authentication.authenticate.failure"]=r,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var f=void 0!==t?t:e;if(x(s.content,s.settings,s.remove,s.task),"desktop"===p){var h=document.createElement("a");h.href=f.url;var v=B(c,"authentication.authenticate",[h.href,f.width,f.height]);M[v]=function(t,e){t?f.successCallback(e):f.failureCallback(e)}}else!function(t){e=t,i();var c=e.width||600,f=e.height||400;c=Math.min(c,u.outerWidth-400),f=Math.min(f,u.outerHeight-200);var h=document.createElement("a");h.href=e.url;var v=void 0!==u.screenLeft?u.screenLeft:u.screenX,g=void 0!==u.screenTop?u.screenTop:u.screenY;v+=u.outerWidth/2-c/2,g+=u.outerHeight/2-f/2,(l=u.open(h.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+g+", left="+v+", width="+c+", height="+f))?(o(),n=u.setInterval(function(){if(!l||l.closed)r("CancelledByUser");else{var t=d;try{d="*",B(l,"ping")}finally{d=t}}},100),a.initialize=function(){return[s.authentication,p]},a.navigateCrossDomain=function(t){return!1}):r("FailedToOpenWindow")}(f)},t.getAuthToken=function(t){x();var e=B(c,"authentication.getAuthToken",[t.resources]);M[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){x();var e=B(c,"authentication.getUser");M[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){f(e,"result",t),x(s.authentication),B(c,"authentication.authenticate.success",[t]),A(c,function(){return setTimeout(function(){return u.close()},200)})},t.notifyFailure=function(t,e){f(e,"reason",t),x(s.authentication),B(c,"authentication.authenticate.failure",[t]),A(c,function(){return setTimeout(function(){return u.close()},200)})}}(e.authentication||(e.authentication={})),e.sendCustomMessage=function(t,e){return x(),B(c,t,e)},function(t){t.startTask=function(t,e){x(s.content);var n=B(c,"tasks.startTask",[t]);M[n]=e},t.submitTask=function(t,e){x(s.content,s.task),B(c,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(e.tasks||(e.tasks={})),e.getChatMembers=function(t){x();var e=B(c,"getChatMembers");M[e]=t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0})}])});

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


const initializeAppModules = () => {
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
        name: "execute deep link",
        inputs: [{
                type: "object",
                name: "executeDeepLinkParameters"
            },],
        action: function (executeDeepLinkParameters) {
            MicrosoftTeams_min["executeDeepLink"](executeDeepLinkParameters);
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
    addModule({
        name: "getUserJoinedTeams",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getUserJoinedTeams"](output);
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