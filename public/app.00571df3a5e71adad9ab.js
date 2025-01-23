/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/jsonUtils.ts
function renderJson(parent, value, appendComma = false) {
    if (Array.isArray(value)) {
        parent.appendChild(renderSymbol('['));
        if (value.length > 0) {
            parent.appendChild(renderArrayContent(value));
        }
        parent.appendChild(renderSymbol(']'));
    }
    else if (typeof value === 'object' && value !== null) {
        parent.appendChild(renderSymbol('{'));
        if (Object.keys(value).length > 0) {
            parent.appendChild(renderObjectContent(value));
        }
        parent.appendChild(renderSymbol('}'));
    }
    else {
        parent.appendChild(renderSimpleType(value, 'json-object-value'));
    }
    if (appendComma) {
        parent.appendChild(renderSymbol(','));
    }
}
function renderSimpleType(value, className = '') {
    const element = document.createElement('span');
    element.className = className;
    switch (typeof value) {
        case 'string':
            element.innerText = `"${value}"`;
            break;
        case 'number':
        case 'boolean':
            element.innerText = value.toString();
            break;
        case 'undefined':
            element.innerText = 'undefined';
        case 'object':
            if (value === null) {
                element.innerText = 'null';
            }
        default:
            element.innerText = value.toString();
    }
    return element;
}
function renderSymbol(symbol, className = '') {
    const element = document.createElement('span');
    element.className = className;
    element.innerText = symbol;
    return element;
}
function renderObjectContent(object) {
    const element = document.createElement('div');
    element.className = 'json-object-content';
    Object.keys(object).forEach((key, index) => {
        const value = object[key];
        const appendComma = index < Object.keys(object).length - 1;
        element.appendChild(renderKeyValuePair(key, value, appendComma));
    });
    return element;
}
function renderKeyValuePair(key, value, appendComma) {
    const element = document.createElement('div');
    element.className = 'json-object-key-value';
    element.appendChild(renderObjectKey(key));
    renderJson(element, value, appendComma);
    return element;
}
function renderObjectKey(name) {
    const element = document.createElement('span');
    element.className = 'json-object-key-wrapper';
    const elementInner = document.createElement('span');
    elementInner.className = 'json-object-key';
    elementInner.innerText = name;
    element.appendChild(elementInner);
    element.appendChild(renderSymbol(':'));
    return element;
}
function renderArrayContent(array) {
    const element = document.createElement('div');
    element.className = 'json-array-content';
    array.forEach((item, index) => {
        const appendComma = index < array.length - 1;
        element.appendChild(renderArrayItem(item, appendComma));
    });
    return element;
}
function renderArrayItem(value, appendComma) {
    const element = document.createElement('div');
    element.className = 'json-array-item';
    renderJson(element, value, appendComma);
    return element;
}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/interfaces.js
var interfaces_n,interfaces_e,interfaces_t,E,interfaces_O,R,interfaces_o,T,N,_;function interfaces_i(n){return void 0!==(null==n?void 0:n.errorCode)}!function(n){n.Inline="inline",n.Desktop="desktop",n.Web="web"}(interfaces_n||(interfaces_n={})),function(n){n.M365Content="m365content"}(interfaces_e||(interfaces_e={})),function(n){n.DriveId="driveId",n.GroupId="groupId",n.SiteId="siteId",n.UserId="userId"}(interfaces_t||(interfaces_t={})),function(n){n[n.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",n[n.INTERNAL_ERROR=500]="INTERNAL_ERROR",n[n.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",n[n.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",n[n.NETWORK_ERROR=2e3]="NETWORK_ERROR",n[n.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",n[n.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",n[n.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",n[n.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",n[n.THROTTLE=7e3]="THROTTLE",n[n.USER_ABORT=8e3]="USER_ABORT",n[n.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",n[n.OLD_PLATFORM=9e3]="OLD_PLATFORM",n[n.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",n[n.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(E||(E={})),function(n){n.GeoLocation="geolocation",n.Media="media"}(interfaces_O||(interfaces_O={})),function(n){n.BCAIS="bcais",n.BCWAF="bcwaf",n.BCWBF="bcwbf"}(R||(R={})),function(n){n.Faculty="faculty",n.Student="student",n.Other="other"}(interfaces_o||(interfaces_o={})),function(n){n.Adult="adult",n.MinorNoParentalConsentRequired="minorNoParentalConsentRequired",n.MinorWithoutParentalConsent="minorWithoutParentalConsent",n.MinorWithParentalConsent="minorWithParentalConsent",n.NonAdult="nonAdult"}(T||(T={})),function(n){n.HigherEducation="higherEducation",n.K12="k12",n.Other="other"}(N||(N={})),function(n){n.TextPlain="text/plain",n.TextHtml="text/html",n.ImagePNG="image/png",n.ImageJPEG="image/jpeg"}(_||(_={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/constants.js
var constants_o,constants_a,constants_s,constants_n,constants_i,constants_t,constants_r;!function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.macos="macos",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(constants_o||(constants_o={})),function(e){e.office="Office",e.outlook="Outlook",e.outlookWin32="OutlookWin32",e.orange="Orange",e.places="Places",e.teams="Teams",e.teamsModern="TeamsModern"}(constants_a||(constants_a={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(constants_s||(constants_s={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(constants_n||(constants_n={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(constants_i||(constants_i={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(constants_t||(constants_t={})),function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(constants_r||(constants_r={}));const constants_m={errorCode:E.NOT_SUPPORTED_ON_PLATFORM},constants_d={majorVersion:1,minorVersion:5},constants_u={adaptiveCardSchemaVersion:{majorVersion:1,minorVersion:5}},constants_l=new Error("Invalid input count: Must supply a valid image count (limit of 10)."),constants_c=new Error("Invalid response: Received more images than the specified max limit in the response.");

;// CONCATENATED MODULE: ./src/utils.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let inputs = {};
const LocalStorageContextKey = "app-context";
const LocalStorageUnloadKey = "isUnloading";
let appCacheMode = "Normal";
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = createButton({
        displayName: config.name,
        id: config.name,
    });
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
                    if (defaultInputValue) {
                        input.checked = defaultInputValue;
                    }
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
        label.setAttribute("id", "outputHeader-" + config.name);
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.setAttribute("aria-label", "textarea-" + config.name);
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    if (config.hasSelectMedia) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("SelectMediaOutput:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var image = document.createElement("img");
        image.id = "image-" + config.name;
        image.height = 30;
        image.width = 20;
        element.appendChild(image);
        element.appendChild(document.createElement("br"));
        var image1 = document.createElement("img");
        image1.id = "image-1" + config.name;
        image1.height = 30;
        image1.width = 20;
        element.appendChild(image1);
        element.appendChild(document.createElement("br"));
        var image2 = document.createElement("img");
        image2.id = "image-2" + config.name;
        image2.height = 30;
        image2.width = 20;
        element.appendChild(image2);
        element.appendChild(document.createElement("br"));
        var image3 = document.createElement("img");
        image3.id = "image-3" + config.name;
        image3.height = 30;
        image3.width = 20;
        element.appendChild(image3);
        element.appendChild(document.createElement("br"));
        var image4 = document.createElement("img");
        image4.id = "image-4" + config.name;
        image4.height = 30;
        image4.width = 20;
        element.appendChild(image4);
        element.appendChild(document.createElement("br"));
        var image5 = document.createElement("img");
        image5.id = "image-5" + config.name;
        image5.height = 30;
        image5.width = 20;
        element.appendChild(image5);
        element.appendChild(document.createElement("br"));
        var image6 = document.createElement("img");
        image6.id = "image-6" + config.name;
        image6.height = 30;
        image6.width = 20;
        element.appendChild(image6);
        element.appendChild(document.createElement("br"));
        var image7 = document.createElement("img");
        image7.id = "image-7" + config.name;
        image7.height = 30;
        image7.width = 20;
        element.appendChild(image7);
        element.appendChild(document.createElement("br"));
        var image8 = document.createElement("img");
        image8.id = "image-8" + config.name;
        image8.height = 30;
        image8.width = 20;
        element.appendChild(image8);
        element.appendChild(document.createElement("br"));
        var image9 = document.createElement("img");
        image9.id = "image-9" + config.name;
        image9.height = 30;
        image9.width = 20;
        element.appendChild(image9);
    }
    if (config.hasGetMedia) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("GetMedia (First selected):"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var getMediaImage = document.createElement("img");
        getMediaImage.id = "image-getMediaImage" + config.name;
        getMediaImage.height = 200;
        getMediaImage.width = 150;
        element.appendChild(getMediaImage);
    }
    container.appendChild(element);
    button.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
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
        if (config.hasSelectMedia) {
            args.push(function (result) {
                if (typeof result !== typeof []) {
                    alert("something went wrong");
                }
                if (result.length > 0 && result[0]) {
                    image.src = result[0];
                }
                else {
                    image.removeAttribute('src');
                }
                if (result.length > 1 && result[1]) {
                    image1.src = result[1];
                }
                else {
                    image1.removeAttribute('src');
                }
                if (result.length > 2 && result[2]) {
                    image2.src = result[2];
                }
                else {
                    image2.removeAttribute('src');
                }
                if (result.length > 3 && result[3]) {
                    image3.src = result[3];
                }
                else {
                    image3.removeAttribute('src');
                }
                if (result.length > 4 && result[4]) {
                    image4.src = result[4];
                }
                else {
                    image4.removeAttribute('src');
                }
                if (result.length > 5 && result[5]) {
                    image5.src = result[5];
                }
                else {
                    image5.removeAttribute('src');
                }
                if (result.length > 6 && result[6]) {
                    image6.src = result[6];
                }
                else {
                    image6.removeAttribute('src');
                }
                if (result.length > 7 && result[7]) {
                    image7.src = result[7];
                }
                else {
                    image7.removeAttribute('src');
                }
                if (result.length > 8 && result[8]) {
                    image8.src = result[8];
                }
                else {
                    image8.removeAttribute('src');
                }
                if (result.length > 9 && result[9]) {
                    image9.src = result[9];
                }
                else {
                    image9.removeAttribute('src');
                }
            });
        }
        if (config.hasGetMedia) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                getMediaImage.src = result;
            });
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
                ["copy", "view"].forEach((buttonType) => {
                    const button = document.getElementById(`button-${buttonType}-${config.name}`);
                    if (result) {
                        if (button) {
                            button.style.display = "inline";
                        }
                        else {
                            const newButton = createButton({
                                displayName: buttonType,
                                id: `${buttonType}-${config.name}`,
                                ariaLabel: `${buttonType} ${config.name}`,
                                className: `${buttonType}-button`,
                                onClick: buttonType === "copy" ? copyText(config.name) : viewJson(config.name)
                            });
                            const outputHeader = document.getElementById(`outputHeader-${config.name}`);
                            outputHeader && outputHeader.appendChild(newButton);
                        }
                    }
                    else if (button) {
                        button.style.display = "none";
                    }
                });
            });
        }
        if (config.onClick) {
            textarea.value = yield config.onClick.apply(null, args);
        }
        if (config.action)
            config.action.apply(null, args);
    }));
    var searchInput = document.getElementById("searchInput");
    searchInput && searchInput.addEventListener("input", function () {
        // Show element if it matches search text or searchBox is empty
        if (searchInput.value === "" || config.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        if (!inputs[id]) {
            continue;
        }
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
function filterHandler() {
    var searchInput = document.getElementById('searchInput');
    var sectionTitle = document.getElementsByClassName('sectionTitle');
    searchInput && searchInput.addEventListener('input', function () {
        var searchText = searchInput.value.toLowerCase();
        for (var i = 0; i < sectionTitle.length; i++) {
            var title = sectionTitle[i].textContent.toLowerCase();
            if (title.indexOf(searchText) === -1) {
                sectionTitle[i].parentElement.style.display = 'none';
            }
            else {
                sectionTitle[i].parentElement.style.display = 'block';
            }
        }
    });
}
function initializeNavigation(searchParams) {
    const searchString = searchParams.toString();
    ["index", "page1", "page2"].forEach((page) => {
        const pageAnchor = document.getElementById(page);
        if (pageAnchor) {
            pageAnchor.href = `/${page}.html?${searchString}`;
        }
    });
}
function initializeDownloadLinks() {
    const csv = "Id,Value\n1,Hello world!\n";
    const data = new Blob([csv]);
    const downloadLink = document.getElementById("downloadLink");
    if (downloadLink) {
        downloadLink.href = URL.createObjectURL(data);
    }
    const downloadButton = document.getElementById("downloadButton");
    if (!downloadButton) {
        return;
    }
    downloadButton.onclick = () => {
        const csv = "Id, Value\n1,Hello world!\n";
        const data = new Blob([csv]);
        let downloadLink = document.getElementById("hiddenDownloadLink");
        if (downloadLink == null) {
            downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'DownloadViaButton.csv');
            downloadLink.setAttribute('id', 'hiddenDownloadLink');
            document.body.appendChild(downloadLink);
        }
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        downloadLink.href = URL.createObjectURL(data);
        downloadLink.style.display = 'none';
        downloadLink.click();
    };
}
function outputTabRenderedLocation(getContext) {
    if (isInTeams()) {
        getContext(outputTabRenderedLocationInTeams);
    }
    else {
        addPageSection(`Currently running outside of Microsoft Teams.`);
    }
    function isInTeams() {
        if ((window.parent === window.self && window.nativeInterface) ||
            window.name === "embedded-page-container" ||
            window.name === "extension-tab-frame") {
            return true;
        }
        return false;
    }
}
function initialieCacheToggleButton() {
    const cacheToggle = document.getElementById("cache-mode-toggle");
    if (!cacheToggle) {
        return;
    }
    cacheToggle.innerText = appCacheMode;
    cacheToggle.onclick = () => {
        appCacheMode = appCacheMode === "Normal" ? "ReloadOnUnload" : "Normal";
        cacheToggle.innerText = appCacheMode;
    };
}
function outputTabRenderedLocationInTeams(context) {
    var appLocation = 'unidentified location...';
    const perfData = window.performance;
    if (context.meetingId) {
        appLocation = 'Meeting';
    }
    else if (context.chatId) {
        appLocation = 'Chat';
    }
    else if (context.teamId && context.channelId) {
        appLocation = `${context.channelName} channel in ${context.teamName}`;
    }
    else {
        appLocation = 'Teams App';
    }
    if (isInConfig()) {
        appLocation = `${appLocation} (Config page)`;
    }
    else if (isInSidePanel()) {
        appLocation = `${appLocation} (Side Panel)`;
    }
    addPageSection(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`);
    function isInConfig() {
        return context.frameContext === constants_s.settings;
    }
    function isInSidePanel() {
        return context.frameContext === constants_s.sidePanel;
    }
}
;
function printRecentLocalStoredAppContext() {
    var storedContext = localStorage.getItem(LocalStorageContextKey);
    var contextContainer = document.getElementById("textarea-recentAppContext");
    if (!storedContext || !contextContainer) {
        return;
    }
    contextContainer.value = storedContext;
    ["copy", "view"].forEach((buttonType) => {
        const button = document.getElementById(`button-${buttonType}-recentAppContext`);
        if (storedContext) {
            if (button) {
                button.style.display = "inline";
            }
            else {
                const newButton = createButton({
                    displayName: buttonType,
                    id: `${buttonType}-recentAppContext`,
                    ariaLabel: `${buttonType} recent app context`,
                    className: `${buttonType}-button`,
                    onClick: buttonType === "copy" ? copyText("recentAppContext") : viewJson("recentAppContext")
                });
                const outputHeader = document.getElementById("outputHeader-recentAppContext");
                outputHeader && outputHeader.appendChild(newButton);
            }
        }
        else if (button) {
            button.style.display = "none";
        }
    });
}
;
function handleReloadOnUnload(sendCustomMessage) {
    const isReloading = localStorage.getItem(LocalStorageUnloadKey);
    if (isReloading === 'true') {
        console.log(`>>>>> Test tab app calling readyToUnload.`);
        localStorage.removeItem(LocalStorageUnloadKey);
        sendCustomMessage("readyToUnload");
    }
}
function addPageSection(content) {
    var element = document.createElement("div");
    var title = document.createElement("div");
    title.classList.add("sectionTitle");
    title.textContent = content;
    element.appendChild(title);
    container.prepend(element);
}
function createButton(buttonProps) {
    const { displayName, id, ariaLabel, className, onClick } = buttonProps;
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(displayName));
    button.setAttribute("aria-label", ariaLabel || displayName);
    button.id = "button-" + id;
    if (onClick) {
        button.onclick = onClick;
    }
    if (className) {
        button.classList.add(className);
    }
    return button;
}
function copyText(name) {
    return () => {
        const area = document.getElementById(`textarea-${name}`);
        if (!area) {
            return;
        }
        area.select();
        navigator.clipboard.writeText(area.value);
    };
}
function viewJson(name) {
    return () => {
        const area = document.getElementById(`textarea-${name}`);
        if (!area) {
            return;
        }
        area.select();
        renderJsonViewer(area.value, name);
    };
}
function renderJsonViewer(data, title) {
    const modal = document.getElementById("myModal");
    if (!modal) {
        return;
    }
    modal.style.display = "block";
    document.getElementById("errorMessage").style.display = "none";
    const jsonViewer = document.getElementById("jsonViewer");
    if (!jsonViewer) {
        return;
    }
    jsonViewer.innerHTML = "";
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    jsonViewer.appendChild(titleElement);
    try {
        const json = JSON.parse(data);
        renderJson(jsonViewer, json);
    }
    catch (_a) {
        renderJson(jsonViewer, data.toString());
    }
}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/@rollup_plugin-typescript@11.1.6_rollup@4.24.4_tslib@2.6.3_typescript@4.9.5/node_modules/tslib/tslib.es6.js
function tslib_es6_t(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}function tslib_es6_n(t,n,e,r){return new(e||(e=Promise))((function(o,c){function p(t){try{u(r.next(t))}catch(t){c(t)}}function f(t){try{u(r.throw(t))}catch(t){c(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(p,f)}u((r=r.apply(t,n||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/_virtual/browser.js
var browser_e={exports:{}};

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var ms_e,ms_r;function ms_s(){if(ms_r)return ms_e;ms_r=1;var s=1e3,n=60*s,a=60*n,t=24*a,c=7*t,u=365.25*t;function i(e,r,s,n){var a=r>=1.5*s;return Math.round(e/s)+" "+n+(a?"s":"")}return ms_e=function(e,r){r=r||{};var o=typeof e;if("string"===o&&e.length>0)return function(e){if((e=String(e)).length>100)return;var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!r)return;var i=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*u;case"weeks":case"week":case"w":return i*c;case"days":case"day":case"d":return i*t;case"hours":case"hour":case"hrs":case"hr":case"h":return i*a;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===o&&isFinite(e))return r.long?function(e){var r=Math.abs(e);if(r>=t)return i(e,r,t,"day");if(r>=a)return i(e,r,a,"hour");if(r>=n)return i(e,r,n,"minute");if(r>=s)return i(e,r,s,"second");return e+" ms"}(e):function(e){var r=Math.abs(e);if(r>=t)return Math.round(e/t)+"d";if(r>=a)return Math.round(e/a)+"h";if(r>=n)return Math.round(e/n)+"m";if(r>=s)return Math.round(e/s)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/common.js
var common_n=function(n){function t(e){let n,s,o,a=null;function l(...e){if(!l.enabled)return;const r=l,s=Number(new Date),o=s-(n||s);r.diff=o,r.prev=n,r.curr=s,n=s,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,s)=>{if("%%"===n)return"%";a++;const o=t.formatters[s];if("function"==typeof o){const t=e[a];n=o.call(r,t),e.splice(a,1),a--}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return l.namespace=e,l.useColors=t.useColors(),l.color=t.selectColor(e),l.extend=r,l.destroy=t.destroy,Object.defineProperty(l,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(s!==t.namespaces&&(s=t.namespaces,o=t.enabled(e)),o),set:e=>{a=e}}),"function"==typeof t.init&&t.init(l),l}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(s),...t.skips.map(s).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),s=r.length;for(n=0;n<s;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=ms_s(),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(n).forEach((e=>{t[e]=n[e]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t};

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/browser.js
!function(e,C){C.formatArgs=function(o){if(o[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+o[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const C="color: "+this.color;o.splice(1,0,C,"color: inherit");let t=0,n=0;o[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(t++,"%c"===e&&(n=t))})),o.splice(n,0,C)},C.save=function(e){try{e?C.storage.setItem("debug",e):C.storage.removeItem("debug")}catch(e){}},C.load=function(){let e;try{e=C.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},C.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},C.storage=function(){try{return localStorage}catch(e){}}(),C.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),C.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],C.log=console.debug||console.log||(()=>{}),e.exports=common_n(C);const{formatters:t}=e.exports;t.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}(browser_e,browser_e.exports);var browser_C=browser_e.exports;

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/buffer-es6.js
var buffer_es6_t=[],buffer_es6_r=[],buffer_es6_e="undefined"!=typeof Uint8Array?Uint8Array:Array,buffer_es6_n=!1;function buffer_es6_i(){buffer_es6_n=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0;i<64;++i)buffer_es6_t[i]=e[i],buffer_es6_r[e.charCodeAt(i)]=i;buffer_es6_r["-".charCodeAt(0)]=62,buffer_es6_r["_".charCodeAt(0)]=63}function buffer_es6_o(r,e,n){for(var i,o,u=[],f=e;f<n;f+=3)i=(r[f]<<16)+(r[f+1]<<8)+r[f+2],u.push(buffer_es6_t[(o=i)>>18&63]+buffer_es6_t[o>>12&63]+buffer_es6_t[o>>6&63]+buffer_es6_t[63&o]);return u.join("")}function buffer_es6_u(r){var e;buffer_es6_n||buffer_es6_i();for(var u=r.length,f=u%3,s="",h=[],a=16383,c=0,l=u-f;c<l;c+=a)h.push(buffer_es6_o(r,c,c+a>l?l:c+a));return 1===f?(e=r[u-1],s+=buffer_es6_t[e>>2],s+=buffer_es6_t[e<<4&63],s+="=="):2===f&&(e=(r[u-2]<<8)+r[u-1],s+=buffer_es6_t[e>>10],s+=buffer_es6_t[e>>4&63],s+=buffer_es6_t[e<<2&63],s+="="),h.push(s),h.join("")}function buffer_es6_f(t,r,e,n,i){var o,u,f=8*i-n-1,s=(1<<f)-1,h=s>>1,a=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-a)-1,p>>=-a,a+=f;a>0;o=256*o+t[r+c],c+=l,a-=8);for(u=o&(1<<-a)-1,o>>=-a,a+=n;a>0;u=256*u+t[r+c],c+=l,a-=8);if(0===o)o=1-h;else{if(o===s)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=h}return(p?-1:1)*u*Math.pow(2,o-n)}function buffer_es6_s(t,r,e,n,i,o){var u,f,s,h=8*o-i-1,a=(1<<h)-1,c=a>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=a):(u=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-u))<1&&(u--,s*=2),(r+=u+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(u++,s/=2),u+c>=a?(f=0,u=a):u+c>=1?(f=(r*s-1)*Math.pow(2,i),u+=c):(f=r*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[e+p]=255&f,p+=g,f/=256,i-=8);for(u=u<<i|f,h+=i;h>0;t[e+p]=255&u,p+=g,u/=256,h-=8);t[e+p-g]|=128*y}var buffer_es6_h={}.toString,buffer_es6_a=Array.isArray||function(t){return"[object Array]"==buffer_es6_h.call(t)},buffer_es6_c=50;function buffer_es6_l(){return buffer_es6_g.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function buffer_es6_p(t,r){if(buffer_es6_l()<r)throw new RangeError("Invalid typed array length");return buffer_es6_g.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=buffer_es6_g.prototype:(null===t&&(t=new buffer_es6_g(r)),t.length=r),t}function buffer_es6_g(t,r,e){if(!(buffer_es6_g.TYPED_ARRAY_SUPPORT||this instanceof buffer_es6_g))return new buffer_es6_g(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return buffer_es6_d(this,t)}return buffer_es6_y(this,t,r,e)}function buffer_es6_y(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);buffer_es6_g.TYPED_ARRAY_SUPPORT?(t=r).__proto__=buffer_es6_g.prototype:t=buffer_es6_v(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!buffer_es6_g.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|buffer_es6_R(r,e);t=buffer_es6_p(t,n);var i=t.write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(A(r)){var e=0|buffer_es6_E(r.length);return 0===(t=buffer_es6_p(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?buffer_es6_p(t,0):buffer_es6_v(t,r);if("Buffer"===r.type&&buffer_es6_a(r.data))return buffer_es6_v(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function w(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function buffer_es6_d(t,r){if(w(r),t=buffer_es6_p(t,r<0?0:0|buffer_es6_E(r)),!buffer_es6_g.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function buffer_es6_v(t,r){var e=r.length<0?0:0|buffer_es6_E(r.length);t=buffer_es6_p(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function buffer_es6_E(t){if(t>=buffer_es6_l())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+buffer_es6_l().toString(16)+" bytes");return 0|t}function A(t){return!(null==t||!t._isBuffer)}function buffer_es6_R(t,r){if(A(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return buffer_es6_H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return K(t).length;default:if(n)return buffer_es6_H(t).length;r=(""+r).toLowerCase(),n=!0}}function buffer_es6_b(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,r,e);case"utf8":case"utf-8":return buffer_es6_O(this,r,e);case"ascii":return M(this,r,e);case"latin1":case"binary":return D(this,r,e);case"base64":return buffer_es6_C(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return buffer_es6_k(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function buffer_es6_(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function buffer_es6_m(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=buffer_es6_g.from(r,n)),A(r))return 0===r.length?-1:buffer_es6_P(t,r,e,n,i);if("number"==typeof r)return r&=255,buffer_es6_g.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):buffer_es6_P(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function buffer_es6_P(t,r,e,n,i){var o,u=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,e/=2}function h(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(i){var a=-1;for(o=e;o<f;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*u}else-1!==a&&(o-=o-a),a=-1}else for(e+s>f&&(e=f-s),o=e;o>=0;o--){for(var c=!0,l=0;l<s;l++)if(h(t,o+l)!==h(r,l)){c=!1;break}if(c)return o}return-1}function buffer_es6_T(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function U(t,r,e,n){return Q(buffer_es6_H(r,t.length-e),t,e,n)}function B(t,r,e,n){return Q(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function Y(t,r,e,n){return B(t,r,e,n)}function buffer_es6_S(t,r,e,n){return Q(K(r),t,e,n)}function buffer_es6_I(t,r,e,n){return Q(function(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function buffer_es6_C(t,r,e){return 0===r&&e===t.length?buffer_es6_u(t):buffer_es6_u(t.slice(r,e))}function buffer_es6_O(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,u,f,s,h=t[i],a=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=e)switch(c){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(s=(15&h)<<12|(63&o)<<6|63&u)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],u=t[i+2],f=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&f)&&(s=(15&h)<<18|(63&o)<<12|(63&u)<<6|63&f)>65535&&s<1114112&&(a=s)}null===a?(a=65533,c=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=c}return function(t){var r=t.length;if(r<=L)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=L));return e}(n)}buffer_es6_g.TYPED_ARRAY_SUPPORT=void 0===__webpack_require__.g.TYPED_ARRAY_SUPPORT||__webpack_require__.g.TYPED_ARRAY_SUPPORT,buffer_es6_l(),buffer_es6_g.poolSize=8192,buffer_es6_g._augment=function(t){return t.__proto__=buffer_es6_g.prototype,t},buffer_es6_g.from=function(t,r,e){return buffer_es6_y(null,t,r,e)},buffer_es6_g.TYPED_ARRAY_SUPPORT&&(buffer_es6_g.prototype.__proto__=Uint8Array.prototype,buffer_es6_g.__proto__=Uint8Array),buffer_es6_g.alloc=function(t,r,e){return function(t,r,e,n){return w(r),r<=0?buffer_es6_p(t,r):void 0!==e?"string"==typeof n?buffer_es6_p(t,r).fill(e,n):buffer_es6_p(t,r).fill(e):buffer_es6_p(t,r)}(null,t,r,e)},buffer_es6_g.allocUnsafe=function(t){return buffer_es6_d(null,t)},buffer_es6_g.allocUnsafeSlow=function(t){return buffer_es6_d(null,t)},buffer_es6_g.isBuffer=W,buffer_es6_g.compare=function(t,r){if(!A(t)||!A(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},buffer_es6_g.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},buffer_es6_g.concat=function(t,r){if(!buffer_es6_a(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return buffer_es6_g.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=buffer_es6_g.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!A(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},buffer_es6_g.byteLength=buffer_es6_R,buffer_es6_g.prototype._isBuffer=!0,buffer_es6_g.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)buffer_es6_(this,r,r+1);return this},buffer_es6_g.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)buffer_es6_(this,r,r+3),buffer_es6_(this,r+1,r+2);return this},buffer_es6_g.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)buffer_es6_(this,r,r+7),buffer_es6_(this,r+1,r+6),buffer_es6_(this,r+2,r+5),buffer_es6_(this,r+3,r+4);return this},buffer_es6_g.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?buffer_es6_O(this,0,t):buffer_es6_b.apply(this,arguments)},buffer_es6_g.prototype.equals=function(t){if(!A(t))throw new TypeError("Argument must be a Buffer");return this===t||0===buffer_es6_g.compare(this,t)},buffer_es6_g.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},buffer_es6_g.prototype.compare=function(t,r,e,n,i){if(!A(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),f=Math.min(o,u),s=this.slice(n,i),h=t.slice(r,e),a=0;a<f;++a)if(s[a]!==h[a]){o=s[a],u=h[a];break}return o<u?-1:u<o?1:0},buffer_es6_g.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},buffer_es6_g.prototype.indexOf=function(t,r,e){return buffer_es6_m(this,t,r,e,!0)},buffer_es6_g.prototype.lastIndexOf=function(t,r,e){return buffer_es6_m(this,t,r,e,!1)},buffer_es6_g.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return buffer_es6_T(this,t,r,e);case"utf8":case"utf-8":return U(this,t,r,e);case"ascii":return B(this,t,r,e);case"latin1":case"binary":return Y(this,t,r,e);case"base64":return buffer_es6_S(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return buffer_es6_I(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},buffer_es6_g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var L=4096;function M(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function D(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function x(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=G(t[o]);return i}function buffer_es6_k(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function buffer_es6_N(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function z(t,r,e,n,i,o){if(!A(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function F(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function buffer_es6_j(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function V(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function q(t,r,e,n,i){return i||V(t,0,e,4),buffer_es6_s(t,r,e,n,23,4),e+4}function J(t,r,e,n,i){return i||V(t,0,e,8),buffer_es6_s(t,r,e,n,52,8),e+8}buffer_es6_g.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),buffer_es6_g.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=buffer_es6_g.prototype;else{var i=r-t;e=new buffer_es6_g(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},buffer_es6_g.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||buffer_es6_N(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},buffer_es6_g.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||buffer_es6_N(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},buffer_es6_g.prototype.readUInt8=function(t,r){return r||buffer_es6_N(t,1,this.length),this[t]},buffer_es6_g.prototype.readUInt16LE=function(t,r){return r||buffer_es6_N(t,2,this.length),this[t]|this[t+1]<<8},buffer_es6_g.prototype.readUInt16BE=function(t,r){return r||buffer_es6_N(t,2,this.length),this[t]<<8|this[t+1]},buffer_es6_g.prototype.readUInt32LE=function(t,r){return r||buffer_es6_N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},buffer_es6_g.prototype.readUInt32BE=function(t,r){return r||buffer_es6_N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},buffer_es6_g.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||buffer_es6_N(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},buffer_es6_g.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||buffer_es6_N(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},buffer_es6_g.prototype.readInt8=function(t,r){return r||buffer_es6_N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},buffer_es6_g.prototype.readInt16LE=function(t,r){r||buffer_es6_N(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},buffer_es6_g.prototype.readInt16BE=function(t,r){r||buffer_es6_N(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},buffer_es6_g.prototype.readInt32LE=function(t,r){return r||buffer_es6_N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},buffer_es6_g.prototype.readInt32BE=function(t,r){return r||buffer_es6_N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},buffer_es6_g.prototype.readFloatLE=function(t,r){return r||buffer_es6_N(t,4,this.length),buffer_es6_f(this,t,!0,23,4)},buffer_es6_g.prototype.readFloatBE=function(t,r){return r||buffer_es6_N(t,4,this.length),buffer_es6_f(this,t,!1,23,4)},buffer_es6_g.prototype.readDoubleLE=function(t,r){return r||buffer_es6_N(t,8,this.length),buffer_es6_f(this,t,!0,52,8)},buffer_es6_g.prototype.readDoubleBE=function(t,r){return r||buffer_es6_N(t,8,this.length),buffer_es6_f(this,t,!1,52,8)},buffer_es6_g.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||z(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},buffer_es6_g.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||z(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},buffer_es6_g.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,1,255,0),buffer_es6_g.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},buffer_es6_g.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,2,65535,0),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):F(this,t,r,!0),r+2},buffer_es6_g.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,2,65535,0),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):F(this,t,r,!1),r+2},buffer_es6_g.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,4,4294967295,0),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):buffer_es6_j(this,t,r,!0),r+4},buffer_es6_g.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,4,4294967295,0),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):buffer_es6_j(this,t,r,!1),r+4},buffer_es6_g.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);z(this,t,r,e,i-1,-i)}var o=0,u=1,f=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===f&&0!==this[r+o-1]&&(f=1),this[r+o]=(t/u|0)-f&255;return r+e},buffer_es6_g.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);z(this,t,r,e,i-1,-i)}var o=e-1,u=1,f=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===f&&0!==this[r+o+1]&&(f=1),this[r+o]=(t/u|0)-f&255;return r+e},buffer_es6_g.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,1,127,-128),buffer_es6_g.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},buffer_es6_g.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,2,32767,-32768),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):F(this,t,r,!0),r+2},buffer_es6_g.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,2,32767,-32768),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):F(this,t,r,!1),r+2},buffer_es6_g.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,4,2147483647,-2147483648),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):buffer_es6_j(this,t,r,!0),r+4},buffer_es6_g.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||z(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),buffer_es6_g.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):buffer_es6_j(this,t,r,!1),r+4},buffer_es6_g.prototype.writeFloatLE=function(t,r,e){return q(this,t,r,!0,e)},buffer_es6_g.prototype.writeFloatBE=function(t,r,e){return q(this,t,r,!1,e)},buffer_es6_g.prototype.writeDoubleLE=function(t,r,e){return J(this,t,r,!0,e)},buffer_es6_g.prototype.writeDoubleBE=function(t,r,e){return J(this,t,r,!1,e)},buffer_es6_g.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!buffer_es6_g.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},buffer_es6_g.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!buffer_es6_g.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var u=A(t)?t:buffer_es6_H(new buffer_es6_g(t,n).toString()),f=u.length;for(o=0;o<e-r;++o)this[o+r]=u[o%f]}return this};var Z=/[^+\/0-9A-Za-z-_]/g;function G(t){return t<16?"0"+t.toString(16):t.toString(16)}function buffer_es6_H(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function K(t){return function(t){var o,u,f,s,h,a;buffer_es6_n||buffer_es6_i();var c=t.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");h="="===t[c-2]?2:"="===t[c-1]?1:0,a=new buffer_es6_e(3*c/4-h),f=h>0?c-4:c;var l=0;for(o=0,u=0;o<f;o+=4,u+=3)s=buffer_es6_r[t.charCodeAt(o)]<<18|buffer_es6_r[t.charCodeAt(o+1)]<<12|buffer_es6_r[t.charCodeAt(o+2)]<<6|buffer_es6_r[t.charCodeAt(o+3)],a[l++]=s>>16&255,a[l++]=s>>8&255,a[l++]=255&s;return 2===h?(s=buffer_es6_r[t.charCodeAt(o)]<<2|buffer_es6_r[t.charCodeAt(o+1)]>>4,a[l++]=255&s):1===h&&(s=buffer_es6_r[t.charCodeAt(o)]<<10|buffer_es6_r[t.charCodeAt(o+1)]<<4|buffer_es6_r[t.charCodeAt(o+2)]>>2,a[l++]=s>>8&255,a[l++]=255&s),a}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(Z,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Q(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function W(t){return null!=t&&(!!t._isBuffer||X(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&X(t.slice(0,0))}(t))}function X(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
var native_o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
let rng_t;const rng_e=new Uint8Array(16);function rng_o(){if(!rng_t&&(rng_t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!rng_t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return rng_t(rng_e)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
const stringify_t=[];for(let n=0;n<256;++n)stringify_t.push((n+256).toString(16).slice(1));function stringify_n(n,o=0){return stringify_t[n[o+0]]+stringify_t[n[o+1]]+stringify_t[n[o+2]]+stringify_t[n[o+3]]+"-"+stringify_t[n[o+4]]+stringify_t[n[o+5]]+"-"+stringify_t[n[o+6]]+stringify_t[n[o+7]]+"-"+stringify_t[n[o+8]]+stringify_t[n[o+9]]+"-"+stringify_t[n[o+10]]+stringify_t[n[o+11]]+stringify_t[n[o+12]]+stringify_t[n[o+13]]+stringify_t[n[o+14]]+stringify_t[n[o+15]]}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function v4_t(t,m,i){if(native_o.randomUUID&&!m&&!t)return native_o.randomUUID();const f=(t=t||{}).random||(t.rng||rng_o)();return f[6]=15&f[6]|64,f[8]=63&f[8]|128,stringify_n(f)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/regex.js
var regex_a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/validate.js
function validate_e(e){return"string"==typeof e&&regex_a.test(e)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/utils.js
function utils_o(e){return(e,t)=>{if(!e)throw new Error(t)}}function utils_i(e,t){if("string"!=typeof e||"string"!=typeof t)return NaN;const n=e.split("."),r=t.split(".");function o(e){return/^\d+$/.test(e)}if(!n.every(o)||!r.every(o))return NaN;for(;n.length<r.length;)n.push("0");for(;r.length<n.length;)r.push("0");for(let e=0;e<n.length;++e)if(Number(n[e])!=Number(r[e]))return Number(n[e])>Number(r[e])?1:-1;return 0}function utils_u(){return v4_t()}function utils_c(e){return Object.keys(e).forEach((t=>{null!==e[t]&&void 0!==e[t]&&"object"==typeof e[t]&&utils_c(e[t])})),Object.freeze(e)}function utils_s(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(void 0,e)})).catch((e=>{t&&t(e)})),r}function utils_l(e,t,...n){const r=e(...n);return r.then((()=>{t&&t(null)})).catch((e=>{t&&t(e)})),r}function utils_f(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(null,e)})).catch((e=>{t&&t(e,null)})),r}function utils_a(e,t,n){return new Promise(((r,o)=>{const i=setTimeout(o,t,n);e().then((e=>{clearTimeout(i),r(e)})).catch((e=>{clearTimeout(i),o(e)}))}))}function utils_p(e){const t=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId.toString())+"/"+encodeURIComponent(e.pageId));return e.webUrl&&t.searchParams.append("webUrl",e.webUrl.toString()),(e.chatId||e.channelId||e.subPageId)&&t.searchParams.append("context",JSON.stringify({chatId:e.chatId,channelId:e.channelId,subEntityId:e.subPageId})),t.toString()}function utils_d(e){return!(utils_i(`${e.majorVersion}.${e.minorVersion}`,`${t.majorVersion}.${t.minorVersion}`)>=0)}function utils_m(e){return"https:"===e.protocol}function utils_h(t,n){return new Promise(((r,o)=>{if(t||o("MimeType cannot be null or empty."),n||o("Base64 string cannot be null or empty."),t.startsWith("image/")){const e=atob(n),o=new Uint8Array(e.length);for(let t=0;t<e.length;t++)o[t]=e.charCodeAt(t);r(new Blob([o],{type:t}))}const i=buffer_es6_g.from(n,"base64").toString();r(new Blob([i],{type:t}))}))}function utils_b(e){return new Promise(((t,n)=>{0===e.size&&n(new Error("Blob cannot be empty."));const r=new FileReader;r.onloadend=()=>{r.result?t(r.result.toString().split(",")[1]):n(new Error("Failed to read the blob"))},r.onerror=()=>{n(r.error)},r.readAsDataURL(e)}))}function utils_w(){if(utils_g())throw new Error("window object undefined at SSR check");return window}function utils_g(){return"undefined"==typeof window}function utils_y(e,t){if(utils_I(e)||!function(e){return e.length<256&&e.length>4}(e)||!function(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n<32||n>126)return!1}return!0}(e))throw t||new Error("id is not valid.")}function utils_j(e,t){const n=e.toString().toLocaleLowerCase();if(utils_I(n))throw new Error("Invalid Url");if(n.length>2048)throw new Error("Url exceeds the maximum size of 2048 characters");if(!utils_m(e))throw new Error("Url should be a valid https url")}function utils_E(e){const t=document.createElement("a");return t.href=e,new URL(t.href)}function utils_I(e){return new RegExp(`${/<script[^>]*>|&lt;script[^&]*&gt;|%3Cscript[^%]*%3E/gi.source}|${/<\/script[^>]*>|&lt;\/script[^&]*&gt;|%3C\/script[^%]*%3E/gi.source}`,"gi").test(e)}function utils_v(e){if(!e)throw new Error("id must not be empty");if(!1===validate_e(e))throw new Error("id must be a valid UUID")}const utils_U=!!performance&&"now"in performance;function utils_O(){return utils_U?performance.now()+performance.timeOrigin:void 0}function utils_S(e,t=0){if(t>1e3)return!1;if(void 0===e||"boolean"==typeof e||"number"==typeof e||"bigint"==typeof e||"string"==typeof e||null===e)return!0;if(Array.isArray(e))return e.every((e=>utils_S(e,t+1)));return!("object"!=typeof e||"[object Object]"!==Object.prototype.toString.call(e)||Object.getPrototypeOf(e)!==Object.prototype&&null!==Object.getPrototypeOf(e))&&Object.keys(e).every((n=>utils_S(e[n],t+1)))}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/uuidObject.js
class uuidObject_i{constructor(i=utils_u()){this.uuid=i,utils_v(i)}toString(){return this.uuid}}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/telemetry.js
const telemetry_n=new uuidObject_i,telemetry_o=browser_C.debug.formatArgs;browser_C.debug.formatArgs=function(t){t[0]=`(${(new Date).toISOString()}): ${t[0]} [${telemetry_n.toString()}]`,telemetry_o.call(this,t)};const telemetry_r=browser_C.debug("teamsJs");function telemetry_u(t){return telemetry_r.extend(t)}function telemetry_s(t,e){return`${t}_${e}`}function telemetry_d(t){return/^v\d+_[\w.]+$/.test(t)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/artifactsForCDN/validDomains.json.js
var validDomains_json_o=["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","outlook.live.com","outlook-sdf.live.com","teams.live.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","devspaces.skype.com","*.www.office.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.microsoft365.com","www.microsoft365.com","bing.com","edgeservices.bing.com","work.bing.com","www.bing.com","www.staging-bing-int.com","*.cloud.microsoft","*.m365.cloud.microsoft","chatuxmanager.svc.cloud.microsoft","copilot.microsoft.com","windows.msn.com","fa000000125.resources.office.net","fa000000129.resources.office.net","fa000000124.resources.office.net","fa000000128.resources.office.net","fa000000136.resources.office.net"],validDomains_json_c={validOrigins:validDomains_json_o};

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/constants.js
const internal_constants_i="2.0.1",internal_constants_s="2.0.2",constants_e="2.0.3",internal_constants_n="2.0.4",internal_constants_o="2.0.1",internal_constants_a="1.9.0",internal_constants_r="2.0.0",internal_constants_m="1.7.0",internal_constants_l="1.8.0",internal_constants_d="2.0.0",constants_h="1.9.0",constants_p=validDomains_json_o,internal_constants_c=new URL("https://res.cdn.office.net/teams-js/validDomains/json/validDomains.json"),constants_f=/^https:\/\//,constants_j="https",constants_v="teams.microsoft.com",constants_y="The library has not yet been initialized",constants_D="The runtime has not yet been initialized",constants_T="The runtime version is not supported",constants_b="The call was not properly started";

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/globalVars.js
class globalVars_i{}globalVars_i.initializeCalled=!1,globalVars_i.initializeCompleted=!1,globalVars_i.additionalValidOrigins=[],globalVars_i.initializePromise=void 0,globalVars_i.isFramelessWindow=!1,globalVars_i.frameContext=void 0,globalVars_i.hostClientType=void 0,globalVars_i.printCapabilityEnabled=!1;

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/runtime.js
const runtime_l=telemetry_u("runtime"),runtime_d=4;function runtime_u(o){return o.apiVersion===runtime_d}function runtime_c(o){if(runtime_u(o))return!0;throw-1===o.apiVersion?new Error(constants_D):new Error(constants_T)}let runtime_g={apiVersion:-1,supports:{}};const runtime_m={apiVersion:4,isNAAChannelRecommended:!1,hostVersionsInfo:constants_u,isLegacyTeams:!0,supports:{appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{card:{bot:{}},url:{bot:{},parentCommunication:{}},update:{}},interactive:{},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{config:{},backStack:{},fullTrust:{}},remoteCamera:{},teams:{fullTrust:{}},teamsCore:{},video:{sharedFrame:{}}}},runtime_b=[constants_o.desktop,constants_o.web,constants_o.rigel,constants_o.surfaceHub,constants_o.teamsRoomsWindows,constants_o.teamsRoomsAndroid,constants_o.teamsPhones,constants_o.teamsDisplays],runtime_y=[constants_o.android,constants_o.ios,constants_o.ipados],runtime_f=[...runtime_b,...runtime_y];function runtime_h(o){let e=o;if(e.apiVersion<runtime_d&&runtime_T.forEach((o=>{e.apiVersion===o.versionToUpgradeFrom&&(e=o.upgradeToNextVersion(e))})),runtime_u(e))return e;throw new Error("Received a runtime that could not be upgraded to the latest version")}const runtime_T=[{versionToUpgradeFrom:1,upgradeToNextVersion:o=>{var e;return{apiVersion:2,hostVersionsInfo:void 0,isLegacyTeams:o.isLegacyTeams,supports:Object.assign(Object.assign({},o.supports),{dialog:o.supports.dialog?{card:void 0,url:o.supports.dialog,update:null===(e=o.supports.dialog)||void 0===e?void 0:e.update}:void 0})}}},{versionToUpgradeFrom:2,upgradeToNextVersion:e=>{const s=e.supports,i=tslib_es6_t(s,["appNotification"]);return Object.assign(Object.assign({},e),{apiVersion:3,supports:i})}},{versionToUpgradeFrom:3,upgradeToNextVersion:o=>{var e,s,i,t,n;return{apiVersion:4,hostVersionsInfo:o.hostVersionsInfo,isNAAChannelRecommended:o.isNAAChannelRecommended,isLegacyTeams:o.isLegacyTeams,supports:Object.assign(Object.assign({},o.supports),{dialog:o.supports.dialog?{card:null===(e=o.supports.dialog)||void 0===e?void 0:e.card,url:{bot:null===(i=null===(s=o.supports.dialog)||void 0===s?void 0:s.url)||void 0===i?void 0:i.bot,parentCommunication:(null===(t=o.supports.dialog)||void 0===t?void 0:t.url)?{}:void 0},update:null===(n=o.supports.dialog)||void 0===n?void 0:n.update}:void 0})}}}],runtime_v={"1.0.0":[{capability:{pages:{appButton:{},tabs:{}},stageView:{}},hostClientTypes:runtime_b}],"1.9.0":[{capability:{location:{}},hostClientTypes:runtime_f}],"2.0.0":[{capability:{people:{}},hostClientTypes:runtime_f},{capability:{sharing:{}},hostClientTypes:[constants_o.desktop,constants_o.web]}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[constants_o.android,constants_o.desktop,constants_o.ios,constants_o.teamsRoomsAndroid,constants_o.teamsPhones,constants_o.teamsDisplays,constants_o.web]},{capability:{webStorage:{}},hostClientTypes:[constants_o.desktop]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[constants_o.android,constants_o.ios]}],"2.0.8":[{capability:{sharing:{}},hostClientTypes:[constants_o.android,constants_o.ios]}],"2.1.1":[{capability:{nestedAppAuth:{}},hostClientTypes:[constants_o.android,constants_o.ios,constants_o.ipados]}]},runtime_V=runtime_l.extend("generateBackCompatRuntimeConfig");function runtime_C(o,e){const s=Object.assign({},o);for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&("object"!=typeof e[i]||Array.isArray(e[i])?i in o||(s[i]=e[i]):s[i]=runtime_C(o[i]||{},e[i]));return s}function runtime_j(o,e,s){runtime_V("generating back compat runtime config for %s",o);let t=Object.assign({},e.supports);runtime_V("Supported capabilities in config before updating based on highestSupportedVersion: %o",t),Object.keys(s).forEach((e=>{utils_i(o,e)>=0&&s[e].forEach((o=>{void 0!==globalVars_i.hostClientType&&o.hostClientTypes.includes(globalVars_i.hostClientType)&&(t=runtime_C(t,o.capability))}))}));const a={apiVersion:runtime_d,hostVersionsInfo:constants_u,isLegacyTeams:!0,supports:t};return runtime_V("Runtime config after updating based on highestSupportedVersion: %o",a),a}const runtime_w=runtime_l.extend("applyRuntimeConfig");function runtime_A(o){"string"==typeof o.apiVersion&&(runtime_w("Trying to apply runtime with string apiVersion, processing as v1: %o",o),o=Object.assign(Object.assign({},o),{apiVersion:1})),runtime_w("Fast-forwarding runtime %o",o);const e=runtime_h(o);runtime_w("Applying runtime %o",e),runtime_g=utils_c(e)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/serializable.interface.js
function serializable_interface_e(e){return null!=e&&void 0!==e.serialize&&"function"==typeof e.serialize}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/version.js
const version_o="2.33.0";

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/internalAPIs.js
const internalAPIs_f=telemetry_u("internal"),internalAPIs_c=internalAPIs_f.extend("ensureInitializeCalled"),internalAPIs_d=internalAPIs_f.extend("ensureInitialized");function internalAPIs_m(){if(!globalVars_i.initializeCalled)throw internalAPIs_c(constants_y),new Error(constants_y)}function internalAPIs_p(i,...t){if(!globalVars_i.initializeCompleted)throw internalAPIs_d("%s. initializeCalled: %s",constants_y,globalVars_i.initializeCalled.toString()),new Error(constants_y);if(t&&t.length>0){let i=!1;for(let e=0;e<t.length;e++)if(t[e]===globalVars_i.frameContext){i=!0;break}if(!i)throw new Error(`This call is only allowed in following contexts: ${JSON.stringify(t)}. Current context: "${globalVars_i.frameContext}".`)}return runtime_c(i)}function internalAPIs_u(i=internal_constants_i){const t=utils_i(globalVars_i.clientSupportedSDKVersion,i);return!isNaN(t)&&t>=0}function internalAPIs_C(){return globalVars_i.hostClientType==constants_o.android||globalVars_i.hostClientType==constants_o.ios||globalVars_i.hostClientType==constants_o.ipados}function internalAPIs_h(i=internal_constants_i){if(!internalAPIs_C()){throw{errorCode:E.NOT_SUPPORTED_ON_PLATFORM}}if(!internalAPIs_u(i)){throw{errorCode:E.OLD_PLATFORM}}}function internalAPIs_w(i){let t=globalVars_i.additionalValidOrigins.concat(i.filter((i=>"string"==typeof i&&constants_f.test(i))));const e={};t=t.filter((i=>!e[i]&&(e[i]=!0,!0))),globalVars_i.additionalValidOrigins=t}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/typeCheckUtilities.js
function typeCheckUtilities_n(n){return null==n}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/appIdValidation.js
function appIdValidation_n(i){if(utils_I(i))throw new Error(`Potential app id (${i}) is invalid; it contains script tags.`);if(!appIdValidation_a(i))throw new Error(`Potential app id (${i}) is invalid; its length ${i.length} is not within the length limits (${appIdValidation_o}-${appIdValidation_r}).`);if(appIdValidation_e(i))throw new Error(`Potential app id (${i}) is invalid; it contains non-printable characters.`)}const appIdValidation_o=4,appIdValidation_r=256;function appIdValidation_a(i){return i.length<appIdValidation_r&&i.length>appIdValidation_o}function appIdValidation_e(i){return[...i].some((i=>{const t=i.charCodeAt(0);return t<32||t>126}))}function appIdValidation_s(t){if(!(t instanceof appId_r))throw new Error(`Potential app id (${t}) is invalid; it is not an instance of AppId class.`)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appId.js
class appId_r{constructor(r){this.appIdAsString=r,appIdValidation_n(r)}serialize(){return this.toString()}toString(){return this.appIdAsString}}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/pages.js
var pages_A,pages_T;function pages_w(e){const t=telemetry_s(pagesHelpers_m,"pages.returnFocus");if(internalAPIs_p(runtime_g),!pages_z())throw constants_m;if(void 0===e&&communication_N(t,"returnFocus",[!1]),"boolean"==typeof e)communication_N(t,"returnFocus",[e]);else switch(e){case pages_T.PreviousLandmark:case pages_T.GoToActivityFeed:communication_N(t,"returnFocus",[!1,e]);break;case pages_T.NextLandmark:communication_N(t,"returnFocus",[!0,e])}}function pages_N(e){handlers_U(telemetry_s(pagesHelpers_m,"pages.registerFocusEnterHandler"),"focusEnter",e,[],(()=>{if(!pages_z())throw constants_m}))}function pages_b(e){pagesHelpers_j(telemetry_s(pagesHelpers_m,"pages.setCurrentFrame"),e)}function pages_H(r,t,n){j(),e(l(f,"pages.initializeWithFrameContext"),n).then((()=>t&&t())),pages_b(r)}function pages_S(){return pagesHelpers_S(telemetry_s(pagesHelpers_m,"pages.getConfig."))}function pages_D(e){return pagesHelpers_b(telemetry_s(pagesHelpers_m,"pages.navigateCrossDomain"),e)}function pages_G(e){return new Promise((r=>{if(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.settings,constants_s.task,constants_s.stage,constants_s.meetingStage),!pages_z())throw constants_m;const n=telemetry_s(pagesHelpers_m,"pages.navigateToApp");if(runtime_g.isLegacyTeams){const o=pagesHelpers_k(e)?e:pagesHelpers_T(e);r(communication_E(n,"executeDeepLink",utils_p(o)))}else{const o=pagesHelpers_k(e)?pagesHelpers_L(e):e;r(communication_E(n,"pages.navigateToApp",o))}}))}function pages_E(e){return pagesHelpers_I(telemetry_s(pagesHelpers_m,"pages.shareDeepLink"),e)}function pages_R(e){n(l(f,"pages.registerFullScreenHandler"),"fullScreenChange",e,[],(()=>{if(!g(e)&&!pages_z())throw k}))}function pages_z(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.pages)}!function(e){e[e.PreviousLandmark=0]="PreviousLandmark",e[e.NextLandmark=1]="NextLandmark",e[e.Read=2]="Read",e[e.Compose=3]="Compose"}(pages_A||(pages_A={})),function(e){e[e.PreviousLandmark=0]="PreviousLandmark",e[e.NextLandmark=1]="NextLandmark",e[e.GoToActivityFeed=2]="GoToActivityFeed"}(pages_T||(pages_T={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/tabs.js
function tabs_p(t){return r(a(s,"pages.tabs.navigateToTab"),t)}function tabs_i(t){return pagesHelpers_h(telemetry_s(pagesHelpers_m,"pages.tabs.getTabInstances"),t)}function tabs_u(t){return pagesHelpers_P(telemetry_s(pagesHelpers_m,"pages.tabs.getMruTabInstances"),t)}function tabs_m(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.pages)&&!!runtime_g.supports.pages.tabs}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/config.js
let config_p,config_d;function config_v(){handlers_p(telemetry_s(pagesHelpers_m,"pages.config.registerSettingsSaveHandler"),"settings.save",config_E,!1),handlers_p(telemetry_s(pagesHelpers_m,"pages.config.registerSettingsRemoveHandler"),"settings.remove",config_F,!1)}function config_h(e){return pagesHelpers_v(telemetry_s(pagesHelpers_m,"pages.config.setValidityState"),e)}function config_y(e){return pagesHelpers_U(telemetry_s(pagesHelpers_m,"pages.config.setConfig"),e)}function config_S(e){config_N(telemetry_s(pagesHelpers_m,"pages.config.registerOnSaveHandler"),e,(()=>{if(!typeCheckUtilities_n(e)&&!config_O())throw constants_m}))}function config_N(t,i,n){!typeCheckUtilities_n(i)&&internalAPIs_p(runtime_g,constants_s.settings),n&&n(),config_p=i,!typeCheckUtilities_n(i)&&communication_N(t,"registerHandler",["save"])}function config_w(e){config_j(telemetry_s(pagesHelpers_m,"pages.config.registerOnRemoveHandler"),e,(()=>{if(!typeCheckUtilities_n(e)&&!config_O())throw constants_m}))}function config_j(t,i,n){!typeCheckUtilities_n(i)&&internalAPIs_p(runtime_g,constants_s.remove,constants_s.settings),n&&n(),config_d=i,!typeCheckUtilities_n(i)&&communication_N(t,"registerHandler",["remove"])}function config_E(e){const n=new config_C(e);config_p?config_p(n):communication_y.childWindow?re("settings.save",[e]):n.notifySuccess()}function config_H(e){handlers_U(telemetry_s(pagesHelpers_m,"pages.config.registerChangeConfigHandler"),"changeSettings",e,[constants_s.content],(()=>{if(!config_O())throw constants_m}))}class config_C{constructor(e){this.notified=!1,this.result=e||{}}notifySuccess(){this.ensureNotNotified(),communication_N(telemetry_s(pagesHelpers_m,"pages.saveEvent.notifySuccess"),"settings.save.success"),this.notified=!0}notifyFailure(t){this.ensureNotNotified(),communication_N(telemetry_s(pagesHelpers_m,"pages.saveEvent.notifyFailure"),"settings.save.failure",[t]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")}}function config_F(){const e=new config_T;config_d?config_d(e):communication_y.childWindow?re("settings.remove",[]):e.notifySuccess()}class config_T{constructor(){this.notified=!1}notifySuccess(){this.ensureNotNotified(),communication_N(telemetry_s(pagesHelpers_m,"pages.removeEvent.notifySuccess"),"settings.remove.success"),this.notified=!0}notifyFailure(t){this.ensureNotNotified(),communication_N(telemetry_s(pagesHelpers_m,"pages.removeEvent.notifyFailure"),"settings.remove.failure",[t]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The removeEventType may only notify success or failure once.")}}function config_O(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.pages)&&!!runtime_g.supports.pages.config}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/pagesHelpers.js
const pagesHelpers_m="v2";function pagesHelpers_b(t,s){return new Promise((a=>{if(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.settings,constants_s.remove,constants_s.task,constants_s.stage,constants_s.meetingStage),!pages_z())throw constants_m;a(communication_O(t,"navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",s))}))}function pagesHelpers_w(t){return new Promise((e=>{if(internalAPIs_p(runtime_g),!backStack_B())throw constants_m;e(communication_O(t,"navigateBack","Back navigation is not supported in the current client or context."))}))}function pagesHelpers_d(t,e){return new Promise((i=>{if(internalAPIs_p(runtime_g),!tabs_m())throw constants_m;i(communication_O(t,"navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",e))}))}function pagesHelpers_l(t,e){if(p(r),!i())throw n;s(t,"returnFocus",[e])}function pagesHelpers_h(t,e){return new Promise((i=>{if(internalAPIs_p(runtime_g),!tabs_m())throw constants_m;i(communication_R(t,"getTabInstances",e))}))}function pagesHelpers_P(t,e){return new Promise((i=>{if(internalAPIs_p(runtime_g),!tabs_m())throw constants_m;i(communication_R(t,"getMruTabInstances",e))}))}function pagesHelpers_I(t,o){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.meetingStage),!pages_z())throw constants_m;communication_N(t,"shareDeepLink",[o.subPageId,o.subPageLabel,o.subPageWebUrl])}function pagesHelpers_j(t,o){if(internalAPIs_p(runtime_g,constants_s.content),!pages_z())throw constants_m;communication_N(t,"setFrameContext",[o])}function pagesHelpers_v(t,i){if(internalAPIs_p(runtime_g,constants_s.settings,constants_s.remove),!config_O())throw constants_m;communication_N(t,"settings.setValidityState",[i])}function pagesHelpers_S(t){return new Promise((o=>{if(internalAPIs_p(runtime_g,constants_s.content,constants_s.settings,constants_s.remove,constants_s.sidePanel),!pages_z())throw constants_m;o(communication_R(t,"settings.getSettings"))}))}function pagesHelpers_U(t,i){return new Promise((o=>{if(internalAPIs_p(runtime_g,constants_s.content,constants_s.settings,constants_s.sidePanel),!config_O())throw constants_m;o(communication_E(t,"settings.setSettings",i))}))}function pagesHelpers_k(e){return e.appId instanceof appId_r}function pagesHelpers_T(e){return Object.assign(Object.assign({},e),{appId:new appId_r(e.appId),webUrl:e.webUrl?new URL(e.webUrl):void 0})}function pagesHelpers_L(t){return Object.assign(Object.assign({},t),{appId:t.appId.toString(),webUrl:t.webUrl?t.webUrl.toString():void 0})}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/backStack.js
let backStack_u;function backStack_l(){handlers_p(telemetry_s(pagesHelpers_m,"pages.backStack.registerBackButtonPressHandler"),"backButtonPress",backStack_j,!1)}function backStack_f(){return pagesHelpers_w(telemetry_s(pagesHelpers_m,"pages.backStack.navigateBack"))}function backStack_k(t){backStack_g(telemetry_s(pagesHelpers_m,"pages.backStack.registerBackButtonHandler"),t,(()=>{if(!typeCheckUtilities_n(t)&&!backStack_B())throw constants_m}))}function backStack_g(r,n,e){!typeCheckUtilities_n(n)&&internalAPIs_p(runtime_g),e&&e(),backStack_u=n,!typeCheckUtilities_n(n)&&communication_N(r,"registerHandler",["backButton"])}function backStack_j(){backStack_u&&backStack_u()||(communication_y.childWindow?re("backButtonPress",[]):backStack_f())}function backStack_B(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.pages)&&!!runtime_g.supports.pages.backStack}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/handlers.js
const handlers_u=telemetry_u("handlers");class handlers_c{static initializeHandlers(){handlers_c.handlers.themeChange=handlers_v,handlers_c.handlers.load=handlers_j,handlers_c.handlers.beforeUnload=handlers_S,backStack_l()}static uninitializeHandlers(){handlers_c.handlers={},handlers_c.themeChangeHandler=null,handlers_c.loadHandler=null,handlers_c.beforeUnloadHandler=null,handlers_c.beforeSuspendOrTerminateHandler=null,handlers_c.resumeHandler=null}}function handlers_f(){handlers_c.initializeHandlers()}function handlers_m(){handlers_c.uninitializeHandlers()}handlers_c.handlers={},handlers_c.themeChangeHandler=null,handlers_c.loadHandler=null,handlers_c.beforeUnloadHandler=null,handlers_c.beforeSuspendOrTerminateHandler=null,handlers_c.resumeHandler=null,handlers_c.hostToAppPerformanceMetricsHandler=null;const handlers_h=handlers_u.extend("callHandler");function handlers_H(e,n){const r=handlers_c.handlers[e];if(r){handlers_h("Invoking the registered handler for message %s with arguments %o",e,n);return[!0,r.apply(this,n)]}return communication_y.childWindow?(re(e,n),[!1,void 0]):(handlers_h("Handler for action message %s not found.",e),[!1,void 0])}function handlers_p(e,n,r,l=!0,a=[]){r?(handlers_c.handlers[n]=r,l&&communication_N(e,"registerHandler",[n,...a])):delete handlers_c.handlers[n]}function handlers_g(e){delete handlers_c.handlers[e]}function handlers_b(e){return null!=handlers_c.handlers[e]}function handlers_U(e,n,r,o,a){r&&internalAPIs_p(runtime_g,...o),a&&a(),handlers_p(e,n,r)}function handlers_T(e,n){handlers_c.themeChangeHandler=n,!typeCheckUtilities_n(n)&&communication_N(e,"registerHandler",["themeChange"])}function handlers_v(e){handlers_c.themeChangeHandler&&handlers_c.themeChangeHandler(e),communication_y.childWindow&&re("themeChange",[e])}function handlers_y(e){handlers_c.hostToAppPerformanceMetricsHandler=e}function handlers_C(e){handlers_c.hostToAppPerformanceMetricsHandler&&handlers_c.hostToAppPerformanceMetricsHandler(e)}function handlers_w(e,n){handlers_c.loadHandler=n,!typeCheckUtilities_n(n)&&communication_N(e,"registerHandler",["load"])}function handlers_j(e){const n={entityId:(r=e).entityId,contentUrl:new URL(r.contentUrl)};var r;handlers_c.resumeHandler?(handlers_c.resumeHandler(n),communication_y.childWindow&&re("load",[n])):handlers_c.loadHandler&&(handlers_c.loadHandler(e),communication_y.childWindow&&re("load",[e]))}function handlers_O(e,n){handlers_c.beforeUnloadHandler=n,!typeCheckUtilities_n(n)&&communication_N(e,"registerHandler",["beforeUnload"])}function handlers_S(){return tslib_es6_n(this,void 0,void 0,(function*(){const e=()=>{communication_N(telemetry_s("v2","handleBeforeUnload"),"readyToUnload",[])};handlers_c.beforeSuspendOrTerminateHandler?(yield handlers_c.beforeSuspendOrTerminateHandler(),communication_y.childWindow?re("beforeUnload"):e()):handlers_c.beforeUnloadHandler&&handlers_c.beforeUnloadHandler(e)||(communication_y.childWindow?re("beforeUnload"):e())}))}function handlers_W(e){handlers_c.beforeSuspendOrTerminateHandler=e,!i(e)&&o(r("v2","registerBeforeSuspendOrTerminateHandler"),"registerHandler",["beforeUnload"])}function handlers_(e){handlers_c.resumeHandler=e,!i(e)&&o(r("v2","registerOnResumeHandler"),"registerHandler",["load"])}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/hostToAppTelemetry.js
class hostToAppTelemetry_a{static storeCallbackInformation(e,t){hostToAppTelemetry_a.callbackInformation.set(e,t)}static clearMessages(){hostToAppTelemetry_a.callbackInformation.clear()}static deleteMessageInformation(e){hostToAppTelemetry_a.callbackInformation.delete(e)}static handleOneWayPerformanceMetrics(a,t,n){const o=a.monotonicTimestamp;o&&n?handlers_C({actionName:a.func,messageDelay:n-o,requestStartedAt:o}):t("Unable to send performance metrics for event %s",a.func)}static handlePerformanceMetrics(t,n,o,s){const c=hostToAppTelemetry_a.callbackInformation.get(t);c&&n.monotonicTimestamp&&s?(handlers_C({actionName:c.name,messageDelay:s-n.monotonicTimestamp,requestStartedAt:c.calledAt}),hostToAppTelemetry_a.deleteMessageInformation(t)):o("Unable to send performance metrics for callback %s with arguments %o",t.toString(),n.args)}}hostToAppTelemetry_a.callbackInformation=new Map;

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/messageObjects.js
const messageObjects_u=t=>{const{uuid:u}=t,s=tslib_es6_t(t,["uuid"]),n=null==u?void 0:u.toString();return Object.assign(Object.assign({},s),{uuidAsString:n})},messageObjects_s=u=>{const{uuidAsString:s}=u,n=tslib_es6_t(u,["uuidAsString"]);return Object.assign(Object.assign({},n),{uuid:s?new uuidObject_i(s):void 0})},messageObjects_n=u=>{const{uuidAsString:s}=u,n=tslib_es6_t(u,["uuidAsString"]);return Object.assign(Object.assign({},n),{uuid:s?new uuidObject_i(s):void 0})},messageObjects_r=t=>{const{uuid:u}=t,s=tslib_es6_t(t,["uuid"]),n=null==u?void 0:u.toString();return Object.assign(Object.assign({},s),{uuidAsString:n})};

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/nestedAppAuthUtils.js
const nestedAppAuthUtils_n=telemetry_u("nestedAppAuthUtils"),nestedAppAuthUtils_s=nestedAppAuthUtils_n.extend("tryPolyfillWithNestedAppAuthBridge");function nestedAppAuthUtils_r(t,n,r){var i;const d=nestedAppAuthUtils_s;if(globalVars_i.isFramelessWindow)return void d("Cannot polyfill nestedAppAuthBridge as current window is frameless");if(!n)return void d("Cannot polyfill nestedAppAuthBridge as current window does not exist");const p=(()=>{try{return JSON.parse(t)}catch(e){return null}})();if(!p||!(null===(i=p.supports)||void 0===i?void 0:i.nestedAppAuth))return void d("Cannot polyfill nestedAppAuthBridge as current hub does not support nested app auth");const u=n;if(u.nestedAppAuthBridge)return void d("nestedAppAuthBridge already exists on current window, skipping polyfill");const a=function(e,t){const n=nestedAppAuthUtils_o;if(!e)return n("nestedAppAuthBridge cannot be created as current window does not exist"),null;const{onMessage:s,sendPostMessage:r}=t,i=e=>t=>s(t,e);return{addEventListener:(t,s)=>{"message"===t?e.addEventListener(t,i(s)):n(`Event ${t} is not supported by nestedAppAuthBridge`)},postMessage:e=>{const t=(()=>{try{return JSON.parse(e)}catch(e){return null}})();t&&"object"==typeof t&&"NestedAppAuthRequest"===t.messageType?r(e):n("Unrecognized data format received by app, message being ignored. Message: %o",e)},removeEventListener:(t,n)=>{e.removeEventListener(t,i(n))}}}(u,r);a&&(u.nestedAppAuthBridge=a)}const nestedAppAuthUtils_o=nestedAppAuthUtils_n.extend("createNestedAppAuthBridge");

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/validOrigins.js
let validOrigins_l=[];const validOrigins_a=telemetry_u("validateOrigin");function validOrigins_u(){return tslib_es6_n(this,void 0,void 0,(function*(){yield validOrigins_d()}))}function validOrigins_d(){return tslib_es6_n(this,void 0,void 0,(function*(){return 0!==validOrigins_l.length?validOrigins_l:utils_g()?(validOrigins_l=constants_p,constants_p):fetch(internal_constants_c).then((i=>{if(!i.ok)throw new Error("Invalid Response from Fetch Call");return i.json().then((i=>{if(function(i){let t=JSON.parse(i);try{t=JSON.parse(i)}catch(i){return!1}if(!t.validOrigins)return!1;for(const i of t.validOrigins)try{new URL("https://"+i)}catch(t){return validOrigins_a("isValidOriginsFromCDN call failed to validate origin: %s",i),!1}return!0}(JSON.stringify(i)))return validOrigins_l=i.validOrigins,validOrigins_l;throw new Error("Valid Origins List Is Invalid")}))})).catch((i=>(validOrigins_a("validOrigins fetch call to CDN failed with error: %s. Defaulting to fallback list",i),validOrigins_l=constants_p,validOrigins_l)))}))}function validOrigins_c(i,t){if("*."===i.substring(0,2)){const r=i.substring(1);if(t.length>r.length&&t.split(".").length===r.split(".").length&&t.substring(t.length-r.length)===r)return!0}else if(i===t)return!0;return!1}function validOrigins_f(i){return validOrigins_d().then((t=>{if(!utils_m(i))return validOrigins_a("Origin %s is invalid because it is not using https protocol. Protocol being used: %s",i,i.protocol),!1;const r=i.host;if(t.some((i=>validOrigins_c(i,r))))return!0;for(const i of globalVars_i.additionalValidOrigins){if(validOrigins_c("https://"===i.substring(0,8)?i.substring(8):i,r))return!0}return validOrigins_a("Origin %s is invalid because it is not an origin approved by this library or included in the call to app.initialize.\nOrigins approved by this library: %o\nOrigins included in app.initialize: %o",i,t,globalVars_i.additionalValidOrigins),!1}))}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/communication.js
const communication_b=telemetry_u("communication");class communication_y{}class communication_k{}function communication_I(n,i){if(communication_k.messageListener=n=>function(n){return tslib_es6_n(this,void 0,void 0,(function*(){if(!n||!n.data||"object"!=typeof n.data)return void communication_("Unrecognized message format received by app, message being ignored. Message: %o",n);const e=n.source||n.originalEvent&&n.originalEvent.source,i=n.origin||n.originalEvent&&n.originalEvent.origin;return communication_H(e,i).then((o=>{o?(function(e,n){globalVars_i.isFramelessWindow||communication_y.parentWindow&&!communication_y.parentWindow.closed&&e!==communication_y.parentWindow?communication_y.childWindow&&!communication_y.childWindow.closed&&e!==communication_y.childWindow||(communication_y.childWindow=e,communication_y.childOrigin=n):(communication_y.parentWindow=e,communication_y.parentOrigin=n);communication_y.parentWindow&&communication_y.parentWindow.closed&&(communication_y.parentWindow=null,communication_y.parentOrigin=null);communication_y.childWindow&&communication_y.childWindow.closed&&(communication_y.childWindow=null,communication_y.childOrigin=null);te(communication_y.parentWindow),te(communication_y.childWindow)}(e,i),e===communication_y.parentWindow?communication_G(n):e===communication_y.childWindow&&function(e){if("id"in e.data&&"func"in e.data){const n=messageObjects_s(e.data),[i,o]=handlers_H(n.func,n.args);i&&void 0!==o?(communication_X("Returning message %s from child back to child, action: %s.",ae(n),n.func),se(n.id,n.uuid,Array.isArray(o)?o:[o])):(communication_X("Relaying message %s from child to parent, action: %s. Relayed message will have a new id.",ae(n),n.func),communication_N(telemetry_s("v2","tasks.startTask"),n.func,n.args,((...e)=>{if(communication_y.childWindow){const i=e.pop();communication_X("Message from parent being relayed to child, id: %s",ae(n)),se(n.id,n.uuid,e,i)}})))}}(n)):communication_("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin, message: %o, source: %o, origin: %o",n,e,i)}))}))}(n),communication_y.currentWindow=communication_y.currentWindow||utils_w(),communication_y.parentWindow=communication_y.currentWindow.parent!==communication_y.currentWindow.self?communication_y.currentWindow.parent:communication_y.currentWindow.opener,communication_y.topWindow=communication_y.currentWindow.top,(communication_y.parentWindow||n)&&communication_y.currentWindow.addEventListener("message",communication_k.messageListener,!1),!communication_y.parentWindow){const e=communication_y.currentWindow;if(!e.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));globalVars_i.isFramelessWindow=!0,e.onNativeMessage=communication_G}try{return communication_y.parentOrigin="*",communication_S(i,"initialize",[version_o,runtime_d,n]).then((([e,n,i,t])=>(nestedAppAuthUtils_r(t,communication_y.currentWindow,{onMessage:communication_q,sendPostMessage:communication_U}),{context:e,clientType:n,runtimeConfig:i,clientSupportedSDKVersion:t})))}finally{communication_y.parentOrigin=null}}function communication_T(){communication_y.currentWindow&&communication_y.currentWindow.removeEventListener("message",communication_k.messageListener,!1),communication_y.currentWindow=null,communication_y.parentWindow=null,communication_y.parentOrigin=null,communication_y.childWindow=null,communication_y.childOrigin=null,communication_k.parentMessageQueue=[],communication_k.childMessageQueue=[],communication_k.nextMessageId=0,communication_k.callbacks.clear(),communication_k.promiseCallbacks.clear(),communication_k.portCallbacks.clear(),communication_k.legacyMessageIdsToUuidMap={},g.clearMessages()}function communication_R(e,n,...i){return communication_S(e,n,i).then((([e])=>e))}function communication_E(e,n,...i){return communication_S(e,n,i).then((([e,n])=>{if(!e)throw new Error(n)}))}function communication_O(e,n,i,...t){return communication_S(e,n,t).then((([e,n])=>{if(!e)throw new Error(n||i)}))}function communication_j(e,n,...i){return communication_S(e,n,i).then((([e,n])=>{if(e)throw e;return n}))}function communication_S(e,n,t=void 0){if(!telemetry_d(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return new Promise((i=>{const o=communication_L(e,n,t);var s;i((s=o.uuid,new Promise((e=>{communication_k.promiseCallbacks.set(s,e)}))))}))}function communication_A(e){return e.map((e=>serializable_interface_e(e)?e.serialize():e))}function communication_P(n,i,t,r,a){var d;return tslib_es6_n(this,void 0,void 0,(function*(){const e=communication_A(i),[c]=yield communication_S(r,n,e);if(a&&a(c)||!a&&interfaces_i(c))throw new Error(`${c.errorCode}, message: ${null!==(d=c.message)&&void 0!==d?d:"None"}`);if(t.validate(c))return t.deserialize(c);throw new Error(`${E.INTERNAL_ERROR}, message: Invalid response from host - ${JSON.stringify(c)}`)}))}function communication_C(n,i,t,r){var a;return tslib_es6_n(this,void 0,void 0,(function*(){const e=communication_A(i),[d]=yield communication_S(t,n,e);if(r&&r(d)||!r&&interfaces_i(d))throw new Error(`${d.errorCode}, message: ${null!==(a=d.message)&&void 0!==a?a:"None"}`);if(void 0!==d)throw new Error(`${E.INTERNAL_ERROR}, message: Invalid response from host`)}))}function communication_x(e,n,t=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);const o=communication_L(e,n,t);return s=o.uuid,new Promise(((e,n)=>{communication_k.portCallbacks.set(s,((i,t)=>{i instanceof MessagePort?e(i):n(t&&t.length>0?t[0]:new Error("Host responded without port or error details."))}))}));var s}function communication_N(e,n,t,o){let s;if(t instanceof Function?o=t:t instanceof Array&&(s=t),!telemetry_d(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);const r=communication_L(e,n,s);o&&communication_k.callbacks.set(r.uuid,o)}communication_k.parentMessageQueue=[],communication_k.childMessageQueue=[],communication_k.topMessageQueue=[],communication_k.nextMessageId=0,communication_k.callbacks=new Map,communication_k.promiseCallbacks=new Map,communication_k.portCallbacks=new Map,communication_k.legacyMessageIdsToUuidMap={};const $=communication_b.extend("sendNestedAuthRequestToTopWindow");function communication_U(e){const n=$,i=communication_y.topWindow,t=function(e){const n=communication_k.nextMessageId++,i=new uuidObject_i;return communication_k.legacyMessageIdsToUuidMap[n]=i,{id:n,uuid:i,func:"nestedAppAuth.execute",timestamp:Date.now(),monotonicTimestamp:utils_O(),args:[],data:e}}(e);return n("Message %s information: %o",ae(t),{actionName:t.func}),communication_z(i,t)}const communication_Q=communication_b.extend("sendRequestToTargetWindowHelper");function communication_z(e,n){const i=communication_Q,t=ne(e),o=messageObjects_u(n);if(globalVars_i.isFramelessWindow)communication_y.currentWindow&&communication_y.currentWindow.nativeInterface&&(i("Sending message %s to %s via framelessPostMessage interface",ae(o),t),communication_y.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(o)));else{const s=ee(e);e&&s?(i("Sending message %s to %s via postMessage",ae(o),t),e.postMessage(o,s)):(i("Adding message %s to %s message queue",ae(o),t),communication_Z(e).push(n))}return n}const communication_F=communication_b.extend("sendMessageToParentHelper");function communication_L(e,n,i){const t=communication_F,o=communication_y.parentWindow,s=function(e,n,i){const t=communication_k.nextMessageId++,o=new uuidObject_i;return communication_k.legacyMessageIdsToUuidMap[t]=o,{id:t,uuid:o,func:n,timestamp:Date.now(),monotonicTimestamp:utils_O(),args:i||[],apiVersionTag:e}}(e,n,i);return hostToAppTelemetry_a.storeCallbackInformation(s.uuid,{name:n,calledAt:s.timestamp}),t("Message %s information: %o",ae(s),{actionName:n,args:i}),communication_z(o,s)}const communication_=communication_b.extend("processIncomingMessage");const communication_V=communication_b.extend("processAuthBridgeMessage");function communication_q(e,n){var i,t;const o=communication_V;if(!e||!e.data||"object"!=typeof e.data)return void o("Unrecognized message format received by app, message being ignored. Message: %o",e);const{args:s}=e.data,[,r]=null!=s?s:[],a=(()=>{try{return JSON.parse(r)}catch(e){return null}})();if(!a||"object"!=typeof a||"NestedAppAuthResponse"!==a.messageType)return void o("Unrecognized data format received by app, message being ignored. Message: %o",e);const d=e.source||(null===(i=null==e?void 0:e.originalEvent)||void 0===i?void 0:i.source),c=e.origin||(null===(t=null==e?void 0:e.originalEvent)||void 0===t?void 0:t.origin);d?communication_H(d,c)?(communication_y.topWindow&&!communication_y.topWindow.closed&&d!==communication_y.topWindow||(communication_y.topWindow=d,communication_y.topOrigin=c),communication_y.topWindow&&communication_y.topWindow.closed&&(communication_y.topWindow=null,communication_y.topOrigin=null),te(communication_y.topWindow),n(r)):o("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin"):o("Message being ignored by app because it is coming for a target that is null")}const communication_D=communication_b.extend("shouldProcessIncomingMessage");function communication_H(n,i){return tslib_es6_n(this,void 0,void 0,(function*(){if(communication_y.currentWindow&&n===communication_y.currentWindow)return communication_D("Should not process message because it is coming from the current window"),!1;if(communication_y.currentWindow&&communication_y.currentWindow.location&&i&&i===communication_y.currentWindow.location.origin)return!0;{let e;try{e=new URL(i)}catch(e){return communication_D("Message has an invalid origin of %s",i),!1}const n=yield validOrigins_f(e);return n||communication_D("Message has an invalid origin of %s",i),n}}))}const communication_J=communication_b.extend("handleIncomingMessageFromParent");function communication_B(e,n){if(n){const i=[...e].find((([e,i])=>e.toString()===n.toString()));if(i)return i[0]}}function communication_K(e,n){const i=communication_B(n,e.uuid);i&&n.delete(i),e.uuid?communication_k.legacyMessageIdsToUuidMap={}:delete communication_k.legacyMessageIdsToUuidMap[e.id]}function communication_G(e){const n=communication_J,i=utils_O();if("id"in e.data&&"number"==typeof e.data.id){const t=e.data,o=messageObjects_n(t),s=function(e){const n=communication_J;if(!e.uuid)return communication_k.legacyMessageIdsToUuidMap[e.id];{const n=e.uuid,i=communication_B(communication_k.callbacks,n);if(i)return i;const t=communication_B(communication_k.promiseCallbacks,n);if(t)return t;const o=communication_B(communication_k.portCallbacks,n);if(o)return o}n("Received message %s that failed to produce a callbackId",ae(e))}(o);if(s){const t=communication_k.callbacks.get(s);n("Received a response from parent for message %s",s.toString()),hostToAppTelemetry_a.handlePerformanceMetrics(s,o,n,i),t&&(n("Invoking the registered callback for message %s with arguments %o",s.toString(),o.args),t.apply(null,[...o.args,o.isPartialResponse]),function(e){return!0===e.data.isPartialResponse}(e)||(n("Removing registered callback for message %s",s.toString()),communication_K(o,communication_k.callbacks)));const r=communication_k.promiseCallbacks.get(s);r&&(n("Invoking the registered promise callback for message %s with arguments %o",s.toString(),o.args),r(o.args),n("Removing registered promise callback for message %s",s.toString()),communication_K(o,communication_k.promiseCallbacks));const a=communication_k.portCallbacks.get(s);if(a){let i;n("Invoking the registered port callback for message %s with arguments %o",s.toString(),o.args),e.ports&&e.ports[0]instanceof MessagePort&&(i=e.ports[0]),a(i,o.args),n("Removing registered port callback for message %s",s.toString()),communication_K(o,communication_k.portCallbacks)}o.uuid&&(communication_k.legacyMessageIdsToUuidMap={})}}else if("func"in e.data&&"string"==typeof e.data.func){const t=e.data;hostToAppTelemetry_a.handleOneWayPerformanceMetrics(t,n,i),n('Received a message from parent %s, action: "%s"',ae(t),t.func),handlers_H(t.func,t.args)}else n("Received an unknown message: %O",e)}const communication_X=communication_b.extend("handleIncomingMessageFromChild");function communication_Y(){return communication_y.topWindow!==communication_y.parentWindow}function communication_Z(e){return e===communication_y.topWindow&&communication_Y()?communication_k.topMessageQueue:e===communication_y.parentWindow?communication_k.parentMessageQueue:e===communication_y.childWindow?communication_k.childMessageQueue:[]}function ee(e){return e===communication_y.topWindow&&communication_Y()?communication_y.topOrigin:e===communication_y.parentWindow?communication_y.parentOrigin:e===communication_y.childWindow?communication_y.childOrigin:null}function ne(e){return e===communication_y.topWindow&&communication_Y()?"top":e===communication_y.parentWindow?"parent":e===communication_y.childWindow?"child":null}const ie=communication_b.extend("flushMessageQueue");function te(e){const n=ee(e),i=communication_Z(e),t=ne(e);for(;e&&n&&i.length>0;){const o=i.shift();if(o){const i=messageObjects_u(o);ie("Flushing message %s from %s message queue via postMessage.",ae(i),t),e.postMessage(i,n)}}}function oe(e,n){let i;i=communication_y.currentWindow.setInterval((()=>{0===communication_Z(e).length&&(clearInterval(i),n())}),100)}function se(e,n,i,t){const o=communication_y.childWindow,s=function(e,n,i,t){return{id:e,uuid:n,args:i||[],isPartialResponse:t}}(e,n,i,t),r=messageObjects_r(s),a=ee(o);o&&a&&o.postMessage(r,a)}function re(e,n){const i=communication_y.childWindow,t=function(e,n){return{func:e,args:n||[]}}(e,n),o=ee(i);i&&o?i.postMessage(t,o):communication_Z(i).push(t)}function ae(e){return"uuidAsString"in e?`${e.uuidAsString} (legacy id: ${e.id})`:"uuid"in e&&void 0!==e.uuid?`${e.uuid.toString()} (legacy id: ${e.id})`:`legacy id: ${e.id} (no uuid)`}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/authentication.js
const authentication_g="v1",authentication_b="v2";let authentication_W,authentication_C,authentication_k;function authentication_p(){handlers_p(telemetry_s(authentication_g,"authentication.registerAuthenticateSuccessHandler"),"authentication.authenticate.success",authentication_P,!1),handlers_p(telemetry_s(authentication_g,"authentication.registerAuthenticateFailureHandler"),"authentication.authenticate.failure",authentication_I,!1)}function authentication_v(t){authentication_k=t}function authentication_y(i){const r=void 0!==i,c=r?i:authentication_k;if(!c)throw new Error("No parameters are provided for authentication");internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.settings,constants_s.remove,constants_s.task,constants_s.stage,constants_s.meetingStage);return function(i,r){return new Promise(((c,l)=>{if(globalVars_i.hostClientType!==constants_o.web){const e=utils_E(r.url);utils_j(e),c(communication_S(i,"authentication.authenticate",[e.href,r.width,r.height,r.isExternal]).then((([t,e])=>{if(t)return e;throw new Error(e)})))}else authentication_W={success:c,fail:l},function(t){authentication_E();let i=t.width||600,r=t.height||400;i=Math.min(i,communication_y.currentWindow.outerWidth-400),r=Math.min(r,communication_y.currentWindow.outerHeight-200);const c=utils_E(t.url.replace("{oauthRedirectMethod}","web"));utils_j(c);let l=void 0!==communication_y.currentWindow.screenLeft?communication_y.currentWindow.screenLeft:communication_y.currentWindow.screenX,u=void 0!==communication_y.currentWindow.screenTop?communication_y.currentWindow.screenTop:communication_y.currentWindow.screenY;l+=communication_y.currentWindow.outerWidth/2-i/2,u+=communication_y.currentWindow.outerHeight/2-r/2,communication_y.childWindow=communication_y.currentWindow.open(c.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+u+", left="+l+", width="+i+", height="+r),communication_y.childWindow?(authentication_A(),authentication_C=communication_y.currentWindow.setInterval((()=>{if(!communication_y.childWindow||communication_y.childWindow.closed)authentication_I("CancelledByUser");else{const t=communication_y.childOrigin;try{communication_y.childOrigin="*",re("ping")}finally{communication_y.childOrigin=t}}}),100),handlers_p(telemetry_s(authentication_g,"authentication.authenticationWindow.registerInitializeHandler"),"initialize",(()=>[constants_s.authentication,globalVars_i.hostClientType])),handlers_p(telemetry_s(authentication_g,"authentication.authenticationWindow.registerNavigateCrossDomainHandler"),"navigateCrossDomain",(()=>!1))):authentication_I("FailedToOpenWindow")}(r)}))}(c.successCallback||c.failureCallback?telemetry_s(authentication_g,"authentication.authenticate"):telemetry_s(authentication_b,"authentication.authenticate"),c).then((t=>{try{return c&&c.successCallback?(c.successCallback(t),""):t}finally{r||(authentication_k=void 0)}})).catch((t=>{try{if(c&&c.failureCallback)return c.failureCallback(t.message),"";throw t}finally{r||(authentication_k=void 0)}}))}function authentication_T(e){internalAPIs_m();return function(e,n){return new Promise((i=>{i(communication_S(e,"authentication.getAuthToken",[null==n?void 0:n.resources,null==n?void 0:n.claims,null==n?void 0:n.silent,null==n?void 0:n.tenantId]))})).then((([t,e])=>{if(t)return e;throw new Error(e)}))}(e&&(e.successCallback||e.failureCallback)?telemetry_s(authentication_g,"authentication.getAuthToken"):telemetry_s(authentication_b,"authentication.getAuthToken"),e).then((t=>e&&e.successCallback?(e.successCallback(t),""):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),"";throw t}))}function authentication_j(e){internalAPIs_m();return function(e){return new Promise((n=>{n(communication_S(e,"authentication.getUser"))})).then((([t,e])=>{if(t)return e;throw e}))}(e&&(e.successCallback||e.failureCallback)?telemetry_s(authentication_g,"authentication.getUser"):telemetry_s(authentication_b,"authentication.getUser")).then((t=>e&&e.successCallback?(e.successCallback(t),null):t)).catch((t=>{const n=`Error returned, code = ${t.errorCode}, message = ${t.message}`;if(e&&e.failureCallback)return e.failureCallback(n),null;throw new Error(n)}))}function authentication_E(){authentication_A();try{communication_y.childWindow&&communication_y.childWindow.close()}finally{communication_y.childWindow=null,communication_y.childOrigin=null}}function authentication_A(){authentication_C&&(clearInterval(authentication_C),authentication_C=0),handlers_g("initialize"),handlers_g("navigateCrossDomain")}function authentication_H(t,n){internalAPIs_p(runtime_g,constants_s.authentication);const a=telemetry_s(n?authentication_g:authentication_b,"authentication.notifySuccess");communication_N(a,"authentication.authenticate.success",[t]),oe(communication_y.parentWindow,(()=>setTimeout((()=>communication_y.currentWindow.close()),200)))}function authentication_O(t,n){internalAPIs_p(runtime_g,constants_s.authentication);const a=telemetry_s(n?authentication_g:authentication_b,"authentication.notifyFailure");communication_N(a,"authentication.authenticate.failure",[t]),oe(communication_y.parentWindow,(()=>setTimeout((()=>communication_y.currentWindow.close()),200)))}function authentication_P(t){try{authentication_W&&authentication_W.success(t)}finally{authentication_W=void 0,authentication_E()}}function authentication_I(t){try{authentication_W&&authentication_W.fail(new Error(t))}finally{authentication_W=void 0,authentication_E()}}var authentication_U;!function(t){t.Public="public",t.EUDB="eudb",t.Other="other"}(authentication_U||(authentication_U={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/update.js
function update_n(o){r(e(t,"dialog.update.resize"),o)}function update_p(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.dialog)&&!!runtime_g.supports.dialog.update}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/url/url.js
function url_a(o,i,l){t(n(r,"dialog.url.open"),o,i,l)}function url_p(t,i){o(n(r,"dialog.url.submit"),t,i)}function url_u(){return internalAPIs_p(runtime_g)&&void 0!==(runtime_g.supports.dialog&&runtime_g.supports.dialog.url)}function url_f(t){return{url:t.url,height:t.size?t.size.height:constants_t.Small,width:t.size?t.size.width:constants_t.Small,title:t.title,fallbackUrl:t.fallbackUrl}}function url_c(t){const o=url_f(t);return o.completionBotId=t.completionBotId,o}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/url/bot.js
function bot_l(t,n,l){r(i(o,"dialog.url.bot.open"),t,n,l)}function bot_e(){return internalAPIs_p(runtime_g)&&void 0!==(runtime_g.supports.dialog&&runtime_g.supports.dialog.url&&runtime_g.supports.dialog.url.bot)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/dialogHelpers.js
const dialogHelpers_d="v2";function dialogHelpers_h(o,a){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.task,constants_s.meetingStage),!update_p())throw constants_m;communication_N(o,"tasks.updateTask",[a])}function dialogHelpers_k(o,a,u,f){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.meetingStage),!url_u())throw constants_m;f&&handlers_p(telemetry_s(dialogHelpers_d,"dialog.url.registerMessageForParentHandler"),"messageForParent",f);const g=url_f(a);communication_N(o,"tasks.startTask",[g],((t,e)=>{null==u||u({err:t,result:e}),handlers_g("messageForParent")}))}function dialogHelpers_j(o,a,u,c){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.meetingStage),!bot_e())throw constants_m;c&&handlers_p(telemetry_s(dialogHelpers_d,"dialog.url.bot.registerMessageForParentHandler"),"messageForParent",c);const p=url_c(a);communication_N(o,"tasks.startTask",[p],((t,e)=>{null==u||u({err:t,result:e}),handlers_g("messageForParent")}))}function dialogHelpers_P(o,a,n){if(internalAPIs_p(runtime_g,constants_s.task),!url_u())throw constants_m;communication_N(o,"tasks.completeTask",[a,n?Array.isArray(n)?n:[n]:[]])}function dialogHelpers_b(t){return{card:t.card,height:t.size?t.size.height:o.Small,width:t.size?t.size.width:o.Small,title:t.title}}function dialogHelpers_F(t){const e=dialogHelpers_b(t);return e.completionBotId=t.completionBotId,e}const dialogHelpers_S=[];function dialogHelpers_w(t){globalVars_i.frameContext&&(globalVars_i.frameContext===constants_s.task?dialogHelpers_S.push(t):handlers_g("messageForChild"))}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/dialog/dialog.js
function dialog_p(){handlers_p(telemetry_s(dialogHelpers_d,"dialog.registerMessageForChildHandler"),"messageForChild",dialogHelpers_w,!1)}function dialog_l(){return!(!e(a)||!a.supports.dialog)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/menus.js
const menus_i="v2";var menus_u,menus_m;!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(menus_u||(menus_u={}));class menus_a{constructor(){this.enabled=!0,this.selected=!1}}let menus_f,menus_l,menus_c;function menus_p(){handlers_p(telemetry_s(menus_i,"menus.registerNavBarMenuItemPressHandler"),"navBarMenuItemPress",menus_h,!1),handlers_p(telemetry_s(menus_i,"menus.registerActionMenuItemPressHandler"),"actionMenuItemPress",menus_I,!1),handlers_p(telemetry_s(menus_i,"menus.registerSetModuleViewHandler"),"setModuleView",menus_w,!1)}function menus_d(n,u){if(t(s),!menus_P())throw o;menus_c=u,e(r(menus_i,"menus.setUpViews"),"setUpViews",[n])}function menus_w(n){menus_c&&menus_c(n)||(internalAPIs_p(runtime_g),communication_N(telemetry_s(menus_i,"menus.handleViewConfigItemPress"),"viewConfigItemPress",[n]))}function menus_M(n,u){if(internalAPIs_p(runtime_g),!menus_P())throw constants_m;menus_f=u,communication_N(telemetry_s(menus_i,"menus.setNavBarMenu"),"setNavBarMenu",[n])}function menus_h(n){menus_f&&menus_f(n)||(internalAPIs_p(runtime_g),communication_N(telemetry_s(menus_i,"menus.handleNavBarMenuItemPress"),"handleNavBarMenuItemPress",[n]))}function menus_v(n,u){if(t(s),!menus_P())throw o;menus_l=u,e(r(menus_i,"menus.showActionMenu"),"showActionMenu",[n])}function menus_I(n){menus_l&&menus_l(n)||(internalAPIs_p(runtime_g),communication_N(telemetry_s(menus_i,"menus.handleActionMenuItemPress"),"handleActionMenuItemPress",[n]))}function menus_P(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.menus)}!function(e){e.dropDown="dropDown",e.popOver="popOver"}(menus_m||(menus_m={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/responseHandler.js
class responseHandler_e{}class responseHandler_r extends responseHandler_e{validate(e){return!0}deserialize(e){return e}}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/appHelpers.js
const appHelpers_=telemetry_u("app");function appHelpers_k(i,e){if(utils_g()){return appHelpers_.extend("initialize")("window object undefined at initialization"),Promise.resolve()}return utils_a((()=>function(i,e){return new Promise((t=>{globalVars_i.initializeCalled||(globalVars_i.initializeCalled=!0,handlers_f(),globalVars_i.initializePromise=communication_I(e,i).then((({context:i,clientType:e,runtimeConfig:t,clientSupportedSDKVersion:n=internal_constants_i})=>{globalVars_i.frameContext=i,globalVars_i.hostClientType=e,globalVars_i.clientSupportedSDKVersion=n;try{appHelpers_J("Parsing %s",t);const i=JSON.parse(t);if(appHelpers_J("Checking if %o is a valid runtime object",null!=i?i:"null"),!i||!i.apiVersion)throw new Error("Received runtime config is invalid");t&&runtime_A(i)}catch(i){if(!(i instanceof SyntaxError))throw i;try{appHelpers_J("Attempting to parse %s as an SDK version",t),isNaN(utils_i(t,internal_constants_i))||(globalVars_i.clientSupportedSDKVersion=t);const i=JSON.parse(n);if(appHelpers_J("givenRuntimeConfig parsed to %o",null!=i?i:"null"),!i)throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");runtime_A(i)}catch(i){if(!(i instanceof SyntaxError))throw i;runtime_A(runtime_j(globalVars_i.clientSupportedSDKVersion,runtime_m,runtime_v))}}globalVars_i.initializeCompleted=!0})),authentication_p(),menus_p(),config_v(),dialog_p()),Array.isArray(e)&&internalAPIs_w(e),void 0!==globalVars_i.initializePromise?t(globalVars_i.initializePromise):appHelpers_J("GlobalVars.initializePromise is unexpectedly undefined")}))}(i,e)),6e4,new Error("SDK initialization timed out."))}function appHelpers_A(i){communication_N(i,app_O.AppLoaded,[version_o])}function appHelpers_F(i,t){e(i,S.ExpectedFailure,[t.reason,t.message])}function appHelpers_N(i,t){communication_N(i,app_O.Failure,[t.reason,t.message])}function appHelpers_R(e){return tslib_es6_n(this,void 0,void 0,(function*(){if(globalVars_i.initializeCompleted)return appHelpers_H(e);if(!globalVars_i.initializePromise)throw new Error(constants_y);return globalVars_i.initializePromise.then((()=>appHelpers_H(e)))}))}function appHelpers_H(t){return tslib_es6_n(this,void 0,void 0,(function*(){return internalAPIs_p(runtime_g)&&(null===(i=runtime_g.supports.app)||void 0===i?void 0:i.notifySuccessResponse)?communication_P(app_O.Success,[version_o],new responseHandler_r,t).then((()=>({hasFinishedSuccessfully:!0}))):(communication_N(t,app_O.Success,[version_o]),{hasFinishedSuccessfully:"unknown"});var i}))}const appHelpers_J=appHelpers_.extend("initializeHelper");function appHelpers_L(i,e){!typeCheckUtilities_n(e)&&internalAPIs_m(),handlers_T(i,e)}function appHelpers_O(i,e){return new Promise((n=>{internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.settings,constants_s.task,constants_s.stage,constants_s.meetingStage),n(communication_E(i,"executeDeepLink",e))}))}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/app/app.js
const app_j="v2",app_w=telemetry_u("app"),app_O={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"};var app_N,app_b;function app_F(){return d.initializeCompleted}function app_x(){return d.frameContext}function app_L(i){return validOrigins_u(),appHelpers_k(telemetry_s(app_j,"app.initialize"),i)}function app_A(e){m.currentWindow=e}function app_z(){d.initializeCalled&&(p(),d.initializeCalled=!1,d.initializeCompleted=!1,d.initializePromise=void 0,d.additionalValidOrigins=[],d.frameContext=void 0,d.hostClientType=void 0,d.isFramelessWindow=!1,v(),P(),r())}function app_D(){return new Promise((e=>{internalAPIs_m(),e(communication_R(telemetry_s(app_j,"app.getContext"),"getContext"))})).then((e=>function(e){var i;const t={actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userClickTimeV2:e.userClickTimeV2,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:constants_a.teams,clientType:e.hostClientType?e.hostClientType:constants_o.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:globalVars_i.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,isBackgroundLoad:e.isBackgroundLoad,sourceOrigin:e.sourceOrigin},user:{id:null!==(i=e.userObjectId)&&void 0!==i?i:"",displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0,dialogParameters:e.dialogParameters||{}};return t}(e)))}function app_k(){internalAPIs_m(),appHelpers_A(telemetry_s(app_j,"app.notifyAppLoaded"))}function app_U(){return appHelpers_R(telemetry_s(app_j,"app.notifySuccess"))}function app_E(e){internalAPIs_m(),appHelpers_N(telemetry_s(app_j,"app.notifyFailure"),e)}function app_H(e){u(),a(h(app_j,"app.notifyExpectedFailure"),e)}function app_M(e){appHelpers_L(telemetry_s(app_j,"app.registerOnThemeChangeHandler"),e)}function app_V(e){c(e)}function app_W(e){return appHelpers_O(telemetry_s(app_j,"app.openLink"),e)}!function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(app_N||(app_N={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(app_b||(app_b={})),app_w("teamsjs instance is version %s, starting at %s UTC (%s local)",version_o,(new Date).toISOString(),(new Date).toLocaleString()),function(){if(utils_g())return;const e=document.getElementsByTagName("script"),i=e&&e[e.length-1]&&e[e.length-1].src,t="Today, teamsjs can only be used from a single script or you may see undefined behavior. This log line is used to help detect cases where teamsjs is loaded multiple times -- it is always written. The presence of the log itself does not indicate a multi-load situation, but multiples of these log lines will. If you would like to use teamjs from more than one script at the same time, please open an issue at https://github.com/OfficeDev/microsoft-teams-library-js/issues";i&&0!==i.length?app_w("teamsjs is being used from %s. %s",i,t):app_w("teamsjs is being used from a script tag embedded directly in your html. %s",t)}();

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/privateAPIs.js
const privateAPIs_a="v1";function privateAPIs_m(t,n){r(p),e(o(privateAPIs_a,"uploadCustomApp"),"uploadCustomApp",[t],n||s())}function privateAPIs_c(t,n,i){internalAPIs_p(runtime_g),communication_N(telemetry_s(privateAPIs_a,"sendCustomMessage"),t,n,i)}function privateAPIs_d(e,i){if(r(p),!t.childWindow)throw new Error("The child window has not yet been initialized or is not present");n(e,i)}function privateAPIs_u(e,t){r(p),i(o(privateAPIs_a,"registerCustomHandler"),e,((...e)=>t.apply(this,e)))}function privateAPIs_f(e,t){r(p),i(o(privateAPIs_a,"registerUserSettingsChangeHandler"),"userSettingsChange",t,!0,[e])}function privateAPIs_w(t){internalAPIs_p(runtime_g,constants_s.content,constants_s.task);const n=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId,t.viewerAction,t.fileOpenPreference,t.conversationId,t.sizeInBytes];communication_N(telemetry_s(privateAPIs_a,"openFilePreview"),"openFilePreview",n)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/teamsAPIs.js
function teamsAPIs_m(){if(!globalVars_i.printCapabilityEnabled){if(internalAPIs_p(runtime_g),!teamsAPIs_j())throw constants_m;globalVars_i.printCapabilityEnabled=!0,document.addEventListener("keydown",(t=>{(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(teamsAPIs_f(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))}}function teamsAPIs_f(){utils_w().print()}function teamsAPIs_p(t){teamsAPIs_d(telemetry_s("v2","teamsAPIs_registerOnLoadHandler"),t,(()=>{if(!typeCheckUtilities_n(t)&&!teamsAPIs_j())throw constants_m}))}function teamsAPIs_d(t,r,i){!typeCheckUtilities_n(r)&&internalAPIs_p(runtime_g),!typeCheckUtilities_n(r)&&i&&i(),handlers_w(t,r)}function teamsAPIs_u(t){teamsAPIs_c(telemetry_s("v2","teamsAPIs_registerBeforeUnloadHandler"),t,(()=>{if(!typeCheckUtilities_n(t)&&!teamsAPIs_j())throw constants_m}))}function teamsAPIs_c(t,e,i){!typeCheckUtilities_n(e)&&internalAPIs_p(runtime_g),!typeCheckUtilities_n(e)&&i&&i(),handlers_O(t,e)}function teamsAPIs_j(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.teamsCore)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/publicAPIs.js
const publicAPIs_x="v1";function publicAPIs_B(e,n){t(m(publicAPIs_x,"initialize"),n).then((()=>{e&&e()}))}function publicAPIs_k(){b()}function publicAPIs_v(){d()}function publicAPIs_E(t){internalAPIs_m(),communication_N(telemetry_s(publicAPIs_x,"getContext"),"getContext",(e=>{e.frameContext||(e.frameContext=globalVars_i.frameContext),t(e)}))}function publicAPIs_L(t){e(m(publicAPIs_x,"registerOnThemeChangeHandlerHelper"),t)}function publicAPIs_P(t){o(m(publicAPIs_x,"registerFullScreenHandler"),"fullScreenChange",t,[])}function publicAPIs_I(t){o(m(publicAPIs_x,"registerAppButtonClickHandler"),"appButtonClick",t,[g.content])}function publicAPIs_S(t){o(m(publicAPIs_x,"registerAppButtonHoverEnterHandler"),"appButtonHoverEnter",t,[g.content])}function publicAPIs_y(t){o(m(publicAPIs_x,"registerAppButtonHoverLeaveHandler"),"appButtonHoverLeave",t,[g.content])}function publicAPIs_A(t){j(m(publicAPIs_x,"registerBackButtonHandler"),t)}function publicAPIs_F(t){h(m(publicAPIs_x,"registerOnLoadHandler"),t)}function publicAPIs_T(t){C(m(publicAPIs_x,"registerBeforeUnloadHandler"),t)}function publicAPIs_U(t){o(m(publicAPIs_x,"registerFocusEnterHandler"),"focusEnter",t,[])}function publicAPIs_W(t){o(m(publicAPIs_x,"registerChangeSettingsHandler"),"changeSettings",t,[g.content])}function publicAPIs_z(t,e){s(H),c(m(publicAPIs_x,"getTabInstances"),e).then((e=>{t(e)}))}function publicAPIs_D(t,e){s(H),l(m(publicAPIs_x,"getMruTabInstances"),e).then((e=>{t(e)}))}function publicAPIs_O(t){u(m(publicAPIs_x,"shareDeepLink"),{subPageId:t.subEntityId,subPageLabel:t.subEntityLabel,subPageWebUrl:t.subEntityWebUrl})}function publicAPIs_M(t,e){s(H,g.content,g.sidePanel,g.settings,g.task,g.stage,g.meetingStage);const r=null!=e?e:p();n(m(publicAPIs_x,"executeDeepLink"),t).then((()=>{r(!0)})).catch((t=>{r(!1,t.message)}))}function publicAPIs_V(t){f(m(publicAPIs_x,"setFrameContext"),t)}function publicAPIs_q(e,n,r){t(m(publicAPIs_x,"initializeWithFrameContext"),r).then((()=>n&&n())),f(m(publicAPIs_x,"setFrameContext"),e)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/pages/appButton.js
function appButton_i(n){handlers_U(telemetry_s(pagesHelpers_m,"pages.appButton.onClick"),"appButtonClick",n,[constants_s.content],(()=>{if(!appButton_m())throw constants_m}))}function appButton_s(n){handlers_U(telemetry_s(pagesHelpers_m,"pages.appButton.onHoverEnter"),"appButtonHoverEnter",n,[constants_s.content],(()=>{if(!appButton_m())throw constants_m}))}function appButton_u(n){handlers_U(telemetry_s(pagesHelpers_m,"pages.appButton.onHoverLeave"),"appButtonHoverLeave",n,[constants_s.content],(()=>{if(!appButton_m())throw constants_m}))}function appButton_m(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.pages)&&!!runtime_g.supports.pages.appButton}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appWindow.js
const appWindow_o="v1";class appWindow_p{postMessage(s,i){internalAPIs_p(runtime_g),communication_N(telemetry_s(appWindow_o,"appWindow.childAppWindow.postMessage"),"messageForChild",[s],i||utils_o())}addEventListener(e,a){internalAPIs_p(runtime_g),"message"===e&&handlers_p(telemetry_s(appWindow_o,"appWindow.childAppWindow.addEventListener"),"messageForParent",a)}}class appWindow_m{static get Instance(){return this._instance||(this._instance=new this)}postMessage(s,p){internalAPIs_p(runtime_g,constants_s.task),communication_N(telemetry_s(appWindow_o,"appWindow.parentAppWindow.postMessage"),"messageForParent",[s],p||utils_o())}addEventListener(e,a){internalAPIs_p(runtime_g,constants_s.task),"message"===e&&handlers_p(telemetry_s(appWindow_o,"appWindow.parentAppWindow.addEventListener"),"messageForChild",a)}}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/tasks.js
const tasks_m="v1";function tasks_c(t,e){const n=telemetry_s(tasks_m,"tasks.startTask"),c=e?t=>{var i,o;return e(null!==(i=t.err)&&void 0!==i?i:"",null!==(o=t.result)&&void 0!==o?o:"")}:void 0;return void 0===t.card&&void 0===t.url||t.card?(internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.meetingStage),communication_N(n,"tasks.startTask",[t],e)):void 0!==t.completionBotId?dialogHelpers_j(n,function(t){if(void 0===t.url||void 0===t.completionBotId)throw new Error(`Both url ${t.url} and completionBotId ${t.completionBotId} are required for bot url dialog. At least one is undefined.`);const i={url:t.url,size:{height:t.height?t.height:constants_t.Small,width:t.width?t.width:constants_t.Small},title:t.title,fallbackUrl:t.fallbackUrl,completionBotId:t.completionBotId};return i}(t),c):dialogHelpers_k(n,function(t){if(void 0===t.url)throw new Error("url property of taskInfo object can't be undefined");const i={url:t.url,size:{height:t.height?t.height:constants_t.Small,width:t.width?t.width:constants_t.Small},title:t.title,fallbackUrl:t.fallbackUrl};return i}(t),c),new appWindow_p}function tasks_p(i){i=tasks_g(i);const o=tslib_es6_t(i,["width","height"]);if(Object.keys(o).length)throw new Error("resize requires a TaskInfo argument containing only width and height");dialogHelpers_h(telemetry_s(tasks_m,"tasks.updateTask"),i)}function tasks_f(t,i){dialogHelpers_P(telemetry_s(tasks_m,"tasks.submitTask"),t,i)}function tasks_g(t){return t.height=t.height?t.height:constants_t.Small,t.width=t.width?t.width:constants_t.Small,t}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/notifications.js
function notifications_m(m){if(internalAPIs_p(runtime_g,constants_s.content),!notifications_c())throw constants_m;communication_N(telemetry_s("v1","notifications.showNotification"),"notifications.showNotification",[m])}function notifications_c(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.notifications)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/conversations.js
const conversations_l="v1";function conversations_d(o){return new Promise((t=>{if(internalAPIs_p(runtime_g,constants_s.content),!conversations_C())throw constants_m;const r=communication_E(telemetry_s(conversations_l,"conversations.openConversation"),"conversations.openConversation",{title:o.title,subEntityId:o.subEntityId,conversationId:o.conversationId,channelId:o.channelId,entityId:o.entityId});o.onStartConversation&&handlers_p(telemetry_s(conversations_l,"conversations.registerStartConversationHandler"),"startConversation",((n,t,e,r)=>{var i;return null===(i=o.onStartConversation)||void 0===i?void 0:i.call(o,{subEntityId:n,conversationId:t,channelId:e,entityId:r})})),o.onCloseConversation&&handlers_p(telemetry_s(conversations_l,"conversations.registerCloseConversationHandler"),"closeConversation",((n,t,e,r)=>{var i;return null===(i=o.onCloseConversation)||void 0===i?void 0:i.call(o,{subEntityId:n,conversationId:t,channelId:e,entityId:r})})),t(r)}))}function conversations_m(){if(internalAPIs_p(runtime_g,constants_s.content),!conversations_C())throw constants_m;communication_N(telemetry_s(conversations_l,"conversations.closeConversation"),"conversations.closeConversation"),handlers_g("startConversation"),handlers_g("closeConversation")}function conversations_u(){return new Promise((n=>{if(internalAPIs_p(runtime_g),!conversations_C())throw constants_m;n(communication_R(telemetry_s(conversations_l,"conversations.getChatMember"),"getChatMembers"))}))}function conversations_C(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.conversations)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/fullTrust/joinedTeams.js
function joinedTeams_p(p){return new Promise((f=>{if(internalAPIs_p(runtime_g),!joinedTeams_u())throw constants_m;if((globalVars_i.hostClientType===constants_o.android||globalVars_i.hostClientType===constants_o.teamsRoomsAndroid||globalVars_i.hostClientType===constants_o.teamsPhones||globalVars_i.hostClientType===constants_o.teamsDisplays)&&!internalAPIs_u(internal_constants_o)){const t={errorCode:E.OLD_PLATFORM};throw new Error(JSON.stringify(t))}f(communication_R(telemetry_s("v1","teams.fullTrust.joinedTeams.getUserJoinedTeams"),"getUserJoinedTeams",p))}))}function joinedTeams_u(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.teams)&&(!!runtime_g.supports.teams.fullTrust&&!!runtime_g.supports.teams.fullTrust.joinedTeams)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/mediaUtil.js
function mediaUtil_u(e,n){if(null==e||null==n||e.length<=0)return null;let t=null,r=1;return e.sort(((e,n)=>e.sequence>n.sequence?1:-1)),e.forEach((e=>{e.sequence==r&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),r++)})),t}function mediaUtil_i(e,n){if(null==e||null==n)return null;const t=atob(e.chunk),r=new Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);const l=new Uint8Array(r),o=new Blob([l],{type:n});return{sequence:e.chunkSequence,file:o}}function mediaUtil_c(e){mediaUtil_s(e)?internalAPIs_h(internal_constants_s):mediaUtil_p(e)?internalAPIs_h(constants_e):mediaUtil_d(e)&&internalAPIs_h(internal_constants_n)}function mediaUtil_a(n){return!(n.mediaType!=media_V.Video||!n.videoProps||!n.videoProps.videoController)}function mediaUtil_f(e){return!(null==e||e.maxMediaCount>10)}function mediaUtil_d(n){var t;return!((null==n?void 0:n.mediaType)!=media_V.Image||!(null===(t=null==n?void 0:n.imageProps)||void 0===t?void 0:t.imageOutputFormats))}function mediaUtil_s(n){return!(!n||n.mediaType!=media_V.VideoAndImage&&!n.videoAndImageProps)}function mediaUtil_p(n){return!(!n||n.mediaType!=media_V.Video||!n.videoProps||n.videoProps.isFullScreenMode)}function mediaUtil_m(e,t,r){return null!=e&&null!=t&&t==media_S.ID&&null!=r}function mediaUtil_I(e){return!(null==e||e.length<=0||e.length>10)}function mediaUtil_v(e){return!e||!(null===e.timeOutIntervalInSec||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec<=0||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec>60)}function mediaUtil_g(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/media.js
const media_L="v1",media_D=telemetry_u("media");var media_S,media_N,media_,media_B,media_V,media_j,media_F;!function(e){e.Base64="base64",e.ID="id"}(media_S||(media_S={}));class media_U{}function media_G(t){if(!t)throw new Error("[captureImage] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),globalVars_i.isFramelessWindow)if(internalAPIs_u(internal_constants_m))communication_N(telemetry_s(media_L,"media.captureImage"),"captureImage",t);else{t({errorCode:E.OLD_PLATFORM},[])}else{t({errorCode:E.NOT_SUPPORTED_ON_PLATFORM},[])}}function media_q(){if(d(O,y.content,y.task),!media_W())throw v;const e=P.Media;return new Promise((i=>{i(t(k(media_L,"media.hasPermission"),"permissions.has",e))}))}function media_H(){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!media_W())throw constants_m;const e=interfaces_O.Media;return new Promise((i=>{i(communication_j(telemetry_s(media_L,"media.requestPermission"),"permissions.request",e))}))}function media_W(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.permissions)}class media_x extends media_U{constructor(e){super(),e&&(this.content=e.content,this.format=e.format,this.mimeType=e.mimeType,this.name=e.name,this.preview=e.preview,this.size=e.size)}getMedia(e){if(!e)throw new Error("[get Media] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),internalAPIs_u(internal_constants_l))if(mediaUtil_m(this.mimeType,this.format,this.content))internalAPIs_u(internal_constants_d)?this.getMediaViaCallback(e):this.getMediaViaHandler(e);else{e({errorCode:E.INVALID_ARGUMENTS},new Blob)}else{e({errorCode:E.OLD_PLATFORM},new Blob)}}getMediaViaCallback(t){const i={mediaMimeType:this.mimeType,assembleAttachment:[]},n=[this.content];communication_N(telemetry_s(media_L,"media.getMedia"),"getMedia",n,(function(e){if(t)if(e&&e.error)t(e.error,new Blob);else if(e&&e.mediaChunk)if(e.mediaChunk.chunkSequence<=0){const n=mediaUtil_u(i.assembleAttachment,i.mediaMimeType);t(e.error,null!=n?n:new Blob)}else{const t=mediaUtil_i(e.mediaChunk,i.mediaMimeType);t?i.assembleAttachment.push(t):media_D(`Received a null assemble attachment for when decoding chunk sequence ${e.mediaChunk.chunkSequence}; not including the chunk in the assembled file.`)}else t({errorCode:E.INTERNAL_ERROR,message:"data received is null"},new Blob)}))}getMediaViaHandler(t){const i=utils_u(),n={mediaMimeType:this.mimeType,assembleAttachment:[]},o=[i,this.content];this.content&&!typeCheckUtilities_n(t)&&communication_N(telemetry_s(media_L,"media.getMedia"),"getMedia",o),handlers_p(telemetry_s(media_L,"media.registerGetMediaRequestHandler"),"getMedia"+i,(function(e){if(t){const o=JSON.parse(e);if(o.error)t(o.error,new Blob),handlers_g("getMedia"+i);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){const e=mediaUtil_u(n.assembleAttachment,n.mediaMimeType);t(o.error,null!=e?e:new Blob),handlers_g("getMedia"+i)}else{const e=mediaUtil_i(o.mediaChunk,n.mediaMimeType);e&&n.assembleAttachment.push(e)}else t({errorCode:E.INTERNAL_ERROR,message:"data received is null"},new Blob),handlers_g("getMedia"+i)}}))}}class media_z{constructor(e){this.controllerCallback=e}notifyEventToHost(t,i){d(O,y.content,y.task);try{u(r)}catch(e){return void(i&&i(e))}const n={mediaType:this.getMediaType(),mediaControllerEvent:t};e(k(media_L,"media.controller"),"media.controller",[n],(e=>{i&&i(e)}))}stop(e){this.notifyEventToHost(media_N.StopRecording,e)}}class media_J extends (/* unused pure expression or super */ null && (media_z)){getMediaType(){return media_V.Video}notifyEventToApp(e){if(this.controllerCallback)switch(e){case media_N.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}}}function media_$(t,i){if(!i)throw new Error("[select Media] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!internalAPIs_u(internal_constants_l)){const e={errorCode:E.OLD_PLATFORM};return void i(e,[])}try{mediaUtil_c(t)}catch(e){return void i(e,[])}if(!mediaUtil_f(t)){const e={errorCode:E.INVALID_ARGUMENTS};return void i(e,[])}const o=[t];communication_N(telemetry_s(media_L,"media.selectMedia"),"selectMedia",o,((e,n,o)=>{var r,a;if(o)return void(mediaUtil_a(t)&&(null===(a=null===(r=null==t?void 0:t.videoProps)||void 0===r?void 0:r.videoController)||void 0===a||a.notifyEventToApp(o)));if(!n)return void i(e,[]);const s=[];for(const e of n)s.push(new media_x(e));i(e,s)}))}function media_K(t,i){if(!i)throw new Error("[view images] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!internalAPIs_u(internal_constants_l)){return void i({errorCode:E.OLD_PLATFORM})}if(!mediaUtil_I(t)){return void i({errorCode:E.INVALID_ARGUMENTS})}const o=[t];communication_N(telemetry_s(media_L,"media.viewImages"),"viewImages",o,i)}function media_Q(t,i){if(!t)throw new Error("[media.scanBarCode] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),globalVars_i.hostClientType!==constants_o.desktop&&globalVars_i.hostClientType!==constants_o.web&&globalVars_i.hostClientType!==constants_o.rigel&&globalVars_i.hostClientType!==constants_o.teamsRoomsWindows&&globalVars_i.hostClientType!==constants_o.teamsRoomsAndroid&&globalVars_i.hostClientType!==constants_o.teamsPhones&&globalVars_i.hostClientType!==constants_o.teamsDisplays)if(internalAPIs_u(constants_h))if(mediaUtil_v(i))communication_N(telemetry_s(media_L,"media.scanBarCode"),"media.scanBarCode",[i],t);else{t({errorCode:E.INVALID_ARGUMENTS},"")}else{t({errorCode:E.OLD_PLATFORM},"")}else{t({errorCode:E.NOT_SUPPORTED_ON_PLATFORM},"")}}!function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(media_N||(media_N={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(media_||(media_={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(media_B||(media_B={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(media_V||(media_V={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(media_j||(media_j={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(media_F||(media_F={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/location.js
function location_s(s,f){if(!f)throw new Error("[location.getLocation] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!internalAPIs_u(internal_constants_a))throw{errorCode:E.OLD_PLATFORM};if(!s)throw{errorCode:E.INVALID_ARGUMENTS};if(!location_m())throw constants_m;communication_N(telemetry_s("v1","location.getLocation"),"location.getLocation",[s],f)}function location_f(s,f){if(!f)throw new Error("[location.showLocation] Callback cannot be null");if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!internalAPIs_u(internal_constants_a))throw{errorCode:E.OLD_PLATFORM};if(!s)throw{errorCode:E.INVALID_ARGUMENTS};if(!location_m())throw constants_m;communication_N(telemetry_s("v1","location.showLocation"),"location.showLocation",[s],f)}function location_m(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.location)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/geoLocation/geoLocation.js
const geoLocation_m="v2";function geoLocation_c(){if(t(e,r.content,r.task),!geoLocation_u())throw i;return o(n(geoLocation_m,"geoLocation.getCurrentLocation"),"location.getLocation",{allowChooseLocation:!1,showMap:!1})}function geoLocation_p(){if(t(e,r.content,r.task),!geoLocation_u())throw i;const a=s.GeoLocation;return new Promise((t=>{t(o(n(geoLocation_m,"geoLocation.hasPermission"),"permissions.has",a))}))}function geoLocation_f(){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!geoLocation_u())throw constants_m;const a=interfaces_O.GeoLocation;return new Promise((t=>{t(communication_j(telemetry_s(geoLocation_m,"geoLocation.requestPermission"),"permissions.request",a))}))}function geoLocation_u(){return!!(internalAPIs_p(runtime_g)&&runtime_g.supports.geoLocation&&runtime_g.supports.permissions)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/webStorageHelpers.js
let webStorageHelpers_t=null;function webStorageHelpers_o(){return tslib_es6_n(this,void 0,void 0,(function*(){return null===webStorageHelpers_t&&(webStorageHelpers_t=(yield app_D()).app.host.name),webStorageHelpers_t}))}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/webStorage.js
function webStorage_a(){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g),!webStorage_u())throw constants_m;return!(!runtime_g.isLegacyTeams||globalVars_i.hostClientType!==constants_o.android&&globalVars_i.hostClientType!==constants_o.ios&&globalVars_i.hostClientType!==constants_o.ipados||(yield function(){return tslib_es6_n(this,void 0,void 0,(function*(){return webStorageHelpers_o()}))}())!==constants_a.teams)||(yield communication_R(telemetry_s("v2","webStorage.isWebStorageClearedOnUserLogOut"),"webStorage.isWebStorageClearedOnUserLogOut"))}))}function webStorage_u(){return internalAPIs_p(runtime_g)&&void 0!==runtime_g.supports.webStorage}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/hostEntity/hostEntity.js
var hostEntity_n;function hostEntity_i(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.hostEntity)}!function(t){t.edu="EDU"}(hostEntity_n||(hostEntity_n={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/hostEntity/tab.js
const tab_l="v2";class tab_d extends responseHandler_e{validate(t){return"ConfigurableTab"===t.tabType}deserialize(t){return t}}class tab_c{constructor(t){this.configurableTabInstance=t}serialize(){return this.configurableTabInstance}}class tab_u{constructor(t){this.hostEntityId=t}serialize(){return this.hostEntityId}}class tab_E extends responseHandler_e{validate(t){return"ConfigurableTab"===t.tabType||"StaticTab"===t.tabType}deserialize(t){return t}}class tab_h{constructor(t){this.hostEntityTabInstance=t}serialize(){return this.hostEntityTabInstance}}class tab_p extends responseHandler_e{validate(t){return t.allTabs&&t.allTabs.forEach((t=>{})),!0}deserialize(t){return t}}function tab_f(e,n){if(internalAPIs_p(runtime_g),!tab_y())throw new Error(`Error code: ${E.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);if(tab_I(e.threadId),n&&0===n.length)throw new Error(`Error code: ${E.INVALID_ARGUMENTS}, message: App types cannot be an empty array`);return communication_P("hostEntity.tab.addAndConfigure",[new tab_u(e),n],new tab_E,telemetry_s(tab_l,"hostEntity.tab.addAndConfigure"))}function tab_m(e){if(internalAPIs_p(runtime_g),!tab_y())throw new Error(`Error code: ${E.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return tab_I(e.threadId),communication_P("hostEntity.tab.getAll",[new tab_u(e)],new tab_p,telemetry_s(tab_l,"hostEntity.tab.getAll"))}function tab_b(e,n){if(internalAPIs_p(runtime_g),!tab_y())throw new Error(`Error code: ${E.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return tab_g(e),tab_I(n.threadId),communication_P("hostEntity.tab.reconfigure",[new tab_c(e),new tab_u(n)],new tab_d,telemetry_s(tab_l,"hostEntity.tab.reconfigure"))}function tab_T(e,n){if(internalAPIs_p(runtime_g),!tab_y())throw new Error(`Error code: ${E.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return tab_g(e),tab_I(n.threadId),communication_P("hostEntity.tab.rename",[new tab_c(e),new tab_u(n)],new tab_d,telemetry_s(tab_l,"hostEntity.tab.rename"))}function tab_w(n,s){if(internalAPIs_p(runtime_g),!tab_y())throw new Error(`Error code: ${E.NOT_SUPPORTED_ON_PLATFORM}, message: Not supported on platform`);return tab_I(s.threadId),tab_g(n),communication_P("hostEntity.tab.remove",[new tab_h(n),new tab_u(s)],new responseHandler_r,telemetry_s(tab_l,"hostEntity.tab.remove"))}function tab_y(){var t;return!!(internalAPIs_p(runtime_g)&&hostEntity_i()&&(null===(t=runtime_g.supports.hostEntity)||void 0===t?void 0:t.tab))}function tab_I(t){if(!t||0==t.length)throw new Error(`Error code: ${E.INVALID_ARGUMENTS}, message: ThreadId cannot be null or empty`)}function tab_g(t){if(!(null==t?void 0:t.internalTabInstanceId)||0===t.internalTabInstanceId.length)throw new Error(`Error code: ${E.INVALID_ARGUMENTS}, message: TabId cannot be null or empty`)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/deepLinkConstants.js
const deepLinkConstants_e="/l/app/",deepLinkConstants_t="/l/meeting/new",deepLinkConstants_s="attendees",deepLinkConstants_a="startTime",deepLinkConstants_c="endTime",deepLinkConstants_n="subject",deepLinkConstants_i="content",deepLinkConstants_l="/l/call/0/0",deepLinkConstants_o="source",deepLinkConstants_m="withVideo",deepLinkConstants_p="/l/chat/0/0",deepLinkConstants_r="users",deepLinkConstants_d="topicName",deepLinkConstants_u="message";

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/internal/deepLinkUtilities.js
function deepLinkUtilities_u($,i,r){if(0===$.length)throw new Error("Must have at least one user when creating a chat deep link");const d=`${deepLinkConstants_r}=`+$.map((n=>encodeURIComponent(n))).join(","),a=void 0===i?"":`&${deepLinkConstants_d}=${encodeURIComponent(i)}`,m=void 0===r?"":`&${deepLinkConstants_u}=${encodeURIComponent(r)}`;return`${constants_j}://${constants_v}${deepLinkConstants_p}?${d}${a}${m}`}function deepLinkUtilities_R(t,i,r){if(0===t.length)throw new Error("Must have at least one target when creating a call deep link");const d=`${deepLinkConstants_r}=`+t.map((n=>encodeURIComponent(n))).join(","),p=void 0===i?"":`&${deepLinkConstants_m}=${encodeURIComponent(i)}`,c=void 0===r?"":`&${deepLinkConstants_o}=${encodeURIComponent(r)}`;return`${constants_j}://${constants_v}${deepLinkConstants_l}?${d}${p}${c}`}function deepLinkUtilities_U(e,t,$,d,p){const c=void 0===e?"":`${i}=`+e.map((n=>encodeURIComponent(n))).join(","),a=void 0===t?"":`&${s}=${encodeURIComponent(t)}`,m=void 0===$?"":`&${C}=${encodeURIComponent($)}`,u=void 0===d?"":`&${I}=${encodeURIComponent(d)}`,R=void 0===p?"":`&${l}=${encodeURIComponent(p)}`;return`${n}://${o}${r}?${c}${a}${m}${u}${R}`}function deepLinkUtilities_h(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return`${n}://${o}${d}${encodeURIComponent(e)}`}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/call.js
var call_m;function call_c(c){const d=telemetry_s("v2","call.startCall");return new Promise((o=>{var f;if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!call_u())throw constants_m;if(!runtime_g.isLegacyTeams)return communication_N(d,"call.startCall",[c],o);o(communication_R(d,"executeDeepLink",deepLinkUtilities_R(c.targets,null===(f=c.requestedModalities)||void 0===f?void 0:f.includes(call_m.Video),c.source)).then((t=>{if(!t)throw new Error(constants_b);return t})))}))}function call_u(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.call)}!function(t){t.Unknown="unknown",t.Audio="audio",t.Video="video",t.VideoBasedScreenSharing="videoBasedScreenSharing",t.Data="data"}(call_m||(call_m={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/meeting/meeting.js
const meeting_u="v1";var meeting_m,meeting_p,meeting_h,meeting_C,meeting_S,meeting_f;function meeting_b(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage),communication_N(telemetry_s(meeting_u,"meeting.getIncomingClientAudioState"),"getIncomingClientAudioState",e)}function meeting_A(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage),communication_N(telemetry_s(meeting_u,"meeting.toggleIncomingClientAudio"),"toggleIncomingClientAudio",e)}function meeting_w(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage,constants_s.settings,constants_s.content),communication_N(telemetry_s(meeting_u,"meeting.getMeetingDetails"),"meeting.getMeetingDetails",e)}function meeting_v(){var n,i,a;return e(this,void 0,void 0,(function*(){let e;r(d,g.sidePanel,g.meetingStage,g.settings,g.content);try{const n=!0;e=yield t(l("v2","meeting.getMeetingDetailsVerbose"),"meeting.getMeetingDetails",n)}catch(e){throw new Error(null===(n=null==e?void 0:e.errorCode)||void 0===n?void 0:n.toString())}if(((null===(i=e.details)||void 0===i?void 0:i.type)==meeting_C.GroupCall||(null===(a=e.details)||void 0===a?void 0:a.type)==meeting_C.OneOnOneCall)&&!e.details.originalCallerInfo)throw new Error(s.NOT_SUPPORTED_ON_PLATFORM.toString());return e}))}function meeting_H(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage,constants_s.task),communication_N(telemetry_s(meeting_u,"meeting.getAuthenticationTokenForAnonymousUser"),"meeting.getAuthenticationTokenForAnonymousUser",e)}function meeting_k(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");r(d,g.sidePanel),n(l(meeting_u,"meeting.getLiveStreamState"),"meeting.getLiveStreamState",e)}function meeting_(e,t,i){if(!e)throw new Error("[request start live streaming] Callback cannot be null");r(d,g.sidePanel),n(l(meeting_u,"meeting.requestStartLiveStreaming"),"meeting.requestStartLiveStreaming",[t,i],e)}function meeting_M(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");r(d,g.sidePanel),n(l(meeting_u,"meeting.requestStopLiveStreaming"),"meeting.requestStopLiveStreaming",e)}function meeting_E(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");r(d,g.sidePanel),i(l(meeting_u,"meeting.registerLiveStreamChangedHandler"),"meeting.liveStreamChanged",e)}function meeting_P(e,t,i={sharingProtocol:meeting_S.Collaborative}){if(!e)throw new Error("[share app content to stage] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage),communication_N(telemetry_s(meeting_u,"meeting.shareAppContentToStage"),"meeting.shareAppContentToStage",[t,i],e)}function meeting_j(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage),communication_N(telemetry_s(meeting_u,"meeting.getAppContentStageSharingCapabilities"),"meeting.getAppContentStageSharingCapabilities",e)}function meeting_q(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");r(d,g.sidePanel,g.meetingStage),n(l(meeting_u,"meeting.stopSharingAppContentToStage"),"meeting.stopSharingAppContentToStage",e)}function meeting_T(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");internalAPIs_p(runtime_g,constants_s.sidePanel,constants_s.meetingStage),communication_N(telemetry_s(meeting_u,"meeting.getAppContentStageSharingState"),"meeting.getAppContentStageSharingState",e)}function meeting_D(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");r(d,g.sidePanel,g.meetingStage),i(l(meeting_u,"meeting.registerSpeakingStateChangeHandler"),"meeting.speakingStateChanged",e)}function meeting_y(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");r(d,g.sidePanel,g.meetingStage),i(l(meeting_u,"meeting.registerRaiseHandStateChangedHandler"),"meeting.raiseHandStateChanged",e)}function meeting_O(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");r(d,g.sidePanel,g.meetingStage),i(l(meeting_u,"meeting.registerMeetingReactionReceivedHandler"),"meeting.meetingReactionReceived",e)}function meeting_R(e){if(void 0===(null==e?void 0:e.joinWebUrl)||null===(null==e?void 0:e.joinWebUrl))return Promise.reject(new Error("Invalid joinMeetingParams"));r(d);const n={joinWebUrl:e.joinWebUrl.href,source:e.source||meeting_f.Other};return t(l("v2","meeting.joinMeeting"),"meeting.joinMeeting",n)}function meeting_I(t,s){if(!s)throw new Error("[requestAppAudioHandling] Callback response cannot be null");if(!t.micMuteStateChangedCallback)throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");r(d,g.sidePanel,g.meetingStage),t.isAppHandlingAudio?function(t,a){const o=(n,o)=>{if(n&&null!=o)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(n)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${n.errorCode} ${n.message}`);if("boolean"!=typeof o)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");const r=n=>e(this,void 0,void 0,(function*(){try{const e=yield t.micMuteStateChangedCallback(n);meeting_F(e,e.isMicMuted===n.isMicMuted?meeting_m.HostInitiated:meeting_m.AppDeclinedToChange)}catch(e){meeting_F(n,meeting_m.AppFailedToChange)}}));i(l(meeting_u,"meeting.registerMicStateChangeHandler"),"meeting.micStateChanged",r);const g=e=>{var n;null===(n=t.audioDeviceSelectionChangedCallback)||void 0===n||n.call(t,e)};i(l(meeting_u,"meeting.registerAudioDeviceSelectionChangedHandler"),"meeting.audioDeviceSelectionChanged",g),a(o)};n(l(meeting_u,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[t.isAppHandlingAudio],o)}(t,s):function(e,t){const i=(e,n)=>{if(e&&null!=n)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(e)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${e.errorCode} ${e.message}`);if("boolean"!=typeof n)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");a("meeting.micStateChanged")&&o("meeting.micStateChanged"),a("meeting.audioDeviceSelectionChanged")&&o("meeting.audioDeviceSelectionChanged"),t(n)};n(l(meeting_u,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],i)}(t,s)}function meeting_U(e){meeting_F(e,meeting_m.AppInitiated)}function meeting_F(e,t){r(d,g.sidePanel,g.meetingStage),n(l(meeting_u,"meeting.setMicStateWithReason"),"meeting.updateMicState",[e,t])}!function(e){e[e.HostInitiated=0]="HostInitiated",e[e.AppInitiated=1]="AppInitiated",e[e.AppDeclinedToChange=2]="AppDeclinedToChange",e[e.AppFailedToChange=3]="AppFailedToChange"}(meeting_m||(meeting_m={})),function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(meeting_p||(meeting_p={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(meeting_h||(meeting_h={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(meeting_C||(meeting_C={})),function(e){e.Collaborative="Collaborative",e.ScreenShare="ScreenShare"}(meeting_S||(meeting_S={})),function(e){e.M365CalendarGridContextMenu="m365_calendar_grid_context_menu",e.M365CalendarGridPeek="m365_calendar_grid_peek",e.M365CalendarGridEventCardJoinButton="m365_calendar_grid_event_card_join_button",e.M365CalendarFormRibbonJoinButton="m365_calendar_form_ribbon_join_button",e.M365CalendarFormJoinTeamsMeetingButton="m365_calendar_form_join_teams_meeting_button",e.Other="other"}(meeting_f||(meeting_f={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/monetization.js
function monetization_p(p,a){let c,u,f="";"function"==typeof p?(c=p,u=a,f=telemetry_s("v1","monetization.openPurchaseExperience")):(u=p,f=telemetry_s("v2","monetization.openPurchaseExperience"));return internalAPIs_p(runtime_g,constants_s.content),utils_f((()=>new Promise((t=>{if(!monetization_s())throw constants_m;t(communication_j(f,"monetization.openPurchaseExperience",u))}))),c)}function monetization_s(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.monetization)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/people.js
function people_a(t,e){let o,n;internalAPIs_p(runtime_g,constants_s.content,constants_s.task,constants_s.settings);let p="";return"function"==typeof t?([o,n]=[t,e],p=telemetry_s("v1","people.selectPeople")):(n=t,p=telemetry_s("v2","people.selectPeople")),utils_s(people_c,o,p,n)}function people_c(r,i){return new Promise((s=>{if(!internalAPIs_u(internal_constants_r))throw{errorCode:E.OLD_PLATFORM};if(!mediaUtil_g(i))throw{errorCode:E.INVALID_ARGUMENTS};if(!people_u())throw constants_m;s(communication_j(r,"people.selectPeople",i))}))}function people_u(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.people)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/navigation.js
const navigation_c="v1";function navigation_g(n){t(o(navigation_c,"navigation.returnFocus"),n)}function navigation_l(t,a){internalAPIs_p(runtime_g);const i=null!=a?a:utils_o();pagesHelpers_d(telemetry_s(navigation_c,"navigation.navigateToTab"),t).then((()=>{i(!0)})).catch((n=>{i(!1,n.message)}))}function navigation_u(t,e){n(m,r.content,r.sidePanel,r.settings,r.remove,r.task,r.stage,r.meetingStage);const i=null!=e?e:s();a(o(navigation_c,"navigation.navigateCrossDomain"),t).then((()=>{i(!0)})).catch((n=>{i(!1,n.message)}))}function navigation_f(t){n(m);const e=null!=t?t:s();i(o(navigation_c,"navigation.navigateBack")).then((()=>{e(!0)})).catch((n=>{e(!1,n.message)}))}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/sharing/sharing.js
const sharing_c={shareWebContent:"sharing.shareWebContent"};function sharing_f(e,s){try{!function(e){if(!(e&&e.content&&e.content.length)){throw{errorCode:E.INVALID_ARGUMENTS,message:"Shared content is missing"}}}(e),function(e){let t;if(e.content.some((e=>!e.type)))throw t={errorCode:E.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"},t;if(e.content.some((t=>t.type!==e.content[0].type)))throw t={errorCode:E.INVALID_ARGUMENTS,message:"Shared content must be of the same type"},t}(e),function(e){let t;if("URL"!==e.content[0].type)throw t={errorCode:E.INVALID_ARGUMENTS,message:"Content type is unsupported"},t;if(e.content.some((e=>!e.url)))throw t={errorCode:E.INVALID_ARGUMENTS,message:"URLs are required for URL content types"},t}(e)}catch(e){return utils_l((()=>Promise.reject(e)),s)}internalAPIs_p(runtime_g,constants_s.content,constants_s.sidePanel,constants_s.task,constants_s.stage,constants_s.meetingStage);const a=telemetry_s(s?"v1":"v2","sharing.shareWebContent");return utils_l(sharing_p,s,a,e)}function sharing_p(t,n){return new Promise((r=>{if(!sharing_h())throw constants_m;r(communication_j(t,sharing_c.shareWebContent,n))}))}function sharing_h(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.sharing)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/stageView/stageView.js
var stageView_a;function stageView_m(p){return new Promise((a=>{if(internalAPIs_p(runtime_g,constants_s.content),!stageView_s())throw constants_m;if(!p)throw new Error("[stageView.open] Stage view params cannot be null");a(communication_j(telemetry_s("v2","stageView.open"),"stageView.open",p))}))}function stageView_s(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.stageView)}!function(t){t.modal="modal",t.popout="popout",t.popoutWithChat="popoutWithChat"}(stageView_a||(stageView_a={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/stageView/self.js
function self_s(){return new Promise((s=>{if(internalAPIs_p(runtime_g,constants_s.content),!self_m())throw constants_m;s(communication_j(telemetry_s("v2","stageView.self.close"),"stageView.self.close"))}))}function self_m(){var t;return internalAPIs_p(runtime_g)&&void 0!==(null===(t=runtime_g.supports.stageView)||void 0===t?void 0:t.self)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/appEntity.js
function appEntity_o(o,a,m,c){if(internalAPIs_p(runtime_g,constants_s.content),!appEntity_l())throw constants_m;if(!o||0==o.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!c)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");communication_N(telemetry_s("v1","appEntity.selectAppEntity"),"appEntity.selectAppEntity",[o,a,m],c)}function appEntity_l(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.appEntity)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/chat.js
function chat_a(e){return chat_m(r("v2","chat.openChat"),e)}function chat_m(r,a){return new Promise((m=>{if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!chat_u())throw constants_m;if(runtime_g.isLegacyTeams)m(communication_E(r,"executeDeepLink",deepLinkUtilities_u([a.user],void 0,a.message)));else{m(communication_E(r,"chat.openChat",{members:[a.user],message:a.message}))}}))}function chat_c(a){const c=telemetry_s("v2","chat.openGroupChat");return new Promise((r=>{if(a.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===a.users.length){const e={user:a.users[0],message:a.message};r(chat_m(c,e))}else{if(internalAPIs_p(runtime_g,constants_s.content,constants_s.task),!chat_u())throw constants_m;if(runtime_g.isLegacyTeams)r(communication_E(c,"executeDeepLink",deepLinkUtilities_u(a.users,a.topic,a.message)));else{r(communication_E(c,"chat.openChat",{members:a.users,message:a.message,topic:a.topic}))}}}))}function chat_u(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.chat)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppAuthentication.js
const externalAppAuthentication_l="v2";class externalAppAuthentication_p{constructor(e){this.invokeRequest=e}serialize(){return this.invokeRequest}}function externalAppAuthentication_f(e){const t=e;return t.responseType===externalAppAuthentication_R.ActionExecuteInvokeResponse&&void 0!==t.value&&void 0!==t.statusCode&&void 0!==t.type}const externalAppAuthentication_m="Action.Execute";var externalAppAuthentication_d,externalAppAuthentication_R,externalAppAuthentication_A;!function(e){e.ActionExecuteInvokeRequest="ActionExecuteInvokeRequest",e.QueryMessageExtensionRequest="QueryMessageExtensionRequest"}(externalAppAuthentication_d||(externalAppAuthentication_d={})),function(e){e.ActionExecuteInvokeResponse="ActionExecuteInvokeResponse",e.QueryMessageExtensionResponse="QueryMessageExtensionResponse"}(externalAppAuthentication_R||(externalAppAuthentication_R={}));class externalAppAuthentication_x extends responseHandler_e{validate(e){return externalAppAuthentication_f(e)}deserialize(e){return e}}function externalAppAuthentication_w(e){if("object"!=typeof e||null===e)return!1;const t=e;return Object.values(externalAppAuthentication_A).includes(t.errorCode)&&(void 0===t.message||"string"==typeof t.message)}function externalAppAuthentication_E(e){e.requestType===externalAppAuthentication_d.ActionExecuteInvokeRequest?externalAppAuthentication_v(e):e.requestType===externalAppAuthentication_d.QueryMessageExtensionRequest&&function(e){if(e.commandId.length>64)throw new Error("originalRequestInfo.commandId exceeds the maximum size of 64 characters");if(e.parameters.length>5)throw new Error("originalRequestInfo.parameters exceeds the maximum size of 5");for(const t of e.parameters){if(t.name.length>64)throw new Error("originalRequestInfo.parameters.name exceeds the maximum size of 64 characters");if(t.value.length>512)throw new Error("originalRequestInfo.parameters.value exceeds the maximum size of 512 characters")}}(e)}function externalAppAuthentication_v(e){if(e.type!==externalAppAuthentication_m){throw{errorCode:externalAppAuthentication_A.INTERNAL_ERROR,message:`Invalid action type ${e.type}. Action type must be "${externalAppAuthentication_m}"`}}if(!utils_S(e.data)){throw{errorCode:externalAppAuthentication_A.INTERNAL_ERROR,message:`Invalid data type ${typeof e.data}. Data must be a primitive or a plain object.`}}}function externalAppAuthentication_g(n,r,o){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthentication_j())throw constants_m;const s=new appId_r(n);return externalAppAuthentication_E(o),communication_S(telemetry_s(externalAppAuthentication_l,"externalAppAuthentication.authenticateAndResendRequest"),"externalAppAuthentication.authenticateAndResendRequest",[s.toString(),o,r.url.href,r.width,r.height,r.isExternal]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))}function externalAppAuthentication_I(n,r){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthentication_j())throw constants_m;const o=new appId_r(n);return communication_S(telemetry_s(externalAppAuthentication_l,"externalAppAuthentication.authenticateWithSSO"),"externalAppAuthentication.authenticateWithSSO",[o.toString(),r.claims,r.silent]).then((([e,t])=>{if(!e)throw t}))}function externalAppAuthentication_y(n,r,o){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthentication_j())throw constants_m;const s=new appId_r(n);return externalAppAuthentication_E(o),communication_S(telemetry_s(externalAppAuthentication_l,"externalAppAuthentication.authenticateWithSSOAndResendRequest"),"externalAppAuthentication.authenticateWithSSOAndResendRequest",[s.toString(),o,r.claims,r.silent]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))}function externalAppAuthentication_q(n,r,s){if(t(c,a.content),!externalAppAuthentication_j())throw u;return o(n,new Error("titleId is Invalid.")),o(r,new Error("oauthConfigId is Invalid.")),e(i(externalAppAuthentication_l,"externalAppAuthentication.authenticateWithOauth2"),"externalAppAuthentication.authenticateWithOauth2",[n,r,s.width,s.height,s.isExternal]).then((([e,t])=>{if(!e)throw t}))}function externalAppAuthentication_S(n,r,h){if(t(c,a.content),!externalAppAuthentication_j())throw u;return o(n,new Error("titleId is Invalid.")),r&&s(r),e(i(externalAppAuthentication_l,"externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins"),"externalAppAuthentication.authenticateWithPowerPlatformConnectorPlugins",[n,null==r?void 0:r.toString(),null==h?void 0:h.width,null==h?void 0:h.height,null==h?void 0:h.isExternal]).then((([e,t])=>{if(!e)throw t}))}function externalAppAuthentication_j(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.externalAppAuthentication)}!function(e){e.INTERNAL_ERROR="INTERNAL_ERROR"}(externalAppAuthentication_A||(externalAppAuthentication_A={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCardActions.js
var externalAppCardActions_c,externalAppCardActions_s;function externalAppCardActions_a(c,s){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppCardActions_A())throw constants_m;const a=new appId_r(c);return communication_S(telemetry_s("v2","externalAppCardActions.processActionSubmit"),"externalAppCardActions.processActionSubmit",[a.toString(),s]).then((([n,t])=>{if(!n)throw t}))}function externalAppCardActions_l(c,s,a){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppCardActions_A())throw constants_m;const l=new appId_r(c);return communication_S(telemetry_s("v2","externalAppCardActions.processActionOpenUrl"),"externalAppCardActions.processActionOpenUrl",[l.toString(),s.href,a]).then((([n,t])=>{if(n)throw n;return t}))}function externalAppCardActions_A(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.externalAppCardActions)}!function(n){n.DeepLinkDialog="DeepLinkDialog",n.DeepLinkOther="DeepLinkOther",n.DeepLinkStageView="DeepLinkStageView",n.GenericUrl="GenericUrl"}(externalAppCardActions_c||(externalAppCardActions_c={})),function(n){n.INTERNAL_ERROR="INTERNAL_ERROR",n.INVALID_LINK="INVALID_LINK",n.NOT_SUPPORTED="NOT_SUPPORTED"}(externalAppCardActions_s||(externalAppCardActions_s={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/clipboard.js
function clipboard_c(e){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content,constants_s.meetingStage,constants_s.task,constants_s.settings,constants_s.stage,constants_s.sidePanel),!clipboard_u())throw constants_m;if(!e.type||!Object.values(_).includes(e.type))throw new Error(`Blob type ${e.type} is not supported. Supported blob types are ${Object.values(_)}`);const t=yield utils_b(e),s={mimeType:e.type,content:t};return communication_j(telemetry_s("v2","clipboard.write"),"clipboard.writeToClipboard",s)}))}function clipboard_d(){return tslib_es6_n(this,void 0,void 0,(function*(){internalAPIs_p(runtime_g,constants_s.content,constants_s.meetingStage,constants_s.task,constants_s.settings,constants_s.stage,constants_s.sidePanel);const t=telemetry_s("v2","clipboard.read");if(!clipboard_u())throw constants_m;const e=yield communication_j(t,"clipboard.readFromClipboard");if("string"==typeof e){const t=JSON.parse(e);return utils_h(t.mimeType,t.content)}return e}))}function clipboard_u(){return globalVars_i.isFramelessWindow?!(!internalAPIs_p(runtime_g)||!runtime_g.supports.clipboard):!!(internalAPIs_p(runtime_g)&&navigator&&navigator.clipboard&&runtime_g.supports.clipboard)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/teams/teams.js
var teams_i;function teams_m(l,i){if(e(o,n.content),!teams_f())throw a;if(!l)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!i)throw new Error("[teams.getTeamChannels] Callback cannot be null");r(t("v1","teams.getTeamChannels"),"teams.getTeamChannels",[l],i)}function teams_s(n,l){if(internalAPIs_p(runtime_g),!teams_f())throw constants_m;if(!n)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!l)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");communication_N(telemetry_s("v1","teams.refreshSiteUrl"),"teams.refreshSiteUrl",[n],l)}function teams_f(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.teams)}!function(r){r[r.Regular=0]="Regular",r[r.Private=1]="Private",r[r.Shared=2]="Shared"}(teams_i||(teams_i={}));

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppAuthenticationForCEA.js
const externalAppAuthenticationForCEA_m="v2";function externalAppAuthenticationForCEA_d(n,i,u){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthenticationForCEA_v())throw constants_m;return externalAppAuthenticationForCEA_w(n,i),communication_C("externalAppAuthenticationForCEA.authenticateWithSSO",[n,i,u.claims,u.silent],telemetry_s(externalAppAuthenticationForCEA_m,"externalAppAuthenticationForCEA.authenticateWithSSO"),externalAppAuthentication_w)}))}function externalAppAuthenticationForCEA_f(n,i,u){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthenticationForCEA_v())throw constants_m;return externalAppAuthenticationForCEA_w(n,i),communication_C("externalAppAuthenticationForCEA.authenticateWithOauth",[n,i,u.url.href,u.width,u.height,u.isExternal],telemetry_s(externalAppAuthenticationForCEA_m,"externalAppAuthenticationForCEA.authenticateWithOauth"),externalAppAuthentication_w)}))}function externalAppAuthenticationForCEA_x(n,e,u,d){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthenticationForCEA_v())throw constants_m;return externalAppAuthenticationForCEA_w(n,e),externalAppAuthentication_v(d),communication_P("externalAppAuthenticationForCEA.authenticateAndResendRequest",[n,e,new externalAppAuthentication_p(d),u.url.href,u.width,u.height,u.isExternal],new externalAppAuthentication_x,telemetry_s(externalAppAuthenticationForCEA_m,"externalAppAuthenticationForCEA.authenticateAndResendRequest"),externalAppAuthentication_w)}))}function externalAppAuthenticationForCEA_E(n,e,u,d){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppAuthenticationForCEA_v())throw constants_m;return externalAppAuthenticationForCEA_w(n,e),externalAppAuthentication_v(d),communication_P("externalAppAuthenticationForCEA.authenticateWithSSOAndResendRequest",[n,e,new externalAppAuthentication_p(d),u.claims,u.silent],new externalAppAuthentication_x,telemetry_s(externalAppAuthenticationForCEA_m,"externalAppAuthenticationForCEA.authenticateWithSSOAndResendRequest"),externalAppAuthentication_w)}))}function externalAppAuthenticationForCEA_v(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.externalAppAuthenticationForCEA)}function externalAppAuthenticationForCEA_w(t,e){utils_y(e,new Error("conversation id is not valid.")),appIdValidation_s(t)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/private/externalAppCardActionsForCEA.js
function externalAppCardActionsForCEA_l(r,l,m){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppCardActionsForCEA_A())throw constants_m;externalAppAuthenticationForCEA_w(r,l);const[t,u]=yield communication_S(telemetry_s("v2","externalAppCardActionsForCEA.processActionOpenUrl"),"externalAppCardActionsForCEA.processActionOpenUrl",[r.toString(),l,m.href]);if(t)throw t;return u}))}function externalAppCardActionsForCEA_m(o,l,m){return tslib_es6_n(this,void 0,void 0,(function*(){if(internalAPIs_p(runtime_g,constants_s.content),!externalAppCardActionsForCEA_A())throw constants_m;externalAppAuthenticationForCEA_w(o,l);const t=yield communication_R(telemetry_s("v2","externalAppCardActionsForCEA.processActionSubmit"),"externalAppCardActionsForCEA.processActionSubmit",o.toString(),l,m);if(t)throw t}))}function externalAppCardActionsForCEA_A(){return!(!internalAPIs_p(runtime_g)||!runtime_g.supports.externalAppCardActionsForCEA)}

;// CONCATENATED MODULE: ./node_modules/@microsoft/teams-js/dist/esm/packages/teams-js/src/public/appInitialization.js
const appInitialization_r="v1";function appInitialization_s(){i(p(appInitialization_r,"appInitialization.notifyAppLoaded"))}function appInitialization_f(){communication_N(telemetry_s(appInitialization_r,"appInitialization.notifySuccess"),app_O.Success,[version_o])}function appInitialization_m(i){appHelpers_N(telemetry_s(appInitialization_r,"appInitialization.notifyFailure"),i)}function appInitialization_c(i){o(p(appInitialization_r,"appInitialization.notifyExpectedFailure"),i)}

;// CONCATENATED MODULE: ./src/app.ts
var app_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const renderPage = (displayName, renderBasicPage = false) => {
    console.log(`>>>>> Test tab app on ${window.location.href}`);
    try {
        app_L()
            .then(() => {
            registerAppCachingHandlers();
            // This tests a specific scenario where the tab is reloaded on unload
            handleReloadOnUnload(privateAPIs_c);
        });
        app_k();
        if (displayName) {
            document.title = displayName;
            const heading = document.getElementById("pageDisplayName");
            if (heading) {
                heading.innerText = displayName;
            }
        }
        if (renderBasicPage) {
            initializeBaseModulesForVisualTests();
        }
        else {
            initializeAppModules();
        }
        app_U();
    }
    catch (err) {
        console.error(`Failed during app initialization. Error: ${err.message || err}`);
        app_E({
            reason: app_N.Other,
            message: err.message,
        });
    }
};
const registerAppCachingHandlers = () => {
    teamsAPIs_u((readyToUnload) => {
        const result = beforeUnloadHandler(readyToUnload);
        return result;
    });
    teamsAPIs_p((data) => {
        loadHandler(data);
    });
};
const beforeUnloadHandler = (readyToUnload) => {
    app_D()
        .then(context => {
        localStorage.setItem(LocalStorageContextKey, JSON.stringify(context));
        if (appCacheMode === 'ReloadOnUnload') {
            console.log(`>>>>> Test tab app reloading page during unload state.`);
            localStorage.setItem(LocalStorageUnloadKey, 'true');
            window.location.reload();
        }
        else {
            readyToUnload();
        }
    });
    return true;
};
const loadHandler = (data) => {
    printRecentLocalStoredAppContext();
    const timeout = 1000;
    setTimeout(() => {
        app_U();
    }, timeout);
};
const initializeBaseModulesForVisualTests = () => {
    addModule({
        name: "app.getContext",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            app_D().then(output);
        },
    });
};
const initializeAppModules = () => {
    var childWindow;
    let totalStates = 0;
    let attachmentArray;
    initialieCacheToggleButton();
    initializeDownloadLinks();
    outputTabRenderedLocation(publicAPIs_E);
    addModule({
        name: "hasStorageAccess",
        initializedRequired: true,
        hasOutput: true,
        onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
            const perm = yield document.hasStorageAccess();
            console.log(perm);
            return perm;
        }),
    });
    addModule({
        name: "popOut",
        initializedRequired: true,
        hasOutput: true,
        onClick: () => {
            window.open(window.location.href);
        },
    });
    addModule({
        name: "setUnpartitionedCookie",
        initializedRequired: true,
        hasOutput: true,
        onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
            document.cookie = document.cookie + `myCookie${Math.random() % 100}=helloworld`;
            return document.cookie;
        }),
    });
    addModule({
        name: "readUnpartitionedCookie",
        initializedRequired: true,
        hasOutput: true,
        onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
            console.log(document.cookie);
            return document.cookie;
        }),
    });
    addModule({
        name: "requestStorageAccess",
        initializedRequired: true,
        hasOutput: true,
        onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
            const perm = yield document.requestStorageAccess();
            console.log(perm);
            return perm;
        }),
    });
    addModule({
        name: "enablePrintCapability",
        initializedRequired: true,
        hasOutput: false,
        action: function () {
            teamsAPIs_m();
        },
    });
    addModule({
        name: "print",
        initializedRequired: true,
        hasOutput: false,
        action: function () {
            teamsAPIs_f();
        },
    });
    addModule({
        name: "app.getContext",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            app_D().then(output);
        },
    });
    addModule({
        name: "getContext",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            publicAPIs_E(output);
        },
    });
    addModule({
        name: "getTabInstances",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            tabs_i()
                .then(output);
        },
    });
    addModule({
        name: "getMRUTabInstances",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            tabs_u()
                .then(output);
        },
    });
    addModule({
        name: "navigateCrossDomain",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "url",
            },
        ],
        action: function (url) {
            pages_D(url);
        },
    });
    addModule({
        name: "pages.registerFocusEnterHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            pages_N((navigateForward) => {
                if (navigateForward) {
                    output("Focus entered forward");
                }
                else {
                    output("Focus entered backward");
                }
                var searchInput = document.getElementById("searchInput");
                searchInput.focus();
            });
        }
    });
    addModule({
        name: "pages.returnFocus",
        initializedRequired: true,
        inputs: [
            {
                type: "boolean",
                name: "navigateForward",
            },
        ],
        action: function (navigateForward) {
            pages_w(navigateForward);
        },
    });
    addModule({
        name: "navigateCrossDomain",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "url",
            },
        ],
        action: function (url) {
            pages_D(url);
        },
    });
    addModule({
        name: "registerOnThemeChangeHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            app_M(output);
        },
    });
    addModule({
        name: "registerChangeSettingsHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            config_H(function () {
                output("Change Settings Event recieved");
            });
        },
    });
    addModule({
        name: "registerAppButtonClickHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            appButton_i(function () {
                output("Click event received");
            });
        },
    });
    addModule({
        name: "registerAppButtonHoverEnterHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            appButton_s(function () {
                output(`Hover enter event received`);
            });
        },
    });
    addModule({
        name: "registerAppButtonHoverLeaveHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            appButton_u(function () {
                output(`Hover leave event received`);
            });
        },
    });
    addModule({
        name: "shareDeepLink",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "deepLinkParameters",
            },
        ],
        action: function (deepLinkParameters) {
            pages_E(deepLinkParameters);
        },
    });
    addModule({
        name: "executeDeepLink",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "deepLink",
            },
        ],
        action: function (deepLink) {
            app_W(deepLink);
        },
    });
    addModule({
        name: "navigateToApp",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "navigateToAppParameters",
            },
        ],
        action: (navigateToAppParameters) => {
            pages_G(navigateToAppParameters);
        },
    });
    addModule({
        name: "authentication.authenticate",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "url",
            },
        ],
        hasOutput: true,
        action: function (url, output) {
            //TODO: Convert callback to promise, for more info, please refer to https://aka.ms/teamsfx-callback-to-promise.
            authentication_y({
                url: url,
            }).then((result) => {
                output("Success:" + result);
            }).catch((reason) => {
                output("Failure:" + reason);
            });
        },
    });
    addModule({
        name: "authentication_externalBrowser",
        initializedRequired: true,
        inputs: [
            {
                type: "boolean",
                name: "mockOAuth", // do not go to the actual oauth provider, for scenario testing purpose
            },
        ],
        hasOutput: true,
        action: function (mockOAuth, output) {
            //TODO: Convert callback to promise, for more info, please refer to https://aka.ms/teamsfx-callback-to-promise.
            authentication_y({
                url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}&hostRedirectUrl={hostRedirectUrl}`,
                isExternal: true
            }).then((result) => {
                output("Success:" + result);
            }).catch((reason) => {
                output("Failure:" + reason);
            });
        },
    });
    addModule({
        name: "tasks.startTask and listen for task module messages",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "taskInfo",
                defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
            },
        ],
        action: function (taskInfo, output) {
            childWindow = tasks_c(taskInfo);
            childWindow.addEventListener("message", function (message) {
                output("Message from task module: " + message);
                childWindow.postMessage("tab received - " + message);
            });
        },
    });
    addModule({
        name: "send message to Child Window(tab to task module)",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "message",
            },
        ],
        action: function (message, output) {
            if (childWindow) {
                childWindow.postMessage(message);
            }
            else {
                output("child window not available");
            }
        },
    });
    addModule({
        name: "send message to parent Window(task module to tab)",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "message",
            },
        ],
        action: function (message, output) {
            var parentWindow = appWindow_m.Instance;
            if (parentWindow) {
                parentWindow.postMessage(message);
                output("message sent to parent(tab)");
            }
            else {
                output("parent window not available");
            }
        },
    });
    addModule({
        name: "register listener for parent message(tab to task module)",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            var parentWindow = appWindow_m.Instance;
            if (parentWindow) {
                parentWindow.addEventListener("message", function (message) {
                    output("message from tab: " + message);
                });
            }
            else {
                output("parent window not available");
            }
        },
    });
    addModule({
        name: "downloadFile ShowNotificationOnly",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "showNotificationParameters",
            },
        ],
        action: function (showNotificationParameters) {
            notifications_m(showNotificationParameters);
        },
    });
    addModule({
        name: "authentication.getAuthToken",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "getAuthTokenParameters",
            },
        ],
        action: function (getAuthTokenParameters, output) {
            //TODO: Convert callback to promise, for more info, please refer to https://aka.ms/teamsfx-callback-to-promise.
            authentication_T(getAuthTokenParameters)
                .then((token) => {
                output("Success: " + token);
            }).catch((reason) => {
                output("Failure: " + reason);
            });
        },
    });
    addModule({
        name: "authentication.getUser",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            //TODO: Convert callback to promise, for more info, please refer to https://aka.ms/teamsfx-callback-to-promise.
            authentication_j()
                .then(output)
                .catch(output);
        },
    });
    addModule({
        name: "authentication.notifyFailure",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "reason",
            },
        ],
        action: function (reason) {
            authentication_O(reason);
        },
    });
    addModule({
        name: "authentication.notifySuccess",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "result",
            },
        ],
        action: function (result) {
            authentication_H(result);
        },
    });
    addModule({
        name: "settings.getSettings",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            pages_S().then(output);
        },
    });
    addModule({
        name: "settings.registerOnSaveHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            config_S(function (saveEvent) {
                window.saveEvent = saveEvent;
                const configUrl = window.location.href;
                config_y({
                    websiteUrl: configUrl,
                    contentUrl: configUrl,
                    entityId: "tabconfig",
                    suggestedDisplayName: "Test Tab RegisterOnSave",
                }).then(() => {
                    output("SaveEvent recieved");
                });
            });
        },
    });
    addModule({
        name: "settings.registerOnSaveHandler.notifyFailure",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "reason",
            },
        ],
        action: function (reason) {
            window.saveEvent &&
                window.saveEvent.notifyFailure(reason);
        },
    });
    addModule({
        name: "settings.registerOnSaveHandler.notifySuccess",
        initializedRequired: true,
        action: function () {
            window.saveEvent && window.saveEvent.notifySuccess();
        },
    });
    addModule({
        name: "settings.setSettings",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "settings",
                defaultValue: '{"contentUrl": "https://teams-test-tab.azurewebsites.net/", "entityId": "someEntity", "websiteUrl": "https://teams-test-tab.azurewebsites.net/"}',
            },
        ],
        hasOutput: true,
        action: function (settings, output) {
            config_y(settings);
        },
    });
    addModule({
        name: "settings.setValidityState",
        initializedRequired: true,
        inputs: [
            {
                type: "boolean",
                name: "validityState",
            },
        ],
        action: function (validityState) {
            config_h(validityState);
        },
    });
    addModule({
        name: "settings.registerOnRemoveHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            config_w(function (removeEvent) {
                window.removeEvent = removeEvent;
                output("RemoveEvent recieved");
            });
        },
    });
    addModule({
        name: "settings.registerOnRemoveHandler.notifyFailure",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "reason",
            },
        ],
        action: function (reason) {
            window.removeEvent &&
                window.removeEvent.notifyFailure(reason);
        },
    });
    addModule({
        name: "settings.registerOnRemoveHandler.notifySuccess",
        initializedRequired: true,
        action: function () {
            window.removeEvent &&
                window.removeEvent.notifySuccess();
        },
    });
    addModule({
        name: "openFilePreview",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "filePreviewParameters",
            },
        ],
        action: function (filePreviewParameters) {
            privateAPIs_w(filePreviewParameters);
        },
    });
    addModule({
        name: "task.submitTask",
        initializedRequired: true,
        inputs: [
            {
                type: "string",
                name: "result",
            },
            {
                type: "string",
                name: "appId",
            },
        ],
        action: function (result, appId) {
            tasks_f(result, appId);
        },
    });
    addModule({
        name: "tasks.startTask",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "taskInfo",
                defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
            },
        ],
        hasOutput: true,
        action: function (taskInfo, output) {
            tasks_c(taskInfo, (error, result) => {
                if (error) {
                    output("Error: " + error);
                }
                else {
                    output("Result: " + result);
                }
            });
        },
    });
    addModule({
        name: "tasks.updateTask",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "taskInfo",
                defaultValue: '{"title": "Large Test Task Module", "height": "large", "width": "large"}',
            },
        ],
        action: function (taskInfo) {
            tasks_p(taskInfo);
        },
    });
    addModule({
        name: "downloadFile ShowNotificationOnly",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "showNotificationParameters",
            },
        ],
        action: function (showNotificationParameters) {
            notifications_m(showNotificationParameters);
        },
    });
    addModule({
        name: "getChatMembers",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            conversations_u().then(output);
        },
    });
    addModule({
        name: "getUserJoinedTeams",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            joinedTeams_p()
                .then(output);
        },
    });
    addModule({
        name: "readyToUnload",
        initializedRequired: true,
        action: function () {
            window.readyToUnload && window.readyToUnload();
        },
    });
    addModule({
        name: "add states",
        initializedRequired: true,
        inputs: [
            {
                type: "boolean",
                name: "includeHistory",
                defaultValue: true,
            },
        ],
        hasOutput: true,
        action: function (includeHistory, output) {
            totalStates++;
            if (includeHistory) {
                window.history.pushState({ some: "state", id: totalStates }, "tab state" + totalStates, "/testTab");
            }
            output("total States: " + totalStates);
            let historyStates = totalStates;
            window.addEventListener("popstate", function (event) {
                historyStates--;
                output("onpopstate: back button clicked. total remaining state: " +
                    historyStates);
            }, false);
        },
    });
    addModule({
        name: "registerBackButtonHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            output("total States: " + totalStates);
            backStack_k(function () {
                if (totalStates > 0) {
                    totalStates--;
                    output("back button clicked. total remaining state: " + totalStates);
                    return true;
                }
                return false;
            });
        },
    });
    addModule({
        name: "navigateBack",
        initializedRequired: true,
        action: function () {
            backStack_f();
        },
    });
    addModule({
        name: "returnFocus",
        initializedRequired: true,
        inputs: [
            {
                type: "boolean",
                name: "navigateForward",
            },
        ],
        action: function (navigateForward) {
            pages_w(navigateForward);
        },
    });
    addModule({
        name: "conversations.openConversation",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "openConversationRequest",
            },
        ],
        action: function (openConversationRequest, output) {
            openConversationRequest.onStartConversation = (conversationResponse) => {
                output("Start Conversation Subentity Id " +
                    conversationResponse.subEntityId +
                    " Conversation Id: " +
                    conversationResponse.conversationId +
                    " Entity Id: " +
                    conversationResponse.entityId +
                    " Channel Id: " +
                    conversationResponse.channelId);
            };
            openConversationRequest.onCloseConversation = (conversationResponse) => {
                output("Start Conversation Subentity Id " +
                    conversationResponse.subEntityId +
                    " Conversation Id: " +
                    conversationResponse.conversationId +
                    " Entity Id: " +
                    conversationResponse.entityId +
                    " Channel Id: " +
                    conversationResponse.channelId);
            };
            try {
                conversations_d(openConversationRequest);
            }
            catch (e) {
                output("Error" + e);
            }
        },
    });
    addModule({
        name: "conversations.closeConversation",
        initializedRequired: true,
        action: function () {
            conversations_m();
        },
    });
    addModule({
        name: "captureImage",
        initializedRequired: true,
        hasOutput: true,
        action: (output) => {
            media_G((err, files) => {
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
                output("format: " +
                    file.format +
                    ", size: " +
                    file.size +
                    ", mimeType: " +
                    file.mimeType +
                    ", content: " +
                    content);
            });
        },
    });
    addModule({
        name: "selectMedia",
        initializedRequired: true,
        hasSelectMedia: true,
        inputs: [{
                type: "object",
                name: "mediaInputs",
                defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
            }],
        action: (mediaInputs, output) => {
            media_$(mediaInputs, (error, attachments) => {
                if (error) {
                    if (error.message) {
                        alert(" ErrorCode: " + error.errorCode + error.message);
                    }
                    else {
                        alert(" ErrorCode: " + error.errorCode);
                    }
                }
                else if (attachments) {
                    let imageArr = [];
                    attachmentArray = attachments;
                    for (let i = 0; i < attachments.length; i++)
                        if (attachments[i].mimeType.includes("image")) {
                            console.log("***debug***attach", attachments[i]);
                            imageArr.push("data:" + attachments[i].mimeType + ";base64," + attachments[i].preview);
                            output(imageArr);
                        }
                }
            });
        }
    });
    addModule({
        name: "getMedia",
        initializedRequired: true,
        hasGetMedia: true,
        action: (output) => {
            if (attachmentArray == null || attachmentArray.length < 0) {
                alert("You haven't selected anything");
            }
            else {
                let mediaInput = attachmentArray[0];
                mediaInput.getMedia((error, blob) => {
                    if (blob) {
                        if (blob.type.includes("image")) {
                            output(URL.createObjectURL(blob));
                        }
                    }
                    if (error) {
                        if (error.message) {
                            alert(" ErrorCode: " + error.errorCode + error.message);
                        }
                        else {
                            alert(" ErrorCode: " + error.errorCode);
                        }
                    }
                });
            }
        }
    });
    addModule({
        name: "viewImagesWithId",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "selectMediaInputs",
                defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
            },
        ],
        action: (selectMediaInputs, output) => {
            media_$(selectMediaInputs, (err, medias) => {
                if (err) {
                    output(err);
                    return;
                }
                const urlList = [];
                for (let i = 0; i < medias.length; i++) {
                    const media = medias[i];
                    urlList.push({
                        value: media.content,
                        type: 1, //microsoftTeams.ImageUriType.ID
                    });
                }
                media_K(urlList, (gmErr) => {
                    if (gmErr) {
                        output(gmErr);
                        return;
                    }
                    output("Success");
                });
            });
        },
    });
    addModule({
        name: "viewImagesWithUrls",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "imageUrls",
                defaultValue: '["https://www.w3schools.com/images/picture.jpg","https://www.w3schools.com/images/picture.jpg"]',
            },
        ],
        action: (imageUrls, output) => {
            const urlList = [];
            for (let i = 0; i < imageUrls.length; i++) {
                const imageUrl = imageUrls[i];
                urlList.push({
                    value: imageUrl,
                    type: 2, //microsoftTeams.ImageUriType.URL
                });
            }
            media_K(urlList, (err) => {
                if (err) {
                    output(err);
                    return;
                }
                output("Success");
            });
        },
    });
    addModule({
        name: "getLocation",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "locationProps",
                defaultValue: '{"allowChooseLocation":true,"showMap":true}',
            },
        ],
        action: (locationProps, output) => {
            location_s(locationProps, (err, location) => {
                if (err) {
                    output(err);
                    return;
                }
                output(JSON.stringify(location));
            });
        },
    });
    addModule({
        name: "showLocation",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "location",
                defaultValue: '{"latitude":17,"longitude":17}',
            },
        ],
        action: (location, output) => {
            location_f(location, (err, result) => {
                if (err) {
                    output(err);
                    return;
                }
                output(result);
            });
        },
    });
    addModule({
        name: "geoLocation.requestPermission",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            output(""); // Clear output
            geoLocation_f()
                .then((value) => output(`Consented: ${value}`))
                .catch((err) => output(err));
        },
    });
    addModule({
        name: "media.requestPermission",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            output(""); // Clear output
            media_H()
                .then((value) => output(`Consented: ${value}`))
                .catch((err) => output(err));
        },
    });
    addModule({
        name: "webStorage.isWebStorageClearedOnUserLogOut",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            output(""); // Clear output
            webStorage_a()
                .then((value) => output(`Response: ${value}`))
                .catch((err) => output(err));
        },
    });
    addModule({
        name: "hostEntity.tab.getAll",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "hostEntityIds",
                defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
            }
        ],
        action: (hostEntityIds, output) => {
            tab_m(hostEntityIds)
                .then((result) => {
                output(JSON.stringify(result));
            })
                .catch((error) => {
                output(`Error Response: ${error}`);
            });
        },
    });
    addModule({
        name: "hostEntity.tab.reconfigure",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "tab",
                defaultValue: '{}',
            },
            {
                type: "object",
                name: "hostEntityIds",
                defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
            }
        ],
        action: (tab, hostEntityIds, output) => {
            tab_b(tab, hostEntityIds)
                .then((result) => {
                output(JSON.stringify(result));
            })
                .catch((error) => {
                output(`Error Response: ${error}`);
            });
        },
    });
    addModule({
        name: "hostEntity.tab.rename",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "tab",
                defaultValue: '{}',
            },
            {
                type: "object",
                name: "hostEntityIds",
                defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
            }
        ],
        action: (tab, hostEntityIds, output) => {
            tab_T(tab, hostEntityIds)
                .then((result) => {
                output(JSON.stringify(result));
            })
                .catch((error) => {
                output(`Error Response: ${error}`);
            });
        },
    });
    addModule({
        name: "hostEntity.tab.remove",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "tab",
                defaultValue: '{}',
            },
            {
                type: "object",
                name: "hostEntityIds",
                defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
            }
        ],
        action: (tab, hostEntityIds, output) => {
            tab_w(tab, hostEntityIds)
                .then((result) => {
                output(`Response: ${result}`);
            })
                .catch((error) => {
                output(`Error Response: ${error}`);
            });
        },
    });
    addModule({
        name: "hostEntity.tab.AddAndConfigure",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "hostEntityIds",
                defaultValue: '{"threadId":"threadId", "messageId":"messageId"}',
            },
            {
                type: "object",
                name: "appTypes",
                defaultValue: '[""]',
            },
        ],
        action: (hostEntityIds, appTypes, output) => {
            tab_f(hostEntityIds, appTypes)
                .then((result) => {
                output(JSON.stringify(result));
            })
                .catch((error) => {
                output(`Error Response: ${error}`);
            });
        },
    });
    addModule({
        name: "media.scanBarCode",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "scanBarCodeConfig",
                defaultValue: '{"timeOutIntervalInSec":30}',
            },
        ],
        action: (scanBarCodeConfig, output) => {
            media_Q((err, result) => {
                if (err) {
                    output(err);
                    return;
                }
                output(result);
            }, scanBarCodeConfig);
        },
    });
    addModule({
        name: "call.startCall",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "startCallParams",
                defaultValue: '{"requestedModalities":["audio"],"targets":["yudogan@microsoft.com"]}',
            },
        ],
        action: function (startCallParams, output) {
            call_c(startCallParams)
                .then(() => output("Success"))
                .catch((err) => output(`Error: ${err}`));
        },
    });
    addModule({
        name: "meeting.getMeetingDetails",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_w((err, meetingDetailsResponse) => {
                if (err) {
                    output(err);
                    return;
                }
                output(meetingDetailsResponse);
            });
        },
    });
    addModule({
        name: "meeting.shareAppContentToStage",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_P((err, result) => {
                if (err) {
                    output(err);
                    return;
                }
                output(result);
            }, window.location.href);
        },
    });
    addModule({
        name: "meeting.getAppContentStageSharingState",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_T((err, appContentStageSharingState) => {
                if (err) {
                    output(err);
                    return;
                }
                output(appContentStageSharingState);
            });
        },
    });
    addModule({
        name: "meeting.getAppContentStageSharingCapabilities",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_j((err, appContentStageSharingCapabilities) => {
                if (err) {
                    output(err);
                    return;
                }
                output(appContentStageSharingCapabilities);
            });
        },
    });
    addModule({
        name: "monetization.openPurchaseExperience",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            monetization_p((err) => {
                if (err) {
                    output(err);
                    return;
                }
                output(null);
            });
        },
    });
    addModule({
        name: "getIncomingClientAudioState",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_b((err, result) => {
                if (err) {
                    output(err);
                    return;
                }
                output(result);
            });
        },
    });
    addModule({
        name: "toggleIncomingClientAudio",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_A((err, result) => {
                if (err) {
                    output(err);
                    return;
                }
                output(result);
            });
        },
    });
    addModule({
        name: "meeting.getAuthenticationTokenForAnonymousUser",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            meeting_H((err, authenticationTokenOfAnonymousUser) => {
                if (err) {
                    output(err);
                    return;
                }
                output(authenticationTokenOfAnonymousUser);
            });
        },
    });
    addModule({
        name: "people.selectPeople",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "peoplePickerInputs",
                defaultValue: '{"title":"", "setSelected":[], "openOrgWideSearchInChatOrChannel":false, "singleSelect":false}',
            },
        ],
        action: (peoplePickerInputs, output) => {
            people_a((err, people) => {
                if (err) {
                    output(err);
                    return;
                }
                output("People length: " + people.length + " " + JSON.stringify(people));
            }, peoplePickerInputs);
        },
    });
    addModule({
        name: "setFrameContext",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "frameContext",
                defaultValue: '{"contentUrl":"", "websiteUrl":""}',
            },
        ],
        action: (frameContext) => {
            pages_b(frameContext);
        },
    });
    addModule({
        name: "navigateToTab",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "tabInstance",
            },
        ],
        action: (tabInstance, output) => {
            navigation_l(tabInstance, (status, reason) => {
                if (reason) {
                    output(reason);
                    return;
                }
                output(status);
            });
        },
    });
    addModule({
        name: "sharing.shareWebContent",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "shareWebContentRequest",
                defaultValue: '{"content":[{"type":"URL","url":"https://teams-test-tab.azurewebsites.net/"}]}',
            },
        ],
        action: (shareWebContentRequest, output) => {
            // Clear the output box prior to action
            output("");
            sharing_f(shareWebContentRequest, (err) => {
                if (err) {
                    output(err.message);
                    return;
                }
                output("Sharing was successful.");
            });
        },
    });
    addModule({
        name: "stageView.open",
        initializedRequired: true,
        inputs: [
            {
                type: "object",
                name: "stageViewParams",
            },
        ],
        action: function (stageViewParams) {
            stageView_m(stageViewParams);
        },
    });
    addModule({
        name: "closeStageView",
        initializedRequired: true,
        action: function () {
            self_s();
        }
    });
    addModule({
        name: "setNavBarMenu",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "navBarMenuItems",
                defaultValue: '[{"id":"submenu1","title":"SubMenu1","displayMode":1,"icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptMi4zMTItNC44OTdjMCAyLjIwNiAxLjc5NCA0IDQgNHM0LTEuNzk0IDQtNC0xLjc5NC00LTQtNC00IDEuNzk0LTQgNHptMTAgMGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiLz48L3N2Zz4=","contentDescription":"SubMenu1","enabled":"true"},{"id":"submenu2","title":"SubMenu2","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEgMTFoLTExdi0yaDExYy41NTIgMCAxLS40NDggMS0xcy0uNDQ4LTEtMS0xYy0uNDAzIDAtLjc0Ny4yNDItLjkwNS41ODdsLTEuNzQ5LS45NTZjLjQ5OS0uOTY1IDEuNDk0LTEuNjMxIDIuNjU0LTEuNjMxIDMuOTcxIDAgMy45NjkgNiAwIDZ6bTcgN2MwLTEuNjU2LTEuMzQ0LTMtMy0zaC0xNXYyaDE1Yy41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxYy0uNDAzIDAtLjc0Ny0uMjQyLS45MDUtLjU4N2wtMS43NDkuOTU2Yy40OTkuOTY1IDEuNDk0IDEuNjMxIDIuNjU0IDEuNjMxIDEuNjU2IDAgMy0xLjM0NCAzLTN6bTEuMDE0LTcuNjU1Yy4wODItLjc1My43MTItMS4zNDUgMS40ODYtMS4zNDUuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0yMC41djJoMjAuNWMxLjkzMiAwIDMuNS0xLjU2OCAzLjUtMy41cy0xLjU2OC0zLjUtMy41LTMuNWMtMS42MjQgMC0yLjk3NyAxLjExNi0zLjM3MiAyLjYxN2wxLjg4Ni43Mjh6bS0xMy43NjQtNy44NDVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLjUtMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0uNSAxOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMC41IDJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLTNjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTExIC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tLjUtNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEuNSA2LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xMy0zYy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xNy41LTJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xNy0xMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTQgMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptNi00LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTMgMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMiAuOTY5Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM3Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tMyAxLjAzMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMC0zLjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS00LjUgOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xLjUtN2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEgM2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTItNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTkuNSAyMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMy41IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTE1IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6Ii8+PC9zdmc+","contentDescription":"SubMenu2","enabled":"true"},{"id":"submenu3","title":"SubMenu3","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTkyIDQuMjIxbC0yLjg4MSAyLjg4MWMtLjQxMS0uNTI4LS44ODYtMS4wMDMtMS40MTQtMS40MTRsMi44ODEtMi44ODEgMS40MTQgMS40MTR6bS04LjE5Mi0uMTUydi00LjA2OWgtMnY0LjA2OWMuMzI4LS4wNDEuNjYxLS4wNjkgMS0uMDY5cy42NzIuMDI4IDEgLjA2OXptNi45MzEgNi45MzFjLjA0MS4zMjguMDY5LjY2MS4wNjkgMXMtLjAyOC42NzItLjA2OSAxaDQuMDY5di0yaC00LjA2OXptLTEuOTMxIDFjMCAuMzQxLS4wMzUuNjc0LS4wOSAxaC0xMS44MmMtLjA1NS0uMzI2LS4wOS0uNjU5LS4wOS0xIDAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDZ6bS0xMC44OTctNi4zMTJsLTIuODgxLTIuODgxLTEuNDE0IDEuNDE0IDIuODgxIDIuODgxYy40MTEtLjUyOS44ODUtMS4wMDMgMS40MTQtMS40MTR6bS03LjEwMyA1LjMxMnYyaDQuMDY5Yy0uMDQxLS4zMjgtLjA2OS0uNjYxLS4wNjktMXMuMDI4LS42NzIuMDY5LTFoLTQuMDY5em05LjA2MiAxMS42NjdjLTEuMjA1LTEuMTk1LTEuMzY0LTEuODkzLS4zMTItMy4yNi4zNy0uNDgxLjUzLS45NDIuNTMtMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIzLTMuMDA2bC0xLjQ0OSAxLjM3OWMxLjM3NSAxLjYgMS4yNDcgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NS0xLjMzNHptOC42ODggMGMtMS4yMDUtMS4xOTUtMS4zNjQtMS44OTMtLjMxMi0zLjI2LjM3LS40ODEuNTI5LS45NDIuNTI5LTEuNCAwLS45NTktLjY5OS0xLjkwNi0xLjYyMi0zLjAwNmwtMS40NDggMS4zNzljMS4zNzUgMS42IDEuMjQ2IDEuNzcyLjI2IDMuMTg0LS4zMTYuNDUzLS40NDYuOTA4LS40NDYgMS4zNTUgMCAxLjE1OS44NzYgMi4yNTkgMS42NjUgMy4wODJsMS4zNzQtMS4zMzR6bS00LjM5NiAwYy0xLjIwNS0xLjE5NS0xLjM2NC0xLjg5My0uMzEyLTMuMjYuMzctLjQ4MS41MjktLjk0Mi41MjktMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIyLTMuMDA2bC0xLjQ0OCAxLjM3OWMxLjM3NSAxLjYgMS4yNDYgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NC0xLjMzNHoiLz48L3N2Zz4","contentDescription":"SubMenu3","enabled":"true"},{"id":"submenu4","title":"SubMenu4","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuNSAyYy44MjcgMCAxLjUuNjczIDEuNSAxLjV2Ny41MjVjMCAxLjU2OS41MTQgMi4yODcgMS40MTEgMy4wNSAxLjAxLjg1OCAxLjU4OSAyLjEwNiAxLjU4OSAzLjQyNSAwIDIuNDgxLTIuMDE5IDQuNS00LjUgNC41cy00LjUtMi4wMTktNC41LTQuNWMwLTEuMzE5LjU3OS0yLjU2NyAxLjU5LTMuNDI1Ljg5Ni0uNzYxIDEuNDEtMS40NzkgMS40MS0zLjA1di03LjUyNWMwLS44MjcuNjczLTEuNSAxLjUtMS41em0wLTJjLTEuOTMzIDAtMy41IDEuNTY3LTMuNSAzLjV2Ny41MjVjMCAuNTg3LS4yNTggMS4xNDYtLjcwNSAxLjUyNS0xLjQwMyAxLjE5Mi0yLjI5NSAyLjk2NS0yLjI5NSA0Ljk1IDAgMy41OSAyLjkwOSA2LjUgNi41IDYuNXM2LjUtMi45MSA2LjUtNi41YzAtMS45ODUtLjg5Mi0zLjc1OC0yLjI5NS00Ljk1LS40NDctLjM4LS43MDUtLjkzOC0uNzA1LTEuNTI1di03LjUyNWMwLTEuOTMzLTEuNTY3LTMuNS0zLjUtMy41em0yLjEwNyAxNC43MThjLTEuMDEyLS44OS0xLjYwNy0xLjczNC0xLjYwNy0zLjIydi02LjQ5OGgtMXY2LjQ5OGMwIDEuNDg0LS41OTcgMi4zMzItMS42MDcgMy4yMi0uNzk0LjY5OC0xLjM5MyAxLjY0Mi0xLjM5MyAyLjc4MiAwIDEuOTMzIDEuNTY3IDMuNSAzLjUgMy41czMuNS0xLjU2NyAzLjUtMy41YzAtMS4xNC0uNTk5LTIuMDgzLTEuMzkzLTIuNzgyem0tOS42MDctNi4yMThjMCAxLjkzMy0xLjU2NyAzLjUtMy41IDMuNXMtMy41LTEuNTY3LTMuNS0zLjUgMS41NjctMy41IDMuNS0zLjUgMy41IDEuNTY3IDMuNSAzLjV6bS04IDBjMC0uMTcxLjAzMi0uMzMzLjA1MS0uNWgtMi4wNTF2MWgyLjA1MWMtLjAxOS0uMTY3LS4wNTEtLjMyOS0uMDUxLS41em0xLjcwNS0zLjUwMWwtMS40NDgtMS40NDktLjcwNy43MDcgMS40NDggMS40NDhjLjIxLS4yNjEuNDQ1LS40OTcuNzA3LS43MDZ6bTYuMjk3LjcwNmwxLjQ0Ny0xLjQ0OC0uNzA3LS43MDctMS40NDggMS40NDhjLjI2My4yMS40OTguNDQ1LjcwOC43MDd6bS0zLjUwMi0xLjcwNWMuMTcxIDAgLjMzNC4wMzIuNS4wNXYtMi4wNWgtMXYyLjA1Yy4xNjYtLjAxOC4zMjktLjA1LjUtLjA1em0wIDljLS4xNzEgMC0uMzM0LS4wMzItLjUtLjA1djIuMDVoMXYtMi4wNWMtLjE2Ni4wMTgtLjMyOS4wNS0uNS4wNXptNC40NDktNWMuMDE5LjE2Ny4wNTEuMzI5LjA1MS41bC0uMDUxLjVoMi4wNTF2LTFoLTIuMDUxem0tNy45NTEgMy4yOTRsLTEuNDQ4IDEuNDQ5LjcwNy43MDcgMS40NDgtMS40NDhjLS4yNjItLjIxLS40OTctLjQ0Ni0uNzA3LS43MDh6bTYuMjk2LjcwOGwxLjQ0OCAxLjQ0OC43MDctLjcwNy0xLjQ0Ny0xLjQ0OGMtLjIxLjI2Mi0uNDQ1LjQ5Ny0uNzA4LjcwN3oiLz48L3N2Zz4=","contentDescription":"SubMenu4","enabled":"true"},{"id":"submenu5","title":"SubMenu5","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4zOTYgOWgtMi4zOTZ2LTJoMi4zOTZ2MnptNy42MDQtNi40NTh2LTIuNTQyaC0ydjIuNTQyaDJ6bS00Ljc5My44NzZsLTEuODU5LTEuODU5LTEuNDE0IDEuNDE0IDEuODU5IDEuODU5IDEuNDE0LTEuNDE0em05LjIyMi0yLjE1NmwtMS44NzUgMS44NzUgMS40MTQgMS40MTQgMS44NzUtMS44NzUtMS40MTQtMS40MTR6bS0xMS40NiAxMC42NjdsLTIuMDUzIDEuNzczIDEuMzAzIDEuNTE3IDIuMDUzLTEuNzczLTEuMzAzLTEuNTE3em0yMS4wMzEgMi43OTNjMCAyLjM2Mi0xLjk0OSA0LjI3OC00LjM1NCA0LjI3OGgtMTAuMjkyYy0yLjQwNSAwLTQuMzU0LTEuOTE2LTQuMzU0LTQuMjc4IDAtLjc3LjIxMS0xLjQ5LjU3NC0yLjExMy0uOTY1LS45MDctMS41NzQtMi4xOC0xLjU3NC0zLjYwOSAwLTIuNzYyIDIuMjM4LTUgNS01IDEuMzI4IDAgMi41MjMuNTI4IDMuNDE0IDEuMzc2LjY0OC0uMjQgMS4zNS0uMzc2IDIuMDg2LS4zNzYgMy4xNzIgMCA1Ljc1MyAyLjQ0MyA1LjkyMiA1LjUxNiAyLjAzMy4zNTkgMy41NzggMi4xMDUgMy41NzggNC4yMDZ6bS0xOC01LjcyMmMwIC44Ni4zNyAxLjYyOC45NTUgMi4xNzIuNDg0LS4zMTYgMS4wMjktLjU1MSAxLjYyMy0uNjU2LjA4OS0xLjYxLjg0NC0zLjA0MiAxLjk5NC00LjA0Ni0uNDU5LS4yODgtLjk5LS40Ny0xLjU3Mi0uNDctMS42NTQgMC0zIDEuMzQ2LTMgM3ptMTYgNS43MjJjMC0yLjA3Ni0xLjk3OS0yLjYxOC0zLjQ4OC0yLjUxMi4yMTctMS40MzktLjI0MS01LjIxLTQuMDEyLTUuMjEtMy44NzUgMC00LjA2MiAzLjg1NC00LjAxMiA1LjIwOS0xLjM4NC0uMDg0LTMuNDg4LjM5NS0zLjQ4OCAyLjUxMyAwIDEuMjU2IDEuMDU3IDIuMjc4IDIuMzU0IDIuMjc4aDEwLjI5MWMxLjI5OCAwIDIuMzU1LTEuMDIyIDIuMzU1LTIuMjc4em0tMTUuNTggOS4yNzhsLTEuNDEtMS40MSAyLjU5LTIuNTkgMS40MSAxLjQxLTIuNTkgMi41OXptNy41NDMtMi41OWwtMS40MS0xLjQxLTIuNTkgMi41OSAxLjQxIDEuNDEgMi41OS0yLjU5em00Ljg3NSAwbC0xLjQxLTEuNDEtMi41OSAyLjU5IDEuNDEgMS40MSAyLjU5LTIuNTl6Ii8+PC9zdmc+","contentDescription":"SubMenu5","enabled":"true"}]',
            },
        ],
        action: function (navBarMenuItems, output) {
            menus_M(navBarMenuItems, (id) => {
                navBarMenuItems.map((item) => {
                    if (item.id === id) {
                        output("Clicked id is : " + id);
                    }
                });
                return true;
            });
        },
    });
    addModule({
        name: "appEntity.selectAppEntity",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "selectAppEntityParams",
            },
        ],
        action: function (selectAppEntityParams, output) {
            appEntity_o(selectAppEntityParams.threadId, selectAppEntityParams.categories, selectAppEntityParams.subEntityId, (sdkError, appEntity) => {
                output(sdkError || appEntity);
            });
        },
    });
    addModule({
        name: "chat.openGroupChat",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "object",
                name: "openChatRequest",
                defaultValue: '{"message":"Test Group Chat Message","topic":"Test Group Chat","users":["a@contoso.com","b@contoso.com"]}',
            },
        ],
        action: function (openChatRequest, output) {
            chat_c(openChatRequest)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateAndResendRequest",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "object",
                name: "authenticateParameters",
                defaultValue: JSON.stringify({ url: new URL("https://www.bing.com") }),
            },
            {
                type: "object",
                name: "originalRequestInfo",
                defaultValue: JSON.stringify({
                    requestType: "QueryMessageExtensionRequest",
                    commandId: "searchNews",
                    parameters: [{
                            name: "searchText",
                            value: "news",
                        }]
                }),
            }
        ],
        action: function (appId, authenticateParameters, originalRequestInfo, output) {
            externalAppAuthentication_g(appId, authenticateParameters, originalRequestInfo)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateWithSSO",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "object",
                name: "authTokenRequest",
                defaultValue: '{}',
            }
        ],
        action: function (appId, authTokenRequest, output) {
            externalAppAuthentication_I(appId, authTokenRequest)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateWithSSOAndResendRequest",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "object",
                name: "authTokenRequest",
                defaultValue: '{}',
            },
            {
                type: "object",
                name: "originalRequestInfo",
                defaultValue: JSON.stringify({
                    requestType: "QueryMessageExtensionRequest",
                    commandId: "searchNews",
                    parameters: [{
                            name: "searchText",
                            value: "news",
                        }]
                }),
            }
        ],
        action: function (appId, authTokenRequest, originalRequestInfo, output) {
            externalAppAuthentication_y(appId, authTokenRequest, originalRequestInfo)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppCardActions.processActionSubmit",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "object",
                name: "actionSubmitPayload",
                defaultValue: JSON.stringify({
                    id: "submitActionId",
                    data: {
                        key: "value",
                        key2: "value2"
                    }
                })
            }
        ],
        action: function (appId, actionSubmitPayload, output) {
            externalAppCardActions_a(appId, actionSubmitPayload)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppCardActions.processActionOpenUrl",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "string",
                name: "url",
                defaultValue: "https://bing.com"
            }
        ],
        action: function (appId, url, output) {
            externalAppCardActions_l(appId, new URL(url))
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "clipboard.read",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            clipboard_d()
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "clipboard.write",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "content",
                defaultValue: "Hello World"
            }
        ],
        action: function (content, output) {
            clipboard_c(content)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "teams.refreshSiteUrl",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "threadId"
            }
        ],
        action: function (threadId, output) {
            teams_s(threadId, (error) => {
                if (error) {
                    output("Failure: " + JSON.stringify(error));
                }
                else {
                    output("Success");
                }
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateWithSSOForCEA",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "1a69c0fd-6ec8-488e-8900-ff3a2fcf5f51"
            },
            {
                type: "string",
                name: "convId",
                defaultValue: "mockConvId"
            },
            {
                type: "object",
                name: "authTokenRequest",
                defaultValue: '{}',
            }
        ],
        action: function (appId, convId, authTokenRequest, output) {
            externalAppAuthenticationForCEA_d(appId, convId, authTokenRequest)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateWithOauthForCEA",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f46ad259-0fe5-4f12-872d-c737b174bcb4"
            },
            {
                type: "string",
                name: "convId",
                defaultValue: "mockConvId"
            },
            {
                type: "object",
                name: "authenticateParameters",
                defaultValue: JSON.stringify({
                    url: new URL("https://token.botframework.com/api/oauth/signin?signin=78ed2ae53eb6442d8a784554003ca8f3"),
                    isExternal: true,
                }),
            }
        ],
        action: function (appId, convId, authenticateParameters, output) {
            externalAppAuthenticationForCEA_f(appId, convId, authenticateParameters)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateWithSSOAndResendRequestForCEA",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "1a69c0fd-6ec8-488e-8900-ff3a2fcf5f51"
            },
            {
                type: "string",
                name: "convId",
                defaultValue: "mockConvId"
            },
            {
                type: "object",
                name: "authTokenRequest",
                defaultValue: '{}',
            },
            {
                type: "object",
                name: "originalRequestInfo",
                defaultValue: JSON.stringify({
                    requestType: "ActionExecuteInvokeRequest",
                    type: "Action.Execute",
                    id: "mockId",
                    verb: "verb",
                    data: "data",
                }),
            }
        ],
        action: function (appId, convId, authTokenRequest, originalRequestInfo, output) {
            externalAppAuthenticationForCEA_E(appId, convId, authTokenRequest, originalRequestInfo)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppAuthentication.authenticateWithOauthAndResendRequestForCEA",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f46ad259-0fe5-4f12-872d-c737b174bcb4"
            },
            {
                type: "string",
                name: "convId",
                defaultValue: "mockConvId"
            },
            {
                type: "object",
                name: "authenticateParameters",
                defaultValue: JSON.stringify({
                    url: new URL("https://ccmsteams.integrations.adobe.com/auth/v2/login?width=600&height=600&mode=bot"),
                    isExternal: true,
                }),
            },
            {
                type: "object",
                name: "originalRequestInfo",
                defaultValue: JSON.stringify({
                    requestType: "ActionExecuteInvokeRequest",
                    type: "Action.Execute",
                    id: "mockId",
                    verb: "verb",
                    data: "data",
                }),
            }
        ],
        action: function (appId, convId, authenticateParameters, originalRequestInfo, output) {
            externalAppAuthenticationForCEA_x(appId, convId, authenticateParameters, originalRequestInfo)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppCardActions.processActionSubmitForCEA",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "string",
                name: "convId",
                defaultValue: "mockConvId"
            },
            {
                type: "object",
                name: "actionSubmitPayload",
                defaultValue: JSON.stringify({
                    id: "submitActionId",
                    title: "title",
                    data: {
                        msteams: {
                            type: "invoke",
                        }
                    }
                })
            }
        ],
        action: function (appId, convId, actionSubmitPayload, output) {
            externalAppCardActionsForCEA_m(appId, convId, actionSubmitPayload)
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
    });
    addModule({
        name: "ExternalAppCardActions.processActionOpenUrlForCEA",
        initializedRequired: true,
        hasOutput: true,
        inputs: [
            {
                type: "string",
                name: "appId",
                defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
            },
            {
                type: "string",
                name: "convId",
                defaultValue: "mockConvId"
            },
            {
                type: "string",
                name: "url",
                defaultValue: "https://bing.com"
            }
        ],
        action: function (appId, convId, url, output) {
            externalAppCardActionsForCEA_l(appId, convId, new URL(url))
                .then((result) => {
                output(result);
            })
                .catch((error) => {
                output(error);
            });
        },
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
    // Add handling for F6 and Ctrl/Cmd + F6
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 117) {
            event.cancelBubble = true;
            event.preventDefault();
            event.stopImmediatePropagation();
            const navigateForward = !(event.ctrlKey || event.metaKey);
            pages_w(navigateForward);
        }
    });
    const url = new URL(window.location.href);
    if (url.searchParams.get("simulateTimeout")) {
        console.log("Simulating timeout by not calling notifySuccess");
    }
    else if (url.searchParams.get("simulateFailure")) {
        appInitialization_m({
            reason: app_N.Other
        });
    }
    else {
        appInitialization_f();
    }
};

;// CONCATENATED MODULE: ./src/index.ts



(function () {
    const params = new URLSearchParams(window.location.search);
    const basePage = params.get("basepage");
    const displayName = params.get("displayname");
    renderPage(displayName, basePage === "true");
    initializeNavigation(params);
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", () => {
        downloadHandler();
        filterHandler();
    });
    // Define global functions for use from html files
    window.enablePrintCapability = () => {
        teamsAPIs_m();
    };
    window.printHandler = () => {
        window.print();
    };
})();

/******/ })()
;
//# sourceMappingURL=app.00571df3a5e71adad9ab.js.map