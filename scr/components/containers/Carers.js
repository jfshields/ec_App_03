import React, { Component } from 'react';
import CarerBox from '../presentation/CarerBox.js'

class Carers extends Component {
	constructor(){
		super()
		this.state= {
			list: [
				{name: "Alan", number: '1', n_carers: '10' }, 
				{name: "Paul", number: '2', n_carers: '4' },
				{name: "Diane", number: '3', n_carers: '6' },
				{name: "Emma", number: '4', n_carers: '12' },
				{name: "Josh", number: '5', n_carers: '1002' }
			]
		}
	}

	render(){
		const listCarers= this.state.list.map((carer, i) => {
			return (
				<li key= {i}><CarerBox currentCarer= {carer} /></li>
			)
		})

		return (
			<div>
				<ol>
					{listCarers}
				</ol>
			</div>
		)
	}
}

export default Carers