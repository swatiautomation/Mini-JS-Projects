const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');
const countDisplay = document.querySelector('#count');
const resetButton = document.querySelector('.reset');

let count = 0;
changeCount = (num) => {
  count += num;
  countDisplay.textContent = count;
};

saveToLocalStorage = () => {
  localStorage.setItem('count', count);
};
resetLocalStorage = () => {
  localStorage.removeItem('count');
};

getFromLocalStorage = () => {
  const savedCount = parseInt(localStorage.getItem('count')) || 0;
  // if (savedCount !== null) {
  //   count = parseInt(savedCount, 0);
  //   countDisplay.textContent = count;
  // }
  countDisplay.textContent = savedCount;
};

window.addEventListener('DOMContentLoaded', getFromLocalStorage());

increaseButton.addEventListener('click', () => {
  changeCount(1);
  saveToLocalStorage();
});

decreaseButton.addEventListener('click', () => {
  changeCount(-1);
  saveToLocalStorage();
});

resetButton.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
  resetLocalStorage();
});
