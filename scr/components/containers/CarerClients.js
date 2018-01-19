// Comments.js
import React, { Component } from 'react';
import CarerClient from '../presentation/CarerClient.js'
import Axios from 'axios';

class CarerClients extends Component {
	constructor(){
		super()
		this.state= {
			carer: {
				name_first: ""
				, name_surna: ""
				, d_onboard: 'DD-MM-YYYY'
				, status: ""
			},
			list: [
//				{carer_name: 'Dave Johnson', n_visits: 13, d_lastvisit: '01-03-2018'},
//				{carer_name: 'Ed Balls', n_visits: 7, d_lastvisit: 'DD-MM-YYYY'},
//				{carer_name: 'Lizzie James', n_visits: 12, d_lastvisit: 'DD-MM-YYYY'},
//				{carer_name: 'Dave Johnson', n_visits: 7, d_lastvisit: 'DD-MM-YYYY'}
			]
		}
	}

	componentDidMount(){
		console.log('Run func: componentDidMount')

		Axios
		.get('/api/carer_personal')
		.then((response) => {
//		    console.log(response.status);
//		    console.log(response.statusText);
//		    console.log(response.headers);
//		    console.log(response.config);
			console.log(response);
			let results= response.data.results
			this.setState({list: response.data.results})
		})
		.catch(function(error){
			console.log(error);
		})
	}

	submitCarer(){
//		console.log('Button hit!!!'+ JSON.stringify(this.state.carer))
		let updateList= Object.assign([], this.state.list)
		updateList.push(this.state.carer)
		this.setState({
			list: updateList
		})
	}

	updateAny(event){
//		console.log('Button hit!!!'+ JSON.stringify(event.target.value))
		let updatedClient= Object.assign({}, this.state.carer)
		updatedClient[event.target.id]= event.target.value
		this.setState({
			carer: updatedClient
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
					
					<div>Add a new Carer for client_name</div>
					<input id= "name_first" onChange= {this.updateAny.bind(this)} className= "form-control" type= "text" placeholder= "First name"/><br />
					<input id= "name_surna" onChange= {this.updateAny.bind(this)} className= "form-control" type= "text" placeholder= "Surname"/><br />
					<input id= "d_onboard" onChange= {this.updateAny.bind(this)} className= "form-control" type= "text" placeholder= "Date joined"/><br />
					<input id= "status" onChange= {this.updateAny.bind(this)} className= "form-control" type= "text" placeholder= "Status"/><br />
					<button onClick= {this.submitCarer.bind(this)} className= "btn btn-info">Submit new Carer</ button>

				</div>
			</div>
		)
	}
}

export default CarerClients