System.register(["./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var CompileElement,
      ccModule,
      CompileStep;
  return {
    setters: [function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      ccModule = $__m;
    }],
    execute: function() {
      CompileStep = $__export("CompileStep", (function() {
        var CompileStep = function CompileStep() {};
        return ($traceurRuntime.createClass)(CompileStep, {process: function(parent, current, control) {}}, {});
      }()));
      Object.defineProperty(CompileStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [ccModule.CompileControl]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/compile_step.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/compile_step.js.map