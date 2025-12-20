const clickmeBtn = document.querySelector('.clickme');

clickmeBtn.addEventListener('click', () => {
  getRandomColor();
});

let index = 0;
function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];

  /* If you want random color from colors array*/
  // const lenght = cololurs.length;
  // const random = Math.floor(Math.random() * lenght);
  // document.body.style.backgroundColor = cololurs[random];

  /* If you want serial color change from colors array*/
  document.body.style.backgroundColor = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
