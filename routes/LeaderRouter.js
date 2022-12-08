const express = require("express");
// const {getPokemonById, createPlayer, createGame} = require("../controller/controller");
const router = express.Router();



router
  .get("/", (req, res) => {
    res.send('Leaderboard not there yet')
  })
  .post('/player', (req,res)=>{
    //TODO:Make score,pokemon and username create entrie to database
    console.log('Post recieved',req.body)
    res.send('Posted')
    res.end()
  })



module.exports = router;
