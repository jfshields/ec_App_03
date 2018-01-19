// Carer_PersonalController.js

var Carer_Personal= require('../models/Carer_Personal')

module.exports= {
	find: function(params, callback){
		Carer_Personal.find(params, function(err, carers){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carers)
		})
	},

	create: function(params, callback){
		Carer_Personal.create(params, function(err, carers){
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

	delete: function(id, callback){
		CarePlan.findByIdAndRemove(id, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}