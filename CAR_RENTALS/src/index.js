const path=require("path")
const express=require("express")
const app=express()


app.get("/",(req,res)=>{
    res.render("login")
} )

app.listen(3000,()=>{
    console.log("port connected");
})