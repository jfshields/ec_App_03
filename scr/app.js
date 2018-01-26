
//ES6 code!
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home'

class App extends Component {
	
	render(){
		return (
			<div className="App">
		        <Route path="/" component={ Home } />
			</div>
		)
	}
}

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>), document.getElementById('root'))
