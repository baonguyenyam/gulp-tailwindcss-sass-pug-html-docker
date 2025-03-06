const gulp = require("gulp");
const pug = require("gulp-pug");

function pugCompile() {
	return gulp.src([
			// Ignore files start with underscore
			"./src/template_pug/**/*.pug",
			"!./src/template_pug/_**/*",
		])
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = pugCompile;