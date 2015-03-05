System.register(["angular2/src/core/annotations/annotations"], function($__export) {
  "use strict";
  var Decorator,
      NonBindable;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }],
    execute: function() {
      NonBindable = $__export("NonBindable", (function() {
        var NonBindable = function NonBindable() {};
        return ($traceurRuntime.createClass)(NonBindable, {}, {});
      }()));
      Object.defineProperty(NonBindable, "annotations", {get: function() {
          return [new Decorator({
            selector: '[non-bindable]',
            compileChildren: false
          })];
        }});
    }
  };
});

//# sourceMappingURL=src/directives/non_bindable.map

//# sourceMappingURL=../../src/directives/non_bindable.js.map