var gulp = require('gulp'),
  connect = require('gulp-connect');


gulp.task('staticServer:connect', function() {
  connect.server({
    root: 'styleguide'
  });
});
