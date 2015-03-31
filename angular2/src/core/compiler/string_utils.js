System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var StringWrapper,
      RegExpWrapper,
      DASH_CASE_REGEXP,
      CAMEL_CASE_REGEXP;
  function dashCaseToCamelCase(input) {
    return StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, (function(m) {
      return m[1].toUpperCase();
    }));
  }
  function camelCaseToDashCase(input) {
    return StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, (function(m) {
      return '-' + m[1].toLowerCase();
    }));
  }
  $__export("dashCaseToCamelCase", dashCaseToCamelCase);
  $__export("camelCaseToDashCase", camelCaseToDashCase);
  return {
    setters: [function($__m) {
      StringWrapper = $__m.StringWrapper;
      RegExpWrapper = $__m.RegExpWrapper;
    }],
    execute: function() {
      DASH_CASE_REGEXP = RegExpWrapper.create('-([a-z])');
      CAMEL_CASE_REGEXP = RegExpWrapper.create('([A-Z])');
      Object.defineProperty(dashCaseToCamelCase, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(camelCaseToDashCase, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=string_utils.js.map

//# sourceMappingURL=../../../src/core/compiler/string_utils.js.map