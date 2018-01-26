//Comment.js
import React, { Component } from 'react';

class CarerClient extends Component {

	deleteCarer(){
		console.log('deleteCarer')
	}

	render(){
		return(
			<div style= {{marginBottom: 16, borderBottom: '1px solid #ddd'}}>
				<p style= {{fontSize: 20, fontWeight: 400}}>
					{this.props.currentClient.name_first}
				</p>

				<span>{this.props.currentClient.name_surna}</span>
				<span style= {{marginLeft: 12, marginRight: 12, fontWeight: 200}}> | </span>
				<span>{this.props.currentClient.d_onboard}</span><br />
				<button onClick= { this.deleteCarer } style= {{margin: 12}} className= "btn btn-danger">Delete Carer</ button>
			</div>
		)
	}
}

export default CarerClient