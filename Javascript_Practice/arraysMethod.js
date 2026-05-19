//map
//map is used to iterate over an array and modify the array elements
//map always return new array
const numbers = [1, 2, 3];

const double = numbers.map((e) => e * 2);
console.log(double);

const names = ['john', 'jane', 'doe'];
names.map((name) => {
  name = name.toUpperCase();
  console.log(name);
});

//filter
//filter is used to iterate over an array and filter out elements based on a condition
let array = [1, 2, 3, 3, 3, 3, 4, 5, 6];
let ar = array.filter((e1) => e1 % 2 === 0);
console.log(ar);

const filteredName = names.filter((names) => names.startsWith('j'));
console.log(filteredName);

//reduce
//reduce is used to reduce the array to a single value
let sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//find max number in array
let array1 = [10, 20, 30, 40, 50];
let maxnum = array1.reduce((max, num) => (max > num ? max : num));
console.log(`max number is : ${maxnum}`);

//find minimum number in array
let minnum = array1.reduce((min, num) => (min < num ? min : num));
console.log(`min number is : ${minnum}`);

const cartItem = [
  { name: 'john', price: 500 },
  { name: 'john1', price: 100 },
  { name: 'john2', price: 5000 },
  { name: 'john3', price: 50 },
];
let totalcost = cartItem.reduce((total, { price }) => total + price, 0);
console.log(`total cost is : ${totalcost}`);

const arr = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(...new Set(arr));

//every()
//every() method checks if all elements in an array pass a test (provided as a function).
let num = [1, 2, 3, 4, 5, 30, 5];
let flag = num.every((e) => e < 10);
console.log(flag);

//some()
//some() method checks if any of the elements in an array pass a test (provided as a function).
let flag1 = num.some((j) => j % 2 === 0);
console.log(flag1);

//find()
//filter() method creates a new array with all elements that pass the test implemented by the provided function.
let total1 = num.find((t) => t % 2 === 0);
console.log(total1);

//indexOf
//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexs = num.indexOf(1);
console.log(indexs);

//lastIndexOf
//lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
let last = num.lastIndexOf(5);
console.log(last);

//reverse
//reverse() method reverses the elements in an array.
let rev = num.reverse();
console.log(rev);

//sort
//sort() method sorts the elements of an array in place and returns the sorted array.
let s = num.sort();
console.log(s);
