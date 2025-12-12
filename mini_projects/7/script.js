const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset-button');
const computerMoveDiv = document.querySelector('.computer-move');
const resultMessageDiv = document.querySelector('.result-message');
const scoreDiv = document.querySelector('.score');

rock.addEventListener('click', () => play('Rock'));
paper.addEventListener('click', () => play('Paper'));
scissors.addEventListener('click', () => play('Scissors'));

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
  resultMessageDiv.style.fontSize = '40px';
  resultMessageDiv.style.textAlign = 'center';

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
  const move = ['Rock', 'Paper', 'Scissors'];
  const computerMove = move[Math.floor(Math.random() * 3)];

  computerMoveDiv.innerText = `You chose ${playerMove} - Computer chose:${computerMove} `;
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
