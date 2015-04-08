var gulp = require('gulp');
var config = require('../config.js');
require('gulp-task-loader')('../');

gulp.task('watch', function () {
	gulp.watch(config.less.watch, ['less']);
	gulp.start('browserify_task');
})