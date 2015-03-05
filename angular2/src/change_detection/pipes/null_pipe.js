System.register(["angular2/src/facade/lang", "./pipe"], function($__export) {
  "use strict";
  var isBlank,
      Pipe,
      NO_CHANGE,
      NullPipeFactory,
      NullPipe;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
    }, function($__m) {
      Pipe = $__m.Pipe;
      NO_CHANGE = $__m.NO_CHANGE;
    }],
    execute: function() {
      NullPipeFactory = $__export("NullPipeFactory", (function() {
        var NullPipeFactory = function NullPipeFactory() {};
        return ($traceurRuntime.createClass)(NullPipeFactory, {
          supports: function(obj) {
            return NullPipe.supportsObj(obj);
          },
          create: function() {
            return new NullPipe();
          }
        }, {});
      }()));
      NullPipe = $__export("NullPipe", (function($__super) {
        var NullPipe = function NullPipe() {
          $traceurRuntime.superConstructor(NullPipe).call(this);
          this.called = false;
        };
        return ($traceurRuntime.createClass)(NullPipe, {
          supports: function(obj) {
            return NullPipe.supportsObj(obj);
          },
          transform: function(value) {
            if (!this.called) {
              this.called = true;
              return null;
            } else {
              return NO_CHANGE;
            }
          }
        }, {supportsObj: function(obj) {
            return isBlank(obj);
          }}, $__super);
      }(Pipe)));
    }
  };
});

//# sourceMappingURL=src/change_detection/pipes/null_pipe.map

//# sourceMappingURL=../../../src/change_detection/pipes/null_pipe.js.map