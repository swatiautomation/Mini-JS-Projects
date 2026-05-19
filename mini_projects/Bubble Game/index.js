const numberContainer = document.querySelector('.numberContainer');
const timerValue = document.querySelector('.timerValue');
const scoreValue = document.querySelector('.scoreValue');
const targetValue = document.querySelector('.targetValue');
let timer = Number(timerValue.innerText);
let score = Number(scoreValue.innerText);

let targetVal;
let intervalID;

generateNumbers();
generateTarget();
resetTimer();
startTimer();

function generateNumbers() {
  numberContainer.innerHTML = '';
  for (let i = 0; i < 79; i++) {
    const divEle = document.createElement('div');
    divEle.className = 'button';

    let num = Math.ceil(Math.random() * 10);
    divEle.innerText = num;
    numberContainer.append(divEle);
  }
}

function generateTarget() {
  targetVal = Math.ceil(Math.random() * 10);
  targetValue.innerText = targetVal;
}

function resetGame() {
  timer = 60;
  timerValue.innerText = timer;
  scoreValue.innerText = 0;

  generateNumbers();
  generateTarget();

  startTimer();
}
function resetTimer() {
  timerValue.innerText = timer;
}

function startTimer() {
  clearInterval(intervalID);

  intervalID = setInterval(() => {
    if (timer <= 0) {
      numberContainer.innerHTML = `
    <div> GAME OVER </div>
    <button onclick=resetGame()> RESET GAME </button>
    `;
      return;
    }
    timer--;
    timerValue.innerText = timer;
  }, 1000);
}

numberContainer.addEventListener('click', (e) => {
  if (e.target.className === 'button') {
    let num = Number(e.target.innerText);

    if (num === targetVal) {
      score += 10;
      scoreValue.innerText = score;
    }
  }
  generateTarget();
});
