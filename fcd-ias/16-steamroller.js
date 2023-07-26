function steamrollArray(arr) {
  //my solution
  while (arr.some((elem) => Array.isArray(elem))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

// Solution 1:
// let newArr = [];
// function flatArray(arr) {
//   arr.forEach((elem) =>
//     Array.isArray(elem) ? flatArray(elem) : newArr.push(elem)
//   );
// }
// flatArray(arr);
// return newArr;
