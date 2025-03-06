const browserSync = require("browser-sync")
const gulpWatch = require("./gulpWatch")

function browserSyncInit() {
	browserSync.init({
		server: {
			baseDir: "./dist",
		},
		port: 5000,
		// ui: {
		// 	port: 5001
		// },
		browser: "google chrome",
	});

	gulpWatch();
}

module.exports = browserSyncInit