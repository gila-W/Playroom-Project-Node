const mongoose = require("mongoose");

let finesForMissingPartsSchema = new mongoose.Schema(
  {

    ReturnID: String,
    FineCode: String,
    MissingPartsAount: Number,
    User_id: String,
  },
  { versionKey: false }
);
exports.FinesForMissingPartsModel = mongoose.model(
  "FinesForMissingParts",
  finesForMissingPartsSchema
);
