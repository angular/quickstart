System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "rx/dist/rx.all"], function($__export) {
  "use strict";
  var int,
      global,
      isPresent,
      List,
      Rx,
      Promise,
      PromiseWrapper,
      Observable,
      ObservableController,
      ObservableWrapper;
  return {
    setters: [function($__m) {
      int = $__m.int;
      global = $__m.global;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Rx = $__m.default;
    }],
    execute: function() {
      Promise = $__export("Promise", global.Promise);
      PromiseWrapper = $__export("PromiseWrapper", (function() {
        var PromiseWrapper = function PromiseWrapper() {};
        return ($traceurRuntime.createClass)(PromiseWrapper, {}, {
          resolve: function(obj) {
            return Promise.resolve(obj);
          },
          reject: function(obj) {
            return Promise.reject(obj);
          },
          catchError: function(promise, onError) {
            return promise.catch(onError);
          },
          all: function(promises) {
            if (promises.length == 0)
              return Promise.resolve([]);
            return Promise.all(promises);
          },
          then: function(promise, success, rejection) {
            return promise.then(success, rejection);
          },
          completer: function() {
            var resolve;
            var reject;
            var p = new Promise(function(res, rej) {
              resolve = res;
              reject = rej;
            });
            return {
              promise: p,
              resolve: resolve,
              reject: reject
            };
          },
          setTimeout: function(fn, millis) {
            global.setTimeout(fn, millis);
          },
          isPromise: function(maybePromise) {
            return maybePromise instanceof Promise;
          }
        });
      }()));
      Object.defineProperty(PromiseWrapper.catchError, "parameters", {get: function() {
          return [[Promise], [Function]];
        }});
      Object.defineProperty(PromiseWrapper.all, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(PromiseWrapper.then, "parameters", {get: function() {
          return [[Promise], [Function], [Function]];
        }});
      Object.defineProperty(PromiseWrapper.setTimeout, "parameters", {get: function() {
          return [[Function], [int]];
        }});
      Observable = $__export("Observable", Rx.Observable);
      ObservableController = $__export("ObservableController", Rx.Subject);
      ObservableWrapper = $__export("ObservableWrapper", (function() {
        var ObservableWrapper = function ObservableWrapper() {};
        return ($traceurRuntime.createClass)(ObservableWrapper, {}, {
          createController: function() {
            return new Rx.Subject();
          },
          createObservable: function(subject) {
            return subject;
          },
          subscribe: function(observable, generatorOrOnNext) {
            var onThrow = arguments[2] !== (void 0) ? arguments[2] : null;
            var onReturn = arguments[3] !== (void 0) ? arguments[3] : null;
            if (isPresent(generatorOrOnNext.next)) {
              return observable.observeOn(Rx.Scheduler.timeout).subscribe((function(value) {
                return generatorOrOnNext.next(value);
              }), (function(error) {
                return generatorOrOnNext.throw(error);
              }), (function() {
                return generatorOrOnNext.return();
              }));
            } else {
              return observable.observeOn(Rx.Scheduler.timeout).subscribe(generatorOrOnNext, onThrow, onReturn);
            }
          },
          callNext: function(subject, value) {
            subject.onNext(value);
          },
          callThrow: function(subject, error) {
            subject.onError(error);
          },
          callReturn: function(subject) {
            subject.onCompleted();
          }
        });
      }()));
      Object.defineProperty(ObservableWrapper.createObservable, "parameters", {get: function() {
          return [[Rx.Subject]];
        }});
      Object.defineProperty(ObservableWrapper.subscribe, "parameters", {get: function() {
          return [[Observable], [], [], []];
        }});
      Object.defineProperty(ObservableWrapper.callNext, "parameters", {get: function() {
          return [[Rx.Subject], [assert.type.any]];
        }});
      Object.defineProperty(ObservableWrapper.callThrow, "parameters", {get: function() {
          return [[Rx.Subject], [assert.type.any]];
        }});
      Object.defineProperty(ObservableWrapper.callReturn, "parameters", {get: function() {
          return [[Rx.Subject]];
        }});
    }
  };
});

//# sourceMappingURL=src/facade/async.map

//# sourceMappingURL=../../src/facade/async.js.map