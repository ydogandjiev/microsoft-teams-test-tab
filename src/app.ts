import {
  addModule,
  initializeDownloadLinks,
  outputTabRenderedLocation,
} from "./utils";
import * as microsoftTeams from "@microsoft/teams-js";

const beforeUnloadHandler = (
  readyToUnload: () => void
) => {
  setTimeout(() => {  
    readyToUnload();
  }, 2000);
  return true;
};

const loadHandler = (
  data: microsoftTeams.LoadContext
) => {
  const timeout = 1000;
  setTimeout(() => {
    microsoftTeams.appInitialization.notifySuccess();
  }, timeout);
};

export const initializeAppModules = () => {
  try {
    var childWindow;
    let totalStates = 0;
    let attachmentArray;
    microsoftTeams.initialize(undefined, ["https://teams.microsoftonline.cn"]);
    microsoftTeams.appInitialization.notifyAppLoaded();

    initializeDownloadLinks();
    outputTabRenderedLocation(microsoftTeams.getContext);

    addModule({
      name: "hasStorageAccess",
      initializedRequired: true,
      hasOutput: true,
      onClick:  async () => {
        const perm = await document.hasStorageAccess();
        console.log(perm);
        return perm;
      },
    });

    addModule({
      name: "popOut",
      initializedRequired: true,
      hasOutput: true,
      onClick:   () => {
        window.open(window.location.href);
      },
    });
    
    addModule({
      name: "setUnpartitionedCookie",
      initializedRequired: true,
      hasOutput: true,
      onClick:  async () => {
        document.cookie = document.cookie + `myCookie${Math.random()%100}=helloworld`;
        return document.cookie;
      },
    });

    addModule({
      name: "readUnpartitionedCookie",
      initializedRequired: true,
      hasOutput: true,
      onClick:  async () => {
        console.log(document.cookie);
        return document.cookie;
      },
    });
    

    addModule({
      name: "requestStorageAccess",
      initializedRequired: true,
      hasOutput: true,
      onClick:  async () => {
        const perm = await document.requestStorageAccess();
        console.log(perm);
        return perm;
      },
    });

    addModule({
      name: "enablePrintCapability",
      initializedRequired: true,
      hasOutput: false,
      action: function () {
        microsoftTeams.enablePrintCapability();
      },
    });

    addModule({
      name: "print",
      initializedRequired: true,
      hasOutput: false,
      action: function () {
        microsoftTeams.print();
      },
    });

    addModule({
      name: "app.getContext",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.app.getContext().then(output);
      },
    })

    addModule({
      name: "getContext",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.getContext(output);
      },
    });

    addModule({
      name: "getTabInstances",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.getTabInstances(output);
      },
    });

    addModule({
      name: "getMRUTabInstances",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.getMruTabInstances(output);
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
        microsoftTeams.navigateCrossDomain(url);
      },
    });

    addModule({
      name: "pages.registerFocusEnterHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.pages.registerFocusEnterHandler((navigateForward) => {
          if (navigateForward) {
            output("Focus entered forward");
          } else {
            output("Focus entered backward");
          }

          var searchInput = document.getElementById("searchInput") as HTMLInputElement;
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
        microsoftTeams.pages.returnFocus(navigateForward);
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
        microsoftTeams.navigateCrossDomain(url);
      },
    });

    addModule({
      name: "registerOnThemeChangeHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerOnThemeChangeHandler(output);
      },
    });

    addModule({
      name: "registerChangeSettingsHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerChangeSettingsHandler(function () {
          output("Change Settings Event recieved");
        });
      },
    });

    addModule({
      name: "registerAppButtonClickHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerAppButtonClickHandler(function () {
          output("Click event received");
        });
      },
    });

    addModule({
      name: "registerAppButtonHoverEnterHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerAppButtonHoverEnterHandler(function () {
          output(`Hover enter event received`);
        });
      },
    });

    addModule({
      name: "registerAppButtonHoverLeaveHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerAppButtonHoverLeaveHandler(function () {
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
        microsoftTeams.shareDeepLink(deepLinkParameters);
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
        microsoftTeams.executeDeepLink(deepLink);
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
        microsoftTeams.pages.navigateToApp(navigateToAppParameters);
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
        microsoftTeams.authentication.authenticate({
          url: url,
          successCallback: function (result) {
            output("Success:" + result);
          },
          failureCallback: function (reason) {
            output("Failure:" + reason);
            MessageEvent;
          },
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
        microsoftTeams.authentication.authenticate({
          url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${
            mockOAuth ? "1" : "{authId}"
          }&mockOAuth=${mockOAuth}&hostRedirectUrl={hostRedirectUrl}`,
          isExternal: true,
          successCallback: function (result) {
            output("Success:" + result);
          },
          failureCallback: function (reason) {
            output("Failure:" + reason);
          },
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
          defaultValue:
            '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
        },
      ],
      action: function (taskInfo, output) {
        childWindow = microsoftTeams.tasks.startTask(taskInfo);
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
        } else {
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
        var parentWindow = microsoftTeams.ParentAppWindow.Instance;
        if (parentWindow) {
          parentWindow.postMessage(message);
          output("message sent to parent(tab)");
        } else {
          output("parent window not available");
        }
      },
    });

    addModule({
      name: "register listener for parent message(tab to task module)",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        var parentWindow = microsoftTeams.ParentAppWindow.Instance;
        if (parentWindow) {
          parentWindow.addEventListener("message", function (message) {
            output("message from tab: " + message);
          });
        } else {
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
        microsoftTeams.notifications.showNotification(
          showNotificationParameters
        );
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
        getAuthTokenParameters.successCallback = (token: string) => {
          output("Success: " + token);
        };

        getAuthTokenParameters.failureCallback = (reason: string) => {
          output("Failure: " + reason);
        };

        microsoftTeams.authentication.getAuthToken(getAuthTokenParameters);
      },
    });

    addModule({
      name: "authentication.getUser",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.authentication.getUser({
          successCallback: output,
          failureCallback: output,
        });
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
        microsoftTeams.authentication.notifyFailure(reason);
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
        microsoftTeams.authentication.notifySuccess(result);
      },
    });

    addModule({
      name: "settings.getSettings",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.settings.getSettings(output);
      },
    });

    addModule({
      name: "settings.registerOnSaveHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
          (window as any).saveEvent = saveEvent;
          const configUrl = window.location.href;
          microsoftTeams.settings.setSettings({
            websiteUrl: configUrl,
            contentUrl: configUrl,
            entityId: "tabconfig",
            suggestedDisplayName: "Test Tab RegisterOnSave",
          });
          output("SaveEvent recieved");
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
        (window as any).saveEvent &&
          (window as any).saveEvent.notifyFailure(reason);
      },
    });

    addModule({
      name: "settings.registerOnSaveHandler.notifySuccess",
      initializedRequired: true,
      action: function () {
        (window as any).saveEvent && (window as any).saveEvent.notifySuccess();
      },
    });

    addModule({
      name: "settings.setSettings",
      initializedRequired: true,
      inputs: [
        {
          type: "object",
          name: "settings",
          defaultValue:
            '{"contentUrl": "https://teams-test-tab.azurewebsites.net/", "entityId": "someEntity", "websiteUrl": "https://teams-test-tab.azurewebsites.net/"}',
        },
      ],
      hasOutput: true,
      action: function (settings, output) {
        microsoftTeams.settings.setSettings(settings);
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
        microsoftTeams.settings.setValidityState(validityState);
      },
    });

    addModule({
      name: "settings.registerOnRemoveHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.settings.registerOnRemoveHandler(function (removeEvent) {
          (window as any).removeEvent = removeEvent;
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
        (window as any).removeEvent &&
          (window as any).removeEvent.notifyFailure(reason);
      },
    });

    addModule({
      name: "settings.registerOnRemoveHandler.notifySuccess",
      initializedRequired: true,
      action: function () {
        (window as any).removeEvent &&
          (window as any).removeEvent.notifySuccess();
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
        microsoftTeams.openFilePreview(filePreviewParameters);
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
        microsoftTeams.tasks.submitTask(result, appId);
      },
    });

    addModule({
      name: "tasks.startTask",
      initializedRequired: true,
      inputs: [
        {
          type: "object",
          name: "taskInfo",
          defaultValue:
            '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
        },
      ],
      hasOutput: true,
      action: function (taskInfo, output) {
        microsoftTeams.tasks.startTask(taskInfo, (error, result) => {
          if (error) {
            output("Error: " + error);
          } else {
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
        },
      ],
      action: function (taskInfo) {
        microsoftTeams.tasks.updateTask(taskInfo);
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
        microsoftTeams.notifications.showNotification(
          showNotificationParameters
        );
      },
    });

    addModule({
      name: "getChatMembers",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.conversations.getChatMembers().then(output);
      },
    });

    addModule({
      name: "getUserJoinedTeams",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.teams.fullTrust.joinedTeams
          .getUserJoinedTeams()
          .then(output);
      },
    });

    addModule({
      name: "readyToUnload",
      initializedRequired: true,
      action: function () {
        (window as any).readyToUnload && (window as any).readyToUnload();
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
          window.history.pushState(
            { some: "state", id: totalStates },
            "tab state" + totalStates,
            "/testTab"
          );
        }
        output("total States: " + totalStates);

        let historyStates = totalStates;
        window.addEventListener(
          "popstate",
          function (event) {
            historyStates--;
            output(
              "onpopstate: back button clicked. total remaining state: " +
                historyStates
            );
          },
          false
        );
      },
    });

    addModule({
      name: "registerBackButtonHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        output("total States: " + totalStates);
        microsoftTeams.registerBackButtonHandler(function () {
          if (totalStates > 0) {
            totalStates--;
            output(
              "back button clicked. total remaining state: " + totalStates
            );
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
        microsoftTeams.pages.backStack.navigateBack();
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
        microsoftTeams.returnFocus(navigateForward);
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
        openConversationRequest.onStartConversation = (
          conversationResponse
        ) => {
          output(
            "Start Conversation Subentity Id " +
              conversationResponse.subEntityId +
              " Conversation Id: " +
              conversationResponse.conversationId +
              " Entity Id: " +
              conversationResponse.entityId +
              " Channel Id: " +
              conversationResponse.channelId
          );
        };
        openConversationRequest.onCloseConversation = (
          conversationResponse
        ) => {
          output(
            "Start Conversation Subentity Id " +
              conversationResponse.subEntityId +
              " Conversation Id: " +
              conversationResponse.conversationId +
              " Entity Id: " +
              conversationResponse.entityId +
              " Channel Id: " +
              conversationResponse.channelId
          );
        };
        try {
          microsoftTeams.conversations.openConversation(
            openConversationRequest
          );
        } catch (e) {
          output("Error" + e);
        }
      },
    });

    addModule({
      name: "conversations.closeConversation",
      initializedRequired: true,
      action: function () {
        microsoftTeams.conversations.closeConversation();
      },
    });

    addModule({
      name: "captureImage",
      initializedRequired: true,
      hasOutput: true,
      action: (output) => {
        microsoftTeams.media.captureImage(
          (
            err: microsoftTeams.SdkError,
            files: microsoftTeams.media.File[]
          ) => {
            if (err) {
              output(err);
              return;
            }

            const file: microsoftTeams.media.File = files[0];
            let content: string = "";
            let len = 20;
            if (file.content) {
              len = Math.min(len, file.content.length);
              content = file.content.substr(0, len);
            }
            output(
              "format: " +
                file.format +
                ", size: " +
                file.size +
                ", mimeType: " +
                file.mimeType +
                ", content: " +
                content
            );
          }
        );
      },
    });

    addModule({
      name: "selectMedia",
      initializedRequired: true,
      hasSelectMedia: true,
      inputs: [{
              type: "object",
              name: "mediaInputs",
              defaultValue:
              '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
          }],
      action: (mediaInputs, output) => {
          microsoftTeams.media.selectMedia(mediaInputs, (error, attachments) => {
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
    action:  (output) => {
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
          defaultValue:
            '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
        },
      ],
      action: (selectMediaInputs, output) => {
        microsoftTeams.media.selectMedia(
          selectMediaInputs,
          (
            err: microsoftTeams.SdkError,
            medias: microsoftTeams.media.Media[]
          ) => {
            if (err) {
              output(err);
              return;
            }
            const urlList: microsoftTeams.media.ImageUri[] = [];
            for (let i = 0; i < medias.length; i++) {
              const media = medias[i];
              urlList.push({
                value: media.content,
                type: 1, //microsoftTeams.ImageUriType.ID
              } as microsoftTeams.media.ImageUri);
            }

            microsoftTeams.media.viewImages(
              urlList,
              (gmErr: microsoftTeams.SdkError) => {
                if (gmErr) {
                  output(gmErr);
                  return;
                }
                output("Success");
              }
            );
          }
        );
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
          defaultValue:
            '["https://www.w3schools.com/images/picture.jpg","https://www.w3schools.com/images/picture.jpg"]',
        },
      ],
      action: (imageUrls, output) => {
        const urlList = [];
        for (let i = 0; i < imageUrls.length; i++) {
          const imageUrl = imageUrls[i];
          urlList.push({
            value: imageUrl,
            type: 2, //microsoftTeams.ImageUriType.URL
          } as microsoftTeams.media.ImageUri);
        }
        microsoftTeams.media.viewImages(
          urlList,
          (err: microsoftTeams.SdkError) => {
            if (err) {
              output(err);
              return;
            }
            output("Success");
          }
        );
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
      action: (
        locationProps: microsoftTeams.location.LocationProps,
        output
      ) => {
        microsoftTeams.location.getLocation(
          locationProps,
          (
            err: microsoftTeams.SdkError,
            location: microsoftTeams.location.Location
          ) => {
            if (err) {
              output(err);
              return;
            }

            output(JSON.stringify(location));
          }
        );
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
      action: (location: microsoftTeams.location.Location, output) => {
        microsoftTeams.location.showLocation(
          location,
          (err: microsoftTeams.SdkError, result: boolean) => {
            if (err) {
              output(err);
              return;
            }

            output(result);
          }
        );
      },
    });

    addModule({
      name: "geoLocation.requestPermission",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        output(""); // Clear output
        microsoftTeams.geoLocation
          .requestPermission()
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
        microsoftTeams.media
          .requestPermission()
          .then((value) => output(`Consented: ${value}`))
          .catch((err) => output(err));
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
      action: (
        scanBarCodeConfig: microsoftTeams.media.BarCodeConfig,
        output
      ) => {
        microsoftTeams.media.scanBarCode(
          (err: microsoftTeams.SdkError, result: string) => {
            if (err) {
              output(err);
              return;
            }

            output(result);
          },
          scanBarCodeConfig
        );
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
          defaultValue:
            '{"requestedModalities":["audio"],"targets":["yudogan@microsoft.com"]}',
        },
      ],
      action: function (
        startCallParams: microsoftTeams.call.StartCallParams,
        output
      ) {
        microsoftTeams.call
          .startCall(startCallParams)
          .then(() => output("Success"))
          .catch((err) => output(`Error: ${err}`));
      },
    });

    addModule({
      name: "meeting.getMeetingDetails",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.getMeetingDetails(
          (
            err: microsoftTeams.SdkError,
            meetingDetailsResponse: microsoftTeams.meeting.IMeetingDetailsResponse
          ) => {
            if (err) {
              output(err);
              return;
            }
            output(meetingDetailsResponse);
          }
        );
      },
    });

    addModule({
      name: "meeting.shareAppContentToStage",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.shareAppContentToStage(
          (err: microsoftTeams.SdkError, result: boolean) => {
            if (err) {
              output(err);
              return;
            }
            output(result);
          },
          window.location.href
        );
      },
    });

    addModule({
      name: "meeting.getAppContentStageSharingState",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.getAppContentStageSharingState(
          (
            err: microsoftTeams.SdkError,
            appContentStageSharingState: microsoftTeams.meeting.IAppContentStageSharingState
          ) => {
            if (err) {
              output(err);
              return;
            }
            output(appContentStageSharingState);
          }
        );
      },
    });

    addModule({
      name: "meeting.getAppContentStageSharingCapabilities",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.getAppContentStageSharingCapabilities(
          (
            err: microsoftTeams.SdkError,
            appContentStageSharingCapabilities: microsoftTeams.meeting.IAppContentStageSharingCapabilities
          ) => {
            if (err) {
              output(err);
              return;
            }
            output(appContentStageSharingCapabilities);
          }
        );
      },
    });

    addModule({
      name: "monetization.openPurchaseExperience",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.monetization.openPurchaseExperience(
          (err: microsoftTeams.SdkError) => {
            if (err) {
              output(err);
              return;
            }
            output(null);
          }
        );
      },
    });

    addModule({
      name: "getIncomingClientAudioState",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.getIncomingClientAudioState(
          (err: microsoftTeams.SdkError, result: boolean) => {
            if (err) {
              output(err);
              return;
            }
            output(result);
          }
        );
      },
    });

    addModule({
      name: "toggleIncomingClientAudio",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.toggleIncomingClientAudio(
          (err: microsoftTeams.SdkError, result: boolean) => {
            if (err) {
              output(err);
              return;
            }
            output(result);
          }
        );
      },
    });

    addModule({
      name: "meeting.getAuthenticationTokenForAnonymousUser",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.meeting.getAuthenticationTokenForAnonymousUser(
          (
            err: microsoftTeams.SdkError,
            authenticationTokenOfAnonymousUser: string
          ) => {
            if (err) {
              output(err);
              return;
            }
            output(authenticationTokenOfAnonymousUser);
          }
        );
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
          defaultValue:
            '{"title":"", "setSelected":[], "openOrgWideSearchInChatOrChannel":false, "singleSelect":false}',
        },
      ],
      action: (
        peoplePickerInputs: microsoftTeams.people.PeoplePickerInputs,
        output
      ) => {
        microsoftTeams.people.selectPeople(
          (
            err: microsoftTeams.SdkError,
            people: microsoftTeams.people.PeoplePickerResult[]
          ) => {
            if (err) {
              output(err);
              return;
            }

            output(
              "People length: " + people.length + " " + JSON.stringify(people)
            );
          },
          peoplePickerInputs
        );
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
      action: (frameContext: microsoftTeams.FrameContext) => {
        microsoftTeams.setFrameContext(frameContext);
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
      action: (tabInstance: microsoftTeams.TabInstance, output) => {
        microsoftTeams.navigateToTab(
          tabInstance,
          (status: boolean, reason?: string) => {
            if (reason) {
              output(reason);
              return;
            }
            output(status);
          }
        );
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
          defaultValue:
            '{"content":[{"type":"URL","url":"https://teams-test-tab.azurewebsites.net/"}]}',
        },
      ],
      action: (
        shareWebContentRequest: microsoftTeams.sharing.IShareRequest<microsoftTeams.sharing.IURLContent>,
        output
      ) => {
        // Clear the output box prior to action
        output("");
        microsoftTeams.sharing.shareWebContent(
          shareWebContentRequest,
          (err) => {
            if (err) {
              output(err.message);
              return;
            }
            output("Sharing was successful.");
          }
        );
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
        microsoftTeams.stageView.open(stageViewParams);
      },
    });

    addModule({
      name: "closeStageView",
      initializedRequired: true,
      action: function () {
        microsoftTeams.stageView.self.close();
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
          defaultValue:
            '[{"id":"submenu1","title":"SubMenu1","displayMode":1,"icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptMi4zMTItNC44OTdjMCAyLjIwNiAxLjc5NCA0IDQgNHM0LTEuNzk0IDQtNC0xLjc5NC00LTQtNC00IDEuNzk0LTQgNHptMTAgMGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiLz48L3N2Zz4=","contentDescription":"SubMenu1","enabled":"true"},{"id":"submenu2","title":"SubMenu2","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEgMTFoLTExdi0yaDExYy41NTIgMCAxLS40NDggMS0xcy0uNDQ4LTEtMS0xYy0uNDAzIDAtLjc0Ny4yNDItLjkwNS41ODdsLTEuNzQ5LS45NTZjLjQ5OS0uOTY1IDEuNDk0LTEuNjMxIDIuNjU0LTEuNjMxIDMuOTcxIDAgMy45NjkgNiAwIDZ6bTcgN2MwLTEuNjU2LTEuMzQ0LTMtMy0zaC0xNXYyaDE1Yy41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxYy0uNDAzIDAtLjc0Ny0uMjQyLS45MDUtLjU4N2wtMS43NDkuOTU2Yy40OTkuOTY1IDEuNDk0IDEuNjMxIDIuNjU0IDEuNjMxIDEuNjU2IDAgMy0xLjM0NCAzLTN6bTEuMDE0LTcuNjU1Yy4wODItLjc1My43MTItMS4zNDUgMS40ODYtMS4zNDUuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0yMC41djJoMjAuNWMxLjkzMiAwIDMuNS0xLjU2OCAzLjUtMy41cy0xLjU2OC0zLjUtMy41LTMuNWMtMS42MjQgMC0yLjk3NyAxLjExNi0zLjM3MiAyLjYxN2wxLjg4Ni43Mjh6bS0xMy43NjQtNy44NDVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLjUtMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0uNSAxOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMC41IDJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLTNjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTExIC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tLjUtNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEuNSA2LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xMy0zYy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xNy41LTJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xNy0xMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTQgMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptNi00LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTMgMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMiAuOTY5Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM3Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tMyAxLjAzMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMC0zLjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS00LjUgOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xLjUtN2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEgM2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTItNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTkuNSAyMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMy41IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTE1IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6Ii8+PC9zdmc+","contentDescription":"SubMenu2","enabled":"true"},{"id":"submenu3","title":"SubMenu3","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTkyIDQuMjIxbC0yLjg4MSAyLjg4MWMtLjQxMS0uNTI4LS44ODYtMS4wMDMtMS40MTQtMS40MTRsMi44ODEtMi44ODEgMS40MTQgMS40MTR6bS04LjE5Mi0uMTUydi00LjA2OWgtMnY0LjA2OWMuMzI4LS4wNDEuNjYxLS4wNjkgMS0uMDY5cy42NzIuMDI4IDEgLjA2OXptNi45MzEgNi45MzFjLjA0MS4zMjguMDY5LjY2MS4wNjkgMXMtLjAyOC42NzItLjA2OSAxaDQuMDY5di0yaC00LjA2OXptLTEuOTMxIDFjMCAuMzQxLS4wMzUuNjc0LS4wOSAxaC0xMS44MmMtLjA1NS0uMzI2LS4wOS0uNjU5LS4wOS0xIDAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDZ6bS0xMC44OTctNi4zMTJsLTIuODgxLTIuODgxLTEuNDE0IDEuNDE0IDIuODgxIDIuODgxYy40MTEtLjUyOS44ODUtMS4wMDMgMS40MTQtMS40MTR6bS03LjEwMyA1LjMxMnYyaDQuMDY5Yy0uMDQxLS4zMjgtLjA2OS0uNjYxLS4wNjktMXMuMDI4LS42NzIuMDY5LTFoLTQuMDY5em05LjA2MiAxMS42NjdjLTEuMjA1LTEuMTk1LTEuMzY0LTEuODkzLS4zMTItMy4yNi4zNy0uNDgxLjUzLS45NDIuNTMtMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIzLTMuMDA2bC0xLjQ0OSAxLjM3OWMxLjM3NSAxLjYgMS4yNDcgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NS0xLjMzNHptOC42ODggMGMtMS4yMDUtMS4xOTUtMS4zNjQtMS44OTMtLjMxMi0zLjI2LjM3LS40ODEuNTI5LS45NDIuNTI5LTEuNCAwLS45NTktLjY5OS0xLjkwNi0xLjYyMi0zLjAwNmwtMS40NDggMS4zNzljMS4zNzUgMS42IDEuMjQ2IDEuNzcyLjI2IDMuMTg0LS4zMTYuNDUzLS40NDYuOTA4LS40NDYgMS4zNTUgMCAxLjE1OS44NzYgMi4yNTkgMS42NjUgMy4wODJsMS4zNzQtMS4zMzR6bS00LjM5NiAwYy0xLjIwNS0xLjE5NS0xLjM2NC0xLjg5My0uMzEyLTMuMjYuMzctLjQ4MS41MjktLjk0Mi41MjktMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIyLTMuMDA2bC0xLjQ0OCAxLjM3OWMxLjM3NSAxLjYgMS4yNDYgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NC0xLjMzNHoiLz48L3N2Zz4","contentDescription":"SubMenu3","enabled":"true"},{"id":"submenu4","title":"SubMenu4","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuNSAyYy44MjcgMCAxLjUuNjczIDEuNSAxLjV2Ny41MjVjMCAxLjU2OS41MTQgMi4yODcgMS40MTEgMy4wNSAxLjAxLjg1OCAxLjU4OSAyLjEwNiAxLjU4OSAzLjQyNSAwIDIuNDgxLTIuMDE5IDQuNS00LjUgNC41cy00LjUtMi4wMTktNC41LTQuNWMwLTEuMzE5LjU3OS0yLjU2NyAxLjU5LTMuNDI1Ljg5Ni0uNzYxIDEuNDEtMS40NzkgMS40MS0zLjA1di03LjUyNWMwLS44MjcuNjczLTEuNSAxLjUtMS41em0wLTJjLTEuOTMzIDAtMy41IDEuNTY3LTMuNSAzLjV2Ny41MjVjMCAuNTg3LS4yNTggMS4xNDYtLjcwNSAxLjUyNS0xLjQwMyAxLjE5Mi0yLjI5NSAyLjk2NS0yLjI5NSA0Ljk1IDAgMy41OSAyLjkwOSA2LjUgNi41IDYuNXM2LjUtMi45MSA2LjUtNi41YzAtMS45ODUtLjg5Mi0zLjc1OC0yLjI5NS00Ljk1LS40NDctLjM4LS43MDUtLjkzOC0uNzA1LTEuNTI1di03LjUyNWMwLTEuOTMzLTEuNTY3LTMuNS0zLjUtMy41em0yLjEwNyAxNC43MThjLTEuMDEyLS44OS0xLjYwNy0xLjczNC0xLjYwNy0zLjIydi02LjQ5OGgtMXY2LjQ5OGMwIDEuNDg0LS41OTcgMi4zMzItMS42MDcgMy4yMi0uNzk0LjY5OC0xLjM5MyAxLjY0Mi0xLjM5MyAyLjc4MiAwIDEuOTMzIDEuNTY3IDMuNSAzLjUgMy41czMuNS0xLjU2NyAzLjUtMy41YzAtMS4xNC0uNTk5LTIuMDgzLTEuMzkzLTIuNzgyem0tOS42MDctNi4yMThjMCAxLjkzMy0xLjU2NyAzLjUtMy41IDMuNXMtMy41LTEuNTY3LTMuNS0zLjUgMS41NjctMy41IDMuNS0zLjUgMy41IDEuNTY3IDMuNSAzLjV6bS04IDBjMC0uMTcxLjAzMi0uMzMzLjA1MS0uNWgtMi4wNTF2MWgyLjA1MWMtLjAxOS0uMTY3LS4wNTEtLjMyOS0uMDUxLS41em0xLjcwNS0zLjUwMWwtMS40NDgtMS40NDktLjcwNy43MDcgMS40NDggMS40NDhjLjIxLS4yNjEuNDQ1LS40OTcuNzA3LS43MDZ6bTYuMjk3LjcwNmwxLjQ0Ny0xLjQ0OC0uNzA3LS43MDctMS40NDggMS40NDhjLjI2My4yMS40OTguNDQ1LjcwOC43MDd6bS0zLjUwMi0xLjcwNWMuMTcxIDAgLjMzNC4wMzIuNS4wNXYtMi4wNWgtMXYyLjA1Yy4xNjYtLjAxOC4zMjktLjA1LjUtLjA1em0wIDljLS4xNzEgMC0uMzM0LS4wMzItLjUtLjA1djIuMDVoMXYtMi4wNWMtLjE2Ni4wMTgtLjMyOS4wNS0uNS4wNXptNC40NDktNWMuMDE5LjE2Ny4wNTEuMzI5LjA1MS41bC0uMDUxLjVoMi4wNTF2LTFoLTIuMDUxem0tNy45NTEgMy4yOTRsLTEuNDQ4IDEuNDQ5LjcwNy43MDcgMS40NDgtMS40NDhjLS4yNjItLjIxLS40OTctLjQ0Ni0uNzA3LS43MDh6bTYuMjk2LjcwOGwxLjQ0OCAxLjQ0OC43MDctLjcwNy0xLjQ0Ny0xLjQ0OGMtLjIxLjI2Mi0uNDQ1LjQ5Ny0uNzA4LjcwN3oiLz48L3N2Zz4=","contentDescription":"SubMenu4","enabled":"true"},{"id":"submenu5","title":"SubMenu5","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4zOTYgOWgtMi4zOTZ2LTJoMi4zOTZ2MnptNy42MDQtNi40NTh2LTIuNTQyaC0ydjIuNTQyaDJ6bS00Ljc5My44NzZsLTEuODU5LTEuODU5LTEuNDE0IDEuNDE0IDEuODU5IDEuODU5IDEuNDE0LTEuNDE0em05LjIyMi0yLjE1NmwtMS44NzUgMS44NzUgMS40MTQgMS40MTQgMS44NzUtMS44NzUtMS40MTQtMS40MTR6bS0xMS40NiAxMC42NjdsLTIuMDUzIDEuNzczIDEuMzAzIDEuNTE3IDIuMDUzLTEuNzczLTEuMzAzLTEuNTE3em0yMS4wMzEgMi43OTNjMCAyLjM2Mi0xLjk0OSA0LjI3OC00LjM1NCA0LjI3OGgtMTAuMjkyYy0yLjQwNSAwLTQuMzU0LTEuOTE2LTQuMzU0LTQuMjc4IDAtLjc3LjIxMS0xLjQ5LjU3NC0yLjExMy0uOTY1LS45MDctMS41NzQtMi4xOC0xLjU3NC0zLjYwOSAwLTIuNzYyIDIuMjM4LTUgNS01IDEuMzI4IDAgMi41MjMuNTI4IDMuNDE0IDEuMzc2LjY0OC0uMjQgMS4zNS0uMzc2IDIuMDg2LS4zNzYgMy4xNzIgMCA1Ljc1MyAyLjQ0MyA1LjkyMiA1LjUxNiAyLjAzMy4zNTkgMy41NzggMi4xMDUgMy41NzggNC4yMDZ6bS0xOC01LjcyMmMwIC44Ni4zNyAxLjYyOC45NTUgMi4xNzIuNDg0LS4zMTYgMS4wMjktLjU1MSAxLjYyMy0uNjU2LjA4OS0xLjYxLjg0NC0zLjA0MiAxLjk5NC00LjA0Ni0uNDU5LS4yODgtLjk5LS40Ny0xLjU3Mi0uNDctMS42NTQgMC0zIDEuMzQ2LTMgM3ptMTYgNS43MjJjMC0yLjA3Ni0xLjk3OS0yLjYxOC0zLjQ4OC0yLjUxMi4yMTctMS40MzktLjI0MS01LjIxLTQuMDEyLTUuMjEtMy44NzUgMC00LjA2MiAzLjg1NC00LjAxMiA1LjIwOS0xLjM4NC0uMDg0LTMuNDg4LjM5NS0zLjQ4OCAyLjUxMyAwIDEuMjU2IDEuMDU3IDIuMjc4IDIuMzU0IDIuMjc4aDEwLjI5MWMxLjI5OCAwIDIuMzU1LTEuMDIyIDIuMzU1LTIuMjc4em0tMTUuNTggOS4yNzhsLTEuNDEtMS40MSAyLjU5LTIuNTkgMS40MSAxLjQxLTIuNTkgMi41OXptNy41NDMtMi41OWwtMS40MS0xLjQxLTIuNTkgMi41OSAxLjQxIDEuNDEgMi41OS0yLjU5em00Ljg3NSAwbC0xLjQxLTEuNDEtMi41OSAyLjU5IDEuNDEgMS40MSAyLjU5LTIuNTl6Ii8+PC9zdmc+","contentDescription":"SubMenu5","enabled":"true"}]',
        },
      ],
      action: function (navBarMenuItems, output) {
        microsoftTeams.menus.setNavBarMenu(navBarMenuItems, (id) => {
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
        microsoftTeams.appEntity.selectAppEntity(
          selectAppEntityParams.threadId,
          selectAppEntityParams.categories,
          selectAppEntityParams.subEntityId,
          (
            sdkError?: microsoftTeams.SdkError,
            appEntity?: microsoftTeams.appEntity.AppEntity
          ) => {
            output(sdkError || appEntity);
          }
        );
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
          defaultValue:
            '{"message":"Test Group Chat Message","topic":"Test Group Chat","users":["a@contoso.com","b@contoso.com"]}',
        },
      ],
      action: function (openChatRequest, output) {
        microsoftTeams.chat
          .openGroupChat(openChatRequest)
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
          defaultValue: JSON.stringify({ url: new URL("https://www.bing.com")}),
        },
        {
          type: "object",
          name: "originalRequestInfo",
          defaultValue:
            JSON.stringify({
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
        microsoftTeams.externalAppAuthentication
          .authenticateAndResendRequest(appId, authenticateParameters, originalRequestInfo)          
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
          defaultValue:
            '{}',
        }        
      ],
      action: function (appId, authTokenRequest, output) {
        microsoftTeams.externalAppAuthentication
          .authenticateWithSSO(appId, authTokenRequest)          
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
          defaultValue:
            '{}',
        },
        {
          type: "object",
          name: "originalRequestInfo",
          defaultValue:
            JSON.stringify({
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
        microsoftTeams.externalAppAuthentication
          .authenticateWithSSOAndResendRequest(appId, authTokenRequest, originalRequestInfo)          
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
        microsoftTeams.externalAppCardActions
          .processActionSubmit(appId, actionSubmitPayload)          
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
        microsoftTeams.externalAppCardActions
          .processActionOpenUrl(appId, new URL(url))          
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
    var span = document.getElementsByClassName("close")[0] as HTMLElement;

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
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.keyCode === 117) {
        event.cancelBubble = true;
        event.preventDefault();
        event.stopImmediatePropagation();

        const navigateForward = !(event.ctrlKey || event.metaKey);
        microsoftTeams.pages.returnFocus(navigateForward);
      }
    });

    microsoftTeams.appInitialization.notifySuccess();
  } catch (err) {
    microsoftTeams.appInitialization.notifyFailure({
      reason: microsoftTeams.appInitialization.FailedReason.Other,
      message: err.message,
    });
  }
};


export const registerAppCachingHandlers = () => {
  microsoftTeams.getContext((context: microsoftTeams.Context) => {

      microsoftTeams.registerBeforeUnloadHandler((readyToUnload) => {
        const result = beforeUnloadHandler( readyToUnload);
        return result;
      });

      microsoftTeams.registerOnLoadHandler((data) => {
        loadHandler(data);
      });
});
};