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
const scoreContainer = document.querySelector(".scoreContainer");

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
  autoPlayButton.setAttribute("aria-pressed", "false");
  autoPlayButton.innerText = "Auto Play";
  scoreContainer.setAttribute("aria-live", "polite");
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
  stopAutoPlay();
}

// Confirmation Dialog

const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

yesButton.addEventListener("click", () => {
  resetScore();
  confirmationDialog.close();
});

noButton.addEventListener("click", () => {
  confirmationDialog.close();
});

// Fires for Yes, No and Escape, so focus always returns to Reset
confirmationDialog.addEventListener("close", () => {
  resetButton.focus();
});

function showResetConfirmation() {
  if (confirmationDialog.open) return;
  // showModal() traps focus inside the dialog and closes it on Escape
  confirmationDialog.showModal();
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
  } else if (message === "You lose!") {
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
  computerMoveDiv.innerHTML = `You picked
      <img src="./images/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon" />
      computer picked
      <img src="./images/${computerMove}-emoji.png" alt="${computerMove}" class="move-icon" />
      `;
  computerMoveDiv.style.color = "#ebe3e3";

  if (playerMove == computerMove) {
    showResult("It's a tie!", "gray");
  } else if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "scissors" && computerMove == "paper")
  ) {
    showResult("You win!", "green");
  } else {
    showResult("You lose!", "red");
  }
}

//Keyboard Event Listener

document.body.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.altKey || event.metaKey) return;
  // Don't play the game behind an open dialog
  if (confirmationDialog.open) return;
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
    intervalId = setInterval(() => {
      const randomMove = pickComputerMove();
      play(randomMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayButton.innerText = "Stop Playing";
    scoreContainer.setAttribute("aria-live", "off");
    autoPlayButton.setAttribute("aria-pressed", "true");
    if (confirmationDialog.open) confirmationDialog.close();
  } else {
    stopAutoPlay();
  }
}

//Local Storage Functions

function saveToLocalStorage(value) {
  localStorage.setItem("score", JSON.stringify(value));
}
