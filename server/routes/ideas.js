var express = require('express');
var router = express.Router();
var Ideas = require('../../db/ideas/ideas.js');

router.get('/ideas', function(req, res){
  Ideas.find({})
    .then(function(docs){
    res.send(docs);
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});



module.exports = router;