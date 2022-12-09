const leaderBoard = require("../models/leaderBoard");

function createEntrie(req, res, next) {
  const { username, score, pokemon } = req.body;
  console.log("insideCreateEntrie", { username }, { score }, { pokemon });
  const create = new leaderBoard({
    username: username,
    score: score,
    pokemon: pokemon,
  });
  create.save(function (err) {
    if (err) return handleError(err);
    // saved!
    console.log("Saved to DB");
  });
  next();
}

module.exports = createEntrie;
