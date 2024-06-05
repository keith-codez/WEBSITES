const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("Failed to connect");
})

const LogInSchema=new mongoose.LogInSchema({
    name:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collectio=new mongoose.model("Collection1",LoginInSchema)

module.exports=collection