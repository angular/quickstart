System.register(["angular2/core", "angular2/forms"], function($__export) {
  "use strict";
  var Decorator,
      ControlDirective,
      validators,
      RequiredValidatorDirective;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }, function($__m) {
      ControlDirective = $__m.ControlDirective;
      validators = $__m;
    }],
    execute: function() {
      RequiredValidatorDirective = $__export("RequiredValidatorDirective", (function() {
        var RequiredValidatorDirective = function RequiredValidatorDirective(c) {
          c.validator = validators.compose([c.validator, validators.required]);
        };
        return ($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
      }()));
      Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
          return [new Decorator({selector: '[required]'})];
        }});
      Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
          return [[ControlDirective]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/validator_directives.map

//# sourceMappingURL=../../src/forms/validator_directives.js.map