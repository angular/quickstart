module.exports = function(config) {

  var appBase   = 'app/';     // transpiled app JS files
  var appAssets ='base/app/'; // component assets fetched by Angular's compiler

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter')
    ],

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      // Angular and shim libraries loaded by Karma
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
      { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
      { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },
      { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },

      // External libraries loaded by Karma
      { pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true },
      { pattern: 'node_modules/a2-in-memory-web-api/web-api.js', included: true, watched: true },

      // Configures module loader w/ app and specs, then launch karma
      { pattern: 'karma-test-shim.js', included: true, watched: true },

      // transpiled application & spec code paths loaded via module imports
      {pattern: appBase + '**/*.js', included: false, watched: true},

      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: appBase + '**/*.html', included: false, watched: true},
      {pattern: appBase + '**/*.css', included: false, watched: true},

      // paths for debugging with source maps in dev tools
      {pattern: appBase + '**/*.ts', included: false, watched: false},
      {pattern: appBase + '**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/": appAssets
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'html'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
