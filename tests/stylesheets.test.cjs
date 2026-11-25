const assert = require("node:assert/strict");
const { mkdtemp, mkdir, readFile, writeFile, rm } = require("node:fs/promises");
const { tmpdir } = require("node:os");
const path = require("node:path");
const { test } = require("node:test");
const webpack = require("webpack");
const config = require("../webpack.config");

test("CSS-only changes version every styled page, including custom build directories", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "teams-test-tab-css-"));
  const stylesheet = path.join(directory, "app.css");
  const output = path.join(directory, "public", "custom");
  const compiler = webpack({
    ...config,
    output: { ...config.output, path: output },
    plugins: [
      ...config.plugins,
      new webpack.NormalModuleReplacementPlugin(/^\.\.\/public\/app\.css$/, stylesheet),
    ],
  });
  const build = () => new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      } else if (stats.hasErrors()) {
        reject(new Error(stats.toString({ all: false, errors: true })));
      } else {
        resolve();
      }
    });
  });
  const pages = ["index.html", "frame.html", "page1.html", "page2.html", "full_screen.html"];
  const stylesheets = async () => {
    const links = [];
    for (const page of pages) {
      const html = await readFile(path.join(output, page), "utf8");
      const link = html.match(/<link href="([^"]+\.css)" rel="stylesheet"/);
      assert.ok(link, `${page} links a stylesheet`);
      assert.match(link[1], /^app\.[a-f0-9]+\.css$/);
      links.push(link[1]);
    }
    assert.equal(new Set(links).size, 1, "all pages reference the same emitted stylesheet");
    return links[0];
  };

  try {
    await mkdir(output, { recursive: true });
    const initialCss = "body { color: red; }\n";
    await writeFile(stylesheet, initialCss);
    await build();
    const initialName = await stylesheets();
    assert.equal(await readFile(path.join(output, initialName), "utf8"), initialCss);
    const initialHtml = await readFile(path.join(output, "index.html"), "utf8");

    const updatedCss = "body { color: midnightblue; }\n";
    await writeFile(stylesheet, updatedCss);
    compiler.inputFileSystem.purge();
    await build();
    const updatedName = await stylesheets();
    assert.notEqual(updatedName, initialName, "a CSS-only edit changes the stylesheet URL");
    assert.equal(await readFile(path.join(output, updatedName), "utf8"), updatedCss);
    const updatedHtml = await readFile(path.join(output, "index.html"), "utf8");
    assert.equal(
      updatedHtml.match(/src="([^"]+\.js)"/)[1],
      initialHtml.match(/src="([^"]+\.js)"/)[1],
      "stylesheet versioning does not depend on a JavaScript change"
    );
  } finally {
    await new Promise((resolve, reject) => compiler.close((error) => error ? reject(error) : resolve()));
    await rm(directory, { recursive: true, force: true });
  }
});
