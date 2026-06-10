const quizButton = document.querySelector(".quizButton");
const mainContainer = document.querySelector(".mainContainer");
const quizContainer = document.querySelector(".quizContainer");
const ScoreSpan = document.querySelector(".js-score");
const totalQuesionSpan = document.querySelector(".js-total-question");
const currentQuesionSpan = document.querySelector(".js-current-question");
const progressBar = document.querySelector("#progressBar");
const QuestionText = document.querySelector(".js-question");
const AnswerContainer = document.querySelector(".js-options");
const resultContainer = document.querySelector(".resultContainer");
const totalQuestionQuizSpan = document.querySelector(".js-total-question-quiz");
const finalScoreSpan = document.querySelector(".js-answer-got");
const resultMessage = document.querySelector(".resultMessage");
const restartBtn = document.querySelector(".restartBtn");
const progressBarWrapper = document.querySelector(".progressBarWrapper");

const quiz = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

quizButton.addEventListener("click", startQuiz);

restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  ScoreSpan.innerHTML = 0;
  mainContainer.classList.remove("active");
  quizContainer.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answerDisabled = false;
  totalQuesionSpan.innerHTML = quiz.length;
  currentQuesionSpan.innerHTML = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / quiz.length) * 100;
  console.log(progressPercent);
  progressBar.classList.remove("correct", "incorrect"); // reset color
  //   currentQuesionSpan.style.width = `${progressPercent}%`;

  QuestionText.innerHTML = quiz[currentQuestionIndex].question;

  AnswerContainer.innerHTML = "";
  quiz[currentQuestionIndex].answers.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = item.text;
    div.classList.add("option");
     console.log(div.datasets)
    div.dataset.correct = item.correct;
    console.log(div.dataset.correct);

    div.addEventListener("click", selectAnswer);
    AnswerContainer.append(div);
  });
}
function selectAnswer(e) {
  if (answerDisabled) return;

  answerDisabled = true;
  const isCorrect = e.target.dataset.correct === "true";

  Array.from(AnswerContainer.children).forEach((item) => {
    classId = item.dataset.correct == "true" ? "correct" : "incorrect";
    item.classList.add(classId);
  });

  if (isCorrect) {
    score++;
    ScoreSpan.innerHTML = score;
  }

  // update progress bar — width grows, color reflects answer
  const progressPercent = ((currentQuestionIndex + 1) / quiz.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressBar.classList.add(isCorrect ? "correct" : "incorrect");

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  resultContainer.classList.add("active");
  quizContainer.classList.remove("active");
  totalQuestionQuizSpan.innerHTML = quiz.length;

  finalScoreSpan.innerHTML = score;

  const percentage = (score / quiz.length) * 100;
  console.log(percentage);

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  progressBar.style.width = "0%";
  progressBar.classList.remove("correct", "incorrect");
  resultContainer.classList.remove("active");

  startQuiz();
}
