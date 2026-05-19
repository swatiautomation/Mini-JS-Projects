const resetButton = document.querySelector('.reset-button');
const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const alertBox = document.querySelector('.alertBox');

let currentPlayer = 'X';
let computerPlayer = 'O';
let playerTurn = currentPlayer; // true for player1's turn, false for player2's turn
player1.textContent = `Player 1: ${currentPlayer}`;
player2.textContent = `Player 2: ${computerPlayer}`;

let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame() {
  cells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
  });
}

resetButton.addEventListener('click', resetGame);

function handleClick(e) {
  if (e.target.textContent == '') {
    e.target.textContent = playerTurn;
    if (checkWin()) {
      showAlert(`Winner is: ${playerTurn}`);
      disableBoxes();
    } else if (checkTie()) {
      showAlert("It's a Tie!");
      disableBoxes();
    } else {
      playerTurnSwitch();
      showAlert(`Next Player's turn: ${playerTurn}`);
    }
  }
}

startGame();

function disableBoxes() {
  cells.forEach((cell) => {
    cell.removeEventListener('click', handleClick);
    cell.classList.add('disabled');
  });
}

function playerTurnSwitch() {
  playerTurn = playerTurn === currentPlayer ? computerPlayer : currentPlayer;
}

function checkWin() {
  for (let i = 0; i < winpatterns.length; i++) {
    const [postion1Value, postion2Value, postion3Value] = winpatterns[i];
    if (
      cells[postion1Value].textContent === cells[postion2Value].textContent &&
      cells[postion2Value].textContent === cells[postion3Value].textContent &&
      cells[postion1Value].textContent !== ''
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  let emptyCells = 0;
  cells.forEach((cell) => {
    if (cell.textContent === '') {
      emptyCells++;
    }
  });
  return emptyCells === 0 && !checkWin();
}

function showAlert(message) {
  alertBox.textContent = message;
  alertBox.style.display = 'block';

  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 5000);
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('disabled');
  });
  startGame();
}
