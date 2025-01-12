const mongoose = require("mongoose");

let gamesWithMissingPartsSchema = new mongoose.Schema(
  {
    Id: String,
    GameName: String,
    MissingParts: Array,
  },
  { versionKey: false }
);
exports.GamesWithMissingPartsModel = mongoose.model(
  "GamesWithMissingParts",
  gamesWithMissingPartsSchema
);
