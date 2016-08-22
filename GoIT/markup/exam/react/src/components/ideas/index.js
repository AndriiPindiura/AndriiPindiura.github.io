'use strict';

import React from 'react';
import styles from './main.scss';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';


// import Masonry from 'masonry-layout';
import Masonry from 'react-masonry-component';


class IdeasComponent extends React.Component {
	constructor() {
		super();
		this.state = { result: [], searchRequest: '' };
		// this.search();
		// const skip = Math.floor(Math.random() * 20);
		// console.log(skip);
		// this.search('sport health extreme games culture relaxation traveling', skip);
		this.search('sport health extreme games culture relaxation traveling');
		// this.search('dog cat horse');
	}

	// getChildContext() {
	// 	return { muiTheme: getMuiTheme(baseTheme) };
	// }

	handleKeyPress(e) {
		// console.log(this);
		// console.log(e);
		// console.log(e.charCode);
		// console.log()
		// console.log(e.target.key);
		if (e.charCode === 13) {
			this.search(this.state.searchRequest);
		}
	}

	setSearchRequest(e) {
		this.setState({ searchRequest: e.target.value });
	}

	search(data, skip) {
		if (data.trim().length > 0)
		{
			// console.log(data);
			// console.log(skip);
			// console.log(Number.isInteger(skip));
			// `https://www.googleapis.com/customsearch/v1?q=dog&cx=006471260582658678081%3Akp9tiqcfqck&filter=1&num=7&searchType=image&key=AIzaSyCqwuYISMhnt1rH5D5SqzPZptyMz4y0sdM`
			fetch(`https://api.datamarket.azure.com/Bing/Search/Image?Query='${data.split(' ').join('+')}'&$top=15${skip && Number.isInteger(skip) ? `&$skip=${skip}` : ''}&$format=JSON`, {
				headers: {
					'Authorization': `Basic ${btoa('MbfQyJYgDJkVhKwyyV/dJqFoNrxhauqxCSa7+/udzmU=:MbfQyJYgDJkVhKwyyV/dJqFoNrxhauqxCSa7+/udzmU=')}`
				}
			})
				// fetch(data ? `https://www.googleapis.com/customsearch/v1?q=${data.split(' ').join('+')}&imgSize=large&cx=006471260582658678081%3Akp9tiqcfqck&filter=1&num=10&searchType=image&siteSearch=google.com&key=AIzaSyCqwuYISMhnt1rH5D5SqzPZptyMz4y0sdM` : 'http://api.pixplorer.co.uk/image?amount=7&size=3')
				// fetch(data ? `http://api.pixplorer.co.uk/image?word=${data.split(' ').join('+')}&amount=10&size=3` : 'http://api.pixplorer.co.uk/image?amount=7&size=3')
				.then(response => {
					// console.log(response.status);
					if (response.status === 200) {
						response.json().then(data => {
							console.log(data);
							// this.setState({ result: data.items });
							// this.setState({ result: data.images });
							this.setState({ result: data.d.results, searchRequest: '' });
							// 	this.msnry = Masonry( this.refs.masonry, {
							// 	// options
							// 	itemSelector: '.grid-item',
							// 	columnWidth: 200,
							// 	percentPosition: true,
							// 	// gutter: 5,
							// 	isFitWidth: true
							// });
							// console.log(this.msnry);
							//this.msnry.masonry('layout');

						});
					}
				})
				.catch(alert);
		}
	}

	// componentDidMount() {
	// 	this.msnry = new Masonry( this.refs.masonry, {
	// 		// options
	// 		itemSelector: '.grid-item',
	// 		columnWidth: 200,
	// 		percentPosition: true,
	// 		// gutter: 5,
	// 		isFitWidth: true
	// 	});
	// }

	// componentDidUpdate() {
	// 	// console.log(gridElement);
	// 	this.state.result.map(image => {
	// 		this.msnry.appended( image );
	// 	});
	// 	this.msnry.layout();
	// 	console.log(this.msnry);
	// }

	render() {
		const masonryOptions = {
			transitionDuration: 500,
			// columnWidth: 160,
			percentPosition: true,
			fitWidth: true,

			gutter: 10
		};

		// const gridStyles = {
		// 	root: {
		// 		display: 'flex',
		// 		flexWrap: 'wrap',
		// 		justifyContent: 'space-around'
		// 	},
		// 	gridList: {
		// 		width: 940,
		// 		//height: 450,
		// 		overflowY: 'auto',
		// 		marginBottom: 24
		// 	}
		// };


		return (
			<section className={ styles.ideas }>
				<div>
					<header>
						<h2>Discover holiday activity ideas</h2>
					</header>
					<main>
						<Masonry
							className={'my-gallery-class'} // default ''
							elementType={'ul'} // default 'div'
							options={masonryOptions} // default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
							>
							{this.state.result.map((image, index) => {
								return (
									<li key={index} className='grid-item' onClick={() => this.props.callback({ source: image.SourceUrl, image: image.MediaUrl})}>
										<div>
											<p>{image.Title}</p>
										</div>
										<img src={image.MediaUrl} />
									</li>
								);
							})}
						</Masonry>
					</main>
					<footer>
						<h2>Discover holiday activity ideas</h2>
						<h3>Hi!What are your holiday interests?</h3>
						<div>
							<input placeholder='Enter your interests' onKeyPress={ this.handleKeyPress.bind(this) } onChange={ this.setSearchRequest.bind(this) } value={ this.state.searchRequest }/>
							<button onClick={() => this.search(this.state.searchRequest) }>Search partners</button>
						</div>
					</footer>
				</div>
			</section>
		);
	}
}

// IdeasComponent.childContextTypes = {
// 	muiTheme: React.PropTypes.object.isRequired
// };


IdeasComponent.displayName = 'IdeasComponent';

// Uncomment properties you need
// IdeasComponent.propTypes = {};
// IdeasComponent.defaultProps = {};

export default IdeasComponent;
