const mongoose = require("mongoose");

let closetschema = new mongoose.Schema(
  {
    closetCode: String,
    IsKlinait: Boolean,
    emptyPlace: Array,
    closetLocation: String,
  },
  { versionKey: false }
);
exports.ClosetModel = mongoose.model("Closets", closetschema);
