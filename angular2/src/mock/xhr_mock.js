System.register(["angular2/src/core/compiler/xhr/xhr", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var XHR,
      List,
      ListWrapper,
      Map,
      MapWrapper,
      isBlank,
      isPresent,
      normalizeBlank,
      BaseException,
      PromiseWrapper,
      Promise,
      XHRMock,
      _PendingRequest,
      _Expectation;
  return {
    setters: [function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      normalizeBlank = $__m.normalizeBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
      Promise = $__m.Promise;
    }],
    execute: function() {
      XHRMock = $__export("XHRMock", (function($__super) {
        var XHRMock = function XHRMock() {
          $traceurRuntime.superConstructor(XHRMock).call(this);
          this._expectations = [];
          this._definitions = MapWrapper.create();
          this._requests = [];
        };
        return ($traceurRuntime.createClass)(XHRMock, {
          get: function(url) {
            var request = new _PendingRequest(url);
            ListWrapper.push(this._requests, request);
            return request.getPromise();
          },
          expect: function(url, response) {
            var expectation = new _Expectation(url, response);
            ListWrapper.push(this._expectations, expectation);
          },
          when: function(url, response) {
            MapWrapper.set(this._definitions, url, response);
          },
          flush: function() {
            if (this._requests.length === 0) {
              throw new BaseException('No pending requests to flush');
            }
            do {
              var request = ListWrapper.removeAt(this._requests, 0);
              this._processRequest(request);
            } while (this._requests.length > 0);
            this.verifyNoOustandingExpectations();
          },
          verifyNoOustandingExpectations: function() {
            if (this._expectations.length === 0)
              return ;
            var urls = [];
            for (var i = 0; i < this._expectations.length; i++) {
              var expectation = this._expectations[i];
              ListWrapper.push(urls, expectation.url);
            }
            throw new BaseException(("Unsatisfied requests: " + ListWrapper.join(urls, ', ')));
          },
          _processRequest: function(request) {
            var url = request.url;
            if (this._expectations.length > 0) {
              var expectation = this._expectations[0];
              if (expectation.url == url) {
                ListWrapper.remove(this._expectations, expectation);
                request.complete(expectation.response);
                return ;
              }
            }
            if (MapWrapper.contains(this._definitions, url)) {
              var response = MapWrapper.get(this._definitions, url);
              request.complete(normalizeBlank(response));
              return ;
            }
            throw new BaseException(("Unexpected request " + url));
          }
        }, {}, $__super);
      }(XHR)));
      Object.defineProperty(XHRMock.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(XHRMock.prototype.expect, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(XHRMock.prototype.when, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(XHRMock.prototype._processRequest, "parameters", {get: function() {
          return [[_PendingRequest]];
        }});
      _PendingRequest = (function() {
        var _PendingRequest = function _PendingRequest(url) {
          this.url = url;
          this.completer = PromiseWrapper.completer();
        };
        return ($traceurRuntime.createClass)(_PendingRequest, {
          complete: function(response) {
            if (isBlank(response)) {
              this.completer.reject(("Failed to load " + this.url));
            } else {
              this.completer.resolve(response);
            }
          },
          getPromise: function() {
            return this.completer.promise;
          }
        }, {});
      }());
      Object.defineProperty(_PendingRequest.prototype.complete, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      _Expectation = (function() {
        var _Expectation = function _Expectation(url, response) {
          this.url = url;
          this.response = response;
        };
        return ($traceurRuntime.createClass)(_Expectation, {}, {});
      }());
      Object.defineProperty(_Expectation, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=src/mock/xhr_mock.map

//# sourceMappingURL=../../src/mock/xhr_mock.js.map