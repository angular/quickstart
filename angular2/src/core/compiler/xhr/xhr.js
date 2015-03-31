System.register(["angular2/src/facade/async"], function($__export) {
  "use strict";
  var Promise,
      XHR;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
    }],
    execute: function() {
      XHR = $__export("XHR", (function() {
        var XHR = function XHR() {
          ;
        };
        return ($traceurRuntime.createClass)(XHR, {get: function(url) {
            return null;
          }}, {});
      }()));
      Object.defineProperty(XHR.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=xhr.js.map

//# sourceMappingURL=../../../../src/core/compiler/xhr/xhr.js.map