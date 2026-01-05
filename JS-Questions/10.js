/*
Write javascript program to find out occurence to character in string 2 to 4 times
**/

function charOccurence(str, char) {
  const regex = new RegExp(char, 'g');
  const matches = str.match(regex);
  const count = matches ? matches.length : 0;
  return count >= 2 && count <= 4;
}
console.log(charOccurence('hello world', 'o')); // Output: true
console.log(charOccurence('javascript', 'a')); // Output: true
console.log(charOccurence('test case', 'c')); // Output: false

// Using filter method
function charOccurenceFilter(str, char) {
  const count = str.split('').filter((ch) => ch === char).length;
  return count >= 2 && count <= 4;
}
console.log(charOccurenceFilter('hello world', 'l')); // Output: true
console.log(charOccurenceFilter('example', 'e')); // Output: true
console.log(charOccurenceFilter('sample', 's')); // Output: false

// Using for loop
function charOccur(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count >= 2 && count <= 4;
}
console.log(charOccur('hello world', 'l')); // Output: true
console.log(charOccur('example', 'e')); // Output: true
console.log(charOccur('sample', 's')); // Output: false
