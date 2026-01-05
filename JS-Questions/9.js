/*
Given two values, write a JavaScript program to find out which one is nearest to 100.
**/

function nearestTo100(a, b) {
  const diffA = 100 - a;
  const diffB = 100 - b;

  if (diffA < diffB) {
    return a;
  } else {
    return b;
  }
}
console.log(nearestTo100(90, 70)); // Output: 20

// Using arrow function
const nearTo100 = (a, b) => (100 - a < 100 - b ? a : b);
console.log(nearTo100(60, 80)); // Output: 80
