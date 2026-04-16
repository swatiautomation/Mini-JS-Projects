/*
Write javascript program to extract the first half of a string of even length.
**/

function extractFirstHalf(str) {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  }
  return 'String length is not even';
}

console.log(extractFirstHalf('JavaScript')); // Output: "Java"
console.log(extractFirstHalf('HelloWorld'));
console.log(extractFirstHalf('abcd')); // Output: "ab"
console.log(extractFirstHalf('abc')); // Output: "String length is not even"

//=====================================

let num = 12345;
let blankArr = [];
while (num > 0) {
  blankArr.push(num % 10);
  num = Math.floor(num / 10);
}

console.log(blankArr.reverse());

function splitNum(num) {
  return num
    .toString()
    .split('')
    .map((n) => n);
}

console.log(splitNum(123457));

console.log((12.23).toString().replace('.', ''));
let str = (12.23).toString();
let decimalLen = str.includes('.') ? str.split('.')[1].length : 0;
let result = 12.23 * Math.pow(10, decimalLen);
console.log(result);

let res = str.split('.')[0] + str.split('.')[1];
//console.log(res);

console.log(Math.floor(12.23));
console.log(12.23 - Math.floor(12.23));

let number = 125.3455;

const firstpat = number.toString().split('.')[0].length;
const secondpart = number.toString().split('.')[1].length;

console.log(firstpat, secondpart);

function join(arr1, arr2) {
  let a = arr1.join('');
  let b = arr2.join('');
  let result = Number(`${a}.${b}`);
  return result;
}

console.log(join([1, 2], [3, 4]));

//---------------------------
//LCM  and HCF

//get factors of number

let num1 = 12;
let emptyarr = [];
for (let i = 1; i <= Math.sqrt(num1); i++) {
  if (num % i === 0) {
    emptyarr.push(i);
  }
  if (i !== num1 / i) {
    emptyarr.push(num1 / i);
  }
}
const sortedArr = emptyarr.sort((a, b) => b - a);
console.log(sortedArr);
const finalRes = sortedArr.filter((item) => {
  return 16 % item === 0;
});
console.log(Math.max(...finalRes));

//get Multiples of number
function getMultiple(num, limit) {
  let emptyArr = [];
  for (let i = num; i <= limit; i += num) {
    emptyArr.push(i);
  }
  return emptyArr;
}

//console.log(getMultiple(5, 30));
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//console.log(isPrime(10));

// for (let i = 1; i <= 10; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

function printPrime(num) {
  for (let i = 0; i <= num; i++) {
    let isPrime = true;

    if (i <= 1) isPrime = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}
//printPrime(10);

//-------------------------------------
function printFabonacchi(num) {
  if (num === 0) return 0;

  if (num === 1) return 1;
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);
  let next;

  let emptyArr = [];
  for (let i = 2; i < num; i++) {
    next = a + b;
    a = b;
    b = next;
    emptyArr.push(next);
  }
  console.log(emptyArr);
  if (emptyArr.includes(21)) {
    console.log('yes');
  } else {
    console.log('no');
  }
  // console.log(next);
}

printFabonacchi(5);

function findFact(num) {
  let emptyArr = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      emptyArr.push(i);
      num = num / i;
    }
  }
  if (num > 1) emptyArr.push(num);

  const newSet = new Set(emptyArr);
  const newArr = [...newSet];
  console.log(emptyArr);
  // console.log(newSet);
  // console.log(newArr);
  const filterdRes = newArr.reduce((acc, curr) => {
    return acc * curr;
  });
  console.log(filterdRes);
}
findFact(18);

//--------------------------
//string methods problems

function stringReverse(str) {
  let emptyStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    emptyStr += str[i];
  }
  if (emptyStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(stringReverse('hello'));
console.log(stringReverse('racecar'));

function countChar(str) {
  return str.split('').reduce((acc, curr) => {
    //  console.log(acc[curr]);
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    // console.log(Math.max(Object.values(acc)));
    const values = Object.values(acc);
    const maxValue = Math.max(...values);
    const key = Object.keys(acc).find((item) => acc[item] === maxValue);
    console.log(key);

    return acc;
  }, {});
}

console.log(countChar('bananann'));

let str1 = 'listenil';
let str2 = 'silent';

let arr1 = str1.split('');
let arr2 = str2.split('').sort().join('');
console.log(arr1, arr2);

// const results = arr1.map((item) => {
//   return arr2.includes(item);
// });

//console.log(results);

function charFrequency(str1, str2) {
  if (str1.length !== str2.length) return false;
  let emptyObject = {};

  for (let char of str1) {
    emptyObject[char] = (emptyObject[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!emptyObject[char]) return false;
    emptyObject[char]--;
  }
  return true;
}

console.log(charFrequency('silent', 'listen'));

const filteritem = arr1.filter((item, index) => {
  return arr1.indexOf(item) !== index;
});
console.log(filteritem);
