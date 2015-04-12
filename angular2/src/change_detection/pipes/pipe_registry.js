System.register(["angular2/src/facade/collection", "angular2/src/facade/lang", "./pipe", "../binding_propagation_config"], function($__export) {
  "use strict";
  var List,
      ListWrapper,
      isBlank,
      isPresent,
      BaseException,
      CONST,
      Pipe,
      BindingPropagationConfig,
      PipeRegistry;
  return {
    setters: [function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      CONST = $__m.CONST;
    }, function($__m) {
      Pipe = $__m.Pipe;
    }, function($__m) {
      BindingPropagationConfig = $__m.BindingPropagationConfig;
    }],
    execute: function() {
      PipeRegistry = $__export("PipeRegistry", (function() {
        var PipeRegistry = function PipeRegistry(config) {
          this.config = config;
        };
        return ($traceurRuntime.createClass)(PipeRegistry, {get: function(type, obj, bpc) {
            var listOfConfigs = this.config[type];
            if (isBlank(listOfConfigs)) {
              throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
            }
            var matchingConfig = ListWrapper.find(listOfConfigs, (function(pipeConfig) {
              return pipeConfig.supports(obj);
            }));
            if (isBlank(matchingConfig)) {
              throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
            }
            return matchingConfig.create(bpc);
          }}, {});
      }()));
      Object.defineProperty(PipeRegistry.prototype.get, "parameters", {get: function() {
          return [[assert.type.string], [], [BindingPropagationConfig]];
        }});
    }
  };
});
//# sourceMappingURL=pipe_registry.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe_registry.js.map