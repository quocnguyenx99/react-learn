function whatIsInAName(collection, source) {
  return collection.filter((elem) => {
    for (let key in source) {
      if (elem[key] !== source[key]) {
        return false;
      }

      return true;
    }
  });
}
console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

// var arr = { first: "Tybalt", last: "Capulet" };
// var obj = { last: "Capulet" };
// var rest = Object.keys(obj);
// console.log(obj[rest] === arr[rest]);

// console.log(rest in arr);
