const express = require("express");
const { DebtModel } = require('../Models/debt');
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await DebtModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  try {
    let debts = new DebtModel(req.body);
    await debts.save();
    res.json(debts)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.put("/:id", async(req,res) => {
  try {
   let id = req.params.id;
   let data = await DebtModel.updateOne({_id:id},req.body);
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
    let data = await DebtModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;