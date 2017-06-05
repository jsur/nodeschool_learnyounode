const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filelocation = process.argv[3];

http.createServer(function(request, response) {
  fs.createReadStream(filelocation).pipe(response);
}).listen(port);
