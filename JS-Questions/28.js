/*

Write a program where input is array of number in the form :  [4,5,9] represent as win, draw, lose. and output is in score : should be calculated as win should increase by 2
draw by 1 and lose by 0.

e.g 

input : 7 2 1
output : 12

input : 5 5 0
output : 13
**/

function calculateScore(inArray) {
  let score = 0;

  for (let i = 0; i < inArray.length; i++) {
    if (inArray[i] === 'win') {
      score += 2;
    } else if (inArray[i] === 'draw') {
      score += 1;
    } else if (inArray[i] === 'lose') {
      score += 0;
    }
  }
  return score;
}

console.log(calculateScore([4, 5, 9])); // 13
