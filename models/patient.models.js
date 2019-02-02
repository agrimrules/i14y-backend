const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PatientSchema = new Schema({
  pHash: {type: String, required: true, },
  ehrId: {type: String, required: true }
});

module.exports = mongoose.model('Patient', PatientSchema);
