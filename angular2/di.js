System.register(["./src/di/annotations", "./src/di/injector", "./src/di/binding", "./src/di/key", "./src/di/exceptions", "./src/di/opaque_token"], function($__export) {
  "use strict";
  return {
    setters: [function($__m) {
      $__export("Inject", $__m.Inject);
      $__export("InjectPromise", $__m.InjectPromise);
      $__export("InjectLazy", $__m.InjectLazy);
      $__export("Injectable", $__m.Injectable);
      $__export("Optional", $__m.Optional);
      $__export("DependencyAnnotation", $__m.DependencyAnnotation);
    }, function($__m) {
      $__export("Injector", $__m.Injector);
    }, function($__m) {
      $__export("Binding", $__m.Binding);
      $__export("Dependency", $__m.Dependency);
      $__export("bind", $__m.bind);
    }, function($__m) {
      $__export("Key", $__m.Key);
      $__export("KeyRegistry", $__m.KeyRegistry);
    }, function($__m) {
      $__export("KeyMetadataError", $__m.KeyMetadataError);
      $__export("NoProviderError", $__m.NoProviderError);
      $__export("ProviderError", $__m.ProviderError);
      $__export("AsyncBindingError", $__m.AsyncBindingError);
      $__export("CyclicDependencyError", $__m.CyclicDependencyError);
      $__export("InstantiationError", $__m.InstantiationError);
      $__export("InvalidBindingError", $__m.InvalidBindingError);
      $__export("NoAnnotationError", $__m.NoAnnotationError);
    }, function($__m) {
      $__export("OpaqueToken", $__m.OpaqueToken);
    }],
    execute: function() {}
  };
});

//# sourceMappingURL=di.map

//# sourceMappingURL=di.js.map