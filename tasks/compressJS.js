const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-uglify');

function compressJS() {
	return gulp.src([
			"./dist/js/main.js"
		])
		.pipe(concat('main.min.js'))
		.pipe(minify())
		.pipe(gulp.dest("./dist/js"));
}

module.exports = compressJS;