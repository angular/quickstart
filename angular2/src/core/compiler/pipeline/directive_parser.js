System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "../selector", "../directive_metadata", "../../annotations/annotations", "./compile_step", "./compile_element", "./compile_control", "./element_binder_builder"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      assertionsEnabled,
      RegExpWrapper,
      List,
      MapWrapper,
      StringMapWrapper,
      DOM,
      SelectorMatcher,
      CssSelector,
      DirectiveMetadata,
      Component,
      Viewport,
      CompileStep,
      CompileElement,
      CompileControl,
      isSpecialProperty,
      PROPERTY_BINDING_REGEXP,
      DirectiveParser;
  function updateMatchedProperties(matchedProperties, selector, directive) {
    if (assertionsEnabled()) {
      var attrs = selector.attrs;
      if (!isPresent(matchedProperties)) {
        matchedProperties = StringMapWrapper.create();
      }
      if (isPresent(attrs)) {
        for (var idx = 0; idx < attrs.length; idx += 2) {
          StringMapWrapper.set(matchedProperties, attrs[idx], true);
        }
      }
      if (isPresent(directive.annotation) && isPresent(directive.annotation.bind)) {
        var bindMap = directive.annotation.bind;
        StringMapWrapper.forEach(bindMap, (function(value, key) {
          var bindProp = RegExpWrapper.firstMatch(PROPERTY_BINDING_REGEXP, value);
          if (isPresent(bindProp) && isPresent(bindProp[1])) {
            StringMapWrapper.set(matchedProperties, bindProp[1], true);
          }
        }));
      }
    }
    return matchedProperties;
  }
  function checkDirectiveValidity(directive, current, isTemplateElement) {
    if (directive.annotation instanceof Viewport) {
      if (!isTemplateElement) {
        throw new BaseException("Viewport directives need to be placed on <template> elements or elements " + ("with template attribute - check " + current.elementDescription));
      } else if (isPresent(current.viewportDirective)) {
        throw new BaseException(("Only one viewport directive can be used per element - check " + current.elementDescription));
      }
    } else if (isTemplateElement) {
      throw new BaseException(("Only template directives are allowed on template elements - check " + current.elementDescription));
    } else if ((directive.annotation instanceof Component) && isPresent(current.componentDirective)) {
      throw new BaseException(("Multiple component directives not allowed on the same element - check " + current.elementDescription));
    }
  }
  function checkMissingDirectives(current, matchedProperties, isTemplateElement) {
    if (assertionsEnabled()) {
      var ppBindings = current.propertyBindings;
      if (isPresent(ppBindings)) {
        MapWrapper.forEach(ppBindings, (function(expression, prop) {
          if (!DOM.hasProperty(current.element, prop) && !isSpecialProperty(prop)) {
            if (!isPresent(matchedProperties) || !isPresent(StringMapWrapper.get(matchedProperties, prop))) {
              throw new BaseException(("Missing directive to handle '" + prop + "' in " + current.elementDescription));
            }
          }
        }));
      }
      if (isTemplateElement && !current.isViewRoot && !isPresent(current.viewportDirective)) {
        throw new BaseException(("Missing directive to handle: " + current.elementDescription));
      }
    }
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
      StringMapWrapper = $__m.StringMapWrapper;
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
    }, function($__m) {
      isSpecialProperty = $__m.isSpecialProperty;
    }],
    execute: function() {
      ;
      PROPERTY_BINDING_REGEXP = RegExpWrapper.create('^ *([^\\s\\|]+)');
      DirectiveParser = $__export("DirectiveParser", (function($__super) {
        var DirectiveParser = function DirectiveParser(directives) {
          $traceurRuntime.superConstructor(DirectiveParser).call(this);
          var selector;
          this._selectorMatcher = new SelectorMatcher();
          for (var i = 0; i < directives.length; i++) {
            var directiveMetadata = directives[i];
            selector = CssSelector.parse(directiveMetadata.annotation.selector);
            this._selectorMatcher.addSelectable(selector, directiveMetadata);
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
            var matchedProperties;
            this._selectorMatcher.match(cssSelector, (function(selector, directive) {
              matchedProperties = updateMatchedProperties(matchedProperties, selector, directive);
              checkDirectiveValidity(directive, current, isTemplateElement);
              current.addDirective(directive);
            }));
            checkMissingDirectives(current, matchedProperties, isTemplateElement);
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