const clickMeButton = document.querySelector('.clickme');

clickMeButton.addEventListener('click', () => {
  getHexColor();
});

function getHexColor() {
  var hex_numbers = [
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
  var hexColor = '';

  for (let i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * hex_numbers.length);
    hexColor += hex_numbers[random];
  }

  document.querySelector('#hexcode').innerHTML = `#${hexColor}`;
  document.body.style.backgroundColor = `#${hexColor}`;
}
