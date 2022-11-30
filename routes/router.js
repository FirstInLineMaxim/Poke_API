const express = require('express')
const cors = require('cors')
const pokemonData = require('../pokemon.json');
const getPokemonById = require('../controller/controller')

const app = express()
app.use(cors())
app.use(express.json())

const router = express.Router();



router.get('/',(req, res) => {
  res.send(pokemonData)
}).get('/:id',(req, res) => {
  res.send(getPokemonById(parseInt(req.params.id), pokemonData))
}).get('/:id/:info', (req, res) => {
  const {id, info} = req.params;
  const getInfo = getPokemonById(parseInt(id), pokemonData)[info];
  res.send(getInfo);
  })



module.exports = router