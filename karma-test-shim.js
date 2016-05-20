// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.js$/.test(path);
}

function isBuiltFile(path) {
  var builtPath = '/base/app/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

//////////////////////////
// Load our SystemJS configuration.

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

  // Bundled (~40 requests):  DOESN'T WORK IN KARMA OR WALLABY (YET?)
  //packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };

  // Individual files (~300 requests):
  packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

var config = {
  baseURL: '/base',
  map: map,
  packages: packages
}

System.config(config);
//////////////

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
  var testing = providers[0];
  var testingBrowser = providers[1];

  testing.setBaseTestProviders(
    testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

}).then(function() {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);
