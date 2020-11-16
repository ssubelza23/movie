const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller = {
	// Root - Show all products
	index: (req, res) => {
		
		res.render('products',{products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product =products.find(product => product.id == req.params.id);
		res.render('detail',{product})
	},


	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let nuevo_producto={
			id:products[products.length-1].id+1,
			...req.body,
			image:req.file.filename
		}
		res.JSON(req.file)
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productToEdit=products.find(product => product.id == req.params.id);
		res.render('product-edit-form',{productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;