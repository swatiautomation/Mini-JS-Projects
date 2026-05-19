const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const optionsBox = document.querySelector('.options');
const startBtn = document.querySelector('.start');
const nextBtn = document.querySelector('.nextBtn');
const timer = document.querySelector('.timer');
const scoreCard = document.querySelector('.scoreCard');
const alertBox = document.querySelector('.alert');

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
let score = 0;
let quizOver = false;

const showAlert = (msg) => {
  alertBox.style.display = 'block';
  alertBox.textContent = msg;
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 2000);
};
const showQuestion = () => {
  //console.log(quiz[currentIndex].choices);
  // const randomIndex = Math.floor(Math.random() * quiz.length + 1);
  // console.log(randomIndex);
  let questionDetails = quiz[currentIndex];
  questionBox.textContent = questionDetails.question;
  optionsBox.textContent = '';
  for (let i = 0; i < questionDetails.choices.length; i++) {
    let currentChoice = questionDetails.choices[i];
    let choiceDiv = document.createElement('div');
    choiceDiv.textContent = currentChoice;
    optionsBox.append(choiceDiv);

    choiceDiv.addEventListener('click', (e) => {
      const allOptions = optionsBox.children;
      for (let opt of allOptions) {
        opt.classList.remove('selected');
      }
      e.target.classList.add('selected');
      const selectedAnswer = e.target.textContent;
    });
  }
};

showQuestion();

const checkAnswer = (e) => {
  const selectedAns = document.querySelector('.selected');
  const text = selectedAns.textContent;
  if (text === quiz[currentIndex].answer) {
    //  alert('correct answer');
    showAlert('Correct Answer');
    score++;
  } else {
    showAlert(
      `Wrong Answer ! ${quiz[currentIndex].answer} is your correct answer.`,
    );
    // alert('wrong answer');
  }
  currentIndex++;
  if (currentIndex < quiz.length) {
    showQuestion();
  } else {
    showScore();
    quizOver = true;
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

const showScore = () => {
  questionBox.textContent = '';
  optionsBox.textContent = '';

  scoreCard.style.display = 'block';
  scoreCard.textContent = `You scored ${score} out of ${quiz.length}`;
  // if (score === '4') {
  //   showAlert('Congratulation!! you Passed the quiz !!');
  // } else {
  //   showAlert('Try again next time');
  // }
  nextBtn.textContent = 'Play Again';
  // nextBtn.addEventListener('click', () => {
  //   currentIndex = 0;
  //   showQuestion();
  //   nextBtn.textContent = 'NEXT';
  //   scoreCard.style.display = 'none';
  // });
};

nextBtn.addEventListener('click', () => {
  const selectedChoice = document.querySelector('.selected');
  if (!selectedChoice && nextBtn.textContent === 'NEXT') {
    // alert('please select one answer');
    showAlert('Please select on answer');
    return;
  }
  if (quizOver) {
    nextBtn.textContent = 'NEXT';
    scoreCard.style.display = 'none';
    currentIndex = 0;
    showQuestion();
    quizOver = false;
    score = 0;
  } else {
    checkAnswer();
  }
});
