const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const reset = document.querySelector('.reset');
const resultMessage = document.querySelector('.result-message');
const scoreboard = document.querySelector('.scoreboard');

let score = JSON.parse(localStorage.getItem('headsTailsScore')) || {
  win: 0,
  loose: 0,
};

heads.addEventListener('click', () => playHeadsTails('Heads'));
tails.addEventListener('click', () => playHeadsTails('Tails'));

reset.addEventListener('click', () => {
  score.win = 0;
  score.loose = 0;
  localStorage.removeItem('headsTailsScore');
});

function playHeadsTails(guess) {
  let randomNum = Math.random();
  const flipCoin = (randomNum) => (randomNum < 0.5 ? 'Heads' : 'Tails');
  const finalResult = flipCoin(randomNum);

  resultMessage.innerText = `Computer chose: ${finalResult}`;

  if (finalResult === guess) {
    score.win += 1;
  } else {
    score.loose += 1;
  }
  scoreboard.innerText = `Win: ${score.win}, Loose: ${score.loose}`;
  localStorage.setItem('headsTailsScore', JSON.stringify(score));
}
