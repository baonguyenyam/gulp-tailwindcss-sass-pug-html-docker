const gulp = require("gulp");
const sitemap = require("gulp-sitemap");

function createSitemap() {
	return gulp.src([
			// Ignore files start with underscore
			"./dist/**/*.html",
			"!./dist/_**/*",
		], {
			read: false
		})
		.pipe(sitemap({
			siteUrl: 'http://www.abc.com',
			priority: 0.5
		}))
		.pipe(gulp.dest("./dist"));
}

module.exports = createSitemap;