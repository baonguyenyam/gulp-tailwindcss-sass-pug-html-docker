const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');
const sass = gulpSass(dartSass)

function sassCompileProduct() {
	return gulp.src("./src/styles/*.scss")
		.pipe(sass({
			style: 'compressed',
			silenceDeprecations: ['legacy-js-api']
		}).on('error', sass.logError))
		.pipe(postcss())
		.pipe(gulp.dest("./dist/css"))
		.pipe(browserSync.stream());
}

module.exports = sassCompileProduct;