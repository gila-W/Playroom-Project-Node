const mongoose = require("mongoose");

gameSkillsSchema = new mongoose.Schema(
  {
    GameSkills: { type: String },
  },
  { versionKey: false }
);

exports.GameSkillsModel = mongoose.model("GameSkills", gameSkillsSchema);
