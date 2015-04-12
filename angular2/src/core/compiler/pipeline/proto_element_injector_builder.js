System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "../element_injector", "./compile_step", "./compile_element", "./compile_control", "../directive_metadata"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      ListWrapper,
      MapWrapper,
      ProtoElementInjector,
      ComponentKeyMetaData,
      DirectiveBinding,
      CompileStep,
      CompileElement,
      CompileControl,
      DirectiveMetadata,
      ProtoElementInjectorBuilder;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
      ComponentKeyMetaData = $__m.ComponentKeyMetaData;
      DirectiveBinding = $__m.DirectiveBinding;
    }, function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }],
    execute: function() {
      ProtoElementInjectorBuilder = $__export("ProtoElementInjectorBuilder", (function($__super) {
        var ProtoElementInjectorBuilder = function ProtoElementInjectorBuilder() {
          $traceurRuntime.superConstructor(ProtoElementInjectorBuilder).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)(ProtoElementInjectorBuilder, {
          internalCreateProtoElementInjector: function(parent, index, directives, firstBindingIsComponent, distance) {
            return new ProtoElementInjector(parent, index, directives, firstBindingIsComponent, distance);
          },
          process: function(parent, current, control) {
            var distanceToParentInjector = this._getDistanceToParentInjector(parent, current);
            var parentProtoElementInjector = this._getParentProtoElementInjector(parent, current);
            var injectorBindings = ListWrapper.map(current.getAllDirectives(), this._createBinding);
            if (injectorBindings.length > 0 || isPresent(current.variableBindings)) {
              var protoView = current.inheritedProtoView;
              var hasComponent = isPresent(current.componentDirective);
              current.inheritedProtoElementInjector = this.internalCreateProtoElementInjector(parentProtoElementInjector, protoView.elementBinders.length, injectorBindings, hasComponent, distanceToParentInjector);
              current.distanceToParentInjector = 0;
              if (isPresent(current.variableBindings) && !isPresent(current.viewportDirective)) {
                current.inheritedProtoElementInjector.exportComponent = hasComponent;
                current.inheritedProtoElementInjector.exportElement = !hasComponent;
                var exportImplicitName = MapWrapper.get(current.variableBindings, '\$implicit');
                if (isPresent(exportImplicitName)) {
                  current.inheritedProtoElementInjector.exportImplicitName = exportImplicitName;
                }
              }
              current.inheritedProtoElementInjector.attributes = current.attributes;
            } else {
              current.inheritedProtoElementInjector = parentProtoElementInjector;
              current.distanceToParentInjector = distanceToParentInjector;
            }
          },
          _getDistanceToParentInjector: function(parent, current) {
            return isPresent(parent) ? parent.distanceToParentInjector + 1 : 0;
          },
          _getParentProtoElementInjector: function(parent, current) {
            if (isPresent(parent) && !current.isViewRoot) {
              return parent.inheritedProtoElementInjector;
            }
            return null;
          },
          _createBinding: function(d) {
            return DirectiveBinding.createFromType(d.type, d.annotation);
          }
        }, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ProtoElementInjectorBuilder.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      Object.defineProperty(ProtoElementInjectorBuilder.prototype._createBinding, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
    }
  };
});
//# sourceMappingURL=proto_element_injector_builder.js.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/proto_element_injector_builder.js.map