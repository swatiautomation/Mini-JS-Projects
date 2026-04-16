const counter = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const generator = counter();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//============================================
/*const countTo10 = function* () {
  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  // yield 5;
  // yield 6;
  // yield 7;
  // yield 8;
  // yield 9;
  // yield 10;

  let i = 1;
  while (i <= 10) {
    yield i;
    i++;
  }
};

const generator1 = countTo10();

for (const gen of generator1) {
  console.log(gen);
}*/

//============================================
/*const randomNumber = function* () {
  //const randomNum = Math.random();
  while (true) {
    yield Math.random();
  }
};

const generator2 = randomNumber();
for (let i = 0; i <= 10; i++) {
  console.log(generator2.next().value);
}

let i = 0;
while (i < 10) {
  console.log(generator2.next().value);
  i++;
}*/

//============================================

// const randomAmountFromRange = function* (amount, min, max) {
//   let i = 1;
//   while (i <= amount) {
//     yield Math.floor(Math.random() * (max - min + 1) + min);
//     i++;
//   }
// };
// const generator3 = randomAmountFromRange(3, 10, 20);
// for (const gen of generator3) {
//   console.log(gen);
// }

//============================================

const getRandomNumbers = function* () {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * 11);
  }
};

const groceryList = function* () {
  const grocery = ['Milk', 'Eggs', 'Bread', 'Butter', 'Cheese'];
  const groceryLength = grocery.length;
  for (let i = 0; i < groceryLength; i++) {
    const randomNum = Math.random() * grocery.length;
    const removeItem = grocery.splice(randomNum, 1)[0];
    yield removeItem;
  }
};

const generator4 = getRandomNumbers();
const generator5 = groceryList();

for (let i = 0; i < 5; i++) {
  const randomNum = generator4.next().value;
  const grocery = generator5.next().value;
  console.log(`${randomNum}  ${grocery}`);
}
