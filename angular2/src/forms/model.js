System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./validators"], function($__export) {
  "use strict";
  var isPresent,
      StringMap,
      StringMapWrapper,
      Validators,
      VALID,
      INVALID,
      AbstractControl,
      Control,
      ControlGroup;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      Validators = $__m.Validators;
    }],
    execute: function() {
      VALID = $__export("VALID", "VALID");
      INVALID = $__export("INVALID", "INVALID");
      AbstractControl = $__export("AbstractControl", (function() {
        var AbstractControl = function AbstractControl(validator) {
          this.validator = validator;
          this._updateNeeded = true;
          this._pristine = true;
        };
        return ($traceurRuntime.createClass)(AbstractControl, {
          get value() {
            this._updateIfNeeded();
            return this._value;
          },
          get status() {
            this._updateIfNeeded();
            return this._status;
          },
          get valid() {
            this._updateIfNeeded();
            return this._status === VALID;
          },
          get errors() {
            this._updateIfNeeded();
            return this._errors;
          },
          get pristine() {
            this._updateIfNeeded();
            return this._pristine;
          },
          get dirty() {
            return !this.pristine;
          },
          setParent: function(parent) {
            this._parent = parent;
          },
          _updateIfNeeded: function() {},
          _updateParent: function() {
            if (isPresent(this._parent)) {
              this._parent._controlChanged();
            }
          }
        }, {});
      }()));
      Object.defineProperty(AbstractControl, "parameters", {get: function() {
          return [[Function]];
        }});
      Control = $__export("Control", (function($__super) {
        var Control = function Control(value) {
          var validator = arguments[1] !== (void 0) ? arguments[1] : Validators.nullValidator;
          $traceurRuntime.superConstructor(Control).call(this, validator);
          this._value = value;
        };
        return ($traceurRuntime.createClass)(Control, {
          updateValue: function(value) {
            this._value = value;
            this._updateNeeded = true;
            this._pristine = false;
            this._updateParent();
          },
          _updateIfNeeded: function() {
            if (this._updateNeeded) {
              this._updateNeeded = false;
              this._errors = this.validator(this);
              this._status = isPresent(this._errors) ? INVALID : VALID;
            }
          }
        }, {}, $__super);
      }(AbstractControl)));
      Object.defineProperty(Control, "parameters", {get: function() {
          return [[assert.type.any], [Function]];
        }});
      Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      ControlGroup = $__export("ControlGroup", (function($__super) {
        var ControlGroup = function ControlGroup(controls) {
          var optionals = arguments[1] !== (void 0) ? arguments[1] : null;
          var validator = arguments[2] !== (void 0) ? arguments[2] : Validators.group;
          $traceurRuntime.superConstructor(ControlGroup).call(this, validator);
          this.controls = controls;
          this.optionals = isPresent(optionals) ? optionals : {};
          this._setParentForControls();
        };
        return ($traceurRuntime.createClass)(ControlGroup, {
          include: function(controlName) {
            this._updateNeeded = true;
            StringMapWrapper.set(this.optionals, controlName, true);
          },
          exclude: function(controlName) {
            this._updateNeeded = true;
            StringMapWrapper.set(this.optionals, controlName, false);
          },
          contains: function(controlName) {
            var c = StringMapWrapper.contains(this.controls, controlName);
            return c && this._included(controlName);
          },
          _setParentForControls: function() {
            var $__0 = this;
            StringMapWrapper.forEach(this.controls, (function(control, name) {
              control.setParent($__0);
            }));
          },
          _updateIfNeeded: function() {
            if (this._updateNeeded) {
              this._updateNeeded = false;
              this._value = this._reduceValue();
              this._pristine = this._reducePristine();
              this._errors = this.validator(this);
              this._status = isPresent(this._errors) ? INVALID : VALID;
            }
          },
          _reduceValue: function() {
            return this._reduceChildren({}, (function(acc, control, name) {
              acc[name] = control.value;
              return acc;
            }));
          },
          _reducePristine: function() {
            return this._reduceChildren(true, (function(acc, control, name) {
              return acc && control.pristine;
            }));
          },
          _reduceChildren: function(initValue, fn) {
            var $__0 = this;
            var res = initValue;
            StringMapWrapper.forEach(this.controls, (function(control, name) {
              if ($__0._included(name)) {
                res = fn(res, control, name);
              }
            }));
            return res;
          },
          _controlChanged: function() {
            this._updateNeeded = true;
            this._updateParent();
          },
          _included: function(controlName) {
            var isOptional = StringMapWrapper.contains(this.optionals, controlName);
            return !isOptional || StringMapWrapper.get(this.optionals, controlName);
          }
        }, {}, $__super);
      }(AbstractControl)));
      Object.defineProperty(ControlGroup, "parameters", {get: function() {
          return [[], [], [Function]];
        }});
      Object.defineProperty(ControlGroup.prototype.include, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ControlGroup.prototype.exclude, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ControlGroup.prototype.contains, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ControlGroup.prototype._reduceChildren, "parameters", {get: function() {
          return [[], [Function]];
        }});
      Object.defineProperty(ControlGroup.prototype._included, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/model.map

//# sourceMappingURL=../../src/forms/model.js.map