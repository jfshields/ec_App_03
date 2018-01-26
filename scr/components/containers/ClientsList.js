import React, { Component } from 'react';
import { ShowClient, CreateClient } from '../presentation/index.js'
import { APIManager } from '../../utils'
import Axios from 'axios';

class ClientsList extends Component {
	constructor(){
		super()
		this.state= {
			client: {
				name: ""
				, id: ""
				, _id: ""
			},
			list: [
//				{name: "Alan1", id: '1'}, 
//				{name: "Paul", id: '2'}
			]
		}
	}

	componentDidMount(){
		APIManager.get("/api/client01", (err, res)=> {
			if (err) {
				alert('Err1'+ err)
				return
			}
			this.setState({
				list: res
			})
		})
	}

	addClient(client){
		APIManager.post("/api/client01", client, (err, res)=>{
			if (err) {
				alert('Err2'+ err)
				return
			}
			this.componentDidMount()
		})
	}

	deleteClient(client_id){

		APIManager.get("api/client01/delete/"+ client_id, (err, res)=> {
			if (err) {
				alert('Err2'+ err)
				return
			}
			alert(res)
		})
		componentDidMount()
	}


	render(){
		const listClients= this.state.list.map((client, i) => {
			return (
				<li key= {i}><ShowClient onDelete= {this.deleteClient.bind(this.state.client._id)} currentClient= {client} /></li>
			)
		})

		return (
			<div>
				<h1>Clients</h1>
				
				<div style= {{padding: 12, background: '#f9f9f9', border: '1px solid #ddd '}}>
					<ul style= {{listStyleType: 'none'}}>
						{listClients}
					</ul>

					<CreateClient onCreate= {this.addClient.bind(this)} />

				</div>
			</div>
		)
	}
}

export default ClientsList


