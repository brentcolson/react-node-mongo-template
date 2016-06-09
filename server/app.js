var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Server logger
app.use(morgan('dev'));

// app.use('/', express.static(path.resolve(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Serves up your public/client folder

//Router
// app.use('/', ideas);
app.route('/')
  .get(function(req,res){
    res.send('Hello World');
  });

module.exports = app;