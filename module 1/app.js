// import http module
const http = require('http');
// import file system module
const fs = require('fs');


// Add request listener
const server = http.createServer((req, res) => {
    // process.exist()
    console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method

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

    if (url == '/file' && method === 'POST') {
        // Get request data
        const body = []

        // Gets chunk data from request and push to body array
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // make parsedBody from body array
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })


        fs.writeFileSync('text.txt', 'Sample');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(port=3000);
