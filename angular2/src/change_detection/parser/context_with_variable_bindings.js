System.register(["angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var MapWrapper,
      BaseException,
      ContextWithVariableBindings;
  return {
    setters: [function($__m) {
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      BaseException = $__m.BaseException;
    }],
    execute: function() {
      ContextWithVariableBindings = $__export("ContextWithVariableBindings", (function() {
        var ContextWithVariableBindings = function ContextWithVariableBindings(parent, varBindings) {
          this.parent = parent;
          this.varBindings = varBindings;
        };
        return ($traceurRuntime.createClass)(ContextWithVariableBindings, {
          hasBinding: function(name) {
            return MapWrapper.contains(this.varBindings, name);
          },
          get: function(name) {
            return MapWrapper.get(this.varBindings, name);
          },
          set: function(name, value) {
            if (this.hasBinding(name)) {
              MapWrapper.set(this.varBindings, name, value);
            } else {
              throw new BaseException('VariableBindings do not support setting of new keys post-construction.');
            }
          },
          clearValues: function() {
            for (var $__1 = MapWrapper.keys(this.varBindings)[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__2 = void 0; !($__2 = $__1.next()).done; ) {
              var k = $__2.value;
              {
                MapWrapper.set(this.varBindings, k, null);
              }
            }
          }
        }, {});
      }()));
      Object.defineProperty(ContextWithVariableBindings, "parameters", {get: function() {
          return [[assert.type.any], [Map]];
        }});
      Object.defineProperty(ContextWithVariableBindings.prototype.hasBinding, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ContextWithVariableBindings.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ContextWithVariableBindings.prototype.set, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
    }
  };
});

//# sourceMappingURL=src/change_detection/parser/context_with_variable_bindings.map

//# sourceMappingURL=../../../src/change_detection/parser/context_with_variable_bindings.js.map