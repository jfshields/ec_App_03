// CarerBox.js
import React, { Component } from 'react';
import styles from './styles.js'

class ClientBox extends Component { 

	render(){
		const style= styles.carerbox
		
		return (
			<div style={style.container}>
				Hello...!
				<h2 style= {style.header}>
					<a style= {style.title} href="#">{this.props.currentCarer.name}</a>
				</h2>
				<span className= "detail">{this.props.currentCarer.number}</span><br />
			
				<span>No. Carers: {this.props.currentCarer.n_carers}</span>
			</div>
		)
	}
}

export default ClientBox