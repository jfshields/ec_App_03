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

module.exports = router;
