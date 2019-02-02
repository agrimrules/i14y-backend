const express = require('express');
const router = express.Router();

const ehr_controller = require('../controllers/ehr.controller');

router.post('/', ehr_controller.insert);

module.exports = router;
