const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const myAudio = document.querySelector('#myAudio');
const num1Element = document.querySelector('#num1');
const num2Element = document.querySelector('#num2');
let answer = 0;

function generateQuestion() {
  let num1 = Math.floor(Math.random() * 13);
  let num2 = Math.floor(Math.random() * 13);
  if (num1 < num2) {
    // Swap to avoid negative answers
    [num1, num2] = [num2, num1];
  }
  answer = num1 * num2;

  let dummyAnswers1 = Math.floor(Math.random() * 13 - 1);
  let dummyAnswers2 = Math.floor(Math.random() * 13 + 1);

  let allAnswers = [];
  let switchAnswers = [];

  num1Element.innerHTML = num1;
  num2Element.innerHTML = num2;

  answer1.innerHTML = answer;
  answer2.innerHTML = dummyAnswers1;
  answer3.innerHTML = dummyAnswers2;

  allAnswers.push(answer, dummyAnswers1, dummyAnswers2);
  console.log(`allAnswers initial: ${allAnswers}`);

  while (allAnswers.length > 0) {
    let randomIndex = Math.floor(Math.random() * allAnswers.length);
    console.log(`randomIndex: ${randomIndex}`);
    switchAnswers.push(allAnswers[randomIndex]);
    console.log(`switchAnswers: ${switchAnswers}`);
    allAnswers.splice(randomIndex, 1);
    console.log(`allAnswers: ${allAnswers}`);
  }
  answer1.innerHTML = switchAnswers[0];
  answer2.innerHTML = switchAnswers[1];
  answer3.innerHTML = switchAnswers[2];
}
generateQuestion();

answer1.addEventListener('click', () => {
  if (answer1.innerHTML == answer) {
    generateQuestion();
  } else {
    myAudio.play();
  }
});
answer2.addEventListener('click', () => {
  if (answer2.innerHTML == answer) {
    generateQuestion();
  } else {
    myAudio.play();
  }
});
answer3.addEventListener('click', () => {
  if (answer3.innerHTML == answer) {
    generateQuestion();
  } else {
    myAudio.play();
  }
});
