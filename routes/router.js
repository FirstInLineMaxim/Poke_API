const express = require("express");
const cors = require("cors");
// const pokemonData = require("../pokemon.json");
const getPokemonById = require("../controller/controller");
const {main} = require('../utils/mongodb.jsx')
const app = express();


app.use(cors());
app.use(express.json());


// Calls the Client Connection and stores the result which is our Collection in pokemonData
let pokemonData = "";
async function getPokemon (){
const result = await main()
pokemonData = result
}
getPokemon()


const router = express.Router();
router
  .get("/", (req, res) => {
    res.status(200).send(pokemonData);
  })
  .get("/:id", (req, res) => {
    res.status(200).send(getPokemonById(parseInt(req.params.id), pokemonData));
  })
  .get("/:id/:info", (req, res) => {
    const { id, info } = req.params;
    const getInfo = getPokemonById(parseInt(id), pokemonData)[info];
    res.status(200).send(getInfo);
  });

module.exports = router;
