const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log("server running....")

    // top endpoint for create-user form
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><h1>Hello Guys</h1></body>'
        );
        res.write('<form action="/create-user" method="POST"><input type="text" name="username" placeholder="username"><button type="submit">Send</button></form>')
        res.write('</html>');
        return res.end();
    };

    // display a user list
    if (url === '/user') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><h1>User List</h1><ul><li>User 1</li></ul><ul><li>User 2</li></ul><ul><li>User 3</li></ul></body>'
        );
        res.write('</html>');
        return res.end();
    };

    // Adds new end point. /create-user
    if (url === '/create-user') {
      const body = []
  
      req.on('data', chunk => {
        body.push(chunk)
      })
  
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        const username = parsedBody.split('=')[1]
  
        console.log(username)
      })
  
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    }
});

server.listen(3000);
