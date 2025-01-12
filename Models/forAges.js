const mongoose = require("mongoose");
const Joi = require("joi");

let forAgeSchema = new mongoose.Schema(
  {
    gameTypeCode: String,
    gameTipeName: String,
    stickerColor: String,
  },
  { versionKey: false }
);
exports.ForAgesModel = mongoose.model("ForAges", forAgeSchema);
