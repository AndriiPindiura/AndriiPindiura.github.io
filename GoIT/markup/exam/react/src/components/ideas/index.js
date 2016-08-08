'use strict';

import React from 'react';
import styles from './main.scss';
import Masonry from 'masonry-layout';

class IdeasComponent extends React.Component {
	constructor() {
		super();
		this.state = { result: [] };
		// this.search();
		const skip = Math.floor(Math.random() * 100);
		console.log(skip);
		this.search('sport health extreme games culture relaxation traveling', skip);
		// this.search('dog cat horse');
	}

	search(data, skip) {
		// `https://www.googleapis.com/customsearch/v1?q=dog&cx=006471260582658678081%3Akp9tiqcfqck&filter=1&num=7&searchType=image&key=AIzaSyCqwuYISMhnt1rH5D5SqzPZptyMz4y0sdM`
		fetch(`https://api.datamarket.azure.com/Bing/Search/Image?Query='${data.split(' ').join('+')}'&$top=7&$skip=${skip ? skip: 0}&$format=JSON`, {
		//fetch(`https://api.datamarket.azure.com/Bing/SearchWeb/Web?Query='Xbox'&$top=7&$skip=20&$format=JSON`, {
			headers: {
				'Authorization': `Basic ${btoa('MbfQyJYgDJkVhKwyyV/dJqFoNrxhauqxCSa7+/udzmU=:MbfQyJYgDJkVhKwyyV/dJqFoNrxhauqxCSa7+/udzmU=')}`
			}
		})
		// fetch(data ? `https://www.googleapis.com/customsearch/v1?q=${data.split(' ').join('+')}&amount=7&size=3&cx=006471260582658678081%3Akp9tiqcfqck&filter=1&num=7&searchType=image&siteSearch=google.com&key=AIzaSyCqwuYISMhnt1rH5D5SqzPZptyMz4y0sdM` : 'http://api.pixplorer.co.uk/image?amount=7&size=3')
		// fetch(data ? `http://api.pixplorer.co.uk/image?word=${data.split(' ').join('+')}&amount=7&size=3` : 'http://api.pixplorer.co.uk/image?amount=7&size=3')
  .then( response => {
	// console.log(response.status);
	if (response.status === 200) {
		response.json().then(data => {
			// console.log(data);
      // console.log(this);
			// this.setState({ result: data.items });
			// this.setState({ result: data.images });
			this.setState({ result: data.d.results });
			// console.log(this.msnry);
			console.log(this.msnry);
			
			//this.msnry.masonry('layout');

		});
	}
      })
.catch( alert );
	}

	componentDidMount() {
		this.msnry = new Masonry( this.refs.masonry, {
			// options
			itemSelector: '.grid-item',
			columnWidth: 200,
			percentPosition: true,
			// gutter: 5,
			isFitWidth: true
		});
	}

	componentDidUpdate() {
		console.log('update');
	}

	render() {
		return (
      <section className={ styles.ideas }>
        <div>
          <header>
            <h2>Discover holiday activity ideas</h2>
          </header>
          <main>
						<div ref='masonry'>
							{ this.state.result.map((image, index) => {
								return (
									<div key={ index } className='grid-item'>
										<img src={ image.Thumbnail.MediaUrl } />
									</div>
								);
							}) }
						</div>
          </main>
          <footer>
            <h2>Discover holiday activity ideas</h2>
            <h3>Hi!What are your holiday interests?</h3>
            <div>
              <input placeholder='Enter your interests'/>
              <button onClick={ this.search }>Search partners</button>
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
