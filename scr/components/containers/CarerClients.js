// Comments.js
import React, { Component } from 'react';
import CarerClient from '../presentation/CarerClient.js'

class CarerClients extends Component {
	constructor(){
		super()
		this.state= {
			list: [
				{client_name: 'Dave Johnson', n_visits: 13, d_lastvisit: '01-03-2018'},
				{client_name: 'Ed Balls', n_visits: 7, d_lastvisit: 'DD-MM-YYYY'},
				{client_name: 'Lizzie James', n_visits: 12, d_lastvisit: 'DD-MM-YYYY'},
				{client_name: 'Dave Johnson', n_visits: 7, d_lastvisit: 'DD-MM-YYYY'}
			]
		}
	}

	render(){
		const listClients= this.state.list.map((client, i) => {
			return (
				<li><CarerClient currentClient= {client} /></li>
			)	
		})	

		return (
			<div>
				<h1>Carers: </h1>
				<div style= {{padding: 12, background: '#f9f9f9', border: '1px solid #ddd '}}>
					<ul style= {{listStyleType: 'none'}}>
						{ listClients }
					</ul>
				</div>
			</div>
		)
	}
}

export default CarerClients