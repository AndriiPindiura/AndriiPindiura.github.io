'use strict';

import React from 'react';
import styles from './main.scss';

class SelectedIdeaComponent extends React.Component {
	handleKeyPress(e) {
	}

	setSearchRequest(e) {
		this.setState({ searchRequest: e.target.value });
	}


	render() {
		console.log(this.props.idea);
		return (
			<section className={ styles.dialog }>
				<div
					style={
						{
							height: `${this.props.idea.Height}px`
						}
					}
				>
				<nav>
					<a href={this.props.idea.SourceUrl}>{this.props.idea.Title}</a>
					<button onClick={() => this.props.closeCallback(null)}>
						<svg width="12px" height="12px" viewBox="0 0 12 12">
							<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g id="MyMovies" transform="translate(-960.000000, -131.000000)">
									<g id="Moview" transform="translate(35.000000, 118.000000)">
										<g id="ic_remove" transform="translate(922.000000, 10.000000)">
											<path
												d="M0,0 L18,0 L18,18 L0,18 L0,0 Z M0,0 L18,0 L18,18 L0,18 L0,0 Z"
												id="Shape"
											/>
											<polygon
												id="Shape"
												fill="#9B9B9B"
												points="14.53 4.53 13.47 3.47 9 7.94 4.53 3.47 3.47 4.53 7.94 9 3.47 13.47 4.53 14.53 9 10.06 13.47 14.53 14.53 13.47 10.06 9"
											/>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</button>
				</nav>
				<img src={this.props.idea.MediaUrl}	/>
				</div>
			</section>
		);
	}
}

// IdeasComponent.childContextTypes = {
// 	muiTheme: React.PropTypes.object.isRequired
// };


SelectedIdeaComponent.displayName = 'SelectedIdeaComponent';

// Uncomment properties you need
SelectedIdeaComponent.propTypes = {
	idea: React.PropTypes.object.isRequired,
	closeCallback: React.PropTypes.func.isRequired,
};
// IdeasComponent.defaultProps = {};

export default SelectedIdeaComponent;
