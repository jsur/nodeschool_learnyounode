var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data) {
  if(err) throw err;
  console.log(data.toString().split("\n").length - 1);
});
