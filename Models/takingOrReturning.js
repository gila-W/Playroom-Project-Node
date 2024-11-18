const mongoose = require("mongoose");

let takingOrReturningschema = new mongoose.Schema({
  IsMissingParts: Boolean,
  Fine:Number,
  ActualReturnDate:Date,
  ReturnDate: {
    type: Date,
    default: Date.now,
  },
  TakingDate: {
    type: Date,
    default: Date.now,
  },
  GameCode: String,
  UserCode: String,
  ReturnID: String,
});
exports.TakingOrReturningModel = mongoose.model(
  "TakingOrReturning",
  takingOrReturningschema
);
