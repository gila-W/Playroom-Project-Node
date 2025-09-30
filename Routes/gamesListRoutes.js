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
    let data = await GamesListModel.findOne({_id:id});
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

// router.put("/:id", async (req, res) => {
//   try {
//     let id = req.params.id;
  
//        let data = await GamesListModel.updateOne({_id:id},req.body);
//       res.json(data);
//    }
//    catch(err) {
//      console.log(err);
//      res.status(502).json( {err})
//    }
// })
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await GamesListModel.updateOne({ _id: id }, req.body);

    // להביא את המשחק המעודכן
    const updatedGame = await GamesListModel.findById(id);

    if (!updatedGame) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.json(updatedGame); // 👈 מחזיר את האובייקט המעודכן עצמו
  } catch (error) {
    console.error("Error updating game:", error);
    res.status(500).json({ message: "Server error" });
  }
});


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

