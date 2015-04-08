var React = require('react');

var TestView = React.createClass({
	getInitialState: function () {
		// props = props || this.props;
		return {

		}
	},
	componentWillReceiveProps: function (newProps, oldProps) {
		// this.setState(this.getInitialState(newProps));
	},
	render: function () {
		return (
				<p> This is from React </p>
			)
	},
	componentDidMount: function () {
		console.log('In Comp Did Mount');
	}
});

module.exports = TestView;