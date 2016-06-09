var express = require('express');
var router = express.Router();
var Idea = require('../../db/idea/idea.js');

router.get('/', function(req, res){
  Idea.find({})
    .then(function(docs){
    res.send(docs);
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});

router.post('/', function(req, res){
  var idea = req.body;
  var NewIdea = new Idea({
    taskTitle: idea.taskTitle,
    description: idea.description,
    dueDate: idea.dueDate,
    tag: idea.tag,
    isCompleted: idea.isCompleted
  });

  NewIdea.save()
    .then(function(idea){
    res.send(idea);
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});


module.exports = router;