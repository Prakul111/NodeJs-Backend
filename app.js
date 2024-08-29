const http = require('http');


const server = http.createServer((req, res) => {
    //console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node Server</h1></body>');
    res.write('</head>');
    res.end();
}); 

server.listen(3000);



