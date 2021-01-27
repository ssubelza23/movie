// ************ Require's ************
const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesController')

// ************ Controller Require ************

router.get('/',moviesApiController.list)

module.exports = router;
