function convertHTML(str) {
  //my solution
  let references = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str
    .split("")
    .map((char) => (references[char] ? references[char] : char))
    .join("");
}

console.log(convertHTML('Stuff in "quotation marks"'));

// Solution 1

// let char = {
//   "&": "&amp;",
//   "<": "&lt;",
//   ">": "&gt;",
//   '"': "&quot;",
//   "'": "&apos;",
// };

// let replacer = match => {
//   console.log(match);
//   return char[match]
// };

// return str.replace(/[&<>"']/g, replacer);
