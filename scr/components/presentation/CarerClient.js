//Comment.js
import React, { Component } from 'react';

class CarerClient extends Component {

	render(){
		return(
			<div style= {{marginBottom: 16, borderBottom: '1px solid #ddd'}}>
				<p style= {{fontSize: 20, fontWeight: 400}}>
					{this.props.currentClient.client_name}
				</p>

				<span>{this.props.currentClient.n_visits}</span>
				<span style= {{marginLeft: 12, marginRight: 12, fontWeight: 200}}> | </span>
				<span>{this.props.currentClient.d_lastvisit}</span>
			</div>
		)
	}
}

export default CarerClient