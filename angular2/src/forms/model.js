System.register(["angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "./validators"], function($__export) {
  "use strict";
  var isPresent,
      Observable,
      ObservableWrapper,
      StringMap,
      StringMapWrapper,
      ListWrapper,
      List,
      Validators,
      VALID,
      INVALID,
      AbstractControl,
      Control,
      ControlGroup,
      ControlArray;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      Observable = $__m.Observable;
      ObservableWrapper = $__m.ObservableWrapper;
    }, function($__m) {
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
    }, function($__m) {
      Validators = $__m.Validators;
    }],
    execute: function() {
      VALID = $__export("VALID", "VALID");
      INVALID = $__export("INVALID", "INVALID");
      AbstractControl = $__export("AbstractControl", (function() {
        var AbstractControl = function AbstractControl(validator) {
          this.validator = validator;
          this._pristine = true;
        };
        return ($traceurRuntime.createClass)(AbstractControl, {
          get value() {
            return this._value;
          },
          get status() {
            return this._status;
          },
          get valid() {
            return this._status === VALID;
          },
          get errors() {
            return this._errors;
          },
          get pristine() {
            return this._pristine;
          },
          get dirty() {
            return !this.pristine;
          },
          setParent: function(parent) {
            this._parent = parent;
          },
          _updateParent: function() {
            if (isPresent(this._parent)) {
              this._parent._updateValue();
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
          this._setValueErrorsStatus(value);
          this._valueChangesController = ObservableWrapper.createController();
          this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
        };
        return ($traceurRuntime.createClass)(Control, {
          updateValue: function(value) {
            this._setValueErrorsStatus(value);
            this._pristine = false;
            ObservableWrapper.callNext(this._valueChangesController, this._value);
            this._updateParent();
          },
          _setValueErrorsStatus: function(value) {
            this._value = value;
            this._errors = this.validator(this);
            this._status = isPresent(this._errors) ? INVALID : VALID;
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
          this._valueChangesController = ObservableWrapper.createController();
          this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
          this._setParentForControls();
          this._setValueErrorsStatus();
        };
        return ($traceurRuntime.createClass)(ControlGroup, {
          include: function(controlName) {
            StringMapWrapper.set(this.optionals, controlName, true);
            this._updateValue();
          },
          exclude: function(controlName) {
            StringMapWrapper.set(this.optionals, controlName, false);
            this._updateValue();
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
          _updateValue: function() {
            this._setValueErrorsStatus();
            this._pristine = false;
            ObservableWrapper.callNext(this._valueChangesController, this._value);
            this._updateParent();
          },
          _setValueErrorsStatus: function() {
            this._value = this._reduceValue();
            this._errors = this.validator(this);
            this._status = isPresent(this._errors) ? INVALID : VALID;
          },
          _reduceValue: function() {
            return this._reduceChildren({}, (function(acc, control, name) {
              acc[name] = control.value;
              return acc;
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
      ControlArray = $__export("ControlArray", (function($__super) {
        var ControlArray = function ControlArray(controls) {
          var validator = arguments[1] !== (void 0) ? arguments[1] : Validators.array;
          $traceurRuntime.superConstructor(ControlArray).call(this, validator);
          this.controls = controls;
          this._valueChangesController = ObservableWrapper.createController();
          this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
          this._setParentForControls();
          this._setValueErrorsStatus();
        };
        return ($traceurRuntime.createClass)(ControlArray, {
          at: function(index) {
            return this.controls[index];
          },
          push: function(control) {
            ListWrapper.push(this.controls, control);
            control.setParent(this);
            this._updateValue();
          },
          insert: function(index, control) {
            ListWrapper.insert(this.controls, index, control);
            control.setParent(this);
            this._updateValue();
          },
          removeAt: function(index) {
            ListWrapper.removeAt(this.controls, index);
            this._updateValue();
          },
          get length() {
            return this.controls.length;
          },
          _updateValue: function() {
            this._setValueErrorsStatus();
            this._pristine = false;
            ObservableWrapper.callNext(this._valueChangesController, this._value);
            this._updateParent();
          },
          _setParentForControls: function() {
            var $__0 = this;
            ListWrapper.forEach(this.controls, (function(control) {
              control.setParent($__0);
            }));
          },
          _setValueErrorsStatus: function() {
            this._value = ListWrapper.map(this.controls, (function(c) {
              return c.value;
            }));
            this._errors = this.validator(this);
            this._status = isPresent(this._errors) ? INVALID : VALID;
          }
        }, {}, $__super);
      }(AbstractControl)));
      Object.defineProperty(ControlArray, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      Object.defineProperty(ControlArray.prototype.at, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ControlArray.prototype.insert, "parameters", {get: function() {
          return [[assert.type.number], []];
        }});
      Object.defineProperty(ControlArray.prototype.removeAt, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});

//# sourceMappingURL=src/forms/model.map

//# sourceMappingURL=../../src/forms/model.js.map