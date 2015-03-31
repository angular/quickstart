System.register(["angular2/src/facade/lang", "angular2/src/core/annotations/annotations"], function($__export) {
  "use strict";
  var Type,
      Directive,
      DirectiveMetadata;
  return {
    setters: [function($__m) {
      Type = $__m.Type;
    }, function($__m) {
      Directive = $__m.Directive;
    }],
    execute: function() {
      DirectiveMetadata = $__export("DirectiveMetadata", (function() {
        var DirectiveMetadata = function DirectiveMetadata(type, annotation) {
          this.annotation = annotation;
          this.type = type;
        };
        return ($traceurRuntime.createClass)(DirectiveMetadata, {}, {});
      }()));
      Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
          return [[Type], [Directive]];
        }});
    }
  };
});
//# sourceMappingURL=directive_metadata.js.map

//# sourceMappingURL=../../../src/core/compiler/directive_metadata.js.map