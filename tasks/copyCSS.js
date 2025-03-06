const gulp = require("gulp");

function copyCSS() {
	return gulp.src([
			"./src/css/*.*",
		])
		.pipe(gulp.dest("./dist/css"));
}

module.exports = copyCSS;