const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', function() {
  return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('built'))
});

gulp.task('default', ['build'], function() {
  gulp.watch(['src/**/*.js'], ['build']);
});
