const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const optionsBox = document.querySelector(".options");
const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".nextBtn");
const timer = document.querySelector(".timer");
const scoreCard = document.querySelector(".scoreCard");
const alertBox = document.querySelector(".alert");
const attemptedQuestionSpan = document.querySelector(".attemptedQuestion");
const totalQuestionsSpan = document.querySelector(".totalQuestions");
const scoreSpan = document.querySelector(".score");
const progressBarWrapper = document.querySelector(".progressBarWrapper");
const progressBar = document.querySelector("#progressBar");
const midSection = document.querySelector(".midSection");
const resultMessage = document.querySelector(".resultDiv");

import { quiz } from "./question.js";

let currentIndex = 0;
let score = 0;
let isQuizOver = false;
let time = 30;
let intervalId;

const showAlert = (msg, type) => {
  alertBox.style.display = "block";
  alertBox.textContent = msg;

  alertBox.classList.remove("correct", "incorrect");
  if (type) {
    alertBox.classList.add(type);
  }
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 1000);
};
const showQuestion = () => {
  let questionText = quiz[currentIndex];
  let totalQuestions = questionText.length;
  questionBox.textContent = questionText.question;
  totalQuestionsSpan.textContent = quiz.length;

  optionsBox.textContent = "";
  optionsBox.classList.remove("locked");

  quiz[currentIndex].choices.forEach((item) => {
    const choiceDiv = document.createElement("div");

    choiceDiv.textContent = item;
    choiceDiv.classList.add("answer");

    optionsBox.append(choiceDiv);

    choiceDiv.addEventListener("click", (e) => {
      if (optionsBox.classList.contains("locked")) return;
      optionsBox.classList.add("locked");

      e.target.classList.add("selected");
      checkAnswer();
    });
  });
};

showQuestion();

const checkAnswer = (e) => {
  const selectedAns = document.querySelector(".selected");

  const text = selectedAns.textContent;

  attemptedQuestionSpan.textContent = currentIndex + 1;
  if (text === quiz[currentIndex].answer) {
    showAlert("Correct Answer");
    showAlert("correct answer", "correct");
    score++;
    scoreSpan.textContent = score;
  } else {
    showAlert(
      `Wrong Answer ! ${quiz[currentIndex].answer} is your correct answer.`,
      "incorrect",
    );
  }

  const progressPercent = ((currentIndex + 1) / quiz.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < quiz.length) {
      showQuestion();
    } else {
      showScore();
      isQuizOver = true;
    }
  }, 1000);
};

const showTimer = () => {
  timer.textContent = time;
  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      timer.textContent = 0;
      clearInterval(intervalId);
      isQuizOver = true;
      showScore();

      return;
    }
    timer.textContent = time;
  }, 1000);
};
showTimer();

const showScore = () => {
  questionBox.textContent = "";
  optionsBox.textContent = "";

  scoreCard.style.display = "block";
  scoreCard.textContent = `You scored ${score} out of ${quiz.length}`;
  nextBtn.style.display = "block";
  nextBtn.textContent = "Play Again";
  progressBar.style.width = "0%";
  resultMessage.style.display = "block";
  const percentage = (score / quiz.length) * 100;
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
};

nextBtn.style.display = "none";

nextBtn.addEventListener("click", () => {
  if (!isQuizOver) return;

  scoreSpan.textContent = 0;
  attemptedQuestionSpan.textContent = 0;
  resultMessage.style.display = "none";

  progressBar.style.width = "0%";
  nextBtn.style.display = "none";
  scoreCard.style.display = "none";
  currentIndex = 0;
  isQuizOver = false;
  score = 0;
  scoreSpan.textContent = 0;
  clearInterval(intervalId);
  time = 30;
  showTimer();
  showQuestion();
});
