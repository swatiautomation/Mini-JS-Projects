const btn = document.querySelectorAll('.button');
const buttonOperation = document.querySelectorAll('.button-operation');
const equalOperation = document.querySelector('.equal-button');
const clearOperation = document.querySelector('.clear-button');

const resultDisplay = document.createElement('h1');
document.body.prepend(resultDisplay);
resultDisplay.style.color = 'white';

let result = '';

btn.forEach((button) => {
  button.addEventListener('click', () => {
    result += button.innerHTML;
    resultDisplay.innerHTML = result;
  });
});

buttonOperation.forEach((button) => {
  button.addEventListener('click', () => {
    result += button.innerHTML;
    resultDisplay.innerHTML = result;
  });
});

equalOperation.addEventListener('click', () => {
  result = eval(result).toString();
  resultDisplay.innerHTML = result;
});

clearOperation.addEventListener('click', () => {
  result = '';
  resultDisplay.innerHTML = `0 ${result}`;
});
