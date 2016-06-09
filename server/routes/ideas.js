var express = require('express');
var router = express.Router();

router.get('/ideas', function(req, res){
  res.send("Hello!");
});

module.exports = router;