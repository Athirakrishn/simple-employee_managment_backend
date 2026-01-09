const employees = require("../models/empModel")
//add employee
exports.addEmployee = async(req,res)=>{
  console.log("inside addEmployee");
  const {empMail,empName,salary,designation}=req.body
  try{
const existingEmployee =await employees.findOne({empMail})
if(existingEmployee){
 res.status(409).json("Employee already exist")
}else{
  const newEmployee = new employees({
    empMail,empName,salary,designation
  }) 
  await newEmployee.save()
 res.status(200).json("Employee added successfully ")

}
  }catch(err){
 res.status(500).json(err)
  }
  
}

//get all employee
exports.getAllEmployee = async(req,res)=>{
  console.log("inside getAllEmployee");
  try{
const allEmployee =await employees.find()

 res.status(200).json(allEmployee)
}
catch(err){
 res.status(500).json(err)
  }
  
}