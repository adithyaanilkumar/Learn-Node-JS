const http = require('http'); // importing or requiring http module
const fs = require('fs')

const server = http.createServer((req,res)=>{ //creating a server listener for requests
    const url = req.url; // takinf the url  from the request obj
    const method = req.method;// the method of the request, ie GET, POST etc
    console.log("in server")
    if( url === '/'){
        console.log("in /")
        res.setHeader('Content-Type','text/html'); // setting the response headers to html so that the response can be a html respose
        res.write('<html><body><form action="/message" method="POST"><input type="text" name ="message"><button type = "submit">submit</button></form></body></html>'); //writing the form ofr submission
        //res.end(); // ending the response so that it can be sent
        return res.end(); //returning after ending the response as it shouldnt excecute anny other response 
    }
    if(url == '/message' && method =='POST'){
        const body = []
        res.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        res.on('end',()=>{
            const parsed = Buffer.concat(body).toString();
            console.log(parsed);
            const a = parsed.split("=")[1];
            fs.writeFileSync('msg.txt',"hi");
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        })
        
        
        return res.end();
    }
/*
    console.log("in server");
    res.setHeader('Content-Type','text/html'); // setting the response headers to html so that the response can be a html respose
    res.write('<html><body>Hello from the other side</body></html>'); //writing the html
    res.end() // ending the response so that it can be sent
 */
})
server.listen(8080); // listening to the requests 