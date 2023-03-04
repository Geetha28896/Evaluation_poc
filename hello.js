const express=require("express")
const process=require('process')

const app=express()
//const port=5000;

app.get('/',(req,res)=>{
console.log("Hello")
debugger;
    res.send("Hello World")
});

app.listen(process.env.Port,()=>{
console.log("Server running On Port "+process.env.Port);
})