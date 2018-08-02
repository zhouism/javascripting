function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
      // waldoIndex() = [i] + 1;
    }
  }
}

// function findWaldoIndex(arr, index){
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 'Waldo') {
//       waldoIndex() = [i] + 1;
//     }
//   }
// }

function actionWhenFound(i) {
  console.log("Found Waldo at index ", i,"!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);