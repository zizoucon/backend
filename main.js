// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Voilà la réponse du serveur !');
// });

// server.listen(process.env.PORT || 3000);

// cree notre premiere application node js 

var http=require('http')

var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));
server.listen(7000);

// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
// Now execute the main.js to start the server as follows −