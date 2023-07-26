function convertToRoman(num) {
  // my solution:
  let lookupTable = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let accumulator = "";
  lookupTable.forEach((elem) => {
    console.log(elem);
    let remainder = num % elem[1];
    console.log(remainder);
    let quotient = Number.parseInt(num / elem[1]);
    console.log(quotient);
    if (remainder != 0 || quotient != 0) {
      num = remainder;
      if (quotient != 0) {
        console.log(quotient);
        for (let i = 0; i < quotient; i++) {
          accumulator += elem[0];
        }
      }
    }
  });
  return accumulator;
}

console.log(convertToRoman(1999));

// Solution 2:
// const lookupTable = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// let accumulator = "";
// for (key in lookupTable) {
//   const numberValue = lookupTable[key];
//   while (numberValue <= num) {
//     num -= numberValue;
//     accumulator += key;
//   }
// }
// return accumulator;
