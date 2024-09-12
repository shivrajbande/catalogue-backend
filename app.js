const express = require("express");
const cors  = require("cors");
const bodyParser = require('body-parser');
const ProductRoutes = require("./src/product_routes");


const app = express();
app.use(cors());
// app.use(bodyParser.json());

app.use("/", ProductRoutes);

app.get("/",(req,res)=>{
    res.send("hello shivraj");
});

app.listen(3000,()=>{
    console.log("connected to server");
});