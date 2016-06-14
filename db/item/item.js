var mongoose = require('../db.js');

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  itemTitle: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: false
  },
  tag: {
    type: String,
    required: false
  },
  isCompleted: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('item', ItemSchema);
