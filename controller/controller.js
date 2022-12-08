const Player = require("../models/player-model");
const Game = require("../models/game-model");

const getPokemonById = (id, pokemonList) => {
  return pokemonList.find((pokemon) => pokemon.id === parseInt(id));
};

const createPlayer = async (req, res) => {
  const { username, score} = req.body;
  const playerExists = await Player.findOne({ username });

  if (playerExists) {
    res.status(400);
    throw new Error("Player already exists");
  }

  const player = await Player.create({ username, game, score });

  if (player) {
    res.status(201).json({
      _id: player._id,
      username: player.username,
      // game: player.game,
      score: player.score
    });
  } else {
    res.status(400);
    throw new Error("Failed to create player");
  }
}

const createGame = async (req, res, next) => {
  const { player, playersPokemon, computersPokemon, won } = req.body;
  if (!player || !playersPokemon || !computersPokemon || !won) {
    es.status(400);
    throw new Error("Game can't start");
  }
  const game = new Game({ player, playersPokemon, computersPokemon, won });
  try {
    await game.save();
    await User.findByIdAndUpdate(player, { $push: { game: game._id } });
  } catch (error) {
    console.log(error.message);
  }
  res.json(game);
};

module.exports = { getPokemonById, createPlayer, createGame };
