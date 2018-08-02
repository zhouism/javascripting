// function map(items, transformer){
//   var output = [];
//   items.forEach(function(item, index, coll){
//     output.push(transformer(item, index, coll));
//   });
//   return output
// }
// var squares = map(nums, square);
// console.log(squares);


var words = ["ground", "control", "to", "major", "tom"];

function map(arr,cb) {
  output = [];
  arr.forEach(function(word){
    output.push(cb(word));
  });
    console.log(output)
}



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});