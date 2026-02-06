const passBox = document.querySelector('#passBox');
const inputSlider = document.querySelector('#inputSlider');
const sliderValue = document.querySelector('#sliderValue');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generateBtn = document.querySelector('#generateBtn');
const copyIcon = document.querySelector('#copyIcon');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

const generatePassword = () => {
  let generatePassword = '';
  let allChars = '';

  allChars += lowercase.checked ? lowercaseChars : '';
  allChars += uppercase.checked ? uppercaseChars : '';
  allChars += numbers.checked ? numberChars : '';
  allChars += symbols.checked ? symbolChars : '';

  if (allChars === '' || allChars.length == 0) {
    alert('Please select at least one character type!');
  }

  let i = 1;
  while (i <= inputSlider.value) {
    generatePassword += allChars.charAt(
      Math.floor(Math.random() * allChars.length),
    );
    i++;
  }
  return generatePassword;
};

copyIcon.addEventListener('click', () => {
  if (passBox.value === '') return;
  navigator.clipboard.writeText(passBox.value);
  copyIcon.textContent = 'check';
  copyIcon.title = 'Password Copied';
  setTimeout(() => {
    copyIcon.textContent = 'content_copy';
    copyIcon.title = '';
  }, 2000);
});
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
});
