/*

Write javascript program to replace first digit in a string with $ymbol in a given string.

**/
function replaceFirstStringWithSymbol(str, symbol) {
  return str.replace(/[0-9]/, symbol);
}

// Example usage:
const inputString = 'Hello123World';
const symbol = '$';
const result = replaceFirstStringWithSymbol(inputString, symbol);
console.log(result); // Output: Hello$23World

// Another approach to replace first digit in a string with $ymbol in a given string.
function replaceFirstDigit(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      return str.slice(0, i) + symbol + str.slice(i + 1);
    }
  }
  return str; // Return original string if no digit is found
}
console.log(replaceFirstDigit('Test123String', '#')); // Output: Test#23String
