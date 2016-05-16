/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function (global) {
  System.config({
    defaultJSExtensions: true,
    packages: {
      'app': {
        main: 'main.js'
      }
    },
    paths: {
      '*': './node_modules/*',
      'app/': 'app/'
    },
    packageConfigPaths: ['./node_modules/*/package.json', './node_modules/@angular/*/package.json']
  });
})(this);

