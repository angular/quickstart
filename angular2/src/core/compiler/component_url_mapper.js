System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var Injectable,
      Type,
      isPresent,
      Map,
      MapWrapper,
      ComponentUrlMapper,
      RuntimeComponentUrlMapper;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
    }],
    execute: function() {
      ComponentUrlMapper = $__export("ComponentUrlMapper", (function() {
        var ComponentUrlMapper = function ComponentUrlMapper() {
          ;
        };
        return ($traceurRuntime.createClass)(ComponentUrlMapper, {getUrl: function(component) {
            return './';
          }}, {});
      }()));
      Object.defineProperty(ComponentUrlMapper, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(ComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
          return [[Type]];
        }});
      RuntimeComponentUrlMapper = $__export("RuntimeComponentUrlMapper", (function($__super) {
        var RuntimeComponentUrlMapper = function RuntimeComponentUrlMapper() {
          $traceurRuntime.superConstructor(RuntimeComponentUrlMapper).call(this);
          this._componentUrls = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(RuntimeComponentUrlMapper, {
          setComponentUrl: function(component, url) {
            MapWrapper.set(this._componentUrls, component, url);
          },
          getUrl: function(component) {
            var url = MapWrapper.get(this._componentUrls, component);
            if (isPresent(url))
              return url;
            return $traceurRuntime.superGet(this, RuntimeComponentUrlMapper.prototype, "getUrl").call(this, component);
          }
        }, {}, $__super);
      }(ComponentUrlMapper)));
      Object.defineProperty(RuntimeComponentUrlMapper.prototype.setComponentUrl, "parameters", {get: function() {
          return [[Type], [assert.type.string]];
        }});
      Object.defineProperty(RuntimeComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});
//# sourceMappingURL=component_url_mapper.js.map

//# sourceMappingURL=../../../src/core/compiler/component_url_mapper.js.map