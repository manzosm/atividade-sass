const gulp = require("gulp");
const sass = require("gulp-sass");
const notify = require("gulp-notify");
const del = require("del");

/*variaveis para compressÃ£o css*/
/*expandido para desenvolvimento*/
var sassDesenvolvimento = {
    outputStyle: 'expanded',
}
/*Comprimido para produÃ§Ã£o*/
var sassProducao = {
    outputStyle: 'compressed',
}


gulp.task("sass", ['delCss'], function () {
    gulp.src("./scss/style.scss")
        .pipe(sass(sassDesenvolvimento)).on("error", notify.onError({
            title: "erro ao compilar",
            message: "<%= error.message %>"
        }))
        .pipe(gulp.dest("./assets/css/")).on("error", notify.onError({
            title: "erro ao enviar o aqruivo para pasta de destino ",
            message: "<%= error.message %>"
        }));
});


gulp.task("delCss", function () {
    return del("./assets/css/");
});


gulp.task("sass:watch", function () {
    gulp.watch("./scss/**/*.scss", ['sass']);
});


gulp.task("default", ['sass', 'sass:watch', 'delCss']);
