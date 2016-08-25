require('../components/main.scss');
import React from 'react';
import * as breakpoints from '../external/breakpoints';
import Promo from './promo';
import HowItWork from './howitwork';
import Partners from './partners';
import Ideas from './ideas';
import Footer from './footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import SelectedIdea from './dialog';
import styles from './dialog/main.scss';


class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = { breakPoint: breakpoints.currentBreakpoint(), idea: null };
		this.showIdea = this.showIdea.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({ breakPoint: breakpoints.currentBreakpoint() });
		});
	}
	showIdea(idea) {
		// console.log(idea);
		this.setState({ idea });
	}
	render() {
		const idea = this.state.idea ?
			<SelectedIdea idea={this.state.idea} closeCallback={this.showIdea}/>
			// <Dialog
			// 	autoScrollBodyContent={false}
			// 	//className="qwerty"
			// 	//title="Scrollable Dialog"
			// 	//titleStyle={{ background: 'rgba(0, 0, 0, 0)' }}
			// 	//actionsContainerStyle={{ background: 'rgba(0, 0, 0, 0)' }}
			// 	//actionsContainerStyle={{ display: 'none' }}
			// 	className={styles.dialog}
			// 	// contentClassName={styles.dialog}
			// 	contentStyle={{ width: 'auto', maxWidth: 'initial', display: 'inline-block' }}
			// 	//contentStyle={{ background: `url(${this.state.idea}) no-repeat center`, height: '75vh' }}
			// 	// bodyClassName="body"
			// 	// bodyStyle={{ background: 'rgba(0, 0, 0, 0)' }}
			// 	// actionsContainerClassName="actions"
			// 	// overlayClassName="overlay"
			// 	// titleClassName="title"
			// 	//actions = {[(<button onClick={() => this.setState({ idea: null })}>close</button>)]}
			// 	modal={true}
			// 	open={this.state.idea ? true : false}
			// 	// open={this.state.open}
			// 	// onRequestClose={this.handleClose}
			// 	autoScrollBodyContent={true}
			// >
			// <nav>
			// 	<a href={this.state.idea.source} target="_blank">Read more...</a>
			// 	<button onClick={() => this.setState({ idea: null })}>
			// 		<svg width="12px" height="12px" viewBox="0 0 12 12">
			// 			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			// 				<g id="MyMovies" transform="translate(-960.000000, -131.000000)">
			// 					<g id="Moview" transform="translate(35.000000, 118.000000)">
			// 						<g id="ic_remove" transform="translate(922.000000, 10.000000)">
			// 							<path
			// 								d="M0,0 L18,0 L18,18 L0,18 L0,0 Z M0,0 L18,0 L18,18 L0,18 L0,0 Z"
			// 								id="Shape"
			// 							/>
			// 							<polygon
			// 								id="Shape"
			// 								fill="#9B9B9B"
			// 								points="14.53 4.53 13.47 3.47 9 7.94 4.53 3.47 3.47 4.53 7.94 9 3.47 13.47 4.53 14.53 9 10.06 13.47 14.53 14.53 13.47 10.06 9"
			// 							/>
			// 						</g>
			// 					</g>
			// 				</g>
			// 			</g>
			// 		</svg>
			// 	</button>
			// </nav>
			// <div>
			// 	<img src={this.state.idea.image} />
			// </div>

			// </Dialog>
			: false;

		return (
			<MuiThemeProvider>
				<div>
					<Promo breakpoint={this.state.breakPoint}/>
					<HowItWork breakpoint={this.state.breakPoint}/>
					<Partners />
					{idea}
					<Ideas callback={this.showIdea}/>
					<Footer />
				</div>
			</MuiThemeProvider>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
