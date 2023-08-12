// import http module
const http = require('http');

// Add request listener
const server = http.createServer((req, res) => {
    // process.exist()
    console.log(req.url, req.method, req.headers);

    const url = req.url;

    if (url === '/') {
        // send custom response
        // set text/html content type in header
        res.setHeader('Content-Type', 'text/html');

        // write response
        res.write('<html>');
        res.write('<head><title>hi</title></head>')
        res.write('<body>Hello World</body>')
        res.write('</html>');
        return res.end();
    };
});

server.listen(port=3000);
