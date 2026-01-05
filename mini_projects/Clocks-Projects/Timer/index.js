const timerContainer = document.querySelector('.container');
const timer = document.querySelector('#timer');

let timerBegan = null;
let timerStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

timerContainer.addEventListener('click', () => {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});

function startTimer() {
  if (timerBegan === null) {
    timerBegan = new Date();
  }

  if (timerStopped !== null) {
    stoppedDuration += new Date() - timerStopped;
    startInterval = setInterval(clockRunning, 10);
  }
}

timerContainer.addEventListener('dblclick', () => {
  resetTimer();
});

function resetTimer() {
  clearInterval(startInterval);
  timerBegan = null;
  timerStopped = null;
  stoppedDuration = 0;
  timer.innerHTML = '00:00:00';
}

function clockRunning() {
  var currentTime = new Date();
  var timeElapsed = new Date(currentTime - timerBegan - stoppedDuration);
  var minutes = timeElapsed.getUTCMinutes();
  var seconds = timeElapsed.getUTCSeconds();
  var milliseconds = timeElapsed.getUTCMilliseconds();
  milliseconds = Math.floor(milliseconds / 10);

  timer.innerHTML =
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds) +
    ':' +
    (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}
function stopTimer() {
  timerStopped = new Date();
  clearInterval(startInterval);
}
