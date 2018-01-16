// CarePlanSchema.js

var mongoose= require('mongoose');

var CarePlanSchema= mongoose.Schema({
	client: { type: String, default: '' },
	health_req: { type: String, default: '<None >' }
});

module.exports= mongoose.model('CarePlanSchema', CarePlanSchema);