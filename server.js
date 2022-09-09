const http = require('http');

const port = 8081; //local port number

// http://localhost:8081

const toDoList = ["Complete Node Byte", "Play Cricket"];

http
    // creating server
    .createServer((require, request) => {
        const { method, url } = require;
        // console.log(method, url);
        // request.end();
        if (url === "/todos") {
            if (method === "GET") {
                request.writeHead(200, { "Content-Type": "text/html" });
                request.write(toDoList.toString());
            }
            else if (method === "POST") {
                let body = "";
                require.on('error', (err) => {
                    console.error(err);
                })
                    .on('data', (chunk) => {
                        body += chunk;
                    })
                    .on('end', () => {
                        body = JSON.parse(body);
                        console.log("data: ", body);
                    });
            }
            else {
                request.writeHead(501);
            }
        }
        else {
            request.writeHead(404);
        }
        request.end();
    })
    // listening from server
    .listen(port, () => { // call back function
        console.log('Nodejs server started on port ${port}');
    });
