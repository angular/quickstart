System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./reflector", "./reflection_capabilities"], function($__export) {
  "use strict";
  var Type,
      isPresent,
      List,
      ListWrapper,
      Reflector,
      ReflectionCapabilities,
      reflector;
  return {
    setters: [function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Reflector = $__m.Reflector;
      $__export("Reflector", $__m.Reflector);
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }],
    execute: function() {
      reflector = $__export("reflector", new Reflector(new ReflectionCapabilities()));
    }
  };
});
//# sourceMappingURL=reflection.js.map

//# sourceMappingURL=../../src/reflection/reflection.js.map