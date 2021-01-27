const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {Movie,Genre,Actor}=require('../../database/models')
var upload=multer
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const controller = {
	list: async  (req, res) => {
		try {
			const peliculas= await Movie.findAll({
				include:['Genre','actores'],
                })
                let respuesta={
                    meta:{
                        estatus:200,
                        total:peliculas.length
                    },
                    data:peliculas
                }	
		res.send(respuesta);
		} catch (error) {
			console.log(error)
		}	
	}

}
module.exports = controller;
