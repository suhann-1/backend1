const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")


const app=express()
app.use(cors())

app.get("/",(request,response)=>{
    response.send("hello!")
    
})

app.get("/contact",(request,response)=>{
    response.send("welcome to my contact")
})

app.listen(8080,()=>{
    console.log("server started")
})