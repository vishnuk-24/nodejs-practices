// import http module
const http = require('http');

// local import
const routes = require('./routes');

// Add request listener
const server = http.createServer(routes);

server.listen(port=3000);
