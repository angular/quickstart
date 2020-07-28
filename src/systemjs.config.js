/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      "angular:": "https://unpkg.com/@angular/",
      "syncfusion:": "https://cdn.syncfusion.com/ej2/",
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',
      "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
      // angular bundles
      '@angular/core': 'angular:core@5.2.10/bundles/core.umd.js',
        '@angular/common': 'angular:common@5.2.10/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler@5.2.10/bundles/compiler.umd.js',
        '@angular/http': 'angular:http@5.2.10/bundles/http.umd.js',
        '@angular/forms': 'angular:forms@5.2.10/bundles/forms.umd.js',
        '@angular/router': 'angular:router@5.2.10/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser@5.2.10/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic@5.2.10/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.10/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10',

      // other libraries
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
