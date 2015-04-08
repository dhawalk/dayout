var React = require('react');
var SettingsViewFactory = React.createFactory(require('../../shared/settings/settingsView.jsx'));

var SettingsView = {
	getMarkup: function () {
		return React.renderToString(
			SettingsViewFactory({})
		);
	}
}
module.exports = SettingsView;