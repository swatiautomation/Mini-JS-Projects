const quoteBtn = document.querySelector('#new-quote');
const msg = document.querySelector('#msg');

quoteBtn.addEventListener('click', () => {
  msg.innerHTML = quoteGenerator();
});

const quotes = [
  'The best way to get started is to quit talking and begin doing.',
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  'If you are working on something exciting, it will keep you motivated.',
  'Success is not in what you have, but who you are.',
];
const usedIndices = new Set();

function quoteGenerator() {
  if (usedIndices.size === quotes.length) {
    usedIndices.clear();
  }
  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      return quotes[randomIndex];
    }
  }
}
