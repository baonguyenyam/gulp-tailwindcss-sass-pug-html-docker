const gulp = require("gulp");
const copy = require("gulp-copy");

function copyData() {
	return gulp.src([
			"./src/data/**/*.*",
		])
		.pipe(copy("./dist", {
			prefix: 1
		}));
}

module.exports = copyData;