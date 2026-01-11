const express = require('express')//import express
const empController = require('../controllers/empController')
//creating routes
const routes = new express.Router()
//define path 
//add emp
routes.post('/add-employee',empController.addEmployee)
//get all emp
routes.get('/all-employee',empController.getAllEmployee)
//get single emp
routes.get('/:id/employee',empController.getSingleEmployee)


//update emp 
routes.put('/:id/employee/update',empController.updateEmployee)

//delete emp
routes.delete('/:id/employee/remove',empController.removeEmployee)



module.exports=routes