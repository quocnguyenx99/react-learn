function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);

// Solution 1:
// while (arr.length > 0 && !func(arr[0])) {
//   arr.shift();
// }
// return arr;
