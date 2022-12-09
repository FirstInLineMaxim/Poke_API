const express = require("express");
const createEntrie = require("../controller/CreateEntrie");
// const {getPokemonById, createPlayer, createGame} = require("../controller/controller");
const {main} = require('../utils/getLeaderboard.jsx')
const router = express.Router();


router
  .get("/", async (req, res) => {
    const leaderboard = await main()
    res.json(leaderboard)
  })
  .post('/create',createEntrie, (req,res)=>{
    //TODO:Make score,pokemon and username create entrie to database
    console.log('Post recieved',req.body)
    res.send('Posted')
    res.end()
  })



module.exports = router;
