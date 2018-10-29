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

!function(t,e){if(true)module.exports=e();else { var i, n; }}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);e.microsoftTeams=i.microsoftTeams},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t}),function(t){var e="1.3.6";function n(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}var i=function(t){for(var e="",i=0;i<t.length;i++)e+=(0===i?"":"|")+n(t[i]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),o={},r={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){var e,n,i,r=function(){return function(){this.enabled=!0}}();t.MenuItem=r,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),o.navBarMenuItemPress=function(t){e&&e(t)||(O(),j(s,"handleNavBarMenuItemPress",[t]))},o.actionMenuItemPress=function(t){n&&n(t)||(O(),j(s,"handleActionMenuItemPress",[t]))},o.setModuleView=function(t){i&&i(t)||(O(),j(s,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){O(),i=e,j(s,"setUpViews",[t])},t.setNavBarMenu=function(t,n){O(),e=n,j(s,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){O(),n=e,j(s,"showActionMenu",[t])}}(t.menus||(t.menus={}));var a,s,u,c,f,l,d,h,v,p,g,m=!1,y=!1,b=[],w=[],k=0,T={},C=!1;function M(t){O(),h=t}function I(t){O(),v=t}function S(t){O(),p=t}function E(){O();var t=j(s,"navigateBack",[]);T[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function O(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!m)throw new Error("The library has not yet been initialized");if(l&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===l){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+l+"' context")}}function N(t){if("id"in t.data){var e=t.data,n=T[e.id];n&&(n.apply(null,e.args),delete T[e.id])}else if("func"in t.data){e=t.data;var i=o[e.func];i&&i.apply(this,e.args)}}function P(t){return t===s?b:t===c?w:[]}function x(t){return t===s?u:t===c?f:null}function U(t){for(var e=x(t),n=P(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function _(t,e){var n=a.setInterval(function(){0===P(t).length&&(clearInterval(n),e())},100)}function j(t,e,n){var i=function(t,e){return{id:k++,func:t,args:e||[]}}(e,n);if(y)a&&a.nativeInterface&&a.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=x(t);t&&o?t.postMessage(i,o):P(t).push(i)}return i.id}function A(t,e,n){var i=function(t,e){return{id:t,args:e||[]}}(e,n),o=x(t);t&&o&&t.postMessage(i,o)}o.themeChange=function(t){h&&h(t);c&&j(c,"themeChange",[t])},o.fullScreenChange=function(t){v&&v(t)},o.backButtonPress=function(){p&&p()||E()},t.initialize=function(t){if(void 0===t&&(t=window),!m){m=!0;var n=function(t){return function(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===a||n!==a.location.origin&&!i.test(n.toLowerCase())||(function(t,e){s&&t!==s?c&&t!==c||(c=t,f=e):(s=t,u=e),s&&s.closed&&(s=null,u=null),c&&c.closed&&(c=null,f=null),U(s),U(c)}(e,n),e===s?N(t):e===c&&function(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=o[e.func];if(n){var i=n.apply(this,e.args);i&&A(c,e.id,Array.isArray(i)?i:[i])}else{var r=j(s,e.func,e.args);T[r]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];c&&A(c,e.id,t)}}}}(t))}}(t)};(s=(a=t).parent!==a.self?a.parent:a.opener)?a.addEventListener("message",n,!1):(y=!0,window.onNativeMessage=N);try{u="*";var h=j(s,"initialize",[e]);T[h]=function(t,e){l=t,d=e}}finally{u=null}this._uninitialize=function(){l&&(M(null),I(null),S(null)),l===r.settings&&g.registerOnSaveHandler(null),l===r.remove&&g.registerOnRemoveHandler(null),y||a.removeEventListener("message",n,!1),m=!1,s=null,u=null,b=[],c=null,f=null,w=[],k=0,T={},l=null,d=null,y=!1}}},t._uninitialize=function(){},t.enablePrintCapability=function(){C||(C=!0,O(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t.print(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},t.print=function(){window.print()},t.getContext=function(t){O();var e=j(s,"getContext");T[e]=t},t.registerOnThemeChangeHandler=M,t.registerFullScreenHandler=I,t.registerBackButtonHandler=S,t.navigateBack=E,t.navigateCrossDomain=function(t){O(r.content,r.settings,r.remove,r.task);var e=j(s,"navigateCrossDomain",[t]);T[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},t.getTabInstances=function(t,e){O();var n=j(s,"getTabInstances",[e]);T[n]=t},t.getUserJoinedTeams=function(t,e){O();var n=j(s,"getUserJoinedTeams",[e]);T[n]=t},t.getMruTabInstances=function(t,e){O();var n=j(s,"getMruTabInstances",[e]);T[n]=t},t.shareDeepLink=function(t){O(r.content),j(s,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},t.openFilePreview=function(t){O(r.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];j(s,"openFilePreview",e)},t.showNotification=function(t){O(r.content);var e=[t.message,t.notificationType];j(s,"showNotification",e)},t.uploadCustomApp=function(t){O();var e=j(s,"uploadCustomApp",[t]);T[e]=function(t,e){if(!t)throw new Error(e)}},t.navigateToTab=function(t){O();var e=j(s,"navigateToTab",[t]);T[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;o["settings.save"]=function(t){var n=new i(t);e?e(n):n.notifySuccess()},o["settings.remove"]=function(){var t=new a;n?n(t):t.notifySuccess()},t.setValidityState=function(t){O(r.settings,r.remove),j(s,"settings.setValidityState",[t])},t.getSettings=function(t){O(r.settings,r.remove);var e=j(s,"settings.getSettings");T[e]=t},t.setSettings=function(t){O(r.settings),j(s,"settings.setSettings",[t])},t.registerOnSaveHandler=function(t){O(r.settings),e=t},t.registerOnRemoveHandler=function(t){O(r.remove),n=t};var i=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),j(s,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),j(s,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}();var a=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),j(s,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),j(s,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(g=t.settings||(t.settings={})),function(t){var e,n;function i(){u();try{c&&c.close()}finally{c=null,f=null}}function u(){n&&(clearInterval(n),n=0),delete o.initialize,delete o.navigateCrossDomain}function l(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function h(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=v(i.href,"result",n)),a.location.assign(v(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=v(i.href,"reason",n)),a.location.assign(v(i.href,"authFailure",""))))}}function v(t,e,n){var i=t.indexOf("#"),o=-1===i?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+o}o["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},o["authentication.authenticate.failure"]=l,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var h=void 0!==t?t:e;if(O(r.content,r.settings,r.remove,r.task),"desktop"===d){var v=document.createElement("a");v.href=h.url;var p=j(s,"authentication.authenticate",[v.href,h.width,h.height]);T[p]=function(t,e){t?h.successCallback(e):h.failureCallback(e)}}else!function(t){e=t,i();var s=e.width||600,h=e.height||400;s=Math.min(s,a.outerWidth-400),h=Math.min(h,a.outerHeight-200);var v=document.createElement("a");v.href=e.url;var p=void 0!==a.screenLeft?a.screenLeft:a.screenX,g=void 0!==a.screenTop?a.screenTop:a.screenY;p+=a.outerWidth/2-s/2,g+=a.outerHeight/2-h/2,(c=a.open(v.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+g+", left="+p+", width="+s+", height="+h))?(u(),n=a.setInterval(function(){if(!c||c.closed)l("CancelledByUser");else{var t=f;try{f="*",j(c,"ping")}finally{f=t}}},100),o.initialize=function(){return[r.authentication,d]},o.navigateCrossDomain=function(t){return!1}):l("FailedToOpenWindow")}(h)},t.getAuthToken=function(t){O();var e=j(s,"authentication.getAuthToken",[t.resources]);T[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){O();var e=j(s,"authentication.getUser");T[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){h(e,"result",t),O(r.authentication),j(s,"authentication.authenticate.success",[t]),_(s,function(){return setTimeout(function(){return a.close()},200)})},t.notifyFailure=function(t,e){h(e,"reason",t),O(r.authentication),j(s,"authentication.authenticate.failure",[t]),_(s,function(){return setTimeout(function(){return a.close()},200)})}}(t.authentication||(t.authentication={})),t.sendCustomMessage=function(t,e){return O(),j(s,t,e)},function(t){t.startTask=function(t,e){O(r.content);var n=j(s,"tasks.startTask",[t]);T[n]=e},t.submitTask=function(t,e){O(r.content,r.task),j(s,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(t.tasks||(t.tasks={})),t.getChatMembers=function(t){O();var e=j(s,"getChatMembers");T[e]=t}}(e.microsoftTeams||(e.microsoftTeams={}))}])});

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

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    addModule({
        name: "initialize",
        action: function () {
            MicrosoftTeams_min["microsoftTeams"].initialize();
        }
    });
    addModule({
        name: "getContext",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["microsoftTeams"].getContext(output);
        }
    });
    addModule({
        name: "navigateCrossDomain",
        inputs: [{
                type: "string",
                name: "url"
            },],
        action: function (url) {
            MicrosoftTeams_min["microsoftTeams"].navigateCrossDomain(url);
        }
    });
    addModule({
        name: "registerOnThemeChangeHandler",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["microsoftTeams"].registerOnThemeChangeHandler(output);
        }
    });
    addModule({
        name: "shareDeepLink",
        inputs: [{
                type: "object",
                name: "deepLinkParameters"
            },],
        action: function (deepLinkParameters) {
            MicrosoftTeams_min["microsoftTeams"].shareDeepLink(deepLinkParameters);
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
            MicrosoftTeams_min["microsoftTeams"].authentication.authenticate({
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
            MicrosoftTeams_min["microsoftTeams"].authentication.notifyFailure(reason);
        }
    });
    addModule({
        name: "authentication.notifySuccess",
        inputs: [{
                type: "string",
                name: "result"
            },],
        action: function (result) {
            MicrosoftTeams_min["microsoftTeams"].authentication.notifySuccess(result);
        }
    });
    addModule({
        name: "settings.getSettings",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["microsoftTeams"].settings.getSettings(output);
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["microsoftTeams"].settings.registerOnSaveHandler(function (saveEvent) {
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
            MicrosoftTeams_min["microsoftTeams"].settings.setSettings(settings);
        }
    });
    addModule({
        name: "settings.setValidityState",
        inputs: [{
                type: "boolean",
                name: "validityState"
            }],
        action: function (validityState) {
            MicrosoftTeams_min["microsoftTeams"].settings.setValidityState(validityState);
        }
    });
    addModule({
        name: "openFilePreview",
        inputs: [{
                type: "object",
                name: "filePreviewParameters"
            }],
        action: function (filePreviewParameters) {
            MicrosoftTeams_min["microsoftTeams"].openFilePreview(filePreviewParameters);
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
            MicrosoftTeams_min["microsoftTeams"].tasks.submitTask(result, appId);
        }
    });
    addModule({
        name: "tasks.startTask",
        inputs: [{
                type: "object",
                name: "taskInfo"
            },],
        action: function (taskInfo) {
            MicrosoftTeams_min["microsoftTeams"].tasks.startTask(taskInfo);
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
            MicrosoftTeams_min["microsoftTeams"].showNotification(showNotificationParameters);
        }
    });
    addModule({
        name: "getAuthToken",
        inputs: [{
                type: "object",
                name: "getAuthTokenParameters"
            },],
        action: function (getAuthTokenParameters) {
            MicrosoftTeams_min["microsoftTeams"].authentication.getAuthToken(getAuthTokenParameters);
        }
    });
    addModule({
        name: "getChatMembers",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["microsoftTeams"].getChatMembers(output);
        }
    });
    addModule({
        name: "getUserJoinedTeams",
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["microsoftTeams"].getUserJoinedTeams(output);
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