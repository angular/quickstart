System.register(["angular2/di", "angular2/change_detection", "angular2/src/core/zone/vm_turn_zone", "angular2/src/core/exception_handler", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Injectable,
      ChangeDetector,
      VmTurnZone,
      ExceptionHandler,
      isPresent,
      LifeCycle;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      ChangeDetector = $__m.ChangeDetector;
    }, function($__m) {
      VmTurnZone = $__m.VmTurnZone;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }],
    execute: function() {
      LifeCycle = $__export("LifeCycle", (function() {
        var LifeCycle = function LifeCycle(exceptionHandler) {
          var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
          var enforceNoNewChanges = arguments[2] !== (void 0) ? arguments[2] : false;
          this._errorHandler = (function(exception, stackTrace) {
            exceptionHandler.call(exception, stackTrace);
            throw exception;
          });
          this._changeDetector = changeDetector;
          this._enforceNoNewChanges = enforceNoNewChanges;
        };
        return ($traceurRuntime.createClass)(LifeCycle, {
          registerWith: function(zone) {
            var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
            var $__0 = this;
            if (isPresent(changeDetector)) {
              this._changeDetector = changeDetector;
            }
            zone.initCallbacks({
              onErrorHandler: this._errorHandler,
              onTurnDone: (function() {
                return $__0.tick();
              })
            });
          },
          tick: function() {
            this._changeDetector.detectChanges();
            if (this._enforceNoNewChanges) {
              this._changeDetector.checkNoChanges();
            }
          }
        }, {});
      }()));
      Object.defineProperty(LifeCycle, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(LifeCycle, "parameters", {get: function() {
          return [[ExceptionHandler], [ChangeDetector], [assert.type.boolean]];
        }});
      Object.defineProperty(LifeCycle.prototype.registerWith, "parameters", {get: function() {
          return [[VmTurnZone], [ChangeDetector]];
        }});
    }
  };
});
//# sourceMappingURL=life_cycle.js.map

//# sourceMappingURL=../../../src/core/life_cycle/life_cycle.js.map