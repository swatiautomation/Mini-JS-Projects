const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const time = document.querySelector('#time');

let secondElapsed = 0;
let milisecondsElapsed = 0;
let minutesElapsed = 0;
let intervalId = null;

startBtn.addEventListener('click', () => startWatch());
stopBtn.addEventListener('click', () => stopWatch());
resetBtn.addEventListener('click', () => resetWatch());

function setTime() {
  milisecondsElapsed++;
  if (milisecondsElapsed === 100) {
    milisecondsElapsed = 0;
    secondElapsed++;
    if (secondElapsed === 60) {
      secondElapsed = 0;
      minutesElapsed++;
    }
  }
  const formattedMilliseconds =
    milisecondsElapsed < 10 ? `0${milisecondsElapsed}` : milisecondsElapsed;
  const formattedSeconds =
    secondElapsed < 10 ? `0${secondElapsed}` : secondElapsed;
  const formattedMinutes =
    minutesElapsed < 10 ? `0${minutesElapsed}` : minutesElapsed;
  time.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function startWatch() {
  if (intervalId !== null) stopWatch();
  intervalId = setInterval(setTime, 10);
}

function stopWatch() {
  clearInterval(intervalId);
}
function resetWatch() {
  clearInterval(intervalId);
  time.textContent = '00:00:00';
  secondElapsed = 0;
  milisecondsElapsed = 0;
  minutesElapsed = 0;
}
