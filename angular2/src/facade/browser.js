System.register([], function($__export) {
  "use strict";
  var win,
      document,
      location,
      gc;
  return {
    setters: [],
    execute: function() {
      win = window;
      $__export("window", win);
      document = $__export("document", window.document);
      location = $__export("location", window.location);
      gc = $__export("gc", window.gc ? (function() {
        return window.gc();
      }) : (function() {
        return null;
      }));
    }
  };
});
//# sourceMappingURL=browser.js.map

//# sourceMappingURL=../../src/facade/browser.js.map