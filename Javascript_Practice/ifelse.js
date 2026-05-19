function checkAge(age) {
  age > 18 ? console.log('you can vote!!') : console.log('you can not vote!!');
}
checkAge(20);

function checkGreetingMessage(time) {
  time < 12
    ? console.log('Hello Morning')
    : time > 12 && time < 17
      ? console.log('Hello Afternoon')
      : console.log('Hello Goodnight');
}
checkGreetingMessage(18);

function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else {
    if (score >= 80) {
      grade = 'B';
    } else {
      if (score >= 70) {
        grade = 'C';
      } else {
        grade = 'D';
      }
    }
  }
  console.log(grade);
}
checkGrade(80);

const browser = 'chrome';
if (browser === 'chrome') console.log('launch chrome');
if (browser === 'edge') console.log('launch edge');
browser === 'firefox'
  ? console.log('launch firefox')
  : console.log('Please pass the right browser');
