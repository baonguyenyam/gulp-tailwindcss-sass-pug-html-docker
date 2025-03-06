import gulp from 'gulp';
import prettier from 'gulp-prettier';

function htmlValidate() {
	return gulp.src(
			[
				"./dist/*.html",
				"./dist/**/*.html",
			]
		)
		.pipe(prettier({
			"bracketSpacing": true,
			"bracketSameLine": true,
			"tabWidth": 4,
			"useTabs": true,
			"proseWrap": "never",
			"printWidth": 500
		}))
		.pipe(gulp.dest("./dist"));
}

export default htmlValidate;