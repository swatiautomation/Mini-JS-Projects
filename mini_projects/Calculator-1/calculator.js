const btn = document.querySelectorAll('.button');
const buttonOperation = document.querySelectorAll('.button-operation');
const equalOperation = document.querySelector('.equal-button');
const clearOperation = document.querySelector('.clear-button');

const resultDisplay = document.createElement('h1');
document.body.prepend(resultDisplay);
resultDisplay.style.color = 'white';

let result = localStorage.getItem('calculatorResult') || '';
resultDisplay.textContent = result || '0';

btn.forEach((button) => {
  button.addEventListener('click', () => {
    result += button.textContent;
    resultDisplay.textContent = result;
  });
});

buttonOperation.forEach((button) => {
  button.addEventListener('click', () => {
    result += button.textContent;
    resultDisplay.textContent = result;
  });
});

equalOperation.addEventListener('click', () => {
  result = eval(result).toString();
  localStorage.setItem('calculatorResult', result);
  resultDisplay.textContent = result;
});

clearOperation.addEventListener('click', () => {
  result = '';
  resultDisplay.textContent = `0`;
  localStorage.removeItem('calculatorResult');
});
