var express = require('express');
var router = express.Router();
/* require your controllers here */
var controller = require('../controllers/index');

// main site routes
router.get('/', controller.home);
router.get('/settings', controller.settings);

module.exports = router;