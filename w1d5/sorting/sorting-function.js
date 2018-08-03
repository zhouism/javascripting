//var numbers = [];


var numbers = process.argv.slice(2);

//console.log(numbers) => returns as a string
var numbered = JSON.parse(("[" + numbers + "]"));
//console.log(numbered) => array of numbers

var sorted = numbered.sort(function(a, b) {
  return a - b;
});

//console.log(sorted);

exports.sorted = sorted;