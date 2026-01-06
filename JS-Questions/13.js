/*
Write javascript program to check whether a given array is sorted in ascending order or not.

**/

function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i + 1]);
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// Example usage:
console.log(isArraySorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(isArraySorted([5, 3, 2, 4, 1]));
console.log(isArraySorted([10, 20, 80, 40, 50]));
