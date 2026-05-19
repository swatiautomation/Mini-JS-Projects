const quoteBtn = document.querySelector('.new-quote');
const msg = document.querySelector('#msg');

let flag = true;
const quoteArray = [];
const index = 0;
let textPosition = 0;

window.addEventListener('load', typeWriter);

quoteBtn.addEventListener('click', () => {
  quoteGenerator();
});

const quotes = [
  'The best way to get started is to quit talking and begin doing.',
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  'If you are working on something exciting, it will keep you motivated.',
  'Success is not in what you have, but who you are.',
  'Be yourself; everyone else is already taken',
  'So many books, so little time.',
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
];

//let index = 0;
const quoteGenerator = () => {
  /*Using random quote from quotes array*/
  const random = Math.floor(Math.random() * quotes.length);
  quoteArray[index] = quotes[random];

  /*To avoid repetition of quotes until all have been shown*/
  // msg.innerHTML = quotes[index++];
  // if (index > quotes.length - 1) {
  //   index = 0;
  // }
};

function typeWriter() {
  if (flag) {
    quoteGenerator();
    quoteArray[index] += '  ';
    flag = false;
  }

  msg.innerHTML =
    quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

  if (textPosition++ != quoteArray[index].length) {
    setTimeout('typeWriter()', 100);
  } else {
    quoteArray[index] = '';
    setTimeout('typeWriter()', 3000);
    textPosition = 0;
    flag = true;
  }
}
