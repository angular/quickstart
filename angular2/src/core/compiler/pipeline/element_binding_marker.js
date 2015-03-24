System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "./compile_step", "./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var isPresent,
      MapWrapper,
      DOM,
      CompileStep,
      CompileElement,
      CompileControl,
      NG_BINDING_CLASS,
      ElementBindingMarker;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }],
    execute: function() {
      NG_BINDING_CLASS = 'ng-binding';
      ElementBindingMarker = $__export("ElementBindingMarker", (function($__super) {
        var ElementBindingMarker = function ElementBindingMarker() {
          $traceurRuntime.superConstructor(ElementBindingMarker).apply(this, arguments);
        };
        return ($traceurRuntime.createClass)(ElementBindingMarker, {process: function(parent, current, control) {
            if (current.ignoreBindings) {
              return ;
            }
            var hasBindings = (isPresent(current.textNodeBindings) && MapWrapper.size(current.textNodeBindings) > 0) || (isPresent(current.propertyBindings) && MapWrapper.size(current.propertyBindings) > 0) || (isPresent(current.variableBindings) && MapWrapper.size(current.variableBindings) > 0) || (isPresent(current.eventBindings) && MapWrapper.size(current.eventBindings) > 0) || (isPresent(current.decoratorDirectives) && current.decoratorDirectives.length > 0) || isPresent(current.viewportDirective) || isPresent(current.componentDirective) || isPresent(current.contentTagSelector);
            if (hasBindings) {
              var element = current.element;
              DOM.addClass(element, NG_BINDING_CLASS);
              current.hasBindings = true;
            }
          }}, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ElementBindingMarker.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/element_binding_marker.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/element_binding_marker.js.map