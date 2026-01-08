const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resumeBtn = document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');
const title = document.querySelector('.title');
const pomoCountsDisplay = document.querySelector('.pomoCountsDisplay');
const counts = document.querySelector('.counts');

let workDuration = 2 * 60; // 25 minutes
let breakDuration = 0.1 * 60;

let time = 0;
let intervalId = null;
let oneRoundCompleted = false;
let totalRounds = 0;
let paused = false;
// let totalCount = [];

startBtn.addEventListener('click', () => {
  intervalId = startTimer(workDuration);
  updateTitle('Work Time!');
});

function startTimer(startTime) {
  if (intervalId !== null) {
    stopTimer();
  }

  return setInterval(countDown(startTime), 1000);
}

function countDown(time) {
  return () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    const formattedTime = `${minutes}:${seconds}`;

    timer.textContent = formattedTime;
    time--;
    if (time < 0) {
      stopTimer();
      if (!oneRoundCompleted) {
        intervalId = startTimer(breakDuration);
        oneRoundCompleted = true;
        updateTitle('Break Time!');
      } else {
        updateTitle('Session Complete 1 time ! Click Start to begin again.');
        setTimeout(() => {
          updateTitle('Start to Work Time!');
        }, 2000);
        totalRounds++;
        saveToLocalStorage();
        getFromLocalStorage();

        oneRoundCompleted = false;
      }
    }
  };
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function updateTitle(msg) {
  title.textContent = msg;
}

function saveToLocalStorage(key) {
  totalCount = JSON.parse(localStorage.getItem('totalRounds'));
  totalCount !== null ? totalCount++ : (totalCount = 1);
  localStorage.setItem('totalRounds', JSON.stringify(totalCount));
}

function getFromLocalStorage() {
  totalCount = JSON.parse(localStorage.getItem('totalRounds'));
  if (totalCount > 0) {
    pomoCountsDisplay.style.display = 'flex';
  } else {
    pomoCountsDisplay.style.display = 'none';
  }

  counts.textContent = totalCount;
}

resetBtn.addEventListener('click', () => {
  stopTimer();
  timer.textContent = '25:00';
});

pauseBtn.addEventListener('click', () => {
  stopTimer();
  paused = true;
  updateTitle('Paused!');
});

resetBtn.addEventListener('click', () => {
  stopTimer();
  timer.textContent = '25:00';
});

function getTimeInSeconds(timeString) {
  const [minutes, seconds] = timeString.split(':');
  return parseInt(minutes) * 60 + parseInt(seconds);
}
resumeBtn.addEventListener('click', () => {
  if (paused) {
    let currentTime = getTimeInSeconds(timer.textContent);
    intervalId = startTimer(currentTime);
    paused = false;
    !oneRoundCompleted ? updateTitle('Work Time!') : updateTitle('Break Time!');
  }
});
document.addEventListener('DOMContentLoaded', getFromLocalStorage);
