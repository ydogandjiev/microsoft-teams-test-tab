
import { container, restoreState, saveState, downloadHandler } from './utils';
import { initializeAppModules, registerAppCachingHandlers } from './app';

(function () {
  initializeAppModules();

  registerAppCachingHandlers();

  document.body.appendChild(container);

  // Give the DOM a chance to update from the appendChild above
  setTimeout(restoreState, 0);
  window.addEventListener("beforeunload", saveState);
  window.addEventListener("load", downloadHandler);
})();
