// CreateClient.js
import React, { Component } from 'react';

class CreateClient extends Component {

	constructor(){
		super()
		this.state= {
			client: {
				name: "",
				id: ""
			}
		}
	}

	submitClient(event){
//		console.log('submitClient'+ JSON.stringify(this.state.client))
		this.props.onCreate(this.state.client)
	}

	updateClient(event){
//		console.log(this.state.client)
		let updatedClient= Object.assign({}, this.state.client)
		updatedClient[event.target.id]= event.target.value
		this.setState({
			client: updatedClient
		})

	}

	render(){
		return (
			<div>Hello worldie
				<div>Add new client</div>
				<input id= "name" onChange= {this.updateClient.bind(this)} className= "form-control" placeholder= "Client name" type= "text" ></ input><br />
				<input id= "id" onChange= {this.updateClient.bind(this)} className= "form-control" placeholder= "Client ID" type= "text" ></ input><br />
				<button onClick= {this.submitClient.bind(this)} className= "btn btn-info">Submit new client</button>
			</div>
		)
	}
}

export default CreateClient