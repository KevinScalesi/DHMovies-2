const http = require('http');

let router = require("./router.js")

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	// Route System
	res.end(router[req.url]())

}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));