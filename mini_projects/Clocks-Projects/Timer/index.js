const timerContainer = document.querySelector('.container');
const timer = document.querySelector('#timer');

let timerBegan = null;
let timerStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

const startTimer = () => {
  timerBegan === null;
  timerBegan = new Date();

  if (timerStopped !== null) {
    stoppedDuration += new Date() - timerStopped;
    startInterval = setInterval(clockRunning, 100);
  }
};

const resetTimer = () => {
  clearInterval(startInterval);
  timerBegan = null;
  timerStopped = null;
  stoppedDuration = 0;
  timer.innerHTML = '00:00:00';
};

const clockRunning = () => {
  const currentTime = new Date();
  const timeElapsed = new Date(currentTime - timerBegan - stoppedDuration);
  const minutes = timeElapsed.getUTCMinutes();
  const seconds = timeElapsed.getUTCSeconds();
  let milliseconds = timeElapsed.getUTCMilliseconds();
  milliseconds = Math.floor(milliseconds / 10);

  timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
};
const stopTimer = () => {
  timerStopped = new Date();
  clearInterval(startInterval);
};

timerContainer.addEventListener('click', () => {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});
timerContainer.addEventListener('dblclick', () => {
  resetTimer();
});
