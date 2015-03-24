System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var CONST,
      Inject,
      InjectPromise,
      InjectLazy,
      Optional,
      DependencyAnnotation,
      Injectable;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
    }],
    execute: function() {
      Inject = $__export("Inject", (function() {
        var Inject = function Inject(token) {
          this.token = token;
        };
        return ($traceurRuntime.createClass)(Inject, {}, {});
      }()));
      Object.defineProperty(Inject, "annotations", {get: function() {
          return [new CONST()];
        }});
      InjectPromise = $__export("InjectPromise", (function() {
        var InjectPromise = function InjectPromise(token) {
          this.token = token;
        };
        return ($traceurRuntime.createClass)(InjectPromise, {}, {});
      }()));
      Object.defineProperty(InjectPromise, "annotations", {get: function() {
          return [new CONST()];
        }});
      InjectLazy = $__export("InjectLazy", (function() {
        var InjectLazy = function InjectLazy(token) {
          this.token = token;
        };
        return ($traceurRuntime.createClass)(InjectLazy, {}, {});
      }()));
      Object.defineProperty(InjectLazy, "annotations", {get: function() {
          return [new CONST()];
        }});
      Optional = $__export("Optional", (function() {
        var Optional = function Optional() {};
        return ($traceurRuntime.createClass)(Optional, {}, {});
      }()));
      Object.defineProperty(Optional, "annotations", {get: function() {
          return [new CONST()];
        }});
      DependencyAnnotation = $__export("DependencyAnnotation", (function() {
        var DependencyAnnotation = function DependencyAnnotation() {};
        return ($traceurRuntime.createClass)(DependencyAnnotation, {}, {});
      }()));
      Object.defineProperty(DependencyAnnotation, "annotations", {get: function() {
          return [new CONST()];
        }});
      Injectable = $__export("Injectable", (function() {
        var Injectable = function Injectable() {};
        return ($traceurRuntime.createClass)(Injectable, {}, {});
      }()));
      Object.defineProperty(Injectable, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});

//# sourceMappingURL=src/di/annotations.map

//# sourceMappingURL=../../src/di/annotations.js.map