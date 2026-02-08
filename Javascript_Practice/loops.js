// Traditional for loop - index based
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('-----------------------------------');

for (let i = 0; i < 10; i++) {
  console.log('repeat = hello world');
}
console.log('-----------------------------------');

let sum = 0;
let n = 7;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log('sum =' + sum);

//for...of loop: to iterate array
const array = [1, 2, 3, 4];
for (const e of array) {
  console.log(e);
}
console.log('-----------------------------------');

//while loop

let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}
console.log('-----------------------------------');

//do-while

let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 9);

// print 1 to 100 : print hi whenever you see the multiplication of 5;
let b = 0;
while (b <= 100) {
  console.log(b);
  if (b % 5 == 0) {
    console.log('hi');
    break;
  }
  b++;
}

//let browser = "chrome";
const browsers = ['chrome', 'firefox', 'edge'];
for (const b of browsers) {
  console.log(b);
  if (b === 'chrome') {
    console.log('launch browser');
    break;
  }
}

//for...in loop - to iterate object
const users = {
  name: 'swati sharma',
  age: '30',
  city: 'Reading',
};

for (const key in users) {
  console.log(key + ':' + users[key]);
}

string = 'Hello World';
for (const char of string) {
  console.log(char);
}
