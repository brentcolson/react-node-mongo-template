var mongoose = require('../db.js');

var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  taskTitle: {
    type: String,
    required: true
  },
  description: {
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

module.exports = mongoose.model('ideas', IdeaSchema);
