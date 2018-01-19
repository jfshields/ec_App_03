// Carer_Personal.js

var mongoose= require('mongoose');

var Carer_Personal= new mongoose.Schema({
	name_first: { type: String, default: '-' },
	name_surna: { type: String, default: '-' },
	d_onboard: { type: Date },
	status: { type: String, default: '-' }
});

module.exports= mongoose.model('Carer_Personal', Carer_Personal);