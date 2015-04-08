var React = require('react');

var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var TabBar = React.createClass({
	onChange: function (tabIndex, tab) {
		console.log(tabIndex, tab);
		if (tabIndex === 0) {
			window.location = '/';
		}
		else if (tabIndex == 1) {
			window.location = '/settings';
		}
	},
	render: function () {
		return (
			<Tabs onChange={this.onChange} initialSelectedIndex={this.props.initialSelectedIndex}>
					<Tab label="Home">
					</Tab>
					<Tab label="Settings">
					</Tab>
				</Tabs>
		)
	}
});

module.exports = TabBar;