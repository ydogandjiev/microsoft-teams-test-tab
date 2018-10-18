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

!function(t,e){if(true)module.exports=e();else { var i, n; }}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);e.microsoftTeams=i.microsoftTeams},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t}),function(t){const e="1.3.6";function n(t){let e="^",n=t.split(".");for(let t=0;t<n.length;t++)e+=(t>0?"[.]":"")+n[t].replace("*","[^/^.]+");return e+="$"}const i=function(t){let e="";for(let i=0;i<t.length;i++)e+=(0===i?"":"|")+n(t[i]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),o={},s={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};let r;!function(t){let e,n,i,s;t.MenuItem=class{constructor(){this.enabled=!0}},function(t){t.dropDown="dropDown",t.popOver="popOver"}(e=t.MenuListType||(t.MenuListType={})),o.navBarMenuItemPress=function(t){n&&n(t)||(x(),L(c,"handleNavBarMenuItemPress",[t]))},o.actionMenuItemPress=function(t){i&&i(t)||(x(),L(c,"handleActionMenuItemPress",[t]))},o.setModuleView=function(t){s&&s(t)||(x(),L(c,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){x(),s=e,L(c,"setUpViews",[t])},t.setNavBarMenu=function(t,e){x(),n=e,L(c,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){x(),i=e,L(c,"showActionMenu",[t])}}(r=t.menus||(t.menus={}));let a,c,u,l,f,d,h,p,g,m,y,v,b,w=!1,k=!1,T=[],C=[],M=0,I={},S=!1;function E(t){x(),p=t}function O(t){x(),g=t}function N(t){x(),m=t}function P(){x();let t=L(c,"navigateBack",[]);I[t]=(t=>{if(!t)throw new Error("Back navigation is not supported in the current client or context.")})}function x(...t){if(!w)throw new Error("The library has not yet been initialized");if(d&&t&&t.length>0){let e=!1;for(let n=0;n<t.length;n++)if(t[n]===d){e=!0;break}if(!e)throw new Error("This call is not allowed in the '"+d+"' context")}}function U(t){if("id"in t.data){const e=t.data,n=I[e.id];n&&(n.apply(null,e.args),delete I[e.id])}else if("func"in t.data){const e=t.data,n=o[e.func];n&&n.apply(this,e.args)}}function _(t){return t===c?T:t===l?C:[]}function j(t){return t===c?u:t===l?f:null}function A(t){let e=j(t),n=_(t);for(;t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function B(t,e){let n=a.setInterval(()=>{0===_(t).length&&(clearInterval(n),e())},100)}function L(t,e,n){let i=function(t,e){return{id:M++,func:t,args:e||[]}}(e,n);if(k)a&&a.nativeInterface&&a.nativeInterface.framelessPostMessage(JSON.stringify(i));else{let e=j(t);t&&e?t.postMessage(i,e):_(t).push(i)}return i.id}function D(t,e,n){let i=function(t,e){return{id:t,args:e||[]}}(e,n),o=j(t);t&&o&&t.postMessage(i,o)}o.themeChange=function(t){p&&p(t);l&&L(l,"themeChange",[t])},o.fullScreenChange=function(t){g&&g(t)},o.backButtonPress=function(){m&&m()||P()},t.initialize=function(t=window){if(w)return;w=!0;let n=t=>(function(t){if(!t||!t.data||"object"!=typeof t.data)return;let e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===a||n!==a.location.origin&&!i.test(n.toLowerCase())||(function(t,e){c&&t!==c?l&&t!==l||(l=t,f=e):(c=t,u=e),c&&c.closed&&(c=null,u=null),l&&l.closed&&(l=null,f=null),A(c),A(l)}(e,n),e===c?U(t):e===l&&function(t){if("id"in t.data&&"func"in t.data){const e=t.data,n=o[e.func];if(n){let t=n.apply(this,e.args);t&&D(l,e.id,Array.isArray(t)?t:[t])}else{let t=L(c,e.func,e.args);I[t]=((...t)=>{l&&D(l,e.id,t)})}}}(t))})(t);(c=(a=t).parent!==a.self?a.parent:a.opener)?a.addEventListener("message",n,!1):(k=!0,window.onNativeMessage=U);try{u="*";let t=L(c,"initialize",[e]);I[t]=((t,e)=>{d=t,h=e})}finally{u=null}this._uninitialize=(()=>{d&&(E(null),O(null),N(null)),d===s.settings&&y.registerOnSaveHandler(null),d===s.remove&&y.registerOnRemoveHandler(null),k||a.removeEventListener("message",n,!1),w=!1,c=null,u=null,T=[],l=null,f=null,C=[],M=0,I={},d=null,h=null,k=!1})},t._uninitialize=function(){},t.enablePrintCapability=function(){S||(S=!0,x(),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t.print(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},t.print=function(){window.print()},t.getContext=function(t){x();let e=L(c,"getContext");I[e]=t},t.registerOnThemeChangeHandler=E,t.registerFullScreenHandler=O,t.registerBackButtonHandler=N,t.navigateBack=P,t.navigateCrossDomain=function(t){x(s.content,s.settings,s.remove,s.task);let e=L(c,"navigateCrossDomain",[t]);I[e]=(t=>{if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")})},t.getTabInstances=function(t,e){x();let n=L(c,"getTabInstances",[e]);I[n]=t},t.getUserJoinedTeams=function(t,e){x();const n=L(c,"getUserJoinedTeams",[e]);I[n]=t},t.getMruTabInstances=function(t,e){x();let n=L(c,"getMruTabInstances",[e]);I[n]=t},t.shareDeepLink=function(t){x(s.content),L(c,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},t.openFilePreview=function(t){x(s.content);const e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];L(c,"openFilePreview",e)},t.showNotification=function(t){x(s.content);const e=[t.message,t.isDownloadComplete];L(c,"showNotification",e)},t.uploadCustomApp=function(t){x();const e=L(c,"uploadCustomApp",[t]);I[e]=((t,e)=>{if(!t)throw new Error(e)})},t.navigateToTab=function(t){x();let e=L(c,"navigateToTab",[t]);I[e]=(t=>{if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")})},function(t){let e,n;o["settings.save"]=function(t){let n=new i(t);e?e(n):n.notifySuccess()},o["settings.remove"]=function(){let t=new r;n?n(t):t.notifySuccess()},t.setValidityState=function(t){x(s.settings,s.remove),L(c,"settings.setValidityState",[t])},t.getSettings=function(t){x(s.settings,s.remove);let e=L(c,"settings.getSettings");I[e]=t},t.setSettings=function(t){x(s.settings),L(c,"settings.setSettings",[t])},t.registerOnSaveHandler=function(t){x(s.settings),e=t},t.registerOnRemoveHandler=function(t){x(s.remove),n=t};class i{constructor(t){this.notified=!1,this.result=t||{}}notifySuccess(){this.ensureNotNotified(),L(c,"settings.save.success"),this.notified=!0}notifyFailure(t){this.ensureNotNotified(),L(c,"settings.save.failure",[t]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")}}class r{constructor(){this.notified=!1}notifySuccess(){this.ensureNotNotified(),L(c,"settings.remove.success"),this.notified=!0}notifyFailure(t){this.ensureNotNotified(),L(c,"settings.remove.failure",[t]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")}}}(y=t.settings||(t.settings={})),function(t){let e,n;function i(){r();try{l&&l.close()}finally{l=null,f=null}}function r(){n&&(clearInterval(n),n=0),delete o.initialize,delete o.navigateCrossDomain}function u(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function d(t,e,n){if(t){let i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=p(i.href,"result",n)),a.location.assign(p(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=p(i.href,"reason",n)),a.location.assign(p(i.href,"authFailure",""))))}}function p(t,e,n){let i=t.indexOf("#"),o=-1===i?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+o}o["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},o["authentication.authenticate.failure"]=u,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){let d=void 0!==t?t:e;if(x(s.content,s.settings,s.remove,s.task),"desktop"===h){let t=document.createElement("a");t.href=d.url;let e=L(c,"authentication.authenticate",[t.href,d.width,d.height]);I[e]=((t,e)=>{t?d.successCallback(e):d.failureCallback(e)})}else!function(t){e=t,i();let c=e.width||600,d=e.height||400;c=Math.min(c,a.outerWidth-400),d=Math.min(d,a.outerHeight-200);let p=document.createElement("a");p.href=e.url;let g=void 0!==a.screenLeft?a.screenLeft:a.screenX,m=void 0!==a.screenTop?a.screenTop:a.screenY;g+=a.outerWidth/2-c/2,m+=a.outerHeight/2-d/2,(l=a.open(p.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+m+", left="+g+", width="+c+", height="+d))?(r(),n=a.setInterval(()=>{if(!l||l.closed)u("CancelledByUser");else{let t=f;try{f="*",L(l,"ping")}finally{f=t}}},100),o.initialize=(()=>[s.authentication,h]),o.navigateCrossDomain=(t=>!1)):u("FailedToOpenWindow")}(d)},t.getAuthToken=function(t){x();let e=L(c,"authentication.getAuthToken",[t.resources]);I[e]=((e,n)=>{e?t.successCallback(n):t.failureCallback(n)})},t.getUser=function(t){x();let e=L(c,"authentication.getUser");I[e]=((e,n)=>{e?t.successCallback(n):t.failureCallback(n)})},t.notifySuccess=function(t,e){d(e,"result",t),x(s.authentication),L(c,"authentication.authenticate.success",[t]),B(c,()=>setTimeout(()=>a.close(),200))},t.notifyFailure=function(t,e){d(e,"reason",t),x(s.authentication),L(c,"authentication.authenticate.failure",[t]),B(c,()=>setTimeout(()=>a.close(),200))}}(v=t.authentication||(t.authentication={})),t.sendCustomMessage=function(t,e){return x(),L(c,t,e)},function(t){t.startTask=function(t,e){x(s.content);let n=L(c,"tasks.startTask",[t]);I[n]=e},t.submitTask=function(t,e){x(s.content,s.task),L(c,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(b=t.tasks||(t.tasks={})),t.getChatMembers=function(t){x();const e=L(c,"getChatMembers");I[e]=t}}(e.microsoftTeams||(e.microsoftTeams={}))}])});

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