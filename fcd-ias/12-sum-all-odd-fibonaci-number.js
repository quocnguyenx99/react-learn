function sumFibs(num) {
  let arr = [];
  for (
    let i = 0;
    i <= num;
    i = arr[arr.length - 1] + arr[arr.length - 2] || 1
  ) {
    arr.push(i);
  }
  return arr
    .filter((elem) => elem % 2 !== 0)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(sumFibs(1000));
