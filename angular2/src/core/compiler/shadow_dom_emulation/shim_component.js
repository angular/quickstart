System.register(["angular2/src/facade/dom", "angular2/src/facade/collection", "angular2/src/facade/lang", "./shadow_css"], function($__export) {
  "use strict";
  var Element,
      DOM,
      Map,
      MapWrapper,
      int,
      isBlank,
      Type,
      ShadowCss,
      ShimComponent,
      ShimNativeComponent,
      _componentCache,
      _componentId,
      ShimEmulatedComponent;
  function resetShimComponentCache() {
    MapWrapper.clear(_componentCache);
    _componentId = 0;
  }
  $__export("resetShimComponentCache", resetShimComponentCache);
  return {
    setters: [function($__m) {
      Element = $__m.Element;
      DOM = $__m.DOM;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      int = $__m.int;
      isBlank = $__m.isBlank;
      Type = $__m.Type;
    }, function($__m) {
      ShadowCss = $__m.ShadowCss;
    }],
    execute: function() {
      ShimComponent = $__export("ShimComponent", (function() {
        var ShimComponent = function ShimComponent(component) {};
        return ($traceurRuntime.createClass)(ShimComponent, {
          shimCssText: function(cssText) {
            return null;
          },
          shimContentElement: function(element) {},
          shimHostElement: function(element) {}
        }, {});
      }()));
      Object.defineProperty(ShimComponent, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(ShimComponent.prototype.shimCssText, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ShimComponent.prototype.shimContentElement, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(ShimComponent.prototype.shimHostElement, "parameters", {get: function() {
          return [[Element]];
        }});
      ShimNativeComponent = $__export("ShimNativeComponent", (function($__super) {
        var ShimNativeComponent = function ShimNativeComponent(component) {
          $traceurRuntime.superConstructor(ShimNativeComponent).call(this, component);
        };
        return ($traceurRuntime.createClass)(ShimNativeComponent, {
          shimCssText: function(cssText) {
            return cssText;
          },
          shimContentElement: function(element) {},
          shimHostElement: function(element) {}
        }, {}, $__super);
      }(ShimComponent)));
      Object.defineProperty(ShimNativeComponent, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(ShimNativeComponent.prototype.shimCssText, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ShimNativeComponent.prototype.shimContentElement, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(ShimNativeComponent.prototype.shimHostElement, "parameters", {get: function() {
          return [[Element]];
        }});
      _componentCache = MapWrapper.create();
      _componentId = 0;
      ShimEmulatedComponent = $__export("ShimEmulatedComponent", (function($__super) {
        var ShimEmulatedComponent = function ShimEmulatedComponent(component) {
          $traceurRuntime.superConstructor(ShimEmulatedComponent).call(this, component);
          var componentId = MapWrapper.get(_componentCache, component);
          if (isBlank(componentId)) {
            componentId = _componentId++;
            MapWrapper.set(_componentCache, component, componentId);
          }
          this._cmpId = componentId;
        };
        return ($traceurRuntime.createClass)(ShimEmulatedComponent, {
          shimCssText: function(cssText) {
            var shadowCss = new ShadowCss();
            return shadowCss.shimCssText(cssText, this._getContentAttribute(), this._getHostAttribute());
          },
          shimContentElement: function(element) {
            DOM.setAttribute(element, this._getContentAttribute(), '');
          },
          shimHostElement: function(element) {
            DOM.setAttribute(element, this._getHostAttribute(), '');
          },
          _getHostAttribute: function() {
            return ("_nghost-" + this._cmpId);
          },
          _getContentAttribute: function() {
            return ("_ngcontent-" + this._cmpId);
          }
        }, {}, $__super);
      }(ShimComponent)));
      Object.defineProperty(ShimEmulatedComponent, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(ShimEmulatedComponent.prototype.shimCssText, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ShimEmulatedComponent.prototype.shimContentElement, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(ShimEmulatedComponent.prototype.shimHostElement, "parameters", {get: function() {
          return [[Element]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/shadow_dom_emulation/shim_component.map

//# sourceMappingURL=../../../../src/core/compiler/shadow_dom_emulation/shim_component.js.map