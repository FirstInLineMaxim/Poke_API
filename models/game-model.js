const mongoose = require("mongoose");
const { Schema} = mongoose;

const gameSchema = new Schema({
    player: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
    playersPokemon: { type: String, required: true},
    rounds: Number
})

module.exports = mongoose.model('Game', gameSchema)

