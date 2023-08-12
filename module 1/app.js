// import http module
const http = require('http');

// Add request listener
const server = http.createServer((req, res) => {
    console.log(req);
    // process.exist()
    console.log(req.url, req.method, req.headers)
});

server.listen(port=3000);
