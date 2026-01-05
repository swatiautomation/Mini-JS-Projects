const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const timerDisplay = document.querySelector('.timer');

let msec = 0;
let sec = 0;
let min = 0;

let interval = null;

startButton.addEventListener('click', () => {
  if (interval !== null) {
    clearInterval(interval);
    console.log('Cleared existing interval:', interval);
  }

  interval = setInterval(startTimer, 10);
  console.log('Interval ID:', interval);
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  timerDisplay.textContent = '00:00:00';
  msec = 0;
  sec = 0;
  min = 0;
});

function startTimer() {
  msec++;

  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  let msecString = msec < 10 ? '0' + msec : msec;
  let secString = sec < 10 ? '0' + sec : sec;
  let minString = min < 10 ? '0' + min : min;
  timerDisplay.textContent = `${minString}:${secString}:${msecString}`;
}
