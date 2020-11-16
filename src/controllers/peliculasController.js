const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {Movie,Genre,Actor}=require('../database/models')
var upload=multer

const controller = {
	peliculas: async  (req, res) => {
		var limit=req.query.limit;
		var offset=req.query.offset;
	
		if(limit==undefined){
			limit=5;
		
		}
		if(offset==undefined){
		
			offset=0;
		}
		console.log(limit+'+++'+offset)
		try {
			const peliculas= await Movie.findAll({
				include:['Genre','actores'],
				offset:offset,
				limit:limit,
				subQuery:false
				})	
		//res.json(peliculas)	
		res.render('peliculas',{peliculas,limit,offset});
		} catch (error) {
			console.log(error)
		}	
	},
	detail: async (req, res) => {
		const pelicula= await Movie.finOne({
			where:id=req.params.id
		})
		res.render('detail',{pelicula});
	},
	destroy: async(req,res)=>{
		const movieId=req.params.id;
		const toDelete = await Movie.findByPk(movieId,{include:['Genre','actores']})
		await toDelete.removeActores(toDelete.actores);
		await toDelete.destroy();
	}
}
module.exports = controller;
