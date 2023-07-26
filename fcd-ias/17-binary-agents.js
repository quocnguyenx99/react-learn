function binaryAgent(str) {
  // my solution
  let newArr = [];
  str.split(" ").map((elem) => {
    let sum = 0;
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === "1") {
        sum += Math.pow(2, elem.length - (i + 1));
      }
    }
    let char = String.fromCharCode(sum);
    return newArr.push(char);
  });
  return newArr.join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

// Solution 1:
// return str
//     .split(" ")
//     .map(char => String.fromCharCode(parseInt(char, 2)))
//     .join("");
