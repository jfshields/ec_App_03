// index.js

var CarerController= require('./CarerController')
var CarePlanController= require('./CarePlanController')
var Carer_PersonalController= require('./Carer_PersonalController')

module.exports= {
	carer: CarerController,
	careplan: CarePlanController,
	carer_personal: Carer_PersonalController
}