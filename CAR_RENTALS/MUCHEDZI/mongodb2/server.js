const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const port = 3019

const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port,()=>{
    console.log("Server has started")
})