const mongoose = require("mongoose");

let finesForMissingPartsSchema = new mongoose.Schema(
  {
    ReturnID: String,
    FineCode: String,
    MissingPartsAount: Number,
    UserCode: String,
  },
  { versionKey: false }
);
exports.FinesForMissingPartsModel = mongoose.model(
  "FinesForMissingParts",
  finesForMissingPartsSchema
);
