const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clearBtn');
const equlaBtn = document.querySelector('.equals');
const operator = document.querySelector('.operator');

function appendValue(text) {
  if (
    display.innerText === '0' ||
    display.innerText === 'Error' ||
    display.innerText === 'Infinity'
  ) {
    display.innerText = text;
    return;
  }

  display.innerText = `${display.innerText}${text}`;
}

clearBtn.addEventListener('click', () => {
  display.innerText = '';
});

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = 'Error';
  }
}
