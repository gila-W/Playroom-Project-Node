const mongoose = require("mongoose");

let takingOrReturningschema = new mongoose.Schema(
  { 
    IsMissingParts: Boolean,
    Fine: Number,
    ActualReturnDate: Date,
    ReturnDate: {
      type: Date,
      default: Date.now,
    },
    TakingDate: {
      type: Date,
      default: Date.now,
    },
    Game_id: String,
    User_id: String,
    ReturnID: String,
  },
  { versionKey: false }
);
exports.TakingOrReturningModel = mongoose.model(
  "TakingOrReturning",
  takingOrReturningschema
);
