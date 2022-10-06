const express = require('express');
const pokemonRouter = express.Router();
const pokemonController = require("../controllers/pokemonController")

pokemonRouter.get('/', pokemonController.getAll)

pokemonRouter.get('/:id', pokemonController.getOne)

pokemonRouter.get('/:id/:info', pokemonController.getInfo)

module.exports = pokemonRouter;