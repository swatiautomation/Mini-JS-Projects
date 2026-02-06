const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const timerDisplay = document.querySelector('.timer');

let msec = 0;
let sec = 0;
let min = 0;

let intervalId = null;

const startTimer = () => {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  const milisecond = msec.toString().padStart(2, '0');
  const seconds = sec.toString().padStart(2, '0');
  const minutes = min.toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}:${milisecond}`;
};

startButton.addEventListener('click', () => {
  if (intervalId !== null) clearInterval(intervalId);
  intervalId = setInterval(startTimer, 100);
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  timerDisplay.textContent = '00:00:00';
  msec = 0;
  sec = 0;
  min = 0;
});
