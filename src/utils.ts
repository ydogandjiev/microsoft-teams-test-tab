import { renderJson } from "./jsonUtils";
import { IButtonProps, moduleConfig } from "./moduleConfig.interface";
import { Context, FrameContexts } from "@microsoft/teams-js";
export let inputs = {};

export const LocalStorageContextKey = "app-context";
export const LocalStorageUnloadKey = "isUnloading";
type CacheMode = "ReloadOnUnload" | "Normal";
export let appCacheMode: CacheMode = "Normal";

export let container = document.createElement("div");
container.classList.add("moduleContainer");

export function addModule(config: moduleConfig) {
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
          valueGetter = function() {
            return input.value;
          };
          break;
        case "boolean":
          input = document.createElement("input");
          input.type = "checkbox";
          if (defaultInputValue) {
            input.checked= defaultInputValue
          }
          valueGetter = function() {
            return input.checked;
          };
          break;
        case "object":
          input = document.createElement("textarea");
          valueGetter = function() {
            input.style.backgroundColor = "";
            try {
              return JSON.parse(input.value);
            } catch (e) {
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

  button.addEventListener("click", async () => {
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
      args.push(function(result) {
        if (typeof result !== "string") {
          result = JSON.stringify(result);
        }

        textarea.value = result;
        ["copy", "view"].forEach((buttonType) => {
          const button = document.getElementById(`button-${buttonType}-${config.name}`);
          if (result) {
            if (button) {
              button.style.display = "inline";
            } else {
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
          } else if (button) {
            button.style.display = "none";
          }
        });
      });
    }

    if(config.onClick) {
      textarea.value = await config.onClick.apply(null, args);
    }
    if(config.action)
    config.action.apply(null, args);

  });

  var searchInput = document.getElementById("searchInput") as HTMLInputElement;
  searchInput.addEventListener("input", function() {
    // Show element if it matches search text or searchBox is empty
    if (searchInput.value === "" || config.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

export function restoreState() {
  var stateStr = localStorage.getItem("state");
  if (!stateStr) {
    return;
  }

  var state = JSON.parse(stateStr);
  for (var id in state) {
    inputs[id].value = state[id];
  }
}

export function saveState() {
  var state = {};
  for (var id in inputs) {
    state[id] = inputs[id].value;
  }

  localStorage.setItem("state", JSON.stringify(state));
}

export function downloadHandler() {
  var input = document.querySelector("#image_uploads") as any;
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
    } else {
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
        } else {
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
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  }
}

export function filterHandler() {
  var searchInput = document.getElementById('searchInput') as HTMLInputElement;
  var sectionTitle = document.getElementsByClassName('sectionTitle');

  searchInput.addEventListener('input', function() {
    var searchText = searchInput.value.toLowerCase();

    for (var i = 0; i < sectionTitle.length; i++) {
      var title = sectionTitle[i].textContent.toLowerCase();
      if (title.indexOf(searchText) === -1) {
        sectionTitle[i].parentElement.style.display = 'none';
      } else {
        sectionTitle[i].parentElement.style.display = 'block';
      }
    }
  });
}

export function initializeDownloadLinks() {
  const csv = "Id,Value\n1,Hello world!\n";
  const data = new Blob([csv]);
  const downloadLink = document.getElementById("downloadLink") as HTMLAnchorElement;
  downloadLink.href = URL.createObjectURL(data);
  
  const downloadButton = document.getElementById("downloadButton") as HTMLButtonElement;
  downloadButton.onclick = () => {
    const csv = "Id, Value\n1,Hello world!\n";
    const data = new Blob([csv]);
    let downloadLink = document.getElementById("hiddenDownloadLink") as HTMLAnchorElement;
    
    if (downloadLink == null) {
      downloadLink = document.createElement('a');
      downloadLink.setAttribute('download', 'DownloadViaButton.csv');
      downloadLink.setAttribute('id', 'hiddenDownloadLink');
      
      document.body.appendChild(downloadLink);
    }
    
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data as any));
    downloadLink.href = URL.createObjectURL(data);
    
    downloadLink.style.display = 'none';
    downloadLink.click();
  };
}

export function outputTabRenderedLocation(getContext: (callback: (context: Context) => void) => void) {
  if (isInTeams()) {
    getContext(outputTabRenderedLocationInTeams);
  } else {
    addPageSection(`Currently running outside of Microsoft Teams.`);
  }

  function isInTeams() {  
    if ((window.parent === window.self && (window as any).nativeInterface) || 
        window.name === "embedded-page-container" || 
        window.name === "extension-tab-frame") {    
        return true;  
    }  
    return false;
  }
}

export function initialieCacheToggleButton() {
  const cacheToggle = document.getElementById("cache-mode-toggle") as HTMLButtonElement;
  cacheToggle.innerText = appCacheMode;
  cacheToggle.onclick = () => {
    appCacheMode = appCacheMode === "Normal" ? "ReloadOnUnload" : "Normal";
    cacheToggle.innerText = appCacheMode;
  }
}

function outputTabRenderedLocationInTeams(context: Context) {
  var appLocation = 'unidentified location...';
  const perfData = window.performance;
  if (context.meetingId) {
    appLocation = 'Meeting'
  } else if(context.chatId) {
    appLocation = 'Chat'
  } else if(context.teamId && context.channelId) {
    appLocation = `${context.channelName} channel in ${context.teamName}`
  } else {
    appLocation = 'Teams App'
  }

  if (isInConfig()) {
    appLocation = `${appLocation} (Config page)`
  } else if(isInSidePanel()) {
    appLocation = `${appLocation} (Side Panel)`
  }

  addPageSection(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`)  

  function isInConfig() {
    return context.frameContext === FrameContexts.settings
  }

  function isInSidePanel() {
    return context.frameContext === FrameContexts.sidePanel
  }
};

export function printRecentLocalStoredAppContext() {
  var storedContext = localStorage.getItem(LocalStorageContextKey);
  if (storedContext) {
    var contextContainer = document.getElementById("textarea-recentAppContext") as HTMLTextAreaElement;
    contextContainer.value = storedContext;
  }
};

export function handleReloadOnUnload(sendCustomMessage) {
  const isReloading = localStorage.getItem(LocalStorageUnloadKey);
  if (isReloading === 'true') {
    console.log(`>>>>> Test tab app calling readyToUnload.`);
    localStorage.removeItem(LocalStorageUnloadKey);
    sendCustomMessage("readyToUnload");
  }
}

function addPageSection(content: string) {
  var element = document.createElement("div");
  var title = document.createElement("div");
  title.classList.add("sectionTitle");
  title.textContent = content;
  element.appendChild(title);
  container.prepend(element);
}

function createButton(buttonProps:IButtonProps) {
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

function copyText(name: string) {
  return () => {
    const area = document.getElementById(`textarea-${name}`) as HTMLTextAreaElement;
    area.select();
    navigator.clipboard.writeText(area.value);
  };
}

function viewJson(name: string) {
  return () => {
    const area = document.getElementById(`textarea-${name}`) as HTMLTextAreaElement;
    area.select();
    renderJsonViewer(area.value);
  };
}

function renderJsonViewer(data: string) {
  const modal = document.getElementById("myModal") as HTMLDivElement;
  modal.style.display = "block";
  document.getElementById("errorMessage").style.display = "none";
  const jsonViewer = document.getElementById("jsonViewer") as HTMLDivElement;
  jsonViewer.innerHTML = "";
  try {
    const json = JSON.parse(data);
    renderJson(jsonViewer, json);
  } catch {
    renderJson(jsonViewer, data.toString());
  }
}
