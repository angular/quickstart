System.register(["angular2/di", "angular2/src/core/annotations/template", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var Injectable,
      Template,
      Type,
      stringify,
      isBlank,
      BaseException,
      Map,
      MapWrapper,
      List,
      ListWrapper,
      reflector,
      TemplateResolver;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Template = $__m.Template;
    }, function($__m) {
      Type = $__m.Type;
      stringify = $__m.stringify;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      reflector = $__m.reflector;
    }],
    execute: function() {
      TemplateResolver = $__export("TemplateResolver", (function() {
        var TemplateResolver = function TemplateResolver() {
          this._cache = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(TemplateResolver, {
          resolve: function(component) {
            var template = MapWrapper.get(this._cache, component);
            if (isBlank(template)) {
              template = this._resolve(component);
              MapWrapper.set(this._cache, component, template);
            }
            return template;
          },
          _resolve: function(component) {
            var annotations = reflector.annotations(component);
            for (var i = 0; i < annotations.length; i++) {
              var annotation = annotations[i];
              if (annotation instanceof Template) {
                return annotation;
              }
            }
            throw new BaseException(("No template found for " + stringify(component)));
          }
        }, {});
      }()));
      Object.defineProperty(TemplateResolver, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(TemplateResolver.prototype.resolve, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(TemplateResolver.prototype._resolve, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/template_resolver.map

//# sourceMappingURL=../../../src/core/compiler/template_resolver.js.map