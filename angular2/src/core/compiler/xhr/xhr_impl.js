System.register(["angular2/di", "angular2/src/facade/async", "./xhr"], function($__export) {
  "use strict";
  var Injectable,
      Promise,
      PromiseWrapper,
      XHR,
      XHRImpl;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      XHR = $__m.XHR;
    }],
    execute: function() {
      XHRImpl = $__export("XHRImpl", (function($__super) {
        var XHRImpl = function XHRImpl() {
          $traceurRuntime.superConstructor(XHRImpl).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)(XHRImpl, {get: function(url) {
            var completer = PromiseWrapper.completer();
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'text';
            xhr.onload = function() {
              var status = xhr.status;
              if (200 <= status && status <= 300) {
                completer.resolve(xhr.responseText);
              } else {
                completer.reject(("Failed to load " + url));
              }
            };
            xhr.onerror = function() {
              completer.reject(("Failed to load " + url));
            };
            xhr.send();
            return completer.promise;
          }}, {}, $__super);
      }(XHR)));
      Object.defineProperty(XHRImpl, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(XHRImpl.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=xhr_impl.js.map

//# sourceMappingURL=../../../../src/core/compiler/xhr/xhr_impl.js.map