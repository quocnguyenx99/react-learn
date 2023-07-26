function fearNotLetter(str) {
  // My solution:
  let newStr = str.split("");
  for (let i = 0; i < newStr.length - 1; i++) {
    let stepOfChar = newStr[i + 1].charCodeAt(0) - newStr[i].charCodeAt(0);
    if (stepOfChar !== 1) {
      let result = String.fromCharCode(newStr[i].charCodeAt(0) + 1);
      return result;
    }
  }
}

console.log(fearNotLetter("abce"));

//fearNotLetter("abce") should return the string d

// Solution 1:
// for (let i = 0; i < str.length; i++) {
//   if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
//     return String.fromCharCode(str.charCodeAt(i) + 1);
//   }
