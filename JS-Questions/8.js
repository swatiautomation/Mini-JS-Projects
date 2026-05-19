/*
Write a javscript program to concatenate two string except their first character.

**/
function concatenateStrings(str1, str2) {
  const newStr1 = str1.slice(1);
  const newStr2 = str2.slice(1);
  return newStr1 + newStr2;
}

console.log(concatenateStrings('Hello', 'World')); // Output: "elloorld"
console.log(concatenateStrings('JavaScript', 'Programming')); // Output: "avaScriptrogramming"
console.log(concatenateStrings('Swati', 'Sharma')); // Output: "watiharma"
