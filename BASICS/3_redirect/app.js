const http = require('http'); // importing or requiring http module
const requ = require('./3_redirects')

const server = http.createServer(requ.requests);
server.listen(8080); // listening to the requests 