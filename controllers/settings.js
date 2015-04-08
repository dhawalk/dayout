var React = require('react');
var SettingsView = require('../views/server/settings/settings.jsx');
var SettingsController = {
	handle: function (req, res, next) {
		var markup = SettingsView.getMarkup();
		res.render('server/settings/settings', {
			markup: markup
		});
	}
}
module.exports = SettingsController;