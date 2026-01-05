/*
Write javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, return the original string.

**/
function createNewString(str) {
  if (str.length < 3) {
    return str;
  }
  const startingString = str.slice(0, 3);
  const endingString = str.slice(-3);
  return startingString + endingString;
}

console.log(createNewString('abcdef')); // Output: "abc" + "def" = "abcdef"
console.log(createNewString('ab')); // Output: "ab"
console.log(createNewString('swati sharma')); // Output: "swa" + "rma" = "swarma"
console.log(createNewString('JavaScript')); // Output: "Jav" + "ipt" = "Javipt"
