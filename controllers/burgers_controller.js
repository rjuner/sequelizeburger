var express = require('express'); 
var router = express.Router();
var burg = require('../models/burger.js'); 

// var methodOverride = require('method-override'); 
// var bodyParser = require('body-parser'); 

router.get('/', function(req, res){
	res.redirect('/burgs')
}); 

router.get('/burgs', function(req, res){
	burg.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject); 
	}); 
}); 

router.post('/burgs/create', function(req, res){
	burg.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/burgs')
	});
}); 

router.put('/burgs/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id; 

	console.log('condition', condition); 

	burg.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgs'); 
	}); 
}); 

router.delete('/burgs/delete/:id', function(req, res){
	var condition = 'id = ' + req.params.id; 

	burg.delete('burgers', condition, function() {
		res.redirect('/burgs');
	});
});

module.exports = router; 