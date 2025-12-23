const flashcardsContainer = document.querySelector('.flashcards');
const createBoxContainer = document.querySelector('.create-box');

const questionInput = document.querySelector('#question');
const answerInput = document.querySelector('#answer');

let contentArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

contentArray.forEach((content) => {
  divMaker(content);
});

document.querySelector('.saveCard').addEventListener('click', addFlashCard);
document.querySelector('.newCard').addEventListener('click', showCreateBox);
document.querySelector('.closeCard').addEventListener('click', hideCreateBox);
document.querySelector('.delCard').addEventListener('click', delCards);

function divMaker(content) {
  const flashCardDiv = document.createElement('div');
  const h2_question = document.createElement('h2');
  const h2_answer = document.createElement('h2');
  flashCardDiv.className = 'flashcard';
  h2_question.setAttribute('style', 'margin: 20px;');
  h2_answer.setAttribute('style', 'margin: 20px; display: none;color:red;');

  h2_question.innerText = content.my_question;
  h2_answer.innerText = content.my_answer;
  flashCardDiv.appendChild(h2_question);
  flashCardDiv.appendChild(h2_answer);
  flashcardsContainer.appendChild(flashCardDiv);
  flashCardDiv.addEventListener('click', () => {
    if (h2_answer.style.display == 'none') {
      h2_answer.style.display = 'block';
    } else {
      h2_answer.style.display = 'none';
    }
  });
}

function delCards() {
  localStorage.clear();
  flashcardsContainer.innerHTML = '';
  contentArray = [];
}

function hideCreateBox() {
  createBoxContainer.style.display = 'none';
  questionInput.value = '';
  answerInput.value = '';
}

function showCreateBox() {
  createBoxContainer.style.display = 'block';
}

function addFlashCard() {
  const question = questionInput.value;
  const answer = answerInput.value;

  var flashcardsInfo = {
    my_question: question,
    my_answer: answer,
  };
  contentArray.push(flashcardsInfo);
  localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length - 1]);
  questionInput.value = '';
  answerInput.value = '';
}
