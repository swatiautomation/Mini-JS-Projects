/*

Write javascript program to count the vowels in a given string
**/

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  console.log(count);
}

countVowels('hello world');
countVowels('javascript programming');
const strr = 'hello world';
console.log(strr.indexOf('a'));
console.log(strr.indexOf('e'));
