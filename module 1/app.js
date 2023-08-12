// import http module
const http = require('http');

// Add request listener
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(port=3000);
