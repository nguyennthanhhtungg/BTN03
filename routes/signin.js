var express = require('express');
var router = express.Router();
const signinController = require('../controllers/signinController')

/* GET signin page. */
router.get('/', signinController.index);

module.exports = router;