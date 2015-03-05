System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./validators"], function($__export) {
  "use strict";
  var isPresent,
      StringMap,
      StringMapWrapper,
      nullValidator,
      controlGroupValidator,
      VALID,
      INVALID,
      Control,
      ControlGroup,
      OptionalControl;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      nullValidator = $__m.nullValidator;
      controlGroupValidator = $__m.controlGroupValidator;
    }],
    execute: function() {
      VALID = $__export("VALID", "VALID");
      INVALID = $__export("INVALID", "INVALID");
      Control = $__export("Control", (function() {
        var Control = function Control(value) {
          var validator = arguments[1] !== (void 0) ? arguments[1] : nullValidator;
          this._value = value;
          this.validator = validator;
          this._dirty = true;
        };
        return ($traceurRuntime.createClass)(Control, {
          updateValue: function(value) {
            this._value = value;
            this._dirty = true;
            this._updateParent();
          },
          get active() {
            return true;
          },
          get value() {
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
          setParent: function(parent) {
            this._parent = parent;
          },
          _updateIfNeeded: function() {
            if (this._dirty) {
              this._dirty = false;
              this._errors = this.validator(this);
              this._status = isPresent(this._errors) ? INVALID : VALID;
            }
          },
          _updateParent: function() {
            if (isPresent(this._parent)) {
              this._parent._controlChanged();
            }
          }
        }, {});
      }()));
      Object.defineProperty(Control, "parameters", {get: function() {
          return [[assert.type.any], [Function]];
        }});
      Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      ControlGroup = $__export("ControlGroup", (function() {
        var ControlGroup = function ControlGroup(controls) {
          var validator = arguments[1] !== (void 0) ? arguments[1] : controlGroupValidator;
          this.controls = controls;
          this.validator = validator;
          this._dirty = true;
          this._setParentForControls();
        };
        return ($traceurRuntime.createClass)(ControlGroup, {
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
          _setParentForControls: function() {
            var $__0 = this;
            StringMapWrapper.forEach(this.controls, (function(control, name) {
              control.setParent($__0);
            }));
          },
          _updateIfNeeded: function() {
            if (this._dirty) {
              this._dirty = false;
              this._value = this._reduceValue();
              this._errors = this.validator(this);
              this._status = isPresent(this._errors) ? INVALID : VALID;
            }
          },
          _reduceValue: function() {
            var newValue = {};
            StringMapWrapper.forEach(this.controls, (function(control, name) {
              if (control.active) {
                newValue[name] = control.value;
              }
            }));
            return newValue;
          },
          _controlChanged: function() {
            this._dirty = true;
          }
        }, {});
      }()));
      Object.defineProperty(ControlGroup, "parameters", {get: function() {
          return [[], [Function]];
        }});
      OptionalControl = $__export("OptionalControl", (function() {
        var OptionalControl = function OptionalControl(control, cond) {
          $traceurRuntime.superConstructor(OptionalControl).call(this);
          this._control = control;
          this._cond = cond;
        };
        return ($traceurRuntime.createClass)(OptionalControl, {
          get active() {
            return this._cond;
          },
          get value() {
            return this._control.value;
          },
          get status() {
            return this._control.status;
          },
          get errors() {
            return this._control.errors;
          },
          set validator(v) {
            this._control.validator = v;
          },
          get validator() {
            return this._control.validator;
          },
          set cond(value) {
            this._cond = value;
            this._control._updateParent();
          },
          get cond() {
            return this._cond;
          },
          updateValue: function(value) {
            this._control.updateValue(value);
          },
          setParent: function(parent) {
            this._control.setParent(parent);
          }
        }, {});
      }()));
      Object.defineProperty(OptionalControl, "parameters", {get: function() {
          return [[Control], [assert.type.boolean]];
        }});
      Object.defineProperty(Object.getOwnPropertyDescriptor(OptionalControl.prototype, "cond").set, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(OptionalControl.prototype.updateValue, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/model.map

//# sourceMappingURL=../../src/forms/model.js.map