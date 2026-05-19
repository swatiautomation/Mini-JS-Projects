const randomColorBtn = document.querySelector('.randomColor');
const inputBox = document.querySelector('#inputBox');
const applyColorBtn = document.querySelector('.applyColor');
const spanTag = document.querySelector('.currentColorValue');
const colorDiv = document.querySelector('.container');

function handleRandomButtonClick() {}

function changeColor(color) {
  colorDiv.style.backgroundColor = color;
  spanTag.innerText = color;
}

applyColorBtn.addEventListener('click', () => {
  const color = inputBox.value;
  changeColor(color);
});

const randomColorArr = [
  'red',
  'yellow',
  'blue',
  'seagreen',
  'green',
  'orange',
  'brown',
  'tomato',
];

function randomColor() {
  let num = Math.floor(Math.random() * randomColorArr.length);
  let colorFromArr = randomColorArr[num];
  changeColor(colorFromArr);
}
randomColorBtn.addEventListener('click', () => {
  randomColor();
});
