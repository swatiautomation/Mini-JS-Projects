const rock = document.querySelector('.rock-div');
const paper = document.querySelector('.paper-div');
const scissors = document.querySelector('.scissors-div');
const resetButton = document.querySelector('.reset-button');
const computerMoveDiv = document.querySelector('.computer-move');
const resultMessageDiv = document.querySelector('.result-message');
const scoreDiv = document.querySelector('.score');

rock.addEventListener('click', () => play('rock'));
paper.addEventListener('click', () => play('paper'));
scissors.addEventListener('click', () => play('scissors'));

resetButton.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  computerMoveDiv.innerText = '';
  resultMessageDiv.innerText = '';
});

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

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
  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
}

function play(playerMove) {
  const move = ['rock', 'paper', 'scissors'];
  const computerMove = move[Math.floor(Math.random() * 3)];

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
