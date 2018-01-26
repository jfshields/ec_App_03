// CarerController.js
var Carer= require('../models/SchemaCarer');

module.exports= {

	find: function(params, callback){
		Carer.find(params, function(err, carers){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carers)
		})
	},

	findById: function(id, callback){
		Carer.findById(id, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carer)
		})
	},

	create: function(params, callback){
		Carer.create(params, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carer)
		})
	},

	update: function(id, params, callback){
		Carer.findByIdAndUpdate(id, params, {new: true}, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carer)
		})
	},

	delete: function(id, callback){
		Carer.findByIdAndRemove(id, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}


