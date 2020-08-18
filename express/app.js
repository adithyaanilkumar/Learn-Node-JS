const http = require('http'); // importing or requiring http module
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    
})
const server = http.createServer(app);
server.listen(8080); // listening to the requests 