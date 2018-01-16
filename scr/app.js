//ES6 code!

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Carers from './components/Carers'

class App extends Component {
	render(){
		return (
		<div >
			Hello React, This is the fourth
			<Carers />
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))