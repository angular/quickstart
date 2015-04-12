System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var ABSTRACT,
      CONST,
      Type,
      Template;
  return {
    setters: [function($__m) {
      ABSTRACT = $__m.ABSTRACT;
      CONST = $__m.CONST;
      Type = $__m.Type;
    }],
    execute: function() {
      Template = $__export("Template", (function() {
        var Template = function Template($__1) {
          var $__2 = $__1,
              url = $__2.url,
              inline = $__2.inline,
              directives = $__2.directives,
              formatters = $__2.formatters,
              source = $__2.source,
              locale = $__2.locale,
              device = $__2.device;
          this.url = url;
          this.inline = inline;
          this.directives = directives;
          this.formatters = formatters;
          this.source = source;
          this.locale = locale;
          this.device = device;
        };
        return ($traceurRuntime.createClass)(Template, {}, {});
      }()));
      Object.defineProperty(Template, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});
//# sourceMappingURL=template.js.map

//# sourceMappingURL=../../../src/core/annotations/template.js.map