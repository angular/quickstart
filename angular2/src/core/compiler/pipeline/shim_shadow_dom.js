System.register(["./compile_step", "./compile_element", "./compile_control", "angular2/src/facade/lang", "angular2/src/core/compiler/directive_metadata", "angular2/src/core/compiler/shadow_dom_strategy"], function($__export) {
  "use strict";
  var CompileStep,
      CompileElement,
      CompileControl,
      isPresent,
      Type,
      DirectiveMetadata,
      ShadowDomStrategy,
      ShimShadowDom;
  return {
    setters: [function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }, function($__m) {
      isPresent = $__m.isPresent;
      Type = $__m.Type;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }],
    execute: function() {
      ShimShadowDom = $__export("ShimShadowDom", (function($__super) {
        var ShimShadowDom = function ShimShadowDom(cmpMetadata, strategy) {
          $traceurRuntime.superConstructor(ShimShadowDom).call(this);
          this._strategy = strategy;
          this._component = cmpMetadata.type;
        };
        return ($traceurRuntime.createClass)(ShimShadowDom, {process: function(parent, current, control) {
            if (current.ignoreBindings) {
              return ;
            }
            this._strategy.shimContentElement(this._component, current.element);
            var host = current.componentDirective;
            if (isPresent(host)) {
              this._strategy.shimHostElement(host.type, current.element);
            }
          }}, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ShimShadowDom, "parameters", {get: function() {
          return [[DirectiveMetadata], [ShadowDomStrategy]];
        }});
      Object.defineProperty(ShimShadowDom.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/shim_shadow_dom.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/shim_shadow_dom.js.map