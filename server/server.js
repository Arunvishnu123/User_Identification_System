const express = require('express');
const app = express();
const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost:27017/testdb",{useNewUrlParser:true}, (err)=>{
    if(!err) console.log("db connected");
    else console.log("db error")
})

const newSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const newModel =new mongoose.model("Collection",newSchema);

const data = new newModel({name:"Arun",age:24});
data.save();
app.listen(5000,()=>
{
    console.log("server created at 5000")
})