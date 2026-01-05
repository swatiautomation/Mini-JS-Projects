/*
Write javascript program to extract the first half of a string of even length.
**/

function extractFirstHalf(str) {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  }
  return 'String length is not even';
}

console.log(extractFirstHalf('JavaScript')); // Output: "Java"
console.log(extractFirstHalf('HelloWorld'));
console.log(extractFirstHalf('abcd')); // Output: "ab"
console.log(extractFirstHalf('abc')); // Output: "String length is not even"
