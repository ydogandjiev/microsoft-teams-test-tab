
import { container, restoreState, saveState, downloadHandler, filterHandler, initializeNavigation } from "./utils";
import { renderPage } from "./app";
import { teamsCore } from "@microsoft/teams-js";

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
  (window as any).enablePrintCapability = () => {
    teamsCore.enablePrintCapability();
  };
  (window as any).printHandler = () => {
    window.print();
  };
})();
