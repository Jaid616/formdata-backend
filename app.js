
const express = require('express');
const Connect = require("./config/Connect")
const app = express();
const route = require("./routes/route")
PORT =  process.env.PORT || 5000;
app.use(express.json());
app.use(function(req,res,next) {
        res.header("Access-Control-Allow-Origin","*");
         res.header("Access-Control-Allow-Credentials",true);
         res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
          res.header("Access-Control-Allow-Headers","Origin , X-Requested-with,Content-Type,Accept,content-type,application/json");
          next();
        
        });
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
