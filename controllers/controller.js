const formData = require("../model/UserMsg")


const sendData = async (req,res)=>{
   const data = new formData(req.body);
   
 try {
    await data.save();
    res.status(201).send({message:"Message Sent Succefuuly"});
 } catch (err) {
  res.status(401).send({ error: "Unable to send message" });
 }
   

}

const reciveData = async (req,res)=>{
  try {
     const getdata = await formData.find();
     res.send(getdata);
  } catch (error) {
    res.send(error);
  }

}

const deleteData = async (req,res)=>{
  try {
  const id = req.params.id;

   const deletemsg = await formData.findByIdAndDelete(id);

    if(!id){
        res.status(401).send(`Unable to Delete${id}`)
        
    }
    else{
        res.status(200).send("Successful Delete")
    }

    
  } catch (error) {
    res.status(500).send(error);
  }
}



module.exports = {sendData , reciveData , deleteData };