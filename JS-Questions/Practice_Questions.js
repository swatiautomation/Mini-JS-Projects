function findLastEle(arr) {
  return arr.pop();
}
console.log(findLastEle([2, 3, 4]));
console.log(findLastEle([2, 3, , 5, 7, 9]));
console.log(findLastEle([2, 3]));

let arr1 = [100, 2, 3, 80];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

console.log(Math.floor(Math.random() * 19));

let filterArr = [1, 2, 'swati', 'ram'];

const result = filterArr.filter((item) => {
  return typeof item === 'string';
});
console.log(result);

console.log(Math.max(...arr1));
const res = arr1.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
console.log(res);

let obj = [
  {
    name: 'swati',
    age: 13,
    color: 'fair',
    gender: 'male',
  },
  {
    name: 'kumar',
    age: 130,
    color: 'fair',
    gender: 'female',
  },
  {
    name: 'kumari',
    age: 130,
    color: 'fair',
    gender: 'male',
  },
  {},
];

console.log(Object.keys(obj).length);

let result1 = obj.filter((obj) => {
  return obj.gender === 'male';
});
console.log(result1);

let arrStr = ['sati', 'inku', 'navneet', 'viom'];

let finalArr = arrStr.map((item) => item.toUpperCase());
console.log(finalArr);

let result2 = obj.filter((obj) => {
  return Object.keys(obj).length === 0;
});
console.log(result2);

console.log(arrStr.join(','));

let multiArr = [1, 2, [2, 3, [4, 5, [9]]]];
console.log(multiArr.flat(Infinity));
console.log(multiArr.flat(1));

let numArr = [1, 2, 3, 'swati'];
let resultArray = numArr.every((item) => {
  return typeof item === 'number';
});
console.log(resultArray);

function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(5));
console.log(isPrime(12));
console.log(isPrime(7));
console.log(isPrime(90));

console.log(parseInt('123s.34px'));
console.log(Number('123.34'));

console.log();
console.log(0.1 + 0.2 === 0.3);
console.log(Number((0.1 + 0.2).toFixed(2)) === 0.3);
console.log(Number((0.1 + 0.2).toFixed(2)));

let str = 'My name is swati sharma';
console.log(str.split('').reverse().join(''));
console.log(str.slice(11, 17));
const words = str.split(' ');
console.log(words);
console.log(words.slice(3, 4));
console.log(words.reverse().join(' '));

// console.log(str.slice(3, 7));
// console.log(str.slice(3));

// console.log(words.slice(3));
// console.log(words.splice(3));
// console.log();
// let newArr = words.splice(3, 1, 'test');

// console.log(`value of newarr -` + newArr);

// console.log(words);

let arr = [1, 2, 's', 3, 'w', 'a', 7];
let resultA = arr
  .filter((item) => {
    return typeof item === 'number';
  })
  .reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
console.log(resultA);

let num = 123;
console.log(Number.isInteger(num));
console.log(num % 1 === 0);

console.log('===========================================');

const resultNum = function reverseANum(num) {
  return num.toString().split('').reverse().join('');
};
console.log(resultNum(456));

const resultString = function sortStr(str) {
  return str.split(' ').sort().join(' ');
};
console.log(resultString('swati sharma'));

function changeFirstLetter(str) {
  return str.split(' ').map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
}
console.log(changeFirstLetter('swati sharma is so beautiful'));
let str1 = 'swati sharma is so beautiful';
console.log(str1.split(' ').slice(1, 2));

function findOccurance(str) {
  let obj = {};

  str.split('').map((item) => {
    if (obj.hasOwnProperty(item)) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });
  //  console.log(obj); // print in object format

  let maxNum = Math.max(...Object.values(obj));
  //  console.log(newArr);
  let arr = Object.entries(obj);
  //  console.log(arr);
  let matchedFrequency = arr.filter((item) => {
    return item[1] === maxNum;
  });
  // console.log(matchedFrequency);
}

console.log(findOccurance('swati sharma swatiaaaa'));

let array = [1, 3, 40, 5, 20];
let randomIndex = Math.floor(Math.random() * array.length);

for (let index in array) {
  [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
}
console.log(array);
