const handler = require('serve-handler');
const http = require('http');
var fs = require('fs');


const server = http.createServer((request, response) => {
  console.log(request.url);

	if (request.url.includes("?")){
		response.setHeader('Content-Type', 'application/json;charset=UTF-8');
	}


  return handler(request, response);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000/?grupCategory=1');
});


/*
fs.readFile("./api/indicators", function(err, data) {
	if (err){
		console.log(err);
	}
	console.log(data.toString('utf8'));
});
*/
