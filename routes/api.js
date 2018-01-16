// api.js

var express= require('express');
var router= express.Router();
var controllers= require('../controllers');

router.get('/', function(req, res, next){
	res.json({
			confirmation: 'API root directory',
			results: []	
	})
});

router.get('/:resource', function(req, res, next){
	var resource= req.params.resource
	var controller= controllers[resource]

	controller.find(req.query, function(err, result){
		if (err) {
			res.json({
				confirmation: 'fail_40',
				message: err
			})
			return
		}
		res.json({
			confirmation: 'succ_40',
			results: result
		})
	})
});

router.get('/:resource/:id', function(req, res, next){
	var resource= req.params.resource
	var controller= controllers[resource]
	var id= req.params.id

	controller.findById(id, function (err, result) {
		if (err){
			res.json({
				confirmation: 'fail_03',
				message: err
			})
			return
		}
		res.json({
			confirmation: 'succ_02',
			result: result
		})
	})
});

router.post('/:resource', function(req, res){
	var resource= req.params.resource
	var controller= controllers[resource]

	controller.create(req.body, function(err, result){
		res.json({
			confirmation: 'succ_03',
			result: result
		})
	})
});

router.post('/:resource', function(req, res){
	var resource= req.params.resource
	
	res.send('This works/ '+ resource)
});

module.exports= router




