const mongoose = require("mongoose");

let tipesOfGamesschema = new mongoose.Schema(
  {
    AgeCode: String,
    Age: String,
  },
  { versionKey: false }
);
exports.TipesOfGameModel = mongoose.model("TipesOfGames", tipesOfGamesschema);
