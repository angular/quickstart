System.register([], function($__export) {
  "use strict";
  var webdriver;
  function clickAll(buttonSelectors) {
    buttonSelectors.forEach(function(selector) {
      $(selector).click();
    });
  }
  function verifyNoBrowserErrors() {
    browser.executeScript('1+1');
    browser.manage().logs().get('browser').then(function(browserLog) {
      var filteredLog = browserLog.filter(function(logEntry) {
        if (logEntry.level.value >= webdriver.logging.Level.INFO.value) {
          console.log('>> ' + logEntry.message);
        }
        return logEntry.level.value > webdriver.logging.Level.WARNING.value;
      });
      expect(filteredLog.length).toEqual(0);
    });
  }
  return {
    setters: [],
    execute: function() {
      webdriver = require('selenium-webdriver');
      module.exports = {
        verifyNoBrowserErrors: verifyNoBrowserErrors,
        clickAll: clickAll
      };
    }
  };
});

//# sourceMappingURL=src/test_lib/e2e_util.map

//# sourceMappingURL=../../src/test_lib/e2e_util.js.map