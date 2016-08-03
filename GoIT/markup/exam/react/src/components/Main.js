require('../components/main.scss');
import React from 'react';
import * as breakpoints from '../external/breakpoints';

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = { breakPoint: breakpoints.currentBreakpoint() };
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({ breakPoint: breakpoints.currentBreakpoint() });
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className="urlaubsgluck">
			{this.state.breakPoint.name}
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
