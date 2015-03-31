System.register(["angular2/src/dom/browser_adapter", "angular2/src/facade/browser", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var BrowserDomAdapter,
      document,
      window,
      NumberWrapper,
      BaseException,
      isBlank,
      DOM;
  function getIntParameter(name) {
    return NumberWrapper.parseInt(getStringParameter(name), 10);
  }
  function getStringParameter(name) {
    var els = DOM.querySelectorAll(document, ("input[name=\"" + name + "\"]"));
    var value;
    var el;
    for (var i = 0; i < els.length; i++) {
      el = els[i];
      var type = DOM.type(el);
      if ((type !== 'radio' && type !== 'checkbox') || DOM.getChecked(el)) {
        value = DOM.getValue(el);
        break;
      }
    }
    if (isBlank(value)) {
      throw new BaseException(("Could not find and input field with name " + name));
    }
    return value;
  }
  function bindAction(selector, callback) {
    var el = DOM.querySelector(document, selector);
    DOM.on(el, 'click', function(_) {
      callback();
    });
  }
  function microBenchmark(name, iterationCount, callback) {
    var durationName = (name + "/" + iterationCount);
    window.console.time(durationName);
    callback();
    window.console.timeEnd(durationName);
  }
  $__export("getIntParameter", getIntParameter);
  $__export("getStringParameter", getStringParameter);
  $__export("bindAction", bindAction);
  $__export("microBenchmark", microBenchmark);
  return {
    setters: [function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }, function($__m) {
      document = $__m.document;
      window = $__m.window;
    }, function($__m) {
      NumberWrapper = $__m.NumberWrapper;
      BaseException = $__m.BaseException;
      isBlank = $__m.isBlank;
    }],
    execute: function() {
      DOM = new BrowserDomAdapter();
      Object.defineProperty(getIntParameter, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(getStringParameter, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(bindAction, "parameters", {get: function() {
          return [[assert.type.string], [Function]];
        }});
    }
  };
});
//# sourceMappingURL=benchmark_util.js.map

//# sourceMappingURL=../../src/test_lib/benchmark_util.js.map