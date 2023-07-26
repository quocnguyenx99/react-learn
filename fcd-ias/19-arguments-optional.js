function addTogether() {
  // my solution:
  let args = [...arguments];
  return args.length === 2
    ? args.every((elem) => typeof elem === "number")
      ? args[0] + args[1]
      : undefined
    : typeof args[0] === "number"
    ? (input) => (typeof input === "number" ? args[0] + input : undefined)
    : undefined;
}

// addTogether(23, 30) should return 53.
// addTogether(5)(7) should return 12

console.log(addTogether(2, 3));
