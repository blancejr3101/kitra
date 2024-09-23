const express = require('express');
const router = express.Router();
const geolocationController = require('../controllers/trasure.controller');
const validateBody = require('../validators/validator');


router.get('/hunt', validateBody.validate, geolocationController.findTreasureBoxes);



module.exports = router;