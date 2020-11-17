// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.peliculas); 
router.get('/detail/:id', peliculasController.detail); 
router.get('/create', peliculasController.create); 
router.post('/create', peliculasController.store);
router.delete('/delete/:id', peliculasController.destroy); 
router.get('/update/:id', peliculasController.update); 
router.put('/update/:id', peliculasController.change); 
router.post('/search', peliculasController.search); 
router.get('/new', peliculasController.new); 

router.get('/recommended', peliculasController.recommended); 
module.exports = router;
