/*

Write javascrkpt program to compare two objects to determine if they contains the same properties and values.

**/

function areObjectsEqual(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  // console.log(key1, key2);

  if (key1.length !== key2.length) return false;
  for (let key of key1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { name: 'Alice', age: 25 };
const obj3 = { name: 'Bob', age: 30 };
console.log(areObjectsEqual(obj1, obj2)); // true
console.log(areObjectsEqual(obj1, obj3)); // false
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
