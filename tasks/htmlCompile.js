const gulp = require("gulp");

function htmlCompile() {
	return gulp.src([
			// Ignore files start with underscore
			"./src/template_html/**/*.html",
			"!./src/template_html/_**/*",
		])
		.pipe(gulp.dest("./dist"));
}

module.exports = htmlCompile;