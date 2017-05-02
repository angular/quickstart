/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'cldr-data': 'npm:cldr-data',
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'jszip': 'npm:jszip',
      'systemjs-plugin-json': 'npm:systemjs-plugin-json',

      // Kendo UI for Angular scopes
      '@progress': 'npm:@progress',
      '@telerik': 'npm:@telerik'
    },
    meta: {
      '*.json': {
        loader: 'systemjs-plugin-json'
      }
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
      },

      jszip: {
        defaultExtension: 'js',
        main: './dist/jszip.js'
      },

      'systemjs-plugin-json': {
          defaultExtension: 'js',
          main: 'json.js'
      },

      // Kendo UI for Angular packages
      'npm:@progress/kendo-angular-buttons': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-charts': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-dateinputs': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-dropdowns': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-dialog': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-grid': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-inputs': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-l10n': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-excel-export': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-layout': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-scrollview': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-sortable': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-popup': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-resize-sensor': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-upload': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-charts': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-data-query': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-date-math': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-drawing': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-file-saver': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-ooxml': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-popup-common': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-draggable': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-dropdowns-common': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-inputs-common': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
