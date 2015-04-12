System.register(["angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var List,
      ListWrapper,
      StringMapWrapper,
      normalizeBlank,
      isPresent,
      global,
      VmTurnZone;
  return {
    setters: [function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      normalizeBlank = $__m.normalizeBlank;
      isPresent = $__m.isPresent;
      global = $__m.global;
    }],
    execute: function() {
      VmTurnZone = $__export("VmTurnZone", (function() {
        var VmTurnZone = function VmTurnZone($__2) {
          var enableLongStackTrace = $__2.enableLongStackTrace;
          this._nestedRunCounter = 0;
          this._onTurnStart = null;
          this._onTurnDone = null;
          this._onErrorHandler = null;
          this._outerZone = global.zone;
          this._innerZone = this._createInnerZone(this._outerZone, enableLongStackTrace);
        };
        return ($traceurRuntime.createClass)(VmTurnZone, {
          initCallbacks: function() {
            var $__2 = arguments[0] !== (void 0) ? arguments[0] : {},
                onTurnStart = $__2.onTurnStart,
                onTurnDone = $__2.onTurnDone,
                onScheduleMicrotask = $__2.onScheduleMicrotask,
                onErrorHandler = $__2.onErrorHandler;
            this._onTurnStart = normalizeBlank(onTurnStart);
            this._onTurnDone = normalizeBlank(onTurnDone);
            this._onErrorHandler = normalizeBlank(onErrorHandler);
          },
          run: function(fn) {
            return this._innerZone.run(fn);
          },
          runOutsideAngular: function(fn) {
            return this._outerZone.run(fn);
          },
          _createInnerZone: function(zone, enableLongStackTrace) {
            var $__0 = this;
            var vmTurnZone = this;
            var errorHandling;
            if (enableLongStackTrace) {
              errorHandling = StringMapWrapper.merge(Zone.longStackTraceZone, {onError: function(e) {
                  vmTurnZone._onError(this, e);
                }});
            } else {
              errorHandling = {onError: function(e) {
                  vmTurnZone._onError(this, e);
                }};
            }
            return zone.fork(errorHandling).fork({
              beforeTask: (function() {
                $__0._beforeTask();
              }),
              afterTask: (function() {
                $__0._afterTask();
              })
            });
          },
          _beforeTask: function() {
            this._nestedRunCounter++;
            if (this._nestedRunCounter === 1 && this._onTurnStart) {
              this._onTurnStart();
            }
          },
          _afterTask: function() {
            this._nestedRunCounter--;
            if (this._nestedRunCounter === 0 && this._onTurnDone) {
              this._onTurnDone();
            }
          },
          _onError: function(zone, e) {
            if (isPresent(this._onErrorHandler)) {
              var trace = [normalizeBlank(e.stack)];
              while (zone && zone.constructedAtException) {
                trace.push(zone.constructedAtException.get());
                zone = zone.parent;
              }
              this._onErrorHandler(e, trace);
            } else {
              throw e;
            }
          }
        }, {});
      }()));
    }
  };
});
//# sourceMappingURL=vm_turn_zone.js.map

//# sourceMappingURL=../../../src/core/zone/vm_turn_zone.js.map