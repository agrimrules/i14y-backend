const EHR = require('../models/ehr.model');

exports.insert = (req, res, next) => {
  let ehr = new EHR({
    label: req.body.label,
    value: req.body.value
  });
  ehr.save((err)=>{
    if(err) return next(err);
    res.send({"status": "saved", ehrId: ehr._id});
  });
}
