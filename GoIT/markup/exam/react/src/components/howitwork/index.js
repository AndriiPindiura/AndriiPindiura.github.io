'use strict';

import React from 'react';
import styles from './main.scss';
import Carousel from 'nuka-carousel';
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

const Slider = React.createClass({
	mixins: [Carousel.ControllerMixin],
	render() {
		const Decorators = [{
			component: React.createClass({
				render() {
					return (
						<button className={ styles.arrowprevious }
							onClick={this.props.previousSlide}/>
					);
				}
			}),
			position: 'CenterLeft'
		},
			{
				component: React.createClass({
					render() {
						return (
							<button className={ styles.arrownext }
								onClick={this.props.nextSlide} />
						);
					}
				}),
				position: 'CenterRight'
			}];

		return (
			<article>
				<Carousel decorators={ this.props.breakpoint == (phonePortrait || phoneLandscape) ? null : Decorators }>
					{ this.props.content.map((elem, index) => {
						const style = {
							backgroundImage: `url(${elem.img})`
						};
						return (
							<div style={ style } className={ styles.carouselitem } key={ index }>
								<span>{ elem.info.caption }</span>
								<h1>{ elem.info.ceo }</h1>
								<p>{ elem.info.description }</p>
							</div>
						);
					}) }
				</Carousel>
			</article>
		);
	}
});



class HowitworkComponent extends React.Component {
	render() {
		// console.log(Nuka);
		const firstSlider = [
			{
				img: require('../../images/howitwork/step1.png'),
				info: {
					caption: 'step 1',
					ceo: 'Sed leo enim, condimentum',
					description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
				}
			},
			{
				img: require('../../images/howitwork/step2.png'),
				info: {
					caption: 'step 2',
					ceo: 'Morbi velit risus',
					description: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.'
				}
			},
			{
				img: require('../../images/howitwork/step3.png'),
				info: {
					caption: 'step 3',
					ceo: 'Sed leo enim, condimentum',
					description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
				}
			}
		];
		const secondSlider = [
			{
				img: require('../../images/howitwork/step2.png'),
				info: {
					caption: 'step 2',
					ceo: 'Morbi velit risus',
					description: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.'
				}
			},
			{
				img: require('../../images/howitwork/step1.png'),
				info: {
					caption: 'step 1',
					ceo: 'Sed leo enim, condimentum',
					description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
				}
			},
			{
				img: require('../../images/howitwork/step3.png'),
				info: {
					caption: 'step 3',
					ceo: 'Sed leo enim, condimentum',
					description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
				}
			}
		];
		const thirdSlider = [
			{
				img: require('../../images/howitwork/step3.png'),
				info: {
					caption: 'step 3',
					ceo: 'Sed leo enim, condimentum',
					description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
				}
			},
			{
				img: require('../../images/howitwork/step1.png'),
				info: {
					caption: 'step 1',
					ceo: 'Sed leo enim, condimentum',
					description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
				}
			},
			{
				img: require('../../images/howitwork/step2.png'),
				info: {
					caption: 'step 2',
					ceo: 'Morbi velit risus',
					description: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.'
				}
			}
		];
		// console.log(Carousel);
		return (
			<section className={ styles.howitwork }>
				<div>
					<header>
						<h2>How Urlaubsglück works?</h2>
					</header>
					<main>
						<Slider content={ firstSlider } breakpoint={ this.props.breakpoint }/>
						<Slider content={ secondSlider } breakpoint={ this.props.breakpoint }/>
						<Slider content={ thirdSlider } breakpoint={ this.props.breakpoint }/>
					</main>
				</div>
			</section>
		);
	}
}

HowitworkComponent.displayName = 'HowitworkComponent';

// Uncomment properties you need
// HowitworkComponent.propTypes = {};
// HowitworkComponent.defaultProps = {};

export default HowitworkComponent;
