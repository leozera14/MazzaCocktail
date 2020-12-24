const express = require('express');

const routes = express.Router();

const CocktailController = require('./controllers/CocktailController');

routes.get("/categoryItems", CocktailController.listCategoryItems);
routes.get("/categories", CocktailController.listCategories);
routes.get("/searchId", CocktailController.searchById);
routes.post("/search", CocktailController.mainSearch);

module.exports = routes;