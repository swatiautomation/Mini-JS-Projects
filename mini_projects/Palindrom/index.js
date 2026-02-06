const inputText = document.querySelector('#inputText');
const checkButton = document.querySelector('#checkButton');
const msg = document.querySelector('#msg');

const reverseString = (str) => {
  const cleanedText = str.replace(/\d/g, '').toLowerCase();
  const reversedText = cleanedText.split('').reverse().join('');

  cleanedText === reversedText
    ? (msg.innerHTML = 'This is palindrome')
    : (msg.innerHTML = 'This is NOT palindrome');
  inputText.value = '';
};

checkButton.addEventListener('click', () => reverseString(inputText.value));
inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    reverseString(inputText.value);
  }
});
