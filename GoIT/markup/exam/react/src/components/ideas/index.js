'use strict';

import React from 'react';
import styles from './main.scss';

class IdeasComponent extends React.Component {
	constructor() {
		super();
    this.state = { result: [] };
    this.search('sport health extreme games culture relaxation traveling');
	}

	search(data) {
    // console.log(this);
		//data = 'dog';
		fetch(`https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=7&q=${data}`)
  .then( response => {
	// console.log(response.status);
	if (response.status === 200) {
		response.json().then(data => {
			console.log(data);
      // console.log(this);
      this.setState({ result: data.hits });
		});
	}
  // console.log(response.body);
	// console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
	// console.log(response.status); // 200
	// console.log(response.json());
      })
.catch( alert );
	}

	render() {
		return (
      <section className={ styles.ideas }>
        <div>
          <header>
            <h2>Discover holiday activity ideas</h2>
          </header>
          <main></main>
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

IdeasComponent.displayName = 'IdeasComponent';

// Uncomment properties you need
// IdeasComponent.propTypes = {};
// IdeasComponent.defaultProps = {};

export default IdeasComponent;
