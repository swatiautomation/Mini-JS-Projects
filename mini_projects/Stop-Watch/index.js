const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const time = document.querySelector('#time');

startBtn.addEventListener('click', () => startWatch());
stopBtn.addEventListener('click', () => stopWatch());
resetBtn.addEventListener('click', () => resetWatch());

let secondElapsed = 0;
let intervalId = null;

function setTime() {
  const minutes = Math.floor(secondElapsed / 60);
  const seconds = secondElapsed % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  time.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startWatch() {
  if (intervalId) stopWatch();

  intervalId = setInterval(() => {
    secondElapsed++;
    setTime();
  }, 1000);
}

function stopWatch() {
  clearInterval(intervalId);
}
function resetWatch() {
  clearInterval(intervalId);
  secondElapsed = 0;
  setTime();
}
