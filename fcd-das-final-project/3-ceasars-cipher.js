function rot13(str) {
  let latinArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let arr = str.split("");
  return arr
    .map((elem) => {
      if (/\w+/gi.test(elem)) {
        let indexOfElem = latinArr.indexOf(elem);
        let ceasarsConvert = indexOfElem + 13;
        return ceasarsConvert < latinArr.length
          ? latinArr[ceasarsConvert]
          : latinArr[indexOfElem - 13];
      } else {
        return elem;
      }
    })
    .join("");
}

console.log(rot13("SERR CVMMN!"));

// Solution 2:
// let accumulator = "";
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   let isALetter = latinArr.includes(char);
//   if (isALetter === false) {
//     accumulator += char;
//   } else {
//     const charIndex = latinArr.findIndex((c) => c === char);
//     accumulator += latinArr[charIndex + 13] || latinArr[charIndex - 13];
//   }
// }
// return accumulator;
