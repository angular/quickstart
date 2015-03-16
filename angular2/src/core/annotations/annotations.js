System.register(["angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var ABSTRACT,
      CONST,
      normalizeBlank,
      isPresent,
      ListWrapper,
      List,
      Directive,
      Component,
      Decorator,
      Viewport,
      onDestroy,
      onChange;
  return {
    setters: [function($__m) {
      ABSTRACT = $__m.ABSTRACT;
      CONST = $__m.CONST;
      normalizeBlank = $__m.normalizeBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
    }],
    execute: function() {
      Directive = $__export("Directive", (function() {
        var Directive = function Directive() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              selector = $__1.selector,
              bind = $__1.bind,
              events = $__1.events,
              implementsTypes = $__1.implementsTypes,
              lifecycle = $__1.lifecycle;
          this.selector = selector;
          this.implementsTypes = implementsTypes;
          this.bind = bind;
          this.events = events;
          this.lifecycle = lifecycle;
        };
        return ($traceurRuntime.createClass)(Directive, {hasLifecycleHook: function(hook) {
            return isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false;
          }}, {});
      }()));
      Object.defineProperty(Directive, "annotations", {get: function() {
          return [new ABSTRACT(), new CONST()];
        }});
      Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Component = $__export("Component", (function($__super) {
        var Component = function Component() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              selector = $__1.selector,
              bind = $__1.bind,
              events = $__1.events,
              services = $__1.services,
              implementsTypes = $__1.implementsTypes,
              lifecycle = $__1.lifecycle;
          $traceurRuntime.superConstructor(Component).call(this, {
            selector: selector,
            bind: bind,
            events: events,
            implementsTypes: implementsTypes,
            lifecycle: lifecycle
          });
          this.services = services;
        };
        return ($traceurRuntime.createClass)(Component, {}, {}, $__super);
      }(Directive)));
      Object.defineProperty(Component, "annotations", {get: function() {
          return [new CONST()];
        }});
      Decorator = $__export("Decorator", (function($__super) {
        var Decorator = function Decorator() {
          var $__2;
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              selector = $__1.selector,
              bind = $__1.bind,
              events = $__1.events,
              implementsTypes = $__1.implementsTypes,
              lifecycle = $__1.lifecycle,
              compileChildren = ($__2 = $__1.compileChildren) === void 0 ? true : $__2;
          this.compileChildren = compileChildren;
          $traceurRuntime.superConstructor(Decorator).call(this, {
            selector: selector,
            bind: bind,
            events: events,
            implementsTypes: implementsTypes,
            lifecycle: lifecycle
          });
        };
        return ($traceurRuntime.createClass)(Decorator, {}, {}, $__super);
      }(Directive)));
      Object.defineProperty(Decorator, "annotations", {get: function() {
          return [new CONST()];
        }});
      Viewport = $__export("Viewport", (function($__super) {
        var Viewport = function Viewport() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              selector = $__1.selector,
              bind = $__1.bind,
              events = $__1.events,
              implementsTypes = $__1.implementsTypes,
              lifecycle = $__1.lifecycle;
          $traceurRuntime.superConstructor(Viewport).call(this, {
            selector: selector,
            bind: bind,
            events: events,
            implementsTypes: implementsTypes,
            lifecycle: lifecycle
          });
        };
        return ($traceurRuntime.createClass)(Viewport, {}, {}, $__super);
      }(Directive)));
      Object.defineProperty(Viewport, "annotations", {get: function() {
          return [new CONST()];
        }});
      onDestroy = $__export("onDestroy", "onDestroy");
      onChange = $__export("onChange", "onChange");
    }
  };
});

//# sourceMappingURL=src/core/annotations/annotations.map

//# sourceMappingURL=../../../src/core/annotations/annotations.js.map