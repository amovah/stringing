var gulp = require('gulp');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');

gulp.task('babel', function() {
  return gulp.src('src/index.js')
        .pipe(babel())
        .pipe(gulp.dest('built'))
});

gulp.task('browserify', ['babel'], function() {
  return browserify('built/index.js', {
    standalone: 'stringing'
  })
  .bundle()
  .pipe(source('stringing.js'))
  .pipe(gulp.dest('built'));
});

gulp.task('build', ['browserify'], function() {
  return gulp.src('built/stringing.js')
        .pipe(uglify())
        .pipe(rename('stringing.min.js'))
        .pipe(gulp.dest('built'));
});

gulp.task('default', ['babel'], function() {
  gulp.watch('src/index.js', ['babel']);
});
