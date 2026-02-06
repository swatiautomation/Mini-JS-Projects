const clickMeButton = document.querySelector('.clickme');

const getHexColor = () => {
  const hex_numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let hexColor = '';
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hex_numbers.length);
    hexColor += hex_numbers[random];
  }
  document.querySelector('#hexcode').innerHTML = `#${hexColor}`;
  document.body.style.backgroundColor = `#${hexColor}`;
};
clickMeButton.addEventListener('click', () => {
  getHexColor();
});
