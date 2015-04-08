// exports.home = function (req, res, next) {
// 	var homeController = require('./home');
// 	console.log('in controller');
// 	homeController.handle(req, res, next);
// };

var controller = {
	home: function (req, res, next) {
		var HomeController = require('./home');
		HomeController.handle(req, res, next);
	},

	settings: function (req, res, next) {
		var SettingsController = require('./settings');
		SettingsController.handle(req, res, next);
	}
}

module.exports = controller;