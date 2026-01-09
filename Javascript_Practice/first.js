const randomNum = Math.floor(Math.random() * 9) + 10000000;
console.log(randomNum);

console.log(`CCC${Math.floor(Math.random() * 900000) + 100000}`);
console.log(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`);

//mom

function abc(str) {
  let result = '';
  for (const s of str) {
    result = s + result;
  }
  console.log(result);
  if (result === str) {
    console.log('palindrome');
  } else {
    console.log('not palindrome');
  }
}
abc('madami');

//OR

function palindrome(str) {
  const reserved = str.split('').reverse().join('');
  return reserved === str;
}
console.log(palindrome('madam'));

function quoteGenerator(str) {
  const quotes = [
    'The best way to get started is to quit talking and begin doing.',
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    'If you are working on something exciting, it will keep you motivated.',
    'Success is not in what you have, but who you are.',
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  return quotes[randomIndex];
}
console.log(quoteGenerator());
