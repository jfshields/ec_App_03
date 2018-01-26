// Comments.js
import React, { Component } from 'react';
import CarerClient from '../presentation/CarerClient.js'
import { APIManager } from '../../utils'

class ClientsList extends Component {
	constructor(){
		super()
		this.state= {
			carer: {
				name_first: ""
				, name_surna: ""
				, d_onboard: 'DD-MM-YYYY'
				, status: ""
			},
			list: []
		}
	}

	componentDidMount(){
		APIManager.get('/api/carer_personal'
			, (err, response)=> {
			if (err) {
				alert('Error: '+ err.message)
				return
			}
			this.setState({
				list: response
			})
		})
	}

	submitCarer(){
		console.log('Button hit!!!'+ JSON.stringify(this.state.carer))
		console.log('Data'+ JSON.stringify(this.state.carer))

		APIManager.post('/api/carer_personal', this.state.carer, (error, response)=> {
				if (error) {
					console.log('CH12'+ error.message)
				}
				this.componentDidMount()
			})

	}


	removeCarer(){
		console.log('Button hit!!!'+ JSON.stringify(this.state.carer))
		console.log('Data'+ JSON.stringify(this.state.carer._id))

		APIManager.delete('/api/carer_personal', this.state.carer, (error, response)=> {
				if (error) {
					console.log('CH12'+ error.message)
				}
				this.componentDidMount()
			})

	}

	updateAny(event){
		// Update any field
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
					<input id= "d_onboard" onChange= {this.updateAny.bind(this)} className= "form-control" type= "date" placeholder= "Date joined"/><br />
					<input id= "status" onChange= {this.updateAny.bind(this)} className= "form-control" type= "text" placeholder= "Status"/><br />
					<button onClick= {this.submitCarer.bind(this)} className= "btn btn-info">Submit new Carer</ button>

				</div>
			</div>
		)
	}
}

export default ClientsList