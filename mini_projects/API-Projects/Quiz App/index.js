const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const optionsBox = document.querySelector('.options');
const startBtn = document.querySelector('.start');
const nextBtn = document.querySelector('.nextBtn');
const timer = document.querySelector('.timer');

const quiz = [
  {
    question:
      'What will be the output of the following code? console.log(typeof null);',
    choices: ['null', 'object', 'undefined', 'number'],
    answer: 'object',
  },
  {
    question:
      'Which method is used to convert a JSON string into a JavaScript object?',
    choices: [
      'JSON.stringify()',
      'JSON.parse()',
      'JSON.convert()',
      'JSON.toObject()',
    ],
    answer: 'JSON.parse()',
  },
  {
    question: 'Which of the following is NOT a JavaScript data type?',
    choices: ['Number', 'Boolean', 'Float', 'undefined'],
    answer: 'Float',
  },
  {
    question: 'What will be the output? console.log(0.1 + 0.2 === 0.3);',
    choices: ['true', 'false', 'undefined', 'Error'],
    answer: 'false',
  },
];
let currentIndex = 0;
const showQuestion = () => {
  //console.log(quiz[currentIndex].choices);
  let questionDetails = quiz[currentIndex];
  questionBox.textContent = questionDetails.question;
  optionsBox.textContent = '';
  for (let i = 0; i < questionDetails.choices.length; i++) {
    let currentChoice = questionDetails.choices[i];
    let choiceDiv = document.createElement('div');
    choiceDiv.textContent = currentChoice;
    optionsBox.append(choiceDiv);

    choiceDiv.addEventListener('click', (e) => {
      choiceDiv.classList.toggle('selected');
    });
  }
};

showQuestion();

const checkAnswer = (e) => {
  const selectedAns = document.querySelector('.selected');
  const text = selectedAns.textContent;
  if (text === quiz[currentIndex].answer) {
    alert('correct answer');
  } else {
    alert('wrong answer');
  }
};

let time = 30;
const showTimer = () => {
  setInterval(() => {
    timer.textContent = time--;
    // console.log(time--);
  }, 1000);
};
showTimer();

nextBtn.addEventListener('click', () => {
  checkAnswer();
  // if (currentIndex < quiz.length) {
  //   currentIndex++;
  //   showQuestion();
  // }
});
