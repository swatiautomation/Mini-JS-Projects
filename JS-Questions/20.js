/*
Write javascript program that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
**/

function allElementsPassPredicate(collection, predicate) {
  return collection.every(predicate);
}

console.log(allElementsPassPredicate([2, 4, 6, 8], (num) => num % 2 === 0));
console.log(allElementsPassPredicate([1, 2, 3, 4], (num) => num > 0));
console.log(
  allElementsPassPredicate(
    ['apple', 'banana', 'cherry'],
    (str) => str.length > 3
  )
);

// Another approach using a for loop
function allElementsPassPredicateLoop(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (!predicate(collection[i])) {
      return false;
    }
  }
  return true;
}
console.log(allElementsPassPredicateLoop([2, 4, 6, 8], (num) => num % 2 === 0));
console.log(allElementsPassPredicateLoop([1, 2, 3, 4], (num) => num > 0));
