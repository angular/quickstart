System.register(["./compile_step", "./compile_element", "./compile_control", "angular2/src/core/compiler/directive_metadata", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var CompileStep,
      CompileElement,
      CompileControl,
      DirectiveMetadata,
      ShadowDomStrategy,
      DOM,
      Type,
      PromiseWrapper,
      ListWrapper,
      ResolveCss;
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
    }, function($__m) {
      Type = $__m.Type;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      ResolveCss = $__export("ResolveCss", (function($__super) {
        var ResolveCss = function ResolveCss(cmpMetadata, strategy, templateUrl) {
          $traceurRuntime.superConstructor(ResolveCss).call(this);
          this._strategy = strategy;
          this._component = cmpMetadata.type;
          this._templateUrl = templateUrl;
        };
        return ($traceurRuntime.createClass)(ResolveCss, {process: function(parent, current, control) {
            if (DOM.tagName(current.element) == 'STYLE') {
              current.ignoreBindings = true;
              var styleEl = current.element;
              var css = DOM.getText(styleEl);
              css = this._strategy.transformStyleText(css, this._templateUrl, this._component);
              if (PromiseWrapper.isPromise(css)) {
                ListWrapper.push(parent.inheritedProtoView.stylePromises, css);
                DOM.setText(styleEl, '');
                css.then((function(css) {
                  DOM.setText(styleEl, css);
                }));
              } else {
                DOM.setText(styleEl, css);
              }
              this._strategy.handleStyleElement(styleEl);
            }
          }}, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ResolveCss, "parameters", {get: function() {
          return [[DirectiveMetadata], [ShadowDomStrategy], [assert.type.string]];
        }});
      Object.defineProperty(ResolveCss.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/resolve_css.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/resolve_css.js.map