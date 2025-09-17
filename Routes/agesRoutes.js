const express = require("express");
const { AgesModel } = require("../Models/ages");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await AgesModel.find({});
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    let age = new AgesModel(req.body);
    await age.save();
    res.json(age);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await AgesModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await AgesModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
