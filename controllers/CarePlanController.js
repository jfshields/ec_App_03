// CarePlanController.js
var CarePlan= require('../models/CarePlanSchema');

module.exports= {

	find: function(params, callback){
		CarePlan.find(params, function(err, carers){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carers)
		})
	},

	findById: function(id, callback){
		CarePlan.findById(id, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carer)
		})
	},

	create: function(params, callback){
		CarePlan.create(params, function(err, carer){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, carer)
		})
	},

	update: function(id, params, callback){
		CarePlan.findByIdAndUpdate(id, params, {new: true}, function(err, carer){
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


