
const express = require('express');
const Connect = require("./config/Connect")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const app = express();
const route = require("./routes/route")
PORT =  process.env.PORT || 5000;
app.use(express.json());
app.use(cors(corsOptions))
app.use(function(req,res,next)=>{
        res.header("Access-Control-Access-Origin","*");
         res.header("Access-Control-Access-Credentials",true);
         res.header("Access-Control-Access-Methods","GET , PUT , POST , DELETE , OPTIONS");
          res.header("Access-Control-Access-Headers","Origin , X-Requested-with,Content-Type,Accept,content-type,application/json");
          next();
        
        })
app.use("/", route);

const start = async()=>{

  try{
    await Connect();
    app.listen(PORT , ()=>{
     console.log(`${PORT} , yes Connected`)
    
    })
  }
  catch(err){
    console.log(err)
  }

  
}

start();
