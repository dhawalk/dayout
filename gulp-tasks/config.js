var dest = './public';

module.exports = {
	less: {
		src: './less/main.less',
		dest: dest + '/css',
		watch: [
			'./less/**'
		]
	},
	browserify: {
		debug: true,
		bundleConfigs: [
			{
				entries: './views/client/home/home.jsx',
				dest: dest + '/js',
				outputName: 'home.js'
			},
			{
				entries: './views/client/settings/settings.jsx',
				dest: dest + '/js',
				outputName: 'settings.js'
			}

		]
	}
}