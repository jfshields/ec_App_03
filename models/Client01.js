//Client01.js
//import mongoose from 'mongoose' // Doesnt work
var mongoose= require('mongoose');

var Client01= mongoose.Schema({
	name: { type: String, default: '' },
	id: { type: String, default: '' },
})

module.exports= mongoose.model('Client01', Client01)
