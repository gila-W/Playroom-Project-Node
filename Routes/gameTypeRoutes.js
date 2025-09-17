const express = require("express");
const { GameTypeModel } = require("../Models/gameType");
const router = express.Router();

// GET - כל סוגי המשחקים
router.get("/", async (req, res) => {
  try {
    let data = await GameTypeModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

// POST - יצירת סוג משחק חדש
router.post("/", async (req, res) => {
  try {
    let gameType = new GameTypeModel(req.body);
    await gameType.save();
    res.json(gameType);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

// PUT - עדכון לפי id
router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await GameTypeModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

// DELETE - מחיקה לפי id
router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await GameTypeModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
