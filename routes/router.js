const express = require('express')
const cors = require('cors')
const pokemonData = require('../pokemon.json');
const getElementById = require('../controller/controller')

const app = express()
app.use(cors())
app.use(express.json())

const router = express.Router();



router.route('/').get((req, res) => {
  res.send(pokemonData)
})

router.route('/:id').get((req, res) => {
  res.send(res.send(getElementById(parseInt(req.params.id), pokemonData)))
})



module.exports = router