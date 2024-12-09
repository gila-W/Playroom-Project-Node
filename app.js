"use strict"
const myExpress = require('express');
const app = myExpress();
const port = 5000;
const router=myExpress.Router();
const http=require('http')
require('./DB/mongoConnection');
const{routesInit}=require("./Routes/configRoutes");
const path=require('path');
const cors=require("cors");
const corsOptions = {
  origin:"https://mshkhqvlnv.onrender.com/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",};
app.use(cors(corsOptions));
// app.use(cors());
const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.use(myExpress.static(path.join(__dirname,"public")));
routesInit(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
const server=http.createServer(app);
app.get("/",(req,res)=>{
    // res.send("<html><h1>מחובר</h1></html>")
        })
