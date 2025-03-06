const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

function babelCompile() {
	return gulp.src("./src/scripts/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest("./dist/js"));
}

module.exports = babelCompile;