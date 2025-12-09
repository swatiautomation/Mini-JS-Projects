const inputText = document.querySelector('#inputText');
const checkButton = document.querySelector('#checkButton');
const msg = document.querySelector('#msg');

// function isPalindrome(text) {
//   //const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   const reversedText = cleanedText.split('').reverse().join('');
//   return cleanedText === reversedText;
// }

checkButton.addEventListener('click', () => reverseString(inputText.value));

function reverseString(str) {
  const cleanText = str.toLowerCase();
  let result = '';
  for (const s of cleanText) {
    result = s + result;
  }
  if (result === cleanText) {
    msg.innerHTML = 'palindrome';
  } else {
    msg.innerHTML = 'not palindrome';
  }
  inputText.value = '';
}
