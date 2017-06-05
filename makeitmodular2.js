const modular = require('./makeitmodular1');

modular(process.argv[2], process.argv[3], function(err, data) {
  if(err) {
    console.log('Error occurred.');
  }
  console.log(data);
});
