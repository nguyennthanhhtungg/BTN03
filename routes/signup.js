var express = require('express');
var router = express.Router();
const signupController = require('../controllers/signupController')

/* GET signup page. */
router.get('/', signupController.index);

module.exports = router;