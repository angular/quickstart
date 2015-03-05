System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./interfaces"], function($__export) {
  "use strict";
  var isPresent,
      List,
      ListWrapper,
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
          this.children = [];
          this.mode = CHECK_ALWAYS;
        };
        return ($traceurRuntime.createClass)(AbstractChangeDetector, {
          addChild: function(cd) {
            ListWrapper.push(this.children, cd);
            cd.parent = this;
          },
          removeChild: function(cd) {
            ListWrapper.remove(this.children, cd);
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
            this._detectChangesInChildren(throwOnChange);
            if (this.mode === CHECK_ONCE)
              this.mode = CHECKED;
          },
          detectChangesInRecords: function(throwOnChange) {},
          _detectChangesInChildren: function(throwOnChange) {
            var children = this.children;
            for (var i = 0; i < children.length; ++i) {
              children[i]._detectChanges(throwOnChange);
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
      Object.defineProperty(AbstractChangeDetector.prototype._detectChanges, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInChildren, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
    }
  };
});

//# sourceMappingURL=src/change_detection/abstract_change_detector.map

//# sourceMappingURL=../../src/change_detection/abstract_change_detector.js.map