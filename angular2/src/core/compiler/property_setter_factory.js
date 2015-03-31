System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "./string_utils", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var StringWrapper,
      RegExpWrapper,
      BaseException,
      isPresent,
      isBlank,
      isString,
      stringify,
      ListWrapper,
      StringMapWrapper,
      DOM,
      camelCaseToDashCase,
      dashCaseToCamelCase,
      reflector,
      STYLE_SEPARATOR,
      propertySettersCache,
      innerHTMLSetterCache,
      ATTRIBUTE_PREFIX,
      attributeSettersCache,
      CLASS_PREFIX,
      classSettersCache,
      STYLE_PREFIX,
      styleSettersCache;
  function setterFactory(property) {
    var setterFn,
        styleParts,
        styleSuffix;
    if (StringWrapper.startsWith(property, ATTRIBUTE_PREFIX)) {
      setterFn = attributeSetterFactory(StringWrapper.substring(property, ATTRIBUTE_PREFIX.length));
    } else if (StringWrapper.startsWith(property, CLASS_PREFIX)) {
      setterFn = classSetterFactory(StringWrapper.substring(property, CLASS_PREFIX.length));
    } else if (StringWrapper.startsWith(property, STYLE_PREFIX)) {
      styleParts = property.split(STYLE_SEPARATOR);
      styleSuffix = styleParts.length > 2 ? ListWrapper.get(styleParts, 2) : '';
      setterFn = styleSetterFactory(ListWrapper.get(styleParts, 1), styleSuffix);
    } else if (StringWrapper.equals(property, 'innerHtml')) {
      if (isBlank(innerHTMLSetterCache)) {
        innerHTMLSetterCache = (function(el, value) {
          return DOM.setInnerHTML(el, value);
        });
      }
      setterFn = innerHTMLSetterCache;
    } else {
      property = resolvePropertyName(property);
      setterFn = StringMapWrapper.get(propertySettersCache, property);
      if (isBlank(setterFn)) {
        var propertySetterFn = reflector.setter(property);
        setterFn = function(receiver, value) {
          if (DOM.hasProperty(receiver, property)) {
            return propertySetterFn(receiver, value);
          }
        };
        StringMapWrapper.set(propertySettersCache, property, setterFn);
      }
    }
    return setterFn;
  }
  function _isValidAttributeValue(attrName, value) {
    if (attrName == "role") {
      return isString(value);
    } else {
      return isPresent(value);
    }
  }
  function attributeSetterFactory(attrName) {
    var setterFn = StringMapWrapper.get(attributeSettersCache, attrName);
    var dashCasedAttributeName;
    if (isBlank(setterFn)) {
      dashCasedAttributeName = camelCaseToDashCase(attrName);
      setterFn = function(element, value) {
        if (_isValidAttributeValue(dashCasedAttributeName, value)) {
          DOM.setAttribute(element, dashCasedAttributeName, stringify(value));
        } else {
          if (isPresent(value)) {
            throw new BaseException("Invalid " + dashCasedAttributeName + " attribute, only string values are allowed, got '" + stringify(value) + "'");
          }
          DOM.removeAttribute(element, dashCasedAttributeName);
        }
      };
      StringMapWrapper.set(attributeSettersCache, attrName, setterFn);
    }
    return setterFn;
  }
  function classSetterFactory(className) {
    var setterFn = StringMapWrapper.get(classSettersCache, className);
    var dashCasedClassName;
    if (isBlank(setterFn)) {
      dashCasedClassName = camelCaseToDashCase(className);
      setterFn = function(element, value) {
        if (value) {
          DOM.addClass(element, dashCasedClassName);
        } else {
          DOM.removeClass(element, dashCasedClassName);
        }
      };
      StringMapWrapper.set(classSettersCache, className, setterFn);
    }
    return setterFn;
  }
  function styleSetterFactory(styleName, styleSuffix) {
    var cacheKey = styleName + styleSuffix;
    var setterFn = StringMapWrapper.get(styleSettersCache, cacheKey);
    var dashCasedStyleName;
    if (isBlank(setterFn)) {
      dashCasedStyleName = camelCaseToDashCase(styleName);
      setterFn = function(element, value) {
        var valAsStr;
        if (isPresent(value)) {
          valAsStr = stringify(value);
          DOM.setStyle(element, dashCasedStyleName, valAsStr + styleSuffix);
        } else {
          DOM.removeStyle(element, dashCasedStyleName);
        }
      };
      StringMapWrapper.set(styleSettersCache, cacheKey, setterFn);
    }
    return setterFn;
  }
  function resolvePropertyName(attrName) {
    var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
    return isPresent(mappedPropName) ? mappedPropName : attrName;
  }
  $__export("setterFactory", setterFactory);
  return {
    setters: [function($__m) {
      StringWrapper = $__m.StringWrapper;
      RegExpWrapper = $__m.RegExpWrapper;
      BaseException = $__m.BaseException;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      isString = $__m.isString;
      stringify = $__m.stringify;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      camelCaseToDashCase = $__m.camelCaseToDashCase;
      dashCaseToCamelCase = $__m.dashCaseToCamelCase;
    }, function($__m) {
      reflector = $__m.reflector;
    }],
    execute: function() {
      STYLE_SEPARATOR = '.';
      propertySettersCache = StringMapWrapper.create();
      Object.defineProperty(setterFactory, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      ATTRIBUTE_PREFIX = 'attr.';
      attributeSettersCache = StringMapWrapper.create();
      Object.defineProperty(_isValidAttributeValue, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(attributeSetterFactory, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      CLASS_PREFIX = 'class.';
      classSettersCache = StringMapWrapper.create();
      Object.defineProperty(classSetterFactory, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      STYLE_PREFIX = 'style.';
      styleSettersCache = StringMapWrapper.create();
      Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(resolvePropertyName, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=property_setter_factory.js.map

//# sourceMappingURL=../../../src/core/compiler/property_setter_factory.js.map