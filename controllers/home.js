var React = require('react');
var HomeView = require('../views/server/home/home.jsx');
var HomeController = {
	handle: function (req, res, next) {
		var markup = HomeView.getMarkup();
		res.render('server/home/home', {
			markup: markup
		});
	}
}
module.exports = HomeController;