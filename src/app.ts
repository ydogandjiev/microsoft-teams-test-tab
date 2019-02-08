import { addModule } from "./utils";
import * as microsoftTeams from '@microsoft/teams-js';

export const initializeAppModules = () => {
    addModule({
        name: "initialize",
        initializedRequired: false,
        action: function () {
          microsoftTeams.initialize();
        }
      });
    
      addModule({
        name: "getContext",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
          microsoftTeams.getContext(output);
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
            },
          });
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
        name: "settings.registerOnSettingsHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
          microsoftTeams.settings.registerOnSettingsHandler(function () {
            output("Settings Event recieved");
          });
        }
      });
    
      addModule({
        name: "settings.registerOnSaveHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
          microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
            (window as any).saveEvent = saveEvent;
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
          name: "settings"
        }],
        action: function (settings) {
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
          name: "taskInfo"
        }],
        action: function (taskInfo) {
          microsoftTeams.tasks.startTask(taskInfo);
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
          microsoftTeams.showNotification(showNotificationParameters);
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
        name: "getChatMembers",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
          microsoftTeams.getChatMembers(output);
        }
      });

      addModule({
        name: "getUserJoinedTeams",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
          microsoftTeams
          microsoftTeams.getUserJoinedTeams(output);
        }
      });

/*       addModule({
        name: "registerBeforeUnload",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
          microsoftTeams.registerBeforeUnloadHandler(function (readyToUnload) {
            (window as any).readyToUnload = readyToUnload;
            output("BeforeUnload recieved");
            return true;
          });
        }
      }); */

      addModule({
        name: "readyToUnload",
        initializedRequired: true,
        action: function() {
          (window as any).readyToUnload && (window as any).readyToUnload();
        }
      });

      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0] as HTMLElement;

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
};