System.register([], function($__export) {
  "use strict";
  var NO_CHANGE,
      Pipe;
  return {
    setters: [],
    execute: function() {
      NO_CHANGE = $__export("NO_CHANGE", new Object());
      Pipe = $__export("Pipe", (function() {
        var Pipe = function Pipe() {
          ;
        };
        return ($traceurRuntime.createClass)(Pipe, {
          supports: function(obj) {
            return false;
          },
          onDestroy: function() {},
          transform: function(value) {
            return null;
          }
        }, {});
      }()));
      Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe.js.map