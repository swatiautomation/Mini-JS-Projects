const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const time = document.querySelector('#time');

let secondElapsed = 0;
let milisecondsElapsed = 0;
let minutesElapsed = 0;
let intervalId = null;

const setTime = () => {
  milisecondsElapsed++;
  if (milisecondsElapsed === 100) {
    milisecondsElapsed = 0;
    secondElapsed++;
    if (secondElapsed === 60) {
      secondElapsed = 0;
      minutesElapsed++;
    }
  }
  const formattedMilliseconds = milisecondsElapsed.toString().padStart(2, '0');
  const formattedSeconds = secondElapsed.toString().padStart(2, '0');
  const formattedMinutes = minutesElapsed.toString().padStart(2, '0');

  time.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
};

const startWatch = () => {
  if (intervalId !== null) stopWatch();
  intervalId = setInterval(setTime, 100);
};

const stopWatch = () => {
  clearInterval(intervalId);
};
const resetWatch = () => {
  clearInterval(intervalId);
  time.textContent = '00:00:00';
  secondElapsed = 0;
  milisecondsElapsed = 0;
  minutesElapsed = 0;
};

startBtn.addEventListener('click', () => startWatch());
stopBtn.addEventListener('click', () => stopWatch());
resetBtn.addEventListener('click', () => resetWatch());
