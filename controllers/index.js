// index.js

var CarerController= require('./CarerController')
var CarePlanController= require('./CarePlanController')
var Carer_PersonalController= require('./Carer_PersonalController')
var Client01= require('./Client01')

module.exports= {
	carer: CarerController,
	careplan: CarePlanController,
	carer_personal: Carer_PersonalController,
	client01: Client01
}