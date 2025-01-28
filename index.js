import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const app=express();




app.get("/",(req,res)=>{
    res.send("Hello Nikhil this is first Express File Production Ready  File!")
})
app.listen(process.env.PORT,()=>{
    
    console.log(`port is listining at ${process.env.PORT}`);
})