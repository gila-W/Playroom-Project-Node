const express = require("express");
const { ActuliGameModel } = require("../Models/actuliGame");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await ActuliGameModel.find({});
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    let actuli = new ActuliGameModel(req.body);
    await actuli.save();
    res.json(actuli);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ActuliGameModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ActuliGameModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
