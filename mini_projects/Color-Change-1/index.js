const body = document.querySelector('.body');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const randomBtn = document.querySelector('.random');
const hexcode = document.querySelector('.hexcode');

const randomcolor = () => {
  const randomNumber = Math.floor(Math.random() * 0xffffff);
  const color = `#${randomNumber.toString(16).padStart(6, '0')}`;
  hexcode.innerHTML = `Hex Code of the color is : ${color}`;
  hexcode.style.display = 'flex';
  body.style.background = color;
};

const setColor = (color) => {
  body.style.background = color;
  hexcode.style.display = 'none';
};
redBtn.addEventListener('click', () => setColor('red'));
blueBtn.addEventListener('click', () => setColor('blue'));
greenBtn.addEventListener('click', () => setColor('green'));
randomBtn.addEventListener('click', randomcolor);
