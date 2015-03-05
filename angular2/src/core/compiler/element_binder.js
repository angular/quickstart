System.register(["./element_injector", "./directive_metadata", "angular2/src/facade/collection", "./view"], function($__export) {
  "use strict";
  var ProtoElementInjector,
      DirectiveMetadata,
      List,
      Map,
      ProtoView,
      ElementBinder;
  return {
    setters: [function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
    }, function($__m) {
      ProtoView = $__m.ProtoView;
    }],
    execute: function() {
      ElementBinder = $__export("ElementBinder", (function() {
        var ElementBinder = function ElementBinder(protoElementInjector, componentDirective, viewportDirective) {
          this.protoElementInjector = protoElementInjector;
          this.componentDirective = componentDirective;
          this.viewportDirective = viewportDirective;
          this.events = null;
          this.textNodeIndices = null;
          this.hasElementPropertyBindings = false;
          this.nestedProtoView = null;
        };
        return ($traceurRuntime.createClass)(ElementBinder, {}, {});
      }()));
      Object.defineProperty(ElementBinder, "parameters", {get: function() {
          return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/element_binder.map

//# sourceMappingURL=../../../src/core/compiler/element_binder.js.map