function smallestCommons(arr) {
  // my solution:
  let smallNum = Math.min(...arr);
  let bigNum = Math.max(...arr);
  let scm = bigNum;
  while (true) {
    let isScm = true;
    for (let i = smallNum; i <= bigNum; i++) {
      if (scm % i !== 0) {
        isScm = false;
        break;
      }
    }
    if (isScm) {
      return scm;
    } else {
      scm++;
    }
  }
}

console.log(smallestCommons([1, 5]));
