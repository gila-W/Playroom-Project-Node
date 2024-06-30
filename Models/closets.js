const mongoose = require("mongoose");

let closetschema = new mongoose.Schema({
  closetCode: String,
  IsKlinait: Boolean,
  emptyPlace: Array,
  closetLocation: String,
});
exports.ClosetModel = mongoose.model("Closets", closetschema);
