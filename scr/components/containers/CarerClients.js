// Comments.js
import React, { Component } from 'react';
import CarerClient from '../presentation/CarerClient.js'

class CarerClients extends Component {
	constructor(){
		super()
		this.state= {
			carer: {
				carer_name: ""
				, n_visits: 0
				, d_lastvisit: 'DD-MM-YYYY'
			},
			list: [
				{carer_name: 'Dave Johnson', n_visits: 13, d_lastvisit: '01-03-2018'},
				{carer_name: 'Ed Balls', n_visits: 7, d_lastvisit: 'DD-MM-YYYY'},
				{carer_name: 'Lizzie James', n_visits: 12, d_lastvisit: 'DD-MM-YYYY'},
				{carer_name: 'Dave Johnson', n_visits: 7, d_lastvisit: 'DD-MM-YYYY'}
			]
		}
	}

	submitCarer(){
		console.log('Button hit!!!'+ JSON.stringify(this.state.carer))
	}

	updateCarerName(event){
		console.log('updateCarerName!!!'+ event.target.value)

		let updateCarer= Object.assign({}, this.state.carer)
		updateCarer['carer_name']= event.target.value 
		this.setState({
			carer: updateCarer
		})
	}

	updateCarerNVisits(event){
		console.log('updateCarerName!!!'+ event.target.value)

		let updateCarer= Object.assign({}, this.state.carer)
		updateCarer['n_visits']= event.target.value
		this.setState({
			carer: updateCarer
		})
	}

	updateDLastVisit(event){
		console.log('updateDLastVisit!!!'+ event.target.value)

		let updateCarer= Object.assign({}, this.state.carer)
		updateCarer['d_lastvisit']= event.target.value
		this.setState({
			carer: updateCarer
		})
	}

	render(){
		const listClients= this.state.list.map((client, i) => {
			return (
				<li key= {i}><CarerClient currentClient= {client} /></li>
			)	
		})	

		return (
			<div>
				<h1>Carers: </h1>
				<div style= {{padding: 12, background: '#f9f9f9', border: '1px solid #ddd '}}>
					<ul style= {{listStyleType: 'none'}}>
						{ listClients }
					</ul>

					<input onChange= {this.updateCarerName.bind(this)} className= "form-control" type= "text" placeholder= "Carer name"/><br />
					<input onChange= {this.updateCarerNVisits.bind(this)} className= "form-control" type= "text" placeholder= "Number of visits"/><br />
					<input onChange= {this.updateDLastVisit.bind(this)} className= "form-control" type= "text" placeholder= "Date"/><br />
					<button onClick= {this.submitCarer.bind(this)} className= "btn btn-info">Submit new Carer</ button>

				</div>
			</div>
		)
	}
}

export default CarerClients