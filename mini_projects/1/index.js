const body = document.querySelector('.body');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const randomBtn = document.querySelector('.random');

redBtn.addEventListener('click', () => setColor('red'));
blueBtn.addEventListener('click', () => setColor('blue'));
greenBtn.addEventListener('click', () => setColor('green'));
randomBtn.addEventListener('click', randomcolor);

function randomcolor() {
  const randomNumber = Math.floor(Math.random() * 0xffffff);
  const color = `#${randomNumber.toString(16)}`;
  // this.style.background = color;
  body.style.background = color;
}

function setColor(color) {
  body.style.background = color;
}
