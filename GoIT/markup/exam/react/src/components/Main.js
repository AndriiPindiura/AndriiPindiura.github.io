require('../components/main.scss');
import React from 'react';
import * as breakpoints from '../external/breakpoints';
import Promo from './promo';
import HowItWork from './howitwork';
import Partners from './partners';

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
		return (
			<div className="urlaubsgluck">
				<Promo breakpoint={this.state.breakPoint}/>
				<HowItWork breakpoint={this.state.breakPoint}/>
				<Partners />
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
