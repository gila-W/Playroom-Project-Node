const express = require("express");
const { TakingOrReturningModel} = require("../Models/takingOrReturning");
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await TakingOrReturningModel.find({});
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
    let data = await TakingOrReturningModel.findOne({_id:id});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  
  try {
    let TakingOrReturning = new TakingOrReturningModel(req.body);
    await TakingOrReturning.save();
    res.json(TakingOrReturning)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.put("/:id", async(req,res) => {
  
  try {
   let id = req.params.id;
   let data = await TakingOrReturningModel.updateOne({ReturnID:id},{$set:req.body});
  res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.delete("/:id", async(req,res) => {
  try {
    let id = req.params.id;
    let data = await TakingOrReturningModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;