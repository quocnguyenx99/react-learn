function sumAll(arr) {
  // my solution
  let smallNum = Math.min(...arr);
  let bigNum = Math.max(...arr);
  let sum = 0;
  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));

// sumAll([1, 4]) should return 10.
