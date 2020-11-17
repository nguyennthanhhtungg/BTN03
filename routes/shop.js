var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController');
const signinController = require('../controllers/signinController')

/* GET shop page. */
router.get('/', shopController.index);

/* GET product detail page. */
router.get('/detail', shopController.shoe_detail);

/* GET sign page. */
router.get('/signin', signinController.index);

module.exports = router;