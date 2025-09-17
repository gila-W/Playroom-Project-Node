const mongoose = require("mongoose");

let fineSchema = new mongoose.Schema(
  {    

    FineCode: String,
    Type: String,
    PriceOfFine: String,
  },
  { versionKey: false }
);
exports.FineModel = mongoose.model("Fines", fineSchema);
