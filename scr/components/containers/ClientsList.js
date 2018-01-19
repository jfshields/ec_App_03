import React, { Component } from 'react';
import ClientBox from '../presentation/ClientBox.js'

class ClientsList extends Component {
	constructor(){
		super()
		this.state= {
			client: {
				name: ""
				, number: ""
				, n_carers: ""
			},
			list: [
				{name: "Alan", number: '1', n_carers: '10' }, 
				{name: "Paul", number: '2', n_carers: '4' }
			]
		}
	}

	submitClient(){
//		console.log('submitClient- hit!')
		let updatedList= Object.assign([], this.state.list)
		updatedList.push(this.state.client)
		this.setState({
			list: updatedList
		})
	}

	updateAny(event){
		let updatedClient= Object.assign({}, this.state.client)
		updatedClient[event.target.id]= event.target.value
		this.setState({
			client: updatedClient
		})
	}

	render(){
		const listClients= this.state.list.map((client, i) => {
			return (
				<li key= {i}><ClientBox currentClient= {client} /></li>
			)
		})

		return (
			<div>
				<h1>Clients</h1>
				<div style= {{padding: 12, background: '#f9f9f9', border: '1px solid #ddd '}}>
					<ul style= {{listStyleType: 'none'}}>
						{listClients}
					</ul>

					<div>Add new client</div>
					<input id= "name" onChange= {this.updateAny.bind(this)} className= "form-control" placeholder= "Client name" type= "text" ></ input><br />
					<input id= "number" onChange= {this.updateAny.bind(this)} className= "form-control" placeholder= "Client ID" type= "text" ></ input><br />
					<button onClick= {this.submitClient.bind(this)} className= "btn btn-danger">Submit new client</button>
				</div>
			</div>
		)
	}
}

export default ClientsList


