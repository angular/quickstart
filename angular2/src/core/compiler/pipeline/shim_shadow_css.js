System.register(["./compile_step", "./compile_element", "./compile_control", "angular2/src/core/compiler/directive_metadata", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/src/facade/dom", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var CompileStep,
      CompileElement,
      CompileControl,
      DirectiveMetadata,
      ShadowDomStrategy,
      DOM,
      Element,
      isPresent,
      isBlank,
      Type,
      ShimShadowCss;
  return {
    setters: [function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      DOM = $__m.DOM;
      Element = $__m.Element;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      Type = $__m.Type;
    }],
    execute: function() {
      ShimShadowCss = $__export("ShimShadowCss", (function($__super) {
        var ShimShadowCss = function ShimShadowCss(cmpMetadata, strategy, styleHost) {
          $traceurRuntime.superConstructor(ShimShadowCss).call(this);
          this._strategy = strategy;
          this._component = cmpMetadata.type;
          this._styleHost = styleHost;
          this._lastInsertedStyle = null;
        };
        return ($traceurRuntime.createClass)(ShimShadowCss, {
          process: function(parent, current, control) {
            if (DOM.tagName(current.element) == 'STYLE') {
              current.ignoreBindings = true;
              if (this._strategy.extractStyles()) {
                DOM.remove(current.element);
                var css = DOM.getText(current.element);
                var shimComponent = this._strategy.getShimComponent(this._component);
                css = shimComponent.shimCssText(css);
                this._insertStyle(this._styleHost, css);
              }
            }
          },
          _insertStyle: function(el, css) {
            var style = DOM.createStyleElement(css);
            if (isBlank(this._lastInsertedStyle)) {
              var firstChild = DOM.firstChild(el);
              if (isPresent(firstChild)) {
                DOM.insertBefore(firstChild, style);
              } else {
                DOM.appendChild(el, style);
              }
            } else {
              DOM.insertAfter(this._lastInsertedStyle, style);
            }
            this._lastInsertedStyle = style;
          }
        }, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ShimShadowCss, "parameters", {get: function() {
          return [[DirectiveMetadata], [ShadowDomStrategy], [Element]];
        }});
      Object.defineProperty(ShimShadowCss.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      Object.defineProperty(ShimShadowCss.prototype._insertStyle, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/shim_shadow_css.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/shim_shadow_css.js.map