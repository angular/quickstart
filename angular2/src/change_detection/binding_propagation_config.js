System.register(["./interfaces"], function($__export) {
  "use strict";
  var ChangeDetector,
      CHECK_ONCE,
      DETACHED,
      CHECK_ALWAYS,
      BindingPropagationConfig;
  return {
    setters: [function($__m) {
      ChangeDetector = $__m.ChangeDetector;
      CHECK_ONCE = $__m.CHECK_ONCE;
      DETACHED = $__m.DETACHED;
      CHECK_ALWAYS = $__m.CHECK_ALWAYS;
    }],
    execute: function() {
      BindingPropagationConfig = $__export("BindingPropagationConfig", (function() {
        var BindingPropagationConfig = function BindingPropagationConfig(cd) {
          this._cd = cd;
        };
        return ($traceurRuntime.createClass)(BindingPropagationConfig, {
          shouldBePropagated: function() {
            this._cd.mode = CHECK_ONCE;
          },
          shouldBePropagatedFromRoot: function() {
            this._cd.markPathToRootAsCheckOnce();
          },
          shouldNotPropagate: function() {
            this._cd.mode = DETACHED;
          },
          shouldAlwaysPropagate: function() {
            this._cd.mode = CHECK_ALWAYS;
          }
        }, {});
      }()));
      Object.defineProperty(BindingPropagationConfig, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
    }
  };
});
//# sourceMappingURL=binding_propagation_config.js.map

//# sourceMappingURL=../../src/change_detection/binding_propagation_config.js.map