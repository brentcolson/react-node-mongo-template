var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var ideas = require('./routes/ideas.js');

var app = express();

//Server logger
app.use(morgan('dev'));

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Serves up your public/client folder

//Router
app.use('/api/ideas', ideas);

module.exports = app;