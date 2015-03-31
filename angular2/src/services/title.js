System.register(["angular2/src/dom/dom_adapter"], function($__export) {
  "use strict";
  var DOM,
      Title;
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }],
    execute: function() {
      Title = $__export("Title", (function() {
        var Title = function Title() {
          ;
        };
        return ($traceurRuntime.createClass)(Title, {
          getTitle: function() {
            return DOM.getTitle();
          },
          setTitle: function(newTitle) {
            DOM.setTitle(newTitle);
          }
        }, {});
      }()));
      Object.defineProperty(Title.prototype.setTitle, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=title.js.map

//# sourceMappingURL=../../src/services/title.js.map