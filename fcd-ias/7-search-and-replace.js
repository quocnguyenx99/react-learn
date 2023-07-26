function myReplace(str, before, after) {
  // my solution:
  let startWithUpperLetter = /^[A-Z]/.test(before);
  let startOfAfter = after.charAt(0);
  if (startWithUpperLetter) {
    after = after.replace(startOfAfter, startOfAfter.toUpperCase());
    return str.replace(before, after);
  } else {
    after = after.replace(startOfAfter, startOfAfter.toLowerCase());
    return str.replace(before, after);
  }
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

//myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch

// Solution 1:
// return before.match(/^[A-Z]/)
//   ? str.replace(before, after[0].toUpperCase() + after.slice(1))
//   : str.replace(before, after);
