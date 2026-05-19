//Arrow Function   - 1
const square = (num) => num * num;
console.log(square(5)); // 25

//Arrow Function   - 2
const msg = () => 'Hello world';
console.log(msg()); // Hello world

//Arrow Function   - 3
const add = (a, b) => a + b;
console.log(add(3, 4));

//Arrow Function   - 4
const person = {
  firstname: 'swati',
  lastname: 'sharma',
};
const getname = ({ firstname, lastname }) => `${firstname} ${lastname}`;
console.log(getname(person)); //

//Arrow Function   - 5
const greet = (username = 'Swati', Age = '38') =>
  `Hello ${username} your age is ${Age}`;
const message = greet();
console.log(message);

//Arrow Function   - 6
//rest parameters ... varargs
const acc = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(acc(1, 2, 3, 4, 5));

//Arrow Function   - 7
const details = (browser = 'chrome', ...browsers) => {
  console.log(`Browser details : ${browser}`);
  console.log('other browsers:', browsers);
};

details();
details('FF', 'CC', 'Edge');

//Arrow Function   - 8
const value = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log(value(10, 45, 70));
