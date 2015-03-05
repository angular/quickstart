System.register(["angular2/src/facade/collection"], function($__export) {
  "use strict";
  var StringMapWrapper,
      StringMap,
      Control,
      ControlGroup;
  return {
    setters: [function($__m) {
      StringMapWrapper = $__m.StringMapWrapper;
      StringMap = $__m.StringMap;
    }],
    execute: function() {
      Control = $__export("Control", (function() {
        var Control = function Control(value) {
          this.value = value;
        };
        return ($traceurRuntime.createClass)(Control, {}, {});
      }()));
      Object.defineProperty(Control, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      ControlGroup = $__export("ControlGroup", (function() {
        var ControlGroup = function ControlGroup(controls) {
          this.controls = controls;
        };
        return ($traceurRuntime.createClass)(ControlGroup, {get value() {
            var res = {};
            StringMapWrapper.forEach(this.controls, (function(control, name) {
              res[name] = control.value;
            }));
            return res;
          }}, {});
      }()));
      Object.defineProperty(ControlGroup, "parameters", {get: function() {
          return [[StringMap]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/model.map

//# sourceMappingURL=../../src/forms/model.js.map