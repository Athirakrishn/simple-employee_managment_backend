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
//update emp 
//delete emp

module.exports=routes