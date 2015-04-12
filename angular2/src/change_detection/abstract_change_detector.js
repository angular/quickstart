System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./binding_propagation_config", "./interfaces"], function($__export) {
  "use strict";
  var isPresent,
      List,
      ListWrapper,
      BindingPropagationConfig,
      ChangeDetector,
      CHECK_ALWAYS,
      CHECK_ONCE,
      CHECKED,
      DETACHED,
      AbstractChangeDetector;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      BindingPropagationConfig = $__m.BindingPropagationConfig;
    }, function($__m) {
      ChangeDetector = $__m.ChangeDetector;
      CHECK_ALWAYS = $__m.CHECK_ALWAYS;
      CHECK_ONCE = $__m.CHECK_ONCE;
      CHECKED = $__m.CHECKED;
      DETACHED = $__m.DETACHED;
    }],
    execute: function() {
      AbstractChangeDetector = $__export("AbstractChangeDetector", (function($__super) {
        var AbstractChangeDetector = function AbstractChangeDetector() {
          $traceurRuntime.superConstructor(AbstractChangeDetector).call(this);
          this.lightDomChildren = [];
          this.shadowDomChildren = [];
          this.bindingPropagationConfig = new BindingPropagationConfig(this);
          this.mode = CHECK_ALWAYS;
        };
        return ($traceurRuntime.createClass)(AbstractChangeDetector, {
          addChild: function(cd) {
            ListWrapper.push(this.lightDomChildren, cd);
            cd.parent = this;
          },
          removeChild: function(cd) {
            ListWrapper.remove(this.lightDomChildren, cd);
          },
          addShadowDomChild: function(cd) {
            ListWrapper.push(this.shadowDomChildren, cd);
            cd.parent = this;
          },
          remove: function() {
            this.parent.removeChild(this);
          },
          detectChanges: function() {
            this._detectChanges(false);
          },
          checkNoChanges: function() {
            this._detectChanges(true);
          },
          _detectChanges: function(throwOnChange) {
            if (this.mode === DETACHED || this.mode === CHECKED)
              return ;
            this.detectChangesInRecords(throwOnChange);
            this._detectChangesInLightDomChildren(throwOnChange);
            this.notifyOnAllChangesDone();
            this._detectChangesInShadowDomChildren(throwOnChange);
            if (this.mode === CHECK_ONCE)
              this.mode = CHECKED;
          },
          detectChangesInRecords: function(throwOnChange) {},
          notifyOnAllChangesDone: function() {},
          _detectChangesInLightDomChildren: function(throwOnChange) {
            var c = this.lightDomChildren;
            for (var i = 0; i < c.length; ++i) {
              c[i]._detectChanges(throwOnChange);
            }
          },
          _detectChangesInShadowDomChildren: function(throwOnChange) {
            var c = this.shadowDomChildren;
            for (var i = 0; i < c.length; ++i) {
              c[i]._detectChanges(throwOnChange);
            }
          },
          markPathToRootAsCheckOnce: function() {
            var c = this;
            while (isPresent(c) && c.mode != DETACHED) {
              if (c.mode === CHECKED)
                c.mode = CHECK_ONCE;
              c = c.parent;
            }
          }
        }, {}, $__super);
      }(ChangeDetector)));
      Object.defineProperty(AbstractChangeDetector.prototype.addChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype.removeChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype.addShadowDomChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype._detectChanges, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInLightDomChildren, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInShadowDomChildren, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
    }
  };
});
//# sourceMappingURL=abstract_change_detector.js.map

//# sourceMappingURL=../../src/change_detection/abstract_change_detector.js.map