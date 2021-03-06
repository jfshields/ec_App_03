var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/create_carer', function(req, res, next) {
	res.render('create_carer', null);
});

router.get('/create_careplan', function(req, res, next) {
	res.render('create_careplan', null);
});

router.get('/create_carer_personal', function(req, res, next) {
	res.render('create_carer_personal', null);
});

router.get('/carer_ob_01_personal', function(req, res, next) {
	res.render('carer_ob_01_personal', null);
});

router.get('/create_client01', function(req, res, next) {
	res.render('create_Client01', null);
});

module.exports = router;
