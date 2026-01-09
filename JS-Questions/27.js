/*
Write program where @ character act like a backspace in string.
e.g 
Input: "abc@de@f"
Output: "abe"

input: "hello@ world@@"
output: "hell wor"
**/

function processString(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '@') {
      stack.pop();
      //  console.log(stack);
    } else {
      stack.push(str[i]);
      console.log(stack);
    }
  }
  return stack.join('');
}

console.log(processString('abc@de@f')); // 'abe'
// console.log(processString('hello@ world@@')); // 'hell wor'
// console.log(processString('a@b@c@d@e@f@')); // ''
// console.log(processString('@@abc')); // 'abc'

const stri = 'ab@cde@@f@g';
const striArr = stri.split('');
console.log(striArr); // [ 'a', 'b', '@', 'c', 'd', 'e', '@', '@', 'f', '@', 'g' ]

console.log(striArr.pop()); // 'abe'
