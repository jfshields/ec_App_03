import React, { Component } from 'react';
import Carers from '../containers/Carers.js'
import CarerClients from '../containers/CarerClients.js'

class Home extends Component {
	render(){
		return(
			<div className= "container">
				<div className= "row">
					<div className= 'col-md-4'>
						<Carers />
					</div>
					<div className= 'col-md-8'>
						<CarerClients />
					</div>
				</div>
			</div>
		)
	}
}

export default Home