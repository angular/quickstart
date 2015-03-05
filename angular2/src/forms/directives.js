System.register(["angular2/core", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/collection", "./model", "./validators"], function($__export) {
  "use strict";
  var Template,
      Component,
      Decorator,
      NgElement,
      Ancestor,
      onChange,
      DOM,
      isBlank,
      isPresent,
      CONST,
      StringMapWrapper,
      ListWrapper,
      ControlGroup,
      Control,
      validators,
      ControlValueAccessor,
      DefaultControlValueAccessor,
      CheckboxControlValueAccessor,
      controlValueAccessors,
      ControlDirective,
      ControlGroupDirective,
      FormDirectives;
  function controlValueAccessorFor(controlType) {
    var accessor = StringMapWrapper.get(controlValueAccessors, controlType);
    if (isPresent(accessor)) {
      return accessor;
    } else {
      return StringMapWrapper.get(controlValueAccessors, "text");
    }
  }
  return {
    setters: [function($__m) {
      Template = $__m.Template;
      Component = $__m.Component;
      Decorator = $__m.Decorator;
      NgElement = $__m.NgElement;
      Ancestor = $__m.Ancestor;
      onChange = $__m.onChange;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      CONST = $__m.CONST;
    }, function($__m) {
      StringMapWrapper = $__m.StringMapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      ControlGroup = $__m.ControlGroup;
      Control = $__m.Control;
    }, function($__m) {
      validators = $__m;
    }],
    execute: function() {
      ControlValueAccessor = $__export("ControlValueAccessor", (function() {
        var ControlValueAccessor = function ControlValueAccessor() {};
        return ($traceurRuntime.createClass)(ControlValueAccessor, {
          readValue: function(el) {},
          writeValue: function(el, value) {}
        }, {});
      }()));
      Object.defineProperty(ControlValueAccessor, "annotations", {get: function() {
          return [new CONST()];
        }});
      DefaultControlValueAccessor = (function($__super) {
        var DefaultControlValueAccessor = function DefaultControlValueAccessor() {
          $traceurRuntime.superConstructor(DefaultControlValueAccessor).call(this);
        };
        return ($traceurRuntime.createClass)(DefaultControlValueAccessor, {
          readValue: function(el) {
            return DOM.getValue(el);
          },
          writeValue: function(el, value) {
            DOM.setValue(el, value);
          }
        }, {}, $__super);
      }(ControlValueAccessor));
      Object.defineProperty(DefaultControlValueAccessor, "annotations", {get: function() {
          return [new CONST()];
        }});
      CheckboxControlValueAccessor = (function($__super) {
        var CheckboxControlValueAccessor = function CheckboxControlValueAccessor() {
          $traceurRuntime.superConstructor(CheckboxControlValueAccessor).call(this);
        };
        return ($traceurRuntime.createClass)(CheckboxControlValueAccessor, {
          readValue: function(el) {
            return DOM.getChecked(el);
          },
          writeValue: function(el, value) {
            DOM.setChecked(el, value);
          }
        }, {}, $__super);
      }(ControlValueAccessor));
      Object.defineProperty(CheckboxControlValueAccessor, "annotations", {get: function() {
          return [new CONST()];
        }});
      Object.defineProperty(CheckboxControlValueAccessor.prototype.writeValue, "parameters", {get: function() {
          return [[], [assert.type.boolean]];
        }});
      controlValueAccessors = {
        "checkbox": new CheckboxControlValueAccessor(),
        "text": new DefaultControlValueAccessor()
      };
      Object.defineProperty(controlValueAccessorFor, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      ControlDirective = $__export("ControlDirective", (function() {
        var ControlDirective = function ControlDirective(groupDecorator, el) {
          this._groupDecorator = groupDecorator;
          this._el = el;
          this.validator = validators.nullValidator;
        };
        return ($traceurRuntime.createClass)(ControlDirective, {
          onChange: function(_) {
            this._initialize();
          },
          _initialize: function() {
            var $__0 = this;
            this._groupDecorator.addDirective(this);
            var c = this._control();
            c.validator = validators.compose([c.validator, this.validator]);
            if (isBlank(this.valueAccessor)) {
              this.valueAccessor = controlValueAccessorFor(this.type);
            }
            this._updateDomValue();
            DOM.on(this._el.domElement, "change", (function(_) {
              return $__0._updateControlValue();
            }));
          },
          _updateDomValue: function() {
            this.valueAccessor.writeValue(this._el.domElement, this._control().value);
          },
          _updateControlValue: function() {
            this._control().updateValue(this.valueAccessor.readValue(this._el.domElement));
          },
          _control: function() {
            return this._groupDecorator.findControl(this.controlName);
          }
        }, {});
      }()));
      Object.defineProperty(ControlDirective, "annotations", {get: function() {
          return [new Decorator({
            lifecycle: [onChange],
            selector: '[control]',
            bind: {
              'controlName': 'control',
              'type': 'type'
            }
          })];
        }});
      Object.defineProperty(ControlDirective, "parameters", {get: function() {
          return [[ControlGroupDirective, new Ancestor()], [NgElement]];
        }});
      ControlGroupDirective = $__export("ControlGroupDirective", (function() {
        var ControlGroupDirective = function ControlGroupDirective() {
          $traceurRuntime.superConstructor(ControlGroupDirective).call(this);
          this._directives = ListWrapper.create();
        };
        return ($traceurRuntime.createClass)(ControlGroupDirective, {
          set controlGroup(controlGroup) {
            this._controlGroup = controlGroup;
            ListWrapper.forEach(this._directives, (function(cd) {
              return cd._updateDomValue();
            }));
          },
          addDirective: function(c) {
            ListWrapper.push(this._directives, c);
          },
          findControl: function(name) {
            return this._controlGroup.controls[name];
          }
        }, {});
      }()));
      Object.defineProperty(ControlGroupDirective, "annotations", {get: function() {
          return [new Decorator({
            selector: '[control-group]',
            bind: {'controlGroup': 'control-group'}
          })];
        }});
      Object.defineProperty(Object.getOwnPropertyDescriptor(ControlGroupDirective.prototype, "controlGroup").set, "parameters", {get: function() {
          return [[ControlGroup]];
        }});
      Object.defineProperty(ControlGroupDirective.prototype.addDirective, "parameters", {get: function() {
          return [[ControlDirective]];
        }});
      Object.defineProperty(ControlGroupDirective.prototype.findControl, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      FormDirectives = $__export("FormDirectives", [ControlGroupDirective, ControlDirective]);
    }
  };
});

//# sourceMappingURL=src/forms/directives.map

//# sourceMappingURL=../../src/forms/directives.js.map