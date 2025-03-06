const gulp = require("gulp");
const copy = require("gulp-copy");

function copyApp() {
	return gulp.src([
			"./dist/**/*.*",
		])
		.pipe(copy("./app", {
			prefix: 1
		}));
}

module.exports = copyApp;