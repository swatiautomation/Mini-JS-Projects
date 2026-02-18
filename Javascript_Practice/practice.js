const checkNumber = (a, b) =>
  a == 100 || b == 100 || a + b == 100 ? true : false;

console.log(checkNumber(100, 10));

//function to get the extension of a filename
function getFileExtension(fileName) {
  return fileName.slice(fileName.lastIndexOf('.'));
}
console.log(getFileExtension('document.html'));

// function to print the next character of given string

const res = (str) =>
  str
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(res('abc'));

//get the current date in mm/dd/yyyy format

const getCurrentDate = () => {
  const date = new Date();
  let month, year;
  month = date.getMonth();
  month += 1; // Months are zero-based
  year = date.getFullYear();
  date1 = date.getDate();

  return `${month}/${date1}/${year}`;
};
console.log(getCurrentDate());

const addString = (str) => (str.indexOf('New!') === 0 ? str : `New!' ${str}`);
console.log(addString('Swati'));

const createNewStr = (str) =>
  str.length < 3 ? str : str.substring(0, 3) + str.slice(-3);
console.log(createNewStr('abc def is my name'));

const evenLength = (str) =>
  str.length % 2 === 0 ? str.substring(0, str.length / 2) : str;
console.log(evenLength('swati sharma'));

const concateTwoString1 = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(concateTwoString1('Hello', 'World'));

const findNearestToHundred = (num1, num2) =>
  100 - num1 < 100 - num2 ? num1 : num2;
console.log(findNearestToHundred(70, 90));

const countChar = (str, char) =>
  str.split('').filter((ch) => ch === char).length;
const containsChar = (str, char) =>
  countChar(str, char) >= 2 && countChar(str, char) <= 4;
//console.log(containsChar("Hello dear","l"));

let array = [];

function findEvenDigit(arr) {
  for (const a of arr) {
    if (a % 2 === 0) {
      array.push(a);
    }
  }
  console.log(array);
}

findEvenDigit([1, 2, 2, 4, 5, 6, 7, 8, 9, 10]);

//OR
const findEvenDigit12 = (arr) =>
  arr.filter((num) => (num % 2 === 0 ? true : false));
console.log(findEvenDigit12([1, 2, 2, 4, 5, 6, 7, 8, 9, 10]));

findEvenDigit1 = (arr) => arr.filter((num) => num % 2 === 0).length;
console.log(findEvenDigit1([1, 2, 2, 4, 5, 6, 7, 8, 9, 10]));

//6 = 1*2*3

let fact = [];
const factorial = (num) => {
  for (let i = 1; i <= num; i++) {
    fact.push(i);
  }
  return fact;
};

console.log(factorial(4));
const evenNumber = (arr) => arr.filter((n) => n % 2 === 0).length;

// console.log(evenNumber([
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]));

console.log(evenNumber(factorial(4)));

//console.log(array.sort([ 12, 2, 0, 6, 18, 10 ]));

function sortArray(arr) {
  for (const i of arr) {
    arr.sort((a, b) => a - b);
    //arr.sort((a,b) => b-a);
    return arr;
  }
}

console.log(sortArray([12, 2, 0, 6, 18, 10]));

const isAcending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }

  return true;
};

console.log(isAcending([1, 2, 3, 4, 5]));

console.log(isAcending([12, 2, 37, 4, 5]));

let largest = [];

const res1 = function findLargestNumber(arr) {
  for (const i of arr) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

const filterNum1 = (arr) => arr.filter((num) => num % 2 === 0);
// console.log(filterNum1([12,2,37,4,5]));

const findLargestNum = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

// console.log(findLargestNum([12,2,18,66,5]));

const replaceFirstDigit = (str) => {
  str = str.replace(/[0-9]/, '$');
  return str;
};
// console.log(replaceFirstDigit("res1tart"));

const leapYear = (year) => (year % 4 === 0 ? true : false);

console.log(leapYear(2020));
console.log(leapYear(2021));

const checkTwoObjects = (obj1, obj2) =>
  Object.keys(obj1).every((key) => obj2[key]);

console.log(
  checkTwoObjects({ name: 'Swati', age: 25 }, { name: 'Sharma', age: 30 }),
);
console.log(checkTwoObjects({ name: 'Swati', age: 25 }, { name: 'Sharma' }));

const parseCSV = (csvString) => {
  return csvString.split('\n').map((row) => row.split(','));
};
const str = `name,age,city
Swati,25,Delhi
Sharma,30,Mumbai`;
console.log(parseCSV(str));

function generateRandomHexColor() {
  return Math.floor(Math.random() * 16).toString(16);
}

const getHexcolor = () =>
  '#' + Array.from({ length: 6 }).map(generateRandomHexColor).join('');
console.log(getHexcolor());

const allTrue = (arr) => arr.every((num) => num % 2 === 0);

//console.log(allTrue([2,4,6,8]));

function isEveryTrue(arr, fn) {
  for (const i of arr) {
    if (fn(arr[i]) === false) {
      return false;
    }
    return true;
  }
}

console.log(isEveryTrue([2, 4, 7, 8], (num) => num % 2 === 0));
