function uniteUnique(arr) {
  // my solution:
  let newArr = [].concat(arr);
  for (let i = 0; i < arguments.length; i++) {
    let sortedArr = arguments[i].filter((elem) => {
      if (!arr.includes(elem)) {
        return elem;
      }
    });
    newArr.push(...sortedArr);
  }
  let result = newArr.filter((elem, index) => {
    return newArr.indexOf(elem) === index;
  });
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

// Solution 1:
// return Array.from(new Set([].concat(...arguments)));

// Solution 2:
// let arrays = [];
// [].forEach.call(arguments, (sub) => arrays.push(...sub));
// return arrays.filter((elem, index, arr) => arr.indexOf(elem) === index);
