const fs = require('fs');
const path = require('path');
const filex = process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
  if(err) throw err;
  list.filter(function(i) {
    if (i.split(".")[1] == filex) {
      console.log(i);
      return i;
    };
  })
})
