System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/reflection/reflection", "angular2/change_detection", "../directive_metadata", "./compile_step", "./compile_element", "./compile_control", "../string_utils", "../property_setter_factory"], function($__export) {
  "use strict";
  var int,
      isPresent,
      isBlank,
      ListWrapper,
      List,
      MapWrapper,
      StringMapWrapper,
      reflector,
      Parser,
      ProtoChangeDetector,
      DirectiveMetadata,
      CompileStep,
      CompileElement,
      CompileControl,
      dashCaseToCamelCase,
      setterFactory,
      ElementBinderBuilder;
  return {
    setters: [function($__m) {
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      Parser = $__m.Parser;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }, function($__m) {
      dashCaseToCamelCase = $__m.dashCaseToCamelCase;
    }, function($__m) {
      setterFactory = $__m.setterFactory;
    }],
    execute: function() {
      ElementBinderBuilder = $__export("ElementBinderBuilder", (function($__super) {
        var ElementBinderBuilder = function ElementBinderBuilder(parser) {
          $traceurRuntime.superConstructor(ElementBinderBuilder).call(this);
          this._parser = parser;
        };
        return ($traceurRuntime.createClass)(ElementBinderBuilder, {
          process: function(parent, current, control) {
            var elementBinder = null;
            var parentElementBinder = null;
            var distanceToParentBinder = this._getDistanceToParentBinder(parent, current);
            if (isPresent(parent)) {
              parentElementBinder = parent.inheritedElementBinder;
            }
            if (current.hasBindings) {
              var protoView = current.inheritedProtoView;
              var protoInjectorWasBuilt = isBlank(parent) ? true : current.inheritedProtoElementInjector !== parent.inheritedProtoElementInjector;
              var currentProtoElementInjector = protoInjectorWasBuilt ? current.inheritedProtoElementInjector : null;
              elementBinder = protoView.bindElement(parentElementBinder, distanceToParentBinder, currentProtoElementInjector, current.componentDirective, current.viewportDirective);
              current.distanceToParentBinder = 0;
              if (isPresent(current.textNodeBindings)) {
                this._bindTextNodes(protoView, current);
              }
              if (isPresent(current.propertyBindings)) {
                this._bindElementProperties(protoView, current);
              }
              if (isPresent(current.eventBindings)) {
                this._bindEvents(protoView, current);
              }
              if (isPresent(current.contentTagSelector)) {
                elementBinder.contentTagSelector = current.contentTagSelector;
              }
              var directives = current.getAllDirectives();
              this._bindDirectiveProperties(directives, current);
              this._bindDirectiveEvents(directives, current);
            } else if (isPresent(parent)) {
              elementBinder = parentElementBinder;
              current.distanceToParentBinder = distanceToParentBinder;
            }
            current.inheritedElementBinder = elementBinder;
          },
          _getDistanceToParentBinder: function(parent, current) {
            return isPresent(parent) ? parent.distanceToParentBinder + 1 : 0;
          },
          _bindTextNodes: function(protoView, compileElement) {
            MapWrapper.forEach(compileElement.textNodeBindings, (function(expression, indexInParent) {
              protoView.bindTextNode(indexInParent, expression);
            }));
          },
          _bindElementProperties: function(protoView, compileElement) {
            MapWrapper.forEach(compileElement.propertyBindings, (function(expression, property) {
              var setterFn = setterFactory(property);
              protoView.bindElementProperty(expression.ast, property, setterFn);
            }));
          },
          _bindEvents: function(protoView, compileElement) {
            MapWrapper.forEach(compileElement.eventBindings, (function(expression, eventName) {
              protoView.bindEvent(eventName, expression);
            }));
          },
          _bindDirectiveEvents: function(directives, compileElement) {
            var $__0 = this;
            for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
              var directive = directives[directiveIndex];
              var annotation = directive.annotation;
              if (isBlank(annotation.events))
                continue;
              var protoView = compileElement.inheritedProtoView;
              StringMapWrapper.forEach(annotation.events, (function(action, eventName) {
                var expression = $__0._parser.parseAction(action, compileElement.elementDescription);
                protoView.bindEvent(eventName, expression, directiveIndex);
              }));
            }
          },
          _bindDirectiveProperties: function(directives, compileElement) {
            var $__0 = this;
            var protoView = compileElement.inheritedProtoView;
            for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
              var directive = ListWrapper.get(directives, directiveIndex);
              var annotation = directive.annotation;
              if (isBlank(annotation.bind))
                continue;
              StringMapWrapper.forEach(annotation.bind, (function(bindConfig, dirProp) {
                var pipes = $__0._splitBindConfig(bindConfig);
                var elProp = ListWrapper.removeAt(pipes, 0);
                var bindingAst = isPresent(compileElement.propertyBindings) ? MapWrapper.get(compileElement.propertyBindings, dashCaseToCamelCase(elProp)) : null;
                if (isBlank(bindingAst)) {
                  var attributeValue = MapWrapper.get(compileElement.attrs(), elProp);
                  if (isPresent(attributeValue)) {
                    bindingAst = $__0._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
                  }
                }
                if (isPresent(bindingAst)) {
                  var fullExpAstWithBindPipes = $__0._parser.addPipes(bindingAst, pipes);
                  protoView.bindDirectiveProperty(directiveIndex, fullExpAstWithBindPipes, dirProp, reflector.setter(dashCaseToCamelCase(dirProp)));
                }
              }));
            }
          },
          _splitBindConfig: function(bindConfig) {
            return ListWrapper.map(bindConfig.split('|'), (function(s) {
              return s.trim();
            }));
          }
        }, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ElementBinderBuilder, "parameters", {get: function() {
          return [[Parser]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveEvents, "parameters", {get: function() {
          return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveProperties, "parameters", {get: function() {
          return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype._splitBindConfig, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/element_binder_builder.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/element_binder_builder.js.map