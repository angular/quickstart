System.register(["angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "../directive_metadata", "../../annotations/annotations", "../element_binder", "../element_injector", "../view", "../string_utils", "angular2/change_detection"], function($__export) {
  "use strict";
  var List,
      Map,
      ListWrapper,
      MapWrapper,
      DOM,
      int,
      isBlank,
      isPresent,
      Type,
      StringJoiner,
      assertionsEnabled,
      DirectiveMetadata,
      Decorator,
      Component,
      Viewport,
      DynamicComponent,
      ElementBinder,
      ProtoElementInjector,
      viewModule,
      dashCaseToCamelCase,
      AST,
      CompileElement;
  function getElementDescription(domElement) {
    var buf = new StringJoiner();
    var atts = DOM.attributeMap(domElement);
    buf.add("<");
    buf.add(DOM.tagName(domElement).toLowerCase());
    addDescriptionAttribute(buf, "id", MapWrapper.get(atts, "id"));
    addDescriptionAttribute(buf, "class", MapWrapper.get(atts, "class"));
    MapWrapper.forEach(atts, (function(attValue, attName) {
      if (attName !== "id" && attName !== "class") {
        addDescriptionAttribute(buf, attName, attValue);
      }
    }));
    buf.add(">");
    return buf.toString();
  }
  function addDescriptionAttribute(buffer, attName, attValue) {
    if (isPresent(attValue)) {
      if (attValue.length === 0) {
        buffer.add(' ' + attName);
      } else {
        buffer.add(' ' + attName + '="' + attValue + '"');
      }
    }
  }
  return {
    setters: [function($__m) {
      List = $__m.List;
      Map = $__m.Map;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      int = $__m.int;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      Type = $__m.Type;
      StringJoiner = $__m.StringJoiner;
      assertionsEnabled = $__m.assertionsEnabled;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      Decorator = $__m.Decorator;
      Component = $__m.Component;
      Viewport = $__m.Viewport;
      DynamicComponent = $__m.DynamicComponent;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      dashCaseToCamelCase = $__m.dashCaseToCamelCase;
    }, function($__m) {
      AST = $__m.AST;
    }],
    execute: function() {
      CompileElement = $__export("CompileElement", (function() {
        var CompileElement = function CompileElement(element) {
          var compilationUnit = arguments[1] !== (void 0) ? arguments[1] : '';
          this.element = element;
          this._attrs = null;
          this._classList = null;
          this.textNodeBindings = null;
          this.propertyBindings = null;
          this.eventBindings = null;
          this.variableBindings = null;
          this.decoratorDirectives = null;
          this.viewportDirective = null;
          this.componentDirective = null;
          this.hasNestedView = false;
          this._allDirectives = null;
          this.isViewRoot = false;
          this.hasBindings = false;
          this.inheritedProtoView = null;
          this.inheritedProtoElementInjector = null;
          this.inheritedElementBinder = null;
          this.distanceToParentInjector = 0;
          this.distanceToParentBinder = 0;
          this.compileChildren = true;
          this.ignoreBindings = false;
          this.contentTagSelector = null;
          var tplDesc = assertionsEnabled() ? getElementDescription(element) : null;
          if (compilationUnit !== '') {
            this.elementDescription = compilationUnit;
            if (isPresent(tplDesc))
              this.elementDescription += ": " + tplDesc;
          } else {
            this.elementDescription = tplDesc;
          }
        };
        return ($traceurRuntime.createClass)(CompileElement, {
          refreshAttrs: function() {
            this._attrs = null;
          },
          attrs: function() {
            if (isBlank(this._attrs)) {
              this._attrs = DOM.attributeMap(this.element);
            }
            return this._attrs;
          },
          refreshClassList: function() {
            this._classList = null;
          },
          classList: function() {
            if (isBlank(this._classList)) {
              this._classList = ListWrapper.create();
              var elClassList = DOM.classList(this.element);
              for (var i = 0; i < elClassList.length; i++) {
                ListWrapper.push(this._classList, elClassList[i]);
              }
            }
            return this._classList;
          },
          addTextNodeBinding: function(indexInParent, expression) {
            if (isBlank(this.textNodeBindings)) {
              this.textNodeBindings = MapWrapper.create();
            }
            MapWrapper.set(this.textNodeBindings, indexInParent, expression);
          },
          addPropertyBinding: function(property, expression) {
            if (isBlank(this.propertyBindings)) {
              this.propertyBindings = MapWrapper.create();
            }
            MapWrapper.set(this.propertyBindings, dashCaseToCamelCase(property), expression);
          },
          addVariableBinding: function(variableName, variableValue) {
            if (isBlank(this.variableBindings)) {
              this.variableBindings = MapWrapper.create();
            }
            MapWrapper.set(this.variableBindings, variableValue, dashCaseToCamelCase(variableName));
          },
          addEventBinding: function(eventName, expression) {
            if (isBlank(this.eventBindings)) {
              this.eventBindings = MapWrapper.create();
            }
            MapWrapper.set(this.eventBindings, eventName, expression);
          },
          addAttribute: function(attributeName, attributeValue) {
            if (isBlank(this.attributes)) {
              this.attributes = MapWrapper.create();
            }
            MapWrapper.set(this.attributes, attributeName, attributeValue);
          },
          addDirective: function(directive) {
            var annotation = directive.annotation;
            this._allDirectives = null;
            if (annotation instanceof Decorator) {
              if (isBlank(this.decoratorDirectives)) {
                this.decoratorDirectives = ListWrapper.create();
              }
              ListWrapper.push(this.decoratorDirectives, directive);
              if (!annotation.compileChildren) {
                this.compileChildren = false;
              }
            } else if (annotation instanceof Viewport) {
              this.viewportDirective = directive;
            } else if (annotation instanceof Component) {
              this.componentDirective = directive;
              this.hasNestedView = true;
            } else if (annotation instanceof DynamicComponent) {
              this.componentDirective = directive;
            }
          },
          getAllDirectives: function() {
            if (this._allDirectives === null) {
              var directives = ListWrapper.create();
              if (isPresent(this.componentDirective)) {
                ListWrapper.push(directives, this.componentDirective);
              }
              if (isPresent(this.viewportDirective)) {
                ListWrapper.push(directives, this.viewportDirective);
              }
              if (isPresent(this.decoratorDirectives)) {
                directives = ListWrapper.concat(directives, this.decoratorDirectives);
              }
              this._allDirectives = directives;
            }
            return this._allDirectives;
          }
        }, {});
      }()));
      Object.defineProperty(CompileElement.prototype.addTextNodeBinding, "parameters", {get: function() {
          return [[int], [AST]];
        }});
      Object.defineProperty(CompileElement.prototype.addPropertyBinding, "parameters", {get: function() {
          return [[assert.type.string], [AST]];
        }});
      Object.defineProperty(CompileElement.prototype.addVariableBinding, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(CompileElement.prototype.addEventBinding, "parameters", {get: function() {
          return [[assert.type.string], [AST]];
        }});
      Object.defineProperty(CompileElement.prototype.addAttribute, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(CompileElement.prototype.addDirective, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      Object.defineProperty(addDescriptionAttribute, "parameters", {get: function() {
          return [[StringJoiner], [assert.type.string], []];
        }});
    }
  };
});
//# sourceMappingURL=compile_element.js.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/compile_element.js.map