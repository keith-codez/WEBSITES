const path=require("path")
const express=require("express")
const app=express()
const hbs= require("hbs")

const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)


app.get("/", (req, res)=>{
    res.render
})

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/Signup",async (req, res)=>{

    const data={
        name:req.body.name,
        password:req.body.password,
    }



})


app.listen(3000,()=>{
    console.log("port connected");
})