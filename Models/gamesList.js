const mongoose = require("mongoose");

let gamesListschema = new mongoose.Schema(
  {
    GameName: { type: String },
    GameType: [{ type: String }],
    GameSkills: [{ type: String }],
    ActualiGame: [{ type: String }],
    ClosetNumber: { type: String },
    Age: [{ type: String }],
    IsAvailable: { type: Boolean },
    CurrentStateOfGame: { type: String },
    Parts: [
      {
        "שם החלק": { type: String },
        "כמות": { type: Number },
      },
    ],
    HaveComplementaryGame: { type: Boolean },
    Comment: { type: String },
    cityCode: { type: String }, // <--- השדה החדש
  },
  { versionKey: false }
);

exports.GamesListModel = mongoose.model("games", gamesListschema);
