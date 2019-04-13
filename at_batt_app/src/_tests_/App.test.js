import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';

import {render} from 'react-testing-library'

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	render(<App/>)
})
