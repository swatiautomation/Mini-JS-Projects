const destintion = document.querySelector('#typedText');

let flag = true;
let quoteArray = [];
let index = 0;
let textPosition = 0;

window.addEventListener('load', typeWriter);

function loadQuotes() {
  let url = 'https://api.quotable.io/random';

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else console.log(response.status);
    })
    .then((data) => {
      quoteArray[index] = data.content;
    });
}

function typeWriter() {
  if (flag) {
    loadQuotes();
    quoteArray[index] += '  ';
    flag = false;
  }

  destintion.innerHTML =
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
