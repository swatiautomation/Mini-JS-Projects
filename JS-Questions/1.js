/**
 * Write a javascript function to check two numbers and return true if one of the numbers is 100 or if their sum is 100 or sum of two number is 100
 */

function toCheckNumbers(num1, num2) {
  if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
    return true;
  }
  return false;
}

console.log(toCheckNumbers(50, 50)); // true
console.log(toCheckNumbers(100, 0));
console.log(toCheckNumbers(0, 100));
console.log(toCheckNumbers(30, 20)); // false

// arrow function ////////////////////////////////////////////////////////////////////////////////////////
console.log('Using Arrow Function:');

const toCheckNumbers1 = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100 ? true : false;

console.log(toCheckNumbers1(50, 50)); // true
console.log(toCheckNumbers1(100, 0));
console.log(toCheckNumbers1(0, 100));
console.log(toCheckNumbers1(30, 20)); // false
