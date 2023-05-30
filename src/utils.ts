import { moduleConfig } from "./moduleConfig.interface";
import { Context, FrameContexts } from '@microsoft/teams-js';
export let inputs = {};

export let container = document.createElement("div");
container.classList.add("moduleContainer");

export function addModule(config: moduleConfig) {
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
    element.appendChild(label);
    element.appendChild(document.createElement("br"));
    var textarea = document.createElement("textarea");
    textarea.setAttribute("aria-label", "textarea-" + config.name);
    textarea.id = "textarea-" + config.name;
    element.appendChild(textarea);
  }

  container.appendChild(element);

  button.addEventListener("click", function() {
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
      args.push(function(result) {
        if (typeof result !== "string") {
          result = JSON.stringify(result);
        }

        textarea.value = result;
      });
    }

    config.action.apply(null, args);
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
    add_page_header(`Currently running outside of Microsoft Teams.`);
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

  add_page_header(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`)  

  function isInConfig() {
    return context.frameContext === FrameContexts.settings
  }

  function isInSidePanel() {
    return context.frameContext === FrameContexts.sidePanel
  }
};


function add_page_header(content: string){
  var h2 = document.createElement("h2");
  h2.textContent = content;
  container.prepend(h2);
}
