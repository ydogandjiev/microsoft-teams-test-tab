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

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalVars = /** @class */ (function () {
    function GlobalVars() {
    }
    GlobalVars.initializeCalled = false;
    GlobalVars.initializeCompleted = false;
    GlobalVars.additionalValidOrigins = [];
    GlobalVars.additionalValidOriginsRegexp = null;
    GlobalVars.initializeCallbacks = [];
    GlobalVars.isFramelessWindow = false;
    GlobalVars.parentMessageQueue = [];
    GlobalVars.childMessageQueue = [];
    GlobalVars.nextMessageId = 0;
    GlobalVars.handlers = {};
    GlobalVars.callbacks = {};
    GlobalVars.printCapabilityEnabled = false;
    return GlobalVars;
}());
exports.GlobalVars = GlobalVars;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(4);
var globalVars_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(3);
// ::::::::::::::::::::MicrosoftTeams SDK Internal :::::::::::::::::
globalVars_1.GlobalVars.handlers['themeChange'] = handleThemeChange;
globalVars_1.GlobalVars.handlers['fullScreenChange'] = handleFullScreenChange;
globalVars_1.GlobalVars.handlers['backButtonPress'] = handleBackButtonPress;
globalVars_1.GlobalVars.handlers['load'] = handleLoad;
globalVars_1.GlobalVars.handlers['beforeUnload'] = handleBeforeUnload;
globalVars_1.GlobalVars.handlers['changeSettings'] = handleChangeSettings;
globalVars_1.GlobalVars.handlers['startConversation'] = handleStartConversation;
globalVars_1.GlobalVars.handlers['closeConversation'] = handleCloseConversation;
globalVars_1.GlobalVars.handlers['appButtonClick'] = handleAppButtonClick;
globalVars_1.GlobalVars.handlers['appButtonHoverEnter'] = handleAppButtonHoverEnter;
globalVars_1.GlobalVars.handlers['appButtonHoverLeave'] = handleAppButtonHoverLeave;
function handleStartConversation(subEntityId, conversationId, channelId, entityId) {
    if (globalVars_1.GlobalVars.onStartConversationHandler) {
        globalVars_1.GlobalVars.onStartConversationHandler({
            subEntityId: subEntityId,
            conversationId: conversationId,
            channelId: channelId,
            entityId: entityId,
        });
    }
}
function handleCloseConversation(subEntityId, conversationId, channelId, entityId) {
    if (globalVars_1.GlobalVars.onCloseConversationHandler) {
        globalVars_1.GlobalVars.onCloseConversationHandler({
            subEntityId: subEntityId,
            conversationId: conversationId,
            channelId: channelId,
            entityId: entityId,
        });
    }
}
function handleThemeChange(theme) {
    if (globalVars_1.GlobalVars.themeChangeHandler) {
        globalVars_1.GlobalVars.themeChangeHandler(theme);
    }
    if (globalVars_1.GlobalVars.childWindow) {
        sendMessageEventToChild('themeChange', [theme]);
    }
}
function handleFullScreenChange(isFullScreen) {
    if (globalVars_1.GlobalVars.fullScreenChangeHandler) {
        globalVars_1.GlobalVars.fullScreenChangeHandler(isFullScreen);
    }
}
function handleBackButtonPress() {
    if (!globalVars_1.GlobalVars.backButtonPressHandler || !globalVars_1.GlobalVars.backButtonPressHandler()) {
        navigation_1.navigateBack();
    }
}
function handleLoad(context) {
    if (globalVars_1.GlobalVars.loadHandler) {
        globalVars_1.GlobalVars.loadHandler(context);
    }
    if (globalVars_1.GlobalVars.childWindow) {
        sendMessageEventToChild('load', [context]);
    }
}
function handleBeforeUnload() {
    var readyToUnload = function () {
        sendMessageRequestToParent('readyToUnload', []);
    };
    if (!globalVars_1.GlobalVars.beforeUnloadHandler || !globalVars_1.GlobalVars.beforeUnloadHandler(readyToUnload)) {
        readyToUnload();
    }
}
function handleChangeSettings() {
    if (globalVars_1.GlobalVars.changeSettingsHandler) {
        globalVars_1.GlobalVars.changeSettingsHandler();
    }
}
function handleAppButtonClick() {
    if (globalVars_1.GlobalVars.appButtonClickHandler) {
        globalVars_1.GlobalVars.appButtonClickHandler();
    }
}
function handleAppButtonHoverEnter() {
    if (globalVars_1.GlobalVars.appButtonHoverEnterHandler) {
        globalVars_1.GlobalVars.appButtonHoverEnterHandler();
    }
}
function handleAppButtonHoverLeave() {
    if (globalVars_1.GlobalVars.appButtonHoverLeaveHandler) {
        globalVars_1.GlobalVars.appButtonHoverLeaveHandler();
    }
}
function ensureInitialized() {
    var expectedFrameContexts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        expectedFrameContexts[_i] = arguments[_i];
    }
    if (!globalVars_1.GlobalVars.initializeCalled) {
        throw new Error('The library has not yet been initialized');
    }
    if (globalVars_1.GlobalVars.frameContext && expectedFrameContexts && expectedFrameContexts.length > 0) {
        var found = false;
        for (var i = 0; i < expectedFrameContexts.length; i++) {
            if (expectedFrameContexts[i] === globalVars_1.GlobalVars.frameContext) {
                found = true;
                break;
            }
        }
        if (!found) {
            throw new Error("This call is not allowed in the '" + globalVars_1.GlobalVars.frameContext + "' context");
        }
    }
}
exports.ensureInitialized = ensureInitialized;
/**
 * Checks whether the platform has knowledge of this API by doing a comparison
 * on API required version and platform supported version of the SDK
 * @param requiredVersion SDK version required by the API
 */
function isAPISupportedByPlatform(requiredVersion) {
    if (requiredVersion === void 0) { requiredVersion = constants_1.defaultSDKVersionForCompatCheck; }
    var value = utils_1.compareSDKVersions(globalVars_1.GlobalVars.clientSupportedSDKVersion, requiredVersion);
    if (isNaN(value)) {
        return false;
    }
    return value >= 0;
}
exports.isAPISupportedByPlatform = isAPISupportedByPlatform;
function processMessage(evt) {
    // Process only if we received a valid message
    if (!evt || !evt.data || typeof evt.data !== 'object') {
        return;
    }
    // Process only if the message is coming from a different window and a valid origin
    // valid origins are either a pre-known
    var messageSource = evt.source || (evt.originalEvent && evt.originalEvent.source);
    var messageOrigin = evt.origin || (evt.originalEvent && evt.originalEvent.origin);
    if (!shouldProcessMessage(messageSource, messageOrigin)) {
        return;
    }
    // Update our parent and child relationships based on this message
    updateRelationships(messageSource, messageOrigin);
    // Handle the message
    if (messageSource === globalVars_1.GlobalVars.parentWindow) {
        handleParentMessage(evt);
    }
    else if (messageSource === globalVars_1.GlobalVars.childWindow) {
        handleChildMessage(evt);
    }
}
exports.processMessage = processMessage;
/**
 * Validates the message source and origin, if it should be processed
 */
function shouldProcessMessage(messageSource, messageOrigin) {
    // Process if message source is a different window and if origin is either in
    // Teams' pre-known whitelist or supplied as valid origin by user during initialization
    if (globalVars_1.GlobalVars.currentWindow && messageSource === globalVars_1.GlobalVars.currentWindow) {
        return false;
    }
    else if (globalVars_1.GlobalVars.currentWindow &&
        globalVars_1.GlobalVars.currentWindow.location &&
        messageOrigin &&
        messageOrigin === globalVars_1.GlobalVars.currentWindow.location.origin) {
        return true;
    }
    else if (constants_1.validOriginRegExp.test(messageOrigin.toLowerCase()) ||
        (globalVars_1.GlobalVars.additionalValidOriginsRegexp &&
            globalVars_1.GlobalVars.additionalValidOriginsRegexp.test(messageOrigin.toLowerCase()))) {
        return true;
    }
    return false;
}
function updateRelationships(messageSource, messageOrigin) {
    // Determine whether the source of the message is our parent or child and update our
    // window and origin pointer accordingly
    // For frameless windows (i.e mobile), there is no parent frame, so the message must be from the child.
    if (!globalVars_1.GlobalVars.isFramelessWindow &&
        (!globalVars_1.GlobalVars.parentWindow || globalVars_1.GlobalVars.parentWindow.closed || messageSource === globalVars_1.GlobalVars.parentWindow)) {
        globalVars_1.GlobalVars.parentWindow = messageSource;
        globalVars_1.GlobalVars.parentOrigin = messageOrigin;
    }
    else if (!globalVars_1.GlobalVars.childWindow || globalVars_1.GlobalVars.childWindow.closed || messageSource === globalVars_1.GlobalVars.childWindow) {
        globalVars_1.GlobalVars.childWindow = messageSource;
        globalVars_1.GlobalVars.childOrigin = messageOrigin;
    }
    // Clean up pointers to closed parent and child windows
    if (globalVars_1.GlobalVars.parentWindow && globalVars_1.GlobalVars.parentWindow.closed) {
        globalVars_1.GlobalVars.parentWindow = null;
        globalVars_1.GlobalVars.parentOrigin = null;
    }
    if (globalVars_1.GlobalVars.childWindow && globalVars_1.GlobalVars.childWindow.closed) {
        globalVars_1.GlobalVars.childWindow = null;
        globalVars_1.GlobalVars.childOrigin = null;
    }
    // If we have any messages in our queue, send them now
    flushMessageQueue(globalVars_1.GlobalVars.parentWindow);
    flushMessageQueue(globalVars_1.GlobalVars.childWindow);
}
function handleParentMessage(evt) {
    if ('id' in evt.data && typeof evt.data.id === 'number') {
        // Call any associated GlobalVars.callbacks
        var message = evt.data;
        var callback = globalVars_1.GlobalVars.callbacks[message.id];
        if (callback) {
            callback.apply(null, message.args);
            // Remove the callback to ensure that the callback is called only once and to free up memory if response is a complete response
            if (!isPartialResponse(evt)) {
                delete globalVars_1.GlobalVars.callbacks[message.id];
            }
        }
    }
    else if ('func' in evt.data && typeof evt.data.func === 'string') {
        // Delegate the request to the proper handler
        var message = evt.data;
        var handler = globalVars_1.GlobalVars.handlers[message.func];
        if (handler) {
            // We don't expect any handler to respond at this point
            handler.apply(this, message.args);
        }
    }
}
exports.handleParentMessage = handleParentMessage;
function isPartialResponse(evt) {
    return evt.data.isPartialResponse === true;
}
function handleChildMessage(evt) {
    if ('id' in evt.data && 'func' in evt.data) {
        // Try to delegate the request to the proper handler, if defined
        var message_1 = evt.data;
        var handler = message_1.func ? globalVars_1.GlobalVars.handlers[message_1.func] : null;
        if (handler) {
            var result = handler.apply(this, message_1.args);
            if (typeof result !== 'undefined') {
                sendMessageResponseToChild(message_1.id, Array.isArray(result) ? result : [result]);
            }
        }
        else {
            // No handler, proxy to parent
            var messageId = sendMessageRequestToParent(message_1.func, message_1.args);
            // tslint:disable-next-line:no-any
            globalVars_1.GlobalVars.callbacks[messageId] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (globalVars_1.GlobalVars.childWindow) {
                    sendMessageResponseToChild(message_1.id, args);
                }
            };
        }
    }
}
/**
 * Processes the valid origins specifuied by the user, de-duplicates and converts them into a regexp
 * which is used later for message source/origin validation
 */
function processAdditionalValidOrigins(validMessageOrigins) {
    var combinedOriginUrls = globalVars_1.GlobalVars.additionalValidOrigins.concat(validMessageOrigins.filter(function (_origin) {
        return typeof _origin === 'string' && constants_1.userOriginUrlValidationRegExp.test(_origin);
    }));
    var dedupUrls = {};
    combinedOriginUrls = combinedOriginUrls.filter(function (_originUrl) {
        if (dedupUrls[_originUrl]) {
            return false;
        }
        dedupUrls[_originUrl] = true;
        return true;
    });
    globalVars_1.GlobalVars.additionalValidOrigins = combinedOriginUrls;
    if (globalVars_1.GlobalVars.additionalValidOrigins.length > 0) {
        globalVars_1.GlobalVars.additionalValidOriginsRegexp = utils_1.generateRegExpFromUrls(globalVars_1.GlobalVars.additionalValidOrigins);
    }
    else {
        globalVars_1.GlobalVars.additionalValidOriginsRegexp = null;
    }
}
exports.processAdditionalValidOrigins = processAdditionalValidOrigins;
function getTargetMessageQueue(targetWindow) {
    return targetWindow === globalVars_1.GlobalVars.parentWindow
        ? globalVars_1.GlobalVars.parentMessageQueue
        : targetWindow === globalVars_1.GlobalVars.childWindow
            ? globalVars_1.GlobalVars.childMessageQueue
            : [];
}
function getTargetOrigin(targetWindow) {
    return targetWindow === globalVars_1.GlobalVars.parentWindow
        ? globalVars_1.GlobalVars.parentOrigin
        : targetWindow === globalVars_1.GlobalVars.childWindow
            ? globalVars_1.GlobalVars.childOrigin
            : null;
}
function flushMessageQueue(targetWindow) {
    var targetOrigin = getTargetOrigin(targetWindow);
    var targetMessageQueue = getTargetMessageQueue(targetWindow);
    while (targetWindow && targetOrigin && targetMessageQueue.length > 0) {
        targetWindow.postMessage(targetMessageQueue.shift(), targetOrigin);
    }
}
function waitForMessageQueue(targetWindow, callback) {
    var messageQueueMonitor = globalVars_1.GlobalVars.currentWindow.setInterval(function () {
        if (getTargetMessageQueue(targetWindow).length === 0) {
            clearInterval(messageQueueMonitor);
            callback();
        }
    }, 100);
}
exports.waitForMessageQueue = waitForMessageQueue;
/**
 * Send a message to parent. Uses nativeInterface on mobile to communicate with parent context
 */
function sendMessageRequestToParent(actionName, 
// tslint:disable-next-line: no-any
args) {
    var targetWindow = globalVars_1.GlobalVars.parentWindow;
    var utcTime = getUtcTime();
    var request = createMessageRequest(actionName, args, utcTime);
    if (globalVars_1.GlobalVars.isFramelessWindow) {
        if (globalVars_1.GlobalVars.currentWindow && globalVars_1.GlobalVars.currentWindow.nativeInterface) {
            globalVars_1.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(request));
        }
    }
    else {
        var targetOrigin_1 = getTargetOrigin(targetWindow);
        setTimeout(function () {
            // If the target window isn't closed and we already know its origin, send the message right away; otherwise,
            // queue the message and send it after the origin is established
            if (targetWindow && targetOrigin_1) {
                targetWindow.postMessage(request, targetOrigin_1);
            }
            else {
                getTargetMessageQueue(targetWindow).push(request);
            }
        }, 5000);
    }
    return request.id;
}
exports.sendMessageRequestToParent = sendMessageRequestToParent;
/**
 * Send a response to child for a message request that was from child
 */
function sendMessageResponseToChild(id, 
// tslint:disable-next-line:no-any
args) {
    var targetWindow = globalVars_1.GlobalVars.childWindow;
    var response = createMessageResponse(id, args);
    var targetOrigin = getTargetOrigin(targetWindow);
    if (targetWindow && targetOrigin) {
        targetWindow.postMessage(response, targetOrigin);
    }
}
/**
 * Send a custom message object that can be sent to child window,
 * instead of a response message to a child
 */
function sendMessageEventToChild(actionName, 
// tslint:disable-next-line: no-any
args) {
    var targetWindow = globalVars_1.GlobalVars.childWindow;
    var customEvent = createMessageEvent(actionName, args);
    var targetOrigin = getTargetOrigin(targetWindow);
    // If the target window isn't closed and we already know its origin, send the message right away; otherwise,
    // queue the message and send it after the origin is established
    if (targetWindow && targetOrigin) {
        targetWindow.postMessage(customEvent, targetOrigin);
    }
    else {
        getTargetMessageQueue(targetWindow).push(customEvent);
    }
}
exports.sendMessageEventToChild = sendMessageEventToChild;
// tslint:disable-next-line:no-any
function createMessageRequest(func, args, utcTime) {
    return {
        id: globalVars_1.GlobalVars.nextMessageId++,
        func: func,
        args: args || [],
        utcTime: utcTime || getUtcTime(),
    };
}
function getUtcTime() {
    var x = new Date();
    var UTCMilliseconds = x.getTime() + x.getTimezoneOffset() * 60 * 1000;
    return UTCMilliseconds;
}
// tslint:disable-next-line:no-any
function createMessageResponse(id, args) {
    return {
        id: id,
        args: args || [],
    };
}
/**
 * Creates a message object without any id, used for custom actions being sent to child frame/window
 */
// tslint:disable-next-line:no-any
function createMessageEvent(func, args) {
    return {
        func: func,
        args: args || [],
    };
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HostClientType;
(function (HostClientType) {
    HostClientType["desktop"] = "desktop";
    HostClientType["web"] = "web";
    HostClientType["android"] = "android";
    HostClientType["ios"] = "ios";
    HostClientType["rigel"] = "rigel";
})(HostClientType = exports.HostClientType || (exports.HostClientType = {}));
// Ensure these declarations stay in sync with the framework.
var FrameContexts;
(function (FrameContexts) {
    FrameContexts["settings"] = "settings";
    FrameContexts["content"] = "content";
    FrameContexts["authentication"] = "authentication";
    FrameContexts["remove"] = "remove";
    FrameContexts["task"] = "task";
    FrameContexts["sidePanel"] = "sidePanel";
    FrameContexts["stage"] = "stage";
})(FrameContexts = exports.FrameContexts || (exports.FrameContexts = {}));
/**
 * Indicates the team type, currently used to distinguish between different team
 * types in Office 365 for Education (team types 1, 2, 3, and 4).
 */
var TeamType;
(function (TeamType) {
    TeamType[TeamType["Standard"] = 0] = "Standard";
    TeamType[TeamType["Edu"] = 1] = "Edu";
    TeamType[TeamType["Class"] = 2] = "Class";
    TeamType[TeamType["Plc"] = 3] = "Plc";
    TeamType[TeamType["Staff"] = 4] = "Staff";
})(TeamType = exports.TeamType || (exports.TeamType = {}));
/**
 * Indicates the various types of roles of a user in a team.
 */
var UserTeamRole;
(function (UserTeamRole) {
    UserTeamRole[UserTeamRole["Admin"] = 0] = "Admin";
    UserTeamRole[UserTeamRole["User"] = 1] = "User";
    UserTeamRole[UserTeamRole["Guest"] = 2] = "Guest";
})(UserTeamRole = exports.UserTeamRole || (exports.UserTeamRole = {}));
/**
 * Task module dimension enum
 */
var TaskModuleDimension;
(function (TaskModuleDimension) {
    TaskModuleDimension["Large"] = "large";
    TaskModuleDimension["Medium"] = "medium";
    TaskModuleDimension["Small"] = "small";
})(TaskModuleDimension = exports.TaskModuleDimension || (exports.TaskModuleDimension = {}));
/**
 * The type of the channel with which the content is associated.
 */
var ChannelType;
(function (ChannelType) {
    ChannelType["Regular"] = "Regular";
    ChannelType["Private"] = "Private";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uuid = __webpack_require__(16);
// This will return a reg expression a given url
function generateRegExpFromUrl(url) {
    var urlRegExpPart = '^';
    var urlParts = url.split('.');
    for (var j = 0; j < urlParts.length; j++) {
        urlRegExpPart += (j > 0 ? '[.]' : '') + urlParts[j].replace('*', '[^/^.]+');
    }
    urlRegExpPart += '$';
    return urlRegExpPart;
}
// This will return a reg expression for list of url
function generateRegExpFromUrls(urls) {
    var urlRegExp = '';
    for (var i = 0; i < urls.length; i++) {
        urlRegExp += (i === 0 ? '' : '|') + generateRegExpFromUrl(urls[i]);
    }
    return new RegExp(urlRegExp);
}
exports.generateRegExpFromUrls = generateRegExpFromUrls;
function getGenericOnCompleteHandler(errorMessage) {
    return function (success, reason) {
        if (!success) {
            throw new Error(errorMessage ? errorMessage : reason);
        }
    };
}
exports.getGenericOnCompleteHandler = getGenericOnCompleteHandler;
/**
 * Compares SDK versions.
 * @param v1 first version
 * @param v2 second version
 * returns NaN in case inputs are not in right format
 *         -1 if v1 < v2
 *          1 if v1 > v2
 *          0 otherwise
 * For example,
 *    compareSDKVersions('1.2', '1.2.0') returns 0
 *    compareSDKVersions('1.2a', '1.2b') returns NaN
 *    compareSDKVersions('1.2', '1.3') returns -1
 *    compareSDKVersions('2.0', '1.3.2') returns 1
 *    compareSDKVersions('2.0', 2.0) returns NaN
 */
function compareSDKVersions(v1, v2) {
    if (typeof v1 !== 'string' || typeof v2 !== 'string') {
        return NaN;
    }
    var v1parts = v1.split('.');
    var v2parts = v2.split('.');
    function isValidPart(x) {
        // input has to have one or more digits
        // For ex - returns true for '11', false for '1a1', false for 'a', false for '2b'
        return /^\d+$/.test(x);
    }
    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
        return NaN;
    }
    // Make length of both parts equal
    while (v1parts.length < v2parts.length) {
        v1parts.push('0');
    }
    while (v2parts.length < v1parts.length) {
        v2parts.push('0');
    }
    for (var i = 0; i < v1parts.length; ++i) {
        if (v1parts[i] == v2parts[i]) {
            continue;
        }
        else if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        else {
            return -1;
        }
    }
    return 0;
}
exports.compareSDKVersions = compareSDKVersions;
/**
 * Generates a GUID
 */
function generateGUID() {
    return uuid.v4();
}
exports.generateGUID = generateGUID;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
exports.version = '1.7.0';
/**
 * This is the SDK version when all SDK APIs started to check platform compatibility for the APIs.
 */
exports.defaultSDKVersionForCompatCheck = '1.6.0';
/**
 * List of supported Host origins
 */
exports.validOrigins = [
    'https://teams.microsoft.com',
    'https://teams.microsoft.us',
    'https://gov.teams.microsoft.us',
    'https://dod.teams.microsoft.us',
    'https://int.teams.microsoft.com',
    'https://devspaces.skype.com',
    'https://ssauth.skype.com',
    'https://local.teams.office.com',
    'https://local.teams.office.com:8080',
    'https://msft.spoppe.com',
    'https://*.sharepoint.com',
    'https://*.sharepoint-df.com',
    'https://*.sharepointonline.com',
    'https://outlook.office.com',
    'https://outlook-sdf.office.com',
    'https://*.teams.microsoft.com',
    'https://www.office.com',
    'https://word.office.com',
    'https://excel.office.com',
    'https://powerpoint.office.com',
    'https://www.officeppe.com',
    'https://*.www.office.com',
    'http://127.0.0.1:5000',
];
exports.validOriginRegExp = utils_1.generateRegExpFromUrls(exports.validOrigins);
/**
 * USer specified message origins should satisfy this test
 */
exports.userOriginUrlValidationRegExp = /^https\:\/\//;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    /**
     * API not supported in the current platform.
     */
    ErrorCode[ErrorCode["NOT_SUPPORTED_ON_PLATFORM"] = 100] = "NOT_SUPPORTED_ON_PLATFORM";
    /**
     * Internal error encountered while performing the required operation.
     */
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
    /**
    Permissions denied by user
    */
    ErrorCode[ErrorCode["PERMISSION_DENIED"] = 1000] = "PERMISSION_DENIED";
    /**
     * Network issue
     */
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 2000] = "NETWORK_ERROR";
    /**
     * Underlying hardware doesn't support the capability
     */
    ErrorCode[ErrorCode["NO_HW_SUPPORT"] = 3000] = "NO_HW_SUPPORT";
    /**
     * One or more arguments are invalid
     */
    ErrorCode[ErrorCode["INVALID_ARGUMENTS"] = 4000] = "INVALID_ARGUMENTS";
    /**
     * User is not authorized for this operation
     */
    ErrorCode[ErrorCode["UNAUTHORIZED_USER_OPERATION"] = 5000] = "UNAUTHORIZED_USER_OPERATION";
    /**
     * Could not complete the operation due to insufficient resources
     */
    ErrorCode[ErrorCode["INSUFFICIENT_RESOURCES"] = 6000] = "INSUFFICIENT_RESOURCES";
    /**
     * Platform throttled the request because of API was invoked too frequently
     */
    ErrorCode[ErrorCode["THROTTLE"] = 7000] = "THROTTLE";
    /**
     * User aborted the operation
     */
    ErrorCode[ErrorCode["USER_ABORT"] = 8000] = "USER_ABORT";
    /**
     * Could not complete the operation in the given time interval
     */
    ErrorCode[ErrorCode["OPERATION_TIMED_OUT"] = 8001] = "OPERATION_TIMED_OUT";
    /**
     * Platform code is old and doesn't implement this API
     */
    ErrorCode[ErrorCode["OLD_PLATFORM"] = 9000] = "OLD_PLATFORM";
    /**
     * The file specified was not found on the given location
     */
    ErrorCode[ErrorCode["FILE_NOT_FOUND"] = 404] = "FILE_NOT_FOUND";
    /**
     * The return value is too big and has exceeded our size boundries
     */
    ErrorCode[ErrorCode["SIZE_EXCEEDED"] = 10000] = "SIZE_EXCEEDED";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(3);
var constants_1 = __webpack_require__(2);
/**
 * Navigation specific part of the SDK.
 */
/**
 * Return focus to the main Teams app. Will focus search bar if navigating foward and app bar if navigating back.
 * @param navigateForward Determines the direction to focus in teams app.
 */
function returnFocus(navigateForward) {
    internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
    internalAPIs_1.sendMessageRequestToParent('returnFocus', [navigateForward]);
}
exports.returnFocus = returnFocus;
/**
 * Navigates the Microsoft Teams app to the specified tab instance.
 * @param tabInstance The tab instance to navigate to.
 */
function navigateToTab(tabInstance, onComplete) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('navigateToTab', [tabInstance]);
    var errorMessage = 'Invalid internalTabInstanceId and/or channelId were/was provided';
    globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler(errorMessage);
}
exports.navigateToTab = navigateToTab;
/**
 * Navigates the frame to a new cross-domain URL. The domain of this URL must match at least one of the
 * valid domains specified in the validDomains block of the manifest; otherwise, an exception will be
 * thrown. This function needs to be used only when navigating the frame to a URL in a different domain
 * than the current one in a way that keeps the app informed of the change and allows the SDK to
 * continue working.
 * @param url The URL to navigate the frame to.
 */
function navigateCrossDomain(url, onComplete) {
    internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.sidePanel, constants_1.FrameContexts.settings, constants_1.FrameContexts.remove, constants_1.FrameContexts.task, constants_1.FrameContexts.stage);
    var messageId = internalAPIs_1.sendMessageRequestToParent('navigateCrossDomain', [url]);
    var errorMessage = 'Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.';
    globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler(errorMessage);
}
exports.navigateCrossDomain = navigateCrossDomain;
/**
 * Navigates back in the Teams client. See registerBackButtonHandler for more information on when
 * it's appropriate to use this method.
 */
function navigateBack(onComplete) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('navigateBack', []);
    var errorMessage = 'Back navigation is not supported in the current client or context.';
    globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler(errorMessage);
}
exports.navigateBack = navigateBack;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
/**
 * Namespace to interact with the logging part of the SDK.
 * This object is used to send the app logs on demand to the host client
 *
 * @private
 * Hide from docs
 */
var logs;
(function (logs) {
    globalVars_1.GlobalVars.handlers['log.request'] = handleGetLogRequest;
    function handleGetLogRequest() {
        if (globalVars_1.GlobalVars.getLogHandler) {
            var log = globalVars_1.GlobalVars.getLogHandler();
            internalAPIs_1.sendMessageRequestToParent('log.receive', [log]);
        }
    }
    /**
     * @private
     * Hide from docs
     * ------
     * Registers a handler for getting app log
     * @param handler The handler to invoke to get the app log
     */
    function registerGetLogHandler(handler) {
        internalAPIs_1.ensureInitialized();
        globalVars_1.GlobalVars.getLogHandler = handler;
        handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['log.request']);
    }
    logs.registerGetLogHandler = registerGetLogHandler;
})(logs = exports.logs || (exports.logs = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(3);
/**
 * Namespace to interact with the settings-specific part of the SDK.
 * This object is usable only on the settings frame.
 */
var settings;
(function (settings) {
    var saveHandler;
    var removeHandler;
    globalVars_1.GlobalVars.handlers['settings.save'] = handleSave;
    globalVars_1.GlobalVars.handlers['settings.remove'] = handleRemove;
    /**
     * Sets the validity state for the settings.
     * The initial value is false, so the user cannot save the settings until this is called with true.
     * @param validityState Indicates whether the save or remove button is enabled for the user.
     */
    function setValidityState(validityState) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.settings, constants_1.FrameContexts.remove);
        internalAPIs_1.sendMessageRequestToParent('settings.setValidityState', [validityState]);
    }
    settings.setValidityState = setValidityState;
    /**
     * Gets the settings for the current instance.
     * @param callback The callback to invoke when the {@link Settings} object is retrieved.
     */
    function getSettings(callback) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.settings, constants_1.FrameContexts.remove);
        var messageId = internalAPIs_1.sendMessageRequestToParent('settings.getSettings');
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    settings.getSettings = getSettings;
    /**
     * Sets the settings for the current instance.
     * This is an asynchronous operation; calls to getSettings are not guaranteed to reflect the changed state.
     * @param settings The desired settings for this instance.
     */
    function setSettings(instanceSettings, onComplete) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.settings);
        var messageId = internalAPIs_1.sendMessageRequestToParent('settings.setSettings', [instanceSettings]);
        globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler();
    }
    settings.setSettings = setSettings;
    /**
     * Registers a handler for when the user attempts to save the settings. This handler should be used
     * to create or update the underlying resource powering the content.
     * The object passed to the handler must be used to notify whether to proceed with the save.
     * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
     * @param handler The handler to invoke when the user selects the save button.
     */
    function registerOnSaveHandler(handler) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.settings);
        saveHandler = handler;
        handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['save']);
    }
    settings.registerOnSaveHandler = registerOnSaveHandler;
    /**
     * Registers a handler for user attempts to remove content. This handler should be used
     * to remove the underlying resource powering the content.
     * The object passed to the handler must be used to indicate whether to proceed with the removal.
     * Only one handler may be registered at a time. Subsequent registrations will override the first.
     * @param handler The handler to invoke when the user selects the remove button.
     */
    function registerOnRemoveHandler(handler) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.remove);
        removeHandler = handler;
        handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['remove']);
    }
    settings.registerOnRemoveHandler = registerOnRemoveHandler;
    function handleSave(result) {
        var saveEvent = new SaveEventImpl(result);
        if (saveHandler) {
            saveHandler(saveEvent);
        }
        else {
            // If no handler is registered, we assume success.
            saveEvent.notifySuccess();
        }
    }
    /**
     * @private
     * Hide from docs, since this class is not directly used.
     */
    var SaveEventImpl = /** @class */ (function () {
        function SaveEventImpl(result) {
            this.notified = false;
            this.result = result ? result : {};
        }
        SaveEventImpl.prototype.notifySuccess = function () {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequestToParent('settings.save.success');
            this.notified = true;
        };
        SaveEventImpl.prototype.notifyFailure = function (reason) {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequestToParent('settings.save.failure', [reason]);
            this.notified = true;
        };
        SaveEventImpl.prototype.ensureNotNotified = function () {
            if (this.notified) {
                throw new Error('The SaveEvent may only notify success or failure once.');
            }
        };
        return SaveEventImpl;
    }());
    function handleRemove() {
        var removeEvent = new RemoveEventImpl();
        if (removeHandler) {
            removeHandler(removeEvent);
        }
        else {
            // If no handler is registered, we assume success.
            removeEvent.notifySuccess();
        }
    }
    /**
     * @private
     * Hide from docs, since this class is not directly used.
     */
    var RemoveEventImpl = /** @class */ (function () {
        function RemoveEventImpl() {
            this.notified = false;
        }
        RemoveEventImpl.prototype.notifySuccess = function () {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequestToParent('settings.remove.success');
            this.notified = true;
        };
        RemoveEventImpl.prototype.notifyFailure = function (reason) {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequestToParent('settings.remove.failure', [reason]);
            this.notified = true;
        };
        RemoveEventImpl.prototype.ensureNotNotified = function () {
            if (this.notified) {
                throw new Error('The removeEvent may only notify success or failure once.');
            }
        };
        return RemoveEventImpl;
    }());
})(settings = exports.settings || (exports.settings = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(3);
var ChildAppWindow = /** @class */ (function () {
    function ChildAppWindow() {
    }
    ChildAppWindow.prototype.postMessage = function (message, onComplete) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('messageForChild', [message]);
        globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler();
    };
    ChildAppWindow.prototype.addEventListener = function (type, listener) {
        if (type === 'message') {
            globalVars_1.GlobalVars.handlers['messageForParent'] = listener;
        }
    };
    return ChildAppWindow;
}());
exports.ChildAppWindow = ChildAppWindow;
var ParentAppWindow = /** @class */ (function () {
    function ParentAppWindow() {
    }
    Object.defineProperty(ParentAppWindow, "Instance", {
        get: function () {
            // Do you need arguments? Make it a regular method instead.
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    ParentAppWindow.prototype.postMessage = function (message, onComplete) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.task);
        var messageId = internalAPIs_1.sendMessageRequestToParent('messageForParent', [message]);
        globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler();
    };
    ParentAppWindow.prototype.addEventListener = function (type, listener) {
        if (type === 'message') {
            globalVars_1.GlobalVars.handlers['messageForChild'] = listener;
        }
    };
    return ParentAppWindow;
}());
exports.ParentAppWindow = ParentAppWindow;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var globalVars_1 = __webpack_require__(0);
var interfaces_1 = __webpack_require__(5);
var internalAPIs_1 = __webpack_require__(1);
var constants_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(3);
var mediaUtil_1 = __webpack_require__(29);
var media;
(function (media) {
    /**
     * This is the SDK version when captureImage API is supported on mobile.
     */
    var captureImageMobileSupportVersion = '1.7.0';
    /**
     * This is the SDK version when media APIs is supported on all three platforms ios, android and web.
     */
    var mediaAPISupportVersion = '1.8.0';
    /**
     * This is the SDK version when getMedia API is supported via Callbacks on all three platforms ios, android and web.
     */
    var getMediaCallbackSupportVersion = '2.0.0';
    /**
     * This is the SDK version when scanBarCode API is supported on mobile.
     */
    var scanBarCodeAPIMobileSupportVersion = '1.9.0';
    /**
     * Enum for file formats supported
     */
    var FileFormat;
    (function (FileFormat) {
        FileFormat["Base64"] = "base64";
        FileFormat["ID"] = "id";
    })(FileFormat = media.FileFormat || (media.FileFormat = {}));
    /**
     * File object that can be used to represent image or video or audio
     */
    var File = /** @class */ (function () {
        function File() {
        }
        return File;
    }());
    media.File = File;
    /**
     * Launch camera, capture image or choose image from gallery and return the images as a File[] object to the callback.
     * Callback will be called with an error, if there are any. App should first check the error.
     * If it is present the user can be updated with appropriate error message.
     * If error is null or undefined, then files will have the required result.
     * Note: Currently we support getting one File through this API, i.e. the file arrays size will be one.
     * Note: For desktop, this API is not supported. Callback will be resolved with ErrorCode.NotSupported.
     * @see File
     * @see SdkError
     */
    function captureImage(callback) {
        if (!callback) {
            throw new Error('[captureImage] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
        if (!globalVars_1.GlobalVars.isFramelessWindow) {
            var notSupportedError = { errorCode: interfaces_1.ErrorCode.NOT_SUPPORTED_ON_PLATFORM };
            callback(notSupportedError, undefined);
            return;
        }
        if (!internalAPIs_1.isAPISupportedByPlatform(captureImageMobileSupportVersion)) {
            var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
            callback(oldPlatformError, undefined);
            return;
        }
        var messageId = internalAPIs_1.sendMessageRequestToParent('captureImage');
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    media.captureImage = captureImage;
    /**
     * Media object returned by the select Media API
     */
    var Media = /** @class */ (function (_super) {
        __extends(Media, _super);
        function Media(that) {
            if (that === void 0) { that = null; }
            var _this = _super.call(this) || this;
            if (that) {
                _this.content = that.content;
                _this.format = that.format;
                _this.mimeType = that.mimeType;
                _this.name = that.name;
                _this.preview = that.preview;
                _this.size = that.size;
            }
            return _this;
        }
        /**
         * Gets the media in chunks irrespecitve of size, these chunks are assembled and sent back to the webapp as file/blob
         * @param callback returns blob of media
         */
        Media.prototype.getMedia = function (callback) {
            if (!callback) {
                throw new Error('[get Media] Callback cannot be null');
            }
            internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
            if (!internalAPIs_1.isAPISupportedByPlatform(mediaAPISupportVersion)) {
                var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
                callback(oldPlatformError, null);
                return;
            }
            if (!mediaUtil_1.validateGetMediaInputs(this.mimeType, this.format, this.content)) {
                var invalidInput = { errorCode: interfaces_1.ErrorCode.INVALID_ARGUMENTS };
                callback(invalidInput, null);
                return;
            }
            // Call the new get media implementation via callbacks if the client version is greater than or equal to '2.0.0'
            if (internalAPIs_1.isAPISupportedByPlatform(getMediaCallbackSupportVersion)) {
                this.getMediaViaCallback(callback);
            }
            else {
                this.getMediaViaHandler(callback);
            }
        };
        Media.prototype.getMediaViaCallback = function (callback) {
            var helper = {
                mediaMimeType: this.mimeType,
                assembleAttachment: [],
            };
            var localUriId = [this.content];
            var messageId = internalAPIs_1.sendMessageRequestToParent('getMedia', localUriId);
            function handleGetMediaCallbackRequest(mediaResult) {
                if (callback) {
                    if (mediaResult && mediaResult.error) {
                        callback(mediaResult.error, null);
                    }
                    else {
                        if (mediaResult && mediaResult.mediaChunk) {
                            // If the chunksequence number is less than equal to 0 implies EOF
                            // create file/blob when all chunks have arrived and we get 0/-1 as chunksequence number
                            if (mediaResult.mediaChunk.chunkSequence <= 0) {
                                var file = mediaUtil_1.createFile(helper.assembleAttachment, helper.mediaMimeType);
                                callback(mediaResult.error, file);
                            }
                            else {
                                // Keep pushing chunks into assemble attachment
                                var assemble = mediaUtil_1.decodeAttachment(mediaResult.mediaChunk, helper.mediaMimeType);
                                helper.assembleAttachment.push(assemble);
                            }
                        }
                        else {
                            callback({ errorCode: interfaces_1.ErrorCode.INTERNAL_ERROR, message: 'data receieved is null' }, null);
                        }
                    }
                }
            }
            globalVars_1.GlobalVars.callbacks[messageId] = handleGetMediaCallbackRequest;
        };
        Media.prototype.getMediaViaHandler = function (callback) {
            var actionName = utils_1.generateGUID();
            var helper = {
                mediaMimeType: this.mimeType,
                assembleAttachment: [],
            };
            var params = [actionName, this.content];
            this.content && callback && internalAPIs_1.sendMessageRequestToParent('getMedia', params);
            function handleGetMediaRequest(response) {
                if (callback) {
                    var mediaResult = JSON.parse(response);
                    if (mediaResult.error) {
                        callback(mediaResult.error, null);
                        delete globalVars_1.GlobalVars.handlers['getMedia' + actionName];
                    }
                    else {
                        if (mediaResult.mediaChunk) {
                            // If the chunksequence number is less than equal to 0 implies EOF
                            // create file/blob when all chunks have arrived and we get 0/-1 as chunksequence number
                            if (mediaResult.mediaChunk.chunkSequence <= 0) {
                                var file = mediaUtil_1.createFile(helper.assembleAttachment, helper.mediaMimeType);
                                callback(mediaResult.error, file);
                                delete globalVars_1.GlobalVars.handlers['getMedia' + actionName];
                            }
                            else {
                                // Keep pushing chunks into assemble attachment
                                var assemble = mediaUtil_1.decodeAttachment(mediaResult.mediaChunk, helper.mediaMimeType);
                                helper.assembleAttachment.push(assemble);
                            }
                        }
                        else {
                            callback({ errorCode: interfaces_1.ErrorCode.INTERNAL_ERROR, message: 'data receieved is null' }, null);
                            delete globalVars_1.GlobalVars.handlers['getMedia' + actionName];
                        }
                    }
                }
            }
            globalVars_1.GlobalVars.handlers['getMedia' + actionName] = handleGetMediaRequest;
        };
        return Media;
    }(File));
    media.Media = Media;
    /**
     * The modes in which camera can be launched in select Media API
     */
    var CameraStartMode;
    (function (CameraStartMode) {
        CameraStartMode[CameraStartMode["Photo"] = 1] = "Photo";
        CameraStartMode[CameraStartMode["Document"] = 2] = "Document";
        CameraStartMode[CameraStartMode["Whiteboard"] = 3] = "Whiteboard";
        CameraStartMode[CameraStartMode["BusinessCard"] = 4] = "BusinessCard";
    })(CameraStartMode = media.CameraStartMode || (media.CameraStartMode = {}));
    /**
     * Specifies the image source
     */
    var Source;
    (function (Source) {
        Source[Source["Camera"] = 1] = "Camera";
        Source[Source["Gallery"] = 2] = "Gallery";
    })(Source = media.Source || (media.Source = {}));
    /**
     * Specifies the type of Media
     */
    var MediaType;
    (function (MediaType) {
        MediaType[MediaType["Image"] = 1] = "Image";
        // Video = 2, // Not implemented yet
        // ImageOrVideo = 3, // Not implemented yet
        MediaType[MediaType["Audio"] = 4] = "Audio";
    })(MediaType = media.MediaType || (media.MediaType = {}));
    /**
     * ID contains a mapping for content uri on platform's side, URL is generic
     */
    var ImageUriType;
    (function (ImageUriType) {
        ImageUriType[ImageUriType["ID"] = 1] = "ID";
        ImageUriType[ImageUriType["URL"] = 2] = "URL";
    })(ImageUriType = media.ImageUriType || (media.ImageUriType = {}));
    /**
     * Select an attachment using camera/gallery
     * @param mediaInputs The input params to customize the media to be selected
     * @param callback The callback to invoke after fetching the media
     */
    function selectMedia(mediaInputs, callback) {
        if (!callback) {
            throw new Error('[select Media] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
        if (!internalAPIs_1.isAPISupportedByPlatform(mediaAPISupportVersion)) {
            var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
            callback(oldPlatformError, null);
            return;
        }
        if (!mediaUtil_1.validateSelectMediaInputs(mediaInputs)) {
            var invalidInput = { errorCode: interfaces_1.ErrorCode.INVALID_ARGUMENTS };
            callback(invalidInput, null);
            return;
        }
        var params = [mediaInputs];
        var messageId = internalAPIs_1.sendMessageRequestToParent('selectMedia', params);
        // What comes back from native at attachments would just be objects and will be missing getMedia method on them.
        globalVars_1.GlobalVars.callbacks[messageId] = function (err, localAttachments) {
            if (!localAttachments) {
                callback(err, null);
                return;
            }
            var mediaArray = [];
            for (var _i = 0, localAttachments_1 = localAttachments; _i < localAttachments_1.length; _i++) {
                var attachment = localAttachments_1[_i];
                mediaArray.push(new Media(attachment));
            }
            callback(err, mediaArray);
        };
    }
    media.selectMedia = selectMedia;
    /**
     * View images using native image viewer
     * @param uriList urilist of images to be viewed - can be content uri or server url. supports upto 10 Images in one go
     * @param callback returns back error if encountered, returns null in case of success
     */
    function viewImages(uriList, callback) {
        if (!callback) {
            throw new Error('[view images] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
        if (!internalAPIs_1.isAPISupportedByPlatform(mediaAPISupportVersion)) {
            var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
            callback(oldPlatformError);
            return;
        }
        if (!mediaUtil_1.validateViewImagesInput(uriList)) {
            var invalidInput = { errorCode: interfaces_1.ErrorCode.INVALID_ARGUMENTS };
            callback(invalidInput);
            return;
        }
        var params = [uriList];
        var messageId = internalAPIs_1.sendMessageRequestToParent('viewImages', params);
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    media.viewImages = viewImages;
    /**
     * Scan Barcode/QRcode using camera
     * Note: For desktop and web, this API is not supported. Callback will be resolved with ErrorCode.NotSupported.
     * @param callback callback to invoke after scanning the barcode
     * @param config optional input configuration to customize the barcode scanning experience
     */
    function scanBarCode(callback, config) {
        if (!callback) {
            throw new Error('[media.scanBarCode] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
        if (globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.desktop ||
            globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.web ||
            globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.rigel) {
            var notSupportedError = { errorCode: interfaces_1.ErrorCode.NOT_SUPPORTED_ON_PLATFORM };
            callback(notSupportedError, null);
            return;
        }
        if (!internalAPIs_1.isAPISupportedByPlatform(scanBarCodeAPIMobileSupportVersion)) {
            var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
            callback(oldPlatformError, null);
            return;
        }
        if (!mediaUtil_1.validateScanBarCodeInput(config)) {
            var invalidInput = { errorCode: interfaces_1.ErrorCode.INVALID_ARGUMENTS };
            callback(invalidInput, null);
            return;
        }
        var messageId = internalAPIs_1.sendMessageRequestToParent('media.scanBarCode', [config]);
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    media.scanBarCode = scanBarCode;
})(media = exports.media || (exports.media = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));
__export(__webpack_require__(24));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = __webpack_require__(15);
exports.bot = bot_1.bot;
var menus_1 = __webpack_require__(19);
exports.menus = menus_1.menus;
var logs_1 = __webpack_require__(9);
exports.logs = logs_1.logs;
var interfaces_1 = __webpack_require__(20);
exports.NotificationTypes = interfaces_1.NotificationTypes;
exports.ViewerActionTypes = interfaces_1.ViewerActionTypes;
var privateAPIs_1 = __webpack_require__(21);
exports.enterFullscreen = privateAPIs_1.enterFullscreen;
exports.exitFullscreen = privateAPIs_1.exitFullscreen;
exports.getChatMembers = privateAPIs_1.getChatMembers;
exports.getConfigSetting = privateAPIs_1.getConfigSetting;
exports.getUserJoinedTeams = privateAPIs_1.getUserJoinedTeams;
exports.openFilePreview = privateAPIs_1.openFilePreview;
exports.sendCustomMessage = privateAPIs_1.sendCustomMessage;
exports.showNotification = privateAPIs_1.showNotification;
exports.sendCustomEvent = privateAPIs_1.sendCustomEvent;
exports.registerCustomHandler = privateAPIs_1.registerCustomHandler;
exports.uploadCustomApp = privateAPIs_1.uploadCustomApp;
var conversations_1 = __webpack_require__(22);
exports.conversations = conversations_1.conversations;
var meetingRoom_1 = __webpack_require__(23);
exports.meetingRoom = meetingRoom_1.meetingRoom;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var globalVars_1 = __webpack_require__(0);
var internalAPIs_1 = __webpack_require__(1);
/**
 * @private
 * Namespace to interact with bots using the SDK.
 */
var bot;
(function (bot) {
    /**
     * @private
     * Hide from docs until release.
     * ------
     * Sends query to bot in order to retrieve data.
     * @param botRequest query to send to bot.
     * @param onSuccess callback to invoke when data is retrieved from bot
     * @param onError callback to invoke should an error occur
     */
    function sendQuery(botRequest, onSuccess, onError) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('bot.executeQuery', [botRequest]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, response) {
            if (success) {
                onSuccess(response);
            }
            else {
                onError(response);
            }
        };
    }
    bot.sendQuery = sendQuery;
    /**
     * @private
     * Hide from docs until release.
     * -----
     * Retrieves list of support commands from bot
     * @param onSuccess callback to invoke when data is retrieved from bot
     * @param onError callback to invoke should an error occur
     */
    function getSupportedCommands(onSuccess, onError) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('bot.getSupportedCommands');
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, response) {
            if (success) {
                onSuccess(response);
            }
            else {
                onError(response);
            }
        };
    }
    bot.getSupportedCommands = getSupportedCommands;
    /**
     * @private
     * Hide from docs until release.
     * -----
     * Authenticates a user for json tab
     * @param authRequest callback to invoke when data is retrieved from bot
     * @param onSuccess callback to invoke when user is authenticated
     * @param onError callback to invoke should an error occur
     */
    function authenticate(authRequest, onSuccess, onError) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('bot.authenticate', [authRequest]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, response) {
            if (success) {
                onSuccess(response);
            }
            else {
                onError(response);
            }
        };
    }
    bot.authenticate = authenticate;
    var ResponseType;
    (function (ResponseType) {
        ResponseType["Results"] = "Results";
        ResponseType["Auth"] = "Auth";
    })(ResponseType = bot.ResponseType || (bot.ResponseType = {}));
})(bot = exports.bot || (exports.bot = {}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(17);
var v4 = __webpack_require__(18);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(7);
var bytesToUuid = __webpack_require__(8);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(7);
var bytesToUuid = __webpack_require__(8);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
/**
 * Namespace to interact with the menu-specific part of the SDK.
 * This object is used to show View Configuration, Action Menu and Navigation Bar Menu.
 *
 * @private
 * Hide from docs until feature is complete
 */
var menus;
(function (menus) {
    /**
     * Represents information about menu item for Action Menu and Navigation Bar Menu.
     */
    var MenuItem = /** @class */ (function () {
        function MenuItem() {
            /**
             * State of the menu item
             */
            this.enabled = true;
            /**
             * Whether the menu item is selected or not
             */
            this.selected = false;
        }
        return MenuItem;
    }());
    menus.MenuItem = MenuItem;
    /**
     * Represents information about type of list to display in Navigation Bar Menu.
     */
    var MenuListType;
    (function (MenuListType) {
        MenuListType["dropDown"] = "dropDown";
        MenuListType["popOver"] = "popOver";
    })(MenuListType = menus.MenuListType || (menus.MenuListType = {}));
    var navBarMenuItemPressHandler;
    globalVars_1.GlobalVars.handlers['navBarMenuItemPress'] = handleNavBarMenuItemPress;
    var actionMenuItemPressHandler;
    globalVars_1.GlobalVars.handlers['actionMenuItemPress'] = handleActionMenuItemPress;
    var viewConfigItemPressHandler;
    globalVars_1.GlobalVars.handlers['setModuleView'] = handleViewConfigItemPress;
    /**
     * Registers list of view configurations and it's handler.
     * Handler is responsible for listening selection of View Configuration.
     * @param viewConfig List of view configurations. Minimum 1 value is required.
     * @param handler The handler to invoke when the user selects view configuration.
     */
    function setUpViews(viewConfig, handler) {
        internalAPIs_1.ensureInitialized();
        viewConfigItemPressHandler = handler;
        internalAPIs_1.sendMessageRequestToParent('setUpViews', [viewConfig]);
    }
    menus.setUpViews = setUpViews;
    function handleViewConfigItemPress(id) {
        if (!viewConfigItemPressHandler || !viewConfigItemPressHandler(id)) {
            internalAPIs_1.ensureInitialized();
            internalAPIs_1.sendMessageRequestToParent('viewConfigItemPress', [id]);
        }
    }
    /**
     * Used to set menu items on the Navigation Bar. If icon is available, icon will be shown, otherwise title will be shown.
     * @param items List of MenuItems for Navigation Bar Menu.
     * @param handler The handler to invoke when the user selects menu item.
     */
    function setNavBarMenu(items, handler) {
        internalAPIs_1.ensureInitialized();
        navBarMenuItemPressHandler = handler;
        internalAPIs_1.sendMessageRequestToParent('setNavBarMenu', [items]);
    }
    menus.setNavBarMenu = setNavBarMenu;
    function handleNavBarMenuItemPress(id) {
        if (!navBarMenuItemPressHandler || !navBarMenuItemPressHandler(id)) {
            internalAPIs_1.ensureInitialized();
            internalAPIs_1.sendMessageRequestToParent('handleNavBarMenuItemPress', [id]);
        }
    }
    /**
     * Used to show Action Menu.
     * @param params Parameters for Menu Parameters
     * @param handler The handler to invoke when the user selects menu item.
     */
    function showActionMenu(params, handler) {
        internalAPIs_1.ensureInitialized();
        actionMenuItemPressHandler = handler;
        internalAPIs_1.sendMessageRequestToParent('showActionMenu', [params]);
    }
    menus.showActionMenu = showActionMenu;
    function handleActionMenuItemPress(id) {
        if (!actionMenuItemPressHandler || !actionMenuItemPressHandler(id)) {
            internalAPIs_1.ensureInitialized();
            internalAPIs_1.sendMessageRequestToParent('handleActionMenuItemPress', [id]);
        }
    }
})(menus = exports.menus || (exports.menus = {}));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes["fileDownloadStart"] = "fileDownloadStart";
    NotificationTypes["fileDownloadComplete"] = "fileDownloadComplete";
})(NotificationTypes = exports.NotificationTypes || (exports.NotificationTypes = {}));
/**
 * @private
 * Hide from docs.
 * ------
 */
var ViewerActionTypes;
(function (ViewerActionTypes) {
    ViewerActionTypes["view"] = "view";
    ViewerActionTypes["edit"] = "edit";
    ViewerActionTypes["editNew"] = "editNew";
})(ViewerActionTypes = exports.ViewerActionTypes || (exports.ViewerActionTypes = {}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(3);
/**
 * @private
 * Hide from docs
 * ------
 * Allows an app to retrieve information of all user joined teams
 * @param callback The callback to invoke when the {@link TeamInstanceParameters} object is retrieved.
 * @param teamInstanceParameters OPTIONAL Flags that specify whether to scope call to favorite teams
 */
function getUserJoinedTeams(callback, teamInstanceParameters) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('getUserJoinedTeams', [teamInstanceParameters]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getUserJoinedTeams = getUserJoinedTeams;
/**
 * @private
 * Hide from docs
 * ------
 * Place the tab into full-screen mode.
 */
function enterFullscreen() {
    internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
    internalAPIs_1.sendMessageRequestToParent('enterFullscreen', []);
}
exports.enterFullscreen = enterFullscreen;
/**
 * @private
 * Hide from docs
 * ------
 * Reverts the tab into normal-screen mode.
 */
function exitFullscreen() {
    internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
    internalAPIs_1.sendMessageRequestToParent('exitFullscreen', []);
}
exports.exitFullscreen = exitFullscreen;
/**
 * @private
 * Hide from docs.
 * ------
 * Opens a client-friendly preview of the specified file.
 * @param file The file to preview.
 */
function openFilePreview(filePreviewParameters) {
    internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
    var params = [
        filePreviewParameters.entityId,
        filePreviewParameters.title,
        filePreviewParameters.description,
        filePreviewParameters.type,
        filePreviewParameters.objectUrl,
        filePreviewParameters.downloadUrl,
        filePreviewParameters.webPreviewUrl,
        filePreviewParameters.webEditUrl,
        filePreviewParameters.baseUrl,
        filePreviewParameters.editFile,
        filePreviewParameters.subEntityId,
        filePreviewParameters.viewerAction,
    ];
    internalAPIs_1.sendMessageRequestToParent('openFilePreview', params);
}
exports.openFilePreview = openFilePreview;
/**
 * @private
 * Hide from docs.
 * ------
 * display notification API.
 * @param message Notification message.
 * @param notificationType Notification type
 */
function showNotification(showNotificationParameters) {
    internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
    var params = [showNotificationParameters.message, showNotificationParameters.notificationType];
    internalAPIs_1.sendMessageRequestToParent('showNotification', params);
}
exports.showNotification = showNotification;
/**
 * @private
 * Hide from docs.
 * ------
 * Upload a custom App manifest directly to both team and personal scopes.
 * This method works just for the first party Apps.
 */
function uploadCustomApp(manifestBlob, onComplete) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('uploadCustomApp', [manifestBlob]);
    globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler();
}
exports.uploadCustomApp = uploadCustomApp;
/**
 * @private
 * Internal use only
 * Sends a custom action MessageRequest to Teams or parent window
 * @param actionName Specifies name of the custom action to be sent
 * @param args Specifies additional arguments passed to the action
 * @param callback Optionally specify a callback to receive response parameters from the parent
 * @returns id of sent message
 */
function sendCustomMessage(actionName, 
// tslint:disable-next-line:no-any
args, 
// tslint:disable-next-line:no-any
callback) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent(actionName, args);
    if (typeof callback === 'function') {
        globalVars_1.GlobalVars.callbacks[messageId] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            callback.apply(null, args);
        };
    }
    return messageId;
}
exports.sendCustomMessage = sendCustomMessage;
/**
 * @private
 * Internal use only
 * Sends a custom action MessageEvent to a child iframe/window, only if you are not using auth popup.
 * Otherwise it will go to the auth popup (which becomes the child)
 * @param actionName Specifies name of the custom action to be sent
 * @param args Specifies additional arguments passed to the action
 * @returns id of sent message
 */
function sendCustomEvent(actionName, 
// tslint:disable-next-line:no-any
args) {
    internalAPIs_1.ensureInitialized();
    //validate childWindow
    if (!globalVars_1.GlobalVars.childWindow) {
        throw new Error('The child window has not yet been initialized or is not present');
    }
    internalAPIs_1.sendMessageEventToChild(actionName, args);
}
exports.sendCustomEvent = sendCustomEvent;
/**
 * @private
 * Internal use only
 * Adds a handler for an action sent by a child window or parent window
 * @param actionName Specifies name of the action message to handle
 * @param customHandler The callback to invoke when the action message is received. The return value is sent to the child
 */
function registerCustomHandler(actionName, customHandler) {
    var _this = this;
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.handlers[actionName] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return customHandler.apply(_this, args);
    };
}
exports.registerCustomHandler = registerCustomHandler;
/**
 * @private
 * Hide from docs
 * ------
 * Allows an app to retrieve information of all chat members
 * Because a malicious party run your content in a browser, this value should
 * be used only as a hint as to who the members are and never as proof of membership.
 * @param callback The callback to invoke when the {@link ChatMembersInformation} object is retrieved.
 */
function getChatMembers(callback) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('getChatMembers');
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getChatMembers = getChatMembers;
/**
 * @private
 * Hide from docs
 * ------
 * Allows an app to get the configuration setting value
 * @param callback The callback to invoke when the value is retrieved.
 * @param key The key for the config setting
 */
function getConfigSetting(callback, key) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('getConfigSetting', [key]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getConfigSetting = getConfigSetting;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
/**
 * Namespace to interact with the conversational subEntities inside the tab
 */
var conversations;
(function (conversations) {
    /**
     * @private
     * Hide from docs
     * --------------
     * Allows the user to start or continue a conversation with each subentity inside the tab
     */
    function openConversation(openConversationRequest) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
        var messageId = internalAPIs_1.sendMessageRequestToParent('conversations.openConversation', [
            {
                title: openConversationRequest.title,
                subEntityId: openConversationRequest.subEntityId,
                conversationId: openConversationRequest.conversationId,
                channelId: openConversationRequest.channelId,
                entityId: openConversationRequest.entityId,
            },
        ]);
        globalVars_1.GlobalVars.onCloseConversationHandler = openConversationRequest.onCloseConversation;
        globalVars_1.GlobalVars.onStartConversationHandler = openConversationRequest.onStartConversation;
        globalVars_1.GlobalVars.callbacks[messageId] = function (status, reason) {
            if (!status) {
                throw new Error(reason);
            }
        };
    }
    conversations.openConversation = openConversation;
    /**
     * @private
     * Hide from docs
     * --------------
     * Allows the user to close the conversation in the right pane
     */
    function closeConversation() {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content);
        internalAPIs_1.sendMessageRequestToParent('conversations.closeConversation');
        globalVars_1.GlobalVars.onCloseConversationHandler = null;
        globalVars_1.GlobalVars.onStartConversationHandler = null;
    }
    conversations.closeConversation = closeConversation;
})(conversations = exports.conversations || (exports.conversations = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var meetingRoom;
(function (meetingRoom) {
    /**
     * @private
     * Hide from docs
     *
     * Enum used to indicate meeting room capabilities.
     */
    var Capability;
    (function (Capability) {
        /**
         * Media control capability: toggle mute.
         */
        Capability["toggleMute"] = "toggleMute";
        /**
         * Media control capability: toggle camera.
         */
        Capability["toggleCamera"] = "toggleCamera";
        /**
         * Media control capability: toggle captions.
         */
        Capability["toggleCaptions"] = "toggleCaptions";
        /**
         * Media control capability: volume ajustion.
         */
        Capability["volume"] = "volume";
        /**
         * Stage layout control capability: show gallery mode.
         */
        Capability["showVideoGallery"] = "showVideoGallery";
        /**
         * Stage layout control capability: show content mode.
         */
        Capability["showContent"] = "showContent";
        /**
         * Stage layout control capability: show content + gallery mode.
         */
        Capability["showVideoGalleryAndContent"] = "showVideoGalleryAndContent";
        /**
         * Stage layout control capability: show laryge gallery mode.
         */
        Capability["showLargeGallery"] = "showLargeGallery";
        /**
         * Stage layout control capability: show together mode.
         */
        Capability["showTogether"] = "showTogether";
        /**
         * Meeting control capability: leave meeting.
         */
        Capability["leaveMeeting"] = "leaveMeeting";
    })(Capability = meetingRoom.Capability || (meetingRoom.Capability = {}));
    globalVars_1.GlobalVars.handlers['meetingRoom.meetingRoomCapabilitiesUpdate'] = handleMeetingRoomCapabilitiesUpdate;
    globalVars_1.GlobalVars.handlers['meetingRoom.meetingRoomStatesUpdate'] = handleMeetingRoomStatesUpdate;
    /**
     * @private
     * Hide from docs
     *
     * Fetch the meeting room info that paired with current client.
     * @param callback Callback to invoke when the meeting room info is fetched.
     */
    function getPairedMeetingRoomInfo(callback) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('meetingRoom.getPairedMeetingRoomInfo');
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    meetingRoom.getPairedMeetingRoomInfo = getPairedMeetingRoomInfo;
    /**
     * @private
     * Hide from docs
     *
     * Send a command to paired meeting room.
     * @param commandName The command name.
     * @param callback Callback to invoke when the command response returns.
     */
    function sendCommandToPairedMeetingRoom(commandName, callback) {
        if (!commandName || commandName.length == 0) {
            throw new Error('[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty');
        }
        if (!callback) {
            throw new Error('[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('meetingRoom.sendCommandToPairedMeetingRoom', [commandName]);
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    meetingRoom.sendCommandToPairedMeetingRoom = sendCommandToPairedMeetingRoom;
    /**
     * @private
     * Hide from docs
     *
     * Registers a handler for meeting room capabilities update.
     * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
     * @param handler The handler to invoke when the capabilities of meeting room update.
     */
    function registerMeetingRoomCapabilitiesUpdateHandler(handler) {
        if (!handler) {
            throw new Error('[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null');
        }
        internalAPIs_1.ensureInitialized();
        globalVars_1.GlobalVars.meetingRoomCapabilitiesUpdateHandler = handler;
        handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['meetingRoom.meetingRoomCapabilitiesUpdate']);
    }
    meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler = registerMeetingRoomCapabilitiesUpdateHandler;
    /**
     * @private
     * Hide from docs
     * Registers a handler for meeting room states update.
     * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
     * @param handler The handler to invoke when the states of meeting room update.
     */
    function registerMeetingRoomStatesUpdateHandler(handler) {
        if (!handler) {
            throw new Error('[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null');
        }
        internalAPIs_1.ensureInitialized();
        globalVars_1.GlobalVars.meetingRoomStatesUpdateHandler = handler;
        handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['meetingRoom.meetingRoomStatesUpdate']);
    }
    meetingRoom.registerMeetingRoomStatesUpdateHandler = registerMeetingRoomStatesUpdateHandler;
    function handleMeetingRoomCapabilitiesUpdate(capabilities) {
        if (globalVars_1.GlobalVars.meetingRoomCapabilitiesUpdateHandler != null) {
            internalAPIs_1.ensureInitialized();
            globalVars_1.GlobalVars.meetingRoomCapabilitiesUpdateHandler(capabilities);
        }
    }
    function handleMeetingRoomStatesUpdate(states) {
        if (globalVars_1.GlobalVars.meetingRoomStatesUpdateHandler != null) {
            internalAPIs_1.ensureInitialized();
            globalVars_1.GlobalVars.meetingRoomStatesUpdateHandler(states);
        }
    }
})(meetingRoom = exports.meetingRoom || (exports.meetingRoom = {}));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appInitialization_1 = __webpack_require__(25);
exports.appInitialization = appInitialization_1.appInitialization;
var authentication_1 = __webpack_require__(26);
exports.authentication = authentication_1.authentication;
var constants_1 = __webpack_require__(2);
exports.FrameContexts = constants_1.FrameContexts;
exports.HostClientType = constants_1.HostClientType;
exports.TaskModuleDimension = constants_1.TaskModuleDimension;
exports.TeamType = constants_1.TeamType;
exports.UserTeamRole = constants_1.UserTeamRole;
exports.ChannelType = constants_1.ChannelType;
var interfaces_1 = __webpack_require__(5);
exports.ErrorCode = interfaces_1.ErrorCode;
var publicAPIs_1 = __webpack_require__(27);
exports.enablePrintCapability = publicAPIs_1.enablePrintCapability;
exports.executeDeepLink = publicAPIs_1.executeDeepLink;
exports.getContext = publicAPIs_1.getContext;
exports.getMruTabInstances = publicAPIs_1.getMruTabInstances;
exports.getTabInstances = publicAPIs_1.getTabInstances;
exports.initialize = publicAPIs_1.initialize;
exports.initializeWithFrameContext = publicAPIs_1.initializeWithFrameContext;
exports.print = publicAPIs_1.print;
exports.registerBackButtonHandler = publicAPIs_1.registerBackButtonHandler;
exports.registerBeforeUnloadHandler = publicAPIs_1.registerBeforeUnloadHandler;
exports.registerChangeSettingsHandler = publicAPIs_1.registerChangeSettingsHandler;
exports.registerFullScreenHandler = publicAPIs_1.registerFullScreenHandler;
exports.registerOnLoadHandler = publicAPIs_1.registerOnLoadHandler;
exports.registerOnThemeChangeHandler = publicAPIs_1.registerOnThemeChangeHandler;
exports.registerAppButtonClickHandler = publicAPIs_1.registerAppButtonClickHandler;
exports.registerAppButtonHoverEnterHandler = publicAPIs_1.registerAppButtonHoverEnterHandler;
exports.registerAppButtonHoverLeaveHandler = publicAPIs_1.registerAppButtonHoverLeaveHandler;
exports.setFrameContext = publicAPIs_1.setFrameContext;
exports.shareDeepLink = publicAPIs_1.shareDeepLink;
var navigation_1 = __webpack_require__(6);
exports.returnFocus = navigation_1.returnFocus;
exports.navigateBack = navigation_1.navigateBack;
exports.navigateCrossDomain = navigation_1.navigateCrossDomain;
exports.navigateToTab = navigation_1.navigateToTab;
var settings_1 = __webpack_require__(10);
exports.settings = settings_1.settings;
var tasks_1 = __webpack_require__(28);
exports.tasks = tasks_1.tasks;
var appWindow_1 = __webpack_require__(11);
exports.ChildAppWindow = appWindow_1.ChildAppWindow;
exports.ParentAppWindow = appWindow_1.ParentAppWindow;
var media_1 = __webpack_require__(12);
exports.media = media_1.media;
var location_1 = __webpack_require__(30);
exports.location = location_1.location;
var meeting_1 = __webpack_require__(31);
exports.meeting = meeting_1.meeting;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var constants_1 = __webpack_require__(4);
var appInitialization;
(function (appInitialization) {
    /**
     * To notify app loaded to hide loading indicator
     */
    function notifyAppLoaded() {
        internalAPIs_1.ensureInitialized();
        internalAPIs_1.sendMessageRequestToParent('appInitialization.appLoaded', [constants_1.version]);
    }
    appInitialization.notifyAppLoaded = notifyAppLoaded;
    /**
     * To notify app Initialization successs and ready for user interaction
     */
    function notifySuccess() {
        internalAPIs_1.ensureInitialized();
        internalAPIs_1.sendMessageRequestToParent('appInitialization.success', [constants_1.version]);
    }
    appInitialization.notifySuccess = notifySuccess;
    /**
     * To notify app Initialization failed
     */
    function notifyFailure(appInitializationFailedRequest) {
        internalAPIs_1.ensureInitialized();
        internalAPIs_1.sendMessageRequestToParent('appInitialization.failure', [
            appInitializationFailedRequest.reason,
            appInitializationFailedRequest.message,
        ]);
    }
    appInitialization.notifyFailure = notifyFailure;
    var FailedReason;
    (function (FailedReason) {
        FailedReason["AuthFailed"] = "AuthFailed";
        FailedReason["Timeout"] = "Timeout";
        FailedReason["Other"] = "Other";
    })(FailedReason = appInitialization.FailedReason || (appInitialization.FailedReason = {}));
})(appInitialization = exports.appInitialization || (exports.appInitialization = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
/**
 * Namespace to interact with the authentication-specific part of the SDK.
 * This object is used for starting or completing authentication flows.
 */
var authentication;
(function (authentication) {
    var authParams;
    var authWindowMonitor;
    globalVars_1.GlobalVars.handlers['authentication.authenticate.success'] = handleSuccess;
    globalVars_1.GlobalVars.handlers['authentication.authenticate.failure'] = handleFailure;
    /**
     * Registers the authentication GlobalVars.handlers
     * @param authenticateParameters A set of values that configure the authentication pop-up.
     */
    function registerAuthenticationHandlers(authenticateParameters) {
        authParams = authenticateParameters;
    }
    authentication.registerAuthenticationHandlers = registerAuthenticationHandlers;
    /**
     * Initiates an authentication request, which opens a new window with the specified settings.
     */
    function authenticate(authenticateParameters) {
        var authenticateParams = authenticateParameters !== undefined ? authenticateParameters : authParams;
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.sidePanel, constants_1.FrameContexts.settings, constants_1.FrameContexts.remove, constants_1.FrameContexts.task, constants_1.FrameContexts.stage);
        if (globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.desktop ||
            globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.android ||
            globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.ios ||
            globalVars_1.GlobalVars.hostClientType === constants_1.HostClientType.rigel) {
            // Convert any relative URLs into absolute URLs before sending them over to the parent window.
            var link = document.createElement('a');
            link.href = authenticateParams.url;
            // Ask the parent window to open an authentication window with the parameters provided by the caller.
            var messageId = internalAPIs_1.sendMessageRequestToParent('authentication.authenticate', [
                link.href,
                authenticateParams.width,
                authenticateParams.height,
            ]);
            globalVars_1.GlobalVars.callbacks[messageId] = function (success, response) {
                if (success) {
                    authenticateParams.successCallback(response);
                }
                else {
                    authenticateParams.failureCallback(response);
                }
            };
        }
        else {
            // Open an authentication window with the parameters provided by the caller.
            openAuthenticationWindow(authenticateParams);
        }
    }
    authentication.authenticate = authenticate;
    /**
     * Requests an Azure AD token to be issued on behalf of the app. The token is acquired from the cache
     * if it is not expired. Otherwise a request is sent to Azure AD to obtain a new token.
     * @param authTokenRequest A set of values that configure the token request.
     */
    function getAuthToken(authTokenRequest) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('authentication.getAuthToken', [
            authTokenRequest.resources,
            authTokenRequest.claims,
            authTokenRequest.silent,
        ]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (success) {
                authTokenRequest.successCallback(result);
            }
            else {
                authTokenRequest.failureCallback(result);
            }
        };
    }
    authentication.getAuthToken = getAuthToken;
    /**
     * @private
     * Hide from docs.
     * ------
     * Requests the decoded Azure AD user identity on behalf of the app.
     */
    function getUser(userRequest) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('authentication.getUser');
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (success) {
                userRequest.successCallback(result);
            }
            else {
                userRequest.failureCallback(result);
            }
        };
    }
    authentication.getUser = getUser;
    function closeAuthenticationWindow() {
        // Stop monitoring the authentication window
        stopAuthenticationWindowMonitor();
        // Try to close the authentication window and clear all properties associated with it
        try {
            if (globalVars_1.GlobalVars.childWindow) {
                globalVars_1.GlobalVars.childWindow.close();
            }
        }
        finally {
            globalVars_1.GlobalVars.childWindow = null;
            globalVars_1.GlobalVars.childOrigin = null;
        }
    }
    function openAuthenticationWindow(authenticateParameters) {
        authParams = authenticateParameters;
        // Close the previously opened window if we have one
        closeAuthenticationWindow();
        // Start with a sensible default size
        var width = authParams.width || 600;
        var height = authParams.height || 400;
        // Ensure that the new window is always smaller than our app's window so that it never fully covers up our app
        width = Math.min(width, globalVars_1.GlobalVars.currentWindow.outerWidth - 400);
        height = Math.min(height, globalVars_1.GlobalVars.currentWindow.outerHeight - 200);
        // Convert any relative URLs into absolute URLs before sending them over to the parent window
        var link = document.createElement('a');
        link.href = authParams.url;
        // We are running in the browser, so we need to center the new window ourselves
        var left = typeof globalVars_1.GlobalVars.currentWindow.screenLeft !== 'undefined'
            ? globalVars_1.GlobalVars.currentWindow.screenLeft
            : globalVars_1.GlobalVars.currentWindow.screenX;
        var top = typeof globalVars_1.GlobalVars.currentWindow.screenTop !== 'undefined'
            ? globalVars_1.GlobalVars.currentWindow.screenTop
            : globalVars_1.GlobalVars.currentWindow.screenY;
        left += globalVars_1.GlobalVars.currentWindow.outerWidth / 2 - width / 2;
        top += globalVars_1.GlobalVars.currentWindow.outerHeight / 2 - height / 2;
        // Open a child window with a desired set of standard browser features
        globalVars_1.GlobalVars.childWindow = globalVars_1.GlobalVars.currentWindow.open(link.href, '_blank', 'toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top=' +
            top +
            ', left=' +
            left +
            ', width=' +
            width +
            ', height=' +
            height);
        if (globalVars_1.GlobalVars.childWindow) {
            // Start monitoring the authentication window so that we can detect if it gets closed before the flow completes
            startAuthenticationWindowMonitor();
        }
        else {
            // If we failed to open the window, fail the authentication flow
            handleFailure('FailedToOpenWindow');
        }
    }
    function stopAuthenticationWindowMonitor() {
        if (authWindowMonitor) {
            clearInterval(authWindowMonitor);
            authWindowMonitor = 0;
        }
        delete globalVars_1.GlobalVars.handlers['initialize'];
        delete globalVars_1.GlobalVars.handlers['navigateCrossDomain'];
    }
    function startAuthenticationWindowMonitor() {
        // Stop the previous window monitor if one is running
        stopAuthenticationWindowMonitor();
        // Create an interval loop that
        // - Notifies the caller of failure if it detects that the authentication window is closed
        // - Keeps pinging the authentication window while it is open to re-establish
        //   contact with any pages along the authentication flow that need to communicate
        //   with us
        authWindowMonitor = globalVars_1.GlobalVars.currentWindow.setInterval(function () {
            if (!globalVars_1.GlobalVars.childWindow || globalVars_1.GlobalVars.childWindow.closed) {
                handleFailure('CancelledByUser');
            }
            else {
                var savedChildOrigin = globalVars_1.GlobalVars.childOrigin;
                try {
                    globalVars_1.GlobalVars.childOrigin = '*';
                    internalAPIs_1.sendMessageEventToChild('ping');
                }
                finally {
                    globalVars_1.GlobalVars.childOrigin = savedChildOrigin;
                }
            }
        }, 100);
        // Set up an initialize-message handler that gives the authentication window its frame context
        globalVars_1.GlobalVars.handlers['initialize'] = function () {
            return [constants_1.FrameContexts.authentication, globalVars_1.GlobalVars.hostClientType];
        };
        // Set up a navigateCrossDomain message handler that blocks cross-domain re-navigation attempts
        // in the authentication window. We could at some point choose to implement this method via a call to
        // authenticationWindow.location.href = url; however, we would first need to figure out how to
        // validate the URL against the tab's list of valid domains.
        globalVars_1.GlobalVars.handlers['navigateCrossDomain'] = function () {
            return false;
        };
    }
    /**
     * Notifies the frame that initiated this authentication request that the request was successful.
     * This function is usable only on the authentication window.
     * This call causes the authentication window to be closed.
     * @param result Specifies a result for the authentication. If specified, the frame that initiated the authentication pop-up receives this value in its callback.
     * @param callbackUrl Specifies the url to redirect back to if the client is Win32 Outlook.
     */
    function notifySuccess(result, callbackUrl) {
        redirectIfWin32Outlook(callbackUrl, 'result', result);
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.authentication);
        internalAPIs_1.sendMessageRequestToParent('authentication.authenticate.success', [result]);
        // Wait for the message to be sent before closing the window
        internalAPIs_1.waitForMessageQueue(globalVars_1.GlobalVars.parentWindow, function () { return setTimeout(function () { return globalVars_1.GlobalVars.currentWindow.close(); }, 200); });
    }
    authentication.notifySuccess = notifySuccess;
    /**
     * Notifies the frame that initiated this authentication request that the request failed.
     * This function is usable only on the authentication window.
     * This call causes the authentication window to be closed.
     * @param result Specifies a result for the authentication. If specified, the frame that initiated the authentication pop-up receives this value in its callback.
     * @param callbackUrl Specifies the url to redirect back to if the client is Win32 Outlook.
     */
    function notifyFailure(reason, callbackUrl) {
        redirectIfWin32Outlook(callbackUrl, 'reason', reason);
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.authentication);
        internalAPIs_1.sendMessageRequestToParent('authentication.authenticate.failure', [reason]);
        // Wait for the message to be sent before closing the window
        internalAPIs_1.waitForMessageQueue(globalVars_1.GlobalVars.parentWindow, function () { return setTimeout(function () { return globalVars_1.GlobalVars.currentWindow.close(); }, 200); });
    }
    authentication.notifyFailure = notifyFailure;
    function handleSuccess(result) {
        try {
            if (authParams && authParams.successCallback) {
                authParams.successCallback(result);
            }
        }
        finally {
            authParams = null;
            closeAuthenticationWindow();
        }
    }
    function handleFailure(reason) {
        try {
            if (authParams && authParams.failureCallback) {
                authParams.failureCallback(reason);
            }
        }
        finally {
            authParams = null;
            closeAuthenticationWindow();
        }
    }
    /**
     * Validates that the callbackUrl param is a valid connector url, appends the result/reason and authSuccess/authFailure as URL fragments and redirects the window
     * @param callbackUrl - the connectors url to redirect to
     * @param key - "result" in case of success and "reason" in case of failure
     * @param value - the value of the passed result/reason parameter
     */
    function redirectIfWin32Outlook(callbackUrl, key, value) {
        if (callbackUrl) {
            var link = document.createElement('a');
            link.href = decodeURIComponent(callbackUrl);
            if (link.host &&
                link.host !== window.location.host &&
                link.host === 'outlook.office.com' &&
                link.search.indexOf('client_type=Win32_Outlook') > -1) {
                if (key && key === 'result') {
                    if (value) {
                        link.href = updateUrlParameter(link.href, 'result', value);
                    }
                    globalVars_1.GlobalVars.currentWindow.location.assign(updateUrlParameter(link.href, 'authSuccess', ''));
                }
                if (key && key === 'reason') {
                    if (value) {
                        link.href = updateUrlParameter(link.href, 'reason', value);
                    }
                    globalVars_1.GlobalVars.currentWindow.location.assign(updateUrlParameter(link.href, 'authFailure', ''));
                }
            }
        }
    }
    /**
     * Appends either result or reason as a fragment to the 'callbackUrl'
     * @param uri - the url to modify
     * @param key - the fragment key
     * @param value - the fragment value
     */
    function updateUrlParameter(uri, key, value) {
        var i = uri.indexOf('#');
        var hash = i === -1 ? '#' : uri.substr(i);
        hash = hash + '&' + key + (value !== '' ? '=' + value : '');
        uri = i === -1 ? uri : uri.substr(0, i);
        return uri + hash;
    }
})(authentication = exports.authentication || (exports.authentication = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(4);
var settings_1 = __webpack_require__(10);
var utils_1 = __webpack_require__(3);
var logs_1 = __webpack_require__(9);
var constants_2 = __webpack_require__(2);
// ::::::::::::::::::::::: MicrosoftTeams SDK public API ::::::::::::::::::::
/**
 * Initializes the library. This must be called before any other SDK calls
 * but after the frame is loaded successfully.
 * @param callback Optionally specify a callback to invoke when Teams SDK has successfully initialized
 * @param validMessageOrigins Optionally specify a list of cross frame message origins. There must have
 * https: protocol otherwise they will be ignored. Example: https://www.example.com
 */
function initialize(callback, validMessageOrigins) {
    // Independent components might not know whether the SDK is initialized so might call it to be safe.
    // Just no-op if that happens to make it easier to use.
    if (!globalVars_1.GlobalVars.initializeCalled) {
        globalVars_1.GlobalVars.initializeCalled = true;
        // Listen for messages post to our window
        var messageListener_1 = function (evt) { return internalAPIs_1.processMessage(evt); };
        // If we are in an iframe, our parent window is the one hosting us (i.e., window.parent); otherwise,
        // it's the window that opened us (i.e., window.opener)
        globalVars_1.GlobalVars.currentWindow = globalVars_1.GlobalVars.currentWindow || window;
        globalVars_1.GlobalVars.parentWindow =
            globalVars_1.GlobalVars.currentWindow.parent !== globalVars_1.GlobalVars.currentWindow.self
                ? globalVars_1.GlobalVars.currentWindow.parent
                : globalVars_1.GlobalVars.currentWindow.opener;
        // Listen to messages from the parent or child frame.
        // Frameless windows will only receive this event from child frames and if validMessageOrigins is passed.
        if (globalVars_1.GlobalVars.parentWindow || validMessageOrigins) {
            globalVars_1.GlobalVars.currentWindow.addEventListener('message', messageListener_1, false);
        }
        if (!globalVars_1.GlobalVars.parentWindow) {
            globalVars_1.GlobalVars.isFramelessWindow = true;
            window.onNativeMessage = internalAPIs_1.handleParentMessage;
        }
        try {
            // Send the initialized message to any origin, because at this point we most likely don't know the origin
            // of the parent window, and this message contains no data that could pose a security risk.
            globalVars_1.GlobalVars.parentOrigin = '*';
            var messageId = internalAPIs_1.sendMessageRequestToParent('initialize', [constants_1.version]);
            globalVars_1.GlobalVars.callbacks[messageId] = function (context, clientType, clientSupportedSDKVersion) {
                if (clientSupportedSDKVersion === void 0) { clientSupportedSDKVersion = constants_1.defaultSDKVersionForCompatCheck; }
                globalVars_1.GlobalVars.frameContext = context;
                globalVars_1.GlobalVars.hostClientType = clientType;
                globalVars_1.GlobalVars.clientSupportedSDKVersion = clientSupportedSDKVersion;
                // Notify all waiting callers that the initialization has completed
                globalVars_1.GlobalVars.initializeCallbacks.forEach(function (initCallback) { return initCallback(); });
                globalVars_1.GlobalVars.initializeCallbacks = [];
                globalVars_1.GlobalVars.initializeCompleted = true;
            };
        }
        finally {
            globalVars_1.GlobalVars.parentOrigin = null;
        }
        // Undocumented function used to clear state between unit tests
        this._uninitialize = function () {
            if (globalVars_1.GlobalVars.frameContext) {
                registerOnThemeChangeHandler(null);
                registerFullScreenHandler(null);
                registerBackButtonHandler(null);
                registerBeforeUnloadHandler(null);
                registerOnLoadHandler(null);
                logs_1.logs.registerGetLogHandler(null);
            }
            if (globalVars_1.GlobalVars.frameContext === constants_2.FrameContexts.settings) {
                settings_1.settings.registerOnSaveHandler(null);
            }
            if (globalVars_1.GlobalVars.frameContext === constants_2.FrameContexts.remove) {
                settings_1.settings.registerOnRemoveHandler(null);
            }
            globalVars_1.GlobalVars.currentWindow.removeEventListener('message', messageListener_1, false);
            globalVars_1.GlobalVars.initializeCalled = false;
            globalVars_1.GlobalVars.initializeCompleted = false;
            globalVars_1.GlobalVars.initializeCallbacks = [];
            globalVars_1.GlobalVars.additionalValidOrigins = [];
            globalVars_1.GlobalVars.parentWindow = null;
            globalVars_1.GlobalVars.parentOrigin = null;
            globalVars_1.GlobalVars.parentMessageQueue = [];
            globalVars_1.GlobalVars.childWindow = null;
            globalVars_1.GlobalVars.childOrigin = null;
            globalVars_1.GlobalVars.childMessageQueue = [];
            globalVars_1.GlobalVars.nextMessageId = 0;
            globalVars_1.GlobalVars.callbacks = {};
            globalVars_1.GlobalVars.frameContext = null;
            globalVars_1.GlobalVars.hostClientType = null;
            globalVars_1.GlobalVars.isFramelessWindow = false;
        };
    }
    // Handle additional valid message origins if specified
    if (Array.isArray(validMessageOrigins)) {
        internalAPIs_1.processAdditionalValidOrigins(validMessageOrigins);
    }
    // Handle the callback if specified:
    // 1. If initialization has already completed then just call it right away
    // 2. If initialization hasn't completed then add it to the array of callbacks
    //    that should be invoked once initialization does complete
    if (callback) {
        globalVars_1.GlobalVars.initializeCompleted ? callback() : globalVars_1.GlobalVars.initializeCallbacks.push(callback);
    }
}
exports.initialize = initialize;
/**
 * @private
 * Hide from docs.
 * ------
 * Undocumented function used to set a mock window for unit tests
 */
function _initialize(hostWindow) {
    globalVars_1.GlobalVars.currentWindow = hostWindow;
}
exports._initialize = _initialize;
/**
 * @private
 * Hide from docs.
 * ------
 * Undocumented function used to clear state between unit tests
 */
function _uninitialize() { }
exports._uninitialize = _uninitialize;
/**
 * Enable print capability to support printing page using Ctrl+P and cmd+P
 */
function enablePrintCapability() {
    if (!globalVars_1.GlobalVars.printCapabilityEnabled) {
        globalVars_1.GlobalVars.printCapabilityEnabled = true;
        internalAPIs_1.ensureInitialized();
        // adding ctrl+P and cmd+P handler
        document.addEventListener('keydown', function (event) {
            if ((event.ctrlKey || event.metaKey) && event.keyCode === 80) {
                print();
                event.cancelBubble = true;
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        });
    }
}
exports.enablePrintCapability = enablePrintCapability;
/**
 * default print handler
 */
function print() {
    window.print();
}
exports.print = print;
/**
 * Retrieves the current context the frame is running in.
 * @param callback The callback to invoke when the {@link Context} object is retrieved.
 */
function getContext(callback) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('getContext');
    globalVars_1.GlobalVars.callbacks[messageId] = function (context) {
        if (!context.frameContext) {
            // Fallback logic for frameContext properties
            context.frameContext = globalVars_1.GlobalVars.frameContext;
        }
        callback(context);
    };
}
exports.getContext = getContext;
/**
 * Registers a handler for theme changes.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when the user changes their theme.
 */
function registerOnThemeChangeHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.themeChangeHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['themeChange']);
}
exports.registerOnThemeChangeHandler = registerOnThemeChangeHandler;
/**
 * Registers a handler for changes from or to full-screen view for a tab.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when the user toggles full-screen view for a tab.
 */
function registerFullScreenHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.fullScreenChangeHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['fullScreen']);
}
exports.registerFullScreenHandler = registerFullScreenHandler;
/**
 * Registers a handler for clicking the app button.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when the personal app button is clicked in the app bar.
 */
function registerAppButtonClickHandler(handler) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content);
    globalVars_1.GlobalVars.appButtonClickHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['appButtonClick']);
}
exports.registerAppButtonClickHandler = registerAppButtonClickHandler;
/**
 * Registers a handler for entering hover of the app button.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when entering hover of the personal app button in the app bar.
 */
function registerAppButtonHoverEnterHandler(handler) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content);
    globalVars_1.GlobalVars.appButtonHoverEnterHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['appButtonHoverEnter']);
}
exports.registerAppButtonHoverEnterHandler = registerAppButtonHoverEnterHandler;
/**
 * Registers a handler for exiting hover of the app button.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when exiting hover of the personal app button in the app bar.
 */
function registerAppButtonHoverLeaveHandler(handler) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content);
    globalVars_1.GlobalVars.appButtonHoverLeaveHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['appButtonHoverLeave']);
}
exports.registerAppButtonHoverLeaveHandler = registerAppButtonHoverLeaveHandler;
/**
 * Registers a handler for user presses of the Team client's back button. Experiences that maintain an internal
 * navigation stack should use this handler to navigate the user back within their frame. If an app finds
 * that after running its back button handler it cannot handle the event it should call the navigateBack
 * method to ask the Teams client to handle it instead.
 * @param handler The handler to invoke when the user presses their Team client's back button.
 */
function registerBackButtonHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.backButtonPressHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['backButton']);
}
exports.registerBackButtonHandler = registerBackButtonHandler;
/**
 * @private
 * Registers a handler to be called when the page has been requested to load.
 * @param handler The handler to invoke when the page is loaded.
 */
function registerOnLoadHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.loadHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['load']);
}
exports.registerOnLoadHandler = registerOnLoadHandler;
/**
 * @private
 * Registers a handler to be called before the page is unloaded.
 * @param handler The handler to invoke before the page is unloaded. If this handler returns true the page should
 * invoke the readyToUnload function provided to it once it's ready to be unloaded.
 */
function registerBeforeUnloadHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.beforeUnloadHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['beforeUnload']);
}
exports.registerBeforeUnloadHandler = registerBeforeUnloadHandler;
/**
 * Registers a handler for when the user reconfigurated tab
 * @param handler The handler to invoke when the user click on Settings.
 */
function registerChangeSettingsHandler(handler) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content);
    globalVars_1.GlobalVars.changeSettingsHandler = handler;
    handler && internalAPIs_1.sendMessageRequestToParent('registerHandler', ['changeSettings']);
}
exports.registerChangeSettingsHandler = registerChangeSettingsHandler;
/**
 * Allows an app to retrieve for this user tabs that are owned by this app.
 * If no TabInstanceParameters are passed, the app defaults to favorite teams and favorite channels.
 * @param callback The callback to invoke when the {@link TabInstanceParameters} object is retrieved.
 * @param tabInstanceParameters OPTIONAL Flags that specify whether to scope call to favorite teams or channels.
 */
function getTabInstances(callback, tabInstanceParameters) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('getTabInstances', [tabInstanceParameters]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getTabInstances = getTabInstances;
/**
 * Allows an app to retrieve the most recently used tabs for this user.
 * @param callback The callback to invoke when the {@link TabInformation} object is retrieved.
 * @param tabInstanceParameters OPTIONAL Ignored, kept for future use
 */
function getMruTabInstances(callback, tabInstanceParameters) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequestToParent('getMruTabInstances', [tabInstanceParameters]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getMruTabInstances = getMruTabInstances;
/**
 * Shares a deep link that a user can use to navigate back to a specific state in this page.
 * @param deepLinkParameters ID and label for the link and fallback URL.
 */
function shareDeepLink(deepLinkParameters) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content, constants_2.FrameContexts.sidePanel);
    internalAPIs_1.sendMessageRequestToParent('shareDeepLink', [
        deepLinkParameters.subEntityId,
        deepLinkParameters.subEntityLabel,
        deepLinkParameters.subEntityWebUrl,
    ]);
}
exports.shareDeepLink = shareDeepLink;
/**
 * execute deep link API.
 * @param deepLink deep link.
 */
function executeDeepLink(deepLink, onComplete) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content, constants_2.FrameContexts.sidePanel, constants_2.FrameContexts.settings, constants_2.FrameContexts.task, constants_2.FrameContexts.stage);
    var messageId = internalAPIs_1.sendMessageRequestToParent('executeDeepLink', [deepLink]);
    globalVars_1.GlobalVars.callbacks[messageId] = onComplete ? onComplete : utils_1.getGenericOnCompleteHandler();
}
exports.executeDeepLink = executeDeepLink;
function setFrameContext(frameContext) {
    internalAPIs_1.ensureInitialized(constants_2.FrameContexts.content);
    internalAPIs_1.sendMessageRequestToParent('setFrameContext', [frameContext]);
}
exports.setFrameContext = setFrameContext;
function initializeWithFrameContext(frameContext, callback, validMessageOrigins) {
    initialize(callback, validMessageOrigins);
    setFrameContext(frameContext);
}
exports.initializeWithFrameContext = initializeWithFrameContext;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var appWindow_1 = __webpack_require__(11);
/**
 * Namespace to interact with the task module-specific part of the SDK.
 * This object is usable only on the content frame.
 */
var tasks;
(function (tasks) {
    /**
     * Allows an app to open the task module.
     * @param taskInfo An object containing the parameters of the task module
     * @param submitHandler Handler to call when the task module is completed
     */
    function startTask(taskInfo, submitHandler) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.sidePanel);
        var messageId = internalAPIs_1.sendMessageRequestToParent('tasks.startTask', [taskInfo]);
        globalVars_1.GlobalVars.callbacks[messageId] = submitHandler;
        return new appWindow_1.ChildAppWindow();
    }
    tasks.startTask = startTask;
    /**
     * Update height/width task info properties.
     * @param taskInfo An object containing width and height properties
     */
    function updateTask(taskInfo) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.sidePanel, constants_1.FrameContexts.task);
        var width = taskInfo.width, height = taskInfo.height, extra = __rest(taskInfo, ["width", "height"]);
        if (!Object.keys(extra).length) {
            internalAPIs_1.sendMessageRequestToParent('tasks.updateTask', [taskInfo]);
        }
        else {
            throw new Error('updateTask requires a taskInfo argument containing only width and height');
        }
    }
    tasks.updateTask = updateTask;
    /**
     * Submit the task module.
     * @param result Contains the result to be sent to the bot or the app. Typically a JSON object or a serialized version of it
     * @param appIds Helps to validate that the call originates from the same appId as the one that invoked the task module
     */
    function submitTask(result, appIds) {
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.sidePanel, constants_1.FrameContexts.task);
        // Send tasks.completeTask instead of tasks.submitTask message for backward compatibility with Mobile clients
        internalAPIs_1.sendMessageRequestToParent('tasks.completeTask', [result, Array.isArray(appIds) ? appIds : [appIds]]);
    }
    tasks.submitTask = submitTask;
})(tasks = exports.tasks || (exports.tasks = {}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var media_1 = __webpack_require__(12);
/**
 * Helper function to create a blob from media chunks based on their sequence
 */
function createFile(assembleAttachment, mimeType) {
    if (assembleAttachment == null || mimeType == null || assembleAttachment.length <= 0) {
        return null;
    }
    var file;
    var sequence = 1;
    assembleAttachment.sort(function (a, b) { return (a.sequence > b.sequence ? 1 : -1); });
    assembleAttachment.forEach(function (item) {
        if (item.sequence == sequence) {
            if (file) {
                file = new Blob([file, item.file], { type: mimeType });
            }
            else {
                file = new Blob([item.file], { type: mimeType });
            }
            sequence++;
        }
    });
    return file;
}
exports.createFile = createFile;
/**
 * Helper function to convert Media chunks into another object type which can be later assemebled
 * Converts base 64 encoded string to byte array and then into an array of blobs
 */
function decodeAttachment(attachment, mimeType) {
    if (attachment == null || mimeType == null) {
        return null;
    }
    var decoded = atob(attachment.chunk);
    var byteNumbers = new Array(decoded.length);
    for (var i = 0; i < decoded.length; i++) {
        byteNumbers[i] = decoded.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: mimeType });
    var assemble = {
        sequence: attachment.chunkSequence,
        file: blob,
    };
    return assemble;
}
exports.decodeAttachment = decodeAttachment;
/**
 * Returns true if the mediaInput params are valid and false otherwise
 */
function validateSelectMediaInputs(mediaInputs) {
    if (mediaInputs == null || mediaInputs.maxMediaCount > 10) {
        return false;
    }
    return true;
}
exports.validateSelectMediaInputs = validateSelectMediaInputs;
/**
 * Returns true if the get Media params are valid and false otherwise
 */
function validateGetMediaInputs(mimeType, format, content) {
    if (mimeType == null || format == null || format != media_1.media.FileFormat.ID || content == null) {
        return false;
    }
    return true;
}
exports.validateGetMediaInputs = validateGetMediaInputs;
/**
 * Returns true if the view images param is valid and false otherwise
 */
function validateViewImagesInput(uriList) {
    if (uriList == null || uriList.length <= 0 || uriList.length > 10) {
        return false;
    }
    return true;
}
exports.validateViewImagesInput = validateViewImagesInput;
/**
 * Returns true if the scan barcode param is valid and false otherwise
 */
function validateScanBarCodeInput(barCodeConfig) {
    if (barCodeConfig) {
        if (barCodeConfig.timeOutIntervalInSec === null ||
            barCodeConfig.timeOutIntervalInSec <= 0 ||
            barCodeConfig.timeOutIntervalInSec > 60) {
            return false;
        }
    }
    return true;
}
exports.validateScanBarCodeInput = validateScanBarCodeInput;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var globalVars_1 = __webpack_require__(0);
var interfaces_1 = __webpack_require__(5);
var internalAPIs_1 = __webpack_require__(1);
var constants_1 = __webpack_require__(2);
var location;
(function (location_1) {
    /**
     * This is the SDK version when location APIs (getLocation and showLocation) are supported.
     */
    location_1.locationAPIsRequiredVersion = '1.9.0';
    /**
     * Fetches current user coordinates or allows user to choose location on map
     * @param callback Callback to invoke when current user location is fetched
     */
    function getLocation(props, callback) {
        if (!callback) {
            throw new Error('[location.getLocation] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
        if (!internalAPIs_1.isAPISupportedByPlatform(location_1.locationAPIsRequiredVersion)) {
            var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
            callback(oldPlatformError, undefined);
            return;
        }
        if (!props) {
            var invalidInput = { errorCode: interfaces_1.ErrorCode.INVALID_ARGUMENTS };
            callback(invalidInput, undefined);
            return;
        }
        var messageId = internalAPIs_1.sendMessageRequestToParent('location.getLocation', [props]);
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    location_1.getLocation = getLocation;
    /**
     * Shows the location on map corresponding to the given coordinates
     * @param location {@link Location} which needs to be shown on map
     * @param callback Callback to invoke when the location is opened on map
     */
    function showLocation(location, callback) {
        if (!callback) {
            throw new Error('[location.showLocation] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized(constants_1.FrameContexts.content, constants_1.FrameContexts.task);
        if (!internalAPIs_1.isAPISupportedByPlatform(location_1.locationAPIsRequiredVersion)) {
            var oldPlatformError = { errorCode: interfaces_1.ErrorCode.OLD_PLATFORM };
            callback(oldPlatformError, undefined);
            return;
        }
        if (!location) {
            var invalidInput = { errorCode: interfaces_1.ErrorCode.INVALID_ARGUMENTS };
            callback(invalidInput, undefined);
            return;
        }
        var messageId = internalAPIs_1.sendMessageRequestToParent('location.showLocation', [location]);
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    location_1.showLocation = showLocation;
})(location = exports.location || (exports.location = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var meeting;
(function (meeting) {
    /**
     * Allows an app to get the incoming audio speaker setting for the meeting user
     * @param callback Callback contains 2 parameters, error and result.
     * error can either contain an error of type SdkError, incase of an error, or null when fetch is successful
     * result can either contain the true/false value, incase of a successful toggle or null when the fetching fails
     * result: True means incoming audio is muted and false means incoming audio is unmuted
     */
    function getIncomingClientAudioState(callback) {
        if (!callback) {
            throw new Error('[get incoming client audio state] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('getIncomingClientAudioState');
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    meeting.getIncomingClientAudioState = getIncomingClientAudioState;
    /**
     * Allows an app to toggle the incoming audio speaker setting for the meeting user from mute to unmute or vice-versa
     * @param callback Callback contains 2 parameters, error and result.
     * error can either contain an error of type SdkError, incase of an error, or null when toggle is successful
     * result can either contain the true/false value, incase of a successful toggle or null when the toggling fails
     * result: True means incoming audio is muted and false means incoming audio is unmuted
     */
    function toggleIncomingClientAudio(callback) {
        if (!callback) {
            throw new Error('[toggle incoming client audio] Callback cannot be null');
        }
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequestToParent('toggleIncomingClientAudio');
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    meeting.toggleIncomingClientAudio = toggleIncomingClientAudio;
})(meeting = exports.meeting || (exports.meeting = {}));


/***/ })
/******/ ]);
});
//# sourceMappingURL=MicrosoftTeams.js.map

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
    button.setAttribute("aria-label", config.name);
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
            let input;
            let valueGetter;
            const defaultInputValue = (config.inputs[i].defaultValue) ? config.inputs[i].defaultValue : null;
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
                            if (defaultInputValue) {
                                input.value = defaultInputValue;
                            }
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.setAttribute("aria-label", "input-" + config.name);
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
        textarea.setAttribute("aria-label", "textarea-" + config.name);
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

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.js
var MicrosoftTeams = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        addModule({
            name: "initialize",
            initializedRequired: false,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["initialize"](output);
                MicrosoftTeams["appInitialization"].notifySuccess();
            }
        });
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["getContext"](output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["getTabInstances"](output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["getMruTabInstances"](output);
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
                MicrosoftTeams["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "navigateForward"
                }],
            action: function (navigateForward) {
                MicrosoftTeams["returnFocus"](navigateForward);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["registerOnThemeChangeHandler"](output);
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
                MicrosoftTeams["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["registerOnThemeChangeHandler"](output);
            }
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["registerChangeSettingsHandler"](function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["registerAppButtonClickHandler"](function () {
                    output("Click event received");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["registerAppButtonHoverEnterHandler"](function () {
                    output(`Hover enter event received`);
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["registerAppButtonHoverLeaveHandler"](function () {
                    output(`Hover leave event received`);
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
                MicrosoftTeams["shareDeepLink"](deepLinkParameters);
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
                MicrosoftTeams["executeDeepLink"](deepLink);
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
                MicrosoftTeams["authentication"].authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    }
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
                childWindow = MicrosoftTeams["tasks"].startTask(taskInfo);
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
                var parentWindow = MicrosoftTeams["ParentAppWindow"].Instance;
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
                var parentWindow = MicrosoftTeams["ParentAppWindow"].Instance;
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
                MicrosoftTeams["showNotification"](showNotificationParameters);
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
                MicrosoftTeams["authentication"].getAuthToken(getAuthTokenParameters);
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
                MicrosoftTeams["authentication"].notifyFailure(reason);
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
                MicrosoftTeams["authentication"].notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["settings"].getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["settings"].registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams["settings"].setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave"
                    });
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
                MicrosoftTeams["settings"].setSettings(settings);
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
                MicrosoftTeams["settings"].setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["settings"].registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.removeEvent && window.removeEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent && window.removeEvent.notifySuccess();
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
                MicrosoftTeams["openFilePreview"](filePreviewParameters);
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
                MicrosoftTeams["tasks"].submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            hasOutput: true,
            action: function (taskInfo, output) {
                MicrosoftTeams["tasks"].startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            }
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                MicrosoftTeams["tasks"].updateTask(taskInfo);
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
                MicrosoftTeams["showNotification"](showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams["getChatMembers"](output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams;
                MicrosoftTeams["getUserJoinedTeams"](output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "readyToUnloadDelay"
                }],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                MicrosoftTeams["registerBeforeUnloadHandler"](function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
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
                window.history.pushState({ some: 'state', id: totalStates }, "tab state" + totalStates, '/testTab');
                output("total States: " + totalStates);
                window.addEventListener('popstate', function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " + event.state.id);
                    }
                }, false);
            }
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams["registerBackButtonHandler"](function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            }
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "openConversationRequest"
                }],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams["conversations"].openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            }
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams["conversations"].closeConversation();
            }
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams["media"].captureImage((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " + file.format + ", size: " + file.size + ", mimeType: " + file.mimeType + ", content: " + content);
                });
            }
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams["media"].selectMedia(mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    let message = "";
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        let preview = "";
                        let len = 20;
                        if (media.preview) {
                            len = Math.min(len, media.preview.length);
                            preview = media.preview.substr(0, len);
                        }
                        message += "[format: " + media.format + ", size: " + media.size
                            + ", mimeType: " + media.mimeType + ", content: " + media.content
                            + ", preview: " + preview + "],";
                    }
                    output(message);
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "inputParams",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (inputParams, output) => {
                MicrosoftTeams["media"].selectMedia(inputParams, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const media = medias[0];
                    media.getMedia((gmErr, blob) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            if (reader.result) {
                                output("Received Blob");
                            }
                        };
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":5,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (selectMediaInputs, output) => {
                MicrosoftTeams["media"].selectMedia(selectMediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1 //microsoftTeams.ImageUriType.ID
                        });
                    }
                    MicrosoftTeams["media"].viewImages(urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "imageUrls",
                    defaultValue: "[\"https://www.w3schools.com/images/picture.jpg\",\"https://www.w3schools.com/images/picture.jpg\"]"
                }],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2 //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams["media"].viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            }
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "locationProps",
                    defaultValue: "{\"allowChooseLocation\":true,\"showMap\":true}"
                }],
            action: (locationProps, output) => {
                MicrosoftTeams["location"].getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            }
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "location",
                    defaultValue: "{\"latitude\":17,\"longitude\":17}"
                }],
            action: (location, output) => {
                MicrosoftTeams["location"].showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            }
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: "{\"timeOutIntervalInSec\":30}"
                }],
            action: (scanBarCodeConfig, output) => {
                MicrosoftTeams["media"].scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
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
        // microsoftTeams.appInitialization.notifySuccess();
    }
    catch (err) {
        // microsoftTeams.appInitialization.notifyFailure({ reason: microsoftTeams.appInitialization.FailedReason.Other, message: err.message });
    }
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