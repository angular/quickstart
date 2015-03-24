System.register(["./compiler", "./shadow_dom_strategy", "angular2/src/core/events/event_manager", "angular2/src/core/compiler/directive_metadata_reader", "./private_component_location", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Compiler,
      ShadowDomStrategy,
      EventManager,
      DirectiveMetadataReader,
      PrivateComponentLocation,
      Type,
      PrivateComponentLoader;
  return {
    setters: [function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      EventManager = $__m.EventManager;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      PrivateComponentLocation = $__m.PrivateComponentLocation;
    }, function($__m) {
      Type = $__m.Type;
    }],
    execute: function() {
      PrivateComponentLoader = $__export("PrivateComponentLoader", (function() {
        var PrivateComponentLoader = function PrivateComponentLoader(compiler, shadowDomStrategy, eventManager, directiveMetadataReader) {
          this.compiler = compiler;
          this.shadowDomStrategy = shadowDomStrategy;
          this.eventManager = eventManager;
          this.directiveMetadataReader = directiveMetadataReader;
        };
        return ($traceurRuntime.createClass)(PrivateComponentLoader, {load: function(type, location) {
            var $__0 = this;
            var annotation = this.directiveMetadataReader.read(type).annotation;
            return this.compiler.compile(type).then((function(componentProtoView) {
              location.createComponent(type, annotation, componentProtoView, $__0.eventManager, $__0.shadowDomStrategy);
            }));
          }}, {});
      }()));
      Object.defineProperty(PrivateComponentLoader, "parameters", {get: function() {
          return [[Compiler], [ShadowDomStrategy], [EventManager], [DirectiveMetadataReader]];
        }});
      Object.defineProperty(PrivateComponentLoader.prototype.load, "parameters", {get: function() {
          return [[Type], [PrivateComponentLocation]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/private_component_loader.map

//# sourceMappingURL=../../../src/core/compiler/private_component_loader.js.map