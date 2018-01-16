// Carer.js

var mongoose= require('mongoose');

var CarerSchema= new mongoose.Schema({
	carer: { type: String, default: '' },
	age: { type: [Number], default: 0 },
	issues: { type: Array, default: [] },
	date_joined: { type: String, default: '' }
})

module.exports= mongoose.model('CarerSchema', CarerSchema)