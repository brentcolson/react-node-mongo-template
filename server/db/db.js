var mongoose = require('mongoose');

// Connect to Heroku db or local DB as deaults
var url = process.env.MONGODB_URI || 'mongodb://localhost/bi-react';

// Connect to mongo db
mongoose.connect(url);

// Log the db connection status
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected!');
});

module.exports = mongoose;