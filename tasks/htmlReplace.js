const gulp = require("gulp");
const fs = require('fs');
const replace = require("gulp-replace");

function htmlReplace() {
	return gulp.src([
			// Ignore files start with underscore
			"./dist/**/*.html",
			"!./dist/_snippets/**/*",
			"!./dist/_**/*",
		])
		.pipe(replace(/<!--\s*#\s*include\s*virtual="(.+?)"\s*-->\s*/g, function (match, p1) {
			if (fs.existsSync('./src/template_html' + p1)) {
				return fs.readFileSync('./src/template_html' + p1);
			}
			return match
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = htmlReplace;