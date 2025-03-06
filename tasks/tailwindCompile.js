const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function tailwindCompile() {
	return gulp.src(
			'./src/styles/_tailwind/*.css'
		)
		.pipe(concat('core.scss'))
		.pipe(postcss([
			tailwindcss('./tailwind.config.js'),
			autoprefixer,
			cssnano
		]))
		.pipe(gulp.dest('./src/styles'))
		.pipe(browserSync.stream());
}

module.exports = tailwindCompile;