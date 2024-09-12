const express = require("express");
const cors  = require("cors");

const app = express();

app.get("/",(req,res)=>{
    res.send("hello shivraj");
});

app.listen(3000,()=>{
    console.log("connected to server");
});