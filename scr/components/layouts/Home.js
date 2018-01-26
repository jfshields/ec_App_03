import React, { Component } from 'react';
import ClientsList from '../containers/ClientsList.js'
import CarersList from '../containers/CarersList.js'

class Home extends Component {
	render(){
		return(
			<div className= "container">
				<div className= "row">
					<div className= 'col-md-4'>
						<ClientsList />
					</div>
					<div className= 'col-md-8'>
						<CarersList />
					</div>
				</div>
			</div>
		)
	}
}

export default Home