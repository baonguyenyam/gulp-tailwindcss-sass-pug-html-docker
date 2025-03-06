const gulp = require("gulp");

function copyJS() {
	return gulp.src([
			"./src/js/*.*",
		])
		.pipe(gulp.dest("./dist/js"));
}

module.exports = copyJS;