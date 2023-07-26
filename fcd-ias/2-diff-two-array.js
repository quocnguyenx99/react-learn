function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.filter((element) => {
    if (!arr2.includes(element)) {
      return newArr.push(element);
    }
  });
  arr2.filter((element) => {
    if (!arr1.includes(element)) {
      return newArr.push(element);
    }
  });
  return newArr;
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
