function palindrome(str) {
  //my solution:
  var slpitStr = str.split(/\W|_/).join("").toLowerCase();
  let newStr = "";
  for (let i = slpitStr.length - 1; i >= 0; i--) {
    newStr += slpitStr[i];
  }
  return newStr === slpitStr;
}

console.log(palindrome("My age is 0, 0 si ega ym."));

console.log(palindrome("nope"));

// Solution 1:
// function palindrome(str) {
//   const alphanumbericOnly = str.toLowerCase().match(/[a-z0-9]/g);
//   console.log(alphanumbericOnly.join(""));
//   return alphanumbericOnly.join("") === alphanumbericOnly.reverse().join("");
// }
