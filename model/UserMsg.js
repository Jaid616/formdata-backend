const mongoose = require("mongoose")

const formDataSchema = new mongoose.Schema({
   username : {
    type:String,
    required : true
   },
   email:{
    type:String,
    required: true
   },
   number: {
      type:Number,
      required:true
   },
   password: {
      type:String,
       required:true
   },
   gender: {
      type: String,
      required: true
   },

   languages:{
      type : [],
      required: true
   },
   country :{
      type: String,
      required: true
   },
   date :{
    type:Date,
    default: Date.now()
   }
    
});

const formData = new mongoose.model("formdata",formDataSchema);

module.exports= formData ;

