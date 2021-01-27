const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {Movie,Genre,Actor}=require('../database/models')
var upload=multer
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
				})	
		res.render('peliculas',{peliculas,limit,offset});
		} catch (error) {
			console.log(error)
		}	
	},
	search: async (req, res) => {
        let moviesResults = req.body.results;
        try {
            moviesResults = await Movie.findAll({
				include:['Genre','actores'],
                where: {
                    title: { [Op.like]: '%' + moviesResults + '%' }
                }
			})
            res.render('peliculas', { peliculas: moviesResults });
        } catch (err) {
            console.log(err)
        }
        
    },
	new: async (req,res) => {
		try {
		  let movies = await Movie.findAll(
			{
				include:['Genre','actores'],
			  order: [["release_date","DESC"]],
			  limit: 5
			}
			)
			res.render('peliculas', { peliculas: movies });
		} catch (error) {
		  console.log(error);
		}
	  },
	  recommended: async (req, res) => {
        try {
            const movies = await Movie.findAll({
				include:['Genre','actores'],
                where: {
                    rating: {
                        [Op.gt]: 8
                    }
                }
            })
            res.render('peliculas', { peliculas: movies});
        } catch (err) {
            console.log(err)
        }
    },
	detail: async (req, res) => {
	try {
		const pelicula= await Movie.findOne({
			where:{
				id:req.params.id
			}
		})
		//res.json(pelicula)
		res.render('detail',{pelicula});
	} catch (error) {
		console.log(error)
	}
	},
	create: async (req, res) => {
		const movieId=req.params.id;
		const generos=await Genre.findAll();
		const actores=await Actor.findAll();
		res.render('create',{generos,actores})
		},
		update:  async (req, res) => {
			try {
				const pelicula= await Movie.findOne({
					include:['actores'],
					where:{
						id:req.params.id
					}
				})
				const generos=await Genre.findAll();
		const actores=await Actor.findAll();
		//res.send(pelicula)
				res.render('update',{pelicula,generos,actores});
			} catch (error) {
				console.log(error)
			}
			},
			change:async (req, res) => {
				try {
					const movieId=req.params.id;
					const changeMovie=await Movie.findByPk(movieId,{include:['Genre','actores']})
					await changeMovie.removeActores(changeMovie.actores)
					await changeMovie.addActores(req.body.actores)
					await changeMovie.update(req.body)
					res.redirect('/movies')
				} catch (error) {
					console.log(error)
				}

			},
		store:async (req, res) => {
			
			try {
				
				const newMovie=await Movie.create(req.body)
				await newMovie.addActores(req.body.actores)
				res.redirect('/movies')
			} catch (error) {
				console.log(error)
			
			}
			
		},
	destroy: async(req,res)=>{
		try {
			const movieId=req.params.id;
			const toDelete = await Movie.findByPk(movieId,{include:['Genre','actores']})
			
			await toDelete.removeActores(toDelete.actores);
			await toDelete.destroy();
			res.redirect('/movies')
		} catch (error) {
			console.log(error)
		}
	
	}
}
module.exports = controller;
