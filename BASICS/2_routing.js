const http = require('http'); // importing or requiring http module

const server = http.createServer((req,res)=>{ //creating a server listener for requests
    const url = req.url // takinf the url  from the request obj
    if( url === '/'){
        res.setHeader('Content-Type','text/html'); // setting the response headers to html so that the response can be a html respose
        res.write('<html><body><form action="/message" method="POST"><input type="text" name ="message"><button type = "submit">submit</button></form></body></html>'); //writing the form ofr submission
        res.end(); // ending the response so that it can be sent
        return res.end(); //returning after ending the response as it shouldnt excecute anny other response 
    }
    //the below  is printed because the route is /message and not / so the if condition is excecuted only once 
    console.log("in server");
    console.log(res); // prints the response object
    res.setHeader('Content-Type','text/html'); // setting the response headers to html so that the response can be a html respose
    res.write('<html><body>Hello from the other side</body></html>'); //writing the html
    res.end() // ending the response so that it can be sent
})
server.listen(8080); // listening to the requests 