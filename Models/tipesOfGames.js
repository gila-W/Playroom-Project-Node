const mongoose = require("mongoose");

let tipesOfGamesschema = new mongoose.Schema({
  AgeCode: String,
  Age: String,
});
exports.TipesOfGameModel = mongoose.model("TipesOfGames", tipesOfGamesschema);
