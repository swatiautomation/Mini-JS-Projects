// Selectors
const rock = document.querySelector(".rock-div");
const paper = document.querySelector(".paper-div");
const scissors = document.querySelector(".scissors-div");
const resetButton = document.querySelector(".reset-button");
const computerMoveDiv = document.querySelector(".computer-move");
const resultMessageDiv = document.querySelector(".result-message");
const scoreDiv = document.querySelector(".score");
const autoPlayButton = document.querySelector(".auto-play-button");
const confirmationDialog = document.querySelector(".confirmation-dialog");

// Event Listeners

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));
autoPlayButton.addEventListener("click", () => autoPlay());
resetButton.addEventListener("click", () => {
  showResetConfirmation();
});

let isAutoPlaying = false;
let intervalId;

// Score Object

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

if (score) {
  updateScore();
}

function stopAutoPlay() {
  if (!isAutoPlaying) return;

  clearInterval(intervalId);
  isAutoPlaying = false;
  autoPlayButton.innerText = "Auto Play";
}
// Reset Score Function

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScore();
  computerMoveDiv.innerText = "";
  resultMessageDiv.innerText = "";
  confirmationDialog.innerHTML = "";
  stopAutoPlay();
}

// Confirmation Dialog

function showResetConfirmation() {
  confirmationDialog.innerHTML = `<div> Are you sure you want to reset the score?</div>
    <button class="yes-button">Yes</button>
    <button class="no-button">No</button>`;

  const yesButton = document.querySelector(".yes-button");
  const noButton = document.querySelector(".no-button");
  yesButton.addEventListener("click", () => {
    resetScore();
  });

  noButton.addEventListener("click", () => {
    confirmationDialog.innerHTML = "";
  });

  confirmationDialog.scrollIntoView({ behavior: "smooth", block: "center" });
  noButton.focus();
}

// Update Score Display

function updateScore() {
  scoreDiv.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  scoreDiv.style.color = "#ebe3e3";
}

// Display Result

function showResult(message, color) {
  resultMessageDiv.innerText = message;
  resultMessageDiv.style.color = color;

  if (message === "You win!") {
    score.wins++;
  } else if (message === "You loose!") {
    score.losses++;
  } else {
    score.ties++;
  }

  saveToLocalStorage(score);
  updateScore();
}

function pickComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  return computerMove;
}
// Game Logic

function play(playerMove) {
  const computerMove = pickComputerMove();
  computerMoveDiv.innerHTML = `You
      <img src="./images/${playerMove}-emoji.png" class="move-icon" />
      <img src="./images/${computerMove}-emoji.png" class="move-icon" />
      computer.`;
  computerMoveDiv.style.color = "#ebe3e3";

  if (playerMove == computerMove) {
    showResult("It's a tie!", "gray");
  } else if (
    (playerMove == "Rock" && computerMove == "Scissors") ||
    (playerMove == "Paper" && computerMove == "Rock") ||
    (playerMove == "Scissors" && computerMove == "Paper")
  ) {
    showResult("You win!", "green");
  } else {
    showResult("You loose!", "red");
  }
}

//Keyboard Event Listener

document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "r":
      play("rock");
      break;
    case "p":
      play("paper");
      break;
    case "s":
      play("scissors");
      break;
    case "a":
      autoPlay();
      break;
    case "Backspace":
      showResetConfirmation();
      break;
  }
});

// Auto Play Functionality

function autoPlay() {
  if (!isAutoPlaying) {
    const randomMove = pickComputerMove();
    intervalId = setInterval(() => {
      play(randomMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayButton.innerText = "Stop Playing";
    confirmationDialog.innerHTML = "";
  } else {
    stopAutoPlay();
  }
}

//Local Storage Functions

function saveToLocalStorage(value) {
  localStorage.setItem("score", JSON.stringify(value));
}
