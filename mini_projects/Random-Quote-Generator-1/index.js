const quoteBtn = document.querySelector('.new-quote');
const msg = document.querySelector('#msg');

quoteBtn.addEventListener('click', () => {
  quoteGenerator();
});

var quotes = [
  'The best way to get started is to quit talking and begin doing.',
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  'If you are working on something exciting, it will keep you motivated.',
  'Success is not in what you have, but who you are.',
  'Be yourself; everyone else is already taken',
  'So many books, so little time.',
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
];

let index = 0;
function quoteGenerator() {
  /*Using random quote from quotes array*/
  //const random = Math.floor(Math.random() * quotes.length);
  // msg.innerHTML = quotes[random];

  /*To avoid repetition of quotes until all have been shown*/

  msg.innerHTML = quotes[index++];
  if (index > quotes.length - 1) {
    index = 0;
  }
}
