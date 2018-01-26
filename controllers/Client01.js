// Client01.js
var Client= require('../models/Client01.js')

module.exports= {

	find: function(params, callback){
		Client.find(params, function(err, clients){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, clients)
		})
	},

	findById: function(id, callback){
		Client.findById(id, function(err, clients){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, clients)
		})
	},

	create: function(params, callback){
		Client.create(params, function(err, client){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, client)
		})
	},

	findByIdAndRemove: function(id, callback){
		Client.findByIdAndRemove(id, function(err){
			if (err) {
				callback(err)
				return
			}
			callback(null)
		})
	}
}
