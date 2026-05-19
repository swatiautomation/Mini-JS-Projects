/*

write a javascript rogram to find the even digit in an array of integer.
**/

function findEvenDigits(arr) {
  const evenDigits = arr.filter((num) => {
    return num % 2 === 0;
  });
  return evenDigits;
}

// Example usage:
const numbers = [12, 345, 2, 6, 7896];
console.log(findEvenDigits(numbers)); // Output: [12, 2, 6, 7896]

// To find the count of even digits in the array
const findCount = (arr) => arr.filter((num) => num % 2 === 0).length;
console.log(findCount(numbers)); // Output: 4

// Another approach to find the count of even digits in the array
function findEvenDigitsCount(arr) {
  let count = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      count++;
    }
  });
  return count;
}

// Example usage:
console.log(findEvenDigitsCount(numbers)); // Output: 4
