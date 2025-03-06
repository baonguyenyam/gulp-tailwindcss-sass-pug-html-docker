const gulp = require('gulp');
const babel = require('gulp-babel');

function babelCompilePro() {
	return gulp.src("./src/scripts/*.js")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest("./dist/js"));
}

module.exports = babelCompilePro;