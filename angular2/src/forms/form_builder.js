System.register(["angular2/src/facade/collection", "angular2/src/facade/lang", "./model"], function($__export) {
  "use strict";
  var StringMapWrapper,
      ListWrapper,
      isPresent,
      modelModule,
      FormBuilder;
  return {
    setters: [function($__m) {
      StringMapWrapper = $__m.StringMapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      modelModule = $__m;
    }],
    execute: function() {
      FormBuilder = $__export("FormBuilder", (function() {
        var FormBuilder = function FormBuilder() {};
        return ($traceurRuntime.createClass)(FormBuilder, {
          group: function(controlsConfig) {
            var extra = arguments[1] !== (void 0) ? arguments[1] : null;
            var controls = this._reduceControls(controlsConfig);
            var optionals = isPresent(extra) ? StringMapWrapper.get(extra, "optionals") : null;
            var validator = isPresent(extra) ? StringMapWrapper.get(extra, "validator") : null;
            if (isPresent(validator)) {
              return new modelModule.ControlGroup(controls, optionals, validator);
            } else {
              return new modelModule.ControlGroup(controls, optionals);
            }
          },
          control: function(value) {
            var validator = arguments[1] !== (void 0) ? arguments[1] : null;
            if (isPresent(validator)) {
              return new modelModule.Control(value, validator);
            } else {
              return new modelModule.Control(value);
            }
          },
          _reduceControls: function(controlsConfig) {
            var $__0 = this;
            var controls = {};
            StringMapWrapper.forEach(controlsConfig, (function(controlConfig, controlName) {
              controls[controlName] = $__0._createControl(controlConfig);
            }));
            return controls;
          },
          _createControl: function(controlConfig) {
            if (controlConfig instanceof modelModule.Control || controlConfig instanceof modelModule.ControlGroup) {
              return controlConfig;
            } else if (ListWrapper.isList(controlConfig)) {
              var value = ListWrapper.get(controlConfig, 0);
              var validator = controlConfig.length > 1 ? controlConfig[1] : null;
              return this.control(value, validator);
            } else {
              return this.control(controlConfig);
            }
          }
        }, {});
      }()));
      Object.defineProperty(FormBuilder.prototype.control, "parameters", {get: function() {
          return [[], [Function]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/form_builder.map

//# sourceMappingURL=../../src/forms/form_builder.js.map