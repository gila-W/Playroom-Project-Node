const mongoose = require("mongoose");
closetTypeSchema = new mongoose.Schema(
  {
    closet: { type: String },
  },
  { versionKey: false }
);

exports.ClosetModel = mongoose.model("Closet", closetTypeSchema);
