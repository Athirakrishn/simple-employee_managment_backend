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

//get one employee
exports.getSingleEmployee = async(req,res)=>{
  console.log("inside getSingleEmployee");
  const {id} = req.params
  try{
const singleEmployee =await employees.findById({_id:id})

 res.status(200).json(singleEmployee)
}
catch(err){
 res.status(500).json(err)
  }
  
}

//update one employee
exports.updateEmployee = async(req,res)=>{
  console.log("inside updateEmployee");
  const {id} = req.params
  const{empMail,empName,salary,designation}=req.body
  try{
const updateEmp =await employees.findByIdAndUpdate({_id:id},{empMail,empName,salary,designation},{new:true})
 
 res.status(200).json(updateEmp)
}
catch(err){
 res.status(500).json(err)
  }
  
}

//delete one employee
exports.removeEmployee = async(req,res)=>{
  console.log("inside removeEmployee ");
  const {id} = req.params
  try{
const removeEmp =await employees.findByIdAndDelete({_id:id})

 res.status(200).json("Deleted successfully")
}
catch(err){
 res.status(500).json(err)
  }
  
}