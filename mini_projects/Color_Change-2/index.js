const clickmeBtn = document.querySelector('.clickme');

let index = 0;
getRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];

  /* If you want random color from colors array*/
  const randomColorNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColorNumber];

  /* If you want serial color change from colors array*/
  // document.body.style.backgroundColor = colors[index++];
  // if (index > colors.length - 1) {
  //   index = 0;
  // }
};
clickmeBtn.addEventListener('click', () => {
  getRandomColor();
});
