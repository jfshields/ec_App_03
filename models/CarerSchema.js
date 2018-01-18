// Carer.js

var mongoose= require('mongoose');

var CarerSchema= new mongoose.Schema({
	carername: { type: String, default: '' },
	carerage: { type: [Number], default: 0 },
	issues: { type: Array, default: [] },
	date_joined: { type: String, default: '' }
})

module.exports= mongoose.model('CarerSchema', CarerSchema)