const express = require("express");
const { GameSkillsModel } = require("../Models/gameSkills");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await GameSkillsModel.find({});
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    let skill = new GameSkillsModel(req.body);
    await skill.save();
    res.json(skill);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await GameSkillsModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await GameSkillsModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
