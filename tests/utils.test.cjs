const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");

const source = ts.transpileModule(
  readFileSync(require.resolve("../src/utils.ts"), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 } }
).outputText;

function createWidget(config, delay) {
  const elements = new Map();
  const timers = [];

  class Element {
    constructor() {
      this.value = "";
      this.style = {};
      this.listeners = {};
      this.classList = { add() {} };
    }
    set id(value) { elements.set(value, this); }
    appendChild() {}
    setAttribute() {}
    addEventListener(name, handler) { this.listeners[name] = handler; }
  }

  class Input extends Element {
    constructor(value) {
      super();
      this.value = value;
      this.valid = true;
      this.validationReports = 0;
    }
    get valueAsNumber() { return Number(this.value); }
    reportValidity() {
      this.validationReports++;
      return this.valid;
    }
  }

  const delayInput = delay === undefined ? undefined : new Input(delay);
  if (delayInput) {
    elements.set("apiDelayInput", delayInput);
  }
  const context = {
    exports: {},
    require: () => ({}),
    HTMLInputElement: Input,
    document: {
      createElement: () => new Element(),
      createTextNode: (text) => text,
      getElementById: (id) => elements.get(id),
    },
    setTimeout: (callback, milliseconds) => timers.push({ callback, milliseconds }),
  };
  vm.runInNewContext(source, context);
  context.exports.addModule({ name: "test", initializedRequired: true, ...config });
  return {
    click: () => elements.get("button-test").listeners.click(),
    delayInput,
    elements,
    timers,
  };
}

test("action waits five seconds and retains click-time delay and arguments", async () => {
  const calls = [];
  const widget = createWidget({
    inputs: [{ name: "argument", type: "string" }],
    action: (value) => calls.push(value),
  }, "5");
  const input = widget.elements.get("input-test-0");
  input.value = "original";
  const pending = widget.click();
  assert.deepEqual(calls, []);
  assert.equal(widget.timers[0].milliseconds, 5000);
  widget.delayInput.value = "10";
  input.value = "changed";
  widget.timers[0].callback();
  await pending;
  assert.deepEqual(calls, ["original"]);
});

test("onClick waits for a fractional delay and still writes its result", async () => {
  let calls = 0;
  const widget = createWidget({
    hasOutput: true,
    onClick: async () => { calls++; return "result"; },
  }, "0.5");
  const pending = widget.click();
  assert.equal(calls, 0);
  assert.equal(widget.timers[0].milliseconds, 500);
  widget.timers[0].callback();
  await pending;
  assert.equal(calls, 1);
  assert.equal(widget.elements.get("textarea-test").value, "result");
});

test("zero delay and pages without a delay control invoke synchronously", async () => {
  for (const delay of ["0", undefined]) {
    let calls = 0;
    const widget = createWidget({ action: () => calls++ }, delay);
    const pending = widget.click();
    assert.equal(calls, 1);
    assert.equal(widget.timers.length, 0);
    await pending;
  }
});

test("invalid delay reports validation and does not invoke or schedule the API", async () => {
  let calls = 0;
  const widget = createWidget({ action: () => calls++ }, "-1");
  widget.delayInput.valid = false;
  await widget.click();
  assert.equal(widget.delayInput.validationReports, 1);
  assert.equal(calls, 0);
  assert.equal(widget.timers.length, 0);
});
