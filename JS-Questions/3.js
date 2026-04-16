/**
 * Write a javascript function to replace every character in a given string wih the character following it in the alphabet.
 *
 *
 */

const { number } = require('@inquirer/prompts');

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
      char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1),
    )
    .join('');

console.log(replaceWithNextChar1('abcdxyz')); // 'bcdeyza'
console.log(replaceWithNextChar1('hello')); // 'ifmmp'
console.log(replaceWithNextChar1('javascript')); // 'kbwbtdsjqu'

const s = 'swati';

console.log(s.charCodeAt(0)); //115
console.log(String.fromCharCode(116)); //t

//===============================================================
//create function to return last element in array

const arr = [1, 2, 3];
console.log(arr.pop());
console.log(arr);

//==========================================================
console.log(Math.floor(Math.random() * 19));
const newArray = [1, 2, 3, 'd', 'w'];

const newRes = newArray.filter((arr) => {
  if (typeof arr !== 'number') {
    return true;
  }
});
console.log(newRes);

const obj = [
  {
    name: 'swati',
    age: 21,
  },
  {
    name: 'swati',
    age: 22,
  },
];

console.log(Object.keys(obj).length < 1);
const res = obj.filter((ob) => {
  return ob.age === 21;
});
console.log(res);

const arrele = [1, 2, 3];
const newArr = arrele.map((ele) => {
  return ele * 2;
});
console.log(newArr);

const checkArray = arrele.every((ele) => {
  return typeof ele === 'number';
});

console.log(checkArray);
