const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {Movie,Genre}=require('../database/models')
var upload=multer

const controller = {
	index: async  (req, res) => {
		console.log(req.query.limit)
		
		try {
			const peliculas= await Movie.findAll();
			
		res.render('index',{peliculas});
		} catch (error) {
			console.log(error)
		}
		
		
	},

};
module.exports = controller;