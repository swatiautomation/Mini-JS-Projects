function printName(name) {
  console.log(`this is my name : ${name}`);
}

printName('swati');
printName('Sharma');
printName('Romy');
printName('sharma');
//********************************
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 10));

//******************************************

const converCToF = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

console.log(converCToF(90));

// *******************************************

const findOddEven = (num) => (num % 2 === 0 ? 'even number' : 'odd number');
console.log(findOddEven(8));

// **********************************************

const bigNumber = function findLargestNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c && b >= a) {
    return b;
  } else {
    return c;
  }
};

console.log(bigNumber(10, 10, 8));

// // OR using arrow function

const bigNum = (a, b, c) => Math.max(a, b, c);
console.log(bigNum(10, 100, 3));

// ********************************************

//count vowels in string

const totalCount = function countVowel(str) {
  let count = 0;

  for (const char of str) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }
  return count;
};

console.log(
  `total number of vowel in the string are : ${totalCount('Hello Swati Sharma')}`,
);

//*************************************************************************** */

// Reverse a string

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

console.log(`Revert of string is : ${reverseString('Hello World')}`);

//*************************************************************

// to get random number of 8 digit

const randomNum = Math.floor(Math.random() * 9) + 10000000;
console.log(randomNum);

console.log(`CCC${Math.floor(Math.random() * 900000) + 100000}`);
console.log(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`);

//Write a function that checks if a given string is a palindrome.
const isPalindrome = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
  result === str ? console.log('Palindrome') : console.log('NOT Palindrome');
};
isPalindrome('madami');

//OR
//reverse the string and compare it with the original string

const palindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
};
console.log(palindrome('madam'));

//Write a function that generates a random quote from an array of quotes.

const quoteGenerator = () => {
  const quotes = [
    'The best way to get started is to quit talking and begin doing.',
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    'If you are working on something exciting, it will keep you motivated.',
    'Success is not in what you have, but who you are.',
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
console.log(quoteGenerator());

//*********************************************************** */

// sum of number in an array

function sumOfArray(array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
}
console.log(`sum of array is : ${sumOfArray([1, 2, 3, 4])}`);

//************************************************************* */
//find max number in an array

function maxNumber(array) {
  let max = array[0]; // 5

  for (const num of array) {
    if (num > max) //1>5
    {
      max = num; //9
    }
  }
  return max;
}
console.log(`max number in array is : ${maxNumber([5, 2, 9, 1])}`);

//************************************************************

//Remove duplicate from array

// Using very basic approach

function removeDuplicate(array) {
  const uniqueArray = [];
  for (const num of array) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }
  return uniqueArray;
}
console.log(
  `array after removing duplicate is : ${removeDuplicate([1, 2, 2, 3, 4, 4])}`,
);

// OR using filter

function removeDuplicateSet(array) {
  return array.filter((num, index) => array.indexOf(num) == index); // 1,0 == 0 == 0  : 1
  // 1,1 == 1 == 0
  // 2,2  == 2 == 2
  // 3== 3
  // 3 == 4
  // 5 == 5 ==
}
console.log(
  `array after removing duplicate using filter : ${removeDuplicateSet([1, 1, 2, 3, 3, 4])}`,
);

// OR using Set
const removeDulicate = (array) => {
  return [...new Set(array)];
};
console.log(
  `array after removing duplicate using set is : ${removeDulicate([1, 2, 2, 3, 4, 4])}`,
);

// ************************************************************
// How many times each element appears in array

function countElement(array) {
  const count = {};
  for (const num of array) {
    count[num] ? count[num]++ : (count[num] = 1); // 1 , 2
  }
  return count;
}

console.log(countElement(['a', 'b', 'a', 'c', 'b', 'a']));

//********  */

// How to find duplicate elements in array

function findDuplicate(arr) {
  return arr.filter((value, index) => arr.indexOf(value) == index);
}
console.log(findDuplicate([1, 2, 2, 3, 4, 4, 5]));

//find if the target number is present in array or not

function findDupli(arr, target) {
  for (const num of arr) {
    num === target ? true : false;
  }
  return false;
}
console.log(findDupli([1, 2, 3, 4, 5], 6));

//*************************************** */
//Print duplicate value in arra

function printDuplicate(arr) {
  const duplicate = arr.filter((value, index) => arr.indexOf(value) !== index);
  return duplicate;
}
console.log(printDuplicate([1, 2, 2, 3, 4, 4, 5]));
//*************************************** */

// find max and min value in array - using reduce

array = [2, 3, 40, 5, 6, 1, 7, 8, 100];

const minFunction = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
};

console.log(`min value is : ${minFunction([1, 2, 3, 40, 5, 6, 7, 8, 100])}`);

//*************************************** */
//How to find second largest number in array and remove first largest number

const secondLargest = (arr) => {
  const maxNumber = Math.max(...arr);
  const index = arr.indexOf(maxNumber);
  arr.splice(index, 1);
  return Math.max(...arr);
};

console.log(secondLargest([1, 2, 3, 4, 5, 16, 17, 8, 9]));

//filter() = it will pick all matching items
const users = [
  { name: 'swati', age: 38 },
  { name: 'sharma', age: 35 },
  { name: 'romy', age: 5 },
  { name: 'john', age: 40 },
];

const filterItem = users.filter(({ age }) => age > 35);
console.log(filterItem);

// find() = it will pick only first matching item
const findUser = users.find((item) => {
  return item.age > 35;
});
console.log(findUser);

//*************************************** */

// find missing number in array of 1 to 10
const array11 = [1, 2, 3, 4, 8, 9, 10];
const missArray = [];

const missingArray = (arr) => {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  for (let i = minValue; i <= maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missArray.push(i);
    }
  }
  return missArray;
};

console.log(missingArray(array11));

// find odd and even number using loop

numberArray = [1, 2, 3, 4, 5];

const evenNumber = numberArray.filter((num) => num % 2 === 0);
const oddNumber = numberArray.filter((num) => num % 2 !== 0);

console.log(oddNumber);
console.log(evenNumber);

//find sum of all number in array
const result1 = numberArray.reduce((acc, curr) => acc + curr, 0);
console.log(`sum of all number in array is : ${result1}`);

// find the factorial of a number
const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(`factorial of number is : ${factorial(4)}`);

// find prime number in array

array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const findPrimeNumber = (arr) => {
  const prime = [];
  for (const num of arr) {
    if (num < 2) {
      console.log(`${num} is not prime number`);
    } else {
      let primeFlag = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          primeFlag = false;
          break;
        }
      }
      if (primeFlag) {
        prime.push(num);
      }
    }
  }
  return prime;
};
console.log(findPrimeNumber(array));

//************************************************************* */
const s = 'hello world';
const newString = s.charAt(0).toUpperCase() + s.substring(1);
const newValue = s[0].toUpperCase();
console.log(`${newValue}${s.slice(1)}`);
console.log(newString);

const d = new Date();

//let n = d.toDateString();

d.getMonth();
d.getFullYear();
d.getHours();
d.getMinutes();
d.getSeconds();
console.log(d.getDate());
//d = Math.floor(Date.now()/1000)
//let parsedN = parseInt(n);
//console.log(parsedN, typeof parsedN);
//console.log(n,typeof n);
//console.log(d.toString());
//console.log(d , typeof d    );

const arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr)
arr.unshift(6);

// arr.push (6);
//console.log(arr)
// arr.reverse();
// console.log(arr)
// arr.push(0);
// console.log(arr)

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//  const mergedArray = arr1.splice(4)
//  console.log(mergedArray);

const sliceArr = arr1.slice(0, 4);
console.log(sliceArr);

const arr3 = [...sliceArr, ...arr2];
console.log(arr3);

//  arr3.slice(5,1);
//     console.log(arr3);

//-----------------------------------------------
// Interview question : you are given a binary string : transform it into an altrnative binary string using operation :
// select any bit and flip it (change 0-> 1 and 1>0).
// Find the mininum number of operrations required to make this strig alternative. write program for this please.

function minOperation(str) {
  let alt1 = 0; // starts with 0
  let alt2 = 0; // starts with 1

  for (let i = 0; i < str.length; i++) {
    const expectedAlt1 = i % 2 === 0 ? '0' : '1';
    const expectedAlt2 = i % 2 === 0 ? '1' : '0';

    if (str[i] !== expectedAlt1) alt1++;
    if (str[i] !== expectedAlt2) alt2++;
  }

  return Math.min(alt1, alt2);
}

console.log(minOperation('1100')); // 2
console.log(minOperation('1001')); // 2
console.log(minOperation('1111')); // 2
