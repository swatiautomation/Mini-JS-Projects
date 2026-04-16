/*function sum(num) {
  if (num < 0) return num;
  return num + sum(num - 1);

  //   return num.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(4));

function switchCase(num) {
  switch (num) {
    case 1:
      return 0;
    case 2:
      return 6;
    case 3:
      return 11;
    default:
      return 11 + (num - 2) * 5;
  }
}

//console.log(switchCase(5));

function covertNumberToBits(a, b) {
  const aBit = a.toString(2).padStart(8, '0');
  const bBit = b.toString(2).padStart(8, '0');
  return { aBit, bBit };
}

function bitwiseAND(a, b) {
  const { aBit, bBit } = covertNumberToBits(a, b);
  const result = [];
  for (let i = 0; i < 8; i++) {
    aBit[i] === '1' && bBit[i] === '1' ? result.push('1') : result.push('0');
  }
  return parseInt(result.join(''), 2);
}
console.log(bitwiseAND(15, 13));

function bitwiseOR(a, b) {
  const { aBit, bBit } = covertNumberToBits(a, b);
  const result = [];
  for (let i = 0; i < 8; i++) {
    aBit[i] === '1' || bBit[i] === '1' ? result.push('1') : result.push('0');
  }
  return parseInt(result.join(''), 2);
}
//console.log(bitwiseOR(15, 13));

const checkIfObjectContainsKeyValuePair = (key, value) => {
  (item) => item[key] === value;
};
console.log(checkIfObjectContainsKeyValuePair('name', 'John'));

function likeDislikeActivity(activity) {
  let result = 'nothing';
  for (let i = 0; i < activity.length; i++) {
    switch (activity[i]) {
      case 'Like': {
        result = 'Like';
        break;
      }
      case 'Dislike': {
        result = 'Dislike';
        break;
      }
      case 'Nothing': {
        result = 'Nothing';
        break;
      }
    }
    return result;
  }
}
console.log(likeDislikeActivity(['Like', 'Dislike', 'Nothing']));
console.log(likeDislikeActivity(['Like']));
console.log(likeDislikeActivity(['Dislike']));
console.log(likeDislikeActivity(['Like', 'Like', 'Dislike']));
console.log(likeDislikeActivity(['Dislike']));

function checknumber(num) {
  return num <= 0 ? true : false;
}
console.log(checknumber(-5));
console.log(checknumber(0));
console.log(checknumber(3));

function basketballPoints(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}
console.log(basketballPoints(1, 1));
console.log(basketballPoints(7, 5));
console.log(basketballPoints(38, 8));

function nameString(name) {
  return (result = name + ' Edabit');
}
console.log(nameString('Mubashir'));

function checknumber1(num1, num2) {
  return num1 + num2 === 100 ? true : false;
}

console.log(checknumber1(50, 50));
console.log(checknumber1(25, 75));

function printArray(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
console.log(printArray(6));
console.log(printArray(1));
console.log(printArray(3));

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swap(3, 5));
console.log(swap(100, 200));
console.log(swap(44, 33));

function count(chiken, cow, pig) {
  return chiken * 2 + cow * 4 + pig * 4;
}

console.log(count(2, 3, 5));
console.log(count(1, 2, 3));

function checkNumber1(num1, num2) {
  return num1 === 100 || num2 === 100 || num1 + num2 === 100 ? true : false;
}
console.log(checkNumber1(100, 0));
console.log(checkNumber1(0, 100));
console.log(checkNumber1(50, 50));

function extractExtention(str) {
  if (str.indexOf('.') === -1) return '';
  const newStr = str.match(/\.\w+/g).join('');
  console.log(newStr);
  //  const extension = str.split('.').slice();
  //console.log(extension);
}
console.log(extractExtention('file.html'));
console.log(extractExtention('index.html.js'));
console.log(extractExtention('index'));

function moveChar(str, num) {
  const result = [];
  if (typeof str !== 'string' || typeof num !== 'number') return '';
  const newStr = str.split('');
  for (const s of newStr) {
    if (s === 'z') {
      result.push('a');
      continue;
    }

    const charCode = s.charCodeAt();
    const newCharCode = charCode + num;
    result.push(String.fromCharCode(newCharCode));
  }
  return result.join('');
}
console.log(moveChar('hello', 2));
console.log(moveChar('zellow', 2));
console.log(moveChar(null, 2));

function prefix(str, prefixstr) {
  if (str.startsWith(prefixstr)) {
    return str;
  }
  return `${prefixstr} ${str}`;
}

console.log(prefix('edabit', 'ed'));
console.log(prefix('edabit', 'xyz'));
console.log(prefix('script is java', 'script'));

function whichIsLarger(f, g) {
  const fResult = f();
  const gResult = g();
  if (fResult === gResult) {
    return 'Neither';
  }
  return fResult > gResult ? 'f' : 'g';
}

console.log(
  whichIsLarger(
    () => 25,
    () => 25,
  ),
);
console.log(
  whichIsLarger(
    () => 25,
    () => 30,
  ),
);*/

const { number } = require('@inquirer/prompts');

//============================================
//Question:1- How to find Duplicate value in array

const numbers = [1, 2, 3, 4, 4, 14, 3, 5, 1, 1];

// numbers.forEach((num) => {
//   console.log(
//     `Actual number ${num} : Index of by index of function${numbers.indexOf(num)} `,
//   );
// });
const onlyDuplicateValues = numbers.filter(
  (num, index) => numbers.indexOf(num) !== index,
);
console.log(onlyDuplicateValues);

const onluUniqueValues = numbers.filter((num, index) => {
  return numbers.indexOf(num) == index;
});
console.log(onluUniqueValues);

//===================================================
//Question 2: How to find min and max value in array

const findMax = numbers.reduce((curr, acc) => {
  return curr > acc ? curr : acc;
});

const findMin = numbers.reduce((curr, acc) => {
  return curr < acc ? curr : acc;
});

console.log(findMax);
console.log(findMin);

//===================================================
//Question 3: Difference between == and ===

var x = 3;
var y = '3';
console.log(x == y);
console.log(x === y);

//======================================================
//Question 4: Find the second largest value and remove the first largest value

const nums = [70, 20, 40, 30, 50, 60, 100];

const largetNumber = () => {
  return Math.max(...nums);
};

const removeNumber = () => {
  const index = nums.indexOf(largetNumber());
  return index;
};
const index = removeNumber();

//nums.splice(removeNumber, 1);
console.log(largetNumber());
//===========================================================================
//Question 5: Difference between filter() and find()

const findNumberGreaterThan50UsingFind = nums.find((num) => {
  return num > 50;
});

const findNumberGreaterThan50UsingFilter = nums.filter((num) => {
  return num > 50;
});
console.log(findNumberGreaterThan50UsingFind);
console.log(findNumberGreaterThan50UsingFilter);

//==============================================================================
//Question 6: How to find missing number in array of  1 to 10

const numbers2 = [1, 2, 4, 5, 7, 9, 10];
const arr = [];

for (let i = 1; i <= 10; i++) {
  console.log(`${i} : index of ${i} is ${numbers2.indexOf(i)}`);
  numbers2.indexOf(i) < 0 ? arr.push(i) : '';
}
console.log(arr);

//===============================================================================
//Question 7: How to find even and odd number in array

const evenNumber = numbers2.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumber);

const oddNumber = numbers2.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumber);

//==============================================================================
//Question 8: Find the sum of all elements in array

const total = numbers2.reduce((curr, acc) => {
  return (acc += curr);
}, 0);

//console.log(total);

//===========================================================================
//Question 9: How to find the factorial of given number

const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5));

//===========================================================================
//Question 10 : Find prime number in js

const num = 5;
for (let i = 2; i < Math.sqrt(num); i++) {
  if (num % i === 0) {
    var result = `${num} is not prime number`;
  } else {
    var result = `${num} is  prime number`;
  }
}
console.log(result);

//=====================================================================
//Question 11: How to find vowels in string

const str = 'Swati Sharma this is awesome';
const arr1 = str.split('');

const emptyArr = [];
arr1.forEach((s) => {
  if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
    emptyArr.push(s);
  }
  return emptyArr;
});

console.log(
  `numbers of vowels in string is ${emptyArr.length} and these are the vowels in string : ${emptyArr}`,
);

var count = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowels(str) {
  for (let s of str) {
    if (vowels.includes(s)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Swati Sharma'));
//==================================================================================================
//Question 12: How to reverse a string

const str1 = 'Swati Sharma this is awesome';
const arr11 = str1.split('');
console.log(arr11.reverse().join(''));

//===============================================
//Question 13: How to find if string is palindrome or not

const findPalindrome = (str) => {
  tolowerCase = str.toLowerCase();
  const arry = tolowerCase.split('');
  return arry.join('') == arry.reverse().join('')
    ? 'String is palindrome'
    : 'nops';
};
console.log(findPalindrome('moMi'));

//=====================================================
//Question 14:How to swap two variable without using third variable
const swapValues = (a, b) => {
  return ([a, b] = [b, a]);
};
console.log(swapValues(3, 7));

//using thrid var
// temp =a;
// a = b;
// b=temp;

//================================================================
//Question 15: How to merge two arrays and sort them out.

const arr2 = [10, 20, 40, 30, 35, 200];
const arr3 = [20, 30, 35, 40, 100];
sort1 = [...arr2].sort();
sort2 = [...arr3].sort();
console.log(sort1, sort2);
console.log(JSON.stringify(sort1) == JSON.stringify(sort2));

//===============================================================
//Question 16: How to find factor of given array
const num1 = 20;
for (let i = 0; i <= num1; i++) {
  if (num1 % i == 0) {
    console.log(i);
  }
}

//================================================================
//Questio 17: Find common values in two array

const intersection = arr2.filter((num) => {
  return arr3.includes(num);
});
console.log(intersection);

//==========================================================
//Question 18: Union of two array

console.log([...arr3, ...arr2]);
const unionArray = [...arr3, ...arr2];
console.log([...new Set(unionArray)]); // remove duplicate

//=========================================================
//Question 19: Convert firsletter of string to uppercase

function abc(str) {
  const newStringArr = str.split(' ');
  const firstLetter = newStringArr.map((s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  });
  return firstLetter.join(' ');
}
console.log(abc('swati Sharma'));

//===========================================================
//Question 20: print fabonacchi series
let addition;
let a = 0;
let b = 1;
for (let i = 0; i < 5; i++) {
  addition = a + b;
  a = b;
  b = addition;
  // console.log(addition);
}

//==============================================================
//Question 21: Check occurance of char in string
const string = 'swati sharma';
let count1 = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === 'a') {
    count1++;
  }
}
console.log(count1);
//=============================================================
//Question 22: how to check armstrong number

const findArmstrongNumber = (num) => {
  const digits = num.toString().split('');
  const power = digits.length;
  let sum = 0;

  for (let digit of digits) {
    sum += digit ** power;
  }
  if (sum === num) {
    console.log('Number is armstrong');
  } else {
    console.log('Number is not armstrong');
  }
};
console.log(findArmstrongNumber(152));

//===========================================================
//Question 23: Write program to flatten a array

const flattenArray = (arr) => {
  const resultArr = [];
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      const flatArr = flattenArray(ele);
      resultArr.push(...flatArr);
    } else {
      resultArr.push(ele);
    }
  }
  return resultArr;
};

console.log(flattenArray([1, 2, 3, [1, 2, 3]]));

//======================================================
//Question 24: How to check if number is integer or not
let num12 = 12.1;
console.log(Number.isInteger(num12));
console.log(num12 % 1 === 0);

//====================================================
//Question 25: Reverse a number

const reverseNumber = (num) => {
  console.log(Number(num.toString().split('').reverse().join('')));
};

reverseNumber(123);

//========================================================
const getFirstCapitalLetter = (str) => {
  let result = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return result.join(' ');
};
console.log(getFirstCapitalLetter('this is me swati sharma'));
//====================================================

const resl = (arr, num) => {
  // if (num < arr.length) return;
  // if (!num) return;
  console.log(arr.slice(0, num));
};
console.log(resl([1, 2, 3, 4], 4));
//=======================================================
//Get occurance of each letter in string

const getOcc = (str) => {
  let obj = {};
  str.split('').forEach((e) => {
    if (obj.hasOwnProperty(e)) {
      obj[e]++;
    } else {
      obj[e] = 1;
    }
  });
  console.log(Object.entries(obj));
  console.log(Math.max(...Object.values(obj)));
};
getOcc('swatisharmass');
//=======================================================
//How to shuffle the array

const shuffleArray = (arr) => {
  for (i in arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    let temp;
    // temp = arr[i];
    // arr[i] = arr[randomIndex];
    // arr[randomIndex] = temp;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  console.log(arr);
};
shuffleArray([1, 2, 3, 4, 2]);
//========================================================
function z(arr) {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index ? true : false;
  });
}

console.log(z([1, 2, 2, 3, 4, 4]));

function yo(arr) {
  const maxNum = Math.max(...arr);
  arr.splice(arr.indexOf(maxNum), 1);
  return Math.max(...arr);
}

console.log(yo([10, 5, 8, 20]));
//============================================
let futureDate = '1 jan 2027';

const futuDate = new Date(futureDate);
console.log(futuDate);

const currentDate = new Date();
console.log(currentDate);

const diff = futuDate - currentDate;
console.log(diff);

const totalSec = diff / 1000;
console.log(totalSec);

const days = Math.ceil(totalSec / 60 / 60 / 24);
console.log(days);

const hours = Math.floor(totalSec / 60 / 60) % 24;
console.log(hours);

const minutes = Math.floor((totalSec / 60) % 60);
console.log(minutes);

const seconds = Math.floor(totalSec % 60);
console.log(seconds);

//---------------------------------
//convert 5000 seconds into days,hours,minutes and seconds

const totalSecs = 5000;
const d = Math.floor(totalSecs / 60 / 60 / 24);
console.log('days are : ' + d);

const h = Math.floor(totalSecs / 60 / 60) % 24;
console.log('hours are:' + h);

const m = Math.floor(totalSecs / 60) % 60;
console.log('minutes are:' + m);

const s = Math.floor(totalSecs % 60);
console.log('seconds are:' + s.toString().padStart(2, '0'));

//console.log(s.toString.padStart(2, 0));

//get Hex color - readymade function

function getHexColor() {
  const randomcolor = Math.floor(Math.random() * 0xffffff);
  /**
   *
   * // ffffff = 6fs are for white color. 0xffffff = max hexadecimal number=16777215
   * now random function gives values between 0 < 16777215
   *
   * range of color from : #000000 - #FFFFFF
   */
  console.log(randomcolor);

  const hex = `#${randomcolor.toString(16).padStart(6, '0')}`;
  // console.log(hex);
  return hex;
}

console.log(getHexColor());

console.log((26).toString(16));
