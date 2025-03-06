const gulp = require("gulp");
const copy = require("gulp-copy");

function copyImages() {
	return gulp.src([
			"./src/images/**/*.*",
		])
		.pipe(copy("./dist", {
			prefix: 1
		}));
}

module.exports = copyImages;