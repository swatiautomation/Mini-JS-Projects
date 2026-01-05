/**
 * Write a javascript function to create a new string adding 'New!!' in front of a given string. If the given string begins with 'New!!' then return the original string.
 *
 *
 */

function addNewPrefix(str) {
  if (str.startsWith('New!!')) {
    return str;
  }
  return 'New!!' + str;
}
console.log(addNewPrefix('Swati Sharma')); // Output: 'New!!Hello World'
console.log(addNewPrefix('New!!Hello World')); // Output: 'New!!Hello World'

// Alternative solution using ternary operator

const addNewPrefix1 = (str) => (str.startsWith('New!!') ? str : `New!!${str}`);

console.log(addNewPrefix('World')); // Output: 'New!!Hello World'
console.log(addNewPrefix('New!!Hello World')); // Output: 'New!!Hello World'
