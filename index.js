var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//Middleware template
app.use(function(req, res, next){
  next();
});

//Server logger
app.use(morgan('dev'));

//Parses a the request to be handles as a plain object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Serves up your public/client folder
app.use(express.static('./client'));

//Sample routing
app.route('/')
  .get(function(req, res){
    res.send("Hello World");
  })
  .post()
  .put()
  .delete();


app.listen(8000, function(){
  console.log('server is now listening on port 8000.');
});