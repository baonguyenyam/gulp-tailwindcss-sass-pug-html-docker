const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');

function replaceMeta() {
	return gulp.src(
			[
				"./dist/*.html",
				"./dist/**/*.html",
			]
		)
		.pipe(replace(/<!--\s*\{\{\s*meta\s*\}\}\s*-->\s*/g, function (match) {
			const metaFile = this.file.path.replace('index.html', '') + '.meta';
			if (fs.existsSync(metaFile)) {
				return fs.readFileSync(metaFile);
			}
			return match;
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = replaceMeta;