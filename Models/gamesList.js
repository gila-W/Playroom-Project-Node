const mongoose = require("mongoose");

let gamesListschema = new mongoose.Schema({
    
Id:String,
GameCode:String,
ClosetNumber:String,
GameName:String,
GameTypeCode:String,
Parts:Array,
AgeCode:String,
CurrentStateOfGame:String,
PrintSticker:Boolean,
HaveComplementaryGame:Boolean,
Location:String,
IsAvailable:Boolean,
})
exports.GamesListModel = mongoose.model("GamesList",gamesListschema)

