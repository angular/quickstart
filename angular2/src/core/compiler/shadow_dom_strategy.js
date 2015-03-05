System.register(["angular2/src/facade/lang", "angular2/src/facade/dom", "angular2/src/facade/collection", "./view", "./shadow_dom_emulation/content_tag", "./shadow_dom_emulation/light_dom", "./shadow_dom_emulation/shim_component"], function($__export) {
  "use strict";
  var Type,
      isBlank,
      isPresent,
      DOM,
      Element,
      List,
      ListWrapper,
      View,
      Content,
      LightDom,
      ShimComponent,
      ShimEmulatedComponent,
      ShimNativeComponent,
      ShadowDomStrategy,
      EmulatedShadowDomStrategy,
      NativeShadowDomStrategy;
  function moveViewNodesIntoParent(parent, view) {
    for (var i = 0; i < view.nodes.length; ++i) {
      DOM.appendChild(parent, view.nodes[i]);
    }
  }
  return {
    setters: [function($__m) {
      Type = $__m.Type;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
      Element = $__m.Element;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      View = $__m.View;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      LightDom = $__m.LightDom;
    }, function($__m) {
      ShimComponent = $__m.ShimComponent;
      ShimEmulatedComponent = $__m.ShimEmulatedComponent;
      ShimNativeComponent = $__m.ShimNativeComponent;
    }],
    execute: function() {
      ShadowDomStrategy = $__export("ShadowDomStrategy", (function() {
        var ShadowDomStrategy = function ShadowDomStrategy() {};
        return ($traceurRuntime.createClass)(ShadowDomStrategy, {
          attachTemplate: function(el, view) {},
          constructLightDom: function(lightDomView, shadowDomView, el) {},
          polyfillDirectives: function() {
            return null;
          },
          extractStyles: function() {
            return false;
          },
          getShimComponent: function(component) {
            return null;
          }
        }, {});
      }()));
      Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[Element], [View]];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[View], [View], [Element]];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.getShimComponent, "parameters", {get: function() {
          return [[Type]];
        }});
      EmulatedShadowDomStrategy = $__export("EmulatedShadowDomStrategy", (function($__super) {
        var EmulatedShadowDomStrategy = function EmulatedShadowDomStrategy() {
          $traceurRuntime.superConstructor(EmulatedShadowDomStrategy).call(this);
        };
        return ($traceurRuntime.createClass)(EmulatedShadowDomStrategy, {
          attachTemplate: function(el, view) {
            DOM.clearNodes(el);
            moveViewNodesIntoParent(el, view);
          },
          constructLightDom: function(lightDomView, shadowDomView, el) {
            return new LightDom(lightDomView, shadowDomView, el);
          },
          polyfillDirectives: function() {
            return [Content];
          },
          extractStyles: function() {
            return true;
          },
          getShimComponent: function(component) {
            return new ShimEmulatedComponent(component);
          }
        }, {}, $__super);
      }(ShadowDomStrategy)));
      Object.defineProperty(EmulatedShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[Element], [View]];
        }});
      Object.defineProperty(EmulatedShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[View], [View], [Element]];
        }});
      Object.defineProperty(EmulatedShadowDomStrategy.prototype.getShimComponent, "parameters", {get: function() {
          return [[Type]];
        }});
      NativeShadowDomStrategy = $__export("NativeShadowDomStrategy", (function($__super) {
        var NativeShadowDomStrategy = function NativeShadowDomStrategy() {
          $traceurRuntime.superConstructor(NativeShadowDomStrategy).call(this);
        };
        return ($traceurRuntime.createClass)(NativeShadowDomStrategy, {
          attachTemplate: function(el, view) {
            moveViewNodesIntoParent(el.createShadowRoot(), view);
          },
          constructLightDom: function(lightDomView, shadowDomView, el) {
            return null;
          },
          polyfillDirectives: function() {
            return [];
          },
          extractStyles: function() {
            return false;
          },
          getShimComponent: function(component) {
            return new ShimNativeComponent(component);
          }
        }, {}, $__super);
      }(ShadowDomStrategy)));
      Object.defineProperty(NativeShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[Element], [View]];
        }});
      Object.defineProperty(NativeShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[View], [View], [Element]];
        }});
      Object.defineProperty(NativeShadowDomStrategy.prototype.getShimComponent, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/shadow_dom_strategy.map

//# sourceMappingURL=../../../src/core/compiler/shadow_dom_strategy.js.map