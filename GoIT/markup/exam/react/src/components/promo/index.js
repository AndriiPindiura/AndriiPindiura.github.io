'use strict';

import React from 'react';
import styles from './main.scss';
import {
  phonePortrait,
  phoneLandscape,
  tabletPortrait,
  tabletLandscape,
  desktop,
  desktopWide,
  desktopHD,
  desktopMega
}  from '../../external/breakpoints';

class PromoComponent extends React.Component {
  render() {
    return (
      <section className={styles.promo}>
        <nav>
          {(this.props.breakpoint.name === phonePortrait) ? null : (<h2>URLAUBSGLÜCK</h2>) }
          <div>
            <a href='#'>Log in</a>
            <a href='#'>Sign up</a>
          </div>
        </nav>
        {(this.props.breakpoint.name === phonePortrait) ? (<h2>URLAUBSGLÜCK</h2>) : null}
        <h1>Share your holiday dreams</h1>
        <h3>And find the perfect partner to fullfill it</h3>
        <button>Find your holiday partner</button>
      </section>
    );
  }
}

PromoComponent.displayName = 'PromoComponent';

// Uncomment properties you need
// PromoComponent.propTypes = {};
// PromoComponent.defaultProps = {};

export default PromoComponent;
