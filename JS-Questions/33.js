const arr1 = [1, 2, 3, 3, 4, 5, 7];
const arr2 = [2, 2, 3, 3, 4, 5, 8];

const value = arr1.filter((value, index, arr) => arr2.includes(value));
const duplicateRemove = [...new Set(value)];
console.log(duplicateRemove);

const union = [...arr1, ...arr2];
const removeDup = [...new Set(union)];

console.log(removeDup);

const celciusTpFaherenheit = (celcium) => celcium * 1.8 + 32;
console.log(celciusTpFaherenheit(30));

const fahrenheitToCelcium = (fahrenheit) => (fahrenheit - 32) / 1.8;
console.log(fahrenheitToCelcium(86));

const convertKmToMiles = (km) => Math.round(km / 1.69);
console.log(convertKmToMiles(10));

const converMilesToKm = (miles) => miles * 1.69;
console.log(converMilesToKm(10));

const convertFirstLettrToUpperCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const str = 'hello world';
const newStr = str.split(' ');
const capitalizedStr = newStr
  .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
  .join(' ');
console.log(capitalizedStr);

console.log(convertFirstLettrToUpperCase('hello world'));

function fabonacci(n) {
  let a = 0;
  let b = 1;

  let nextTerm;

  for (let i = 0; i < n; i++) {
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    console.log(nextTerm);
  }
}

console.log(fabonacci(7));

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    // console.log('* ');
    // console.log('\n');
    console.log(j + '  ' + ' ');
  }
  console.log('\n');
}

function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
const array = [1, 2, 3, 4, 2, 2];
const targetValue = 5;
console.log(countOccurrences(array, targetValue));

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(result);
    console.log(`${num} x ${i} = ${result}`);
  }
  // return result;
}

printTable(5);

function isArmstrongNumber(num) {
  const numStr = num.toString().length;
  if (numStr !== 3) return false;
  for (let i = 0; i < numStr; i++) {}
}

const mulitple = 10;
const arr = [10, 11, 12, 13, 14, 15];

for (let c of arr) {
  let result = c * mulitple;
  console.log(`${c} * ${mulitple} = `, result);
}

const strGreeting = 'Hello, World! Welcome to JavaScript programming.';

const newStrGreeting = strGreeting.split(' ');

for (let word of newStrGreeting) {
  // console.log(newStrGreeting.indexOf(word));
  console.log(`index of ${word} is : ${newStrGreeting.indexOf(word)}`);
}

const grades = [25, 30, 45, 60, 75, 90, 100];

let total = 0;
let average = 0;
for (let grade of grades) {
  total += grade;
}
console.log(total);
console.log(`Average grade is : ${Math.round(total / grades.length)}`);

let bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
console.log(bakery);
let myBakery = bakery;

myBakery.push('croissant', 'brownie');
// myBakery.push('Granola');

console.log('Original bakery items: ', bakery);
console.log('My bakery items: ', myBakery);
console.table(bakery);
console.table(myBakery);

const bools = [true, false, true, true, false, false, true];

const result = bools.map((b) => {
  if (b === true) return Math.random();
  else return 0;
});

const result1 = bools.map((b) => (b ? Math.random() : 0));
console.log(result1);

const price = [100, 200, 300, 400, 500, 1.23, 2.34, 3.45];

const taxedPrice = price.map((price) =>
  price > 10 ? Math.round(price * 1.2) : price
);
console.table(taxedPrice);

const items = ['Book', 'Pen', 'Pencil', 'Eraser', 'Ruler', 'mouse', 'mouse'];
const revisedArray = items.map((item) =>
  item === 'mouse' ? 'mice' : item + 's'
);
//   if(item === 'mouse') return 'mice';
// else
//   { return
//   item + 's'})
console.log(revisedArray);

const row = [10, 20, 30, 40, 50];

const matrix = row.map((row) => {
  let array1 = [];
  array1.push(row);
  return array1;
});
console.log(matrix);

const countries = [
  'Finland',
  'United States',
  'South Korea',
  'Norway',
  'Iceland',
];

const filteredCountries = countries.filter((country) => country.includes(' '));
console.log(filteredCountries);

const prices = [1.2, 2.5, 40.0, 5.5, 60.0, 7.5, 5.2];
const filteredPrices = prices.filter((price) => price * 1.15 < 10);
console.log(filteredPrices);

const values = [
  [1, 2, 3],
  [0, 0, 1],
  [4, 5, 6],
  [7, 8, 9],
  [0, 1, 2],
];

const filteredValues = values.filter((value) => value.includes(2));
console.log(filteredValues);

const nums = [10, 20, 30, 40, 50];
const resultNums = nums.map((num) => num * 2).filter((n, index, arr) => n > 50);
console.log(resultNums);

const companies = ['google', 'apple', 'microsoft', 'amazon', 'facebook'];
const modifiedCompanies = companies.reduce((acc, company, index, arr) => {
  if (company.startsWith('a')) {
    return acc;
  }
  if (index === arr.length - 1) {
    return acc + company;
  }

  return acc + company + ', ';
}, '');
console.log(modifiedCompanies);

const priceArray = [1.2, 2.5, 40.0, 5.5, 60.0, 7.5, 5.2];
const taxedPriceArray = priceArray.reduce((acc, price) => {
  if (price > 6) {
    return acc;
  } else {
    return acc + price * 1.2;
  }
}, 0);

console.log(taxedPriceArray);

const itemsArray = [
  'Book',
  'Pen',
  'Pencil',
  'Eraser',
  'Ruler',
  'mouse',
  'mouse',
];
const resultArr = itemsArray
  .map((item) => item.toUpperCase())
  .reduce((acc, curr, arr) => {
    return acc + curr + ' ';
  }, '');
console.log(resultArr);

const numbers = [10, 30, 50, 70, 90];
const finale = numbers
  .map((num) => num * num)
  .filter((num) => num > 1000)
  .reduce((acc, num) => {
    return acc + num;
  }, 0);

console.log(finale);
