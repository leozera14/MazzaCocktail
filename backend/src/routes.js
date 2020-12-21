const express = require('express');

const routes = express.Router();

const CocktailController = require('./controllers/CocktailController');

routes.get("/category", CocktailController.listCategory);

module.exports = routes;