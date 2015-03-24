System.register(["angular2/di", "angular2/src/facade/lang", "../annotations/annotations", "./directive_metadata", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var Injectable,
      Type,
      isPresent,
      BaseException,
      stringify,
      Directive,
      DirectiveMetadata,
      reflector,
      DirectiveMetadataReader;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
    }, function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      reflector = $__m.reflector;
    }],
    execute: function() {
      DirectiveMetadataReader = $__export("DirectiveMetadataReader", (function() {
        var DirectiveMetadataReader = function DirectiveMetadataReader() {};
        return ($traceurRuntime.createClass)(DirectiveMetadataReader, {read: function(type) {
            var annotations = reflector.annotations(type);
            if (isPresent(annotations)) {
              for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[i];
                if (annotation instanceof Directive) {
                  return new DirectiveMetadata(type, annotation);
                }
              }
            }
            throw new BaseException(("No Directive annotation found on " + stringify(type)));
          }}, {});
      }()));
      Object.defineProperty(DirectiveMetadataReader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DirectiveMetadataReader.prototype.read, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/directive_metadata_reader.map

//# sourceMappingURL=../../../src/core/compiler/directive_metadata_reader.js.map