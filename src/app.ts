import { addModule, initializeDownloadLinks, outputTabRenderedLocation } from "./utils";
import * as microsoftTeams from '@microsoft/teams-js';

export const initializeAppModules = () => {
  try {
    var childWindow;
    let totalStates = 0;
    microsoftTeams.initialize();
    microsoftTeams.appInitialization.notifyAppLoaded();

    initializeDownloadLinks();
    outputTabRenderedLocation(microsoftTeams.getContext);

    addModule({
      name: "getContext",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.getContext(output);
      }
    });

    addModule({
      name: "getTabInstances",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.getTabInstances(output);
      }
    });

    addModule({
      name: "getMRUTabInstances",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.getMruTabInstances(output);
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
        microsoftTeams.navigateCrossDomain(url);
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
        microsoftTeams.returnFocus(navigateForward);
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
        microsoftTeams.navigateCrossDomain(url);
      }
    });

    addModule({
      name: "registerOnThemeChangeHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerOnThemeChangeHandler(output);
      }
    });


    addModule({
      name: "registerChangeSettingsHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerChangeSettingsHandler(function () {
          output("Change Settings Event recieved");
        });
      }
    });

    addModule({
      name: "registerAppButtonClickHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerAppButtonClickHandler(function () {
          output("Click event received");
        });
      }
    });

    addModule({
      name: "registerAppButtonHoverEnterHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerAppButtonHoverEnterHandler(function () {
          output(`Hover enter event received`);
        });
      }
    });

    addModule({
      name: "registerAppButtonHoverLeaveHandler",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.registerAppButtonHoverLeaveHandler(function () {
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
        microsoftTeams.shareDeepLink(deepLinkParameters);
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
        microsoftTeams.executeDeepLink(deepLink);
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
        microsoftTeams.authentication.authenticate({
          url: url,
          successCallback: function (result) {
            output("Success:" + result);
          },
          failureCallback: function (reason) {
            output("Failure:" + reason);
            MessageEvent
          }
        });
      }
    });

    addModule({
      name: "authentication_externalBrowser",
      initializedRequired: true,
      inputs: [{
        type: "boolean",
        name: "mockOAuth" // do not go to the actual oauth provider, for scenario testing purpose
      },
      {
        type: "string",
        name: "hubAuthCallbackUrl"
      }],
      hasOutput: true,
      action: function (mockOAuth, output, hubAuthCallbackUrl) {
        localStorage.setItem("hubAuthCallbackUrl", encodeURIComponent(hubAuthCallbackUrl))
        microsoftTeams.authentication.authenticate({
          url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}`,
          isExternal: true,
          successCallback: function (result) {
            output("Success:" + result);
          },
          failureCallback: function (reason) {
            output("Failure:" + reason);
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
        name: "taskInfo",
        defaultValue: "{\"title\": \"Test Task Module\", \"height\": \"medium\", \"width\": \"medium\", \"url\": \"https://teams-test-tab.azurewebsites.net\"}"
      }],
      action: function (taskInfo, output) {
        childWindow = microsoftTeams.tasks.startTask(taskInfo);
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
        var parentWindow = microsoftTeams.ParentAppWindow.Instance;
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
        var parentWindow = microsoftTeams.ParentAppWindow.Instance;
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
        microsoftTeams.notifications.showNotification(showNotificationParameters);
      }
    });

    addModule({
      name: "authentication.getAuthToken",
      initializedRequired: true,
      hasOutput: true,
      inputs: [{
        type: "object",
        name: "getAuthTokenParameters"
      }],
      action: function (getAuthTokenParameters, output) {
        getAuthTokenParameters.successCallback = (token: string) => {
          output("Success: " + token);
        }

        getAuthTokenParameters.failureCallback = (reason: string) => {
          output("Failure: " + reason);
        }

        microsoftTeams.authentication.getAuthToken(getAuthTokenParameters);
      }
    });

    addModule({
      name: "authentication.getUser",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.authentication.getUser(output);
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
        microsoftTeams.authentication.notifyFailure(reason);
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
        microsoftTeams.authentication.notifySuccess(result);
      }
    });

    addModule({
      name: "settings.getSettings",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.settings.getSettings(output);
      }
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
        (window as any).saveEvent && (window as any).saveEvent.notifyFailure(reason);
      }
    });

    addModule({
      name: "settings.registerOnSaveHandler.notifySuccess",
      initializedRequired: true,
      action: function () {
        (window as any).saveEvent && (window as any).saveEvent.notifySuccess();
      }
    });

    addModule({
      name: "settings.setSettings",
      initializedRequired: true,
      inputs: [{
        type: "object",
        name: "settings",
        defaultValue: "{\"contentUrl\": \"https://teams-test-tab.azurewebsites.net/\", \"entityId\": \"someEntity\", \"websiteUrl\": \"https://teams-test-tab.azurewebsites.net/\"}"
      }],
      hasOutput: true,
      action: function (settings, output) {
        microsoftTeams.settings.setSettings(settings);
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
        microsoftTeams.settings.setValidityState(validityState);
      }
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
        (window as any).removeEvent && (window as any).removeEvent.notifyFailure(reason);
      }
    });

    addModule({
      name: "settings.registerOnRemoveHandler.notifySuccess",
      initializedRequired: true,
      action: function () {
        (window as any).removeEvent && (window as any).removeEvent.notifySuccess();
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
        microsoftTeams.openFilePreview(filePreviewParameters);
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
        microsoftTeams.tasks.submitTask(result, appId);
      }
    });

    addModule({
      name: "tasks.startTask",
      initializedRequired: true,
      inputs: [{
        type: "object",
        name: "taskInfo",
        defaultValue: "{\"title\": \"Test Task Module\", \"height\": \"medium\", \"width\": \"medium\", \"url\": \"https://teams-test-tab.azurewebsites.net\"}"
      }],
      hasOutput: true,
      action: function (taskInfo, output) {
        microsoftTeams.tasks.startTask(taskInfo, (error, result) => {
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
        microsoftTeams.tasks.updateTask(taskInfo);
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
        microsoftTeams.notifications.showNotification(showNotificationParameters);
      }
    });

    addModule({
      name: "getChatMembers",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.conversations.getChatMembers().then(output);
      }
    });

    addModule({
      name: "getUserJoinedTeams",
      initializedRequired: true,
      hasOutput: true,
      action: function (output) {
        microsoftTeams.teams.fullTrust.joinedTeams.getUserJoinedTeams().then(output);
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
        microsoftTeams.registerBeforeUnloadHandler(function (readyToUnload) {
          (window as any).readyToUnload = readyToUnload;
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
        (window as any).readyToUnload && (window as any).readyToUnload();
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
        microsoftTeams.registerBackButtonHandler(function () {
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
      name: "navigateBack",
      initializedRequired: true,
      action: function () {
        microsoftTeams.pages.backStack.navigateBack();
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
        microsoftTeams.returnFocus(navigateForward);
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
            microsoftTeams.conversations.openConversation(openConversationRequest);
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
          microsoftTeams.conversations.closeConversation();
        }
    });

    addModule({
      name: "captureImage",
      initializedRequired: true,
      hasOutput: true,
      action: (output) => {
        microsoftTeams.media.captureImage((err: microsoftTeams.SdkError, files: microsoftTeams.media.File[]) => {
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
      action: (mediaInputs: microsoftTeams.media.MediaInputs, output) => {
        microsoftTeams.media.selectMedia(mediaInputs, (err: microsoftTeams.SdkError, medias: microsoftTeams.media.Media[]) => {
          if (err) {
            output(err);
            return;
          }

          let message = "";
          for (let i = 0; i < medias.length; i++) {
            const media: microsoftTeams.media.Media = medias[i];
            let preview: string = "";
            let len = 20;
            if (media.preview) {
              len = Math.min(len, media.preview.length);
              preview = media.preview.substr(0, len);
            }
            message += "[format: " + media.format + ", size: " + media.size 
              + ", mimeType: " + media.mimeType + ", content: " + media.content
              + ", preview: " + preview + "],"
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
      action: (inputParams: microsoftTeams.media.MediaInputs, output) => {
        microsoftTeams.media.selectMedia(inputParams, (err: microsoftTeams.SdkError, medias: microsoftTeams.media.Media[]) => {
          if (err) {
            output(err);
            return;
          }

          const media: microsoftTeams.media.Media = medias[0] as microsoftTeams.media.Media;
          media.getMedia((gmErr: microsoftTeams.SdkError, blob: Blob) => {
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
            }
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
        microsoftTeams.media.selectMedia(selectMediaInputs, (err: microsoftTeams.SdkError, medias: microsoftTeams.media.Media[]) => {
          if (err) {
            output(err);
            return;
          }
          const urlList: microsoftTeams.media.ImageUri[] = [];
          for (let i = 0; i < medias.length; i++) {
            const media = medias[i];
            urlList.push({
              value: media.content,
              type: 1 //microsoftTeams.ImageUriType.ID
            } as microsoftTeams.media.ImageUri)
          }
          
          microsoftTeams.media.viewImages(urlList, (gmErr: microsoftTeams.SdkError) => {
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
          } as microsoftTeams.media.ImageUri)
        }
        microsoftTeams.media.viewImages(urlList, (err: microsoftTeams.SdkError) => {
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
      action: (locationProps: microsoftTeams.location.LocationProps, output) => {
        microsoftTeams.location.getLocation(locationProps, (err: microsoftTeams.SdkError, location: microsoftTeams.location.Location) => {
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
      action: (location: microsoftTeams.location.Location, output) => {
        microsoftTeams.location.showLocation(location, (err: microsoftTeams.SdkError, result: boolean) => {
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
      action: (scanBarCodeConfig: microsoftTeams.media.BarCodeConfig, output) => {
        microsoftTeams.media.scanBarCode((err: microsoftTeams.SdkError, result: string) => {
          if (err) {
            output(err);
            return;
          }

          output(result);
        }, scanBarCodeConfig);
      } 
    });

    addModule({
      name: "meeting.getMeetingDetails",
      initializedRequired : true,
      hasOutput : true,
      action: function (output) {
          microsoftTeams.meeting.getMeetingDetails((err: microsoftTeams.SdkError, meetingDetailsResponse: microsoftTeams.meeting.IMeetingDetailsResponse) => {
              if (err) {
                output(err);
                return;
              }
              output(meetingDetailsResponse);
          });
      }
    });

    addModule({
      name: "monetization.openPurchaseExperience",
      initializedRequired : true,
      hasOutput : true,
      action: function (output) {
        microsoftTeams.monetization.openPurchaseExperience((err: microsoftTeams.SdkError) => {
          if(err){
            output(err);
            return;
          }
          output(null);
        });
      }
    });

    addModule({
      name: "getIncomingClientAudioState",
      initializedRequired : true,
      hasOutput : true,
      action: function (output) {
          microsoftTeams.meeting.getIncomingClientAudioState((err: microsoftTeams.SdkError, result : boolean) => {
              if (err) {
                output(err);
                return;
              }
              output(result);
          });
      }
    });

    addModule({
      name: "toggleIncomingClientAudio",
      initializedRequired : true,
      hasOutput : true,
      action: function (output) {
          microsoftTeams.meeting.toggleIncomingClientAudio((err: microsoftTeams.SdkError, result : boolean) => {
              if (err) {
                output(err);
                return;
              }
              output(result);
          });
      }
    });

    addModule({
      name: "meeting.getAuthenticationTokenForAnonymousUser",
      initializedRequired : true,
      hasOutput : true,
      action: function (output) {
          microsoftTeams.meeting.getAuthenticationTokenForAnonymousUser((err: microsoftTeams.SdkError, authenticationTokenOfAnonymousUser : string) => {
              if (err) {
                output(err);
                return;
              }
              output(authenticationTokenOfAnonymousUser);
          });
      }
    });

    addModule({
      name: "people.selectPeople",
      initializedRequired: true,
      hasOutput: true,
      inputs: [{
        type: "object",
        name: "peoplePickerInputs",
        defaultValue: "{\"title\":\"\", \"setSelected\":[], \"openOrgWideSearchInChatOrChannel\":false, \"singleSelect\":false}"
      }],
      action: (peoplePickerInputs: microsoftTeams.people.PeoplePickerInputs, output) => {
        microsoftTeams.people.selectPeople((err: microsoftTeams.SdkError, people: microsoftTeams.people.PeoplePickerResult[]) => {
          if (err) {
            output(err);
            return;
          }

          output("People length: " + people.length + " " + JSON.stringify(people));
        }, peoplePickerInputs);
      } 
    });

    addModule({
      name: "setFrameContext",
      initializedRequired: true,
      inputs: [{
        type: "object",
        name: "frameContext",
        defaultValue: "{\"contentUrl\":\"\", \"websiteUrl\":\"\"}"
      }],
      action: (frameContext: microsoftTeams.FrameContext) => {
        microsoftTeams.setFrameContext(frameContext);
      } 
    });

    addModule({
      name: "navigateToTab",
      initializedRequired: true,
      hasOutput: true,
      inputs: [{
        type: "object",
        name: "tabInstance",
      }],
      action: (tabInstance: microsoftTeams.TabInstance, output) => {
        microsoftTeams.navigateToTab(tabInstance, (status: boolean, reason?: string) => {
          if (reason) {
            output(reason);
            return;
          }
          output(status);
      });
      } 
    });

    addModule({
      name: "sharing.shareWebContent",
      initializedRequired: true,
      hasOutput: true,
      inputs: [{
        type: "object",
        name: "shareWebContentRequest",
        defaultValue: "{\"content\":[{\"type\":\"URL\",\"url\":\"https://teams-test-tab.azurewebsites.net/\"}]}"
      }],
      action: (shareWebContentRequest: microsoftTeams.sharing.IShareRequest<microsoftTeams.sharing.IURLContent>, output) => {
        // Clear the output box prior to action
        output("");
        microsoftTeams.sharing.shareWebContent(shareWebContentRequest, (err) => {
          if (err) {
            output(err.message);
            return;
          }
          output("Sharing was successful.");
        });
      } 
    });

    addModule({
      name: "stageView.open",
      initializedRequired: true,
      inputs: [{
        type: "object",
        name: "stageViewParams"
      }],
      action: function (stageViewParams) {
        microsoftTeams.stageView.open(stageViewParams);
      }
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

    microsoftTeams.appInitialization.notifySuccess();
  }
  catch (err) {
    microsoftTeams.appInitialization.notifyFailure({ reason: microsoftTeams.appInitialization.FailedReason.Other, message: err.message });
  }
};