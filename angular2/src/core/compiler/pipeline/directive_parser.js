System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "../selector", "../directive_metadata", "../../annotations/annotations", "./compile_step", "./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      assertionsEnabled,
      RegExpWrapper,
      List,
      MapWrapper,
      DOM,
      SelectorMatcher,
      CssSelector,
      DirectiveMetadata,
      DynamicComponent,
      Component,
      Viewport,
      CompileStep,
      CompileElement,
      CompileControl,
      PROPERTY_BINDING_REGEXP,
      DirectiveParser;
  function checkDirectiveValidity(directive, current, isTemplateElement) {
    var isComponent = directive.annotation instanceof Component || directive.annotation instanceof DynamicComponent;
    var alreadyHasComponent = isPresent(current.componentDirective);
    if (directive.annotation instanceof Viewport) {
      if (!isTemplateElement) {
        throw new BaseException("Viewport directives need to be placed on <template> elements or elements " + ("with template attribute - check " + current.elementDescription));
      } else if (isPresent(current.viewportDirective)) {
        throw new BaseException(("Only one viewport directive can be used per element - check " + current.elementDescription));
      }
    } else if (isTemplateElement) {
      throw new BaseException(("Only template directives are allowed on template elements - check " + current.elementDescription));
    } else if (isComponent && alreadyHasComponent) {
      throw new BaseException(("Multiple component directives not allowed on the same element - check " + current.elementDescription));
    }
    return directive;
  }
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
      assertionsEnabled = $__m.assertionsEnabled;
      RegExpWrapper = $__m.RegExpWrapper;
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
      DynamicComponent = $__m.DynamicComponent;
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
      PROPERTY_BINDING_REGEXP = RegExpWrapper.create('^ *([^\\s\\|]+)');
      DirectiveParser = $__export("DirectiveParser", (function($__super) {
        var DirectiveParser = function DirectiveParser(directives) {
          $traceurRuntime.superConstructor(DirectiveParser).call(this);
          var selector;
          this._selectorMatcher = new SelectorMatcher();
          for (var i = 0; i < directives.length; i++) {
            var directiveMetadata = directives[i];
            selector = CssSelector.parse(directiveMetadata.annotation.selector);
            this._selectorMatcher.addSelectables(selector, directiveMetadata);
          }
        };
        return ($traceurRuntime.createClass)(DirectiveParser, {process: function(parent, current, control) {
            var attrs = current.attrs();
            var classList = current.classList();
            var cssSelector = new CssSelector();
            var nodeName = DOM.nodeName(current.element);
            cssSelector.setElement(nodeName);
            for (var i = 0; i < classList.length; i++) {
              cssSelector.addClassName(classList[i]);
            }
            MapWrapper.forEach(attrs, (function(attrValue, attrName) {
              cssSelector.addAttribute(attrName, attrValue);
            }));
            var isTemplateElement = DOM.isTemplateElement(current.element);
            this._selectorMatcher.match(cssSelector, (function(selector, directive) {
              current.addDirective(checkDirectiveValidity(directive, current, isTemplateElement));
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