const express = require('express');
const router = express.Router();

const patient_controller = require('../controllers/patient.controller');

router.post('/:id', patient_controller.insert);
router.get('/:id', patient_controller.get_all_ehrs);

module.exports = router;
