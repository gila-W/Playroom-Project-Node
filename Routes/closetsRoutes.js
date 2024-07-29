const express = require("express");
const { ClosetModel, validateCloset } = require('../Models/closets');
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await ClosetModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})
router.post("/", async(req,res) => {
  let validBody = validateCloset(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let Closet = new ClosetModel(req.body);
    await Closet.save();
    res.json(Closet)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.put("/:id", async(req,res) => {
  try {
   let id = req.params.id;
   await ClosetModel.updateOne({closetCode:id},req.body);
     let updateObject=await ClosetModel.findOne({closetCode:id});

  res.json(updateObject)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { locationToRemove } = req.body; // Assuming you send the location to remove in the request body
    const closet = await ClosetModel.findById(id);
    closet.emptyPlace = closet.emptyPlace.filter((place) => place !== locationToRemove);
    await closet.save();
    res.json(closet);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});
router.delete("/:id", async(req,res) => {
  try {
    let id = req.params.id;
    let data = await ClosetModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;