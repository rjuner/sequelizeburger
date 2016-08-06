var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express(); 
var models = require('./models');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

var PORT = process.env.PORT || 3030; 

var exphbs = require('express-handlebars'); 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 


app.get('/theburgs', function(req, res){
	models.theBurgers.findAll().then(function(result) {
		// body...
		res.render("index", {bnme: result});
	})
	//res.render('index')
});

app.post('/create', function(req, res){
	models.theBurgers.create({
		name: req.body.name,
		devoured: req.body.devoured
	}).then(function(){
		res.redirect("/theburgs");
	})
	
});


app.put('/burgs/update/:id', function(req, res){
	models.theBurgers.update({
		devoured: req.body.devoured
	},{
		where: {
			id: req.params.id
		}
	}).then(function(data){
		// body...
		console.log("updated:", data)
		res.redirect("/theburgs");
	});
	
});

app.delete('/')



// app.use(express.static(process.cwd() + '/public')); 

// //override with POST having ?_method=DELETE 

// app.use(methodOverride('_method')); 

// var routes = require('./controllers/burgers_controller.js'); 

// app.use('/', routes); 


app.listen(PORT, function(){
	console.log('Magic happens on port: ' + PORT);
}); 