const flashcardsContainer = document.querySelector('.flashcards');
const createBoxContainer = document.querySelector('.create-box');
const questionInput = document.querySelector('#question');
const answerInput = document.querySelector('#answer');

// let contentArray =

let contentArray = JSON.parse(localStorage.getItem('items')) || [];

const divMaker = (content) => {
  const flashCardDiv = document.createElement('div');
  const h2_question = document.createElement('h2');
  const h2_answer = document.createElement('h2');
  flashCardDiv.className = 'flashcard';
  h2_question.setAttribute('style', 'margin: 20px;');
  h2_answer.setAttribute('style', 'margin: 20px; display: none;color:red;');

  h2_question.innerText = content.questionKey;
  h2_answer.innerText = content.answerKey;
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

  flashCardDiv.addEventListener('dblclick', () => {
    flashcardsContainer.removeChild(flashCardDiv);
    contentArray = contentArray.filter(
      (item) => item.questionKey !== content.questionKey,
    );
    saveToLocalStorage(contentArray);
  });
};

const delCards = () => {
  flashcardsContainer.innerHTML = '';
  localStorage.removeItem('items');
};

const hideCreateBox = () => {
  createBoxContainer.style.display = 'none';
  questionInput.value = '';
  answerInput.value = '';
};

const showCreateBox = () => {
  createBoxContainer.style.display = 'block';
};

const addFlashCard = () => {
  const question = questionInput.value;
  const answer = answerInput.value;

  const flashcardsInfo = {
    questionKey: question,
    answerKey: answer,
  };
  contentArray.push(flashcardsInfo);
  saveToLocalStorage(contentArray);

  divMaker(contentArray[contentArray.length - 1]); // Pass the newly added flashcard to divMaker
  questionInput.value = '';
  answerInput.value = '';
};

const saveToLocalStorage = (contentArray) => {
  return localStorage.setItem('items', JSON.stringify(contentArray));
};
const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('items')) || [];
};

contentArray.forEach((content) => {
  divMaker(content);
});

document.querySelector('.saveCard').addEventListener('click', addFlashCard);
document.querySelector('.newCard').addEventListener('click', showCreateBox);
document.querySelector('.closeCard').addEventListener('click', hideCreateBox);
document.querySelector('.delCard').addEventListener('click', delCards);

document.addEventListener('DOMContentLoaded', getFromLocalStorage);
