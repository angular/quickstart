System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/forms"], function($__export) {
  "use strict";
  var isBlank,
      isPresent,
      List,
      ListWrapper,
      StringMapWrapper,
      ControlGroup,
      Control;
  function required(c) {
    return isBlank(c.value) || c.value == "" ? {"required": true} : null;
  }
  function nullValidator(c) {
    return null;
  }
  function compose(validators) {
    return function(c) {
      var res = ListWrapper.reduce(validators, (function(res, validator) {
        var errors = validator(c);
        return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
      }), {});
      return StringMapWrapper.isEmpty(res) ? null : res;
    };
  }
  function controlGroupValidator(c) {
    var res = {};
    StringMapWrapper.forEach(c.controls, (function(control, name) {
      if (control.active && isPresent(control.errors)) {
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
  $__export("required", required);
  $__export("nullValidator", nullValidator);
  $__export("compose", compose);
  $__export("controlGroupValidator", controlGroupValidator);
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      ControlGroup = $__m.ControlGroup;
      Control = $__m.Control;
    }],
    execute: function() {
      Object.defineProperty(required, "parameters", {get: function() {
          return [[Control]];
        }});
      Object.defineProperty(nullValidator, "parameters", {get: function() {
          return [[Control]];
        }});
      Object.defineProperty(compose, "parameters", {get: function() {
          return [[assert.genericType(List, Function)]];
        }});
      Object.defineProperty(controlGroupValidator, "parameters", {get: function() {
          return [[ControlGroup]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/validators.map

//# sourceMappingURL=../../src/forms/validators.js.map