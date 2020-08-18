const http = require('http'); // importing or requiring http module
const express = require('express');
const app = express();
app.use('/route',(req,res,next)=>{
    console.log("In rioute")
    res.send("<h1>hello rotued</h1>");
})
app.use('/',(req,res,next)=>{
    console.log("In not route")
    res.send("<h1>hello normal</h1>");
})
app.listen(8080); // listening to the requests 