const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');
const sass = gulpSass(dartSass)

function sassCompile() {
	return gulp.src("./src/styles/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({
			// style: 'compressed',
			silenceDeprecations: ['legacy-js-api']
		}).on('error', sass.logError))
		.pipe(postcss())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest("./dist/css"))
		.pipe(browserSync.stream())
}

module.exports = sassCompile