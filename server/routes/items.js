var express = require('express');
var router = express.Router();
var Item = require('../../db/item/item.js');

router.get('/', function(req, res){
  Item.find({})
    .then(function(docs){
    res.send(docs);
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});

router.post('/', function(req, res){
  var item = req.body;
  var NewItem = new Item({
    itemTitle: item.itemTitle,
    itemDescription: item.itemDescription,
    dueDate: item.dueDate,
    tag: item.tag,
    isCompleted: item.isCompleted
  });

  NewItem.save()
    .then(function(item){
    res.send(item);
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});

router.put('/:id', function(req, res){
  var id = req.params.id;
  var item = req.body;
  Item.findByIdAndUpdate(id, item)
    .then(function(){
      res.status(204).send("Item updated successfully");
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send('DatabaseError');
    });
});

router.delete('/:id', function(req, res){
  var id = req.params.id;
  Item.remove({_id: id})
    .then(function(){
      res.status(204).send('Item deleted successfully');
    })
    .catch(function(err){
      console.log(err);
      res.status(404).send("DatabaseError");
    });
});


module.exports = router;