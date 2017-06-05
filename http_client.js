const http = require('http');

http.get(process.argv[2], function(res){

  res.on('error', function(err) {
    console.log('Error occurred. ' + err);
  })

  res.on('data', function(chunk) {
    console.log(chunk.toString());
  })

});
