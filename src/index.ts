
import { container, restoreState, saveState, downloadHandler, filterHandler } from './utils';
import { initializeAppModules } from './app';

(function () {
  initializeAppModules();

  document.body.appendChild(container);

  // Give the DOM a chance to update from the appendChild above
  setTimeout(restoreState, 0);
  window.addEventListener("beforeunload", saveState);
  window.addEventListener("load", () => {
    downloadHandler();
    filterHandler();
  });
})();
