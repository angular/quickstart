System.register(["angular2/core", "angular2/src/facade/dom", "angular2/src/facade/lang", "angular2/src/facade/collection", "./model"], function($__export) {
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
      ControlGroupDirectiveBase,
      ControlValueAccessor,
      DefaultControlValueAccessor,
      CheckboxControlValueAccessor,
      controlValueAccessors,
      ControlDirectiveBase,
      ControlNameDirective,
      ControlDirective,
      ControlGroupDirective,
      NewControlGroupDirective,
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
    }],
    execute: function() {
      ControlGroupDirectiveBase = (function() {
        var ControlGroupDirectiveBase = function ControlGroupDirectiveBase() {};
        return ($traceurRuntime.createClass)(ControlGroupDirectiveBase, {
          addDirective: function(directive) {},
          findControl: function(name) {
            return null;
          }
        }, {});
      }());
      Object.defineProperty(ControlGroupDirectiveBase.prototype.findControl, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
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
      ControlDirectiveBase = $__export("ControlDirectiveBase", (function() {
        var ControlDirectiveBase = function ControlDirectiveBase(groupDecorator, el) {
          this._groupDecorator = groupDecorator;
          this._el = el;
        };
        return ($traceurRuntime.createClass)(ControlDirectiveBase, {
          _initialize: function() {
            var $__0 = this;
            if (isBlank(this.valueAccessor)) {
              this.valueAccessor = controlValueAccessorFor(this.type);
            }
            this._groupDecorator.addDirective(this);
            this._updateDomValue();
            DOM.on(this._el.domElement, "change", (function(_) {
              return $__0._updateControlValue();
            }));
          },
          _updateDomValue: function() {
            this.valueAccessor.writeValue(this._el.domElement, this._control().value);
          },
          _updateControlValue: function() {
            this._control().value = this.valueAccessor.readValue(this._el.domElement);
          },
          _control: function() {
            return this._groupDecorator.findControl(this.controlName);
          }
        }, {});
      }()));
      Object.defineProperty(ControlDirectiveBase, "parameters", {get: function() {
          return [[], [NgElement]];
        }});
      ControlNameDirective = $__export("ControlNameDirective", (function($__super) {
        var ControlNameDirective = function ControlNameDirective(groupDecorator, el) {
          $traceurRuntime.superConstructor(ControlNameDirective).call(this, groupDecorator, el);
        };
        return ($traceurRuntime.createClass)(ControlNameDirective, {onChange: function(_) {
            this._initialize();
          }}, {}, $__super);
      }(ControlDirectiveBase)));
      Object.defineProperty(ControlNameDirective, "annotations", {get: function() {
          return [new Decorator({
            lifecycle: [onChange],
            selector: '[control-name]',
            bind: {
              'controlName': 'control-name',
              'type': 'type'
            }
          })];
        }});
      Object.defineProperty(ControlNameDirective, "parameters", {get: function() {
          return [[ControlGroupDirective, new Ancestor()], [NgElement]];
        }});
      ControlDirective = $__export("ControlDirective", (function($__super) {
        var ControlDirective = function ControlDirective(groupDecorator, el) {
          $traceurRuntime.superConstructor(ControlDirective).call(this, groupDecorator, el);
        };
        return ($traceurRuntime.createClass)(ControlDirective, {onChange: function(_) {
            this._initialize();
          }}, {}, $__super);
      }(ControlDirectiveBase)));
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
          return [[NewControlGroupDirective, new Ancestor()], [NgElement]];
        }});
      ControlGroupDirective = $__export("ControlGroupDirective", (function($__super) {
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
        }, {}, $__super);
      }(ControlGroupDirectiveBase)));
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
          return [[ControlNameDirective]];
        }});
      Object.defineProperty(ControlGroupDirective.prototype.findControl, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      NewControlGroupDirective = $__export("NewControlGroupDirective", (function($__super) {
        var NewControlGroupDirective = function NewControlGroupDirective() {
          $traceurRuntime.superConstructor(NewControlGroupDirective).call(this);
          this._directives = ListWrapper.create();
        };
        return ($traceurRuntime.createClass)(NewControlGroupDirective, {
          set initData(value) {
            this._initData = value;
          },
          addDirective: function(c) {
            ListWrapper.push(this._directives, c);
            this._controlGroup = null;
          },
          findControl: function(name) {
            if (isBlank(this._controlGroup)) {
              this._controlGroup = this._createControlGroup();
            }
            return this._controlGroup.controls[name];
          },
          _createControlGroup: function() {
            var $__0 = this;
            var controls = ListWrapper.reduce(this._directives, (function(memo, cd) {
              var initControlValue = $__0._initData[cd.controlName];
              memo[cd.controlName] = new Control(initControlValue);
              return memo;
            }), {});
            return new ControlGroup(controls);
          },
          get value() {
            return this._controlGroup.value;
          }
        }, {}, $__super);
      }(ControlGroupDirectiveBase)));
      Object.defineProperty(NewControlGroupDirective, "annotations", {get: function() {
          return [new Component({
            selector: '[new-control-group]',
            bind: {'initData': 'new-control-group'}
          }), new Template({inline: '<content>'})];
        }});
      Object.defineProperty(NewControlGroupDirective.prototype.addDirective, "parameters", {get: function() {
          return [[ControlDirective]];
        }});
      Object.defineProperty(NewControlGroupDirective.prototype.findControl, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      FormDirectives = $__export("FormDirectives", [ControlGroupDirective, ControlNameDirective, ControlDirective, NewControlGroupDirective]);
    }
  };
});

//# sourceMappingURL=src/forms/directives.map

//# sourceMappingURL=../../src/forms/directives.js.map