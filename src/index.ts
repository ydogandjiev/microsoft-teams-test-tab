
import { container, restoreState, saveState, downloadHandler, filterHandler } from './utils';
import { initializeAppModules, registerAppCachingHandlers } from './app';
import { teamsCore } from '@microsoft/teams-js'

(function () {
  initializeAppModules();
  registerAppCachingHandlers();

  document.body.appendChild(container);

  // Give the DOM a chance to update from the appendChild above
  setTimeout(restoreState, 0);
  window.addEventListener("beforeunload", saveState);
  window.addEventListener("load", () => {
    downloadHandler();
    filterHandler();
  });

  // Define global functions for use from html files
  (window as any).enablePrintCapability = () => {
    teamsCore.enablePrintCapability();
  };
  (window as any).printHandler = () => {
    window.print();
  };
})();
