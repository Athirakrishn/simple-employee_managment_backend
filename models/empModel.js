const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
  empMail:{
    type:String,
    required:true,
    unique:true
  },
  empName:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  },
  designation:{
    type:String,
    required:true
  },
})
const employees = mongoose.model("employees",empSchema)
module.exports=employees