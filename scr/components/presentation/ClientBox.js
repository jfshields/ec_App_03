//Client.js
import React, { Component } from 'react';
import styles from './styles.js'

class ClientBox extends Component {
	
	render(){
		const style= styles.carerbox
		
		return (
			<div style={style.container}>
				<h2 style= {style.header}>
					<a style= {style.title} href="#">{this.props.currentClient.name}</a>
				</h2>
				<span className= "detail">{this.props.currentClient.number}</span><br />
			
				<span>No. Carers: {this.props.currentClient.n_carers}</span>
			</div>
		)
	}
}

export default ClientBox