const mongoose = require("mongoose");

actuliGameSchema = new mongoose.Schema(
  {
    ActuliGame: { type: String },
  },
  { versionKey: false }
);

exports.ActuliGameModel = mongoose.model("ActuliGame", actuliGameSchema);
