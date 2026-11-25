import { app } from "@microsoft/teams-js";

let themeChangeReceived = false;
type Theme = "default" | "dark" | "contrast";
let clientTheme: Theme | undefined;
let browserTheme: Theme = "default";
let themeOverride: Theme | undefined;

function applyTheme(theme: string) {
  clientTheme =
    theme === "dark" || theme === "contrast" ? theme : "default";
  renderTheme();
}

function renderTheme() {
  document.documentElement.dataset.theme = themeOverride ?? clientTheme ?? browserTheme;
}

export function initializeThemeSelector() {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const forcedColors = window.matchMedia("(forced-colors: active)");
  const updateBrowserTheme = () => {
    browserTheme = forcedColors.matches ? "contrast" : darkMode.matches ? "dark" : "default";
    renderTheme();
  };
  darkMode.addEventListener("change", updateBrowserTheme);
  forcedColors.addEventListener("change", updateBrowserTheme);
  updateBrowserTheme();

  const selector = document.getElementById("themeSelect");
  if (!(selector instanceof HTMLSelectElement)) {
    return;
  }

  selector.addEventListener("change", () => {
    const value = selector.value;
    if (value === "teams") {
      themeOverride = undefined;
    } else if (value === "default" || value === "dark" || value === "contrast") {
      themeOverride = value;
    } else {
      console.error("Unsupported theme selection:", value);
      return;
    }
    renderTheme();
  });
}

export function registerThemeChangeHandler(handler?: (theme: string) => void) {
  app.registerOnThemeChangeHandler((theme) => {
    themeChangeReceived = true;
    applyTheme(theme);
    handler?.(theme);
  });
}

export async function initializeTheme() {
  registerThemeChangeHandler();
  const context = await app.getContext();
  if (!themeChangeReceived) {
    applyTheme(context.app.theme);
  }
}
