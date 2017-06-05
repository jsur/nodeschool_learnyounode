const http = require('http');
const url = require('url');
const port = process.argv[2];

http.createServer(function(req, res) {
  const pathname = url.parse(req.url).pathname;
  const query = url.parse(req.url).query;

  if(req.method === 'GET' && pathname === '/api/parsetime') {

      let returnobject = {};
      returnobject['hour'] = new Number(query.slice(15,17)) + 2; //timezone bug here
      returnobject['minute'] = new Number(query.slice(18,20));
      returnobject['second'] = new Number(query.slice(21,23));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(returnobject));
      res.end();
  }

  if(req.method === 'GET' && pathname === '/api/unixtime') {

    let returnobject = {};
    returnobject['unixtime'] = Date.now(query.slice(4));

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(returnobject));
    res.end();
  }
}).listen(port);
