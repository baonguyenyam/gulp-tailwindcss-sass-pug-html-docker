const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');

function compressCSS() {
	return gulp.src([
			"./dist/css/style.css"
		])
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(postcss([
			autoprefixer,
			cssnano
		]))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest("./dist/css"));
}

module.exports = compressCSS;