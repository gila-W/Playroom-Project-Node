"use strict"
const myExpress = require('express');
const app = myExpress();
const port = 5001;
const router=myExpress.Router();
const http=require('http')
require('./DB/mongoConnection');
const{routesInit}=require("./Routes/configRoutes");
const path=require('path');
const cors=require("cors");
app.use(cors());
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(myExpress.static(path.join(__dirname,"public")));
routesInit(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
const server=http.createServer(app);
app.get("/",(req,res)=>{
        })
