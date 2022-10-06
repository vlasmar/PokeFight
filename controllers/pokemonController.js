const data = require('../data.json');

const getAll = (req, res) => {
    res.send(data);
}

const getOne = (req, res) => {
    const id = Number(req.params.id);
    const pokemon = data.find((pokemon) => {
          return pokemon.id === id;
      });
      res.json(pokemon);
}
  
const getInfo = (req, res) => {
    const id = Number(req.params.id);
    const info = req.params.info;
    const pokemonInfo = data.find((pokemon) => {
      return pokemon.id === id;
    })
    if (info === 'name'){
      res.send(pokemonInfo.name);
    } else if (info === 'type'){
      res.send(pokemonInfo.type);
    } else if (info === 'base'){
      res.send(pokemonInfo.base);
    }
  }

module.exports = {
    getAll,
    getOne,
    getInfo
}