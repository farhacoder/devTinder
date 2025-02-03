const express=require("express")
const app=express()
app.use("/test",(req,res)=>{
    res.send("Hello from server!!!!!!")
})
app.use("/",(req,res)=>{
    res.send("Welcome to the dashBoard")
})
app.listen(3333,()=>{
    console.log("server is starting at port 3333......");
    
    
})