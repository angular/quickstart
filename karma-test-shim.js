/*global jasmine, __karma__, window*/
(function () {

// Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Cancel Karma's synchronous start,
// we call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function () { };

// SET THE RUNTIME APPLICATION ROOT HERE
var appRoot ='app'; // no trailing slash!

// RegExp for client application base path within karma (which always starts 'base\')
var karmaBase = '^\/base\/'; // RegEx string for base of karma folders
var appPackage = 'base/' + appRoot; //e.g., base/app
var appRootRe = new RegExp(karmaBase + appRoot + '\/');
var onlyAppFilesRe = new RegExp(karmaBase + appRoot + '\/(?!.*\.spec\.js$)([a-z0-9-_\.\/]+)\.js$');

var moduleNames = [];

// Configure systemjs packages to use the .js extension for imports from the app folder
var packages = {};
packages[appPackage] = {
    defaultExtension: false,
    format: 'register',
    map: Object.keys(window.__karma__.files)
      .filter(onlyAppFiles)
      // Create local module name mapping to karma file path for app files
      // with karma's fingerprint in query string, e.g.:
      // './hero.service': '/base/app/hero.service.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
      .reduce(function (pathsMapping, appPath) {
        var moduleName = appPath.replace(appRootRe, './').replace(/\.js$/, '');
        pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
        return pathsMapping;
      }, {})
  }

System.config({ packages: packages });

// Configure Angular for the browser and
// with test versions of the platform providers
System.import('angular2/testing')
  .then(function (testing) {
    return System.import('angular2/platform/testing/browser')
      .then(function (providers) {
        testing.setBaseTestProviders(
          providers.TEST_BROWSER_PLATFORM_PROVIDERS,
          providers.TEST_BROWSER_APPLICATION_PROVIDERS
        );
      });
  })

// Load all spec files
// (e.g. 'base/app/hero.service.spec.js')
.then(function () {
  return Promise.all(
    Object.keys(window.__karma__.files)
      .filter(onlySpecFiles)
      .map(function (moduleName) {
        moduleNames.push(moduleName);
        return System.import(moduleName);
      }));
})

.then(success, fail);

////// Helpers //////

function onlyAppFiles(filePath) {
  return onlyAppFilesRe.test(filePath);
}

function onlySpecFiles(filePath) {
  return /\.spec\.js$/.test(filePath);
}

function success () {
  console.log(
    'Spec files loaded:\n  ' +
    moduleNames.join('\n  ') +
    '\nStarting Jasmine testrunner');
  __karma__.start();
}

function fail(error) {
  __karma__.error(error.stack || error);
}

})();
