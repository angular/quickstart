System.register(["angular2/src/facade/lang", "angular2/di"], function($__export) {
  "use strict";
  var CONST,
      DependencyAnnotation,
      EventEmitter,
      PropertySetter,
      Attribute;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
    }, function($__m) {
      DependencyAnnotation = $__m.DependencyAnnotation;
    }],
    execute: function() {
      EventEmitter = $__export("EventEmitter", (function($__super) {
        var EventEmitter = function EventEmitter(eventName) {
          $traceurRuntime.superConstructor(EventEmitter).call(this);
          this.eventName = eventName;
        };
        return ($traceurRuntime.createClass)(EventEmitter, {}, {}, $__super);
      }(DependencyAnnotation)));
      Object.defineProperty(EventEmitter, "annotations", {get: function() {
          return [new CONST()];
        }});
      PropertySetter = $__export("PropertySetter", (function($__super) {
        var PropertySetter = function PropertySetter(propName) {
          $traceurRuntime.superConstructor(PropertySetter).call(this);
          this.propName = propName;
        };
        return ($traceurRuntime.createClass)(PropertySetter, {}, {}, $__super);
      }(DependencyAnnotation)));
      Object.defineProperty(PropertySetter, "annotations", {get: function() {
          return [new CONST()];
        }});
      Attribute = $__export("Attribute", (function($__super) {
        var Attribute = function Attribute(attributeName) {
          $traceurRuntime.superConstructor(Attribute).call(this);
          this.attributeName = attributeName;
        };
        return ($traceurRuntime.createClass)(Attribute, {}, {}, $__super);
      }(DependencyAnnotation)));
      Object.defineProperty(Attribute, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});

//# sourceMappingURL=src/core/annotations/di.map

//# sourceMappingURL=../../../src/core/annotations/di.js.map