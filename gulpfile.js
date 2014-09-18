var gulp = require("gulp");
    webserver = require("gulp-webserver");

gulp.task("webserver", function() {
    gulp.src("app")
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: "index.html"
        }));
});

gulp.task("default", ["webserver"]);
// vim: set fenc=utf-8 ts=4 sts=4 sw=4 :
