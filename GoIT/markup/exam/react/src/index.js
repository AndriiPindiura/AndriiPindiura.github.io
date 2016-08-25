import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import ES6Promise from 'es6-promise';
require('./components/main.scss');
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ES6Promise.polyfill();

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
