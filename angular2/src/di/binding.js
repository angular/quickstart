System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/reflection/reflection", "./key", "./annotations", "./exceptions"], function($__export) {
  "use strict";
  var Type,
      isBlank,
      isPresent,
      List,
      MapWrapper,
      ListWrapper,
      reflector,
      Key,
      Inject,
      InjectLazy,
      InjectPromise,
      Optional,
      DependencyAnnotation,
      NoAnnotationError,
      Dependency,
      Binding,
      BindingBuilder;
  function bind(token) {
    return new BindingBuilder(token);
  }
  function _dependenciesFor(typeOrFunc) {
    var params = reflector.parameters(typeOrFunc);
    if (isBlank(params))
      return [];
    if (ListWrapper.any(params, (function(p) {
      return isBlank(p);
    })))
      throw new NoAnnotationError(typeOrFunc);
    return ListWrapper.map(params, (function(p) {
      return _extractToken(typeOrFunc, p);
    }));
  }
  function _extractToken(typeOrFunc, annotations) {
    var depProps = [];
    var token = null;
    var optional = false;
    var lazy = false;
    var asPromise = false;
    for (var i = 0; i < annotations.length; ++i) {
      var paramAnnotation = annotations[i];
      if (paramAnnotation instanceof Type) {
        token = paramAnnotation;
      } else if (paramAnnotation instanceof Inject) {
        token = paramAnnotation.token;
      } else if (paramAnnotation instanceof InjectPromise) {
        token = paramAnnotation.token;
        asPromise = true;
      } else if (paramAnnotation instanceof InjectLazy) {
        token = paramAnnotation.token;
        lazy = true;
      } else if (paramAnnotation instanceof Optional) {
        optional = true;
      } else if (paramAnnotation instanceof DependencyAnnotation) {
        ListWrapper.push(depProps, paramAnnotation);
      }
    }
    if (isPresent(token)) {
      return _createDependency(token, asPromise, lazy, optional, depProps);
    } else {
      throw new NoAnnotationError(typeOrFunc);
    }
  }
  function _createDependency(token, asPromise, lazy, optional, depProps) {
    return new Dependency(Key.get(token), asPromise, lazy, optional, depProps);
  }
  $__export("bind", bind);
  return {
    setters: [function($__m) {
      Type = $__m.Type;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      Key = $__m.Key;
    }, function($__m) {
      Inject = $__m.Inject;
      InjectLazy = $__m.InjectLazy;
      InjectPromise = $__m.InjectPromise;
      Optional = $__m.Optional;
      DependencyAnnotation = $__m.DependencyAnnotation;
    }, function($__m) {
      NoAnnotationError = $__m.NoAnnotationError;
    }],
    execute: function() {
      Dependency = $__export("Dependency", (function() {
        var Dependency = function Dependency(key, asPromise, lazy, optional, properties) {
          this.key = key;
          this.asPromise = asPromise;
          this.lazy = lazy;
          this.optional = optional;
          this.properties = properties;
        };
        return ($traceurRuntime.createClass)(Dependency, {}, {fromKey: function(key) {
            return new Dependency(key, false, false, false, []);
          }});
      }()));
      Object.defineProperty(Dependency, "parameters", {get: function() {
          return [[Key], [assert.type.boolean], [assert.type.boolean], [assert.type.boolean], [List]];
        }});
      Object.defineProperty(Dependency.fromKey, "parameters", {get: function() {
          return [[Key]];
        }});
      Binding = $__export("Binding", (function() {
        var Binding = function Binding(key, factory, dependencies, providedAsPromise) {
          this.key = key;
          this.factory = factory;
          this.dependencies = dependencies;
          this.providedAsPromise = providedAsPromise;
        };
        return ($traceurRuntime.createClass)(Binding, {}, {});
      }()));
      Object.defineProperty(Binding, "parameters", {get: function() {
          return [[Key], [Function], [List], [assert.type.boolean]];
        }});
      BindingBuilder = $__export("BindingBuilder", (function() {
        var BindingBuilder = function BindingBuilder(token) {
          this.token = token;
        };
        return ($traceurRuntime.createClass)(BindingBuilder, {
          toClass: function(type) {
            return new Binding(Key.get(this.token), reflector.factory(type), _dependenciesFor(type), false);
          },
          toValue: function(value) {
            return new Binding(Key.get(this.token), (function() {
              return value;
            }), [], false);
          },
          toAlias: function(aliasToken) {
            return new Binding(Key.get(this.token), (function(aliasInstance) {
              return aliasInstance;
            }), [Dependency.fromKey(Key.get(aliasToken))], false);
          },
          toFactory: function(factoryFunction) {
            var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
            return new Binding(Key.get(this.token), factoryFunction, this._constructDependencies(factoryFunction, dependencies), false);
          },
          toAsyncFactory: function(factoryFunction) {
            var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
            return new Binding(Key.get(this.token), factoryFunction, this._constructDependencies(factoryFunction, dependencies), true);
          },
          _constructDependencies: function(factoryFunction, dependencies) {
            return isBlank(dependencies) ? _dependenciesFor(factoryFunction) : ListWrapper.map(dependencies, (function(t) {
              return Dependency.fromKey(Key.get(t));
            }));
          }
        }, {});
      }()));
      Object.defineProperty(BindingBuilder.prototype.toClass, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(BindingBuilder.prototype.toFactory, "parameters", {get: function() {
          return [[Function], [List]];
        }});
      Object.defineProperty(BindingBuilder.prototype.toAsyncFactory, "parameters", {get: function() {
          return [[Function], [List]];
        }});
      Object.defineProperty(BindingBuilder.prototype._constructDependencies, "parameters", {get: function() {
          return [[Function], [List]];
        }});
    }
  };
});

//# sourceMappingURL=src/di/binding.map

//# sourceMappingURL=../../src/di/binding.js.map