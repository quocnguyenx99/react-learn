const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  this.getFullName = function () {
    return fullName;
  };
  this.setFirstName = function (first) {
    let newName = fullName.split(" ");
    newName[0] = first;
    fullName = newName.join(" ");
  };
  this.setLastName = function (last) {
    let newName = fullName.split(" ");
    newName[1] = last;
    fullName = newName.join(" ");
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
