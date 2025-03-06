const gulp = require("gulp");
const REVMAN = require("gulp-rev");

function addRev() {
	return gulp.src([
			"./dist/**/*.css",
			"./dist/**/*.js",
		])
		.pipe(REVMAN().manifest())
		.pipe(gulp.dest("./dist"));
}

module.exports = addRev;