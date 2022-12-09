const mongoose = require("mongoose");
const {Schema} = mongoose;

const leaderboard = new Schema({
    username: { type: String , required: true },
    pokemon: { type: String, required: true},
    score: Number
})

module.exports = mongoose.model('leaderboard', leaderboard)

