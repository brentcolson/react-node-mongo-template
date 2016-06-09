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

router.put('/:id', function(req, res){
  var id = req.params.id;
  var idea = req.body;
  Idea.findByIdAndUpdate(id, idea)
    .then(function(){
      res.status(204).send("Idea updated successfully");
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});

router.delete('/:id', function(req, res){
  var id = req.params.id;
  Idea.remove({_id: id})
    .then(function(){
      res.status(204).send('Idea deleted successfully');
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send("DatabaseError");
    });
});


module.exports = router;