const mongoose = require("mongoose");

gameTypeSchema = new mongoose.Schema(
  {
    GameSkills: { type: String },
  },
  { versionKey: false }
);

exports.GameTypeModel = mongoose.model("GameType", gameTypeSchema);
