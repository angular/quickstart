System.register(["angular2/src/core/annotations/annotations", "angular2/src/core/compiler/view_container", "angular2/src/core/dom/element", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/annotations/visibility"], function($__export) {
  "use strict";
  var Decorator,
      Viewport,
      ViewContainer,
      NgElement,
      isPresent,
      isBlank,
      normalizeBlank,
      ListWrapper,
      List,
      MapWrapper,
      Map,
      Parent,
      Switch,
      SwitchWhen,
      SwitchDefault,
      _whenDefault;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
      Viewport = $__m.Viewport;
    }, function($__m) {
      ViewContainer = $__m.ViewContainer;
    }, function($__m) {
      NgElement = $__m.NgElement;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      normalizeBlank = $__m.normalizeBlank;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
    }, function($__m) {
      Parent = $__m.Parent;
    }],
    execute: function() {
      Switch = $__export("Switch", (function() {
        var Switch = function Switch() {
          this._valueViewContainers = MapWrapper.create();
          this._activeViewContainers = ListWrapper.create();
          this._useDefault = false;
        };
        return ($traceurRuntime.createClass)(Switch, {
          set value(value) {
            this._emptyAllActiveViewContainers();
            this._useDefault = false;
            var containers = MapWrapper.get(this._valueViewContainers, value);
            if (isBlank(containers)) {
              this._useDefault = true;
              containers = normalizeBlank(MapWrapper.get(this._valueViewContainers, _whenDefault));
            }
            this._activateViewContainers(containers);
            this._switchValue = value;
          },
          _onWhenValueChanged: function(oldWhen, newWhen, viewContainer) {
            this._deregisterViewContainer(oldWhen, viewContainer);
            this._registerViewContainer(newWhen, viewContainer);
            if (oldWhen === this._switchValue) {
              viewContainer.remove();
              ListWrapper.remove(this._activeViewContainers, viewContainer);
            } else if (newWhen === this._switchValue) {
              if (this._useDefault) {
                this._useDefault = false;
                this._emptyAllActiveViewContainers();
              }
              viewContainer.create();
              ListWrapper.push(this._activeViewContainers, viewContainer);
            }
            if (this._activeViewContainers.length === 0 && !this._useDefault) {
              this._useDefault = true;
              this._activateViewContainers(MapWrapper.get(this._valueViewContainers, _whenDefault));
            }
          },
          _emptyAllActiveViewContainers: function() {
            var activeContainers = this._activeViewContainers;
            for (var i = 0; i < activeContainers.length; i++) {
              activeContainers[i].remove();
            }
            this._activeViewContainers = ListWrapper.create();
          },
          _activateViewContainers: function(containers) {
            if (isPresent(containers)) {
              for (var i = 0; i < containers.length; i++) {
                containers[i].create();
              }
              this._activeViewContainers = containers;
            }
          },
          _registerViewContainer: function(value, container) {
            var containers = MapWrapper.get(this._valueViewContainers, value);
            if (isBlank(containers)) {
              containers = ListWrapper.create();
              MapWrapper.set(this._valueViewContainers, value, containers);
            }
            ListWrapper.push(containers, container);
          },
          _deregisterViewContainer: function(value, container) {
            if (value == _whenDefault)
              return ;
            var containers = MapWrapper.get(this._valueViewContainers, value);
            if (containers.length == 1) {
              MapWrapper.delete(this._valueViewContainers, value);
            } else {
              ListWrapper.remove(containers, container);
            }
          }
        }, {});
      }()));
      Object.defineProperty(Switch, "annotations", {get: function() {
          return [new Decorator({
            selector: '[switch]',
            bind: {'value': 'switch'}
          })];
        }});
      Object.defineProperty(Switch.prototype._onWhenValueChanged, "parameters", {get: function() {
          return [[], [], [ViewContainer]];
        }});
      Object.defineProperty(Switch.prototype._activateViewContainers, "parameters", {get: function() {
          return [[assert.genericType(List, ViewContainer)]];
        }});
      Object.defineProperty(Switch.prototype._registerViewContainer, "parameters", {get: function() {
          return [[], [ViewContainer]];
        }});
      Object.defineProperty(Switch.prototype._deregisterViewContainer, "parameters", {get: function() {
          return [[], [ViewContainer]];
        }});
      SwitchWhen = $__export("SwitchWhen", (function() {
        var SwitchWhen = function SwitchWhen(el, viewContainer, sswitch) {
          this._value = _whenDefault;
          this._switch = sswitch;
          this._viewContainer = viewContainer;
        };
        return ($traceurRuntime.createClass)(SwitchWhen, {set when(value) {
            this._switch._onWhenValueChanged(this._value, value, this._viewContainer);
            this._value = value;
          }}, {});
      }()));
      Object.defineProperty(SwitchWhen, "annotations", {get: function() {
          return [new Viewport({
            selector: '[switch-when]',
            bind: {'when': 'switch-when'}
          })];
        }});
      Object.defineProperty(SwitchWhen, "parameters", {get: function() {
          return [[NgElement], [ViewContainer], [Switch, new Parent()]];
        }});
      SwitchDefault = $__export("SwitchDefault", (function() {
        var SwitchDefault = function SwitchDefault(viewContainer, sswitch) {
          sswitch._registerViewContainer(_whenDefault, viewContainer);
        };
        return ($traceurRuntime.createClass)(SwitchDefault, {}, {});
      }()));
      Object.defineProperty(SwitchDefault, "annotations", {get: function() {
          return [new Viewport({selector: '[switch-default]'})];
        }});
      Object.defineProperty(SwitchDefault, "parameters", {get: function() {
          return [[ViewContainer], [Switch, new Parent()]];
        }});
      _whenDefault = new Object();
    }
  };
});
//# sourceMappingURL=switch.js.map

//# sourceMappingURL=../../src/directives/switch.js.map