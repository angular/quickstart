System.register(["angular2/src/facade/collection", "./view"], function($__export) {
  "use strict";
  var ListWrapper,
      MapWrapper,
      StringMapWrapper,
      List,
      viewModule,
      ViewPool;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      viewModule = $__m;
    }],
    execute: function() {
      ViewPool = $__export("ViewPool", (function() {
        var ViewPool = function ViewPool(capacity) {
          this._views = [];
          this._capacity = capacity;
        };
        return ($traceurRuntime.createClass)(ViewPool, {
          pop: function() {
            return ListWrapper.isEmpty(this._views) ? null : ListWrapper.removeLast(this._views);
          },
          push: function(view) {
            if (this._views.length < this._capacity) {
              ListWrapper.push(this._views, view);
            }
          },
          length: function() {
            return this._views.length;
          }
        }, {});
      }()));
      Object.defineProperty(ViewPool, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewPool.prototype.push, "parameters", {get: function() {
          return [[viewModule.View]];
        }});
    }
  };
});
//# sourceMappingURL=view_pool.js.map

//# sourceMappingURL=../../../src/core/compiler/view_pool.js.map