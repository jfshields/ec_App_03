// index.js

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Home } from './components/layouts/Home';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" render= {()=> <h1>Hello</h1>} />
			<Route path="/second" render= {()=> <h1>Second</h1>} />
		</div>
	</BrowserRouter>,
	document.getElementById('root'));