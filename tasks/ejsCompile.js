const gulp = require("gulp");
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

function ejsCompile() {
	return gulp.src([
			// Ignore files start with underscore
			"./src/template_ejs/**/*.ejs",
			"!./src/template_ejs/_**/*",
		])
		.pipe(ejs())
		// Remove .ejs extension
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = ejsCompile;