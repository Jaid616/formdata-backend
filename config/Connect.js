const dotenv = require("dotenv")
const mongooes = require('mongoose')
dotenv.config({path: "./config.env"});
  
const url = process.env.DATABASE;
const Connect = ()=>{
  
  return  mongooes.connect(url , {
      useNewUrlParser : true,
      useUnifiedTopology : true,
   });
}

module.exports = Connect ;