'use strict';

import React from 'react';
import styles from './main.scss';

require('styles//Footer.scss');

class FooterComponent extends React.Component {
	render() {
		return (
    <footer className={ styles.footer }>
      <h2>URLAUBSGLÜCK</h2>
      <div>
        <h3>Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3>Partners</h3>
        <ul>
        </ul>
      </div>
      <section>
        <span>Designed by</span>
        <img src={require('../../images/footer/areto.png')}/>
      </section>
    </footer>
  );
	}
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
