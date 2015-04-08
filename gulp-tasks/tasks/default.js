var gulp = require('gulp');
var watch = require('./watch.js');


var taskFn = function () {
	gulp.start('watch');
};

gulp.task('default', taskFn)


module.exports = taskFn;
