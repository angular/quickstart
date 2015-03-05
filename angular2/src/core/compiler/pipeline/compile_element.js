System.register(["angular2/src/facade/collection", "angular2/src/facade/dom", "angular2/src/facade/lang", "../directive_metadata", "../../annotations/annotations", "../element_binder", "../element_injector", "../view", "angular2/change_detection"], function($__export) {
  "use strict";
  var List,
      Map,
      ListWrapper,
      MapWrapper,
      Element,
      DOM,
      int,
      isBlank,
      isPresent,
      Type,
      DirectiveMetadata,
      Decorator,
      Component,
      Viewport,
      ElementBinder,
      ProtoElementInjector,
      ProtoView,
      AST,
      CompileElement;
  return {
    setters: [function($__m) {
      List = $__m.List;
      Map = $__m.Map;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      Element = $__m.Element;
      DOM = $__m.DOM;
    }, function($__m) {
      int = $__m.int;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      Type = $__m.Type;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      Decorator = $__m.Decorator;
      Component = $__m.Component;
      Viewport = $__m.Viewport;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
    }, function($__m) {
      ProtoView = $__m.ProtoView;
    }, function($__m) {
      AST = $__m.AST;
    }],
    execute: function() {
      CompileElement = $__export("CompileElement", (function() {
        var CompileElement = function CompileElement(element) {
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
          this._allDirectives = null;
          this.isViewRoot = false;
          this.hasBindings = false;
          this.inheritedProtoView = null;
          this.inheritedProtoElementInjector = null;
          this.inheritedElementBinder = null;
          this.distanceToParentInjector = 0;
          this.compileChildren = true;
          this.ignoreBindings = false;
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
            MapWrapper.set(this.propertyBindings, property, expression);
          },
          addVariableBinding: function(variableName, variableValue) {
            if (isBlank(this.variableBindings)) {
              this.variableBindings = MapWrapper.create();
            }
            MapWrapper.set(this.variableBindings, variableValue, variableName);
          },
          addEventBinding: function(eventName, expression) {
            if (isBlank(this.eventBindings)) {
              this.eventBindings = MapWrapper.create();
            }
            MapWrapper.set(this.eventBindings, eventName, expression);
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
      Object.defineProperty(CompileElement, "parameters", {get: function() {
          return [[Element]];
        }});
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
      Object.defineProperty(CompileElement.prototype.addDirective, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/compile_element.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/compile_element.js.map