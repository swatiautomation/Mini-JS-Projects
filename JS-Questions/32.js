const arrNumbers = [1, 2, 3, 9, 9, 10];

const duplicate = arrNumbers.filter((char, index, arr) =>
  arr.indexOf(char) !== index ? char : null
);
console.log(duplicate);

const maxNum = function findMaximum(arr) {
  return arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
};
console.log(maxNum([1, 2, 30, 9, 9, 10, 20]));

const minNuum = function findMin(arr) {
  return arr.reduce((acc, curr) => (acc < curr ? acc : curr));
};

console.log(minNuum([10, 2, 30, 9, 9, 10, 20]));

function abc(arr) {
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  arr.splice(index, 1);
  const secondMax = Math.max(...arr);
  console.log('second max', secondMax);
}
abc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

const findName = function find(arr, name) {
  if (arr.includes(name)) {
    return true;
  }
  return false;
};
console.log(findName(['Swati', 'Sharmai', 'Aman'], 'Aman1'));

const empArray = [
  { name: 'ali', age: 32 },
  { name: 'john', age: 28 },
  { name: 'doe', age: 25 },
];

const filterValue = function findName(arr) {
  return arr.filter((item) => (item.age > 20 ? item : null));
};

console.log(filterValue(empArray));

const ageValue = function findValue(arr) {
  return arr.find((item) => (item.age > 20 ? item : null));
};

console.log(ageValue(empArray));

function missingNumber(arr) {
  let missingNum = [];
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingNum.push(i);
    }
  }
  return missingNum;
}
console.log(missingNumber([1, 2, 4, 6, 7, 9, 10]));

const evenOdd = function (arr) {
  let even = [];
  let odd = [];
  arr.filter((num) => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  return { even, odd };
};
console.log(evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function filterNumbers(arr) {
  let prime = [];
  let even = [];
  let odd = [];
  arr.forEach((num) => {
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      prime.push(num);
    } else if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  return { prime, even, odd };
}

console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

function printFizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.log('Fizz');
    } else if (i % 3 === 0) {
      console.log('Buzz');
    } else if (i % 2 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else {
      console.log(i);
    }
  }
}

printFizzBuzz(15);

const sum = function findSum(arr) {
  // let sum = 0;
  // arr.forEach((num) => (sum += num));
  // return sum;

  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum([1, 2, 3, 4, 5]));

function factorial(n) {
  // if (n === 0 || n === 1) {
  //   return 1;
  // }

  // return n * factorial(n - 1);

  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));

function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      // console.log(i);
      return false;
    }

    return true;
  }
}
console.log(isPrime(7));
console.log(isPrime(10));
const vowels = 'aeiouAEIOU';

function findVowels(str) {
  let count = [];

  // for (let i = 0; i < str.length; i++) {
  //   if (vowels.includes(str[i]) && !count.includes(str[i])) {
  //     count.push(str[i]);
  //   }
  // }
  // return count;

  for (let char of str) {
    if (vowels.includes(char) && !count.includes(char)) {
      count.push(char);
    }
  }
  return count;
}

console.log(findVowels('Swati Sharmai'));

function re(str) {
  const newStr = str.split('').reverse().join('');
  return str === newStr;
  // console.log(newStr);
}

console.log(re('madam'));
console.log(re('hello'));

// function ss(a, b) {

let a = 2;
let b = 4;

[a, b] = [b, a];
console.log(a, b);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

console.log([...arr1, ...arr2]);
arr1.sort((a, b) => a - b);
console.log(arr1);
arr2.sort((a, b) => a - b);
console.log(arr2);
//console.log(arr1.concat(arr2));
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

const num = 8;
for (let i = 0; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

const operator = '+';

function calculator(a, b, operator) {
  if (operator === '+') return a + b;
  else if (operator === '-') return a - b;
  else if (operator === '*') return a * b;
  else if (operator === '/') return a / b;
  else return 'invalid operator';
}

console.log(calculator(10, 5, '+'));
console.log(calculator(10, 5, '-'));

function compareArray(arr1, arr2) {
  const ar1 = arr1.sort((a, b) => a - b);
  console.log(ar1);
  const ar2 = arr2.sort((a, b) => a - b);
  console.log(ar2);
  // return ar1.join('') === ar2.join('');

  return ar1.every((value, index) => value === ar2[index]);
}

console.log(compareArray([1, 2, 3], [2, 1, 3]));
console.log(compareArray([1, 2, 3], [4, 5, 6, 7]));

function compare(arr1, arr2) {
  if (arr1.every((char) => arr2.indexOf(char) > -1)) {
    return true;
  }
  return false;
}

console.log(compare([1, 2, 3], [2, 1, 3]));
console.log(compare(['a', 'b', 'c'], ['c', 'b', 'a']));
console.log(compare([1, 2, 3], [4, 5, 6, 7]));
