const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log("server running....")

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><h1>Good Night</h1></body>'
        );
        res.write('</html>');
        return res.end();
    };

    if (url === '/user') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><h1>User List</h1><ul><li>User 1</li></ul><ul><li>User 2</li></ul><ul><li>User 3</li></ul></body>'
        );
        res.write('</html>');
        return res.end();
    };
});

server.listen(3000);
