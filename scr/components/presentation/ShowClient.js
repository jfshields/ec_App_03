//ShowClient.js
import React, { Component } from 'react';
import styles from './styles.js'

class ShowClient extends Component {

	constructor(){
		super()
	}

	componentDidMount(){
		console.log('ShowClient> componentDidMount')
	}

	deleteClient(){
		this.props.onDelete(this.props.currentClient._id)
	}
	
	render(){
		const style= styles.carerbox
		
		return (
			<div style={style.container}>
				<h2 style= {style.header}>
					<a style= {style.title} href="#">{this.props.currentClient.name}</a>
				</h2>
				<span className= "detail">{this.props.currentClient._id}</span><br />
				<button onClick= {this.deleteClient.bind(this)} className= "btn btn-danger">Delete Client</ button>

			</div>
		)
	}
}

export default ShowClient