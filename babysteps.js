var sum = 0;

process.argv.forEach(function(arg, i) {
  if (i < 2) return;
  sum += Number(arg);
})

console.log(sum);
