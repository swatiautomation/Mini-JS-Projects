/*  

Write javasript program to get largetst even number from an array.
**/

function getLargestEvenNumber(arr) {
  let largestEven = null;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (arr[i] > largestEven) {
        largestEven = arr[i];
      }
    }
  }
  return largestEven;
}

// Example usage:
const numbers = [12, 345, 2, 6, 7896];
console.log(getLargestEvenNumber(numbers)); // Output: 7896

// Another approach to get largest even number from an array

const largestEvenNumber = (arr) =>
  arr
    .filter((num) => num % 2 === 0)
    .reduce((max, min) => {
      return Math.max(max, min);
    });
console.log(largestEvenNumber(numbers)); // Output: 7896
console.log(largestEvenNumber([1, 3, 5, 6])); // Output: -Infinity (no even numbers)

// Another approach to get largest even number from an array
function findLargestEvenNumber(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  if (evenNumbers.length === 0) {
    return null; // No even numbers found
  }
  return Math.max(...evenNumbers);
}

console.log(findLargestEvenNumber(numbers));
console.log(findLargestEvenNumber([1, 3, 5, 7])); // Output: null
