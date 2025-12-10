const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => play('Rock'));
paper.addEventListener('click', () => play('Paper'));
scissors.addEventListener('click', () => play('Scissors'));

function showResult(message, color) {
  const heading = document.createElement('h1');

  heading.innerText = message;
  heading.style.color = color;
  heading.style.fontSize = '40px';
  heading.style.textAlign = 'center';

  document.body.appendChild(heading);

  setTimeout(() => heading.remove(), 2000);
}

function play(playerMove) {
  const move = ['Rock', 'Paper', 'Scissors'];
  const computerMove = move[Math.floor(Math.random() * 3)];

  alert('Computer chose: ' + computerMove);

  if (playerMove == computerMove) {
    showResult("It's a tie!", 'gray');
  } else if (
    (playerMove == 'Rock' && computerMove == 'Scissors') ||
    (playerMove == 'Paper' && computerMove == 'Rock') ||
    (playerMove == 'Scissors' && computerMove == 'Paper')
  ) {
    showResult('You win!', 'green');
  } else {
    showResult('You loose!', 'red');
  }
}
