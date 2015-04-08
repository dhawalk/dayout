var React = require('react');

var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var Tabbar = require('../../components/tabbar/tabBarView.jsx');
// var GlobalSearch = require('../../components/global-search/globalSearchView.jsx');
// var TrendingView = require('../../components/trending/trendingView.jsx');


var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


var SettingsView = React.createClass({
	render: function () {
		return (
				<div>
					<Tabbar initialSelectedIndex={1}/>
					Settings
				</div>
			)
	}
});

module.exports = SettingsView;