const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");

const source = ts.transpileModule(
  readFileSync(require.resolve("../src/theme.ts"), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 } }
).outputText;

function createTheme(getContext, hasSelector = true, prefersDark = false) {
  let handler;
  const root = { dataset: {} };
  class Select {
    value = "teams";
    addEventListener(name, callback) { this[name] = callback; }
  }
  const selector = new Select();
  const mediaQueries = new Map([
    ["(prefers-color-scheme: dark)", { matches: prefersDark }],
    ["(forced-colors: active)", { matches: false }],
  ]);
  for (const media of mediaQueries.values()) {
    media.addEventListener = (name, callback) => { media[name] = callback; };
  }
  const context = {
    exports: {},
    document: {
      documentElement: root,
      getElementById: () => hasSelector ? selector : null,
    },
    HTMLSelectElement: Select,
    window: { matchMedia: (query) => mediaQueries.get(query) },
    require: () => ({
      app: {
        getContext,
        registerOnThemeChangeHandler: (callback) => { handler = callback; },
      },
    }),
  };
  vm.runInNewContext(source, context);
  context.exports.initializeThemeSelector();
  return {
    ...context.exports,
    root,
    changeTheme: (theme) => handler(theme),
    selectTheme: (theme) => {
      selector.value = theme;
      selector.change();
    },
    changeMedia: (query, matches) => {
      const media = mediaQueries.get(query);
      media.matches = matches;
      media.change();
    },
  };
}

test("applies the initial Teams light, dark, and contrast themes", async () => {
  for (const theme of ["default", "dark", "contrast"]) {
    const themes = createTheme(async () => ({ app: { theme } }));
    await themes.initializeTheme();
    assert.equal(themes.root.dataset.theme, theme);
  }
});

test("follows live theme changes and preserves the theme-change test widget", async () => {
  const themes = createTheme(async () => ({ app: { theme: "default" } }));
  await themes.initializeTheme();
  themes.changeTheme("dark");
  assert.equal(themes.root.dataset.theme, "dark");

  const firstOutput = [];
  themes.registerThemeChangeHandler((theme) => firstOutput.push(theme));
  themes.changeTheme("contrast");
  assert.equal(themes.root.dataset.theme, "contrast");
  assert.deepEqual(firstOutput, ["contrast"]);

  const nextOutput = [];
  themes.registerThemeChangeHandler((theme) => nextOutput.push(theme));
  themes.changeTheme("default");
  assert.equal(themes.root.dataset.theme, "default");
  assert.deepEqual(firstOutput, ["contrast"]);
  assert.deepEqual(nextOutput, ["default"]);
});

test("a late initial context does not overwrite a newer theme event", async () => {
  let resolveContext;
  const themes = createTheme(() => new Promise((resolve) => { resolveContext = resolve; }));
  const initialized = themes.initializeTheme();
  themes.registerThemeChangeHandler(() => {});
  themes.changeTheme("contrast");
  resolveContext({ app: { theme: "dark" } });
  await initialized;
  assert.equal(themes.root.dataset.theme, "contrast");
});

test("context errors propagate and live theme changes still work", async () => {
  const failure = new Error("Context unavailable");
  const themes = createTheme(async () => { throw failure; });
  await assert.rejects(themes.initializeTheme(), failure);
  themes.changeTheme("dark");
  assert.equal(themes.root.dataset.theme, "dark");
});

test("manual themes override the client and Follow Teams restores its latest theme", async () => {
  const themes = createTheme(async () => ({ app: { theme: "dark" } }));
  await themes.initializeTheme();
  const output = [];
  themes.registerThemeChangeHandler((theme) => output.push(theme));

  for (const override of ["default", "dark", "contrast"]) {
    themes.selectTheme(override);
    assert.equal(themes.root.dataset.theme, override);
    themes.changeTheme("contrast");
    assert.equal(themes.root.dataset.theme, override);
  }
  assert.deepEqual(output, ["contrast", "contrast", "contrast"]);
  themes.selectTheme("teams");
  assert.equal(themes.root.dataset.theme, "contrast");
  themes.changeTheme("default");
  assert.equal(themes.root.dataset.theme, "default");
});

test("an override works before SDK initialization and survives the initial context", async () => {
  let resolveContext;
  const themes = createTheme(() => new Promise((resolve) => { resolveContext = resolve; }));
  themes.selectTheme("contrast");
  assert.equal(themes.root.dataset.theme, "contrast");
  const initialized = themes.initializeTheme();
  resolveContext({ app: { theme: "dark" } });
  await initialized;
  assert.equal(themes.root.dataset.theme, "contrast");
  themes.selectTheme("teams");
  assert.equal(themes.root.dataset.theme, "dark");
});

test("pages without a selector continue to follow Teams", async () => {
  const themes = createTheme(async () => ({ app: { theme: "dark" } }), false);
  await themes.initializeTheme();
  assert.equal(themes.root.dataset.theme, "dark");
  themes.changeTheme("contrast");
  assert.equal(themes.root.dataset.theme, "contrast");
});

test("standalone pages follow initial and live OS color preferences", () => {
  for (const hasSelector of [true, false]) {
    const themes = createTheme(async () => {}, hasSelector, true);
    assert.equal(themes.root.dataset.theme, "dark");
    themes.changeMedia("(prefers-color-scheme: dark)", false);
    assert.equal(themes.root.dataset.theme, "default");
    themes.changeMedia("(prefers-color-scheme: dark)", true);
    assert.equal(themes.root.dataset.theme, "dark");
    themes.changeMedia("(forced-colors: active)", true);
    assert.equal(themes.root.dataset.theme, "contrast");
    themes.changeMedia("(forced-colors: active)", false);
    assert.equal(themes.root.dataset.theme, "dark");
  }
});

test("manual overrides ignore OS changes and automatic restores the latest preference", () => {
  const themes = createTheme(async () => {}, true, true);
  themes.selectTheme("default");
  themes.changeMedia("(forced-colors: active)", true);
  assert.equal(themes.root.dataset.theme, "default");
  themes.selectTheme("teams");
  assert.equal(themes.root.dataset.theme, "contrast");
});

test("Teams takes precedence over OS preferences once its theme is available", async () => {
  const themes = createTheme(async () => ({ app: { theme: "default" } }), true, true);
  assert.equal(themes.root.dataset.theme, "dark");
  await themes.initializeTheme();
  assert.equal(themes.root.dataset.theme, "default");
  themes.changeMedia("(forced-colors: active)", true);
  assert.equal(themes.root.dataset.theme, "default");
  themes.selectTheme("dark");
  themes.changeTheme("contrast");
  assert.equal(themes.root.dataset.theme, "dark");
  themes.selectTheme("teams");
  assert.equal(themes.root.dataset.theme, "contrast");
});

test("context failures leave the browser preference active", async () => {
  const failure = new Error("Context unavailable");
  const themes = createTheme(async () => { throw failure; }, true, true);
  await assert.rejects(themes.initializeTheme(), failure);
  assert.equal(themes.root.dataset.theme, "dark");
  themes.changeMedia("(prefers-color-scheme: dark)", false);
  assert.equal(themes.root.dataset.theme, "default");
});
