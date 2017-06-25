var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('build', 'build:css');

gulp.task('build:css', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', function () {
  gulp.watch([
    './src/scss/*.scss',
  ], ['build']);
})
