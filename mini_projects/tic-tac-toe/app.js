let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-button');
let msgContainer = document.querySelector('.msg-container');
let message = document.querySelector('#message');
let scoreDiv = document.querySelector('.score');
let newBtn = document.querySelector('#new-button');

let turn = true; // true for X's turn, false for O's turn
let playerO = 'O';
let playerX = 'X';
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

let score = { X: 0, O: 0, Ties: 0 };

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turn) {
      box.innerText = playerX;
      turn = false;
    } else {
      box.innerText = playerO;
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  enableBoxes();
  msgContainer.classList.add('hide');
  turn = true;
  localStorage.removeItem('result');
  score = { X: 0, O: 0, Ties: 0 };
  updateScore();
};
resetBtn.addEventListener('click', resetGame);

newBtn.addEventListener('click', () => {
  enableBoxes();
  msgContainer.classList.add('hide');
  turn = true;
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
    box.classList.remove('disabled');
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.classList.add('disabled');
  }
};

const showWinner = (winner) => {
  message.innerText = `Winner is: ${winner}`;
  msgContainer.classList.remove('hide');
  disableBoxes();
  showResult(winner);
};

const checkWinner = () => {
  for (let i = 0; i < winpatterns.length; i++) {
    const [position1, position2, position3] = winpatterns[i];
    if (
      boxes[position1].textContent === boxes[position2].textContent &&
      boxes[position2].textContent === boxes[position3].textContent &&
      boxes[position1].textContent !== ''
    ) {
      showWinner(boxes[position1].textContent);
      return true;
    }
  }
  return false;
};
function showResult(winner) {
  if (winner === playerX) {
    score.X += 1;
  } else if (winner === playerO) {
    score.O += 1;
  } else {
    score.Ties += 1;
  }
  updateScore();
  saveToLocalStorage(score);
}

function updateScore() {
  scoreDiv.innerText = `PlayerX: ${score.X}, PlayerO: ${score.O}, Ties: ${score.Ties}`;
}

function saveToLocalStorage(value) {
  localStorage.setItem('result', JSON.stringify(value));
}
function getFromLocalStorage() {
  const storedScore = JSON.parse(localStorage.getItem('result'));
  if (storedScore) {
    score = storedScore;
  }
  updateScore();
}
document.addEventListener('DOMContentLoaded', getFromLocalStorage);
