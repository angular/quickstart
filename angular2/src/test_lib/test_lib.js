System.register(["angular2/src/dom/dom_adapter", "rtts_assert/rtts_assert"], function($__export) {
  "use strict";
  var DOM,
      describe,
      xdescribe,
      ddescribe,
      it,
      xit,
      iit,
      beforeEach,
      afterEach,
      expect,
      IS_DARTIUM,
      SpyObject;
  function elementText(n) {
    var hasNodes = (function(n) {
      var children = DOM.childNodes(n);
      return children && children.length > 0;
    });
    if (n instanceof Comment)
      return '';
    if (n instanceof Array)
      return n.map((function(nn) {
        return elementText(nn);
      })).join("");
    if (n instanceof Element && DOM.tagName(n) == 'CONTENT')
      return elementText(Array.prototype.slice.apply(n.getDistributedNodes()));
    if (DOM.hasShadowRoot(n))
      return elementText(DOM.childNodesAsList(n.shadowRoot));
    if (hasNodes(n))
      return elementText(DOM.childNodesAsList(n));
    return n.textContent;
  }
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      $__export("proxy", $__m.proxy);
    }],
    execute: function() {
      describe = $__export("describe", window.describe);
      xdescribe = $__export("xdescribe", window.xdescribe);
      ddescribe = $__export("ddescribe", window.ddescribe);
      it = $__export("it", window.it);
      xit = $__export("xit", window.xit);
      iit = $__export("iit", window.iit);
      beforeEach = $__export("beforeEach", window.beforeEach);
      afterEach = $__export("afterEach", window.afterEach);
      expect = $__export("expect", window.expect);
      IS_DARTIUM = $__export("IS_DARTIUM", false);
      window.print = function(msg) {
        if (window.dump) {
          window.dump(msg);
        } else {
          window.console.log(msg);
        }
      };
      window.Map.prototype.jasmineToString = function() {
        var m = this;
        if (!m) {
          return '' + m;
        }
        var res = [];
        m.forEach((function(v, k) {
          res.push((k + ":" + v));
        }));
        return ("{ " + res.join(',') + " }");
      };
      window.beforeEach(function() {
        jasmine.addMatchers({
          toEqual: function(util, customEqualityTesters) {
            return {compare: function(actual, expected) {
                return {pass: util.equals(actual, expected, [compareMap])};
              }};
            function compareMap(actual, expected) {
              if (actual instanceof Map) {
                var pass = actual.size === expected.size;
                if (pass) {
                  actual.forEach((function(v, k) {
                    pass = pass && util.equals(v, expected.get(k));
                  }));
                }
                return pass;
              } else {
                return undefined;
              }
            }
          },
          toBePromise: function() {
            return {compare: function(actual, expectedClass) {
                var pass = typeof actual === 'object' && typeof actual.then === 'function';
                return {
                  pass: pass,
                  get message() {
                    return 'Expected ' + actual + ' to be a promise';
                  }
                };
              }};
          },
          toBeAnInstanceOf: function() {
            return {compare: function(actual, expectedClass) {
                var pass = typeof actual === 'object' && actual instanceof expectedClass;
                return {
                  pass: pass,
                  get message() {
                    return 'Expected ' + actual + ' to be an instance of ' + expectedClass;
                  }
                };
              }};
          },
          toHaveText: function() {
            return {compare: function(actual, expectedText) {
                var actualText = elementText(actual);
                return {
                  pass: actualText == expectedText,
                  get message() {
                    return 'Expected ' + actualText + ' to be equal to ' + expectedText;
                  }
                };
              }};
          },
          toImplement: function() {
            return {compare: function(actualObject, expectedInterface) {
                var objProps = Object.keys(actualObject.constructor.prototype);
                var intProps = Object.keys(expectedInterface.prototype);
                var missedMethods = [];
                intProps.forEach((function(k) {
                  if (!actualObject.constructor.prototype[k])
                    missedMethods.push(k);
                }));
                return {
                  pass: missedMethods.length == 0,
                  get message() {
                    return 'Expected ' + actualObject + ' to have the following methods: ' + missedMethods.join(", ");
                  }
                };
              }};
          }
        });
      });
      SpyObject = $__export("SpyObject", (function() {
        var SpyObject = function SpyObject() {};
        return ($traceurRuntime.createClass)(SpyObject, {
          spy: function(name) {
            if (!this[name]) {
              this[name] = this._createGuinnessCompatibleSpy();
            }
            return this[name];
          },
          rttsAssert: function(value) {
            return true;
          },
          _createGuinnessCompatibleSpy: function() {
            var newSpy = jasmine.createSpy();
            newSpy.andCallFake = newSpy.and.callFake;
            return newSpy;
          }
        }, {});
      }()));
    }
  };
});

//# sourceMappingURL=src/test_lib/test_lib.map

//# sourceMappingURL=../../src/test_lib/test_lib.js.map