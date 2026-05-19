/* Write a function that takes two words as an argument and returns true if they are anagrams (contain the exact same letters) and false otherwise. */

function areAnagrams(word1, word2) {
  const word_1 = word1.split('').sort().join('');
  console.log(word_1);
  const word_2 = word2.split('').sort().join('');
  console.log(word_2);

  return word_1 === word_2;
}

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('dog', 'don')); // true
