function pairElement(str) {
  // my solution:
  let reference = {
    C: ["C", "G"],
    G: ["G", "C"],
    A: ["A", "T"],
    T: ["T", "A"],
  };
  return str.split("").map((char) => reference[char]);
}

console.log(pairElement("ATCGA"));

//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

// Solution 1:
// function pairElement(str) {
//   return str.split("").map((charac) => {
//     switch (charac) {
//       case "G":
//         return ["G", "C"];
//         break;
//       case "C":
//         return ["C", "G"];
//         break;
//       case "A":
//         return ["A", "T"];
//         break;
//       case "T":
//         return ["T", "A"];
//         break;
//     }
//   });
// }
