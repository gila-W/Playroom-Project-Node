const mongoose = require("mongoose");

let fineSchema = new mongoose.Schema({
FineCode:String,
Type:String,
PriceOfFine:String,
})
exports.FineModel = mongoose.model("Fines",fineSchema)

