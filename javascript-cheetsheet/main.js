/*const name = 'Swati,sharma,rajat';
const age = 38;

console.log(`My name is ${name} and i am ${age} years old.`);

//String methods
console.log(name.indexOf('sharma'));
console.log(name.lastIndexOf('a'));
console.log(name.charAt(0));
console.log(name.charAt(name.length - 1));
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0, 4).toUpperCase());
console.log(name.split(','));

//Array
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(fruits);
console.log(fruits[0]);

fruits.push('mangoes');
console.log(fruits);
fruits.pop();
console.log(fruits);
Array.isArray(fruits)
  ? console.log('This is an array')
  : console.log('This is not an array');

console.log(fruits.indexOf('oranges'));

//Object literals

const person = {
  firstName: 'Swati',
  lastName: 'Sharma',
  age: 38,
  hobbies: ['reading', 'traveling', 'coding'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NA',
  },
};
console.log(person);

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(firstName, lastName, city);

person.email = 'swati.sharma@example.com';
console.log(person);

//Arrays of objects

const todo = [
  { id: 1, text: 'Take out trash', isCompleted: false },
  { id: 2, text: 'Meeting with boss', isCompleted: true },
  { id: 3, text: 'Dentist appointment', isCompleted: true },
];

console.log(todo[1].text);

console.log(JSON.stringify(todo));

for (let j = 0; j < todo.length; j++) {
  console.log(todo[j].text);
}
//or
for (let k of todo) {
  console.log(k.text);
}

//loops

for (let i = 2; i < 8; i += 2) {
  console.log(i);
}

//while loop
let i = 2;
while (i < 8) {
  console.log(i);
  i += 2;
}

//High order array methods
//forEach
//map
//filter

//forEach

todo.forEach(function (k) {
  console.log(k.text);
});

//map
const todoText = todo.map(function (k) {
  return k.text;
});
console.log(todoText);

//filter
const todoCompleted = todo
  .filter(function (k) {
    return k.isCompleted === true;
  })
  .map(function (l) {
    return l.id;
  });
console.log(todoCompleted);

//conditional
const x = 11;
const result = x > 10 ? true : false;
console.log(result);

//function

const res = function addNum(a, b) {
  return a + b;
};
console.log(res(5, 6));

//OR using arrow function

const addNum = (a, b) => a + b;
console.log(addNum(3, 4));

//constructor function

function person1(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

const p = new person1('Swati', 'Sharma', '1985-10-15');
const p1 = new person1('mary', 'Sharma', '1985-10-15');
const p2 = new person1('john', 'Sharma', '1985-10-15');
console.log(p);*/

//single element selector
const nameInput = document.getElementById('name');
console.log(nameInput);

//or

const nameInputQuery = document.querySelector('#name');
console.log(nameInputQuery);

const lists = document.querySelector('.items');
console.log(lists);
//lists.forEach((i) => console.log(i));

//lists.remove();
//lists.lastElementChild.remove();

// lists.firstElementChild.textContent = 'Hello';

// lists.children[1].innerText = 'Brad';

// lists.lastElementChild.innerHTML = '<h1>Hello</h1>';

const button = document.querySelector('.btn');
//button.style.background = 'blue';

// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   // console.log('button clicked');
//   document.querySelector('#my-form').style.background = '#ccc';
//   //document.querySelector('body').classList.add('bg-dark');

//   document.querySelector('.items').lastElementChild.textContent = 'Hello';
// });

// button.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   // console.log('button clicked');
//   document.querySelector('#my-form').style.background = '#ccc';
//   //document.querySelector('body').classList.add('bg-dark');

//   document.querySelector('.items').lastElementChild.textContent = 'Hello';
// });

const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
const items = document.querySelector('.items');

//form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // console.log(name.value);
  if (name.value === '' || email.value === '') {
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error');

    setTimeout(() => msg.remove(), 3000);
  } else {
    msg.innerHTML = 'Thank you for submitting';
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    users.appendChild(li);

    //clear fields
    name.value = '';
    email.value = '';
  }
}
