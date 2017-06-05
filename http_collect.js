const http = require('http');
let data = '';

http.get(process.argv[2], function(res){

  res.on('error', function(err) {
    console.log('Error occurred. ' + err);
  })

  res.on('data', function(chunk) {
    data += chunk;
  });

  res.on('end', function() {
    console.log(data.length);
    console.log(data);
  });

});
