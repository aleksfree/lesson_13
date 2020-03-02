const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: 'app'
      }
  });
  gulp.watch(['app/*.html', 'app/**/*.css']).on('change', browserSync.reload);
});

/* Минифицирует css файлы */
gulp.task('styles', function() {
  return gulp.src('app/css/**/*.css')
  .pipe(cleanCss({compatibility: 'ie8'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.parallel('styles', 'browser-sync'));