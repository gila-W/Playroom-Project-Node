const express = require("express");
const {
  GamesWithMissingPartsModel,
} = require("../Models/gamesWithMissingParts");
const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", async (req, res) => {
  try {
    let data = await GamesWithMissingPartsModel.find({});
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    let Game = new GamesWithMissingPartsModel(req.body);
    await Game.save();
    res.json(Game);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await GamesWithMissingPartsModel.replaceOne({ Id: id }, req.body);
    let updateObject = await GamesWithMissingPartsModel.findOne({ Id: id });
    res.json(updateObject);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await GamesWithMissingPartsModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
