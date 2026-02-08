const num = [1, 2, 2, 4];
const fruits = ['orange', 'apple', 'banana', 'apple', 'orange', 'grapes'];

fruits.push('Pineapple');
console.log(fruits);
fruits.pop();
console.log(fruits);

const newArray1 = [...fruits, ...num];
console.log(newArray1);

const newArray2 = num.splice(1, 2);
console.log(newArray2);
console.log(num);
console.log(num.shift(1, 1));

const pop = [5, 1, 2, 3, 4, 5, 5];
const newpop = pop.slice(0, 4);
console.log(newpop);
console.log(pop);
console.log('-----------------------------------');

console.log(fruits.sort());

console.log('first index of apple :' + fruits.indexOf('apple')); //1
console.log('last index of apple :' + fruits.lastIndexOf('apple')); //undefined
console.log('first index of orange :' + fruits.indexOf('orange')); //1
console.log('last index of orange :' + fruits.lastIndexOf('orange')); //undefined

console.log('first index of banana :' + fruits.indexOf('banana')); //2
console.log('last index of banana :' + fruits.lastIndexOf('banana')); //2

console.log('first index of grapes :' + fruits.indexOf('grapes')); //1
console.log('last index of grapes :' + fruits.lastIndexOf('grapes')); //undefined

const findDuplicate = fruits.filter(
  (item, index) => fruits.indexOf(item) !== index,
);
console.log(findDuplicate);

//array to string
const fruitString = fruits.toString();
console.log(fruitString);
console.log(typeof fruitString);

//concat
const veg = ['carrot', 'potato'];
const allFood = fruits.concat(veg);
console.log(allFood);

//push
//push is used to add elements to the end of an array
fruits.push('kiwi');
console.log(fruits);

//pop
//pop is used to remove the last element from an array
fruits.pop('kiwi');
console.log(fruits);

//shift
//shift is used to remove the first element from an array
let f = fruits.shift();
console.log(f);
console.log(fruits);

//unshift
//unshift is used to add elements to the beginning of an array
fruits.unshift('kiwi', 'pineapple');
console.log(fruits);
fruits.unshift('Mango');
console.log(fruits);

//splice
//splice is used to add or remove elements from an array. splice changed the original array
fruits.splice(1, 2, 'dog'); // if last argument mentioned then add that item in the array otherwise remove the item from the array
console.log('splice method ' + fruits);

//slice
//slice is used to create a new array from an existing array.It does not change the original array
let pop1 = [5, 1, 2, 3, 4, 5, 5];
let newpop1 = pop1.slice(0, 2);
console.log(newpop1);
console.log('-----------------------------------');

//concat
//concat is used to merge two or more arrays
let ab = pop.concat(6, 7, 9);
console.log(ab);

//indexOf
//indexOf is used to get the index of an element in an array
let index = pop.indexOf(4);
console.log(index);

//get index of second element
let index1 = pop.indexOf(5, 2);
console.log(index1);

//includes
//includes is used to check if an element is present in an array
let flag = pop.includes(4, 1);
console.log(flag);

//map
//map is used to create a new array by applying a function to each element of an array
let n = [1, 2, 3, 4, 5, 6, 7];
const newArray = n.map((number) => number * 2);
console.log('map method : ' + newArray); //undefined

for (const number of n) {
  console.log('advance for loop : ' + number * 2);
}

//practice for slice and splice and push

const companies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Netflix'];
companies.shift();
console.log(companies);
companies.splice(0, 1);
console.log(companies);
companies.splice(2, 1, 'ola');
console.log(companies);
companies.splice(2, 1, 'Amazon');
companies.push('Amazon');
console.log(companies);

// Write a function that takes an array of objects representing books and returns an array of the titles of the books that have been read.
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: ' sThe Road Ahead',
    author: 'will Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'sThe Road Ahead',
    author: 'qill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

library[0].title = 'The Road Aheaad';
library[1].title = 'The Road Aheadd';
library[2].title = 'The Road Aheaaaad';

const { title: firstBookTitle } = library[0];
console.log(firstBookTitle);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

const parsedLibrary = JSON.parse(libraryJSON);
console.log(parsedLibrary);

// console.log(library);

// Write a function that takes a temperature in Fahrenheit and returns the temperature in Celsius.
const getCelcius = (tempInFahrenheit) => ((tempInFahrenheit - 32) * 5) / 9;
console.log(`The Temperature is : ${getCelcius(32)} \xB0C`);

// Write a function that takes an array of numbers and returns the minimum and maximum values in the array.
const minMax = (...arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
};
console.log(minMax(1, 2, 3, 4, 5, 6, 7, 8, 9));

const areaOfRectangle = (length, width) => {
  const area = length * width;
  console.log(`Area of rectangle is : ${area}`);
};

areaOfRectangle(5, 10);

// Write a function that takes two numbers and an operator as arguments and returns the result of the operation.
const calulator = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operation';
  }
};
console.log(calulator(10, 5, '+'));
console.log(calulator(10, 5, '-'));
console.log(calulator(10, 5, '*'));
console.log(calulator(10, 5, '/'));
console.log(calulator(10, 5, '%'));

console.log('-------------------FizzBuzz-------------------');

let i = 1;
while (i <= 10) {
  if (i % 15 === 0) {
    console.log('multiple of 3 and 5 : FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('multiple of 3 : Fizz');
  } else if (i % 5 === 0) {
    console.log('multiple of 5 : Buzz');
  }
  i++;
}

// function fizzBuzz(num) {
//   let i = 1;
//   switch (i <= num) {
//     case 0:
//       i % 15 === 0;
//       console.log(`${i}multiple of 3 and 5 : FizzBuzz`);
//       break;
//     case 1:
//       i % 3 === 0;
//       console.log('multiple of 3 : Fizz');
//       break;
//     case 2:
//       i % 5 === 0;
//       console.log('multiple of 5 : Buzz');
//       break;
//     default:
//       console.log(i);
//   }
//   i++;
// }
// fizzBuzz(10);

// print the names of people who are 25 years old or younger in the following array of objects
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    age: 28,
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    phone: '987-654-3210',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob.brown@example.com',
    phone: '555-555-5555',
    age: 30,
  },
  {
    firstName: 'Charlie',
    lastName: 'Davis',
    email: 'charlie.davis@example.com',
    phone: '444-444-4444',
    age: 35,
  },
];

const youngPeople = people
  .filter(({ age }) => age <= 25)
  .map(({ firstName, lastName, email, phone }) => ({
    info: `name: ${firstName} ${lastName}
           email: ${email}
           phone: ${phone} `,
  }));

console.log(youngPeople);

// sum of positive numbers in an array
const array = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
const positiveArray = array
  .filter((num) => num > 0)
  .reduce((acc, curr) => (acc += curr), 0);
console.log(positiveArray);

// capitalize first letter of each word in an array

const words = ['level', 'world', 'radar', 'hello', 'madam', 'python'];
const capitilizedLetter = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
});
console.log(capitilizedLetter);
