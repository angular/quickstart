System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/dom", "../selector", "../directive_metadata", "../../annotations/annotations", "./compile_step", "./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      List,
      MapWrapper,
      DOM,
      SelectorMatcher,
      CssSelector,
      DirectiveMetadata,
      Component,
      Viewport,
      CompileStep,
      CompileElement,
      CompileControl,
      DirectiveParser;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      SelectorMatcher = $__m.SelectorMatcher;
      CssSelector = $__m.CssSelector;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      Component = $__m.Component;
      Viewport = $__m.Viewport;
    }, function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }],
    execute: function() {
      DirectiveParser = $__export("DirectiveParser", (function($__super) {
        var DirectiveParser = function DirectiveParser(directives) {
          $traceurRuntime.superConstructor(DirectiveParser).call(this);
          this._selectorMatcher = new SelectorMatcher();
          for (var i = 0; i < directives.length; i++) {
            var directiveMetadata = directives[i];
            this._selectorMatcher.addSelectable(CssSelector.parse(directiveMetadata.annotation.selector), directiveMetadata);
          }
        };
        return ($traceurRuntime.createClass)(DirectiveParser, {process: function(parent, current, control) {
            var attrs = current.attrs();
            var classList = current.classList();
            var cssSelector = new CssSelector();
            cssSelector.setElement(DOM.nodeName(current.element));
            for (var i = 0; i < classList.length; i++) {
              cssSelector.addClassName(classList[i]);
            }
            MapWrapper.forEach(attrs, (function(attrValue, attrName) {
              if (isBlank(current.propertyBindings) || isPresent(current.propertyBindings) && !MapWrapper.contains(current.propertyBindings, attrName)) {
                cssSelector.addAttribute(attrName, attrValue);
              }
            }));
            if (isPresent(current.propertyBindings)) {
              MapWrapper.forEach(current.propertyBindings, (function(expression, prop) {
                cssSelector.addAttribute(prop, expression.source);
              }));
            }
            if (isPresent(current.variableBindings)) {
              MapWrapper.forEach(current.variableBindings, (function(value, name) {
                cssSelector.addAttribute(name, value);
              }));
            }
            var isTemplateElement = DOM.isTemplateElement(current.element);
            this._selectorMatcher.match(cssSelector, (function(directive) {
              if (directive.annotation instanceof Viewport) {
                if (!isTemplateElement) {
                  throw new BaseException('Viewport directives need to be placed on <template> elements or elements with template attribute!');
                } else if (isPresent(current.viewportDirective)) {
                  throw new BaseException('Only one template directive per element is allowed!');
                }
              } else if (isTemplateElement) {
                throw new BaseException('Only template directives are allowed on <template> elements!');
              } else if ((directive.annotation instanceof Component) && isPresent(current.componentDirective)) {
                throw new BaseException('Only one component directive per element is allowed!');
              }
              current.addDirective(directive);
            }));
          }}, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(DirectiveParser, "parameters", {get: function() {
          return [[assert.genericType(List, DirectiveMetadata)]];
        }});
      Object.defineProperty(DirectiveParser.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/directive_parser.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/directive_parser.js.map