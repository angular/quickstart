var gulp = require('gulp');
var shell = require('gulp-shell');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

// static dependencies for Angular2
var deps = [
  'node_modules/systemjs/node_modules/es6-module-loader/node_modules/traceur/bin/traceur.js',
  'node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
  'node_modules/systemjs/dist/system.js',
  'node_modules/zone.js/zone.js',
  'node_modules/zone.js/long-stack-trace-zone.js',
  './traceurOptions.js'
];

// Angular2 AtScript to ES5
gulp.task('build:ng2', shell.task(['sh ng2build.sh']));

// strip off the sourceMaps.
gulp.task('build:strip_maps', shell.task(["sh strip_maps.sh"]));

// Concat all static dependencies for Angular2
gulp.task('build:shim', function() {
  return gulp.src(deps)
    .pipe(concat('es6-shim.js'))
    .pipe(gulp.dest('./dist/'));
});

// Delete to start fresh
gulp.task('clean', function(cb) {
  del([
    './angular2',
    './rtts_assert',
    './dist'
  ], cb);
});

// Synchronous build
//  1. clean
//  2. ng2build
//  3. concat es6 shim file
gulp.task('default', function(cb) {
  runSequence('clean',
      'build:ng2',
      'build:shim',
      'build:strip_maps',
      cb);
});
