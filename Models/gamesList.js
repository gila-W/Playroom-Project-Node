const mongoose = require("mongoose");

let gamesListschema = new mongoose.Schema({
Id:String,
GameCode:Number,
ClosetNumber:String,
PlaceInCloset:String,
GameName:String,
GameTypeCode:String,
Parts:Array,
AgeCode:String,
CurrentStateOfGame:String,
Location:String,
PrintSticker:Boolean,
HaveComplementaryGame:String,
IsAvailable:String,
Comment:String
})
exports.GamesListModel = mongoose.model("GamesList",gamesListschema)

