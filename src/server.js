// using sockets for connection, just for ease of use
// module => json communications between server and modules
// tool => visual editor for modification of module

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => handle(req, res));

function tool(req, res) {
    console.log(req.url); // debugging
    fs.readFile('./tool'+req,url, (err, content) => {
        if (err) {console.log(err)}
        res.writeHead(200);
        res.end(content, 'utf-8')
    })
}

function api(req, res) {
    var reqBuffer = "";
    req.on('data', (chunk) => {reqBuffer+=chunk})
    req.on('end', () => { // ready to be handled
        let data = JSON.parse(reqBuffer);
        console.log(data); // debugging
    })
}

function handle(req, res) {
    // super ugly, fix l8r
    if (req.url == "/api") {
        api(req, res)
    } else {
        tool(req, res)
    }
}

server.listen(1337)