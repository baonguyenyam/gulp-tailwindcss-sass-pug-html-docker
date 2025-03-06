const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');

function htmlCompress() {
	return gulp.src(
			[
				"./dist/*.html",
				"./dist/*.xml",
				"./dist/**/*.html",
			]
		)
		.pipe(htmlMin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = htmlCompress;