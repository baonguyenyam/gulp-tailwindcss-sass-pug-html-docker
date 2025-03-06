const gulp = require('gulp');
const formatHTML = require('gulp-html-beautify');

function formatHtmlSiteApp() {
	return gulp.src(
			[
				"./dist/*.html",
				"./dist/*.xml",
				"./dist/**/*.html",
			]
		)
		.pipe(formatHTML({
			"indent_size": 4,
			"indent_char": " ",
			"eol": "\n",
			"indent_level": 0,
			"indent_with_tabs": true,
			"preserve_newlines": true,
			"max_preserve_newlines": 10,
			"jslint_happy": false,
			"space_after_anon_function": false,
			"brace_style": "collapse",
			"keep_array_indentation": false,
			"keep_function_indentation": false,
			"space_before_conditional": false,
			"break_chained_methods": false,
			"eval_code": false,
			"unescape_strings": false,
			"wrap_line_length": 0,
			"wrap_attributes": "auto",
			"wrap_attributes_indent_size": 4,
			"end_with_newline": false,
			"remove_empty_lines": true,
			"remove_all_extra_space": true,
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = formatHtmlSiteApp;