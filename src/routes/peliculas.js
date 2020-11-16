// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.peliculas); 
router.get('/detail/:id', peliculasController.detail); 


module.exports = router;
