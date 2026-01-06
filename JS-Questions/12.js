/*  
Write javascript program to find out number of even values upto a given numbers.
**/

function countEvenNumbersUpTo(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNumbersUpTo(6)); // Output: 5
console.log(countEvenNumbersUpTo(9)); // Output: 6

// Another approach to find out number of even values upto a given numbers.
function countEvenNum(n) {
  const count = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count.push(i);
    }
  }
  return count.length;
}

console.log(countEvenNum(6)); // Output: 6
console.log(countEvenNum(9)); // Output: 8
