System.register(["angular2/src/core/annotations/annotations", "angular2/src/core/compiler/view_container", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Viewport,
      ViewContainer,
      isBlank,
      If;
  return {
    setters: [function($__m) {
      Viewport = $__m.Viewport;
    }, function($__m) {
      ViewContainer = $__m.ViewContainer;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }],
    execute: function() {
      If = $__export("If", (function() {
        var If = function If(viewContainer) {
          this.viewContainer = viewContainer;
          this.prevCondition = null;
        };
        return ($traceurRuntime.createClass)(If, {set condition(newCondition) {
            if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
              this.prevCondition = true;
              this.viewContainer.create();
            } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
              this.prevCondition = false;
              this.viewContainer.clear();
            }
          }}, {});
      }()));
      Object.defineProperty(If, "annotations", {get: function() {
          return [new Viewport({
            selector: '[if]',
            bind: {'condition': 'if'}
          })];
        }});
      Object.defineProperty(If, "parameters", {get: function() {
          return [[ViewContainer]];
        }});
    }
  };
});

//# sourceMappingURL=src/directives/if.map

//# sourceMappingURL=../../src/directives/if.js.map