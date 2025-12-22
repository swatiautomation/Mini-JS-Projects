const calculateButton = document.querySelector('#calculate');
const selectDropDown = document.querySelector('#quality');
const amountInput = document.querySelector('#amount');
const guestInput = document.querySelector('#guest');
const tipAmountDisplay = document.querySelector('#tip-amount');

calculateButton.addEventListener('click', calculate);

function calculate() {
  const tip = (
    (amountInput.value * selectDropDown.value) /
    guestInput.value
  ).toFixed(2);
  amountInput.value = '';
  guestInput.value = '';
  selectDropDown.selectedIndex = 0;

  if (tip === 'NaN' || tip === 'Infinity') {
    tipAmountDisplay.innerText = 'Please enter valid values';
    showTipAmount();
  } else {
    tipAmountDisplay.innerText = `Each person should pay: $${tip}`;
    showTipAmount();
  }
}

function showTipAmount() {
  var x = tipAmountDisplay;
  x.className = 'show';
  setTimeout(() => {
    x.className = x.className.replace('show', '');
  }, 3000);
}
