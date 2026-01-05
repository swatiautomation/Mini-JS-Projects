const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');

increaseButton.addEventListener('click', () => {
  changeCount(1);
});

decreaseButton.addEventListener('click', () => {
  changeCount(-1);
});

var count = 0;
function changeCount(num) {
  count += num;
  document.querySelector('#count').innerHTML = count;
}
