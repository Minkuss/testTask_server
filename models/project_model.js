var mongoose    = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports.projectSchema = projectSchema;