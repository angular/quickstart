System.register(["angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var isPresent,
      BaseException,
      ListWrapper,
      MapWrapper,
      Locals;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }],
    execute: function() {
      Locals = $__export("Locals", (function() {
        var Locals = function Locals(parent, current) {
          this.parent = parent;
          this.current = current;
        };
        return ($traceurRuntime.createClass)(Locals, {
          contains: function(name) {
            if (MapWrapper.contains(this.current, name)) {
              return true;
            }
            if (isPresent(this.parent)) {
              return this.parent.contains(name);
            }
            return false;
          },
          get: function(name) {
            if (MapWrapper.contains(this.current, name)) {
              return MapWrapper.get(this.current, name);
            }
            if (isPresent(this.parent)) {
              return this.parent.get(name);
            }
            throw new BaseException(("Cannot find '" + name + "'"));
          },
          set: function(name, value) {
            if (MapWrapper.contains(this.current, name)) {
              MapWrapper.set(this.current, name, value);
            } else {
              throw new BaseException('Setting of new keys post-construction is not supported.');
            }
          },
          clearValues: function() {
            MapWrapper.clearValues(this.current);
          }
        }, {});
      }()));
      Object.defineProperty(Locals, "parameters", {get: function() {
          return [[Locals], [Map]];
        }});
      Object.defineProperty(Locals.prototype.contains, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Locals.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Locals.prototype.set, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
    }
  };
});

//# sourceMappingURL=src/change_detection/parser/locals.map

//# sourceMappingURL=../../../src/change_detection/parser/locals.js.map