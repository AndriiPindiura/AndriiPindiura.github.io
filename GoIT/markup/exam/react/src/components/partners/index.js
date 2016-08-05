'use strict';

import React from 'react';
import styles from './main.scss';


class PartnersComponent extends React.Component {
	render() {
		const partners = [
			{
				photo: require('../../images/partners/partner1.png'),
				icon: require('../../images/partners/icon1.svg'),
				color: '#ff4e50',
				name: 'Bradley Hunter',
				info: 'Based in Chicago. I love playing tennis and loud music.'
			},
			{
				photo: require('../../images/partners/partner2.png'),
				icon: require('../../images/partners/icon2.svg'),
				color: '#1cd7ad',
				name: 'Heather Walker',
				info: 'I\'m a happy person that loves cats and climbing on mountains.'
			},
			{
				photo: require('../../images/partners/partner3.png'),
				icon: require('../../images/partners/icon3.svg'),
				color: '#ffa507',
				name: 'Lucas Marsha',
				info: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.'
			},
			{
				photo: require('../../images/partners/partner4.png'),
				icon: require('../../images/partners/icon4.svg'),
				color: '#4e73db',
				name: 'Bradley Hunter',
				info: 'Based in Chicago. I love playing tennis and loud music.'
			}
		];
		return (
			<section className={ styles.partners }>
				<header><h2>Meet a partner for your best holiday</h2></header>
				<main>
					{ partners.map((partner, index)=>{
						const photo = {
							backgroundImage: `url(${partner.photo})`
						};
						const icon = {
							backgroundColor: partner.color,
							backgroundImage: `url(${partner.icon})`
						};
						return (
							<section key={ index }>
								<div>
									<div className={ styles.photo } style={ photo }></div>
									<div className={ styles.icon } style={ icon }></div>
								</div>
								<h3>{ partner.name }</h3>
								<p>{ partner.info }</p>
							</section>
						);
					})}
				</main>
				<footer><button>See other partners</button></footer>
			</section>
		);
	}
}

PartnersComponent.displayName = 'PartnersComponent';

// Uncomment properties you need
// PartnersComponent.propTypes = {};
// PartnersComponent.defaultProps = {};

export default PartnersComponent;
