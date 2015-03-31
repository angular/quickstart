System.register(["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/core/annotations/template", "angular2/src/core/compiler/template_resolver"], function($__export) {
  "use strict";
  var Map,
      MapWrapper,
      ListWrapper,
      Type,
      isPresent,
      Template,
      TemplateResolver,
      MockTemplateResolver;
  return {
    setters: [function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Template = $__m.Template;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }],
    execute: function() {
      MockTemplateResolver = $__export("MockTemplateResolver", (function($__super) {
        var MockTemplateResolver = function MockTemplateResolver() {
          $traceurRuntime.superConstructor(MockTemplateResolver).call(this);
          this._cmpTemplates = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(MockTemplateResolver, {
          setTemplate: function(component, template) {
            MapWrapper.set(this._cmpTemplates, component, template);
          },
          resolve: function(component) {
            var override = MapWrapper.get(this._cmpTemplates, component);
            if (isPresent(override)) {
              return override;
            }
            return $traceurRuntime.superGet(this, MockTemplateResolver.prototype, "resolve").call(this, component);
          }
        }, {}, $__super);
      }(TemplateResolver)));
      Object.defineProperty(MockTemplateResolver.prototype.setTemplate, "parameters", {get: function() {
          return [[Type], [Template]];
        }});
      Object.defineProperty(MockTemplateResolver.prototype.resolve, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});
//# sourceMappingURL=template_resolver_mock.js.map

//# sourceMappingURL=../../src/mock/template_resolver_mock.js.map