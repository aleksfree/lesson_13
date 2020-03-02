const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "app"
      }
  });
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('browser-sync'));