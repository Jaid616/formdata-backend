
const express = require('express');
const Connect = require("./config/Connect")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const app = express();
const route = require("./routes/route")
PORT =  process.env.PORT || 5000;
app.use(express.json());
app.use(cors(corsOptions))

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
