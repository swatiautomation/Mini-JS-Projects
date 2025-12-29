let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-button');
let msgContainer = document.querySelector('.msg-container');
let message = document.querySelector('#message');

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
};
resetBtn.addEventListener('click', resetGame);
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
