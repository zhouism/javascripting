function countLetters(string) {
  var letterObj = {};
  for (var i = 0; i < string.length; i++){
    if (string[i] === " "){
      continue;
    }
    if (string[i] in letterObj){
      letterObj[string[i]]++;
    } else {
      letterObj[string[i]] = 1;
    }
  }
  return letterObj;
}