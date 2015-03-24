System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./model"], function($__export) {
  "use strict";
  var isBlank,
      isPresent,
      List,
      ListWrapper,
      StringMapWrapper,
      modelModule,
      Validators;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      modelModule = $__m;
    }],
    execute: function() {
      Validators = $__export("Validators", (function() {
        var Validators = function Validators() {};
        return ($traceurRuntime.createClass)(Validators, {}, {
          required: function(c) {
            return isBlank(c.value) || c.value == "" ? {"required": true} : null;
          },
          nullValidator: function(c) {
            return null;
          },
          compose: function(validators) {
            return function(c) {
              var res = ListWrapper.reduce(validators, (function(res, validator) {
                var errors = validator(c);
                return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
              }), {});
              return StringMapWrapper.isEmpty(res) ? null : res;
            };
          },
          group: function(c) {
            var res = {};
            StringMapWrapper.forEach(c.controls, (function(control, name) {
              if (c.contains(name) && isPresent(control.errors)) {
                StringMapWrapper.forEach(control.errors, (function(value, error) {
                  if (!StringMapWrapper.contains(res, error)) {
                    res[error] = [];
                  }
                  ListWrapper.push(res[error], control);
                }));
              }
            }));
            return StringMapWrapper.isEmpty(res) ? null : res;
          }
        });
      }()));
      Object.defineProperty(Validators.required, "parameters", {get: function() {
          return [[modelModule.Control]];
        }});
      Object.defineProperty(Validators.nullValidator, "parameters", {get: function() {
          return [[modelModule.Control]];
        }});
      Object.defineProperty(Validators.compose, "parameters", {get: function() {
          return [[assert.genericType(List, Function)]];
        }});
      Object.defineProperty(Validators.group, "parameters", {get: function() {
          return [[modelModule.ControlGroup]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/validators.map

//# sourceMappingURL=../../src/forms/validators.js.map