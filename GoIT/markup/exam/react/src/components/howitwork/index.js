'use strict';

import React from 'react';
import styles from './main.scss';

require('styles//Howitwork.scss');

class HowitworkComponent extends React.Component {
	render() {
		return (
      <section className={styles.howitwork}>
      Please edit src/components///HowitworkComponent.js to update this component!
      </section>
      );
	}
}

HowitworkComponent.displayName = 'HowitworkComponent';

// Uncomment properties you need
// HowitworkComponent.propTypes = {};
// HowitworkComponent.defaultProps = {};

export default HowitworkComponent;
