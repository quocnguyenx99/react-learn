function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter((elem) => elem !== arguments[i]);
  }
  return arr;
}

console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
);
