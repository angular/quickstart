System.register(["angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/src/reflection/reflection", "angular2/change_detection", "../directive_metadata", "./compile_step", "./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var int,
      isPresent,
      isBlank,
      Type,
      BaseException,
      StringWrapper,
      RegExpWrapper,
      isString,
      stringify,
      DOM,
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
      DOT_REGEXP,
      ARIA_PREFIX,
      ariaSettersCache,
      CLASS_ATTR,
      CLASS_PREFIX,
      classSettersCache,
      STYLE_ATTR,
      STYLE_PREFIX,
      styleSettersCache,
      ROLE_ATTR,
      ElementBinderBuilder;
  function ariaSetterFactory(attrName) {
    var setterFn = StringMapWrapper.get(ariaSettersCache, attrName);
    if (isBlank(setterFn)) {
      setterFn = function(element, value) {
        if (isPresent(value)) {
          DOM.setAttribute(element, attrName, stringify(value));
        } else {
          DOM.removeAttribute(element, attrName);
        }
      };
      StringMapWrapper.set(ariaSettersCache, attrName, setterFn);
    }
    return setterFn;
  }
  function classSetterFactory(className) {
    var setterFn = StringMapWrapper.get(classSettersCache, className);
    if (isBlank(setterFn)) {
      setterFn = function(element, value) {
        if (value) {
          DOM.addClass(element, className);
        } else {
          DOM.removeClass(element, className);
        }
      };
      StringMapWrapper.set(classSettersCache, className, setterFn);
    }
    return setterFn;
  }
  function styleSetterFactory(styleName, stylesuffix) {
    var cacheKey = styleName + stylesuffix;
    var setterFn = StringMapWrapper.get(styleSettersCache, cacheKey);
    if (isBlank(setterFn)) {
      setterFn = function(element, value) {
        var valAsStr;
        if (isPresent(value)) {
          valAsStr = stringify(value);
          DOM.setStyle(element, styleName, valAsStr + stylesuffix);
        } else {
          DOM.removeStyle(element, styleName);
        }
      };
      StringMapWrapper.set(classSettersCache, cacheKey, setterFn);
    }
    return setterFn;
  }
  function roleSetter(element, value) {
    if (isString(value)) {
      DOM.setAttribute(element, ROLE_ATTR, value);
    } else {
      DOM.removeAttribute(element, ROLE_ATTR);
      if (isPresent(value)) {
        throw new BaseException("Invalid role attribute, only string values are allowed, got '" + stringify(value) + "'");
      }
    }
  }
  function isSpecialProperty(propName) {
    return StringWrapper.startsWith(propName, ARIA_PREFIX) || StringWrapper.startsWith(propName, CLASS_PREFIX) || StringWrapper.startsWith(propName, STYLE_PREFIX) || StringMapWrapper.contains(DOM.attrToPropMap, propName);
  }
  $__export("isSpecialProperty", isSpecialProperty);
  return {
    setters: [function($__m) {
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      Type = $__m.Type;
      BaseException = $__m.BaseException;
      StringWrapper = $__m.StringWrapper;
      RegExpWrapper = $__m.RegExpWrapper;
      isString = $__m.isString;
      stringify = $__m.stringify;
    }, function($__m) {
      DOM = $__m.DOM;
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
    }],
    execute: function() {
      DOT_REGEXP = RegExpWrapper.create('\\.');
      ARIA_PREFIX = 'aria-';
      ariaSettersCache = StringMapWrapper.create();
      Object.defineProperty(ariaSetterFactory, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      CLASS_ATTR = 'class';
      CLASS_PREFIX = 'class.';
      classSettersCache = StringMapWrapper.create();
      Object.defineProperty(classSetterFactory, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      STYLE_ATTR = 'style';
      STYLE_PREFIX = 'style.';
      styleSettersCache = StringMapWrapper.create();
      Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      ROLE_ATTR = 'role';
      Object.defineProperty(isSpecialProperty, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      ElementBinderBuilder = $__export("ElementBinderBuilder", (function($__super) {
        var ElementBinderBuilder = function ElementBinderBuilder(parser) {
          $traceurRuntime.superConstructor(ElementBinderBuilder).call(this);
          this._parser = parser;
        };
        return ($traceurRuntime.createClass)(ElementBinderBuilder, {
          process: function(parent, current, control) {
            var elementBinder = null;
            if (current.hasBindings) {
              var protoView = current.inheritedProtoView;
              var protoInjectorWasBuilt = isBlank(parent) ? true : current.inheritedProtoElementInjector !== parent.inheritedProtoElementInjector;
              var currentProtoElementInjector = protoInjectorWasBuilt ? current.inheritedProtoElementInjector : null;
              elementBinder = protoView.bindElement(currentProtoElementInjector, current.componentDirective, current.viewportDirective);
              if (isPresent(current.textNodeBindings)) {
                this._bindTextNodes(protoView, current);
              }
              if (isPresent(current.propertyBindings)) {
                this._bindElementProperties(protoView, current);
              }
              if (isPresent(current.eventBindings)) {
                this._bindEvents(protoView, current);
              }
              this._bindDirectiveProperties(current.getAllDirectives(), current);
            } else if (isPresent(parent)) {
              elementBinder = parent.inheritedElementBinder;
            }
            current.inheritedElementBinder = elementBinder;
          },
          _bindTextNodes: function(protoView, compileElement) {
            MapWrapper.forEach(compileElement.textNodeBindings, (function(expression, indexInParent) {
              protoView.bindTextNode(indexInParent, expression);
            }));
          },
          _bindElementProperties: function(protoView, compileElement) {
            var $__0 = this;
            MapWrapper.forEach(compileElement.propertyBindings, (function(expression, property) {
              var setterFn,
                  styleParts,
                  styleSuffix;
              if (StringWrapper.startsWith(property, ARIA_PREFIX)) {
                setterFn = ariaSetterFactory(property);
              } else if (StringWrapper.equals(property, ROLE_ATTR)) {
                setterFn = roleSetter;
              } else if (StringWrapper.startsWith(property, CLASS_PREFIX)) {
                setterFn = classSetterFactory(StringWrapper.substring(property, CLASS_PREFIX.length));
              } else if (StringWrapper.startsWith(property, STYLE_PREFIX)) {
                styleParts = StringWrapper.split(property, DOT_REGEXP);
                styleSuffix = styleParts.length > 2 ? ListWrapper.get(styleParts, 2) : '';
                setterFn = styleSetterFactory(ListWrapper.get(styleParts, 1), styleSuffix);
              } else {
                property = $__0._resolvePropertyName(property);
                if (DOM.hasProperty(compileElement.element, property) || StringWrapper.equals(property, 'innerHtml')) {
                  setterFn = reflector.setter(property);
                }
              }
              if (isPresent(setterFn)) {
                protoView.bindElementProperty(expression.ast, property, setterFn);
              }
            }));
          },
          _bindEvents: function(protoView, compileElement) {
            MapWrapper.forEach(compileElement.eventBindings, (function(expression, eventName) {
              protoView.bindEvent(eventName, expression);
            }));
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
                var bindConfigParts = $__0._splitBindConfig(bindConfig);
                var elProp = bindConfigParts[0];
                var pipes = ListWrapper.slice(bindConfigParts, 1, bindConfigParts.length);
                var bindingAst = isPresent(compileElement.propertyBindings) ? MapWrapper.get(compileElement.propertyBindings, elProp) : null;
                if (isBlank(bindingAst)) {
                  var attributeValue = MapWrapper.get(compileElement.attrs(), elProp);
                  if (isPresent(attributeValue)) {
                    bindingAst = $__0._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
                  }
                }
                if (isPresent(bindingAst)) {
                  var fullExpAstWithBindPipes = $__0._parser.addPipes(bindingAst, pipes);
                  protoView.bindDirectiveProperty(directiveIndex, fullExpAstWithBindPipes, dirProp, reflector.setter(dirProp));
                }
              }));
            }
          },
          _splitBindConfig: function(bindConfig) {
            var parts = StringWrapper.split(bindConfig, RegExpWrapper.create("\\|"));
            return ListWrapper.map(parts, (function(s) {
              return s.trim();
            }));
          },
          _resolvePropertyName: function(attrName) {
            var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
            return isPresent(mappedPropName) ? mappedPropName : attrName;
          }
        }, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ElementBinderBuilder, "parameters", {get: function() {
          return [[Parser]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveProperties, "parameters", {get: function() {
          return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype._splitBindConfig, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype._resolvePropertyName, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/element_binder_builder.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/element_binder_builder.js.map