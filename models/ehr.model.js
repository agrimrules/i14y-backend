const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ehrSchema = new Schema({
  label: {type: String, require: true},
  value: {type: String, require: true},
});

module.exports = mongoose.model('EHR', ehrSchema);
