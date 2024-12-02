const express = require("express");
const { UserModel } = require("../Models/users");
const app = express();
const router = express.Router();

app.use(express.json());
router.get("/", async (req, res) => {
  try {
    let data = await UserModel.find({});
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    let User = new UserModel(req.body);
    await User.save();
    res.json(User);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await UserModel.updateOne({ userCode: id }, { $set: req.body });
    let updateObject = await UserModel.findOne({ userCode: id });
    res.json(updateObject)
    // let data = await UserModel.updateOne({ _id: id }, req.body);
    // res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
  // try {
  //   let id = req.params.id;
  //   await GamesListModel.updateOne({GameCode:id},{$set:req.body});
  //   let updateObject=await GamesListModel.findOne({GameCode:id});
  //   res.json(updateObject)
  //  }
  //  catch(err) {
  //    console.log(err);
  //    res.status(502).json( {err})
  //  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await UserModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
