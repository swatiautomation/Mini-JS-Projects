const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const time = document.querySelector('#time');

startBtn.addEventListener('click', () => startWatch());
stopBtn.addEventListener('click', () => stopWatch());
resetBtn.addEventListener('click', () => resetWatch());

function startWatch() {
  console.log('start');
}

function stopWatch() {
  console.log('stop');
}
function resetWatch() {
  console.log('reset');
}
