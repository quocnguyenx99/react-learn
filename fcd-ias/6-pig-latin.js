function translatePigLatin(str) {
  var firstChar = str.slice(0, 1);
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "o" ||
    firstChar === "u" ||
    firstChar === "i"
  ) {
    return str.concat("way");
  } else {
    let firstVowelIndex = str.search(/[aoeui]/g);
    if (firstVowelIndex > 0) {
      let consonantCluster = str.slice(0, firstVowelIndex);
      return str.slice(firstVowelIndex).concat(consonantCluster).concat("ay");
    } else {
      return str.concat("ay");
    }
  }
}
console.log(translatePigLatin("rhythm"));
