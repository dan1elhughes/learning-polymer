module.exports = {
	staticFileGlobs: [
		'./index.html',
		'./manifest.json',
		'./bower_components/webcomponentsjs/webcomponents-lite.js',
		'./images/*',
	],
	navigateFallback: './index.html',
	navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
};
