const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resumeBtn = document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');
const title = document.querySelector('.title');
const pomoCountsDisplay = document.querySelector('.pomoCountsDisplay');
const counts = document.querySelector('.counts');

const workDuration = 25 * 60; // 25 minutes
const breakDuration = 5 * 60; // 5 minutes
let intervalId = null;
let oneRoundCompleted = false;
let totalRounds = 0;
let paused = false;

// Function to convert time string "MM:SS" to total seconds
const getTimeInSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(':');
  return parseInt(minutes) * 60 + parseInt(seconds);
};

// Function to start the timer
const startTimer = (startTime) => {
  if (intervalId !== null) stopTimer();
  return setInterval(countDown(startTime), 1000);
};

// Countdown function that updates the timer display and handles session transitions
const countDown = (time) => {
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
      // Timer has finished
      stopTimer(); // Stop the timer when it reaches zero
      if (!oneRoundCompleted) {
        // If work session just completed, start break session
        intervalId = startTimer(breakDuration); // Start break timer
        oneRoundCompleted = true; // Mark that one round is completed
        updateTitle('Break Time!');
      } else {
        totalRounds++;
        saveToLocalStorage(totalRounds); // Save the total rounds to local storage
        getFromLocalStorage(); // Update the display
        updateTitle(
          `Session Complete ${totalRounds} time ! Click Start to begin again.`,
        );
        setTimeout(() => {
          // After showing the session complete message, reset the timer for the next round
          updateTitle('Start to Work Time!');
        }, 2000);

        oneRoundCompleted = false;
      }
    }
  };
};

// Function to stop the timer
const stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};

// Function to update the title message
const updateTitle = (msg) => {
  title.textContent = msg;
};

// Functions to handle local storage for total rounds
const saveToLocalStorage = (totalRounds) => {
  localStorage.setItem('totalRounds', totalRounds);
};

// Function to retrieve total rounds from local storage and update the display
const getFromLocalStorage = () => {
  const storedRounds = parseInt(localStorage.getItem('totalRounds')) || 0;
  totalRounds = storedRounds;
  if (storedRounds > 0) {
    pomoCountsDisplay.style.display = 'flex';
  } else {
    pomoCountsDisplay.style.display = 'none';
  }
  counts.textContent = storedRounds;
};

startBtn.addEventListener('click', () => {
  intervalId = startTimer(workDuration);
  updateTitle('Work Time!');
});

resetBtn.addEventListener('click', () => {
  stopTimer();
  timer.textContent = `${workDuration / 60}:00`;
  oneRoundCompleted = false;
  localStorage.removeItem('totalRounds');
  getFromLocalStorage();
  updateTitle('Start to Work Time!');
});

pauseBtn.addEventListener('click', () => {
  stopTimer();
  paused = true;
  updateTitle('Paused!');
});

resumeBtn.addEventListener('click', () => {
  if (paused) {
    const currentTime = getTimeInSeconds(timer.textContent);
    intervalId = startTimer(currentTime);
    paused = false;
    !oneRoundCompleted ? updateTitle('Work Time!') : updateTitle('Break Time!');
  }
});
document.addEventListener('DOMContentLoaded', getFromLocalStorage);
