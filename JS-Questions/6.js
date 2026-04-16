/*
Write javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, return the original string.

**/
function createNewString(str) {
  if (str.length < 3) {
    return str;
  }
  const startingString = str.slice(0, 3);
  const endingString = str.slice(-3);
  return startingString + endingString;
}

console.log(createNewString('abcdef')); // Output: "abc" + "def" = "abcdef"
console.log(createNewString('ab')); // Output: "ab"
console.log(createNewString('swati sharma')); // Output: "swa" + "rma" = "swarma"
console.log(createNewString('JavaScript')); // Output: "Jav" + "ipt" = "Javipt"

//-----------------------------------
//regex practice

const word = '"apple banana avocado cat cainat #javascript #testing"';
//const res = word.match(/\d+/);
//const res = word.match(/\w+/);
//const res = word.match(/[a-zA-Z]+/g);
//const res = word.match(/\b[a-zA-Z]+\b/g);
//const res = word.match(/Sharma/);
//const res = word.match(/\ba\w+/g);
//const res = word.match(/\b\w+at\b/g); //mathing with ing
const res = word.match(/#\w+/g); //mathing # word

console.log(res);

const regex = new RegExp('\\d+');
console.log(regex);

const word1 = 'price is 100 and tax is 20';
const res1 = word1.match(/\d+/g);
const res2 = word1.replace(/\s+/g, '');
console.log(res2);
//console.log(res1);

//find valid email using regex
const email = 'test@test.com';
const validemail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g);
console.log(validemail);

//validate phone number of 10 long
const number = '9999999999';
const res3 = number.match(/^\d{10}$/g);
console.log(res3);

//validate password contains 1 uppercase,1 lowercase,1 digit and 8 chars long
const password = 'Computerqa@12';
const passVerify = password.match(
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z0-9])(?=.*\d).{8,}$/g,
);
console.log(passVerify);

//validate date
const date = '12/11/2026';
const validateDate = date.match(/^\d{2}\/\d{2}\/\d{4}/g);
console.log(validateDate);

const str = 'abc123%abcballoon reeepeaat reet reet';
const result = str.replace(/[^a-zA-Z0-9]/g, ''); // replace special character
const result1 = str.match(/\w+(?=\d)/g);
console.log(result);
console.log(result1);

const result3 = str.match(/(\w+)\s\1/g); // find repeated characters in string but consequently
console.log('result:' + result3);

//extract domain
const url = 'https://www.google.com';
const domainExtract = url.match(/https?:\/\/(?:www\.)?([^\/]+)/);
console.log(domainExtract[1]);

//validate valid username
const username = 'Computerqa';
const validateUser = username.match(/^[a-zA-Z0-9]{5,10}$/);
console.log(validateUser);

const num = '12 12 12';
const reg = /(\d+)\s\1/;
const result0 = num.match(reg);
console.log(result0);

const word2 = ' Camp Code ';
const regex4 = word2.replace(/(\w+)\s(\w+)/, '$2 $1'); // swap the string
console.log(regex4);
console.log(word2.replace(/^\s+|\s+$/g, '')); // string method trim() will do the same.

function printNum(n) {
  if (n === 0) {
    return 1;
  }
  return n * printNum(n - 1);
}
console.log(printNum(5));

function checkArray(arr) {
  let emptyArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      //  console.log('this is array');
      emptyArr.push(...checkArray(item));
    } else {
      emptyArr.push(item);
    }
  }
  return emptyArr;
}

console.log(checkArray([1, 2, [4, 5], 6, [2, 4, [8]]]));

//------------------------------------
let sum = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    sum += i;
    //  console.log('sum of even numbers: ' + sum);
    // console.log(i);
  }
}
console.log('sum of odd numbers: ' + sum);
console.log('  ');

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
    console.log(i);
  }
}

const fact = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);

  //  return n + findSum(n - 1);
};

//console.log(fact(5));
console.log(Math.max(1, 2, 3));

function checkMaxNum(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
checkMaxNum(3, 2, 4);

function checkNum(num) {
  if (num > 0) {
    console.log('positive');
  } else if (num < 0) {
    console.log('negative');
  } else {
    console.log('number is zero');
  }
}
checkNum(0);

function calBill(units) {
  let total = 0;
  if (0 < units && units < 100) {
    total = units * 5;
    console.log(total);
  } else if (101 < units && units < 200) {
    total = 100 * 5 + (units - 100) * 7;
    console.log(total);
  } else if (201 < units && units < 300) {
    total = 100 * 5 + 100 * 7 + (units - 200) * 10;
    console.log(total);
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
    console.log(total);
  }
}
calBill(230);

let strr = 's';
if (/[aeiou]/gi.test(strr)) {
  console.log('vowels');
} else {
  console.log('consonants');
}
// if (strr.includes('aeiou')) {
//   console.log('vowel');
// } else {
//   console.log('consonants');
// }

function checkLeapYear(year) {
  if (year % 4 === 0 || year % 400 === 0 || year % 100 !== 0) {
    console.log('leap year');
  } else {
    console.log('not a leap year');
  }
}

checkLeapYear(2024);

function checkString(str) {
  if (/^[A-Z]$/.test(str)) {
    console.log('uppercase');
  } else if (/^[a-z]$/.test(str)) {
    console.log('lowercase');
  } else if (/^[0-9]$/.test(str)) {
    console.log('digit');
  } else if (/[^a-zA-Z0-9]+]/g.test(str)) {
    console.log('special character');
  } else {
    console.log('nothing matches');
  }
}

checkString('#"s');

// let stringTest = '#%^a test';
// const matchRes = stringTest.match(/[^a-zA-Z0-9]+/g);
// console.log(matchRes);

for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '* ';
  }
  // console.log(row);
}

for (let i = 5; i > 0; i--) {
  let row = '';
  for (let j = 0; j < i; j++) {
    row += '* ';
  }
  // console.log(row);
}

for (let i = 1; i <= 3; i++) {
  console.log('*'.repeat(2 * i - 1));

  //console.log(row);
}

let repeatStr = '* ';
//console.log(repeatStr.repeat(5));
console.log(' '.repeat(3) + '*'.repeat(5));
console.log('Loading...' + '#'.repeat(10));
//console.log('*'.repeat(2 * i - 1));

