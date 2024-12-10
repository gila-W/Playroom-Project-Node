const express = require("express");
const { GamesListModel } = require("../Models/gamesList");
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await GamesListModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})
router.get("/single/:id", async(req,res) => {
  try{
    const id = req.params.id
    let data = await GamesListModel.findOne({Id:id});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
});
router.post("/", async (req, res) => {
  try {
    let GamesList = new GamesListModel(req.body);
    await GamesList.save();
    res.json(GamesList)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
});
router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let additionalParam = req.body.bool; // Access additional parameter
    let identifier;
    if (additionalParam === true) {
       identifier = { Id: id };
    } else {
       identifier = { GameCode: id };
    }
    await GamesListModel.updateOne({GameCode:id},{$set:req.body});
    let updateObject=await GamesListModel.findOne({GameCode:id});
    res.json(updateObject)
   }
   catch(err) {
     console.log(err);
     res.status(502).json( {err})
   }
})

router.delete("/:id", async(req,res) => {
  try {
    let id = req.params.id;
    let data = await GamesListModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;

