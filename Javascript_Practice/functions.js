//1. function declaration
function greet(a, b) {
  return a + b;
}
const sum = greet(4, 5);
console.log(sum);

const value = (a, b) => {
  return a + b;
};
console.log(value(5, 6));

const multiple = (c, d) => {
  return c * d;
};
console.log(multiple(3, 4));

//2. no parameter function
function greet1() {
  console.log('Hello there!');
}
greet1();

const print = () => console.log('Hello Arrow function');
console.log(print());

//3. function expression - anonymous function
const multi = function (x, y) {
  return x * y;
};
console.log(multi(3, 4));

//Arrow function expression
const divide = (p, z) => p / z;
console.log(divide(10, 2));

//4. function constructor
const sub = new Function('a', 'b', 'return a+b;');
console.log(sub(3, 5));

//IIFE - Immediately Invoked Function Expression
(function () {
  console.log('IIFE');
})();

// Generator function: using function* and yield keyword
function* generateNumber() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNumber();
console.log(gen.next().value);
console.log(gen.next().value);

//7. Annoymous function - no specific name
const number = [1, 2, 3, 4, 5];
const result = number.map((e) => e * e);
console.log(result);

//Recursive function
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//Higher order function
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}
function highorder(myFunc, a, b) {
  return myFunc(a, b);
}
console.log(highorder(addition, 5, 4));
console.log(highorder(subtraction, 10, 6));

//callback function
let arr = ['swati', 'sharma', 'hello'];
arr.forEach((val) => {
  console.log(val.toUpperCase());
});

let arrary = [1, 2, 3, 4, 5, 2];
const resultValue = arrary.forEach((val) => {
  console.log(val * val);
});

//using map
const final = arrary.map((val) => val * val);
console.log(final);
console.log(typeof final);

//filter
const rsl = arrary.filter((val) => val % 2 === 0);
console.log(`even array: ${rsl}`);

marks = [23, 45, 699, 100, 90];
const highMarks = marks.filter((val) => val >= 90);
console.log(`high marks are : ${highMarks}`);

//reduce function to calculate sum of array
const output = arrary.reduce((acc, curr) => acc + curr, 0);
console.log(`sum is : ${output}`);

const fec = arrary.reduce((res, curr) => res * curr, 1);
console.log(`multiplication is : ${fec}`);
