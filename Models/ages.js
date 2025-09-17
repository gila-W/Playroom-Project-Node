const mongoose = require("mongoose");

ageSchema = new mongoose.Schema(
  {
    age: { type: String },
  },
  { versionKey: false }
);

exports.AgesModel = mongoose.model("ages", ageSchema);
