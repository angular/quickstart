System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./types"], function($__export) {
  "use strict";
  var Type,
      isPresent,
      stringify,
      BaseException,
      List,
      ListWrapper,
      Map,
      MapWrapper,
      StringMapWrapper,
      SetterFn,
      GetterFn,
      MethodFn,
      Reflector;
  function _mergeMaps(target, config) {
    StringMapWrapper.forEach(config, (function(v, k) {
      return MapWrapper.set(target, k, v);
    }));
  }
  return {
    setters: [function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
      stringify = $__m.stringify;
      BaseException = $__m.BaseException;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      SetterFn = $__m.SetterFn;
      GetterFn = $__m.GetterFn;
      MethodFn = $__m.MethodFn;
      $__export("SetterFn", $__m.SetterFn);
      $__export("GetterFn", $__m.GetterFn);
      $__export("MethodFn", $__m.MethodFn);
    }],
    execute: function() {
      Reflector = $__export("Reflector", (function() {
        var Reflector = function Reflector(reflectionCapabilities) {
          this._typeInfo = MapWrapper.create();
          this._getters = MapWrapper.create();
          this._setters = MapWrapper.create();
          this._methods = MapWrapper.create();
          this.reflectionCapabilities = reflectionCapabilities;
        };
        return ($traceurRuntime.createClass)(Reflector, {
          registerType: function(type, typeInfo) {
            MapWrapper.set(this._typeInfo, type, typeInfo);
          },
          registerGetters: function(getters) {
            _mergeMaps(this._getters, getters);
          },
          registerSetters: function(setters) {
            _mergeMaps(this._setters, setters);
          },
          registerMethods: function(methods) {
            _mergeMaps(this._methods, methods);
          },
          factory: function(type) {
            if (MapWrapper.contains(this._typeInfo, type)) {
              return MapWrapper.get(this._typeInfo, type)["factory"];
            } else {
              return this.reflectionCapabilities.factory(type);
            }
          },
          parameters: function(typeOfFunc) {
            if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
              return MapWrapper.get(this._typeInfo, typeOfFunc)["parameters"];
            } else {
              return this.reflectionCapabilities.parameters(typeOfFunc);
            }
          },
          annotations: function(typeOfFunc) {
            if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
              return MapWrapper.get(this._typeInfo, typeOfFunc)["annotations"];
            } else {
              return this.reflectionCapabilities.annotations(typeOfFunc);
            }
          },
          getter: function(name) {
            if (MapWrapper.contains(this._getters, name)) {
              return MapWrapper.get(this._getters, name);
            } else {
              return this.reflectionCapabilities.getter(name);
            }
          },
          setter: function(name) {
            if (MapWrapper.contains(this._setters, name)) {
              return MapWrapper.get(this._setters, name);
            } else {
              return this.reflectionCapabilities.setter(name);
            }
          },
          method: function(name) {
            if (MapWrapper.contains(this._methods, name)) {
              return MapWrapper.get(this._methods, name);
            } else {
              return this.reflectionCapabilities.method(name);
            }
          }
        }, {});
      }()));
      Object.defineProperty(Reflector.prototype.factory, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(Reflector.prototype.getter, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Reflector.prototype.setter, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Reflector.prototype.method, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(_mergeMaps, "parameters", {get: function() {
          return [[Map], []];
        }});
    }
  };
});

//# sourceMappingURL=src/reflection/reflector.map

//# sourceMappingURL=../../src/reflection/reflector.js.map