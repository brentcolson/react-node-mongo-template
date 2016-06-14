var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var items = require('./routes/items.js');

var app = express();

//Server logger
app.use(morgan('dev'));

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Serves up your public/client folder

//Router
app.use('/api/items', items);

module.exports = app;