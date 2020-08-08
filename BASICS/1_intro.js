const http = require('http'); // importing or requiring http module

const server = http.createServer((req,res)=>{ //creating a server listener for requests
    console.log("in server");
    console.log(res); // prints the response object
    res.setHeader('Content-Type','text/html'); // setting the response headers to html so that the response can be a html respose
    res.write('<html><body>Hello from the other side</body></html>'); //writing the html
    res.end() // ending the response so that it can be sent
})
server.listen(8080); // listening to the requests 