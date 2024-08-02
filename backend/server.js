const express= require("express");
const app=express;
const cors=require("cors")
const mongoose= require("mongoose");
const jsonwebtoken=require("jsonwebtoken");


// app.use(cors());
// app.use(express.json())

//mongodb connection
mongoose
      .connect("mongodb://localhost:27017/authentication")
    .then(()=> console.log("connected to mongodb"))
    .catch((error)=>{console.log("Failed to connect to mongodb, error")})



const PORT=3000;

app.listen(PORT, ()=>{
  
})