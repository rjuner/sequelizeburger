var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var models = require('./models');

var PORT = process.env.PORT || 3030; 

//var methodOverride = require('method-override');

var exphbs = require('express-handlebars'); 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 
app.use(bodyParser.urlencoded({extended: false}));




// app.use(express.static(process.cwd() + '/public')); 

// //override with POST having ?_method=DELETE 

// app.use(methodOverride('_method')); 

// var routes = require('./controllers/burgers_controller.js'); 

// app.use('/', routes); 


app.listen(PORT, function(){
	console.log('Magic happens on port: ' + PORT);
}); 