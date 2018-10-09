import { addModule } from "./utils";
import * as microsoftTeams from '@microsoft/teams-js';

export const initializeAppModules = () => {
    addModule({
        name: "initialize",
        action: function () {
          microsoftTeams.initialize();
        }
      });
    
      addModule({
        name: "getContext",
        hasOutput: true,
        action: function (output) {
          microsoftTeams.getContext(output);
        }
      });
    
      addModule({
        name: "navigateCrossDomain",
        inputs: [{
          type: "string",
          name: "url"
        }, ],
        action: function (url) {
          microsoftTeams.navigateCrossDomain(url);
        }
      });
    
      addModule({
        name: "registerOnThemeChangeHandler",
        hasOutput: true,
        action: function (output) {
          microsoftTeams.registerOnThemeChangeHandler(output);
        }
      });
    
      addModule({
        name: "shareDeepLink",
        inputs: [{
          type: "object",
          name: "deepLinkParameters"
        }, ],
        action: function (deepLinkParameters) {
          microsoftTeams.shareDeepLink(deepLinkParameters);
        }
      });
    
      addModule({
        name: "authentication.authenticate",
        inputs: [{
          type: "string",
          name: "url"
        }, ],
        hasOutput: true,
        action: function (url, output) {
          microsoftTeams.authentication.authenticate({
            url: url,
            successCallback: function (result) {
              output("Success:" + result);
            },
            failureCallback: function (reason) {
              output("Failure:" + reason);
            },
          });
        }
      });
    
      addModule({
        name: "authentication.notifyFailure",
        inputs: [{
          type: "string",
          name: "reason"
        }, ],
        action: function (reason) {
          microsoftTeams.authentication.notifyFailure(reason);
        }
      });
    
      addModule({
        name: "authentication.notifySuccess",
        inputs: [{
          type: "string",
          name: "result"
        }, ],
        action: function (result) {
          microsoftTeams.authentication.notifySuccess(result);
        }
      });
    
      addModule({
        name: "settings.getSettings",
        hasOutput: true,
        action: function (output) {
          microsoftTeams.settings.getSettings(output);
        }
      });
    
      addModule({
        name: "settings.registerOnSaveHandler",
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
        action: function () {
          (window as any).saveEvent && (window as any).saveEvent.notifySuccess();
        }
      });
    
      addModule({
        name: "settings.setSettings",
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
          microsoftTeams.tasks.submitTask(result, appId);
        }
      });
    
      addModule({
        name: "tasks.startTask",
        inputs: [{
          type: "object",
          name: "taskInfo"
        }, ],
        action: function (taskInfo) {
          microsoftTeams.tasks.startTask(taskInfo);
        }
      });
    
      addModule({
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
    
      addModule({
        name: "downloadFile ShowNotificationOnly",
        inputs: [{
          type: "object",
          name: "showNotificationParameters"
        }, ],
        action: function (showNotificationParameters) {
          if(microsoftTeams.showNotification) {
            microsoftTeams.showNotification(showNotificationParameters);
          }
        }
      });
    
      addModule({
        name: "getAuthToken",
        inputs: [{
          type: "object",
          name: "getAuthTokenParameters"
        }, ],
        action: function (getAuthTokenParameters) {
          microsoftTeams.authentication.getAuthToken(getAuthTokenParameters);
        }
      });
    
      addModule({
        name: "getChatMembers",
        hasOutput: true,
        action: function (output) {
          microsoftTeams.getChatMembers(output);
        }
      });
};