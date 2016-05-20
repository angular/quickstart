// Configuration for the Wallaby Visual Studio Code testing extension
// https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode
// Note: Wallaby is not open source and costs money

module.exports = function () {

  return {
    files: [
      // System.js for module loading
      {pattern: 'node_modules/systemjs/dist/system.js', instrument: false},

      // Polyfills
      {pattern: 'node_modules/core-js/client/shim.min.js', instrument: false},

      // Reflect, Zone.js, and test shims
      // Rx.js, Angular 2 itself, and the testing library not here because loaded by systemjs
      {pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/zone.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/jasmine-patch.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/async-test.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/fake-async-test.js', instrument: false},

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

    debug: true,

    bootstrap: function (wallaby) {
      wallaby.delayStart();
      systemConfig();

      Promise.all([
        System.import('@angular/core/testing'),
        System.import('@angular/platform-browser-dynamic/testing')
      ])
      .then(function (providers) {
        var testing = providers[0];
        var testingBrowser = providers[1];

        testing.setBaseTestProviders(
          testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
          testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);


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

      //////////////////////////
      // SystemJS configuration.
      function systemConfig() {

        // map tells the System loader where to look for things
        var map = {
          'app':                        'app',

          '@angular':                   'node_modules/@angular',
          'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
          'rxjs':                       'node_modules/rxjs'
        };

        // packages tells the System loader how to load when no filename and/or no extension
        var packages = {
          'app':                        { main: 'main.js',  defaultExtension: 'js' },
          'rxjs':                       { defaultExtension: 'js' },
          'angular2-in-memory-web-api': { defaultExtension: 'js' },
        };

        var ngPackageNames = [
          'common',
          'compiler',
          'core',
          'http',
          'platform-browser',
          'platform-browser-dynamic',
          'router',
          'router-deprecated',
          'upgrade',
        ];

        // Add package entries for angular packages
        ngPackageNames.forEach(function(pkgName) {

          // Bundled (~40 requests):  DOESN'T WORK IN WALLABY OR KARMA (YET?)
          // packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };

          // Individual files (~300 requests):
          packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
        });

        var config = {
          map: map,
          packages: packages
        }

        System.config(config);
      }
      //////////////////
    }
  };



};

