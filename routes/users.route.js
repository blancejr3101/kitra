const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.conrtoller');

router.get('/getAllUsers', userController.getAllUsers)
router.get('/getUserById', userController.getUserById)
module.exports = router;