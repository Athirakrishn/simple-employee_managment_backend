require('dotenv').config()
const cors = require('cors')
const express = require('express')
const routes = require('./routing/router')
require('./db/connection')
const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

const PORT = 3000

server.listen(PORT,()=>
console.log("server started")
)

server.get('/',(req,res)=>{
  res.status(200).send("server started !!!!")
})