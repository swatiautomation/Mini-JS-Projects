const rock = document.querySelector('.rock-div');
const paper = document.querySelector('.paper-div');
const scissors = document.querySelector('.scissors-div');
const resetButton = document.querySelector('.reset-button');
const computerMoveDiv = document.querySelector('.computer-move');
const resultMessageDiv = document.querySelector('.result-message');
const scoreDiv = document.querySelector('.score');
const autoPlayButton = document.querySelector('.auto-play-button');
const confirmationDialog = document.querySelector('.confirmation-dialog');

rock.addEventListener('click', () => play('rock'));
paper.addEventListener('click', () => play('paper'));
scissors.addEventListener('click', () => play('scissors'));
autoPlayButton.addEventListener('click', () => autoPlay());
resetButton.addEventListener('click', () => {
  showResetConfirmation();
});

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  computerMoveDiv.innerText = '';
  resultMessageDiv.innerText = '';
  confirmationDialog.innerHTML = '';
}
function updateScore() {
  scoreDiv.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  scoreDiv.style.color = '#ebe3e3';
}

function showResult(message, color) {
  resultMessageDiv.innerText = message;
  resultMessageDiv.style.color = color;

  if (message === 'You win!') {
    score.wins += 1;
  } else if (message === 'You loose!') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  saveToLocalStorage(score);
  updateScore();
}

function play(playerMove) {
  const move = ['rock', 'paper', 'scissors'];
  const computerMove = move[Math.floor(Math.random() * move.length)];

  computerMoveDiv.innerHTML = `You
      <img src="./images/${playerMove}-emoji.png" class="move-icon" />
      <img src="./images/${computerMove}-emoji.png" class="move-icon" />
      computer.`;
  computerMoveDiv.style.color = '#ebe3e3';

  if (playerMove == computerMove) {
    showResult("It's a tie!", 'gray');
  } else if (
    (playerMove == 'Rock' && computerMove == 'Scissors') ||
    (playerMove == 'Paper' && computerMove == 'Rock') ||
    (playerMove == 'Scissors' && computerMove == 'Paper')
  ) {
    showResult('You win!', 'green');
  } else {
    showResult('You loose!', 'red');
  }
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    play('rock');
  } else if (event.key === 'p') {
    play('paper');
  } else if (event.key === 's') {
    play('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    showResetConfirmation();
  }
});
function showResetConfirmation() {
  confirmationDialog.innerHTML = `<div> Are you sure you want to reset the score?</div>
    <button class="yes-button"> Yes </button>
    <button class="no-button"> No </button>`;

  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');
  yesButton.addEventListener('click', () => {
    resetScore();
  });

  noButton.addEventListener('click', () => {
    confirmationDialog.innerHTML = '';
  });
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    const moves = ['rock', 'paper', 'scissors'];
    intervalId = setInterval(() => {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      play(randomMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayButton.innerText = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayButton.innerText = 'Auto Play';
  }
}

function saveToLocalStorage(value) {
  localStorage.setItem('score', JSON.stringify(value));
}

function getFromLocalStorage() {
  const storedScore = JSON.parse(localStorage.getItem('score'));
  if (storedScore) {
    score = storedScore;
  }
  updateScore();
}
document.addEventListener('DOMContentLoaded', getFromLocalStorage);
