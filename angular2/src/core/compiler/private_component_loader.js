System.register(["./compiler", "./shadow_dom_strategy", "angular2/src/core/events/event_manager", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/core/annotations/annotations", "./private_component_location", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Compiler,
      ShadowDomStrategy,
      EventManager,
      DirectiveMetadataReader,
      Component,
      PrivateComponentLocation,
      Type,
      stringify,
      BaseException,
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
      Component = $__m.Component;
    }, function($__m) {
      PrivateComponentLocation = $__m.PrivateComponentLocation;
    }, function($__m) {
      Type = $__m.Type;
      stringify = $__m.stringify;
      BaseException = $__m.BaseException;
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
            if (!(annotation instanceof Component)) {
              throw new BaseException(("Could not load '" + stringify(type) + "' because it is not a component."));
            }
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