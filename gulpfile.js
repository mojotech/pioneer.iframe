var gulp    = require("gulp"),
    coffee  = require('gulp-coffee');

gulp.task("default", function() {
    gulp.src([
      'src/widget.iframe.coffee',
    ])
    .pipe(coffee())
    .pipe(gulp.dest("lib"))
});

gulp.task("watch", function() {
  gulp.watch('src/**/*.coffee', ['default'])
});
