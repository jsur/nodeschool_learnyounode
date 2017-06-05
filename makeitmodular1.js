const fs = require('fs');

module.exports = function(dir, filex, cb) {
  fs.readdir(dir, function(err, list) {
    if(err) return cb(err);
    list.filter(function(i) {
      if (i.split(".")[1] == filex) {
        return cb(null, i);
      };
    })
  })
}
