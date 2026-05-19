const btns = document.querySelectorAll('.btn');
const btnEquals = document.querySelector('.btnEquals');
const calculatorScreen = document.querySelector('.calculator-screen');
const operationBtns = document.querySelectorAll('.operation-btn');
const clearBtn = document.querySelector('.clear-btn');

let expression = '';
press = (num) => {
  expression += num;
  calculatorScreen.value = expression;
};

calculate = () => {
  calculatorScreen.value = eval(expression);
  expression = '';
};

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    press(btn.textContent);
  });
});

operationBtns.forEach((operation) => {
  operation.addEventListener('click', () => {
    press(operation.value);
  });
});

clearBtn.addEventListener('click', () => {
  expression = '';
  calculatorScreen.value = '';
});
btnEquals.addEventListener('click', () => {
  calculate();
});
