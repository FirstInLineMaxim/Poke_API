const express = require('express')

const pokemonData = require('../pokemon.json');
const getElementById = require('../controller/controller')

const app = express()


const router = express.Router();



router.route('/').get((req, res) => {
  res.send(pokemonData)
})

router.route('/:id').get((req, res) => {
  res.send(res.send(getElementById(parseInt(req.params.id), pokemonData)))
})



module.exports = router