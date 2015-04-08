var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config.js').less;

var taskFn = function () {
	return gulp.src(config.src)
			.pipe(less())
			.pipe(gulp.dest(config.dest));
};

gulp.task('less', taskFn);

module.exports = taskFn;