System.register(["angular2/src/dom/dom_adapter", "angular2/di", "./test_injector", "rtts_assert/rtts_assert"], function($__export) {
  "use strict";
  var DOM,
      bind,
      createTestInjector,
      FunctionWithParamTokens,
      inject,
      _global,
      afterEach,
      expect,
      IS_DARTIUM,
      AsyncTestCompleter,
      jsmBeforeEach,
      jsmDescribe,
      jsmDDescribe,
      jsmXDescribe,
      jsmIt,
      jsmIIt,
      jsmXIt,
      runnerStack,
      inIt,
      testBindings,
      BeforeEachRunner,
      SpyObject;
  function _describe(jsmFn) {
    for (var args = [],
        $__1 = 1; $__1 < arguments.length; $__1++)
      args[$__1 - 1] = arguments[$__1];
    var parentRunner = runnerStack.length === 0 ? null : runnerStack[runnerStack.length - 1];
    var runner = new BeforeEachRunner(parentRunner);
    runnerStack.push(runner);
    var suite = jsmFn.apply((void 0), $traceurRuntime.spread(args));
    runnerStack.pop();
    return suite;
  }
  function describe() {
    for (var args = [],
        $__2 = 0; $__2 < arguments.length; $__2++)
      args[$__2] = arguments[$__2];
    return _describe.apply((void 0), $traceurRuntime.spread([jsmDescribe], args));
  }
  function ddescribe() {
    for (var args = [],
        $__3 = 0; $__3 < arguments.length; $__3++)
      args[$__3] = arguments[$__3];
    return _describe.apply((void 0), $traceurRuntime.spread([jsmDDescribe], args));
  }
  function xdescribe() {
    for (var args = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      args[$__4] = arguments[$__4];
    return _describe.apply((void 0), $traceurRuntime.spread([jsmXDescribe], args));
  }
  function beforeEach(fn) {
    if (runnerStack.length > 0) {
      var runner = runnerStack[runnerStack.length - 1];
      if (!(fn instanceof FunctionWithParamTokens)) {
        fn = inject([], fn);
      }
      runner.beforeEach(fn);
    } else {
      jsmBeforeEach(fn);
    }
  }
  function beforeEachBindings(fn) {
    jsmBeforeEach((function() {
      var bindings = fn();
      if (!bindings)
        return ;
      testBindings = $traceurRuntime.spread(testBindings, bindings);
    }));
  }
  function _it(jsmFn, name, fn) {
    var runner = runnerStack[runnerStack.length - 1];
    jsmFn(name, function(done) {
      var async = false;
      var completerBinding = bind(AsyncTestCompleter).toFactory((function() {
        if (!inIt)
          throw new Error('AsyncTestCompleter can only be injected in an "it()"');
        async = true;
        return new AsyncTestCompleter(done);
      }));
      var injector = createTestInjector($traceurRuntime.spread(testBindings, [completerBinding]));
      runner.run(injector);
      if (!(fn instanceof FunctionWithParamTokens)) {
        fn = inject([], fn);
      }
      inIt = true;
      fn.execute(injector);
      inIt = false;
      if (!async)
        done();
    });
  }
  function it(name, fn) {
    return _it(jsmIt, name, fn);
  }
  function xit(name, fn) {
    return _it(jsmXIt, name, fn);
  }
  function iit(name, fn) {
    return _it(jsmIIt, name, fn);
  }
  function elementText(n) {
    var hasNodes = (function(n) {
      var children = DOM.childNodes(n);
      return children && children.length > 0;
    });
    if (n instanceof Array) {
      return n.map((function(nn) {
        return elementText(nn);
      })).join("");
    }
    if (DOM.isCommentNode(n)) {
      return '';
    }
    if (DOM.isElementNode(n) && DOM.tagName(n) == 'CONTENT') {
      return elementText(Array.prototype.slice.apply(DOM.getDistributedNodes(n)));
    }
    if (DOM.hasShadowRoot(n)) {
      return elementText(DOM.childNodesAsList(DOM.getShadowRoot(n)));
    }
    if (hasNodes(n)) {
      return elementText(DOM.childNodesAsList(n));
    }
    return DOM.getText(n);
  }
  $__export("describe", describe);
  $__export("ddescribe", ddescribe);
  $__export("xdescribe", xdescribe);
  $__export("beforeEach", beforeEach);
  $__export("beforeEachBindings", beforeEachBindings);
  $__export("it", it);
  $__export("xit", xit);
  $__export("iit", iit);
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      createTestInjector = $__m.createTestInjector;
      FunctionWithParamTokens = $__m.FunctionWithParamTokens;
      inject = $__m.inject;
      $__export("inject", $__m.inject);
    }, function($__m) {
      $__export("proxy", $__m.proxy);
    }],
    execute: function() {
      _global = typeof window === 'undefined' ? global : window;
      afterEach = $__export("afterEach", _global.afterEach);
      expect = $__export("expect", _global.expect);
      IS_DARTIUM = $__export("IS_DARTIUM", false);
      AsyncTestCompleter = $__export("AsyncTestCompleter", (function() {
        var AsyncTestCompleter = function AsyncTestCompleter(done) {
          this._done = done;
        };
        return ($traceurRuntime.createClass)(AsyncTestCompleter, {done: function() {
            this._done();
          }}, {});
      }()));
      Object.defineProperty(AsyncTestCompleter, "parameters", {get: function() {
          return [[Function]];
        }});
      jsmBeforeEach = _global.beforeEach;
      jsmDescribe = _global.describe;
      jsmDDescribe = _global.ddescribe;
      jsmXDescribe = _global.xdescribe;
      jsmIt = _global.it;
      jsmIIt = _global.iit;
      jsmXIt = _global.xit;
      runnerStack = [];
      inIt = false;
      BeforeEachRunner = (function() {
        var BeforeEachRunner = function BeforeEachRunner(parent) {
          this._fns = [];
          this._parent = parent;
        };
        return ($traceurRuntime.createClass)(BeforeEachRunner, {
          beforeEach: function(fn) {
            this._fns.push(fn);
          },
          run: function(injector) {
            if (this._parent)
              this._parent.run();
            this._fns.forEach((function(fn) {
              return fn.execute(injector);
            }));
          }
        }, {});
      }());
      Object.defineProperty(BeforeEachRunner, "parameters", {get: function() {
          return [[BeforeEachRunner]];
        }});
      Object.defineProperty(BeforeEachRunner.prototype.beforeEach, "parameters", {get: function() {
          return [[FunctionWithParamTokens]];
        }});
      jsmBeforeEach((function() {
        testBindings = [];
      }));
      _global.print = function(msg) {
        if (_global.dump) {
          _global.dump(msg);
        } else {
          _global.console.log(msg);
        }
      };
      _global.Map.prototype.jasmineToString = function() {
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
      _global.beforeEach(function() {
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