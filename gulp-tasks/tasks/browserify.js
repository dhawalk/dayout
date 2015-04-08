var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var config = require('../config.js').browserify;


// bundler.external(['react']);
// var bundler = browserify('./views/client/home/home.js').transform(reactify);
	// bundler.on('update', bundle); // on any dep update, runs the bundler


var taskFn = function () {

	var bundleQueue = config.bundleConfigs.length;

	var browserifyBundle = function (bundleConfig) {
		var bundler = browserify({
	        entries: bundleConfig.entries, // Only need initial file, browserify finds the deps
	        // transform: [reactify], // We want to convert JSX to normal javascript
	        debug: bundleConfig.debug, // Gives us sourcemapping
	        cache: {}, 
	        packageCache: {}, 
	        fullPaths: false // Requirement of watchify
	    });



		var bundle = function () {
			console.log('bundling...');
			return bundler.bundle()
				   .pipe(source(bundleConfig.outputName))
				   .pipe(gulp.dest(bundleConfig.dest));
		}

		bundler = watchify(bundler);
		bundler.on('update', bundle);

		return bundle();

	};

	config.bundleConfigs.forEach(browserifyBundle);

};


gulp.task('browserify_task', taskFn);

module.exports = taskFn;