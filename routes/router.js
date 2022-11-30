const express = require('express')
const cors = require('cors')
const pokemonData = require('../pokemon.json');
const getPokemonById = require('../controller/controller')

const app = express()
app.use(cors())
app.use(express.json())

const router = express.Router();



router.get('/',(req, res, next) => {
  next(new Error("No pokemon data"))
  res.status(200).send(pokemonData)
}).get('/:id',(req, res, next) => {
  next(new Error("No pokemon found"))
  res.status(200).send(getPokemonById(parseInt(req.params.id), pokemonData));

}).get('/:id/:info', (req, res, next) => {
  next(new Error("Pokemon's info not found"))
const {id, info} = req.params;
const getInfo = getPokemonById(parseInt(id), pokemonData)[info];
res.status(200).send(getInfo);
})



module.exports = router