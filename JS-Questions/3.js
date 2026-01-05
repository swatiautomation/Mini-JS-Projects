/**
 * Write a javascript function to replace every character in a given string wih the character following it in the alphabet.
 *
 *
 */

function replaceWithNextChar(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'z') {
      result += 'a';
      continue;
    }
    result += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  console.log(result);
}
replaceWithNextChar('abcdxyz'); // 'bcdeyza'
replaceWithNextChar('hello'); // 'ifmmp'
replaceWithNextChar('javascript'); // 'kbwbtdsjqu'

// using map() method
console.log('Using map() method:');

const replaceWithNextChar1 = (str) =>
  str
    .split('')
    .map((char) =>
      char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)
    )
    .join('');

console.log(replaceWithNextChar1('abcdxyz')); // 'bcdeyza'
console.log(replaceWithNextChar1('hello')); // 'ifmmp'
console.log(replaceWithNextChar1('javascript')); // 'kbwbtdsjqu'
