const gulp = require('gulp');
const clean = require('gulp-clean-css');

function cleanCSS() {
	return gulp.src("./dist/css/*.css")
		.pipe(clean({
			format: {
				breaks: {
					afterAtRule: 1,
					afterBlockBegins: 1,
					afterComment: 2,
					afterBlockEnds: 1, // OK
					beforeBlockEnds: 1, // OK
					afterRuleEnds: 1, // OK
					afterProperty: 0, // OK
					afterRuleBegins: 0, // OK
					betweenSelectors: 0 // OK
				},
				breakWith: '\n',
				indentBy: 0,
				spaces: {
					aroundSelectorRelation: 0,
					beforeBlockBegins: 0,
					beforeValue: 1
				},
				wrapAt: 0,
				semicolonAfterLastProperty: 1
			},
		}))
		.pipe(gulp.dest("./dist/css"))
}

module.exports = cleanCSS