const http = require('http');

const port = 8081; //local port number

http
    // creating server
    .createServer((require, response) => {//call back function
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello, this is from my server</h1>");
        response.end();
    })
    // listening from server
    .listen(port, () => { // call back function
        console.log('Nodejs server started on port ${port}');
    });
