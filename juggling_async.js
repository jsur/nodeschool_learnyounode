const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]]
const concat = require('concat-stream');
let count = 0;
let responses = [];

urls.forEach(function(url, i) {

  http.get(url, function(res) {
    res.on('error', function(err) {
      console.log('Error occurred. ' + err);
    })

    res.pipe(concat(function(data) {
      responses[i] = data.toString();
      count++;
    }))

    res.on('end', function() {
      if(count === urls.length) {
        responses.forEach(function(line) {
          console.log(line);
        })
      }
    });
  })
})
