const Patient = require('../models/patient.models');
const EHR = require('../models/ehr.model');
const mongoose = require('mongoose');

exports.insert = (req, res, next) => {
  let pRec = new Patient({
    pHash: req.params.id,
    ehrId: req.body.ehrId,
  });
  pRec.save((err)=>{
    if(err){
      return next(err);
    }
    res.send({"status": "created", "pHash": req.params.id, ehrId: req.body.ehrId})
  });
};

exports.get_all_ehrs = (req, res, next) => {
  Patient.find({
  'pHash': req.params.id,
},{ehrId: 1, _id: 0}, (err, data)=>{
    if (err) return next(err);
    let ehrs = data.map(x=> mongoose.Types.ObjectId(x.ehrId));
    EHR.find({'_id':{ $in: ehrs}},{_id:0, __v: 0},(err,d)=>{
      res.send(d);
    });
  });
};
