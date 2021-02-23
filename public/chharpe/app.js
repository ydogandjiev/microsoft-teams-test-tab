/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(8),o=t(5),a=t(3),r=function(){function e(){}return e.initialize=function(n,t){e.handlers.themeChange=e.handleThemeChange,e.handlers.fullScreenChange=e.handleFullScreenChange,e.handlers.backButtonPress=e.handleBackButtonPress,e.handlers.load=e.handleLoad,e.handlers.beforeUnload=e.handleBeforeUnload,e.handlers.changeSettings=e.handleChangeSettings,e.handlers.startConversation=e.handleStartConversation,e.handlers.closeConversation=e.handleCloseConversation,e.handlers.appButtonClick=e.handleAppButtonClick,e.handlers.appButtonHoverEnter=e.handleAppButtonHoverEnter,e.handlers.appButtonHoverLeave=e.handleAppButtonHoverLeave,e.messageListener=function(n){return e.processMessage(n)},e.currentWindow=e.currentWindow||window,e.parentWindow=e.currentWindow.parent!==e.currentWindow.self?e.currentWindow.parent:e.currentWindow.opener,(e.parentWindow||t)&&e.currentWindow.addEventListener("message",e.messageListener,!1),e.parentWindow||(a.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=e.handleParentMessage);try{e.parentOrigin="*",e.sendMessageToParent("initialize",[o.version],n)}finally{e.parentOrigin=null}},e.uninitialize=function(){e.currentWindow.removeEventListener("message",e.messageListener,!1),e.parentWindow=null,e.parentOrigin=null,e.parentMessageQueue=[],e.childWindow=null,e.childOrigin=null,e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={}},e.sendMessageToParent=function(n,t,i){var o;t instanceof Function?i=t:t instanceof Array&&(o=t);var r=e.parentWindow,s=e.createMessageRequest(n,o);if(a.GlobalVars.isFramelessWindow)e.currentWindow&&e.currentWindow.nativeInterface&&e.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(s));else{var l=e.getTargetOrigin(r);r&&l?r.postMessage(s,l):e.getTargetMessageQueue(r).push(s)}i&&(e.callbacks[s.id]=i)},e.registerHandler=function(n,t){e.handlers[n]=t},e.removeHandler=function(n){delete e.handlers[n]},e.handleStartConversation=function(e,n,t,i){a.GlobalVars.onStartConversationHandler&&a.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:i})},e.handleCloseConversation=function(e,n,t,i){a.GlobalVars.onCloseConversationHandler&&a.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:i})},e.handleThemeChange=function(n){a.GlobalVars.themeChangeHandler&&a.GlobalVars.themeChangeHandler(n),e.childWindow&&e.sendMessageEventToChild("themeChange",[n])},e.handleFullScreenChange=function(e){a.GlobalVars.fullScreenChangeHandler&&a.GlobalVars.fullScreenChangeHandler(e)},e.handleBackButtonPress=function(){a.GlobalVars.backButtonPressHandler&&a.GlobalVars.backButtonPressHandler()||i.navigateBack()},e.handleLoad=function(n){a.GlobalVars.loadHandler&&a.GlobalVars.loadHandler(n),e.childWindow&&e.sendMessageEventToChild("load",[n])},e.handleBeforeUnload=function(){var n=function(){e.sendMessageToParent("readyToUnload",[])};a.GlobalVars.beforeUnloadHandler&&a.GlobalVars.beforeUnloadHandler(n)||n()},e.handleChangeSettings=function(){a.GlobalVars.changeSettingsHandler&&a.GlobalVars.changeSettingsHandler()},e.handleAppButtonClick=function(){a.GlobalVars.appButtonClickHandler&&a.GlobalVars.appButtonClickHandler()},e.handleAppButtonHoverEnter=function(){a.GlobalVars.appButtonHoverEnterHandler&&a.GlobalVars.appButtonHoverEnterHandler()},e.handleAppButtonHoverLeave=function(){a.GlobalVars.appButtonHoverLeaveHandler&&a.GlobalVars.appButtonHoverLeaveHandler()},e.processMessage=function(n){if(n&&n.data&&"object"==typeof n.data){var t=n.source||n.originalEvent&&n.originalEvent.source,i=n.origin||n.originalEvent&&n.originalEvent.origin;e.shouldProcessMessage(t,i)&&(e.updateRelationships(t,i),t===e.parentWindow?e.handleParentMessage(n):t===e.childWindow&&e.handleChildMessage(n))}},e.shouldProcessMessage=function(n,t){return(!e.currentWindow||n!==e.currentWindow)&&(!!(e.currentWindow&&e.currentWindow.location&&t&&t===e.currentWindow.location.origin)||!!(o.validOriginRegExp.test(t.toLowerCase())||a.GlobalVars.additionalValidOriginsRegexp&&a.GlobalVars.additionalValidOriginsRegexp.test(t.toLowerCase())))},e.updateRelationships=function(n,t){a.GlobalVars.isFramelessWindow||e.parentWindow&&!e.parentWindow.closed&&n!==e.parentWindow?e.childWindow&&!e.childWindow.closed&&n!==e.childWindow||(e.childWindow=n,e.childOrigin=t):(e.parentWindow=n,e.parentOrigin=t),e.parentWindow&&e.parentWindow.closed&&(e.parentWindow=null,e.parentOrigin=null),e.childWindow&&e.childWindow.closed&&(e.childWindow=null,e.childOrigin=null),e.flushMessageQueue(e.parentWindow),e.flushMessageQueue(e.childWindow)},e.handleParentMessage=function(n){if("id"in n.data&&"number"==typeof n.data.id){var t=n.data,i=e.callbacks[t.id];i&&(i.apply(null,t.args.concat([t.isPartialResponse])),e.isPartialResponse(n)||delete e.callbacks[t.id])}else if("func"in n.data&&"string"==typeof n.data.func){t=n.data;var o=e.handlers[t.func];o&&o.apply(this,t.args)}},e.isPartialResponse=function(e){return!0===e.data.isPartialResponse},e.handleChildMessage=function(n){if("id"in n.data&&"func"in n.data){var t=n.data,i=t.func?e.handlers[t.func]:null;if(i){var o=i.apply(this,t.args);void 0!==o&&e.sendMessageResponseToChild(t.id,Array.isArray(o)?o:[o])}else e.sendMessageToParent(t.func,t.args,function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(e.childWindow){var o=n.pop();e.sendMessageResponseToChild(t.id,n,o)}})}},e.getTargetMessageQueue=function(n){return n===e.parentWindow?e.parentMessageQueue:n===e.childWindow?e.childMessageQueue:[]},e.getTargetOrigin=function(n){return n===e.parentWindow?e.parentOrigin:n===e.childWindow?e.childOrigin:null},e.flushMessageQueue=function(n){for(var t=e.getTargetOrigin(n),i=e.getTargetMessageQueue(n);n&&t&&i.length>0;)n.postMessage(i.shift(),t)},e.waitForMessageQueue=function(n,t){var i=e.currentWindow.setInterval(function(){0===e.getTargetMessageQueue(n).length&&(clearInterval(i),t())},100)},e.sendMessageResponseToChild=function(n,t,i){var o=e.childWindow,a=e.createMessageResponse(n,t,i),r=e.getTargetOrigin(o);o&&r&&o.postMessage(a,r)},e.sendMessageEventToChild=function(n,t){var i=e.childWindow,o=e.createMessageEvent(n,t),a=e.getTargetOrigin(i);i&&a?i.postMessage(o,a):e.getTargetMessageQueue(i).push(o)},e.createMessageRequest=function(n,t){return{id:e.nextMessageId++,func:n,args:t||[]}},e.createMessageResponse=function(e,n,t){return{id:e,args:n||[],isPartialResponse:t}},e.createMessageEvent=function(e,n){return{func:e,args:n||[]}},e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e}();n.Communication=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(5),o=t(3),a=t(4);n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!o.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(o.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,i=0;i<e.length;i++)if(e[i]===o.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+o.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=i.defaultSDKVersionForCompatCheck);var n=a.compareSDKVersions(o.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processAdditionalValidOrigins=function(e){var n=o.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&i.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),o.GlobalVars.additionalValidOrigins=n,o.GlobalVars.additionalValidOrigins.length>0?o.GlobalVars.additionalValidOriginsRegexp=a.generateRegExpFromUrls(o.GlobalVars.additionalValidOrigins):o.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(22);function o(e){for(var n="^",t=e.split("."),i=0;i<t.length;i++)n+=(i>0?"[.]":"")+t[i].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+o(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),i=n.split(".");function o(e){return/^\d+$/.test(e)}if(!t.every(o)||!i.every(o))return NaN;for(;t.length<i.length;)t.push("0");for(;i.length<t.length;)i.push("0");for(var a=0;a<t.length;++a)if(t[a]!=i[a])return t[a]>i[a]?1:-1;return 0},n.generateGUID=function(){return i.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(4);n.version="1.9.0",n.defaultSDKVersionForCompatCheck="1.6.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com","http://127.0.0.1:5000"],n.validOriginRegExp=i.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(3),a=t(0);!function(e){function n(){if(o.GlobalVars.getLogHandler){var e=o.GlobalVars.getLogHandler();a.Communication.sendMessageToParent("log.receive",[e])}}e.initialize=function(){a.Communication.registerHandler("log.request",n)},e.registerGetLogHandler=function(e){i.ensureInitialized(),o.GlobalVars.getLogHandler=e,e&&a.Communication.sendMessageToParent("registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(4),a=t(2),r=t(0);n.returnFocus=function(e){i.ensureInitialized(a.FrameContexts.content),r.Communication.sendMessageToParent("returnFocus",[e])},n.navigateToTab=function(e,n){i.ensureInitialized(),r.Communication.sendMessageToParent("navigateToTab",[e],n||o.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided"))},n.navigateCrossDomain=function(e,n){i.ensureInitialized(a.FrameContexts.content,a.FrameContexts.sidePanel,a.FrameContexts.settings,a.FrameContexts.remove,a.FrameContexts.task,a.FrameContexts.stage),r.Communication.sendMessageToParent("navigateCrossDomain",[e],n||o.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))},n.navigateBack=function(e){i.ensureInitialized(),r.Communication.sendMessageToParent("navigateBack",[],e||o.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context."))}},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var i=new Uint8Array(16);e.exports=function(){return t(i),i}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},function(e,n){for(var t=[],i=0;i<256;++i)t[i]=(i+256).toString(16).substr(1);e.exports=function(e,n){var i=n||0,o=t;return[o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(0);!function(e){var n,t,a,r=function(){return function(){this.enabled=!0,this.selected=!1}}();function s(e){a&&a(e)||(i.ensureInitialized(),o.Communication.sendMessageToParent("viewConfigItemPress",[e]))}function l(e){n&&n(e)||(i.ensureInitialized(),o.Communication.sendMessageToParent("handleNavBarMenuItemPress",[e]))}function u(e){t&&t(e)||(i.ensureInitialized(),o.Communication.sendMessageToParent("handleActionMenuItemPress",[e]))}e.MenuItem=r,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){o.Communication.registerHandler("navBarMenuItemPress",l),o.Communication.registerHandler("actionMenuItemPress",u),o.Communication.registerHandler("setModuleView",s)},e.setUpViews=function(e,n){i.ensureInitialized(),a=n,o.Communication.sendMessageToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){i.ensureInitialized(),n=t,o.Communication.sendMessageToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){i.ensureInitialized(),t=n,o.Communication.sendMessageToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),a=t(4),r=t(0),s=t(11),l=t(13),u=t(6),c=t(14);n.initializePrivateApis=function(){u.logs.initialize(),l.meetingRoom.initialize(),s.menus.initialize(),c.remoteCamera.initialize()},n.getUserJoinedTeams=function(e,n){i.ensureInitialized(),r.Communication.sendMessageToParent("getUserJoinedTeams",[n],e)},n.enterFullscreen=function(){i.ensureInitialized(o.FrameContexts.content),r.Communication.sendMessageToParent("enterFullscreen",[])},n.exitFullscreen=function(){i.ensureInitialized(o.FrameContexts.content),r.Communication.sendMessageToParent("exitFullscreen",[])},n.openFilePreview=function(e){i.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference];r.Communication.sendMessageToParent("openFilePreview",n)},n.showNotification=function(e){i.ensureInitialized(o.FrameContexts.content);var n=[e.message,e.notificationType];r.Communication.sendMessageToParent("showNotification",n)},n.uploadCustomApp=function(e,n){i.ensureInitialized(),r.Communication.sendMessageToParent("uploadCustomApp",[e],n||a.getGenericOnCompleteHandler())},n.sendCustomMessage=function(e,n,t){i.ensureInitialized(),r.Communication.sendMessageToParent(e,n,t)},n.sendCustomEvent=function(e,n){if(i.ensureInitialized(),!r.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");r.Communication.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;i.ensureInitialized(),r.Communication.registerHandler(e,function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return n.apply(t,e)})},n.getChatMembers=function(e){i.ensureInitialized(),r.Communication.sendMessageToParent("getChatMembers",e)},n.getConfigSetting=function(e,n){i.ensureInitialized(),r.Communication.sendMessageToParent("getConfigSetting",[n],e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(3),a=t(0);!function(e){function n(e){null!=o.GlobalVars.meetingRoomCapabilitiesUpdateHandler&&(i.ensureInitialized(),o.GlobalVars.meetingRoomCapabilitiesUpdateHandler(e))}function t(e){null!=o.GlobalVars.meetingRoomStatesUpdateHandler&&(i.ensureInitialized(),o.GlobalVars.meetingRoomStatesUpdateHandler(e))}!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.initialize=function(){a.Communication.registerHandler("meetingRoom.meetingRoomCapabilitiesUpdate",n),a.Communication.registerHandler("meetingRoom.meetingRoomStatesUpdate",t)},e.getPairedMeetingRoomInfo=function(e){i.ensureInitialized(),a.Communication.sendMessageToParent("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");i.ensureInitialized(),a.Communication.sendMessageToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");i.ensureInitialized(),o.GlobalVars.meetingRoomCapabilitiesUpdateHandler=e,e&&a.Communication.sendMessageToParent("registerHandler",["meetingRoom.meetingRoomCapabilitiesUpdate"])},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");i.ensureInitialized(),o.GlobalVars.meetingRoomStatesUpdateHandler=e,e&&a.Communication.sendMessageToParent("registerHandler",["meetingRoom.meetingRoomStatesUpdate"])}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(3),a=t(2),r=t(0);!function(e){function n(e){o.GlobalVars.remoteCameraCapableParticipantsChangeHandler&&o.GlobalVars.remoteCameraCapableParticipantsChangeHandler(e)}function t(e){o.GlobalVars.remoteCameraErrorHandler&&o.GlobalVars.remoteCameraErrorHandler(e)}function s(e){o.GlobalVars.remoteCameraDeviceStateChangeHandler&&o.GlobalVars.remoteCameraDeviceStateChangeHandler(e)}function l(e){o.GlobalVars.remoteCameraSessionStatusChangeHandler&&o.GlobalVars.remoteCameraSessionStatusChangeHandler(e)}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.initialize=function(){r.Communication.registerHandler("remoteCamera.capableParticipantsChange",n),r.Communication.registerHandler("remoteCamera.handlerError",t),r.Communication.registerHandler("remoteCamera.deviceStateChange",s),r.Communication.registerHandler("remoteCamera.sessionStatusChange",l)},e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.Communication.sendMessageToParent("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.Communication.sendMessageToParent("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.Communication.sendMessageToParent("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),r.Communication.sendMessageToParent("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),o.GlobalVars.remoteCameraCapableParticipantsChangeHandler=e,e&&r.Communication.sendMessageToParent("registerHandler",["remoteCamera.capableParticipantsChange"])},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),o.GlobalVars.remoteCameraErrorHandler=e,e&&r.Communication.sendMessageToParent("registerHandler",["remoteCamera.handlerError"])},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),o.GlobalVars.remoteCameraDeviceStateChangeHandler=e,e&&r.Communication.sendMessageToParent("registerHandler",["remoteCamera.deviceStateChange"])},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");i.ensureInitialized(a.FrameContexts.sidePanel),o.GlobalVars.remoteCameraSessionStatusChangeHandler=e,e&&r.Communication.sendMessageToParent("registerHandler",["remoteCamera.sessionStatusChange"])}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(3),a=t(2),r=t(0);!function(e){var n,t;function s(){u();try{r.Communication.childWindow&&r.Communication.childWindow.close()}finally{r.Communication.childWindow=null,r.Communication.childOrigin=null}}function l(e){n=e,s();var t=n.width||600,i=n.height||400;t=Math.min(t,r.Communication.currentWindow.outerWidth-400),i=Math.min(i,r.Communication.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=n.url;var a=void 0!==r.Communication.currentWindow.screenLeft?r.Communication.currentWindow.screenLeft:r.Communication.currentWindow.screenX,l=void 0!==r.Communication.currentWindow.screenTop?r.Communication.currentWindow.screenTop:r.Communication.currentWindow.screenY;a+=r.Communication.currentWindow.outerWidth/2-t/2,l+=r.Communication.currentWindow.outerHeight/2-i/2,r.Communication.childWindow=r.Communication.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+a+", width="+t+", height="+i),r.Communication.childWindow?c():m("FailedToOpenWindow")}function u(){t&&(clearInterval(t),t=0),r.Communication.removeHandler("initialize"),r.Communication.removeHandler("navigateCrossDomain")}function c(){u(),t=r.Communication.currentWindow.setInterval(function(){if(!r.Communication.childWindow||r.Communication.childWindow.closed)m("CancelledByUser");else{var e=r.Communication.childOrigin;try{r.Communication.childOrigin="*",r.Communication.sendMessageEventToChild("ping")}finally{r.Communication.childOrigin=e}}},100),r.Communication.registerHandler("initialize",function(){return[a.FrameContexts.authentication,o.GlobalVars.hostClientType]}),r.Communication.registerHandler("navigateCrossDomain",function(){return!1})}function d(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,s()}}function m(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,s()}}function g(e,n,t){if(e){var i=document.createElement("a");i.href=decodeURIComponent(e),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(i.href=f(i.href,"result",t)),r.Communication.currentWindow.location.assign(f(i.href,"authSuccess",""))),n&&"reason"===n&&(t&&(i.href=f(i.href,"reason",t)),r.Communication.currentWindow.location.assign(f(i.href,"authFailure",""))))}}function f(e,n,t){var i=e.indexOf("#"),o=-1===i?"#":e.substr(i);return o=o+"&"+n+(""!==t?"="+t:""),(e=-1===i?e:e.substr(0,i))+o}e.initialize=function(){r.Communication.registerHandler("authentication.authenticate.success",d),r.Communication.registerHandler("authentication.authenticate.failure",m)},e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(i.ensureInitialized(a.FrameContexts.content,a.FrameContexts.sidePanel,a.FrameContexts.settings,a.FrameContexts.remove,a.FrameContexts.task,a.FrameContexts.stage),o.GlobalVars.hostClientType===a.HostClientType.desktop||o.GlobalVars.hostClientType===a.HostClientType.android||o.GlobalVars.hostClientType===a.HostClientType.ios||o.GlobalVars.hostClientType===a.HostClientType.rigel){var s=document.createElement("a");s.href=t.url,r.Communication.sendMessageToParent("authentication.authenticate",[s.href,t.width,t.height],function(e,n){e?t.successCallback(n):t.failureCallback(n)})}else l(t)},e.getAuthToken=function(e){i.ensureInitialized(),r.Communication.sendMessageToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent],function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.getUser=function(e){i.ensureInitialized(),r.Communication.sendMessageToParent("authentication.getUser",function(n,t){n?e.successCallback(t):e.failureCallback(t)})},e.notifySuccess=function(e,n){g(n,"result",e),i.ensureInitialized(a.FrameContexts.authentication),r.Communication.sendMessageToParent("authentication.authenticate.success",[e]),r.Communication.waitForMessageQueue(r.Communication.parentWindow,function(){return setTimeout(function(){return r.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){g(n,"reason",e),i.ensureInitialized(a.FrameContexts.authentication),r.Communication.sendMessageToParent("authentication.authenticate.failure",[e]),r.Communication.waitForMessageQueue(r.Communication.parentWindow,function(){return setTimeout(function(){return r.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),a=t(4),r=t(0);!function(e){var n,t;function s(e){var t=new l(e);n?n(t):t.notifySuccess()}e.initialize=function(){r.Communication.registerHandler("settings.save",s),r.Communication.registerHandler("settings.remove",u)},e.setValidityState=function(e){i.ensureInitialized(o.FrameContexts.settings,o.FrameContexts.remove),r.Communication.sendMessageToParent("settings.setValidityState",[e])},e.getSettings=function(e){i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings,o.FrameContexts.remove),r.Communication.sendMessageToParent("settings.getSettings",e)},e.setSettings=function(e,n){i.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings),r.Communication.sendMessageToParent("settings.setSettings",[e],n||a.getGenericOnCompleteHandler())},e.registerOnSaveHandler=function(e){i.ensureInitialized(o.FrameContexts.settings),n=e,e&&r.Communication.sendMessageToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){i.ensureInitialized(o.FrameContexts.remove,o.FrameContexts.settings),t=e,e&&r.Communication.sendMessageToParent("registerHandler",["remove"])};var l=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),r.Communication.sendMessageToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),r.Communication.sendMessageToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function u(){var e=new c;t?t(e):e.notifySuccess()}var c=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),r.Communication.sendMessageToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),r.Communication.sendMessageToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),a=t(4),r=t(0),s=function(){function e(){}return e.prototype.postMessage=function(e,n){i.ensureInitialized(),r.Communication.sendMessageToParent("messageForChild",[e],n||a.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&r.Communication.registerHandler("messageForParent",n)},e}();n.ChildAppWindow=s;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){i.ensureInitialized(o.FrameContexts.task),r.Communication.sendMessageToParent("messageForParent",[e],n||a.getGenericOnCompleteHandler())},e.prototype.addEventListener=function(e,n){"message"===e&&r.Communication.registerHandler("messageForChild",n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),a=t(7),r=t(1),s=t(2),l=t(4),u=t(31),c=t(0);!function(e){var n="1.7.0",t="1.8.0",d="1.9.0";!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var m=function(){return function(){}}();e.File=m,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),o.GlobalVars.isFramelessWindow?r.isAPISupportedByPlatform(n)?c.Communication.sendMessageToParent("captureImage",e):e({errorCode:a.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:a.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var g=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return i(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.isAPISupportedByPlatform(t))?u.validateGetMediaInputs(this.mimeType,this.format,this.content)?r.isAPISupportedByPlatform("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:a.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:a.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content];c.Communication.sendMessageToParent("getMedia",t,function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var i=u.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,i)}else{var o=u.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(o)}else e({errorCode:a.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)})},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},i=[n,this.content];this.content&&e&&c.Communication.sendMessageToParent("getMedia",i),c.Communication.registerHandler("getMedia"+n,function(i){if(e){var o=JSON.parse(i);if(o.error)e(o.error,null),c.Communication.removeHandler("getMedia"+n);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){var r=u.createFile(t.assembleAttachment,t.mediaMimeType);e(o.error,r),c.Communication.removeHandler("getMedia"+n)}else{var s=u.decodeAttachment(o.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(s)}else e({errorCode:a.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),c.Communication.removeHandler("getMedia"+n)}})},n}(m);e.Media=g,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.isAPISupportedByPlatform(t))if(u.validateSelectMediaInputs(e)){var i=[e];c.Communication.sendMessageToParent("selectMedia",i,function(e,t){if(t){for(var i=[],o=0,a=t;o<a.length;o++){var r=a[o];i.push(new g(r))}n(e,i)}else n(e,null)})}else{var o={errorCode:a.ErrorCode.INVALID_ARGUMENTS};n(o,null)}else{var l={errorCode:a.ErrorCode.OLD_PLATFORM};n(l,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.isAPISupportedByPlatform(t))if(u.validateViewImagesInput(e)){var i=[e];c.Communication.sendMessageToParent("viewImages",i,n)}else n({errorCode:a.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:a.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");r.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),o.GlobalVars.hostClientType!==s.HostClientType.desktop&&o.GlobalVars.hostClientType!==s.HostClientType.web&&o.GlobalVars.hostClientType!==s.HostClientType.rigel?r.isAPISupportedByPlatform(d)?u.validateScanBarCodeInput(n)?c.Communication.sendMessageToParent("media.scanBarCode",[n],e):e({errorCode:a.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:a.ErrorCode.OLD_PLATFORM},null):e({errorCode:a.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";function i(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),i(t(20)),i(t(27))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(21);n.bot=i.bot;var o=t(11);n.menus=o.menus;var a=t(6);n.logs=a.logs;var r=t(25);n.NotificationTypes=r.NotificationTypes,n.ViewerActionTypes=r.ViewerActionTypes;var s=t(12);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp;var l=t(26);n.conversations=l.conversations;var u=t(13);n.meetingRoom=u.meetingRoom;var c=t(14);n.remoteCamera=c.remoteCamera},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(1);!function(e){e.sendQuery=function(e,n,t){o.ensureInitialized(),i.Communication.sendMessageToParent("bot.executeQuery",[e],function(e,i){e?n(i):t(i)})},e.getSupportedCommands=function(e,n){o.ensureInitialized(),i.Communication.sendMessageToParent("bot.getSupportedCommands",function(t,i){t?e(i):n(i)})},e.authenticate=function(e,n,t){o.ensureInitialized(),i.Communication.sendMessageToParent("bot.authenticate",[e],function(e,i){e?n(i):t(i)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var i=t(23),o=t(24),a=o;a.v1=i,a.v4=o,e.exports=a},function(e,n,t){var i,o,a=t(9),r=t(10),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,c=n||[],d=(e=e||{}).node||i,m=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==m){var g=a();null==d&&(d=i=[1|g[0],g[1],g[2],g[3],g[4],g[5]]),null==m&&(m=o=16383&(g[6]<<8|g[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),C=void 0!==e.nsecs?e.nsecs:l+1,p=f-s+(C-l)/1e4;if(p<0&&void 0===e.clockseq&&(m=m+1&16383),(p<0||f>s)&&void 0===e.nsecs&&(C=0),C>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=f,l=C,o=m;var h=(1e4*(268435455&(f+=122192928e5))+C)%4294967296;c[u++]=h>>>24&255,c[u++]=h>>>16&255,c[u++]=h>>>8&255,c[u++]=255&h;var v=f/4294967296*1e4&268435455;c[u++]=v>>>8&255,c[u++]=255&v,c[u++]=v>>>24&15|16,c[u++]=v>>>16&255,c[u++]=m>>>8|128,c[u++]=255&m;for(var b=0;b<6;++b)c[u+b]=d[b];return n||r(c)}},function(e,n,t){var i=t(9),o=t(10);e.exports=function(e,n,t){var a=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n)for(var s=0;s<16;++s)n[a+s]=r[s];return n||o(r)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(3),a=t(2),r=t(0);!function(e){e.openConversation=function(e){i.ensureInitialized(a.FrameContexts.content),r.Communication.sendMessageToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}],function(e,n){if(!e)throw new Error(n)}),o.GlobalVars.onCloseConversationHandler=e.onCloseConversation,o.GlobalVars.onStartConversationHandler=e.onStartConversation},e.closeConversation=function(){i.ensureInitialized(a.FrameContexts.content),r.Communication.sendMessageToParent("conversations.closeConversation"),o.GlobalVars.onCloseConversationHandler=null,o.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(28);n.appInitialization=i.appInitialization;var o=t(15);n.authentication=o.authentication;var a=t(2);n.FrameContexts=a.FrameContexts,n.HostClientType=a.HostClientType,n.TaskModuleDimension=a.TaskModuleDimension,n.TeamType=a.TeamType,n.UserTeamRole=a.UserTeamRole,n.ChannelType=a.ChannelType;var r=t(7);n.ErrorCode=r.ErrorCode;var s=t(29);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=s.registerChangeSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(8);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var u=t(16);n.settings=u.settings;var c=t(30);n.tasks=c.tasks;var d=t(17);n.ChildAppWindow=d.ChildAppWindow,n.ParentAppWindow=d.ParentAppWindow;var m=t(18);n.media=m.media;var g=t(32);n.location=g.location;var f=t(33);n.meeting=f.meeting},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(5),a=t(0);!function(e){e.notifyAppLoaded=function(){i.ensureInitialized(),a.Communication.sendMessageToParent("appInitialization.appLoaded",[o.version])},e.notifySuccess=function(){i.ensureInitialized(),a.Communication.sendMessageToParent("appInitialization.success",[o.version])},e.notifyFailure=function(e){i.ensureInitialized(),a.Communication.sendMessageToParent("appInitialization.failure",[e.reason,e.message])},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(3),a=t(5),r=t(16),s=t(4),l=t(6),u=t(2),c=t(0),d=t(15),m=t(12);function g(e,n){o.GlobalVars.initializeCalled||(o.GlobalVars.initializeCalled=!0,c.Communication.initialize(function(e,n,t){void 0===t&&(t=a.defaultSDKVersionForCompatCheck),o.GlobalVars.frameContext=e,o.GlobalVars.hostClientType=n,o.GlobalVars.clientSupportedSDKVersion=t,o.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),o.GlobalVars.initializeCallbacks=[],o.GlobalVars.initializeCompleted=!0},n),d.authentication.initialize(),r.settings.initialize(),m.initializePrivateApis(),this._uninitialize=function(){o.GlobalVars.frameContext&&(C(null),p(null),h(null),b(null),v(null),l.logs.registerGetLogHandler(null)),o.GlobalVars.frameContext===u.FrameContexts.settings&&r.settings.registerOnSaveHandler(null),o.GlobalVars.frameContext===u.FrameContexts.remove&&r.settings.registerOnRemoveHandler(null),o.GlobalVars.initializeCalled=!1,o.GlobalVars.initializeCompleted=!1,o.GlobalVars.initializeCallbacks=[],o.GlobalVars.additionalValidOrigins=[],o.GlobalVars.frameContext=null,o.GlobalVars.hostClientType=null,o.GlobalVars.isFramelessWindow=!1,c.Communication.uninitialize()}),Array.isArray(n)&&i.processAdditionalValidOrigins(n),e&&(o.GlobalVars.initializeCompleted?e():o.GlobalVars.initializeCallbacks.push(e))}function f(){window.print()}function C(e){i.ensureInitialized(),o.GlobalVars.themeChangeHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["themeChange"])}function p(e){i.ensureInitialized(),o.GlobalVars.fullScreenChangeHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["fullScreen"])}function h(e){i.ensureInitialized(),o.GlobalVars.backButtonPressHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["backButton"])}function v(e){i.ensureInitialized(),o.GlobalVars.loadHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["load"])}function b(e){i.ensureInitialized(),o.GlobalVars.beforeUnloadHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["beforeUnload"])}function T(e){i.ensureInitialized(u.FrameContexts.content),c.Communication.sendMessageToParent("setFrameContext",[e])}n.initialize=g,n._initialize=function(e){c.Communication.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){o.GlobalVars.printCapabilityEnabled||(o.GlobalVars.printCapabilityEnabled=!0,i.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(f(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=f,n.getContext=function(e){i.ensureInitialized(),c.Communication.sendMessageToParent("getContext",function(n){n.frameContext||(n.frameContext=o.GlobalVars.frameContext),e(n)})},n.registerOnThemeChangeHandler=C,n.registerFullScreenHandler=p,n.registerAppButtonClickHandler=function(e){i.ensureInitialized(u.FrameContexts.content),o.GlobalVars.appButtonClickHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["appButtonClick"])},n.registerAppButtonHoverEnterHandler=function(e){i.ensureInitialized(u.FrameContexts.content),o.GlobalVars.appButtonHoverEnterHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["appButtonHoverEnter"])},n.registerAppButtonHoverLeaveHandler=function(e){i.ensureInitialized(u.FrameContexts.content),o.GlobalVars.appButtonHoverLeaveHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["appButtonHoverLeave"])},n.registerBackButtonHandler=h,n.registerOnLoadHandler=v,n.registerBeforeUnloadHandler=b,n.registerChangeSettingsHandler=function(e){i.ensureInitialized(u.FrameContexts.content),o.GlobalVars.changeSettingsHandler=e,e&&c.Communication.sendMessageToParent("registerHandler",["changeSettings"])},n.getTabInstances=function(e,n){i.ensureInitialized(),c.Communication.sendMessageToParent("getTabInstances",[n],e)},n.getMruTabInstances=function(e,n){i.ensureInitialized(),c.Communication.sendMessageToParent("getMruTabInstances",[n],e)},n.shareDeepLink=function(e){i.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel),c.Communication.sendMessageToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){i.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage),c.Communication.sendMessageToParent("executeDeepLink",[e],n||s.getGenericOnCompleteHandler())},n.setFrameContext=T,n.initializeWithFrameContext=function(e,n,t){g(n,t),T(e)}},function(e,n,t){"use strict";var i=this&&this.__rest||function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&(t[i[o]]=e[i[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),a=t(17),r=t(0),s=t(1);!function(e){e.startTask=function(e,n){return s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel),r.Communication.sendMessageToParent("tasks.startTask",[e],n),new a.ChildAppWindow},e.updateTask=function(e){s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.task),e.width,e.height;var n=i(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");r.Communication.sendMessageToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.task),r.Communication.sendMessageToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(18);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,i=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==i&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),i++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),i=new Array(t.length),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);var a=new Uint8Array(i),r=new Blob([a],{type:n});return{sequence:e.chunkSequence,file:r}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==i.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(7),o=t(1),a=t(2),r=t(0);!function(e){e.locationAPIsRequiredVersion="1.9.0",e.getLocation=function(n,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");o.ensureInitialized(a.FrameContexts.content,a.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion)?n?r.Communication.sendMessageToParent("location.getLocation",[n],t):t({errorCode:i.ErrorCode.INVALID_ARGUMENTS},void 0):t({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(n,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");o.ensureInitialized(a.FrameContexts.content,a.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion)?n?r.Communication.sendMessageToParent("location.showLocation",[n],t):t({errorCode:i.ErrorCode.INVALID_ARGUMENTS},void 0):t({errorCode:i.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(1);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");o.ensureInitialized(),i.Communication.sendMessageToParent("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");o.ensureInitialized(),i.Communication.sendMessageToParent("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");o.ensureInitialized(),i.Communication.sendMessageToParent("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");o.ensureInitialized(),i.Communication.sendMessageToParent("meeting.getAuthenticationTokenForAnonymousUser",e)}}(n.meeting||(n.meeting={}))}])});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/utils.ts
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

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(248);
;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min.initialize();
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getContext(output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getTabInstances(output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getMruTabInstances(output);
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
                MicrosoftTeams_min.navigateCrossDomain(url);
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
                MicrosoftTeams_min.returnFocus(navigateForward);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
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
                MicrosoftTeams_min.navigateCrossDomain(url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            }
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerChangeSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
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
                MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
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
                MicrosoftTeams_min.executeDeepLink(deepLink);
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
                MicrosoftTeams_min.authentication.authenticate({
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
                childWindow = MicrosoftTeams_min.tasks.startTask(taskInfo);
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
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
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
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
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
                MicrosoftTeams_min.showNotification(showNotificationParameters);
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
                MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
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
                MicrosoftTeams_min.authentication.notifyFailure(reason);
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
                MicrosoftTeams_min.authentication.notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams_min.settings.setSettings({
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
                MicrosoftTeams_min.settings.setSettings(settings);
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
                MicrosoftTeams_min.settings.setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnRemoveHandler(function (removeEvent) {
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
                MicrosoftTeams_min.openFilePreview(filePreviewParameters);
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
                MicrosoftTeams_min.tasks.submitTask(result, appId);
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
                MicrosoftTeams_min.tasks.startTask(taskInfo, (error, result) => {
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
                MicrosoftTeams_min.tasks.updateTask(taskInfo);
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
                MicrosoftTeams_min.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getChatMembers(output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min;
                MicrosoftTeams_min.getUserJoinedTeams(output);
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
                MicrosoftTeams_min.registerBeforeUnloadHandler(function (readyToUnload) {
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
                MicrosoftTeams_min.registerBackButtonHandler(function () {
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
                    MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
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
                MicrosoftTeams_min.conversations.closeConversation();
            }
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams_min.media.captureImage((err, files) => {
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
                MicrosoftTeams_min.media.selectMedia(mediaInputs, (err, medias) => {
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
                MicrosoftTeams_min.media.selectMedia(inputParams, (err, medias) => {
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
                MicrosoftTeams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
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
                    MicrosoftTeams_min.media.viewImages(urlList, (gmErr) => {
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
                MicrosoftTeams_min.media.viewImages(urlList, (err) => {
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
                MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
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
                MicrosoftTeams_min.location.showLocation(location, (err, result) => {
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
                MicrosoftTeams_min.media.scanBarCode((err, result) => {
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
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({ reason: MicrosoftTeams_min.appInitialization.FailedReason.Other, message: err.message });
    }
};

;// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();

})();

/******/ })()
;
//# sourceMappingURL=app.js.map