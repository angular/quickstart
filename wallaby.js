// Configuration for the Wallaby Visual Studio Code testing extension
// https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode
// Note: Wallaby is not open source and costs money
module.exports = function () {

  return {
    files: [
      {pattern: 'node_modules/es6-shim/es6-shim.js', instrument: false},
      {pattern: 'node_modules/systemjs/dist/system-polyfills.js', instrument: false},
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', instrument: false},
      {pattern: 'node_modules/systemjs/dist/system.js', instrument: false},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', instrument: false},
      {pattern: 'node_modules/angular2/bundles/angular2.dev.js', instrument: false},
      {pattern: 'node_modules/angular2/bundles/http.dev.js', instrument: false},
      {pattern: 'node_modules/angular2/bundles/router.dev.js', instrument: false},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', instrument: false},

      {pattern: 'app/**/*+(ts|html|css)', load: false},
      {pattern: 'app/**/*.spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'app/**/*.spec.ts', load: false}
    ],

    middleware: function (app, express) {
      app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
    },

    testFramework: 'jasmine',

    bootstrap: function (wallaby) {
      wallaby.delayStart();

      System.config({
        packages: {
          app: {
            defaultExtension: 'js',
            meta: {
              '*': {
                scriptLoad: true
              }
            }
          }
        }
      });

      // Configure Angular for the browser and
      // with test versions of the platform providers
      Promise.all([
        System.import('angular2/testing'),
        System.import('angular2/platform/testing/browser')
      ])
      .then(function (results) {
        var testing = results[0];
        var browser = results[1];
        testing.setBaseTestProviders(
          browser.TEST_BROWSER_PLATFORM_PROVIDERS,
          browser.TEST_BROWSER_APPLICATION_PROVIDERS);

        // Load all spec files
        return Promise.all(wallaby.tests.map(function (specFile) {
          return System.import(specFile);
        }));
      })
      .then(function () {
        wallaby.start();
      })
      .catch(function (e) {
        setTimeout(function () {
          throw e;
        }, 0);
      });
    },

    debug: true
  };
};
