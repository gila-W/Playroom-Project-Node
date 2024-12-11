const express = require("express");
const { ForAgesModel } = require("../Models/forAges");
const app = express();
const router = express.Router();
app.use(express.json());

router.get("/", async(req,res) => {
  try{
    const data = await ForAgesModel.find({});
    res.send({data});
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async (req, res) => {
  try {
    let ForAges = new ForAgesModel(req.body);
    await User.save();
    res.json(ForAges)
  }
  catch (err) {
    console.log(err);
    res.status(502).json({ err })
  }
})

router.put("/:id", async(req,res) => {
  try {
   let id = req.params.id;
   let data = await ForAgesModel.updateOne({_id:id},req.body);
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
    let data = await ForAgesModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})
module.exports = router;