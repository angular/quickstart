System.register(["angular2/src/facade/collection", "./parser/locals"], function($__export) {
  "use strict";
  var List,
      Locals,
      ChangeRecord,
      CHECK_ONCE,
      CHECKED,
      CHECK_ALWAYS,
      DETACHED,
      ChangeDispatcher,
      ChangeDetector;
  return {
    setters: [function($__m) {
      List = $__m.List;
    }, function($__m) {
      Locals = $__m.Locals;
    }],
    execute: function() {
      ChangeRecord = $__export("ChangeRecord", (function() {
        var ChangeRecord = function ChangeRecord(bindingMemento, change) {
          this.bindingMemento = bindingMemento;
          this.change = change;
        };
        return ($traceurRuntime.createClass)(ChangeRecord, {
          get currentValue() {
            return this.change.currentValue;
          },
          get previousValue() {
            return this.change.previousValue;
          }
        }, {});
      }()));
      CHECK_ONCE = $__export("CHECK_ONCE", "CHECK_ONCE");
      CHECKED = $__export("CHECKED", "CHECKED");
      CHECK_ALWAYS = $__export("CHECK_ALWAYS", "ALWAYS_CHECK");
      DETACHED = $__export("DETACHED", "DETACHED");
      ChangeDispatcher = $__export("ChangeDispatcher", (function() {
        var ChangeDispatcher = function ChangeDispatcher() {};
        return ($traceurRuntime.createClass)(ChangeDispatcher, {onRecordChange: function(directiveMemento, records) {}}, {});
      }()));
      Object.defineProperty(ChangeDispatcher.prototype.onRecordChange, "parameters", {get: function() {
          return [[], [assert.genericType(List, ChangeRecord)]];
        }});
      ChangeDetector = $__export("ChangeDetector", (function() {
        var ChangeDetector = function ChangeDetector() {};
        return ($traceurRuntime.createClass)(ChangeDetector, {
          addChild: function(cd) {},
          removeChild: function(cd) {},
          remove: function() {},
          hydrate: function(context, locals) {},
          dehydrate: function() {},
          markPathToRootAsCheckOnce: function() {},
          detectChanges: function() {},
          checkNoChanges: function() {}
        }, {});
      }()));
      Object.defineProperty(ChangeDetector.prototype.addChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(ChangeDetector.prototype.removeChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(ChangeDetector.prototype.hydrate, "parameters", {get: function() {
          return [[assert.type.any], [Locals]];
        }});
    }
  };
});

//# sourceMappingURL=src/change_detection/interfaces.map

//# sourceMappingURL=../../src/change_detection/interfaces.js.map