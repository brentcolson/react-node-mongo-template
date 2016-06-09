var express = require('express');
var router = express.Router();
var ideas = require('../../db/ideas/ideas.js');

router.get('/ideas', function(req, res){
  res.send("Hello!");
});

module.exports = router;