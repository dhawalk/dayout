var React = require('react');
var HomeViewFactory = React.createFactory(require('../../shared/home/homeView.jsx'));

var HomeView = {
	getMarkup: function () {
		return React.renderToString(
			HomeViewFactory({})
		);
	}
}
module.exports = HomeView;